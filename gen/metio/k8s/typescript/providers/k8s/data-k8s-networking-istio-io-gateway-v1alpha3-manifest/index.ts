// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#metadata DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata;
  /**
  * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#spec DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec;
}
export interface DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#annotations DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#labels DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#name DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#namespace DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort {
  /**
  * Label assigned to the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#name DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * A valid non-negative integer port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#number DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#number}
  */
  readonly number: number;
  /**
  * The protocol exposed on the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#protocol DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#target_port DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#target_port}
  */
  readonly targetPort?: number;
}

export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPortToTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPortToHclTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._number = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._number = value.number;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
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

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls {
  /**
  * REQUIRED if mode is 'MUTUAL' or 'OPTIONAL_MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#ca_certificates DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#ca_crl DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#ca_crl}
  */
  readonly caCrl?: string;
  /**
  * Optional: If specified, only support the specified cipher list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#cipher_suites DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#credential_name DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#https_redirect DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * Optional: Maximum TLS protocol version. Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#max_protocol_version DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#max_protocol_version}
  */
  readonly maxProtocolVersion?: string;
  /**
  * Optional: Minimum TLS protocol version. Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#min_protocol_version DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Optional: Indicates whether connections to this port should be secured using TLS. Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#mode DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'SIMPLE' or 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#private_key DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * REQUIRED if mode is 'SIMPLE' or 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#server_certificate DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate presented by the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#subject_alt_names DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
  /**
  * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#verify_certificate_hash DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#verify_certificate_hash}
  */
  readonly verifyCertificateHash?: string[];
  /**
  * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#verify_certificate_spki DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#verify_certificate_spki}
  */
  readonly verifyCertificateSpki?: string[];
}

export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTlsToTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    ca_crl: cdktf.stringToTerraform(struct!.caCrl),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    max_protocol_version: cdktf.stringToTerraform(struct!.maxProtocolVersion),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    server_certificate: cdktf.stringToTerraform(struct!.serverCertificate),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
    verify_certificate_hash: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifyCertificateHash),
    verify_certificate_spki: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifyCertificateSpki),
  }
}


