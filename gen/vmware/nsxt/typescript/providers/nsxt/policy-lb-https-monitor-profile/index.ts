// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbHttpsMonitorProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#description PolicyLbHttpsMonitorProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#display_name PolicyLbHttpsMonitorProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Number of consecutive checks that must fail before marking it down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#fall_count PolicyLbHttpsMonitorProfile#fall_count}
  */
  readonly fallCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#id PolicyLbHttpsMonitorProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The frequency at which the system issues the monitor check (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#interval PolicyLbHttpsMonitorProfile#interval}
  */
  readonly interval?: number;
  /**
  * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#monitor_port PolicyLbHttpsMonitorProfile#monitor_port}
  */
  readonly monitorPort?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#nsx_id PolicyLbHttpsMonitorProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * String to send as HTTP health check request body. Valid only for certain HTTP methods like POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#request_body PolicyLbHttpsMonitorProfile#request_body}
  */
  readonly requestBody?: string;
  /**
  * Health check method for HTTP monitor type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#request_method PolicyLbHttpsMonitorProfile#request_method}
  */
  readonly requestMethod?: string;
  /**
  * URL used for HTTP monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#request_url PolicyLbHttpsMonitorProfile#request_url}
  */
  readonly requestUrl?: string;
  /**
  * HTTP request version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#request_version PolicyLbHttpsMonitorProfile#request_version}
  */
  readonly requestVersion?: string;
  /**
  * If HTTP specified, healthcheck HTTP response body is matched against the specified string (regular expressions not supported), and succeeds only if there is a match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#response_body PolicyLbHttpsMonitorProfile#response_body}
  */
  readonly responseBody?: string;
  /**
  * The HTTP response status code should be a valid HTTP status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#response_status_codes PolicyLbHttpsMonitorProfile#response_status_codes}
  */
  readonly responseStatusCodes?: number[];
  /**
  * Number of consecutive checks that must pass before marking it up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#rise_count PolicyLbHttpsMonitorProfile#rise_count}
  */
  readonly riseCount?: number;
  /**
  * Number of seconds the target has to respond to the monitor request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#timeout PolicyLbHttpsMonitorProfile#timeout}
  */
  readonly timeout?: number;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#request_header PolicyLbHttpsMonitorProfile#request_header}
  */
  readonly requestHeader?: PolicyLbHttpsMonitorProfileRequestHeader[] | cdktf.IResolvable;
  /**
  * server_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#server_ssl PolicyLbHttpsMonitorProfile#server_ssl}
  */
  readonly serverSsl?: PolicyLbHttpsMonitorProfileServerSsl;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#tag PolicyLbHttpsMonitorProfile#tag}
  */
  readonly tag?: PolicyLbHttpsMonitorProfileTag[] | cdktf.IResolvable;
}
export interface PolicyLbHttpsMonitorProfileRequestHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#name PolicyLbHttpsMonitorProfile#name}
  */
  readonly name: string;
  /**
  * Header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#value PolicyLbHttpsMonitorProfile#value}
  */
  readonly value: string;
}

