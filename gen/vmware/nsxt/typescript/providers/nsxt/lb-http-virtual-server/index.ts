// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbHttpVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether access log is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#access_log_enabled LbHttpVirtualServer#access_log_enabled}
  */
  readonly accessLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The http application profile defines the application protocol characteristics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#application_profile_id LbHttpVirtualServer#application_profile_id}
  */
  readonly applicationProfileId: string;
  /**
  * Default pool member port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#default_pool_member_port LbHttpVirtualServer#default_pool_member_port}
  */
  readonly defaultPoolMemberPort?: string;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#description LbHttpVirtualServer#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#display_name LbHttpVirtualServer#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the virtual server is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#enabled LbHttpVirtualServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#id LbHttpVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#ip_address LbHttpVirtualServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * If not specified, connections are unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#max_concurrent_connections LbHttpVirtualServer#max_concurrent_connections}
  */
  readonly maxConcurrentConnections?: number;
  /**
  * If not specified, connection rate is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#max_new_connection_rate LbHttpVirtualServer#max_new_connection_rate}
  */
  readonly maxNewConnectionRate?: number;
  /**
  * Persistence profile is used to allow related client connections to be sent to the same backend server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#persistence_profile_id LbHttpVirtualServer#persistence_profile_id}
  */
  readonly persistenceProfileId?: string;
  /**
  * Server pool for backend connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#pool_id LbHttpVirtualServer#pool_id}
  */
  readonly poolId?: string;
  /**
  * Virtual server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#port LbHttpVirtualServer#port}
  */
  readonly port: string;
  /**
  * Customization of load balancing behavior using match/action rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#rule_ids LbHttpVirtualServer#rule_ids}
  */
  readonly ruleIds?: string[];
  /**
  * When load balancer can not select a backend server to serve the request in default pool or pool in rules, the request would be served by sorry server pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#sorry_pool_id LbHttpVirtualServer#sorry_pool_id}
  */
  readonly sorryPoolId?: string;
  /**
  * client_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#client_ssl LbHttpVirtualServer#client_ssl}
  */
  readonly clientSsl?: LbHttpVirtualServerClientSsl;
  /**
  * server_ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#server_ssl LbHttpVirtualServer#server_ssl}
  */
  readonly serverSsl?: LbHttpVirtualServerServerSsl;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#tag LbHttpVirtualServer#tag}
  */
  readonly tag?: LbHttpVirtualServerTag[] | cdktf.IResolvable;
}
export interface LbHttpVirtualServerClientSsl {
  /**
  * List of CA ids for client authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#ca_ids LbHttpVirtualServer#ca_ids}
  */
  readonly caIds?: string[];
  /**
  * Verification depth in the server certificate chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#certificate_chain_depth LbHttpVirtualServer#certificate_chain_depth}
  */
  readonly certificateChainDepth?: number;
  /**
  * Whether client certificate authentication is mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#client_auth LbHttpVirtualServer#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Id of client SSL profile that defines reusable properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#client_ssl_profile_id LbHttpVirtualServer#client_ssl_profile_id}
  */
  readonly clientSslProfileId: string;
  /**
  * List of CRL ids for client authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#crl_ids LbHttpVirtualServer#crl_ids}
  */
  readonly crlIds?: string[];
  /**
  * Id of certificate that will be used if the server does not host multiple hostnames on the same IP address or if the client does not support SNI extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#default_certificate_id LbHttpVirtualServer#default_certificate_id}
  */
  readonly defaultCertificateId: string;
  /**
  * List of certificates to serve different hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#sni_certificate_ids LbHttpVirtualServer#sni_certificate_ids}
  */
  readonly sniCertificateIds?: string[];
}

export function lbHttpVirtualServerClientSslToTerraform(struct?: LbHttpVirtualServerClientSslOutputReference | LbHttpVirtualServerClientSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caIds),
    certificate_chain_depth: cdktf.numberToTerraform(struct!.certificateChainDepth),
    client_auth: cdktf.booleanToTerraform(struct!.clientAuth),
    client_ssl_profile_id: cdktf.stringToTerraform(struct!.clientSslProfileId),
    crl_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crlIds),
    default_certificate_id: cdktf.stringToTerraform(struct!.defaultCertificateId),
    sni_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniCertificateIds),
  }
}


