// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#metadata DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata;
  /**
  * KafkaUserSpec defines the desired state of KafkaUser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#spec DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec;
}
export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#annotations DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#labels DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#name DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#namespace DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#name DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#namespace DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRefToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRefToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
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

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef {
  /**
  * Group of the resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#group DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#kind DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#name DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRefToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRefToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec {
  /**
  * ObjectReference is a reference to an object with a given name, kind and group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#issuer_ref DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#issuer_ref}
  */
  readonly issuerRef?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#pki_backend DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#pki_backend}
  */
  readonly pkiBackend: string;
  /**
  * SignerName indicates requested signer, and is a qualified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#signer_name DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_ref: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRefToTerraform(struct!.issuerRef),
    pki_backend: cdktf.stringToTerraform(struct!.pkiBackend),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_ref: {
      value: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRefToHclTerraform(struct!.issuerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef",
    },
    pki_backend: {
      value: cdktf.stringToHclTerraform(struct!.pkiBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerRef = this._issuerRef?.internalValue;
    }
    if (this._pkiBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiBackend = this._pkiBackend;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuerRef.internalValue = undefined;
      this._pkiBackend = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuerRef.internalValue = value.issuerRef;
      this._pkiBackend = value.pkiBackend;
      this._signerName = value.signerName;
    }
  }

  // issuer_ref - computed: false, optional: true, required: false
  private _issuerRef = new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRefOutputReference(this, "issuer_ref");
  public get issuerRef() {
    return this._issuerRef;
  }
  public putIssuerRef(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecIssuerRef) {
    this._issuerRef.internalValue = value;
  }
  public resetIssuerRef() {
    this._issuerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRefInput() {
    return this._issuerRef.internalValue;
  }

  // pki_backend - computed: false, optional: false, required: true
  private _pkiBackend?: string; 
  public get pkiBackend() {
    return this.getStringAttribute('pki_backend');
  }
  public set pkiBackend(value: string) {
    this._pkiBackend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiBackendInput() {
    return this._pkiBackend;
  }

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants {
  /**
  * KafkaAccessType hold info about Kafka ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#access_type DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#access_type}
  */
  readonly accessType: string;
  /**
  * KafkaPatternType hold the Resource Pattern Type of kafka ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#pattern_type DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#topic_name DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#topic_name}
  */
  readonly topicName: string;
}

export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._patternType = undefined;
      this._topicName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._patternType = value.patternType;
      this._topicName = value.topicName;
    }
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // pattern_type - computed: false, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsOutputReference {
    return new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec {
  /**
  * Annotations defines the annotations placed on the certificate or certificate signing request object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#annotations DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * ClusterReference states a reference to a cluster for topic/user provisioning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#cluster_ref DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#create_cert DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#create_cert}
  */
  readonly createCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#dns_names DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * expirationSeconds is the requested duration of validity of the issued certificate. The minimum valid value for expirationSeconds is 3600 i.e. 1h. When it is not specified the default validation duration is 90 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#expiration_seconds DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#include_jks DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#include_jks}
  */
  readonly includeJks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#pki_backend_spec DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#pki_backend_spec}
  */
  readonly pkiBackendSpec?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec;
  /**
  * secretName is used as the name of the K8S secret that contains the certificate of the KafkaUser. SecretName should be unique inside the namespace where KafkaUser is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#secret_name DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#topic_grants DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest#topic_grants}
  */
  readonly topicGrants?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants[] | cdktf.IResolvable;
}

export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    cluster_ref: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    create_cert: cdktf.booleanToTerraform(struct!.createCert),
    dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNames),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    include_jks: cdktf.booleanToTerraform(struct!.includeJks),
    pki_backend_spec: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecToTerraform(struct!.pkiBackendSpec),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    topic_grants: cdktf.listMapper(dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsToTerraform, false)(struct!.topicGrants),
  }
}


export function dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    cluster_ref: {
      value: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef",
    },
    create_cert: {
      value: cdktf.booleanToHclTerraform(struct!.createCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_jks: {
      value: cdktf.booleanToHclTerraform(struct!.includeJks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pki_backend_spec: {
      value: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecToHclTerraform(struct!.pkiBackendSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_grants: {
      value: cdktf.listMapperHcl(dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsToHclTerraform, false)(struct!.topicGrants),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._clusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef?.internalValue;
    }
    if (this._createCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.createCert = this._createCert;
    }
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._includeJks !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeJks = this._includeJks;
    }
    if (this._pkiBackendSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiBackendSpec = this._pkiBackendSpec?.internalValue;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._topicGrants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicGrants = this._topicGrants?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._clusterRef.internalValue = undefined;
      this._createCert = undefined;
      this._dnsNames = undefined;
      this._expirationSeconds = undefined;
      this._includeJks = undefined;
      this._pkiBackendSpec.internalValue = undefined;
      this._secretName = undefined;
      this._topicGrants.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._clusterRef.internalValue = value.clusterRef;
      this._createCert = value.createCert;
      this._dnsNames = value.dnsNames;
      this._expirationSeconds = value.expirationSeconds;
      this._includeJks = value.includeJks;
      this._pkiBackendSpec.internalValue = value.pkiBackendSpec;
      this._secretName = value.secretName;
      this._topicGrants.internalValue = value.topicGrants;
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

  // cluster_ref - computed: false, optional: false, required: true
  private _clusterRef = new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
  }

  // create_cert - computed: false, optional: true, required: false
  private _createCert?: boolean | cdktf.IResolvable; 
  public get createCert() {
    return this.getBooleanAttribute('create_cert');
  }
  public set createCert(value: boolean | cdktf.IResolvable) {
    this._createCert = value;
  }
  public resetCreateCert() {
    this._createCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createCertInput() {
    return this._createCert;
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // include_jks - computed: false, optional: true, required: false
  private _includeJks?: boolean | cdktf.IResolvable; 
  public get includeJks() {
    return this.getBooleanAttribute('include_jks');
  }
  public set includeJks(value: boolean | cdktf.IResolvable) {
    this._includeJks = value;
  }
  public resetIncludeJks() {
    this._includeJks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeJksInput() {
    return this._includeJks;
  }

  // pki_backend_spec - computed: false, optional: true, required: false
  private _pkiBackendSpec = new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpecOutputReference(this, "pki_backend_spec");
  public get pkiBackendSpec() {
    return this._pkiBackendSpec;
  }
  public putPkiBackendSpec(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecPkiBackendSpec) {
    this._pkiBackendSpec.internalValue = value;
  }
  public resetPkiBackendSpec() {
    this._pkiBackendSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiBackendSpecInput() {
    return this._pkiBackendSpec.internalValue;
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

  // topic_grants - computed: false, optional: true, required: false
  private _topicGrants = new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrantsList(this, "topic_grants", false);
  public get topicGrants() {
    return this._topicGrants;
  }
  public putTopicGrants(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecTopicGrants[] | cdktf.IResolvable) {
    this._topicGrants.internalValue = value;
  }
  public resetTopicGrants() {
    this._topicGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicGrantsInput() {
    return this._topicGrants.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest k8s_kafka_banzaicloud_io_kafka_user_v1alpha1_manifest}
*/
export class DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_banzaicloud_io_kafka_user_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_banzaicloud_io_kafka_user_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kafka_banzaicloud_io_kafka_user_v1alpha1_manifest k8s_kafka_banzaicloud_io_kafka_user_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_banzaicloud_io_kafka_user_v1alpha1_manifest',
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
  private _metadata = new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaBanzaicloudIoKafkaUserV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