export function policyLbHttpsMonitorProfileRequestHeaderToTerraform(struct?: PolicyLbHttpsMonitorProfileRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyLbHttpsMonitorProfileRequestHeaderToHclTerraform(struct?: PolicyLbHttpsMonitorProfileRequestHeader | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbHttpsMonitorProfileRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbHttpsMonitorProfileRequestHeader | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbHttpsMonitorProfileRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyLbHttpsMonitorProfileRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : PolicyLbHttpsMonitorProfileRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbHttpsMonitorProfileRequestHeaderOutputReference {
    return new PolicyLbHttpsMonitorProfileRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbHttpsMonitorProfileServerSsl {
  /**
  * Authentication depth is used to set the verification depth in the server certificates chain. format: int64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#certificate_chain_depth PolicyLbHttpsMonitorProfile#certificate_chain_depth}
  */
  readonly certificateChainDepth?: number;
  /**
  * Client certificate path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#client_certificate_path PolicyLbHttpsMonitorProfile#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * Server authentication mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#server_auth PolicyLbHttpsMonitorProfile#server_auth}
  */
  readonly serverAuth?: string;
  /**
  * If server auth type is REQUIRED, server certificate must be signed by one of the trusted Certificate Authorities (CAs), also referred to as root CAs, whose self signed certificates are specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#server_auth_ca_paths PolicyLbHttpsMonitorProfile#server_auth_ca_paths}
  */
  readonly serverAuthCaPaths?: string[];
  /**
  * A Certificate Revocation List (CRL) can be specified in the server-side SSL profile binding to disallow compromised server certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#server_auth_crl_paths PolicyLbHttpsMonitorProfile#server_auth_crl_paths}
  */
  readonly serverAuthCrlPaths?: string[];
  /**
  * SSL profile path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#ssl_profile_path PolicyLbHttpsMonitorProfile#ssl_profile_path}
  */
  readonly sslProfilePath?: string;
}

export function policyLbHttpsMonitorProfileServerSslToTerraform(struct?: PolicyLbHttpsMonitorProfileServerSslOutputReference | PolicyLbHttpsMonitorProfileServerSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain_depth: cdktf.numberToTerraform(struct!.certificateChainDepth),
    client_certificate_path: cdktf.stringToTerraform(struct!.clientCertificatePath),
    server_auth: cdktf.stringToTerraform(struct!.serverAuth),
    server_auth_ca_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverAuthCaPaths),
    server_auth_crl_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverAuthCrlPaths),
    ssl_profile_path: cdktf.stringToTerraform(struct!.sslProfilePath),
  }
}


