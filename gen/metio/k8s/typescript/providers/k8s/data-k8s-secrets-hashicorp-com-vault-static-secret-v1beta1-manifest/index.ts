// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#metadata DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata;
  /**
  * VaultStaticSecretSpec defines the desired state of VaultStaticSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#spec DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec;
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#annotations DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#labels DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates {
  /**
  * Name of the Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Text contains the Go text template format. The template references attributes from the data structure of the source secret. Refer to https://pkg.go.dev/text/template for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#text DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#text}
  */
  readonly text: string;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable): any {
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
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._text = value.text;
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

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs {
  /**
  * KeyOverride to the rendered template in the Destination secret. If Key is empty, then the Key from reference spec will be used. Set this to override the Key set from the reference spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#key_override DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#key_override}
  */
  readonly keyOverride?: string;
  /**
  * Name of the Template in SecretTransformationSpec.Templates. the rendered secret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_override: cdktf.stringToTerraform(struct!.keyOverride),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_override: {
      value: cdktf.stringToHclTerraform(struct!.keyOverride),
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

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOverride = this._keyOverride;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyOverride = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyOverride = value.keyOverride;
      this._name = value.name;
    }
  }

  // key_override - computed: false, optional: true, required: false
  private _keyOverride?: string; 
  public get keyOverride() {
    return this.getStringAttribute('key_override');
  }
  public set keyOverride(value: string) {
    this._keyOverride = value;
  }
  public resetKeyOverride() {
    this._keyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOverrideInput() {
    return this._keyOverride;
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

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsOutputReference {
    return new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs {
  /**
  * IgnoreExcludes controls whether to use the SecretTransformation's Excludes data key filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#ignore_excludes DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#ignore_excludes}
  */
  readonly ignoreExcludes?: boolean | cdktf.IResolvable;
  /**
  * IgnoreIncludes controls whether to use the SecretTransformation's Includes data key filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#ignore_includes DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#ignore_includes}
  */
  readonly ignoreIncludes?: boolean | cdktf.IResolvable;
  /**
  * Name of the SecretTransformation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the SecretTransformation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * TemplateRefs map to a Template found in this TransformationRef. If empty, then all templates from the SecretTransformation will be rendered to the K8s Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#template_refs DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#template_refs}
  */
  readonly templateRefs?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs[] | cdktf.IResolvable;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_excludes: cdktf.booleanToTerraform(struct!.ignoreExcludes),
    ignore_includes: cdktf.booleanToTerraform(struct!.ignoreIncludes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    template_refs: cdktf.listMapper(dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToTerraform, false)(struct!.templateRefs),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_excludes: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreExcludes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_includes: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreIncludes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    template_refs: {
      value: cdktf.listMapperHcl(dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsToHclTerraform, false)(struct!.templateRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreExcludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExcludes = this._ignoreExcludes;
    }
    if (this._ignoreIncludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreIncludes = this._ignoreIncludes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._templateRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRefs = this._templateRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreExcludes = undefined;
      this._ignoreIncludes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._templateRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreExcludes = value.ignoreExcludes;
      this._ignoreIncludes = value.ignoreIncludes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._templateRefs.internalValue = value.templateRefs;
    }
  }

  // ignore_excludes - computed: false, optional: true, required: false
  private _ignoreExcludes?: boolean | cdktf.IResolvable; 
  public get ignoreExcludes() {
    return this.getBooleanAttribute('ignore_excludes');
  }
  public set ignoreExcludes(value: boolean | cdktf.IResolvable) {
    this._ignoreExcludes = value;
  }
  public resetIgnoreExcludes() {
    this._ignoreExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExcludesInput() {
    return this._ignoreExcludes;
  }

  // ignore_includes - computed: false, optional: true, required: false
  private _ignoreIncludes?: boolean | cdktf.IResolvable; 
  public get ignoreIncludes() {
    return this.getBooleanAttribute('ignore_includes');
  }
  public set ignoreIncludes(value: boolean | cdktf.IResolvable) {
    this._ignoreIncludes = value;
  }
  public resetIgnoreIncludes() {
    this._ignoreIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIncludesInput() {
    return this._ignoreIncludes;
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

  // template_refs - computed: false, optional: true, required: false
  private _templateRefs = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefsList(this, "template_refs", false);
  public get templateRefs() {
    return this._templateRefs;
  }
  public putTemplateRefs(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsTemplateRefs[] | cdktf.IResolvable) {
    this._templateRefs.internalValue = value;
  }
  public resetTemplateRefs() {
    this._templateRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefsInput() {
    return this._templateRefs.internalValue;
  }
}

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsOutputReference {
    return new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation {
  /**
  * ExcludeRaw data from the destination Secret. Exclusion policy can be set globally by including 'exclude-raw' in the '--global-transformation-options' command line flag. If set, the command line flag always takes precedence over this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#exclude_raw DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#exclude_raw}
  */
  readonly excludeRaw?: boolean | cdktf.IResolvable;
  /**
  * Excludes contains regex patterns used to filter top-level source secret data fields for exclusion from the final K8s Secret data. These pattern filters are never applied to templated fields as defined in Templates. They are always applied before any inclusion patterns. To exclude all source secret data fields, you can configure the single pattern '.*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#excludes DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#excludes}
  */
  readonly excludes?: string[];
  /**
  * Includes contains regex patterns used to filter top-level source secret data fields for inclusion in the final K8s Secret data. These pattern filters are never applied to templated fields as defined in Templates. They are always applied last.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#includes DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#includes}
  */
  readonly includes?: string[];
  /**
  * Templates maps a template name to its Template. Templates are always included in the rendered K8s Secret, and take precedence over templates defined in a SecretTransformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#templates DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#templates}
  */
  readonly templates?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates;
  /**
  * TransformationRefs contain references to template configuration from SecretTransformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#transformation_refs DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#transformation_refs}
  */
  readonly transformationRefs?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs[] | cdktf.IResolvable;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_raw: cdktf.booleanToTerraform(struct!.excludeRaw),
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
    templates: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToTerraform(struct!.templates),
    transformation_refs: cdktf.listMapper(dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToTerraform, false)(struct!.transformationRefs),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_raw: {
      value: cdktf.booleanToHclTerraform(struct!.excludeRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    templates: {
      value: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplatesToHclTerraform(struct!.templates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates",
    },
    transformation_refs: {
      value: cdktf.listMapperHcl(dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsToHclTerraform, false)(struct!.transformationRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRaw = this._excludeRaw;
    }
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    if (this._transformationRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationRefs = this._transformationRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeRaw = undefined;
      this._excludes = undefined;
      this._includes = undefined;
      this._templates.internalValue = undefined;
      this._transformationRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeRaw = value.excludeRaw;
      this._excludes = value.excludes;
      this._includes = value.includes;
      this._templates.internalValue = value.templates;
      this._transformationRefs.internalValue = value.transformationRefs;
    }
  }

  // exclude_raw - computed: false, optional: true, required: false
  private _excludeRaw?: boolean | cdktf.IResolvable; 
  public get excludeRaw() {
    return this.getBooleanAttribute('exclude_raw');
  }
  public set excludeRaw(value: boolean | cdktf.IResolvable) {
    this._excludeRaw = value;
  }
  public resetExcludeRaw() {
    this._excludeRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRawInput() {
    return this._excludeRaw;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplatesOutputReference(this, "templates");
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTemplates) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }

  // transformation_refs - computed: false, optional: true, required: false
  private _transformationRefs = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefsList(this, "transformation_refs", false);
  public get transformationRefs() {
    return this._transformationRefs;
  }
  public putTransformationRefs(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationTransformationRefs[] | cdktf.IResolvable) {
    this._transformationRefs.internalValue = value;
  }
  public resetTransformationRefs() {
    this._transformationRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRefsInput() {
    return this._transformationRefs.internalValue;
  }
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination {
  /**
  * Annotations to apply to the Secret. Requires Create to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#annotations DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Create the destination Secret. If the Secret already exists this should be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#create DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Labels to apply to the Secret. Requires Create to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#labels DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Overwrite the destination Secret if it exists and Create is true. This is useful when migrating to VSO from a previous secret deployment strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#overwrite DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Transformation provides configuration for transforming the secret data before it is stored in the Destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#transformation DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#transformation}
  */
  readonly transformation?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation;
  /**
  * Type of Kubernetes Secret. Requires Create to be set to true. Defaults to Opaque.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#type DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    create: cdktf.booleanToTerraform(struct!.create),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    transformation: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationToTerraform(struct!.transformation),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable): any {
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
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation: {
      value: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationToHclTerraform(struct!.transformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation",
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

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._create = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._transformation.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._create = value.create;
      this._labels = value.labels;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._transformation.internalValue = value.transformation;
      this._type = value.type;
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

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationTransformation) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
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
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets {
  /**
  * Kind of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#kind DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
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

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsOutputReference {
    return new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig {
  /**
  * InstantUpdates is a flag to indicate that event-driven updates are enabled for this VaultStaticSecret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#instant_updates DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#instant_updates}
  */
  readonly instantUpdates?: boolean | cdktf.IResolvable;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfigToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instant_updates: cdktf.booleanToTerraform(struct!.instantUpdates),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfigToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instant_updates: {
      value: cdktf.booleanToHclTerraform(struct!.instantUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instantUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantUpdates = this._instantUpdates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instantUpdates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instantUpdates = value.instantUpdates;
    }
  }

  // instant_updates - computed: false, optional: true, required: false
  private _instantUpdates?: boolean | cdktf.IResolvable; 
  public get instantUpdates() {
    return this.getBooleanAttribute('instant_updates');
  }
  public set instantUpdates(value: boolean | cdktf.IResolvable) {
    this._instantUpdates = value;
  }
  public resetInstantUpdates() {
    this._instantUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantUpdatesInput() {
    return this._instantUpdates;
  }
}
export interface DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec {
  /**
  * Destination provides configuration necessary for syncing the Vault secret to Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#destination DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#destination}
  */
  readonly destination: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination;
  /**
  * HMACSecretData determines whether the Operator computes the HMAC of the Secret's data. The MAC value will be stored in the resource's Status.SecretMac field, and will be used for drift detection and during incoming Vault secret comparison. Enabling this feature is recommended to ensure that Secret's data stays consistent with Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#hmac_secret_data DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#hmac_secret_data}
  */
  readonly hmacSecretData?: boolean | cdktf.IResolvable;
  /**
  * Mount for the secret in Vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#mount DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#mount}
  */
  readonly mount: string;
  /**
  * Namespace of the secrets engine mount in Vault. If not set, the namespace that's part of VaultAuth resource will be inferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Path of the secret in Vault, corresponds to the 'path' parameter for, kv-v1: https://developer.hashicorp.com/vault/api-docs/secret/kv/kv-v1#read-secret kv-v2: https://developer.hashicorp.com/vault/api-docs/secret/kv/kv-v2#read-secret-version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#path DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * RefreshAfter a period of time, in duration notation e.g. 30s, 1m, 24h
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#refresh_after DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#refresh_after}
  */
  readonly refreshAfter?: string;
  /**
  * RolloutRestartTargets should be configured whenever the application(s) consuming the Vault secret does not support dynamically reloading a rotated secret. In that case one, or more RolloutRestartTarget(s) can be configured here. The Operator will trigger a 'rollout-restart' for each target whenever the Vault secret changes between reconciliation events. All configured targets wil be ignored if HMACSecretData is set to false. See RolloutRestartTarget for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#rollout_restart_targets DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#rollout_restart_targets}
  */
  readonly rolloutRestartTargets?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets[] | cdktf.IResolvable;
  /**
  * SyncConfig configures sync behavior from Vault to VSO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#sync_config DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#sync_config}
  */
  readonly syncConfig?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig;
  /**
  * Type of the Vault static secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#type DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * VaultAuthRef to the VaultAuth resource, can be prefixed with a namespace, eg: 'namespaceA/vaultAuthRefB'. If no namespace prefix is provided it will default to the namespace of the VaultAuth CR. If no value is specified for VaultAuthRef the Operator will default to the 'default' VaultAuth, configured in the operator's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#vault_auth_ref DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#vault_auth_ref}
  */
  readonly vaultAuthRef?: string;
  /**
  * Version of the secret to fetch. Only valid for type kv-v2. Corresponds to version query parameter: https://developer.hashicorp.com/vault/api-docs/secret/kv/kv-v2#version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#version DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest#version}
  */
  readonly version?: number;
}

export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationToTerraform(struct!.destination),
    hmac_secret_data: cdktf.booleanToTerraform(struct!.hmacSecretData),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    refresh_after: cdktf.stringToTerraform(struct!.refreshAfter),
    rollout_restart_targets: cdktf.listMapper(dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsToTerraform, false)(struct!.rolloutRestartTargets),
    sync_config: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfigToTerraform(struct!.syncConfig),
    type: cdktf.stringToTerraform(struct!.type),
    vault_auth_ref: cdktf.stringToTerraform(struct!.vaultAuthRef),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination",
    },
    hmac_secret_data: {
      value: cdktf.booleanToHclTerraform(struct!.hmacSecretData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_after: {
      value: cdktf.stringToHclTerraform(struct!.refreshAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollout_restart_targets: {
      value: cdktf.listMapperHcl(dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsToHclTerraform, false)(struct!.rolloutRestartTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsList",
    },
    sync_config: {
      value: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfigToHclTerraform(struct!.syncConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_auth_ref: {
      value: cdktf.stringToHclTerraform(struct!.vaultAuthRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._hmacSecretData !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacSecretData = this._hmacSecretData;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._refreshAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshAfter = this._refreshAfter;
    }
    if (this._rolloutRestartTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutRestartTargets = this._rolloutRestartTargets?.internalValue;
    }
    if (this._syncConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncConfig = this._syncConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vaultAuthRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultAuthRef = this._vaultAuthRef;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._hmacSecretData = undefined;
      this._mount = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._refreshAfter = undefined;
      this._rolloutRestartTargets.internalValue = undefined;
      this._syncConfig.internalValue = undefined;
      this._type = undefined;
      this._vaultAuthRef = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._hmacSecretData = value.hmacSecretData;
      this._mount = value.mount;
      this._namespace = value.namespace;
      this._path = value.path;
      this._refreshAfter = value.refreshAfter;
      this._rolloutRestartTargets.internalValue = value.rolloutRestartTargets;
      this._syncConfig.internalValue = value.syncConfig;
      this._type = value.type;
      this._vaultAuthRef = value.vaultAuthRef;
      this._version = value.version;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // hmac_secret_data - computed: false, optional: true, required: false
  private _hmacSecretData?: boolean | cdktf.IResolvable; 
  public get hmacSecretData() {
    return this.getBooleanAttribute('hmac_secret_data');
  }
  public set hmacSecretData(value: boolean | cdktf.IResolvable) {
    this._hmacSecretData = value;
  }
  public resetHmacSecretData() {
    this._hmacSecretData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacSecretDataInput() {
    return this._hmacSecretData;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // refresh_after - computed: false, optional: true, required: false
  private _refreshAfter?: string; 
  public get refreshAfter() {
    return this.getStringAttribute('refresh_after');
  }
  public set refreshAfter(value: string) {
    this._refreshAfter = value;
  }
  public resetRefreshAfter() {
    this._refreshAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshAfterInput() {
    return this._refreshAfter;
  }

  // rollout_restart_targets - computed: false, optional: true, required: false
  private _rolloutRestartTargets = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargetsList(this, "rollout_restart_targets", false);
  public get rolloutRestartTargets() {
    return this._rolloutRestartTargets;
  }
  public putRolloutRestartTargets(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecRolloutRestartTargets[] | cdktf.IResolvable) {
    this._rolloutRestartTargets.internalValue = value;
  }
  public resetRolloutRestartTargets() {
    this._rolloutRestartTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutRestartTargetsInput() {
    return this._rolloutRestartTargets.internalValue;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
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

  // vault_auth_ref - computed: false, optional: true, required: false
  private _vaultAuthRef?: string; 
  public get vaultAuthRef() {
    return this.getStringAttribute('vault_auth_ref');
  }
  public set vaultAuthRef(value: string) {
    this._vaultAuthRef = value;
  }
  public resetVaultAuthRef() {
    this._vaultAuthRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthRefInput() {
    return this._vaultAuthRef;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest k8s_secrets_hashicorp_com_vault_static_secret_v1beta1_manifest}
*/
export class DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_hashicorp_com_vault_static_secret_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_hashicorp_com_vault_static_secret_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/secrets_hashicorp_com_vault_static_secret_v1beta1_manifest k8s_secrets_hashicorp_com_vault_static_secret_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_hashicorp_com_vault_static_secret_v1beta1_manifest',
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
  private _metadata = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultStaticSecretV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
