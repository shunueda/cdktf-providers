// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#metadata DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata;
  /**
  * DopplerSecretSpec defines the desired state of DopplerSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#spec DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec;
}
export interface DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#annotations DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#labels DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#name DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#namespace DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret {
  /**
  * The name of the Secret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#name DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if not cluster scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#namespace DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The secret type of the managed secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#type DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecretToTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecretToHclTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret | cdktf.IResolvable): any {
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

export class DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret | cdktf.IResolvable | undefined {
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
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._type = undefined;
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
      this._type = value.type;
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
export interface DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors {
  /**
  * The mapped name of the field in the managed secret, defaults to the original Doppler secret name for Opaque Kubernetes secrets. If omitted for other types, the value is not copied to the managed secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#as_name DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#as_name}
  */
  readonly asName?: string;
  /**
  * The type of process to be performed, either 'plain' or 'base64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#type DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessorsToTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_name: cdktf.stringToTerraform(struct!.asName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessorsToHclTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_name: {
      value: cdktf.stringToHclTerraform(struct!.asName),
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

export class DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asName !== undefined) {
      hasAnyValues = true;
      internalValueResult.asName = this._asName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asName = value.asName;
      this._type = value.type;
    }
  }

  // as_name - computed: false, optional: true, required: false
  private _asName?: string; 
  public get asName() {
    return this.getStringAttribute('as_name');
  }
  public set asName(value: string) {
    this._asName = value;
  }
  public resetAsName() {
    this._asName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNameInput() {
    return this._asName;
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
export interface DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret {
  /**
  * The name of the Secret resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#name DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource being referred to. Ignored if not cluster scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#namespace DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecretToTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecretToHclTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec {
  /**
  * The Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#config DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#config}
  */
  readonly config?: string;
  /**
  * Format enables the downloading of secrets as a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#format DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * The Doppler API host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#host DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The Kubernetes secret where the operator will store and sync the fetched secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#managed_secret DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#managed_secret}
  */
  readonly managedSecret?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret;
  /**
  * The environment variable compatible secrets name transformer to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#name_transformer DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#name_transformer}
  */
  readonly nameTransformer?: string;
  /**
  * A list of processors to transform the data during ingestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#processors DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#processors}
  */
  readonly processors?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors;
  /**
  * The Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#project DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#project}
  */
  readonly project?: string;
  /**
  * The number of seconds to wait between resyncs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#resync_seconds DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#resync_seconds}
  */
  readonly resyncSeconds?: number;
  /**
  * A list of secrets to sync from the config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#secrets DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * The Kubernetes secret containing the Doppler service token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#token_secret DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#token_secret}
  */
  readonly tokenSecret?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret;
  /**
  * Whether or not to verify TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#verify_tls DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
}

export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    format: cdktf.stringToTerraform(struct!.format),
    host: cdktf.stringToTerraform(struct!.host),
    managed_secret: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecretToTerraform(struct!.managedSecret),
    name_transformer: cdktf.stringToTerraform(struct!.nameTransformer),
    processors: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessorsToTerraform(struct!.processors),
    project: cdktf.stringToTerraform(struct!.project),
    resync_seconds: cdktf.numberToTerraform(struct!.resyncSeconds),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    token_secret: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecretToTerraform(struct!.tokenSecret),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
  }
}


export function dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_secret: {
      value: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecretToHclTerraform(struct!.managedSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret",
    },
    name_transformer: {
      value: cdktf.stringToHclTerraform(struct!.nameTransformer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processors: {
      value: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resync_seconds: {
      value: cdktf.numberToHclTerraform(struct!.resyncSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_secret: {
      value: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecretToHclTerraform(struct!.tokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._managedSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedSecret = this._managedSecret?.internalValue;
    }
    if (this._nameTransformer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTransformer = this._nameTransformer;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._resyncSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resyncSeconds = this._resyncSeconds;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._tokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret?.internalValue;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._format = undefined;
      this._host = undefined;
      this._managedSecret.internalValue = undefined;
      this._nameTransformer = undefined;
      this._processors.internalValue = undefined;
      this._project = undefined;
      this._resyncSeconds = undefined;
      this._secrets = undefined;
      this._tokenSecret.internalValue = undefined;
      this._verifyTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._format = value.format;
      this._host = value.host;
      this._managedSecret.internalValue = value.managedSecret;
      this._nameTransformer = value.nameTransformer;
      this._processors.internalValue = value.processors;
      this._project = value.project;
      this._resyncSeconds = value.resyncSeconds;
      this._secrets = value.secrets;
      this._tokenSecret.internalValue = value.tokenSecret;
      this._verifyTls = value.verifyTls;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // managed_secret - computed: false, optional: true, required: false
  private _managedSecret = new DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecretOutputReference(this, "managed_secret");
  public get managedSecret() {
    return this._managedSecret;
  }
  public putManagedSecret(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecManagedSecret) {
    this._managedSecret.internalValue = value;
  }
  public resetManagedSecret() {
    this._managedSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSecretInput() {
    return this._managedSecret.internalValue;
  }

  // name_transformer - computed: false, optional: true, required: false
  private _nameTransformer?: string; 
  public get nameTransformer() {
    return this.getStringAttribute('name_transformer');
  }
  public set nameTransformer(value: string) {
    this._nameTransformer = value;
  }
  public resetNameTransformer() {
    this._nameTransformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTransformerInput() {
    return this._nameTransformer;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecProcessors) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resync_seconds - computed: false, optional: true, required: false
  private _resyncSeconds?: number; 
  public get resyncSeconds() {
    return this.getNumberAttribute('resync_seconds');
  }
  public set resyncSeconds(value: number) {
    this._resyncSeconds = value;
  }
  public resetResyncSeconds() {
    this._resyncSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncSecondsInput() {
    return this._resyncSeconds;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // token_secret - computed: false, optional: true, required: false
  private _tokenSecret = new DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecretOutputReference(this, "token_secret");
  public get tokenSecret() {
    return this._tokenSecret;
  }
  public putTokenSecret(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecTokenSecret) {
    this._tokenSecret.internalValue = value;
  }
  public resetTokenSecret() {
    this._tokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret.internalValue;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest k8s_secrets_doppler_com_doppler_secret_v1alpha1_manifest}
*/
export class DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_doppler_com_doppler_secret_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsDopplerComDopplerSecretV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_doppler_com_doppler_secret_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/secrets_doppler_com_doppler_secret_v1alpha1_manifest k8s_secrets_doppler_com_doppler_secret_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_doppler_com_doppler_secret_v1alpha1_manifest',
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
  private _metadata = new DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsDopplerComDopplerSecretV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
