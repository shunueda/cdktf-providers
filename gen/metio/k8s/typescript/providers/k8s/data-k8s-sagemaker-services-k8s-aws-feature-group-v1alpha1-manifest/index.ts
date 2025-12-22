// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata;
  /**
  * FeatureGroupSpec defines the desired state of FeatureGroup. Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#dimension DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#dimension}
  */
  readonly dimension?: number;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.numberToTerraform(struct!.dimension),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.numberToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimension = value.dimension;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig {
  /**
  * Configuration for your vector collection type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#vector_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#vector_config}
  */
  readonly vectorConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vector_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfigToTerraform(struct!.vectorConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vector_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfigToHclTerraform(struct!.vectorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorConfig = this._vectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vectorConfig.internalValue = value.vectorConfig;
    }
  }

  // vector_config - computed: false, optional: true, required: false
  private _vectorConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfigOutputReference(this, "vector_config");
  public get vectorConfig() {
    return this._vectorConfig;
  }
  public putVectorConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigVectorConfig) {
    this._vectorConfig.internalValue = value;
  }
  public resetVectorConfig() {
    this._vectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorConfigInput() {
    return this._vectorConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions {
  /**
  * Configuration for your collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#collection_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#collection_config}
  */
  readonly collectionConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#collection_type DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#collection_type}
  */
  readonly collectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#feature_name DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#feature_type DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#feature_type}
  */
  readonly featureType?: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigToTerraform(struct!.collectionConfig),
    collection_type: cdktf.stringToTerraform(struct!.collectionType),
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigToHclTerraform(struct!.collectionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig",
    },
    collection_type: {
      value: cdktf.stringToHclTerraform(struct!.collectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_type: {
      value: cdktf.stringToHclTerraform(struct!.featureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionConfig = this._collectionConfig?.internalValue;
    }
    if (this._collectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionType = this._collectionType;
    }
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionConfig.internalValue = undefined;
      this._collectionType = undefined;
      this._featureName = undefined;
      this._featureType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionConfig.internalValue = value.collectionConfig;
      this._collectionType = value.collectionType;
      this._featureName = value.featureName;
      this._featureType = value.featureType;
    }
  }

  // collection_config - computed: false, optional: true, required: false
  private _collectionConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfigOutputReference(this, "collection_config");
  public get collectionConfig() {
    return this._collectionConfig;
  }
  public putCollectionConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsCollectionConfig) {
    this._collectionConfig.internalValue = value;
  }
  public resetCollectionConfig() {
    this._collectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionConfigInput() {
    return this._collectionConfig.internalValue;
  }

  // collection_type - computed: false, optional: true, required: false
  private _collectionType?: string; 
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }
  public set collectionType(value: string) {
    this._collectionType = value;
  }
  public resetCollectionType() {
    this._collectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTypeInput() {
    return this._collectionType;
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // feature_type - computed: false, optional: true, required: false
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  public resetFeatureType() {
    this._featureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
  }
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#catalog DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#database DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#table_name DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#table_name}
  */
  readonly tableName?: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._database = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._database = value.database;
      this._tableName = value.tableName;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#resolved_output_s3_uri DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#resolved_output_s3_uri}
  */
  readonly resolvedOutputS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    resolved_output_s3_uri: cdktf.stringToTerraform(struct!.resolvedOutputS3Uri),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolved_output_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.resolvedOutputS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._resolvedOutputS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedOutputS3Uri = this._resolvedOutputS3Uri;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._resolvedOutputS3Uri = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._resolvedOutputS3Uri = value.resolvedOutputS3Uri;
      this._s3Uri = value.s3Uri;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // resolved_output_s3_uri - computed: false, optional: true, required: false
  private _resolvedOutputS3Uri?: string; 
  public get resolvedOutputS3Uri() {
    return this.getStringAttribute('resolved_output_s3_uri');
  }
  public set resolvedOutputS3Uri(value: string) {
    this._resolvedOutputS3Uri = value;
  }
  public resetResolvedOutputS3Uri() {
    this._resolvedOutputS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedOutputS3UriInput() {
    return this._resolvedOutputS3Uri;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig {
  /**
  * The meta data of the Glue table which serves as data catalog for the OfflineStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#data_catalog_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#data_catalog_config}
  */
  readonly dataCatalogConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#disable_glue_table_creation DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#disable_glue_table_creation}
  */
  readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Simple Storage (Amazon S3) location and and security configuration for OfflineStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#s3_storage_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#s3_storage_config}
  */
  readonly s3StorageConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_catalog_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
    disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
    s3_storage_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_catalog_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfigToHclTerraform(struct!.dataCatalogConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig",
    },
    disable_glue_table_creation: {
      value: cdktf.booleanToHclTerraform(struct!.disableGlueTableCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_storage_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfigToHclTerraform(struct!.s3StorageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCatalogConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCatalogConfig = this._dataCatalogConfig?.internalValue;
    }
    if (this._disableGlueTableCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGlueTableCreation = this._disableGlueTableCreation;
    }
    if (this._s3StorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3StorageConfig = this._s3StorageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCatalogConfig.internalValue = undefined;
      this._disableGlueTableCreation = undefined;
      this._s3StorageConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCatalogConfig.internalValue = value.dataCatalogConfig;
      this._disableGlueTableCreation = value.disableGlueTableCreation;
      this._s3StorageConfig.internalValue = value.s3StorageConfig;
    }
  }

  // data_catalog_config - computed: false, optional: true, required: false
  private _dataCatalogConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfigOutputReference(this, "data_catalog_config");
  public get dataCatalogConfig() {
    return this._dataCatalogConfig;
  }
  public putDataCatalogConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigDataCatalogConfig) {
    this._dataCatalogConfig.internalValue = value;
  }
  public resetDataCatalogConfig() {
    this._dataCatalogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogConfigInput() {
    return this._dataCatalogConfig.internalValue;
  }

  // disable_glue_table_creation - computed: false, optional: true, required: false
  private _disableGlueTableCreation?: boolean | cdktf.IResolvable; 
  public get disableGlueTableCreation() {
    return this.getBooleanAttribute('disable_glue_table_creation');
  }
  public set disableGlueTableCreation(value: boolean | cdktf.IResolvable) {
    this._disableGlueTableCreation = value;
  }
  public resetDisableGlueTableCreation() {
    this._disableGlueTableCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGlueTableCreationInput() {
    return this._disableGlueTableCreation;
  }

  // s3_storage_config - computed: false, optional: true, required: false
  private _s3StorageConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfigOutputReference(this, "s3_storage_config");
  public get s3StorageConfig() {
    return this._s3StorageConfig;
  }
  public putS3StorageConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigS3StorageConfig) {
    this._s3StorageConfig.internalValue = value;
  }
  public resetS3StorageConfig() {
    this._s3StorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageConfigInput() {
    return this._s3StorageConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#unit DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDurationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDurationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
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

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#enable_online_store DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#enable_online_store}
  */
  readonly enableOnlineStore?: boolean | cdktf.IResolvable;
  /**
  * The security configuration for OnlineStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#security_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#security_config}
  */
  readonly securityConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#storage_type DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Time to live duration, where the record is hard deleted after the expiration time is reached; ExpiresAt = EventTime + TtlDuration. For information on HardDelete, see the DeleteRecord (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#ttl_duration DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#ttl_duration}
  */
  readonly ttlDuration?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    security_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    ttl_duration: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDurationToTerraform(struct!.ttlDuration),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_online_store: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnlineStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfigToHclTerraform(struct!.securityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_duration: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDurationToHclTerraform(struct!.ttlDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOnlineStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnlineStore = this._enableOnlineStore;
    }
    if (this._securityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._ttlDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlDuration = this._ttlDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableOnlineStore = undefined;
      this._securityConfig.internalValue = undefined;
      this._storageType = undefined;
      this._ttlDuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableOnlineStore = value.enableOnlineStore;
      this._securityConfig.internalValue = value.securityConfig;
      this._storageType = value.storageType;
      this._ttlDuration.internalValue = value.ttlDuration;
    }
  }

  // enable_online_store - computed: false, optional: true, required: false
  private _enableOnlineStore?: boolean | cdktf.IResolvable; 
  public get enableOnlineStore() {
    return this.getBooleanAttribute('enable_online_store');
  }
  public set enableOnlineStore(value: boolean | cdktf.IResolvable) {
    this._enableOnlineStore = value;
  }
  public resetEnableOnlineStore() {
    this._enableOnlineStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnlineStoreInput() {
    return this._enableOnlineStore;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // ttl_duration - computed: false, optional: true, required: false
  private _ttlDuration = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDurationOutputReference(this, "ttl_duration");
  public get ttlDuration() {
    return this._ttlDuration;
  }
  public putTtlDuration(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigTtlDuration) {
    this._ttlDuration.internalValue = value;
  }
  public resetTtlDuration() {
    this._ttlDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDurationInput() {
    return this._ttlDuration.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#provisioned_read_capacity_units DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#provisioned_read_capacity_units}
  */
  readonly provisionedReadCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#provisioned_write_capacity_units DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#provisioned_write_capacity_units}
  */
  readonly provisionedWriteCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#throughput_mode DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#throughput_mode}
  */
  readonly throughputMode?: string;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioned_read_capacity_units: cdktf.numberToTerraform(struct!.provisionedReadCapacityUnits),
    provisioned_write_capacity_units: cdktf.numberToTerraform(struct!.provisionedWriteCapacityUnits),
    throughput_mode: cdktf.stringToTerraform(struct!.throughputMode),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioned_read_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.provisionedReadCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_write_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.provisionedWriteCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput_mode: {
      value: cdktf.stringToHclTerraform(struct!.throughputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisionedReadCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedReadCapacityUnits = this._provisionedReadCapacityUnits;
    }
    if (this._provisionedWriteCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedWriteCapacityUnits = this._provisionedWriteCapacityUnits;
    }
    if (this._throughputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMode = this._throughputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisionedReadCapacityUnits = undefined;
      this._provisionedWriteCapacityUnits = undefined;
      this._throughputMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisionedReadCapacityUnits = value.provisionedReadCapacityUnits;
      this._provisionedWriteCapacityUnits = value.provisionedWriteCapacityUnits;
      this._throughputMode = value.throughputMode;
    }
  }

  // provisioned_read_capacity_units - computed: false, optional: true, required: false
  private _provisionedReadCapacityUnits?: number; 
  public get provisionedReadCapacityUnits() {
    return this.getNumberAttribute('provisioned_read_capacity_units');
  }
  public set provisionedReadCapacityUnits(value: number) {
    this._provisionedReadCapacityUnits = value;
  }
  public resetProvisionedReadCapacityUnits() {
    this._provisionedReadCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedReadCapacityUnitsInput() {
    return this._provisionedReadCapacityUnits;
  }

  // provisioned_write_capacity_units - computed: false, optional: true, required: false
  private _provisionedWriteCapacityUnits?: number; 
  public get provisionedWriteCapacityUnits() {
    return this.getNumberAttribute('provisioned_write_capacity_units');
  }
  public set provisionedWriteCapacityUnits(value: number) {
    this._provisionedWriteCapacityUnits = value;
  }
  public resetProvisionedWriteCapacityUnits() {
    this._provisionedWriteCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedWriteCapacityUnitsInput() {
    return this._provisionedWriteCapacityUnits;
  }

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string; 
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode;
  }
}
export interface DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec {
  /**
  * A free-form description of a FeatureGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#description DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * The name of the feature that stores the EventTime of a Record in a FeatureGroup. An EventTime is a point in time when a new event occurs that corresponds to the creation or update of a Record in a FeatureGroup. All Records in the FeatureGroup must have a corresponding EventTime. An EventTime can be a String or Fractional. * Fractional: EventTime feature values must be a Unix timestamp in seconds. * String: EventTime feature values must be an ISO-8601 string in the format. The following formats are supported yyyy-MM-dd'T'HH:mm:ssZ and yyyy-MM-dd'T'HH:mm:ss.SSSZ where yyyy, MM, and dd represent the year, month, and day respectively and HH, mm, ss, and if applicable, SSS represent the hour, month, second and milliseconds respsectively. 'T' and Z are constants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#event_time_feature_name DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#event_time_feature_name}
  */
  readonly eventTimeFeatureName: string;
  /**
  * A list of Feature names and types. Name and Type is compulsory per Feature. Valid feature FeatureTypes are Integral, Fractional and String. FeatureNames cannot be any of the following: is_deleted, write_time, api_invocation_time You can create up to 2,500 FeatureDefinitions per FeatureGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#feature_definitions DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#feature_definitions}
  */
  readonly featureDefinitions: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions[] | cdktf.IResolvable;
  /**
  * The name of the FeatureGroup. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. The name: * Must start and end with an alphanumeric character. * Can only contain alphanumeric character and hyphens. Spaces are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#feature_group_name DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#feature_group_name}
  */
  readonly featureGroupName: string;
  /**
  * Use this to configure an OfflineFeatureStore. This parameter allows you to specify: * The Amazon Simple Storage Service (Amazon S3) location of an OfflineStore. * A configuration for an Amazon Web Services Glue or Amazon Web Services Hive data catalog. * An KMS encryption key to encrypt the Amazon S3 location used for OfflineStore. If KMS encryption key is not specified, by default we encrypt all data at rest using Amazon Web Services KMS key. By defining your bucket-level key (https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html) for SSE, you can reduce Amazon Web Services KMS requests costs by up to 99 percent. * Format for the offline store table. Supported formats are Glue (Default) and Apache Iceberg (https://iceberg.apache.org/). To learn more about this parameter, see OfflineStoreConfig (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OfflineStoreConfig.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#offline_store_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#offline_store_config}
  */
  readonly offlineStoreConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig;
  /**
  * You can turn the OnlineStore on or off by specifying True for the EnableOnlineStore flag in OnlineStoreConfig. You can also include an Amazon Web Services KMS key ID (KMSKeyId) for at-rest encryption of the OnlineStore. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#online_store_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#online_store_config}
  */
  readonly onlineStoreConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig;
  /**
  * The name of the Feature whose value uniquely identifies a Record defined in the FeatureStore. Only the latest record per identifier value will be stored in the OnlineStore. RecordIdentifierFeatureName must be one of feature definitions' names. You use the RecordIdentifierFeatureName to access data in a FeatureStore. This name: * Must start and end with an alphanumeric character. * Can only contains alphanumeric characters, hyphens, underscores. Spaces are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#record_identifier_feature_name DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#record_identifier_feature_name}
  */
  readonly recordIdentifierFeatureName: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Tags used to identify Features in each FeatureGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Used to set feature group throughput configuration. There are two modes: ON_DEMAND and PROVISIONED. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled. Note: PROVISIONED throughput mode is supported only for feature groups that are offline-only, or use the Standard (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#throughput_config DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest#throughput_config}
  */
  readonly throughputConfig?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig;
}

export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    event_time_feature_name: cdktf.stringToTerraform(struct!.eventTimeFeatureName),
    feature_definitions: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsToTerraform, false)(struct!.featureDefinitions),
    feature_group_name: cdktf.stringToTerraform(struct!.featureGroupName),
    offline_store_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigToTerraform(struct!.offlineStoreConfig),
    online_store_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigToTerraform(struct!.onlineStoreConfig),
    record_identifier_feature_name: cdktf.stringToTerraform(struct!.recordIdentifierFeatureName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    throughput_config: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfigToTerraform(struct!.throughputConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_time_feature_name: {
      value: cdktf.stringToHclTerraform(struct!.eventTimeFeatureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_definitions: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsToHclTerraform, false)(struct!.featureDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsList",
    },
    feature_group_name: {
      value: cdktf.stringToHclTerraform(struct!.featureGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offline_store_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigToHclTerraform(struct!.offlineStoreConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig",
    },
    online_store_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigToHclTerraform(struct!.onlineStoreConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig",
    },
    record_identifier_feature_name: {
      value: cdktf.stringToHclTerraform(struct!.recordIdentifierFeatureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsList",
    },
    throughput_config: {
      value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfigToHclTerraform(struct!.throughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._eventTimeFeatureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimeFeatureName = this._eventTimeFeatureName;
    }
    if (this._featureDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureDefinitions = this._featureDefinitions?.internalValue;
    }
    if (this._featureGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGroupName = this._featureGroupName;
    }
    if (this._offlineStoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineStoreConfig = this._offlineStoreConfig?.internalValue;
    }
    if (this._onlineStoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineStoreConfig = this._onlineStoreConfig?.internalValue;
    }
    if (this._recordIdentifierFeatureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordIdentifierFeatureName = this._recordIdentifierFeatureName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._throughputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputConfig = this._throughputConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._eventTimeFeatureName = undefined;
      this._featureDefinitions.internalValue = undefined;
      this._featureGroupName = undefined;
      this._offlineStoreConfig.internalValue = undefined;
      this._onlineStoreConfig.internalValue = undefined;
      this._recordIdentifierFeatureName = undefined;
      this._roleArn = undefined;
      this._tags.internalValue = undefined;
      this._throughputConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._eventTimeFeatureName = value.eventTimeFeatureName;
      this._featureDefinitions.internalValue = value.featureDefinitions;
      this._featureGroupName = value.featureGroupName;
      this._offlineStoreConfig.internalValue = value.offlineStoreConfig;
      this._onlineStoreConfig.internalValue = value.onlineStoreConfig;
      this._recordIdentifierFeatureName = value.recordIdentifierFeatureName;
      this._roleArn = value.roleArn;
      this._tags.internalValue = value.tags;
      this._throughputConfig.internalValue = value.throughputConfig;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // event_time_feature_name - computed: false, optional: false, required: true
  private _eventTimeFeatureName?: string; 
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }
  public set eventTimeFeatureName(value: string) {
    this._eventTimeFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeFeatureNameInput() {
    return this._eventTimeFeatureName;
  }

  // feature_definitions - computed: false, optional: false, required: true
  private _featureDefinitions = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitionsList(this, "feature_definitions", false);
  public get featureDefinitions() {
    return this._featureDefinitions;
  }
  public putFeatureDefinitions(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecFeatureDefinitions[] | cdktf.IResolvable) {
    this._featureDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDefinitionsInput() {
    return this._featureDefinitions.internalValue;
  }

  // feature_group_name - computed: false, optional: false, required: true
  private _featureGroupName?: string; 
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName;
  }

  // offline_store_config - computed: false, optional: true, required: false
  private _offlineStoreConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfigOutputReference(this, "offline_store_config");
  public get offlineStoreConfig() {
    return this._offlineStoreConfig;
  }
  public putOfflineStoreConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOfflineStoreConfig) {
    this._offlineStoreConfig.internalValue = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig.internalValue;
  }

  // online_store_config - computed: false, optional: true, required: false
  private _onlineStoreConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfigOutputReference(this, "online_store_config");
  public get onlineStoreConfig() {
    return this._onlineStoreConfig;
  }
  public putOnlineStoreConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOnlineStoreConfig) {
    this._onlineStoreConfig.internalValue = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig.internalValue;
  }

  // record_identifier_feature_name - computed: false, optional: false, required: true
  private _recordIdentifierFeatureName?: string; 
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }
  public set recordIdentifierFeatureName(value: string) {
    this._recordIdentifierFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdentifierFeatureNameInput() {
    return this._recordIdentifierFeatureName;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // throughput_config - computed: false, optional: true, required: false
  private _throughputConfig = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfigOutputReference(this, "throughput_config");
  public get throughputConfig() {
    return this._throughputConfig;
  }
  public putThroughputConfig(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecThroughputConfig) {
    this._throughputConfig.internalValue = value;
  }
  public resetThroughputConfig() {
    this._throughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputConfigInput() {
    return this._throughputConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_feature_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsFeatureGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