export function policyLbHttpsMonitorProfileServerSslToHclTerraform(struct?: PolicyLbHttpsMonitorProfileServerSslOutputReference | PolicyLbHttpsMonitorProfileServerSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_chain_depth: {
      value: cdktf.numberToHclTerraform(struct!.certificateChainDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_certificate_path: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_auth: {
      value: cdktf.stringToHclTerraform(struct!.serverAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_auth_ca_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverAuthCaPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_auth_crl_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverAuthCrlPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.sslProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbHttpsMonitorProfileServerSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbHttpsMonitorProfileServerSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChainDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChainDepth = this._certificateChainDepth;
    }
    if (this._clientCertificatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificatePath = this._clientCertificatePath;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._serverAuthCaPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuthCaPaths = this._serverAuthCaPaths;
    }
    if (this._serverAuthCrlPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuthCrlPaths = this._serverAuthCrlPaths;
    }
    if (this._sslProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfilePath = this._sslProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbHttpsMonitorProfileServerSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChainDepth = undefined;
      this._clientCertificatePath = undefined;
      this._serverAuth = undefined;
      this._serverAuthCaPaths = undefined;
      this._serverAuthCrlPaths = undefined;
      this._sslProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChainDepth = value.certificateChainDepth;
      this._clientCertificatePath = value.clientCertificatePath;
      this._serverAuth = value.serverAuth;
      this._serverAuthCaPaths = value.serverAuthCaPaths;
      this._serverAuthCrlPaths = value.serverAuthCrlPaths;
      this._sslProfilePath = value.sslProfilePath;
    }
  }

  // certificate_chain_depth - computed: false, optional: true, required: false
  private _certificateChainDepth?: number; 
  public get certificateChainDepth() {
    return this.getNumberAttribute('certificate_chain_depth');
  }
  public set certificateChainDepth(value: number) {
    this._certificateChainDepth = value;
  }
  public resetCertificateChainDepth() {
    this._certificateChainDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainDepthInput() {
    return this._certificateChainDepth;
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string; 
  public get clientCertificatePath() {
    return this.getStringAttribute('client_certificate_path');
  }
  public set clientCertificatePath(value: string) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath;
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: string; 
  public get serverAuth() {
    return this.getStringAttribute('server_auth');
  }
  public set serverAuth(value: string) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth;
  }

  // server_auth_ca_paths - computed: false, optional: true, required: false
  private _serverAuthCaPaths?: string[]; 
  public get serverAuthCaPaths() {
    return this.getListAttribute('server_auth_ca_paths');
  }
  public set serverAuthCaPaths(value: string[]) {
    this._serverAuthCaPaths = value;
  }
  public resetServerAuthCaPaths() {
    this._serverAuthCaPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthCaPathsInput() {
    return this._serverAuthCaPaths;
  }

  // server_auth_crl_paths - computed: false, optional: true, required: false
  private _serverAuthCrlPaths?: string[]; 
  public get serverAuthCrlPaths() {
    return this.getListAttribute('server_auth_crl_paths');
  }
  public set serverAuthCrlPaths(value: string[]) {
    this._serverAuthCrlPaths = value;
  }
  public resetServerAuthCrlPaths() {
    this._serverAuthCrlPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthCrlPathsInput() {
    return this._serverAuthCrlPaths;
  }

  // ssl_profile_path - computed: false, optional: true, required: false
  private _sslProfilePath?: string; 
  public get sslProfilePath() {
    return this.getStringAttribute('ssl_profile_path');
  }
  public set sslProfilePath(value: string) {
    this._sslProfilePath = value;
  }
  public resetSslProfilePath() {
    this._sslProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfilePathInput() {
    return this._sslProfilePath;
  }
}
export interface PolicyLbHttpsMonitorProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#scope PolicyLbHttpsMonitorProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#tag PolicyLbHttpsMonitorProfile#tag}
  */
  readonly tag?: string;
}

export function policyLbHttpsMonitorProfileTagToTerraform(struct?: PolicyLbHttpsMonitorProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbHttpsMonitorProfileTagToHclTerraform(struct?: PolicyLbHttpsMonitorProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbHttpsMonitorProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbHttpsMonitorProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbHttpsMonitorProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyLbHttpsMonitorProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbHttpsMonitorProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbHttpsMonitorProfileTagOutputReference {
    return new PolicyLbHttpsMonitorProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile nsxt_policy_lb_https_monitor_profile}
*/
export class PolicyLbHttpsMonitorProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_https_monitor_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbHttpsMonitorProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbHttpsMonitorProfile to import
  * @param importFromId The id of the existing PolicyLbHttpsMonitorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbHttpsMonitorProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_https_monitor_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_https_monitor_profile nsxt_policy_lb_https_monitor_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbHttpsMonitorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbHttpsMonitorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_https_monitor_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._displayName = config.displayName;
    this._fallCount = config.fallCount;
    this._id = config.id;
    this._interval = config.interval;
    this._monitorPort = config.monitorPort;
    this._nsxId = config.nsxId;
    this._requestBody = config.requestBody;
    this._requestMethod = config.requestMethod;
    this._requestUrl = config.requestUrl;
    this._requestVersion = config.requestVersion;
    this._responseBody = config.responseBody;
    this._responseStatusCodes = config.responseStatusCodes;
    this._riseCount = config.riseCount;
    this._timeout = config.timeout;
    this._requestHeader.internalValue = config.requestHeader;
    this._serverSsl.internalValue = config.serverSsl;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fall_count - computed: false, optional: true, required: false
  private _fallCount?: number; 
  public get fallCount() {
    return this.getNumberAttribute('fall_count');
  }
  public set fallCount(value: number) {
    this._fallCount = value;
  }
  public resetFallCount() {
    this._fallCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallCountInput() {
    return this._fallCount;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // monitor_port - computed: false, optional: true, required: false
  private _monitorPort?: number; 
  public get monitorPort() {
    return this.getNumberAttribute('monitor_port');
  }
  public set monitorPort(value: number) {
    this._monitorPort = value;
  }
  public resetMonitorPort() {
    this._monitorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPortInput() {
    return this._monitorPort;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_url - computed: false, optional: true, required: false
  private _requestUrl?: string; 
  public get requestUrl() {
    return this.getStringAttribute('request_url');
  }
  public set requestUrl(value: string) {
    this._requestUrl = value;
  }
  public resetRequestUrl() {
    this._requestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlInput() {
    return this._requestUrl;
  }

  // request_version - computed: false, optional: true, required: false
  private _requestVersion?: string; 
  public get requestVersion() {
    return this.getStringAttribute('request_version');
  }
  public set requestVersion(value: string) {
    this._requestVersion = value;
  }
  public resetRequestVersion() {
    this._requestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVersionInput() {
    return this._requestVersion;
  }

  // response_body - computed: false, optional: true, required: false
  private _responseBody?: string; 
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }
  public set responseBody(value: string) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_status_codes - computed: true, optional: true, required: false
  private _responseStatusCodes?: number[]; 
  public get responseStatusCodes() {
    return this.getNumberListAttribute('response_status_codes');
  }
  public set responseStatusCodes(value: number[]) {
    this._responseStatusCodes = value;
  }
  public resetResponseStatusCodes() {
    this._responseStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusCodesInput() {
    return this._responseStatusCodes;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rise_count - computed: false, optional: true, required: false
  private _riseCount?: number; 
  public get riseCount() {
    return this.getNumberAttribute('rise_count');
  }
  public set riseCount(value: number) {
    this._riseCount = value;
  }
  public resetRiseCount() {
    this._riseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseCountInput() {
    return this._riseCount;
  }

  // timeout - computed: false, optional: true, required: false
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

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new PolicyLbHttpsMonitorProfileRequestHeaderList(this, "request_header", true);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: PolicyLbHttpsMonitorProfileRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // server_ssl - computed: false, optional: true, required: false
  private _serverSsl = new PolicyLbHttpsMonitorProfileServerSslOutputReference(this, "server_ssl");
  public get serverSsl() {
    return this._serverSsl;
  }
  public putServerSsl(value: PolicyLbHttpsMonitorProfileServerSsl) {
    this._serverSsl.internalValue = value;
  }
  public resetServerSsl() {
    this._serverSsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslInput() {
    return this._serverSsl.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLbHttpsMonitorProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbHttpsMonitorProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      fall_count: cdktf.numberToTerraform(this._fallCount),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      monitor_port: cdktf.numberToTerraform(this._monitorPort),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      request_url: cdktf.stringToTerraform(this._requestUrl),
      request_version: cdktf.stringToTerraform(this._requestVersion),
      response_body: cdktf.stringToTerraform(this._responseBody),
      response_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._responseStatusCodes),
      rise_count: cdktf.numberToTerraform(this._riseCount),
      timeout: cdktf.numberToTerraform(this._timeout),
      request_header: cdktf.listMapper(policyLbHttpsMonitorProfileRequestHeaderToTerraform, true)(this._requestHeader.internalValue),
      server_ssl: policyLbHttpsMonitorProfileServerSslToTerraform(this._serverSsl.internalValue),
      tag: cdktf.listMapper(policyLbHttpsMonitorProfileTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_count: {
        value: cdktf.numberToHclTerraform(this._fallCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_port: {
        value: cdktf.numberToHclTerraform(this._monitorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_method: {
        value: cdktf.stringToHclTerraform(this._requestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_url: {
        value: cdktf.stringToHclTerraform(this._requestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_version: {
        value: cdktf.stringToHclTerraform(this._requestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_body: {
        value: cdktf.stringToHclTerraform(this._responseBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._responseStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      rise_count: {
        value: cdktf.numberToHclTerraform(this._riseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_header: {
        value: cdktf.listMapperHcl(policyLbHttpsMonitorProfileRequestHeaderToHclTerraform, true)(this._requestHeader.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbHttpsMonitorProfileRequestHeaderList",
      },
      server_ssl: {
        value: policyLbHttpsMonitorProfileServerSslToHclTerraform(this._serverSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbHttpsMonitorProfileServerSslList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLbHttpsMonitorProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbHttpsMonitorProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
