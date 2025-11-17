// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#metadata DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata;
  /**
  * DeveloperUserSpec defines the desired state of DeveloperUser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#spec DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec;
}
export interface DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#annotations DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#labels DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#name DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadataToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#name DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRefToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#name DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRefToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#name DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRefToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec {
  /**
  * DeveloperAccountRef is the reference to the parent developer account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#developer_account_ref DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#developer_account_ref}
  */
  readonly developerAccountRef: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef;
  /**
  * Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#email DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#email}
  */
  readonly email: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#password_credentials_ref DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#password_credentials_ref}
  */
  readonly passwordCredentialsRef: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef;
  /**
  * ProviderAccountRef references account provider credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#provider_account_ref DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#provider_account_ref}
  */
  readonly providerAccountRef?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef;
  /**
  * Role defines the desired 3scale role. Defaults to 'member'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#role DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * State defines the desired state. Defaults to 'false', ie, active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#suspended DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#username DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    developer_account_ref: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRefToTerraform(struct!.developerAccountRef),
    email: cdktf.stringToTerraform(struct!.email),
    password_credentials_ref: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRefToTerraform(struct!.passwordCredentialsRef),
    provider_account_ref: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRefToTerraform(struct!.providerAccountRef),
    role: cdktf.stringToTerraform(struct!.role),
    suspended: cdktf.booleanToTerraform(struct!.suspended),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    developer_account_ref: {
      value: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRefToHclTerraform(struct!.developerAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_credentials_ref: {
      value: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRefToHclTerraform(struct!.passwordCredentialsRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef",
    },
    provider_account_ref: {
      value: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct!.providerAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspended: {
      value: cdktf.booleanToHclTerraform(struct!.suspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._developerAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerAccountRef = this._developerAccountRef?.internalValue;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._passwordCredentialsRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCredentialsRef = this._passwordCredentialsRef?.internalValue;
    }
    if (this._providerAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountRef = this._providerAccountRef?.internalValue;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._suspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspended = this._suspended;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._developerAccountRef.internalValue = undefined;
      this._email = undefined;
      this._passwordCredentialsRef.internalValue = undefined;
      this._providerAccountRef.internalValue = undefined;
      this._role = undefined;
      this._suspended = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._developerAccountRef.internalValue = value.developerAccountRef;
      this._email = value.email;
      this._passwordCredentialsRef.internalValue = value.passwordCredentialsRef;
      this._providerAccountRef.internalValue = value.providerAccountRef;
      this._role = value.role;
      this._suspended = value.suspended;
      this._username = value.username;
    }
  }

  // developer_account_ref - computed: false, optional: false, required: true
  private _developerAccountRef = new DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRefOutputReference(this, "developer_account_ref");
  public get developerAccountRef() {
    return this._developerAccountRef;
  }
  public putDeveloperAccountRef(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecDeveloperAccountRef) {
    this._developerAccountRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAccountRefInput() {
    return this._developerAccountRef.internalValue;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // password_credentials_ref - computed: false, optional: false, required: true
  private _passwordCredentialsRef = new DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRefOutputReference(this, "password_credentials_ref");
  public get passwordCredentialsRef() {
    return this._passwordCredentialsRef;
  }
  public putPasswordCredentialsRef(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecPasswordCredentialsRef) {
    this._passwordCredentialsRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCredentialsRefInput() {
    return this._passwordCredentialsRef.internalValue;
  }

  // provider_account_ref - computed: false, optional: true, required: false
  private _providerAccountRef = new DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRefOutputReference(this, "provider_account_ref");
  public get providerAccountRef() {
    return this._providerAccountRef;
  }
  public putProviderAccountRef(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecProviderAccountRef) {
    this._providerAccountRef.internalValue = value;
  }
  public resetProviderAccountRef() {
    this._providerAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountRefInput() {
    return this._providerAccountRef.internalValue;
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

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest k8s_capabilities_3scale_net_developer_user_v1beta1_manifest}
*/
export class DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capabilities_3scale_net_developer_user_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capabilities_3scale_net_developer_user_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capabilities_3scale_net_developer_user_v1beta1_manifest k8s_capabilities_3scale_net_developer_user_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capabilities_3scale_net_developer_user_v1beta1_manifest',
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
  private _metadata = new DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec) {
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
      metadata: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetDeveloperUserV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
