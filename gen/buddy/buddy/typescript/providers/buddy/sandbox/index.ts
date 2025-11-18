// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SandboxConfig extends cdktf.TerraformMetaArguments {
  /**
  * The sandbox's app dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#app_dir Sandbox#app_dir}
  */
  readonly appDir?: string;
  /**
  * The sandbox's app type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#app_type Sandbox#app_type}
  */
  readonly appType?: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#domain Sandbox#domain}
  */
  readonly domain: string;
  /**
  * The sandbox's map of endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#endpoints Sandbox#endpoints}
  */
  readonly endpoints?: { [key: string]: SandboxEndpoints } | cdktf.IResolvable;
  /**
  * The sandbox's identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#identifier Sandbox#identifier}
  */
  readonly identifier?: string;
  /**
  * The sandbox's install commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#install_commands Sandbox#install_commands}
  */
  readonly installCommands?: string;
  /**
  * The sandbox's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#name Sandbox#name}
  */
  readonly name: string;
  /**
  * The sandbox's operating system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#os Sandbox#os}
  */
  readonly os?: string;
  /**
  * The project's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#project_name Sandbox#project_name}
  */
  readonly projectName: string;
  /**
  * The sandbox's resources (cpu, ram)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#resources Sandbox#resources}
  */
  readonly resources?: string;
  /**
  * The sandbox's command for app to start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#run_command Sandbox#run_command}
  */
  readonly runCommand?: string;
  /**
  * The sandbox's list of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#tags Sandbox#tags}
  */
  readonly tags?: string[];
  /**
  * Wait until sandbox running app commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#wait_for_app Sandbox#wait_for_app}
  */
  readonly waitForApp?: boolean | cdktf.IResolvable;
  /**
  * Seconds to wait until sandbox ran app commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#wait_for_app_timeout Sandbox#wait_for_app_timeout}
  */
  readonly waitForAppTimeout?: number;
  /**
  * Wait until sandbox ran setup commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#wait_for_configured Sandbox#wait_for_configured}
  */
  readonly waitForConfigured?: boolean | cdktf.IResolvable;
  /**
  * Seconds to wait until sandbox ran setup commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#wait_for_configured_timeout Sandbox#wait_for_configured_timeout}
  */
  readonly waitForConfiguredTimeout?: number;
  /**
  * Wait until sandbox is running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#wait_for_running Sandbox#wait_for_running}
  */
  readonly waitForRunning?: boolean | cdktf.IResolvable;
  /**
  * Seconds to wait until sandbox is running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#wait_for_running_timeout Sandbox#wait_for_running_timeout}
  */
  readonly waitForRunningTimeout?: number;
}
export interface SandboxEndpointsHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#auth_type Sandbox#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#circuit_breaker Sandbox#circuit_breaker}
  */
  readonly circuitBreaker?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#compression Sandbox#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#http2 Sandbox#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#log_requests Sandbox#log_requests}
  */
  readonly logRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#login Sandbox#login}
  */
  readonly login?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#password Sandbox#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#request_headers Sandbox#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#response_headers Sandbox#response_headers}
  */
  readonly responseHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#rewrite_host_header Sandbox#rewrite_host_header}
  */
  readonly rewriteHostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#tls_ca Sandbox#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#verify_certificate Sandbox#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#whitelist_user_agents Sandbox#whitelist_user_agents}
  */
  readonly whitelistUserAgents?: string[];
}

export function sandboxEndpointsHttpToTerraform(struct?: SandboxEndpointsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    circuit_breaker: cdktf.numberToTerraform(struct!.circuitBreaker),
    compression: cdktf.booleanToTerraform(struct!.compression),
    http2: cdktf.booleanToTerraform(struct!.http2),
    log_requests: cdktf.booleanToTerraform(struct!.logRequests),
    login: cdktf.stringToTerraform(struct!.login),
    password: cdktf.stringToTerraform(struct!.password),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.responseHeaders),
    rewrite_host_header: cdktf.stringToTerraform(struct!.rewriteHostHeader),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    verify_certificate: cdktf.booleanToTerraform(struct!.verifyCertificate),
    whitelist_user_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistUserAgents),
  }
}


