// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#metadata DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata;
  /**
  * CacheParameterGroupSpec defines the desired state of CacheParameterGroup. Represents the output of a CreateCacheParameterGroup operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#spec DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec;
}
export interface DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#annotations DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#labels DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#namespace DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#parameter_name DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#parameter_value DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#parameter_value}
  */
  readonly parameterValue?: string;
}

export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesToTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesOutputReference {
    return new DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#key DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#value DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec {
  /**
  * The name of the cache parameter group family that the cache parameter group can be used with. Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#cache_parameter_group_family DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#cache_parameter_group_family}
  */
  readonly cacheParameterGroupFamily: string;
  /**
  * A user-specified name for the cache parameter group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#cache_parameter_group_name DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#cache_parameter_group_name}
  */
  readonly cacheParameterGroupName: string;
  /**
  * A user-specified description for the cache parameter group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#description DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#description}
  */
  readonly description: string;
  /**
  * An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#parameter_name_values DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#parameter_name_values}
  */
  readonly parameterNameValues?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues[] | cdktf.IResolvable;
  /**
  * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#tags DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_parameter_group_family: cdktf.stringToTerraform(struct!.cacheParameterGroupFamily),
    cache_parameter_group_name: cdktf.stringToTerraform(struct!.cacheParameterGroupName),
    description: cdktf.stringToTerraform(struct!.description),
    parameter_name_values: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesToTerraform, false)(struct!.parameterNameValues),
    tags: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_parameter_group_family: {
      value: cdktf.stringToHclTerraform(struct!.cacheParameterGroupFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_parameter_group_name: {
      value: cdktf.stringToHclTerraform(struct!.cacheParameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name_values: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesToHclTerraform, false)(struct!.parameterNameValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheParameterGroupFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheParameterGroupFamily = this._cacheParameterGroupFamily;
    }
    if (this._cacheParameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheParameterGroupName = this._cacheParameterGroupName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._parameterNameValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterNameValues = this._parameterNameValues?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheParameterGroupFamily = undefined;
      this._cacheParameterGroupName = undefined;
      this._description = undefined;
      this._parameterNameValues.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheParameterGroupFamily = value.cacheParameterGroupFamily;
      this._cacheParameterGroupName = value.cacheParameterGroupName;
      this._description = value.description;
      this._parameterNameValues.internalValue = value.parameterNameValues;
      this._tags.internalValue = value.tags;
    }
  }

  // cache_parameter_group_family - computed: false, optional: false, required: true
  private _cacheParameterGroupFamily?: string; 
  public get cacheParameterGroupFamily() {
    return this.getStringAttribute('cache_parameter_group_family');
  }
  public set cacheParameterGroupFamily(value: string) {
    this._cacheParameterGroupFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParameterGroupFamilyInput() {
    return this._cacheParameterGroupFamily;
  }

  // cache_parameter_group_name - computed: false, optional: false, required: true
  private _cacheParameterGroupName?: string; 
  public get cacheParameterGroupName() {
    return this.getStringAttribute('cache_parameter_group_name');
  }
  public set cacheParameterGroupName(value: string) {
    this._cacheParameterGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParameterGroupNameInput() {
    return this._cacheParameterGroupName;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // parameter_name_values - computed: false, optional: true, required: false
  private _parameterNameValues = new DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValuesList(this, "parameter_name_values", false);
  public get parameterNameValues() {
    return this._parameterNameValues;
  }
  public putParameterNameValues(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecParameterNameValues[] | cdktf.IResolvable) {
    this._parameterNameValues.internalValue = value;
  }
  public resetParameterNameValues() {
    this._parameterNameValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameValuesInput() {
    return this._parameterNameValues.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest k8s_elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest}
*/
export class DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest k8s_elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_elasticache_services_k8s_aws_cache_parameter_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElasticacheServicesK8SAwsCacheParameterGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
