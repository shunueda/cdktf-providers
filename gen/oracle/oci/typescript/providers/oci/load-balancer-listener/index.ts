// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}
  */
  readonly defaultBackendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}
  */
  readonly hostnameNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}
  */
  readonly pathRouteSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}
  */
  readonly routingPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}
  */
  readonly ruleSetNames?: string[];
  /**
  * connection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}
  */
  readonly connectionConfiguration?: LoadBalancerListenerConnectionConfiguration;
  /**
  * ssl_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}
  */
  readonly sslConfiguration?: LoadBalancerListenerSslConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}
  */
  readonly timeouts?: LoadBalancerListenerTimeouts;
}
export interface LoadBalancerListenerConnectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}
  */
  readonly backendTcpProxyProtocolOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}
  */
  readonly backendTcpProxyProtocolVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}
  */
  readonly idleTimeoutInSeconds: string;
}

export function loadBalancerListenerConnectionConfigurationToTerraform(struct?: LoadBalancerListenerConnectionConfigurationOutputReference | LoadBalancerListenerConnectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_tcp_proxy_protocol_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backendTcpProxyProtocolOptions),
    backend_tcp_proxy_protocol_version: cdktf.numberToTerraform(struct!.backendTcpProxyProtocolVersion),
    idle_timeout_in_seconds: cdktf.stringToTerraform(struct!.idleTimeoutInSeconds),
  }
}


export function loadBalancerListenerConnectionConfigurationToHclTerraform(struct?: LoadBalancerListenerConnectionConfigurationOutputReference | LoadBalancerListenerConnectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_tcp_proxy_protocol_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backendTcpProxyProtocolOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backend_tcp_proxy_protocol_version: {
      value: cdktf.numberToHclTerraform(struct!.backendTcpProxyProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout_in_seconds: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerListenerConnectionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerListenerConnectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendTcpProxyProtocolOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendTcpProxyProtocolOptions = this._backendTcpProxyProtocolOptions;
    }
    if (this._backendTcpProxyProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendTcpProxyProtocolVersion = this._backendTcpProxyProtocolVersion;
    }
    if (this._idleTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInSeconds = this._idleTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerListenerConnectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendTcpProxyProtocolOptions = undefined;
      this._backendTcpProxyProtocolVersion = undefined;
      this._idleTimeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendTcpProxyProtocolOptions = value.backendTcpProxyProtocolOptions;
      this._backendTcpProxyProtocolVersion = value.backendTcpProxyProtocolVersion;
      this._idleTimeoutInSeconds = value.idleTimeoutInSeconds;
    }
  }

  // backend_tcp_proxy_protocol_options - computed: true, optional: true, required: false
  private _backendTcpProxyProtocolOptions?: string[]; 
  public get backendTcpProxyProtocolOptions() {
    return this.getListAttribute('backend_tcp_proxy_protocol_options');
  }
  public set backendTcpProxyProtocolOptions(value: string[]) {
    this._backendTcpProxyProtocolOptions = value;
  }
  public resetBackendTcpProxyProtocolOptions() {
    this._backendTcpProxyProtocolOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTcpProxyProtocolOptionsInput() {
    return this._backendTcpProxyProtocolOptions;
  }

  // backend_tcp_proxy_protocol_version - computed: false, optional: true, required: false
  private _backendTcpProxyProtocolVersion?: number; 
  public get backendTcpProxyProtocolVersion() {
    return this.getNumberAttribute('backend_tcp_proxy_protocol_version');
  }
  public set backendTcpProxyProtocolVersion(value: number) {
    this._backendTcpProxyProtocolVersion = value;
  }
  public resetBackendTcpProxyProtocolVersion() {
    this._backendTcpProxyProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendTcpProxyProtocolVersionInput() {
    return this._backendTcpProxyProtocolVersion;
  }

  // idle_timeout_in_seconds - computed: false, optional: false, required: true
  private _idleTimeoutInSeconds?: string; 
  public get idleTimeoutInSeconds() {
    return this.getStringAttribute('idle_timeout_in_seconds');
  }
  public set idleTimeoutInSeconds(value: string) {
    this._idleTimeoutInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInSecondsInput() {
    return this._idleTimeoutInSeconds;
  }
}
export interface LoadBalancerListenerSslConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}
  */
  readonly cipherSuiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}
  */
  readonly hasSessionResumption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}
  */
  readonly serverOrderPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}
  */
  readonly trustedCertificateAuthorityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}
  */
  readonly verifyDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}
  */
  readonly verifyPeerCertificate?: boolean | cdktf.IResolvable;
}

export function loadBalancerListenerSslConfigurationToTerraform(struct?: LoadBalancerListenerSslConfigurationOutputReference | LoadBalancerListenerSslConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    certificate_name: cdktf.stringToTerraform(struct!.certificateName),
    cipher_suite_name: cdktf.stringToTerraform(struct!.cipherSuiteName),
    has_session_resumption: cdktf.booleanToTerraform(struct!.hasSessionResumption),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    server_order_preference: cdktf.stringToTerraform(struct!.serverOrderPreference),
    trusted_certificate_authority_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedCertificateAuthorityIds),
    verify_depth: cdktf.numberToTerraform(struct!.verifyDepth),
    verify_peer_certificate: cdktf.booleanToTerraform(struct!.verifyPeerCertificate),
  }
}