export function sandboxEndpointsHttpToHclTerraform(struct?: SandboxEndpointsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_breaker: {
      value: cdktf.numberToHclTerraform(struct!.circuitBreaker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression: {
      value: cdktf.booleanToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_requests: {
      value: cdktf.booleanToHclTerraform(struct!.logRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login: {
      value: cdktf.stringToHclTerraform(struct!.login),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.responseHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rewrite_host_header: {
      value: cdktf.stringToHclTerraform(struct!.rewriteHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_ca: {
      value: cdktf.stringToHclTerraform(struct!.tlsCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    whitelist_user_agents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistUserAgents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SandboxEndpointsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SandboxEndpointsHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._circuitBreaker !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreaker = this._circuitBreaker;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._logRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequests = this._logRequests;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    if (this._rewriteHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteHostHeader = this._rewriteHostHeader;
    }
    if (this._tlsCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCa = this._tlsCa;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    if (this._whitelistUserAgents !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistUserAgents = this._whitelistUserAgents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SandboxEndpointsHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._circuitBreaker = undefined;
      this._compression = undefined;
      this._http2 = undefined;
      this._logRequests = undefined;
      this._login = undefined;
      this._password = undefined;
      this._requestHeaders = undefined;
      this._responseHeaders = undefined;
      this._rewriteHostHeader = undefined;
      this._tlsCa = undefined;
      this._verifyCertificate = undefined;
      this._whitelistUserAgents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._circuitBreaker = value.circuitBreaker;
      this._compression = value.compression;
      this._http2 = value.http2;
      this._logRequests = value.logRequests;
      this._login = value.login;
      this._password = value.password;
      this._requestHeaders = value.requestHeaders;
      this._responseHeaders = value.responseHeaders;
      this._rewriteHostHeader = value.rewriteHostHeader;
      this._tlsCa = value.tlsCa;
      this._verifyCertificate = value.verifyCertificate;
      this._whitelistUserAgents = value.whitelistUserAgents;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // circuit_breaker - computed: true, optional: true, required: false
  private _circuitBreaker?: number; 
  public get circuitBreaker() {
    return this.getNumberAttribute('circuit_breaker');
  }
  public set circuitBreaker(value: number) {
    this._circuitBreaker = value;
  }
  public resetCircuitBreaker() {
    this._circuitBreaker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakerInput() {
    return this._circuitBreaker;
  }

  // compression - computed: true, optional: true, required: false
  private _compression?: boolean | cdktf.IResolvable; 
  public get compression() {
    return this.getBooleanAttribute('compression');
  }
  public set compression(value: boolean | cdktf.IResolvable) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
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

  // log_requests - computed: true, optional: true, required: false
  private _logRequests?: boolean | cdktf.IResolvable; 
  public get logRequests() {
    return this.getBooleanAttribute('log_requests');
  }
  public set logRequests(value: boolean | cdktf.IResolvable) {
    this._logRequests = value;
  }
  public resetLogRequests() {
    this._logRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestsInput() {
    return this._logRequests;
  }

  // login - computed: true, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_headers - computed: true, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // response_headers - computed: true, optional: true, required: false
  private _responseHeaders?: { [key: string]: string }; 
  public get responseHeaders() {
    return this.getStringMapAttribute('response_headers');
  }
  public set responseHeaders(value: { [key: string]: string }) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }

  // rewrite_host_header - computed: true, optional: true, required: false
  private _rewriteHostHeader?: string; 
  public get rewriteHostHeader() {
    return this.getStringAttribute('rewrite_host_header');
  }
  public set rewriteHostHeader(value: string) {
    this._rewriteHostHeader = value;
  }
  public resetRewriteHostHeader() {
    this._rewriteHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHostHeaderInput() {
    return this._rewriteHostHeader;
  }

  // tls_ca - computed: true, optional: true, required: false
  private _tlsCa?: string; 
  public get tlsCa() {
    return this.getStringAttribute('tls_ca');
  }
  public set tlsCa(value: string) {
    this._tlsCa = value;
  }
  public resetTlsCa() {
    this._tlsCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaInput() {
    return this._tlsCa;
  }

  // verify_certificate - computed: true, optional: true, required: false
  private _verifyCertificate?: boolean | cdktf.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // whitelist_user_agents - computed: true, optional: true, required: false
  private _whitelistUserAgents?: string[]; 
  public get whitelistUserAgents() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist_user_agents'));
  }
  public set whitelistUserAgents(value: string[]) {
    this._whitelistUserAgents = value;
  }
  public resetWhitelistUserAgents() {
    this._whitelistUserAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistUserAgentsInput() {
    return this._whitelistUserAgents;
  }
}
export interface SandboxEndpointsTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#ca_certificate Sandbox#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#certificate Sandbox#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#private_key Sandbox#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#terminate_at Sandbox#terminate_at}
  */
  readonly terminateAt?: string;
}

export function sandboxEndpointsTlsToTerraform(struct?: SandboxEndpointsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    terminate_at: cdktf.stringToTerraform(struct!.terminateAt),
  }
}


export function sandboxEndpointsTlsToHclTerraform(struct?: SandboxEndpointsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
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
    terminate_at: {
      value: cdktf.stringToHclTerraform(struct!.terminateAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SandboxEndpointsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SandboxEndpointsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._terminateAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateAt = this._terminateAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SandboxEndpointsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._terminateAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._terminateAt = value.terminateAt;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: true, optional: true, required: false
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

  // terminate_at - computed: true, optional: true, required: false
  private _terminateAt?: string; 
  public get terminateAt() {
    return this.getStringAttribute('terminate_at');
  }
  public set terminateAt(value: string) {
    this._terminateAt = value;
  }
  public resetTerminateAt() {
    this._terminateAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateAtInput() {
    return this._terminateAt;
  }
}
export interface SandboxEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#endpoint Sandbox#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#http Sandbox#http}
  */
  readonly http?: SandboxEndpointsHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#region Sandbox#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#timeout Sandbox#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#tls Sandbox#tls}
  */
  readonly tls?: SandboxEndpointsTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#type Sandbox#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#whitelist Sandbox#whitelist}
  */
  readonly whitelist?: string[];
}

export function sandboxEndpointsToTerraform(struct?: SandboxEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    http: sandboxEndpointsHttpToTerraform(struct!.http),
    region: cdktf.stringToTerraform(struct!.region),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls: sandboxEndpointsTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
    whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelist),
  }
}


export function sandboxEndpointsToHclTerraform(struct?: SandboxEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: sandboxEndpointsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "SandboxEndpointsHttp",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: sandboxEndpointsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "SandboxEndpointsTls",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SandboxEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SandboxEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._whitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SandboxEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._http.internalValue = undefined;
      this._region = undefined;
      this._timeout = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
      this._whitelist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._http.internalValue = value.http;
      this._region = value.region;
      this._timeout = value.timeout;
      this._tls.internalValue = value.tls;
      this._type = value.type;
      this._whitelist = value.whitelist;
    }
  }

  // endpoint - computed: true, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // http - computed: true, optional: true, required: false
  private _http = new SandboxEndpointsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: SandboxEndpointsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new SandboxEndpointsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: SandboxEndpointsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // type - computed: true, optional: false, required: true
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

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist'));
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }
}

export class SandboxEndpointsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SandboxEndpoints } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SandboxEndpointsOutputReference {
    return new SandboxEndpointsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox buddy_sandbox}
*/
export class Sandbox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_sandbox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sandbox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sandbox to import
  * @param importFromId The id of the existing Sandbox that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sandbox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_sandbox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/sandbox buddy_sandbox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SandboxConfig
  */
  public constructor(scope: Construct, id: string, config: SandboxConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_sandbox',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appDir = config.appDir;
    this._appType = config.appType;
    this._domain = config.domain;
    this._endpoints.internalValue = config.endpoints;
    this._identifier = config.identifier;
    this._installCommands = config.installCommands;
    this._name = config.name;
    this._os = config.os;
    this._projectName = config.projectName;
    this._resources = config.resources;
    this._runCommand = config.runCommand;
    this._tags = config.tags;
    this._waitForApp = config.waitForApp;
    this._waitForAppTimeout = config.waitForAppTimeout;
    this._waitForConfigured = config.waitForConfigured;
    this._waitForConfiguredTimeout = config.waitForConfiguredTimeout;
    this._waitForRunning = config.waitForRunning;
    this._waitForRunningTimeout = config.waitForRunningTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_dir - computed: true, optional: true, required: false
  private _appDir?: string; 
  public get appDir() {
    return this.getStringAttribute('app_dir');
  }
  public set appDir(value: string) {
    this._appDir = value;
  }
  public resetAppDir() {
    this._appDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDirInput() {
    return this._appDir;
  }

  // app_status - computed: true, optional: false, required: false
  public get appStatus() {
    return this.getStringAttribute('app_status');
  }

  // app_type - computed: true, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // endpoints - computed: true, optional: true, required: false
  private _endpoints = new SandboxEndpointsMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: { [key: string]: SandboxEndpoints } | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // install_commands - computed: true, optional: true, required: false
  private _installCommands?: string; 
  public get installCommands() {
    return this.getStringAttribute('install_commands');
  }
  public set installCommands(value: string) {
    this._installCommands = value;
  }
  public resetInstallCommands() {
    this._installCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCommandsInput() {
    return this._installCommands;
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

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string; 
  public get resources() {
    return this.getStringAttribute('resources');
  }
  public set resources(value: string) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // run_command - computed: true, optional: true, required: false
  private _runCommand?: string; 
  public get runCommand() {
    return this.getStringAttribute('run_command');
  }
  public set runCommand(value: string) {
    this._runCommand = value;
  }
  public resetRunCommand() {
    this._runCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandInput() {
    return this._runCommand;
  }

  // sandbox_id - computed: true, optional: false, required: false
  public get sandboxId() {
    return this.getStringAttribute('sandbox_id');
  }

  // setup_status - computed: true, optional: false, required: false
  public get setupStatus() {
    return this.getStringAttribute('setup_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // wait_for_app - computed: true, optional: true, required: false
  private _waitForApp?: boolean | cdktf.IResolvable; 
  public get waitForApp() {
    return this.getBooleanAttribute('wait_for_app');
  }
  public set waitForApp(value: boolean | cdktf.IResolvable) {
    this._waitForApp = value;
  }
  public resetWaitForApp() {
    this._waitForApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAppInput() {
    return this._waitForApp;
  }

  // wait_for_app_timeout - computed: true, optional: true, required: false
  private _waitForAppTimeout?: number; 
  public get waitForAppTimeout() {
    return this.getNumberAttribute('wait_for_app_timeout');
  }
  public set waitForAppTimeout(value: number) {
    this._waitForAppTimeout = value;
  }
  public resetWaitForAppTimeout() {
    this._waitForAppTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAppTimeoutInput() {
    return this._waitForAppTimeout;
  }

  // wait_for_configured - computed: true, optional: true, required: false
  private _waitForConfigured?: boolean | cdktf.IResolvable; 
  public get waitForConfigured() {
    return this.getBooleanAttribute('wait_for_configured');
  }
  public set waitForConfigured(value: boolean | cdktf.IResolvable) {
    this._waitForConfigured = value;
  }
  public resetWaitForConfigured() {
    this._waitForConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForConfiguredInput() {
    return this._waitForConfigured;
  }

  // wait_for_configured_timeout - computed: true, optional: true, required: false
  private _waitForConfiguredTimeout?: number; 
  public get waitForConfiguredTimeout() {
    return this.getNumberAttribute('wait_for_configured_timeout');
  }
  public set waitForConfiguredTimeout(value: number) {
    this._waitForConfiguredTimeout = value;
  }
  public resetWaitForConfiguredTimeout() {
    this._waitForConfiguredTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForConfiguredTimeoutInput() {
    return this._waitForConfiguredTimeout;
  }

  // wait_for_running - computed: true, optional: true, required: false
  private _waitForRunning?: boolean | cdktf.IResolvable; 
  public get waitForRunning() {
    return this.getBooleanAttribute('wait_for_running');
  }
  public set waitForRunning(value: boolean | cdktf.IResolvable) {
    this._waitForRunning = value;
  }
  public resetWaitForRunning() {
    this._waitForRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRunningInput() {
    return this._waitForRunning;
  }

  // wait_for_running_timeout - computed: true, optional: true, required: false
  private _waitForRunningTimeout?: number; 
  public get waitForRunningTimeout() {
    return this.getNumberAttribute('wait_for_running_timeout');
  }
  public set waitForRunningTimeout(value: number) {
    this._waitForRunningTimeout = value;
  }
  public resetWaitForRunningTimeout() {
    this._waitForRunningTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRunningTimeoutInput() {
    return this._waitForRunningTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_dir: cdktf.stringToTerraform(this._appDir),
      app_type: cdktf.stringToTerraform(this._appType),
      domain: cdktf.stringToTerraform(this._domain),
      endpoints: cdktf.hashMapper(sandboxEndpointsToTerraform)(this._endpoints.internalValue),
      identifier: cdktf.stringToTerraform(this._identifier),
      install_commands: cdktf.stringToTerraform(this._installCommands),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      project_name: cdktf.stringToTerraform(this._projectName),
      resources: cdktf.stringToTerraform(this._resources),
      run_command: cdktf.stringToTerraform(this._runCommand),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      wait_for_app: cdktf.booleanToTerraform(this._waitForApp),
      wait_for_app_timeout: cdktf.numberToTerraform(this._waitForAppTimeout),
      wait_for_configured: cdktf.booleanToTerraform(this._waitForConfigured),
      wait_for_configured_timeout: cdktf.numberToTerraform(this._waitForConfiguredTimeout),
      wait_for_running: cdktf.booleanToTerraform(this._waitForRunning),
      wait_for_running_timeout: cdktf.numberToTerraform(this._waitForRunningTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_dir: {
        value: cdktf.stringToHclTerraform(this._appDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.hashMapperHcl(sandboxEndpointsToHclTerraform)(this._endpoints.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SandboxEndpointsMap",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_commands: {
        value: cdktf.stringToHclTerraform(this._installCommands),
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
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.stringToHclTerraform(this._resources),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_command: {
        value: cdktf.stringToHclTerraform(this._runCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wait_for_app: {
        value: cdktf.booleanToHclTerraform(this._waitForApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_app_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForAppTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_configured: {
        value: cdktf.booleanToHclTerraform(this._waitForConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_configured_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForConfiguredTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_running: {
        value: cdktf.booleanToHclTerraform(this._waitForRunning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_running_timeout: {
        value: cdktf.numberToHclTerraform(this._waitForRunningTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
