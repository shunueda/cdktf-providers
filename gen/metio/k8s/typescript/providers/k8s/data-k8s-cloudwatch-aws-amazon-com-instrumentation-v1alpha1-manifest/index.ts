// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#metadata DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata;
  /**
  * InstrumentationSpec defines the desired state of OpenTelemetry SDK and instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#spec DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec;
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#annotations DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#labels DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#namespace DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd {
  /**
  * Attrs defines Apache HTTPD agent specific attributes. The precedence is: 'agent default attributes' > 'instrument spec attributes' . Attributes are documented at https://github.com/open-telemetry/opentelemetry-cpp-contrib/tree/main/instrumentation/otel-webserver-module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#attrs DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#attrs}
  */
  readonly attrs?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs[] | cdktf.IResolvable;
  /**
  * Location of Apache HTTPD server configuration. Needed only if different from default '/usr/local/apache2/conf'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_path}
  */
  readonly configPath?: string;
  /**
  * Env defines Apache HTTPD specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with Apache SDK and auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_requirements DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements;
  /**
  * Apache HTTPD server version. One of 2.4 or 2.2. Default is 2.4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsToTerraform, false)(struct!.attrs),
    config_path: cdktf.stringToTerraform(struct!.configPath),
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsToTerraform(struct!.resourceRequirements),
    version: cdktf.stringToTerraform(struct!.version),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsToHclTerraform, false)(struct!.attrs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsList",
    },
    config_path: {
      value: cdktf.stringToHclTerraform(struct!.configPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs?.internalValue;
    }
    if (this._configPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.configPath = this._configPath;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs.internalValue = undefined;
      this._configPath = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._version = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs.internalValue = value.attrs;
      this._configPath = value.configPath;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._version = value.version;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrsList(this, "attrs", false);
  public get attrs() {
    return this._attrs;
  }
  public putAttrs(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdAttrs[] | cdktf.IResolvable) {
    this._attrs.internalValue = value;
  }
  public resetAttrs() {
    this._attrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs.internalValue;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this.getStringAttribute('config_path');
  }
  public set configPath(value: string) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet {
  /**
  * Env defines DotNet specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with DotNet SDK and auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_requirements DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsToTerraform(struct!.resourceRequirements),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter {
  /**
  * Endpoint is address of the collector with OTLP endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#endpoint DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporterToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporterToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo {
  /**
  * Env defines Go specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with Go SDK and auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_requirements DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsToTerraform(struct!.resourceRequirements),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava {
  /**
  * Env defines java specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with javaagent auto-instrumentation JAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resources DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resources: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesToTerraform(struct!.resources),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resources.internalValue = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resources.internalValue = value.resources;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx {
  /**
  * Attrs defines Nginx agent specific attributes. The precedence order is: 'agent default attributes' > 'instrument spec attributes' . Attributes are documented at https://github.com/open-telemetry/opentelemetry-cpp-contrib/tree/main/instrumentation/otel-webserver-module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#attrs DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#attrs}
  */
  readonly attrs?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs[] | cdktf.IResolvable;
  /**
  * Location of Nginx configuration file. Needed only if different from default '/etx/nginx/nginx.conf'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_file DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_file}
  */
  readonly configFile?: string;
  /**
  * Env defines Nginx specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with Nginx SDK and auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_requirements DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsToTerraform, false)(struct!.attrs),
    config_file: cdktf.stringToTerraform(struct!.configFile),
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsToTerraform(struct!.resourceRequirements),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsToHclTerraform, false)(struct!.attrs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsList",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs?.internalValue;
    }
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs.internalValue = undefined;
      this._configFile = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs.internalValue = value.attrs;
      this._configFile = value.configFile;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrsList(this, "attrs", false);
  public get attrs() {
    return this._attrs;
  }
  public putAttrs(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxAttrs[] | cdktf.IResolvable) {
    this._attrs.internalValue = value;
  }
  public resetAttrs() {
    this._attrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs.internalValue;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs {
  /**
  * Env defines nodejs specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with NodeJS SDK and auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_requirements DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsToTerraform(struct!.resourceRequirements),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#api_version DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_path DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#container_name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#divisor DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#key DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#optional DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#config_map_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_field_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#secret_key_ref DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#value_from DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#name DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsOutputReference {
    return new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#claims DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#limits DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#requests DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsList",
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython {
  /**
  * Env defines python specific env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv[] | cdktf.IResolvable;
  /**
  * Image is a container image with Python SDK and auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#image DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_requirements DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements;
  /**
  * VolumeSizeLimit defines size limit for volume used for auto-instrumentation. The default size is 200Mi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#volume_limit_size DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#volume_limit_size}
  */
  readonly volumeLimitSize?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsToTerraform(struct!.resourceRequirements),
    volume_limit_size: cdktf.stringToTerraform(struct!.volumeLimitSize),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements",
    },
    volume_limit_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeLimitSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._volumeLimitSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeLimitSize = this._volumeLimitSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._volumeLimitSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._volumeLimitSize = value.volumeLimitSize;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // volume_limit_size - computed: false, optional: true, required: false
  private _volumeLimitSize?: string; 
  public get volumeLimitSize() {
    return this.getStringAttribute('volume_limit_size');
  }
  public set volumeLimitSize(value: string) {
    this._volumeLimitSize = value;
  }
  public resetVolumeLimitSize() {
    this._volumeLimitSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeLimitSizeInput() {
    return this._volumeLimitSize;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource {
  /**
  * AddK8sUIDAttributes defines whether K8s UID attributes should be collected (e.g. k8s.deployment.uid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#add_k8s_uid_attributes DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#add_k8s_uid_attributes}
  */
  readonly addK8SUidAttributes?: boolean | cdktf.IResolvable;
  /**
  * Attributes defines attributes that are added to the resource. For example environment: dev
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource_attributes DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource_attributes}
  */
  readonly resourceAttributes?: { [key: string]: string };
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResourceToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_k8s_uid_attributes: cdktf.booleanToTerraform(struct!.addK8SUidAttributes),
    resource_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceAttributes),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResourceToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_k8s_uid_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.addK8SUidAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addK8SUidAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addK8SUidAttributes = this._addK8SUidAttributes;
    }
    if (this._resourceAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAttributes = this._resourceAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addK8SUidAttributes = undefined;
      this._resourceAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addK8SUidAttributes = value.addK8SUidAttributes;
      this._resourceAttributes = value.resourceAttributes;
    }
  }

  // add_k8s_uid_attributes - computed: false, optional: true, required: false
  private _addK8SUidAttributes?: boolean | cdktf.IResolvable; 
  public get addK8SUidAttributes() {
    return this.getBooleanAttribute('add_k8s_uid_attributes');
  }
  public set addK8SUidAttributes(value: boolean | cdktf.IResolvable) {
    this._addK8SUidAttributes = value;
  }
  public resetAddK8SUidAttributes() {
    this._addK8SUidAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addK8SUidAttributesInput() {
    return this._addK8SUidAttributes;
  }

  // resource_attributes - computed: false, optional: true, required: false
  private _resourceAttributes?: { [key: string]: string }; 
  public get resourceAttributes() {
    return this.getStringMapAttribute('resource_attributes');
  }
  public set resourceAttributes(value: { [key: string]: string }) {
    this._resourceAttributes = value;
  }
  public resetResourceAttributes() {
    this._resourceAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributesInput() {
    return this._resourceAttributes;
  }
}
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler {
  /**
  * Argument defines sampler argument. The value depends on the sampler type. For instance for parentbased_traceidratio sampler type it is a number in range [0..1] e.g. 0.25. The value will be set in the OTEL_TRACES_SAMPLER_ARG env var.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#argument DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#argument}
  */
  readonly argument?: string;
  /**
  * Type defines sampler type. The value will be set in the OTEL_TRACES_SAMPLER env var. The value can be for instance parentbased_always_on, parentbased_always_off, parentbased_traceidratio...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#type DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSamplerToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument: cdktf.stringToTerraform(struct!.argument),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSamplerToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument: {
      value: cdktf.stringToHclTerraform(struct!.argument),
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

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSamplerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argument !== undefined) {
      hasAnyValues = true;
      internalValueResult.argument = this._argument;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argument = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argument = value.argument;
      this._type = value.type;
    }
  }

  // argument - computed: false, optional: true, required: false
  private _argument?: string; 
  public get argument() {
    return this.getStringAttribute('argument');
  }
  public set argument(value: string) {
    this._argument = value;
  }
  public resetArgument() {
    this._argument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentInput() {
    return this._argument;
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
export interface DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec {
  /**
  * ApacheHttpd defines configuration for Apache HTTPD auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#apache_httpd DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#apache_httpd}
  */
  readonly apacheHttpd?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd;
  /**
  * DotNet defines configuration for DotNet auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#dotnet DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#dotnet}
  */
  readonly dotnet?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet;
  /**
  * Env defines common env vars. There are four layers for env vars' definitions and the precedence order is: 'original container env vars' > 'language specific env vars' > 'common env vars' > 'instrument spec configs' vars'. If the former var had been defined, then the other vars would be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#env DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * Exporter defines exporter configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#exporter DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#exporter}
  */
  readonly exporter?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter;
  /**
  * Go defines configuration for Go auto-instrumentation. When using Go auto-instrumentation you must provide a value for the OTEL_GO_AUTO_TARGET_EXE env var via the Instrumentation env vars or via the instrumentation.opentelemetry.io/otel-go-auto-target-exe pod annotation. Failure to set this value causes instrumentation injection to abort, leaving the original pod unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#go DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#go}
  */
  readonly go?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo;
  /**
  * Java defines configuration for java auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#java DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#java}
  */
  readonly java?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava;
  /**
  * Nginx defines configuration for Nginx auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#nginx DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#nginx}
  */
  readonly nginx?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx;
  /**
  * NodeJS defines configuration for nodejs auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#nodejs DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#nodejs}
  */
  readonly nodejs?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs;
  /**
  * Propagators defines inter-process context propagation configuration. Values in this list will be set in the OTEL_PROPAGATORS env var. Enum=tracecontext;baggage;b3;b3multi;jaeger;xray;ottrace;none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#propagators DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#propagators}
  */
  readonly propagators?: string[];
  /**
  * Python defines configuration for python auto-instrumentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#python DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#python}
  */
  readonly python?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython;
  /**
  * Resource defines the configuration for the resource attributes, as defined by the OpenTelemetry specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#resource DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#resource}
  */
  readonly resource?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource;
  /**
  * Sampler defines sampling configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#sampler DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest#sampler}
  */
  readonly sampler?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler;
}

export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apache_httpd: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdToTerraform(struct!.apacheHttpd),
    dotnet: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetToTerraform(struct!.dotnet),
    env: cdktf.listMapper(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvToTerraform, false)(struct!.env),
    exporter: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporterToTerraform(struct!.exporter),
    go: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoToTerraform(struct!.go),
    java: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaToTerraform(struct!.java),
    nginx: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxToTerraform(struct!.nginx),
    nodejs: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsToTerraform(struct!.nodejs),
    propagators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propagators),
    python: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonToTerraform(struct!.python),
    resource: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResourceToTerraform(struct!.resource),
    sampler: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSamplerToTerraform(struct!.sampler),
  }
}