export function loadBalancerListenerSslConfigurationToHclTerraform(struct?: LoadBalancerListenerSslConfigurationOutputReference | LoadBalancerListenerSslConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suite_name: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuiteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_session_resumption: {
      value: cdktf.booleanToHclTerraform(struct!.hasSessionResumption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_order_preference: {
      value: cdktf.stringToHclTerraform(struct!.serverOrderPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_certificate_authority_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedCertificateAuthorityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_depth: {
      value: cdktf.numberToHclTerraform(struct!.verifyDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_peer_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.verifyPeerCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerListenerSslConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerListenerSslConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._certificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateName = this._certificateName;
    }
    if (this._cipherSuiteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuiteName = this._cipherSuiteName;
    }
    if (this._hasSessionResumption !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasSessionResumption = this._hasSessionResumption;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._serverOrderPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOrderPreference = this._serverOrderPreference;
    }
    if (this._trustedCertificateAuthorityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificateAuthorityIds = this._trustedCertificateAuthorityIds;
    }
    if (this._verifyDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDepth = this._verifyDepth;
    }
    if (this._verifyPeerCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyPeerCertificate = this._verifyPeerCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerListenerSslConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._certificateName = undefined;
      this._cipherSuiteName = undefined;
      this._hasSessionResumption = undefined;
      this._protocols = undefined;
      this._serverOrderPreference = undefined;
      this._trustedCertificateAuthorityIds = undefined;
      this._verifyDepth = undefined;
      this._verifyPeerCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._certificateName = value.certificateName;
      this._cipherSuiteName = value.cipherSuiteName;
      this._hasSessionResumption = value.hasSessionResumption;
      this._protocols = value.protocols;
      this._serverOrderPreference = value.serverOrderPreference;
      this._trustedCertificateAuthorityIds = value.trustedCertificateAuthorityIds;
      this._verifyDepth = value.verifyDepth;
      this._verifyPeerCertificate = value.verifyPeerCertificate;
    }
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // cipher_suite_name - computed: true, optional: true, required: false
  private _cipherSuiteName?: string; 
  public get cipherSuiteName() {
    return this.getStringAttribute('cipher_suite_name');
  }
  public set cipherSuiteName(value: string) {
    this._cipherSuiteName = value;
  }
  public resetCipherSuiteName() {
    this._cipherSuiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteNameInput() {
    return this._cipherSuiteName;
  }

  // has_session_resumption - computed: true, optional: true, required: false
  private _hasSessionResumption?: boolean | cdktf.IResolvable; 
  public get hasSessionResumption() {
    return this.getBooleanAttribute('has_session_resumption');
  }
  public set hasSessionResumption(value: boolean | cdktf.IResolvable) {
    this._hasSessionResumption = value;
  }
  public resetHasSessionResumption() {
    this._hasSessionResumption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSessionResumptionInput() {
    return this._hasSessionResumption;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // server_order_preference - computed: true, optional: true, required: false
  private _serverOrderPreference?: string; 
  public get serverOrderPreference() {
    return this.getStringAttribute('server_order_preference');
  }
  public set serverOrderPreference(value: string) {
    this._serverOrderPreference = value;
  }
  public resetServerOrderPreference() {
    this._serverOrderPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOrderPreferenceInput() {
    return this._serverOrderPreference;
  }

  // trusted_certificate_authority_ids - computed: false, optional: true, required: false
  private _trustedCertificateAuthorityIds?: string[]; 
  public get trustedCertificateAuthorityIds() {
    return this.getListAttribute('trusted_certificate_authority_ids');
  }
  public set trustedCertificateAuthorityIds(value: string[]) {
    this._trustedCertificateAuthorityIds = value;
  }
  public resetTrustedCertificateAuthorityIds() {
    this._trustedCertificateAuthorityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateAuthorityIdsInput() {
    return this._trustedCertificateAuthorityIds;
  }

  // verify_depth - computed: false, optional: true, required: false
  private _verifyDepth?: number; 
  public get verifyDepth() {
    return this.getNumberAttribute('verify_depth');
  }
  public set verifyDepth(value: number) {
    this._verifyDepth = value;
  }
  public resetVerifyDepth() {
    this._verifyDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDepthInput() {
    return this._verifyDepth;
  }

  // verify_peer_certificate - computed: false, optional: true, required: false
  private _verifyPeerCertificate?: boolean | cdktf.IResolvable; 
  public get verifyPeerCertificate() {
    return this.getBooleanAttribute('verify_peer_certificate');
  }
  public set verifyPeerCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyPeerCertificate = value;
  }
  public resetVerifyPeerCertificate() {
    this._verifyPeerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyPeerCertificateInput() {
    return this._verifyPeerCertificate;
  }
}
export interface LoadBalancerListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}
  */
  readonly update?: string;
}

export function loadBalancerListenerTimeoutsToTerraform(struct?: LoadBalancerListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function loadBalancerListenerTimeoutsToHclTerraform(struct?: LoadBalancerListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerListenerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener oci_load_balancer_listener}
*/
export class LoadBalancerListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_load_balancer_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerListener to import
  * @param importFromId The id of the existing LoadBalancerListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_load_balancer_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/load_balancer_listener oci_load_balancer_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerListenerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_listener',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultBackendSetName = config.defaultBackendSetName;
    this._hostnameNames = config.hostnameNames;
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._pathRouteSetName = config.pathRouteSetName;
    this._port = config.port;
    this._protocol = config.protocol;
    this._routingPolicyName = config.routingPolicyName;
    this._ruleSetNames = config.ruleSetNames;
    this._connectionConfiguration.internalValue = config.connectionConfiguration;
    this._sslConfiguration.internalValue = config.sslConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_backend_set_name - computed: false, optional: false, required: true
  private _defaultBackendSetName?: string; 
  public get defaultBackendSetName() {
    return this.getStringAttribute('default_backend_set_name');
  }
  public set defaultBackendSetName(value: string) {
    this._defaultBackendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendSetNameInput() {
    return this._defaultBackendSetName;
  }

  // hostname_names - computed: true, optional: true, required: false
  private _hostnameNames?: string[]; 
  public get hostnameNames() {
    return this.getListAttribute('hostname_names');
  }
  public set hostnameNames(value: string[]) {
    this._hostnameNames = value;
  }
  public resetHostnameNames() {
    this._hostnameNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameNamesInput() {
    return this._hostnameNames;
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // path_route_set_name - computed: false, optional: true, required: false
  private _pathRouteSetName?: string; 
  public get pathRouteSetName() {
    return this.getStringAttribute('path_route_set_name');
  }
  public set pathRouteSetName(value: string) {
    this._pathRouteSetName = value;
  }
  public resetPathRouteSetName() {
    this._pathRouteSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRouteSetNameInput() {
    return this._pathRouteSetName;
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

  // routing_policy_name - computed: false, optional: true, required: false
  private _routingPolicyName?: string; 
  public get routingPolicyName() {
    return this.getStringAttribute('routing_policy_name');
  }
  public set routingPolicyName(value: string) {
    this._routingPolicyName = value;
  }
  public resetRoutingPolicyName() {
    this._routingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyNameInput() {
    return this._routingPolicyName;
  }

  // rule_set_names - computed: true, optional: true, required: false
  private _ruleSetNames?: string[]; 
  public get ruleSetNames() {
    return this.getListAttribute('rule_set_names');
  }
  public set ruleSetNames(value: string[]) {
    this._ruleSetNames = value;
  }
  public resetRuleSetNames() {
    this._ruleSetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNamesInput() {
    return this._ruleSetNames;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // connection_configuration - computed: false, optional: true, required: false
  private _connectionConfiguration = new LoadBalancerListenerConnectionConfigurationOutputReference(this, "connection_configuration");
  public get connectionConfiguration() {
    return this._connectionConfiguration;
  }
  public putConnectionConfiguration(value: LoadBalancerListenerConnectionConfiguration) {
    this._connectionConfiguration.internalValue = value;
  }
  public resetConnectionConfiguration() {
    this._connectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigurationInput() {
    return this._connectionConfiguration.internalValue;
  }

  // ssl_configuration - computed: false, optional: true, required: false
  private _sslConfiguration = new LoadBalancerListenerSslConfigurationOutputReference(this, "ssl_configuration");
  public get sslConfiguration() {
    return this._sslConfiguration;
  }
  public putSslConfiguration(value: LoadBalancerListenerSslConfiguration) {
    this._sslConfiguration.internalValue = value;
  }
  public resetSslConfiguration() {
    this._sslConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigurationInput() {
    return this._sslConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadBalancerListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadBalancerListenerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_backend_set_name: cdktf.stringToTerraform(this._defaultBackendSetName),
      hostname_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnameNames),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      path_route_set_name: cdktf.stringToTerraform(this._pathRouteSetName),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      routing_policy_name: cdktf.stringToTerraform(this._routingPolicyName),
      rule_set_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleSetNames),
      connection_configuration: loadBalancerListenerConnectionConfigurationToTerraform(this._connectionConfiguration.internalValue),
      ssl_configuration: loadBalancerListenerSslConfigurationToTerraform(this._sslConfiguration.internalValue),
      timeouts: loadBalancerListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_backend_set_name: {
        value: cdktf.stringToHclTerraform(this._defaultBackendSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnameNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      path_route_set_name: {
        value: cdktf.stringToHclTerraform(this._pathRouteSetName),
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
      routing_policy_name: {
        value: cdktf.stringToHclTerraform(this._routingPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleSetNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connection_configuration: {
        value: loadBalancerListenerConnectionConfigurationToHclTerraform(this._connectionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerListenerConnectionConfigurationList",
      },
      ssl_configuration: {
        value: loadBalancerListenerSslConfigurationToHclTerraform(this._sslConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerListenerSslConfigurationList",
      },
      timeouts: {
        value: loadBalancerListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
