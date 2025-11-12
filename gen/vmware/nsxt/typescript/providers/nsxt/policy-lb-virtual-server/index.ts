// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If enabled, all connections/requests sent to virtual server are logged to the access log file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#access_log_enabled PolicyLbVirtualServer#access_log_enabled}
  */
  readonly accessLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Application profile for this virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#application_profile_path PolicyLbVirtualServer#application_profile_path}
  */
  readonly applicationProfilePath: string;
  /**
  * Default pool member ports when member port is not defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#default_pool_member_ports PolicyLbVirtualServer#default_pool_member_ports}
  */
  readonly defaultPoolMemberPorts?: string[];
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#description PolicyLbVirtualServer#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#display_name PolicyLbVirtualServer#display_name}
  */
  readonly displayName: string;
  /**
  * Flag to enable Virtual Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#enabled PolicyLbVirtualServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#id PolicyLbVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual Server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ip_address PolicyLbVirtualServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Flag to log significant events in access log, if access log is enabed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#log_significant_event_only PolicyLbVirtualServer#log_significant_event_only}
  */
  readonly logSignificantEventOnly?: boolean | cdktf.IResolvable;
  /**
  * To ensure one virtual server does not over consume resources, connections to a virtual server can be capped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#max_concurrent_connections PolicyLbVirtualServer#max_concurrent_connections}
  */
  readonly maxConcurrentConnections?: number;
  /**
  * To ensure one virtual server does not over consume resources, connections to a member can be rate limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#max_new_connection_rate PolicyLbVirtualServer#max_new_connection_rate}
  */
  readonly maxNewConnectionRate?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#nsx_id PolicyLbVirtualServer#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Path to persistence profile allowing related client connections to be sent to the same backend server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#persistence_profile_path PolicyLbVirtualServer#persistence_profile_path}
  */
  readonly persistenceProfilePath?: string;
  /**
  * Path for Load Balancer Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#pool_path PolicyLbVirtualServer#pool_path}
  */
  readonly poolPath?: string;
  /**
  * Virtual Server ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ports PolicyLbVirtualServer#ports}
  */
  readonly ports: string[];
  /**
  * Virtual Server can be associated with Load Balancer Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#service_path PolicyLbVirtualServer#service_path}
  */
  readonly servicePath?: string;
  /**
  * When load balancer can not select server in default pool or pool in rules, the request would be served by sorry pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#sorry_pool_path PolicyLbVirtualServer#sorry_pool_path}
  */
  readonly sorryPoolPath?: string;
  /**
  * access_list_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#access_list_control PolicyLbVirtualServer#access_list_control}
  */
  readonly accessListControl?: PolicyLbVirtualServerAccessListControl;
  /**
  * client_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#client_ssl PolicyLbVirtualServer#client_ssl}
  */
  readonly clientSsl?: PolicyLbVirtualServerClientSsl;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#rule PolicyLbVirtualServer#rule}
  */
  readonly rule?: PolicyLbVirtualServerRule[] | cdktf.IResolvable;
  /**
  * server_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#server_ssl PolicyLbVirtualServer#server_ssl}
  */
  readonly serverSsl?: PolicyLbVirtualServerServerSsl;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#tag PolicyLbVirtualServer#tag}
  */
  readonly tag?: PolicyLbVirtualServerTag[] | cdktf.IResolvable;
}
export interface PolicyLbVirtualServerAccessListControl {
  /**
  * Action to apply to connections matching the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#action PolicyLbVirtualServer#action}
  */
  readonly action: string;
  /**
  * Flag to enable access list control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#enabled PolicyLbVirtualServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The path of grouping object which defines the IP addresses or ranges to match the client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#group_path PolicyLbVirtualServer#group_path}
  */
  readonly groupPath: string;
}

export function policyLbVirtualServerAccessListControlToTerraform(struct?: PolicyLbVirtualServerAccessListControlOutputReference | PolicyLbVirtualServerAccessListControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_path: cdktf.stringToTerraform(struct!.groupPath),
  }
}


export function policyLbVirtualServerAccessListControlToHclTerraform(struct?: PolicyLbVirtualServerAccessListControlOutputReference | PolicyLbVirtualServerAccessListControl): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_path: {
      value: cdktf.stringToHclTerraform(struct!.groupPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerAccessListControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbVirtualServerAccessListControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPath = this._groupPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerAccessListControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
      this._groupPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
      this._groupPath = value.groupPath;
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

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }
}
export interface PolicyLbVirtualServerClientSsl {
  /**
  * If client auth type is REQUIRED, client certificate must be signed by one Certificate Authorities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ca_paths PolicyLbVirtualServer#ca_paths}
  */
  readonly caPaths?: string[];
  /**
  * Certificate chain depth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#certificate_chain_depth PolicyLbVirtualServer#certificate_chain_depth}
  */
  readonly certificateChainDepth?: number;
  /**
  * Client authentication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#client_auth PolicyLbVirtualServer#client_auth}
  */
  readonly clientAuth?: string;
  /**
  * Certificate Revocation Lists can be specified to disallow compromised certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#crl_paths PolicyLbVirtualServer#crl_paths}
  */
  readonly crlPaths?: string[];
  /**
  * Default Certificate Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#default_certificate_path PolicyLbVirtualServer#default_certificate_path}
  */
  readonly defaultCertificatePath: string;
  /**
  * This setting allows multiple certificates, for different hostnames, to be bound to the same virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#sni_paths PolicyLbVirtualServer#sni_paths}
  */
  readonly sniPaths?: string[];
  /**
  * Client SSL Profile Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ssl_profile_path PolicyLbVirtualServer#ssl_profile_path}
  */
  readonly sslProfilePath?: string;
}

export function policyLbVirtualServerClientSslToTerraform(struct?: PolicyLbVirtualServerClientSslOutputReference | PolicyLbVirtualServerClientSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caPaths),
    certificate_chain_depth: cdktf.numberToTerraform(struct!.certificateChainDepth),
    client_auth: cdktf.stringToTerraform(struct!.clientAuth),
    crl_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crlPaths),
    default_certificate_path: cdktf.stringToTerraform(struct!.defaultCertificatePath),
    sni_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniPaths),
    ssl_profile_path: cdktf.stringToTerraform(struct!.sslProfilePath),
  }
}


export function policyLbVirtualServerClientSslToHclTerraform(struct?: PolicyLbVirtualServerClientSslOutputReference | PolicyLbVirtualServerClientSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    certificate_chain_depth: {
      value: cdktf.numberToHclTerraform(struct!.certificateChainDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_auth: {
      value: cdktf.stringToHclTerraform(struct!.clientAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crlPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_certificate_path: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniPaths),
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

export class PolicyLbVirtualServerClientSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbVirtualServerClientSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPaths = this._caPaths;
    }
    if (this._certificateChainDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChainDepth = this._certificateChainDepth;
    }
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._crlPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlPaths = this._crlPaths;
    }
    if (this._defaultCertificatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificatePath = this._defaultCertificatePath;
    }
    if (this._sniPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniPaths = this._sniPaths;
    }
    if (this._sslProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfilePath = this._sslProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerClientSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caPaths = undefined;
      this._certificateChainDepth = undefined;
      this._clientAuth = undefined;
      this._crlPaths = undefined;
      this._defaultCertificatePath = undefined;
      this._sniPaths = undefined;
      this._sslProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caPaths = value.caPaths;
      this._certificateChainDepth = value.certificateChainDepth;
      this._clientAuth = value.clientAuth;
      this._crlPaths = value.crlPaths;
      this._defaultCertificatePath = value.defaultCertificatePath;
      this._sniPaths = value.sniPaths;
      this._sslProfilePath = value.sslProfilePath;
    }
  }

  // ca_paths - computed: false, optional: true, required: false
  private _caPaths?: string[]; 
  public get caPaths() {
    return this.getListAttribute('ca_paths');
  }
  public set caPaths(value: string[]) {
    this._caPaths = value;
  }
  public resetCaPaths() {
    this._caPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathsInput() {
    return this._caPaths;
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

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: string; 
  public get clientAuth() {
    return this.getStringAttribute('client_auth');
  }
  public set clientAuth(value: string) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // crl_paths - computed: false, optional: true, required: false
  private _crlPaths?: string[]; 
  public get crlPaths() {
    return this.getListAttribute('crl_paths');
  }
  public set crlPaths(value: string[]) {
    this._crlPaths = value;
  }
  public resetCrlPaths() {
    this._crlPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlPathsInput() {
    return this._crlPaths;
  }

  // default_certificate_path - computed: false, optional: false, required: true
  private _defaultCertificatePath?: string; 
  public get defaultCertificatePath() {
    return this.getStringAttribute('default_certificate_path');
  }
  public set defaultCertificatePath(value: string) {
    this._defaultCertificatePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificatePathInput() {
    return this._defaultCertificatePath;
  }

  // sni_paths - computed: false, optional: true, required: false
  private _sniPaths?: string[]; 
  public get sniPaths() {
    return this.getListAttribute('sni_paths');
  }
  public set sniPaths(value: string[]) {
    this._sniPaths = value;
  }
  public resetSniPaths() {
    this._sniPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniPathsInput() {
    return this._sniPaths;
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
export interface PolicyLbVirtualServerRuleActionConnectionDrop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#_dummy PolicyLbVirtualServer#_dummy}
  */
  readonly dummy?: string;
}

export function policyLbVirtualServerRuleActionConnectionDropToTerraform(struct?: PolicyLbVirtualServerRuleActionConnectionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _dummy: cdktf.stringToTerraform(struct!.dummy),
  }
}


export function policyLbVirtualServerRuleActionConnectionDropToHclTerraform(struct?: PolicyLbVirtualServerRuleActionConnectionDrop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _dummy: {
      value: cdktf.stringToHclTerraform(struct!.dummy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionConnectionDropOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionConnectionDrop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionConnectionDrop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dummy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dummy = value.dummy;
    }
  }

  // _dummy - computed: false, optional: true, required: false
  private _dummy?: string; 
  public get dummy() {
    return this.getStringAttribute('_dummy');
  }
  public set dummy(value: string) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
  }
}

export class PolicyLbVirtualServerRuleActionConnectionDropList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionConnectionDrop[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionConnectionDropOutputReference {
    return new PolicyLbVirtualServerRuleActionConnectionDropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#redirect_status PolicyLbVirtualServer#redirect_status}
  */
  readonly redirectStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#redirect_url PolicyLbVirtualServer#redirect_url}
  */
  readonly redirectUrl: string;
}

export function policyLbVirtualServerRuleActionHttpRedirectToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_status: cdktf.stringToTerraform(struct!.redirectStatus),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
  }
}


export function policyLbVirtualServerRuleActionHttpRedirectToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_status: {
      value: cdktf.stringToHclTerraform(struct!.redirectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectStatus = this._redirectStatus;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redirectStatus = undefined;
      this._redirectUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redirectStatus = value.redirectStatus;
      this._redirectUrl = value.redirectUrl;
    }
  }

  // redirect_status - computed: false, optional: false, required: true
  private _redirectStatus?: string; 
  public get redirectStatus() {
    return this.getStringAttribute('redirect_status');
  }
  public set redirectStatus(value: string) {
    this._redirectStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectStatusInput() {
    return this._redirectStatus;
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }
}

export class PolicyLbVirtualServerRuleActionHttpRedirectList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpRedirect[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpRedirectOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpReject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#reply_message PolicyLbVirtualServer#reply_message}
  */
  readonly replyMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#reply_status PolicyLbVirtualServer#reply_status}
  */
  readonly replyStatus: string;
}

export function policyLbVirtualServerRuleActionHttpRejectToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpReject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reply_message: cdktf.stringToTerraform(struct!.replyMessage),
    reply_status: cdktf.stringToTerraform(struct!.replyStatus),
  }
}


export function policyLbVirtualServerRuleActionHttpRejectToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpReject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reply_message: {
      value: cdktf.stringToHclTerraform(struct!.replyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_status: {
      value: cdktf.stringToHclTerraform(struct!.replyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpRejectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpReject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyMessage = this._replyMessage;
    }
    if (this._replyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyStatus = this._replyStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpReject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replyMessage = undefined;
      this._replyStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replyMessage = value.replyMessage;
      this._replyStatus = value.replyStatus;
    }
  }

  // reply_message - computed: false, optional: true, required: false
  private _replyMessage?: string; 
  public get replyMessage() {
    return this.getStringAttribute('reply_message');
  }
  public set replyMessage(value: string) {
    this._replyMessage = value;
  }
  public resetReplyMessage() {
    this._replyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyMessageInput() {
    return this._replyMessage;
  }

  // reply_status - computed: false, optional: false, required: true
  private _replyStatus?: string; 
  public get replyStatus() {
    return this.getStringAttribute('reply_status');
  }
  public set replyStatus(value: string) {
    this._replyStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replyStatusInput() {
    return this._replyStatus;
  }
}

export class PolicyLbVirtualServerRuleActionHttpRejectList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpReject[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpRejectOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpRejectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_name PolicyLbVirtualServer#header_name}
  */
  readonly headerName: string;
}

export function policyLbVirtualServerRuleActionHttpRequestHeaderDeleteToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function policyLbVirtualServerRuleActionHttpRequestHeaderDeleteToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpRequestHeaderDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
    }
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
}

export class PolicyLbVirtualServerRuleActionHttpRequestHeaderDeleteList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpRequestHeaderDeleteOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpRequestHeaderDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_name PolicyLbVirtualServer#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_value PolicyLbVirtualServer#header_value}
  */
  readonly headerValue: string;
}

export function policyLbVirtualServerRuleActionHttpRequestHeaderRewriteToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function policyLbVirtualServerRuleActionHttpRequestHeaderRewriteToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpRequestHeaderRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
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

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class PolicyLbVirtualServerRuleActionHttpRequestHeaderRewriteList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpRequestHeaderRewriteOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpRequestHeaderRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpRequestUriRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#uri PolicyLbVirtualServer#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#uri_arguments PolicyLbVirtualServer#uri_arguments}
  */
  readonly uriArguments?: string;
}