export function dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apache_httpd: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdToHclTerraform(struct!.apacheHttpd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd",
    },
    dotnet: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetToHclTerraform(struct!.dotnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvList",
    },
    exporter: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporterToHclTerraform(struct!.exporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter",
    },
    go: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoToHclTerraform(struct!.go),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo",
    },
    java: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaToHclTerraform(struct!.java),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava",
    },
    nginx: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxToHclTerraform(struct!.nginx),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx",
    },
    nodejs: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsToHclTerraform(struct!.nodejs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs",
    },
    propagators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propagators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    python: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonToHclTerraform(struct!.python),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython",
    },
    resource: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource",
    },
    sampler: {
      value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSamplerToHclTerraform(struct!.sampler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apacheHttpd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apacheHttpd = this._apacheHttpd?.internalValue;
    }
    if (this._dotnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotnet = this._dotnet?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._exporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporter = this._exporter?.internalValue;
    }
    if (this._go?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.go = this._go?.internalValue;
    }
    if (this._java?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.java = this._java?.internalValue;
    }
    if (this._nginx?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginx = this._nginx?.internalValue;
    }
    if (this._nodejs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodejs = this._nodejs?.internalValue;
    }
    if (this._propagators !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagators = this._propagators;
    }
    if (this._python?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.python = this._python?.internalValue;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._sampler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampler = this._sampler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apacheHttpd.internalValue = undefined;
      this._dotnet.internalValue = undefined;
      this._env.internalValue = undefined;
      this._exporter.internalValue = undefined;
      this._go.internalValue = undefined;
      this._java.internalValue = undefined;
      this._nginx.internalValue = undefined;
      this._nodejs.internalValue = undefined;
      this._propagators = undefined;
      this._python.internalValue = undefined;
      this._resource.internalValue = undefined;
      this._sampler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apacheHttpd.internalValue = value.apacheHttpd;
      this._dotnet.internalValue = value.dotnet;
      this._env.internalValue = value.env;
      this._exporter.internalValue = value.exporter;
      this._go.internalValue = value.go;
      this._java.internalValue = value.java;
      this._nginx.internalValue = value.nginx;
      this._nodejs.internalValue = value.nodejs;
      this._propagators = value.propagators;
      this._python.internalValue = value.python;
      this._resource.internalValue = value.resource;
      this._sampler.internalValue = value.sampler;
    }
  }

  // apache_httpd - computed: false, optional: true, required: false
  private _apacheHttpd = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpdOutputReference(this, "apache_httpd");
  public get apacheHttpd() {
    return this._apacheHttpd;
  }
  public putApacheHttpd(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecApacheHttpd) {
    this._apacheHttpd.internalValue = value;
  }
  public resetApacheHttpd() {
    this._apacheHttpd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheHttpdInput() {
    return this._apacheHttpd.internalValue;
  }

  // dotnet - computed: false, optional: true, required: false
  private _dotnet = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnetOutputReference(this, "dotnet");
  public get dotnet() {
    return this._dotnet;
  }
  public putDotnet(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecDotnet) {
    this._dotnet.internalValue = value;
  }
  public resetDotnet() {
    this._dotnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetInput() {
    return this._dotnet.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // exporter - computed: false, optional: true, required: false
  private _exporter = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporterOutputReference(this, "exporter");
  public get exporter() {
    return this._exporter;
  }
  public putExporter(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecExporter) {
    this._exporter.internalValue = value;
  }
  public resetExporter() {
    this._exporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exporterInput() {
    return this._exporter.internalValue;
  }

  // go - computed: false, optional: true, required: false
  private _go = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGoOutputReference(this, "go");
  public get go() {
    return this._go;
  }
  public putGo(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecGo) {
    this._go.internalValue = value;
  }
  public resetGo() {
    this._go.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goInput() {
    return this._go.internalValue;
  }

  // java - computed: false, optional: true, required: false
  private _java = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJavaOutputReference(this, "java");
  public get java() {
    return this._java;
  }
  public putJava(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecJava) {
    this._java.internalValue = value;
  }
  public resetJava() {
    this._java.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaInput() {
    return this._java.internalValue;
  }

  // nginx - computed: false, optional: true, required: false
  private _nginx = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginxOutputReference(this, "nginx");
  public get nginx() {
    return this._nginx;
  }
  public putNginx(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNginx) {
    this._nginx.internalValue = value;
  }
  public resetNginx() {
    this._nginx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxInput() {
    return this._nginx.internalValue;
  }

  // nodejs - computed: false, optional: true, required: false
  private _nodejs = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejsOutputReference(this, "nodejs");
  public get nodejs() {
    return this._nodejs;
  }
  public putNodejs(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecNodejs) {
    this._nodejs.internalValue = value;
  }
  public resetNodejs() {
    this._nodejs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodejsInput() {
    return this._nodejs.internalValue;
  }

  // propagators - computed: false, optional: true, required: false
  private _propagators?: string[]; 
  public get propagators() {
    return this.getListAttribute('propagators');
  }
  public set propagators(value: string[]) {
    this._propagators = value;
  }
  public resetPropagators() {
    this._propagators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatorsInput() {
    return this._propagators;
  }

  // python - computed: false, optional: true, required: false
  private _python = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPythonOutputReference(this, "python");
  public get python() {
    return this._python;
  }
  public putPython(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecPython) {
    this._python.internalValue = value;
  }
  public resetPython() {
    this._python.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonInput() {
    return this._python.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // sampler - computed: false, optional: true, required: false
  private _sampler = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSamplerOutputReference(this, "sampler");
  public get sampler() {
    return this._sampler;
  }
  public putSampler(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecSampler) {
    this._sampler.internalValue = value;
  }
  public resetSampler() {
    this._sampler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerInput() {
    return this._sampler.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest k8s_cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest}
*/
export class DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest k8s_cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudwatch_aws_amazon_com_instrumentation_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudwatchAwsAmazonComInstrumentationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
