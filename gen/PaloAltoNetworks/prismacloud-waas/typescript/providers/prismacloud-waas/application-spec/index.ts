// https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * APISpec is an API specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#api_spec ApplicationSpec#api_spec}
  */
  readonly apiSpec: ApplicationSpecApiSpec;
  /**
  * Unique ID for the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#app_id ApplicationSpec#app_id}
  */
  readonly appId?: string;
  /**
  * Local File Inclusion protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#attack_tools ApplicationSpec#attack_tools}
  */
  readonly attackTools: ApplicationSpecAttackTools;
  /**
  * Configuration for automatic application of virtual patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#auto_apply_patches_spec ApplicationSpec#auto_apply_patches_spec}
  */
  readonly autoApplyPatchesSpec: ApplicationSpecAutoApplyPatchesSpec;
  /**
  * Ban duration, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#ban_duration_minutes ApplicationSpec#ban_duration_minutes}
  */
  readonly banDurationMinutes?: number;
  /**
  * Represents app configuration related to HTTP Body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#body ApplicationSpec#body}
  */
  readonly body: ApplicationSpecBody;
  /**
  * BotProtectionSpec is the bot protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#bot_protection_spec ApplicationSpec#bot_protection_spec}
  */
  readonly botProtectionSpec: ApplicationSpecBotProtectionSpec;
  /**
  * Secret contains the plain and encrypted version of a value (the plain version is never stored in the DB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#certificate ApplicationSpec#certificate}
  */
  readonly certificate?: ApplicationSpecCertificate;
  /**
  * Indicates whether Clickjacking protection is enabled. When enabled, WAAS modifies all response headers, setting the X-Frame-Options response header value to SAMEORIGIN. The SAMEORIGIN directive only permits a page to be displayed in a frame on the same origin as the page itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#clickjacking_enabled ApplicationSpec#clickjacking_enabled}
  */
  readonly clickjackingEnabled?: boolean | cdktf.IResolvable;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#cmdi ApplicationSpec#cmdi}
  */
  readonly cmdi: ApplicationSpecCmdi;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#code_injection ApplicationSpec#code_injection}
  */
  readonly codeInjection: ApplicationSpecCodeInjection;
  /**
  * Indicates whether Cross-Site Request Forgery (CSRF) protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#csrf_enabled ApplicationSpec#csrf_enabled}
  */
  readonly csrfEnabled: boolean | cdktf.IResolvable;
  /**
  * Custom block HTTP response and HTML page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#custom_block_response_config ApplicationSpec#custom_block_response_config}
  */
  readonly customBlockResponseConfig: ApplicationSpecCustomBlockResponseConfig;
  /**
  * List of custom rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#custom_rules ApplicationSpec#custom_rules}
  */
  readonly customRules?: ApplicationSpecCustomRules[] | cdktf.IResolvable;
  /**
  * Indicates if event ID header should be attached to the response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#disable_event_id_header ApplicationSpec#disable_event_id_header}
  */
  readonly disableEventIdHeader?: boolean | cdktf.IResolvable;
  /**
  * DoSConfig is a dos policy specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#dos_config ApplicationSpec#dos_config}
  */
  readonly dosConfig: ApplicationSpecDosConfig;
  /**
  * Configuration for inspecting HTTP headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#header_specs ApplicationSpec#header_specs}
  */
  readonly headerSpecs: ApplicationSpecHeaderSpecs[] | cdktf.IResolvable;
  /**
  * IntelGathering is the configuration for intelligence gathering protections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#intel_gathering ApplicationSpec#intel_gathering}
  */
  readonly intelGathering: ApplicationSpecIntelGathering;
  /**
  * Local File Inclusion protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#lfi ApplicationSpec#lfi}
  */
  readonly lfi: ApplicationSpecLfi;
  /**
  * Malformed Request protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#malformed_req ApplicationSpec#malformed_req}
  */
  readonly malformedReq: ApplicationSpecMalformedReq;
  /**
  * MaliciousUploadConfig is the configuration for file upload protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#malicious_upload ApplicationSpec#malicious_upload}
  */
  readonly maliciousUpload: ApplicationSpecMaliciousUpload;
  /**
  * NetworkControls contains the network controls config (e.g., access controls for IPs and countries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#network_controls ApplicationSpec#network_controls}
  */
  readonly networkControls: ApplicationSpecNetworkControls;
  /**
  * RemoteHostForwardingConfig defines a remote host to forward requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#remote_host_forwarding ApplicationSpec#remote_host_forwarding}
  */
  readonly remoteHostForwarding: ApplicationSpecRemoteHostForwarding;
  /**
  * Configuration for modifying HTTP response headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#response_header_specs ApplicationSpec#response_header_specs}
  */
  readonly responseHeaderSpecs: ApplicationSpecResponseHeaderSpecs[] | cdktf.IResolvable;
  /**
  * Name of Rule to which Application Spec belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#rule_name ApplicationSpec#rule_name}
  */
  readonly ruleName: string;
  /**
  * Indicates if bans in this app are made by session cookie ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#session_cookie_ban ApplicationSpec#session_cookie_ban}
  */
  readonly sessionCookieBan?: boolean | cdktf.IResolvable;
  /**
  * Indicates if session cookies are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#session_cookie_enabled ApplicationSpec#session_cookie_enabled}
  */
  readonly sessionCookieEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the SameSite attribute of the session cookie is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#session_cookie_same_site ApplicationSpec#session_cookie_same_site}
  */
  readonly sessionCookieSameSite?: string;
  /**
  * Indicates the Secure attribute of the session cookie is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#session_cookie_secure ApplicationSpec#session_cookie_secure}
  */
  readonly sessionCookieSecure?: boolean | cdktf.IResolvable;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#shellshock ApplicationSpec#shellshock}
  */
  readonly shellshock: ApplicationSpecShellshock;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#sqli ApplicationSpec#sqli}
  */
  readonly sqli: ApplicationSpecSqli;
  /**
  * TLSConfig holds the user TLS configuration and the certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#tls_config ApplicationSpec#tls_config}
  */
  readonly tlsConfig?: ApplicationSpecTlsConfig;
  /**
  * the unique fingerprint of the Application Definition, used for optimistic locking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#version ApplicationSpec#version}
  */
  readonly version?: string;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#xss ApplicationSpec#xss}
  */
  readonly xss: ApplicationSpecXss;
}
export interface ApplicationSpecApiSpecEndpoints {
  /**
  * Base path for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#base_path ApplicationSpec#base_path}
  */
  readonly basePath?: string;
  /**
  * Exposed port that the proxy is listening on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exposed_port ApplicationSpec#exposed_port}
  */
  readonly exposedPort?: number;
  /**
  * Indicates if the proxy supports gRPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#grpc ApplicationSpec#grpc}
  */
  readonly grpc?: boolean | cdktf.IResolvable;
  /**
  * URL address (name or IP) of the endpoint's API specification (for example, petstore.swagger.io). The address can be prefixed with a wildcard (for example, *.swagger.io)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#host ApplicationSpec#host}
  */
  readonly host?: string;
  /**
  * Indicates if the proxy supports HTTP/2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#http2 ApplicationSpec#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Internal port that the application is listening on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#internal_port ApplicationSpec#internal_port}
  */
  readonly internalPort?: number;
  /**
  * Indicates if the connection is secured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#tls ApplicationSpec#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function applicationSpecApiSpecEndpointsToTerraform(struct?: ApplicationSpecApiSpecEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    exposed_port: cdktf.numberToTerraform(struct!.exposedPort),
    grpc: cdktf.booleanToTerraform(struct!.grpc),
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
    internal_port: cdktf.numberToTerraform(struct!.internalPort),
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function applicationSpecApiSpecEndpointsToHclTerraform(struct?: ApplicationSpecApiSpecEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exposed_port: {
      value: cdktf.numberToHclTerraform(struct!.exposedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: cdktf.booleanToHclTerraform(struct!.grpc),
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
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_port: {
      value: cdktf.numberToHclTerraform(struct!.internalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecApiSpecEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecApiSpecEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._exposedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedPort = this._exposedPort;
    }
    if (this._grpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._internalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalPort = this._internalPort;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecApiSpecEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._exposedPort = undefined;
      this._grpc = undefined;
      this._host = undefined;
      this._http2 = undefined;
      this._internalPort = undefined;
      this._tls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._exposedPort = value.exposedPort;
      this._grpc = value.grpc;
      this._host = value.host;
      this._http2 = value.http2;
      this._internalPort = value.internalPort;
      this._tls = value.tls;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort?: number; 
  public get exposedPort() {
    return this.getNumberAttribute('exposed_port');
  }
  public set exposedPort(value: number) {
    this._exposedPort = value;
  }
  public resetExposedPort() {
    this._exposedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort;
  }

  // grpc - computed: true, optional: true, required: false
  private _grpc?: boolean | cdktf.IResolvable; 
  public get grpc() {
    return this.getBooleanAttribute('grpc');
  }
  public set grpc(value: boolean | cdktf.IResolvable) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
  }

  // host - computed: true, optional: true, required: false
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

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // internal_port - computed: true, optional: true, required: false
  private _internalPort?: number; 
  public get internalPort() {
    return this.getNumberAttribute('internal_port');
  }
  public set internalPort(value: number) {
    this._internalPort = value;
  }
  public resetInternalPort() {
    this._internalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
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
}

export class ApplicationSpecApiSpecEndpointsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecApiSpecEndpoints[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecApiSpecEndpointsOutputReference {
    return new ApplicationSpecApiSpecEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecApiSpecPathsMethodsParameters {
  /**
  * Indicates if an empty value is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allow_empty_value ApplicationSpec#allow_empty_value}
  */
  readonly allowEmptyValue?: boolean | cdktf.IResolvable;
  /**
  * Indicates if multiple values of the specified type are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#array ApplicationSpec#array}
  */
  readonly array?: boolean | cdktf.IResolvable;
  /**
  * Indicates if arrays should generate separate parameters for each array item or object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#explode ApplicationSpec#explode}
  */
  readonly explode?: boolean | cdktf.IResolvable;
  /**
  * location of a parameter in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
  /**
  * Maximum allowable value for a numeric parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#max ApplicationSpec#max}
  */
  readonly max?: number;
  /**
  * Minimum allowable value for a numeric parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#min ApplicationSpec#min}
  */
  readonly min?: number;
  /**
  * Name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#name ApplicationSpec#name}
  */
  readonly name: string;
  /**
  * Indicates if the parameter is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#required ApplicationSpec#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Style is a param format style, defined by OpenAPI specification It describes how the parameter value will be serialized depending on the type of the parameter value. Ref: https://swagger.io/docs/specification/serialization/ https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#style-examples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#style ApplicationSpec#style}
  */
  readonly style?: string;
  /**
  * Type is the type of a parameter, defined by OpenAPI specification Ref: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#type ApplicationSpec#type}
  */
  readonly type: string;
}

