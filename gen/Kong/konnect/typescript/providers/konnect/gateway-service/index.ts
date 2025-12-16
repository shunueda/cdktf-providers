// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of `CA Certificate` object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to `null` when Nginx default is respected. If default CA list in Nginx are not specified and TLS verification is enabled, then handshake with upstream server will always fail (because no CA are trusted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#ca_certificates GatewayService#ca_certificates}
  */
  readonly caCertificates?: string[];
  /**
  * Certificate to be used as client certificate while TLS handshaking to the upstream server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#client_certificate GatewayService#client_certificate}
  */
  readonly clientCertificate?: GatewayServiceClientCertificate;
  /**
  * The timeout in milliseconds for establishing a connection to the upstream server. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#connect_timeout GatewayService#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#control_plane_id GatewayService#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#created_at GatewayService#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the Service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404). Default: `true`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#enabled GatewayService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The host of the upstream server. Note that the host value is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#host GatewayService#host}
  */
  readonly host: string;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#id GatewayService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#name GatewayService#name}
  */
  readonly name?: string;
  /**
  * The path to be used in requests to the upstream server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#path GatewayService#path}
  */
  readonly path?: string;
  /**
  * The upstream server port. Default: 80
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#port GatewayService#port}
  */
  readonly port?: number;
  /**
  * The protocol used to communicate with the upstream. Default: "http"; must be one of ["grpc", "grpcs", "http", "https", "tcp", "tls", "tls_passthrough", "udp", "ws", "wss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#protocol GatewayService#protocol}
  */
  readonly protocol?: string;
  /**
  * The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#read_timeout GatewayService#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * The number of retries to execute upon failure to proxy. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#retries GatewayService#retries}
  */
  readonly retries?: number;
  /**
  * An optional set of strings associated with the Service for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#tags GatewayService#tags}
  */
  readonly tags?: string[];
  /**
  * Additional Subject Alternative Names that can be matched on Upstream server's TLS certificate (in addition to `host`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#tls_sans GatewayService#tls_sans}
  */
  readonly tlsSans?: GatewayServiceTlsSans;
  /**
  * Whether to enable verification of upstream server TLS certificate. If set to `null`, then the Nginx default is respected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#tls_verify GatewayService#tls_verify}
  */
  readonly tlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Maximum depth of chain while verifying Upstream server's TLS certificate. If set to `null`, then the Nginx default is respected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#tls_verify_depth GatewayService#tls_verify_depth}
  */
  readonly tlsVerifyDepth?: number;
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#updated_at GatewayService#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#write_timeout GatewayService#write_timeout}
  */
  readonly writeTimeout?: number;
}
export interface GatewayServiceClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#id GatewayService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayServiceClientCertificateToTerraform(struct?: GatewayServiceClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayServiceClientCertificateToHclTerraform(struct?: GatewayServiceClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayServiceClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayServiceClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayServiceClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface GatewayServiceTlsSans {
  /**
  * A dnsName for TLS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#dnsnames GatewayService#dnsnames}
  */
  readonly dnsnames?: string[];
  /**
  * An URI for TLS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#uris GatewayService#uris}
  */
  readonly uris?: string[];
}

export function gatewayServiceTlsSansToTerraform(struct?: GatewayServiceTlsSans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsnames),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function gatewayServiceTlsSansToHclTerraform(struct?: GatewayServiceTlsSans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnsnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayServiceTlsSansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayServiceTlsSans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsnames = this._dnsnames;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayServiceTlsSans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsnames = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsnames = value.dnsnames;
      this._uris = value.uris;
    }
  }

  // dnsnames - computed: true, optional: true, required: false
  private _dnsnames?: string[]; 
  public get dnsnames() {
    return this.getListAttribute('dnsnames');
  }
  public set dnsnames(value: string[]) {
    this._dnsnames = value;
  }
  public resetDnsnames() {
    this._dnsnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsnamesInput() {
    return this._dnsnames;
  }

  // uris - computed: true, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service konnect_gateway_service}
*/
export class GatewayService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayService to import
  * @param importFromId The id of the existing GatewayService that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_service konnect_gateway_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_service',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertificates = config.caCertificates;
    this._clientCertificate.internalValue = config.clientCertificate;
    this._connectTimeout = config.connectTimeout;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._path = config.path;
    this._port = config.port;
    this._protocol = config.protocol;
    this._readTimeout = config.readTimeout;
    this._retries = config.retries;
    this._tags = config.tags;
    this._tlsSans.internalValue = config.tlsSans;
    this._tlsVerify = config.tlsVerify;
    this._tlsVerifyDepth = config.tlsVerifyDepth;
    this._updatedAt = config.updatedAt;
    this._writeTimeout = config.writeTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string[]; 
  public get caCertificates() {
    return this.getListAttribute('ca_certificates');
  }
  public set caCertificates(value: string[]) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate = new GatewayServiceClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: GatewayServiceClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tls_sans - computed: true, optional: true, required: false
  private _tlsSans = new GatewayServiceTlsSansOutputReference(this, "tls_sans");
  public get tlsSans() {
    return this._tlsSans;
  }
  public putTlsSans(value: GatewayServiceTlsSans) {
    this._tlsSans.internalValue = value;
  }
  public resetTlsSans() {
    this._tlsSans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSansInput() {
    return this._tlsSans.internalValue;
  }

  // tls_verify - computed: false, optional: true, required: false
  private _tlsVerify?: boolean | cdktf.IResolvable; 
  public get tlsVerify() {
    return this.getBooleanAttribute('tls_verify');
  }
  public set tlsVerify(value: boolean | cdktf.IResolvable) {
    this._tlsVerify = value;
  }
  public resetTlsVerify() {
    this._tlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyInput() {
    return this._tlsVerify;
  }

  // tls_verify_depth - computed: false, optional: true, required: false
  private _tlsVerifyDepth?: number; 
  public get tlsVerifyDepth() {
    return this.getNumberAttribute('tls_verify_depth');
  }
  public set tlsVerifyDepth(value: number) {
    this._tlsVerifyDepth = value;
  }
  public resetTlsVerifyDepth() {
    this._tlsVerifyDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyDepthInput() {
    return this._tlsVerifyDepth;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // write_timeout - computed: true, optional: true, required: false
  private _writeTimeout?: number; 
  public get writeTimeout() {
    return this.getNumberAttribute('write_timeout');
  }
  public set writeTimeout(value: number) {
    this._writeTimeout = value;
  }
  public resetWriteTimeout() {
    this._writeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTimeoutInput() {
    return this._writeTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caCertificates),
      client_certificate: gatewayServiceClientCertificateToTerraform(this._clientCertificate.internalValue),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      read_timeout: cdktf.numberToTerraform(this._readTimeout),
      retries: cdktf.numberToTerraform(this._retries),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tls_sans: gatewayServiceTlsSansToTerraform(this._tlsSans.internalValue),
      tls_verify: cdktf.booleanToTerraform(this._tlsVerify),
      tls_verify_depth: cdktf.numberToTerraform(this._tlsVerifyDepth),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
      write_timeout: cdktf.numberToTerraform(this._writeTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_certificate: {
        value: gatewayServiceClientCertificateToHclTerraform(this._clientCertificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayServiceClientCertificate",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_timeout: {
        value: cdktf.numberToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls_sans: {
        value: gatewayServiceTlsSansToHclTerraform(this._tlsSans.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayServiceTlsSans",
      },
      tls_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_verify_depth: {
        value: cdktf.numberToHclTerraform(this._tlsVerifyDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      write_timeout: {
        value: cdktf.numberToHclTerraform(this._writeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
