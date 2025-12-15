// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCertManagerIoCertificateV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#metadata DataK8SCertManagerIoCertificateV1Manifest#metadata}
  */
  readonly metadata: DataK8SCertManagerIoCertificateV1ManifestMetadata;
  /**
  * Specification of the desired state of the Certificate resource. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#spec DataK8SCertManagerIoCertificateV1Manifest#spec}
  */
  readonly spec?: DataK8SCertManagerIoCertificateV1ManifestSpec;
}
export interface DataK8SCertManagerIoCertificateV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#annotations DataK8SCertManagerIoCertificateV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#labels DataK8SCertManagerIoCertificateV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#name DataK8SCertManagerIoCertificateV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#namespace DataK8SCertManagerIoCertificateV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestMetadataToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCertManagerIoCertificateV1ManifestMetadataToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCertManagerIoCertificateV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats {
  /**
  * Type is the name of the format type that should be written to the Certificate's target Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#type DataK8SCertManagerIoCertificateV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats | cdktf.IResolvable): any {
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

export class DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats | cdktf.IResolvable | undefined) {
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

export class DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsOutputReference {
    return new DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef {
  /**
  * Group of the resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#group DataK8SCertManagerIoCertificateV1Manifest#group}
  */
  readonly group?: string;
  /**
  * Kind of the resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#kind DataK8SCertManagerIoCertificateV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the resource being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#name DataK8SCertManagerIoCertificateV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecIssuerRefToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef | cdktf.IResolvable): any {
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


export function dataK8SCertManagerIoCertificateV1ManifestSpecIssuerRefToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef | cdktf.IResolvable): any {
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

export class DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#key DataK8SCertManagerIoCertificateV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#name DataK8SCertManagerIoCertificateV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRefToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRefToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks {
  /**
  * Alias specifies the alias of the key in the keystore, required by the JKS format. If not provided, the default alias 'certificate' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#alias DataK8SCertManagerIoCertificateV1Manifest#alias}
  */
  readonly alias?: string;
  /**
  * Create enables JKS keystore creation for the Certificate. If true, a file named 'keystore.jks' will be created in the target Secret resource, encrypted using the password stored in 'passwordSecretRef'. The keystore file will be updated immediately. If the issuer provided a CA certificate, a file named 'truststore.jks' will also be created in the target Secret resource, encrypted using the password stored in 'passwordSecretRef' containing the issuing Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#create DataK8SCertManagerIoCertificateV1Manifest#create}
  */
  readonly create: boolean | cdktf.IResolvable;
  /**
  * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the JKS keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#password_secret_ref DataK8SCertManagerIoCertificateV1Manifest#password_secret_ref}
  */
  readonly passwordSecretRef: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    create: cdktf.booleanToTerraform(struct!.create),
    password_secret_ref: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRefToTerraform(struct!.passwordSecretRef),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks | cdktf.IResolvable): any {
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
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_secret_ref: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRefToHclTerraform(struct!.passwordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._passwordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretRef = this._passwordSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._create = undefined;
      this._passwordSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._create = value.create;
      this._passwordSecretRef.internalValue = value.passwordSecretRef;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // create - computed: false, optional: false, required: true
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // password_secret_ref - computed: false, optional: false, required: true
  private _passwordSecretRef = new DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRefOutputReference(this, "password_secret_ref");
  public get passwordSecretRef() {
    return this._passwordSecretRef;
  }
  public putPasswordSecretRef(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksPasswordSecretRef) {
    this._passwordSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretRefInput() {
    return this._passwordSecretRef.internalValue;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used. Some instances of this field may be defaulted, in others it may be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#key DataK8SCertManagerIoCertificateV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#name DataK8SCertManagerIoCertificateV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRefToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRefToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12 {
  /**
  * Create enables PKCS12 keystore creation for the Certificate. If true, a file named 'keystore.p12' will be created in the target Secret resource, encrypted using the password stored in 'passwordSecretRef'. The keystore file will be updated immediately. If the issuer provided a CA certificate, a file named 'truststore.p12' will also be created in the target Secret resource, encrypted using the password stored in 'passwordSecretRef' containing the issuing Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#create DataK8SCertManagerIoCertificateV1Manifest#create}
  */
  readonly create: boolean | cdktf.IResolvable;
  /**
  * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the PKCS12 keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#password_secret_ref DataK8SCertManagerIoCertificateV1Manifest#password_secret_ref}
  */
  readonly passwordSecretRef: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef;
  /**
  * Profile specifies the key and certificate encryption algorithms and the HMAC algorithm used to create the PKCS12 keystore. Default value is 'LegacyRC2' for backward compatibility. If provided, allowed values are: 'LegacyRC2': Deprecated. Not supported by default in OpenSSL 3 or Java 20. 'LegacyDES': Less secure algorithm. Use this option for maximal compatibility. 'Modern2023': Secure algorithm. Use this option in case you have to always use secure algorithms (eg. because of company policy). Please note that the security of the algorithm is not that important in reality, because the unencrypted certificate and private key are also stored in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#profile DataK8SCertManagerIoCertificateV1Manifest#profile}
  */
  readonly profile?: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12ToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    password_secret_ref: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRefToTerraform(struct!.passwordSecretRef),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12ToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_secret_ref: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRefToHclTerraform(struct!.passwordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._passwordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretRef = this._passwordSecretRef?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._passwordSecretRef.internalValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._passwordSecretRef.internalValue = value.passwordSecretRef;
      this._profile = value.profile;
    }
  }

  // create - computed: false, optional: false, required: true
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // password_secret_ref - computed: false, optional: false, required: true
  private _passwordSecretRef = new DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRefOutputReference(this, "password_secret_ref");
  public get passwordSecretRef() {
    return this._passwordSecretRef;
  }
  public putPasswordSecretRef(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12PasswordSecretRef) {
    this._passwordSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretRefInput() {
    return this._passwordSecretRef.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecKeystores {
  /**
  * JKS configures options for storing a JKS keystore in the 'spec.secretName' Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#jks DataK8SCertManagerIoCertificateV1Manifest#jks}
  */
  readonly jks?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks;
  /**
  * PKCS12 configures options for storing a PKCS12 keystore in the 'spec.secretName' Secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#pkcs12 DataK8SCertManagerIoCertificateV1Manifest#pkcs12}
  */
  readonly pkcs12?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jks: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksToTerraform(struct!.jks),
    pkcs12: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12ToTerraform(struct!.pkcs12),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jks: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksToHclTerraform(struct!.jks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks",
    },
    pkcs12: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12ToHclTerraform(struct!.pkcs12),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecKeystores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jks = this._jks?.internalValue;
    }
    if (this._pkcs12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkcs12 = this._pkcs12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jks.internalValue = undefined;
      this._pkcs12.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jks.internalValue = value.jks;
      this._pkcs12.internalValue = value.pkcs12;
    }
  }

  // jks - computed: false, optional: true, required: false
  private _jks = new DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJksOutputReference(this, "jks");
  public get jks() {
    return this._jks;
  }
  public putJks(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresJks) {
    this._jks.internalValue = value;
  }
  public resetJks() {
    this._jks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jksInput() {
    return this._jks.internalValue;
  }

  // pkcs12 - computed: false, optional: true, required: false
  private _pkcs12 = new DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12OutputReference(this, "pkcs12");
  public get pkcs12() {
    return this._pkcs12;
  }
  public putPkcs12(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresPkcs12) {
    this._pkcs12.internalValue = value;
  }
  public resetPkcs12() {
    this._pkcs12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs12Input() {
    return this._pkcs12.internalValue;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded {
  /**
  * DNSDomains is a list of DNS domains that are permitted or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#dns_domains DataK8SCertManagerIoCertificateV1Manifest#dns_domains}
  */
  readonly dnsDomains?: string[];
  /**
  * EmailAddresses is a list of Email Addresses that are permitted or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#email_addresses DataK8SCertManagerIoCertificateV1Manifest#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * IPRanges is a list of IP Ranges that are permitted or excluded. This should be a valid CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#ip_ranges DataK8SCertManagerIoCertificateV1Manifest#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * URIDomains is a list of URI domains that are permitted or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#uri_domains DataK8SCertManagerIoCertificateV1Manifest#uri_domains}
  */
  readonly uriDomains?: string[];
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcludedToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsDomains),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    uri_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uriDomains),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcludedToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uriDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcludedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomains = this._dnsDomains;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._uriDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriDomains = this._uriDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomains = undefined;
      this._emailAddresses = undefined;
      this._ipRanges = undefined;
      this._uriDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomains = value.dnsDomains;
      this._emailAddresses = value.emailAddresses;
      this._ipRanges = value.ipRanges;
      this._uriDomains = value.uriDomains;
    }
  }

  // dns_domains - computed: false, optional: true, required: false
  private _dnsDomains?: string[]; 
  public get dnsDomains() {
    return this.getListAttribute('dns_domains');
  }
  public set dnsDomains(value: string[]) {
    this._dnsDomains = value;
  }
  public resetDnsDomains() {
    this._dnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainsInput() {
    return this._dnsDomains;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // uri_domains - computed: false, optional: true, required: false
  private _uriDomains?: string[]; 
  public get uriDomains() {
    return this.getListAttribute('uri_domains');
  }
  public set uriDomains(value: string[]) {
    this._uriDomains = value;
  }
  public resetUriDomains() {
    this._uriDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriDomainsInput() {
    return this._uriDomains;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted {
  /**
  * DNSDomains is a list of DNS domains that are permitted or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#dns_domains DataK8SCertManagerIoCertificateV1Manifest#dns_domains}
  */
  readonly dnsDomains?: string[];
  /**
  * EmailAddresses is a list of Email Addresses that are permitted or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#email_addresses DataK8SCertManagerIoCertificateV1Manifest#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * IPRanges is a list of IP Ranges that are permitted or excluded. This should be a valid CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#ip_ranges DataK8SCertManagerIoCertificateV1Manifest#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * URIDomains is a list of URI domains that are permitted or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#uri_domains DataK8SCertManagerIoCertificateV1Manifest#uri_domains}
  */
  readonly uriDomains?: string[];
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermittedToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsDomains),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    uri_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uriDomains),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermittedToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uriDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermittedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomains = this._dnsDomains;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._uriDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriDomains = this._uriDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomains = undefined;
      this._emailAddresses = undefined;
      this._ipRanges = undefined;
      this._uriDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomains = value.dnsDomains;
      this._emailAddresses = value.emailAddresses;
      this._ipRanges = value.ipRanges;
      this._uriDomains = value.uriDomains;
    }
  }

  // dns_domains - computed: false, optional: true, required: false
  private _dnsDomains?: string[]; 
  public get dnsDomains() {
    return this.getListAttribute('dns_domains');
  }
  public set dnsDomains(value: string[]) {
    this._dnsDomains = value;
  }
  public resetDnsDomains() {
    this._dnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainsInput() {
    return this._dnsDomains;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // uri_domains - computed: false, optional: true, required: false
  private _uriDomains?: string[]; 
  public get uriDomains() {
    return this.getListAttribute('uri_domains');
  }
  public set uriDomains(value: string[]) {
    this._uriDomains = value;
  }
  public resetUriDomains() {
    this._uriDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriDomainsInput() {
    return this._uriDomains;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints {
  /**
  * if true then the name constraints are marked critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#critical DataK8SCertManagerIoCertificateV1Manifest#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Excluded contains the constraints which must be disallowed. Any name matching a restriction in the excluded field is invalid regardless of information appearing in the permitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#excluded DataK8SCertManagerIoCertificateV1Manifest#excluded}
  */
  readonly excluded?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded;
  /**
  * Permitted contains the constraints in which the names must be located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#permitted DataK8SCertManagerIoCertificateV1Manifest#permitted}
  */
  readonly permitted?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    excluded: dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcludedToTerraform(struct!.excluded),
    permitted: dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermittedToTerraform(struct!.permitted),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcludedToHclTerraform(struct!.excluded),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded",
    },
    permitted: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermittedToHclTerraform(struct!.permitted),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._excluded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded?.internalValue;
    }
    if (this._permitted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitted = this._permitted?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._excluded.internalValue = undefined;
      this._permitted.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._excluded.internalValue = value.excluded;
      this._permitted.internalValue = value.permitted;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // excluded - computed: false, optional: true, required: false
  private _excluded = new DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcludedOutputReference(this, "excluded");
  public get excluded() {
    return this._excluded;
  }
  public putExcluded(value: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsExcluded) {
    this._excluded.internalValue = value;
  }
  public resetExcluded() {
    this._excluded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded.internalValue;
  }

  // permitted - computed: false, optional: true, required: false
  private _permitted = new DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermittedOutputReference(this, "permitted");
  public get permitted() {
    return this._permitted;
  }
  public putPermitted(value: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsPermitted) {
    this._permitted.internalValue = value;
  }
  public resetPermitted() {
    this._permitted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedInput() {
    return this._permitted.internalValue;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames {
  /**
  * OID is the object identifier for the otherName SAN. The object identifier must be expressed as a dotted string, for example, '1.2.840.113556.1.4.221'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#oid DataK8SCertManagerIoCertificateV1Manifest#oid}
  */
  readonly oid?: string;
  /**
  * utf8Value is the string value of the otherName SAN. The utf8Value accepts any valid UTF8 string to set as value for the otherName SAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#utf8_value DataK8SCertManagerIoCertificateV1Manifest#utf8_value}
  */
  readonly utf8Value?: string;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oid: cdktf.stringToTerraform(struct!.oid),
    utf8_value: cdktf.stringToTerraform(struct!.utf8Value),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oid: {
      value: cdktf.stringToHclTerraform(struct!.oid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utf8_value: {
      value: cdktf.stringToHclTerraform(struct!.utf8Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oid !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid;
    }
    if (this._utf8Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.utf8Value = this._utf8Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oid = undefined;
      this._utf8Value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oid = value.oid;
      this._utf8Value = value.utf8Value;
    }
  }

  // oid - computed: false, optional: true, required: false
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // utf8_value - computed: false, optional: true, required: false
  private _utf8Value?: string; 
  public get utf8Value() {
    return this.getStringAttribute('utf8_value');
  }
  public set utf8Value(value: string) {
    this._utf8Value = value;
  }
  public resetUtf8Value() {
    this._utf8Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utf8ValueInput() {
    return this._utf8Value;
  }
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesOutputReference {
    return new DataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey {
  /**
  * Algorithm is the private key algorithm of the corresponding private key for this certificate. If provided, allowed values are either 'RSA', 'ECDSA' or 'Ed25519'. If 'algorithm' is specified and 'size' is not provided, key size of 2048 will be used for 'RSA' key algorithm and key size of 256 will be used for 'ECDSA' key algorithm. key size is ignored when using the 'Ed25519' key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#algorithm DataK8SCertManagerIoCertificateV1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The private key cryptography standards (PKCS) encoding for this certificate's private key to be encoded in. If provided, allowed values are 'PKCS1' and 'PKCS8' standing for PKCS#1 and PKCS#8, respectively. Defaults to 'PKCS1' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#encoding DataK8SCertManagerIoCertificateV1Manifest#encoding}
  */
  readonly encoding?: string;
  /**
  * RotationPolicy controls how private keys should be regenerated when a re-issuance is being processed. If set to 'Never', a private key will only be generated if one does not already exist in the target 'spec.secretName'. If one does exist but it does not have the correct algorithm or size, a warning will be raised to await user intervention. If set to 'Always', a private key matching the specified requirements will be generated whenever a re-issuance occurs. Default is 'Never' for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#rotation_policy DataK8SCertManagerIoCertificateV1Manifest#rotation_policy}
  */
  readonly rotationPolicy?: string;
  /**
  * Size is the key bit size of the corresponding private key for this certificate. If 'algorithm' is set to 'RSA', valid values are '2048', '4096' or '8192', and will default to '2048' if not specified. If 'algorithm' is set to 'ECDSA', valid values are '256', '384' or '521', and will default to '256' if not specified. If 'algorithm' is set to 'Ed25519', Size is ignored. No other values are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#size DataK8SCertManagerIoCertificateV1Manifest#size}
  */
  readonly size?: number;
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecPrivateKeyToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    rotation_policy: cdktf.stringToTerraform(struct!.rotationPolicy),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecPrivateKeyToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_policy: {
      value: cdktf.stringToHclTerraform(struct!.rotationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._rotationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPolicy = this._rotationPolicy;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._encoding = undefined;
      this._rotationPolicy = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._encoding = value.encoding;
      this._rotationPolicy = value.rotationPolicy;
      this._size = value.size;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // rotation_policy - computed: false, optional: true, required: false
  private _rotationPolicy?: string; 
  public get rotationPolicy() {
    return this.getStringAttribute('rotation_policy');
  }
  public set rotationPolicy(value: string) {
    this._rotationPolicy = value;
  }
  public resetRotationPolicy() {
    this._rotationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyInput() {
    return this._rotationPolicy;
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
export interface DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate {
  /**
  * Annotations is a key value map to be copied to the target Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#annotations DataK8SCertManagerIoCertificateV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels is a key value map to be copied to the target Kubernetes Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#labels DataK8SCertManagerIoCertificateV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplateToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplateToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate | cdktf.IResolvable): any {
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

export class DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate | cdktf.IResolvable | undefined) {
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
export interface DataK8SCertManagerIoCertificateV1ManifestSpecSubject {
  /**
  * Countries to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#countries DataK8SCertManagerIoCertificateV1Manifest#countries}
  */
  readonly countries?: string[];
  /**
  * Cities to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#localities DataK8SCertManagerIoCertificateV1Manifest#localities}
  */
  readonly localities?: string[];
  /**
  * Organizational Units to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#organizational_units DataK8SCertManagerIoCertificateV1Manifest#organizational_units}
  */
  readonly organizationalUnits?: string[];
  /**
  * Organizations to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#organizations DataK8SCertManagerIoCertificateV1Manifest#organizations}
  */
  readonly organizations?: string[];
  /**
  * Postal codes to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#postal_codes DataK8SCertManagerIoCertificateV1Manifest#postal_codes}
  */
  readonly postalCodes?: string[];
  /**
  * State/Provinces to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#provinces DataK8SCertManagerIoCertificateV1Manifest#provinces}
  */
  readonly provinces?: string[];
  /**
  * Serial number to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#serial_number DataK8SCertManagerIoCertificateV1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Street addresses to be used on the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#street_addresses DataK8SCertManagerIoCertificateV1Manifest#street_addresses}
  */
  readonly streetAddresses?: string[];
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecSubjectToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    localities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localities),
    organizational_units: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnits),
    organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizations),
    postal_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postalCodes),
    provinces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provinces),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    street_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streetAddresses),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecSubjectToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpecSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    localities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organizational_units: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnits),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organizations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    postal_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postalCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provinces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provinces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.streetAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpecSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._localities !== undefined) {
      hasAnyValues = true;
      internalValueResult.localities = this._localities;
    }
    if (this._organizationalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnits = this._organizationalUnits;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    if (this._postalCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCodes = this._postalCodes;
    }
    if (this._provinces !== undefined) {
      hasAnyValues = true;
      internalValueResult.provinces = this._provinces;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._streetAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddresses = this._streetAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpecSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._localities = undefined;
      this._organizationalUnits = undefined;
      this._organizations = undefined;
      this._postalCodes = undefined;
      this._provinces = undefined;
      this._serialNumber = undefined;
      this._streetAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._localities = value.localities;
      this._organizationalUnits = value.organizationalUnits;
      this._organizations = value.organizations;
      this._postalCodes = value.postalCodes;
      this._provinces = value.provinces;
      this._serialNumber = value.serialNumber;
      this._streetAddresses = value.streetAddresses;
    }
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // localities - computed: false, optional: true, required: false
  private _localities?: string[]; 
  public get localities() {
    return this.getListAttribute('localities');
  }
  public set localities(value: string[]) {
    this._localities = value;
  }
  public resetLocalities() {
    this._localities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localitiesInput() {
    return this._localities;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations?: string[]; 
  public get organizations() {
    return this.getListAttribute('organizations');
  }
  public set organizations(value: string[]) {
    this._organizations = value;
  }
  public resetOrganizations() {
    this._organizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }

  // postal_codes - computed: false, optional: true, required: false
  private _postalCodes?: string[]; 
  public get postalCodes() {
    return this.getListAttribute('postal_codes');
  }
  public set postalCodes(value: string[]) {
    this._postalCodes = value;
  }
  public resetPostalCodes() {
    this._postalCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodesInput() {
    return this._postalCodes;
  }

  // provinces - computed: false, optional: true, required: false
  private _provinces?: string[]; 
  public get provinces() {
    return this.getListAttribute('provinces');
  }
  public set provinces(value: string[]) {
    this._provinces = value;
  }
  public resetProvinces() {
    this._provinces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provincesInput() {
    return this._provinces;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // street_addresses - computed: false, optional: true, required: false
  private _streetAddresses?: string[]; 
  public get streetAddresses() {
    return this.getListAttribute('street_addresses');
  }
  public set streetAddresses(value: string[]) {
    this._streetAddresses = value;
  }
  public resetStreetAddresses() {
    this._streetAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressesInput() {
    return this._streetAddresses;
  }
}
export interface DataK8SCertManagerIoCertificateV1ManifestSpec {
  /**
  * Defines extra output formats of the private key and signed certificate chain to be written to this Certificate's target Secret. This is a Beta Feature enabled by default. It can be disabled with the '--feature-gates=AdditionalCertificateOutputFormats=false' option set on both the controller and webhook components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#additional_output_formats DataK8SCertManagerIoCertificateV1Manifest#additional_output_formats}
  */
  readonly additionalOutputFormats?: DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats[] | cdktf.IResolvable;
  /**
  * Requested common name X509 certificate subject attribute. More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6 NOTE: TLS clients will ignore this value when any subject alternative name is set (see https://tools.ietf.org/html/rfc6125#section-6.4.4). Should have a length of 64 characters or fewer to avoid generating invalid CSRs. Cannot be set if the 'literalSubject' field is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#common_name DataK8SCertManagerIoCertificateV1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Requested DNS subject alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#dns_names DataK8SCertManagerIoCertificateV1Manifest#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Requested 'duration' (i.e. lifetime) of the Certificate. Note that the issuer may choose to ignore the requested duration, just like any other requested attribute. If unset, this defaults to 90 days. Minimum accepted duration is 1 hour. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#duration DataK8SCertManagerIoCertificateV1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Requested email subject alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#email_addresses DataK8SCertManagerIoCertificateV1Manifest#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Whether the KeyUsage and ExtKeyUsage extensions should be set in the encoded CSR. This option defaults to true, and should only be disabled if the target issuer does not support CSRs with these X509 KeyUsage/ ExtKeyUsage extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#encode_usages_in_request DataK8SCertManagerIoCertificateV1Manifest#encode_usages_in_request}
  */
  readonly encodeUsagesInRequest?: boolean | cdktf.IResolvable;
  /**
  * Requested IP address subject alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#ip_addresses DataK8SCertManagerIoCertificateV1Manifest#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Requested basic constraints isCA value. The isCA value is used to set the 'isCA' field on the created CertificateRequest resources. Note that the issuer may choose to ignore the requested isCA value, just like any other requested attribute. If true, this will automatically add the 'cert sign' usage to the list of requested 'usages'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#is_ca DataK8SCertManagerIoCertificateV1Manifest#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Reference to the issuer responsible for issuing the certificate. If the issuer is namespace-scoped, it must be in the same namespace as the Certificate. If the issuer is cluster-scoped, it can be used from any namespace. The 'name' field of the reference must always be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#issuer_ref DataK8SCertManagerIoCertificateV1Manifest#issuer_ref}
  */
  readonly issuerRef: DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef;
  /**
  * Additional keystore output formats to be stored in the Certificate's Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#keystores DataK8SCertManagerIoCertificateV1Manifest#keystores}
  */
  readonly keystores?: DataK8SCertManagerIoCertificateV1ManifestSpecKeystores;
  /**
  * Requested X.509 certificate subject, represented using the LDAP 'String Representation of a Distinguished Name' [1]. Important: the LDAP string format also specifies the order of the attributes in the subject, this is important when issuing certs for LDAP authentication. Example: 'CN=foo,DC=corp,DC=example,DC=com' More info [1]: https://datatracker.ietf.org/doc/html/rfc4514 More info: https://github.com/cert-manager/cert-manager/issues/3203 More info: https://github.com/cert-manager/cert-manager/issues/4424 Cannot be set if the 'subject' or 'commonName' field is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#literal_subject DataK8SCertManagerIoCertificateV1Manifest#literal_subject}
  */
  readonly literalSubject?: string;
  /**
  * x.509 certificate NameConstraint extension which MUST NOT be used in a non-CA certificate. More Info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.10 This is an Alpha Feature and is only enabled with the '--feature-gates=NameConstraints=true' option set on both the controller and webhook components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#name_constraints DataK8SCertManagerIoCertificateV1Manifest#name_constraints}
  */
  readonly nameConstraints?: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints;
  /**
  * 'otherNames' is an escape hatch for SAN that allows any type. We currently restrict the support to string like otherNames, cf RFC 5280 p 37 Any UTF8 String valued otherName can be passed with by setting the keys oid: x.x.x.x and UTF8Value: somevalue for 'otherName'. Most commonly this would be UPN set with oid: 1.3.6.1.4.1.311.20.2.3 You should ensure that any OID passed is valid for the UTF8String type as we do not explicitly validate this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#other_names DataK8SCertManagerIoCertificateV1Manifest#other_names}
  */
  readonly otherNames?: DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames[] | cdktf.IResolvable;
  /**
  * Private key options. These include the key algorithm and size, the used encoding and the rotation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#private_key DataK8SCertManagerIoCertificateV1Manifest#private_key}
  */
  readonly privateKey?: DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey;
  /**
  * How long before the currently issued certificate's expiry cert-manager should renew the certificate. For example, if a certificate is valid for 60 minutes, and 'renewBefore=10m', cert-manager will begin to attempt to renew the certificate 50 minutes after it was issued (i.e. when there are 10 minutes remaining until the certificate is no longer valid). NOTE: The actual lifetime of the issued certificate is used to determine the renewal time. If an issuer returns a certificate with a different lifetime than the one requested, cert-manager will use the lifetime of the issued certificate. If unset, this defaults to 1/3 of the issued certificate's lifetime. Minimum accepted value is 5 minutes. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration. Cannot be set if the 'renewBeforePercentage' field is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#renew_before DataK8SCertManagerIoCertificateV1Manifest#renew_before}
  */
  readonly renewBefore?: string;
  /**
  * 'renewBeforePercentage' is like 'renewBefore', except it is a relative percentage rather than an absolute duration. For example, if a certificate is valid for 60 minutes, and 'renewBeforePercentage=25', cert-manager will begin to attempt to renew the certificate 45 minutes after it was issued (i.e. when there are 15 minutes (25%) remaining until the certificate is no longer valid). NOTE: The actual lifetime of the issued certificate is used to determine the renewal time. If an issuer returns a certificate with a different lifetime than the one requested, cert-manager will use the lifetime of the issued certificate. Value must be an integer in the range (0,100). The minimum effective 'renewBefore' derived from the 'renewBeforePercentage' and 'duration' fields is 5 minutes. Cannot be set if the 'renewBefore' field is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#renew_before_percentage DataK8SCertManagerIoCertificateV1Manifest#renew_before_percentage}
  */
  readonly renewBeforePercentage?: number;
  /**
  * The maximum number of CertificateRequest revisions that are maintained in the Certificate's history. Each revision represents a single 'CertificateRequest' created by this Certificate, either when it was created, renewed, or Spec was changed. Revisions will be removed by oldest first if the number of revisions exceeds this number. If set, revisionHistoryLimit must be a value of '1' or greater. If unset ('nil'), revisions will not be garbage collected. Default value is 'nil'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#revision_history_limit DataK8SCertManagerIoCertificateV1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * Name of the Secret resource that will be automatically created and managed by this Certificate resource. It will be populated with a private key and certificate, signed by the denoted issuer. The Secret resource lives in the same namespace as the Certificate resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#secret_name DataK8SCertManagerIoCertificateV1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Defines annotations and labels to be copied to the Certificate's Secret. Labels and annotations on the Secret will be changed as they appear on the SecretTemplate when added or removed. SecretTemplate annotations are added in conjunction with, and cannot overwrite, the base set of annotations cert-manager sets on the Certificate's Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#secret_template DataK8SCertManagerIoCertificateV1Manifest#secret_template}
  */
  readonly secretTemplate?: DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate;
  /**
  * Requested set of X509 certificate subject attributes. More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6 The common name attribute is specified separately in the 'commonName' field. Cannot be set if the 'literalSubject' field is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#subject DataK8SCertManagerIoCertificateV1Manifest#subject}
  */
  readonly subject?: DataK8SCertManagerIoCertificateV1ManifestSpecSubject;
  /**
  * Requested URI subject alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#uris DataK8SCertManagerIoCertificateV1Manifest#uris}
  */
  readonly uris?: string[];
  /**
  * Requested key usages and extended key usages. These usages are used to set the 'usages' field on the created CertificateRequest resources. If 'encodeUsagesInRequest' is unset or set to 'true', the usages will additionally be encoded in the 'request' field which contains the CSR blob. If unset, defaults to 'digital signature' and 'key encipherment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#usages DataK8SCertManagerIoCertificateV1Manifest#usages}
  */
  readonly usages?: string[];
}

export function dataK8SCertManagerIoCertificateV1ManifestSpecToTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_output_formats: cdktf.listMapper(dataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsToTerraform, false)(struct!.additionalOutputFormats),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsNames),
    duration: cdktf.stringToTerraform(struct!.duration),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    encode_usages_in_request: cdktf.booleanToTerraform(struct!.encodeUsagesInRequest),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    issuer_ref: dataK8SCertManagerIoCertificateV1ManifestSpecIssuerRefToTerraform(struct!.issuerRef),
    keystores: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresToTerraform(struct!.keystores),
    literal_subject: cdktf.stringToTerraform(struct!.literalSubject),
    name_constraints: dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsToTerraform(struct!.nameConstraints),
    other_names: cdktf.listMapper(dataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesToTerraform, false)(struct!.otherNames),
    private_key: dataK8SCertManagerIoCertificateV1ManifestSpecPrivateKeyToTerraform(struct!.privateKey),
    renew_before: cdktf.stringToTerraform(struct!.renewBefore),
    renew_before_percentage: cdktf.numberToTerraform(struct!.renewBeforePercentage),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_template: dataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplateToTerraform(struct!.secretTemplate),
    subject: dataK8SCertManagerIoCertificateV1ManifestSpecSubjectToTerraform(struct!.subject),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
    usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usages),
  }
}


export function dataK8SCertManagerIoCertificateV1ManifestSpecToHclTerraform(struct?: DataK8SCertManagerIoCertificateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_output_formats: {
      value: cdktf.listMapperHcl(dataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsToHclTerraform, false)(struct!.additionalOutputFormats),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsList",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encode_usages_in_request: {
      value: cdktf.booleanToHclTerraform(struct!.encodeUsagesInRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_ca: {
      value: cdktf.booleanToHclTerraform(struct!.isCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer_ref: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecIssuerRefToHclTerraform(struct!.issuerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef",
    },
    keystores: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecKeystoresToHclTerraform(struct!.keystores),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecKeystores",
    },
    literal_subject: {
      value: cdktf.stringToHclTerraform(struct!.literalSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_constraints: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsToHclTerraform(struct!.nameConstraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints",
    },
    other_names: {
      value: cdktf.listMapperHcl(dataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesToHclTerraform, false)(struct!.otherNames),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesList",
    },
    private_key: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey",
    },
    renew_before: {
      value: cdktf.stringToHclTerraform(struct!.renewBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_before_percentage: {
      value: cdktf.numberToHclTerraform(struct!.renewBeforePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_template: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplateToHclTerraform(struct!.secretTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate",
    },
    subject: {
      value: dataK8SCertManagerIoCertificateV1ManifestSpecSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpecSubject",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    usages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCertManagerIoCertificateV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCertManagerIoCertificateV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalOutputFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalOutputFormats = this._additionalOutputFormats?.internalValue;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._encodeUsagesInRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeUsagesInRequest = this._encodeUsagesInRequest;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._issuerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerRef = this._issuerRef?.internalValue;
    }
    if (this._keystores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystores = this._keystores?.internalValue;
    }
    if (this._literalSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalSubject = this._literalSubject;
    }
    if (this._nameConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameConstraints = this._nameConstraints?.internalValue;
    }
    if (this._otherNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherNames = this._otherNames?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._renewBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewBefore = this._renewBefore;
    }
    if (this._renewBeforePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewBeforePercentage = this._renewBeforePercentage;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretTemplate = this._secretTemplate?.internalValue;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCertManagerIoCertificateV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalOutputFormats.internalValue = undefined;
      this._commonName = undefined;
      this._dnsNames = undefined;
      this._duration = undefined;
      this._emailAddresses = undefined;
      this._encodeUsagesInRequest = undefined;
      this._ipAddresses = undefined;
      this._isCa = undefined;
      this._issuerRef.internalValue = undefined;
      this._keystores.internalValue = undefined;
      this._literalSubject = undefined;
      this._nameConstraints.internalValue = undefined;
      this._otherNames.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._renewBefore = undefined;
      this._renewBeforePercentage = undefined;
      this._revisionHistoryLimit = undefined;
      this._secretName = undefined;
      this._secretTemplate.internalValue = undefined;
      this._subject.internalValue = undefined;
      this._uris = undefined;
      this._usages = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalOutputFormats.internalValue = value.additionalOutputFormats;
      this._commonName = value.commonName;
      this._dnsNames = value.dnsNames;
      this._duration = value.duration;
      this._emailAddresses = value.emailAddresses;
      this._encodeUsagesInRequest = value.encodeUsagesInRequest;
      this._ipAddresses = value.ipAddresses;
      this._isCa = value.isCa;
      this._issuerRef.internalValue = value.issuerRef;
      this._keystores.internalValue = value.keystores;
      this._literalSubject = value.literalSubject;
      this._nameConstraints.internalValue = value.nameConstraints;
      this._otherNames.internalValue = value.otherNames;
      this._privateKey.internalValue = value.privateKey;
      this._renewBefore = value.renewBefore;
      this._renewBeforePercentage = value.renewBeforePercentage;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._secretName = value.secretName;
      this._secretTemplate.internalValue = value.secretTemplate;
      this._subject.internalValue = value.subject;
      this._uris = value.uris;
      this._usages = value.usages;
    }
  }

  // additional_output_formats - computed: false, optional: true, required: false
  private _additionalOutputFormats = new DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormatsList(this, "additional_output_formats", false);
  public get additionalOutputFormats() {
    return this._additionalOutputFormats;
  }
  public putAdditionalOutputFormats(value: DataK8SCertManagerIoCertificateV1ManifestSpecAdditionalOutputFormats[] | cdktf.IResolvable) {
    this._additionalOutputFormats.internalValue = value;
  }
  public resetAdditionalOutputFormats() {
    this._additionalOutputFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOutputFormatsInput() {
    return this._additionalOutputFormats.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // encode_usages_in_request - computed: false, optional: true, required: false
  private _encodeUsagesInRequest?: boolean | cdktf.IResolvable; 
  public get encodeUsagesInRequest() {
    return this.getBooleanAttribute('encode_usages_in_request');
  }
  public set encodeUsagesInRequest(value: boolean | cdktf.IResolvable) {
    this._encodeUsagesInRequest = value;
  }
  public resetEncodeUsagesInRequest() {
    this._encodeUsagesInRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeUsagesInRequestInput() {
    return this._encodeUsagesInRequest;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // issuer_ref - computed: false, optional: false, required: true
  private _issuerRef = new DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRefOutputReference(this, "issuer_ref");
  public get issuerRef() {
    return this._issuerRef;
  }
  public putIssuerRef(value: DataK8SCertManagerIoCertificateV1ManifestSpecIssuerRef) {
    this._issuerRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRefInput() {
    return this._issuerRef.internalValue;
  }

  // keystores - computed: false, optional: true, required: false
  private _keystores = new DataK8SCertManagerIoCertificateV1ManifestSpecKeystoresOutputReference(this, "keystores");
  public get keystores() {
    return this._keystores;
  }
  public putKeystores(value: DataK8SCertManagerIoCertificateV1ManifestSpecKeystores) {
    this._keystores.internalValue = value;
  }
  public resetKeystores() {
    this._keystores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoresInput() {
    return this._keystores.internalValue;
  }

  // literal_subject - computed: false, optional: true, required: false
  private _literalSubject?: string; 
  public get literalSubject() {
    return this.getStringAttribute('literal_subject');
  }
  public set literalSubject(value: string) {
    this._literalSubject = value;
  }
  public resetLiteralSubject() {
    this._literalSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalSubjectInput() {
    return this._literalSubject;
  }

  // name_constraints - computed: false, optional: true, required: false
  private _nameConstraints = new DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraintsOutputReference(this, "name_constraints");
  public get nameConstraints() {
    return this._nameConstraints;
  }
  public putNameConstraints(value: DataK8SCertManagerIoCertificateV1ManifestSpecNameConstraints) {
    this._nameConstraints.internalValue = value;
  }
  public resetNameConstraints() {
    this._nameConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameConstraintsInput() {
    return this._nameConstraints.internalValue;
  }

  // other_names - computed: false, optional: true, required: false
  private _otherNames = new DataK8SCertManagerIoCertificateV1ManifestSpecOtherNamesList(this, "other_names", false);
  public get otherNames() {
    return this._otherNames;
  }
  public putOtherNames(value: DataK8SCertManagerIoCertificateV1ManifestSpecOtherNames[] | cdktf.IResolvable) {
    this._otherNames.internalValue = value;
  }
  public resetOtherNames() {
    this._otherNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNamesInput() {
    return this._otherNames.internalValue;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey = new DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: DataK8SCertManagerIoCertificateV1ManifestSpecPrivateKey) {
    this._privateKey.internalValue = value;
  }
  public resetPrivateKey() {
    this._privateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // renew_before - computed: false, optional: true, required: false
  private _renewBefore?: string; 
  public get renewBefore() {
    return this.getStringAttribute('renew_before');
  }
  public set renewBefore(value: string) {
    this._renewBefore = value;
  }
  public resetRenewBefore() {
    this._renewBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeInput() {
    return this._renewBefore;
  }

  // renew_before_percentage - computed: false, optional: true, required: false
  private _renewBeforePercentage?: number; 
  public get renewBeforePercentage() {
    return this.getNumberAttribute('renew_before_percentage');
  }
  public set renewBeforePercentage(value: number) {
    this._renewBeforePercentage = value;
  }
  public resetRenewBeforePercentage() {
    this._renewBeforePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforePercentageInput() {
    return this._renewBeforePercentage;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
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

  // secret_template - computed: false, optional: true, required: false
  private _secretTemplate = new DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplateOutputReference(this, "secret_template");
  public get secretTemplate() {
    return this._secretTemplate;
  }
  public putSecretTemplate(value: DataK8SCertManagerIoCertificateV1ManifestSpecSecretTemplate) {
    this._secretTemplate.internalValue = value;
  }
  public resetSecretTemplate() {
    this._secretTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTemplateInput() {
    return this._secretTemplate.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DataK8SCertManagerIoCertificateV1ManifestSpecSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataK8SCertManagerIoCertificateV1ManifestSpecSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string[]; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest k8s_cert_manager_io_certificate_v1_manifest}
*/
export class DataK8SCertManagerIoCertificateV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cert_manager_io_certificate_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCertManagerIoCertificateV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCertManagerIoCertificateV1Manifest to import
  * @param importFromId The id of the existing DataK8SCertManagerIoCertificateV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCertManagerIoCertificateV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cert_manager_io_certificate_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cert_manager_io_certificate_v1_manifest k8s_cert_manager_io_certificate_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCertManagerIoCertificateV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCertManagerIoCertificateV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cert_manager_io_certificate_v1_manifest',
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
  private _metadata = new DataK8SCertManagerIoCertificateV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCertManagerIoCertificateV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCertManagerIoCertificateV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCertManagerIoCertificateV1ManifestSpec) {
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
      metadata: dataK8SCertManagerIoCertificateV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCertManagerIoCertificateV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCertManagerIoCertificateV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCertManagerIoCertificateV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCertManagerIoCertificateV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCertManagerIoCertificateV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
