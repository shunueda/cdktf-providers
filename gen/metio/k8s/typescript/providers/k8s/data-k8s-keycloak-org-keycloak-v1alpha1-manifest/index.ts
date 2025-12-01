// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#metadata DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata;
  /**
  * KeycloakSpec defines the desired state of Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#spec DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec;
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#annotations DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#labels DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#namespace DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal {
  /**
  * Context root for Keycloak. If not set, the default '/auth/' is used. Must end with '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#context_root DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#context_root}
  */
  readonly contextRoot?: string;
  /**
  * If set to true, this Keycloak will be treated as an external instance. The unmanaged field also needs to be set to true if this field is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The URL to use for the keycloak admin API. Needs to be set if external is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#url DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_root: cdktf.stringToTerraform(struct!.contextRoot),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_root: {
      value: cdktf.stringToHclTerraform(struct!.contextRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextRoot = this._contextRoot;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextRoot = undefined;
      this._enabled = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextRoot = value.contextRoot;
      this._enabled = value.enabled;
      this._url = value.url;
    }
  }

  // context_root - computed: false, optional: true, required: false
  private _contextRoot?: string; 
  public get contextRoot() {
    return this.getStringAttribute('context_root');
  }
  public set contextRoot(value: string) {
    this._contextRoot = value;
  }
  public resetContextRoot() {
    this._contextRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextRootInput() {
    return this._contextRoot;
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
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess {
  /**
  * If set to true, the Operator will create an Ingress or a Route pointing to Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set, the Operator will use value of host for Ingress host instead of default value keycloak.local. Using this setting in OpenShift environment will result an error. Only users with special permissions are allowed to modify the hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#host DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * TLS Termination type for the external access. Setting this field to 'reencrypt' will terminate TLS on the Ingress/Route level. Setting this field to 'passthrough' will send encrypted traffic to the Pod. If unspecified, defaults to 'reencrypt'. Note, that this setting has no effect on Ingress as Ingress TLS settings are not reconciled by this operator. In other words, Ingress TLS configuration is the same in both cases and it is up to the user to configure TLS section of the Ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#tls_termination DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#tls_termination}
  */
  readonly tlsTermination?: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccessToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    tls_termination: cdktf.stringToTerraform(struct!.tlsTermination),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccessToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess | cdktf.IResolvable): any {
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_termination: {
      value: cdktf.stringToHclTerraform(struct!.tlsTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tlsTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTermination = this._tlsTermination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._tlsTermination = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._host = value.host;
      this._tlsTermination = value.tlsTermination;
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

  // tls_termination - computed: false, optional: true, required: false
  private _tlsTermination?: string; 
  public get tlsTermination() {
    return this.getStringAttribute('tls_termination');
  }
  public set tlsTermination(value: string) {
    this._tlsTermination = value;
  }
  public resetTlsTermination() {
    this._tlsTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTerminationInput() {
    return this._tlsTermination;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase {
  /**
  * If set to true, the Operator will use an external database pointing to Keycloak. The embedded database (externalDatabase.enabled = false) is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabaseToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabaseToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_fields DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#preference DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#weight DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_fields DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#node_selector_terms DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#label_selector DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#namespaces DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#topology_key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#pod_affinity_term DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#weight DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#label_selector DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#namespaces DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#topology_key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#label_selector DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#namespaces DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#topology_key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#pod_affinity_term DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#weight DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#operator DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#values DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_expressions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#match_labels DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#label_selector DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#namespaces DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#topology_key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
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
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#node_affinity DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#pod_affinity DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#pod_anti_affinity DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity | cdktf.IResolvable | undefined) {
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
  private _nodeAffinity = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityNodeAffinity) {
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
  private _podAffinity = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAffinity) {
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
  private _podAntiAffinity = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityPodAntiAffinity) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#optional DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#api_version DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#field_path DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRefToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRefToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#container_name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#divisor DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#resource DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#optional DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#config_map_key_ref DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#field_ref DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#resource_field_ref DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#secret_key_ref DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#value DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#value_from DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvValueFrom) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems {
  /**
  * The key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#key DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#mode DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#path DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems | cdktf.IResolvable): any {
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


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems | cdktf.IResolvable): any {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems | cdktf.IResolvable | undefined) {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems {
  /**
  * Allow multiple configmaps to mount to the same directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#config_maps DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * Mount details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#items DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems[] | cdktf.IResolvable;
  /**
  * An absolute path where to mount it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#mount_path DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Secret mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#secrets DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#secrets}
  */
  readonly secrets?: string[];
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    items: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsToTerraform, false)(struct!.items),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsList",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMaps = undefined;
      this._items.internalValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMaps = value.configMaps;
      this._items.internalValue = value.items;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._secrets = value.secrets;
    }
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsOutputReference {
    return new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes {
  /**
  * Permissions mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#default_mode DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#items DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems[] | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
  private _items = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental {
  /**
  * Affinity settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#affinity DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity;
  /**
  * Arguments to the entrypoint. Translates into Container CMD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#args DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Container command. Translates into Container ENTRYPOINT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#command DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#env DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv[] | cdktf.IResolvable;
  /**
  * ServiceAccountName settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#service_account_name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Additional volume mounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#volumes DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityToTerraform(struct!.affinity),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvToTerraform, false)(struct!.env),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    volumes: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesToTerraform(struct!.volumes),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._serviceAccountName = undefined;
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
      this._args = value.args;
      this._command = value.command;
      this._env.internalValue = value.env;
      this._serviceAccountName = value.serviceAccountName;
      this._volumes.internalValue = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalVolumes) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#limits DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#requests DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResourcesToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResourcesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec {
  /**
  * Experimental section NOTE: This section might change or get removed without any notice. It may also cause the deployment to behave in an unpredictable fashion. Please use with care.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#experimental DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#experimental}
  */
  readonly experimental?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental;
  /**
  * ImagePullPolicy for the Containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#image_pull_policy DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * List of annotations to set in the keycloak pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#podannotations DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#podannotations}
  */
  readonly podannotations?: { [key: string]: string };
  /**
  * List of labels to set in the keycloak pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#podlabels DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#podlabels}
  */
  readonly podlabels?: { [key: string]: string };
  /**
  * Resources (Requests and Limits) for the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    experimental: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalToTerraform(struct!.experimental),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    podannotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podannotations),
    podlabels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podlabels),
    resources: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    experimental: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalToHclTerraform(struct!.experimental),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    podannotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podannotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    podlabels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podlabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimental = this._experimental?.internalValue;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._podannotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.podannotations = this._podannotations;
    }
    if (this._podlabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podlabels = this._podlabels;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimental.internalValue = undefined;
      this._imagePullPolicy = undefined;
      this._podannotations = undefined;
      this._podlabels = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimental.internalValue = value.experimental;
      this._imagePullPolicy = value.imagePullPolicy;
      this._podannotations = value.podannotations;
      this._podlabels = value.podlabels;
      this._resources.internalValue = value.resources;
    }
  }

  // experimental - computed: false, optional: true, required: false
  private _experimental = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimentalOutputReference(this, "experimental");
  public get experimental() {
    return this._experimental;
  }
  public putExperimental(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecExperimental) {
    this._experimental.internalValue = value;
  }
  public resetExperimental() {
    this._experimental.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalInput() {
    return this._experimental.internalValue;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // podannotations - computed: false, optional: true, required: false
  private _podannotations?: { [key: string]: string }; 
  public get podannotations() {
    return this.getStringMapAttribute('podannotations');
  }
  public set podannotations(value: { [key: string]: string }) {
    this._podannotations = value;
  }
  public resetPodannotations() {
    this._podannotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podannotationsInput() {
    return this._podannotations;
  }

  // podlabels - computed: false, optional: true, required: false
  private _podlabels?: { [key: string]: string }; 
  public get podlabels() {
    return this.getStringMapAttribute('podlabels');
  }
  public set podlabels(value: { [key: string]: string }) {
    this._podlabels = value;
  }
  public resetPodlabels() {
    this._podlabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podlabelsInput() {
    return this._podlabels;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecResources) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups {
  /**
  * If set to true, the operator will do database backup before doing migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackupsToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackupsToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration {
  /**
  * Set it to config backup policy for migration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#backups DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#backups}
  */
  readonly backups?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups;
  /**
  * Specify migration strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#strategy DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backups: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackupsToTerraform(struct!.backups),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backups: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackupsToHclTerraform(struct!.backups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backups = this._backups?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backups.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backups.internalValue = value.backups;
      this._strategy = value.strategy;
    }
  }

  // backups - computed: false, optional: true, required: false
  private _backups = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationBackups) {
    this._backups.internalValue = value;
  }
  public resetBackups() {
    this._backups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones {
  /**
  * If set to true, the operator will create a podAntiAffinity settings for the Keycloak deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZonesToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZonesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget {
  /**
  * If set to true, the operator will create a PodDistruptionBudget for the Keycloak deployment and set its 'maxUnavailable' value to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#enabled DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#limits DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#requests DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResourcesToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResourcesToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec {
  /**
  * ImagePullPolicy for the Containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#image_pull_policy DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Resources (Requests and Limits) for the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#resources DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    resources: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imagePullPolicy = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imagePullPolicy = value.imagePullPolicy;
      this._resources.internalValue = value.resources;
    }
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecResources) {
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
export interface DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec {
  /**
  * Disables the integration with Application Monitoring Operator. When set to true, the operator doesn't create default PrometheusRule, ServiceMonitor and GrafanaDashboard objects and users will have to create them manually, if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#disable_default_service_monitor DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#disable_default_service_monitor}
  */
  readonly disableDefaultServiceMonitor?: boolean | cdktf.IResolvable;
  /**
  * Specify whether disabling the syncing of instances from the Keycloak CR to the statefulset replicas should be enabled or disabled. This option could be used when enabling HPA(horizontal pod autoscaler). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#disable_replicas_syncing DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#disable_replicas_syncing}
  */
  readonly disableReplicasSyncing?: boolean | cdktf.IResolvable;
  /**
  * A list of extensions, where each one is a URL to a JAR files that will be deployed in Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#extensions DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#extensions}
  */
  readonly extensions?: string[];
  /**
  * Contains configuration for external Keycloak instances. Unmanaged needs to be set to true to use this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#external DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#external}
  */
  readonly external?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal;
  /**
  * Controls external Ingress/Route settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#external_access DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#external_access}
  */
  readonly externalAccess?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess;
  /**
  * Controls external database settings. Using an external database requires providing a secret containing credentials as well as connection details. Here's an example of such secret: apiVersion: v1 kind: Secret metadata: name: keycloak-db-secret namespace: keycloak stringData: POSTGRES_DATABASE: <Database Name> POSTGRES_EXTERNAL_ADDRESS: <External Database IP or URL (resolvable by K8s)> POSTGRES_EXTERNAL_PORT: <External Database Port> # Strongly recommended to use <'Keycloak CR Name'-postgresql> POSTGRES_HOST: <Database Service Name> POSTGRES_PASSWORD: <Database Password> # Required for AWS Backup functionality POSTGRES_SUPERUSER: true POSTGRES_USERNAME: <Database Username> type: Opaque Both POSTGRES_EXTERNAL_ADDRESS and POSTGRES_EXTERNAL_PORT are specifically required for creating connection to the external database. The secret name is created using the following convention: <Custom Resource Name>-db-secret For more information, please refer to the Operator documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#external_database DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#external_database}
  */
  readonly externalDatabase?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase;
  /**
  * Number of Keycloak instances in HA mode. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#instances DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#instances}
  */
  readonly instances?: number;
  /**
  * Resources (Requests and Limits) and ImagePullPolicy for KeycloakDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#keycloak_deployment_spec DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#keycloak_deployment_spec}
  */
  readonly keycloakDeploymentSpec?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec;
  /**
  * Specify Migration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#migration DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#migration}
  */
  readonly migration?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration;
  /**
  * Specify PodAntiAffinity settings for Keycloak deployment in Multi AZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#multi_availablity_zones DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#multi_availablity_zones}
  */
  readonly multiAvailablityZones?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones;
  /**
  * Specify PodDisruptionBudget configuration. This field is deprecated and will be ignored on K8s >=1.25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#pod_disruption_budget DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget;
  /**
  * Resources (Requests and Limits) and ImagePullPolicy for PostgresDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#postgres_deployment_spec DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#postgres_deployment_spec}
  */
  readonly postgresDeploymentSpec?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec;
  /**
  * Profile used for controlling Operator behavior. Default is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#profile DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#profile}
  */
  readonly profile?: string;
  /**
  * Name of the StorageClass for Postgresql Persistent Volume Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#storage_class_name DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * When set to true, this Keycloak will be marked as unmanaged and will not be managed by this operator. It can then be used for targeting purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#unmanaged DataK8SKeycloakOrgKeycloakV1Alpha1Manifest#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
}

export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_default_service_monitor: cdktf.booleanToTerraform(struct!.disableDefaultServiceMonitor),
    disable_replicas_syncing: cdktf.booleanToTerraform(struct!.disableReplicasSyncing),
    extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extensions),
    external: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalToTerraform(struct!.external),
    external_access: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccessToTerraform(struct!.externalAccess),
    external_database: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabaseToTerraform(struct!.externalDatabase),
    instances: cdktf.numberToTerraform(struct!.instances),
    keycloak_deployment_spec: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecToTerraform(struct!.keycloakDeploymentSpec),
    migration: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationToTerraform(struct!.migration),
    multi_availablity_zones: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZonesToTerraform(struct!.multiAvailablityZones),
    pod_disruption_budget: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    postgres_deployment_spec: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecToTerraform(struct!.postgresDeploymentSpec),
    profile: cdktf.stringToTerraform(struct!.profile),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    unmanaged: cdktf.booleanToTerraform(struct!.unmanaged),
  }
}


export function dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_default_service_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableDefaultServiceMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_replicas_syncing: {
      value: cdktf.booleanToHclTerraform(struct!.disableReplicasSyncing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal",
    },
    external_access: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccessToHclTerraform(struct!.externalAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess",
    },
    external_database: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabaseToHclTerraform(struct!.externalDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase",
    },
    instances: {
      value: cdktf.numberToHclTerraform(struct!.instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keycloak_deployment_spec: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecToHclTerraform(struct!.keycloakDeploymentSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec",
    },
    migration: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration",
    },
    multi_availablity_zones: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZonesToHclTerraform(struct!.multiAvailablityZones),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones",
    },
    pod_disruption_budget: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget",
    },
    postgres_deployment_spec: {
      value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecToHclTerraform(struct!.postgresDeploymentSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
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
    unmanaged: {
      value: cdktf.booleanToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableDefaultServiceMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDefaultServiceMonitor = this._disableDefaultServiceMonitor;
    }
    if (this._disableReplicasSyncing !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReplicasSyncing = this._disableReplicasSyncing;
    }
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._externalAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccess = this._externalAccess?.internalValue;
    }
    if (this._externalDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDatabase = this._externalDatabase?.internalValue;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._keycloakDeploymentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keycloakDeploymentSpec = this._keycloakDeploymentSpec?.internalValue;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    if (this._multiAvailablityZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAvailablityZones = this._multiAvailablityZones?.internalValue;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._postgresDeploymentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresDeploymentSpec = this._postgresDeploymentSpec?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableDefaultServiceMonitor = undefined;
      this._disableReplicasSyncing = undefined;
      this._extensions = undefined;
      this._external.internalValue = undefined;
      this._externalAccess.internalValue = undefined;
      this._externalDatabase.internalValue = undefined;
      this._instances = undefined;
      this._keycloakDeploymentSpec.internalValue = undefined;
      this._migration.internalValue = undefined;
      this._multiAvailablityZones.internalValue = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._postgresDeploymentSpec.internalValue = undefined;
      this._profile = undefined;
      this._storageClassName = undefined;
      this._unmanaged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableDefaultServiceMonitor = value.disableDefaultServiceMonitor;
      this._disableReplicasSyncing = value.disableReplicasSyncing;
      this._extensions = value.extensions;
      this._external.internalValue = value.external;
      this._externalAccess.internalValue = value.externalAccess;
      this._externalDatabase.internalValue = value.externalDatabase;
      this._instances = value.instances;
      this._keycloakDeploymentSpec.internalValue = value.keycloakDeploymentSpec;
      this._migration.internalValue = value.migration;
      this._multiAvailablityZones.internalValue = value.multiAvailablityZones;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._postgresDeploymentSpec.internalValue = value.postgresDeploymentSpec;
      this._profile = value.profile;
      this._storageClassName = value.storageClassName;
      this._unmanaged = value.unmanaged;
    }
  }

  // disable_default_service_monitor - computed: false, optional: true, required: false
  private _disableDefaultServiceMonitor?: boolean | cdktf.IResolvable; 
  public get disableDefaultServiceMonitor() {
    return this.getBooleanAttribute('disable_default_service_monitor');
  }
  public set disableDefaultServiceMonitor(value: boolean | cdktf.IResolvable) {
    this._disableDefaultServiceMonitor = value;
  }
  public resetDisableDefaultServiceMonitor() {
    this._disableDefaultServiceMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultServiceMonitorInput() {
    return this._disableDefaultServiceMonitor;
  }

  // disable_replicas_syncing - computed: false, optional: true, required: false
  private _disableReplicasSyncing?: boolean | cdktf.IResolvable; 
  public get disableReplicasSyncing() {
    return this.getBooleanAttribute('disable_replicas_syncing');
  }
  public set disableReplicasSyncing(value: boolean | cdktf.IResolvable) {
    this._disableReplicasSyncing = value;
  }
  public resetDisableReplicasSyncing() {
    this._disableReplicasSyncing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReplicasSyncingInput() {
    return this._disableReplicasSyncing;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: string[]; 
  public get extensions() {
    return this.getListAttribute('extensions');
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // external_access - computed: false, optional: true, required: false
  private _externalAccess = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccessOutputReference(this, "external_access");
  public get externalAccess() {
    return this._externalAccess;
  }
  public putExternalAccess(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalAccess) {
    this._externalAccess.internalValue = value;
  }
  public resetExternalAccess() {
    this._externalAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessInput() {
    return this._externalAccess.internalValue;
  }

  // external_database - computed: false, optional: true, required: false
  private _externalDatabase = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabaseOutputReference(this, "external_database");
  public get externalDatabase() {
    return this._externalDatabase;
  }
  public putExternalDatabase(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecExternalDatabase) {
    this._externalDatabase.internalValue = value;
  }
  public resetExternalDatabase() {
    this._externalDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatabaseInput() {
    return this._externalDatabase.internalValue;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // keycloak_deployment_spec - computed: false, optional: true, required: false
  private _keycloakDeploymentSpec = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpecOutputReference(this, "keycloak_deployment_spec");
  public get keycloakDeploymentSpec() {
    return this._keycloakDeploymentSpec;
  }
  public putKeycloakDeploymentSpec(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecKeycloakDeploymentSpec) {
    this._keycloakDeploymentSpec.internalValue = value;
  }
  public resetKeycloakDeploymentSpec() {
    this._keycloakDeploymentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakDeploymentSpecInput() {
    return this._keycloakDeploymentSpec.internalValue;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // multi_availablity_zones - computed: false, optional: true, required: false
  private _multiAvailablityZones = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZonesOutputReference(this, "multi_availablity_zones");
  public get multiAvailablityZones() {
    return this._multiAvailablityZones;
  }
  public putMultiAvailablityZones(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecMultiAvailablityZones) {
    this._multiAvailablityZones.internalValue = value;
  }
  public resetMultiAvailablityZones() {
    this._multiAvailablityZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAvailablityZonesInput() {
    return this._multiAvailablityZones.internalValue;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // postgres_deployment_spec - computed: false, optional: true, required: false
  private _postgresDeploymentSpec = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpecOutputReference(this, "postgres_deployment_spec");
  public get postgresDeploymentSpec() {
    return this._postgresDeploymentSpec;
  }
  public putPostgresDeploymentSpec(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecPostgresDeploymentSpec) {
    this._postgresDeploymentSpec.internalValue = value;
  }
  public resetPostgresDeploymentSpec() {
    this._postgresDeploymentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDeploymentSpecInput() {
    return this._postgresDeploymentSpec.internalValue;
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

  // unmanaged - computed: false, optional: true, required: false
  private _unmanaged?: boolean | cdktf.IResolvable; 
  public get unmanaged() {
    return this.getBooleanAttribute('unmanaged');
  }
  public set unmanaged(value: boolean | cdktf.IResolvable) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest k8s_keycloak_org_keycloak_v1alpha1_manifest}
*/
export class DataK8SKeycloakOrgKeycloakV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keycloak_org_keycloak_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKeycloakOrgKeycloakV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKeycloakOrgKeycloakV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKeycloakOrgKeycloakV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKeycloakOrgKeycloakV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keycloak_org_keycloak_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/keycloak_org_keycloak_v1alpha1_manifest k8s_keycloak_org_keycloak_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKeycloakOrgKeycloakV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keycloak_org_keycloak_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeycloakOrgKeycloakV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
