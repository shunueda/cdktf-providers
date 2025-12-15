// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8UpIoCheckV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#metadata DataK8SK8UpIoCheckV1Manifest#metadata}
  */
  readonly metadata: DataK8SK8UpIoCheckV1ManifestMetadata;
  /**
  * CheckSpec defines the desired state of Check. It needs to contain the repository information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#spec DataK8SK8UpIoCheckV1Manifest#spec}
  */
  readonly spec?: DataK8SK8UpIoCheckV1ManifestSpec;
}
export interface DataK8SK8UpIoCheckV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#annotations DataK8SK8UpIoCheckV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#labels DataK8SK8UpIoCheckV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#namespace DataK8SK8UpIoCheckV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8UpIoCheckV1ManifestMetadataToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestMetadataToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendAzure {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#account_key_secret_ref DataK8SK8UpIoCheckV1Manifest#account_key_secret_ref}
  */
  readonly accountKeySecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#account_name_secret_ref DataK8SK8UpIoCheckV1Manifest#account_name_secret_ref}
  */
  readonly accountNameSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#container DataK8SK8UpIoCheckV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#path DataK8SK8UpIoCheckV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendAzureToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRefToTerraform(struct!.accountKeySecretRef),
    account_name_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRefToTerraform(struct!.accountNameSecretRef),
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendAzureToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRefToHclTerraform(struct!.accountKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef",
    },
    account_name_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRefToHclTerraform(struct!.accountNameSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecretRef = this._accountKeySecretRef?.internalValue;
    }
    if (this._accountNameSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNameSecretRef = this._accountNameSecretRef?.internalValue;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountKeySecretRef.internalValue = undefined;
      this._accountNameSecretRef.internalValue = undefined;
      this._container = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountKeySecretRef.internalValue = value.accountKeySecretRef;
      this._accountNameSecretRef.internalValue = value.accountNameSecretRef;
      this._container = value.container;
      this._path = value.path;
    }
  }

  // account_key_secret_ref - computed: false, optional: true, required: false
  private _accountKeySecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRefOutputReference(this, "account_key_secret_ref");
  public get accountKeySecretRef() {
    return this._accountKeySecretRef;
  }
  public putAccountKeySecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountKeySecretRef) {
    this._accountKeySecretRef.internalValue = value;
  }
  public resetAccountKeySecretRef() {
    this._accountKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretRefInput() {
    return this._accountKeySecretRef.internalValue;
  }

  // account_name_secret_ref - computed: false, optional: true, required: false
  private _accountNameSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRefOutputReference(this, "account_name_secret_ref");
  public get accountNameSecretRef() {
    return this._accountNameSecretRef;
  }
  public putAccountNameSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendAzureAccountNameSecretRef) {
    this._accountNameSecretRef.internalValue = value;
  }
  public resetAccountNameSecretRef() {
    this._accountNameSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameSecretRefInput() {
    return this._accountNameSecretRef.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendB2 {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#account_id_secret_ref DataK8SK8UpIoCheckV1Manifest#account_id_secret_ref}
  */
  readonly accountIdSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#account_key_secret_ref DataK8SK8UpIoCheckV1Manifest#account_key_secret_ref}
  */
  readonly accountKeySecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#bucket DataK8SK8UpIoCheckV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#path DataK8SK8UpIoCheckV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendB2ToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRefToTerraform(struct!.accountIdSecretRef),
    account_key_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRefToTerraform(struct!.accountKeySecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendB2ToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRefToHclTerraform(struct!.accountIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef",
    },
    account_key_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRefToHclTerraform(struct!.accountKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendB2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendB2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdSecretRef = this._accountIdSecretRef?.internalValue;
    }
    if (this._accountKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKeySecretRef = this._accountKeySecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendB2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdSecretRef.internalValue = undefined;
      this._accountKeySecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdSecretRef.internalValue = value.accountIdSecretRef;
      this._accountKeySecretRef.internalValue = value.accountKeySecretRef;
      this._bucket = value.bucket;
      this._path = value.path;
    }
  }

  // account_id_secret_ref - computed: false, optional: true, required: false
  private _accountIdSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRefOutputReference(this, "account_id_secret_ref");
  public get accountIdSecretRef() {
    return this._accountIdSecretRef;
  }
  public putAccountIdSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountIdSecretRef) {
    this._accountIdSecretRef.internalValue = value;
  }
  public resetAccountIdSecretRef() {
    this._accountIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdSecretRefInput() {
    return this._accountIdSecretRef.internalValue;
  }

  // account_key_secret_ref - computed: false, optional: true, required: false
  private _accountKeySecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRefOutputReference(this, "account_key_secret_ref");
  public get accountKeySecretRef() {
    return this._accountKeySecretRef;
  }
  public putAccountKeySecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendB2AccountKeySecretRef) {
    this._accountKeySecretRef.internalValue = value;
  }
  public resetAccountKeySecretRef() {
    this._accountKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeySecretRefInput() {
    return this._accountKeySecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom {
  /**
  * The ConfigMap to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#config_map_ref DataK8SK8UpIoCheckV1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef;
  /**
  * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#prefix DataK8SK8UpIoCheckV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The Secret to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#secret_ref DataK8SK8UpIoCheckV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendGcs {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#access_token_secret_ref DataK8SK8UpIoCheckV1Manifest#access_token_secret_ref}
  */
  readonly accessTokenSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#bucket DataK8SK8UpIoCheckV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#project_id_secret_ref DataK8SK8UpIoCheckV1Manifest#project_id_secret_ref}
  */
  readonly projectIdSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendGcsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRefToTerraform(struct!.accessTokenSecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    project_id_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRefToTerraform(struct!.projectIdSecretRef),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendGcsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRefToHclTerraform(struct!.accessTokenSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRefToHclTerraform(struct!.projectIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendGcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenSecretRef = this._accessTokenSecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._projectIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdSecretRef = this._projectIdSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendGcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenSecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._projectIdSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenSecretRef.internalValue = value.accessTokenSecretRef;
      this._bucket = value.bucket;
      this._projectIdSecretRef.internalValue = value.projectIdSecretRef;
    }
  }

  // access_token_secret_ref - computed: false, optional: true, required: false
  private _accessTokenSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRefOutputReference(this, "access_token_secret_ref");
  public get accessTokenSecretRef() {
    return this._accessTokenSecretRef;
  }
  public putAccessTokenSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsAccessTokenSecretRef) {
    this._accessTokenSecretRef.internalValue = value;
  }
  public resetAccessTokenSecretRef() {
    this._accessTokenSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSecretRefInput() {
    return this._accessTokenSecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // project_id_secret_ref - computed: false, optional: true, required: false
  private _projectIdSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRefOutputReference(this, "project_id_secret_ref");
  public get projectIdSecretRef() {
    return this._projectIdSecretRef;
  }
  public putProjectIdSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendGcsProjectIdSecretRef) {
    this._projectIdSecretRef.internalValue = value;
  }
  public resetProjectIdSecretRef() {
    this._projectIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdSecretRefInput() {
    return this._projectIdSecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendLocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#mount_path DataK8SK8UpIoCheckV1Manifest#mount_path}
  */
  readonly mountPath?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendLocalToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendLocalToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendLocal | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
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
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretRegToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretRegToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretRegOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendRest {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#password_secret_reg DataK8SK8UpIoCheckV1Manifest#password_secret_reg}
  */
  readonly passwordSecretReg?: DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#url DataK8SK8UpIoCheckV1Manifest#url}
  */
  readonly url?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#user_secret_ref DataK8SK8UpIoCheckV1Manifest#user_secret_ref}
  */
  readonly userSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendRestToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_secret_reg: dataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretRegToTerraform(struct!.passwordSecretReg),
    url: cdktf.stringToTerraform(struct!.url),
    user_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRefToTerraform(struct!.userSecretRef),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendRestToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_secret_reg: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretRegToHclTerraform(struct!.passwordSecretReg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRefToHclTerraform(struct!.userSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordSecretReg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretReg = this._passwordSecretReg?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSecretRef = this._userSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordSecretReg.internalValue = undefined;
      this._url = undefined;
      this._userSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordSecretReg.internalValue = value.passwordSecretReg;
      this._url = value.url;
      this._userSecretRef.internalValue = value.userSecretRef;
    }
  }

  // password_secret_reg - computed: false, optional: true, required: false
  private _passwordSecretReg = new DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretRegOutputReference(this, "password_secret_reg");
  public get passwordSecretReg() {
    return this._passwordSecretReg;
  }
  public putPasswordSecretReg(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRestPasswordSecretReg) {
    this._passwordSecretReg.internalValue = value;
  }
  public resetPasswordSecretReg() {
    this._passwordSecretReg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretRegInput() {
    return this._passwordSecretReg.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_secret_ref - computed: false, optional: true, required: false
  private _userSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRefOutputReference(this, "user_secret_ref");
  public get userSecretRef() {
    return this._userSecretRef;
  }
  public putUserSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRestUserSecretRef) {
    this._userSecretRef.internalValue = value;
  }
  public resetUserSecretRef() {
    this._userSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSecretRefInput() {
    return this._userSecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendS3 {
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#access_key_id_secret_ref DataK8SK8UpIoCheckV1Manifest#access_key_id_secret_ref}
  */
  readonly accessKeyIdSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#bucket DataK8SK8UpIoCheckV1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#endpoint DataK8SK8UpIoCheckV1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#secret_access_key_secret_ref DataK8SK8UpIoCheckV1Manifest#secret_access_key_secret_ref}
  */
  readonly secretAccessKeySecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendS3ToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRefToTerraform(struct!.accessKeyIdSecretRef),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    secret_access_key_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRefToTerraform(struct!.secretAccessKeySecretRef),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendS3ToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRefToHclTerraform(struct!.accessKeyIdSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRefToHclTerraform(struct!.secretAccessKeySecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyIdSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyIdSecretRef = this._accessKeyIdSecretRef?.internalValue;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._secretAccessKeySecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeySecretRef = this._secretAccessKeySecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = undefined;
      this._bucket = undefined;
      this._endpoint = undefined;
      this._secretAccessKeySecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyIdSecretRef.internalValue = value.accessKeyIdSecretRef;
      this._bucket = value.bucket;
      this._endpoint = value.endpoint;
      this._secretAccessKeySecretRef.internalValue = value.secretAccessKeySecretRef;
    }
  }

  // access_key_id_secret_ref - computed: false, optional: true, required: false
  private _accessKeyIdSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRefOutputReference(this, "access_key_id_secret_ref");
  public get accessKeyIdSecretRef() {
    return this._accessKeyIdSecretRef;
  }
  public putAccessKeyIdSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendS3AccessKeyIdSecretRef) {
    this._accessKeyIdSecretRef.internalValue = value;
  }
  public resetAccessKeyIdSecretRef() {
    this._accessKeyIdSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretRefInput() {
    return this._accessKeyIdSecretRef.internalValue;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // secret_access_key_secret_ref - computed: false, optional: true, required: false
  private _secretAccessKeySecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRefOutputReference(this, "secret_access_key_secret_ref");
  public get secretAccessKeySecretRef() {
    return this._secretAccessKeySecretRef;
  }
  public putSecretAccessKeySecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendS3SecretAccessKeySecretRef) {
    this._secretAccessKeySecretRef.internalValue = value;
  }
  public resetSecretAccessKeySecretRef() {
    this._secretAccessKeySecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretRefInput() {
    return this._secretAccessKeySecretRef.internalValue;
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendSwift {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#container DataK8SK8UpIoCheckV1Manifest#container}
  */
  readonly container?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#path DataK8SK8UpIoCheckV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendSwiftToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendSwiftToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendSwift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendSwiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendSwift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendSwift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._path = value.path;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#ca_cert DataK8SK8UpIoCheckV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#client_cert DataK8SK8UpIoCheckV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#client_key DataK8SK8UpIoCheckV1Manifest#client_key}
  */
  readonly clientKey?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptionsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptionsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#mount_path DataK8SK8UpIoCheckV1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#mount_propagation DataK8SK8UpIoCheckV1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#read_only DataK8SK8UpIoCheckV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#sub_path DataK8SK8UpIoCheckV1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#sub_path_expr DataK8SK8UpIoCheckV1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
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
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
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

export class DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#azure DataK8SK8UpIoCheckV1Manifest#azure}
  */
  readonly azure?: DataK8SK8UpIoCheckV1ManifestSpecBackendAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#b2 DataK8SK8UpIoCheckV1Manifest#b2}
  */
  readonly b2?: DataK8SK8UpIoCheckV1ManifestSpecBackendB2;
  /**
  * EnvFrom adds all environment variables from a an external source to the Restic job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#env_from DataK8SK8UpIoCheckV1Manifest#env_from}
  */
  readonly envFrom?: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#gcs DataK8SK8UpIoCheckV1Manifest#gcs}
  */
  readonly gcs?: DataK8SK8UpIoCheckV1ManifestSpecBackendGcs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#local DataK8SK8UpIoCheckV1Manifest#local}
  */
  readonly local?: DataK8SK8UpIoCheckV1ManifestSpecBackendLocal;
  /**
  * RepoPasswordSecretRef references a secret key to look up the restic repository password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#repo_password_secret_ref DataK8SK8UpIoCheckV1Manifest#repo_password_secret_ref}
  */
  readonly repoPasswordSecretRef?: DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#rest DataK8SK8UpIoCheckV1Manifest#rest}
  */
  readonly rest?: DataK8SK8UpIoCheckV1ManifestSpecBackendRest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#s3 DataK8SK8UpIoCheckV1Manifest#s3}
  */
  readonly s3?: DataK8SK8UpIoCheckV1ManifestSpecBackendS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#swift DataK8SK8UpIoCheckV1Manifest#swift}
  */
  readonly swift?: DataK8SK8UpIoCheckV1ManifestSpecBackendSwift;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#tls_options DataK8SK8UpIoCheckV1Manifest#tls_options}
  */
  readonly tlsOptions?: DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#volume_mounts DataK8SK8UpIoCheckV1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecBackendToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure: dataK8SK8UpIoCheckV1ManifestSpecBackendAzureToTerraform(struct!.azure),
    b2: dataK8SK8UpIoCheckV1ManifestSpecBackendB2ToTerraform(struct!.b2),
    env_from: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromToTerraform, false)(struct!.envFrom),
    gcs: dataK8SK8UpIoCheckV1ManifestSpecBackendGcsToTerraform(struct!.gcs),
    local: dataK8SK8UpIoCheckV1ManifestSpecBackendLocalToTerraform(struct!.local),
    repo_password_secret_ref: dataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRefToTerraform(struct!.repoPasswordSecretRef),
    rest: dataK8SK8UpIoCheckV1ManifestSpecBackendRestToTerraform(struct!.rest),
    s3: dataK8SK8UpIoCheckV1ManifestSpecBackendS3ToTerraform(struct!.s3),
    swift: dataK8SK8UpIoCheckV1ManifestSpecBackendSwiftToTerraform(struct!.swift),
    tls_options: dataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptionsToTerraform(struct!.tlsOptions),
    volume_mounts: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecBackendToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendAzure",
    },
    b2: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendB2ToHclTerraform(struct!.b2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendB2",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromList",
    },
    gcs: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendGcs",
    },
    local: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendLocal",
    },
    repo_password_secret_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRefToHclTerraform(struct!.repoPasswordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef",
    },
    rest: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendRest",
    },
    s3: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendS3",
    },
    swift: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendSwiftToHclTerraform(struct!.swift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendSwift",
    },
    tls_options: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptionsToHclTerraform(struct!.tlsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._b2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.b2 = this._b2?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._repoPasswordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoPasswordSecretRef = this._repoPasswordSecretRef?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._swift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swift = this._swift?.internalValue;
    }
    if (this._tlsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsOptions = this._tlsOptions?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
      this._b2.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._local.internalValue = undefined;
      this._repoPasswordSecretRef.internalValue = undefined;
      this._rest.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._swift.internalValue = undefined;
      this._tlsOptions.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
      this._b2.internalValue = value.b2;
      this._envFrom.internalValue = value.envFrom;
      this._gcs.internalValue = value.gcs;
      this._local.internalValue = value.local;
      this._repoPasswordSecretRef.internalValue = value.repoPasswordSecretRef;
      this._rest.internalValue = value.rest;
      this._s3.internalValue = value.s3;
      this._swift.internalValue = value.swift;
      this._tlsOptions.internalValue = value.tlsOptions;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SK8UpIoCheckV1ManifestSpecBackendAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SK8UpIoCheckV1ManifestSpecBackendAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // b2 - computed: false, optional: true, required: false
  private _b2 = new DataK8SK8UpIoCheckV1ManifestSpecBackendB2OutputReference(this, "b2");
  public get b2() {
    return this._b2;
  }
  public putB2(value: DataK8SK8UpIoCheckV1ManifestSpecBackendB2) {
    this._b2.internalValue = value;
  }
  public resetB2() {
    this._b2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get b2Input() {
    return this._b2.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SK8UpIoCheckV1ManifestSpecBackendEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new DataK8SK8UpIoCheckV1ManifestSpecBackendGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: DataK8SK8UpIoCheckV1ManifestSpecBackendGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SK8UpIoCheckV1ManifestSpecBackendLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SK8UpIoCheckV1ManifestSpecBackendLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // repo_password_secret_ref - computed: false, optional: true, required: false
  private _repoPasswordSecretRef = new DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRefOutputReference(this, "repo_password_secret_ref");
  public get repoPasswordSecretRef() {
    return this._repoPasswordSecretRef;
  }
  public putRepoPasswordSecretRef(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRepoPasswordSecretRef) {
    this._repoPasswordSecretRef.internalValue = value;
  }
  public resetRepoPasswordSecretRef() {
    this._repoPasswordSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoPasswordSecretRefInput() {
    return this._repoPasswordSecretRef.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SK8UpIoCheckV1ManifestSpecBackendRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SK8UpIoCheckV1ManifestSpecBackendRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SK8UpIoCheckV1ManifestSpecBackendS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SK8UpIoCheckV1ManifestSpecBackendS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // swift - computed: false, optional: true, required: false
  private _swift = new DataK8SK8UpIoCheckV1ManifestSpecBackendSwiftOutputReference(this, "swift");
  public get swift() {
    return this._swift;
  }
  public putSwift(value: DataK8SK8UpIoCheckV1ManifestSpecBackendSwift) {
    this._swift.internalValue = value;
  }
  public resetSwift() {
    this._swift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftInput() {
    return this._swift.internalValue;
  }

  // tls_options - computed: false, optional: true, required: false
  private _tlsOptions = new DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptionsOutputReference(this, "tls_options");
  public get tlsOptions() {
    return this._tlsOptions;
  }
  public putTlsOptions(value: DataK8SK8UpIoCheckV1ManifestSpecBackendTlsOptions) {
    this._tlsOptions.internalValue = value;
  }
  public resetTlsOptions() {
    this._tlsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsOptionsInput() {
    return this._tlsOptions.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SK8UpIoCheckV1ManifestSpecBackendVolumeMounts[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecPodConfigRefToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecPodConfigRefToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecPodConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#level DataK8SK8UpIoCheckV1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#role DataK8SK8UpIoCheckV1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#type DataK8SK8UpIoCheckV1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#user DataK8SK8UpIoCheckV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#localhost_profile DataK8SK8UpIoCheckV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#type DataK8SK8UpIoCheckV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#value DataK8SK8UpIoCheckV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#gmsa_credential_spec DataK8SK8UpIoCheckV1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#gmsa_credential_spec_name DataK8SK8UpIoCheckV1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#host_process DataK8SK8UpIoCheckV1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#run_as_user_name DataK8SK8UpIoCheckV1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#fs_group DataK8SK8UpIoCheckV1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#fs_group_change_policy DataK8SK8UpIoCheckV1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#run_as_group DataK8SK8UpIoCheckV1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#run_as_non_root DataK8SK8UpIoCheckV1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#run_as_user DataK8SK8UpIoCheckV1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#se_linux_options DataK8SK8UpIoCheckV1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#seccomp_profile DataK8SK8UpIoCheckV1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#supplemental_groups DataK8SK8UpIoCheckV1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#sysctls DataK8SK8UpIoCheckV1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#windows_options DataK8SK8UpIoCheckV1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions;
}

export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
  private _seLinuxOptions = new DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSeccompProfile) {
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
  private _sysctls = new DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextSysctls[] | cdktf.IResolvable) {
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
  private _windowsOptions = new DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextWindowsOptions) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#claims DataK8SK8UpIoCheckV1Manifest#claims}
  */
  readonly claims?: DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#limits DataK8SK8UpIoCheckV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#requests DataK8SK8UpIoCheckV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8UpIoCheckV1ManifestSpecResourcesToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecResourcesToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsList",
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

export class DataK8SK8UpIoCheckV1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SK8UpIoCheckV1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SK8UpIoCheckV1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#mode DataK8SK8UpIoCheckV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#path DataK8SK8UpIoCheckV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems | cdktf.IResolvable | undefined) {
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#default_mode DataK8SK8UpIoCheckV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#items DataK8SK8UpIoCheckV1Manifest#items}
  */
  readonly items?: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsList",
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

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#claim_name DataK8SK8UpIoCheckV1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#read_only DataK8SK8UpIoCheckV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
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
export interface DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#key DataK8SK8UpIoCheckV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#mode DataK8SK8UpIoCheckV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#path DataK8SK8UpIoCheckV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#default_mode DataK8SK8UpIoCheckV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#items DataK8SK8UpIoCheckV1Manifest#items}
  */
  readonly items?: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#optional DataK8SK8UpIoCheckV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#secret_name DataK8SK8UpIoCheckV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsList",
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

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SK8UpIoCheckV1ManifestSpecVolumes {
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#config_map DataK8SK8UpIoCheckV1Manifest#config_map}
  */
  readonly configMap?: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#name DataK8SK8UpIoCheckV1Manifest#name}
  */
  readonly name: string;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#persistent_volume_claim DataK8SK8UpIoCheckV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#secret DataK8SK8UpIoCheckV1Manifest#secret}
  */
  readonly secret?: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret;
}

export function dataK8SK8UpIoCheckV1ManifestSpecVolumesToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapToTerraform(struct!.configMap),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    secret: dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretToTerraform(struct!.secret),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecVolumesToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: dataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim",
    },
    secret: {
      value: dataK8SK8UpIoCheckV1ManifestSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpecVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
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

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpecVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
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
      this._name = value.name;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
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

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesPersistentVolumeClaim) {
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
  private _secret = new DataK8SK8UpIoCheckV1ManifestSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SK8UpIoCheckV1ManifestSpecVolumesSecret) {
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

export class DataK8SK8UpIoCheckV1ManifestSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8UpIoCheckV1ManifestSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8UpIoCheckV1ManifestSpecVolumesOutputReference {
    return new DataK8SK8UpIoCheckV1ManifestSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8UpIoCheckV1ManifestSpec {
  /**
  * ActiveDeadlineSeconds specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it. Value must be positive integer if given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#active_deadline_seconds DataK8SK8UpIoCheckV1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Backend contains the restic repo where the job should backup to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#backend DataK8SK8UpIoCheckV1Manifest#backend}
  */
  readonly backend?: DataK8SK8UpIoCheckV1ManifestSpecBackend;
  /**
  * FailedJobsHistoryLimit amount of failed jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#failed_jobs_history_limit DataK8SK8UpIoCheckV1Manifest#failed_jobs_history_limit}
  */
  readonly failedJobsHistoryLimit?: number;
  /**
  * KeepJobs amount of jobs to keep for later analysis. Deprecated: Use FailedJobsHistoryLimit and SuccessfulJobsHistoryLimit respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#keep_jobs DataK8SK8UpIoCheckV1Manifest#keep_jobs}
  */
  readonly keepJobs?: number;
  /**
  * PodConfigRef describes the pod spec with wich this action shall be executed. It takes precedence over the Resources or PodSecurityContext field. It does not allow changing the image or the command of the resulting pod. This is for advanced use-cases only. Please only set this if you know what you're doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#pod_config_ref DataK8SK8UpIoCheckV1Manifest#pod_config_ref}
  */
  readonly podConfigRef?: DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef;
  /**
  * PodSecurityContext describes the security context with which this action shall be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#pod_security_context DataK8SK8UpIoCheckV1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext;
  /**
  * PromURL sets a prometheus push URL where the backup container send metrics to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#prom_url DataK8SK8UpIoCheckV1Manifest#prom_url}
  */
  readonly promUrl?: string;
  /**
  * Resources describes the compute resource requirements (cpu, memory, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#resources DataK8SK8UpIoCheckV1Manifest#resources}
  */
  readonly resources?: DataK8SK8UpIoCheckV1ManifestSpecResources;
  /**
  * SuccessfulJobsHistoryLimit amount of successful jobs to keep for later analysis. KeepJobs is used property is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#successful_jobs_history_limit DataK8SK8UpIoCheckV1Manifest#successful_jobs_history_limit}
  */
  readonly successfulJobsHistoryLimit?: number;
  /**
  * Volumes List of volumes that can be mounted by containers belonging to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#volumes DataK8SK8UpIoCheckV1Manifest#volumes}
  */
  readonly volumes?: DataK8SK8UpIoCheckV1ManifestSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SK8UpIoCheckV1ManifestSpecToTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    backend: dataK8SK8UpIoCheckV1ManifestSpecBackendToTerraform(struct!.backend),
    failed_jobs_history_limit: cdktf.numberToTerraform(struct!.failedJobsHistoryLimit),
    keep_jobs: cdktf.numberToTerraform(struct!.keepJobs),
    pod_config_ref: dataK8SK8UpIoCheckV1ManifestSpecPodConfigRefToTerraform(struct!.podConfigRef),
    pod_security_context: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextToTerraform(struct!.podSecurityContext),
    prom_url: cdktf.stringToTerraform(struct!.promUrl),
    resources: dataK8SK8UpIoCheckV1ManifestSpecResourcesToTerraform(struct!.resources),
    successful_jobs_history_limit: cdktf.numberToTerraform(struct!.successfulJobsHistoryLimit),
    volumes: cdktf.listMapper(dataK8SK8UpIoCheckV1ManifestSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SK8UpIoCheckV1ManifestSpecToHclTerraform(struct?: DataK8SK8UpIoCheckV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backend: {
      value: dataK8SK8UpIoCheckV1ManifestSpecBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecBackend",
    },
    failed_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_jobs: {
      value: cdktf.numberToHclTerraform(struct!.keepJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_config_ref: {
      value: dataK8SK8UpIoCheckV1ManifestSpecPodConfigRefToHclTerraform(struct!.podConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef",
    },
    pod_security_context: {
      value: dataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext",
    },
    prom_url: {
      value: cdktf.stringToHclTerraform(struct!.promUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SK8UpIoCheckV1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecResources",
    },
    successful_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SK8UpIoCheckV1ManifestSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8UpIoCheckV1ManifestSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8UpIoCheckV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8UpIoCheckV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._failedJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedJobsHistoryLimit = this._failedJobsHistoryLimit;
    }
    if (this._keepJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepJobs = this._keepJobs;
    }
    if (this._podConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podConfigRef = this._podConfigRef?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._promUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.promUrl = this._promUrl;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._successfulJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulJobsHistoryLimit = this._successfulJobsHistoryLimit;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8UpIoCheckV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._backend.internalValue = undefined;
      this._failedJobsHistoryLimit = undefined;
      this._keepJobs = undefined;
      this._podConfigRef.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._promUrl = undefined;
      this._resources.internalValue = undefined;
      this._successfulJobsHistoryLimit = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._backend.internalValue = value.backend;
      this._failedJobsHistoryLimit = value.failedJobsHistoryLimit;
      this._keepJobs = value.keepJobs;
      this._podConfigRef.internalValue = value.podConfigRef;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._promUrl = value.promUrl;
      this._resources.internalValue = value.resources;
      this._successfulJobsHistoryLimit = value.successfulJobsHistoryLimit;
      this._volumes.internalValue = value.volumes;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new DataK8SK8UpIoCheckV1ManifestSpecBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SK8UpIoCheckV1ManifestSpecBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // failed_jobs_history_limit - computed: false, optional: true, required: false
  private _failedJobsHistoryLimit?: number; 
  public get failedJobsHistoryLimit() {
    return this.getNumberAttribute('failed_jobs_history_limit');
  }
  public set failedJobsHistoryLimit(value: number) {
    this._failedJobsHistoryLimit = value;
  }
  public resetFailedJobsHistoryLimit() {
    this._failedJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedJobsHistoryLimitInput() {
    return this._failedJobsHistoryLimit;
  }

  // keep_jobs - computed: false, optional: true, required: false
  private _keepJobs?: number; 
  public get keepJobs() {
    return this.getNumberAttribute('keep_jobs');
  }
  public set keepJobs(value: number) {
    this._keepJobs = value;
  }
  public resetKeepJobs() {
    this._keepJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobsInput() {
    return this._keepJobs;
  }

  // pod_config_ref - computed: false, optional: true, required: false
  private _podConfigRef = new DataK8SK8UpIoCheckV1ManifestSpecPodConfigRefOutputReference(this, "pod_config_ref");
  public get podConfigRef() {
    return this._podConfigRef;
  }
  public putPodConfigRef(value: DataK8SK8UpIoCheckV1ManifestSpecPodConfigRef) {
    this._podConfigRef.internalValue = value;
  }
  public resetPodConfigRef() {
    this._podConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podConfigRefInput() {
    return this._podConfigRef.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SK8UpIoCheckV1ManifestSpecPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // prom_url - computed: false, optional: true, required: false
  private _promUrl?: string; 
  public get promUrl() {
    return this.getStringAttribute('prom_url');
  }
  public set promUrl(value: string) {
    this._promUrl = value;
  }
  public resetPromUrl() {
    this._promUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promUrlInput() {
    return this._promUrl;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8UpIoCheckV1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8UpIoCheckV1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // successful_jobs_history_limit - computed: false, optional: true, required: false
  private _successfulJobsHistoryLimit?: number; 
  public get successfulJobsHistoryLimit() {
    return this.getNumberAttribute('successful_jobs_history_limit');
  }
  public set successfulJobsHistoryLimit(value: number) {
    this._successfulJobsHistoryLimit = value;
  }
  public resetSuccessfulJobsHistoryLimit() {
    this._successfulJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulJobsHistoryLimitInput() {
    return this._successfulJobsHistoryLimit;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SK8UpIoCheckV1ManifestSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SK8UpIoCheckV1ManifestSpecVolumes[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest k8s_k8up_io_check_v1_manifest}
*/
export class DataK8SK8UpIoCheckV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8up_io_check_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8UpIoCheckV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8UpIoCheckV1Manifest to import
  * @param importFromId The id of the existing DataK8SK8UpIoCheckV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8UpIoCheckV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8up_io_check_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8up_io_check_v1_manifest k8s_k8up_io_check_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8UpIoCheckV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8UpIoCheckV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8up_io_check_v1_manifest',
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
  private _metadata = new DataK8SK8UpIoCheckV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8UpIoCheckV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8UpIoCheckV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8UpIoCheckV1ManifestSpec) {
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
      metadata: dataK8SK8UpIoCheckV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8UpIoCheckV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8UpIoCheckV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8UpIoCheckV1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8UpIoCheckV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8UpIoCheckV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
