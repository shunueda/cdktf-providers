// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STraefikIoServersTransportTcpV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#metadata DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata;
  /**
  * ServersTransportTCPSpec defines the desired state of a ServersTransportTCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#spec DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec;
}
export interface DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#annotations DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#labels DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#name DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#namespace DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe {
  /**
  * IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#ids DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#ids}
  */
  readonly ids?: string[];
  /**
  * TrustDomain defines the allowed SPIFFE trust domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#trust_domain DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#trust_domain}
  */
  readonly trustDomain?: string;
}

export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffeToTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    trust_domain: cdktf.stringToTerraform(struct!.trustDomain),
  }
}


export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffeToHclTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trust_domain: {
      value: cdktf.stringToHclTerraform(struct!.trustDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._trustDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDomain = this._trustDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._trustDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._trustDomain = value.trustDomain;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // trust_domain - computed: false, optional: true, required: false
  private _trustDomain?: string; 
  public get trustDomain() {
    return this.getStringAttribute('trust_domain');
  }
  public set trustDomain(value: string) {
    this._trustDomain = value;
  }
  public resetTrustDomain() {
    this._trustDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainInput() {
    return this._trustDomain;
  }
}
export interface DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls {
  /**
  * CertificatesSecrets defines a list of secret storing client certificates for mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#certificates_secrets DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#certificates_secrets}
  */
  readonly certificatesSecrets?: string[];
  /**
  * InsecureSkipVerify disables TLS certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#insecure_skip_verify DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host. PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#peer_cert_uri DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#peer_cert_uri}
  */
  readonly peerCertUri?: string;
  /**
  * RootCAsSecrets defines a list of CA secret used to validate self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#root_c_as_secrets DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#root_c_as_secrets}
  */
  readonly rootCAsSecrets?: string[];
  /**
  * ServerName defines the server name used to contact the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#server_name DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#server_name}
  */
  readonly serverName?: string;
  /**
  * Spiffe defines the SPIFFE configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#spiffe DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#spiffe}
  */
  readonly spiffe?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe;
}

export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsToTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificatesSecrets),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    peer_cert_uri: cdktf.stringToTerraform(struct!.peerCertUri),
    root_c_as_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootCAsSecrets),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    spiffe: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffeToTerraform(struct!.spiffe),
  }
}


