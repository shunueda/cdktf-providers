// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metadata DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata;
  /**
  * FlowCollectorSpec defines the desired state of FlowCollector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#spec DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec;
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#annotations DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug {
  /**
  * env allows passing custom environment variables to the NetObserv Agent. Useful for passing some very concrete performance-tuning options (such as GOGC, GOMAXPROCS) that shouldn't be publicly exposed as part of the FlowCollector descriptor, as they are only useful in edge debug and support scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#env DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebugToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebugToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf {
  /**
  * cacheActiveTimeout is the max period during which the reporter will aggregate flows before sending. Increasing 'cacheMaxFlows' and 'cacheActiveTimeout' can decrease the network traffic overhead and the CPU load, however you can expect higher memory consumption and an increased latency in the flow collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cache_active_timeout DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cache_active_timeout}
  */
  readonly cacheActiveTimeout?: string;
  /**
  * cacheMaxFlows is the max number of flows in an aggregate; when reached, the reporter sends the flows. Increasing 'cacheMaxFlows' and 'cacheActiveTimeout' can decrease the network traffic overhead and the CPU load, however you can expect higher memory consumption and an increased latency in the flow collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cache_max_flows DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cache_max_flows}
  */
  readonly cacheMaxFlows?: number;
  /**
  * Debug allows setting some aspects of the internal configuration of the eBPF agent. This section is aimed exclusively for debugging and fine-grained performance optimizations (for example GOGC, GOMAXPROCS env vars). Users setting its values do it at their own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#debug DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#debug}
  */
  readonly debug?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug;
  /**
  * excludeInterfaces contains the interface names that will be excluded from flow tracing. If an entry is enclosed by slashes (such as '/br-/'), it will match as regular expression, otherwise it will be matched as a case-sensitive string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#exclude_interfaces DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#exclude_interfaces}
  */
  readonly excludeInterfaces?: string[];
  /**
  * imagePullPolicy is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * interfaces contains the interface names from where flows will be collected. If empty, the agent will fetch all the interfaces in the system, excepting the ones listed in ExcludeInterfaces. If an entry is enclosed by slashes (such as '/br-/'), it will match as regular expression, otherwise it will be matched as a case-sensitive string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#interfaces DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * kafkaBatchSize limits the maximum size of a request in bytes before being sent to a partition. Ignored when not using Kafka. Default: 1MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka_batch_size DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka_batch_size}
  */
  readonly kafkaBatchSize?: number;
  /**
  * logLevel defines the log level for the NetObserv eBPF Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * privileged mode for the eBPF Agent container. In general this setting can be ignored or set to false: in that case, the operator will set granular capabilities (BPF, PERFMON, NET_ADMIN, SYS_RESOURCE) to the container, to enable its correct operation. If for some reason these capabilities cannot be set (for example old kernel version not knowing CAP_BPF) then you can turn on this mode for more global privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#privileged DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * resources are the compute resources required by this container. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources;
  /**
  * sampling rate of the flow reporter. 100 means one flow on 100 is sent. 0 or 1 means all flows are sampled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#sampling DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#sampling}
  */
  readonly sampling?: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_active_timeout: cdktf.stringToTerraform(struct!.cacheActiveTimeout),
    cache_max_flows: cdktf.numberToTerraform(struct!.cacheMaxFlows),
    debug: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebugToTerraform(struct!.debug),
    exclude_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeInterfaces),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaces),
    kafka_batch_size: cdktf.numberToTerraform(struct!.kafkaBatchSize),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesToTerraform(struct!.resources),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_active_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cacheActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_max_flows: {
      value: cdktf.numberToHclTerraform(struct!.cacheMaxFlows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug",
    },
    exclude_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kafka_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.kafkaBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheActiveTimeout = this._cacheActiveTimeout;
    }
    if (this._cacheMaxFlows !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMaxFlows = this._cacheMaxFlows;
    }
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._excludeInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInterfaces = this._excludeInterfaces;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._kafkaBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBatchSize = this._kafkaBatchSize;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = undefined;
      this._cacheMaxFlows = undefined;
      this._debug.internalValue = undefined;
      this._excludeInterfaces = undefined;
      this._imagePullPolicy = undefined;
      this._interfaces = undefined;
      this._kafkaBatchSize = undefined;
      this._logLevel = undefined;
      this._privileged = undefined;
      this._resources.internalValue = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = value.cacheActiveTimeout;
      this._cacheMaxFlows = value.cacheMaxFlows;
      this._debug.internalValue = value.debug;
      this._excludeInterfaces = value.excludeInterfaces;
      this._imagePullPolicy = value.imagePullPolicy;
      this._interfaces = value.interfaces;
      this._kafkaBatchSize = value.kafkaBatchSize;
      this._logLevel = value.logLevel;
      this._privileged = value.privileged;
      this._resources.internalValue = value.resources;
      this._sampling = value.sampling;
    }
  }

  // cache_active_timeout - computed: false, optional: true, required: false
  private _cacheActiveTimeout?: string; 
  public get cacheActiveTimeout() {
    return this.getStringAttribute('cache_active_timeout');
  }
  public set cacheActiveTimeout(value: string) {
    this._cacheActiveTimeout = value;
  }
  public resetCacheActiveTimeout() {
    this._cacheActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActiveTimeoutInput() {
    return this._cacheActiveTimeout;
  }

  // cache_max_flows - computed: false, optional: true, required: false
  private _cacheMaxFlows?: number; 
  public get cacheMaxFlows() {
    return this.getNumberAttribute('cache_max_flows');
  }
  public set cacheMaxFlows(value: number) {
    this._cacheMaxFlows = value;
  }
  public resetCacheMaxFlows() {
    this._cacheMaxFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxFlowsInput() {
    return this._cacheMaxFlows;
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // exclude_interfaces - computed: false, optional: true, required: false
  private _excludeInterfaces?: string[]; 
  public get excludeInterfaces() {
    return this.getListAttribute('exclude_interfaces');
  }
  public set excludeInterfaces(value: string[]) {
    this._excludeInterfaces = value;
  }
  public resetExcludeInterfaces() {
    this._excludeInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfacesInput() {
    return this._excludeInterfaces;
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // kafka_batch_size - computed: false, optional: true, required: false
  private _kafkaBatchSize?: number; 
  public get kafkaBatchSize() {
    return this.getNumberAttribute('kafka_batch_size');
  }
  public set kafkaBatchSize(value: number) {
    this._kafkaBatchSize = value;
  }
  public resetKafkaBatchSize() {
    this._kafkaBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBatchSizeInput() {
    return this._kafkaBatchSize;
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

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator {
  /**
  * namespace where the config map is going to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperatorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperatorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
    }
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes {
  /**
  * containerName defines the name of the container to configure for IPFIX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#container_name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * daemonSetName defines the name of the DaemonSet controlling the OVN-Kubernetes pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#daemon_set_name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#daemon_set_name}
  */
  readonly daemonSetName?: string;
  /**
  * namespace where OVN-Kubernetes pods are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    daemon_set_name: cdktf.stringToTerraform(struct!.daemonSetName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable): any {
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
    daemon_set_name: {
      value: cdktf.stringToHclTerraform(struct!.daemonSetName),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._daemonSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonSetName = this._daemonSetName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._daemonSetName = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._daemonSetName = value.daemonSetName;
      this._namespace = value.namespace;
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

  // daemon_set_name - computed: false, optional: true, required: false
  private _daemonSetName?: string; 
  public get daemonSetName() {
    return this.getStringAttribute('daemon_set_name');
  }
  public set daemonSetName(value: string) {
    this._daemonSetName = value;
  }
  public resetDaemonSetName() {
    this._daemonSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonSetNameInput() {
    return this._daemonSetName;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix {
  /**
  * cacheActiveTimeout is the max period during which the reporter will aggregate flows before sending
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cache_active_timeout DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cache_active_timeout}
  */
  readonly cacheActiveTimeout?: string;
  /**
  * cacheMaxFlows is the max number of flows in an aggregate; when reached, the reporter sends the flows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cache_max_flows DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cache_max_flows}
  */
  readonly cacheMaxFlows?: number;
  /**
  * clusterNetworkOperator defines the settings related to the OpenShift Cluster Network Operator, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cluster_network_operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cluster_network_operator}
  */
  readonly clusterNetworkOperator?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator;
  /**
  * forceSampleAll allows disabling sampling in the IPFIX-based flow reporter. It is not recommended to sample all the traffic with IPFIX, as it might generate cluster instability. If you REALLY want to do that, set this flag to true. Use at your own risk. When it is set to true, the value of 'sampling' is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#force_sample_all DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#force_sample_all}
  */
  readonly forceSampleAll?: boolean | cdktf.IResolvable;
  /**
  * ovnKubernetes defines the settings of the OVN-Kubernetes CNI, when available. This configuration is used when using OVN's IPFIX exports, without OpenShift. When using OpenShift, refer to the 'clusterNetworkOperator' property instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ovn_kubernetes DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ovn_kubernetes}
  */
  readonly ovnKubernetes?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes;
  /**
  * sampling is the sampling rate on the reporter. 100 means one flow on 100 is sent. To ensure cluster stability, it is not possible to set a value below 2. If you really want to sample every packet, which might impact the cluster stability, refer to 'forceSampleAll'. Alternatively, you can use the eBPF Agent instead of IPFIX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#sampling DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#sampling}
  */
  readonly sampling?: number;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_active_timeout: cdktf.stringToTerraform(struct!.cacheActiveTimeout),
    cache_max_flows: cdktf.numberToTerraform(struct!.cacheMaxFlows),
    cluster_network_operator: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperatorToTerraform(struct!.clusterNetworkOperator),
    force_sample_all: cdktf.booleanToTerraform(struct!.forceSampleAll),
    ovn_kubernetes: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetesToTerraform(struct!.ovnKubernetes),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_active_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cacheActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_max_flows: {
      value: cdktf.numberToHclTerraform(struct!.cacheMaxFlows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_network_operator: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperatorToHclTerraform(struct!.clusterNetworkOperator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator",
    },
    force_sample_all: {
      value: cdktf.booleanToHclTerraform(struct!.forceSampleAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ovn_kubernetes: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetesToHclTerraform(struct!.ovnKubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheActiveTimeout = this._cacheActiveTimeout;
    }
    if (this._cacheMaxFlows !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMaxFlows = this._cacheMaxFlows;
    }
    if (this._clusterNetworkOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNetworkOperator = this._clusterNetworkOperator?.internalValue;
    }
    if (this._forceSampleAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSampleAll = this._forceSampleAll;
    }
    if (this._ovnKubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovnKubernetes = this._ovnKubernetes?.internalValue;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = undefined;
      this._cacheMaxFlows = undefined;
      this._clusterNetworkOperator.internalValue = undefined;
      this._forceSampleAll = undefined;
      this._ovnKubernetes.internalValue = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheActiveTimeout = value.cacheActiveTimeout;
      this._cacheMaxFlows = value.cacheMaxFlows;
      this._clusterNetworkOperator.internalValue = value.clusterNetworkOperator;
      this._forceSampleAll = value.forceSampleAll;
      this._ovnKubernetes.internalValue = value.ovnKubernetes;
      this._sampling = value.sampling;
    }
  }

  // cache_active_timeout - computed: false, optional: true, required: false
  private _cacheActiveTimeout?: string; 
  public get cacheActiveTimeout() {
    return this.getStringAttribute('cache_active_timeout');
  }
  public set cacheActiveTimeout(value: string) {
    this._cacheActiveTimeout = value;
  }
  public resetCacheActiveTimeout() {
    this._cacheActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActiveTimeoutInput() {
    return this._cacheActiveTimeout;
  }

  // cache_max_flows - computed: false, optional: true, required: false
  private _cacheMaxFlows?: number; 
  public get cacheMaxFlows() {
    return this.getNumberAttribute('cache_max_flows');
  }
  public set cacheMaxFlows(value: number) {
    this._cacheMaxFlows = value;
  }
  public resetCacheMaxFlows() {
    this._cacheMaxFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxFlowsInput() {
    return this._cacheMaxFlows;
  }

  // cluster_network_operator - computed: false, optional: true, required: false
  private _clusterNetworkOperator = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperatorOutputReference(this, "cluster_network_operator");
  public get clusterNetworkOperator() {
    return this._clusterNetworkOperator;
  }
  public putClusterNetworkOperator(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixClusterNetworkOperator) {
    this._clusterNetworkOperator.internalValue = value;
  }
  public resetClusterNetworkOperator() {
    this._clusterNetworkOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkOperatorInput() {
    return this._clusterNetworkOperator.internalValue;
  }

  // force_sample_all - computed: false, optional: true, required: false
  private _forceSampleAll?: boolean | cdktf.IResolvable; 
  public get forceSampleAll() {
    return this.getBooleanAttribute('force_sample_all');
  }
  public set forceSampleAll(value: boolean | cdktf.IResolvable) {
    this._forceSampleAll = value;
  }
  public resetForceSampleAll() {
    this._forceSampleAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSampleAllInput() {
    return this._forceSampleAll;
  }

  // ovn_kubernetes - computed: false, optional: true, required: false
  private _ovnKubernetes = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetesOutputReference(this, "ovn_kubernetes");
  public get ovnKubernetes() {
    return this._ovnKubernetes;
  }
  public putOvnKubernetes(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOvnKubernetes) {
    this._ovnKubernetes.internalValue = value;
  }
  public resetOvnKubernetes() {
    this._ovnKubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovnKubernetesInput() {
    return this._ovnKubernetes.internalValue;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent {
  /**
  * ebpf describes the settings related to the eBPF-based flow reporter when the 'agent.type' property is set to 'EBPF'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ebpf DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ebpf}
  */
  readonly ebpf?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf;
  /**
  * ipfix describes the settings related to the IPFIX-based flow reporter when the 'agent.type' property is set to 'IPFIX'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ipfix DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ipfix}
  */
  readonly ipfix?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix;
  /**
  * type selects the flows tracing agent. Possible values are 'EBPF' (default) to use NetObserv eBPF agent, 'IPFIX' to use the legacy IPFIX collector. 'EBPF' is recommended in most cases as it offers better performances and should work regardless of the CNI installed on the cluster. 'IPFIX' works with OVN-Kubernetes CNI (other CNIs could work if they support exporting IPFIX, but they would require manual configuration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebpf: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfToTerraform(struct!.ebpf),
    ipfix: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixToTerraform(struct!.ipfix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebpf: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfToHclTerraform(struct!.ebpf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf",
    },
    ipfix: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixToHclTerraform(struct!.ipfix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebpf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebpf = this._ebpf?.internalValue;
    }
    if (this._ipfix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfix = this._ipfix?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebpf.internalValue = undefined;
      this._ipfix.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebpf.internalValue = value.ebpf;
      this._ipfix.internalValue = value.ipfix;
      this._type = value.type;
    }
  }

  // ebpf - computed: false, optional: true, required: false
  private _ebpf = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpfOutputReference(this, "ebpf");
  public get ebpf() {
    return this._ebpf;
  }
  public putEbpf(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentEbpf) {
    this._ebpf.internalValue = value;
  }
  public resetEbpf() {
    this._ebpf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebpfInput() {
    return this._ebpf.internalValue;
  }

  // ipfix - computed: false, optional: true, required: false
  private _ipfix = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfixOutputReference(this, "ipfix");
  public get ipfix() {
    return this._ipfix;
  }
  public putIpfix(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentIpfix) {
    this._ipfix.internalValue = value;
  }
  public resetIpfix() {
    this._ipfix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixInput() {
    return this._ipfix.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource {
  /**
  * container is the name of the container in the pods of the scaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#container DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#container}
  */
  readonly container: string;
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal {
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#api_version DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kind DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject {
  /**
  * describedObject specifies the descriptions of a object,such as kind,name apiVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#described_object DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#described_object}
  */
  readonly describedObject: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject;
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods {
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource {
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable): any {
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._target.internalValue = value.target;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics {
  /**
  * containerResource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing a single container in each pod of the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source. This is an alpha feature and can be enabled by the HPAContainerMetrics feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#container_resource DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#container_resource}
  */
  readonly containerResource?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource;
  /**
  * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#external DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#external}
  */
  readonly external?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal;
  /**
  * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#object DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#object}
  */
  readonly object?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject;
  /**
  * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#pods DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods;
  /**
  * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#resource DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#resource}
  */
  readonly resource?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource;
  /**
  * type is the type of metric source. It should be one of 'ContainerResource', 'External', 'Object', 'Pods' or 'Resource', each mapping to a matching field in the object. Note: 'ContainerResource' type is available on when the feature-gate HPAContainerMetrics is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalToTerraform(struct!.external),
    object: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectToTerraform(struct!.object),
    pods: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource",
    },
    external: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal",
    },
    object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject",
    },
    pods: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods",
    },
    resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler {
  /**
  * maxReplicas is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#max_replicas DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * metrics used by the pod autoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics[] | cdktf.IResolvable;
  /**
  * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured. Scaling is active as long as at least one metric value is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#min_replicas DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Status describe the desired status regarding deploying an horizontal pod autoscaler DISABLED will not deploy an horizontal pod autoscaler ENABLED will deploy an horizontal pod autoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#status DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._status = value.status;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming {
  /**
  * enable the console plugin port-to-service name translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * portNames defines additional port names to use in the console. Example: portNames: {'3100': 'loki'}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#port_names DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#port_names}
  */
  readonly portNames?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNamingToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    port_names: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portNames),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNamingToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_names: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portNames),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._portNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNames = this._portNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._portNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._portNames = value.portNames;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // port_names - computed: false, optional: true, required: false
  private _portNames?: { [key: string]: string }; 
  public get portNames() {
    return this.getStringMapAttribute('port_names');
  }
  public set portNames(value: { [key: string]: string }) {
    this._portNames = value;
  }
  public resetPortNames() {
    this._portNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNamesInput() {
    return this._portNames;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters {
  /**
  * default defines whether this filter should be active by default or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#default DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * filter is a set of keys and values to be set when this filter is selected. Each key can relate to a list of values using a coma-separated string. Example: filter: {'src_namespace': 'namespace1,namespace2'}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#filter DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#filter}
  */
  readonly filter: { [key: string]: string };
  /**
  * name of the filter, that will be displayed in Console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filter),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin {
  /**
  * autoscaler spec of a horizontal pod autoscaler to set up for the plugin Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#autoscaler DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#autoscaler}
  */
  readonly autoscaler?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler;
  /**
  * imagePullPolicy is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * logLevel for the console plugin backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * port is the plugin service port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * portNaming defines the configuration of the port-to-service name translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#port_naming DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#port_naming}
  */
  readonly portNaming?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming;
  /**
  * quickFilters configures quick filter presets for the Console plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#quick_filters DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#quick_filters}
  */
  readonly quickFilters?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters[] | cdktf.IResolvable;
  /**
  * register allows, when set to true, to automatically register the provided console plugin with the OpenShift Console operator. When set to false, you can still register it manually by editing console.operator.openshift.io/cluster. E.g: oc patch console.operator.openshift.io cluster --type='json' -p '[{'op': 'add', 'path': '/spec/plugins/-', 'value': 'netobserv-plugin'}]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#register DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#register}
  */
  readonly register: boolean | cdktf.IResolvable;
  /**
  * replicas defines the number of replicas (pods) to start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#replicas DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * resources, in terms of compute resources, required by this container. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaler: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerToTerraform(struct!.autoscaler),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    port: cdktf.numberToTerraform(struct!.port),
    port_naming: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNamingToTerraform(struct!.portNaming),
    quick_filters: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersToTerraform, false)(struct!.quickFilters),
    register: cdktf.booleanToTerraform(struct!.register),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaler: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerToHclTerraform(struct!.autoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_naming: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNamingToHclTerraform(struct!.portNaming),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming",
    },
    quick_filters: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersToHclTerraform, false)(struct!.quickFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersList",
    },
    register: {
      value: cdktf.booleanToHclTerraform(struct!.register),
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
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portNaming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNaming = this._portNaming?.internalValue;
    }
    if (this._quickFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickFilters = this._quickFilters?.internalValue;
    }
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaler.internalValue = undefined;
      this._imagePullPolicy = undefined;
      this._logLevel = undefined;
      this._port = undefined;
      this._portNaming.internalValue = undefined;
      this._quickFilters.internalValue = undefined;
      this._register = undefined;
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
      this._autoscaler.internalValue = value.autoscaler;
      this._imagePullPolicy = value.imagePullPolicy;
      this._logLevel = value.logLevel;
      this._port = value.port;
      this._portNaming.internalValue = value.portNaming;
      this._quickFilters.internalValue = value.quickFilters;
      this._register = value.register;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
    }
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscalerOutputReference(this, "autoscaler");
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginAutoscaler) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_naming - computed: false, optional: true, required: false
  private _portNaming = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNamingOutputReference(this, "port_naming");
  public get portNaming() {
    return this._portNaming;
  }
  public putPortNaming(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginPortNaming) {
    this._portNaming.internalValue = value;
  }
  public resetPortNaming() {
    this._portNaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNamingInput() {
    return this._portNaming.internalValue;
  }

  // quick_filters - computed: false, optional: true, required: false
  private _quickFilters = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFiltersList(this, "quick_filters", false);
  public get quickFilters() {
    return this._quickFilters;
  }
  public putQuickFilters(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginQuickFilters[] | cdktf.IResolvable) {
    this._quickFilters.internalValue = value;
  }
  public resetQuickFilters() {
    this._quickFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickFiltersInput() {
    return this._quickFilters.internalValue;
  }

  // register - computed: false, optional: false, required: true
  private _register?: boolean | cdktf.IResolvable; 
  public get register() {
    return this.getBooleanAttribute('register');
  }
  public set register(value: boolean | cdktf.IResolvable) {
    this._register = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
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
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginResources) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix {
  /**
  * Address of the IPFIX external receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target_host DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target_host}
  */
  readonly targetHost: string;
  /**
  * Port for the IPFIX external receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target_port DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target_port}
  */
  readonly targetPort: number;
  /**
  * Transport protocol ('TCP' or 'UDP') to be used for the IPFIX connection, defaults to 'TCP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#transport DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#transport}
  */
  readonly transport?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfixToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_host: cdktf.stringToTerraform(struct!.targetHost),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
    transport: cdktf.stringToTerraform(struct!.transport),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfixToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_host: {
      value: cdktf.stringToHclTerraform(struct!.targetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHost = this._targetHost;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetHost = undefined;
      this._targetPort = undefined;
      this._transport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetHost = value.targetHost;
      this._targetPort = value.targetPort;
      this._transport = value.transport;
    }
  }

  // target_host - computed: false, optional: false, required: true
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl {
  /**
  * Reference to the secret or config map containing the client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#client_id_reference DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#client_id_reference}
  */
  readonly clientIdReference?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference;
  /**
  * Reference to the secret or config map containing the client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#client_secret_reference DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#client_secret_reference}
  */
  readonly clientSecretReference?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference;
  /**
  * Type of SASL authentication to use, or 'DISABLED' if SASL is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_reference: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReferenceToTerraform(struct!.clientIdReference),
    client_secret_reference: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReferenceToTerraform(struct!.clientSecretReference),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReferenceToHclTerraform(struct!.clientIdReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference",
    },
    client_secret_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReferenceToHclTerraform(struct!.clientSecretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdReference = this._clientIdReference?.internalValue;
    }
    if (this._clientSecretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretReference = this._clientSecretReference?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = undefined;
      this._clientSecretReference.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = value.clientIdReference;
      this._clientSecretReference.internalValue = value.clientSecretReference;
      this._type = value.type;
    }
  }

  // client_id_reference - computed: false, optional: true, required: false
  private _clientIdReference = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReferenceOutputReference(this, "client_id_reference");
  public get clientIdReference() {
    return this._clientIdReference;
  }
  public putClientIdReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientIdReference) {
    this._clientIdReference.internalValue = value;
  }
  public resetClientIdReference() {
    this._clientIdReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdReferenceInput() {
    return this._clientIdReference.internalValue;
  }

  // client_secret_reference - computed: false, optional: true, required: false
  private _clientSecretReference = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReferenceOutputReference(this, "client_secret_reference");
  public get clientSecretReference() {
    return this._clientSecretReference;
  }
  public putClientSecretReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslClientSecretReference) {
    this._clientSecretReference.internalValue = value;
  }
  public resetClientSecretReference() {
    this._clientSecretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretReferenceInput() {
    return this._clientSecretReference.internalValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls {
  /**
  * caCert defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert;
  /**
  * enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * insecureSkipVerify allows skipping client-side verification of the server certificate If set to true, CACert field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * userCert defines the user certificate reference, used for mTLS (you can ignore it when using regular, one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka {
  /**
  * address of the Kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#address DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * SASL authentication configuration. [Unsupported (*)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#sasl DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#sasl}
  */
  readonly sasl?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl;
  /**
  * tls client configuration. When using TLS, verify that the address matches the Kafka port used for TLS, generally 9093. Note that, when eBPF agents are used, Kafka certificate needs to be copied in the agent namespace (by default it's netobserv-privileged).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls;
  /**
  * kafka topic to use. It must exist, NetObserv will not create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#topic DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#topic}
  */
  readonly topic: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    sasl: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslToTerraform(struct!.sasl),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsToTerraform(struct!.tls),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
      this._topic = value.topic;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters {
  /**
  * IPFIX configuration, such as the IP address and port to send enriched IPFIX flows to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ipfix DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ipfix}
  */
  readonly ipfix?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix;
  /**
  * kafka configuration, such as address or topic, to send enriched flows to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka}
  */
  readonly kafka?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka;
  /**
  * 'type' selects the type of exporters. The available options are 'KAFKA' and 'IPFIX'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipfix: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfixToTerraform(struct!.ipfix),
    kafka: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaToTerraform(struct!.kafka),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipfix: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfixToHclTerraform(struct!.ipfix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix",
    },
    kafka: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipfix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfix = this._ipfix?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipfix.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipfix.internalValue = value.ipfix;
      this._kafka.internalValue = value.kafka;
      this._type = value.type;
    }
  }

  // ipfix - computed: false, optional: true, required: false
  private _ipfix = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfixOutputReference(this, "ipfix");
  public get ipfix() {
    return this._ipfix;
  }
  public putIpfix(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersIpfix) {
    this._ipfix.internalValue = value;
  }
  public resetIpfix() {
    this._ipfix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixInput() {
    return this._ipfix.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference {
  /**
  * File name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#file}
  */
  readonly file?: string;
  /**
  * Name of the config map or secret containing the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the config map or secret containing the file. If omitted, the default is to use the same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret is copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Type for the file reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReferenceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReferenceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl {
  /**
  * Reference to the secret or config map containing the client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#client_id_reference DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#client_id_reference}
  */
  readonly clientIdReference?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference;
  /**
  * Reference to the secret or config map containing the client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#client_secret_reference DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#client_secret_reference}
  */
  readonly clientSecretReference?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference;
  /**
  * Type of SASL authentication to use, or 'DISABLED' if SASL is not used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id_reference: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReferenceToTerraform(struct!.clientIdReference),
    client_secret_reference: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReferenceToTerraform(struct!.clientSecretReference),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReferenceToHclTerraform(struct!.clientIdReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference",
    },
    client_secret_reference: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReferenceToHclTerraform(struct!.clientSecretReference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdReference = this._clientIdReference?.internalValue;
    }
    if (this._clientSecretReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretReference = this._clientSecretReference?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = undefined;
      this._clientSecretReference.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdReference.internalValue = value.clientIdReference;
      this._clientSecretReference.internalValue = value.clientSecretReference;
      this._type = value.type;
    }
  }

  // client_id_reference - computed: false, optional: true, required: false
  private _clientIdReference = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReferenceOutputReference(this, "client_id_reference");
  public get clientIdReference() {
    return this._clientIdReference;
  }
  public putClientIdReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientIdReference) {
    this._clientIdReference.internalValue = value;
  }
  public resetClientIdReference() {
    this._clientIdReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdReferenceInput() {
    return this._clientIdReference.internalValue;
  }

  // client_secret_reference - computed: false, optional: true, required: false
  private _clientSecretReference = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReferenceOutputReference(this, "client_secret_reference");
  public get clientSecretReference() {
    return this._clientSecretReference;
  }
  public putClientSecretReference(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslClientSecretReference) {
    this._clientSecretReference.internalValue = value;
  }
  public resetClientSecretReference() {
    this._clientSecretReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretReferenceInput() {
    return this._clientSecretReference.internalValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls {
  /**
  * caCert defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert;
  /**
  * enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * insecureSkipVerify allows skipping client-side verification of the server certificate If set to true, CACert field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * userCert defines the user certificate reference, used for mTLS (you can ignore it when using regular, one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka {
  /**
  * address of the Kafka server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#address DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * SASL authentication configuration. [Unsupported (*)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#sasl DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#sasl}
  */
  readonly sasl?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl;
  /**
  * tls client configuration. When using TLS, verify that the address matches the Kafka port used for TLS, generally 9093. Note that, when eBPF agents are used, Kafka certificate needs to be copied in the agent namespace (by default it's netobserv-privileged).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls;
  /**
  * kafka topic to use. It must exist, NetObserv will not create it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#topic DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#topic}
  */
  readonly topic: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    sasl: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslToTerraform(struct!.sasl),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsToTerraform(struct!.tls),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
      this._topic = value.topic;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCertToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCertToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls {
  /**
  * caCert defines the reference of the certificate for the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ca_cert DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ca_cert}
  */
  readonly caCert?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert;
  /**
  * enable TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#enable DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * insecureSkipVerify allows skipping client-side verification of the server certificate If set to true, CACert field will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#insecure_skip_verify DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * userCert defines the user certificate reference, used for mTLS (you can ignore it when using regular, one-way TLS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#user_cert DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#user_cert}
  */
  readonly userCert?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCertToTerraform(struct!.caCert),
    enable: cdktf.booleanToTerraform(struct!.enable),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    user_cert: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCertToTerraform(struct!.userCert),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_cert: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCertToHclTerraform(struct!.userCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._userCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCert = this._userCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
      this._enable = undefined;
      this._insecureSkipVerify = undefined;
      this._userCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
      this._enable = value.enable;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._userCert.internalValue = value.userCert;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsCaCert) {
    this._caCert.internalValue = value;
  }
  public resetCaCert() {
    this._caCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // user_cert - computed: false, optional: true, required: false
  private _userCert = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCertOutputReference(this, "user_cert");
  public get userCert() {
    return this._userCert;
  }
  public putUserCert(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsUserCert) {
    this._userCert.internalValue = value;
  }
  public resetUserCert() {
    this._userCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertInput() {
    return this._userCert.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki {
  /**
  * AuthToken describe the way to get a token to authenticate to Loki. DISABLED will not send any token with the request. HOST will use the local pod service account to authenticate to Loki. FORWARD will forward user token, in this mode, pod that are not receiving user request like the processor will use the local pod service account. Similar to HOST mode. When using the Loki Operator, set it to 'HOST' or 'FORWARD'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#auth_token DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#auth_token}
  */
  readonly authToken?: string;
  /**
  * batchSize is max batch size (in bytes) of logs to accumulate before sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#batch_size DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * batchWait is max time to wait before sending a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#batch_wait DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#batch_wait}
  */
  readonly batchWait?: string;
  /**
  * maxBackoff is the maximum backoff time for client connection between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#max_backoff DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#max_backoff}
  */
  readonly maxBackoff?: string;
  /**
  * maxRetries is the maximum number of retries for client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#max_retries DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * minBackoff is the initial backoff time for client connection between retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#min_backoff DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#min_backoff}
  */
  readonly minBackoff?: string;
  /**
  * querierURL specifies the address of the Loki querier service, in case it is different from the Loki ingester URL. If empty, the URL value will be used (assuming that the Loki ingester and querier are in the same server). When using the Loki Operator, do not set it, since ingestion and queries use the Loki gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#querier_url DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#querier_url}
  */
  readonly querierUrl?: string;
  /**
  * staticLabels is a map of common labels to set on each flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#static_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#static_labels}
  */
  readonly staticLabels?: { [key: string]: string };
  /**
  * statusURL specifies the address of the Loki /ready /metrics /config endpoints, in case it is different from the Loki querier URL. If empty, the QuerierURL value will be used. This is useful to show error messages and some context in the frontend. When using the Loki Operator, set it to the Loki HTTP query frontend service, for example https://loki-query-frontend-http.netobserv.svc:3100/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#status_url DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#status_url}
  */
  readonly statusUrl?: string;
  /**
  * tenantID is the Loki X-Scope-OrgID that identifies the tenant for each request. When using the Loki Operator, set it to 'network', which corresponds to a special tenant mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#tenant_id DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * timeout is the maximum time connection / request limit. A Timeout of zero means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#timeout DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * tls client configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls;
  /**
  * url is the address of an existing Loki service to push the flows to. When using the Loki Operator, set it to the Loki gateway service with the 'network' tenant set in path, for example https://loki-gateway-http.netobserv.svc:8080/api/logs/v1/network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#url DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    batch_wait: cdktf.stringToTerraform(struct!.batchWait),
    max_backoff: cdktf.stringToTerraform(struct!.maxBackoff),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    min_backoff: cdktf.stringToTerraform(struct!.minBackoff),
    querier_url: cdktf.stringToTerraform(struct!.querierUrl),
    static_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticLabels),
    status_url: cdktf.stringToTerraform(struct!.statusUrl),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_wait: {
      value: cdktf.stringToHclTerraform(struct!.batchWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_backoff: {
      value: cdktf.stringToHclTerraform(struct!.maxBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_backoff: {
      value: cdktf.stringToHclTerraform(struct!.minBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    querier_url: {
      value: cdktf.stringToHclTerraform(struct!.querierUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    status_url: {
      value: cdktf.stringToHclTerraform(struct!.statusUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._batchWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchWait = this._batchWait;
    }
    if (this._maxBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoff = this._maxBackoff;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackoff = this._minBackoff;
    }
    if (this._querierUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.querierUrl = this._querierUrl;
    }
    if (this._staticLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticLabels = this._staticLabels;
    }
    if (this._statusUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUrl = this._statusUrl;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._batchSize = undefined;
      this._batchWait = undefined;
      this._maxBackoff = undefined;
      this._maxRetries = undefined;
      this._minBackoff = undefined;
      this._querierUrl = undefined;
      this._staticLabels = undefined;
      this._statusUrl = undefined;
      this._tenantId = undefined;
      this._timeout = undefined;
      this._tls.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._batchSize = value.batchSize;
      this._batchWait = value.batchWait;
      this._maxBackoff = value.maxBackoff;
      this._maxRetries = value.maxRetries;
      this._minBackoff = value.minBackoff;
      this._querierUrl = value.querierUrl;
      this._staticLabels = value.staticLabels;
      this._statusUrl = value.statusUrl;
      this._tenantId = value.tenantId;
      this._timeout = value.timeout;
      this._tls.internalValue = value.tls;
      this._url = value.url;
    }
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // batch_wait - computed: false, optional: true, required: false
  private _batchWait?: string; 
  public get batchWait() {
    return this.getStringAttribute('batch_wait');
  }
  public set batchWait(value: string) {
    this._batchWait = value;
  }
  public resetBatchWait() {
    this._batchWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchWaitInput() {
    return this._batchWait;
  }

  // max_backoff - computed: false, optional: true, required: false
  private _maxBackoff?: string; 
  public get maxBackoff() {
    return this.getStringAttribute('max_backoff');
  }
  public set maxBackoff(value: string) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_backoff - computed: false, optional: true, required: false
  private _minBackoff?: string; 
  public get minBackoff() {
    return this.getStringAttribute('min_backoff');
  }
  public set minBackoff(value: string) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }

  // querier_url - computed: false, optional: true, required: false
  private _querierUrl?: string; 
  public get querierUrl() {
    return this.getStringAttribute('querier_url');
  }
  public set querierUrl(value: string) {
    this._querierUrl = value;
  }
  public resetQuerierUrl() {
    this._querierUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierUrlInput() {
    return this._querierUrl;
  }

  // static_labels - computed: false, optional: true, required: false
  private _staticLabels?: { [key: string]: string }; 
  public get staticLabels() {
    return this.getStringMapAttribute('static_labels');
  }
  public set staticLabels(value: { [key: string]: string }) {
    this._staticLabels = value;
  }
  public resetStaticLabels() {
    this._staticLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticLabelsInput() {
    return this._staticLabels;
  }

  // status_url - computed: false, optional: true, required: false
  private _statusUrl?: string; 
  public get statusUrl() {
    return this.getStringAttribute('status_url');
  }
  public set statusUrl(value: string) {
    this._statusUrl = value;
  }
  public resetStatusUrl() {
    this._statusUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUrlInput() {
    return this._statusUrl;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug {
  /**
  * env allows passing custom environment variables to the NetObserv Agent. Useful for passing some very concrete performance-tuning options (such as GOGC, GOMAXPROCS) that shouldn't be publicly exposed as part of the FlowCollector descriptor, as they are only useful in edge debug and support scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#env DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebugToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebugToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
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
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource {
  /**
  * container is the name of the container in the pods of the scaling target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#container DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#container}
  */
  readonly container: string;
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._name = value.name;
      this._target.internalValue = value.target;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal {
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject {
  /**
  * apiVersion is the API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#api_version DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kind DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject {
  /**
  * describedObject specifies the descriptions of a object,such as kind,name apiVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#described_object DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#described_object}
  */
  readonly describedObject: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject;
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    described_object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectToHclTerraform(struct!.describedObject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject",
    },
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObjectOutputReference(this, "described_object");
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#operator DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#values DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_expressions DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#match_labels DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric {
  /**
  * name is the name of the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#selector DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable): any {
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
    selector: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selector.internalValue = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods {
  /**
  * metric identifies the target metric by name and selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metric DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metric}
  */
  readonly metric: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToTerraform(struct!.metric),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric",
    },
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_utilization DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#average_value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#value DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.averageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    average_value: {
      value: cdktf.stringToHclTerraform(struct!.averageValue),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource {
  /**
  * name is the name of the resource in question.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * target specifies the target value for the given metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#target DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#target}
  */
  readonly target: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToTerraform(struct!.target),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable): any {
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
    target: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._target.internalValue = value.target;
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

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics {
  /**
  * containerResource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing a single container in each pod of the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source. This is an alpha feature and can be enabled by the HPAContainerMetrics feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#container_resource DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#container_resource}
  */
  readonly containerResource?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource;
  /**
  * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#external DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#external}
  */
  readonly external?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal;
  /**
  * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#object DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#object}
  */
  readonly object?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject;
  /**
  * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#pods DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods;
  /**
  * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the 'pods' source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#resource DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#resource}
  */
  readonly resource?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource;
  /**
  * type is the type of metric source. It should be one of 'ContainerResource', 'External', 'Object', 'Pods' or 'Resource', each mapping to a matching field in the object. Note: 'ContainerResource' type is available on when the feature-gate HPAContainerMetrics is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resource: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToTerraform(struct!.containerResource),
    external: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToTerraform(struct!.external),
    object: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToTerraform(struct!.object),
    pods: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToTerraform(struct!.pods),
    resource: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToTerraform(struct!.resource),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceToHclTerraform(struct!.containerResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource",
    },
    external: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal",
    },
    object: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject",
    },
    pods: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsToHclTerraform(struct!.pods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods",
    },
    resource: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResource = this._containerResource?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = undefined;
      this._external.internalValue = undefined;
      this._object.internalValue = undefined;
      this._pods.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResource.internalValue = value.containerResource;
      this._external.internalValue = value.external;
      this._object.internalValue = value.object;
      this._pods.internalValue = value.pods;
      this._resource.internalValue = value.resource;
      this._type = value.type;
    }
  }

  // container_resource - computed: false, optional: true, required: false
  private _containerResource = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResourceOutputReference(this, "container_resource");
  public get containerResource() {
    return this._containerResource;
  }
  public putContainerResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsContainerResource) {
    this._containerResource.internalValue = value;
  }
  public resetContainerResource() {
    this._containerResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceInput() {
    return this._containerResource.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // object - computed: false, optional: true, required: false
  private _object = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPodsOutputReference(this, "pods");
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsPods) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler {
  /**
  * maxReplicas is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#max_replicas DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * metrics used by the pod autoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable;
  /**
  * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod. minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured. Scaling is active as long as at least one metric value is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#min_replicas DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Status describe the desired status regarding deploying an horizontal pod autoscaler DISABLED will not deploy an horizontal pod autoscaler ENABLED will deploy an horizontal pod autoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#status DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    metrics: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToTerraform, false)(struct!.metrics),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._minReplicas = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._metrics.internalValue = value.metrics;
      this._minReplicas = value.minReplicas;
      this._status = value.status;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided {
  /**
  * certFile defines the path to the certificate file name within the config map or secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_file DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * certKey defines the path to the certificate private key file name within the config map or secret. Omit when the key is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#cert_key DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#cert_key}
  */
  readonly certKey?: string;
  /**
  * name of the config map or secret containing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace of the config map or secret containing certificates. If omitted, assumes same namespace as where NetObserv is deployed. If the namespace is different, the config map or the secret will be copied so that it can be mounted as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * type for the certificate reference: 'configmap' or 'secret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvidedToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    cert_key: cdktf.stringToTerraform(struct!.certKey),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvidedToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key: {
      value: cdktf.stringToHclTerraform(struct!.certKey),
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._certKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKey = this._certKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._certKey = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._certKey = value.certKey;
      this._name = value.name;
      this._namespace = value.namespace;
      this._type = value.type;
    }
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

  // cert_key - computed: false, optional: true, required: false
  private _certKey?: string; 
  public get certKey() {
    return this.getStringAttribute('cert_key');
  }
  public set certKey(value: string) {
    this._certKey = value;
  }
  public resetCertKey() {
    this._certKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyInput() {
    return this._certKey;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls {
  /**
  * TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#provided DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#provided}
  */
  readonly provided?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided;
  /**
  * Select the type of TLS configuration 'DISABLED' (default) to not configure TLS for the endpoint, 'PROVIDED' to manually provide cert file and a key file, and 'AUTO' to use OpenShift auto generated certificate using annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#type DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provided: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvidedToTerraform(struct!.provided),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provided: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvidedToHclTerraform(struct!.provided),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provided?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provided = this._provided?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provided.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provided.internalValue = value.provided;
      this._type = value.type;
    }
  }

  // provided - computed: false, optional: true, required: false
  private _provided = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvidedOutputReference(this, "provided");
  public get provided() {
    return this._provided;
  }
  public putProvided(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsProvided) {
    this._provided.internalValue = value;
  }
  public resetProvided() {
    this._provided.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedInput() {
    return this._provided.internalValue;
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer {
  /**
  * the prometheus HTTP port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#tls DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerTls) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics {
  /**
  * ignoreTags is a list of tags to specify which metrics to ignore. Each metric is associated with a list of tags. More details in https://github.com/netobserv/network-observability-operator/tree/main/controllers/flowlogspipeline/metrics_definitions . Available tags are: egress, ingress, flows, bytes, packets, namespaces, nodes, workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#ignore_tags DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#ignore_tags}
  */
  readonly ignoreTags?: string[];
  /**
  * metricsServer endpoint configuration for Prometheus scraper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#server DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreTags),
    server: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerToTerraform(struct!.server),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTags = this._ignoreTags;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreTags = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreTags = value.ignoreTags;
      this._server.internalValue = value.server;
    }
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: string[]; 
  public get ignoreTags() {
    return this.getListAttribute('ignore_tags');
  }
  public set ignoreTags(value: string[]) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#name DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsOutputReference {
    return new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#claims DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#limits DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#requests DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsList",
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

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor {
  /**
  * Debug allows setting some aspects of the internal configuration of the flow processor. This section is aimed exclusively for debugging and fine-grained performance optimizations (for example GOGC, GOMAXPROCS env vars). Users setting its values do it at their own risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#debug DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#debug}
  */
  readonly debug?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug;
  /**
  * dropUnusedFields allows, when set to true, to drop fields that are known to be unused by OVS, in order to save storage space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#drop_unused_fields DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#drop_unused_fields}
  */
  readonly dropUnusedFields?: boolean | cdktf.IResolvable;
  /**
  * enableKubeProbes is a flag to enable or disable Kubernetes liveness and readiness probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#enable_kube_probes DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#enable_kube_probes}
  */
  readonly enableKubeProbes?: boolean | cdktf.IResolvable;
  /**
  * healthPort is a collector HTTP port in the Pod that exposes the health check API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#health_port DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#health_port}
  */
  readonly healthPort?: number;
  /**
  * imagePullPolicy is the Kubernetes pull policy for the image defined above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#image_pull_policy DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * kafkaConsumerAutoscaler spec of a horizontal pod autoscaler to set up for flowlogs-pipeline-transformer, which consumes Kafka messages. This setting is ignored when Kafka is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka_consumer_autoscaler DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka_consumer_autoscaler}
  */
  readonly kafkaConsumerAutoscaler?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler;
  /**
  * kafkaConsumerBatchSize indicates to the broker the maximum batch size, in bytes, that the consumer will accept. Ignored when not using Kafka. Default: 10MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka_consumer_batch_size DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka_consumer_batch_size}
  */
  readonly kafkaConsumerBatchSize?: number;
  /**
  * kafkaConsumerQueueCapacity defines the capacity of the internal message queue used in the Kafka consumer client. Ignored when not using Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka_consumer_queue_capacity DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka_consumer_queue_capacity}
  */
  readonly kafkaConsumerQueueCapacity?: number;
  /**
  * kafkaConsumerReplicas defines the number of replicas (pods) to start for flowlogs-pipeline-transformer, which consumes Kafka messages. This setting is ignored when Kafka is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka_consumer_replicas DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka_consumer_replicas}
  */
  readonly kafkaConsumerReplicas?: number;
  /**
  * logLevel of the collector runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#log_level DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Metrics define the processor configuration regarding metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#metrics DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics;
  /**
  * port of the flow collector (host port) By conventions, some value are not authorized port must not be below 1024 and must not equal this values: 4789,6081,500, and 4500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#port DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * profilePort allows setting up a Go pprof profiler listening to this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#profile_port DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#profile_port}
  */
  readonly profilePort?: number;
  /**
  * resources are the compute resources required by this container. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#resources DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebugToTerraform(struct!.debug),
    drop_unused_fields: cdktf.booleanToTerraform(struct!.dropUnusedFields),
    enable_kube_probes: cdktf.booleanToTerraform(struct!.enableKubeProbes),
    health_port: cdktf.numberToTerraform(struct!.healthPort),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    kafka_consumer_autoscaler: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerToTerraform(struct!.kafkaConsumerAutoscaler),
    kafka_consumer_batch_size: cdktf.numberToTerraform(struct!.kafkaConsumerBatchSize),
    kafka_consumer_queue_capacity: cdktf.numberToTerraform(struct!.kafkaConsumerQueueCapacity),
    kafka_consumer_replicas: cdktf.numberToTerraform(struct!.kafkaConsumerReplicas),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    metrics: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsToTerraform(struct!.metrics),
    port: cdktf.numberToTerraform(struct!.port),
    profile_port: cdktf.numberToTerraform(struct!.profilePort),
    resources: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug",
    },
    drop_unused_fields: {
      value: cdktf.booleanToHclTerraform(struct!.dropUnusedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_kube_probes: {
      value: cdktf.booleanToHclTerraform(struct!.enableKubeProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_port: {
      value: cdktf.numberToHclTerraform(struct!.healthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_consumer_autoscaler: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerToHclTerraform(struct!.kafkaConsumerAutoscaler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler",
    },
    kafka_consumer_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_queue_capacity: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerQueueCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_consumer_replicas: {
      value: cdktf.numberToHclTerraform(struct!.kafkaConsumerReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile_port: {
      value: cdktf.numberToHclTerraform(struct!.profilePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._dropUnusedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnusedFields = this._dropUnusedFields;
    }
    if (this._enableKubeProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKubeProbes = this._enableKubeProbes;
    }
    if (this._healthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPort = this._healthPort;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._kafkaConsumerAutoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerAutoscaler = this._kafkaConsumerAutoscaler?.internalValue;
    }
    if (this._kafkaConsumerBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerBatchSize = this._kafkaConsumerBatchSize;
    }
    if (this._kafkaConsumerQueueCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerQueueCapacity = this._kafkaConsumerQueueCapacity;
    }
    if (this._kafkaConsumerReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConsumerReplicas = this._kafkaConsumerReplicas;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._profilePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilePort = this._profilePort;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug.internalValue = undefined;
      this._dropUnusedFields = undefined;
      this._enableKubeProbes = undefined;
      this._healthPort = undefined;
      this._imagePullPolicy = undefined;
      this._kafkaConsumerAutoscaler.internalValue = undefined;
      this._kafkaConsumerBatchSize = undefined;
      this._kafkaConsumerQueueCapacity = undefined;
      this._kafkaConsumerReplicas = undefined;
      this._logLevel = undefined;
      this._metrics.internalValue = undefined;
      this._port = undefined;
      this._profilePort = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug.internalValue = value.debug;
      this._dropUnusedFields = value.dropUnusedFields;
      this._enableKubeProbes = value.enableKubeProbes;
      this._healthPort = value.healthPort;
      this._imagePullPolicy = value.imagePullPolicy;
      this._kafkaConsumerAutoscaler.internalValue = value.kafkaConsumerAutoscaler;
      this._kafkaConsumerBatchSize = value.kafkaConsumerBatchSize;
      this._kafkaConsumerQueueCapacity = value.kafkaConsumerQueueCapacity;
      this._kafkaConsumerReplicas = value.kafkaConsumerReplicas;
      this._logLevel = value.logLevel;
      this._metrics.internalValue = value.metrics;
      this._port = value.port;
      this._profilePort = value.profilePort;
      this._resources.internalValue = value.resources;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // drop_unused_fields - computed: false, optional: true, required: false
  private _dropUnusedFields?: boolean | cdktf.IResolvable; 
  public get dropUnusedFields() {
    return this.getBooleanAttribute('drop_unused_fields');
  }
  public set dropUnusedFields(value: boolean | cdktf.IResolvable) {
    this._dropUnusedFields = value;
  }
  public resetDropUnusedFields() {
    this._dropUnusedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnusedFieldsInput() {
    return this._dropUnusedFields;
  }

  // enable_kube_probes - computed: false, optional: true, required: false
  private _enableKubeProbes?: boolean | cdktf.IResolvable; 
  public get enableKubeProbes() {
    return this.getBooleanAttribute('enable_kube_probes');
  }
  public set enableKubeProbes(value: boolean | cdktf.IResolvable) {
    this._enableKubeProbes = value;
  }
  public resetEnableKubeProbes() {
    this._enableKubeProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubeProbesInput() {
    return this._enableKubeProbes;
  }

  // health_port - computed: false, optional: true, required: false
  private _healthPort?: number; 
  public get healthPort() {
    return this.getNumberAttribute('health_port');
  }
  public set healthPort(value: number) {
    this._healthPort = value;
  }
  public resetHealthPort() {
    this._healthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPortInput() {
    return this._healthPort;
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

  // kafka_consumer_autoscaler - computed: false, optional: true, required: false
  private _kafkaConsumerAutoscaler = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscalerOutputReference(this, "kafka_consumer_autoscaler");
  public get kafkaConsumerAutoscaler() {
    return this._kafkaConsumerAutoscaler;
  }
  public putKafkaConsumerAutoscaler(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorKafkaConsumerAutoscaler) {
    this._kafkaConsumerAutoscaler.internalValue = value;
  }
  public resetKafkaConsumerAutoscaler() {
    this._kafkaConsumerAutoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerAutoscalerInput() {
    return this._kafkaConsumerAutoscaler.internalValue;
  }

  // kafka_consumer_batch_size - computed: false, optional: true, required: false
  private _kafkaConsumerBatchSize?: number; 
  public get kafkaConsumerBatchSize() {
    return this.getNumberAttribute('kafka_consumer_batch_size');
  }
  public set kafkaConsumerBatchSize(value: number) {
    this._kafkaConsumerBatchSize = value;
  }
  public resetKafkaConsumerBatchSize() {
    this._kafkaConsumerBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerBatchSizeInput() {
    return this._kafkaConsumerBatchSize;
  }

  // kafka_consumer_queue_capacity - computed: false, optional: true, required: false
  private _kafkaConsumerQueueCapacity?: number; 
  public get kafkaConsumerQueueCapacity() {
    return this.getNumberAttribute('kafka_consumer_queue_capacity');
  }
  public set kafkaConsumerQueueCapacity(value: number) {
    this._kafkaConsumerQueueCapacity = value;
  }
  public resetKafkaConsumerQueueCapacity() {
    this._kafkaConsumerQueueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerQueueCapacityInput() {
    return this._kafkaConsumerQueueCapacity;
  }

  // kafka_consumer_replicas - computed: false, optional: true, required: false
  private _kafkaConsumerReplicas?: number; 
  public get kafkaConsumerReplicas() {
    return this.getNumberAttribute('kafka_consumer_replicas');
  }
  public set kafkaConsumerReplicas(value: number) {
    this._kafkaConsumerReplicas = value;
  }
  public resetKafkaConsumerReplicas() {
    this._kafkaConsumerReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConsumerReplicasInput() {
    return this._kafkaConsumerReplicas;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // profile_port - computed: false, optional: true, required: false
  private _profilePort?: number; 
  public get profilePort() {
    return this.getNumberAttribute('profile_port');
  }
  public set profilePort(value: number) {
    this._profilePort = value;
  }
  public resetProfilePort() {
    this._profilePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePortInput() {
    return this._profilePort;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorResources) {
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
export interface DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec {
  /**
  * agent for flows extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#agent DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#agent}
  */
  readonly agent: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent;
  /**
  * consolePlugin defines the settings related to the OpenShift Console plugin, when available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#console_plugin DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#console_plugin}
  */
  readonly consolePlugin?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin;
  /**
  * deploymentModel defines the desired type of deployment for flow processing. Possible values are 'DIRECT' (default) to make the flow processor listening directly from the agents, or 'KAFKA' to make flows sent to a Kafka pipeline before consumption by the processor. Kafka can provide better scalability, resiliency and high availability (for more details, see https://www.redhat.com/en/topics/integration/what-is-apache-kafka).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#deployment_model DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#deployment_model}
  */
  readonly deploymentModel: string;
  /**
  * exporters defines additional optional exporters for custom consumption or storage. This is an experimental feature. Currently, only KAFKA exporter is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#exporters DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#exporters}
  */
  readonly exporters?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters[] | cdktf.IResolvable;
  /**
  * kafka configuration, allowing to use Kafka as a broker as part of the flow collection pipeline. Available when the 'spec.deploymentModel' is 'KAFKA'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#kafka DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#kafka}
  */
  readonly kafka?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka;
  /**
  * loki, the flow store, client settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#loki DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#loki}
  */
  readonly loki?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki;
  /**
  * namespace where NetObserv pods are deployed. If empty, the namespace of the operator is going to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#namespace DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * processor defines the settings of the component that receives the flows from the agent, enriches them, and forwards them to the Loki persistence layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#processor DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest#processor}
  */
  readonly processor?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor;
}

export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentToTerraform(struct!.agent),
    console_plugin: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginToTerraform(struct!.consolePlugin),
    deployment_model: cdktf.stringToTerraform(struct!.deploymentModel),
    exporters: cdktf.listMapper(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersToTerraform, false)(struct!.exporters),
    kafka: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaToTerraform(struct!.kafka),
    loki: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiToTerraform(struct!.loki),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    processor: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorToTerraform(struct!.processor),
  }
}


export function dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentToHclTerraform(struct!.agent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent",
    },
    console_plugin: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginToHclTerraform(struct!.consolePlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin",
    },
    deployment_model: {
      value: cdktf.stringToHclTerraform(struct!.deploymentModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exporters: {
      value: cdktf.listMapperHcl(dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersToHclTerraform, false)(struct!.exporters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersList",
    },
    kafka: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka",
    },
    loki: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiToHclTerraform(struct!.loki),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processor: {
      value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorToHclTerraform(struct!.processor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._consolePlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolePlugin = this._consolePlugin?.internalValue;
    }
    if (this._deploymentModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentModel = this._deploymentModel;
    }
    if (this._exporters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporters = this._exporters?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._loki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loki = this._loki?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent.internalValue = undefined;
      this._consolePlugin.internalValue = undefined;
      this._deploymentModel = undefined;
      this._exporters.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._loki.internalValue = undefined;
      this._namespace = undefined;
      this._processor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent.internalValue = value.agent;
      this._consolePlugin.internalValue = value.consolePlugin;
      this._deploymentModel = value.deploymentModel;
      this._exporters.internalValue = value.exporters;
      this._kafka.internalValue = value.kafka;
      this._loki.internalValue = value.loki;
      this._namespace = value.namespace;
      this._processor.internalValue = value.processor;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgentOutputReference(this, "agent");
  public get agent() {
    return this._agent;
  }
  public putAgent(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecAgent) {
    this._agent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // console_plugin - computed: false, optional: true, required: false
  private _consolePlugin = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePluginOutputReference(this, "console_plugin");
  public get consolePlugin() {
    return this._consolePlugin;
  }
  public putConsolePlugin(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecConsolePlugin) {
    this._consolePlugin.internalValue = value;
  }
  public resetConsolePlugin() {
    this._consolePlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePluginInput() {
    return this._consolePlugin.internalValue;
  }

  // deployment_model - computed: false, optional: false, required: true
  private _deploymentModel?: string; 
  public get deploymentModel() {
    return this.getStringAttribute('deployment_model');
  }
  public set deploymentModel(value: string) {
    this._deploymentModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModelInput() {
    return this._deploymentModel;
  }

  // exporters - computed: false, optional: true, required: false
  private _exporters = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExportersList(this, "exporters", false);
  public get exporters() {
    return this._exporters;
  }
  public putExporters(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecExporters[] | cdktf.IResolvable) {
    this._exporters.internalValue = value;
  }
  public resetExporters() {
    this._exporters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportersInput() {
    return this._exporters.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // loki - computed: false, optional: true, required: false
  private _loki = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLokiOutputReference(this, "loki");
  public get loki() {
    return this._loki;
  }
  public putLoki(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecLoki) {
    this._loki.internalValue = value;
  }
  public resetLoki() {
    this._loki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lokiInput() {
    return this._loki.internalValue;
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

  // processor - computed: false, optional: true, required: false
  private _processor = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessorOutputReference(this, "processor");
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecProcessor) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest k8s_flows_netobserv_io_flow_collector_v1alpha1_manifest}
*/
export class DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flows_netobserv_io_flow_collector_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlowsNetobservIoFlowCollectorV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flows_netobserv_io_flow_collector_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/flows_netobserv_io_flow_collector_v1alpha1_manifest k8s_flows_netobserv_io_flow_collector_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flows_netobserv_io_flow_collector_v1alpha1_manifest',
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
  private _metadata = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec) {
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
      metadata: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowsNetobservIoFlowCollectorV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
