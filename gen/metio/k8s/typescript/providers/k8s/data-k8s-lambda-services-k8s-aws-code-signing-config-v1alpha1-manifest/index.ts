// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#metadata DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata;
  /**
  * CodeSigningConfigSpec defines the desired state of CodeSigningConfig. Details about a Code signing configuration (https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#spec DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec;
}
export interface DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#annotations DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#labels DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#signing_profile_version_ar_ns DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#signing_profile_version_ar_ns}
  */
  readonly signingProfileVersionArNs?: string[];
}

export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishersToTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signing_profile_version_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingProfileVersionArNs),
  }
}


export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishersToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signing_profile_version_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signingProfileVersionArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signingProfileVersionArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingProfileVersionArNs = this._signingProfileVersionArNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signingProfileVersionArNs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signingProfileVersionArNs = value.signingProfileVersionArNs;
    }
  }

  // signing_profile_version_ar_ns - computed: false, optional: true, required: false
  private _signingProfileVersionArNs?: string[]; 
  public get signingProfileVersionArNs() {
    return this.getListAttribute('signing_profile_version_ar_ns');
  }
  public set signingProfileVersionArNs(value: string[]) {
    this._signingProfileVersionArNs = value;
  }
  public resetSigningProfileVersionArNs() {
    this._signingProfileVersionArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingProfileVersionArNsInput() {
    return this._signingProfileVersionArNs;
  }
}
export interface DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#untrusted_artifact_on_deployment DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#untrusted_artifact_on_deployment}
  */
  readonly untrustedArtifactOnDeployment?: string;
}

export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPoliciesToTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct!.untrustedArtifactOnDeployment),
  }
}


export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPoliciesToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    untrusted_artifact_on_deployment: {
      value: cdktf.stringToHclTerraform(struct!.untrustedArtifactOnDeployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._untrustedArtifactOnDeployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.untrustedArtifactOnDeployment = this._untrustedArtifactOnDeployment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._untrustedArtifactOnDeployment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._untrustedArtifactOnDeployment = value.untrustedArtifactOnDeployment;
    }
  }

  // untrusted_artifact_on_deployment - computed: false, optional: true, required: false
  private _untrustedArtifactOnDeployment?: string; 
  public get untrustedArtifactOnDeployment() {
    return this.getStringAttribute('untrusted_artifact_on_deployment');
  }
  public set untrustedArtifactOnDeployment(value: string) {
    this._untrustedArtifactOnDeployment = value;
  }
  public resetUntrustedArtifactOnDeployment() {
    this._untrustedArtifactOnDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedArtifactOnDeploymentInput() {
    return this._untrustedArtifactOnDeployment;
  }
}
export interface DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec {
  /**
  * Signing profiles for this code signing configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#allowed_publishers DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#allowed_publishers}
  */
  readonly allowedPublishers: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers;
  /**
  * The code signing policies define the actions to take if the validation checks fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#code_signing_policies DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#code_signing_policies}
  */
  readonly codeSigningPolicies?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies;
  /**
  * Descriptive name for this code signing configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#description DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest#description}
  */
  readonly description?: string;
}

export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_publishers: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishersToTerraform(struct!.allowedPublishers),
    code_signing_policies: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPoliciesToTerraform(struct!.codeSigningPolicies),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_publishers: {
      value: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishersToHclTerraform(struct!.allowedPublishers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers",
    },
    code_signing_policies: {
      value: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPoliciesToHclTerraform(struct!.codeSigningPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPublishers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPublishers = this._allowedPublishers?.internalValue;
    }
    if (this._codeSigningPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigningPolicies = this._codeSigningPolicies?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedPublishers.internalValue = undefined;
      this._codeSigningPolicies.internalValue = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedPublishers.internalValue = value.allowedPublishers;
      this._codeSigningPolicies.internalValue = value.codeSigningPolicies;
      this._description = value.description;
    }
  }

  // allowed_publishers - computed: false, optional: false, required: true
  private _allowedPublishers = new DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishersOutputReference(this, "allowed_publishers");
  public get allowedPublishers() {
    return this._allowedPublishers;
  }
  public putAllowedPublishers(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecAllowedPublishers) {
    this._allowedPublishers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPublishersInput() {
    return this._allowedPublishers.internalValue;
  }

  // code_signing_policies - computed: false, optional: true, required: false
  private _codeSigningPolicies = new DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPoliciesOutputReference(this, "code_signing_policies");
  public get codeSigningPolicies() {
    return this._codeSigningPolicies;
  }
  public putCodeSigningPolicies(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecCodeSigningPolicies) {
    this._codeSigningPolicies.internalValue = value;
  }
  public resetCodeSigningPolicies() {
    this._codeSigningPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningPoliciesInput() {
    return this._codeSigningPolicies.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest k8s_lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest}
*/
export class DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest k8s_lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lambda_services_k8s_aws_code_signing_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsCodeSigningConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