export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsToHclTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificatesSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_cert_uri: {
      value: cdktf.stringToHclTerraform(struct!.peerCertUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_c_as_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rootCAsSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spiffe: {
      value: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffeToHclTerraform(struct!.spiffe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatesSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecrets = this._certificatesSecrets;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._peerCertUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerCertUri = this._peerCertUri;
    }
    if (this._rootCAsSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCAsSecrets = this._rootCAsSecrets;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._spiffe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiffe = this._spiffe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesSecrets = undefined;
      this._insecureSkipVerify = undefined;
      this._peerCertUri = undefined;
      this._rootCAsSecrets = undefined;
      this._serverName = undefined;
      this._spiffe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatesSecrets = value.certificatesSecrets;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._peerCertUri = value.peerCertUri;
      this._rootCAsSecrets = value.rootCAsSecrets;
      this._serverName = value.serverName;
      this._spiffe.internalValue = value.spiffe;
    }
  }

  // certificates_secrets - computed: false, optional: true, required: false
  private _certificatesSecrets?: string[]; 
  public get certificatesSecrets() {
    return this.getListAttribute('certificates_secrets');
  }
  public set certificatesSecrets(value: string[]) {
    this._certificatesSecrets = value;
  }
  public resetCertificatesSecrets() {
    this._certificatesSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretsInput() {
    return this._certificatesSecrets;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // peer_cert_uri - computed: false, optional: true, required: false
  private _peerCertUri?: string; 
  public get peerCertUri() {
    return this.getStringAttribute('peer_cert_uri');
  }
  public set peerCertUri(value: string) {
    this._peerCertUri = value;
  }
  public resetPeerCertUri() {
    this._peerCertUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCertUriInput() {
    return this._peerCertUri;
  }

  // root_c_as_secrets - computed: false, optional: true, required: false
  private _rootCAsSecrets?: string[]; 
  public get rootCAsSecrets() {
    return this.getListAttribute('root_c_as_secrets');
  }
  public set rootCAsSecrets(value: string[]) {
    this._rootCAsSecrets = value;
  }
  public resetRootCAsSecrets() {
    this._rootCAsSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCAsSecretsInput() {
    return this._rootCAsSecrets;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // spiffe - computed: false, optional: true, required: false
  private _spiffe = new DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffeOutputReference(this, "spiffe");
  public get spiffe() {
    return this._spiffe;
  }
  public putSpiffe(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsSpiffe) {
    this._spiffe.internalValue = value;
  }
  public resetSpiffe() {
    this._spiffe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiffeInput() {
    return this._spiffe.internalValue;
  }
}
export interface DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec {
  /**
  * DialKeepAlive is the interval between keep-alive probes for an active network connection. If zero, keep-alive probes are sent with a default value (currently 15 seconds), if supported by the protocol and operating system. Network protocols or operating systems that do not support keep-alives ignore this field. If negative, keep-alive probes are disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#dial_keep_alive DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#dial_keep_alive}
  */
  readonly dialKeepAlive?: string;
  /**
  * DialTimeout is the amount of time to wait until a connection to a backend server can be established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#dial_timeout DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#dial_timeout}
  */
  readonly dialTimeout?: string;
  /**
  * TerminationDelay defines the delay to wait before fully terminating the connection, after one connected peer has closed its writing capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#termination_delay DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#termination_delay}
  */
  readonly terminationDelay?: string;
  /**
  * TLS defines the TLS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#tls DataK8STraefikIoServersTransportTcpV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls;
}

export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecToTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dial_keep_alive: cdktf.stringToTerraform(struct!.dialKeepAlive),
    dial_timeout: cdktf.stringToTerraform(struct!.dialTimeout),
    termination_delay: cdktf.stringToTerraform(struct!.terminationDelay),
    tls: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsToTerraform(struct!.tls),
  }
}


export function dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dial_keep_alive: {
      value: cdktf.stringToHclTerraform(struct!.dialKeepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dial_timeout: {
      value: cdktf.stringToHclTerraform(struct!.dialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_delay: {
      value: cdktf.stringToHclTerraform(struct!.terminationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dialKeepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialKeepAlive = this._dialKeepAlive;
    }
    if (this._dialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialTimeout = this._dialTimeout;
    }
    if (this._terminationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationDelay = this._terminationDelay;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dialKeepAlive = undefined;
      this._dialTimeout = undefined;
      this._terminationDelay = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dialKeepAlive = value.dialKeepAlive;
      this._dialTimeout = value.dialTimeout;
      this._terminationDelay = value.terminationDelay;
      this._tls.internalValue = value.tls;
    }
  }

  // dial_keep_alive - computed: false, optional: true, required: false
  private _dialKeepAlive?: string; 
  public get dialKeepAlive() {
    return this.getStringAttribute('dial_keep_alive');
  }
  public set dialKeepAlive(value: string) {
    this._dialKeepAlive = value;
  }
  public resetDialKeepAlive() {
    this._dialKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialKeepAliveInput() {
    return this._dialKeepAlive;
  }

  // dial_timeout - computed: false, optional: true, required: false
  private _dialTimeout?: string; 
  public get dialTimeout() {
    return this.getStringAttribute('dial_timeout');
  }
  public set dialTimeout(value: string) {
    this._dialTimeout = value;
  }
  public resetDialTimeout() {
    this._dialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialTimeoutInput() {
    return this._dialTimeout;
  }

  // termination_delay - computed: false, optional: true, required: false
  private _terminationDelay?: string; 
  public get terminationDelay() {
    return this.getStringAttribute('termination_delay');
  }
  public set terminationDelay(value: string) {
    this._terminationDelay = value;
  }
  public resetTerminationDelay() {
    this._terminationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationDelayInput() {
    return this._terminationDelay;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest k8s_traefik_io_servers_transport_tcp_v1alpha1_manifest}
*/
export class DataK8STraefikIoServersTransportTcpV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_traefik_io_servers_transport_tcp_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STraefikIoServersTransportTcpV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STraefikIoServersTransportTcpV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STraefikIoServersTransportTcpV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STraefikIoServersTransportTcpV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_traefik_io_servers_transport_tcp_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/traefik_io_servers_transport_tcp_v1alpha1_manifest k8s_traefik_io_servers_transport_tcp_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STraefikIoServersTransportTcpV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_traefik_io_servers_transport_tcp_v1alpha1_manifest',
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
  private _metadata = new DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec) {
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
      metadata: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoServersTransportTcpV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STraefikIoServersTransportTcpV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
