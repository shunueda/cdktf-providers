// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata;
  /**
  * DomainSpec defines the desired state of Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#file_system_id DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#file_system_path DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktf.stringToTerraform(struct!.fileSystemPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: true, required: false
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  public resetFileSystemPath() {
    this._fileSystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs {
  /**
  * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#efs_file_system_config DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_system_config: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_system_config: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsEfsFileSystemConfig) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#gid DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#uid DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#uid}
  */
  readonly uid?: number;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig | cdktf.IResolvable): any {
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
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#app_image_config_name DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#image_name DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#image_version_number DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#custom_images DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#custom_images}
  */
  readonly customImages?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages[] | cdktf.IResolvable;
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_images: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_images: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // custom_images - computed: false, optional: true, required: false
  private _customImages = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsCustomImages[] | cdktf.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#app_image_config_name DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#app_image_config_name}
  */
  readonly appImageConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#image_name DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#image_version_number DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: true, required: false
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  public resetAppImageConfigName() {
    this._appImageConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference {
    return new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#custom_images DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#custom_images}
  */
  readonly customImages?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktf.IResolvable;
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_ar_ns DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_ar_ns}
  */
  readonly lifecycleConfigArNs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_images: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform, false)(struct!.customImages),
    default_resource_spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    lifecycle_config_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArNs),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_images: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToHclTerraform, false)(struct!.customImages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList",
    },
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec",
    },
    lifecycle_config_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImages = this._customImages?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._lifecycleConfigArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArNs = this._lifecycleConfigArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customImages.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._lifecycleConfigArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customImages.internalValue = value.customImages;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._lifecycleConfigArNs = value.lifecycleConfigArNs;
    }
  }

  // custom_images - computed: false, optional: true, required: false
  private _customImages = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImagesList(this, "custom_images", false);
  public get customImages() {
    return this._customImages;
  }
  public putCustomImages(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsCustomImages[] | cdktf.IResolvable) {
    this._customImages.internalValue = value;
  }
  public resetCustomImages() {
    this._customImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImagesInput() {
    return this._customImages.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // lifecycle_config_ar_ns - computed: false, optional: true, required: false
  private _lifecycleConfigArNs?: string[]; 
  public get lifecycleConfigArNs() {
    return this.getListAttribute('lifecycle_config_ar_ns');
  }
  public set lifecycleConfigArNs(value: string[]) {
    this._lifecycleConfigArNs = value;
  }
  public resetLifecycleConfigArNs() {
    this._lifecycleConfigArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArNsInput() {
    return this._lifecycleConfigArNs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#access_status DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#user_group DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#user_group}
  */
  readonly userGroup?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_status: cdktf.stringToTerraform(struct!.accessStatus),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_status: {
      value: cdktf.stringToHclTerraform(struct!.accessStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktf.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStatus = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStatus = value.accessStatus;
      this._userGroup = value.userGroup;
    }
  }

  // access_status - computed: false, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#notebook_output_option DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#s3_kms_key_id DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#s3_output_path DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_output_option: {
      value: cdktf.stringToHclTerraform(struct!.notebookOutputOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: false, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_ebs_volume_size_in_gb DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#maximum_ebs_volume_size_in_gb DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: true, required: false
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  public resetDefaultEbsVolumeSizeInGb() {
    this._defaultEbsVolumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: true, required: false
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  public resetMaximumEbsVolumeSizeInGb() {
    this._maximumEbsVolumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings {
  /**
  * A collection of default EBS storage settings that applies to private spaces created within a domain or user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_ebs_storage_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_storage_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings {
  /**
  * The Code Editor application settings. For more information about Code Editor, see Get started with Code Editor in Amazon SageMaker (https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#code_editor_app_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#custom_file_system_configs DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#custom_file_system_configs}
  */
  readonly customFileSystemConfigs?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs[] | cdktf.IResolvable;
  /**
  * Details about the POSIX identity that is used for file system operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#custom_posix_user_config DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_landing_uri DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#execution_role DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The settings for the JupyterLab application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#jupyter_lab_app_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings;
  /**
  * The JupyterServer app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#jupyter_server_app_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings;
  /**
  * The KernelGateway app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#kernel_gateway_app_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings;
  /**
  * A collection of settings that configure user interaction with the RStudioServerPro app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#r_studio_server_pro_app_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#security_groups DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Specifies options for sharing Amazon SageMaker Studio notebooks. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called. When SharingSettings is not specified, notebook sharing isn't allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sharing_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sharing_settings}
  */
  readonly sharingSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings;
  /**
  * The default storage settings for a private space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#space_storage_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#space_storage_settings}
  */
  readonly spaceStorageSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#studio_web_portal DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * The TensorBoard app settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#tensor_board_app_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_editor_app_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_configs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsToTerraform, false)(struct!.customFileSystemConfigs),
    custom_posix_user_config: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    default_landing_uri: cdktf.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    jupyter_lab_app_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    r_studio_server_pro_app_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct!.rStudioServerProAppSettings),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    sharing_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    space_storage_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
    studio_web_portal: cdktf.stringToTerraform(struct!.studioWebPortal),
    tensor_board_app_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_editor_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings",
    },
    custom_file_system_configs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsToHclTerraform, false)(struct!.customFileSystemConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsList",
    },
    custom_posix_user_config: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig",
    },
    default_landing_uri: {
      value: cdktf.stringToHclTerraform(struct!.defaultLandingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jupyter_lab_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings",
    },
    jupyter_server_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings",
    },
    kernel_gateway_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings",
    },
    r_studio_server_pro_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sharing_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettingsToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings",
    },
    space_storage_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings",
    },
    studio_web_portal: {
      value: cdktf.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tensor_board_app_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct!.tensorBoardAppSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystemConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfigs = this._customFileSystemConfigs?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._defaultLandingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingUri = this._defaultLandingUri;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    if (this._studioWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortal = this._studioWebPortal;
    }
    if (this._tensorBoardAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystemConfigs.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._defaultLandingUri = undefined;
      this._executionRole = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._rStudioServerProAppSettings.internalValue = undefined;
      this._securityGroups = undefined;
      this._sharingSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
      this._studioWebPortal = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystemConfigs.internalValue = value.customFileSystemConfigs;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._defaultLandingUri = value.defaultLandingUri;
      this._executionRole = value.executionRole;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
      this._securityGroups = value.securityGroups;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
      this._studioWebPortal = value.studioWebPortal;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
  }

  // code_editor_app_settings - computed: false, optional: true, required: false
  private _codeEditorAppSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCodeEditorAppSettings) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system_configs - computed: false, optional: true, required: false
  private _customFileSystemConfigs = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigsList(this, "custom_file_system_configs", false);
  public get customFileSystemConfigs() {
    return this._customFileSystemConfigs;
  }
  public putCustomFileSystemConfigs(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomFileSystemConfigs[] | cdktf.IResolvable) {
    this._customFileSystemConfigs.internalValue = value;
  }
  public resetCustomFileSystemConfigs() {
    this._customFileSystemConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigsInput() {
    return this._customFileSystemConfigs.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // default_landing_uri - computed: false, optional: true, required: false
  private _defaultLandingUri?: string; 
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }
  public set defaultLandingUri(value: string) {
    this._defaultLandingUri = value;
  }
  public resetDefaultLandingUri() {
    this._defaultLandingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingUriInput() {
    return this._defaultLandingUri;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: false, optional: true, required: false
  private _rStudioServerProAppSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsRStudioServerProAppSettings) {
    this._rStudioServerProAppSettings.internalValue = value;
  }
  public resetRStudioServerProAppSettings() {
    this._rStudioServerProAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProAppSettingsInput() {
    return this._rStudioServerProAppSettings.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSharingSettings) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }

  // studio_web_portal - computed: false, optional: true, required: false
  private _studioWebPortal?: string; 
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }
  public set studioWebPortal(value: string) {
    this._studioWebPortal = value;
  }
  public resetStudioWebPortal() {
    this._studioWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalInput() {
    return this._studioWebPortal;
  }

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
  public get tensorBoardAppSettings() {
    return this._tensorBoardAppSettings;
  }
  public putTensorBoardAppSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsTensorBoardAppSettings) {
    this._tensorBoardAppSettings.internalValue = value;
  }
  public resetTensorBoardAppSettings() {
    this._tensorBoardAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardAppSettingsInput() {
    return this._tensorBoardAppSettings.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#enable_docker_access DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#enable_docker_access}
  */
  readonly enableDockerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#vpc_only_trusted_accounts DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#vpc_only_trusted_accounts}
  */
  readonly vpcOnlyTrustedAccounts?: string[];
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_docker_access: cdktf.stringToTerraform(struct!.enableDockerAccess),
    vpc_only_trusted_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcOnlyTrustedAccounts),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_docker_access: {
      value: cdktf.stringToHclTerraform(struct!.enableDockerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_only_trusted_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcOnlyTrustedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDockerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDockerAccess = this._enableDockerAccess;
    }
    if (this._vpcOnlyTrustedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOnlyTrustedAccounts = this._vpcOnlyTrustedAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDockerAccess = undefined;
      this._vpcOnlyTrustedAccounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDockerAccess = value.enableDockerAccess;
      this._vpcOnlyTrustedAccounts = value.vpcOnlyTrustedAccounts;
    }
  }

  // enable_docker_access - computed: false, optional: true, required: false
  private _enableDockerAccess?: string; 
  public get enableDockerAccess() {
    return this.getStringAttribute('enable_docker_access');
  }
  public set enableDockerAccess(value: string) {
    this._enableDockerAccess = value;
  }
  public resetEnableDockerAccess() {
    this._enableDockerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDockerAccessInput() {
    return this._enableDockerAccess;
  }

  // vpc_only_trusted_accounts - computed: false, optional: true, required: false
  private _vpcOnlyTrustedAccounts?: string[]; 
  public get vpcOnlyTrustedAccounts() {
    return this.getListAttribute('vpc_only_trusted_accounts');
  }
  public set vpcOnlyTrustedAccounts(value: string[]) {
    this._vpcOnlyTrustedAccounts = value;
  }
  public resetVpcOnlyTrustedAccounts() {
    this._vpcOnlyTrustedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOnlyTrustedAccountsInput() {
    return this._vpcOnlyTrustedAccounts;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#lifecycle_config_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_alias DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_alias}
  */
  readonly sageMakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#sage_maker_image_version_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_alias: cdktf.stringToTerraform(struct!.sageMakerImageVersionAlias),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sage_maker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sageMakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sageMakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
    }
    if (this._sageMakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionAlias = this._sageMakerImageVersionAlias;
    }
    if (this._sageMakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sageMakerImageArn = undefined;
      this._sageMakerImageVersionAlias = undefined;
      this._sageMakerImageVersionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sageMakerImageArn = value.sageMakerImageArn;
      this._sageMakerImageVersionAlias = value.sageMakerImageVersionAlias;
      this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sage_maker_image_arn - computed: false, optional: true, required: false
  private _sageMakerImageArn?: string; 
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }
  public set sageMakerImageArn(value: string) {
    this._sageMakerImageArn = value;
  }
  public resetSageMakerImageArn() {
    this._sageMakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageArnInput() {
    return this._sageMakerImageArn;
  }

  // sage_maker_image_version_alias - computed: false, optional: true, required: false
  private _sageMakerImageVersionAlias?: string; 
  public get sageMakerImageVersionAlias() {
    return this.getStringAttribute('sage_maker_image_version_alias');
  }
  public set sageMakerImageVersionAlias(value: string) {
    this._sageMakerImageVersionAlias = value;
  }
  public resetSageMakerImageVersionAlias() {
    this._sageMakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionAliasInput() {
    return this._sageMakerImageVersionAlias;
  }

  // sage_maker_image_version_arn - computed: false, optional: true, required: false
  private _sageMakerImageVersionArn?: string; 
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
  public set sageMakerImageVersionArn(value: string) {
    this._sageMakerImageVersionArn = value;
  }
  public resetSageMakerImageVersionArn() {
    this._sageMakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sageMakerImageVersionArnInput() {
    return this._sageMakerImageVersionArn;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings {
  /**
  * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_resource_spec DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_resource_spec}
  */
  readonly defaultResourceSpec?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#domain_execution_role_arn DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#domain_execution_role_arn}
  */
  readonly domainExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#r_studio_connect_url DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#r_studio_connect_url}
  */
  readonly rStudioConnectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#r_studio_package_manager_url DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#r_studio_package_manager_url}
  */
  readonly rStudioPackageManagerUrl?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    domain_execution_role_arn: cdktf.stringToTerraform(struct!.domainExecutionRoleArn),
    r_studio_connect_url: cdktf.stringToTerraform(struct!.rStudioConnectUrl),
    r_studio_package_manager_url: cdktf.stringToTerraform(struct!.rStudioPackageManagerUrl),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec",
    },
    domain_execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.domainExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_connect_url: {
      value: cdktf.stringToHclTerraform(struct!.rStudioConnectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_package_manager_url: {
      value: cdktf.stringToHclTerraform(struct!.rStudioPackageManagerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._domainExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainExecutionRoleArn = this._domainExecutionRoleArn;
    }
    if (this._rStudioConnectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioConnectUrl = this._rStudioConnectUrl;
    }
    if (this._rStudioPackageManagerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioPackageManagerUrl = this._rStudioPackageManagerUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._domainExecutionRoleArn = undefined;
      this._rStudioConnectUrl = undefined;
      this._rStudioPackageManagerUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._domainExecutionRoleArn = value.domainExecutionRoleArn;
      this._rStudioConnectUrl = value.rStudioConnectUrl;
      this._rStudioPackageManagerUrl = value.rStudioPackageManagerUrl;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // domain_execution_role_arn - computed: false, optional: true, required: false
  private _domainExecutionRoleArn?: string; 
  public get domainExecutionRoleArn() {
    return this.getStringAttribute('domain_execution_role_arn');
  }
  public set domainExecutionRoleArn(value: string) {
    this._domainExecutionRoleArn = value;
  }
  public resetDomainExecutionRoleArn() {
    this._domainExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainExecutionRoleArnInput() {
    return this._domainExecutionRoleArn;
  }

  // r_studio_connect_url - computed: false, optional: true, required: false
  private _rStudioConnectUrl?: string; 
  public get rStudioConnectUrl() {
    return this.getStringAttribute('r_studio_connect_url');
  }
  public set rStudioConnectUrl(value: string) {
    this._rStudioConnectUrl = value;
  }
  public resetRStudioConnectUrl() {
    this._rStudioConnectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioConnectUrlInput() {
    return this._rStudioConnectUrl;
  }

  // r_studio_package_manager_url - computed: false, optional: true, required: false
  private _rStudioPackageManagerUrl?: string; 
  public get rStudioPackageManagerUrl() {
    return this.getStringAttribute('r_studio_package_manager_url');
  }
  public set rStudioPackageManagerUrl(value: string) {
    this._rStudioPackageManagerUrl = value;
  }
  public resetRStudioPackageManagerUrl() {
    this._rStudioPackageManagerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioPackageManagerUrlInput() {
    return this._rStudioPackageManagerUrl;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings {
  /**
  * A collection of settings that configure the domain's Docker interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#docker_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#docker_settings}
  */
  readonly dockerSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings;
  /**
  * A collection of settings that configure the RStudioServerPro Domain-level app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#r_studio_server_pro_domain_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#r_studio_server_pro_domain_settings}
  */
  readonly rStudioServerProDomainSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettingsToTerraform(struct!.dockerSettings),
    r_studio_server_pro_domain_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsToTerraform(struct!.rStudioServerProDomainSettings),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettingsToHclTerraform(struct!.dockerSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings",
    },
    r_studio_server_pro_domain_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct!.rStudioServerProDomainSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSettings = this._dockerSettings?.internalValue;
    }
    if (this._rStudioServerProDomainSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProDomainSettings = this._rStudioServerProDomainSettings?.internalValue;
    }
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerSettings.internalValue = undefined;
      this._rStudioServerProDomainSettings.internalValue = undefined;
      this._securityGroupIDs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerSettings.internalValue = value.dockerSettings;
      this._rStudioServerProDomainSettings.internalValue = value.rStudioServerProDomainSettings;
      this._securityGroupIDs = value.securityGroupIDs;
    }
  }

  // docker_settings - computed: false, optional: true, required: false
  private _dockerSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettingsOutputReference(this, "docker_settings");
  public get dockerSettings() {
    return this._dockerSettings;
  }
  public putDockerSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsDockerSettings) {
    this._dockerSettings.internalValue = value;
  }
  public resetDockerSettings() {
    this._dockerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSettingsInput() {
    return this._dockerSettings.internalValue;
  }

  // r_studio_server_pro_domain_settings - computed: false, optional: true, required: false
  private _rStudioServerProDomainSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettingsOutputReference(this, "r_studio_server_pro_domain_settings");
  public get rStudioServerProDomainSettings() {
    return this._rStudioServerProDomainSettings;
  }
  public putRStudioServerProDomainSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsRStudioServerProDomainSettings) {
    this._rStudioServerProDomainSettings.internalValue = value;
  }
  public resetRStudioServerProDomainSettings() {
    this._rStudioServerProDomainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProDomainSettingsInput() {
    return this._rStudioServerProDomainSettings.internalValue;
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec {
  /**
  * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly. * PublicInternetOnly - Non-EFS traffic is through a VPC managed by Amazon SageMaker, which allows direct internet access * VpcOnly - All traffic is through the specified VPC and subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#app_network_access_type DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided. If setting up the domain for use with RStudio, this value must be set to Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#app_security_group_management DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#app_security_group_management}
  */
  readonly appSecurityGroupManagement?: string;
  /**
  * The mode of authentication that members use to access the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#auth_mode DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#auth_mode}
  */
  readonly authMode: string;
  /**
  * The default settings to use to create a user profile when UserSettings isn't specified in the call to the CreateUserProfile API. SecurityGroups is aggregated when specified in both calls. For all other settings in UserSettings, the values specified in CreateUserProfile take precedence over those specified in CreateDomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#default_user_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#default_user_settings}
  */
  readonly defaultUserSettings: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings;
  /**
  * A name for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#domain_name DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#domain_name}
  */
  readonly domainName: string;
  /**
  * A collection of Domain settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#domain_settings DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#domain_settings}
  */
  readonly domainSettings?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings;
  /**
  * Use KmsKeyId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#home_efs_file_system_kms_key_id DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#home_efs_file_system_kms_key_id}
  */
  readonly homeEfsFileSystemKmsKeyId?: string;
  /**
  * SageMaker uses Amazon Web Services KMS to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, specify a customer managed key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The VPC subnets that the domain uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#subnet_i_ds DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#subnet_i_ds}
  */
  readonly subnetIDs: string[];
  /**
  * Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. Tags that you specify for the Domain are also added to all Apps that the Domain launches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#vpc_id DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest#vpc_id}
  */
  readonly vpcId: string;
}

export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_network_access_type: cdktf.stringToTerraform(struct!.appNetworkAccessType),
    app_security_group_management: cdktf.stringToTerraform(struct!.appSecurityGroupManagement),
    auth_mode: cdktf.stringToTerraform(struct!.authMode),
    default_user_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsToTerraform(struct!.defaultUserSettings),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_settings: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsToTerraform(struct!.domainSettings),
    home_efs_file_system_kms_key_id: cdktf.stringToTerraform(struct!.homeEfsFileSystemKmsKeyId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIDs),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_network_access_type: {
      value: cdktf.stringToHclTerraform(struct!.appNetworkAccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_security_group_management: {
      value: cdktf.stringToHclTerraform(struct!.appSecurityGroupManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_mode: {
      value: cdktf.stringToHclTerraform(struct!.authMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_user_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsToHclTerraform(struct!.defaultUserSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_settings: {
      value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsToHclTerraform(struct!.domainSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings",
    },
    home_efs_file_system_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.homeEfsFileSystemKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appNetworkAccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appNetworkAccessType = this._appNetworkAccessType;
    }
    if (this._appSecurityGroupManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecurityGroupManagement = this._appSecurityGroupManagement;
    }
    if (this._authMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMode = this._authMode;
    }
    if (this._defaultUserSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUserSettings = this._defaultUserSettings?.internalValue;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSettings = this._domainSettings?.internalValue;
    }
    if (this._homeEfsFileSystemKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeEfsFileSystemKmsKeyId = this._homeEfsFileSystemKmsKeyId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._subnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIDs = this._subnetIDs;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appNetworkAccessType = undefined;
      this._appSecurityGroupManagement = undefined;
      this._authMode = undefined;
      this._defaultUserSettings.internalValue = undefined;
      this._domainName = undefined;
      this._domainSettings.internalValue = undefined;
      this._homeEfsFileSystemKmsKeyId = undefined;
      this._kmsKeyId = undefined;
      this._subnetIDs = undefined;
      this._tags.internalValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appNetworkAccessType = value.appNetworkAccessType;
      this._appSecurityGroupManagement = value.appSecurityGroupManagement;
      this._authMode = value.authMode;
      this._defaultUserSettings.internalValue = value.defaultUserSettings;
      this._domainName = value.domainName;
      this._domainSettings.internalValue = value.domainSettings;
      this._homeEfsFileSystemKmsKeyId = value.homeEfsFileSystemKmsKeyId;
      this._kmsKeyId = value.kmsKeyId;
      this._subnetIDs = value.subnetIDs;
      this._tags.internalValue = value.tags;
      this._vpcId = value.vpcId;
    }
  }

  // app_network_access_type - computed: false, optional: true, required: false
  private _appNetworkAccessType?: string; 
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType;
  }

  // app_security_group_management - computed: false, optional: true, required: false
  private _appSecurityGroupManagement?: string; 
  public get appSecurityGroupManagement() {
    return this.getStringAttribute('app_security_group_management');
  }
  public set appSecurityGroupManagement(value: string) {
    this._appSecurityGroupManagement = value;
  }
  public resetAppSecurityGroupManagement() {
    this._appSecurityGroupManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecurityGroupManagementInput() {
    return this._appSecurityGroupManagement;
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettingsOutputReference(this, "default_user_settings");
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }
  public putDefaultUserSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDefaultUserSettings) {
    this._defaultUserSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings.internalValue;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_settings - computed: false, optional: true, required: false
  private _domainSettings = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettingsOutputReference(this, "domain_settings");
  public get domainSettings() {
    return this._domainSettings;
  }
  public putDomainSettings(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecDomainSettings) {
    this._domainSettings.internalValue = value;
  }
  public resetDomainSettings() {
    this._domainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSettingsInput() {
    return this._domainSettings.internalValue;
  }

  // home_efs_file_system_kms_key_id - computed: false, optional: true, required: false
  private _homeEfsFileSystemKmsKeyId?: string; 
  public get homeEfsFileSystemKmsKeyId() {
    return this.getStringAttribute('home_efs_file_system_kms_key_id');
  }
  public set homeEfsFileSystemKmsKeyId(value: string) {
    this._homeEfsFileSystemKmsKeyId = value;
  }
  public resetHomeEfsFileSystemKmsKeyId() {
    this._homeEfsFileSystemKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeEfsFileSystemKmsKeyIdInput() {
    return this._homeEfsFileSystemKmsKeyId;
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

  // subnet_i_ds - computed: false, optional: false, required: true
  private _subnetIDs?: string[]; 
  public get subnetIDs() {
    return this.getListAttribute('subnet_i_ds');
  }
  public set subnetIDs(value: string[]) {
    this._subnetIDs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIDsInput() {
    return this._subnetIDs;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_domain_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_domain_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsDomainV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_domain_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_domain_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_domain_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_domain_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsDomainV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
