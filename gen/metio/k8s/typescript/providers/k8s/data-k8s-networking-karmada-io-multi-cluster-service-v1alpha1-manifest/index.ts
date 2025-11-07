// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#metadata DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata;
  /**
  * Spec is the desired state of the MultiClusterService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#spec DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec;
}
export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#annotations DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#labels DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#name DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#namespace DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters {
  /**
  * Name is the name of the cluster to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#name DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersToTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersToHclTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters | cdktf.IResolvable): any {
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

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersOutputReference {
    return new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts {
  /**
  * Name is the name of the port that needs to be exposed within the service. The port name must be the same as that defined in the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#name DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Port specifies the exposed service port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#port DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#port}
  */
  readonly port: number;
}

export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsToTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsToHclTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsOutputReference {
    return new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters {
  /**
  * Name is the name of the cluster to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#name DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersToTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersToHclTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters | cdktf.IResolvable): any {
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

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters | cdktf.IResolvable | undefined) {
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

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersOutputReference {
    return new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange {
  /**
  * ClusterNames is the list of clusters to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#cluster_names DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#cluster_names}
  */
  readonly clusterNames?: string[];
}

export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRangeToTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
  }
}


export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRangeToHclTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return this.getListAttribute('cluster_names');
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }
}
export interface DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec {
  /**
  * ConsumerClusters specifies the clusters where the service will be exposed, for clients. If leave it empty, the service will be exposed to all clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#consumer_clusters DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#consumer_clusters}
  */
  readonly consumerClusters?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters[] | cdktf.IResolvable;
  /**
  * Ports is the list of ports that are exposed by this MultiClusterService. No specified port will be filtered out during the service exposure and discovery process. All ports in the referencing service will be exposed by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#ports DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable;
  /**
  * ProviderClusters specifies the clusters which will provide the service backend. If leave it empty, we will collect the backend endpoints from all clusters and sync them to the ConsumerClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#provider_clusters DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#provider_clusters}
  */
  readonly providerClusters?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters[] | cdktf.IResolvable;
  /**
  * Range specifies the ranges where the referencing service should be exposed. Only valid and optional in case of Types contains CrossCluster. If not set and Types contains CrossCluster, all clusters will be selected, that means the referencing service will be exposed across all registered clusters. Deprecated: in favor of ProviderClusters/ConsumerClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#range DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#range}
  */
  readonly range?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange;
  /**
  * ServiceConsumptionClusters specifies the clusters where the service will be exposed, for clients. If leave it empty, the service will be exposed to all clusters. Deprecated: in favor of ProviderClusters/ConsumerClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#service_consumption_clusters DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#service_consumption_clusters}
  */
  readonly serviceConsumptionClusters?: string[];
  /**
  * ServiceProvisionClusters specifies the clusters which will provision the service backend. If leave it empty, we will collect the backend endpoints from all clusters and sync them to the ServiceConsumptionClusters. Deprecated: in favor of ProviderClusters/ConsumerClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#service_provision_clusters DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#service_provision_clusters}
  */
  readonly serviceProvisionClusters?: string[];
  /**
  * Types specifies how to expose the service referencing by this MultiClusterService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#types DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest#types}
  */
  readonly types: string[];
}

export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_clusters: cdktf.listMapper(dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersToTerraform, false)(struct!.consumerClusters),
    ports: cdktf.listMapper(dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsToTerraform, false)(struct!.ports),
    provider_clusters: cdktf.listMapper(dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersToTerraform, false)(struct!.providerClusters),
    range: dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRangeToTerraform(struct!.range),
    service_consumption_clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceConsumptionClusters),
    service_provision_clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceProvisionClusters),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_clusters: {
      value: cdktf.listMapperHcl(dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersToHclTerraform, false)(struct!.consumerClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsList",
    },
    provider_clusters: {
      value: cdktf.listMapperHcl(dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersToHclTerraform, false)(struct!.providerClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersList",
    },
    range: {
      value: dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange",
    },
    service_consumption_clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceConsumptionClusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_provision_clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceProvisionClusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerClusters = this._consumerClusters?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._providerClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerClusters = this._providerClusters?.internalValue;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._serviceConsumptionClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConsumptionClusters = this._serviceConsumptionClusters;
    }
    if (this._serviceProvisionClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProvisionClusters = this._serviceProvisionClusters;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerClusters.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._providerClusters.internalValue = undefined;
      this._range.internalValue = undefined;
      this._serviceConsumptionClusters = undefined;
      this._serviceProvisionClusters = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerClusters.internalValue = value.consumerClusters;
      this._ports.internalValue = value.ports;
      this._providerClusters.internalValue = value.providerClusters;
      this._range.internalValue = value.range;
      this._serviceConsumptionClusters = value.serviceConsumptionClusters;
      this._serviceProvisionClusters = value.serviceProvisionClusters;
      this._types = value.types;
    }
  }

  // consumer_clusters - computed: false, optional: true, required: false
  private _consumerClusters = new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClustersList(this, "consumer_clusters", false);
  public get consumerClusters() {
    return this._consumerClusters;
  }
  public putConsumerClusters(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecConsumerClusters[] | cdktf.IResolvable) {
    this._consumerClusters.internalValue = value;
  }
  public resetConsumerClusters() {
    this._consumerClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerClustersInput() {
    return this._consumerClusters.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // provider_clusters - computed: false, optional: true, required: false
  private _providerClusters = new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClustersList(this, "provider_clusters", false);
  public get providerClusters() {
    return this._providerClusters;
  }
  public putProviderClusters(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecProviderClusters[] | cdktf.IResolvable) {
    this._providerClusters.internalValue = value;
  }
  public resetProviderClusters() {
    this._providerClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerClustersInput() {
    return this._providerClusters.internalValue;
  }

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // service_consumption_clusters - computed: false, optional: true, required: false
  private _serviceConsumptionClusters?: string[]; 
  public get serviceConsumptionClusters() {
    return this.getListAttribute('service_consumption_clusters');
  }
  public set serviceConsumptionClusters(value: string[]) {
    this._serviceConsumptionClusters = value;
  }
  public resetServiceConsumptionClusters() {
    this._serviceConsumptionClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConsumptionClustersInput() {
    return this._serviceConsumptionClusters;
  }

  // service_provision_clusters - computed: false, optional: true, required: false
  private _serviceProvisionClusters?: string[]; 
  public get serviceProvisionClusters() {
    return this.getListAttribute('service_provision_clusters');
  }
  public set serviceProvisionClusters(value: string[]) {
    this._serviceProvisionClusters = value;
  }
  public resetServiceProvisionClusters() {
    this._serviceProvisionClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProvisionClustersInput() {
    return this._serviceProvisionClusters;
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest k8s_networking_karmada_io_multi_cluster_service_v1alpha1_manifest}
*/
export class DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_karmada_io_multi_cluster_service_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_karmada_io_multi_cluster_service_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_karmada_io_multi_cluster_service_v1alpha1_manifest k8s_networking_karmada_io_multi_cluster_service_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_karmada_io_multi_cluster_service_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingKarmadaIoMultiClusterServiceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
