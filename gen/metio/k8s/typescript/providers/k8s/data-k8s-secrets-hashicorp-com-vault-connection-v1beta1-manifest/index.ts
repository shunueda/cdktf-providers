// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#metadata DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata;
  /**
  * VaultConnectionSpec defines the desired state of VaultConnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#spec DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec;
}
export interface DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#annotations DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#labels DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#name DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#namespace DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadataToTerraform(struct?: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec {
  /**
  * Address of the Vault server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#address DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#address}
  */
  readonly address: string;
  /**
  * CACertSecretRef is the name of a Kubernetes secret containing the trusted PEM encoded CA certificate chain as 'ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#ca_cert_secret_ref DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#ca_cert_secret_ref}
  */
  readonly caCertSecretRef?: string;
  /**
  * Headers to be included in all Vault requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#headers DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * SkipTLSVerify for TLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#skip_tls_verify DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#skip_tls_verify}
  */
  readonly skipTlsVerify: boolean | cdktf.IResolvable;
  /**
  * Timeout applied to all Vault requests for this connection. If not set, the default timeout from the Vault API client config is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#timeout DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * TLSServerName to use as the SNI host for TLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#tls_server_name DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest#tls_server_name}
  */
  readonly tlsServerName?: string;
}

export function dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpecToTerraform(struct?: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca_cert_secret_ref: cdktf.stringToTerraform(struct!.caCertSecretRef),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    skip_tls_verify: cdktf.booleanToTerraform(struct!.skipTlsVerify),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
  }
}


export function dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert_secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.caCertSecretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._caCertSecretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertSecretRef = this._caCertSecretRef;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._skipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerify = this._skipTlsVerify;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._caCertSecretRef = undefined;
      this._headers = undefined;
      this._skipTlsVerify = undefined;
      this._timeout = undefined;
      this._tlsServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._caCertSecretRef = value.caCertSecretRef;
      this._headers = value.headers;
      this._skipTlsVerify = value.skipTlsVerify;
      this._timeout = value.timeout;
      this._tlsServerName = value.tlsServerName;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert_secret_ref - computed: false, optional: true, required: false
  private _caCertSecretRef?: string; 
  public get caCertSecretRef() {
    return this.getStringAttribute('ca_cert_secret_ref');
  }
  public set caCertSecretRef(value: string) {
    this._caCertSecretRef = value;
  }
  public resetCaCertSecretRef() {
    this._caCertSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertSecretRefInput() {
    return this._caCertSecretRef;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // skip_tls_verify - computed: false, optional: false, required: true
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest k8s_secrets_hashicorp_com_vault_connection_v1beta1_manifest}
*/
export class DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secrets_hashicorp_com_vault_connection_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecretsHashicorpComVaultConnectionV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secrets_hashicorp_com_vault_connection_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/secrets_hashicorp_com_vault_connection_v1beta1_manifest k8s_secrets_hashicorp_com_vault_connection_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secrets_hashicorp_com_vault_connection_v1beta1_manifest',
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
  private _metadata = new DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec) {
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
      metadata: dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecretsHashicorpComVaultConnectionV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
