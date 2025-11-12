// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for the Server Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#description ServerWorkload#description}
  */
  readonly description?: string;
  /**
  * Active status of the Server Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#is_active ServerWorkload#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Name for the Server Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#name ServerWorkload#name}
  */
  readonly name: string;
  /**
  * Service endpoint details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#service_endpoint ServerWorkload#service_endpoint}
  */
  readonly serviceEndpoint: ServerWorkloadServiceEndpoint;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#tags ServerWorkload#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ServerWorkloadServiceEndpointAuthenticationConfig {
  /**
  * Server Workload Service authentication config. <br>This value is used to identify the HTTP Header or Query Parameter used for the associated authentication scheme. <br>**Note:** This value is required in cases where an HTTP Header or Query Parameter is required, for example with `HTTP Authentication` and scheme `Header`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#config ServerWorkload#config}
  */
  readonly config?: string;
  /**
  * Server Workload Service authentication method. Possible values are: 
  * 	* `API Key`
  * 	* `HTTP Authentication`
  * 	* `JWT Token Authentication`
  * 	* `Password Authentication`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#method ServerWorkload#method}
  */
  readonly method: string;
  /**
  * Server Workload Service authentication scheme. Possible values are: 
  * 	* For Authentation Method `API Key`:
  * 		* `Header`
  * 		* `Query Parameter`
  * 	* For Authentation Method `HTTP Authentication`:
  * 		* `Basic`
  * 		* `Bearer`
  * 		* `Header`
  * 		* `AWS Signature v4`
  * 	* For Authentation Method `JWT Token Authentication`:
  * 		* `Snowflake JWT`
  * 	* For Authentation Method `Password Authentication`:
  * 		* `Password`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#scheme ServerWorkload#scheme}
  */
  readonly scheme: string;
}

