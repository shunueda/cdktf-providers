// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#id AamAuthenticationServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#ldap AamAuthenticationServer#ldap}
  */
  readonly ldap?: AamAuthenticationServerLdap;
  /**
  * ocsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#ocsp AamAuthenticationServer#ocsp}
  */
  readonly ocsp?: AamAuthenticationServerOcsp;
  /**
  * radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#radius AamAuthenticationServer#radius}
  */
  readonly radius?: AamAuthenticationServerRadius;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#windows AamAuthenticationServer#windows}
  */
  readonly windows?: AamAuthenticationServerWindows;
}
export interface AamAuthenticationServerLdapInstanceListDeriveBindDn {
  /**
  * Specify attribute name of username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#username_attr AamAuthenticationServer#username_attr}
  */
  readonly usernameAttr?: string;
}

export function aamAuthenticationServerLdapInstanceListDeriveBindDnToTerraform(struct?: AamAuthenticationServerLdapInstanceListDeriveBindDnOutputReference | AamAuthenticationServerLdapInstanceListDeriveBindDn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username_attr: cdktf.stringToTerraform(struct!.usernameAttr),
  }
}


export function aamAuthenticationServerLdapInstanceListDeriveBindDnToHclTerraform(struct?: AamAuthenticationServerLdapInstanceListDeriveBindDnOutputReference | AamAuthenticationServerLdapInstanceListDeriveBindDn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username_attr: {
      value: cdktf.stringToHclTerraform(struct!.usernameAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerLdapInstanceListDeriveBindDnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerLdapInstanceListDeriveBindDn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usernameAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameAttr = this._usernameAttr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdapInstanceListDeriveBindDn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usernameAttr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usernameAttr = value.usernameAttr;
    }
  }

  // username_attr - computed: false, optional: true, required: false
  private _usernameAttr?: string; 
  public get usernameAttr() {
    return this.getStringAttribute('username_attr');
  }
  public set usernameAttr(value: string) {
    this._usernameAttr = value;
  }
  public resetUsernameAttr() {
    this._usernameAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttrInput() {
    return this._usernameAttr;
  }
}
export interface AamAuthenticationServerLdapInstanceListHost {
  /**
  * Server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#hostip AamAuthenticationServer#hostip}
  */
  readonly hostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#hostipv6 AamAuthenticationServer#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerLdapInstanceListHostToTerraform(struct?: AamAuthenticationServerLdapInstanceListHostOutputReference | AamAuthenticationServerLdapInstanceListHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerLdapInstanceListHostToHclTerraform(struct?: AamAuthenticationServerLdapInstanceListHostOutputReference | AamAuthenticationServerLdapInstanceListHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostip: {
      value: cdktf.stringToHclTerraform(struct!.hostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.hostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerLdapInstanceListHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerLdapInstanceListHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostip = this._hostip;
    }
    if (this._hostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostipv6 = this._hostipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdapInstanceListHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostip = undefined;
      this._hostipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostip = value.hostip;
      this._hostipv6 = value.hostipv6;
    }
  }

  // hostip - computed: false, optional: true, required: false
  private _hostip?: string; 
  public get hostip() {
    return this.getStringAttribute('hostip');
  }
  public set hostip(value: string) {
    this._hostip = value;
  }
  public resetHostip() {
    this._hostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipInput() {
    return this._hostip;
  }

  // hostipv6 - computed: false, optional: true, required: false
  private _hostipv6?: string; 
  public get hostipv6() {
    return this.getStringAttribute('hostipv6');
  }
  public set hostipv6(value: string) {
    this._hostipv6 = value;
  }
  public resetHostipv6() {
    this._hostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipv6Input() {
    return this._hostipv6;
  }
}
export interface AamAuthenticationServerLdapInstanceListSamplingEnable {
  /**
  * 'all': all; 'admin-bind-success': Admin Bind Success; 'admin-bind-failure': Admin Bind Failure; 'bind-success': User Bind Success; 'bind-failure': User Bind Failure; 'search-success': Search Success; 'search-failure': Search Failure; 'authorize-success': Authorization Success; 'authorize-failure': Authorization Failure; 'timeout-error': Timeout; 'other-error': Other Error; 'request': Request; 'ssl-session-created': TLS/SSL Session Created; 'ssl-session-failure': TLS/SSL Session Failure; 'pw_expiry': Password expiry; 'pw_change_success': Password change success; 'pw_change_failure': Password change failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerLdapInstanceListSamplingEnableToTerraform(struct?: AamAuthenticationServerLdapInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerLdapInstanceListSamplingEnableToHclTerraform(struct?: AamAuthenticationServerLdapInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerLdapInstanceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerLdapInstanceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdapInstanceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerLdapInstanceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerLdapInstanceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerLdapInstanceListSamplingEnableOutputReference {
    return new AamAuthenticationServerLdapInstanceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerLdapInstanceListStruct {
  /**
  * The LDAP server's admin DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#admin_dn AamAuthenticationServer#admin_dn}
  */
  readonly adminDn?: string;
  /**
  * Specify the LDAP server's admin secret password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#admin_secret AamAuthenticationServer#admin_secret}
  */
  readonly adminSecret?: number;
  /**
  * 'ad': Active Directory. Default; 'open-ldap': OpenLDAP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#auth_type AamAuthenticationServer#auth_type}
  */
  readonly authType?: string;
  /**
  * Specify the LDAP server's search base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#base AamAuthenticationServer#base}
  */
  readonly base?: string;
  /**
  * Enforce using DN for LDAP binding(All user input name will be used to create DN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#bind_with_dn AamAuthenticationServer#bind_with_dn}
  */
  readonly bindWithDn?: number;
  /**
  * Specify the LDAPS CA cert filename (Trusted LDAPS CA cert filename)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#ca_cert AamAuthenticationServer#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specify default domain for LDAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#default_domain AamAuthenticationServer#default_domain}
  */
  readonly defaultDomain?: string;
  /**
  * Specify Distinguished Name attribute, default is CN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#dn_attribute AamAuthenticationServer#dn_attribute}
  */
  readonly dnAttribute?: string;
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check AamAuthenticationServer#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_disable AamAuthenticationServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_string AamAuthenticationServer#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Specify LDAPS connection reuse idle timeout value (in seconds) (Specify idle timeout value (in seconds), default is 0 (not reuse LDAPS connection))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#ldaps_conn_reuse_idle_timeout AamAuthenticationServer#ldaps_conn_reuse_idle_timeout}
  */
  readonly ldapsConnReuseIdleTimeout?: number;
  /**
  * Specify LDAP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#name AamAuthenticationServer#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#packet_capture_template AamAuthenticationServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify the LDAP server's authentication port, default is 389
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port AamAuthenticationServer#port}
  */
  readonly port?: number;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port_hm AamAuthenticationServer#port_hm}
  */
  readonly portHm?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port_hm_disable AamAuthenticationServer#port_hm_disable}
  */
  readonly portHmDisable?: number;
  /**
  * Prompt user to change password before expiration in N days. This option only takes effect when server type is AD (Prompt user to change password before expiration in N days, default is not to prompt the user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#prompt_pw_change_before_exp AamAuthenticationServer#prompt_pw_change_before_exp}
  */
  readonly promptPwChangeBeforeExp?: number;
  /**
  * 'ldap': Use LDAP (default); 'ldaps': Use LDAP over SSL; 'starttls': Use LDAP StartTLS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#protocol AamAuthenticationServer#protocol}
  */
  readonly protocol?: string;
  /**
  * Specify the LDAP server's default password expiration time (in seconds) (The LDAP server's default password expiration time (in seconds), default is 0 (no expiration))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#pwdmaxage AamAuthenticationServer#pwdmaxage}
  */
  readonly pwdmaxage?: number;
  /**
  * secret password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#secret_string AamAuthenticationServer#secret_string}
  */
  readonly secretString?: string;
  /**
  * Specify timout for LDAP, default is 10 seconds (The timeout, default is 10 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#timeout AamAuthenticationServer#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * derive_bind_dn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#derive_bind_dn AamAuthenticationServer#derive_bind_dn}
  */
  readonly deriveBindDn?: AamAuthenticationServerLdapInstanceListDeriveBindDn;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#host AamAuthenticationServer#host}
  */
  readonly host?: AamAuthenticationServerLdapInstanceListHost;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerLdapInstanceListSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerLdapInstanceListStructToTerraform(struct?: AamAuthenticationServerLdapInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_dn: cdktf.stringToTerraform(struct!.adminDn),
    admin_secret: cdktf.numberToTerraform(struct!.adminSecret),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    base: cdktf.stringToTerraform(struct!.base),
    bind_with_dn: cdktf.numberToTerraform(struct!.bindWithDn),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    default_domain: cdktf.stringToTerraform(struct!.defaultDomain),
    dn_attribute: cdktf.stringToTerraform(struct!.dnAttribute),
    health_check: cdktf.numberToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_string: cdktf.stringToTerraform(struct!.healthCheckString),
    ldaps_conn_reuse_idle_timeout: cdktf.numberToTerraform(struct!.ldapsConnReuseIdleTimeout),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port: cdktf.numberToTerraform(struct!.port),
    port_hm: cdktf.stringToTerraform(struct!.portHm),
    port_hm_disable: cdktf.numberToTerraform(struct!.portHmDisable),
    prompt_pw_change_before_exp: cdktf.numberToTerraform(struct!.promptPwChangeBeforeExp),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    pwdmaxage: cdktf.numberToTerraform(struct!.pwdmaxage),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    derive_bind_dn: aamAuthenticationServerLdapInstanceListDeriveBindDnToTerraform(struct!.deriveBindDn),
    host: aamAuthenticationServerLdapInstanceListHostToTerraform(struct!.host),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerLdapInstanceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerLdapInstanceListStructToHclTerraform(struct?: AamAuthenticationServerLdapInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_dn: {
      value: cdktf.stringToHclTerraform(struct!.adminDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_secret: {
      value: cdktf.numberToHclTerraform(struct!.adminSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_with_dn: {
      value: cdktf.numberToHclTerraform(struct!.bindWithDn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_domain: {
      value: cdktf.stringToHclTerraform(struct!.defaultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dn_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dnAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.numberToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_string: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldaps_conn_reuse_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ldapsConnReuseIdleTimeout),
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
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_hm: {
      value: cdktf.stringToHclTerraform(struct!.portHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.portHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prompt_pw_change_before_exp: {
      value: cdktf.numberToHclTerraform(struct!.promptPwChangeBeforeExp),
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
    pwdmaxage: {
      value: cdktf.numberToHclTerraform(struct!.pwdmaxage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    derive_bind_dn: {
      value: aamAuthenticationServerLdapInstanceListDeriveBindDnToHclTerraform(struct!.deriveBindDn),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerLdapInstanceListDeriveBindDnList",
    },
    host: {
      value: aamAuthenticationServerLdapInstanceListHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerLdapInstanceListHostList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerLdapInstanceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerLdapInstanceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerLdapInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerLdapInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDn = this._adminDn;
    }
    if (this._adminSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecret = this._adminSecret;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._bindWithDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindWithDn = this._bindWithDn;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._defaultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDomain = this._defaultDomain;
    }
    if (this._dnAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnAttribute = this._dnAttribute;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._healthCheckString !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckString = this._healthCheckString;
    }
    if (this._ldapsConnReuseIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsConnReuseIdleTimeout = this._ldapsConnReuseIdleTimeout;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHm = this._portHm;
    }
    if (this._portHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHmDisable = this._portHmDisable;
    }
    if (this._promptPwChangeBeforeExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptPwChangeBeforeExp = this._promptPwChangeBeforeExp;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._pwdmaxage !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwdmaxage = this._pwdmaxage;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._deriveBindDn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deriveBindDn = this._deriveBindDn?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdapInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminDn = undefined;
      this._adminSecret = undefined;
      this._authType = undefined;
      this._base = undefined;
      this._bindWithDn = undefined;
      this._caCert = undefined;
      this._defaultDomain = undefined;
      this._dnAttribute = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckString = undefined;
      this._ldapsConnReuseIdleTimeout = undefined;
      this._name = undefined;
      this._packetCaptureTemplate = undefined;
      this._port = undefined;
      this._portHm = undefined;
      this._portHmDisable = undefined;
      this._promptPwChangeBeforeExp = undefined;
      this._protocol = undefined;
      this._pwdmaxage = undefined;
      this._secretString = undefined;
      this._timeout = undefined;
      this._uuid = undefined;
      this._deriveBindDn.internalValue = undefined;
      this._host.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminDn = value.adminDn;
      this._adminSecret = value.adminSecret;
      this._authType = value.authType;
      this._base = value.base;
      this._bindWithDn = value.bindWithDn;
      this._caCert = value.caCert;
      this._defaultDomain = value.defaultDomain;
      this._dnAttribute = value.dnAttribute;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckString = value.healthCheckString;
      this._ldapsConnReuseIdleTimeout = value.ldapsConnReuseIdleTimeout;
      this._name = value.name;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._port = value.port;
      this._portHm = value.portHm;
      this._portHmDisable = value.portHmDisable;
      this._promptPwChangeBeforeExp = value.promptPwChangeBeforeExp;
      this._protocol = value.protocol;
      this._pwdmaxage = value.pwdmaxage;
      this._secretString = value.secretString;
      this._timeout = value.timeout;
      this._uuid = value.uuid;
      this._deriveBindDn.internalValue = value.deriveBindDn;
      this._host.internalValue = value.host;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // admin_dn - computed: false, optional: true, required: false
  private _adminDn?: string; 
  public get adminDn() {
    return this.getStringAttribute('admin_dn');
  }
  public set adminDn(value: string) {
    this._adminDn = value;
  }
  public resetAdminDn() {
    this._adminDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDnInput() {
    return this._adminDn;
  }

  // admin_secret - computed: false, optional: true, required: false
  private _adminSecret?: number; 
  public get adminSecret() {
    return this.getNumberAttribute('admin_secret');
  }
  public set adminSecret(value: number) {
    this._adminSecret = value;
  }
  public resetAdminSecret() {
    this._adminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretInput() {
    return this._adminSecret;
  }

  // auth_type - computed: false, optional: true, required: false
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

  // base - computed: false, optional: true, required: false
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // bind_with_dn - computed: false, optional: true, required: false
  private _bindWithDn?: number; 
  public get bindWithDn() {
    return this.getNumberAttribute('bind_with_dn');
  }
  public set bindWithDn(value: number) {
    this._bindWithDn = value;
  }
  public resetBindWithDn() {
    this._bindWithDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindWithDnInput() {
    return this._bindWithDn;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // default_domain - computed: false, optional: true, required: false
  private _defaultDomain?: string; 
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }
  public set defaultDomain(value: string) {
    this._defaultDomain = value;
  }
  public resetDefaultDomain() {
    this._defaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
  }

  // dn_attribute - computed: false, optional: true, required: false
  private _dnAttribute?: string; 
  public get dnAttribute() {
    return this.getStringAttribute('dn_attribute');
  }
  public set dnAttribute(value: string) {
    this._dnAttribute = value;
  }
  public resetDnAttribute() {
    this._dnAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnAttributeInput() {
    return this._dnAttribute;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_string - computed: false, optional: true, required: false
  private _healthCheckString?: string; 
  public get healthCheckString() {
    return this.getStringAttribute('health_check_string');
  }
  public set healthCheckString(value: string) {
    this._healthCheckString = value;
  }
  public resetHealthCheckString() {
    this._healthCheckString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStringInput() {
    return this._healthCheckString;
  }

  // ldaps_conn_reuse_idle_timeout - computed: false, optional: true, required: false
  private _ldapsConnReuseIdleTimeout?: number; 
  public get ldapsConnReuseIdleTimeout() {
    return this.getNumberAttribute('ldaps_conn_reuse_idle_timeout');
  }
  public set ldapsConnReuseIdleTimeout(value: number) {
    this._ldapsConnReuseIdleTimeout = value;
  }
  public resetLdapsConnReuseIdleTimeout() {
    this._ldapsConnReuseIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsConnReuseIdleTimeoutInput() {
    return this._ldapsConnReuseIdleTimeout;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // port - computed: false, optional: true, required: false
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

  // port_hm - computed: false, optional: true, required: false
  private _portHm?: string; 
  public get portHm() {
    return this.getStringAttribute('port_hm');
  }
  public set portHm(value: string) {
    this._portHm = value;
  }
  public resetPortHm() {
    this._portHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmInput() {
    return this._portHm;
  }

  // port_hm_disable - computed: false, optional: true, required: false
  private _portHmDisable?: number; 
  public get portHmDisable() {
    return this.getNumberAttribute('port_hm_disable');
  }
  public set portHmDisable(value: number) {
    this._portHmDisable = value;
  }
  public resetPortHmDisable() {
    this._portHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmDisableInput() {
    return this._portHmDisable;
  }

  // prompt_pw_change_before_exp - computed: false, optional: true, required: false
  private _promptPwChangeBeforeExp?: number; 
  public get promptPwChangeBeforeExp() {
    return this.getNumberAttribute('prompt_pw_change_before_exp');
  }
  public set promptPwChangeBeforeExp(value: number) {
    this._promptPwChangeBeforeExp = value;
  }
  public resetPromptPwChangeBeforeExp() {
    this._promptPwChangeBeforeExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptPwChangeBeforeExpInput() {
    return this._promptPwChangeBeforeExp;
  }

  // protocol - computed: false, optional: true, required: false
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

  // pwdmaxage - computed: false, optional: true, required: false
  private _pwdmaxage?: number; 
  public get pwdmaxage() {
    return this.getNumberAttribute('pwdmaxage');
  }
  public set pwdmaxage(value: number) {
    this._pwdmaxage = value;
  }
  public resetPwdmaxage() {
    this._pwdmaxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdmaxageInput() {
    return this._pwdmaxage;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // derive_bind_dn - computed: false, optional: true, required: false
  private _deriveBindDn = new AamAuthenticationServerLdapInstanceListDeriveBindDnOutputReference(this, "derive_bind_dn");
  public get deriveBindDn() {
    return this._deriveBindDn;
  }
  public putDeriveBindDn(value: AamAuthenticationServerLdapInstanceListDeriveBindDn) {
    this._deriveBindDn.internalValue = value;
  }
  public resetDeriveBindDn() {
    this._deriveBindDn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deriveBindDnInput() {
    return this._deriveBindDn.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new AamAuthenticationServerLdapInstanceListHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerLdapInstanceListHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerLdapInstanceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerLdapInstanceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class AamAuthenticationServerLdapInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerLdapInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerLdapInstanceListStructOutputReference {
    return new AamAuthenticationServerLdapInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerLdapSamplingEnable {
  /**
  * 'all': all; 'admin-bind-success': Total Admin Bind Success; 'admin-bind-failure': Total Admin Bind Failure; 'bind-success': Total User Bind Success; 'bind-failure': Total User Bind Failure; 'search-success': Total Search Success; 'search-failure': Total Search Failure; 'authorize-success': Total Authorization Success; 'authorize-failure': Total Authorization Failure; 'timeout-error': Total Timeout; 'other-error': Total Other Error; 'request': Total Request; 'request-normal': Total Normal Request; 'request-dropped': Total Dropped Request; 'response-success': Total Success Response; 'response-failure': Total Failure Response; 'response-error': Total Error Response; 'response-timeout': Total Timeout Response; 'response-other': Total Other Response; 'job-start-error': Total Job Start Error; 'polling-control-error': Total Polling Control Error; 'ssl-session-created': TLS/SSL Session Created; 'ssl-session-failure': TLS/SSL Session Failure; 'ldaps-idle-conn-num': LDAPS Idle Connection Number; 'ldaps-inuse-conn-num': LDAPS In-use Connection Number; 'pw-expiry': Total Password expiry; 'pw-change-success': Total password change success; 'pw-change-failure': Total password change failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerLdapSamplingEnableToTerraform(struct?: AamAuthenticationServerLdapSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerLdapSamplingEnableToHclTerraform(struct?: AamAuthenticationServerLdapSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerLdapSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerLdapSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdapSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerLdapSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerLdapSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerLdapSamplingEnableOutputReference {
    return new AamAuthenticationServerLdapSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerLdap {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#instance_list AamAuthenticationServer#instance_list}
  */
  readonly instanceList?: AamAuthenticationServerLdapInstanceListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerLdapSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerLdapToTerraform(struct?: AamAuthenticationServerLdapOutputReference | AamAuthenticationServerLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    instance_list: cdktf.listMapper(aamAuthenticationServerLdapInstanceListStructToTerraform, true)(struct!.instanceList),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerLdapSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerLdapToHclTerraform(struct?: AamAuthenticationServerLdapOutputReference | AamAuthenticationServerLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_list: {
      value: cdktf.listMapperHcl(aamAuthenticationServerLdapInstanceListStructToHclTerraform, true)(struct!.instanceList),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerLdapInstanceListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerLdapSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerLdapSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._instanceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._instanceList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._instanceList.internalValue = value.instanceList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new AamAuthenticationServerLdapInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationServerLdapInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerLdapSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerLdapSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface AamAuthenticationServerOcspInstanceListSamplingEnable {
  /**
  * 'all': all; 'request': Request; 'certificate-good': Good Certificate Response; 'certificate-revoked': Revoked Certificate Response; 'certificate-unknown': Unknown Certificate Response; 'timeout': Timeout; 'fail': Handle OCSP response failed; 'stapling-request': OCSP Stapling Request Send; 'stapling-certificate-good': OCSP Stapling Good Certificate Response; 'stapling-certificate-revoked': OCSP Stapling Revoked Certificate Response; 'stapling-certificate-unknown': OCSP Stapling Unknown Certificate Response; 'stapling-timeout': OCSP Stapling Timeout; 'stapling-fail': Handle OCSP response failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerOcspInstanceListSamplingEnableToTerraform(struct?: AamAuthenticationServerOcspInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerOcspInstanceListSamplingEnableToHclTerraform(struct?: AamAuthenticationServerOcspInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerOcspInstanceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerOcspInstanceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerOcspInstanceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerOcspInstanceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerOcspInstanceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerOcspInstanceListSamplingEnableOutputReference {
    return new AamAuthenticationServerOcspInstanceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerOcspInstanceListStruct {
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check AamAuthenticationServer#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_disable AamAuthenticationServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_string AamAuthenticationServer#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Set HTTP version (default 1.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#http_version AamAuthenticationServer#http_version}
  */
  readonly httpVersion?: number;
  /**
  * Specify OCSP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#name AamAuthenticationServer#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#packet_capture_template AamAuthenticationServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port_health_check AamAuthenticationServer#port_health_check}
  */
  readonly portHealthCheck?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port_health_check_disable AamAuthenticationServer#port_health_check_disable}
  */
  readonly portHealthCheckDisable?: number;
  /**
  * Specify the trusted OCSP responder's CA cert filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#responder_ca AamAuthenticationServer#responder_ca}
  */
  readonly responderCa?: string;
  /**
  * Specify the trusted OCSP responder's cert filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#responder_cert AamAuthenticationServer#responder_cert}
  */
  readonly responderCert?: string;
  /**
  * Specify the OCSP server's address (Format: http://host[:port]/) (The OCSP server's address(Format: http://host[:port]/))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#url AamAuthenticationServer#url}
  */
  readonly url?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * '1.1': HTTP version 1.1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#version_type AamAuthenticationServer#version_type}
  */
  readonly versionType?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerOcspInstanceListSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerOcspInstanceListStructToTerraform(struct?: AamAuthenticationServerOcspInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.numberToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_string: cdktf.stringToTerraform(struct!.healthCheckString),
    http_version: cdktf.numberToTerraform(struct!.httpVersion),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port_health_check: cdktf.stringToTerraform(struct!.portHealthCheck),
    port_health_check_disable: cdktf.numberToTerraform(struct!.portHealthCheckDisable),
    responder_ca: cdktf.stringToTerraform(struct!.responderCa),
    responder_cert: cdktf.stringToTerraform(struct!.responderCert),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerOcspInstanceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerOcspInstanceListStructToHclTerraform(struct?: AamAuthenticationServerOcspInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.numberToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_string: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.numberToHclTerraform(struct!.httpVersion),
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
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_health_check: {
      value: cdktf.stringToHclTerraform(struct!.portHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.portHealthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    responder_ca: {
      value: cdktf.stringToHclTerraform(struct!.responderCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_cert: {
      value: cdktf.stringToHclTerraform(struct!.responderCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerOcspInstanceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerOcspInstanceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerOcspInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerOcspInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._healthCheckString !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckString = this._healthCheckString;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._portHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHealthCheck = this._portHealthCheck;
    }
    if (this._portHealthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHealthCheckDisable = this._portHealthCheckDisable;
    }
    if (this._responderCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderCa = this._responderCa;
    }
    if (this._responderCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderCert = this._responderCert;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerOcspInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckString = undefined;
      this._httpVersion = undefined;
      this._name = undefined;
      this._packetCaptureTemplate = undefined;
      this._portHealthCheck = undefined;
      this._portHealthCheckDisable = undefined;
      this._responderCa = undefined;
      this._responderCert = undefined;
      this._url = undefined;
      this._uuid = undefined;
      this._versionType = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckString = value.healthCheckString;
      this._httpVersion = value.httpVersion;
      this._name = value.name;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._portHealthCheck = value.portHealthCheck;
      this._portHealthCheckDisable = value.portHealthCheckDisable;
      this._responderCa = value.responderCa;
      this._responderCert = value.responderCert;
      this._url = value.url;
      this._uuid = value.uuid;
      this._versionType = value.versionType;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_string - computed: false, optional: true, required: false
  private _healthCheckString?: string; 
  public get healthCheckString() {
    return this.getStringAttribute('health_check_string');
  }
  public set healthCheckString(value: string) {
    this._healthCheckString = value;
  }
  public resetHealthCheckString() {
    this._healthCheckString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStringInput() {
    return this._healthCheckString;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // port_health_check - computed: false, optional: true, required: false
  private _portHealthCheck?: string; 
  public get portHealthCheck() {
    return this.getStringAttribute('port_health_check');
  }
  public set portHealthCheck(value: string) {
    this._portHealthCheck = value;
  }
  public resetPortHealthCheck() {
    this._portHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHealthCheckInput() {
    return this._portHealthCheck;
  }

  // port_health_check_disable - computed: false, optional: true, required: false
  private _portHealthCheckDisable?: number; 
  public get portHealthCheckDisable() {
    return this.getNumberAttribute('port_health_check_disable');
  }
  public set portHealthCheckDisable(value: number) {
    this._portHealthCheckDisable = value;
  }
  public resetPortHealthCheckDisable() {
    this._portHealthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHealthCheckDisableInput() {
    return this._portHealthCheckDisable;
  }

  // responder_ca - computed: false, optional: true, required: false
  private _responderCa?: string; 
  public get responderCa() {
    return this.getStringAttribute('responder_ca');
  }
  public set responderCa(value: string) {
    this._responderCa = value;
  }
  public resetResponderCa() {
    this._responderCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderCaInput() {
    return this._responderCa;
  }

  // responder_cert - computed: false, optional: true, required: false
  private _responderCert?: string; 
  public get responderCert() {
    return this.getStringAttribute('responder_cert');
  }
  public set responderCert(value: string) {
    this._responderCert = value;
  }
  public resetResponderCert() {
    this._responderCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderCertInput() {
    return this._responderCert;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerOcspInstanceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerOcspInstanceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class AamAuthenticationServerOcspInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerOcspInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerOcspInstanceListStructOutputReference {
    return new AamAuthenticationServerOcspInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerOcspSamplingEnable {
  /**
  * 'all': all; 'stapling-certificate-good': Total OCSP Stapling Good Certificate Response; 'stapling-certificate-revoked': Total OCSP Stapling Revoked Certificate Response; 'stapling-certificate-unknown': Total OCSP Stapling Unknown Certificate Response; 'stapling-request-normal': Total OSCP Stapling Normal Request; 'stapling-request-dropped': Total OCSP Stapling Dropped Request; 'stapling-response-success': Total OCSP Stapling Success Response; 'stapling-response-failure': Total OCSP Stapling Failure Response; 'stapling-response-error': Total OCSP Stapling Error Response; 'stapling-response-timeout': Total OCSP Stapling Timeout Response; 'stapling-response-other': Total OCSP Stapling Other Response; 'request-normal': Total OSCP Normal Request; 'request-dropped': Total OCSP Dropped Request; 'response-success': Total OCSP Success Response; 'response-failure': Total OCSP Failure Response; 'response-error': Total OCSP Error Response; 'response-timeout': Total OCSP Timeout Response; 'response-other': Total OCSP Other Response; 'job-start-error': Total OCSP Job Start Error; 'polling-control-error': Total OCSP Polling Control Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerOcspSamplingEnableToTerraform(struct?: AamAuthenticationServerOcspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerOcspSamplingEnableToHclTerraform(struct?: AamAuthenticationServerOcspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerOcspSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerOcspSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerOcspSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerOcspSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerOcspSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerOcspSamplingEnableOutputReference {
    return new AamAuthenticationServerOcspSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerOcsp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#instance_list AamAuthenticationServer#instance_list}
  */
  readonly instanceList?: AamAuthenticationServerOcspInstanceListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerOcspSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerOcspToTerraform(struct?: AamAuthenticationServerOcspOutputReference | AamAuthenticationServerOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    instance_list: cdktf.listMapper(aamAuthenticationServerOcspInstanceListStructToTerraform, true)(struct!.instanceList),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerOcspSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerOcspToHclTerraform(struct?: AamAuthenticationServerOcspOutputReference | AamAuthenticationServerOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_list: {
      value: cdktf.listMapperHcl(aamAuthenticationServerOcspInstanceListStructToHclTerraform, true)(struct!.instanceList),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerOcspInstanceListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerOcspSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerOcspSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerOcspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerOcsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._instanceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerOcsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._instanceList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._instanceList.internalValue = value.instanceList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new AamAuthenticationServerOcspInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationServerOcspInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerOcspSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerOcspSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface AamAuthenticationServerRadiusInstanceListHost {
  /**
  * Server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#hostip AamAuthenticationServer#hostip}
  */
  readonly hostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#hostipv6 AamAuthenticationServer#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerRadiusInstanceListHostToTerraform(struct?: AamAuthenticationServerRadiusInstanceListHostOutputReference | AamAuthenticationServerRadiusInstanceListHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerRadiusInstanceListHostToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceListHostOutputReference | AamAuthenticationServerRadiusInstanceListHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostip: {
      value: cdktf.stringToHclTerraform(struct!.hostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.hostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusInstanceListHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerRadiusInstanceListHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostip = this._hostip;
    }
    if (this._hostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostipv6 = this._hostipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusInstanceListHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostip = undefined;
      this._hostipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostip = value.hostip;
      this._hostipv6 = value.hostipv6;
    }
  }

  // hostip - computed: false, optional: true, required: false
  private _hostip?: string; 
  public get hostip() {
    return this.getStringAttribute('hostip');
  }
  public set hostip(value: string) {
    this._hostip = value;
  }
  public resetHostip() {
    this._hostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipInput() {
    return this._hostip;
  }

  // hostipv6 - computed: false, optional: true, required: false
  private _hostipv6?: string; 
  public get hostipv6() {
    return this.getStringAttribute('hostipv6');
  }
  public set hostipv6(value: string) {
    this._hostipv6 = value;
  }
  public resetHostipv6() {
    this._hostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipv6Input() {
    return this._hostipv6;
  }
}
export interface AamAuthenticationServerRadiusInstanceListSamplingEnable {
  /**
  * 'all': all; 'authen_success': Authentication Success; 'authen_failure': Authentication Failure; 'authorize_success': Authorization Success; 'authorize_failure': Authorization Failure; 'access_challenge': Access-Challenge Message Receive; 'timeout_error': Timeout; 'other_error': Other Error; 'request': Request; 'accounting-request-sent': Accounting-Request Sent; 'accounting-success': Accounting Success; 'accounting-failure': Accounting Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerRadiusInstanceListSamplingEnableToTerraform(struct?: AamAuthenticationServerRadiusInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerRadiusInstanceListSamplingEnableToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusInstanceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusInstanceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusInstanceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerRadiusInstanceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusInstanceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusInstanceListSamplingEnableOutputReference {
    return new AamAuthenticationServerRadiusInstanceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerRadiusInstanceListStruct {
  /**
  * Specify the RADIUS server's accounting port, default is 1813
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#accounting_port AamAuthenticationServer#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Specify accounting port health check method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#acct_port_hm AamAuthenticationServer#acct_port_hm}
  */
  readonly acctPortHm?: string;
  /**
  * Disable configured accounting port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#acct_port_hm_disable AamAuthenticationServer#acct_port_hm_disable}
  */
  readonly acctPortHmDisable?: number;
  /**
  * 'pap': PAP authentication. Default; 'mschapv2': MS-CHAPv2 authentication; 'mschapv2-pap': Use MS-CHAPv2 first. If server doesn't support it, try PAP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#auth_type AamAuthenticationServer#auth_type}
  */
  readonly authType?: string;
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check AamAuthenticationServer#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_disable AamAuthenticationServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_string AamAuthenticationServer#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Specify the interval time for resend the request (second), default is 3 seconds (The interval time(second), default is 3 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#interval AamAuthenticationServer#interval}
  */
  readonly interval?: number;
  /**
  * Verify Message-Authenticator attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#message_authenticator_verify_enable AamAuthenticationServer#message_authenticator_verify_enable}
  */
  readonly messageAuthenticatorVerifyEnable?: number;
  /**
  * Specify RADIUS authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#name AamAuthenticationServer#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#packet_capture_template AamAuthenticationServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify the RADIUS server's authentication port, default is 1812
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port AamAuthenticationServer#port}
  */
  readonly port?: number;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port_hm AamAuthenticationServer#port_hm}
  */
  readonly portHm?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#port_hm_disable AamAuthenticationServer#port_hm_disable}
  */
  readonly portHmDisable?: number;
  /**
  * Specify the retry number for resend the request, default is 5 (The retry number, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#retry AamAuthenticationServer#retry}
  */
  readonly retry?: number;
  /**
  * Specify the RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#secret AamAuthenticationServer#secret}
  */
  readonly secret?: number;
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#secret_string AamAuthenticationServer#secret_string}
  */
  readonly secretString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#host AamAuthenticationServer#host}
  */
  readonly host?: AamAuthenticationServerRadiusInstanceListHost;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerRadiusInstanceListSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerRadiusInstanceListStructToTerraform(struct?: AamAuthenticationServerRadiusInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_port: cdktf.numberToTerraform(struct!.accountingPort),
    acct_port_hm: cdktf.stringToTerraform(struct!.acctPortHm),
    acct_port_hm_disable: cdktf.numberToTerraform(struct!.acctPortHmDisable),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    health_check: cdktf.numberToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_string: cdktf.stringToTerraform(struct!.healthCheckString),
    interval: cdktf.numberToTerraform(struct!.interval),
    message_authenticator_verify_enable: cdktf.numberToTerraform(struct!.messageAuthenticatorVerifyEnable),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port: cdktf.numberToTerraform(struct!.port),
    port_hm: cdktf.stringToTerraform(struct!.portHm),
    port_hm_disable: cdktf.numberToTerraform(struct!.portHmDisable),
    retry: cdktf.numberToTerraform(struct!.retry),
    secret: cdktf.numberToTerraform(struct!.secret),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    host: aamAuthenticationServerRadiusInstanceListHostToTerraform(struct!.host),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerRadiusInstanceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerRadiusInstanceListStructToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_port: {
      value: cdktf.numberToHclTerraform(struct!.accountingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acct_port_hm: {
      value: cdktf.stringToHclTerraform(struct!.acctPortHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acct_port_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.acctPortHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.numberToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_string: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_authenticator_verify_enable: {
      value: cdktf.numberToHclTerraform(struct!.messageAuthenticatorVerifyEnable),
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
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_hm: {
      value: cdktf.stringToHclTerraform(struct!.portHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.portHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.numberToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: aamAuthenticationServerRadiusInstanceListHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerRadiusInstanceListHostList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerRadiusInstanceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerRadiusInstanceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPort = this._accountingPort;
    }
    if (this._acctPortHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPortHm = this._acctPortHm;
    }
    if (this._acctPortHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPortHmDisable = this._acctPortHmDisable;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._healthCheckString !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckString = this._healthCheckString;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._messageAuthenticatorVerifyEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageAuthenticatorVerifyEnable = this._messageAuthenticatorVerifyEnable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHm = this._portHm;
    }
    if (this._portHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHmDisable = this._portHmDisable;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingPort = undefined;
      this._acctPortHm = undefined;
      this._acctPortHmDisable = undefined;
      this._authType = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckString = undefined;
      this._interval = undefined;
      this._messageAuthenticatorVerifyEnable = undefined;
      this._name = undefined;
      this._packetCaptureTemplate = undefined;
      this._port = undefined;
      this._portHm = undefined;
      this._portHmDisable = undefined;
      this._retry = undefined;
      this._secret = undefined;
      this._secretString = undefined;
      this._uuid = undefined;
      this._host.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountingPort = value.accountingPort;
      this._acctPortHm = value.acctPortHm;
      this._acctPortHmDisable = value.acctPortHmDisable;
      this._authType = value.authType;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckString = value.healthCheckString;
      this._interval = value.interval;
      this._messageAuthenticatorVerifyEnable = value.messageAuthenticatorVerifyEnable;
      this._name = value.name;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._port = value.port;
      this._portHm = value.portHm;
      this._portHmDisable = value.portHmDisable;
      this._retry = value.retry;
      this._secret = value.secret;
      this._secretString = value.secretString;
      this._uuid = value.uuid;
      this._host.internalValue = value.host;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // acct_port_hm - computed: false, optional: true, required: false
  private _acctPortHm?: string; 
  public get acctPortHm() {
    return this.getStringAttribute('acct_port_hm');
  }
  public set acctPortHm(value: string) {
    this._acctPortHm = value;
  }
  public resetAcctPortHm() {
    this._acctPortHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortHmInput() {
    return this._acctPortHm;
  }

  // acct_port_hm_disable - computed: false, optional: true, required: false
  private _acctPortHmDisable?: number; 
  public get acctPortHmDisable() {
    return this.getNumberAttribute('acct_port_hm_disable');
  }
  public set acctPortHmDisable(value: number) {
    this._acctPortHmDisable = value;
  }
  public resetAcctPortHmDisable() {
    this._acctPortHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortHmDisableInput() {
    return this._acctPortHmDisable;
  }

  // auth_type - computed: false, optional: true, required: false
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

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_string - computed: false, optional: true, required: false
  private _healthCheckString?: string; 
  public get healthCheckString() {
    return this.getStringAttribute('health_check_string');
  }
  public set healthCheckString(value: string) {
    this._healthCheckString = value;
  }
  public resetHealthCheckString() {
    this._healthCheckString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStringInput() {
    return this._healthCheckString;
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

  // message_authenticator_verify_enable - computed: false, optional: true, required: false
  private _messageAuthenticatorVerifyEnable?: number; 
  public get messageAuthenticatorVerifyEnable() {
    return this.getNumberAttribute('message_authenticator_verify_enable');
  }
  public set messageAuthenticatorVerifyEnable(value: number) {
    this._messageAuthenticatorVerifyEnable = value;
  }
  public resetMessageAuthenticatorVerifyEnable() {
    this._messageAuthenticatorVerifyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageAuthenticatorVerifyEnableInput() {
    return this._messageAuthenticatorVerifyEnable;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // port - computed: false, optional: true, required: false
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

  // port_hm - computed: false, optional: true, required: false
  private _portHm?: string; 
  public get portHm() {
    return this.getStringAttribute('port_hm');
  }
  public set portHm(value: string) {
    this._portHm = value;
  }
  public resetPortHm() {
    this._portHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmInput() {
    return this._portHm;
  }

  // port_hm_disable - computed: false, optional: true, required: false
  private _portHmDisable?: number; 
  public get portHmDisable() {
    return this.getNumberAttribute('port_hm_disable');
  }
  public set portHmDisable(value: number) {
    this._portHmDisable = value;
  }
  public resetPortHmDisable() {
    this._portHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmDisableInput() {
    return this._portHmDisable;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: number; 
  public get secret() {
    return this.getNumberAttribute('secret');
  }
  public set secret(value: number) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // host - computed: false, optional: true, required: false
  private _host = new AamAuthenticationServerRadiusInstanceListHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerRadiusInstanceListHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerRadiusInstanceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerRadiusInstanceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class AamAuthenticationServerRadiusInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusInstanceListStructOutputReference {
    return new AamAuthenticationServerRadiusInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerRadiusSamplingEnable {
  /**
  * 'all': all; 'authen_success': Total Authentication Success; 'authen_failure': Total Authentication Failure; 'authorize_success': Total Authorization Success; 'authorize_failure': Total Authorization Failure; 'access_challenge': Total Access-Challenge Message Receive; 'timeout_error': Total Timeout; 'other_error': Total Other Error; 'request': Total Request; 'request-normal': Total Normal Request; 'request-dropped': Total Dropped Request; 'response-success': Total Success Response; 'response-failure': Total Failure Response; 'response-error': Total Error Response; 'response-timeout': Total Timeout Response; 'response-other': Total Other Response; 'job-start-error': Total Job Start Error; 'polling-control-error': Total Polling Control Error; 'accounting-request-sent': Accounting-Request Sent; 'accounting-success': Accounting Success; 'accounting-failure': Accounting Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerRadiusSamplingEnableToTerraform(struct?: AamAuthenticationServerRadiusSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerRadiusSamplingEnableToHclTerraform(struct?: AamAuthenticationServerRadiusSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerRadiusSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusSamplingEnableOutputReference {
    return new AamAuthenticationServerRadiusSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerRadius {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#instance_list AamAuthenticationServer#instance_list}
  */
  readonly instanceList?: AamAuthenticationServerRadiusInstanceListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerRadiusSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerRadiusToTerraform(struct?: AamAuthenticationServerRadiusOutputReference | AamAuthenticationServerRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    instance_list: cdktf.listMapper(aamAuthenticationServerRadiusInstanceListStructToTerraform, true)(struct!.instanceList),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerRadiusSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerRadiusToHclTerraform(struct?: AamAuthenticationServerRadiusOutputReference | AamAuthenticationServerRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_list: {
      value: cdktf.listMapperHcl(aamAuthenticationServerRadiusInstanceListStructToHclTerraform, true)(struct!.instanceList),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerRadiusInstanceListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerRadiusSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerRadiusSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerRadius | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._instanceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._instanceList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._instanceList.internalValue = value.instanceList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new AamAuthenticationServerRadiusInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationServerRadiusInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerRadiusSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerRadiusSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation {
  /**
  * Specify account for KDC validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kdc_account AamAuthenticationServer#kdc_account}
  */
  readonly kdcAccount?: string;
  /**
  * Specify account password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kdc_password AamAuthenticationServer#kdc_password}
  */
  readonly kdcPassword?: number;
  /**
  * Account password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kdc_pwd AamAuthenticationServer#kdc_pwd}
  */
  readonly kdcPwd?: string;
  /**
  * Specify SPN for KDC validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kdc_spn AamAuthenticationServer#kdc_spn}
  */
  readonly kdcSpn?: string;
}

export function aamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationToTerraform(struct?: AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationOutputReference | AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kdc_account: cdktf.stringToTerraform(struct!.kdcAccount),
    kdc_password: cdktf.numberToTerraform(struct!.kdcPassword),
    kdc_pwd: cdktf.stringToTerraform(struct!.kdcPwd),
    kdc_spn: cdktf.stringToTerraform(struct!.kdcSpn),
  }
}


export function aamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationOutputReference | AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kdc_account: {
      value: cdktf.stringToHclTerraform(struct!.kdcAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_password: {
      value: cdktf.numberToHclTerraform(struct!.kdcPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kdc_pwd: {
      value: cdktf.stringToHclTerraform(struct!.kdcPwd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_spn: {
      value: cdktf.stringToHclTerraform(struct!.kdcSpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kdcAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcAccount = this._kdcAccount;
    }
    if (this._kdcPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcPassword = this._kdcPassword;
    }
    if (this._kdcPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcPwd = this._kdcPwd;
    }
    if (this._kdcSpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcSpn = this._kdcSpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kdcAccount = undefined;
      this._kdcPassword = undefined;
      this._kdcPwd = undefined;
      this._kdcSpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kdcAccount = value.kdcAccount;
      this._kdcPassword = value.kdcPassword;
      this._kdcPwd = value.kdcPwd;
      this._kdcSpn = value.kdcSpn;
    }
  }

  // kdc_account - computed: false, optional: true, required: false
  private _kdcAccount?: string; 
  public get kdcAccount() {
    return this.getStringAttribute('kdc_account');
  }
  public set kdcAccount(value: string) {
    this._kdcAccount = value;
  }
  public resetKdcAccount() {
    this._kdcAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcAccountInput() {
    return this._kdcAccount;
  }

  // kdc_password - computed: false, optional: true, required: false
  private _kdcPassword?: number; 
  public get kdcPassword() {
    return this.getNumberAttribute('kdc_password');
  }
  public set kdcPassword(value: number) {
    this._kdcPassword = value;
  }
  public resetKdcPassword() {
    this._kdcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcPasswordInput() {
    return this._kdcPassword;
  }

  // kdc_pwd - computed: false, optional: true, required: false
  private _kdcPwd?: string; 
  public get kdcPwd() {
    return this.getStringAttribute('kdc_pwd');
  }
  public set kdcPwd(value: string) {
    this._kdcPwd = value;
  }
  public resetKdcPwd() {
    this._kdcPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcPwdInput() {
    return this._kdcPwd;
  }

  // kdc_spn - computed: false, optional: true, required: false
  private _kdcSpn?: string; 
  public get kdcSpn() {
    return this.getStringAttribute('kdc_spn');
  }
  public set kdcSpn(value: string) {
    this._kdcSpn = value;
  }
  public resetKdcSpn() {
    this._kdcSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcSpnInput() {
    return this._kdcSpn;
  }
}
export interface AamAuthenticationServerWindowsInstanceListAuthProtocol {
  /**
  * Enable KDC validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kdc_validate AamAuthenticationServer#kdc_validate}
  */
  readonly kdcValidate?: number;
  /**
  * Specify the Kerbros password change port, default is 464
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kerberos_password_change_port AamAuthenticationServer#kerberos_password_change_port}
  */
  readonly kerberosPasswordChangePort?: number;
  /**
  * Specify the Kerberos port, default is 88
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kerberos_port AamAuthenticationServer#kerberos_port}
  */
  readonly kerberosPort?: number;
  /**
  * Check Kerberos port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kport_hm AamAuthenticationServer#kport_hm}
  */
  readonly kportHm?: string;
  /**
  * Disable configured Kerberos port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kport_hm_disable AamAuthenticationServer#kport_hm_disable}
  */
  readonly kportHmDisable?: number;
  /**
  * kerberos_kdc_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#kerberos_kdc_validation AamAuthenticationServer#kerberos_kdc_validation}
  */
  readonly kerberosKdcValidation?: AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation;
}

export function aamAuthenticationServerWindowsInstanceListAuthProtocolToTerraform(struct?: AamAuthenticationServerWindowsInstanceListAuthProtocolOutputReference | AamAuthenticationServerWindowsInstanceListAuthProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kdc_validate: cdktf.numberToTerraform(struct!.kdcValidate),
    kerberos_password_change_port: cdktf.numberToTerraform(struct!.kerberosPasswordChangePort),
    kerberos_port: cdktf.numberToTerraform(struct!.kerberosPort),
    kport_hm: cdktf.stringToTerraform(struct!.kportHm),
    kport_hm_disable: cdktf.numberToTerraform(struct!.kportHmDisable),
    kerberos_kdc_validation: aamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationToTerraform(struct!.kerberosKdcValidation),
  }
}


export function aamAuthenticationServerWindowsInstanceListAuthProtocolToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceListAuthProtocolOutputReference | AamAuthenticationServerWindowsInstanceListAuthProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kdc_validate: {
      value: cdktf.numberToHclTerraform(struct!.kdcValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_password_change_port: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPasswordChangePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kport_hm: {
      value: cdktf.stringToHclTerraform(struct!.kportHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kport_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.kportHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_kdc_validation: {
      value: aamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationToHclTerraform(struct!.kerberosKdcValidation),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceListAuthProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindowsInstanceListAuthProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kdcValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcValidate = this._kdcValidate;
    }
    if (this._kerberosPasswordChangePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPasswordChangePort = this._kerberosPasswordChangePort;
    }
    if (this._kerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPort = this._kerberosPort;
    }
    if (this._kportHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kportHm = this._kportHm;
    }
    if (this._kportHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.kportHmDisable = this._kportHmDisable;
    }
    if (this._kerberosKdcValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdcValidation = this._kerberosKdcValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceListAuthProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kdcValidate = undefined;
      this._kerberosPasswordChangePort = undefined;
      this._kerberosPort = undefined;
      this._kportHm = undefined;
      this._kportHmDisable = undefined;
      this._kerberosKdcValidation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kdcValidate = value.kdcValidate;
      this._kerberosPasswordChangePort = value.kerberosPasswordChangePort;
      this._kerberosPort = value.kerberosPort;
      this._kportHm = value.kportHm;
      this._kportHmDisable = value.kportHmDisable;
      this._kerberosKdcValidation.internalValue = value.kerberosKdcValidation;
    }
  }

  // kdc_validate - computed: false, optional: true, required: false
  private _kdcValidate?: number; 
  public get kdcValidate() {
    return this.getNumberAttribute('kdc_validate');
  }
  public set kdcValidate(value: number) {
    this._kdcValidate = value;
  }
  public resetKdcValidate() {
    this._kdcValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcValidateInput() {
    return this._kdcValidate;
  }

  // kerberos_password_change_port - computed: false, optional: true, required: false
  private _kerberosPasswordChangePort?: number; 
  public get kerberosPasswordChangePort() {
    return this.getNumberAttribute('kerberos_password_change_port');
  }
  public set kerberosPasswordChangePort(value: number) {
    this._kerberosPasswordChangePort = value;
  }
  public resetKerberosPasswordChangePort() {
    this._kerberosPasswordChangePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPasswordChangePortInput() {
    return this._kerberosPasswordChangePort;
  }

  // kerberos_port - computed: false, optional: true, required: false
  private _kerberosPort?: number; 
  public get kerberosPort() {
    return this.getNumberAttribute('kerberos_port');
  }
  public set kerberosPort(value: number) {
    this._kerberosPort = value;
  }
  public resetKerberosPort() {
    this._kerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPortInput() {
    return this._kerberosPort;
  }

  // kport_hm - computed: false, optional: true, required: false
  private _kportHm?: string; 
  public get kportHm() {
    return this.getStringAttribute('kport_hm');
  }
  public set kportHm(value: string) {
    this._kportHm = value;
  }
  public resetKportHm() {
    this._kportHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kportHmInput() {
    return this._kportHm;
  }

  // kport_hm_disable - computed: false, optional: true, required: false
  private _kportHmDisable?: number; 
  public get kportHmDisable() {
    return this.getNumberAttribute('kport_hm_disable');
  }
  public set kportHmDisable(value: number) {
    this._kportHmDisable = value;
  }
  public resetKportHmDisable() {
    this._kportHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kportHmDisableInput() {
    return this._kportHmDisable;
  }

  // kerberos_kdc_validation - computed: false, optional: true, required: false
  private _kerberosKdcValidation = new AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidationOutputReference(this, "kerberos_kdc_validation");
  public get kerberosKdcValidation() {
    return this._kerberosKdcValidation;
  }
  public putKerberosKdcValidation(value: AamAuthenticationServerWindowsInstanceListAuthProtocolKerberosKdcValidation) {
    this._kerberosKdcValidation.internalValue = value;
  }
  public resetKerberosKdcValidation() {
    this._kerberosKdcValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcValidationInput() {
    return this._kerberosKdcValidation.internalValue;
  }
}
export interface AamAuthenticationServerWindowsInstanceListHost {
  /**
  * Specify the Windows server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#hostip AamAuthenticationServer#hostip}
  */
  readonly hostip?: string;
  /**
  * Specify the Windows server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#hostipv6 AamAuthenticationServer#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerWindowsInstanceListHostToTerraform(struct?: AamAuthenticationServerWindowsInstanceListHostOutputReference | AamAuthenticationServerWindowsInstanceListHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerWindowsInstanceListHostToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceListHostOutputReference | AamAuthenticationServerWindowsInstanceListHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostip: {
      value: cdktf.stringToHclTerraform(struct!.hostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.hostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceListHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindowsInstanceListHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostip = this._hostip;
    }
    if (this._hostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostipv6 = this._hostipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceListHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostip = undefined;
      this._hostipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostip = value.hostip;
      this._hostipv6 = value.hostipv6;
    }
  }

  // hostip - computed: false, optional: true, required: false
  private _hostip?: string; 
  public get hostip() {
    return this.getStringAttribute('hostip');
  }
  public set hostip(value: string) {
    this._hostip = value;
  }
  public resetHostip() {
    this._hostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipInput() {
    return this._hostip;
  }

  // hostipv6 - computed: false, optional: true, required: false
  private _hostipv6?: string; 
  public get hostipv6() {
    return this.getStringAttribute('hostipv6');
  }
  public set hostipv6(value: string) {
    this._hostipv6 = value;
  }
  public resetHostipv6() {
    this._hostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipv6Input() {
    return this._hostipv6;
  }
}
export interface AamAuthenticationServerWindowsInstanceListSamplingEnable {
  /**
  * 'all': all; 'krb_send_req_success': Kerberos Request; 'krb_get_resp_success': Kerberos Response; 'krb_timeout_error': Kerberos Timeout; 'krb_other_error': Kerberos Other Error; 'krb_pw_expiry': Kerberos password expiry; 'krb_pw_change_success': Kerberos password change success; 'krb_pw_change_failure': Kerberos password change failure; 'krb_validate_kdc_success': Kerberos KDC Validation Success; 'krb_validate_kdc_failure': Kerberos KDC Validation Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerWindowsInstanceListSamplingEnableToTerraform(struct?: AamAuthenticationServerWindowsInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerWindowsInstanceListSamplingEnableToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerWindowsInstanceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerWindowsInstanceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerWindowsInstanceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerWindowsInstanceListSamplingEnableOutputReference {
    return new AamAuthenticationServerWindowsInstanceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerWindowsInstanceListStruct {
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check AamAuthenticationServer#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_disable AamAuthenticationServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#health_check_string AamAuthenticationServer#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Specify Windows authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#name AamAuthenticationServer#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#packet_capture_template AamAuthenticationServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify realm of Windows server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#realm AamAuthenticationServer#realm}
  */
  readonly realm?: string;
  /**
  * Enable weak cipher (DES CRC/MD5/MD4) and merge AS-REQ in single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#support_apacheds_kdc AamAuthenticationServer#support_apacheds_kdc}
  */
  readonly supportApachedsKdc?: number;
  /**
  * Specify connection timeout to server, default is 10 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#timeout AamAuthenticationServer#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#auth_protocol AamAuthenticationServer#auth_protocol}
  */
  readonly authProtocol?: AamAuthenticationServerWindowsInstanceListAuthProtocol;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#host AamAuthenticationServer#host}
  */
  readonly host?: AamAuthenticationServerWindowsInstanceListHost;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerWindowsInstanceListSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerWindowsInstanceListStructToTerraform(struct?: AamAuthenticationServerWindowsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.numberToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_string: cdktf.stringToTerraform(struct!.healthCheckString),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    realm: cdktf.stringToTerraform(struct!.realm),
    support_apacheds_kdc: cdktf.numberToTerraform(struct!.supportApachedsKdc),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    auth_protocol: aamAuthenticationServerWindowsInstanceListAuthProtocolToTerraform(struct!.authProtocol),
    host: aamAuthenticationServerWindowsInstanceListHostToTerraform(struct!.host),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerWindowsInstanceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerWindowsInstanceListStructToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.numberToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_string: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckString),
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
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_apacheds_kdc: {
      value: cdktf.numberToHclTerraform(struct!.supportApachedsKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_protocol: {
      value: aamAuthenticationServerWindowsInstanceListAuthProtocolToHclTerraform(struct!.authProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsInstanceListAuthProtocolList",
    },
    host: {
      value: aamAuthenticationServerWindowsInstanceListHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsInstanceListHostList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerWindowsInstanceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsInstanceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerWindowsInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._healthCheckString !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckString = this._healthCheckString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._supportApachedsKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportApachedsKdc = this._supportApachedsKdc;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProtocol = this._authProtocol?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckString = undefined;
      this._name = undefined;
      this._packetCaptureTemplate = undefined;
      this._realm = undefined;
      this._supportApachedsKdc = undefined;
      this._timeout = undefined;
      this._uuid = undefined;
      this._authProtocol.internalValue = undefined;
      this._host.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckString = value.healthCheckString;
      this._name = value.name;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._realm = value.realm;
      this._supportApachedsKdc = value.supportApachedsKdc;
      this._timeout = value.timeout;
      this._uuid = value.uuid;
      this._authProtocol.internalValue = value.authProtocol;
      this._host.internalValue = value.host;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_string - computed: false, optional: true, required: false
  private _healthCheckString?: string; 
  public get healthCheckString() {
    return this.getStringAttribute('health_check_string');
  }
  public set healthCheckString(value: string) {
    this._healthCheckString = value;
  }
  public resetHealthCheckString() {
    this._healthCheckString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStringInput() {
    return this._healthCheckString;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
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

  // support_apacheds_kdc - computed: false, optional: true, required: false
  private _supportApachedsKdc?: number; 
  public get supportApachedsKdc() {
    return this.getNumberAttribute('support_apacheds_kdc');
  }
  public set supportApachedsKdc(value: number) {
    this._supportApachedsKdc = value;
  }
  public resetSupportApachedsKdc() {
    this._supportApachedsKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportApachedsKdcInput() {
    return this._supportApachedsKdc;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol = new AamAuthenticationServerWindowsInstanceListAuthProtocolOutputReference(this, "auth_protocol");
  public get authProtocol() {
    return this._authProtocol;
  }
  public putAuthProtocol(value: AamAuthenticationServerWindowsInstanceListAuthProtocol) {
    this._authProtocol.internalValue = value;
  }
  public resetAuthProtocol() {
    this._authProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new AamAuthenticationServerWindowsInstanceListHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerWindowsInstanceListHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerWindowsInstanceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerWindowsInstanceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class AamAuthenticationServerWindowsInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerWindowsInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerWindowsInstanceListStructOutputReference {
    return new AamAuthenticationServerWindowsInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerWindowsSamplingEnable {
  /**
  * 'all': all; 'kerberos-request-send': Total Kerberos Request; 'kerberos-response-get': Total Kerberos Response; 'kerberos-timeout-error': Total Kerberos Timeout; 'kerberos-other-error': Total Kerberos Other Error; 'kerberos-request-normal': Total Kerberos Normal Request; 'kerberos-request-dropped': Total Kerberos Dropped Request; 'kerberos-response-success': Total Kerberos Success Response; 'kerberos-response-failure': Total Kerberos Failure Response; 'kerberos-response-error': Total Kerberos Error Response; 'kerberos-response-timeout': Total Kerberos Timeout Response; 'kerberos-response-other': Total Kerberos Other Response; 'kerberos-job-start-error': Total Kerberos Job Start Error; 'kerberos-polling-control-error': Total Kerberos Polling Control Error; 'kerberos-pw-expiry': Total Kerberos password expiry; 'kerberos-pw-change-success': Total Kerberos password change success; 'kerberos-pw-change-failure': Total Kerberos password change failure; 'kerberos-validate-kdc-success': Total Kerberos KDC Validation Success; 'kerberos-validate-kdc-failure': Total Kerberos KDC Validation Failure; 'kerberos-generate-kdc-keytab-success': Total Kerberos KDC Keytab Generation Success; 'kerberos-generate-kdc-keytab-failure': Total Kerberos KDC Keytab Generation Failure; 'kerberos-delete-kdc-keytab-success': Total Kerberos KDC Keytab Deletion Success; 'kerberos-delete-kdc-keytab-failure': Total Kerberos KDC Keytab Deletion Failure; 'kerberos-kdc-keytab-count': Current Kerberos KDC Keytab Count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#counters1 AamAuthenticationServer#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerWindowsSamplingEnableToTerraform(struct?: AamAuthenticationServerWindowsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerWindowsSamplingEnableToHclTerraform(struct?: AamAuthenticationServerWindowsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerWindowsSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerWindowsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerWindowsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerWindowsSamplingEnableOutputReference {
    return new AamAuthenticationServerWindowsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerWindows {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#uuid AamAuthenticationServer#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#instance_list AamAuthenticationServer#instance_list}
  */
  readonly instanceList?: AamAuthenticationServerWindowsInstanceListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#sampling_enable AamAuthenticationServer#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerWindowsSamplingEnable[] | cdktf.IResolvable;
}

export function aamAuthenticationServerWindowsToTerraform(struct?: AamAuthenticationServerWindowsOutputReference | AamAuthenticationServerWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    instance_list: cdktf.listMapper(aamAuthenticationServerWindowsInstanceListStructToTerraform, true)(struct!.instanceList),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerWindowsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerWindowsToHclTerraform(struct?: AamAuthenticationServerWindowsOutputReference | AamAuthenticationServerWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_list: {
      value: cdktf.listMapperHcl(aamAuthenticationServerWindowsInstanceListStructToHclTerraform, true)(struct!.instanceList),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsInstanceListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerWindowsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._instanceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceList = this._instanceList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._instanceList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._instanceList.internalValue = value.instanceList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new AamAuthenticationServerWindowsInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationServerWindowsInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerWindowsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerWindowsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server thunder_aam_authentication_server}
*/
export class AamAuthenticationServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationServer to import
  * @param importFromId The id of the existing AamAuthenticationServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server thunder_aam_authentication_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
    this._ldap.internalValue = config.ldap;
    this._ocsp.internalValue = config.ocsp;
    this._radius.internalValue = config.radius;
    this._windows.internalValue = config.windows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new AamAuthenticationServerLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: AamAuthenticationServerLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // ocsp - computed: false, optional: true, required: false
  private _ocsp = new AamAuthenticationServerOcspOutputReference(this, "ocsp");
  public get ocsp() {
    return this._ocsp;
  }
  public putOcsp(value: AamAuthenticationServerOcsp) {
    this._ocsp.internalValue = value;
  }
  public resetOcsp() {
    this._ocsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspInput() {
    return this._ocsp.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new AamAuthenticationServerRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: AamAuthenticationServerRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new AamAuthenticationServerWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: AamAuthenticationServerWindows) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ldap: aamAuthenticationServerLdapToTerraform(this._ldap.internalValue),
      ocsp: aamAuthenticationServerOcspToTerraform(this._ocsp.internalValue),
      radius: aamAuthenticationServerRadiusToTerraform(this._radius.internalValue),
      windows: aamAuthenticationServerWindowsToTerraform(this._windows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap: {
        value: aamAuthenticationServerLdapToHclTerraform(this._ldap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerLdapList",
      },
      ocsp: {
        value: aamAuthenticationServerOcspToHclTerraform(this._ocsp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerOcspList",
      },
      radius: {
        value: aamAuthenticationServerRadiusToHclTerraform(this._radius.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerRadiusList",
      },
      windows: {
        value: aamAuthenticationServerWindowsToHclTerraform(this._windows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerWindowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