export function lbHttpVirtualServerClientSslToHclTerraform(struct?: LbHttpVirtualServerClientSslOutputReference | LbHttpVirtualServerClientSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    certificate_chain_depth: {
      value: cdktf.numberToHclTerraform(struct!.certificateChainDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_auth: {
      value: cdktf.booleanToHclTerraform(struct!.clientAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_ssl_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.clientSslProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crlIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniCertificateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpVirtualServerClientSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpVirtualServerClientSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.caIds = this._caIds;
    }
    if (this._certificateChainDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChainDepth = this._certificateChainDepth;
    }
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._clientSslProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslProfileId = this._clientSslProfileId;
    }
    if (this._crlIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlIds = this._crlIds;
    }
    if (this._defaultCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificateId = this._defaultCertificateId;
    }
    if (this._sniCertificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniCertificateIds = this._sniCertificateIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpVirtualServerClientSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caIds = undefined;
      this._certificateChainDepth = undefined;
      this._clientAuth = undefined;
      this._clientSslProfileId = undefined;
      this._crlIds = undefined;
      this._defaultCertificateId = undefined;
      this._sniCertificateIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caIds = value.caIds;
      this._certificateChainDepth = value.certificateChainDepth;
      this._clientAuth = value.clientAuth;
      this._clientSslProfileId = value.clientSslProfileId;
      this._crlIds = value.crlIds;
      this._defaultCertificateId = value.defaultCertificateId;
      this._sniCertificateIds = value.sniCertificateIds;
    }
  }

  // ca_ids - computed: false, optional: true, required: false
  private _caIds?: string[]; 
  public get caIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ca_ids'));
  }
  public set caIds(value: string[]) {
    this._caIds = value;
  }
  public resetCaIds() {
    this._caIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdsInput() {
    return this._caIds;
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
  private _clientAuth?: boolean | cdktf.IResolvable; 
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth');
  }
  public set clientAuth(value: boolean | cdktf.IResolvable) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // client_ssl_profile_id - computed: false, optional: false, required: true
  private _clientSslProfileId?: string; 
  public get clientSslProfileId() {
    return this.getStringAttribute('client_ssl_profile_id');
  }
  public set clientSslProfileId(value: string) {
    this._clientSslProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslProfileIdInput() {
    return this._clientSslProfileId;
  }

  // crl_ids - computed: false, optional: true, required: false
  private _crlIds?: string[]; 
  public get crlIds() {
    return cdktf.Fn.tolist(this.getListAttribute('crl_ids'));
  }
  public set crlIds(value: string[]) {
    this._crlIds = value;
  }
  public resetCrlIds() {
    this._crlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlIdsInput() {
    return this._crlIds;
  }

  // default_certificate_id - computed: false, optional: false, required: true
  private _defaultCertificateId?: string; 
  public get defaultCertificateId() {
    return this.getStringAttribute('default_certificate_id');
  }
  public set defaultCertificateId(value: string) {
    this._defaultCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateIdInput() {
    return this._defaultCertificateId;
  }

  // sni_certificate_ids - computed: false, optional: true, required: false
  private _sniCertificateIds?: string[]; 
  public get sniCertificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('sni_certificate_ids'));
  }
  public set sniCertificateIds(value: string[]) {
    this._sniCertificateIds = value;
  }
  public resetSniCertificateIds() {
    this._sniCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniCertificateIdsInput() {
    return this._sniCertificateIds;
  }
}
export interface LbHttpVirtualServerServerSsl {
  /**
  * List of CA ids for server authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#ca_ids LbHttpVirtualServer#ca_ids}
  */
  readonly caIds?: string[];
  /**
  * Verification depth in the server certificate chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#certificate_chain_depth LbHttpVirtualServer#certificate_chain_depth}
  */
  readonly certificateChainDepth?: number;
  /**
  * Id of certificate that will be used if the server does not host multiple hostnames on the same IP address or if the client does not support SNI extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#client_certificate_id LbHttpVirtualServer#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * List of CRL ids for server authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#crl_ids LbHttpVirtualServer#crl_ids}
  */
  readonly crlIds?: string[];
  /**
  * Server authentication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#server_auth LbHttpVirtualServer#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Id of server SSL profile that defines reusable properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#server_ssl_profile_id LbHttpVirtualServer#server_ssl_profile_id}
  */
  readonly serverSslProfileId: string;
}

export function lbHttpVirtualServerServerSslToTerraform(struct?: LbHttpVirtualServerServerSslOutputReference | LbHttpVirtualServerServerSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caIds),
    certificate_chain_depth: cdktf.numberToTerraform(struct!.certificateChainDepth),
    client_certificate_id: cdktf.stringToTerraform(struct!.clientCertificateId),
    crl_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crlIds),
    server_auth: cdktf.booleanToTerraform(struct!.serverAuth),
    server_ssl_profile_id: cdktf.stringToTerraform(struct!.serverSslProfileId),
  }
}


