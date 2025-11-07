// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata;
  /**
  * The specification of Kafka MirrorMaker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#spec DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec;
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespace DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessTokenToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessTokenToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey {
  /**
  * The name of the file certificate in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate}
  */
  readonly certificate: string;
  /**
  * The name of the private key in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKeyToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKeyToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._key = value.key;
      this._secretName = value.secretName;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret {
  /**
  * The name of the key in the Secret under which the password is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#password DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#password}
  */
  readonly password: string;
  /**
  * The name of the Secret containing the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._secretName = value.secretName;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshTokenToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshTokenToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates {
  /**
  * The name of the file certificate in the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * Pattern for the certificate files in the secret. Use the link:https://en.wikipedia.org/wiki/Glob_(programming)[_glob syntax_] for the pattern. All files in the secret that match the pattern are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pattern DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * The name of the Secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._pattern = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._pattern = value.pattern;
      this._secretName = value.secretName;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication {
  /**
  * Link to Kubernetes Secret containing the access token which was obtained from the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#access_token DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#access_token}
  */
  readonly accessToken?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken;
  /**
  * Configure whether access token should be treated as JWT. This should be set to 'false' if the authorization server returns opaque tokens. Defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#access_token_is_jwt DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#access_token_is_jwt}
  */
  readonly accessTokenIsJwt?: boolean | cdktf.IResolvable;
  /**
  * Path to the token file containing an access token to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#access_token_location DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#access_token_location}
  */
  readonly accessTokenLocation?: string;
  /**
  * OAuth audience to use when authenticating against the authorization server. Some authorization servers require the audience to be explicitly set. The possible values depend on how the authorization server is configured. By default, 'audience' is not specified when performing the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#audience DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Reference to the 'Secret' which holds the certificate and private key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate_and_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate_and_key}
  */
  readonly certificateAndKey?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey;
  /**
  * Link to Kubernetes secret containing the client assertion which was manually configured for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_assertion DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_assertion}
  */
  readonly clientAssertion?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion;
  /**
  * Path to the file containing the client assertion to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_assertion_location DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_assertion_location}
  */
  readonly clientAssertionLocation?: string;
  /**
  * The client assertion type. If not set, and either 'clientAssertion' or 'clientAssertionLocation' is configured, this value defaults to 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_assertion_type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_assertion_type}
  */
  readonly clientAssertionType?: string;
  /**
  * OAuth Client ID which the Kafka client can use to authenticate against the OAuth server and use the token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_id DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Link to Kubernetes Secret containing the OAuth client secret which the Kafka client can use to authenticate against the OAuth server and use the token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_secret DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret;
  /**
  * The connect timeout in seconds when connecting to authorization server. If not set, the effective connect timeout is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#connect_timeout_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#connect_timeout_seconds}
  */
  readonly connectTimeoutSeconds?: number;
  /**
  * Enable or disable TLS hostname verification. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#disable_tls_hostname_verification DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#disable_tls_hostname_verification}
  */
  readonly disableTlsHostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable OAuth metrics. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#enable_metrics DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#enable_metrics}
  */
  readonly enableMetrics?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of retries to attempt if an initial HTTP request fails. If not set, the default is to not attempt any retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#http_retries DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#http_retries}
  */
  readonly httpRetries?: number;
  /**
  * The pause to take before retrying a failed HTTP request. If not set, the default is to not pause at all but to immediately repeat a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#http_retry_pause_ms DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#http_retry_pause_ms}
  */
  readonly httpRetryPauseMs?: number;
  /**
  * Whether the Accept header should be set in requests to the authorization servers. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#include_accept_header DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#include_accept_header}
  */
  readonly includeAcceptHeader?: boolean | cdktf.IResolvable;
  /**
  * Set or limit time-to-live of the access tokens to the specified number of seconds. This should be set if the authorization server returns opaque tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#max_token_expiry_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#max_token_expiry_seconds}
  */
  readonly maxTokenExpirySeconds?: number;
  /**
  * Reference to the 'Secret' which holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#password_secret DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#password_secret}
  */
  readonly passwordSecret?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret;
  /**
  * The read timeout in seconds when connecting to authorization server. If not set, the effective read timeout is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#read_timeout_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#read_timeout_seconds}
  */
  readonly readTimeoutSeconds?: number;
  /**
  * Link to Kubernetes Secret containing the refresh token which can be used to obtain access token from the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#refresh_token DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#refresh_token}
  */
  readonly refreshToken?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken;
  /**
  * SASL extensions parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#sasl_extensions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#sasl_extensions}
  */
  readonly saslExtensions?: { [key: string]: string };
  /**
  * OAuth scope to use when authenticating against the authorization server. Some authorization servers require this to be set. The possible values depend on how authorization server is configured. By default 'scope' is not specified when doing the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#scope DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Trusted certificates for TLS connection to the OAuth server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tls_trusted_certificates DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tls_trusted_certificates}
  */
  readonly tlsTrustedCertificates?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates[] | cdktf.IResolvable;
  /**
  * Authorization server token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#token_endpoint_uri DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#token_endpoint_uri}
  */
  readonly tokenEndpointUri?: string;
  /**
  * Authentication type. Currently the supported types are 'tls', 'scram-sha-256', 'scram-sha-512', 'plain', and 'oauth'. 'scram-sha-256' and 'scram-sha-512' types use SASL SCRAM-SHA-256 and SASL SCRAM-SHA-512 Authentication, respectively. 'plain' type uses SASL PLAIN Authentication. 'oauth' type uses SASL OAUTHBEARER Authentication. The 'tls' type uses TLS Client Authentication. The 'tls' type is supported only over TLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Username used for the authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#username DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessTokenToTerraform(struct!.accessToken),
    access_token_is_jwt: cdktf.booleanToTerraform(struct!.accessTokenIsJwt),
    access_token_location: cdktf.stringToTerraform(struct!.accessTokenLocation),
    audience: cdktf.stringToTerraform(struct!.audience),
    certificate_and_key: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKeyToTerraform(struct!.certificateAndKey),
    client_assertion: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertionToTerraform(struct!.clientAssertion),
    client_assertion_location: cdktf.stringToTerraform(struct!.clientAssertionLocation),
    client_assertion_type: cdktf.stringToTerraform(struct!.clientAssertionType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecretToTerraform(struct!.clientSecret),
    connect_timeout_seconds: cdktf.numberToTerraform(struct!.connectTimeoutSeconds),
    disable_tls_hostname_verification: cdktf.booleanToTerraform(struct!.disableTlsHostnameVerification),
    enable_metrics: cdktf.booleanToTerraform(struct!.enableMetrics),
    http_retries: cdktf.numberToTerraform(struct!.httpRetries),
    http_retry_pause_ms: cdktf.numberToTerraform(struct!.httpRetryPauseMs),
    include_accept_header: cdktf.booleanToTerraform(struct!.includeAcceptHeader),
    max_token_expiry_seconds: cdktf.numberToTerraform(struct!.maxTokenExpirySeconds),
    password_secret: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecretToTerraform(struct!.passwordSecret),
    read_timeout_seconds: cdktf.numberToTerraform(struct!.readTimeoutSeconds),
    refresh_token: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshTokenToTerraform(struct!.refreshToken),
    sasl_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.saslExtensions),
    scope: cdktf.stringToTerraform(struct!.scope),
    tls_trusted_certificates: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesToTerraform, false)(struct!.tlsTrustedCertificates),
    token_endpoint_uri: cdktf.stringToTerraform(struct!.tokenEndpointUri),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken",
    },
    access_token_is_jwt: {
      value: cdktf.booleanToHclTerraform(struct!.accessTokenIsJwt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_token_location: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_and_key: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKeyToHclTerraform(struct!.certificateAndKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey",
    },
    client_assertion: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertionToHclTerraform(struct!.clientAssertion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion",
    },
    client_assertion_location: {
      value: cdktf.stringToHclTerraform(struct!.clientAssertionLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_assertion_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAssertionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret",
    },
    connect_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_tls_hostname_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableTlsHostnameVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_retries: {
      value: cdktf.numberToHclTerraform(struct!.httpRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_retry_pause_ms: {
      value: cdktf.numberToHclTerraform(struct!.httpRetryPauseMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_accept_header: {
      value: cdktf.booleanToHclTerraform(struct!.includeAcceptHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_token_expiry_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxTokenExpirySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecretToHclTerraform(struct!.passwordSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret",
    },
    read_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshTokenToHclTerraform(struct!.refreshToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken",
    },
    sasl_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.saslExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_trusted_certificates: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesToHclTerraform, false)(struct!.tlsTrustedCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesList",
    },
    token_endpoint_uri: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointUri),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    if (this._accessTokenIsJwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIsJwt = this._accessTokenIsJwt;
    }
    if (this._accessTokenLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenLocation = this._accessTokenLocation;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._certificateAndKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAndKey = this._certificateAndKey?.internalValue;
    }
    if (this._clientAssertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAssertion = this._clientAssertion?.internalValue;
    }
    if (this._clientAssertionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAssertionLocation = this._clientAssertionLocation;
    }
    if (this._clientAssertionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAssertionType = this._clientAssertionType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._connectTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutSeconds = this._connectTimeoutSeconds;
    }
    if (this._disableTlsHostnameVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTlsHostnameVerification = this._disableTlsHostnameVerification;
    }
    if (this._enableMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMetrics = this._enableMetrics;
    }
    if (this._httpRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetries = this._httpRetries;
    }
    if (this._httpRetryPauseMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryPauseMs = this._httpRetryPauseMs;
    }
    if (this._includeAcceptHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAcceptHeader = this._includeAcceptHeader;
    }
    if (this._maxTokenExpirySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokenExpirySeconds = this._maxTokenExpirySeconds;
    }
    if (this._passwordSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecret = this._passwordSecret?.internalValue;
    }
    if (this._readTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeoutSeconds = this._readTimeoutSeconds;
    }
    if (this._refreshToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken?.internalValue;
    }
    if (this._saslExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslExtensions = this._saslExtensions;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tlsTrustedCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTrustedCertificates = this._tlsTrustedCertificates?.internalValue;
    }
    if (this._tokenEndpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointUri = this._tokenEndpointUri;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = undefined;
      this._accessTokenIsJwt = undefined;
      this._accessTokenLocation = undefined;
      this._audience = undefined;
      this._certificateAndKey.internalValue = undefined;
      this._clientAssertion.internalValue = undefined;
      this._clientAssertionLocation = undefined;
      this._clientAssertionType = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._connectTimeoutSeconds = undefined;
      this._disableTlsHostnameVerification = undefined;
      this._enableMetrics = undefined;
      this._httpRetries = undefined;
      this._httpRetryPauseMs = undefined;
      this._includeAcceptHeader = undefined;
      this._maxTokenExpirySeconds = undefined;
      this._passwordSecret.internalValue = undefined;
      this._readTimeoutSeconds = undefined;
      this._refreshToken.internalValue = undefined;
      this._saslExtensions = undefined;
      this._scope = undefined;
      this._tlsTrustedCertificates.internalValue = undefined;
      this._tokenEndpointUri = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = value.accessToken;
      this._accessTokenIsJwt = value.accessTokenIsJwt;
      this._accessTokenLocation = value.accessTokenLocation;
      this._audience = value.audience;
      this._certificateAndKey.internalValue = value.certificateAndKey;
      this._clientAssertion.internalValue = value.clientAssertion;
      this._clientAssertionLocation = value.clientAssertionLocation;
      this._clientAssertionType = value.clientAssertionType;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._connectTimeoutSeconds = value.connectTimeoutSeconds;
      this._disableTlsHostnameVerification = value.disableTlsHostnameVerification;
      this._enableMetrics = value.enableMetrics;
      this._httpRetries = value.httpRetries;
      this._httpRetryPauseMs = value.httpRetryPauseMs;
      this._includeAcceptHeader = value.includeAcceptHeader;
      this._maxTokenExpirySeconds = value.maxTokenExpirySeconds;
      this._passwordSecret.internalValue = value.passwordSecret;
      this._readTimeoutSeconds = value.readTimeoutSeconds;
      this._refreshToken.internalValue = value.refreshToken;
      this._saslExtensions = value.saslExtensions;
      this._scope = value.scope;
      this._tlsTrustedCertificates.internalValue = value.tlsTrustedCertificates;
      this._tokenEndpointUri = value.tokenEndpointUri;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationAccessToken) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }

  // access_token_is_jwt - computed: false, optional: true, required: false
  private _accessTokenIsJwt?: boolean | cdktf.IResolvable; 
  public get accessTokenIsJwt() {
    return this.getBooleanAttribute('access_token_is_jwt');
  }
  public set accessTokenIsJwt(value: boolean | cdktf.IResolvable) {
    this._accessTokenIsJwt = value;
  }
  public resetAccessTokenIsJwt() {
    this._accessTokenIsJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIsJwtInput() {
    return this._accessTokenIsJwt;
  }

  // access_token_location - computed: false, optional: true, required: false
  private _accessTokenLocation?: string; 
  public get accessTokenLocation() {
    return this.getStringAttribute('access_token_location');
  }
  public set accessTokenLocation(value: string) {
    this._accessTokenLocation = value;
  }
  public resetAccessTokenLocation() {
    this._accessTokenLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLocationInput() {
    return this._accessTokenLocation;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // certificate_and_key - computed: false, optional: true, required: false
  private _certificateAndKey = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKeyOutputReference(this, "certificate_and_key");
  public get certificateAndKey() {
    return this._certificateAndKey;
  }
  public putCertificateAndKey(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationCertificateAndKey) {
    this._certificateAndKey.internalValue = value;
  }
  public resetCertificateAndKey() {
    this._certificateAndKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAndKeyInput() {
    return this._certificateAndKey.internalValue;
  }

  // client_assertion - computed: false, optional: true, required: false
  private _clientAssertion = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertionOutputReference(this, "client_assertion");
  public get clientAssertion() {
    return this._clientAssertion;
  }
  public putClientAssertion(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientAssertion) {
    this._clientAssertion.internalValue = value;
  }
  public resetClientAssertion() {
    this._clientAssertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionInput() {
    return this._clientAssertion.internalValue;
  }

  // client_assertion_location - computed: false, optional: true, required: false
  private _clientAssertionLocation?: string; 
  public get clientAssertionLocation() {
    return this.getStringAttribute('client_assertion_location');
  }
  public set clientAssertionLocation(value: string) {
    this._clientAssertionLocation = value;
  }
  public resetClientAssertionLocation() {
    this._clientAssertionLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionLocationInput() {
    return this._clientAssertionLocation;
  }

  // client_assertion_type - computed: false, optional: true, required: false
  private _clientAssertionType?: string; 
  public get clientAssertionType() {
    return this.getStringAttribute('client_assertion_type');
  }
  public set clientAssertionType(value: string) {
    this._clientAssertionType = value;
  }
  public resetClientAssertionType() {
    this._clientAssertionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionTypeInput() {
    return this._clientAssertionType;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // connect_timeout_seconds - computed: false, optional: true, required: false
  private _connectTimeoutSeconds?: number; 
  public get connectTimeoutSeconds() {
    return this.getNumberAttribute('connect_timeout_seconds');
  }
  public set connectTimeoutSeconds(value: number) {
    this._connectTimeoutSeconds = value;
  }
  public resetConnectTimeoutSeconds() {
    this._connectTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutSecondsInput() {
    return this._connectTimeoutSeconds;
  }

  // disable_tls_hostname_verification - computed: false, optional: true, required: false
  private _disableTlsHostnameVerification?: boolean | cdktf.IResolvable; 
  public get disableTlsHostnameVerification() {
    return this.getBooleanAttribute('disable_tls_hostname_verification');
  }
  public set disableTlsHostnameVerification(value: boolean | cdktf.IResolvable) {
    this._disableTlsHostnameVerification = value;
  }
  public resetDisableTlsHostnameVerification() {
    this._disableTlsHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsHostnameVerificationInput() {
    return this._disableTlsHostnameVerification;
  }

  // enable_metrics - computed: false, optional: true, required: false
  private _enableMetrics?: boolean | cdktf.IResolvable; 
  public get enableMetrics() {
    return this.getBooleanAttribute('enable_metrics');
  }
  public set enableMetrics(value: boolean | cdktf.IResolvable) {
    this._enableMetrics = value;
  }
  public resetEnableMetrics() {
    this._enableMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMetricsInput() {
    return this._enableMetrics;
  }

  // http_retries - computed: false, optional: true, required: false
  private _httpRetries?: number; 
  public get httpRetries() {
    return this.getNumberAttribute('http_retries');
  }
  public set httpRetries(value: number) {
    this._httpRetries = value;
  }
  public resetHttpRetries() {
    this._httpRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetriesInput() {
    return this._httpRetries;
  }

  // http_retry_pause_ms - computed: false, optional: true, required: false
  private _httpRetryPauseMs?: number; 
  public get httpRetryPauseMs() {
    return this.getNumberAttribute('http_retry_pause_ms');
  }
  public set httpRetryPauseMs(value: number) {
    this._httpRetryPauseMs = value;
  }
  public resetHttpRetryPauseMs() {
    this._httpRetryPauseMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryPauseMsInput() {
    return this._httpRetryPauseMs;
  }

  // include_accept_header - computed: false, optional: true, required: false
  private _includeAcceptHeader?: boolean | cdktf.IResolvable; 
  public get includeAcceptHeader() {
    return this.getBooleanAttribute('include_accept_header');
  }
  public set includeAcceptHeader(value: boolean | cdktf.IResolvable) {
    this._includeAcceptHeader = value;
  }
  public resetIncludeAcceptHeader() {
    this._includeAcceptHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAcceptHeaderInput() {
    return this._includeAcceptHeader;
  }

  // max_token_expiry_seconds - computed: false, optional: true, required: false
  private _maxTokenExpirySeconds?: number; 
  public get maxTokenExpirySeconds() {
    return this.getNumberAttribute('max_token_expiry_seconds');
  }
  public set maxTokenExpirySeconds(value: number) {
    this._maxTokenExpirySeconds = value;
  }
  public resetMaxTokenExpirySeconds() {
    this._maxTokenExpirySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenExpirySecondsInput() {
    return this._maxTokenExpirySeconds;
  }

  // password_secret - computed: false, optional: true, required: false
  private _passwordSecret = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecretOutputReference(this, "password_secret");
  public get passwordSecret() {
    return this._passwordSecret;
  }
  public putPasswordSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationPasswordSecret) {
    this._passwordSecret.internalValue = value;
  }
  public resetPasswordSecret() {
    this._passwordSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretInput() {
    return this._passwordSecret.internalValue;
  }

  // read_timeout_seconds - computed: false, optional: true, required: false
  private _readTimeoutSeconds?: number; 
  public get readTimeoutSeconds() {
    return this.getNumberAttribute('read_timeout_seconds');
  }
  public set readTimeoutSeconds(value: number) {
    this._readTimeoutSeconds = value;
  }
  public resetReadTimeoutSeconds() {
    this._readTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutSecondsInput() {
    return this._readTimeoutSeconds;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshTokenOutputReference(this, "refresh_token");
  public get refreshToken() {
    return this._refreshToken;
  }
  public putRefreshToken(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationRefreshToken) {
    this._refreshToken.internalValue = value;
  }
  public resetRefreshToken() {
    this._refreshToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken.internalValue;
  }

  // sasl_extensions - computed: false, optional: true, required: false
  private _saslExtensions?: { [key: string]: string }; 
  public get saslExtensions() {
    return this.getStringMapAttribute('sasl_extensions');
  }
  public set saslExtensions(value: { [key: string]: string }) {
    this._saslExtensions = value;
  }
  public resetSaslExtensions() {
    this._saslExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslExtensionsInput() {
    return this._saslExtensions;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tls_trusted_certificates - computed: false, optional: true, required: false
  private _tlsTrustedCertificates = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificatesList(this, "tls_trusted_certificates", false);
  public get tlsTrustedCertificates() {
    return this._tlsTrustedCertificates;
  }
  public putTlsTrustedCertificates(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationTlsTrustedCertificates[] | cdktf.IResolvable) {
    this._tlsTrustedCertificates.internalValue = value;
  }
  public resetTlsTrustedCertificates() {
    this._tlsTrustedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTrustedCertificatesInput() {
    return this._tlsTrustedCertificates.internalValue;
  }

  // token_endpoint_uri - computed: false, optional: true, required: false
  private _tokenEndpointUri?: string; 
  public get tokenEndpointUri() {
    return this.getStringAttribute('token_endpoint_uri');
  }
  public set tokenEndpointUri(value: string) {
    this._tokenEndpointUri = value;
  }
  public resetTokenEndpointUri() {
    this._tokenEndpointUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointUriInput() {
    return this._tokenEndpointUri;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates {
  /**
  * The name of the file certificate in the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * Pattern for the certificate files in the secret. Use the link:https://en.wikipedia.org/wiki/Glob_(programming)[_glob syntax_] for the pattern. All files in the secret that match the pattern are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pattern DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * The name of the Secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._pattern = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._pattern = value.pattern;
      this._secretName = value.secretName;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls {
  /**
  * Trusted certificates for TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#trusted_certificates DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#trusted_certificates}
  */
  readonly trustedCertificates?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_certificates: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesToTerraform, false)(struct!.trustedCertificates),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_certificates: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesToHclTerraform, false)(struct!.trustedCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificates = this._trustedCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trustedCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trustedCertificates.internalValue = value.trustedCertificates;
    }
  }

  // trusted_certificates - computed: false, optional: true, required: false
  private _trustedCertificates = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificatesList(this, "trusted_certificates", false);
  public get trustedCertificates() {
    return this._trustedCertificates;
  }
  public putTrustedCertificates(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsTrustedCertificates[] | cdktf.IResolvable) {
    this._trustedCertificates.internalValue = value;
  }
  public resetTrustedCertificates() {
    this._trustedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificatesInput() {
    return this._trustedCertificates.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer {
  /**
  * Authentication configuration for connecting to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#authentication DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#authentication}
  */
  readonly authentication?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication;
  /**
  * A list of host:port pairs for establishing the initial connection to the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#bootstrap_servers DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * The MirrorMaker consumer config. Properties with the following prefixes cannot be set: ssl., bootstrap.servers, group.id, sasl., security., interceptor.classes (with the exception of: ssl.endpoint.identification.algorithm, ssl.cipher.suites, ssl.protocol, ssl.enabled.protocols).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#config DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * A unique string that identifies the consumer group this consumer belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#group_id DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Specifies the number of consumer stream threads to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#num_streams DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#num_streams}
  */
  readonly numStreams?: number;
  /**
  * Specifies the offset auto-commit interval in ms. Default value is 60000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#offset_commit_interval DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#offset_commit_interval}
  */
  readonly offsetCommitInterval?: number;
  /**
  * TLS configuration for connecting MirrorMaker to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tls DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationToTerraform(struct!.authentication),
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    num_streams: cdktf.numberToTerraform(struct!.numStreams),
    offset_commit_interval: cdktf.numberToTerraform(struct!.offsetCommitInterval),
    tls: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication",
    },
    bootstrap_servers: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_streams: {
      value: cdktf.numberToHclTerraform(struct!.numStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset_commit_interval: {
      value: cdktf.numberToHclTerraform(struct!.offsetCommitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._numStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.numStreams = this._numStreams;
    }
    if (this._offsetCommitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetCommitInterval = this._offsetCommitInterval;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._bootstrapServers = undefined;
      this._config = undefined;
      this._groupId = undefined;
      this._numStreams = undefined;
      this._offsetCommitInterval = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._bootstrapServers = value.bootstrapServers;
      this._config = value.config;
      this._groupId = value.groupId;
      this._numStreams = value.numStreams;
      this._offsetCommitInterval = value.offsetCommitInterval;
      this._tls.internalValue = value.tls;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // num_streams - computed: false, optional: true, required: false
  private _numStreams?: number; 
  public get numStreams() {
    return this.getNumberAttribute('num_streams');
  }
  public set numStreams(value: number) {
    this._numStreams = value;
  }
  public resetNumStreams() {
    this._numStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numStreamsInput() {
    return this._numStreams;
  }

  // offset_commit_interval - computed: false, optional: true, required: false
  private _offsetCommitInterval?: number; 
  public get offsetCommitInterval() {
    return this.getNumberAttribute('offset_commit_interval');
  }
  public set offsetCommitInterval(value: number) {
    this._offsetCommitInterval = value;
  }
  public resetOffsetCommitInterval() {
    this._offsetCommitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetCommitIntervalInput() {
    return this._offsetCommitInterval;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties {
  /**
  * The system property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * The system property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions {
  /**
  * Specifies whether the Garbage Collection logging is enabled. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#gc_logging_enabled DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#gc_logging_enabled}
  */
  readonly gcLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * A map of additional system properties which will be passed using the '-D' option to the JVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#java_system_properties DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#java_system_properties}
  */
  readonly javaSystemProperties?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties[] | cdktf.IResolvable;
  /**
  * -Xms option to to the JVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#xms DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#xms}
  */
  readonly xms?: string;
  /**
  * -Xmx option to to the JVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#xmx DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#xmx}
  */
  readonly xmx?: string;
  /**
  * A map of -XX options to the JVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#xx DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#xx}
  */
  readonly xx?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gc_logging_enabled: cdktf.booleanToTerraform(struct!.gcLoggingEnabled),
    java_system_properties: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesToTerraform, false)(struct!.javaSystemProperties),
    xms: cdktf.stringToTerraform(struct!.xms),
    xmx: cdktf.stringToTerraform(struct!.xmx),
    xx: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.xx),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gc_logging_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gcLoggingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    java_system_properties: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesToHclTerraform, false)(struct!.javaSystemProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesList",
    },
    xms: {
      value: cdktf.stringToHclTerraform(struct!.xms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xmx: {
      value: cdktf.stringToHclTerraform(struct!.xmx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xx: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.xx),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcLoggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcLoggingEnabled = this._gcLoggingEnabled;
    }
    if (this._javaSystemProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaSystemProperties = this._javaSystemProperties?.internalValue;
    }
    if (this._xms !== undefined) {
      hasAnyValues = true;
      internalValueResult.xms = this._xms;
    }
    if (this._xmx !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmx = this._xmx;
    }
    if (this._xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.xx = this._xx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcLoggingEnabled = undefined;
      this._javaSystemProperties.internalValue = undefined;
      this._xms = undefined;
      this._xmx = undefined;
      this._xx = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcLoggingEnabled = value.gcLoggingEnabled;
      this._javaSystemProperties.internalValue = value.javaSystemProperties;
      this._xms = value.xms;
      this._xmx = value.xmx;
      this._xx = value.xx;
    }
  }

  // gc_logging_enabled - computed: false, optional: true, required: false
  private _gcLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get gcLoggingEnabled() {
    return this.getBooleanAttribute('gc_logging_enabled');
  }
  public set gcLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._gcLoggingEnabled = value;
  }
  public resetGcLoggingEnabled() {
    this._gcLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcLoggingEnabledInput() {
    return this._gcLoggingEnabled;
  }

  // java_system_properties - computed: false, optional: true, required: false
  private _javaSystemProperties = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemPropertiesList(this, "java_system_properties", false);
  public get javaSystemProperties() {
    return this._javaSystemProperties;
  }
  public putJavaSystemProperties(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsJavaSystemProperties[] | cdktf.IResolvable) {
    this._javaSystemProperties.internalValue = value;
  }
  public resetJavaSystemProperties() {
    this._javaSystemProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaSystemPropertiesInput() {
    return this._javaSystemProperties.internalValue;
  }

  // xms - computed: false, optional: true, required: false
  private _xms?: string; 
  public get xms() {
    return this.getStringAttribute('xms');
  }
  public set xms(value: string) {
    this._xms = value;
  }
  public resetXms() {
    this._xms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmsInput() {
    return this._xms;
  }

  // xmx - computed: false, optional: true, required: false
  private _xmx?: string; 
  public get xmx() {
    return this.getStringAttribute('xmx');
  }
  public set xmx(value: string) {
    this._xmx = value;
  }
  public resetXmx() {
    this._xmx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmxInput() {
    return this._xmx;
  }

  // xx - computed: false, optional: true, required: false
  private _xx?: { [key: string]: string }; 
  public get xx() {
    return this.getStringMapAttribute('xx');
  }
  public set xx(value: { [key: string]: string }) {
    this._xx = value;
  }
  public resetXx() {
    this._xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xxInput() {
    return this._xx;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#failure_threshold DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The initial delay before first the health is first checked. Default to 15 seconds. Minimum value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#initial_delay_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#period_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#success_threshold DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The timeout for each attempted health check. Default to 5 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#timeout_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbeToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbeToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRefToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom {
  /**
  * Reference to the key in the ConfigMap containing the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#config_map_key_ref DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging {
  /**
  * A Map from logger name to logger level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#loggers DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#loggers}
  */
  readonly loggers?: { [key: string]: string };
  /**
  * Logging type, must be either 'inline' or 'external'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * 'ConfigMap' entry where the logging configuration is stored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#value_from DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loggers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.loggers),
    type: cdktf.stringToTerraform(struct!.type),
    value_from: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loggers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.loggers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loggers = undefined;
      this._type = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loggers = value.loggers;
      this._type = value.type;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers?: { [key: string]: string }; 
  public get loggers() {
    return this.getStringMapAttribute('loggers');
  }
  public set loggers(value: { [key: string]: string }) {
    this._loggers = value;
  }
  public resetLoggers() {
    this._loggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingValueFrom) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRefToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom {
  /**
  * Reference to the key in the ConfigMap containing the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#config_map_key_ref DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig {
  /**
  * Metrics type. Only 'jmxPrometheusExporter' supported currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * ConfigMap entry where the Prometheus JMX Exporter configuration is stored. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#value_from DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#value_from}
  */
  readonly valueFrom: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value_from: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._valueFrom.internalValue = value.valueFrom;
    }
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigValueFrom) {
    this._valueFrom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessTokenToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessTokenToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey {
  /**
  * The name of the file certificate in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate}
  */
  readonly certificate: string;
  /**
  * The name of the private key in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKeyToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKeyToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._key = value.key;
      this._secretName = value.secretName;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret {
  /**
  * The name of the key in the Secret under which the password is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#password DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#password}
  */
  readonly password: string;
  /**
  * The name of the Secret containing the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._secretName = value.secretName;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken {
  /**
  * The key under which the secret value is stored in the Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * The name of the Kubernetes Secret containing the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshTokenToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshTokenToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken | cdktf.IResolvable): any {
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
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates {
  /**
  * The name of the file certificate in the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * Pattern for the certificate files in the secret. Use the link:https://en.wikipedia.org/wiki/Glob_(programming)[_glob syntax_] for the pattern. All files in the secret that match the pattern are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pattern DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * The name of the Secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._pattern = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._pattern = value.pattern;
      this._secretName = value.secretName;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication {
  /**
  * Link to Kubernetes Secret containing the access token which was obtained from the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#access_token DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#access_token}
  */
  readonly accessToken?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken;
  /**
  * Configure whether access token should be treated as JWT. This should be set to 'false' if the authorization server returns opaque tokens. Defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#access_token_is_jwt DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#access_token_is_jwt}
  */
  readonly accessTokenIsJwt?: boolean | cdktf.IResolvable;
  /**
  * Path to the token file containing an access token to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#access_token_location DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#access_token_location}
  */
  readonly accessTokenLocation?: string;
  /**
  * OAuth audience to use when authenticating against the authorization server. Some authorization servers require the audience to be explicitly set. The possible values depend on how the authorization server is configured. By default, 'audience' is not specified when performing the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#audience DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#audience}
  */
  readonly audience?: string;
  /**
  * Reference to the 'Secret' which holds the certificate and private key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate_and_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate_and_key}
  */
  readonly certificateAndKey?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey;
  /**
  * Link to Kubernetes secret containing the client assertion which was manually configured for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_assertion DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_assertion}
  */
  readonly clientAssertion?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion;
  /**
  * Path to the file containing the client assertion to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_assertion_location DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_assertion_location}
  */
  readonly clientAssertionLocation?: string;
  /**
  * The client assertion type. If not set, and either 'clientAssertion' or 'clientAssertionLocation' is configured, this value defaults to 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_assertion_type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_assertion_type}
  */
  readonly clientAssertionType?: string;
  /**
  * OAuth Client ID which the Kafka client can use to authenticate against the OAuth server and use the token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_id DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Link to Kubernetes Secret containing the OAuth client secret which the Kafka client can use to authenticate against the OAuth server and use the token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#client_secret DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret;
  /**
  * The connect timeout in seconds when connecting to authorization server. If not set, the effective connect timeout is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#connect_timeout_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#connect_timeout_seconds}
  */
  readonly connectTimeoutSeconds?: number;
  /**
  * Enable or disable TLS hostname verification. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#disable_tls_hostname_verification DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#disable_tls_hostname_verification}
  */
  readonly disableTlsHostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable OAuth metrics. Default value is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#enable_metrics DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#enable_metrics}
  */
  readonly enableMetrics?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of retries to attempt if an initial HTTP request fails. If not set, the default is to not attempt any retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#http_retries DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#http_retries}
  */
  readonly httpRetries?: number;
  /**
  * The pause to take before retrying a failed HTTP request. If not set, the default is to not pause at all but to immediately repeat a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#http_retry_pause_ms DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#http_retry_pause_ms}
  */
  readonly httpRetryPauseMs?: number;
  /**
  * Whether the Accept header should be set in requests to the authorization servers. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#include_accept_header DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#include_accept_header}
  */
  readonly includeAcceptHeader?: boolean | cdktf.IResolvable;
  /**
  * Set or limit time-to-live of the access tokens to the specified number of seconds. This should be set if the authorization server returns opaque tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#max_token_expiry_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#max_token_expiry_seconds}
  */
  readonly maxTokenExpirySeconds?: number;
  /**
  * Reference to the 'Secret' which holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#password_secret DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#password_secret}
  */
  readonly passwordSecret?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret;
  /**
  * The read timeout in seconds when connecting to authorization server. If not set, the effective read timeout is 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#read_timeout_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#read_timeout_seconds}
  */
  readonly readTimeoutSeconds?: number;
  /**
  * Link to Kubernetes Secret containing the refresh token which can be used to obtain access token from the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#refresh_token DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#refresh_token}
  */
  readonly refreshToken?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken;
  /**
  * SASL extensions parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#sasl_extensions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#sasl_extensions}
  */
  readonly saslExtensions?: { [key: string]: string };
  /**
  * OAuth scope to use when authenticating against the authorization server. Some authorization servers require this to be set. The possible values depend on how authorization server is configured. By default 'scope' is not specified when doing the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#scope DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#scope}
  */
  readonly scope?: string;
  /**
  * Trusted certificates for TLS connection to the OAuth server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tls_trusted_certificates DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tls_trusted_certificates}
  */
  readonly tlsTrustedCertificates?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates[] | cdktf.IResolvable;
  /**
  * Authorization server token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#token_endpoint_uri DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#token_endpoint_uri}
  */
  readonly tokenEndpointUri?: string;
  /**
  * Authentication type. Currently the supported types are 'tls', 'scram-sha-256', 'scram-sha-512', 'plain', and 'oauth'. 'scram-sha-256' and 'scram-sha-512' types use SASL SCRAM-SHA-256 and SASL SCRAM-SHA-512 Authentication, respectively. 'plain' type uses SASL PLAIN Authentication. 'oauth' type uses SASL OAUTHBEARER Authentication. The 'tls' type uses TLS Client Authentication. The 'tls' type is supported only over TLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type: string;
  /**
  * Username used for the authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#username DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessTokenToTerraform(struct!.accessToken),
    access_token_is_jwt: cdktf.booleanToTerraform(struct!.accessTokenIsJwt),
    access_token_location: cdktf.stringToTerraform(struct!.accessTokenLocation),
    audience: cdktf.stringToTerraform(struct!.audience),
    certificate_and_key: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKeyToTerraform(struct!.certificateAndKey),
    client_assertion: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertionToTerraform(struct!.clientAssertion),
    client_assertion_location: cdktf.stringToTerraform(struct!.clientAssertionLocation),
    client_assertion_type: cdktf.stringToTerraform(struct!.clientAssertionType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecretToTerraform(struct!.clientSecret),
    connect_timeout_seconds: cdktf.numberToTerraform(struct!.connectTimeoutSeconds),
    disable_tls_hostname_verification: cdktf.booleanToTerraform(struct!.disableTlsHostnameVerification),
    enable_metrics: cdktf.booleanToTerraform(struct!.enableMetrics),
    http_retries: cdktf.numberToTerraform(struct!.httpRetries),
    http_retry_pause_ms: cdktf.numberToTerraform(struct!.httpRetryPauseMs),
    include_accept_header: cdktf.booleanToTerraform(struct!.includeAcceptHeader),
    max_token_expiry_seconds: cdktf.numberToTerraform(struct!.maxTokenExpirySeconds),
    password_secret: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecretToTerraform(struct!.passwordSecret),
    read_timeout_seconds: cdktf.numberToTerraform(struct!.readTimeoutSeconds),
    refresh_token: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshTokenToTerraform(struct!.refreshToken),
    sasl_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.saslExtensions),
    scope: cdktf.stringToTerraform(struct!.scope),
    tls_trusted_certificates: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesToTerraform, false)(struct!.tlsTrustedCertificates),
    token_endpoint_uri: cdktf.stringToTerraform(struct!.tokenEndpointUri),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken",
    },
    access_token_is_jwt: {
      value: cdktf.booleanToHclTerraform(struct!.accessTokenIsJwt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_token_location: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_and_key: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKeyToHclTerraform(struct!.certificateAndKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey",
    },
    client_assertion: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertionToHclTerraform(struct!.clientAssertion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion",
    },
    client_assertion_location: {
      value: cdktf.stringToHclTerraform(struct!.clientAssertionLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_assertion_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAssertionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret",
    },
    connect_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_tls_hostname_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableTlsHostnameVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_retries: {
      value: cdktf.numberToHclTerraform(struct!.httpRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_retry_pause_ms: {
      value: cdktf.numberToHclTerraform(struct!.httpRetryPauseMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_accept_header: {
      value: cdktf.booleanToHclTerraform(struct!.includeAcceptHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_token_expiry_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxTokenExpirySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecretToHclTerraform(struct!.passwordSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret",
    },
    read_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshTokenToHclTerraform(struct!.refreshToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken",
    },
    sasl_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.saslExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_trusted_certificates: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesToHclTerraform, false)(struct!.tlsTrustedCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesList",
    },
    token_endpoint_uri: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointUri),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    if (this._accessTokenIsJwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIsJwt = this._accessTokenIsJwt;
    }
    if (this._accessTokenLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenLocation = this._accessTokenLocation;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._certificateAndKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAndKey = this._certificateAndKey?.internalValue;
    }
    if (this._clientAssertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAssertion = this._clientAssertion?.internalValue;
    }
    if (this._clientAssertionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAssertionLocation = this._clientAssertionLocation;
    }
    if (this._clientAssertionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAssertionType = this._clientAssertionType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._connectTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutSeconds = this._connectTimeoutSeconds;
    }
    if (this._disableTlsHostnameVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTlsHostnameVerification = this._disableTlsHostnameVerification;
    }
    if (this._enableMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMetrics = this._enableMetrics;
    }
    if (this._httpRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetries = this._httpRetries;
    }
    if (this._httpRetryPauseMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryPauseMs = this._httpRetryPauseMs;
    }
    if (this._includeAcceptHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAcceptHeader = this._includeAcceptHeader;
    }
    if (this._maxTokenExpirySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokenExpirySeconds = this._maxTokenExpirySeconds;
    }
    if (this._passwordSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecret = this._passwordSecret?.internalValue;
    }
    if (this._readTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeoutSeconds = this._readTimeoutSeconds;
    }
    if (this._refreshToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken?.internalValue;
    }
    if (this._saslExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslExtensions = this._saslExtensions;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tlsTrustedCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTrustedCertificates = this._tlsTrustedCertificates?.internalValue;
    }
    if (this._tokenEndpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointUri = this._tokenEndpointUri;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = undefined;
      this._accessTokenIsJwt = undefined;
      this._accessTokenLocation = undefined;
      this._audience = undefined;
      this._certificateAndKey.internalValue = undefined;
      this._clientAssertion.internalValue = undefined;
      this._clientAssertionLocation = undefined;
      this._clientAssertionType = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._connectTimeoutSeconds = undefined;
      this._disableTlsHostnameVerification = undefined;
      this._enableMetrics = undefined;
      this._httpRetries = undefined;
      this._httpRetryPauseMs = undefined;
      this._includeAcceptHeader = undefined;
      this._maxTokenExpirySeconds = undefined;
      this._passwordSecret.internalValue = undefined;
      this._readTimeoutSeconds = undefined;
      this._refreshToken.internalValue = undefined;
      this._saslExtensions = undefined;
      this._scope = undefined;
      this._tlsTrustedCertificates.internalValue = undefined;
      this._tokenEndpointUri = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = value.accessToken;
      this._accessTokenIsJwt = value.accessTokenIsJwt;
      this._accessTokenLocation = value.accessTokenLocation;
      this._audience = value.audience;
      this._certificateAndKey.internalValue = value.certificateAndKey;
      this._clientAssertion.internalValue = value.clientAssertion;
      this._clientAssertionLocation = value.clientAssertionLocation;
      this._clientAssertionType = value.clientAssertionType;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._connectTimeoutSeconds = value.connectTimeoutSeconds;
      this._disableTlsHostnameVerification = value.disableTlsHostnameVerification;
      this._enableMetrics = value.enableMetrics;
      this._httpRetries = value.httpRetries;
      this._httpRetryPauseMs = value.httpRetryPauseMs;
      this._includeAcceptHeader = value.includeAcceptHeader;
      this._maxTokenExpirySeconds = value.maxTokenExpirySeconds;
      this._passwordSecret.internalValue = value.passwordSecret;
      this._readTimeoutSeconds = value.readTimeoutSeconds;
      this._refreshToken.internalValue = value.refreshToken;
      this._saslExtensions = value.saslExtensions;
      this._scope = value.scope;
      this._tlsTrustedCertificates.internalValue = value.tlsTrustedCertificates;
      this._tokenEndpointUri = value.tokenEndpointUri;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationAccessToken) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }

  // access_token_is_jwt - computed: false, optional: true, required: false
  private _accessTokenIsJwt?: boolean | cdktf.IResolvable; 
  public get accessTokenIsJwt() {
    return this.getBooleanAttribute('access_token_is_jwt');
  }
  public set accessTokenIsJwt(value: boolean | cdktf.IResolvable) {
    this._accessTokenIsJwt = value;
  }
  public resetAccessTokenIsJwt() {
    this._accessTokenIsJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIsJwtInput() {
    return this._accessTokenIsJwt;
  }

  // access_token_location - computed: false, optional: true, required: false
  private _accessTokenLocation?: string; 
  public get accessTokenLocation() {
    return this.getStringAttribute('access_token_location');
  }
  public set accessTokenLocation(value: string) {
    this._accessTokenLocation = value;
  }
  public resetAccessTokenLocation() {
    this._accessTokenLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLocationInput() {
    return this._accessTokenLocation;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // certificate_and_key - computed: false, optional: true, required: false
  private _certificateAndKey = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKeyOutputReference(this, "certificate_and_key");
  public get certificateAndKey() {
    return this._certificateAndKey;
  }
  public putCertificateAndKey(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationCertificateAndKey) {
    this._certificateAndKey.internalValue = value;
  }
  public resetCertificateAndKey() {
    this._certificateAndKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAndKeyInput() {
    return this._certificateAndKey.internalValue;
  }

  // client_assertion - computed: false, optional: true, required: false
  private _clientAssertion = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertionOutputReference(this, "client_assertion");
  public get clientAssertion() {
    return this._clientAssertion;
  }
  public putClientAssertion(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientAssertion) {
    this._clientAssertion.internalValue = value;
  }
  public resetClientAssertion() {
    this._clientAssertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionInput() {
    return this._clientAssertion.internalValue;
  }

  // client_assertion_location - computed: false, optional: true, required: false
  private _clientAssertionLocation?: string; 
  public get clientAssertionLocation() {
    return this.getStringAttribute('client_assertion_location');
  }
  public set clientAssertionLocation(value: string) {
    this._clientAssertionLocation = value;
  }
  public resetClientAssertionLocation() {
    this._clientAssertionLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionLocationInput() {
    return this._clientAssertionLocation;
  }

  // client_assertion_type - computed: false, optional: true, required: false
  private _clientAssertionType?: string; 
  public get clientAssertionType() {
    return this.getStringAttribute('client_assertion_type');
  }
  public set clientAssertionType(value: string) {
    this._clientAssertionType = value;
  }
  public resetClientAssertionType() {
    this._clientAssertionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionTypeInput() {
    return this._clientAssertionType;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // connect_timeout_seconds - computed: false, optional: true, required: false
  private _connectTimeoutSeconds?: number; 
  public get connectTimeoutSeconds() {
    return this.getNumberAttribute('connect_timeout_seconds');
  }
  public set connectTimeoutSeconds(value: number) {
    this._connectTimeoutSeconds = value;
  }
  public resetConnectTimeoutSeconds() {
    this._connectTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutSecondsInput() {
    return this._connectTimeoutSeconds;
  }

  // disable_tls_hostname_verification - computed: false, optional: true, required: false
  private _disableTlsHostnameVerification?: boolean | cdktf.IResolvable; 
  public get disableTlsHostnameVerification() {
    return this.getBooleanAttribute('disable_tls_hostname_verification');
  }
  public set disableTlsHostnameVerification(value: boolean | cdktf.IResolvable) {
    this._disableTlsHostnameVerification = value;
  }
  public resetDisableTlsHostnameVerification() {
    this._disableTlsHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsHostnameVerificationInput() {
    return this._disableTlsHostnameVerification;
  }

  // enable_metrics - computed: false, optional: true, required: false
  private _enableMetrics?: boolean | cdktf.IResolvable; 
  public get enableMetrics() {
    return this.getBooleanAttribute('enable_metrics');
  }
  public set enableMetrics(value: boolean | cdktf.IResolvable) {
    this._enableMetrics = value;
  }
  public resetEnableMetrics() {
    this._enableMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMetricsInput() {
    return this._enableMetrics;
  }

  // http_retries - computed: false, optional: true, required: false
  private _httpRetries?: number; 
  public get httpRetries() {
    return this.getNumberAttribute('http_retries');
  }
  public set httpRetries(value: number) {
    this._httpRetries = value;
  }
  public resetHttpRetries() {
    this._httpRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetriesInput() {
    return this._httpRetries;
  }

  // http_retry_pause_ms - computed: false, optional: true, required: false
  private _httpRetryPauseMs?: number; 
  public get httpRetryPauseMs() {
    return this.getNumberAttribute('http_retry_pause_ms');
  }
  public set httpRetryPauseMs(value: number) {
    this._httpRetryPauseMs = value;
  }
  public resetHttpRetryPauseMs() {
    this._httpRetryPauseMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryPauseMsInput() {
    return this._httpRetryPauseMs;
  }

  // include_accept_header - computed: false, optional: true, required: false
  private _includeAcceptHeader?: boolean | cdktf.IResolvable; 
  public get includeAcceptHeader() {
    return this.getBooleanAttribute('include_accept_header');
  }
  public set includeAcceptHeader(value: boolean | cdktf.IResolvable) {
    this._includeAcceptHeader = value;
  }
  public resetIncludeAcceptHeader() {
    this._includeAcceptHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAcceptHeaderInput() {
    return this._includeAcceptHeader;
  }

  // max_token_expiry_seconds - computed: false, optional: true, required: false
  private _maxTokenExpirySeconds?: number; 
  public get maxTokenExpirySeconds() {
    return this.getNumberAttribute('max_token_expiry_seconds');
  }
  public set maxTokenExpirySeconds(value: number) {
    this._maxTokenExpirySeconds = value;
  }
  public resetMaxTokenExpirySeconds() {
    this._maxTokenExpirySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenExpirySecondsInput() {
    return this._maxTokenExpirySeconds;
  }

  // password_secret - computed: false, optional: true, required: false
  private _passwordSecret = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecretOutputReference(this, "password_secret");
  public get passwordSecret() {
    return this._passwordSecret;
  }
  public putPasswordSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationPasswordSecret) {
    this._passwordSecret.internalValue = value;
  }
  public resetPasswordSecret() {
    this._passwordSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretInput() {
    return this._passwordSecret.internalValue;
  }

  // read_timeout_seconds - computed: false, optional: true, required: false
  private _readTimeoutSeconds?: number; 
  public get readTimeoutSeconds() {
    return this.getNumberAttribute('read_timeout_seconds');
  }
  public set readTimeoutSeconds(value: number) {
    this._readTimeoutSeconds = value;
  }
  public resetReadTimeoutSeconds() {
    this._readTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutSecondsInput() {
    return this._readTimeoutSeconds;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshTokenOutputReference(this, "refresh_token");
  public get refreshToken() {
    return this._refreshToken;
  }
  public putRefreshToken(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationRefreshToken) {
    this._refreshToken.internalValue = value;
  }
  public resetRefreshToken() {
    this._refreshToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken.internalValue;
  }

  // sasl_extensions - computed: false, optional: true, required: false
  private _saslExtensions?: { [key: string]: string }; 
  public get saslExtensions() {
    return this.getStringMapAttribute('sasl_extensions');
  }
  public set saslExtensions(value: { [key: string]: string }) {
    this._saslExtensions = value;
  }
  public resetSaslExtensions() {
    this._saslExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslExtensionsInput() {
    return this._saslExtensions;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tls_trusted_certificates - computed: false, optional: true, required: false
  private _tlsTrustedCertificates = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificatesList(this, "tls_trusted_certificates", false);
  public get tlsTrustedCertificates() {
    return this._tlsTrustedCertificates;
  }
  public putTlsTrustedCertificates(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationTlsTrustedCertificates[] | cdktf.IResolvable) {
    this._tlsTrustedCertificates.internalValue = value;
  }
  public resetTlsTrustedCertificates() {
    this._tlsTrustedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTrustedCertificatesInput() {
    return this._tlsTrustedCertificates.internalValue;
  }

  // token_endpoint_uri - computed: false, optional: true, required: false
  private _tokenEndpointUri?: string; 
  public get tokenEndpointUri() {
    return this.getStringAttribute('token_endpoint_uri');
  }
  public set tokenEndpointUri(value: string) {
    this._tokenEndpointUri = value;
  }
  public resetTokenEndpointUri() {
    this._tokenEndpointUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointUriInput() {
    return this._tokenEndpointUri;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates {
  /**
  * The name of the file certificate in the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#certificate DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * Pattern for the certificate files in the secret. Use the link:https://en.wikipedia.org/wiki/Glob_(programming)[_glob syntax_] for the pattern. All files in the secret that match the pattern are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pattern DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * The name of the Secret containing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._pattern = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._pattern = value.pattern;
      this._secretName = value.secretName;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls {
  /**
  * Trusted certificates for TLS connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#trusted_certificates DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#trusted_certificates}
  */
  readonly trustedCertificates?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_certificates: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesToTerraform, false)(struct!.trustedCertificates),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_certificates: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesToHclTerraform, false)(struct!.trustedCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificates = this._trustedCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trustedCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trustedCertificates.internalValue = value.trustedCertificates;
    }
  }

  // trusted_certificates - computed: false, optional: true, required: false
  private _trustedCertificates = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificatesList(this, "trusted_certificates", false);
  public get trustedCertificates() {
    return this._trustedCertificates;
  }
  public putTrustedCertificates(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsTrustedCertificates[] | cdktf.IResolvable) {
    this._trustedCertificates.internalValue = value;
  }
  public resetTrustedCertificates() {
    this._trustedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificatesInput() {
    return this._trustedCertificates.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer {
  /**
  * Flag to set the MirrorMaker to exit on a failed send. Default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#abort_on_send_failure DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#abort_on_send_failure}
  */
  readonly abortOnSendFailure?: boolean | cdktf.IResolvable;
  /**
  * Authentication configuration for connecting to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#authentication DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#authentication}
  */
  readonly authentication?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication;
  /**
  * A list of host:port pairs for establishing the initial connection to the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#bootstrap_servers DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#bootstrap_servers}
  */
  readonly bootstrapServers: string;
  /**
  * The MirrorMaker producer config. Properties with the following prefixes cannot be set: ssl., bootstrap.servers, sasl., security., interceptor.classes (with the exception of: ssl.endpoint.identification.algorithm, ssl.cipher.suites, ssl.protocol, ssl.enabled.protocols).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#config DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * TLS configuration for connecting MirrorMaker to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tls DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tls}
  */
  readonly tls?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_on_send_failure: cdktf.booleanToTerraform(struct!.abortOnSendFailure),
    authentication: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationToTerraform(struct!.authentication),
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    tls: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsToTerraform(struct!.tls),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_on_send_failure: {
      value: cdktf.booleanToHclTerraform(struct!.abortOnSendFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication",
    },
    bootstrap_servers: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortOnSendFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortOnSendFailure = this._abortOnSendFailure;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortOnSendFailure = undefined;
      this._authentication.internalValue = undefined;
      this._bootstrapServers = undefined;
      this._config = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortOnSendFailure = value.abortOnSendFailure;
      this._authentication.internalValue = value.authentication;
      this._bootstrapServers = value.bootstrapServers;
      this._config = value.config;
      this._tls.internalValue = value.tls;
    }
  }

  // abort_on_send_failure - computed: false, optional: true, required: false
  private _abortOnSendFailure?: boolean | cdktf.IResolvable; 
  public get abortOnSendFailure() {
    return this.getBooleanAttribute('abort_on_send_failure');
  }
  public set abortOnSendFailure(value: boolean | cdktf.IResolvable) {
    this._abortOnSendFailure = value;
  }
  public resetAbortOnSendFailure() {
    this._abortOnSendFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortOnSendFailureInput() {
    return this._abortOnSendFailure;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#failure_threshold DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The initial delay before first the health is first checked. Default to 15 seconds. Minimum value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#initial_delay_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#period_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#success_threshold DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The timeout for each attempted health check. Default to 5 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#timeout_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbeToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbeToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#claims DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#claims}
  */
  readonly claims?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#limits DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#requests DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment {
  /**
  * Pod replacement strategy for deployment configuration changes. Valid values are 'RollingUpdate' and 'Recreate'. Defaults to 'RollingUpdate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#deployment_strategy DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#deployment_strategy}
  */
  readonly deploymentStrategy?: string;
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_strategy: cdktf.stringToTerraform(struct!.deploymentStrategy),
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_strategy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentStrategy = this._deploymentStrategy;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentStrategy = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentStrategy = value.deploymentStrategy;
      this._metadata.internalValue = value.metadata;
    }
  }

  // deployment_strategy - computed: false, optional: true, required: false
  private _deploymentStrategy?: string; 
  public get deploymentStrategy() {
    return this.getStringAttribute('deployment_strategy');
  }
  public set deploymentStrategy(value: string) {
    this._deploymentStrategy = value;
  }
  public resetDeploymentStrategy() {
    this._deploymentStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStrategyInput() {
    return this._deploymentStrategy;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv {
  /**
  * The environment variable key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * The environment variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#add DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#drop DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilitiesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#level DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#role DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#user DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#gmsa_credential_spec DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#gmsa_credential_spec_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#host_process DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_user_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#allow_privilege_escalation DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#app_armor_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#capabilities DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#capabilities}
  */
  readonly capabilities?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#privileged DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#proc_mount DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#read_only_root_filesystem DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_group DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_non_root DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_user DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#se_linux_options DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#seccomp_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#windows_options DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_armor_profile: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mount_path DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mount_propagation DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#read_only DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#recursive_read_only DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#sub_path DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#sub_path_expr DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer {
  /**
  * Environment variables which should be applied to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#env DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#env}
  */
  readonly env?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv[] | cdktf.IResolvable;
  /**
  * Security context for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#security_context DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#security_context}
  */
  readonly securityContext?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext;
  /**
  * Additional volume mounts which should be applied to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#volume_mounts DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvToTerraform, false)(struct!.env),
    security_context: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextToTerraform(struct!.securityContext),
    volume_mounts: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvList",
    },
    security_context: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._securityContext.internalValue = value.securityContext;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_fields DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#preference DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#preference}
  */
  readonly preference?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#weight DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_fields DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#node_selector_terms DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pod_affinity_term DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#weight DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pod_affinity_term DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#weight DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mismatch_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespace_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#namespaces DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#node_affinity DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pod_affinity DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pod_anti_affinity DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#hostnames DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#ip DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#level DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#role DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#user DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#localhost_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#gmsa_credential_spec DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#gmsa_credential_spec_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#host_process DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_user_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#app_armor_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#fs_group DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#fs_group_change_policy DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_group DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_non_root DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#run_as_user DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#se_linux_options DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#seccomp_profile DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#supplemental_groups DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#sysctls DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#sysctls}
  */
  readonly sysctls?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#windows_options DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_armor_profile: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_armor_profile: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile",
    },
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#effect DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#toleration_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#value DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#operator DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#values DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_expressions DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#label_selector DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#match_label_keys DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#max_skew DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#min_domains DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#node_affinity_policy DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#node_taints_policy DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#topology_key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#when_unsatisfiable DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: true, required: false
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  public resetMaxSkew() {
    this._maxSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: true, required: false
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  public resetWhenUnsatisfiable() {
    this._whenUnsatisfiable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#path DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#default_mode DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#items DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#items}
  */
  readonly items?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsList",
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#amount DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#amount}
  */
  readonly amount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#format DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#format}
  */
  readonly format?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.stringToTerraform(struct!.amount),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.stringToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._format = value.format;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: string; 
  public get amount() {
    return this.getStringAttribute('amount');
  }
  public set amount(value: string) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#medium DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#medium}
  */
  readonly medium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#size_limit DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#size_limit}
  */
  readonly sizeLimit?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitToHclTerraform(struct!.sizeLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit.internalValue = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimitOutputReference(this, "size_limit");
  public get sizeLimit() {
    return this._sizeLimit;
  }
  public putSizeLimit(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirSizeLimit) {
    this._sizeLimit.internalValue = value;
  }
  public resetSizeLimit() {
    this._sizeLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#claim_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#claim_name}
  */
  readonly claimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#read_only DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#key DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mode DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#path DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#default_mode DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#items DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#items}
  */
  readonly items?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#optional DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes {
  /**
  * ConfigMap to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#config_map DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#config_map}
  */
  readonly configMap?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap;
  /**
  * EmptyDir to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#empty_dir DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir;
  /**
  * Name to use for the volume. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * PersistentVolumeClaim object to use to populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#persistent_volume_claim DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim;
  /**
  * Secret to use populate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#secret DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#secret}
  */
  readonly secret?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapToTerraform(struct!.configMap),
    empty_dir: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirToTerraform(struct!.emptyDir),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    secret: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretToTerraform(struct!.secret),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap",
    },
    empty_dir: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim",
    },
    secret: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._name = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._emptyDir.internalValue = value.emptyDir;
      this._name = value.name;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
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

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesOutputReference {
    return new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod {
  /**
  * The pod's affinity rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#affinity DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#affinity}
  */
  readonly affinity?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity;
  /**
  * Indicates whether information about services should be injected into Pod's environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#enable_service_links DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * The pod's HostAliases. HostAliases is an optional list of hosts and IPs that will be injected into the Pod's hosts file if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#host_aliases DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases[] | cdktf.IResolvable;
  /**
  * List of references to secrets in the same namespace to use for pulling any of the images used by this Pod. When the 'STRIMZI_IMAGE_PULL_SECRETS' environment variable in Cluster Operator and the 'imagePullSecrets' option are specified, only the 'imagePullSecrets' variable is used and the 'STRIMZI_IMAGE_PULL_SECRETS' variable is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#image_pull_secrets DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata;
  /**
  * The name of the priority class used to assign priority to the pods. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#priority_class_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * The name of the scheduler used to dispatch this 'Pod'. If not specified, the default scheduler will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#scheduler_name DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Configures pod-level security attributes and common container settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#security_context DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#security_context}
  */
  readonly securityContext?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext;
  /**
  * The grace period is the duration in seconds after the processes running in the pod are sent a termination signal, and the time when the processes are forcibly halted with a kill signal. Set this value to longer than the expected cleanup time for your process. Value must be a non-negative integer. A zero value indicates delete immediately. You might need to increase the grace period for very large Kafka clusters, so that the Kafka brokers have enough time to transfer their work to another broker before they are terminated. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#termination_grace_period_seconds DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Defines the total amount of pod memory allocated for the temporary 'EmptyDir' volume '/tmp'. Specify the allocation in memory units, for example, '100Mi' for 100 mebibytes. Default value is '5Mi'. The '/tmp' volume is backed by pod memory, not disk storage, so avoid setting a high value as it consumes pod memory resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tmp_dir_size_limit DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tmp_dir_size_limit}
  */
  readonly tmpDirSizeLimit?: string;
  /**
  * The pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tolerations DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations[] | cdktf.IResolvable;
  /**
  * The pod's topology spread constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#topology_spread_constraints DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Additional volumes that can be mounted to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#volumes DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#volumes}
  */
  readonly volumes?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes[] | cdktf.IResolvable;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityToTerraform(struct!.affinity),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_aliases: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesToTerraform, false)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadataToTerraform(struct!.metadata),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    security_context: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextToTerraform(struct!.securityContext),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tmp_dir_size_limit: cdktf.stringToTerraform(struct!.tmpDirSizeLimit),
    tolerations: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesList",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsList",
    },
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tmp_dir_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.tmpDirSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tmpDirSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpDirSizeLimit = this._tmpDirSizeLimit;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._enableServiceLinks = undefined;
      this._hostAliases.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._priorityClassName = undefined;
      this._schedulerName = undefined;
      this._securityContext.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tmpDirSizeLimit = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._enableServiceLinks = value.enableServiceLinks;
      this._hostAliases.internalValue = value.hostAliases;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._metadata.internalValue = value.metadata;
      this._priorityClassName = value.priorityClassName;
      this._schedulerName = value.schedulerName;
      this._securityContext.internalValue = value.securityContext;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tmpDirSizeLimit = value.tmpDirSizeLimit;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // tmp_dir_size_limit - computed: false, optional: true, required: false
  private _tmpDirSizeLimit?: string; 
  public get tmpDirSizeLimit() {
    return this.getStringAttribute('tmp_dir_size_limit');
  }
  public set tmpDirSizeLimit(value: string) {
    this._tmpDirSizeLimit = value;
  }
  public resetTmpDirSizeLimit() {
    this._tmpDirSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpDirSizeLimitInput() {
    return this._tmpDirSizeLimit;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget {
  /**
  * Maximum number of unavailable pods to allow automatic Pod eviction. A Pod eviction is allowed when the 'maxUnavailable' number of pods or fewer are unavailable after the eviction. Setting this value to 0 prevents all voluntary evictions, so the pods must be evicted manually. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#max_unavailable DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Metadata to apply to the 'PodDisruptionBudgetTemplate' resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._metadata.internalValue = value.metadata;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata {
  /**
  * Annotations added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#annotations DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels added to the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#labels DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadataToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadataToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount {
  /**
  * Metadata applied to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#metadata DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate {
  /**
  * Template for Kafka MirrorMaker 'Deployment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#deployment DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#deployment}
  */
  readonly deployment?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment;
  /**
  * Template for Kafka MirrorMaker container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#mirror_maker_container DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#mirror_maker_container}
  */
  readonly mirrorMakerContainer?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer;
  /**
  * Template for Kafka MirrorMaker 'Pods'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pod DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pod}
  */
  readonly pod?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod;
  /**
  * Template for Kafka MirrorMaker 'PodDisruptionBudget'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#pod_disruption_budget DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget;
  /**
  * Template for the Kafka MirrorMaker service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#service_account DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentToTerraform(struct!.deployment),
    mirror_maker_container: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerToTerraform(struct!.mirrorMakerContainer),
    pod: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodToTerraform(struct!.pod),
    pod_disruption_budget: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    service_account: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment",
    },
    mirror_maker_container: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerToHclTerraform(struct!.mirrorMakerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer",
    },
    pod: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod",
    },
    pod_disruption_budget: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget",
    },
    service_account: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._mirrorMakerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorMakerContainer = this._mirrorMakerContainer?.internalValue;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployment.internalValue = undefined;
      this._mirrorMakerContainer.internalValue = undefined;
      this._pod.internalValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployment.internalValue = value.deployment;
      this._mirrorMakerContainer.internalValue = value.mirrorMakerContainer;
      this._pod.internalValue = value.pod;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._serviceAccount.internalValue = value.serviceAccount;
    }
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // mirror_maker_container - computed: false, optional: true, required: false
  private _mirrorMakerContainer = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainerOutputReference(this, "mirror_maker_container");
  public get mirrorMakerContainer() {
    return this._mirrorMakerContainer;
  }
  public putMirrorMakerContainer(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateMirrorMakerContainer) {
    this._mirrorMakerContainer.internalValue = value;
  }
  public resetMirrorMakerContainer() {
    this._mirrorMakerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMakerContainerInput() {
    return this._mirrorMakerContainer.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplatePodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }
}
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing {
  /**
  * Type of the tracing used. Currently the only supported type is 'opentelemetry' for OpenTelemetry tracing. As of Strimzi 0.37.0, 'jaeger' type is not supported anymore and this option is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#type DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracingToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracingToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
export interface DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec {
  /**
  * Configuration of source cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#consumer DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#consumer}
  */
  readonly consumer: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer;
  /**
  * The container image used for Kafka MirrorMaker pods. If no image name is explicitly specified, it is determined based on the 'spec.version' configuration. The image names are specifically mapped to corresponding versions in the Cluster Operator configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#image DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * List of topics which are included for mirroring. This option allows any regular expression using Java-style regular expressions. Mirroring two topics named A and B is achieved by using the expression 'A|B'. Or, as a special case, you can mirror all topics using the regular expression '*'. You can also specify multiple regular expressions separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#include DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#include}
  */
  readonly include?: string;
  /**
  * JVM Options for pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#jvm_options DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#jvm_options}
  */
  readonly jvmOptions?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions;
  /**
  * Pod liveness checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#liveness_probe DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe;
  /**
  * Logging configuration for MirrorMaker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#logging DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#logging}
  */
  readonly logging?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging;
  /**
  * Metrics configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#metrics_config DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#metrics_config}
  */
  readonly metricsConfig?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig;
  /**
  * Configuration of target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#producer DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#producer}
  */
  readonly producer: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer;
  /**
  * Pod readiness checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#readiness_probe DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe;
  /**
  * The number of pods in the 'Deployment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#replicas DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * CPU and memory resources to reserve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#resources DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#resources}
  */
  readonly resources?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources;
  /**
  * Template to specify how Kafka MirrorMaker resources, 'Deployments' and 'Pods', are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#template DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#template}
  */
  readonly template?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate;
  /**
  * The configuration of tracing in Kafka MirrorMaker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#tracing DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#tracing}
  */
  readonly tracing?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing;
  /**
  * The Kafka MirrorMaker version. Defaults to the latest version. Consult the documentation to understand the process required to upgrade or downgrade the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#version DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#version}
  */
  readonly version?: string;
  /**
  * List of topics which are included for mirroring. This option allows any regular expression using Java-style regular expressions. Mirroring two topics named A and B is achieved by using the expression 'A|B'. Or, as a special case, you can mirror all topics using the regular expression '*'. You can also specify multiple regular expressions separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#whitelist DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest#whitelist}
  */
  readonly whitelist?: string;
}

export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecToTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerToTerraform(struct!.consumer),
    image: cdktf.stringToTerraform(struct!.image),
    include: cdktf.stringToTerraform(struct!.include),
    jvm_options: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsToTerraform(struct!.jvmOptions),
    liveness_probe: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbeToTerraform(struct!.livenessProbe),
    logging: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingToTerraform(struct!.logging),
    metrics_config: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigToTerraform(struct!.metricsConfig),
    producer: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerToTerraform(struct!.producer),
    readiness_probe: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesToTerraform(struct!.resources),
    template: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateToTerraform(struct!.template),
    tracing: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracingToTerraform(struct!.tracing),
    version: cdktf.stringToTerraform(struct!.version),
    whitelist: cdktf.stringToTerraform(struct!.whitelist),
  }
}


export function dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerToHclTerraform(struct!.consumer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jvm_options: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsToHclTerraform(struct!.jvmOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions",
    },
    liveness_probe: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe",
    },
    logging: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging",
    },
    metrics_config: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigToHclTerraform(struct!.metricsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig",
    },
    producer: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerToHclTerraform(struct!.producer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer",
    },
    readiness_probe: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources",
    },
    template: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate",
    },
    tracing: {
      value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelist: {
      value: cdktf.stringToHclTerraform(struct!.whitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumer = this._consumer?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._jvmOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._metricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsConfig = this._metricsConfig?.internalValue;
    }
    if (this._producer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.producer = this._producer?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._whitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumer.internalValue = undefined;
      this._image = undefined;
      this._include = undefined;
      this._jvmOptions.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._metricsConfig.internalValue = undefined;
      this._producer.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._template.internalValue = undefined;
      this._tracing.internalValue = undefined;
      this._version = undefined;
      this._whitelist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumer.internalValue = value.consumer;
      this._image = value.image;
      this._include = value.include;
      this._jvmOptions.internalValue = value.jvmOptions;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._logging.internalValue = value.logging;
      this._metricsConfig.internalValue = value.metricsConfig;
      this._producer.internalValue = value.producer;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._template.internalValue = value.template;
      this._tracing.internalValue = value.tracing;
      this._version = value.version;
      this._whitelist = value.whitelist;
    }
  }

  // consumer - computed: false, optional: false, required: true
  private _consumer = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecConsumer) {
    this._consumer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
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

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptionsOutputReference(this, "jvm_options");
  public get jvmOptions() {
    return this._jvmOptions;
  }
  public putJvmOptions(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecJvmOptions) {
    this._jvmOptions.internalValue = value;
  }
  public resetJvmOptions() {
    this._jvmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // producer - computed: false, optional: false, required: true
  private _producer = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducerOutputReference(this, "producer");
  public get producer() {
    return this._producer;
  }
  public putProducer(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecProducer) {
    this._producer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get producerInput() {
    return this._producer.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
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

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest k8s_kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest}
*/
export class DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest k8s_kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_strimzi_io_kafka_mirror_maker_v1beta2_manifest',
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
  private _metadata = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec) {
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
      metadata: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaStrimziIoKafkaMirrorMakerV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