export function applicationSpecApiSpecPathsMethodsParametersToTerraform(struct?: ApplicationSpecApiSpecPathsMethodsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty_value: cdktf.booleanToTerraform(struct!.allowEmptyValue),
    array: cdktf.booleanToTerraform(struct!.array),
    explode: cdktf.booleanToTerraform(struct!.explode),
    location: cdktf.stringToTerraform(struct!.location),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    style: cdktf.stringToTerraform(struct!.style),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationSpecApiSpecPathsMethodsParametersToHclTerraform(struct?: ApplicationSpecApiSpecPathsMethodsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty_value: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmptyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    explode: {
      value: cdktf.booleanToHclTerraform(struct!.explode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecApiSpecPathsMethodsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecApiSpecPathsMethodsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmptyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmptyValue = this._allowEmptyValue;
    }
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._explode !== undefined) {
      hasAnyValues = true;
      internalValueResult.explode = this._explode;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecApiSpecPathsMethodsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmptyValue = undefined;
      this._array = undefined;
      this._explode = undefined;
      this._location = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._required = undefined;
      this._style = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmptyValue = value.allowEmptyValue;
      this._array = value.array;
      this._explode = value.explode;
      this._location = value.location;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._required = value.required;
      this._style = value.style;
      this._type = value.type;
    }
  }

  // allow_empty_value - computed: false, optional: true, required: false
  private _allowEmptyValue?: boolean | cdktf.IResolvable; 
  public get allowEmptyValue() {
    return this.getBooleanAttribute('allow_empty_value');
  }
  public set allowEmptyValue(value: boolean | cdktf.IResolvable) {
    this._allowEmptyValue = value;
  }
  public resetAllowEmptyValue() {
    this._allowEmptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyValueInput() {
    return this._allowEmptyValue;
  }

  // array - computed: false, optional: true, required: false
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // explode - computed: false, optional: true, required: false
  private _explode?: boolean | cdktf.IResolvable; 
  public get explode() {
    return this.getBooleanAttribute('explode');
  }
  public set explode(value: boolean | cdktf.IResolvable) {
    this._explode = value;
  }
  public resetExplode() {
    this._explode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explodeInput() {
    return this._explode;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
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
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApplicationSpecApiSpecPathsMethodsParametersList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecApiSpecPathsMethodsParameters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecApiSpecPathsMethodsParametersOutputReference {
    return new ApplicationSpecApiSpecPathsMethodsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecApiSpecPathsMethods {
  /**
  * HTTP verb (for example, PUT, GET, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#method ApplicationSpec#method}
  */
  readonly method: string;
  /**
  * parameters of the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#parameters ApplicationSpec#parameters}
  */
  readonly parameters?: ApplicationSpecApiSpecPathsMethodsParameters[] | cdktf.IResolvable;
}

export function applicationSpecApiSpecPathsMethodsToTerraform(struct?: ApplicationSpecApiSpecPathsMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    parameters: cdktf.listMapper(applicationSpecApiSpecPathsMethodsParametersToTerraform, false)(struct!.parameters),
  }
}


export function applicationSpecApiSpecPathsMethodsToHclTerraform(struct?: ApplicationSpecApiSpecPathsMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(applicationSpecApiSpecPathsMethodsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecApiSpecPathsMethodsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecApiSpecPathsMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecApiSpecPathsMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecApiSpecPathsMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ApplicationSpecApiSpecPathsMethodsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ApplicationSpecApiSpecPathsMethodsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ApplicationSpecApiSpecPathsMethodsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecApiSpecPathsMethods[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecApiSpecPathsMethodsOutputReference {
    return new ApplicationSpecApiSpecPathsMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecApiSpecPaths {
  /**
  * Supported operations for the path (for example, PUT, GET, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#methods ApplicationSpec#methods}
  */
  readonly methods?: ApplicationSpecApiSpecPathsMethods[] | cdktf.IResolvable;
  /**
  * Relative path to an endpoint, such as `/pet/{petId}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#path ApplicationSpec#path}
  */
  readonly path: string;
}

export function applicationSpecApiSpecPathsToTerraform(struct?: ApplicationSpecApiSpecPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(applicationSpecApiSpecPathsMethodsToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSpecApiSpecPathsToHclTerraform(struct?: ApplicationSpecApiSpecPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(applicationSpecApiSpecPathsMethodsToHclTerraform, false)(struct!.methods),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSpecApiSpecPathsMethodsList",
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

export class ApplicationSpecApiSpecPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecApiSpecPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecApiSpecPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods.internalValue = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new ApplicationSpecApiSpecPathsMethodsList(this, "methods", true);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: ApplicationSpecApiSpecPathsMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
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

export class ApplicationSpecApiSpecPathsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecApiSpecPaths[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecApiSpecPathsOutputReference {
    return new ApplicationSpecApiSpecPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecApiSpec {
  /**
  * Description of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#description ApplicationSpec#description}
  */
  readonly description: string;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * The app's endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#endpoints ApplicationSpec#endpoints}
  */
  readonly endpoints?: ApplicationSpecApiSpecEndpoints[] | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#fallback_effect ApplicationSpec#fallback_effect}
  */
  readonly fallbackEffect?: string;
  /**
  * Paths of the API endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#paths ApplicationSpec#paths}
  */
  readonly paths?: ApplicationSpecApiSpecPaths[] | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#query_param_fallback_effect ApplicationSpec#query_param_fallback_effect}
  */
  readonly queryParamFallbackEffect?: string;
}

export function applicationSpecApiSpecToTerraform(struct?: ApplicationSpecApiSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    effect: cdktf.stringToTerraform(struct!.effect),
    endpoints: cdktf.listMapper(applicationSpecApiSpecEndpointsToTerraform, false)(struct!.endpoints),
    fallback_effect: cdktf.stringToTerraform(struct!.fallbackEffect),
    paths: cdktf.listMapper(applicationSpecApiSpecPathsToTerraform, false)(struct!.paths),
    query_param_fallback_effect: cdktf.stringToTerraform(struct!.queryParamFallbackEffect),
  }
}


export function applicationSpecApiSpecToHclTerraform(struct?: ApplicationSpecApiSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(applicationSpecApiSpecEndpointsToHclTerraform, false)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecApiSpecEndpointsList",
    },
    fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.fallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(applicationSpecApiSpecPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSpecApiSpecPathsList",
    },
    query_param_fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.queryParamFallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecApiSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecApiSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    if (this._fallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackEffect = this._fallbackEffect;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    if (this._queryParamFallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamFallbackEffect = this._queryParamFallbackEffect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecApiSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._effect = undefined;
      this._endpoints.internalValue = undefined;
      this._fallbackEffect = undefined;
      this._paths.internalValue = undefined;
      this._queryParamFallbackEffect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._effect = value.effect;
      this._endpoints.internalValue = value.endpoints;
      this._fallbackEffect = value.fallbackEffect;
      this._paths.internalValue = value.paths;
      this._queryParamFallbackEffect = value.queryParamFallbackEffect;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new ApplicationSpecApiSpecEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: ApplicationSpecApiSpecEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // fallback_effect - computed: true, optional: true, required: false
  private _fallbackEffect?: string; 
  public get fallbackEffect() {
    return this.getStringAttribute('fallback_effect');
  }
  public set fallbackEffect(value: string) {
    this._fallbackEffect = value;
  }
  public resetFallbackEffect() {
    this._fallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackEffectInput() {
    return this._fallbackEffect;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new ApplicationSpecApiSpecPathsList(this, "paths", true);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: ApplicationSpecApiSpecPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // query_param_fallback_effect - computed: true, optional: true, required: false
  private _queryParamFallbackEffect?: string; 
  public get queryParamFallbackEffect() {
    return this.getStringAttribute('query_param_fallback_effect');
  }
  public set queryParamFallbackEffect(value: string) {
    this._queryParamFallbackEffect = value;
  }
  public resetQueryParamFallbackEffect() {
    this._queryParamFallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamFallbackEffectInput() {
    return this._queryParamFallbackEffect;
  }
}
export interface ApplicationSpecAttackToolsExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecAttackToolsExceptionFieldsToTerraform(struct?: ApplicationSpecAttackToolsExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecAttackToolsExceptionFieldsToHclTerraform(struct?: ApplicationSpecAttackToolsExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecAttackToolsExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecAttackToolsExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecAttackToolsExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecAttackToolsExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecAttackToolsExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecAttackToolsExceptionFieldsOutputReference {
    return new ApplicationSpecAttackToolsExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecAttackTools {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecAttackToolsExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecAttackToolsToTerraform(struct?: ApplicationSpecAttackTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecAttackToolsExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecAttackToolsToHclTerraform(struct?: ApplicationSpecAttackTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecAttackToolsExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecAttackToolsExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecAttackToolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecAttackTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecAttackTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecAttackToolsExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecAttackToolsExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecAutoApplyPatchesSpec {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
}

export function applicationSpecAutoApplyPatchesSpecToTerraform(struct?: ApplicationSpecAutoApplyPatchesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
  }
}


export function applicationSpecAutoApplyPatchesSpecToHclTerraform(struct?: ApplicationSpecAutoApplyPatchesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecAutoApplyPatchesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecAutoApplyPatchesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecAutoApplyPatchesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }
}
export interface ApplicationSpecBody {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#inspection_limit_exceeded_effect ApplicationSpec#inspection_limit_exceeded_effect}
  */
  readonly inspectionLimitExceededEffect?: string;
  /**
  * InspectionSizeBytes represents the max amount of data to inspect in request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#inspection_size_bytes ApplicationSpec#inspection_size_bytes}
  */
  readonly inspectionSizeBytes?: number;
  /**
  * Skip indicates that body inspection should be skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#skip ApplicationSpec#skip}
  */
  readonly skip?: boolean | cdktf.IResolvable;
}

export function applicationSpecBodyToTerraform(struct?: ApplicationSpecBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspection_limit_exceeded_effect: cdktf.stringToTerraform(struct!.inspectionLimitExceededEffect),
    inspection_size_bytes: cdktf.numberToTerraform(struct!.inspectionSizeBytes),
    skip: cdktf.booleanToTerraform(struct!.skip),
  }
}


export function applicationSpecBodyToHclTerraform(struct?: ApplicationSpecBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspection_limit_exceeded_effect: {
      value: cdktf.stringToHclTerraform(struct!.inspectionLimitExceededEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspection_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inspectionSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip: {
      value: cdktf.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectionLimitExceededEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionLimitExceededEffect = this._inspectionLimitExceededEffect;
    }
    if (this._inspectionSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionSizeBytes = this._inspectionSizeBytes;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inspectionLimitExceededEffect = undefined;
      this._inspectionSizeBytes = undefined;
      this._skip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inspectionLimitExceededEffect = value.inspectionLimitExceededEffect;
      this._inspectionSizeBytes = value.inspectionSizeBytes;
      this._skip = value.skip;
    }
  }

  // inspection_limit_exceeded_effect - computed: true, optional: true, required: false
  private _inspectionLimitExceededEffect?: string; 
  public get inspectionLimitExceededEffect() {
    return this.getStringAttribute('inspection_limit_exceeded_effect');
  }
  public set inspectionLimitExceededEffect(value: string) {
    this._inspectionLimitExceededEffect = value;
  }
  public resetInspectionLimitExceededEffect() {
    this._inspectionLimitExceededEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLimitExceededEffectInput() {
    return this._inspectionLimitExceededEffect;
  }

  // inspection_size_bytes - computed: true, optional: true, required: false
  private _inspectionSizeBytes?: number; 
  public get inspectionSizeBytes() {
    return this.getNumberAttribute('inspection_size_bytes');
  }
  public set inspectionSizeBytes(value: number) {
    this._inspectionSizeBytes = value;
  }
  public resetInspectionSizeBytes() {
    this._inspectionSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionSizeBytesInput() {
    return this._inspectionSizeBytes;
  }

  // skip - computed: true, optional: true, required: false
  private _skip?: boolean | cdktf.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktf.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }
}
export interface ApplicationSpecBotProtectionSpecJsInjectionSpec {
  /**
  * Indicates if JavaScript injection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#timeout_effect ApplicationSpec#timeout_effect}
  */
  readonly timeoutEffect?: string;
}

export function applicationSpecBotProtectionSpecJsInjectionSpecToTerraform(struct?: ApplicationSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout_effect: cdktf.stringToTerraform(struct!.timeoutEffect),
  }
}


export function applicationSpecBotProtectionSpecJsInjectionSpecToHclTerraform(struct?: ApplicationSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable): any {
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
    timeout_effect: {
      value: cdktf.stringToHclTerraform(struct!.timeoutEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecJsInjectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeoutEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutEffect = this._timeoutEffect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeoutEffect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeoutEffect = value.timeoutEffect;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout_effect - computed: true, optional: true, required: false
  private _timeoutEffect?: string; 
  public get timeoutEffect() {
    return this.getStringAttribute('timeout_effect');
  }
  public set timeoutEffect(value: string) {
    this._timeoutEffect = value;
  }
  public resetTimeoutEffect() {
    this._timeoutEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutEffectInput() {
    return this._timeoutEffect;
  }
}
export interface ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#archiving ApplicationSpec#archiving}
  */
  readonly archiving?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#business_analytics ApplicationSpec#business_analytics}
  */
  readonly businessAnalytics?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#career_search ApplicationSpec#career_search}
  */
  readonly careerSearch?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#content_feed_clients ApplicationSpec#content_feed_clients}
  */
  readonly contentFeedClients?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#educational ApplicationSpec#educational}
  */
  readonly educational?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#financial ApplicationSpec#financial}
  */
  readonly financial?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#media_search ApplicationSpec#media_search}
  */
  readonly mediaSearch?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#news ApplicationSpec#news}
  */
  readonly news?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#search_engine_crawlers ApplicationSpec#search_engine_crawlers}
  */
  readonly searchEngineCrawlers?: string;
}

export function applicationSpecBotProtectionSpecKnownBotProtectionsSpecToTerraform(struct?: ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archiving: cdktf.stringToTerraform(struct!.archiving),
    business_analytics: cdktf.stringToTerraform(struct!.businessAnalytics),
    career_search: cdktf.stringToTerraform(struct!.careerSearch),
    content_feed_clients: cdktf.stringToTerraform(struct!.contentFeedClients),
    educational: cdktf.stringToTerraform(struct!.educational),
    financial: cdktf.stringToTerraform(struct!.financial),
    media_search: cdktf.stringToTerraform(struct!.mediaSearch),
    news: cdktf.stringToTerraform(struct!.news),
    search_engine_crawlers: cdktf.stringToTerraform(struct!.searchEngineCrawlers),
  }
}


export function applicationSpecBotProtectionSpecKnownBotProtectionsSpecToHclTerraform(struct?: ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archiving: {
      value: cdktf.stringToHclTerraform(struct!.archiving),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_analytics: {
      value: cdktf.stringToHclTerraform(struct!.businessAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    career_search: {
      value: cdktf.stringToHclTerraform(struct!.careerSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_feed_clients: {
      value: cdktf.stringToHclTerraform(struct!.contentFeedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    educational: {
      value: cdktf.stringToHclTerraform(struct!.educational),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    financial: {
      value: cdktf.stringToHclTerraform(struct!.financial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_search: {
      value: cdktf.stringToHclTerraform(struct!.mediaSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    news: {
      value: cdktf.stringToHclTerraform(struct!.news),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_engine_crawlers: {
      value: cdktf.stringToHclTerraform(struct!.searchEngineCrawlers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecKnownBotProtectionsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiving !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiving = this._archiving;
    }
    if (this._businessAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessAnalytics = this._businessAnalytics;
    }
    if (this._careerSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.careerSearch = this._careerSearch;
    }
    if (this._contentFeedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFeedClients = this._contentFeedClients;
    }
    if (this._educational !== undefined) {
      hasAnyValues = true;
      internalValueResult.educational = this._educational;
    }
    if (this._financial !== undefined) {
      hasAnyValues = true;
      internalValueResult.financial = this._financial;
    }
    if (this._mediaSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaSearch = this._mediaSearch;
    }
    if (this._news !== undefined) {
      hasAnyValues = true;
      internalValueResult.news = this._news;
    }
    if (this._searchEngineCrawlers !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchEngineCrawlers = this._searchEngineCrawlers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiving = undefined;
      this._businessAnalytics = undefined;
      this._careerSearch = undefined;
      this._contentFeedClients = undefined;
      this._educational = undefined;
      this._financial = undefined;
      this._mediaSearch = undefined;
      this._news = undefined;
      this._searchEngineCrawlers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiving = value.archiving;
      this._businessAnalytics = value.businessAnalytics;
      this._careerSearch = value.careerSearch;
      this._contentFeedClients = value.contentFeedClients;
      this._educational = value.educational;
      this._financial = value.financial;
      this._mediaSearch = value.mediaSearch;
      this._news = value.news;
      this._searchEngineCrawlers = value.searchEngineCrawlers;
    }
  }

  // archiving - computed: true, optional: true, required: false
  private _archiving?: string; 
  public get archiving() {
    return this.getStringAttribute('archiving');
  }
  public set archiving(value: string) {
    this._archiving = value;
  }
  public resetArchiving() {
    this._archiving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivingInput() {
    return this._archiving;
  }

  // business_analytics - computed: true, optional: true, required: false
  private _businessAnalytics?: string; 
  public get businessAnalytics() {
    return this.getStringAttribute('business_analytics');
  }
  public set businessAnalytics(value: string) {
    this._businessAnalytics = value;
  }
  public resetBusinessAnalytics() {
    this._businessAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAnalyticsInput() {
    return this._businessAnalytics;
  }

  // career_search - computed: true, optional: true, required: false
  private _careerSearch?: string; 
  public get careerSearch() {
    return this.getStringAttribute('career_search');
  }
  public set careerSearch(value: string) {
    this._careerSearch = value;
  }
  public resetCareerSearch() {
    this._careerSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get careerSearchInput() {
    return this._careerSearch;
  }

  // content_feed_clients - computed: true, optional: true, required: false
  private _contentFeedClients?: string; 
  public get contentFeedClients() {
    return this.getStringAttribute('content_feed_clients');
  }
  public set contentFeedClients(value: string) {
    this._contentFeedClients = value;
  }
  public resetContentFeedClients() {
    this._contentFeedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFeedClientsInput() {
    return this._contentFeedClients;
  }

  // educational - computed: true, optional: true, required: false
  private _educational?: string; 
  public get educational() {
    return this.getStringAttribute('educational');
  }
  public set educational(value: string) {
    this._educational = value;
  }
  public resetEducational() {
    this._educational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get educationalInput() {
    return this._educational;
  }

  // financial - computed: true, optional: true, required: false
  private _financial?: string; 
  public get financial() {
    return this.getStringAttribute('financial');
  }
  public set financial(value: string) {
    this._financial = value;
  }
  public resetFinancial() {
    this._financial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialInput() {
    return this._financial;
  }

  // media_search - computed: true, optional: true, required: false
  private _mediaSearch?: string; 
  public get mediaSearch() {
    return this.getStringAttribute('media_search');
  }
  public set mediaSearch(value: string) {
    this._mediaSearch = value;
  }
  public resetMediaSearch() {
    this._mediaSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSearchInput() {
    return this._mediaSearch;
  }

  // news - computed: true, optional: true, required: false
  private _news?: string; 
  public get news() {
    return this.getStringAttribute('news');
  }
  public set news(value: string) {
    this._news = value;
  }
  public resetNews() {
    this._news = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newsInput() {
    return this._news;
  }

  // search_engine_crawlers - computed: true, optional: true, required: false
  private _searchEngineCrawlers?: string; 
  public get searchEngineCrawlers() {
    return this.getStringAttribute('search_engine_crawlers');
  }
  public set searchEngineCrawlers(value: string) {
    this._searchEngineCrawlers = value;
  }
  public resetSearchEngineCrawlers() {
    this._searchEngineCrawlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineCrawlersInput() {
    return this._searchEngineCrawlers;
  }
}
export interface ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey {
  /**
  * Encrypted value for the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#encrypted ApplicationSpec#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#plain ApplicationSpec#plain}
  */
  readonly plain?: string;
}

export function applicationSpecBotProtectionSpecReCaptchaSpecSecretKeyToTerraform(struct?: ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function applicationSpecBotProtectionSpecReCaptchaSpecSecretKeyToHclTerraform(struct?: ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._plain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface ApplicationSpecBotProtectionSpecReCaptchaSpec {
  /**
  * Indicates if the reCAPTCHA page is served at the start of every new session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#all_sessions ApplicationSpec#all_sessions}
  */
  readonly allSessions: boolean | cdktf.IResolvable;
  /**
  * Indicates if reCAPTCHA integration is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Secret contains the plain and encrypted version of a value (the plain version is never stored in the DB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#secret_key ApplicationSpec#secret_key}
  */
  readonly secretKey: ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey;
  /**
  * site key to use when invoking the reCAPTCHA service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#site_key ApplicationSpec#site_key}
  */
  readonly siteKey: string;
  /**
  * Duration for which the indication of reCAPTCHA success is kept. Maximum value is 30 days * 24 = 720 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#success_expiration_hours ApplicationSpec#success_expiration_hours}
  */
  readonly successExpirationHours: number;
  /**
  * indicates whether the ReCaptcha is presented as a checkbox or is invisible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#type ApplicationSpec#type}
  */
  readonly type: string;
}

export function applicationSpecBotProtectionSpecReCaptchaSpecToTerraform(struct?: ApplicationSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_sessions: cdktf.booleanToTerraform(struct!.allSessions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    secret_key: applicationSpecBotProtectionSpecReCaptchaSpecSecretKeyToTerraform(struct!.secretKey),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
    success_expiration_hours: cdktf.numberToTerraform(struct!.successExpirationHours),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationSpecBotProtectionSpecReCaptchaSpecToHclTerraform(struct?: ApplicationSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_sessions: {
      value: cdktf.booleanToHclTerraform(struct!.allSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_key: {
      value: applicationSpecBotProtectionSpecReCaptchaSpecSecretKeyToHclTerraform(struct!.secretKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_expiration_hours: {
      value: cdktf.numberToHclTerraform(struct!.successExpirationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecReCaptchaSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSessions = this._allSessions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._secretKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey?.internalValue;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    if (this._successExpirationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.successExpirationHours = this._successExpirationHours;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allSessions = undefined;
      this._enabled = undefined;
      this._secretKey.internalValue = undefined;
      this._siteKey = undefined;
      this._successExpirationHours = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allSessions = value.allSessions;
      this._enabled = value.enabled;
      this._secretKey.internalValue = value.secretKey;
      this._siteKey = value.siteKey;
      this._successExpirationHours = value.successExpirationHours;
      this._type = value.type;
    }
  }

  // all_sessions - computed: false, optional: false, required: true
  private _allSessions?: boolean | cdktf.IResolvable; 
  public get allSessions() {
    return this.getBooleanAttribute('all_sessions');
  }
  public set allSessions(value: boolean | cdktf.IResolvable) {
    this._allSessions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allSessionsInput() {
    return this._allSessions;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey = new ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKeyOutputReference(this, "secret_key");
  public get secretKey() {
    return this._secretKey;
  }
  public putSecretKey(value: ApplicationSpecBotProtectionSpecReCaptchaSpecSecretKey) {
    this._secretKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey.internalValue;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }

  // success_expiration_hours - computed: false, optional: false, required: true
  private _successExpirationHours?: number; 
  public get successExpirationHours() {
    return this.getNumberAttribute('success_expiration_hours');
  }
  public set successExpirationHours(value: number) {
    this._successExpirationHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successExpirationHoursInput() {
    return this._successExpirationHours;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Threshold is the score threshold for which request anomaly violation is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#threshold ApplicationSpec#threshold}
  */
  readonly threshold?: number;
}

export function applicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToTerraform(struct?: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function applicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToHclTerraform(struct?: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._threshold = value.threshold;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#api_libraries ApplicationSpec#api_libraries}
  */
  readonly apiLibraries?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#bot_impersonation ApplicationSpec#bot_impersonation}
  */
  readonly botImpersonation?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#browser_impersonation ApplicationSpec#browser_impersonation}
  */
  readonly browserImpersonation?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#generic ApplicationSpec#generic}
  */
  readonly generic?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#http_libraries ApplicationSpec#http_libraries}
  */
  readonly httpLibraries?: string;
  /**
  * RequestAnomalies is the request anomalies configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#request_anomalies ApplicationSpec#request_anomalies}
  */
  readonly requestAnomalies: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#web_automation_tools ApplicationSpec#web_automation_tools}
  */
  readonly webAutomationTools?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#web_scrapers ApplicationSpec#web_scrapers}
  */
  readonly webScrapers?: string;
}

export function applicationSpecBotProtectionSpecUnknownBotProtectionSpecToTerraform(struct?: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_libraries: cdktf.stringToTerraform(struct!.apiLibraries),
    bot_impersonation: cdktf.stringToTerraform(struct!.botImpersonation),
    browser_impersonation: cdktf.stringToTerraform(struct!.browserImpersonation),
    generic: cdktf.stringToTerraform(struct!.generic),
    http_libraries: cdktf.stringToTerraform(struct!.httpLibraries),
    request_anomalies: applicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToTerraform(struct!.requestAnomalies),
    web_automation_tools: cdktf.stringToTerraform(struct!.webAutomationTools),
    web_scrapers: cdktf.stringToTerraform(struct!.webScrapers),
  }
}


export function applicationSpecBotProtectionSpecUnknownBotProtectionSpecToHclTerraform(struct?: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_libraries: {
      value: cdktf.stringToHclTerraform(struct!.apiLibraries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bot_impersonation: {
      value: cdktf.stringToHclTerraform(struct!.botImpersonation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_impersonation: {
      value: cdktf.stringToHclTerraform(struct!.browserImpersonation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic: {
      value: cdktf.stringToHclTerraform(struct!.generic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_libraries: {
      value: cdktf.stringToHclTerraform(struct!.httpLibraries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_anomalies: {
      value: applicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToHclTerraform(struct!.requestAnomalies),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies",
    },
    web_automation_tools: {
      value: cdktf.stringToHclTerraform(struct!.webAutomationTools),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_scrapers: {
      value: cdktf.stringToHclTerraform(struct!.webScrapers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiLibraries = this._apiLibraries;
    }
    if (this._botImpersonation !== undefined) {
      hasAnyValues = true;
      internalValueResult.botImpersonation = this._botImpersonation;
    }
    if (this._browserImpersonation !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserImpersonation = this._browserImpersonation;
    }
    if (this._generic !== undefined) {
      hasAnyValues = true;
      internalValueResult.generic = this._generic;
    }
    if (this._httpLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLibraries = this._httpLibraries;
    }
    if (this._requestAnomalies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAnomalies = this._requestAnomalies?.internalValue;
    }
    if (this._webAutomationTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAutomationTools = this._webAutomationTools;
    }
    if (this._webScrapers !== undefined) {
      hasAnyValues = true;
      internalValueResult.webScrapers = this._webScrapers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiLibraries = undefined;
      this._botImpersonation = undefined;
      this._browserImpersonation = undefined;
      this._generic = undefined;
      this._httpLibraries = undefined;
      this._requestAnomalies.internalValue = undefined;
      this._webAutomationTools = undefined;
      this._webScrapers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiLibraries = value.apiLibraries;
      this._botImpersonation = value.botImpersonation;
      this._browserImpersonation = value.browserImpersonation;
      this._generic = value.generic;
      this._httpLibraries = value.httpLibraries;
      this._requestAnomalies.internalValue = value.requestAnomalies;
      this._webAutomationTools = value.webAutomationTools;
      this._webScrapers = value.webScrapers;
    }
  }

  // api_libraries - computed: true, optional: true, required: false
  private _apiLibraries?: string; 
  public get apiLibraries() {
    return this.getStringAttribute('api_libraries');
  }
  public set apiLibraries(value: string) {
    this._apiLibraries = value;
  }
  public resetApiLibraries() {
    this._apiLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiLibrariesInput() {
    return this._apiLibraries;
  }

  // bot_impersonation - computed: true, optional: true, required: false
  private _botImpersonation?: string; 
  public get botImpersonation() {
    return this.getStringAttribute('bot_impersonation');
  }
  public set botImpersonation(value: string) {
    this._botImpersonation = value;
  }
  public resetBotImpersonation() {
    this._botImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botImpersonationInput() {
    return this._botImpersonation;
  }

  // browser_impersonation - computed: true, optional: true, required: false
  private _browserImpersonation?: string; 
  public get browserImpersonation() {
    return this.getStringAttribute('browser_impersonation');
  }
  public set browserImpersonation(value: string) {
    this._browserImpersonation = value;
  }
  public resetBrowserImpersonation() {
    this._browserImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserImpersonationInput() {
    return this._browserImpersonation;
  }

  // generic - computed: true, optional: true, required: false
  private _generic?: string; 
  public get generic() {
    return this.getStringAttribute('generic');
  }
  public set generic(value: string) {
    this._generic = value;
  }
  public resetGeneric() {
    this._generic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic;
  }

  // http_libraries - computed: true, optional: true, required: false
  private _httpLibraries?: string; 
  public get httpLibraries() {
    return this.getStringAttribute('http_libraries');
  }
  public set httpLibraries(value: string) {
    this._httpLibraries = value;
  }
  public resetHttpLibraries() {
    this._httpLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLibrariesInput() {
    return this._httpLibraries;
  }

  // request_anomalies - computed: false, optional: false, required: true
  private _requestAnomalies = new ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesOutputReference(this, "request_anomalies");
  public get requestAnomalies() {
    return this._requestAnomalies;
  }
  public putRequestAnomalies(value: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies) {
    this._requestAnomalies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAnomaliesInput() {
    return this._requestAnomalies.internalValue;
  }

  // web_automation_tools - computed: true, optional: true, required: false
  private _webAutomationTools?: string; 
  public get webAutomationTools() {
    return this.getStringAttribute('web_automation_tools');
  }
  public set webAutomationTools(value: string) {
    this._webAutomationTools = value;
  }
  public resetWebAutomationTools() {
    this._webAutomationTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAutomationToolsInput() {
    return this._webAutomationTools;
  }

  // web_scrapers - computed: true, optional: true, required: false
  private _webScrapers?: string; 
  public get webScrapers() {
    return this.getStringAttribute('web_scrapers');
  }
  public set webScrapers(value: string) {
    this._webScrapers = value;
  }
  public resetWebScrapers() {
    this._webScrapers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webScrapersInput() {
    return this._webScrapers;
  }
}
export interface ApplicationSpecBotProtectionSpecUserDefinedBots {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Header name which defines the bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#header_name ApplicationSpec#header_name}
  */
  readonly headerName: string;
  /**
  * Header values corresponding to the header name. Can contain wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#header_values ApplicationSpec#header_values}
  */
  readonly headerValues: string[];
  /**
  * name for the bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#name ApplicationSpec#name}
  */
  readonly name: string;
  /**
  * Subnets where the bot originates. Specify using network lists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#subnets ApplicationSpec#subnets}
  */
  readonly subnets: string[];
}

export function applicationSpecBotProtectionSpecUserDefinedBotsToTerraform(struct?: ApplicationSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerValues),
    name: cdktf.stringToTerraform(struct!.name),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function applicationSpecBotProtectionSpecUserDefinedBotsToHclTerraform(struct?: ApplicationSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerValues),
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
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecUserDefinedBotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValues = this._headerValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._headerName = undefined;
      this._headerValues = undefined;
      this._name = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._headerName = value.headerName;
      this._headerValues = value.headerValues;
      this._name = value.name;
      this._subnets = value.subnets;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_values - computed: false, optional: false, required: true
  private _headerValues?: string[]; 
  public get headerValues() {
    return this.getListAttribute('header_values');
  }
  public set headerValues(value: string[]) {
    this._headerValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValuesInput() {
    return this._headerValues;
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

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class ApplicationSpecBotProtectionSpecUserDefinedBotsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecBotProtectionSpecUserDefinedBots[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecBotProtectionSpecUserDefinedBotsOutputReference {
    return new ApplicationSpecBotProtectionSpecUserDefinedBotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecBotProtectionSpec {
  /**
  * Indicates whether an interstitial page is served
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#interstitial_page ApplicationSpec#interstitial_page}
  */
  readonly interstitialPage?: boolean | cdktf.IResolvable;
  /**
  * JSInjectionSpec is the JavaScript injection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#js_injection_spec ApplicationSpec#js_injection_spec}
  */
  readonly jsInjectionSpec: ApplicationSpecBotProtectionSpecJsInjectionSpec;
  /**
  * KnownBotProtectionsSpec is the known bot protections configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#known_bot_protections_spec ApplicationSpec#known_bot_protections_spec}
  */
  readonly knownBotProtectionsSpec: ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec;
  /**
  * ReCAPTCHASpec is the reCAPTCHA configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#re_captcha_spec ApplicationSpec#re_captcha_spec}
  */
  readonly reCaptchaSpec: ApplicationSpecBotProtectionSpecReCaptchaSpec;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#session_validation ApplicationSpec#session_validation}
  */
  readonly sessionValidation?: string;
  /**
  * UnknownBotProtectionSpec is the unknown bot protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#unknown_bot_protection_spec ApplicationSpec#unknown_bot_protection_spec}
  */
  readonly unknownBotProtectionSpec: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec;
  /**
  * UnknownBotProtectionSpec is the unknown bot protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#user_defined_bots ApplicationSpec#user_defined_bots}
  */
  readonly userDefinedBots: ApplicationSpecBotProtectionSpecUserDefinedBots[] | cdktf.IResolvable;
}

export function applicationSpecBotProtectionSpecToTerraform(struct?: ApplicationSpecBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interstitial_page: cdktf.booleanToTerraform(struct!.interstitialPage),
    js_injection_spec: applicationSpecBotProtectionSpecJsInjectionSpecToTerraform(struct!.jsInjectionSpec),
    known_bot_protections_spec: applicationSpecBotProtectionSpecKnownBotProtectionsSpecToTerraform(struct!.knownBotProtectionsSpec),
    re_captcha_spec: applicationSpecBotProtectionSpecReCaptchaSpecToTerraform(struct!.reCaptchaSpec),
    session_validation: cdktf.stringToTerraform(struct!.sessionValidation),
    unknown_bot_protection_spec: applicationSpecBotProtectionSpecUnknownBotProtectionSpecToTerraform(struct!.unknownBotProtectionSpec),
    user_defined_bots: cdktf.listMapper(applicationSpecBotProtectionSpecUserDefinedBotsToTerraform, false)(struct!.userDefinedBots),
  }
}


export function applicationSpecBotProtectionSpecToHclTerraform(struct?: ApplicationSpecBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interstitial_page: {
      value: cdktf.booleanToHclTerraform(struct!.interstitialPage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_injection_spec: {
      value: applicationSpecBotProtectionSpecJsInjectionSpecToHclTerraform(struct!.jsInjectionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecBotProtectionSpecJsInjectionSpec",
    },
    known_bot_protections_spec: {
      value: applicationSpecBotProtectionSpecKnownBotProtectionsSpecToHclTerraform(struct!.knownBotProtectionsSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec",
    },
    re_captcha_spec: {
      value: applicationSpecBotProtectionSpecReCaptchaSpecToHclTerraform(struct!.reCaptchaSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecBotProtectionSpecReCaptchaSpec",
    },
    session_validation: {
      value: cdktf.stringToHclTerraform(struct!.sessionValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_bot_protection_spec: {
      value: applicationSpecBotProtectionSpecUnknownBotProtectionSpecToHclTerraform(struct!.unknownBotProtectionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec",
    },
    user_defined_bots: {
      value: cdktf.listMapperHcl(applicationSpecBotProtectionSpecUserDefinedBotsToHclTerraform, false)(struct!.userDefinedBots),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecBotProtectionSpecUserDefinedBotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecBotProtectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecBotProtectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interstitialPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.interstitialPage = this._interstitialPage;
    }
    if (this._jsInjectionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInjectionSpec = this._jsInjectionSpec?.internalValue;
    }
    if (this._knownBotProtectionsSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownBotProtectionsSpec = this._knownBotProtectionsSpec?.internalValue;
    }
    if (this._reCaptchaSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reCaptchaSpec = this._reCaptchaSpec?.internalValue;
    }
    if (this._sessionValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionValidation = this._sessionValidation;
    }
    if (this._unknownBotProtectionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownBotProtectionSpec = this._unknownBotProtectionSpec?.internalValue;
    }
    if (this._userDefinedBots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedBots = this._userDefinedBots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecBotProtectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interstitialPage = undefined;
      this._jsInjectionSpec.internalValue = undefined;
      this._knownBotProtectionsSpec.internalValue = undefined;
      this._reCaptchaSpec.internalValue = undefined;
      this._sessionValidation = undefined;
      this._unknownBotProtectionSpec.internalValue = undefined;
      this._userDefinedBots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interstitialPage = value.interstitialPage;
      this._jsInjectionSpec.internalValue = value.jsInjectionSpec;
      this._knownBotProtectionsSpec.internalValue = value.knownBotProtectionsSpec;
      this._reCaptchaSpec.internalValue = value.reCaptchaSpec;
      this._sessionValidation = value.sessionValidation;
      this._unknownBotProtectionSpec.internalValue = value.unknownBotProtectionSpec;
      this._userDefinedBots.internalValue = value.userDefinedBots;
    }
  }

  // interstitial_page - computed: true, optional: true, required: false
  private _interstitialPage?: boolean | cdktf.IResolvable; 
  public get interstitialPage() {
    return this.getBooleanAttribute('interstitial_page');
  }
  public set interstitialPage(value: boolean | cdktf.IResolvable) {
    this._interstitialPage = value;
  }
  public resetInterstitialPage() {
    this._interstitialPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interstitialPageInput() {
    return this._interstitialPage;
  }

  // js_injection_spec - computed: false, optional: false, required: true
  private _jsInjectionSpec = new ApplicationSpecBotProtectionSpecJsInjectionSpecOutputReference(this, "js_injection_spec");
  public get jsInjectionSpec() {
    return this._jsInjectionSpec;
  }
  public putJsInjectionSpec(value: ApplicationSpecBotProtectionSpecJsInjectionSpec) {
    this._jsInjectionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInjectionSpecInput() {
    return this._jsInjectionSpec.internalValue;
  }

  // known_bot_protections_spec - computed: false, optional: false, required: true
  private _knownBotProtectionsSpec = new ApplicationSpecBotProtectionSpecKnownBotProtectionsSpecOutputReference(this, "known_bot_protections_spec");
  public get knownBotProtectionsSpec() {
    return this._knownBotProtectionsSpec;
  }
  public putKnownBotProtectionsSpec(value: ApplicationSpecBotProtectionSpecKnownBotProtectionsSpec) {
    this._knownBotProtectionsSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knownBotProtectionsSpecInput() {
    return this._knownBotProtectionsSpec.internalValue;
  }

  // re_captcha_spec - computed: false, optional: false, required: true
  private _reCaptchaSpec = new ApplicationSpecBotProtectionSpecReCaptchaSpecOutputReference(this, "re_captcha_spec");
  public get reCaptchaSpec() {
    return this._reCaptchaSpec;
  }
  public putReCaptchaSpec(value: ApplicationSpecBotProtectionSpecReCaptchaSpec) {
    this._reCaptchaSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reCaptchaSpecInput() {
    return this._reCaptchaSpec.internalValue;
  }

  // session_validation - computed: true, optional: true, required: false
  private _sessionValidation?: string; 
  public get sessionValidation() {
    return this.getStringAttribute('session_validation');
  }
  public set sessionValidation(value: string) {
    this._sessionValidation = value;
  }
  public resetSessionValidation() {
    this._sessionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionValidationInput() {
    return this._sessionValidation;
  }

  // unknown_bot_protection_spec - computed: false, optional: false, required: true
  private _unknownBotProtectionSpec = new ApplicationSpecBotProtectionSpecUnknownBotProtectionSpecOutputReference(this, "unknown_bot_protection_spec");
  public get unknownBotProtectionSpec() {
    return this._unknownBotProtectionSpec;
  }
  public putUnknownBotProtectionSpec(value: ApplicationSpecBotProtectionSpecUnknownBotProtectionSpec) {
    this._unknownBotProtectionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownBotProtectionSpecInput() {
    return this._unknownBotProtectionSpec.internalValue;
  }

  // user_defined_bots - computed: false, optional: false, required: true
  private _userDefinedBots = new ApplicationSpecBotProtectionSpecUserDefinedBotsList(this, "user_defined_bots", false);
  public get userDefinedBots() {
    return this._userDefinedBots;
  }
  public putUserDefinedBots(value: ApplicationSpecBotProtectionSpecUserDefinedBots[] | cdktf.IResolvable) {
    this._userDefinedBots.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedBotsInput() {
    return this._userDefinedBots.internalValue;
  }
}
export interface ApplicationSpecCertificate {
  /**
  * Encrypted value for the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#encrypted ApplicationSpec#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#plain ApplicationSpec#plain}
  */
  readonly plain?: string;
}

export function applicationSpecCertificateToTerraform(struct?: ApplicationSpecCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function applicationSpecCertificateToHclTerraform(struct?: ApplicationSpecCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._plain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface ApplicationSpecCmdiExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecCmdiExceptionFieldsToTerraform(struct?: ApplicationSpecCmdiExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecCmdiExceptionFieldsToHclTerraform(struct?: ApplicationSpecCmdiExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecCmdiExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecCmdiExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCmdiExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecCmdiExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecCmdiExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecCmdiExceptionFieldsOutputReference {
    return new ApplicationSpecCmdiExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecCmdi {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecCmdiExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecCmdiToTerraform(struct?: ApplicationSpecCmdi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecCmdiExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecCmdiToHclTerraform(struct?: ApplicationSpecCmdi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecCmdiExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecCmdiExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecCmdiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecCmdi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCmdi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecCmdiExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecCmdiExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecCodeInjectionExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecCodeInjectionExceptionFieldsToTerraform(struct?: ApplicationSpecCodeInjectionExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecCodeInjectionExceptionFieldsToHclTerraform(struct?: ApplicationSpecCodeInjectionExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecCodeInjectionExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecCodeInjectionExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCodeInjectionExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecCodeInjectionExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecCodeInjectionExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecCodeInjectionExceptionFieldsOutputReference {
    return new ApplicationSpecCodeInjectionExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecCodeInjection {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecCodeInjectionExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecCodeInjectionToTerraform(struct?: ApplicationSpecCodeInjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecCodeInjectionExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecCodeInjectionToHclTerraform(struct?: ApplicationSpecCodeInjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecCodeInjectionExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecCodeInjectionExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecCodeInjectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecCodeInjection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCodeInjection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecCodeInjectionExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecCodeInjectionExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecCustomBlockResponseConfig {
  /**
  * Custom HTML for the block response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#body ApplicationSpec#body}
  */
  readonly body: string;
  /**
  * Custom HTTP response code for the block response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#code ApplicationSpec#code}
  */
  readonly code: number;
  /**
  * Indicates if the custom block response is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function applicationSpecCustomBlockResponseConfigToTerraform(struct?: ApplicationSpecCustomBlockResponseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function applicationSpecCustomBlockResponseConfigToHclTerraform(struct?: ApplicationSpecCustomBlockResponseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class ApplicationSpecCustomBlockResponseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecCustomBlockResponseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCustomBlockResponseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._enabled = value.enabled;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ApplicationSpecCustomRules {
  /**
  * Action to perform if the custom rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#action ApplicationSpec#action}
  */
  readonly action: string;
  /**
  * Effect is the effect applied when a Custom Rule is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Custom rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#id ApplicationSpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function applicationSpecCustomRulesToTerraform(struct?: ApplicationSpecCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function applicationSpecCustomRulesToHclTerraform(struct?: ApplicationSpecCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecCustomRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecCustomRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._effect = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._effect = value.effect;
      this._id = value.id;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationSpecCustomRulesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecCustomRules[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecCustomRulesOutputReference {
    return new ApplicationSpecCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecDosConfigAlertRates {
  /**
  * Average request rate (requests / second) over 120 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#average ApplicationSpec#average}
  */
  readonly average?: number;
  /**
  * Burst request rate (requests / second) over 5 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#burst ApplicationSpec#burst}
  */
  readonly burst?: number;
}

export function applicationSpecDosConfigAlertRatesToTerraform(struct?: ApplicationSpecDosConfigAlertRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
  }
}


export function applicationSpecDosConfigAlertRatesToHclTerraform(struct?: ApplicationSpecDosConfigAlertRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecDosConfigAlertRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecDosConfigAlertRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecDosConfigAlertRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }
}
export interface ApplicationSpecDosConfigBanRates {
  /**
  * Average request rate (requests / second) over 120 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#average ApplicationSpec#average}
  */
  readonly average?: number;
  /**
  * Burst request rate (requests / second) over 5 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#burst ApplicationSpec#burst}
  */
  readonly burst?: number;
}

export function applicationSpecDosConfigBanRatesToTerraform(struct?: ApplicationSpecDosConfigBanRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
  }
}


export function applicationSpecDosConfigBanRatesToHclTerraform(struct?: ApplicationSpecDosConfigBanRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecDosConfigBanRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecDosConfigBanRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecDosConfigBanRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }
}
export interface ApplicationSpecDosConfigMatchConditionsResponseCodeRanges {
  /**
  * End of the range. Can be omitted if using a single status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#end ApplicationSpec#end}
  */
  readonly end?: number;
  /**
  * Start of the range. Can also be used alone for a single, non-range value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#start ApplicationSpec#start}
  */
  readonly start: number;
}

export function applicationSpecDosConfigMatchConditionsResponseCodeRangesToTerraform(struct?: ApplicationSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function applicationSpecDosConfigMatchConditionsResponseCodeRangesToHclTerraform(struct?: ApplicationSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecDosConfigMatchConditionsResponseCodeRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class ApplicationSpecDosConfigMatchConditionsResponseCodeRangesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecDosConfigMatchConditionsResponseCodeRanges[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecDosConfigMatchConditionsResponseCodeRangesOutputReference {
    return new ApplicationSpecDosConfigMatchConditionsResponseCodeRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecDosConfigMatchConditions {
  /**
  * File types for request matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#file_types ApplicationSpec#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * HTTP methods for request matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#methods ApplicationSpec#methods}
  */
  readonly methods?: string[];
  /**
  * A range of HTTP status codes for response matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#response_code_ranges ApplicationSpec#response_code_ranges}
  */
  readonly responseCodeRanges?: ApplicationSpecDosConfigMatchConditionsResponseCodeRanges[] | cdktf.IResolvable;
}

export function applicationSpecDosConfigMatchConditionsToTerraform(struct?: ApplicationSpecDosConfigMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileTypes),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    response_code_ranges: cdktf.listMapper(applicationSpecDosConfigMatchConditionsResponseCodeRangesToTerraform, false)(struct!.responseCodeRanges),
  }
}


export function applicationSpecDosConfigMatchConditionsToHclTerraform(struct?: ApplicationSpecDosConfigMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_code_ranges: {
      value: cdktf.listMapperHcl(applicationSpecDosConfigMatchConditionsResponseCodeRangesToHclTerraform, false)(struct!.responseCodeRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecDosConfigMatchConditionsResponseCodeRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecDosConfigMatchConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecDosConfigMatchConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._responseCodeRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeRanges = this._responseCodeRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecDosConfigMatchConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileTypes = undefined;
      this._methods = undefined;
      this._responseCodeRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileTypes = value.fileTypes;
      this._methods = value.methods;
      this._responseCodeRanges.internalValue = value.responseCodeRanges;
    }
  }

  // file_types - computed: false, optional: true, required: false
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return this.getListAttribute('file_types');
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  public resetFileTypes() {
    this._fileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // response_code_ranges - computed: false, optional: true, required: false
  private _responseCodeRanges = new ApplicationSpecDosConfigMatchConditionsResponseCodeRangesList(this, "response_code_ranges", false);
  public get responseCodeRanges() {
    return this._responseCodeRanges;
  }
  public putResponseCodeRanges(value: ApplicationSpecDosConfigMatchConditionsResponseCodeRanges[] | cdktf.IResolvable) {
    this._responseCodeRanges.internalValue = value;
  }
  public resetResponseCodeRanges() {
    this._responseCodeRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRangesInput() {
    return this._responseCodeRanges.internalValue;
  }
}

export class ApplicationSpecDosConfigMatchConditionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecDosConfigMatchConditions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecDosConfigMatchConditionsOutputReference {
    return new ApplicationSpecDosConfigMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecDosConfig {
  /**
  * specifies DoS requests rates (thresholds) at which to alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#alert_rates ApplicationSpec#alert_rates}
  */
  readonly alertRates: ApplicationSpecDosConfigAlertRates;
  /**
  * specifies DoS requests rates (thresholds) at which to ban
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#ban_rates ApplicationSpec#ban_rates}
  */
  readonly banRates: ApplicationSpecDosConfigBanRates;
  /**
  * indicates if DoS protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Network IPs to exclude from DoS tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#excluded_network_lists ApplicationSpec#excluded_network_lists}
  */
  readonly excludedNetworkLists?: string[];
  /**
  * Conditions on which to match to track a request. The conditions are "OR"'d together during the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#match_conditions ApplicationSpec#match_conditions}
  */
  readonly matchConditions?: ApplicationSpecDosConfigMatchConditions[] | cdktf.IResolvable;
  /**
  * Indicates if the custom session ID generated during bot protection flow is tracked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#track_session ApplicationSpec#track_session}
  */
  readonly trackSession?: boolean | cdktf.IResolvable;
}

export function applicationSpecDosConfigToTerraform(struct?: ApplicationSpecDosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_rates: applicationSpecDosConfigAlertRatesToTerraform(struct!.alertRates),
    ban_rates: applicationSpecDosConfigBanRatesToTerraform(struct!.banRates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_network_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNetworkLists),
    match_conditions: cdktf.listMapper(applicationSpecDosConfigMatchConditionsToTerraform, false)(struct!.matchConditions),
    track_session: cdktf.booleanToTerraform(struct!.trackSession),
  }
}


export function applicationSpecDosConfigToHclTerraform(struct?: ApplicationSpecDosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_rates: {
      value: applicationSpecDosConfigAlertRatesToHclTerraform(struct!.alertRates),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecDosConfigAlertRates",
    },
    ban_rates: {
      value: applicationSpecDosConfigBanRatesToHclTerraform(struct!.banRates),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecDosConfigBanRates",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_network_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNetworkLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_conditions: {
      value: cdktf.listMapperHcl(applicationSpecDosConfigMatchConditionsToHclTerraform, false)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecDosConfigMatchConditionsList",
    },
    track_session: {
      value: cdktf.booleanToHclTerraform(struct!.trackSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecDosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecDosConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRates = this._alertRates?.internalValue;
    }
    if (this._banRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.banRates = this._banRates?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludedNetworkLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNetworkLists = this._excludedNetworkLists;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    if (this._trackSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackSession = this._trackSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecDosConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertRates.internalValue = undefined;
      this._banRates.internalValue = undefined;
      this._enabled = undefined;
      this._excludedNetworkLists = undefined;
      this._matchConditions.internalValue = undefined;
      this._trackSession = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertRates.internalValue = value.alertRates;
      this._banRates.internalValue = value.banRates;
      this._enabled = value.enabled;
      this._excludedNetworkLists = value.excludedNetworkLists;
      this._matchConditions.internalValue = value.matchConditions;
      this._trackSession = value.trackSession;
    }
  }

  // alert_rates - computed: false, optional: false, required: true
  private _alertRates = new ApplicationSpecDosConfigAlertRatesOutputReference(this, "alert_rates");
  public get alertRates() {
    return this._alertRates;
  }
  public putAlertRates(value: ApplicationSpecDosConfigAlertRates) {
    this._alertRates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRatesInput() {
    return this._alertRates.internalValue;
  }

  // ban_rates - computed: false, optional: false, required: true
  private _banRates = new ApplicationSpecDosConfigBanRatesOutputReference(this, "ban_rates");
  public get banRates() {
    return this._banRates;
  }
  public putBanRates(value: ApplicationSpecDosConfigBanRates) {
    this._banRates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get banRatesInput() {
    return this._banRates.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // excluded_network_lists - computed: false, optional: true, required: false
  private _excludedNetworkLists?: string[]; 
  public get excludedNetworkLists() {
    return this.getListAttribute('excluded_network_lists');
  }
  public set excludedNetworkLists(value: string[]) {
    this._excludedNetworkLists = value;
  }
  public resetExcludedNetworkLists() {
    this._excludedNetworkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNetworkListsInput() {
    return this._excludedNetworkLists;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new ApplicationSpecDosConfigMatchConditionsList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: ApplicationSpecDosConfigMatchConditions[] | cdktf.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }

  // track_session - computed: false, optional: true, required: false
  private _trackSession?: boolean | cdktf.IResolvable; 
  public get trackSession() {
    return this.getBooleanAttribute('track_session');
  }
  public set trackSession(value: boolean | cdktf.IResolvable) {
    this._trackSession = value;
  }
  public resetTrackSession() {
    this._trackSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackSessionInput() {
    return this._trackSession;
  }
}
export interface ApplicationSpecHeaderSpecs {
  /**
  * Indicates if the flow is to be allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allow ApplicationSpec#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * For allow flows, effect determines action for non-matching requests. For non-allow flows, effect determines type of action for matching requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Name of key in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#name ApplicationSpec#name}
  */
  readonly name: string;
  /**
  * Indicates if the header must be present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#required ApplicationSpec#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Wildcard expressions that represent the header value to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#values ApplicationSpec#values}
  */
  readonly values: string[];
}

export function applicationSpecHeaderSpecsToTerraform(struct?: ApplicationSpecHeaderSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    effect: cdktf.stringToTerraform(struct!.effect),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function applicationSpecHeaderSpecsToHclTerraform(struct?: ApplicationSpecHeaderSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ApplicationSpecHeaderSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecHeaderSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecHeaderSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._effect = undefined;
      this._name = undefined;
      this._required = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._effect = value.effect;
      this._name = value.name;
      this._required = value.required;
      this._values = value.values;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApplicationSpecHeaderSpecsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecHeaderSpecs[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecHeaderSpecsOutputReference {
    return new ApplicationSpecHeaderSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecIntelGathering {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#info_leakage_effect ApplicationSpec#info_leakage_effect}
  */
  readonly infoLeakageEffect?: string;
  /**
  * Indicates if server fingerprints should be removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#remove_fingerprints_enabled ApplicationSpec#remove_fingerprints_enabled}
  */
  readonly removeFingerprintsEnabled: boolean | cdktf.IResolvable;
}

export function applicationSpecIntelGatheringToTerraform(struct?: ApplicationSpecIntelGathering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_leakage_effect: cdktf.stringToTerraform(struct!.infoLeakageEffect),
    remove_fingerprints_enabled: cdktf.booleanToTerraform(struct!.removeFingerprintsEnabled),
  }
}


export function applicationSpecIntelGatheringToHclTerraform(struct?: ApplicationSpecIntelGathering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_leakage_effect: {
      value: cdktf.stringToHclTerraform(struct!.infoLeakageEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_fingerprints_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.removeFingerprintsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecIntelGatheringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecIntelGathering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoLeakageEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoLeakageEffect = this._infoLeakageEffect;
    }
    if (this._removeFingerprintsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFingerprintsEnabled = this._removeFingerprintsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecIntelGathering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoLeakageEffect = undefined;
      this._removeFingerprintsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoLeakageEffect = value.infoLeakageEffect;
      this._removeFingerprintsEnabled = value.removeFingerprintsEnabled;
    }
  }

  // info_leakage_effect - computed: true, optional: true, required: false
  private _infoLeakageEffect?: string; 
  public get infoLeakageEffect() {
    return this.getStringAttribute('info_leakage_effect');
  }
  public set infoLeakageEffect(value: string) {
    this._infoLeakageEffect = value;
  }
  public resetInfoLeakageEffect() {
    this._infoLeakageEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoLeakageEffectInput() {
    return this._infoLeakageEffect;
  }

  // remove_fingerprints_enabled - computed: false, optional: false, required: true
  private _removeFingerprintsEnabled?: boolean | cdktf.IResolvable; 
  public get removeFingerprintsEnabled() {
    return this.getBooleanAttribute('remove_fingerprints_enabled');
  }
  public set removeFingerprintsEnabled(value: boolean | cdktf.IResolvable) {
    this._removeFingerprintsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFingerprintsEnabledInput() {
    return this._removeFingerprintsEnabled;
  }
}
export interface ApplicationSpecLfiExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecLfiExceptionFieldsToTerraform(struct?: ApplicationSpecLfiExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecLfiExceptionFieldsToHclTerraform(struct?: ApplicationSpecLfiExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecLfiExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecLfiExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecLfiExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecLfiExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecLfiExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecLfiExceptionFieldsOutputReference {
    return new ApplicationSpecLfiExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecLfi {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecLfiExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecLfiToTerraform(struct?: ApplicationSpecLfi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecLfiExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecLfiToHclTerraform(struct?: ApplicationSpecLfi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecLfiExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecLfiExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecLfiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecLfi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecLfi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecLfiExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecLfiExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecMalformedReqExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecMalformedReqExceptionFieldsToTerraform(struct?: ApplicationSpecMalformedReqExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecMalformedReqExceptionFieldsToHclTerraform(struct?: ApplicationSpecMalformedReqExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecMalformedReqExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecMalformedReqExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecMalformedReqExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecMalformedReqExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecMalformedReqExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecMalformedReqExceptionFieldsOutputReference {
    return new ApplicationSpecMalformedReqExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecMalformedReq {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecMalformedReqExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecMalformedReqToTerraform(struct?: ApplicationSpecMalformedReq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecMalformedReqExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecMalformedReqToHclTerraform(struct?: ApplicationSpecMalformedReq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecMalformedReqExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecMalformedReqExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecMalformedReqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecMalformedReq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecMalformedReq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecMalformedReqExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecMalformedReqExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecMaliciousUpload {
  /**
  * Allowed file extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allowed_extensions ApplicationSpec#allowed_extensions}
  */
  readonly allowedExtensions: string[];
  /**
  * Allowed well-known file types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allowed_file_types ApplicationSpec#allowed_file_types}
  */
  readonly allowedFileTypes: string[];
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
}

export function applicationSpecMaliciousUploadToTerraform(struct?: ApplicationSpecMaliciousUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedExtensions),
    allowed_file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFileTypes),
    effect: cdktf.stringToTerraform(struct!.effect),
  }
}


export function applicationSpecMaliciousUploadToHclTerraform(struct?: ApplicationSpecMaliciousUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecMaliciousUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecMaliciousUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExtensions = this._allowedExtensions;
    }
    if (this._allowedFileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFileTypes = this._allowedFileTypes;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecMaliciousUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedExtensions = undefined;
      this._allowedFileTypes = undefined;
      this._effect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedExtensions = value.allowedExtensions;
      this._allowedFileTypes = value.allowedFileTypes;
      this._effect = value.effect;
    }
  }

  // allowed_extensions - computed: false, optional: false, required: true
  private _allowedExtensions?: string[]; 
  public get allowedExtensions() {
    return this.getListAttribute('allowed_extensions');
  }
  public set allowedExtensions(value: string[]) {
    this._allowedExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExtensionsInput() {
    return this._allowedExtensions;
  }

  // allowed_file_types - computed: false, optional: false, required: true
  private _allowedFileTypes?: string[]; 
  public get allowedFileTypes() {
    return this.getListAttribute('allowed_file_types');
  }
  public set allowedFileTypes(value: string[]) {
    this._allowedFileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFileTypesInput() {
    return this._allowedFileTypes;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }
}
export interface ApplicationSpecNetworkControlsCountries {
  /**
  * Alert lists the denied sources for which alerts are generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#alert ApplicationSpec#alert}
  */
  readonly alert?: string[];
  /**
  * Allow lists the allowed sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allow ApplicationSpec#allow}
  */
  readonly allow?: string[];
  /**
  * AllowMode indicates allowlist (true) or denylist (false) mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allow_mode ApplicationSpec#allow_mode}
  */
  readonly allowMode?: boolean | cdktf.IResolvable;
  /**
  * Enabled indicates if access controls protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#fallback_effect ApplicationSpec#fallback_effect}
  */
  readonly fallbackEffect?: string;
  /**
  * Prevent lists the denied sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#prevent ApplicationSpec#prevent}
  */
  readonly prevent?: string[];
}

export function applicationSpecNetworkControlsCountriesToTerraform(struct?: ApplicationSpecNetworkControlsCountries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    allow_mode: cdktf.booleanToTerraform(struct!.allowMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fallback_effect: cdktf.stringToTerraform(struct!.fallbackEffect),
    prevent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prevent),
  }
}


export function applicationSpecNetworkControlsCountriesToHclTerraform(struct?: ApplicationSpecNetworkControlsCountries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_mode: {
      value: cdktf.booleanToHclTerraform(struct!.allowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.fallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prevent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecNetworkControlsCountriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecNetworkControlsCountries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._allowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMode = this._allowMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackEffect = this._fallbackEffect;
    }
    if (this._prevent !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevent = this._prevent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecNetworkControlsCountries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._allow = undefined;
      this._allowMode = undefined;
      this._enabled = undefined;
      this._fallbackEffect = undefined;
      this._prevent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._allow = value.allow;
      this._allowMode = value.allowMode;
      this._enabled = value.enabled;
      this._fallbackEffect = value.fallbackEffect;
      this._prevent = value.prevent;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // allow_mode - computed: false, optional: true, required: false
  private _allowMode?: boolean | cdktf.IResolvable; 
  public get allowMode() {
    return this.getBooleanAttribute('allow_mode');
  }
  public set allowMode(value: boolean | cdktf.IResolvable) {
    this._allowMode = value;
  }
  public resetAllowMode() {
    this._allowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeInput() {
    return this._allowMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fallback_effect - computed: true, optional: true, required: false
  private _fallbackEffect?: string; 
  public get fallbackEffect() {
    return this.getStringAttribute('fallback_effect');
  }
  public set fallbackEffect(value: string) {
    this._fallbackEffect = value;
  }
  public resetFallbackEffect() {
    this._fallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackEffectInput() {
    return this._fallbackEffect;
  }

  // prevent - computed: false, optional: true, required: false
  private _prevent?: string[]; 
  public get prevent() {
    return this.getListAttribute('prevent');
  }
  public set prevent(value: string[]) {
    this._prevent = value;
  }
  public resetPrevent() {
    this._prevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInput() {
    return this._prevent;
  }
}
export interface ApplicationSpecNetworkControlsSubnets {
  /**
  * Alert lists the denied sources for which alerts are generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#alert ApplicationSpec#alert}
  */
  readonly alert?: string[];
  /**
  * Allow lists the allowed sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allow ApplicationSpec#allow}
  */
  readonly allow?: string[];
  /**
  * AllowMode indicates allowlist (true) or denylist (false) mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#allow_mode ApplicationSpec#allow_mode}
  */
  readonly allowMode?: boolean | cdktf.IResolvable;
  /**
  * Enabled indicates if access controls protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#fallback_effect ApplicationSpec#fallback_effect}
  */
  readonly fallbackEffect?: string;
  /**
  * Prevent lists the denied sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#prevent ApplicationSpec#prevent}
  */
  readonly prevent?: string[];
}

export function applicationSpecNetworkControlsSubnetsToTerraform(struct?: ApplicationSpecNetworkControlsSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    allow_mode: cdktf.booleanToTerraform(struct!.allowMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fallback_effect: cdktf.stringToTerraform(struct!.fallbackEffect),
    prevent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prevent),
  }
}


export function applicationSpecNetworkControlsSubnetsToHclTerraform(struct?: ApplicationSpecNetworkControlsSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_mode: {
      value: cdktf.booleanToHclTerraform(struct!.allowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.fallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prevent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecNetworkControlsSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecNetworkControlsSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._allowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMode = this._allowMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackEffect = this._fallbackEffect;
    }
    if (this._prevent !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevent = this._prevent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecNetworkControlsSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._allow = undefined;
      this._allowMode = undefined;
      this._enabled = undefined;
      this._fallbackEffect = undefined;
      this._prevent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._allow = value.allow;
      this._allowMode = value.allowMode;
      this._enabled = value.enabled;
      this._fallbackEffect = value.fallbackEffect;
      this._prevent = value.prevent;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // allow_mode - computed: false, optional: true, required: false
  private _allowMode?: boolean | cdktf.IResolvable; 
  public get allowMode() {
    return this.getBooleanAttribute('allow_mode');
  }
  public set allowMode(value: boolean | cdktf.IResolvable) {
    this._allowMode = value;
  }
  public resetAllowMode() {
    this._allowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeInput() {
    return this._allowMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fallback_effect - computed: true, optional: true, required: false
  private _fallbackEffect?: string; 
  public get fallbackEffect() {
    return this.getStringAttribute('fallback_effect');
  }
  public set fallbackEffect(value: string) {
    this._fallbackEffect = value;
  }
  public resetFallbackEffect() {
    this._fallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackEffectInput() {
    return this._fallbackEffect;
  }

  // prevent - computed: false, optional: true, required: false
  private _prevent?: string[]; 
  public get prevent() {
    return this.getListAttribute('prevent');
  }
  public set prevent(value: string[]) {
    this._prevent = value;
  }
  public resetPrevent() {
    this._prevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInput() {
    return this._prevent;
  }
}
export interface ApplicationSpecNetworkControls {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#advanced_protection_effect ApplicationSpec#advanced_protection_effect}
  */
  readonly advancedProtectionEffect?: string;
  /**
  * AccessControls contains the access controls config (e.g., denied/allowed sources)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#countries ApplicationSpec#countries}
  */
  readonly countries: ApplicationSpecNetworkControlsCountries;
  /**
  * Network lists for which requests completely bypass WAAS checks and protections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_subnets ApplicationSpec#exception_subnets}
  */
  readonly exceptionSubnets?: string[];
  /**
  * AccessControls contains the access controls config (e.g., denied/allowed sources)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#subnets ApplicationSpec#subnets}
  */
  readonly subnets: ApplicationSpecNetworkControlsSubnets;
}

export function applicationSpecNetworkControlsToTerraform(struct?: ApplicationSpecNetworkControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_protection_effect: cdktf.stringToTerraform(struct!.advancedProtectionEffect),
    countries: applicationSpecNetworkControlsCountriesToTerraform(struct!.countries),
    exception_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionSubnets),
    subnets: applicationSpecNetworkControlsSubnetsToTerraform(struct!.subnets),
  }
}


export function applicationSpecNetworkControlsToHclTerraform(struct?: ApplicationSpecNetworkControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_protection_effect: {
      value: cdktf.stringToHclTerraform(struct!.advancedProtectionEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    countries: {
      value: applicationSpecNetworkControlsCountriesToHclTerraform(struct!.countries),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecNetworkControlsCountries",
    },
    exception_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: applicationSpecNetworkControlsSubnetsToHclTerraform(struct!.subnets),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecNetworkControlsSubnets",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecNetworkControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecNetworkControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedProtectionEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedProtectionEffect = this._advancedProtectionEffect;
    }
    if (this._countries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries?.internalValue;
    }
    if (this._exceptionSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSubnets = this._exceptionSubnets;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecNetworkControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedProtectionEffect = undefined;
      this._countries.internalValue = undefined;
      this._exceptionSubnets = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedProtectionEffect = value.advancedProtectionEffect;
      this._countries.internalValue = value.countries;
      this._exceptionSubnets = value.exceptionSubnets;
      this._subnets.internalValue = value.subnets;
    }
  }

  // advanced_protection_effect - computed: true, optional: true, required: false
  private _advancedProtectionEffect?: string; 
  public get advancedProtectionEffect() {
    return this.getStringAttribute('advanced_protection_effect');
  }
  public set advancedProtectionEffect(value: string) {
    this._advancedProtectionEffect = value;
  }
  public resetAdvancedProtectionEffect() {
    this._advancedProtectionEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedProtectionEffectInput() {
    return this._advancedProtectionEffect;
  }

  // countries - computed: false, optional: false, required: true
  private _countries = new ApplicationSpecNetworkControlsCountriesOutputReference(this, "countries");
  public get countries() {
    return this._countries;
  }
  public putCountries(value: ApplicationSpecNetworkControlsCountries) {
    this._countries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries.internalValue;
  }

  // exception_subnets - computed: false, optional: true, required: false
  private _exceptionSubnets?: string[]; 
  public get exceptionSubnets() {
    return this.getListAttribute('exception_subnets');
  }
  public set exceptionSubnets(value: string[]) {
    this._exceptionSubnets = value;
  }
  public resetExceptionSubnets() {
    this._exceptionSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSubnetsInput() {
    return this._exceptionSubnets;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new ApplicationSpecNetworkControlsSubnetsOutputReference(this, "subnets");
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: ApplicationSpecNetworkControlsSubnets) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface ApplicationSpecRemoteHostForwarding {
  /**
  * Indicates if remote host forwarding is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Remote host to forward requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#target ApplicationSpec#target}
  */
  readonly target?: string;
}

export function applicationSpecRemoteHostForwardingToTerraform(struct?: ApplicationSpecRemoteHostForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function applicationSpecRemoteHostForwardingToHclTerraform(struct?: ApplicationSpecRemoteHostForwarding | cdktf.IResolvable): any {
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecRemoteHostForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecRemoteHostForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecRemoteHostForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._target = value.target;
    }
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ApplicationSpecResponseHeaderSpecs {
  /**
  * Header name (will be canonicalized when possible)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#name ApplicationSpec#name}
  */
  readonly name: string;
  /**
  * Indicates whether to override existing values rather than append
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#override ApplicationSpec#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * New header values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#values ApplicationSpec#values}
  */
  readonly values: string[];
}

export function applicationSpecResponseHeaderSpecsToTerraform(struct?: ApplicationSpecResponseHeaderSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function applicationSpecResponseHeaderSpecsToHclTerraform(struct?: ApplicationSpecResponseHeaderSpecs | cdktf.IResolvable): any {
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
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ApplicationSpecResponseHeaderSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecResponseHeaderSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecResponseHeaderSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._override = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._override = value.override;
      this._values = value.values;
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

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApplicationSpecResponseHeaderSpecsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecResponseHeaderSpecs[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecResponseHeaderSpecsOutputReference {
    return new ApplicationSpecResponseHeaderSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecShellshockExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecShellshockExceptionFieldsToTerraform(struct?: ApplicationSpecShellshockExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecShellshockExceptionFieldsToHclTerraform(struct?: ApplicationSpecShellshockExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecShellshockExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecShellshockExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecShellshockExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecShellshockExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecShellshockExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecShellshockExceptionFieldsOutputReference {
    return new ApplicationSpecShellshockExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecShellshock {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecShellshockExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecShellshockToTerraform(struct?: ApplicationSpecShellshock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecShellshockExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecShellshockToHclTerraform(struct?: ApplicationSpecShellshock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecShellshockExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecShellshockExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecShellshockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecShellshock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecShellshock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecShellshockExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecShellshockExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecSqliExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecSqliExceptionFieldsToTerraform(struct?: ApplicationSpecSqliExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecSqliExceptionFieldsToHclTerraform(struct?: ApplicationSpecSqliExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecSqliExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecSqliExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecSqliExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecSqliExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecSqliExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecSqliExceptionFieldsOutputReference {
    return new ApplicationSpecSqliExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecSqli {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecSqliExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecSqliToTerraform(struct?: ApplicationSpecSqli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecSqliExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecSqliToHclTerraform(struct?: ApplicationSpecSqli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecSqliExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecSqliExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecSqliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecSqli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecSqli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecSqliExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecSqliExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface ApplicationSpecTlsConfigHstsConfig {
  /**
  * Enabled indicates if HSTS enforcement is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#enabled ApplicationSpec#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * IncludeSubdomains indicates if this rule applies to all of the site's subdomains as well
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#include_subdomains ApplicationSpec#include_subdomains}
  */
  readonly includeSubdomains: boolean | cdktf.IResolvable;
  /**
  * maxAgeSeconds is the time (in seconds) that the browser should remember that a site is only be accessed using HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#max_age_seconds ApplicationSpec#max_age_seconds}
  */
  readonly maxAgeSeconds: number;
  /**
  * Preload indicates if it should support preload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#preload ApplicationSpec#preload}
  */
  readonly preload: boolean | cdktf.IResolvable;
}

export function applicationSpecTlsConfigHstsConfigToTerraform(struct?: ApplicationSpecTlsConfigHstsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}


export function applicationSpecTlsConfigHstsConfigToHclTerraform(struct?: ApplicationSpecTlsConfigHstsConfig | cdktf.IResolvable): any {
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
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preload: {
      value: cdktf.booleanToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecTlsConfigHstsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecTlsConfigHstsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecTlsConfigHstsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._includeSubdomains = undefined;
      this._maxAgeSeconds = undefined;
      this._preload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._includeSubdomains = value.includeSubdomains;
      this._maxAgeSeconds = value.maxAgeSeconds;
      this._preload = value.preload;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_subdomains - computed: false, optional: false, required: true
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // max_age_seconds - computed: false, optional: false, required: true
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }

  // preload - computed: false, optional: false, required: true
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface ApplicationSpecTlsConfigMetadata {
  /**
  * IssuerName is the certificate issuer common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#issuer_name ApplicationSpec#issuer_name}
  */
  readonly issuerName: string;
  /**
  * NotAfter is the time the certificate is not valid (expiry time) in RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#not_after ApplicationSpec#not_after}
  */
  readonly notAfter: string;
  /**
  * SubjectName is the certificate subject common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#subject_name ApplicationSpec#subject_name}
  */
  readonly subjectName: string;
}

export function applicationSpecTlsConfigMetadataToTerraform(struct?: ApplicationSpecTlsConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_name: cdktf.stringToTerraform(struct!.issuerName),
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
  }
}


export function applicationSpecTlsConfigMetadataToHclTerraform(struct?: ApplicationSpecTlsConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_name: {
      value: cdktf.stringToHclTerraform(struct!.issuerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecTlsConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecTlsConfigMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerName = this._issuerName;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecTlsConfigMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuerName = undefined;
      this._notAfter = undefined;
      this._subjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuerName = value.issuerName;
      this._notAfter = value.notAfter;
      this._subjectName = value.subjectName;
    }
  }

  // issuer_name - computed: false, optional: false, required: true
  private _issuerName?: string; 
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }
  public set issuerName(value: string) {
    this._issuerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerNameInput() {
    return this._issuerName;
  }

  // not_after - computed: false, optional: false, required: true
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }
}
export interface ApplicationSpecTlsConfig {
  /**
  * HSTSConfig is the HTTP Strict Transport Security configuration in order to enforce HSTS header see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#hsts_config ApplicationSpec#hsts_config}
  */
  readonly hstsConfig: ApplicationSpecTlsConfigHstsConfig;
  /**
  * Metadata is the certificate metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#metadata ApplicationSpec#metadata}
  */
  readonly metadata: ApplicationSpecTlsConfigMetadata;
  /**
  * MinTLSVersion is the minimum acceptable TLS version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#min_tls_version ApplicationSpec#min_tls_version}
  */
  readonly minTlsVersion: string;
}

export function applicationSpecTlsConfigToTerraform(struct?: ApplicationSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hsts_config: applicationSpecTlsConfigHstsConfigToTerraform(struct!.hstsConfig),
    metadata: applicationSpecTlsConfigMetadataToTerraform(struct!.metadata),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
  }
}


export function applicationSpecTlsConfigToHclTerraform(struct?: ApplicationSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hsts_config: {
      value: applicationSpecTlsConfigHstsConfigToHclTerraform(struct!.hstsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecTlsConfigHstsConfig",
    },
    metadata: {
      value: applicationSpecTlsConfigMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSpecTlsConfigMetadata",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hstsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsConfig = this._hstsConfig?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hstsConfig.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._minTlsVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hstsConfig.internalValue = value.hstsConfig;
      this._metadata.internalValue = value.metadata;
      this._minTlsVersion = value.minTlsVersion;
    }
  }

  // hsts_config - computed: false, optional: false, required: true
  private _hstsConfig = new ApplicationSpecTlsConfigHstsConfigOutputReference(this, "hsts_config");
  public get hstsConfig() {
    return this._hstsConfig;
  }
  public putHstsConfig(value: ApplicationSpecTlsConfigHstsConfig) {
    this._hstsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsConfigInput() {
    return this._hstsConfig.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ApplicationSpecTlsConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSpecTlsConfigMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // min_tls_version - computed: false, optional: false, required: true
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }
}
export interface ApplicationSpecXssExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#key ApplicationSpec#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#location ApplicationSpec#location}
  */
  readonly location: string;
}

export function applicationSpecXssExceptionFieldsToTerraform(struct?: ApplicationSpecXssExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function applicationSpecXssExceptionFieldsToHclTerraform(struct?: ApplicationSpecXssExceptionFields | cdktf.IResolvable): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecXssExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSpecXssExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecXssExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
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

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class ApplicationSpecXssExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSpecXssExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSpecXssExceptionFieldsOutputReference {
    return new ApplicationSpecXssExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSpecXss {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#effect ApplicationSpec#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#exception_fields ApplicationSpec#exception_fields}
  */
  readonly exceptionFields?: ApplicationSpecXssExceptionFields[] | cdktf.IResolvable;
}

export function applicationSpecXssToTerraform(struct?: ApplicationSpecXss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(applicationSpecXssExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function applicationSpecXssToHclTerraform(struct?: ApplicationSpecXss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(applicationSpecXssExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSpecXssExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSpecXssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSpecXss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSpecXss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new ApplicationSpecXssExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: ApplicationSpecXssExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec prismacloud-waas_application_spec}
*/
export class ApplicationSpec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud-waas_application_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSpec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSpec to import
  * @param importFromId The id of the existing ApplicationSpec that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSpec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud-waas_application_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/application_spec prismacloud-waas_application_spec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSpecConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSpecConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud-waas_application_spec',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud-waas',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiSpec.internalValue = config.apiSpec;
    this._appId = config.appId;
    this._attackTools.internalValue = config.attackTools;
    this._autoApplyPatchesSpec.internalValue = config.autoApplyPatchesSpec;
    this._banDurationMinutes = config.banDurationMinutes;
    this._body.internalValue = config.body;
    this._botProtectionSpec.internalValue = config.botProtectionSpec;
    this._certificate.internalValue = config.certificate;
    this._clickjackingEnabled = config.clickjackingEnabled;
    this._cmdi.internalValue = config.cmdi;
    this._codeInjection.internalValue = config.codeInjection;
    this._csrfEnabled = config.csrfEnabled;
    this._customBlockResponseConfig.internalValue = config.customBlockResponseConfig;
    this._customRules.internalValue = config.customRules;
    this._disableEventIdHeader = config.disableEventIdHeader;
    this._dosConfig.internalValue = config.dosConfig;
    this._headerSpecs.internalValue = config.headerSpecs;
    this._intelGathering.internalValue = config.intelGathering;
    this._lfi.internalValue = config.lfi;
    this._malformedReq.internalValue = config.malformedReq;
    this._maliciousUpload.internalValue = config.maliciousUpload;
    this._networkControls.internalValue = config.networkControls;
    this._remoteHostForwarding.internalValue = config.remoteHostForwarding;
    this._responseHeaderSpecs.internalValue = config.responseHeaderSpecs;
    this._ruleName = config.ruleName;
    this._sessionCookieBan = config.sessionCookieBan;
    this._sessionCookieEnabled = config.sessionCookieEnabled;
    this._sessionCookieSameSite = config.sessionCookieSameSite;
    this._sessionCookieSecure = config.sessionCookieSecure;
    this._shellshock.internalValue = config.shellshock;
    this._sqli.internalValue = config.sqli;
    this._tlsConfig.internalValue = config.tlsConfig;
    this._version = config.version;
    this._xss.internalValue = config.xss;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_spec - computed: false, optional: false, required: true
  private _apiSpec = new ApplicationSpecApiSpecOutputReference(this, "api_spec");
  public get apiSpec() {
    return this._apiSpec;
  }
  public putApiSpec(value: ApplicationSpecApiSpec) {
    this._apiSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecInput() {
    return this._apiSpec.internalValue;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // attack_tools - computed: false, optional: false, required: true
  private _attackTools = new ApplicationSpecAttackToolsOutputReference(this, "attack_tools");
  public get attackTools() {
    return this._attackTools;
  }
  public putAttackTools(value: ApplicationSpecAttackTools) {
    this._attackTools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackToolsInput() {
    return this._attackTools.internalValue;
  }

  // auto_apply_patches_spec - computed: false, optional: false, required: true
  private _autoApplyPatchesSpec = new ApplicationSpecAutoApplyPatchesSpecOutputReference(this, "auto_apply_patches_spec");
  public get autoApplyPatchesSpec() {
    return this._autoApplyPatchesSpec;
  }
  public putAutoApplyPatchesSpec(value: ApplicationSpecAutoApplyPatchesSpec) {
    this._autoApplyPatchesSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyPatchesSpecInput() {
    return this._autoApplyPatchesSpec.internalValue;
  }

  // ban_duration_minutes - computed: true, optional: true, required: false
  private _banDurationMinutes?: number; 
  public get banDurationMinutes() {
    return this.getNumberAttribute('ban_duration_minutes');
  }
  public set banDurationMinutes(value: number) {
    this._banDurationMinutes = value;
  }
  public resetBanDurationMinutes() {
    this._banDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banDurationMinutesInput() {
    return this._banDurationMinutes;
  }

  // body - computed: false, optional: false, required: true
  private _body = new ApplicationSpecBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: ApplicationSpecBody) {
    this._body.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // bot_protection_spec - computed: false, optional: false, required: true
  private _botProtectionSpec = new ApplicationSpecBotProtectionSpecOutputReference(this, "bot_protection_spec");
  public get botProtectionSpec() {
    return this._botProtectionSpec;
  }
  public putBotProtectionSpec(value: ApplicationSpecBotProtectionSpec) {
    this._botProtectionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botProtectionSpecInput() {
    return this._botProtectionSpec.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ApplicationSpecCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ApplicationSpecCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // clickjacking_enabled - computed: true, optional: true, required: false
  private _clickjackingEnabled?: boolean | cdktf.IResolvable; 
  public get clickjackingEnabled() {
    return this.getBooleanAttribute('clickjacking_enabled');
  }
  public set clickjackingEnabled(value: boolean | cdktf.IResolvable) {
    this._clickjackingEnabled = value;
  }
  public resetClickjackingEnabled() {
    this._clickjackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickjackingEnabledInput() {
    return this._clickjackingEnabled;
  }

  // cmdi - computed: false, optional: false, required: true
  private _cmdi = new ApplicationSpecCmdiOutputReference(this, "cmdi");
  public get cmdi() {
    return this._cmdi;
  }
  public putCmdi(value: ApplicationSpecCmdi) {
    this._cmdi.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdiInput() {
    return this._cmdi.internalValue;
  }

  // code_injection - computed: false, optional: false, required: true
  private _codeInjection = new ApplicationSpecCodeInjectionOutputReference(this, "code_injection");
  public get codeInjection() {
    return this._codeInjection;
  }
  public putCodeInjection(value: ApplicationSpecCodeInjection) {
    this._codeInjection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInjectionInput() {
    return this._codeInjection.internalValue;
  }

  // csrf_enabled - computed: false, optional: false, required: true
  private _csrfEnabled?: boolean | cdktf.IResolvable; 
  public get csrfEnabled() {
    return this.getBooleanAttribute('csrf_enabled');
  }
  public set csrfEnabled(value: boolean | cdktf.IResolvable) {
    this._csrfEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfEnabledInput() {
    return this._csrfEnabled;
  }

  // custom_block_response_config - computed: false, optional: false, required: true
  private _customBlockResponseConfig = new ApplicationSpecCustomBlockResponseConfigOutputReference(this, "custom_block_response_config");
  public get customBlockResponseConfig() {
    return this._customBlockResponseConfig;
  }
  public putCustomBlockResponseConfig(value: ApplicationSpecCustomBlockResponseConfig) {
    this._customBlockResponseConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseConfigInput() {
    return this._customBlockResponseConfig.internalValue;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules = new ApplicationSpecCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: ApplicationSpecCustomRules[] | cdktf.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // disable_event_id_header - computed: true, optional: true, required: false
  private _disableEventIdHeader?: boolean | cdktf.IResolvable; 
  public get disableEventIdHeader() {
    return this.getBooleanAttribute('disable_event_id_header');
  }
  public set disableEventIdHeader(value: boolean | cdktf.IResolvable) {
    this._disableEventIdHeader = value;
  }
  public resetDisableEventIdHeader() {
    this._disableEventIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEventIdHeaderInput() {
    return this._disableEventIdHeader;
  }

  // dos_config - computed: false, optional: false, required: true
  private _dosConfig = new ApplicationSpecDosConfigOutputReference(this, "dos_config");
  public get dosConfig() {
    return this._dosConfig;
  }
  public putDosConfig(value: ApplicationSpecDosConfig) {
    this._dosConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dosConfigInput() {
    return this._dosConfig.internalValue;
  }

  // header_specs - computed: false, optional: false, required: true
  private _headerSpecs = new ApplicationSpecHeaderSpecsList(this, "header_specs", false);
  public get headerSpecs() {
    return this._headerSpecs;
  }
  public putHeaderSpecs(value: ApplicationSpecHeaderSpecs[] | cdktf.IResolvable) {
    this._headerSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSpecsInput() {
    return this._headerSpecs.internalValue;
  }

  // intel_gathering - computed: false, optional: false, required: true
  private _intelGathering = new ApplicationSpecIntelGatheringOutputReference(this, "intel_gathering");
  public get intelGathering() {
    return this._intelGathering;
  }
  public putIntelGathering(value: ApplicationSpecIntelGathering) {
    this._intelGathering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intelGatheringInput() {
    return this._intelGathering.internalValue;
  }

  // lfi - computed: false, optional: false, required: true
  private _lfi = new ApplicationSpecLfiOutputReference(this, "lfi");
  public get lfi() {
    return this._lfi;
  }
  public putLfi(value: ApplicationSpecLfi) {
    this._lfi.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lfiInput() {
    return this._lfi.internalValue;
  }

  // malformed_req - computed: false, optional: false, required: true
  private _malformedReq = new ApplicationSpecMalformedReqOutputReference(this, "malformed_req");
  public get malformedReq() {
    return this._malformedReq;
  }
  public putMalformedReq(value: ApplicationSpecMalformedReq) {
    this._malformedReq.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedReqInput() {
    return this._malformedReq.internalValue;
  }

  // malicious_upload - computed: false, optional: false, required: true
  private _maliciousUpload = new ApplicationSpecMaliciousUploadOutputReference(this, "malicious_upload");
  public get maliciousUpload() {
    return this._maliciousUpload;
  }
  public putMaliciousUpload(value: ApplicationSpecMaliciousUpload) {
    this._maliciousUpload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUploadInput() {
    return this._maliciousUpload.internalValue;
  }

  // network_controls - computed: false, optional: false, required: true
  private _networkControls = new ApplicationSpecNetworkControlsOutputReference(this, "network_controls");
  public get networkControls() {
    return this._networkControls;
  }
  public putNetworkControls(value: ApplicationSpecNetworkControls) {
    this._networkControls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkControlsInput() {
    return this._networkControls.internalValue;
  }

  // remote_host_forwarding - computed: false, optional: false, required: true
  private _remoteHostForwarding = new ApplicationSpecRemoteHostForwardingOutputReference(this, "remote_host_forwarding");
  public get remoteHostForwarding() {
    return this._remoteHostForwarding;
  }
  public putRemoteHostForwarding(value: ApplicationSpecRemoteHostForwarding) {
    this._remoteHostForwarding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostForwardingInput() {
    return this._remoteHostForwarding.internalValue;
  }

  // response_header_specs - computed: false, optional: false, required: true
  private _responseHeaderSpecs = new ApplicationSpecResponseHeaderSpecsList(this, "response_header_specs", false);
  public get responseHeaderSpecs() {
    return this._responseHeaderSpecs;
  }
  public putResponseHeaderSpecs(value: ApplicationSpecResponseHeaderSpecs[] | cdktf.IResolvable) {
    this._responseHeaderSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderSpecsInput() {
    return this._responseHeaderSpecs.internalValue;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // session_cookie_ban - computed: true, optional: true, required: false
  private _sessionCookieBan?: boolean | cdktf.IResolvable; 
  public get sessionCookieBan() {
    return this.getBooleanAttribute('session_cookie_ban');
  }
  public set sessionCookieBan(value: boolean | cdktf.IResolvable) {
    this._sessionCookieBan = value;
  }
  public resetSessionCookieBan() {
    this._sessionCookieBan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieBanInput() {
    return this._sessionCookieBan;
  }

  // session_cookie_enabled - computed: true, optional: true, required: false
  private _sessionCookieEnabled?: boolean | cdktf.IResolvable; 
  public get sessionCookieEnabled() {
    return this.getBooleanAttribute('session_cookie_enabled');
  }
  public set sessionCookieEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionCookieEnabled = value;
  }
  public resetSessionCookieEnabled() {
    this._sessionCookieEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieEnabledInput() {
    return this._sessionCookieEnabled;
  }

  // session_cookie_same_site - computed: true, optional: true, required: false
  private _sessionCookieSameSite?: string; 
  public get sessionCookieSameSite() {
    return this.getStringAttribute('session_cookie_same_site');
  }
  public set sessionCookieSameSite(value: string) {
    this._sessionCookieSameSite = value;
  }
  public resetSessionCookieSameSite() {
    this._sessionCookieSameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSameSiteInput() {
    return this._sessionCookieSameSite;
  }

  // session_cookie_secure - computed: true, optional: true, required: false
  private _sessionCookieSecure?: boolean | cdktf.IResolvable; 
  public get sessionCookieSecure() {
    return this.getBooleanAttribute('session_cookie_secure');
  }
  public set sessionCookieSecure(value: boolean | cdktf.IResolvable) {
    this._sessionCookieSecure = value;
  }
  public resetSessionCookieSecure() {
    this._sessionCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSecureInput() {
    return this._sessionCookieSecure;
  }

  // shellshock - computed: false, optional: false, required: true
  private _shellshock = new ApplicationSpecShellshockOutputReference(this, "shellshock");
  public get shellshock() {
    return this._shellshock;
  }
  public putShellshock(value: ApplicationSpecShellshock) {
    this._shellshock.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shellshockInput() {
    return this._shellshock.internalValue;
  }

  // sqli - computed: false, optional: false, required: true
  private _sqli = new ApplicationSpecSqliOutputReference(this, "sqli");
  public get sqli() {
    return this._sqli;
  }
  public putSqli(value: ApplicationSpecSqli) {
    this._sqli.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliInput() {
    return this._sqli.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ApplicationSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ApplicationSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // xss - computed: false, optional: false, required: true
  private _xss = new ApplicationSpecXssOutputReference(this, "xss");
  public get xss() {
    return this._xss;
  }
  public putXss(value: ApplicationSpecXss) {
    this._xss.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xssInput() {
    return this._xss.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_spec: applicationSpecApiSpecToTerraform(this._apiSpec.internalValue),
      app_id: cdktf.stringToTerraform(this._appId),
      attack_tools: applicationSpecAttackToolsToTerraform(this._attackTools.internalValue),
      auto_apply_patches_spec: applicationSpecAutoApplyPatchesSpecToTerraform(this._autoApplyPatchesSpec.internalValue),
      ban_duration_minutes: cdktf.numberToTerraform(this._banDurationMinutes),
      body: applicationSpecBodyToTerraform(this._body.internalValue),
      bot_protection_spec: applicationSpecBotProtectionSpecToTerraform(this._botProtectionSpec.internalValue),
      certificate: applicationSpecCertificateToTerraform(this._certificate.internalValue),
      clickjacking_enabled: cdktf.booleanToTerraform(this._clickjackingEnabled),
      cmdi: applicationSpecCmdiToTerraform(this._cmdi.internalValue),
      code_injection: applicationSpecCodeInjectionToTerraform(this._codeInjection.internalValue),
      csrf_enabled: cdktf.booleanToTerraform(this._csrfEnabled),
      custom_block_response_config: applicationSpecCustomBlockResponseConfigToTerraform(this._customBlockResponseConfig.internalValue),
      custom_rules: cdktf.listMapper(applicationSpecCustomRulesToTerraform, false)(this._customRules.internalValue),
      disable_event_id_header: cdktf.booleanToTerraform(this._disableEventIdHeader),
      dos_config: applicationSpecDosConfigToTerraform(this._dosConfig.internalValue),
      header_specs: cdktf.listMapper(applicationSpecHeaderSpecsToTerraform, false)(this._headerSpecs.internalValue),
      intel_gathering: applicationSpecIntelGatheringToTerraform(this._intelGathering.internalValue),
      lfi: applicationSpecLfiToTerraform(this._lfi.internalValue),
      malformed_req: applicationSpecMalformedReqToTerraform(this._malformedReq.internalValue),
      malicious_upload: applicationSpecMaliciousUploadToTerraform(this._maliciousUpload.internalValue),
      network_controls: applicationSpecNetworkControlsToTerraform(this._networkControls.internalValue),
      remote_host_forwarding: applicationSpecRemoteHostForwardingToTerraform(this._remoteHostForwarding.internalValue),
      response_header_specs: cdktf.listMapper(applicationSpecResponseHeaderSpecsToTerraform, false)(this._responseHeaderSpecs.internalValue),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      session_cookie_ban: cdktf.booleanToTerraform(this._sessionCookieBan),
      session_cookie_enabled: cdktf.booleanToTerraform(this._sessionCookieEnabled),
      session_cookie_same_site: cdktf.stringToTerraform(this._sessionCookieSameSite),
      session_cookie_secure: cdktf.booleanToTerraform(this._sessionCookieSecure),
      shellshock: applicationSpecShellshockToTerraform(this._shellshock.internalValue),
      sqli: applicationSpecSqliToTerraform(this._sqli.internalValue),
      tls_config: applicationSpecTlsConfigToTerraform(this._tlsConfig.internalValue),
      version: cdktf.stringToTerraform(this._version),
      xss: applicationSpecXssToTerraform(this._xss.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_spec: {
        value: applicationSpecApiSpecToHclTerraform(this._apiSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecApiSpec",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_tools: {
        value: applicationSpecAttackToolsToHclTerraform(this._attackTools.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecAttackTools",
      },
      auto_apply_patches_spec: {
        value: applicationSpecAutoApplyPatchesSpecToHclTerraform(this._autoApplyPatchesSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecAutoApplyPatchesSpec",
      },
      ban_duration_minutes: {
        value: cdktf.numberToHclTerraform(this._banDurationMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      body: {
        value: applicationSpecBodyToHclTerraform(this._body.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecBody",
      },
      bot_protection_spec: {
        value: applicationSpecBotProtectionSpecToHclTerraform(this._botProtectionSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecBotProtectionSpec",
      },
      certificate: {
        value: applicationSpecCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecCertificate",
      },
      clickjacking_enabled: {
        value: cdktf.booleanToHclTerraform(this._clickjackingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmdi: {
        value: applicationSpecCmdiToHclTerraform(this._cmdi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecCmdi",
      },
      code_injection: {
        value: applicationSpecCodeInjectionToHclTerraform(this._codeInjection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecCodeInjection",
      },
      csrf_enabled: {
        value: cdktf.booleanToHclTerraform(this._csrfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_block_response_config: {
        value: applicationSpecCustomBlockResponseConfigToHclTerraform(this._customBlockResponseConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecCustomBlockResponseConfig",
      },
      custom_rules: {
        value: cdktf.listMapperHcl(applicationSpecCustomRulesToHclTerraform, false)(this._customRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSpecCustomRulesList",
      },
      disable_event_id_header: {
        value: cdktf.booleanToHclTerraform(this._disableEventIdHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dos_config: {
        value: applicationSpecDosConfigToHclTerraform(this._dosConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecDosConfig",
      },
      header_specs: {
        value: cdktf.listMapperHcl(applicationSpecHeaderSpecsToHclTerraform, false)(this._headerSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSpecHeaderSpecsList",
      },
      intel_gathering: {
        value: applicationSpecIntelGatheringToHclTerraform(this._intelGathering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecIntelGathering",
      },
      lfi: {
        value: applicationSpecLfiToHclTerraform(this._lfi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecLfi",
      },
      malformed_req: {
        value: applicationSpecMalformedReqToHclTerraform(this._malformedReq.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecMalformedReq",
      },
      malicious_upload: {
        value: applicationSpecMaliciousUploadToHclTerraform(this._maliciousUpload.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecMaliciousUpload",
      },
      network_controls: {
        value: applicationSpecNetworkControlsToHclTerraform(this._networkControls.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecNetworkControls",
      },
      remote_host_forwarding: {
        value: applicationSpecRemoteHostForwardingToHclTerraform(this._remoteHostForwarding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecRemoteHostForwarding",
      },
      response_header_specs: {
        value: cdktf.listMapperHcl(applicationSpecResponseHeaderSpecsToHclTerraform, false)(this._responseHeaderSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSpecResponseHeaderSpecsList",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_cookie_ban: {
        value: cdktf.booleanToHclTerraform(this._sessionCookieBan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_cookie_enabled: {
        value: cdktf.booleanToHclTerraform(this._sessionCookieEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_cookie_same_site: {
        value: cdktf.stringToHclTerraform(this._sessionCookieSameSite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_cookie_secure: {
        value: cdktf.booleanToHclTerraform(this._sessionCookieSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shellshock: {
        value: applicationSpecShellshockToHclTerraform(this._shellshock.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecShellshock",
      },
      sqli: {
        value: applicationSpecSqliToHclTerraform(this._sqli.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecSqli",
      },
      tls_config: {
        value: applicationSpecTlsConfigToHclTerraform(this._tlsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecTlsConfig",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xss: {
        value: applicationSpecXssToHclTerraform(this._xss.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSpecXss",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
