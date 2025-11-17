// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoTlsOptionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#metadata DataK8STraefikIoTlsOptionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata;
  /**
  * TLSOptionSpec defines the desired state of a TLSOption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#spec DataK8STraefikIoTlsOptionV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#annotations DataK8STraefikIoTlsOptionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#labels DataK8STraefikIoTlsOptionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#name DataK8STraefikIoTlsOptionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#namespace DataK8STraefikIoTlsOptionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoTlsOptionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoTlsOptionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth {
  /**
  * ClientAuthType defines the client authentication type to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#client_auth_type DataK8STraefikIoTlsOptionV1Alpha1Manifest#client_auth_type}
  */
  readonly clientAuthType?: string;
  /**
  * SecretNames defines the names of the referenced Kubernetes Secret storing certificate details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#secret_names DataK8STraefikIoTlsOptionV1Alpha1Manifest#secret_names}
  */
  readonly secretNames?: string[];
}

export function dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuthToTerraform(struct?: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth_type: cdktf.stringToTerraform(struct!.clientAuthType),
    secret_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretNames),
  }
}


export function dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuthToHclTerraform(struct?: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthType = this._clientAuthType;
    }
    if (this._secretNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNames = this._secretNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthType = undefined;
      this._secretNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthType = value.clientAuthType;
      this._secretNames = value.secretNames;
    }
  }

  // client_auth_type - computed: false, optional: true, required: false
  private _clientAuthType?: string; 
  public get clientAuthType() {
    return this.getStringAttribute('client_auth_type');
  }
  public set clientAuthType(value: string) {
    this._clientAuthType = value;
  }
  public resetClientAuthType() {
    this._clientAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthTypeInput() {
    return this._clientAuthType;
  }

  // secret_names - computed: false, optional: true, required: false
  private _secretNames?: string[]; 
  public get secretNames() {
    return this.getListAttribute('secret_names');
  }
  public set secretNames(value: string[]) {
    this._secretNames = value;
  }
  public resetSecretNames() {
    this._secretNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamesInput() {
    return this._secretNames;
  }
}
export interface DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec {
  /**
  * ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference. More info: https://doc.traefik.io/traefik/v3.2/https/tls/#alpn-protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#alpn_protocols DataK8STraefikIoTlsOptionV1Alpha1Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string[];
  /**
  * CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2. More info: https://doc.traefik.io/traefik/v3.2/https/tls/#cipher-suites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#cipher_suites DataK8STraefikIoTlsOptionV1Alpha1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * ClientAuth defines the server's policy for TLS Client Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#client_auth DataK8STraefikIoTlsOptionV1Alpha1Manifest#client_auth}
  */
  readonly clientAuth?: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth;
  /**
  * CurvePreferences defines the preferred elliptic curves in a specific order. More info: https://doc.traefik.io/traefik/v3.2/https/tls/#curve-preferences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#curve_preferences DataK8STraefikIoTlsOptionV1Alpha1Manifest#curve_preferences}
  */
  readonly curvePreferences?: string[];
  /**
  * MaxVersion defines the maximum TLS version that Traefik will accept. Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. Default: None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#max_version DataK8STraefikIoTlsOptionV1Alpha1Manifest#max_version}
  */
  readonly maxVersion?: string;
  /**
  * MinVersion defines the minimum TLS version that Traefik will accept. Possible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. Default: VersionTLS10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#min_version DataK8STraefikIoTlsOptionV1Alpha1Manifest#min_version}
  */
  readonly minVersion?: string;
  /**
  * PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's. It is enabled automatically when minVersion or maxVersion is set. Deprecated: https://github.com/golang/go/issues/45430
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#prefer_server_cipher_suites DataK8STraefikIoTlsOptionV1Alpha1Manifest#prefer_server_cipher_suites}
  */
  readonly preferServerCipherSuites?: boolean | cdktf.IResolvable;
  /**
  * SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#sni_strict DataK8STraefikIoTlsOptionV1Alpha1Manifest#sni_strict}
  */
  readonly sniStrict?: boolean | cdktf.IResolvable;
}

export function dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alpn_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alpnProtocols),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    client_auth: dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuthToTerraform(struct!.clientAuth),
    curve_preferences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.curvePreferences),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    prefer_server_cipher_suites: cdktf.booleanToTerraform(struct!.preferServerCipherSuites),
    sni_strict: cdktf.booleanToTerraform(struct!.sniStrict),
  }
}


