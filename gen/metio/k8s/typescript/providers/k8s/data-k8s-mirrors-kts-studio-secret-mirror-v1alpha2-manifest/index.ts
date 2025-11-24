// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#metadata DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata;
  /**
  * SecretMirrorSpec defines the desired behaviour of Secret mirroring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#spec DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec;
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#annotations DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#labels DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef {
  /**
  * Name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRefToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRefToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole {
  /**
  * approle Vault prefix. Default: approle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#app_role_path DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#app_role_path}
  */
  readonly appRolePath?: string;
  /**
  * A key in the SecretRef which contains role-id value. Default: role-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#role_id_key DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#role_id_key}
  */
  readonly roleIdKey?: string;
  /**
  * A key in the SecretRef which contains secret-id value. Default: secret-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#secret_id_key DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#secret_id_key}
  */
  readonly secretIdKey?: string;
  /**
  * Reference to a Secret containing role-id and secret-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#secret_ref DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_role_path: cdktf.stringToTerraform(struct!.appRolePath),
    role_id_key: cdktf.stringToTerraform(struct!.roleIdKey),
    secret_id_key: cdktf.stringToTerraform(struct!.secretIdKey),
    secret_ref: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_role_path: {
      value: cdktf.stringToHclTerraform(struct!.appRolePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id_key: {
      value: cdktf.stringToHclTerraform(struct!.roleIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id_key: {
      value: cdktf.stringToHclTerraform(struct!.secretIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appRolePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.appRolePath = this._appRolePath;
    }
    if (this._roleIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleIdKey = this._roleIdKey;
    }
    if (this._secretIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretIdKey = this._secretIdKey;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appRolePath = undefined;
      this._roleIdKey = undefined;
      this._secretIdKey = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appRolePath = value.appRolePath;
      this._roleIdKey = value.roleIdKey;
      this._secretIdKey = value.secretIdKey;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // app_role_path - computed: false, optional: true, required: false
  private _appRolePath?: string; 
  public get appRolePath() {
    return this.getStringAttribute('app_role_path');
  }
  public set appRolePath(value: string) {
    this._appRolePath = value;
  }
  public resetAppRolePath() {
    this._appRolePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRolePathInput() {
    return this._appRolePath;
  }

  // role_id_key - computed: false, optional: true, required: false
  private _roleIdKey?: string; 
  public get roleIdKey() {
    return this.getStringAttribute('role_id_key');
  }
  public set roleIdKey(value: string) {
    this._roleIdKey = value;
  }
  public resetRoleIdKey() {
    this._roleIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdKeyInput() {
    return this._roleIdKey;
  }

  // secret_id_key - computed: false, optional: true, required: false
  private _secretIdKey?: string; 
  public get secretIdKey() {
    return this.getStringAttribute('secret_id_key');
  }
  public set secretIdKey(value: string) {
    this._secretIdKey = value;
  }
  public resetSecretIdKey() {
    this._secretIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdKeyInput() {
    return this._secretIdKey;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleSecretRef) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef {
  /**
  * Name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRefToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRefToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken {
  /**
  * Reference to a Secret containing token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#secret_ref DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef;
  /**
  * A key in the SecretRef which contains token value. Default: token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#token_key DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#token_key}
  */
  readonly tokenKey?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRefToTerraform(struct!.secretRef),
    token_key: cdktf.stringToTerraform(struct!.tokenKey),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef",
    },
    token_key: {
      value: cdktf.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._tokenKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._tokenKey = value.tokenKey;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth {
  /**
  * VaultAppRoleAuthSpec specifies approle-specific auth data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#approle DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#approle}
  */
  readonly approle?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole;
  /**
  * VaultTokenAuthSpec specifies token-specific auth data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#token DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#token}
  */
  readonly token?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approle: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleToTerraform(struct!.approle),
    token: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenToTerraform(struct!.token),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approle: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleToHclTerraform(struct!.approle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole",
    },
    token: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approle = this._approle?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approle.internalValue = undefined;
      this._token.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approle.internalValue = value.approle;
      this._token.internalValue = value.token;
    }
  }

  // approle - computed: false, optional: true, required: false
  private _approle = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApproleOutputReference(this, "approle");
  public get approle() {
    return this._approle;
  }
  public putApprole(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthApprole) {
    this._approle.internalValue = value;
  }
  public resetApprole() {
    this._approle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approleInput() {
    return this._approle.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault {
  /**
  * Addr specifies a Vault endpoint URL (e.g. https://vault.example.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#addr DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#addr}
  */
  readonly addr?: string;
  /**
  * VaultAuthSpec describes how to authenticate against a Vault server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#auth DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#auth}
  */
  readonly auth?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth;
  /**
  * Path specifies a vault secret path (e.g. secret/data/some-secret or mongodb/creds/mymongo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#path DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    auth: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToTerraform(struct!.auth),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth",
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._auth.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._auth.internalValue = value.auth;
      this._path = value.path;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination {
  /**
  * An array of regular expressions to match namespaces where to copy a source secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#namespaces DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Destination type. Possible values — namespaces, vault. Default: namespaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#type DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#type}
  */
  readonly type?: string;
  /**
  * VaultSpec contains information of secret location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#vault DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#vault}
  */
  readonly vault?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    type: cdktf.stringToTerraform(struct!.type),
    vault: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultToTerraform(struct!.vault),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._type = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._type = value.type;
      this._vault.internalValue = value.vault;
    }
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

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef {
  /**
  * Name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRefToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRefToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole {
  /**
  * approle Vault prefix. Default: approle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#app_role_path DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#app_role_path}
  */
  readonly appRolePath?: string;
  /**
  * A key in the SecretRef which contains role-id value. Default: role-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#role_id_key DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#role_id_key}
  */
  readonly roleIdKey?: string;
  /**
  * A key in the SecretRef which contains secret-id value. Default: secret-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#secret_id_key DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#secret_id_key}
  */
  readonly secretIdKey?: string;
  /**
  * Reference to a Secret containing role-id and secret-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#secret_ref DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_role_path: cdktf.stringToTerraform(struct!.appRolePath),
    role_id_key: cdktf.stringToTerraform(struct!.roleIdKey),
    secret_id_key: cdktf.stringToTerraform(struct!.secretIdKey),
    secret_ref: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_role_path: {
      value: cdktf.stringToHclTerraform(struct!.appRolePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id_key: {
      value: cdktf.stringToHclTerraform(struct!.roleIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id_key: {
      value: cdktf.stringToHclTerraform(struct!.secretIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appRolePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.appRolePath = this._appRolePath;
    }
    if (this._roleIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleIdKey = this._roleIdKey;
    }
    if (this._secretIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretIdKey = this._secretIdKey;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appRolePath = undefined;
      this._roleIdKey = undefined;
      this._secretIdKey = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appRolePath = value.appRolePath;
      this._roleIdKey = value.roleIdKey;
      this._secretIdKey = value.secretIdKey;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // app_role_path - computed: false, optional: true, required: false
  private _appRolePath?: string; 
  public get appRolePath() {
    return this.getStringAttribute('app_role_path');
  }
  public set appRolePath(value: string) {
    this._appRolePath = value;
  }
  public resetAppRolePath() {
    this._appRolePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRolePathInput() {
    return this._appRolePath;
  }

  // role_id_key - computed: false, optional: true, required: false
  private _roleIdKey?: string; 
  public get roleIdKey() {
    return this.getStringAttribute('role_id_key');
  }
  public set roleIdKey(value: string) {
    this._roleIdKey = value;
  }
  public resetRoleIdKey() {
    this._roleIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdKeyInput() {
    return this._roleIdKey;
  }

  // secret_id_key - computed: false, optional: true, required: false
  private _secretIdKey?: string; 
  public get secretIdKey() {
    return this.getStringAttribute('secret_id_key');
  }
  public set secretIdKey(value: string) {
    this._secretIdKey = value;
  }
  public resetSecretIdKey() {
    this._secretIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdKeyInput() {
    return this._secretIdKey;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleSecretRef) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef {
  /**
  * Name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#namespace DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRefToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRefToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef | cdktf.IResolvable): any {
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken {
  /**
  * Reference to a Secret containing token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#secret_ref DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef;
  /**
  * A key in the SecretRef which contains token value. Default: token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#token_key DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#token_key}
  */
  readonly tokenKey?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRefToTerraform(struct!.secretRef),
    token_key: cdktf.stringToTerraform(struct!.tokenKey),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef",
    },
    token_key: {
      value: cdktf.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._tokenKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._tokenKey = value.tokenKey;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth {
  /**
  * VaultAppRoleAuthSpec specifies approle-specific auth data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#approle DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#approle}
  */
  readonly approle?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole;
  /**
  * VaultTokenAuthSpec specifies token-specific auth data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#token DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#token}
  */
  readonly token?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approle: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleToTerraform(struct!.approle),
    token: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenToTerraform(struct!.token),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approle: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleToHclTerraform(struct!.approle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole",
    },
    token: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approle = this._approle?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approle.internalValue = undefined;
      this._token.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approle.internalValue = value.approle;
      this._token.internalValue = value.token;
    }
  }

  // approle - computed: false, optional: true, required: false
  private _approle = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApproleOutputReference(this, "approle");
  public get approle() {
    return this._approle;
  }
  public putApprole(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthApprole) {
    this._approle.internalValue = value;
  }
  public resetApprole() {
    this._approle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approleInput() {
    return this._approle.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault {
  /**
  * Addr specifies a Vault endpoint URL (e.g. https://vault.example.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#addr DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#addr}
  */
  readonly addr?: string;
  /**
  * VaultAuthSpec describes how to authenticate against a Vault server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#auth DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#auth}
  */
  readonly auth?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth;
  /**
  * Path specifies a vault secret path (e.g. secret/data/some-secret or mongodb/creds/mymongo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#path DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    auth: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToTerraform(struct!.auth),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth",
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

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._auth.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._auth.internalValue = value.auth;
      this._path = value.path;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#name DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#type DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#type}
  */
  readonly type?: string;
  /**
  * VaultSpec contains information of secret location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#vault DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#vault}
  */
  readonly vault?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    vault: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultToTerraform(struct!.vault),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._vault.internalValue = value.vault;
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

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}
export interface DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec {
  /**
  * What to do with Secret objects created by a SecretMirror. Two policies exist – delete (deletes all created secrets) and retain (leaves them in the cluster). Default: delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#delete_policy DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * SecretMirrorDestination defines where to sync a secret data to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#destination DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#destination}
  */
  readonly destination?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination;
  /**
  * How often to check for secret changes. Default: 180 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#poll_period_seconds DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#poll_period_seconds}
  */
  readonly pollPeriodSeconds?: number;
  /**
  * SecretMirrorSource defines where to extract a secret data from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#source DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest#source}
  */
  readonly source?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource;
}

export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecToTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_policy: cdktf.stringToTerraform(struct!.deletePolicy),
    destination: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationToTerraform(struct!.destination),
    poll_period_seconds: cdktf.numberToTerraform(struct!.pollPeriodSeconds),
    source: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceToTerraform(struct!.source),
  }
}


export function dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination",
    },
    poll_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.pollPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePolicy = this._deletePolicy;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._pollPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollPeriodSeconds = this._pollPeriodSeconds;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletePolicy = undefined;
      this._destination.internalValue = undefined;
      this._pollPeriodSeconds = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletePolicy = value.deletePolicy;
      this._destination.internalValue = value.destination;
      this._pollPeriodSeconds = value.pollPeriodSeconds;
      this._source.internalValue = value.source;
    }
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string; 
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // poll_period_seconds - computed: false, optional: true, required: false
  private _pollPeriodSeconds?: number; 
  public get pollPeriodSeconds() {
    return this.getNumberAttribute('poll_period_seconds');
  }
  public set pollPeriodSeconds(value: number) {
    this._pollPeriodSeconds = value;
  }
  public resetPollPeriodSeconds() {
    this._pollPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollPeriodSecondsInput() {
    return this._pollPeriodSeconds;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest k8s_mirrors_kts_studio_secret_mirror_v1alpha2_manifest}
*/
export class DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_mirrors_kts_studio_secret_mirror_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_mirrors_kts_studio_secret_mirror_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/mirrors_kts_studio_secret_mirror_v1alpha2_manifest k8s_mirrors_kts_studio_secret_mirror_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_mirrors_kts_studio_secret_mirror_v1alpha2_manifest',
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
  private _metadata = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec) {
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
      metadata: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMirrorsKtsStudioSecretMirrorV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
