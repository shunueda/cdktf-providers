// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#metadata DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#topology_policies DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#topology_policies}
  */
  readonly topologyPolicies: string[];
  /**
  * ZoneList contains an array of Zone objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#zones DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#zones}
  */
  readonly zones: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones[] | cdktf.IResolvable;
}
export interface DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#annotations DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#labels DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#name DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#name DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#value DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesToTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesToHclTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes | cdktf.IResolvable): any {
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes | cdktf.IResolvable | undefined) {
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesOutputReference {
    return new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#name DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#value DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#value}
  */
  readonly value: number;
}

export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsToTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsToHclTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsList extends cdktf.ComplexList {
  public internalValue? : DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsOutputReference {
    return new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources {
  /**
  * Allocatable quantity of the resource, corresponding to allocatable in node status, i.e. total amount of this resource available to be used by pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#allocatable DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#allocatable}
  */
  readonly allocatable: string;
  /**
  * Available is the amount of this resource currently available for new (to be scheduled) pods, i.e. Allocatable minus the resources reserved by currently running pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#available DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#available}
  */
  readonly available: string;
  /**
  * Capacity of the resource, corresponding to capacity in node status, i.e. total amount of this resource that the node has.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#capacity DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#capacity}
  */
  readonly capacity: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#name DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesToTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocatable: cdktf.stringToTerraform(struct!.allocatable),
    available: cdktf.stringToTerraform(struct!.available),
    capacity: cdktf.stringToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesToHclTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocatable: {
      value: cdktf.stringToHclTerraform(struct!.allocatable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    available: {
      value: cdktf.stringToHclTerraform(struct!.available),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatable = this._allocatable;
    }
    if (this._available !== undefined) {
      hasAnyValues = true;
      internalValueResult.available = this._available;
    }
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatable = undefined;
      this._available = undefined;
      this._capacity = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocatable = value.allocatable;
      this._available = value.available;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // allocatable - computed: false, optional: false, required: true
  private _allocatable?: string; 
  public get allocatable() {
    return this.getStringAttribute('allocatable');
  }
  public set allocatable(value: string) {
    this._allocatable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatableInput() {
    return this._allocatable;
  }

  // available - computed: false, optional: false, required: true
  private _available?: string; 
  public get available() {
    return this.getStringAttribute('available');
  }
  public set available(value: string) {
    this._available = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesOutputReference {
    return new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones {
  /**
  * AttributeList contains an array of AttributeInfo objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#attributes DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#attributes}
  */
  readonly attributes?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes[] | cdktf.IResolvable;
  /**
  * CostList contains an array of CostInfo objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#costs DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#costs}
  */
  readonly costs?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#name DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#parent DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#parent}
  */
  readonly parent?: string;
  /**
  * ResourceInfoList contains an array of ResourceInfo objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#resources DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#type DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesToTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesToTerraform, false)(struct!.attributes),
    costs: cdktf.listMapper(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsToTerraform, false)(struct!.costs),
    name: cdktf.stringToTerraform(struct!.name),
    parent: cdktf.stringToTerraform(struct!.parent),
    resources: cdktf.listMapper(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesToTerraform, false)(struct!.resources),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesToHclTerraform(struct?: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesList",
    },
    costs: {
      value: cdktf.listMapperHcl(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsToHclTerraform, false)(struct!.costs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesList",
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._costs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costs = this._costs?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._costs.internalValue = undefined;
      this._name = undefined;
      this._parent = undefined;
      this._resources.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._costs.internalValue = value.costs;
      this._name = value.name;
      this._parent = value.parent;
      this._resources.internalValue = value.resources;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // costs - computed: false, optional: true, required: false
  private _costs = new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCostsList(this, "costs", false);
  public get costs() {
    return this._costs;
  }
  public putCosts(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesCosts[] | cdktf.IResolvable) {
    this._costs.internalValue = value;
  }
  public resetCosts() {
    this._costs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costsInput() {
    return this._costs.internalValue;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesList extends cdktf.ComplexList {
  public internalValue? : DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones[] | cdktf.IResolvable

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
  public get(index: number): DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesOutputReference {
    return new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest k8s_topology_node_k8s_io_node_resource_topology_v1alpha1_manifest}
*/
export class DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_topology_node_k8s_io_node_resource_topology_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_topology_node_k8s_io_node_resource_topology_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/topology_node_k8s_io_node_resource_topology_v1alpha1_manifest k8s_topology_node_k8s_io_node_resource_topology_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_topology_node_k8s_io_node_resource_topology_v1alpha1_manifest',
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
    this._topologyPolicies = config.topologyPolicies;
    this._zones.internalValue = config.zones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // topology_policies - computed: false, optional: false, required: true
  private _topologyPolicies?: string[]; 
  public get topologyPolicies() {
    return this.getListAttribute('topology_policies');
  }
  public set topologyPolicies(value: string[]) {
    this._topologyPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyPoliciesInput() {
    return this._topologyPolicies;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // zones - computed: false, optional: false, required: true
  private _zones = new DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      topology_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topologyPolicies),
      zones: cdktf.listMapper(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesToTerraform, false)(this._zones.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestMetadata",
      },
      topology_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topologyPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zones: {
        value: cdktf.listMapperHcl(dataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesToHclTerraform, false)(this._zones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8STopologyNodeK8SIoNodeResourceTopologyV1Alpha1ManifestZonesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