export function dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alpn_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alpnProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_auth: {
      value: dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuthToHclTerraform(struct!.clientAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth",
    },
    curve_preferences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.curvePreferences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_server_cipher_suites: {
      value: cdktf.booleanToHclTerraform(struct!.preferServerCipherSuites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni_strict: {
      value: cdktf.booleanToHclTerraform(struct!.sniStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alpnProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocols = this._alpnProtocols;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._clientAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth?.internalValue;
    }
    if (this._curvePreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.curvePreferences = this._curvePreferences;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._preferServerCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferServerCipherSuites = this._preferServerCipherSuites;
    }
    if (this._sniStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniStrict = this._sniStrict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocols = undefined;
      this._cipherSuites = undefined;
      this._clientAuth.internalValue = undefined;
      this._curvePreferences = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._preferServerCipherSuites = undefined;
      this._sniStrict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alpnProtocols = value.alpnProtocols;
      this._cipherSuites = value.cipherSuites;
      this._clientAuth.internalValue = value.clientAuth;
      this._curvePreferences = value.curvePreferences;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._preferServerCipherSuites = value.preferServerCipherSuites;
      this._sniStrict = value.sniStrict;
    }
  }

  // alpn_protocols - computed: false, optional: true, required: false
  private _alpnProtocols?: string[]; 
  public get alpnProtocols() {
    return this.getListAttribute('alpn_protocols');
  }
  public set alpnProtocols(value: string[]) {
    this._alpnProtocols = value;
  }
  public resetAlpnProtocols() {
    this._alpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolsInput() {
    return this._alpnProtocols;
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth = new DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuthOutputReference(this, "client_auth");
  public get clientAuth() {
    return this._clientAuth;
  }
  public putClientAuth(value: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecClientAuth) {
    this._clientAuth.internalValue = value;
  }
  public resetClientAuth() {
    this._clientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth.internalValue;
  }

  // curve_preferences - computed: false, optional: true, required: false
  private _curvePreferences?: string[]; 
  public get curvePreferences() {
    return this.getListAttribute('curve_preferences');
  }
  public set curvePreferences(value: string[]) {
    this._curvePreferences = value;
  }
  public resetCurvePreferences() {
    this._curvePreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curvePreferencesInput() {
    return this._curvePreferences;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // prefer_server_cipher_suites - computed: false, optional: true, required: false
  private _preferServerCipherSuites?: boolean | cdktf.IResolvable; 
  public get preferServerCipherSuites() {
    return this.getBooleanAttribute('prefer_server_cipher_suites');
  }
  public set preferServerCipherSuites(value: boolean | cdktf.IResolvable) {
    this._preferServerCipherSuites = value;
  }
  public resetPreferServerCipherSuites() {
    this._preferServerCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferServerCipherSuitesInput() {
    return this._preferServerCipherSuites;
  }

  // sni_strict - computed: false, optional: true, required: false
  private _sniStrict?: boolean | cdktf.IResolvable; 
  public get sniStrict() {
    return this.getBooleanAttribute('sni_strict');
  }
  public set sniStrict(value: boolean | cdktf.IResolvable) {
    this._sniStrict = value;
  }
  public resetSniStrict() {
    this._sniStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniStrictInput() {
    return this._sniStrict;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest k8s_traefik_io_tls_option_v1alpha1_manifest}
*/
export class DataK8STraefikIoTlsOptionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_tls_option_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoTlsOptionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoTlsOptionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoTlsOptionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoTlsOptionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_tls_option_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/traefik_io_tls_option_v1alpha1_manifest k8s_traefik_io_tls_option_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoTlsOptionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoTlsOptionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_tls_option_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoTlsOptionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoTlsOptionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoTlsOptionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoTlsOptionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoTlsOptionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoTlsOptionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
