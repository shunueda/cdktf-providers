// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#metadata DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#spec DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec;
}
export interface DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#annotations DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#labels DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#name DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#additional_config DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#additional_config}
  */
  readonly additionalConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#bucket_host DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#bucket_host}
  */
  readonly bucketHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#bucket_name DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#bucket_port DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#bucket_port}
  */
  readonly bucketPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#region DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#sub_region DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#sub_region}
  */
  readonly subRegion?: string;
}

export function dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpointToTerraform(struct?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalConfig),
    bucket_host: cdktf.stringToTerraform(struct!.bucketHost),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_port: cdktf.numberToTerraform(struct!.bucketPort),
    region: cdktf.stringToTerraform(struct!.region),
    sub_region: cdktf.stringToTerraform(struct!.subRegion),
  }
}


export function dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpointToHclTerraform(struct?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    bucket_host: {
      value: cdktf.stringToHclTerraform(struct!.bucketHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_port: {
      value: cdktf.numberToHclTerraform(struct!.bucketPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_region: {
      value: cdktf.stringToHclTerraform(struct!.subRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfig = this._additionalConfig;
    }
    if (this._bucketHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketHost = this._bucketHost;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPort = this._bucketPort;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._subRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.subRegion = this._subRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfig = undefined;
      this._bucketHost = undefined;
      this._bucketName = undefined;
      this._bucketPort = undefined;
      this._region = undefined;
      this._subRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfig = value.additionalConfig;
      this._bucketHost = value.bucketHost;
      this._bucketName = value.bucketName;
      this._bucketPort = value.bucketPort;
      this._region = value.region;
      this._subRegion = value.subRegion;
    }
  }

  // additional_config - computed: false, optional: true, required: false
  private _additionalConfig?: { [key: string]: string }; 
  public get additionalConfig() {
    return this.getStringMapAttribute('additional_config');
  }
  public set additionalConfig(value: { [key: string]: string }) {
    this._additionalConfig = value;
  }
  public resetAdditionalConfig() {
    this._additionalConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigInput() {
    return this._additionalConfig;
  }

  // bucket_host - computed: false, optional: true, required: false
  private _bucketHost?: string; 
  public get bucketHost() {
    return this.getStringAttribute('bucket_host');
  }
  public set bucketHost(value: string) {
    this._bucketHost = value;
  }
  public resetBucketHost() {
    this._bucketHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketHostInput() {
    return this._bucketHost;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_port - computed: false, optional: true, required: false
  private _bucketPort?: number; 
  public get bucketPort() {
    return this.getNumberAttribute('bucket_port');
  }
  public set bucketPort(value: number) {
    this._bucketPort = value;
  }
  public resetBucketPort() {
    this._bucketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPortInput() {
    return this._bucketPort;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sub_region - computed: false, optional: true, required: false
  private _subRegion?: string; 
  public get subRegion() {
    return this.getStringAttribute('sub_region');
  }
  public set subRegion(value: string) {
    this._subRegion = value;
  }
  public resetSubRegion() {
    this._subRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subRegionInput() {
    return this._subRegion;
  }
}
export interface DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#additional_state DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#additional_state}
  */
  readonly additionalState?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#authentication DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#authentication}
  */
  readonly authentication?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#claim_ref DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#claim_ref}
  */
  readonly claimRef?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#endpoint DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#endpoint}
  */
  readonly endpoint?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#reclaim_policy DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#storage_class_name DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecToTerraform(struct?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_state: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalState),
    authentication: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authentication),
    claim_ref: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.claimRef),
    endpoint: dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpointToTerraform(struct!.endpoint),
    reclaim_policy: cdktf.stringToTerraform(struct!.reclaimPolicy),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_state: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalState),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authentication: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authentication),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    claim_ref: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.claimRef),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint: {
      value: dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint",
    },
    reclaim_policy: {
      value: cdktf.stringToHclTerraform(struct!.reclaimPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalState = this._additionalState;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._claimRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimRef = this._claimRef;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._reclaimPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimPolicy = this._reclaimPolicy;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalState = undefined;
      this._authentication = undefined;
      this._claimRef = undefined;
      this._endpoint.internalValue = undefined;
      this._reclaimPolicy = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalState = value.additionalState;
      this._authentication = value.authentication;
      this._claimRef = value.claimRef;
      this._endpoint.internalValue = value.endpoint;
      this._reclaimPolicy = value.reclaimPolicy;
      this._storageClassName = value.storageClassName;
    }
  }

  // additional_state - computed: false, optional: true, required: false
  private _additionalState?: { [key: string]: string }; 
  public get additionalState() {
    return this.getStringMapAttribute('additional_state');
  }
  public set additionalState(value: { [key: string]: string }) {
    this._additionalState = value;
  }
  public resetAdditionalState() {
    this._additionalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStateInput() {
    return this._additionalState;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: { [key: string]: string }; 
  public get authentication() {
    return this.getStringMapAttribute('authentication');
  }
  public set authentication(value: { [key: string]: string }) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // claim_ref - computed: false, optional: true, required: false
  private _claimRef?: { [key: string]: string }; 
  public get claimRef() {
    return this.getStringMapAttribute('claim_ref');
  }
  public set claimRef(value: { [key: string]: string }) {
    this._claimRef = value;
  }
  public resetClaimRef() {
    this._claimRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimRefInput() {
    return this._claimRef;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest k8s_objectbucket_io_object_bucket_v1alpha1_manifest}
*/
export class DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_objectbucket_io_object_bucket_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SObjectbucketIoObjectBucketV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_objectbucket_io_object_bucket_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/objectbucket_io_object_bucket_v1alpha1_manifest k8s_objectbucket_io_object_bucket_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_objectbucket_io_object_bucket_v1alpha1_manifest',
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
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec) {
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
      metadata: dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SObjectbucketIoObjectBucketV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
