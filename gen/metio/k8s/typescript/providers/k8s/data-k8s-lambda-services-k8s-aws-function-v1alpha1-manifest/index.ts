// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#metadata DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata;
  /**
  * FunctionSpec defines the desired state of Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#spec DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec;
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#annotations DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#labels DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#image_uri DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#s3_bucket DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Reference field for S3Bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#s3_bucket_ref DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#s3_bucket_ref}
  */
  readonly s3BucketRef?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#s3_key DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#s3_object_version DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#sha256 DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#sha256}
  */
  readonly sha256?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#zip_file DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#zip_file}
  */
  readonly zipFile?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_bucket_ref: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefToTerraform(struct!.s3BucketRef),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
    s3_object_version: cdktf.stringToTerraform(struct!.s3ObjectVersion),
    sha256: cdktf.stringToTerraform(struct!.sha256),
    zip_file: cdktf.stringToTerraform(struct!.zipFile),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_ref: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefToHclTerraform(struct!.s3BucketRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef",
    },
    s3_key: {
      value: cdktf.stringToHclTerraform(struct!.s3Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_version: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file: {
      value: cdktf.stringToHclTerraform(struct!.zipFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3BucketRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketRef = this._s3BucketRef?.internalValue;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    if (this._s3ObjectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    if (this._zipFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFile = this._zipFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUri = undefined;
      this._s3Bucket = undefined;
      this._s3BucketRef.internalValue = undefined;
      this._s3Key = undefined;
      this._s3ObjectVersion = undefined;
      this._sha256 = undefined;
      this._zipFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUri = value.imageUri;
      this._s3Bucket = value.s3Bucket;
      this._s3BucketRef.internalValue = value.s3BucketRef;
      this._s3Key = value.s3Key;
      this._s3ObjectVersion = value.s3ObjectVersion;
      this._sha256 = value.sha256;
      this._zipFile = value.zipFile;
    }
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_bucket_ref - computed: false, optional: true, required: false
  private _s3BucketRef = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRefOutputReference(this, "s3_bucket_ref");
  public get s3BucketRef() {
    return this._s3BucketRef;
  }
  public putS3BucketRef(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeS3BucketRef) {
    this._s3BucketRef.internalValue = value;
  }
  public resetS3BucketRef() {
    this._s3BucketRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketRefInput() {
    return this._s3BucketRef.internalValue;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string; 
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#target_arn DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#target_arn}
  */
  readonly targetArn?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetArn = value.targetArn;
    }
  }

  // target_arn - computed: false, optional: true, required: false
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  public resetTargetArn() {
    this._targetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#variables DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#variables}
  */
  readonly variables?: { [key: string]: string };
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironmentToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironmentToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variables = value.variables;
    }
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#size DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#size}
  */
  readonly size?: number;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorageToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorageToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#arn DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#local_mount_path DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#local_mount_path}
  */
  readonly localMountPath?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._localMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountPath = this._localMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._localMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._localMountPath = value.localMountPath;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // local_mount_path - computed: false, optional: true, required: false
  private _localMountPath?: string; 
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
  public set localMountPath(value: string) {
    this._localMountPath = value;
  }
  public resetLocalMountPath() {
    this._localMountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPathInput() {
    return this._localMountPath;
  }
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsOutputReference {
    return new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#destination DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#destination DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#destination}
  */
  readonly destination?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig {
  /**
  * A destination for events that failed processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#on_failure DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#on_failure}
  */
  readonly onFailure?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure;
  /**
  * A destination for events that were processed successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#on_success DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#on_success}
  */
  readonly onSuccess?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure",
    },
    on_success: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure.internalValue = value.onFailure;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOnSuccess) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig {
  /**
  * A configuration object that specifies the destination of an event after Lambda processes it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#destination_config DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#destination_config}
  */
  readonly destinationConfig?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#function_name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#maximum_event_age_in_seconds DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#maximum_retry_attempts DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#qualifier DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#qualifier}
  */
  readonly qualifier?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_config: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToTerraform(struct!.destinationConfig),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_config: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct!.destinationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_event_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumEventAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConfig = this._destinationConfig?.internalValue;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._maximumEventAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationConfig.internalValue = undefined;
      this._functionName = undefined;
      this._maximumEventAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
      this._qualifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationConfig.internalValue = value.destinationConfig;
      this._functionName = value.functionName;
      this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
      this._qualifier = value.qualifier;
    }
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#command DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#entry_point DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#working_directory DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#working_directory}
  */
  readonly workingDirectory?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPoint),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entry_point: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._entryPoint = undefined;
      this._workingDirectory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._entryPoint = value.entryPoint;
      this._workingDirectory = value.workingDirectory;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#apply_on DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#apply_on}
  */
  readonly applyOn?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStartToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_on: cdktf.stringToTerraform(struct!.applyOn),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStartToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_on: {
      value: cdktf.stringToHclTerraform(struct!.applyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyOn = this._applyOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyOn = value.applyOn;
    }
  }

  // apply_on - computed: false, optional: true, required: false
  private _applyOn?: string; 
  public get applyOn() {
    return this.getStringAttribute('apply_on');
  }
  public set applyOn(value: string) {
    this._applyOn = value;
  }
  public resetApplyOn() {
    this._applyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnInput() {
    return this._applyOn;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#mode DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsOutputReference {
    return new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#namespace DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFromToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFromToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#from DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsOutputReference {
    return new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#security_group_i_ds DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Reference field for SecurityGroupIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#security_group_refs DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#subnet_i_ds DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#subnet_i_ds}
  */
  readonly subnetIDs?: string[];
  /**
  * Reference field for SubnetIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#subnet_refs DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#subnet_refs}
  */
  readonly subnetRefs?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs[] | cdktf.IResolvable;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_group_refs: cdktf.listMapper(dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIDs),
    subnet_refs: cdktf.listMapper(dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsToTerraform, false)(struct!.subnetRefs),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsList",
    },
    subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_refs: {
      value: cdktf.listMapperHcl(dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsToHclTerraform, false)(struct!.subnetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._subnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIDs = this._subnetIDs;
    }
    if (this._subnetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRefs = this._subnetRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._subnetIDs = undefined;
      this._subnetRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._subnetIDs = value.subnetIDs;
      this._subnetRefs.internalValue = value.subnetRefs;
    }
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

  // security_group_refs - computed: false, optional: true, required: false
  private _securityGroupRefs = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // subnet_i_ds - computed: false, optional: true, required: false
  private _subnetIDs?: string[]; 
  public get subnetIDs() {
    return this.getListAttribute('subnet_i_ds');
  }
  public set subnetIDs(value: string[]) {
    this._subnetIDs = value;
  }
  public resetSubnetIDs() {
    this._subnetIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIDsInput() {
    return this._subnetIDs;
  }

  // subnet_refs - computed: false, optional: true, required: false
  private _subnetRefs = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefsList(this, "subnet_refs", false);
  public get subnetRefs() {
    return this._subnetRefs;
  }
  public putSubnetRefs(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigSubnetRefs[] | cdktf.IResolvable) {
    this._subnetRefs.internalValue = value;
  }
  public resetSubnetRefs() {
    this._subnetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefsInput() {
    return this._subnetRefs.internalValue;
  }
}
export interface DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec {
  /**
  * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is x86_64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#architectures DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#architectures}
  */
  readonly architectures?: string[];
  /**
  * The code for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#code DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#code}
  */
  readonly code: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode;
  /**
  * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#code_signing_config_arn DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#code_signing_config_arn}
  */
  readonly codeSigningConfigArn?: string;
  /**
  * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead-letter queues (https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#dead_letter_config DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#dead_letter_config}
  */
  readonly deadLetterConfig?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig;
  /**
  * A description of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#description DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Environment variables that are accessible from function code during execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#environment DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#environment}
  */
  readonly environment?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment;
  /**
  * The size of the function's /tmp directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#ephemeral_storage DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#ephemeral_storage}
  */
  readonly ephemeralStorage?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage;
  /**
  * Connection settings for an Amazon EFS file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#file_system_configs DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#file_system_configs}
  */
  readonly fileSystemConfigs?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs[] | cdktf.IResolvable;
  /**
  * Configures options for asynchronous invocation on a function. - DestinationConfig A destination for events after they have been sent to a function for processing. Types of Destinations: Function - The Amazon Resource Name (ARN) of a Lambda function. Queue - The ARN of a standard SQS queue. Topic - The ARN of a standard SNS topic. Event Bus - The ARN of an Amazon EventBridge event bus. - MaximumEventAgeInSeconds The maximum age of a request that Lambda sends to a function for processing. - MaximumRetryAttempts The maximum number of times to retry when the function returns an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#function_event_invoke_config DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#function_event_invoke_config}
  */
  readonly functionEventInvokeConfig?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig;
  /**
  * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see Lambda programming model (https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#handler DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#handler}
  */
  readonly handler?: string;
  /**
  * Container image configuration values (https://docs.aws.amazon.com/lambda/latest/dg/configuration-images.html#configuration-images-settings) that override the values in the container image Dockerfile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#image_config DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#image_config}
  */
  readonly imageConfig?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig;
  /**
  * The ARN of the Key Management Service (KMS) key that's used to encrypt your function's environment variables. If it's not provided, Lambda uses a default service key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#kms_key_arn DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#kms_key_ref DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#kms_key_ref}
  */
  readonly kmsKeyRef?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef;
  /**
  * A list of function layers (https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#layers DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#layers}
  */
  readonly layers?: string[];
  /**
  * The amount of memory available to the function (https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#memory_size DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#memory_size}
  */
  readonly memorySize?: number;
  /**
  * The name of the Lambda function. Name formats * Function name – my-function. * Function ARN – arn:aws:lambda:us-west-2:123456789012:function:my-function. * Partial ARN – 123456789012:function:my-function. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#name DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The type of deployment package. Set to Image for container image and set to Zip for .zip file archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#package_type DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#package_type}
  */
  readonly packageType?: string;
  /**
  * Set to true to publish the first version of the function during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#publish DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * The number of simultaneous executions to reserve for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#reserved_concurrent_executions DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#reserved_concurrent_executions}
  */
  readonly reservedConcurrentExecutions?: number;
  /**
  * The Amazon Resource Name (ARN) of the function's execution role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#role DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#role_ref DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#role_ref}
  */
  readonly roleRef?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef;
  /**
  * The identifier of the function's runtime (https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#runtime DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#runtime}
  */
  readonly runtime?: string;
  /**
  * The function's SnapStart (https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#snap_start DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#snap_start}
  */
  readonly snapStart?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart;
  /**
  * A list of tags (https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#tags DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see Lambda execution environment (https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#timeout DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Set Mode to Active to sample and trace a subset of incoming requests with X-Ray (https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#tracing_config DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#tracing_config}
  */
  readonly tracingConfig?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig;
  /**
  * For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see Configuring a Lambda function to access resources in a VPC (https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#vpc_config DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig;
}

export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    code: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeToTerraform(struct!.code),
    code_signing_config_arn: cdktf.stringToTerraform(struct!.codeSigningConfigArn),
    dead_letter_config: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfigToTerraform(struct!.deadLetterConfig),
    description: cdktf.stringToTerraform(struct!.description),
    environment: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironmentToTerraform(struct!.environment),
    ephemeral_storage: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorageToTerraform(struct!.ephemeralStorage),
    file_system_configs: cdktf.listMapper(dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsToTerraform, false)(struct!.fileSystemConfigs),
    function_event_invoke_config: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigToTerraform(struct!.functionEventInvokeConfig),
    handler: cdktf.stringToTerraform(struct!.handler),
    image_config: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfigToTerraform(struct!.imageConfig),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    kms_key_ref: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct!.kmsKeyRef),
    layers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.layers),
    memory_size: cdktf.numberToTerraform(struct!.memorySize),
    name: cdktf.stringToTerraform(struct!.name),
    package_type: cdktf.stringToTerraform(struct!.packageType),
    publish: cdktf.booleanToTerraform(struct!.publish),
    reserved_concurrent_executions: cdktf.numberToTerraform(struct!.reservedConcurrentExecutions),
    role: cdktf.stringToTerraform(struct!.role),
    role_ref: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefToTerraform(struct!.roleRef),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    snap_start: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStartToTerraform(struct!.snapStart),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tracing_config: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfigToTerraform(struct!.tracingConfig),
    vpc_config: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeToHclTerraform(struct!.code),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode",
    },
    code_signing_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.codeSigningConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_letter_config: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfigToHclTerraform(struct!.deadLetterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment",
    },
    ephemeral_storage: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorageToHclTerraform(struct!.ephemeralStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage",
    },
    file_system_configs: {
      value: cdktf.listMapperHcl(dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsToHclTerraform, false)(struct!.fileSystemConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsList",
    },
    function_event_invoke_config: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigToHclTerraform(struct!.functionEventInvokeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig",
    },
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_config: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfigToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_ref: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct!.kmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef",
    },
    layers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.layers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    memory_size: {
      value: cdktf.numberToHclTerraform(struct!.memorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publish: {
      value: cdktf.booleanToHclTerraform(struct!.publish),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved_concurrent_executions: {
      value: cdktf.numberToHclTerraform(struct!.reservedConcurrentExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_ref: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefToHclTerraform(struct!.roleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef",
    },
    runtime: {
      value: cdktf.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snap_start: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStartToHclTerraform(struct!.snapStart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracing_config: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfigToHclTerraform(struct!.tracingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig",
    },
    vpc_config: {
      value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._code?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code?.internalValue;
    }
    if (this._codeSigningConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigningConfigArn = this._codeSigningConfigArn;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._ephemeralStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorage = this._ephemeralStorage?.internalValue;
    }
    if (this._fileSystemConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfigs = this._fileSystemConfigs?.internalValue;
    }
    if (this._functionEventInvokeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionEventInvokeConfig = this._functionEventInvokeConfig?.internalValue;
    }
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._kmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyRef = this._kmsKeyRef?.internalValue;
    }
    if (this._layers !== undefined) {
      hasAnyValues = true;
      internalValueResult.layers = this._layers;
    }
    if (this._memorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySize = this._memorySize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    if (this._publish !== undefined) {
      hasAnyValues = true;
      internalValueResult.publish = this._publish;
    }
    if (this._reservedConcurrentExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedConcurrentExecutions = this._reservedConcurrentExecutions;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRef = this._roleRef?.internalValue;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._snapStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapStart = this._snapStart?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tracingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfig = this._tracingConfig?.internalValue;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architectures = undefined;
      this._code.internalValue = undefined;
      this._codeSigningConfigArn = undefined;
      this._deadLetterConfig.internalValue = undefined;
      this._description = undefined;
      this._environment.internalValue = undefined;
      this._ephemeralStorage.internalValue = undefined;
      this._fileSystemConfigs.internalValue = undefined;
      this._functionEventInvokeConfig.internalValue = undefined;
      this._handler = undefined;
      this._imageConfig.internalValue = undefined;
      this._kmsKeyArn = undefined;
      this._kmsKeyRef.internalValue = undefined;
      this._layers = undefined;
      this._memorySize = undefined;
      this._name = undefined;
      this._packageType = undefined;
      this._publish = undefined;
      this._reservedConcurrentExecutions = undefined;
      this._role = undefined;
      this._roleRef.internalValue = undefined;
      this._runtime = undefined;
      this._snapStart.internalValue = undefined;
      this._tags = undefined;
      this._timeout = undefined;
      this._tracingConfig.internalValue = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architectures = value.architectures;
      this._code.internalValue = value.code;
      this._codeSigningConfigArn = value.codeSigningConfigArn;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
      this._description = value.description;
      this._environment.internalValue = value.environment;
      this._ephemeralStorage.internalValue = value.ephemeralStorage;
      this._fileSystemConfigs.internalValue = value.fileSystemConfigs;
      this._functionEventInvokeConfig.internalValue = value.functionEventInvokeConfig;
      this._handler = value.handler;
      this._imageConfig.internalValue = value.imageConfig;
      this._kmsKeyArn = value.kmsKeyArn;
      this._kmsKeyRef.internalValue = value.kmsKeyRef;
      this._layers = value.layers;
      this._memorySize = value.memorySize;
      this._name = value.name;
      this._packageType = value.packageType;
      this._publish = value.publish;
      this._reservedConcurrentExecutions = value.reservedConcurrentExecutions;
      this._role = value.role;
      this._roleRef.internalValue = value.roleRef;
      this._runtime = value.runtime;
      this._snapStart.internalValue = value.snapStart;
      this._tags = value.tags;
      this._timeout = value.timeout;
      this._tracingConfig.internalValue = value.tracingConfig;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // architectures - computed: false, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // code - computed: false, optional: false, required: true
  private _code = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecCode) {
    this._code.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // code_signing_config_arn - computed: false, optional: true, required: false
  private _codeSigningConfigArn?: string; 
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }
  public set codeSigningConfigArn(value: string) {
    this._codeSigningConfigArn = value;
  }
  public resetCodeSigningConfigArn() {
    this._codeSigningConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningConfigArnInput() {
    return this._codeSigningConfigArn;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
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

  // environment - computed: false, optional: true, required: false
  private _environment = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecEphemeralStorage) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // file_system_configs - computed: false, optional: true, required: false
  private _fileSystemConfigs = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigsList(this, "file_system_configs", false);
  public get fileSystemConfigs() {
    return this._fileSystemConfigs;
  }
  public putFileSystemConfigs(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFileSystemConfigs[] | cdktf.IResolvable) {
    this._fileSystemConfigs.internalValue = value;
  }
  public resetFileSystemConfigs() {
    this._fileSystemConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigsInput() {
    return this._fileSystemConfigs.internalValue;
  }

  // function_event_invoke_config - computed: false, optional: true, required: false
  private _functionEventInvokeConfig = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfigOutputReference(this, "function_event_invoke_config");
  public get functionEventInvokeConfig() {
    return this._functionEventInvokeConfig;
  }
  public putFunctionEventInvokeConfig(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecFunctionEventInvokeConfig) {
    this._functionEventInvokeConfig.internalValue = value;
  }
  public resetFunctionEventInvokeConfig() {
    this._functionEventInvokeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionEventInvokeConfigInput() {
    return this._functionEventInvokeConfig.internalValue;
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecImageConfig) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // kms_key_ref - computed: false, optional: true, required: false
  private _kmsKeyRef = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRefOutputReference(this, "kms_key_ref");
  public get kmsKeyRef() {
    return this._kmsKeyRef;
  }
  public putKmsKeyRef(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecKmsKeyRef) {
    this._kmsKeyRef.internalValue = value;
  }
  public resetKmsKeyRef() {
    this._kmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRefInput() {
    return this._kmsKeyRef.internalValue;
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[]; 
  public get layers() {
    return this.getListAttribute('layers');
  }
  public set layers(value: string[]) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
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

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // reserved_concurrent_executions - computed: false, optional: true, required: false
  private _reservedConcurrentExecutions?: number; 
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }
  public set reservedConcurrentExecutions(value: number) {
    this._reservedConcurrentExecutions = value;
  }
  public resetReservedConcurrentExecutions() {
    this._reservedConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedConcurrentExecutionsInput() {
    return this._reservedConcurrentExecutions;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_ref - computed: false, optional: true, required: false
  private _roleRef = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRefOutputReference(this, "role_ref");
  public get roleRef() {
    return this._roleRef;
  }
  public putRoleRef(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecRoleRef) {
    this._roleRef.internalValue = value;
  }
  public resetRoleRef() {
    this._roleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // snap_start - computed: false, optional: true, required: false
  private _snapStart = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStartOutputReference(this, "snap_start");
  public get snapStart() {
    return this._snapStart;
  }
  public putSnapStart(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecSnapStart) {
    this._snapStart.internalValue = value;
  }
  public resetSnapStart() {
    this._snapStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapStartInput() {
    return this._snapStart.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfigOutputReference(this, "tracing_config");
  public get tracingConfig() {
    return this._tracingConfig;
  }
  public putTracingConfig(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecTracingConfig) {
    this._tracingConfig.internalValue = value;
  }
  public resetTracingConfig() {
    this._tracingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest k8s_lambda_services_k8s_aws_function_v1alpha1_manifest}
*/
export class DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_lambda_services_k8s_aws_function_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLambdaServicesK8SAwsFunctionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_lambda_services_k8s_aws_function_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/lambda_services_k8s_aws_function_v1alpha1_manifest k8s_lambda_services_k8s_aws_function_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_lambda_services_k8s_aws_function_v1alpha1_manifest',
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLambdaServicesK8SAwsFunctionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