export function policyLbVirtualServerRuleActionHttpRequestUriRewriteToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRequestUriRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
    uri_arguments: cdktf.stringToTerraform(struct!.uriArguments),
  }
}


export function policyLbVirtualServerRuleActionHttpRequestUriRewriteToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpRequestUriRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_arguments: {
      value: cdktf.stringToHclTerraform(struct!.uriArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpRequestUriRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpRequestUriRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._uriArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriArguments = this._uriArguments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpRequestUriRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
      this._uriArguments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
      this._uriArguments = value.uriArguments;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // uri_arguments - computed: false, optional: true, required: false
  private _uriArguments?: string; 
  public get uriArguments() {
    return this.getStringAttribute('uri_arguments');
  }
  public set uriArguments(value: string) {
    this._uriArguments = value;
  }
  public resetUriArguments() {
    this._uriArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriArgumentsInput() {
    return this._uriArguments;
  }
}

export class PolicyLbVirtualServerRuleActionHttpRequestUriRewriteList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpRequestUriRewrite[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpRequestUriRewriteOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpRequestUriRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_name PolicyLbVirtualServer#header_name}
  */
  readonly headerName: string;
}

export function policyLbVirtualServerRuleActionHttpResponseHeaderDeleteToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function policyLbVirtualServerRuleActionHttpResponseHeaderDeleteToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpResponseHeaderDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
    }
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
}

export class PolicyLbVirtualServerRuleActionHttpResponseHeaderDeleteList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpResponseHeaderDeleteOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpResponseHeaderDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_name PolicyLbVirtualServer#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_value PolicyLbVirtualServer#header_value}
  */
  readonly headerValue: string;
}

