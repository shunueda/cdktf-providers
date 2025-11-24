// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#metadata DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata;
  /**
  * A NiFi cluster stacklet. This resource is managed by the Stackable operator for Apache NiFi. Find more information on how to use it and the resources that the operator generates in the [operator documentation](https://docs.stackable.tech/home/nightly/nifi/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#spec DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec;
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#annotations DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#name DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#namespace DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc {
  /**
  * A reference to the OIDC client credentials secret. The secret contains the client id and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#client_credentials_secret DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#client_credentials_secret}
  */
  readonly clientCredentialsSecret: string;
  /**
  * An optional list of extra scopes which get merged with the scopes defined in the ['AuthenticationClass'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#extra_scopes DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#extra_scopes}
  */
  readonly extraScopes?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidcToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials_secret: cdktf.stringToTerraform(struct!.clientCredentialsSecret),
    extra_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraScopes),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidcToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientCredentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsSecret = this._clientCredentialsSecret;
    }
    if (this._extraScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraScopes = this._extraScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsSecret = undefined;
      this._extraScopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsSecret = value.clientCredentialsSecret;
      this._extraScopes = value.extraScopes;
    }
  }

  // client_credentials_secret - computed: false, optional: false, required: true
  private _clientCredentialsSecret?: string; 
  public get clientCredentialsSecret() {
    return this.getStringAttribute('client_credentials_secret');
  }
  public set clientCredentialsSecret(value: string) {
    this._clientCredentialsSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsSecretInput() {
    return this._clientCredentialsSecret;
  }

  // extra_scopes - computed: false, optional: true, required: false
  private _extraScopes?: string[]; 
  public get extraScopes() {
    return this.getListAttribute('extra_scopes');
  }
  public set extraScopes(value: string[]) {
    this._extraScopes = value;
  }
  public resetExtraScopes() {
    this._extraScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraScopesInput() {
    return this._extraScopes;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication {
  /**
  * Name of the [AuthenticationClass](https://docs.stackable.tech/home/nightly/concepts/authentication) used to authenticate users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#authentication_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#authentication_class}
  */
  readonly authenticationClass: string;
  /**
  * This field contains OIDC-specific configuration. It is only required in case OIDC is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#oidc DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#oidc}
  */
  readonly oidc?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_class: cdktf.stringToTerraform(struct!.authenticationClass),
    oidc: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidcToTerraform(struct!.oidc),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_class: {
      value: cdktf.stringToHclTerraform(struct!.authenticationClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationClass = this._authenticationClass;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationClass = undefined;
      this._oidc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationClass = value.authenticationClass;
      this._oidc.internalValue = value.oidc;
    }
  }

  // authentication_class - computed: false, optional: false, required: true
  private _authenticationClass?: string; 
  public get authenticationClass() {
    return this.getStringAttribute('authentication_class');
  }
  public set authenticationClass(value: string) {
    this._authenticationClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationClassInput() {
    return this._authenticationClass;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob {
  /**
  * Wether the Kubernetes Job should be created, defaults to true. It can be helpful to disable the Job, e.g. when you configOverride an authentication mechanism, which the Job currently can't use to authenticate against NiFi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#enabled DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Here you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on the Pod of the create-reporting-task Kubernetes Job. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJobToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJobToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._podOverrides = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._podOverrides = value.podOverrides;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck {
  /**
  * List of proxy hosts to add to the default allow list deployed by SDP containing Kubernetes Services utilized by NiFi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#additional_allowed_hosts DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#additional_allowed_hosts}
  */
  readonly additionalAllowedHosts?: string[];
  /**
  * Allow all proxy hosts by turning off host header validation. See <https://github.com/stackabletech/docker-images/pull/694>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#allow_all DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheckToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalAllowedHosts),
    allow_all: cdktf.booleanToTerraform(struct!.allowAll),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheckToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalAllowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.allowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAllowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAllowedHosts = this._additionalAllowedHosts;
    }
    if (this._allowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAll = this._allowAll;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAllowedHosts = undefined;
      this._allowAll = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAllowedHosts = value.additionalAllowedHosts;
      this._allowAll = value.allowAll;
    }
  }

  // additional_allowed_hosts - computed: false, optional: true, required: false
  private _additionalAllowedHosts?: string[]; 
  public get additionalAllowedHosts() {
    return this.getListAttribute('additional_allowed_hosts');
  }
  public set additionalAllowedHosts(value: string[]) {
    this._additionalAllowedHosts = value;
  }
  public resetAdditionalAllowedHosts() {
    this._additionalAllowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAllowedHostsInput() {
    return this._additionalAllowedHosts;
  }

  // allow_all - computed: false, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties {
  /**
  * This is setting the 'nifi.sensitive.props.algorithm' property in NiFi. This setting configures the encryption algorithm to use to encrypt sensitive properties. Valid values are: 'nifiPbkdf2AesGcm256' (the default value), 'nifiArgon2AesGcm256', The following algorithms are deprecated and will be removed in future versions: 'nifiArgon2AesGcm128', 'nifiBcryptAesGcm128', 'nifiBcryptAesGcm256', 'nifiPbkdf2AesGcm128', 'nifiScryptAesGcm128', 'nifiScryptAesGcm256'. Learn more about the specifics of the algorithm parameters in the [NiFi documentation](https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#property-encryption-algorithms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#algorithm DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Whether to generate the 'keySecret' if it is missing. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#auto_generate DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#auto_generate}
  */
  readonly autoGenerate?: boolean | cdktf.IResolvable;
  /**
  * A reference to a Secret. The Secret needs to contain a key 'nifiSensitivePropsKey'. If 'autoGenerate' is false and this object is missing, the Operator will raise an error. The encryption key needs to be at least 12 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key_secret DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key_secret}
  */
  readonly keySecret: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitivePropertiesToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    auto_generate: cdktf.booleanToTerraform(struct!.autoGenerate),
    key_secret: cdktf.stringToTerraform(struct!.keySecret),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitivePropertiesToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties | cdktf.IResolvable): any {
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
    auto_generate: {
      value: cdktf.booleanToHclTerraform(struct!.autoGenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_secret: {
      value: cdktf.stringToHclTerraform(struct!.keySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitivePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._autoGenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGenerate = this._autoGenerate;
    }
    if (this._keySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._autoGenerate = undefined;
      this._keySecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._autoGenerate = value.autoGenerate;
      this._keySecret = value.keySecret;
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

  // auto_generate - computed: false, optional: true, required: false
  private _autoGenerate?: boolean | cdktf.IResolvable; 
  public get autoGenerate() {
    return this.getBooleanAttribute('auto_generate');
  }
  public set autoGenerate(value: boolean | cdktf.IResolvable) {
    this._autoGenerate = value;
  }
  public resetAutoGenerate() {
    this._autoGenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGenerateInput() {
    return this._autoGenerate;
  }

  // key_secret - computed: false, optional: false, required: true
  private _keySecret?: string; 
  public get keySecret() {
    return this.getStringAttribute('key_secret');
  }
  public set keySecret(value: string) {
    this._keySecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls {
  /**
  * This only affects client connections and is used to control which certificate the servers should use to authenticate themselves against the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#server_secret_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#server_secret_class}
  */
  readonly serverSecretClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTlsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_secret_class: cdktf.stringToTerraform(struct!.serverSecretClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTlsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_secret_class: {
      value: cdktf.stringToHclTerraform(struct!.serverSecretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSecretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSecretClass = this._serverSecretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverSecretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverSecretClass = value.serverSecretClass;
    }
  }

  // server_secret_class - computed: false, optional: true, required: false
  private _serverSecretClass?: string; 
  public get serverSecretClass() {
    return this.getStringAttribute('server_secret_class');
  }
  public set serverSecretClass(value: string) {
    this._serverSecretClass = value;
  }
  public resetServerSecretClass() {
    this._serverSecretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSecretClassInput() {
    return this._serverSecretClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig {
  /**
  * Authentication options for NiFi (required). Read more about authentication in the [security documentation](https://docs.stackable.tech/home/nightly/nifi/usage_guide/security).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#authentication DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#authentication}
  */
  readonly authentication: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable;
  /**
  * This section creates a 'create-reporting-task' Kubernetes Job, which enables the export of Prometheus metrics within NiFi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#create_reporting_task_job DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#create_reporting_task_job}
  */
  readonly createReportingTaskJob?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob;
  /**
  * Extra volumes similar to '.spec.volumes' on a Pod to mount into every container, this can be useful to for example make client certificates, keytabs or similar things available to processors. These volumes will be mounted into all pods at '/stackable/userdata/{volumename}'. See also the [external files usage guide](https://docs.stackable.tech/home/nightly/nifi/usage_guide/extra-volumes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#extra_volumes DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#extra_volumes}
  */
  readonly extraVolumes?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Configuration of allowed proxies e.g. load balancers or Kubernetes Ingress. Using a proxy that is not allowed by NiFi results in a failed host header check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#host_header_check DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#host_header_check}
  */
  readonly hostHeaderCheck?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck;
  /**
  * This field controls which type of Service the Operator creates for this NifiCluster: * cluster-internal: Use a ClusterIP service * external-unstable: Use a NodePort service This is a temporary solution with the goal to keep yaml manifests forward compatible. In the future, this setting will control which [ListenerClass](https://docs.stackable.tech/home/nightly/listener-operator/listenerclass.html) will be used to expose the service, and ListenerClass names will stay the same, allowing for a non-breaking change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#listener_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#listener_class}
  */
  readonly listenerClass?: string;
  /**
  * These settings configure the encryption of sensitive properties in NiFi processors. NiFi supports encrypting sensitive properties in processors as they are written to disk. You can configure the encryption algorithm and the key to use. You can also let the operator generate an encryption key for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#sensitive_properties DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#sensitive_properties}
  */
  readonly sensitiveProperties: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties;
  /**
  * TLS configuration options for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#tls DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls;
  /**
  * Name of the Vector aggregator [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery). It must contain the key 'ADDRESS' with the address of the Vector aggregator. Follow the [logging tutorial](https://docs.stackable.tech/home/nightly/tutorials/logging-vector-aggregator) to learn how to configure log aggregation with Vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
  /**
  * NiFi requires a ZooKeeper cluster connection to run. Provide the name of the ZooKeeper [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) here. When using the [Stackable operator for Apache ZooKeeper](https://docs.stackable.tech/home/nightly/zookeeper/) to deploy a ZooKeeper cluster, this will simply be the name of your ZookeeperCluster resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#zookeeper_config_map_name DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#zookeeper_config_map_name}
  */
  readonly zookeeperConfigMapName: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToTerraform, false)(struct!.authentication),
    create_reporting_task_job: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJobToTerraform(struct!.createReportingTaskJob),
    extra_volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.extraVolumes),
    host_header_check: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheckToTerraform(struct!.hostHeaderCheck),
    listener_class: cdktf.stringToTerraform(struct!.listenerClass),
    sensitive_properties: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitivePropertiesToTerraform(struct!.sensitiveProperties),
    tls: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTlsToTerraform(struct!.tls),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
    zookeeper_config_map_name: cdktf.stringToTerraform(struct!.zookeeperConfigMapName),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationToHclTerraform, false)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList",
    },
    create_reporting_task_job: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJobToHclTerraform(struct!.createReportingTaskJob),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob",
    },
    extra_volumes: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.extraVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    host_header_check: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheckToHclTerraform(struct!.hostHeaderCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck",
    },
    listener_class: {
      value: cdktf.stringToHclTerraform(struct!.listenerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_properties: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitivePropertiesToHclTerraform(struct!.sensitiveProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties",
    },
    tls: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zookeeper_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._createReportingTaskJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createReportingTaskJob = this._createReportingTaskJob?.internalValue;
    }
    if (this._extraVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumes = this._extraVolumes;
    }
    if (this._hostHeaderCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderCheck = this._hostHeaderCheck?.internalValue;
    }
    if (this._listenerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerClass = this._listenerClass;
    }
    if (this._sensitiveProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveProperties = this._sensitiveProperties?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    if (this._zookeeperConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperConfigMapName = this._zookeeperConfigMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._createReportingTaskJob.internalValue = undefined;
      this._extraVolumes = undefined;
      this._hostHeaderCheck.internalValue = undefined;
      this._listenerClass = undefined;
      this._sensitiveProperties.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._vectorAggregatorConfigMapName = undefined;
      this._zookeeperConfigMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._createReportingTaskJob.internalValue = value.createReportingTaskJob;
      this._extraVolumes = value.extraVolumes;
      this._hostHeaderCheck.internalValue = value.hostHeaderCheck;
      this._listenerClass = value.listenerClass;
      this._sensitiveProperties.internalValue = value.sensitiveProperties;
      this._tls.internalValue = value.tls;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
      this._zookeeperConfigMapName = value.zookeeperConfigMapName;
    }
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigAuthentication[] | cdktf.IResolvable) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // create_reporting_task_job - computed: false, optional: true, required: false
  private _createReportingTaskJob = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJobOutputReference(this, "create_reporting_task_job");
  public get createReportingTaskJob() {
    return this._createReportingTaskJob;
  }
  public putCreateReportingTaskJob(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigCreateReportingTaskJob) {
    this._createReportingTaskJob.internalValue = value;
  }
  public resetCreateReportingTaskJob() {
    this._createReportingTaskJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createReportingTaskJobInput() {
    return this._createReportingTaskJob.internalValue;
  }

  // extra_volumes - computed: false, optional: true, required: false
  private _extraVolumes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get extraVolumes() {
    return this.interpolationForAttribute('extra_volumes');
  }
  public set extraVolumes(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._extraVolumes = value;
  }
  public resetExtraVolumes() {
    this._extraVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumesInput() {
    return this._extraVolumes;
  }

  // host_header_check - computed: false, optional: true, required: false
  private _hostHeaderCheck = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheckOutputReference(this, "host_header_check");
  public get hostHeaderCheck() {
    return this._hostHeaderCheck;
  }
  public putHostHeaderCheck(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigHostHeaderCheck) {
    this._hostHeaderCheck.internalValue = value;
  }
  public resetHostHeaderCheck() {
    this._hostHeaderCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderCheckInput() {
    return this._hostHeaderCheck.internalValue;
  }

  // listener_class - computed: false, optional: true, required: false
  private _listenerClass?: string; 
  public get listenerClass() {
    return this.getStringAttribute('listener_class');
  }
  public set listenerClass(value: string) {
    this._listenerClass = value;
  }
  public resetListenerClass() {
    this._listenerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerClassInput() {
    return this._listenerClass;
  }

  // sensitive_properties - computed: false, optional: false, required: true
  private _sensitiveProperties = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitivePropertiesOutputReference(this, "sensitive_properties");
  public get sensitiveProperties() {
    return this._sensitiveProperties;
  }
  public putSensitiveProperties(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigSensitiveProperties) {
    this._sensitiveProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivePropertiesInput() {
    return this._sensitiveProperties.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // vector_aggregator_config_map_name - computed: false, optional: true, required: false
  private _vectorAggregatorConfigMapName?: string; 
  public get vectorAggregatorConfigMapName() {
    return this.getStringAttribute('vector_aggregator_config_map_name');
  }
  public set vectorAggregatorConfigMapName(value: string) {
    this._vectorAggregatorConfigMapName = value;
  }
  public resetVectorAggregatorConfigMapName() {
    this._vectorAggregatorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorAggregatorConfigMapNameInput() {
    return this._vectorAggregatorConfigMapName;
  }

  // zookeeper_config_map_name - computed: false, optional: false, required: true
  private _zookeeperConfigMapName?: string; 
  public get zookeeperConfigMapName() {
    return this.getStringAttribute('zookeeper_config_map_name');
  }
  public set zookeeperConfigMapName(value: string) {
    this._zookeeperConfigMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperConfigMapNameInput() {
    return this._zookeeperConfigMapName;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation {
  /**
  * Flag to stop cluster reconciliation by the operator. This means that all changes in the custom resource spec are ignored until this flag is set to false or removed. The operator will however still watch the deployed resources at the time and update the custom resource status field. If applied at the same time with 'stopped', 'reconciliationPaused' will take precedence over 'stopped' and stop the reconciliation immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#reconciliation_paused DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#reconciliation_paused}
  */
  readonly reconciliationPaused?: boolean | cdktf.IResolvable;
  /**
  * Flag to stop the cluster. This means all deployed resources (e.g. Services, StatefulSets, ConfigMaps) are kept but all deployed Pods (e.g. replicas from a StatefulSet) are scaled to 0 and therefore stopped and removed. If applied at the same time with 'reconciliationPaused', the latter will pause reconciliation and 'stopped' will take no effect until 'reconciliationPaused' is set to false or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#stopped DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reconciliation_paused: cdktf.booleanToTerraform(struct!.reconciliationPaused),
    stopped: cdktf.booleanToTerraform(struct!.stopped),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reconciliation_paused: {
      value: cdktf.booleanToHclTerraform(struct!.reconciliationPaused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stopped: {
      value: cdktf.booleanToHclTerraform(struct!.stopped),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reconciliationPaused !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationPaused = this._reconciliationPaused;
    }
    if (this._stopped !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopped = this._stopped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reconciliationPaused = undefined;
      this._stopped = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reconciliationPaused = value.reconciliationPaused;
      this._stopped = value.stopped;
    }
  }

  // reconciliation_paused - computed: false, optional: true, required: false
  private _reconciliationPaused?: boolean | cdktf.IResolvable; 
  public get reconciliationPaused() {
    return this.getBooleanAttribute('reconciliation_paused');
  }
  public set reconciliationPaused(value: boolean | cdktf.IResolvable) {
    this._reconciliationPaused = value;
  }
  public resetReconciliationPaused() {
    this._reconciliationPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationPausedInput() {
    return this._reconciliationPaused;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#name DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#custom DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#product_version DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pull_policy DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pull_secrets DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#stackable_version DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImageToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImageToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktf.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackable_version: {
      value: cdktf.stringToHclTerraform(struct!.stackableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._productVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._stackableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackableVersion = this._stackableVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._productVersion = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repo = undefined;
      this._stackableVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._productVersion = value.productVersion;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repo = value.repo;
      this._stackableVersion = value.stackableVersion;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // stackable_version - computed: false, optional: true, required: false
  private _stackableVersion?: string; 
  public get stackableVersion() {
    return this.getStringAttribute('stackable_version');
  }
  public set stackableVersion(value: string) {
    this._stackableVersion = value;
  }
  public resetStackableVersion() {
    this._stackableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackableVersionInput() {
    return this._stackableVersion;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#node_affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#node_selector DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinityToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinityToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#level DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#config_map DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#level DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#level DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#console DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#custom DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#file DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#loggers DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#containers DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#enable_vector_agent DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#max DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#min DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpuToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpuToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#limit DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#runtime_limits DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemoryToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemoryToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage {
  /**
  * [The Content Repository](https://nifi.apache.org/docs/nifi-docs/html/nifi-in-depth.html#content-repository) is simply a place in local storage where the content of all FlowFiles exists and it is typically the largest of the Repositories. Default size: 4GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#content_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#content_repo}
  */
  readonly contentRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo;
  /**
  * Default size: 1GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#database_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#database_repo}
  */
  readonly databaseRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo;
  /**
  * [The FlowFile Repository](https://nifi.apache.org/docs/nifi-docs/html/nifi-in-depth.html#flowfile-repository) is where NiFi keeps track of the state and metadata of FlowFiles as they traverse the data flow. The repository ensures durability, reliability, and recoverability of data in case of system failures or interruptions. Default size: 1GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#flowfile_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#flowfile_repo}
  */
  readonly flowfileRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo;
  /**
  * [The Provenance Repository](https://nifi.apache.org/docs/nifi-docs/html/nifi-in-depth.html#provenance-repository) is where the history of each FlowFile is stored. This history is used to provide the Data Lineage (also known as the Chain of Custody) of each piece of data. Default size: 2GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#provenance_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#provenance_repo}
  */
  readonly provenanceRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo;
  /**
  * Default size: 1GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#state_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#state_repo}
  */
  readonly stateRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoToTerraform(struct!.contentRepo),
    database_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoToTerraform(struct!.databaseRepo),
    flowfile_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoToTerraform(struct!.flowfileRepo),
    provenance_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoToTerraform(struct!.provenanceRepo),
    state_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoToTerraform(struct!.stateRepo),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoToHclTerraform(struct!.contentRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo",
    },
    database_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoToHclTerraform(struct!.databaseRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo",
    },
    flowfile_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoToHclTerraform(struct!.flowfileRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo",
    },
    provenance_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoToHclTerraform(struct!.provenanceRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo",
    },
    state_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoToHclTerraform(struct!.stateRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRepo = this._contentRepo?.internalValue;
    }
    if (this._databaseRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRepo = this._databaseRepo?.internalValue;
    }
    if (this._flowfileRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowfileRepo = this._flowfileRepo?.internalValue;
    }
    if (this._provenanceRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provenanceRepo = this._provenanceRepo?.internalValue;
    }
    if (this._stateRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateRepo = this._stateRepo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentRepo.internalValue = undefined;
      this._databaseRepo.internalValue = undefined;
      this._flowfileRepo.internalValue = undefined;
      this._provenanceRepo.internalValue = undefined;
      this._stateRepo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentRepo.internalValue = value.contentRepo;
      this._databaseRepo.internalValue = value.databaseRepo;
      this._flowfileRepo.internalValue = value.flowfileRepo;
      this._provenanceRepo.internalValue = value.provenanceRepo;
      this._stateRepo.internalValue = value.stateRepo;
    }
  }

  // content_repo - computed: false, optional: true, required: false
  private _contentRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepoOutputReference(this, "content_repo");
  public get contentRepo() {
    return this._contentRepo;
  }
  public putContentRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageContentRepo) {
    this._contentRepo.internalValue = value;
  }
  public resetContentRepo() {
    this._contentRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRepoInput() {
    return this._contentRepo.internalValue;
  }

  // database_repo - computed: false, optional: true, required: false
  private _databaseRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepoOutputReference(this, "database_repo");
  public get databaseRepo() {
    return this._databaseRepo;
  }
  public putDatabaseRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageDatabaseRepo) {
    this._databaseRepo.internalValue = value;
  }
  public resetDatabaseRepo() {
    this._databaseRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRepoInput() {
    return this._databaseRepo.internalValue;
  }

  // flowfile_repo - computed: false, optional: true, required: false
  private _flowfileRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepoOutputReference(this, "flowfile_repo");
  public get flowfileRepo() {
    return this._flowfileRepo;
  }
  public putFlowfileRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageFlowfileRepo) {
    this._flowfileRepo.internalValue = value;
  }
  public resetFlowfileRepo() {
    this._flowfileRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowfileRepoInput() {
    return this._flowfileRepo.internalValue;
  }

  // provenance_repo - computed: false, optional: true, required: false
  private _provenanceRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepoOutputReference(this, "provenance_repo");
  public get provenanceRepo() {
    return this._provenanceRepo;
  }
  public putProvenanceRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageProvenanceRepo) {
    this._provenanceRepo.internalValue = value;
  }
  public resetProvenanceRepo() {
    this._provenanceRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provenanceRepoInput() {
    return this._provenanceRepo.internalValue;
  }

  // state_repo - computed: false, optional: true, required: false
  private _stateRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepoOutputReference(this, "state_repo");
  public get stateRepo() {
    return this._stateRepo;
  }
  public putStateRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageStateRepo) {
    this._stateRepo.internalValue = value;
  }
  public resetStateRepo() {
    this._stateRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateRepoInput() {
    return this._stateRepo.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#cpu DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#memory DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu",
    },
    memory: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory",
    },
    storage: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#logging DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage. The default CPU request and limit are 500m and 2000m respectively. The default memory limit is 4GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#resources DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging",
    },
    resources: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget {
  /**
  * Whether a PodDisruptionBudget should be written out for this role. Disabling this enables you to specify your own - custom - one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#enabled DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of Pods that are allowed to be down because of voluntary disruptions. If you don't explicitly set this, the operator will use a sane default based upon knowledge about the individual product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#max_unavailable DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig {
  /**
  * This struct is used to configure: 1. If PodDisruptionBudgets are created by the operator 2. The allowed number of Pods to be unavailable ('maxUnavailable') Learn more in the [allowed Pod disruptions documentation](https://docs.stackable.tech/home/nightly/concepts/operations/pod_disruptions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_disruption_budget DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_disruption_budget: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_disruption_budget: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
    }
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#node_affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#node_selector DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_anti_affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#level DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#config_map DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#level DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#level DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
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
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#console DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#custom DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#file DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#loggers DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#containers DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#enable_vector_agent DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#max DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#min DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#limit DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#runtime_limits DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#key DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#operator DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#values DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsOutputReference {
    return new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_expressions DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#match_labels DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsList",
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

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo {
  /**
  * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors. The serialization format is: ``` <quantity> ::= <signedNumber><suffix> (Note that <suffix> may be empty, from the '' case in <decimalSI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= '+' | '-' <signedNumber> ::= <number> | <sign><number> <suffix> ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimalSI> ::= m | '' | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.) <decimalExponent> ::= 'e' <signedNumber> | 'E' <signedNumber> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in 'canonical form'. This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as '1500m' - 1.5Gi will be serialized as '1536Mi' Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#capacity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#capacity}
  */
  readonly capacity?: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#selectors DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage_class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.stringToTerraform(struct!.capacity),
    selectors: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsToTerraform(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.stringToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage {
  /**
  * [The Content Repository](https://nifi.apache.org/docs/nifi-docs/html/nifi-in-depth.html#content-repository) is simply a place in local storage where the content of all FlowFiles exists and it is typically the largest of the Repositories. Default size: 4GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#content_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#content_repo}
  */
  readonly contentRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo;
  /**
  * Default size: 1GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#database_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#database_repo}
  */
  readonly databaseRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo;
  /**
  * [The FlowFile Repository](https://nifi.apache.org/docs/nifi-docs/html/nifi-in-depth.html#flowfile-repository) is where NiFi keeps track of the state and metadata of FlowFiles as they traverse the data flow. The repository ensures durability, reliability, and recoverability of data in case of system failures or interruptions. Default size: 1GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#flowfile_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#flowfile_repo}
  */
  readonly flowfileRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo;
  /**
  * [The Provenance Repository](https://nifi.apache.org/docs/nifi-docs/html/nifi-in-depth.html#provenance-repository) is where the history of each FlowFile is stored. This history is used to provide the Data Lineage (also known as the Chain of Custody) of each piece of data. Default size: 2GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#provenance_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#provenance_repo}
  */
  readonly provenanceRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo;
  /**
  * Default size: 1GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#state_repo DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#state_repo}
  */
  readonly stateRepo?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoToTerraform(struct!.contentRepo),
    database_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoToTerraform(struct!.databaseRepo),
    flowfile_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoToTerraform(struct!.flowfileRepo),
    provenance_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoToTerraform(struct!.provenanceRepo),
    state_repo: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoToTerraform(struct!.stateRepo),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoToHclTerraform(struct!.contentRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo",
    },
    database_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoToHclTerraform(struct!.databaseRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo",
    },
    flowfile_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoToHclTerraform(struct!.flowfileRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo",
    },
    provenance_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoToHclTerraform(struct!.provenanceRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo",
    },
    state_repo: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoToHclTerraform(struct!.stateRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRepo = this._contentRepo?.internalValue;
    }
    if (this._databaseRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRepo = this._databaseRepo?.internalValue;
    }
    if (this._flowfileRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowfileRepo = this._flowfileRepo?.internalValue;
    }
    if (this._provenanceRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provenanceRepo = this._provenanceRepo?.internalValue;
    }
    if (this._stateRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateRepo = this._stateRepo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentRepo.internalValue = undefined;
      this._databaseRepo.internalValue = undefined;
      this._flowfileRepo.internalValue = undefined;
      this._provenanceRepo.internalValue = undefined;
      this._stateRepo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentRepo.internalValue = value.contentRepo;
      this._databaseRepo.internalValue = value.databaseRepo;
      this._flowfileRepo.internalValue = value.flowfileRepo;
      this._provenanceRepo.internalValue = value.provenanceRepo;
      this._stateRepo.internalValue = value.stateRepo;
    }
  }

  // content_repo - computed: false, optional: true, required: false
  private _contentRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepoOutputReference(this, "content_repo");
  public get contentRepo() {
    return this._contentRepo;
  }
  public putContentRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageContentRepo) {
    this._contentRepo.internalValue = value;
  }
  public resetContentRepo() {
    this._contentRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRepoInput() {
    return this._contentRepo.internalValue;
  }

  // database_repo - computed: false, optional: true, required: false
  private _databaseRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepoOutputReference(this, "database_repo");
  public get databaseRepo() {
    return this._databaseRepo;
  }
  public putDatabaseRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageDatabaseRepo) {
    this._databaseRepo.internalValue = value;
  }
  public resetDatabaseRepo() {
    this._databaseRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRepoInput() {
    return this._databaseRepo.internalValue;
  }

  // flowfile_repo - computed: false, optional: true, required: false
  private _flowfileRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepoOutputReference(this, "flowfile_repo");
  public get flowfileRepo() {
    return this._flowfileRepo;
  }
  public putFlowfileRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageFlowfileRepo) {
    this._flowfileRepo.internalValue = value;
  }
  public resetFlowfileRepo() {
    this._flowfileRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowfileRepoInput() {
    return this._flowfileRepo.internalValue;
  }

  // provenance_repo - computed: false, optional: true, required: false
  private _provenanceRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepoOutputReference(this, "provenance_repo");
  public get provenanceRepo() {
    return this._provenanceRepo;
  }
  public putProvenanceRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageProvenanceRepo) {
    this._provenanceRepo.internalValue = value;
  }
  public resetProvenanceRepo() {
    this._provenanceRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provenanceRepoInput() {
    return this._provenanceRepo.internalValue;
  }

  // state_repo - computed: false, optional: true, required: false
  private _stateRepo = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepoOutputReference(this, "state_repo");
  public get stateRepo() {
    return this._stateRepo;
  }
  public putStateRepo(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageStateRepo) {
    this._stateRepo.internalValue = value;
  }
  public resetStateRepo() {
    this._stateRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateRepoInput() {
    return this._stateRepo.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#cpu DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#memory DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#storage DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToTerraform(struct!.memory),
    storage: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu",
    },
    memory: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory",
    },
    storage: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#affinity DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity;
  /**
  * Time period Pods have to gracefully shut down, e.g. '30m', '1h' or '2d'. Consult the operator documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#graceful_shutdown_timeout DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#logging DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage. The default CPU request and limit are 500m and 2000m respectively. The default memory limit is 4GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#resources DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToTerraform(struct!.affinity),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    logging: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging",
    },
    resources: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#cli_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#config DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#config_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#env_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#replicas DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#cli_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#config DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#config_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#env_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#pod_overrides DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * This is a product-agnostic RoleConfig, which is sufficient for most of the products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#role_config DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#role_config}
  */
  readonly roleConfig?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#role_groups DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#role_groups}
  */
  readonly roleGroups: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    role_config: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigToTerraform(struct!.roleConfig),
    role_groups: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsToTerraform(struct!.roleGroups),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role_config: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigToHclTerraform(struct!.roleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig",
    },
    role_groups: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsToHclTerraform(struct!.roleGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._roleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleConfig = this._roleConfig?.internalValue;
    }
    if (this._roleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleGroups = this._roleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._roleConfig.internalValue = undefined;
      this._roleGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._roleConfig.internalValue = value.roleConfig;
      this._roleGroups.internalValue = value.roleGroups;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }

  // role_config - computed: false, optional: true, required: false
  private _roleConfig = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfigOutputReference(this, "role_config");
  public get roleConfig() {
    return this._roleConfig;
  }
  public putRoleConfig(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleConfig) {
    this._roleConfig.internalValue = value;
  }
  public resetRoleConfig() {
    this._roleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigInput() {
    return this._roleConfig.internalValue;
  }

  // role_groups - computed: false, optional: false, required: true
  private _roleGroups = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroupsOutputReference(this, "role_groups");
  public get roleGroups() {
    return this._roleGroups;
  }
  public putRoleGroups(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesRoleGroups) {
    this._roleGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleGroupsInput() {
    return this._roleGroups.internalValue;
  }
}
export interface DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec {
  /**
  * Settings that affect all roles and role groups. The settings in the 'clusterConfig' are cluster wide settings that do not need to be configurable at role or role group level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#cluster_config DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig;
  /**
  * [Cluster operations](https://docs.stackable.tech/home/nightly/concepts/operations/cluster_operations) properties, allow stopping the product instance as well as pausing reconciliation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#cluster_operation DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#cluster_operation}
  */
  readonly clusterOperation?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation;
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#image DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#image}
  */
  readonly image: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage;
  /**
  * This struct represents a role - e.g. HDFS datanodes or Trino workers. It has a key-value-map containing all the roleGroups that are part of this role. Additionally, there is a 'config', which is configurable at the role *and* roleGroup level. Everything at roleGroup level is merged on top of what is configured on role level. There is also a second form of config, which can only be configured at role level, the 'roleConfig'. You can learn more about this in the [Roles and role group concept documentation](https://docs.stackable.tech/home/nightly/concepts/roles-and-role-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#nodes DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest#nodes}
  */
  readonly nodes?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes;
}

export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cluster_operation: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperationToTerraform(struct!.clusterOperation),
    image: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImageToTerraform(struct!.image),
    nodes: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesToTerraform(struct!.nodes),
  }
}


export function dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig",
    },
    cluster_operation: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperationToHclTerraform(struct!.clusterOperation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation",
    },
    image: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage",
    },
    nodes: {
      value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesToHclTerraform(struct!.nodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._clusterOperation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperation = this._clusterOperation?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._clusterOperation.internalValue = undefined;
      this._image.internalValue = undefined;
      this._nodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._clusterOperation.internalValue = value.clusterOperation;
      this._image.internalValue = value.image;
      this._nodes.internalValue = value.nodes;
    }
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cluster_operation - computed: false, optional: true, required: false
  private _clusterOperation = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperationOutputReference(this, "cluster_operation");
  public get clusterOperation() {
    return this._clusterOperation;
  }
  public putClusterOperation(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecClusterOperation) {
    this._clusterOperation.internalValue = value;
  }
  public resetClusterOperation() {
    this._clusterOperation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationInput() {
    return this._clusterOperation.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecNodes) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest k8s_nifi_stackable_tech_nifi_cluster_v1alpha1_manifest}
*/
export class DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_nifi_stackable_tech_nifi_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNifiStackableTechNifiClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_nifi_stackable_tech_nifi_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/nifi_stackable_tech_nifi_cluster_v1alpha1_manifest k8s_nifi_stackable_tech_nifi_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_nifi_stackable_tech_nifi_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNifiStackableTechNifiClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
