// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#address_type DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#address_type}
  */
  readonly addressType: string;
  /**
  * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#endpoints DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#endpoints}
  */
  readonly endpoints: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints[] | cdktf.IResolvable;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#metadata DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#metadata}
  */
  readonly metadata: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata;
  /**
  * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates 'all ports'. Each slice may include a maximum of 100 ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#ports DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#ports}
  */
  readonly ports?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts[] | cdktf.IResolvable;
}
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions {
  /**
  * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be 'true' for terminating endpoints, except when the normal readiness behavior is being explicitly overridden, for example when the associated Service has set the publishNotReadyAddresses flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#ready DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#ready}
  */
  readonly ready?: boolean | cdktf.IResolvable;
  /**
  * serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#serving DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#serving}
  */
  readonly serving?: boolean | cdktf.IResolvable;
  /**
  * terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#terminating DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#terminating}
  */
  readonly terminating?: boolean | cdktf.IResolvable;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditionsToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ready: cdktf.booleanToTerraform(struct!.ready),
    serving: cdktf.booleanToTerraform(struct!.serving),
    terminating: cdktf.booleanToTerraform(struct!.terminating),
  }
}


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditionsToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ready: {
      value: cdktf.booleanToHclTerraform(struct!.ready),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serving: {
      value: cdktf.booleanToHclTerraform(struct!.serving),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terminating: {
      value: cdktf.booleanToHclTerraform(struct!.terminating),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ready !== undefined) {
      hasAnyValues = true;
      internalValueResult.ready = this._ready;
    }
    if (this._serving !== undefined) {
      hasAnyValues = true;
      internalValueResult.serving = this._serving;
    }
    if (this._terminating !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminating = this._terminating;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ready = undefined;
      this._serving = undefined;
      this._terminating = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ready = value.ready;
      this._serving = value.serving;
      this._terminating = value.terminating;
    }
  }

  // ready - computed: false, optional: true, required: false
  private _ready?: boolean | cdktf.IResolvable; 
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
  public set ready(value: boolean | cdktf.IResolvable) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }

  // serving - computed: false, optional: true, required: false
  private _serving?: boolean | cdktf.IResolvable; 
  public get serving() {
    return this.getBooleanAttribute('serving');
  }
  public set serving(value: boolean | cdktf.IResolvable) {
    this._serving = value;
  }
  public resetServing() {
    this._serving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingInput() {
    return this._serving;
  }

  // terminating - computed: false, optional: true, required: false
  private _terminating?: boolean | cdktf.IResolvable; 
  public get terminating() {
    return this.getBooleanAttribute('terminating');
  }
  public set terminating(value: boolean | cdktf.IResolvable) {
    this._terminating = value;
  }
  public resetTerminating() {
    this._terminating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatingInput() {
    return this._terminating;
  }
}
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones {
  /**
  * name represents the name of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#name DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones | cdktf.IResolvable): any {
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

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones | cdktf.IResolvable | undefined) {
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

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesOutputReference {
    return new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints {
  /**
  * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#for_zones DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#for_zones}
  */
  readonly forZones?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones[] | cdktf.IResolvable;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    for_zones: cdktf.listMapper(dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesToTerraform, false)(struct!.forZones),
  }
}


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    for_zones: {
      value: cdktf.listMapperHcl(dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesToHclTerraform, false)(struct!.forZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forZones = this._forZones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forZones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forZones.internalValue = value.forZones;
    }
  }

  // for_zones - computed: false, optional: true, required: false
  private _forZones = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZonesList(this, "for_zones", false);
  public get forZones() {
    return this._forZones;
  }
  public putForZones(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsForZones[] | cdktf.IResolvable) {
    this._forZones.internalValue = value;
  }
  public resetForZones() {
    this._forZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forZonesInput() {
    return this._forZones.internalValue;
  }
}
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#api_version DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#field_path DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#kind DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#name DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#namespace DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#resource_version DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#uid DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRefToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRefToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef | cdktf.IResolvable): any {
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef | cdktf.IResolvable | undefined {
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints {
  /**
  * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#addresses DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#addresses}
  */
  readonly addresses: string[];
  /**
  * EndpointConditions represents the current condition of an endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#conditions DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#conditions}
  */
  readonly conditions?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions;
  /**
  * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24). While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#deprecated_topology DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#deprecated_topology}
  */
  readonly deprecatedTopology?: { [key: string]: string };
  /**
  * EndpointHints provides hints describing how an endpoint should be consumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#hints DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#hints}
  */
  readonly hints?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints;
  /**
  * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#hostname DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#node_name DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#target_ref DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef;
  /**
  * zone is the name of the Zone this endpoint exists in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#zone DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#zone}
  */
  readonly zone?: string;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    conditions: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditionsToTerraform(struct!.conditions),
    deprecated_topology: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deprecatedTopology),
    hints: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsToTerraform(struct!.hints),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    target_ref: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRefToTerraform(struct!.targetRef),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditions: {
      value: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions",
    },
    deprecated_topology: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deprecatedTopology),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hints: {
      value: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsToHclTerraform(struct!.hints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref: {
      value: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._deprecatedTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedTopology = this._deprecatedTopology;
    }
    if (this._hints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hints = this._hints?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._conditions.internalValue = undefined;
      this._deprecatedTopology = undefined;
      this._hints.internalValue = undefined;
      this._hostname = undefined;
      this._nodeName = undefined;
      this._targetRef.internalValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._conditions.internalValue = value.conditions;
      this._deprecatedTopology = value.deprecatedTopology;
      this._hints.internalValue = value.hints;
      this._hostname = value.hostname;
      this._nodeName = value.nodeName;
      this._targetRef.internalValue = value.targetRef;
      this._zone = value.zone;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // deprecated_topology - computed: false, optional: true, required: false
  private _deprecatedTopology?: { [key: string]: string }; 
  public get deprecatedTopology() {
    return this.getStringMapAttribute('deprecated_topology');
  }
  public set deprecatedTopology(value: { [key: string]: string }) {
    this._deprecatedTopology = value;
  }
  public resetDeprecatedTopology() {
    this._deprecatedTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedTopologyInput() {
    return this._deprecatedTopology;
  }

  // hints - computed: false, optional: true, required: false
  private _hints = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHintsOutputReference(this, "hints");
  public get hints() {
    return this._hints;
  }
  public putHints(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsHints) {
    this._hints.internalValue = value;
  }
  public resetHints() {
    this._hints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintsInput() {
    return this._hints.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsOutputReference {
    return new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#annotations DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#labels DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#name DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#namespace DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadataToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadataToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts {
  /**
  * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either: * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior- * 'kubernetes.io/ws' - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455 * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#app_protocol DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * name represents the name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is derived from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#name DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * port represents the port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#port DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#port}
  */
  readonly port?: number;
  /**
  * protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#protocol DataK8SDiscoveryK8SIoEndpointSliceV1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsToTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsToHclTerraform(struct?: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsOutputReference {
    return new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest k8s_discovery_k8s_io_endpoint_slice_v1_manifest}
*/
export class DataK8SDiscoveryK8SIoEndpointSliceV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_discovery_k8s_io_endpoint_slice_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDiscoveryK8SIoEndpointSliceV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDiscoveryK8SIoEndpointSliceV1Manifest to import
  * @param importFromId The id of the existing DataK8SDiscoveryK8SIoEndpointSliceV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDiscoveryK8SIoEndpointSliceV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_discovery_k8s_io_endpoint_slice_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/discovery_k8s_io_endpoint_slice_v1_manifest k8s_discovery_k8s_io_endpoint_slice_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDiscoveryK8SIoEndpointSliceV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_discovery_k8s_io_endpoint_slice_v1_manifest',
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
    this._addressType = config.addressType;
    this._endpoints.internalValue = config.endpoints;
    this._metadata.internalValue = config.metadata;
    this._ports.internalValue = config.ports;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: false, optional: false, required: true
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
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
      address_type: cdktf.stringToTerraform(this._addressType),
      endpoints: cdktf.listMapper(dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsToTerraform, false)(this._endpoints.internalValue),
      metadata: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadataToTerraform(this._metadata.internalValue),
      ports: cdktf.listMapper(dataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsToTerraform, false)(this._ports.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.listMapperHcl(dataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsToHclTerraform, false)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestEndpointsList",
      },
      metadata: {
        value: dataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestMetadata",
      },
      ports: {
        value: cdktf.listMapperHcl(dataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsToHclTerraform, false)(this._ports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SDiscoveryK8SIoEndpointSliceV1ManifestPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