export function lbHttpVirtualServerServerSslToHclTerraform(struct?: LbHttpVirtualServerServerSslOutputReference | LbHttpVirtualServerServerSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    certificate_chain_depth: {
      value: cdktf.numberToHclTerraform(struct!.certificateChainDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crlIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    server_auth: {
      value: cdktf.booleanToHclTerraform(struct!.serverAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_ssl_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.serverSslProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbHttpVirtualServerServerSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbHttpVirtualServerServerSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.caIds = this._caIds;
    }
    if (this._certificateChainDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChainDepth = this._certificateChainDepth;
    }
    if (this._clientCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateId = this._clientCertificateId;
    }
    if (this._crlIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlIds = this._crlIds;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._serverSslProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslProfileId = this._serverSslProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbHttpVirtualServerServerSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caIds = undefined;
      this._certificateChainDepth = undefined;
      this._clientCertificateId = undefined;
      this._crlIds = undefined;
      this._serverAuth = undefined;
      this._serverSslProfileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caIds = value.caIds;
      this._certificateChainDepth = value.certificateChainDepth;
      this._clientCertificateId = value.clientCertificateId;
      this._crlIds = value.crlIds;
      this._serverAuth = value.serverAuth;
      this._serverSslProfileId = value.serverSslProfileId;
    }
  }

  // ca_ids - computed: false, optional: true, required: false
  private _caIds?: string[]; 
  public get caIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ca_ids'));
  }
  public set caIds(value: string[]) {
    this._caIds = value;
  }
  public resetCaIds() {
    this._caIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdsInput() {
    return this._caIds;
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

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // crl_ids - computed: false, optional: true, required: false
  private _crlIds?: string[]; 
  public get crlIds() {
    return cdktf.Fn.tolist(this.getListAttribute('crl_ids'));
  }
  public set crlIds(value: string[]) {
    this._crlIds = value;
  }
  public resetCrlIds() {
    this._crlIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlIdsInput() {
    return this._crlIds;
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: boolean | cdktf.IResolvable; 
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth');
  }
  public set serverAuth(value: boolean | cdktf.IResolvable) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth;
  }

  // server_ssl_profile_id - computed: false, optional: false, required: true
  private _serverSslProfileId?: string; 
  public get serverSslProfileId() {
    return this.getStringAttribute('server_ssl_profile_id');
  }
  public set serverSslProfileId(value: string) {
    this._serverSslProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslProfileIdInput() {
    return this._serverSslProfileId;
  }
}
export interface LbHttpVirtualServerTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#scope LbHttpVirtualServer#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#tag LbHttpVirtualServer#tag}
  */
  readonly tag?: string;
}

export function lbHttpVirtualServerTagToTerraform(struct?: LbHttpVirtualServerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbHttpVirtualServerTagToHclTerraform(struct?: LbHttpVirtualServerTag | cdktf.IResolvable): any {
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

export class LbHttpVirtualServerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpVirtualServerTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpVirtualServerTag | cdktf.IResolvable | undefined) {
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

export class LbHttpVirtualServerTagList extends cdktf.ComplexList {
  public internalValue? : LbHttpVirtualServerTag[] | cdktf.IResolvable

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
  public get(index: number): LbHttpVirtualServerTagOutputReference {
    return new LbHttpVirtualServerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server nsxt_lb_http_virtual_server}
*/
export class LbHttpVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_http_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbHttpVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbHttpVirtualServer to import
  * @param importFromId The id of the existing LbHttpVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbHttpVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_http_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/lb_http_virtual_server nsxt_lb_http_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbHttpVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: LbHttpVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_http_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._applicationProfileId = config.applicationProfileId;
    this._defaultPoolMemberPort = config.defaultPoolMemberPort;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._maxConcurrentConnections = config.maxConcurrentConnections;
    this._maxNewConnectionRate = config.maxNewConnectionRate;
    this._persistenceProfileId = config.persistenceProfileId;
    this._poolId = config.poolId;
    this._port = config.port;
    this._ruleIds = config.ruleIds;
    this._sorryPoolId = config.sorryPoolId;
    this._clientSsl.internalValue = config.clientSsl;
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

  // application_profile_id - computed: false, optional: false, required: true
  private _applicationProfileId?: string; 
  public get applicationProfileId() {
    return this.getStringAttribute('application_profile_id');
  }
  public set applicationProfileId(value: string) {
    this._applicationProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileIdInput() {
    return this._applicationProfileId;
  }

  // default_pool_member_port - computed: false, optional: true, required: false
  private _defaultPoolMemberPort?: string; 
  public get defaultPoolMemberPort() {
    return this.getStringAttribute('default_pool_member_port');
  }
  public set defaultPoolMemberPort(value: string) {
    this._defaultPoolMemberPort = value;
  }
  public resetDefaultPoolMemberPort() {
    this._defaultPoolMemberPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolMemberPortInput() {
    return this._defaultPoolMemberPort;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // persistence_profile_id - computed: false, optional: true, required: false
  private _persistenceProfileId?: string; 
  public get persistenceProfileId() {
    return this.getStringAttribute('persistence_profile_id');
  }
  public set persistenceProfileId(value: string) {
    this._persistenceProfileId = value;
  }
  public resetPersistenceProfileId() {
    this._persistenceProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfileIdInput() {
    return this._persistenceProfileId;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  public resetRuleIds() {
    this._ruleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // sorry_pool_id - computed: false, optional: true, required: false
  private _sorryPoolId?: string; 
  public get sorryPoolId() {
    return this.getStringAttribute('sorry_pool_id');
  }
  public set sorryPoolId(value: string) {
    this._sorryPoolId = value;
  }
  public resetSorryPoolId() {
    this._sorryPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorryPoolIdInput() {
    return this._sorryPoolId;
  }

  // client_ssl - computed: false, optional: true, required: false
  private _clientSsl = new LbHttpVirtualServerClientSslOutputReference(this, "client_ssl");
  public get clientSsl() {
    return this._clientSsl;
  }
  public putClientSsl(value: LbHttpVirtualServerClientSsl) {
    this._clientSsl.internalValue = value;
  }
  public resetClientSsl() {
    this._clientSsl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslInput() {
    return this._clientSsl.internalValue;
  }

  // server_ssl - computed: false, optional: true, required: false
  private _serverSsl = new LbHttpVirtualServerServerSslOutputReference(this, "server_ssl");
  public get serverSsl() {
    return this._serverSsl;
  }
  public putServerSsl(value: LbHttpVirtualServerServerSsl) {
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
  private _tag = new LbHttpVirtualServerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbHttpVirtualServerTag[] | cdktf.IResolvable) {
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
      application_profile_id: cdktf.stringToTerraform(this._applicationProfileId),
      default_pool_member_port: cdktf.stringToTerraform(this._defaultPoolMemberPort),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      max_concurrent_connections: cdktf.numberToTerraform(this._maxConcurrentConnections),
      max_new_connection_rate: cdktf.numberToTerraform(this._maxNewConnectionRate),
      persistence_profile_id: cdktf.stringToTerraform(this._persistenceProfileId),
      pool_id: cdktf.stringToTerraform(this._poolId),
      port: cdktf.stringToTerraform(this._port),
      rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleIds),
      sorry_pool_id: cdktf.stringToTerraform(this._sorryPoolId),
      client_ssl: lbHttpVirtualServerClientSslToTerraform(this._clientSsl.internalValue),
      server_ssl: lbHttpVirtualServerServerSslToTerraform(this._serverSsl.internalValue),
      tag: cdktf.listMapper(lbHttpVirtualServerTagToTerraform, true)(this._tag.internalValue),
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
      application_profile_id: {
        value: cdktf.stringToHclTerraform(this._applicationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pool_member_port: {
        value: cdktf.stringToHclTerraform(this._defaultPoolMemberPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      persistence_profile_id: {
        value: cdktf.stringToHclTerraform(this._persistenceProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sorry_pool_id: {
        value: cdktf.stringToHclTerraform(this._sorryPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ssl: {
        value: lbHttpVirtualServerClientSslToHclTerraform(this._clientSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbHttpVirtualServerClientSslList",
      },
      server_ssl: {
        value: lbHttpVirtualServerServerSslToHclTerraform(this._serverSsl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbHttpVirtualServerServerSslList",
      },
      tag: {
        value: cdktf.listMapperHcl(lbHttpVirtualServerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpVirtualServerTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