export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl: {
      value: cdktf.stringToHclTerraform(struct!.caCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maxProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_certificate_hash: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifyCertificateHash),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_certificate_spki: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifyCertificateSpki),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._caCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrl = this._caCrl;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._maxProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProtocolVersion = this._maxProtocolVersion;
    }
    if (this._minProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProtocolVersion = this._minProtocolVersion;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._serverCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    if (this._verifyCertificateHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificateHash = this._verifyCertificateHash;
    }
    if (this._verifyCertificateSpki !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificateSpki = this._verifyCertificateSpki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._caCrl = undefined;
      this._cipherSuites = undefined;
      this._credentialName = undefined;
      this._httpsRedirect = undefined;
      this._maxProtocolVersion = undefined;
      this._minProtocolVersion = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._serverCertificate = undefined;
      this._subjectAltNames = undefined;
      this._verifyCertificateHash = undefined;
      this._verifyCertificateSpki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._caCrl = value.caCrl;
      this._cipherSuites = value.cipherSuites;
      this._credentialName = value.credentialName;
      this._httpsRedirect = value.httpsRedirect;
      this._maxProtocolVersion = value.maxProtocolVersion;
      this._minProtocolVersion = value.minProtocolVersion;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._serverCertificate = value.serverCertificate;
      this._subjectAltNames = value.subjectAltNames;
      this._verifyCertificateHash = value.verifyCertificateHash;
      this._verifyCertificateSpki = value.verifyCertificateSpki;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // ca_crl - computed: false, optional: true, required: false
  private _caCrl?: string; 
  public get caCrl() {
    return this.getStringAttribute('ca_crl');
  }
  public set caCrl(value: string) {
    this._caCrl = value;
  }
  public resetCaCrl() {
    this._caCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlInput() {
    return this._caCrl;
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

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // max_protocol_version - computed: false, optional: true, required: false
  private _maxProtocolVersion?: string; 
  public get maxProtocolVersion() {
    return this.getStringAttribute('max_protocol_version');
  }
  public set maxProtocolVersion(value: string) {
    this._maxProtocolVersion = value;
  }
  public resetMaxProtocolVersion() {
    this._maxProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProtocolVersionInput() {
    return this._maxProtocolVersion;
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }

  // verify_certificate_hash - computed: false, optional: true, required: false
  private _verifyCertificateHash?: string[]; 
  public get verifyCertificateHash() {
    return this.getListAttribute('verify_certificate_hash');
  }
  public set verifyCertificateHash(value: string[]) {
    this._verifyCertificateHash = value;
  }
  public resetVerifyCertificateHash() {
    this._verifyCertificateHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateHashInput() {
    return this._verifyCertificateHash;
  }

  // verify_certificate_spki - computed: false, optional: true, required: false
  private _verifyCertificateSpki?: string[]; 
  public get verifyCertificateSpki() {
    return this.getListAttribute('verify_certificate_spki');
  }
  public set verifyCertificateSpki(value: string[]) {
    this._verifyCertificateSpki = value;
  }
  public resetVerifyCertificateSpki() {
    this._verifyCertificateSpki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateSpkiInput() {
    return this._verifyCertificateSpki;
  }
}
export interface DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers {
  /**
  * The ip or the Unix domain socket to which the listener should be bound to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#bind DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#bind}
  */
  readonly bind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#default_endpoint DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#default_endpoint}
  */
  readonly defaultEndpoint?: string;
  /**
  * One or more hosts exposed by this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#hosts DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#hosts}
  */
  readonly hosts: string[];
  /**
  * An optional name of the server, when set must be unique across all servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#name DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * The Port on which the proxy should listen for incoming connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#port DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#port}
  */
  readonly port: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort;
  /**
  * Set of TLS related options that govern the server's behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#tls DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls;
}

export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersToTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind: cdktf.stringToTerraform(struct!.bind),
    default_endpoint: cdktf.stringToTerraform(struct!.defaultEndpoint),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    name: cdktf.stringToTerraform(struct!.name),
    port: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPortToTerraform(struct!.port),
    tls: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTlsToTerraform(struct!.tls),
  }
}


export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersToHclTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind: {
      value: cdktf.stringToHclTerraform(struct!.bind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort",
    },
    tls: {
      value: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bind !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind;
    }
    if (this._defaultEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpoint = this._defaultEndpoint;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bind = undefined;
      this._defaultEndpoint = undefined;
      this._hosts = undefined;
      this._name = undefined;
      this._port.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bind = value.bind;
      this._defaultEndpoint = value.defaultEndpoint;
      this._hosts = value.hosts;
      this._name = value.name;
      this._port.internalValue = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // bind - computed: false, optional: true, required: false
  private _bind?: string; 
  public get bind() {
    return this.getStringAttribute('bind');
  }
  public set bind(value: string) {
    this._bind = value;
  }
  public resetBind() {
    this._bind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind;
  }

  // default_endpoint - computed: false, optional: true, required: false
  private _defaultEndpoint?: string; 
  public get defaultEndpoint() {
    return this.getStringAttribute('default_endpoint');
  }
  public set defaultEndpoint(value: string) {
    this._defaultEndpoint = value;
  }
  public resetDefaultEndpoint() {
    this._defaultEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointInput() {
    return this._defaultEndpoint;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // port - computed: false, optional: false, required: true
  private _port = new DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersPort) {
    this._port.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersTls) {
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

export class DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersOutputReference {
    return new DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#selector DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * A list of server specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#servers DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest#servers}
  */
  readonly servers?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers[] | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecToTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    servers: cdktf.listMapper(dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersToTerraform, false)(struct!.servers),
  }
}


export function dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    servers: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
      this._servers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
      this._servers.internalValue = value.servers;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest k8s_networking_istio_io_gateway_v1alpha3_manifest}
*/
export class DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_istio_io_gateway_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingIstioIoGatewayV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_istio_io_gateway_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/networking_istio_io_gateway_v1alpha3_manifest k8s_networking_istio_io_gateway_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_istio_io_gateway_v1alpha3_manifest',
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
  private _metadata = new DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec) {
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
      metadata: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoGatewayV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