export function policyLbVirtualServerRuleActionHttpResponseHeaderRewriteToTerraform(struct?: PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function policyLbVirtualServerRuleActionHttpResponseHeaderRewriteToHclTerraform(struct?: PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionHttpResponseHeaderRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
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

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class PolicyLbVirtualServerRuleActionHttpResponseHeaderRewriteList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionHttpResponseHeaderRewriteOutputReference {
    return new PolicyLbVirtualServerRuleActionHttpResponseHeaderRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionJwtAuthKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#certificate_path PolicyLbVirtualServer#certificate_path}
  */
  readonly certificatePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#public_key_content PolicyLbVirtualServer#public_key_content}
  */
  readonly publicKeyContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#symmetric_key PolicyLbVirtualServer#symmetric_key}
  */
  readonly symmetricKey?: string;
}

export function policyLbVirtualServerRuleActionJwtAuthKeyToTerraform(struct?: PolicyLbVirtualServerRuleActionJwtAuthKeyOutputReference | PolicyLbVirtualServerRuleActionJwtAuthKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_path: cdktf.stringToTerraform(struct!.certificatePath),
    public_key_content: cdktf.stringToTerraform(struct!.publicKeyContent),
    symmetric_key: cdktf.stringToTerraform(struct!.symmetricKey),
  }
}


export function policyLbVirtualServerRuleActionJwtAuthKeyToHclTerraform(struct?: PolicyLbVirtualServerRuleActionJwtAuthKeyOutputReference | PolicyLbVirtualServerRuleActionJwtAuthKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_path: {
      value: cdktf.stringToHclTerraform(struct!.certificatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_content: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    symmetric_key: {
      value: cdktf.stringToHclTerraform(struct!.symmetricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionJwtAuthKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbVirtualServerRuleActionJwtAuthKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePath = this._certificatePath;
    }
    if (this._publicKeyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyContent = this._publicKeyContent;
    }
    if (this._symmetricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionJwtAuthKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificatePath = undefined;
      this._publicKeyContent = undefined;
      this._symmetricKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificatePath = value.certificatePath;
      this._publicKeyContent = value.publicKeyContent;
      this._symmetricKey = value.symmetricKey;
    }
  }

  // certificate_path - computed: false, optional: true, required: false
  private _certificatePath?: string; 
  public get certificatePath() {
    return this.getStringAttribute('certificate_path');
  }
  public set certificatePath(value: string) {
    this._certificatePath = value;
  }
  public resetCertificatePath() {
    this._certificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePathInput() {
    return this._certificatePath;
  }

  // public_key_content - computed: false, optional: true, required: false
  private _publicKeyContent?: string; 
  public get publicKeyContent() {
    return this.getStringAttribute('public_key_content');
  }
  public set publicKeyContent(value: string) {
    this._publicKeyContent = value;
  }
  public resetPublicKeyContent() {
    this._publicKeyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyContentInput() {
    return this._publicKeyContent;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey?: string; 
  public get symmetricKey() {
    return this.getStringAttribute('symmetric_key');
  }
  public set symmetricKey(value: string) {
    this._symmetricKey = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey;
  }
}
export interface PolicyLbVirtualServerRuleActionJwtAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#pass_jwt_to_pool PolicyLbVirtualServer#pass_jwt_to_pool}
  */
  readonly passJwtToPool?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#realm PolicyLbVirtualServer#realm}
  */
  readonly realm?: string;
  /**
  * JWT tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#tokens PolicyLbVirtualServer#tokens}
  */
  readonly tokens?: string[];
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#key PolicyLbVirtualServer#key}
  */
  readonly key?: PolicyLbVirtualServerRuleActionJwtAuthKey;
}

export function policyLbVirtualServerRuleActionJwtAuthToTerraform(struct?: PolicyLbVirtualServerRuleActionJwtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass_jwt_to_pool: cdktf.booleanToTerraform(struct!.passJwtToPool),
    realm: cdktf.stringToTerraform(struct!.realm),
    tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokens),
    key: policyLbVirtualServerRuleActionJwtAuthKeyToTerraform(struct!.key),
  }
}


export function policyLbVirtualServerRuleActionJwtAuthToHclTerraform(struct?: PolicyLbVirtualServerRuleActionJwtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass_jwt_to_pool: {
      value: cdktf.booleanToHclTerraform(struct!.passJwtToPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokens),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: policyLbVirtualServerRuleActionJwtAuthKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyLbVirtualServerRuleActionJwtAuthKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionJwtAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionJwtAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passJwtToPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.passJwtToPool = this._passJwtToPool;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionJwtAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passJwtToPool = undefined;
      this._realm = undefined;
      this._tokens = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passJwtToPool = value.passJwtToPool;
      this._realm = value.realm;
      this._tokens = value.tokens;
      this._key.internalValue = value.key;
    }
  }

  // pass_jwt_to_pool - computed: false, optional: true, required: false
  private _passJwtToPool?: boolean | cdktf.IResolvable; 
  public get passJwtToPool() {
    return this.getBooleanAttribute('pass_jwt_to_pool');
  }
  public set passJwtToPool(value: boolean | cdktf.IResolvable) {
    this._passJwtToPool = value;
  }
  public resetPassJwtToPool() {
    this._passJwtToPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passJwtToPoolInput() {
    return this._passJwtToPool;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens?: string[]; 
  public get tokens() {
    return this.getListAttribute('tokens');
  }
  public set tokens(value: string[]) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }

  // key - computed: false, optional: true, required: false
  private _key = new PolicyLbVirtualServerRuleActionJwtAuthKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: PolicyLbVirtualServerRuleActionJwtAuthKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class PolicyLbVirtualServerRuleActionJwtAuthList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionJwtAuth[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionJwtAuthOutputReference {
    return new PolicyLbVirtualServerRuleActionJwtAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionSelectPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#pool_id PolicyLbVirtualServer#pool_id}
  */
  readonly poolId: string;
}

export function policyLbVirtualServerRuleActionSelectPoolToTerraform(struct?: PolicyLbVirtualServerRuleActionSelectPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_id: cdktf.stringToTerraform(struct!.poolId),
  }
}


export function policyLbVirtualServerRuleActionSelectPoolToHclTerraform(struct?: PolicyLbVirtualServerRuleActionSelectPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_id: {
      value: cdktf.stringToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionSelectPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionSelectPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionSelectPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolId = value.poolId;
    }
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }
}

export class PolicyLbVirtualServerRuleActionSelectPoolList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionSelectPool[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionSelectPoolOutputReference {
    return new PolicyLbVirtualServerRuleActionSelectPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionSslModeSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ssl_mode PolicyLbVirtualServer#ssl_mode}
  */
  readonly sslMode: string;
}

export function policyLbVirtualServerRuleActionSslModeSelectionToTerraform(struct?: PolicyLbVirtualServerRuleActionSslModeSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
  }
}


export function policyLbVirtualServerRuleActionSslModeSelectionToHclTerraform(struct?: PolicyLbVirtualServerRuleActionSslModeSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionSslModeSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionSslModeSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionSslModeSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslMode = value.sslMode;
    }
  }

  // ssl_mode - computed: false, optional: false, required: true
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class PolicyLbVirtualServerRuleActionSslModeSelectionList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionSslModeSelection[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionSslModeSelectionOutputReference {
    return new PolicyLbVirtualServerRuleActionSslModeSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionVariableAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_name PolicyLbVirtualServer#variable_name}
  */
  readonly variableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_value PolicyLbVirtualServer#variable_value}
  */
  readonly variableValue: string;
}

export function policyLbVirtualServerRuleActionVariableAssignmentToTerraform(struct?: PolicyLbVirtualServerRuleActionVariableAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable_name: cdktf.stringToTerraform(struct!.variableName),
    variable_value: cdktf.stringToTerraform(struct!.variableValue),
  }
}


export function policyLbVirtualServerRuleActionVariableAssignmentToHclTerraform(struct?: PolicyLbVirtualServerRuleActionVariableAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_value: {
      value: cdktf.stringToHclTerraform(struct!.variableValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionVariableAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionVariableAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    if (this._variableValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableValue = this._variableValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionVariableAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variableName = undefined;
      this._variableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variableName = value.variableName;
      this._variableValue = value.variableValue;
    }
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // variable_value - computed: false, optional: false, required: true
  private _variableValue?: string; 
  public get variableValue() {
    return this.getStringAttribute('variable_value');
  }
  public set variableValue(value: string) {
    this._variableValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableValueInput() {
    return this._variableValue;
  }
}

export class PolicyLbVirtualServerRuleActionVariableAssignmentList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionVariableAssignment[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionVariableAssignmentOutputReference {
    return new PolicyLbVirtualServerRuleActionVariableAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionVariablePersistenceLearn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#persistence_profile_path PolicyLbVirtualServer#persistence_profile_path}
  */
  readonly persistenceProfilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_hash_enabled PolicyLbVirtualServer#variable_hash_enabled}
  */
  readonly variableHashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_name PolicyLbVirtualServer#variable_name}
  */
  readonly variableName: string;
}

export function policyLbVirtualServerRuleActionVariablePersistenceLearnToTerraform(struct?: PolicyLbVirtualServerRuleActionVariablePersistenceLearn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistence_profile_path: cdktf.stringToTerraform(struct!.persistenceProfilePath),
    variable_hash_enabled: cdktf.booleanToTerraform(struct!.variableHashEnabled),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function policyLbVirtualServerRuleActionVariablePersistenceLearnToHclTerraform(struct?: PolicyLbVirtualServerRuleActionVariablePersistenceLearn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistence_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.persistenceProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_hash_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.variableHashEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionVariablePersistenceLearnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionVariablePersistenceLearn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistenceProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistenceProfilePath = this._persistenceProfilePath;
    }
    if (this._variableHashEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableHashEnabled = this._variableHashEnabled;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionVariablePersistenceLearn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistenceProfilePath = undefined;
      this._variableHashEnabled = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistenceProfilePath = value.persistenceProfilePath;
      this._variableHashEnabled = value.variableHashEnabled;
      this._variableName = value.variableName;
    }
  }

  // persistence_profile_path - computed: false, optional: true, required: false
  private _persistenceProfilePath?: string; 
  public get persistenceProfilePath() {
    return this.getStringAttribute('persistence_profile_path');
  }
  public set persistenceProfilePath(value: string) {
    this._persistenceProfilePath = value;
  }
  public resetPersistenceProfilePath() {
    this._persistenceProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfilePathInput() {
    return this._persistenceProfilePath;
  }

  // variable_hash_enabled - computed: false, optional: true, required: false
  private _variableHashEnabled?: boolean | cdktf.IResolvable; 
  public get variableHashEnabled() {
    return this.getBooleanAttribute('variable_hash_enabled');
  }
  public set variableHashEnabled(value: boolean | cdktf.IResolvable) {
    this._variableHashEnabled = value;
  }
  public resetVariableHashEnabled() {
    this._variableHashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableHashEnabledInput() {
    return this._variableHashEnabled;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}

export class PolicyLbVirtualServerRuleActionVariablePersistenceLearnList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionVariablePersistenceLearn[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionVariablePersistenceLearnOutputReference {
    return new PolicyLbVirtualServerRuleActionVariablePersistenceLearnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleActionVariablePersistenceOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#persistence_profile_path PolicyLbVirtualServer#persistence_profile_path}
  */
  readonly persistenceProfilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_hash_enabled PolicyLbVirtualServer#variable_hash_enabled}
  */
  readonly variableHashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_name PolicyLbVirtualServer#variable_name}
  */
  readonly variableName: string;
}

export function policyLbVirtualServerRuleActionVariablePersistenceOnToTerraform(struct?: PolicyLbVirtualServerRuleActionVariablePersistenceOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistence_profile_path: cdktf.stringToTerraform(struct!.persistenceProfilePath),
    variable_hash_enabled: cdktf.booleanToTerraform(struct!.variableHashEnabled),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function policyLbVirtualServerRuleActionVariablePersistenceOnToHclTerraform(struct?: PolicyLbVirtualServerRuleActionVariablePersistenceOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistence_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.persistenceProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_hash_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.variableHashEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionVariablePersistenceOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleActionVariablePersistenceOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistenceProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistenceProfilePath = this._persistenceProfilePath;
    }
    if (this._variableHashEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableHashEnabled = this._variableHashEnabled;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleActionVariablePersistenceOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistenceProfilePath = undefined;
      this._variableHashEnabled = undefined;
      this._variableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistenceProfilePath = value.persistenceProfilePath;
      this._variableHashEnabled = value.variableHashEnabled;
      this._variableName = value.variableName;
    }
  }

  // persistence_profile_path - computed: false, optional: true, required: false
  private _persistenceProfilePath?: string; 
  public get persistenceProfilePath() {
    return this.getStringAttribute('persistence_profile_path');
  }
  public set persistenceProfilePath(value: string) {
    this._persistenceProfilePath = value;
  }
  public resetPersistenceProfilePath() {
    this._persistenceProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfilePathInput() {
    return this._persistenceProfilePath;
  }

  // variable_hash_enabled - computed: false, optional: true, required: false
  private _variableHashEnabled?: boolean | cdktf.IResolvable; 
  public get variableHashEnabled() {
    return this.getBooleanAttribute('variable_hash_enabled');
  }
  public set variableHashEnabled(value: boolean | cdktf.IResolvable) {
    this._variableHashEnabled = value;
  }
  public resetVariableHashEnabled() {
    this._variableHashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableHashEnabledInput() {
    return this._variableHashEnabled;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}

export class PolicyLbVirtualServerRuleActionVariablePersistenceOnList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleActionVariablePersistenceOn[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionVariablePersistenceOnOutputReference {
    return new PolicyLbVirtualServerRuleActionVariablePersistenceOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleAction {
  /**
  * connection_drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#connection_drop PolicyLbVirtualServer#connection_drop}
  */
  readonly connectionDrop?: PolicyLbVirtualServerRuleActionConnectionDrop[] | cdktf.IResolvable;
  /**
  * http_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_redirect PolicyLbVirtualServer#http_redirect}
  */
  readonly httpRedirect?: PolicyLbVirtualServerRuleActionHttpRedirect[] | cdktf.IResolvable;
  /**
  * http_reject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_reject PolicyLbVirtualServer#http_reject}
  */
  readonly httpReject?: PolicyLbVirtualServerRuleActionHttpReject[] | cdktf.IResolvable;
  /**
  * http_request_header_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_header_delete PolicyLbVirtualServer#http_request_header_delete}
  */
  readonly httpRequestHeaderDelete?: PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete[] | cdktf.IResolvable;
  /**
  * http_request_header_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_header_rewrite PolicyLbVirtualServer#http_request_header_rewrite}
  */
  readonly httpRequestHeaderRewrite?: PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite[] | cdktf.IResolvable;
  /**
  * http_request_uri_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_uri_rewrite PolicyLbVirtualServer#http_request_uri_rewrite}
  */
  readonly httpRequestUriRewrite?: PolicyLbVirtualServerRuleActionHttpRequestUriRewrite[] | cdktf.IResolvable;
  /**
  * http_response_header_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_response_header_delete PolicyLbVirtualServer#http_response_header_delete}
  */
  readonly httpResponseHeaderDelete?: PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete[] | cdktf.IResolvable;
  /**
  * http_response_header_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_response_header_rewrite PolicyLbVirtualServer#http_response_header_rewrite}
  */
  readonly httpResponseHeaderRewrite?: PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite[] | cdktf.IResolvable;
  /**
  * jwt_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#jwt_auth PolicyLbVirtualServer#jwt_auth}
  */
  readonly jwtAuth?: PolicyLbVirtualServerRuleActionJwtAuth[] | cdktf.IResolvable;
  /**
  * select_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#select_pool PolicyLbVirtualServer#select_pool}
  */
  readonly selectPool?: PolicyLbVirtualServerRuleActionSelectPool[] | cdktf.IResolvable;
  /**
  * ssl_mode_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ssl_mode_selection PolicyLbVirtualServer#ssl_mode_selection}
  */
  readonly sslModeSelection?: PolicyLbVirtualServerRuleActionSslModeSelection[] | cdktf.IResolvable;
  /**
  * variable_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_assignment PolicyLbVirtualServer#variable_assignment}
  */
  readonly variableAssignment?: PolicyLbVirtualServerRuleActionVariableAssignment[] | cdktf.IResolvable;
  /**
  * variable_persistence_learn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_persistence_learn PolicyLbVirtualServer#variable_persistence_learn}
  */
  readonly variablePersistenceLearn?: PolicyLbVirtualServerRuleActionVariablePersistenceLearn[] | cdktf.IResolvable;
  /**
  * variable_persistence_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_persistence_on PolicyLbVirtualServer#variable_persistence_on}
  */
  readonly variablePersistenceOn?: PolicyLbVirtualServerRuleActionVariablePersistenceOn[] | cdktf.IResolvable;
}

export function policyLbVirtualServerRuleActionToTerraform(struct?: PolicyLbVirtualServerRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_drop: cdktf.listMapper(policyLbVirtualServerRuleActionConnectionDropToTerraform, true)(struct!.connectionDrop),
    http_redirect: cdktf.listMapper(policyLbVirtualServerRuleActionHttpRedirectToTerraform, true)(struct!.httpRedirect),
    http_reject: cdktf.listMapper(policyLbVirtualServerRuleActionHttpRejectToTerraform, true)(struct!.httpReject),
    http_request_header_delete: cdktf.listMapper(policyLbVirtualServerRuleActionHttpRequestHeaderDeleteToTerraform, true)(struct!.httpRequestHeaderDelete),
    http_request_header_rewrite: cdktf.listMapper(policyLbVirtualServerRuleActionHttpRequestHeaderRewriteToTerraform, true)(struct!.httpRequestHeaderRewrite),
    http_request_uri_rewrite: cdktf.listMapper(policyLbVirtualServerRuleActionHttpRequestUriRewriteToTerraform, true)(struct!.httpRequestUriRewrite),
    http_response_header_delete: cdktf.listMapper(policyLbVirtualServerRuleActionHttpResponseHeaderDeleteToTerraform, true)(struct!.httpResponseHeaderDelete),
    http_response_header_rewrite: cdktf.listMapper(policyLbVirtualServerRuleActionHttpResponseHeaderRewriteToTerraform, true)(struct!.httpResponseHeaderRewrite),
    jwt_auth: cdktf.listMapper(policyLbVirtualServerRuleActionJwtAuthToTerraform, true)(struct!.jwtAuth),
    select_pool: cdktf.listMapper(policyLbVirtualServerRuleActionSelectPoolToTerraform, true)(struct!.selectPool),
    ssl_mode_selection: cdktf.listMapper(policyLbVirtualServerRuleActionSslModeSelectionToTerraform, true)(struct!.sslModeSelection),
    variable_assignment: cdktf.listMapper(policyLbVirtualServerRuleActionVariableAssignmentToTerraform, true)(struct!.variableAssignment),
    variable_persistence_learn: cdktf.listMapper(policyLbVirtualServerRuleActionVariablePersistenceLearnToTerraform, true)(struct!.variablePersistenceLearn),
    variable_persistence_on: cdktf.listMapper(policyLbVirtualServerRuleActionVariablePersistenceOnToTerraform, true)(struct!.variablePersistenceOn),
  }
}


export function policyLbVirtualServerRuleActionToHclTerraform(struct?: PolicyLbVirtualServerRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_drop: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionConnectionDropToHclTerraform, true)(struct!.connectionDrop),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionConnectionDropList",
    },
    http_redirect: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpRedirectToHclTerraform, true)(struct!.httpRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpRedirectList",
    },
    http_reject: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpRejectToHclTerraform, true)(struct!.httpReject),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpRejectList",
    },
    http_request_header_delete: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpRequestHeaderDeleteToHclTerraform, true)(struct!.httpRequestHeaderDelete),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpRequestHeaderDeleteList",
    },
    http_request_header_rewrite: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpRequestHeaderRewriteToHclTerraform, true)(struct!.httpRequestHeaderRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpRequestHeaderRewriteList",
    },
    http_request_uri_rewrite: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpRequestUriRewriteToHclTerraform, true)(struct!.httpRequestUriRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpRequestUriRewriteList",
    },
    http_response_header_delete: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpResponseHeaderDeleteToHclTerraform, true)(struct!.httpResponseHeaderDelete),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpResponseHeaderDeleteList",
    },
    http_response_header_rewrite: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionHttpResponseHeaderRewriteToHclTerraform, true)(struct!.httpResponseHeaderRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionHttpResponseHeaderRewriteList",
    },
    jwt_auth: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionJwtAuthToHclTerraform, true)(struct!.jwtAuth),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionJwtAuthList",
    },
    select_pool: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionSelectPoolToHclTerraform, true)(struct!.selectPool),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionSelectPoolList",
    },
    ssl_mode_selection: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionSslModeSelectionToHclTerraform, true)(struct!.sslModeSelection),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionSslModeSelectionList",
    },
    variable_assignment: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionVariableAssignmentToHclTerraform, true)(struct!.variableAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionVariableAssignmentList",
    },
    variable_persistence_learn: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionVariablePersistenceLearnToHclTerraform, true)(struct!.variablePersistenceLearn),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionVariablePersistenceLearnList",
    },
    variable_persistence_on: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionVariablePersistenceOnToHclTerraform, true)(struct!.variablePersistenceOn),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionVariablePersistenceOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDrop = this._connectionDrop?.internalValue;
    }
    if (this._httpRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect?.internalValue;
    }
    if (this._httpReject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReject = this._httpReject?.internalValue;
    }
    if (this._httpRequestHeaderDelete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaderDelete = this._httpRequestHeaderDelete?.internalValue;
    }
    if (this._httpRequestHeaderRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaderRewrite = this._httpRequestHeaderRewrite?.internalValue;
    }
    if (this._httpRequestUriRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestUriRewrite = this._httpRequestUriRewrite?.internalValue;
    }
    if (this._httpResponseHeaderDelete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseHeaderDelete = this._httpResponseHeaderDelete?.internalValue;
    }
    if (this._httpResponseHeaderRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseHeaderRewrite = this._httpResponseHeaderRewrite?.internalValue;
    }
    if (this._jwtAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuth = this._jwtAuth?.internalValue;
    }
    if (this._selectPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectPool = this._selectPool?.internalValue;
    }
    if (this._sslModeSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslModeSelection = this._sslModeSelection?.internalValue;
    }
    if (this._variableAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableAssignment = this._variableAssignment?.internalValue;
    }
    if (this._variablePersistenceLearn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variablePersistenceLearn = this._variablePersistenceLearn?.internalValue;
    }
    if (this._variablePersistenceOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variablePersistenceOn = this._variablePersistenceOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionDrop.internalValue = undefined;
      this._httpRedirect.internalValue = undefined;
      this._httpReject.internalValue = undefined;
      this._httpRequestHeaderDelete.internalValue = undefined;
      this._httpRequestHeaderRewrite.internalValue = undefined;
      this._httpRequestUriRewrite.internalValue = undefined;
      this._httpResponseHeaderDelete.internalValue = undefined;
      this._httpResponseHeaderRewrite.internalValue = undefined;
      this._jwtAuth.internalValue = undefined;
      this._selectPool.internalValue = undefined;
      this._sslModeSelection.internalValue = undefined;
      this._variableAssignment.internalValue = undefined;
      this._variablePersistenceLearn.internalValue = undefined;
      this._variablePersistenceOn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionDrop.internalValue = value.connectionDrop;
      this._httpRedirect.internalValue = value.httpRedirect;
      this._httpReject.internalValue = value.httpReject;
      this._httpRequestHeaderDelete.internalValue = value.httpRequestHeaderDelete;
      this._httpRequestHeaderRewrite.internalValue = value.httpRequestHeaderRewrite;
      this._httpRequestUriRewrite.internalValue = value.httpRequestUriRewrite;
      this._httpResponseHeaderDelete.internalValue = value.httpResponseHeaderDelete;
      this._httpResponseHeaderRewrite.internalValue = value.httpResponseHeaderRewrite;
      this._jwtAuth.internalValue = value.jwtAuth;
      this._selectPool.internalValue = value.selectPool;
      this._sslModeSelection.internalValue = value.sslModeSelection;
      this._variableAssignment.internalValue = value.variableAssignment;
      this._variablePersistenceLearn.internalValue = value.variablePersistenceLearn;
      this._variablePersistenceOn.internalValue = value.variablePersistenceOn;
    }
  }

  // connection_drop - computed: false, optional: true, required: false
  private _connectionDrop = new PolicyLbVirtualServerRuleActionConnectionDropList(this, "connection_drop", false);
  public get connectionDrop() {
    return this._connectionDrop;
  }
  public putConnectionDrop(value: PolicyLbVirtualServerRuleActionConnectionDrop[] | cdktf.IResolvable) {
    this._connectionDrop.internalValue = value;
  }
  public resetConnectionDrop() {
    this._connectionDrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDropInput() {
    return this._connectionDrop.internalValue;
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect = new PolicyLbVirtualServerRuleActionHttpRedirectList(this, "http_redirect", false);
  public get httpRedirect() {
    return this._httpRedirect;
  }
  public putHttpRedirect(value: PolicyLbVirtualServerRuleActionHttpRedirect[] | cdktf.IResolvable) {
    this._httpRedirect.internalValue = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect.internalValue;
  }

  // http_reject - computed: false, optional: true, required: false
  private _httpReject = new PolicyLbVirtualServerRuleActionHttpRejectList(this, "http_reject", false);
  public get httpReject() {
    return this._httpReject;
  }
  public putHttpReject(value: PolicyLbVirtualServerRuleActionHttpReject[] | cdktf.IResolvable) {
    this._httpReject.internalValue = value;
  }
  public resetHttpReject() {
    this._httpReject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRejectInput() {
    return this._httpReject.internalValue;
  }

  // http_request_header_delete - computed: false, optional: true, required: false
  private _httpRequestHeaderDelete = new PolicyLbVirtualServerRuleActionHttpRequestHeaderDeleteList(this, "http_request_header_delete", false);
  public get httpRequestHeaderDelete() {
    return this._httpRequestHeaderDelete;
  }
  public putHttpRequestHeaderDelete(value: PolicyLbVirtualServerRuleActionHttpRequestHeaderDelete[] | cdktf.IResolvable) {
    this._httpRequestHeaderDelete.internalValue = value;
  }
  public resetHttpRequestHeaderDelete() {
    this._httpRequestHeaderDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderDeleteInput() {
    return this._httpRequestHeaderDelete.internalValue;
  }

  // http_request_header_rewrite - computed: false, optional: true, required: false
  private _httpRequestHeaderRewrite = new PolicyLbVirtualServerRuleActionHttpRequestHeaderRewriteList(this, "http_request_header_rewrite", false);
  public get httpRequestHeaderRewrite() {
    return this._httpRequestHeaderRewrite;
  }
  public putHttpRequestHeaderRewrite(value: PolicyLbVirtualServerRuleActionHttpRequestHeaderRewrite[] | cdktf.IResolvable) {
    this._httpRequestHeaderRewrite.internalValue = value;
  }
  public resetHttpRequestHeaderRewrite() {
    this._httpRequestHeaderRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderRewriteInput() {
    return this._httpRequestHeaderRewrite.internalValue;
  }

  // http_request_uri_rewrite - computed: false, optional: true, required: false
  private _httpRequestUriRewrite = new PolicyLbVirtualServerRuleActionHttpRequestUriRewriteList(this, "http_request_uri_rewrite", false);
  public get httpRequestUriRewrite() {
    return this._httpRequestUriRewrite;
  }
  public putHttpRequestUriRewrite(value: PolicyLbVirtualServerRuleActionHttpRequestUriRewrite[] | cdktf.IResolvable) {
    this._httpRequestUriRewrite.internalValue = value;
  }
  public resetHttpRequestUriRewrite() {
    this._httpRequestUriRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestUriRewriteInput() {
    return this._httpRequestUriRewrite.internalValue;
  }

  // http_response_header_delete - computed: false, optional: true, required: false
  private _httpResponseHeaderDelete = new PolicyLbVirtualServerRuleActionHttpResponseHeaderDeleteList(this, "http_response_header_delete", false);
  public get httpResponseHeaderDelete() {
    return this._httpResponseHeaderDelete;
  }
  public putHttpResponseHeaderDelete(value: PolicyLbVirtualServerRuleActionHttpResponseHeaderDelete[] | cdktf.IResolvable) {
    this._httpResponseHeaderDelete.internalValue = value;
  }
  public resetHttpResponseHeaderDelete() {
    this._httpResponseHeaderDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseHeaderDeleteInput() {
    return this._httpResponseHeaderDelete.internalValue;
  }

  // http_response_header_rewrite - computed: false, optional: true, required: false
  private _httpResponseHeaderRewrite = new PolicyLbVirtualServerRuleActionHttpResponseHeaderRewriteList(this, "http_response_header_rewrite", false);
  public get httpResponseHeaderRewrite() {
    return this._httpResponseHeaderRewrite;
  }
  public putHttpResponseHeaderRewrite(value: PolicyLbVirtualServerRuleActionHttpResponseHeaderRewrite[] | cdktf.IResolvable) {
    this._httpResponseHeaderRewrite.internalValue = value;
  }
  public resetHttpResponseHeaderRewrite() {
    this._httpResponseHeaderRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseHeaderRewriteInput() {
    return this._httpResponseHeaderRewrite.internalValue;
  }

  // jwt_auth - computed: false, optional: true, required: false
  private _jwtAuth = new PolicyLbVirtualServerRuleActionJwtAuthList(this, "jwt_auth", false);
  public get jwtAuth() {
    return this._jwtAuth;
  }
  public putJwtAuth(value: PolicyLbVirtualServerRuleActionJwtAuth[] | cdktf.IResolvable) {
    this._jwtAuth.internalValue = value;
  }
  public resetJwtAuth() {
    this._jwtAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthInput() {
    return this._jwtAuth.internalValue;
  }

  // select_pool - computed: false, optional: true, required: false
  private _selectPool = new PolicyLbVirtualServerRuleActionSelectPoolList(this, "select_pool", false);
  public get selectPool() {
    return this._selectPool;
  }
  public putSelectPool(value: PolicyLbVirtualServerRuleActionSelectPool[] | cdktf.IResolvable) {
    this._selectPool.internalValue = value;
  }
  public resetSelectPool() {
    this._selectPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectPoolInput() {
    return this._selectPool.internalValue;
  }

  // ssl_mode_selection - computed: false, optional: true, required: false
  private _sslModeSelection = new PolicyLbVirtualServerRuleActionSslModeSelectionList(this, "ssl_mode_selection", false);
  public get sslModeSelection() {
    return this._sslModeSelection;
  }
  public putSslModeSelection(value: PolicyLbVirtualServerRuleActionSslModeSelection[] | cdktf.IResolvable) {
    this._sslModeSelection.internalValue = value;
  }
  public resetSslModeSelection() {
    this._sslModeSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeSelectionInput() {
    return this._sslModeSelection.internalValue;
  }

  // variable_assignment - computed: false, optional: true, required: false
  private _variableAssignment = new PolicyLbVirtualServerRuleActionVariableAssignmentList(this, "variable_assignment", false);
  public get variableAssignment() {
    return this._variableAssignment;
  }
  public putVariableAssignment(value: PolicyLbVirtualServerRuleActionVariableAssignment[] | cdktf.IResolvable) {
    this._variableAssignment.internalValue = value;
  }
  public resetVariableAssignment() {
    this._variableAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableAssignmentInput() {
    return this._variableAssignment.internalValue;
  }

  // variable_persistence_learn - computed: false, optional: true, required: false
  private _variablePersistenceLearn = new PolicyLbVirtualServerRuleActionVariablePersistenceLearnList(this, "variable_persistence_learn", false);
  public get variablePersistenceLearn() {
    return this._variablePersistenceLearn;
  }
  public putVariablePersistenceLearn(value: PolicyLbVirtualServerRuleActionVariablePersistenceLearn[] | cdktf.IResolvable) {
    this._variablePersistenceLearn.internalValue = value;
  }
  public resetVariablePersistenceLearn() {
    this._variablePersistenceLearn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablePersistenceLearnInput() {
    return this._variablePersistenceLearn.internalValue;
  }

  // variable_persistence_on - computed: false, optional: true, required: false
  private _variablePersistenceOn = new PolicyLbVirtualServerRuleActionVariablePersistenceOnList(this, "variable_persistence_on", false);
  public get variablePersistenceOn() {
    return this._variablePersistenceOn;
  }
  public putVariablePersistenceOn(value: PolicyLbVirtualServerRuleActionVariablePersistenceOn[] | cdktf.IResolvable) {
    this._variablePersistenceOn.internalValue = value;
  }
  public resetVariablePersistenceOn() {
    this._variablePersistenceOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablePersistenceOnInput() {
    return this._variablePersistenceOn.internalValue;
  }
}

export class PolicyLbVirtualServerRuleActionList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleAction[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleActionOutputReference {
    return new PolicyLbVirtualServerRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#body_value PolicyLbVirtualServer#body_value}
  */
  readonly bodyValue: string;
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestBodyToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_value: cdktf.stringToTerraform(struct!.bodyValue),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestBodyToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_value: {
      value: cdktf.stringToHclTerraform(struct!.bodyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyValue = this._bodyValue;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyValue = value.bodyValue;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
    }
  }

  // body_value - computed: false, optional: false, required: true
  private _bodyValue?: string; 
  public get bodyValue() {
    return this.getStringAttribute('body_value');
  }
  public set bodyValue(value: string) {
    this._bodyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyValueInput() {
    return this._bodyValue;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpRequestBodyList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpRequestBody[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpRequestBodyOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestCookie {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#cookie_name PolicyLbVirtualServer#cookie_name}
  */
  readonly cookieName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#cookie_value PolicyLbVirtualServer#cookie_value}
  */
  readonly cookieValue: string;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestCookieToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    cookie_value: cdktf.stringToTerraform(struct!.cookieValue),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestCookieToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_value: {
      value: cdktf.stringToHclTerraform(struct!.cookieValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._cookieValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValue = this._cookieValue;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._cookieName = undefined;
      this._cookieValue = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._cookieName = value.cookieName;
      this._cookieValue = value.cookieValue;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // cookie_value - computed: false, optional: false, required: true
  private _cookieValue?: string; 
  public get cookieValue() {
    return this.getStringAttribute('cookie_value');
  }
  public set cookieValue(value: string) {
    this._cookieValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueInput() {
    return this._cookieValue;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpRequestCookieList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpRequestCookie[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpRequestCookieOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestHeader {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_name PolicyLbVirtualServer#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_value PolicyLbVirtualServer#header_value}
  */
  readonly headerValue: string;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestHeaderToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestHeaderToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
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

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpRequestHeaderOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestMethod {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#method PolicyLbVirtualServer#method}
  */
  readonly method: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestMethodToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestMethodToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._method = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._method = value.method;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
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
}

export class PolicyLbVirtualServerRuleConditionHttpRequestMethodList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpRequestMethod[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpRequestMethodOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpRequestMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestUri {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#uri PolicyLbVirtualServer#uri}
  */
  readonly uri: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestUriToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestUriToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._uri = value.uri;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpRequestUriList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpRequestUri[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpRequestUriOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestUriArguments {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#uri_arguments PolicyLbVirtualServer#uri_arguments}
  */
  readonly uriArguments: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestUriArgumentsToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestUriArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    uri_arguments: cdktf.stringToTerraform(struct!.uriArguments),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestUriArgumentsToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestUriArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_arguments: {
      value: cdktf.stringToHclTerraform(struct!.uriArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestUriArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestUriArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._uriArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriArguments = this._uriArguments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestUriArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._uriArguments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._uriArguments = value.uriArguments;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // uri_arguments - computed: false, optional: false, required: true
  private _uriArguments?: string; 
  public get uriArguments() {
    return this.getStringAttribute('uri_arguments');
  }
  public set uriArguments(value: string) {
    this._uriArguments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriArgumentsInput() {
    return this._uriArguments;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpRequestUriArgumentsList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpRequestUriArguments[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpRequestUriArgumentsOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpRequestUriArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpRequestVersion {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#version PolicyLbVirtualServer#version}
  */
  readonly version: string;
}

export function policyLbVirtualServerRuleConditionHttpRequestVersionToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestVersionOutputReference | PolicyLbVirtualServerRuleConditionHttpRequestVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function policyLbVirtualServerRuleConditionHttpRequestVersionToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpRequestVersionOutputReference | PolicyLbVirtualServerRuleConditionHttpRequestVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpRequestVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpRequestVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpRequestVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inverse = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inverse = value.inverse;
      this._version = value.version;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpResponseHeader {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_name PolicyLbVirtualServer#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#header_value PolicyLbVirtualServer#header_value}
  */
  readonly headerValue: string;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
}

export function policyLbVirtualServerRuleConditionHttpResponseHeaderToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function policyLbVirtualServerRuleConditionHttpResponseHeaderToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
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

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpResponseHeaderOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#issuer_dn PolicyLbVirtualServer#issuer_dn}
  */
  readonly issuerDn: string;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
}

export function policyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    issuer_dn: cdktf.stringToTerraform(struct!.issuerDn),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function policyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer_dn: {
      value: cdktf.stringToHclTerraform(struct!.issuerDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._issuerDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerDn = this._issuerDn;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._issuerDn = undefined;
      this._matchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._issuerDn = value.issuerDn;
      this._matchType = value.matchType;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // issuer_dn - computed: false, optional: false, required: true
  private _issuerDn?: string; 
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }
  public set issuerDn(value: string) {
    this._issuerDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDnInput() {
    return this._issuerDn;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#subject_dn PolicyLbVirtualServer#subject_dn}
  */
  readonly subjectDn: string;
}

export function policyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    subject_dn: cdktf.stringToTerraform(struct!.subjectDn),
  }
}


export function policyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_dn: {
      value: cdktf.stringToHclTerraform(struct!.subjectDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._subjectDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectDn = this._subjectDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._matchType = undefined;
      this._subjectDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._matchType = value.matchType;
      this._subjectDn = value.subjectDn;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // subject_dn - computed: false, optional: false, required: true
  private _subjectDn?: string; 
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }
  public set subjectDn(value: string) {
    this._subjectDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnInput() {
    return this._subjectDn;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionHttpSsl {
  /**
  * Supported SSL ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#client_supported_ssl_ciphers PolicyLbVirtualServer#client_supported_ssl_ciphers}
  */
  readonly clientSupportedSslCiphers?: string[];
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#session_reused PolicyLbVirtualServer#session_reused}
  */
  readonly sessionReused?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#used_protocol PolicyLbVirtualServer#used_protocol}
  */
  readonly usedProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#used_ssl_cipher PolicyLbVirtualServer#used_ssl_cipher}
  */
  readonly usedSslCipher?: string;
  /**
  * client_certificate_issuer_dn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#client_certificate_issuer_dn PolicyLbVirtualServer#client_certificate_issuer_dn}
  */
  readonly clientCertificateIssuerDn?: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn[] | cdktf.IResolvable;
  /**
  * client_certificate_subject_dn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#client_certificate_subject_dn PolicyLbVirtualServer#client_certificate_subject_dn}
  */
  readonly clientCertificateSubjectDn?: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn[] | cdktf.IResolvable;
}

export function policyLbVirtualServerRuleConditionHttpSslToTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_supported_ssl_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientSupportedSslCiphers),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    session_reused: cdktf.stringToTerraform(struct!.sessionReused),
    used_protocol: cdktf.stringToTerraform(struct!.usedProtocol),
    used_ssl_cipher: cdktf.stringToTerraform(struct!.usedSslCipher),
    client_certificate_issuer_dn: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnToTerraform, true)(struct!.clientCertificateIssuerDn),
    client_certificate_subject_dn: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnToTerraform, true)(struct!.clientCertificateSubjectDn),
  }
}


export function policyLbVirtualServerRuleConditionHttpSslToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionHttpSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_supported_ssl_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientSupportedSslCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_reused: {
      value: cdktf.stringToHclTerraform(struct!.sessionReused),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_protocol: {
      value: cdktf.stringToHclTerraform(struct!.usedProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.usedSslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_issuer_dn: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnToHclTerraform, true)(struct!.clientCertificateIssuerDn),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnList",
    },
    client_certificate_subject_dn: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnToHclTerraform, true)(struct!.clientCertificateSubjectDn),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionHttpSslOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionHttpSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSupportedSslCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSupportedSslCiphers = this._clientSupportedSslCiphers;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._sessionReused !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReused = this._sessionReused;
    }
    if (this._usedProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedProtocol = this._usedProtocol;
    }
    if (this._usedSslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedSslCipher = this._usedSslCipher;
    }
    if (this._clientCertificateIssuerDn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateIssuerDn = this._clientCertificateIssuerDn?.internalValue;
    }
    if (this._clientCertificateSubjectDn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateSubjectDn = this._clientCertificateSubjectDn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionHttpSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientSupportedSslCiphers = undefined;
      this._inverse = undefined;
      this._sessionReused = undefined;
      this._usedProtocol = undefined;
      this._usedSslCipher = undefined;
      this._clientCertificateIssuerDn.internalValue = undefined;
      this._clientCertificateSubjectDn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientSupportedSslCiphers = value.clientSupportedSslCiphers;
      this._inverse = value.inverse;
      this._sessionReused = value.sessionReused;
      this._usedProtocol = value.usedProtocol;
      this._usedSslCipher = value.usedSslCipher;
      this._clientCertificateIssuerDn.internalValue = value.clientCertificateIssuerDn;
      this._clientCertificateSubjectDn.internalValue = value.clientCertificateSubjectDn;
    }
  }

  // client_supported_ssl_ciphers - computed: false, optional: true, required: false
  private _clientSupportedSslCiphers?: string[]; 
  public get clientSupportedSslCiphers() {
    return this.getListAttribute('client_supported_ssl_ciphers');
  }
  public set clientSupportedSslCiphers(value: string[]) {
    this._clientSupportedSslCiphers = value;
  }
  public resetClientSupportedSslCiphers() {
    this._clientSupportedSslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSupportedSslCiphersInput() {
    return this._clientSupportedSslCiphers;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // session_reused - computed: false, optional: true, required: false
  private _sessionReused?: string; 
  public get sessionReused() {
    return this.getStringAttribute('session_reused');
  }
  public set sessionReused(value: string) {
    this._sessionReused = value;
  }
  public resetSessionReused() {
    this._sessionReused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReusedInput() {
    return this._sessionReused;
  }

  // used_protocol - computed: false, optional: true, required: false
  private _usedProtocol?: string; 
  public get usedProtocol() {
    return this.getStringAttribute('used_protocol');
  }
  public set usedProtocol(value: string) {
    this._usedProtocol = value;
  }
  public resetUsedProtocol() {
    this._usedProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedProtocolInput() {
    return this._usedProtocol;
  }

  // used_ssl_cipher - computed: false, optional: true, required: false
  private _usedSslCipher?: string; 
  public get usedSslCipher() {
    return this.getStringAttribute('used_ssl_cipher');
  }
  public set usedSslCipher(value: string) {
    this._usedSslCipher = value;
  }
  public resetUsedSslCipher() {
    this._usedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedSslCipherInput() {
    return this._usedSslCipher;
  }

  // client_certificate_issuer_dn - computed: false, optional: true, required: false
  private _clientCertificateIssuerDn = new PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDnList(this, "client_certificate_issuer_dn", true);
  public get clientCertificateIssuerDn() {
    return this._clientCertificateIssuerDn;
  }
  public putClientCertificateIssuerDn(value: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateIssuerDn[] | cdktf.IResolvable) {
    this._clientCertificateIssuerDn.internalValue = value;
  }
  public resetClientCertificateIssuerDn() {
    this._clientCertificateIssuerDn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIssuerDnInput() {
    return this._clientCertificateIssuerDn.internalValue;
  }

  // client_certificate_subject_dn - computed: false, optional: true, required: false
  private _clientCertificateSubjectDn = new PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDnList(this, "client_certificate_subject_dn", true);
  public get clientCertificateSubjectDn() {
    return this._clientCertificateSubjectDn;
  }
  public putClientCertificateSubjectDn(value: PolicyLbVirtualServerRuleConditionHttpSslClientCertificateSubjectDn[] | cdktf.IResolvable) {
    this._clientCertificateSubjectDn.internalValue = value;
  }
  public resetClientCertificateSubjectDn() {
    this._clientCertificateSubjectDn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSubjectDnInput() {
    return this._clientCertificateSubjectDn.internalValue;
  }
}

export class PolicyLbVirtualServerRuleConditionHttpSslList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionHttpSsl[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionHttpSslOutputReference {
    return new PolicyLbVirtualServerRuleConditionHttpSslOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionIpHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#group_path PolicyLbVirtualServer#group_path}
  */
  readonly groupPath?: string;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#source_address PolicyLbVirtualServer#source_address}
  */
  readonly sourceAddress?: string;
}

export function policyLbVirtualServerRuleConditionIpHeaderToTerraform(struct?: PolicyLbVirtualServerRuleConditionIpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_path: cdktf.stringToTerraform(struct!.groupPath),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function policyLbVirtualServerRuleConditionIpHeaderToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionIpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_path: {
      value: cdktf.stringToHclTerraform(struct!.groupPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionIpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionIpHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPath = this._groupPath;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionIpHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupPath = undefined;
      this._inverse = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupPath = value.groupPath;
      this._inverse = value.inverse;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // group_path - computed: false, optional: true, required: false
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  public resetGroupPath() {
    this._groupPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}

export class PolicyLbVirtualServerRuleConditionIpHeaderList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionIpHeader[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionIpHeaderOutputReference {
    return new PolicyLbVirtualServerRuleConditionIpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionSslSni {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#sni PolicyLbVirtualServer#sni}
  */
  readonly sni: string;
}

export function policyLbVirtualServerRuleConditionSslSniToTerraform(struct?: PolicyLbVirtualServerRuleConditionSslSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    sni: cdktf.stringToTerraform(struct!.sni),
  }
}


export function policyLbVirtualServerRuleConditionSslSniToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionSslSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionSslSniOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionSslSni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionSslSni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._sni = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._sni = value.sni;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // sni - computed: false, optional: false, required: true
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }
}

export class PolicyLbVirtualServerRuleConditionSslSniList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionSslSni[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionSslSniOutputReference {
    return new PolicyLbVirtualServerRuleConditionSslSniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionTcpHeader {
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#source_port PolicyLbVirtualServer#source_port}
  */
  readonly sourcePort: string;
}

export function policyLbVirtualServerRuleConditionTcpHeaderToTerraform(struct?: PolicyLbVirtualServerRuleConditionTcpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function policyLbVirtualServerRuleConditionTcpHeaderToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionTcpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionTcpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionTcpHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionTcpHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverse = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverse = value.inverse;
      this._sourcePort = value.sourcePort;
    }
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class PolicyLbVirtualServerRuleConditionTcpHeaderList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionTcpHeader[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionTcpHeaderOutputReference {
    return new PolicyLbVirtualServerRuleConditionTcpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleConditionVariable {
  /**
  * If true, case is significant in condition matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#case_sensitive PolicyLbVirtualServer#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Whether to reverse match result of this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#inverse PolicyLbVirtualServer#inverse}
  */
  readonly inverse?: boolean | cdktf.IResolvable;
  /**
  * Match type (STARTS_WITH, ENDS_WITH, EQUALS, CONTAINS, REGEX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_type PolicyLbVirtualServer#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_name PolicyLbVirtualServer#variable_name}
  */
  readonly variableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable_value PolicyLbVirtualServer#variable_value}
  */
  readonly variableValue: string;
}

export function policyLbVirtualServerRuleConditionVariableToTerraform(struct?: PolicyLbVirtualServerRuleConditionVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    inverse: cdktf.booleanToTerraform(struct!.inverse),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
    variable_value: cdktf.stringToTerraform(struct!.variableValue),
  }
}


export function policyLbVirtualServerRuleConditionVariableToHclTerraform(struct?: PolicyLbVirtualServerRuleConditionVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse: {
      value: cdktf.booleanToHclTerraform(struct!.inverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_value: {
      value: cdktf.stringToHclTerraform(struct!.variableValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleConditionVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._inverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverse = this._inverse;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    if (this._variableValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableValue = this._variableValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleConditionVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._inverse = undefined;
      this._matchType = undefined;
      this._variableName = undefined;
      this._variableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._inverse = value.inverse;
      this._matchType = value.matchType;
      this._variableName = value.variableName;
      this._variableValue = value.variableValue;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // inverse - computed: false, optional: true, required: false
  private _inverse?: boolean | cdktf.IResolvable; 
  public get inverse() {
    return this.getBooleanAttribute('inverse');
  }
  public set inverse(value: boolean | cdktf.IResolvable) {
    this._inverse = value;
  }
  public resetInverse() {
    this._inverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseInput() {
    return this._inverse;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // variable_value - computed: false, optional: false, required: true
  private _variableValue?: string; 
  public get variableValue() {
    return this.getStringAttribute('variable_value');
  }
  public set variableValue(value: string) {
    this._variableValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableValueInput() {
    return this._variableValue;
  }
}

export class PolicyLbVirtualServerRuleConditionVariableList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleConditionVariable[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionVariableOutputReference {
    return new PolicyLbVirtualServerRuleConditionVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRuleCondition {
  /**
  * http_request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_body PolicyLbVirtualServer#http_request_body}
  */
  readonly httpRequestBody?: PolicyLbVirtualServerRuleConditionHttpRequestBody[] | cdktf.IResolvable;
  /**
  * http_request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_cookie PolicyLbVirtualServer#http_request_cookie}
  */
  readonly httpRequestCookie?: PolicyLbVirtualServerRuleConditionHttpRequestCookie[] | cdktf.IResolvable;
  /**
  * http_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_header PolicyLbVirtualServer#http_request_header}
  */
  readonly httpRequestHeader?: PolicyLbVirtualServerRuleConditionHttpRequestHeader[] | cdktf.IResolvable;
  /**
  * http_request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_method PolicyLbVirtualServer#http_request_method}
  */
  readonly httpRequestMethod?: PolicyLbVirtualServerRuleConditionHttpRequestMethod[] | cdktf.IResolvable;
  /**
  * http_request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_uri PolicyLbVirtualServer#http_request_uri}
  */
  readonly httpRequestUri?: PolicyLbVirtualServerRuleConditionHttpRequestUri[] | cdktf.IResolvable;
  /**
  * http_request_uri_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_uri_arguments PolicyLbVirtualServer#http_request_uri_arguments}
  */
  readonly httpRequestUriArguments?: PolicyLbVirtualServerRuleConditionHttpRequestUriArguments[] | cdktf.IResolvable;
  /**
  * http_request_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_request_version PolicyLbVirtualServer#http_request_version}
  */
  readonly httpRequestVersion?: PolicyLbVirtualServerRuleConditionHttpRequestVersion;
  /**
  * http_response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_response_header PolicyLbVirtualServer#http_response_header}
  */
  readonly httpResponseHeader?: PolicyLbVirtualServerRuleConditionHttpResponseHeader[] | cdktf.IResolvable;
  /**
  * http_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#http_ssl PolicyLbVirtualServer#http_ssl}
  */
  readonly httpSsl?: PolicyLbVirtualServerRuleConditionHttpSsl[] | cdktf.IResolvable;
  /**
  * ip_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ip_header PolicyLbVirtualServer#ip_header}
  */
  readonly ipHeader?: PolicyLbVirtualServerRuleConditionIpHeader[] | cdktf.IResolvable;
  /**
  * ssl_sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ssl_sni PolicyLbVirtualServer#ssl_sni}
  */
  readonly sslSni?: PolicyLbVirtualServerRuleConditionSslSni[] | cdktf.IResolvable;
  /**
  * tcp_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#tcp_header PolicyLbVirtualServer#tcp_header}
  */
  readonly tcpHeader?: PolicyLbVirtualServerRuleConditionTcpHeader[] | cdktf.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#variable PolicyLbVirtualServer#variable}
  */
  readonly variable?: PolicyLbVirtualServerRuleConditionVariable[] | cdktf.IResolvable;
}

export function policyLbVirtualServerRuleConditionToTerraform(struct?: PolicyLbVirtualServerRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_request_body: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpRequestBodyToTerraform, true)(struct!.httpRequestBody),
    http_request_cookie: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpRequestCookieToTerraform, true)(struct!.httpRequestCookie),
    http_request_header: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpRequestHeaderToTerraform, true)(struct!.httpRequestHeader),
    http_request_method: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpRequestMethodToTerraform, true)(struct!.httpRequestMethod),
    http_request_uri: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpRequestUriToTerraform, true)(struct!.httpRequestUri),
    http_request_uri_arguments: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpRequestUriArgumentsToTerraform, true)(struct!.httpRequestUriArguments),
    http_request_version: policyLbVirtualServerRuleConditionHttpRequestVersionToTerraform(struct!.httpRequestVersion),
    http_response_header: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpResponseHeaderToTerraform, true)(struct!.httpResponseHeader),
    http_ssl: cdktf.listMapper(policyLbVirtualServerRuleConditionHttpSslToTerraform, true)(struct!.httpSsl),
    ip_header: cdktf.listMapper(policyLbVirtualServerRuleConditionIpHeaderToTerraform, true)(struct!.ipHeader),
    ssl_sni: cdktf.listMapper(policyLbVirtualServerRuleConditionSslSniToTerraform, true)(struct!.sslSni),
    tcp_header: cdktf.listMapper(policyLbVirtualServerRuleConditionTcpHeaderToTerraform, true)(struct!.tcpHeader),
    variable: cdktf.listMapper(policyLbVirtualServerRuleConditionVariableToTerraform, true)(struct!.variable),
  }
}


export function policyLbVirtualServerRuleConditionToHclTerraform(struct?: PolicyLbVirtualServerRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_request_body: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpRequestBodyToHclTerraform, true)(struct!.httpRequestBody),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestBodyList",
    },
    http_request_cookie: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpRequestCookieToHclTerraform, true)(struct!.httpRequestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestCookieList",
    },
    http_request_header: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpRequestHeaderToHclTerraform, true)(struct!.httpRequestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestHeaderList",
    },
    http_request_method: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpRequestMethodToHclTerraform, true)(struct!.httpRequestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestMethodList",
    },
    http_request_uri: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpRequestUriToHclTerraform, true)(struct!.httpRequestUri),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestUriList",
    },
    http_request_uri_arguments: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpRequestUriArgumentsToHclTerraform, true)(struct!.httpRequestUriArguments),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestUriArgumentsList",
    },
    http_request_version: {
      value: policyLbVirtualServerRuleConditionHttpRequestVersionToHclTerraform(struct!.httpRequestVersion),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpRequestVersionList",
    },
    http_response_header: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpResponseHeaderToHclTerraform, true)(struct!.httpResponseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpResponseHeaderList",
    },
    http_ssl: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionHttpSslToHclTerraform, true)(struct!.httpSsl),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionHttpSslList",
    },
    ip_header: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionIpHeaderToHclTerraform, true)(struct!.ipHeader),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionIpHeaderList",
    },
    ssl_sni: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionSslSniToHclTerraform, true)(struct!.sslSni),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionSslSniList",
    },
    tcp_header: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionTcpHeaderToHclTerraform, true)(struct!.tcpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionTcpHeaderList",
    },
    variable: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRequestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestBody = this._httpRequestBody?.internalValue;
    }
    if (this._httpRequestCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestCookie = this._httpRequestCookie?.internalValue;
    }
    if (this._httpRequestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeader = this._httpRequestHeader?.internalValue;
    }
    if (this._httpRequestMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethod = this._httpRequestMethod?.internalValue;
    }
    if (this._httpRequestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestUri = this._httpRequestUri?.internalValue;
    }
    if (this._httpRequestUriArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestUriArguments = this._httpRequestUriArguments?.internalValue;
    }
    if (this._httpRequestVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestVersion = this._httpRequestVersion?.internalValue;
    }
    if (this._httpResponseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseHeader = this._httpResponseHeader?.internalValue;
    }
    if (this._httpSsl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSsl = this._httpSsl?.internalValue;
    }
    if (this._ipHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHeader = this._ipHeader?.internalValue;
    }
    if (this._sslSni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSni = this._sslSni?.internalValue;
    }
    if (this._tcpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHeader = this._tcpHeader?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpRequestBody.internalValue = undefined;
      this._httpRequestCookie.internalValue = undefined;
      this._httpRequestHeader.internalValue = undefined;
      this._httpRequestMethod.internalValue = undefined;
      this._httpRequestUri.internalValue = undefined;
      this._httpRequestUriArguments.internalValue = undefined;
      this._httpRequestVersion.internalValue = undefined;
      this._httpResponseHeader.internalValue = undefined;
      this._httpSsl.internalValue = undefined;
      this._ipHeader.internalValue = undefined;
      this._sslSni.internalValue = undefined;
      this._tcpHeader.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpRequestBody.internalValue = value.httpRequestBody;
      this._httpRequestCookie.internalValue = value.httpRequestCookie;
      this._httpRequestHeader.internalValue = value.httpRequestHeader;
      this._httpRequestMethod.internalValue = value.httpRequestMethod;
      this._httpRequestUri.internalValue = value.httpRequestUri;
      this._httpRequestUriArguments.internalValue = value.httpRequestUriArguments;
      this._httpRequestVersion.internalValue = value.httpRequestVersion;
      this._httpResponseHeader.internalValue = value.httpResponseHeader;
      this._httpSsl.internalValue = value.httpSsl;
      this._ipHeader.internalValue = value.ipHeader;
      this._sslSni.internalValue = value.sslSni;
      this._tcpHeader.internalValue = value.tcpHeader;
      this._variable.internalValue = value.variable;
    }
  }

  // http_request_body - computed: false, optional: true, required: false
  private _httpRequestBody = new PolicyLbVirtualServerRuleConditionHttpRequestBodyList(this, "http_request_body", false);
  public get httpRequestBody() {
    return this._httpRequestBody;
  }
  public putHttpRequestBody(value: PolicyLbVirtualServerRuleConditionHttpRequestBody[] | cdktf.IResolvable) {
    this._httpRequestBody.internalValue = value;
  }
  public resetHttpRequestBody() {
    this._httpRequestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestBodyInput() {
    return this._httpRequestBody.internalValue;
  }

  // http_request_cookie - computed: false, optional: true, required: false
  private _httpRequestCookie = new PolicyLbVirtualServerRuleConditionHttpRequestCookieList(this, "http_request_cookie", false);
  public get httpRequestCookie() {
    return this._httpRequestCookie;
  }
  public putHttpRequestCookie(value: PolicyLbVirtualServerRuleConditionHttpRequestCookie[] | cdktf.IResolvable) {
    this._httpRequestCookie.internalValue = value;
  }
  public resetHttpRequestCookie() {
    this._httpRequestCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestCookieInput() {
    return this._httpRequestCookie.internalValue;
  }

  // http_request_header - computed: false, optional: true, required: false
  private _httpRequestHeader = new PolicyLbVirtualServerRuleConditionHttpRequestHeaderList(this, "http_request_header", false);
  public get httpRequestHeader() {
    return this._httpRequestHeader;
  }
  public putHttpRequestHeader(value: PolicyLbVirtualServerRuleConditionHttpRequestHeader[] | cdktf.IResolvable) {
    this._httpRequestHeader.internalValue = value;
  }
  public resetHttpRequestHeader() {
    this._httpRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeaderInput() {
    return this._httpRequestHeader.internalValue;
  }

  // http_request_method - computed: false, optional: true, required: false
  private _httpRequestMethod = new PolicyLbVirtualServerRuleConditionHttpRequestMethodList(this, "http_request_method", false);
  public get httpRequestMethod() {
    return this._httpRequestMethod;
  }
  public putHttpRequestMethod(value: PolicyLbVirtualServerRuleConditionHttpRequestMethod[] | cdktf.IResolvable) {
    this._httpRequestMethod.internalValue = value;
  }
  public resetHttpRequestMethod() {
    this._httpRequestMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod.internalValue;
  }

  // http_request_uri - computed: false, optional: true, required: false
  private _httpRequestUri = new PolicyLbVirtualServerRuleConditionHttpRequestUriList(this, "http_request_uri", false);
  public get httpRequestUri() {
    return this._httpRequestUri;
  }
  public putHttpRequestUri(value: PolicyLbVirtualServerRuleConditionHttpRequestUri[] | cdktf.IResolvable) {
    this._httpRequestUri.internalValue = value;
  }
  public resetHttpRequestUri() {
    this._httpRequestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestUriInput() {
    return this._httpRequestUri.internalValue;
  }

  // http_request_uri_arguments - computed: false, optional: true, required: false
  private _httpRequestUriArguments = new PolicyLbVirtualServerRuleConditionHttpRequestUriArgumentsList(this, "http_request_uri_arguments", false);
  public get httpRequestUriArguments() {
    return this._httpRequestUriArguments;
  }
  public putHttpRequestUriArguments(value: PolicyLbVirtualServerRuleConditionHttpRequestUriArguments[] | cdktf.IResolvable) {
    this._httpRequestUriArguments.internalValue = value;
  }
  public resetHttpRequestUriArguments() {
    this._httpRequestUriArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestUriArgumentsInput() {
    return this._httpRequestUriArguments.internalValue;
  }

  // http_request_version - computed: false, optional: true, required: false
  private _httpRequestVersion = new PolicyLbVirtualServerRuleConditionHttpRequestVersionOutputReference(this, "http_request_version");
  public get httpRequestVersion() {
    return this._httpRequestVersion;
  }
  public putHttpRequestVersion(value: PolicyLbVirtualServerRuleConditionHttpRequestVersion) {
    this._httpRequestVersion.internalValue = value;
  }
  public resetHttpRequestVersion() {
    this._httpRequestVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestVersionInput() {
    return this._httpRequestVersion.internalValue;
  }

  // http_response_header - computed: false, optional: true, required: false
  private _httpResponseHeader = new PolicyLbVirtualServerRuleConditionHttpResponseHeaderList(this, "http_response_header", false);
  public get httpResponseHeader() {
    return this._httpResponseHeader;
  }
  public putHttpResponseHeader(value: PolicyLbVirtualServerRuleConditionHttpResponseHeader[] | cdktf.IResolvable) {
    this._httpResponseHeader.internalValue = value;
  }
  public resetHttpResponseHeader() {
    this._httpResponseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseHeaderInput() {
    return this._httpResponseHeader.internalValue;
  }

  // http_ssl - computed: false, optional: true, required: false
  private _httpSsl = new PolicyLbVirtualServerRuleConditionHttpSslList(this, "http_ssl", false);
  public get httpSsl() {
    return this._httpSsl;
  }
  public putHttpSsl(value: PolicyLbVirtualServerRuleConditionHttpSsl[] | cdktf.IResolvable) {
    this._httpSsl.internalValue = value;
  }
  public resetHttpSsl() {
    this._httpSsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSslInput() {
    return this._httpSsl.internalValue;
  }

  // ip_header - computed: false, optional: true, required: false
  private _ipHeader = new PolicyLbVirtualServerRuleConditionIpHeaderList(this, "ip_header", false);
  public get ipHeader() {
    return this._ipHeader;
  }
  public putIpHeader(value: PolicyLbVirtualServerRuleConditionIpHeader[] | cdktf.IResolvable) {
    this._ipHeader.internalValue = value;
  }
  public resetIpHeader() {
    this._ipHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHeaderInput() {
    return this._ipHeader.internalValue;
  }

  // ssl_sni - computed: false, optional: true, required: false
  private _sslSni = new PolicyLbVirtualServerRuleConditionSslSniList(this, "ssl_sni", false);
  public get sslSni() {
    return this._sslSni;
  }
  public putSslSni(value: PolicyLbVirtualServerRuleConditionSslSni[] | cdktf.IResolvable) {
    this._sslSni.internalValue = value;
  }
  public resetSslSni() {
    this._sslSni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSniInput() {
    return this._sslSni.internalValue;
  }

  // tcp_header - computed: false, optional: true, required: false
  private _tcpHeader = new PolicyLbVirtualServerRuleConditionTcpHeaderList(this, "tcp_header", false);
  public get tcpHeader() {
    return this._tcpHeader;
  }
  public putTcpHeader(value: PolicyLbVirtualServerRuleConditionTcpHeader[] | cdktf.IResolvable) {
    this._tcpHeader.internalValue = value;
  }
  public resetTcpHeader() {
    this._tcpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHeaderInput() {
    return this._tcpHeader.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new PolicyLbVirtualServerRuleConditionVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: PolicyLbVirtualServerRuleConditionVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

export class PolicyLbVirtualServerRuleConditionList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleConditionOutputReference {
    return new PolicyLbVirtualServerRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerRule {
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#display_name PolicyLbVirtualServer#display_name}
  */
  readonly displayName: string;
  /**
  * Match strategy for determining match of multiple conditions (ALL or ANY, default: ANY).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#match_strategy PolicyLbVirtualServer#match_strategy}
  */
  readonly matchStrategy?: string;
  /**
  * Load balancer processing phase, one of HTTP_REQUEST_REWRITE, HTTP_FORWARDING (Default), HTTP_RESPONSE_REWRITE, HTTP_ACCESS, TRANSPORT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#phase PolicyLbVirtualServer#phase}
  */
  readonly phase?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#action PolicyLbVirtualServer#action}
  */
  readonly action: PolicyLbVirtualServerRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#condition PolicyLbVirtualServer#condition}
  */
  readonly condition?: PolicyLbVirtualServerRuleCondition[] | cdktf.IResolvable;
}

export function policyLbVirtualServerRuleToTerraform(struct?: PolicyLbVirtualServerRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    match_strategy: cdktf.stringToTerraform(struct!.matchStrategy),
    phase: cdktf.stringToTerraform(struct!.phase),
    action: cdktf.listMapper(policyLbVirtualServerRuleActionToTerraform, true)(struct!.action),
    condition: cdktf.listMapper(policyLbVirtualServerRuleConditionToTerraform, true)(struct!.condition),
  }
}


export function policyLbVirtualServerRuleToHclTerraform(struct?: PolicyLbVirtualServerRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_strategy: {
      value: cdktf.stringToHclTerraform(struct!.matchStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phase: {
      value: cdktf.stringToHclTerraform(struct!.phase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleActionList",
    },
    condition: {
      value: cdktf.listMapperHcl(policyLbVirtualServerRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyLbVirtualServerRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbVirtualServerRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._matchStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStrategy = this._matchStrategy;
    }
    if (this._phase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase = this._phase;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._matchStrategy = undefined;
      this._phase = undefined;
      this._action.internalValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._matchStrategy = value.matchStrategy;
      this._phase = value.phase;
      this._action.internalValue = value.action;
      this._condition.internalValue = value.condition;
    }
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

  // match_strategy - computed: false, optional: true, required: false
  private _matchStrategy?: string; 
  public get matchStrategy() {
    return this.getStringAttribute('match_strategy');
  }
  public set matchStrategy(value: string) {
    this._matchStrategy = value;
  }
  public resetMatchStrategy() {
    this._matchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrategyInput() {
    return this._matchStrategy;
  }

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // action - computed: false, optional: false, required: true
  private _action = new PolicyLbVirtualServerRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: PolicyLbVirtualServerRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new PolicyLbVirtualServerRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: PolicyLbVirtualServerRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class PolicyLbVirtualServerRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerRuleOutputReference {
    return new PolicyLbVirtualServerRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbVirtualServerServerSsl {
  /**
  * If server auth type is REQUIRED, server certificate must be signed by one Certificate Authorities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ca_paths PolicyLbVirtualServer#ca_paths}
  */
  readonly caPaths?: string[];
  /**
  * Certificate chain depth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#certificate_chain_depth PolicyLbVirtualServer#certificate_chain_depth}
  */
  readonly certificateChainDepth?: number;
  /**
  * Client certificat path for client authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#client_certificate_path PolicyLbVirtualServer#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * Certificate Revocation Lists can be specified disallow compromised certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#crl_paths PolicyLbVirtualServer#crl_paths}
  */
  readonly crlPaths?: string[];
  /**
  * Server authentication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#server_auth PolicyLbVirtualServer#server_auth}
  */
  readonly serverAuth?: string;
  /**
  * Server SSL Profile Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#ssl_profile_path PolicyLbVirtualServer#ssl_profile_path}
  */
  readonly sslProfilePath?: string;
}

export function policyLbVirtualServerServerSslToTerraform(struct?: PolicyLbVirtualServerServerSslOutputReference | PolicyLbVirtualServerServerSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caPaths),
    certificate_chain_depth: cdktf.numberToTerraform(struct!.certificateChainDepth),
    client_certificate_path: cdktf.stringToTerraform(struct!.clientCertificatePath),
    crl_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crlPaths),
    server_auth: cdktf.stringToTerraform(struct!.serverAuth),
    ssl_profile_path: cdktf.stringToTerraform(struct!.sslProfilePath),
  }
}


export function policyLbVirtualServerServerSslToHclTerraform(struct?: PolicyLbVirtualServerServerSslOutputReference | PolicyLbVirtualServerServerSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    crl_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crlPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_auth: {
      value: cdktf.stringToHclTerraform(struct!.serverAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PolicyLbVirtualServerServerSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbVirtualServerServerSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPaths = this._caPaths;
    }
    if (this._certificateChainDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChainDepth = this._certificateChainDepth;
    }
    if (this._clientCertificatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificatePath = this._clientCertificatePath;
    }
    if (this._crlPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlPaths = this._crlPaths;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._sslProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfilePath = this._sslProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbVirtualServerServerSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caPaths = undefined;
      this._certificateChainDepth = undefined;
      this._clientCertificatePath = undefined;
      this._crlPaths = undefined;
      this._serverAuth = undefined;
      this._sslProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caPaths = value.caPaths;
      this._certificateChainDepth = value.certificateChainDepth;
      this._clientCertificatePath = value.clientCertificatePath;
      this._crlPaths = value.crlPaths;
      this._serverAuth = value.serverAuth;
      this._sslProfilePath = value.sslProfilePath;
    }
  }

  // ca_paths - computed: false, optional: true, required: false
  private _caPaths?: string[]; 
  public get caPaths() {
    return this.getListAttribute('ca_paths');
  }
  public set caPaths(value: string[]) {
    this._caPaths = value;
  }
  public resetCaPaths() {
    this._caPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathsInput() {
    return this._caPaths;
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

  // crl_paths - computed: false, optional: true, required: false
  private _crlPaths?: string[]; 
  public get crlPaths() {
    return this.getListAttribute('crl_paths');
  }
  public set crlPaths(value: string[]) {
    this._crlPaths = value;
  }
  public resetCrlPaths() {
    this._crlPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlPathsInput() {
    return this._crlPaths;
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
export interface PolicyLbVirtualServerTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#scope PolicyLbVirtualServer#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#tag PolicyLbVirtualServer#tag}
  */
  readonly tag?: string;
}

export function policyLbVirtualServerTagToTerraform(struct?: PolicyLbVirtualServerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbVirtualServerTagToHclTerraform(struct?: PolicyLbVirtualServerTag | cdktf.IResolvable): any {
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

export class PolicyLbVirtualServerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbVirtualServerTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyLbVirtualServerTag | cdktf.IResolvable | undefined) {
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

export class PolicyLbVirtualServerTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbVirtualServerTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbVirtualServerTagOutputReference {
    return new PolicyLbVirtualServerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server nsxt_policy_lb_virtual_server}
*/
export class PolicyLbVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbVirtualServer to import
  * @param importFromId The id of the existing PolicyLbVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_virtual_server nsxt_policy_lb_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_virtual_server',
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
    this._accessLogEnabled = config.accessLogEnabled;
    this._applicationProfilePath = config.applicationProfilePath;
    this._defaultPoolMemberPorts = config.defaultPoolMemberPorts;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._logSignificantEventOnly = config.logSignificantEventOnly;
    this._maxConcurrentConnections = config.maxConcurrentConnections;
    this._maxNewConnectionRate = config.maxNewConnectionRate;
    this._nsxId = config.nsxId;
    this._persistenceProfilePath = config.persistenceProfilePath;
    this._poolPath = config.poolPath;
    this._ports = config.ports;
    this._servicePath = config.servicePath;
    this._sorryPoolPath = config.sorryPoolPath;
    this._accessListControl.internalValue = config.accessListControl;
    this._clientSsl.internalValue = config.clientSsl;
    this._rule.internalValue = config.rule;
    this._serverSsl.internalValue = config.serverSsl;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_log_enabled - computed: false, optional: true, required: false
  private _accessLogEnabled?: boolean | cdktf.IResolvable; 
  public get accessLogEnabled() {
    return this.getBooleanAttribute('access_log_enabled');
  }
  public set accessLogEnabled(value: boolean | cdktf.IResolvable) {
    this._accessLogEnabled = value;
  }
  public resetAccessLogEnabled() {
    this._accessLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogEnabledInput() {
    return this._accessLogEnabled;
  }

  // application_profile_path - computed: false, optional: false, required: true
  private _applicationProfilePath?: string; 
  public get applicationProfilePath() {
    return this.getStringAttribute('application_profile_path');
  }
  public set applicationProfilePath(value: string) {
    this._applicationProfilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfilePathInput() {
    return this._applicationProfilePath;
  }

  // default_pool_member_ports - computed: false, optional: true, required: false
  private _defaultPoolMemberPorts?: string[]; 
  public get defaultPoolMemberPorts() {
    return this.getListAttribute('default_pool_member_ports');
  }
  public set defaultPoolMemberPorts(value: string[]) {
    this._defaultPoolMemberPorts = value;
  }
  public resetDefaultPoolMemberPorts() {
    this._defaultPoolMemberPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolMemberPortsInput() {
    return this._defaultPoolMemberPorts;
  }

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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // log_significant_event_only - computed: false, optional: true, required: false
  private _logSignificantEventOnly?: boolean | cdktf.IResolvable; 
  public get logSignificantEventOnly() {
    return this.getBooleanAttribute('log_significant_event_only');
  }
  public set logSignificantEventOnly(value: boolean | cdktf.IResolvable) {
    this._logSignificantEventOnly = value;
  }
  public resetLogSignificantEventOnly() {
    this._logSignificantEventOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSignificantEventOnlyInput() {
    return this._logSignificantEventOnly;
  }

  // max_concurrent_connections - computed: false, optional: true, required: false
  private _maxConcurrentConnections?: number; 
  public get maxConcurrentConnections() {
    return this.getNumberAttribute('max_concurrent_connections');
  }
  public set maxConcurrentConnections(value: number) {
    this._maxConcurrentConnections = value;
  }
  public resetMaxConcurrentConnections() {
    this._maxConcurrentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentConnectionsInput() {
    return this._maxConcurrentConnections;
  }

  // max_new_connection_rate - computed: false, optional: true, required: false
  private _maxNewConnectionRate?: number; 
  public get maxNewConnectionRate() {
    return this.getNumberAttribute('max_new_connection_rate');
  }
  public set maxNewConnectionRate(value: number) {
    this._maxNewConnectionRate = value;
  }
  public resetMaxNewConnectionRate() {
    this._maxNewConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNewConnectionRateInput() {
    return this._maxNewConnectionRate;
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

  // persistence_profile_path - computed: false, optional: true, required: false
  private _persistenceProfilePath?: string; 
  public get persistenceProfilePath() {
    return this.getStringAttribute('persistence_profile_path');
  }
  public set persistenceProfilePath(value: string) {
    this._persistenceProfilePath = value;
  }
  public resetPersistenceProfilePath() {
    this._persistenceProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfilePathInput() {
    return this._persistenceProfilePath;
  }

  // pool_path - computed: false, optional: true, required: false
  private _poolPath?: string; 
  public get poolPath() {
    return this.getStringAttribute('pool_path');
  }
  public set poolPath(value: string) {
    this._poolPath = value;
  }
  public resetPoolPath() {
    this._poolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPathInput() {
    return this._poolPath;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // service_path - computed: false, optional: true, required: false
  private _servicePath?: string; 
  public get servicePath() {
    return this.getStringAttribute('service_path');
  }
  public set servicePath(value: string) {
    this._servicePath = value;
  }
  public resetServicePath() {
    this._servicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePathInput() {
    return this._servicePath;
  }

  // sorry_pool_path - computed: false, optional: true, required: false
  private _sorryPoolPath?: string; 
  public get sorryPoolPath() {
    return this.getStringAttribute('sorry_pool_path');
  }
  public set sorryPoolPath(value: string) {
    this._sorryPoolPath = value;
  }
  public resetSorryPoolPath() {
    this._sorryPoolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorryPoolPathInput() {
    return this._sorryPoolPath;
  }

  // access_list_control - computed: false, optional: true, required: false
  private _accessListControl = new PolicyLbVirtualServerAccessListControlOutputReference(this, "access_list_control");
  public get accessListControl() {
    return this._accessListControl;
  }
  public putAccessListControl(value: PolicyLbVirtualServerAccessListControl) {
    this._accessListControl.internalValue = value;
  }
  public resetAccessListControl() {
    this._accessListControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListControlInput() {
    return this._accessListControl.internalValue;
  }

  // client_ssl - computed: false, optional: true, required: false
  private _clientSsl = new PolicyLbVirtualServerClientSslOutputReference(this, "client_ssl");
  public get clientSsl() {
    return this._clientSsl;
  }
  public putClientSsl(value: PolicyLbVirtualServerClientSsl) {
    this._clientSsl.internalValue = value;
  }
  public resetClientSsl() {
    this._clientSsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslInput() {
    return this._clientSsl.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyLbVirtualServerRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyLbVirtualServerRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // server_ssl - computed: false, optional: true, required: false
  private _serverSsl = new PolicyLbVirtualServerServerSslOutputReference(this, "server_ssl");
  public get serverSsl() {
    return this._serverSsl;
  }
  public putServerSsl(value: PolicyLbVirtualServerServerSsl) {
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
  private _tag = new PolicyLbVirtualServerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbVirtualServerTag[] | cdktf.IResolvable) {
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
      access_log_enabled: cdktf.booleanToTerraform(this._accessLogEnabled),
      application_profile_path: cdktf.stringToTerraform(this._applicationProfilePath),
      default_pool_member_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPoolMemberPorts),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      log_significant_event_only: cdktf.booleanToTerraform(this._logSignificantEventOnly),
      max_concurrent_connections: cdktf.numberToTerraform(this._maxConcurrentConnections),
      max_new_connection_rate: cdktf.numberToTerraform(this._maxNewConnectionRate),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      persistence_profile_path: cdktf.stringToTerraform(this._persistenceProfilePath),
      pool_path: cdktf.stringToTerraform(this._poolPath),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      service_path: cdktf.stringToTerraform(this._servicePath),
      sorry_pool_path: cdktf.stringToTerraform(this._sorryPoolPath),
      access_list_control: policyLbVirtualServerAccessListControlToTerraform(this._accessListControl.internalValue),
      client_ssl: policyLbVirtualServerClientSslToTerraform(this._clientSsl.internalValue),
      rule: cdktf.listMapper(policyLbVirtualServerRuleToTerraform, true)(this._rule.internalValue),
      server_ssl: policyLbVirtualServerServerSslToTerraform(this._serverSsl.internalValue),
      tag: cdktf.listMapper(policyLbVirtualServerTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._accessLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_profile_path: {
        value: cdktf.stringToHclTerraform(this._applicationProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pool_member_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPoolMemberPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_significant_event_only: {
        value: cdktf.booleanToHclTerraform(this._logSignificantEventOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_concurrent_connections: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_new_connection_rate: {
        value: cdktf.numberToHclTerraform(this._maxNewConnectionRate),
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
      persistence_profile_path: {
        value: cdktf.stringToHclTerraform(this._persistenceProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_path: {
        value: cdktf.stringToHclTerraform(this._poolPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_path: {
        value: cdktf.stringToHclTerraform(this._servicePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sorry_pool_path: {
        value: cdktf.stringToHclTerraform(this._sorryPoolPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_list_control: {
        value: policyLbVirtualServerAccessListControlToHclTerraform(this._accessListControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbVirtualServerAccessListControlList",
      },
      client_ssl: {
        value: policyLbVirtualServerClientSslToHclTerraform(this._clientSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbVirtualServerClientSslList",
      },
      rule: {
        value: cdktf.listMapperHcl(policyLbVirtualServerRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbVirtualServerRuleList",
      },
      server_ssl: {
        value: policyLbVirtualServerServerSslToHclTerraform(this._serverSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbVirtualServerServerSslList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLbVirtualServerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbVirtualServerTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
