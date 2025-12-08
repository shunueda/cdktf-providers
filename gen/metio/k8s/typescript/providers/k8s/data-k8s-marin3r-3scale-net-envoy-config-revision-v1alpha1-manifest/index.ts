// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#metadata DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata;
  /**
  * EnvoyConfigRevisionSpec defines the desired state of EnvoyConfigRevision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#spec DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec;
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#annotations DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#labels DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#namespace DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes {
  /**
  * Name of the envoy resource. DEPRECATED: this field has no effect and will be removed in an upcoming release. The name of the resources for discovery purposes is included in the resource itself. Refer to the envoy API reference to check how the name is specified for each resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the serialized representation of the envoy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#namespace DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRefToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRefToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets {
  /**
  * Name of the envoy tslCerticate secret resource. The certificate will be fetched from a Kubernetes Secrets of type 'kubernetes.io/tls' with this same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * DEPRECATED: this field is deprecated and it's value will be ignored. The 'name' of the Kubernetes Secret must match the 'name' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#ref DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#ref}
  */
  readonly ref?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ref: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRefToTerraform(struct!.ref),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets | cdktf.IResolvable): any {
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
    ref: {
      value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ref.internalValue = value.ref;
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

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources {
  /**
  * Clusters is a list of the envoy Cluster resource type. API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#clusters DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters[] | cdktf.IResolvable;
  /**
  * Endpoints is a list of the envoy ClusterLoadAssignment resource type. API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/endpoint/v3/endpoint.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#endpoints DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#endpoints}
  */
  readonly endpoints?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints[] | cdktf.IResolvable;
  /**
  * ExtensionConfigs is a list of the envoy ExtensionConfig resource type API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/core/v3/extension.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#extension_configs DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#extension_configs}
  */
  readonly extensionConfigs?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs[] | cdktf.IResolvable;
  /**
  * Listeners is a list of the envoy Listener resource type. API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#listeners DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#listeners}
  */
  readonly listeners?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners[] | cdktf.IResolvable;
  /**
  * Routes is a list of the envoy Route resource type. API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/route.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#routes DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#routes}
  */
  readonly routes?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes[] | cdktf.IResolvable;
  /**
  * Runtimes is a list of the envoy Runtime resource type. API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/service/runtime/v3/rtds.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#runtimes DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#runtimes}
  */
  readonly runtimes?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes[] | cdktf.IResolvable;
  /**
  * ScopedRoutes is a list of the envoy ScopeRoute resource type. API V3 reference: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/route/v3/scoped_route.proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#scoped_routes DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#scoped_routes}
  */
  readonly scopedRoutes?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes[] | cdktf.IResolvable;
  /**
  * Secrets is a list of references to Kubernetes Secret objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#secrets DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#secrets}
  */
  readonly secrets?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets[] | cdktf.IResolvable;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersToTerraform, false)(struct!.clusters),
    endpoints: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsToTerraform, false)(struct!.endpoints),
    extension_configs: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsToTerraform, false)(struct!.extensionConfigs),
    listeners: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersToTerraform, false)(struct!.listeners),
    routes: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesToTerraform, false)(struct!.routes),
    runtimes: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesToTerraform, false)(struct!.runtimes),
    scoped_routes: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesToTerraform, false)(struct!.scopedRoutes),
    secrets: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersList",
    },
    endpoints: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsToHclTerraform, false)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsList",
    },
    extension_configs: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsToHclTerraform, false)(struct!.extensionConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsList",
    },
    listeners: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersList",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesList",
    },
    runtimes: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesToHclTerraform, false)(struct!.runtimes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesList",
    },
    scoped_routes: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesToHclTerraform, false)(struct!.scopedRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesList",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    if (this._extensionConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionConfigs = this._extensionConfigs?.internalValue;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._runtimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimes = this._runtimes?.internalValue;
    }
    if (this._scopedRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopedRoutes = this._scopedRoutes?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
      this._endpoints.internalValue = undefined;
      this._extensionConfigs.internalValue = undefined;
      this._listeners.internalValue = undefined;
      this._routes.internalValue = undefined;
      this._runtimes.internalValue = undefined;
      this._scopedRoutes.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters.internalValue = value.clusters;
      this._endpoints.internalValue = value.endpoints;
      this._extensionConfigs.internalValue = value.extensionConfigs;
      this._listeners.internalValue = value.listeners;
      this._routes.internalValue = value.routes;
      this._runtimes.internalValue = value.runtimes;
      this._scopedRoutes.internalValue = value.scopedRoutes;
      this._secrets.internalValue = value.secrets;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // extension_configs - computed: false, optional: true, required: false
  private _extensionConfigs = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigsList(this, "extension_configs", false);
  public get extensionConfigs() {
    return this._extensionConfigs;
  }
  public putExtensionConfigs(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesExtensionConfigs[] | cdktf.IResolvable) {
    this._extensionConfigs.internalValue = value;
  }
  public resetExtensionConfigs() {
    this._extensionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionConfigsInput() {
    return this._extensionConfigs.internalValue;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // runtimes - computed: false, optional: true, required: false
  private _runtimes = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimesList(this, "runtimes", false);
  public get runtimes() {
    return this._runtimes;
  }
  public putRuntimes(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesRuntimes[] | cdktf.IResolvable) {
    this._runtimes.internalValue = value;
  }
  public resetRuntimes() {
    this._runtimes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimesInput() {
    return this._runtimes.internalValue;
  }

  // scoped_routes - computed: false, optional: true, required: false
  private _scopedRoutes = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutesList(this, "scoped_routes", false);
  public get scopedRoutes() {
    return this._scopedRoutes;
  }
  public putScopedRoutes(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesScopedRoutes[] | cdktf.IResolvable) {
    this._scopedRoutes.internalValue = value;
  }
  public resetScopedRoutes() {
    this._scopedRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedRoutesInput() {
    return this._scopedRoutes.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#key DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#operator DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#values DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#match_expressions DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#match_labels DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsList",
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#cluster_name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#selector DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#target_port DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#target_port}
  */
  readonly targetPort: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    selector: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorToTerraform(struct!.selector),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._selector.internalValue = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._selector.internalValue = value.selector;
      this._targetPort = value.targetPort;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret {
  /**
  * A unique name to refer to the name:key combination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#alias DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#alias}
  */
  readonly alias: string;
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#key DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the secret in the pod's namespace to select from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#name DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecretToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecretToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources {
  /**
  * Blueprint specifies a template to generate a configuration proto. It is currently only supported to generate secret configuration resources from k8s Secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#blueprint DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#blueprint}
  */
  readonly blueprint?: string;
  /**
  * Specifies a label selector to watch for EndpointSlices that will be used to generate the endpoint resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#generate_from_endpoint_slices DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#generate_from_endpoint_slices}
  */
  readonly generateFromEndpointSlices?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices;
  /**
  * The name of a Kubernetes Secret of type 'Opaque'. It will generate an envoy 'generic secret' proto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#generate_from_opaque_secret DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#generate_from_opaque_secret}
  */
  readonly generateFromOpaqueSecret?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret;
  /**
  * The name of a Kubernetes Secret of type 'kubernetes.io/tls'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#generate_from_tls_secret DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#generate_from_tls_secret}
  */
  readonly generateFromTlsSecret?: string;
  /**
  * Type is the type url for the protobuf message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#type DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Value is the protobufer message that configures the resource. The proto must match the envoy configuration API v3 specification for the given resource type (https://www.envoyproxy.io/docs/envoy/latest/api-docs/xds_protocol#resource-types)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#value DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    generate_from_endpoint_slices: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesToTerraform(struct!.generateFromEndpointSlices),
    generate_from_opaque_secret: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecretToTerraform(struct!.generateFromOpaqueSecret),
    generate_from_tls_secret: cdktf.stringToTerraform(struct!.generateFromTlsSecret),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_from_endpoint_slices: {
      value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesToHclTerraform(struct!.generateFromEndpointSlices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices",
    },
    generate_from_opaque_secret: {
      value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecretToHclTerraform(struct!.generateFromOpaqueSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret",
    },
    generate_from_tls_secret: {
      value: cdktf.stringToHclTerraform(struct!.generateFromTlsSecret),
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._generateFromEndpointSlices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateFromEndpointSlices = this._generateFromEndpointSlices?.internalValue;
    }
    if (this._generateFromOpaqueSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateFromOpaqueSecret = this._generateFromOpaqueSecret?.internalValue;
    }
    if (this._generateFromTlsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateFromTlsSecret = this._generateFromTlsSecret;
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

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint = undefined;
      this._generateFromEndpointSlices.internalValue = undefined;
      this._generateFromOpaqueSecret.internalValue = undefined;
      this._generateFromTlsSecret = undefined;
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
      this._blueprint = value.blueprint;
      this._generateFromEndpointSlices.internalValue = value.generateFromEndpointSlices;
      this._generateFromOpaqueSecret.internalValue = value.generateFromOpaqueSecret;
      this._generateFromTlsSecret = value.generateFromTlsSecret;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // generate_from_endpoint_slices - computed: false, optional: true, required: false
  private _generateFromEndpointSlices = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlicesOutputReference(this, "generate_from_endpoint_slices");
  public get generateFromEndpointSlices() {
    return this._generateFromEndpointSlices;
  }
  public putGenerateFromEndpointSlices(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromEndpointSlices) {
    this._generateFromEndpointSlices.internalValue = value;
  }
  public resetGenerateFromEndpointSlices() {
    this._generateFromEndpointSlices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateFromEndpointSlicesInput() {
    return this._generateFromEndpointSlices.internalValue;
  }

  // generate_from_opaque_secret - computed: false, optional: true, required: false
  private _generateFromOpaqueSecret = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecretOutputReference(this, "generate_from_opaque_secret");
  public get generateFromOpaqueSecret() {
    return this._generateFromOpaqueSecret;
  }
  public putGenerateFromOpaqueSecret(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesGenerateFromOpaqueSecret) {
    this._generateFromOpaqueSecret.internalValue = value;
  }
  public resetGenerateFromOpaqueSecret() {
    this._generateFromOpaqueSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateFromOpaqueSecretInput() {
    return this._generateFromOpaqueSecret.internalValue;
  }

  // generate_from_tls_secret - computed: false, optional: true, required: false
  private _generateFromTlsSecret?: string; 
  public get generateFromTlsSecret() {
    return this.getStringAttribute('generate_from_tls_secret');
  }
  public set generateFromTlsSecret(value: string) {
    this._generateFromTlsSecret = value;
  }
  public resetGenerateFromTlsSecret() {
    this._generateFromTlsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateFromTlsSecretInput() {
    return this._generateFromTlsSecret;
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
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesOutputReference {
    return new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec {
  /**
  * EnvoyAPI is the version of envoy's API to use. Defaults to v3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#envoy_api DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#envoy_api}
  */
  readonly envoyApi?: string;
  /**
  * EnvoyResources holds the different types of resources suported by the envoy discovery service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#envoy_resources DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#envoy_resources}
  */
  readonly envoyResources?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources;
  /**
  * NodeID holds the envoy identifier for the discovery service to know which set of resources to send to each of the envoy clients that connect to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#node_id DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#node_id}
  */
  readonly nodeId: string;
  /**
  * Resources holds the different types of resources suported by the envoy discovery service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#resources DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources[] | cdktf.IResolvable;
  /**
  * Serialization specicifies the serialization format used to describe the resources. 'json' and 'yaml' are supported. 'json' is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#serialization DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#serialization}
  */
  readonly serialization?: string;
  /**
  * Version is a hash of the EnvoyResources field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#version DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy_api: cdktf.stringToTerraform(struct!.envoyApi),
    envoy_resources: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesToTerraform(struct!.envoyResources),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    resources: cdktf.listMapper(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesToTerraform, false)(struct!.resources),
    serialization: cdktf.stringToTerraform(struct!.serialization),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy_api: {
      value: cdktf.stringToHclTerraform(struct!.envoyApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envoy_resources: {
      value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesToHclTerraform(struct!.envoyResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesList",
    },
    serialization: {
      value: cdktf.stringToHclTerraform(struct!.serialization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoyApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyApi = this._envoyApi;
    }
    if (this._envoyResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyResources = this._envoyResources?.internalValue;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serialization !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialization = this._serialization;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoyApi = undefined;
      this._envoyResources.internalValue = undefined;
      this._nodeId = undefined;
      this._resources.internalValue = undefined;
      this._serialization = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoyApi = value.envoyApi;
      this._envoyResources.internalValue = value.envoyResources;
      this._nodeId = value.nodeId;
      this._resources.internalValue = value.resources;
      this._serialization = value.serialization;
      this._version = value.version;
    }
  }

  // envoy_api - computed: false, optional: true, required: false
  private _envoyApi?: string; 
  public get envoyApi() {
    return this.getStringAttribute('envoy_api');
  }
  public set envoyApi(value: string) {
    this._envoyApi = value;
  }
  public resetEnvoyApi() {
    this._envoyApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyApiInput() {
    return this._envoyApi;
  }

  // envoy_resources - computed: false, optional: true, required: false
  private _envoyResources = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResourcesOutputReference(this, "envoy_resources");
  public get envoyResources() {
    return this._envoyResources;
  }
  public putEnvoyResources(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecEnvoyResources) {
    this._envoyResources.internalValue = value;
  }
  public resetEnvoyResources() {
    this._envoyResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyResourcesInput() {
    return this._envoyResources.internalValue;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // serialization - computed: false, optional: true, required: false
  private _serialization?: string; 
  public get serialization() {
    return this.getStringAttribute('serialization');
  }
  public set serialization(value: string) {
    this._serialization = value;
  }
  public resetSerialization() {
    this._serialization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest k8s_marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest}
*/
export class DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest k8s_marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_marin3r_3scale_net_envoy_config_revision_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMarin3R3ScaleNetEnvoyConfigRevisionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