export function serverWorkloadServiceEndpointAuthenticationConfigToTerraform(struct?: ServerWorkloadServiceEndpointAuthenticationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    method: cdktf.stringToTerraform(struct!.method),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function serverWorkloadServiceEndpointAuthenticationConfigToHclTerraform(struct?: ServerWorkloadServiceEndpointAuthenticationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerWorkloadServiceEndpointAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerWorkloadServiceEndpointAuthenticationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerWorkloadServiceEndpointAuthenticationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._method = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._method = value.method;
      this._scheme = value.scheme;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface ServerWorkloadServiceEndpoint {
  /**
  * Application Protocol of the Server Workload service endpoint. Possible values are: 
  * 	* `Amazon Redshift`
  * 	* `HTTP`
  * 	* `MySQL`
  * 	* `PostgreSQL`
  * 	* `Redis`
  * 	* `Snowflake`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#app_protocol ServerWorkload#app_protocol}
  */
  readonly appProtocol: string;
  /**
  * Service authentication details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#authentication_config ServerWorkload#authentication_config}
  */
  readonly authenticationConfig?: ServerWorkloadServiceEndpointAuthenticationConfig;
  /**
  * Hostname of the Server Workload service endpoint.
  * Wildcard hostnames are supported, for example `*.amazonaws.com`, `*.azure.com`, or `*.googleapis.com`.
  * Note: Wildcards are not supported in the top or second-level domain, such as `*.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#host ServerWorkload#host}
  */
  readonly host: string;
  /**
  * HTTP Headers are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#http_headers ServerWorkload#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Port of the Server Workload service endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#port ServerWorkload#port}
  */
  readonly port: number;
  /**
  * Requested port of the Server Workload service endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#requested_port ServerWorkload#requested_port}
  */
  readonly requestedPort: number;
  /**
  * TLS requested on the Server Workload service endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#requested_tls ServerWorkload#requested_tls}
  */
  readonly requestedTls?: boolean | cdktf.IResolvable;
  /**
  * TLS indicated on the Server Workload service endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#tls ServerWorkload#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * TLS verification configuration of the Server Workload service endpoint. Possible values are `full` (default) or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#tls_verification ServerWorkload#tls_verification}
  */
  readonly tlsVerification: string;
  /**
  * Transport protocol of the Server Workload service endpoint. This value must be set to the default `TCP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#transport_protocol ServerWorkload#transport_protocol}
  */
  readonly transportProtocol: string;
}

export function serverWorkloadServiceEndpointToTerraform(struct?: ServerWorkloadServiceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    authentication_config: serverWorkloadServiceEndpointAuthenticationConfigToTerraform(struct!.authenticationConfig),
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    port: cdktf.numberToTerraform(struct!.port),
    requested_port: cdktf.numberToTerraform(struct!.requestedPort),
    requested_tls: cdktf.booleanToTerraform(struct!.requestedTls),
    tls: cdktf.booleanToTerraform(struct!.tls),
    tls_verification: cdktf.stringToTerraform(struct!.tlsVerification),
    transport_protocol: cdktf.stringToTerraform(struct!.transportProtocol),
  }
}


export function serverWorkloadServiceEndpointToHclTerraform(struct?: ServerWorkloadServiceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_config: {
      value: serverWorkloadServiceEndpointAuthenticationConfigToHclTerraform(struct!.authenticationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ServerWorkloadServiceEndpointAuthenticationConfig",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requested_port: {
      value: cdktf.numberToHclTerraform(struct!.requestedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requested_tls: {
      value: cdktf.booleanToHclTerraform(struct!.requestedTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_verification: {
      value: cdktf.stringToHclTerraform(struct!.tlsVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.transportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerWorkloadServiceEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerWorkloadServiceEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._authenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfig = this._authenticationConfig?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedPort = this._requestedPort;
    }
    if (this._requestedTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedTls = this._requestedTls;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._tlsVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerification = this._tlsVerification;
    }
    if (this._transportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportProtocol = this._transportProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerWorkloadServiceEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._authenticationConfig.internalValue = undefined;
      this._host = undefined;
      this._httpHeaders = undefined;
      this._port = undefined;
      this._requestedPort = undefined;
      this._requestedTls = undefined;
      this._tls = undefined;
      this._tlsVerification = undefined;
      this._transportProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._authenticationConfig.internalValue = value.authenticationConfig;
      this._host = value.host;
      this._httpHeaders = value.httpHeaders;
      this._port = value.port;
      this._requestedPort = value.requestedPort;
      this._requestedTls = value.requestedTls;
      this._tls = value.tls;
      this._tlsVerification = value.tlsVerification;
      this._transportProtocol = value.transportProtocol;
    }
  }

  // app_protocol - computed: false, optional: false, required: true
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
  }

  // authentication_config - computed: false, optional: true, required: false
  private _authenticationConfig = new ServerWorkloadServiceEndpointAuthenticationConfigOutputReference(this, "authentication_config");
  public get authenticationConfig() {
    return this._authenticationConfig;
  }
  public putAuthenticationConfig(value: ServerWorkloadServiceEndpointAuthenticationConfig) {
    this._authenticationConfig.internalValue = value;
  }
  public resetAuthenticationConfig() {
    this._authenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigInput() {
    return this._authenticationConfig.internalValue;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // requested_port - computed: false, optional: false, required: true
  private _requestedPort?: number; 
  public get requestedPort() {
    return this.getNumberAttribute('requested_port');
  }
  public set requestedPort(value: number) {
    this._requestedPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedPortInput() {
    return this._requestedPort;
  }

  // requested_tls - computed: true, optional: true, required: false
  private _requestedTls?: boolean | cdktf.IResolvable; 
  public get requestedTls() {
    return this.getBooleanAttribute('requested_tls');
  }
  public set requestedTls(value: boolean | cdktf.IResolvable) {
    this._requestedTls = value;
  }
  public resetRequestedTls() {
    this._requestedTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedTlsInput() {
    return this._requestedTls;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // tls_verification - computed: false, optional: false, required: true
  private _tlsVerification?: string; 
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
  public set tlsVerification(value: string) {
    this._tlsVerification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerificationInput() {
    return this._tlsVerification;
  }

  // transport_protocol - computed: false, optional: false, required: true
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload aembit_server_workload}
*/
export class ServerWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_server_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerWorkload to import
  * @param importFromId The id of the existing ServerWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_server_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/server_workload aembit_server_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: ServerWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_server_workload',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._isActive = config.isActive;
    this._name = config.name;
    this._serviceEndpoint.internalValue = config.serviceEndpoint;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // service_endpoint - computed: false, optional: false, required: true
  private _serviceEndpoint = new ServerWorkloadServiceEndpointOutputReference(this, "service_endpoint");
  public get serviceEndpoint() {
    return this._serviceEndpoint;
  }
  public putServiceEndpoint(value: ServerWorkloadServiceEndpoint) {
    this._serviceEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointInput() {
    return this._serviceEndpoint.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      service_endpoint: serverWorkloadServiceEndpointToTerraform(this._serviceEndpoint.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint: {
        value: serverWorkloadServiceEndpointToHclTerraform(this._serviceEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerWorkloadServiceEndpoint",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
