// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationServerLdapInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The LDAP server's admin DN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#admin_dn AamAuthenticationServerLdapInstance#admin_dn}
  */
  readonly adminDn?: string;
  /**
  * Specify the LDAP server's admin secret password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#admin_secret AamAuthenticationServerLdapInstance#admin_secret}
  */
  readonly adminSecret?: number;
  /**
  * 'ad': Active Directory. Default; 'open-ldap': OpenLDAP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#auth_type AamAuthenticationServerLdapInstance#auth_type}
  */
  readonly authType?: string;
  /**
  * Specify the LDAP server's search base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#base AamAuthenticationServerLdapInstance#base}
  */
  readonly base?: string;
  /**
  * Enforce using DN for LDAP binding(All user input name will be used to create DN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#bind_with_dn AamAuthenticationServerLdapInstance#bind_with_dn}
  */
  readonly bindWithDn?: number;
  /**
  * Specify the LDAPS CA cert filename (Trusted LDAPS CA cert filename)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#ca_cert AamAuthenticationServerLdapInstance#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specify default domain for LDAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#default_domain AamAuthenticationServerLdapInstance#default_domain}
  */
  readonly defaultDomain?: string;
  /**
  * Specify Distinguished Name attribute, default is CN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#dn_attribute AamAuthenticationServerLdapInstance#dn_attribute}
  */
  readonly dnAttribute?: string;
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#health_check AamAuthenticationServerLdapInstance#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#health_check_disable AamAuthenticationServerLdapInstance#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#health_check_string AamAuthenticationServerLdapInstance#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#id AamAuthenticationServerLdapInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify LDAPS connection reuse idle timeout value (in seconds) (Specify idle timeout value (in seconds), default is 0 (not reuse LDAPS connection))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#ldaps_conn_reuse_idle_timeout AamAuthenticationServerLdapInstance#ldaps_conn_reuse_idle_timeout}
  */
  readonly ldapsConnReuseIdleTimeout?: number;
  /**
  * Specify LDAP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#name AamAuthenticationServerLdapInstance#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#packet_capture_template AamAuthenticationServerLdapInstance#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify the LDAP server's authentication port, default is 389
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#port AamAuthenticationServerLdapInstance#port}
  */
  readonly port?: number;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#port_hm AamAuthenticationServerLdapInstance#port_hm}
  */
  readonly portHm?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#port_hm_disable AamAuthenticationServerLdapInstance#port_hm_disable}
  */
  readonly portHmDisable?: number;
  /**
  * Prompt user to change password before expiration in N days. This option only takes effect when server type is AD (Prompt user to change password before expiration in N days, default is not to prompt the user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#prompt_pw_change_before_exp AamAuthenticationServerLdapInstance#prompt_pw_change_before_exp}
  */
  readonly promptPwChangeBeforeExp?: number;
  /**
  * 'ldap': Use LDAP (default); 'ldaps': Use LDAP over SSL; 'starttls': Use LDAP StartTLS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#protocol AamAuthenticationServerLdapInstance#protocol}
  */
  readonly protocol?: string;
  /**
  * Specify the LDAP server's default password expiration time (in seconds) (The LDAP server's default password expiration time (in seconds), default is 0 (no expiration))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#pwdmaxage AamAuthenticationServerLdapInstance#pwdmaxage}
  */
  readonly pwdmaxage?: number;
  /**
  * secret password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#secret_string AamAuthenticationServerLdapInstance#secret_string}
  */
  readonly secretString?: string;
  /**
  * Specify timout for LDAP, default is 10 seconds (The timeout, default is 10 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#timeout AamAuthenticationServerLdapInstance#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#uuid AamAuthenticationServerLdapInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * derive_bind_dn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#derive_bind_dn AamAuthenticationServerLdapInstance#derive_bind_dn}
  */
  readonly deriveBindDn?: AamAuthenticationServerLdapInstanceDeriveBindDn;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#host AamAuthenticationServerLdapInstance#host}
  */
  readonly host?: AamAuthenticationServerLdapInstanceHost;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#sampling_enable AamAuthenticationServerLdapInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerLdapInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationServerLdapInstanceDeriveBindDn {
  /**
  * Specify attribute name of username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#username_attr AamAuthenticationServerLdapInstance#username_attr}
  */
  readonly usernameAttr?: string;
}

export function aamAuthenticationServerLdapInstanceDeriveBindDnToTerraform(struct?: AamAuthenticationServerLdapInstanceDeriveBindDnOutputReference | AamAuthenticationServerLdapInstanceDeriveBindDn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username_attr: cdktf.stringToTerraform(struct!.usernameAttr),
  }
}


export function aamAuthenticationServerLdapInstanceDeriveBindDnToHclTerraform(struct?: AamAuthenticationServerLdapInstanceDeriveBindDnOutputReference | AamAuthenticationServerLdapInstanceDeriveBindDn): any {
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

export class AamAuthenticationServerLdapInstanceDeriveBindDnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerLdapInstanceDeriveBindDn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usernameAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameAttr = this._usernameAttr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerLdapInstanceDeriveBindDn | undefined) {
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
export interface AamAuthenticationServerLdapInstanceHost {
  /**
  * Server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#hostip AamAuthenticationServerLdapInstance#hostip}
  */
  readonly hostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#hostipv6 AamAuthenticationServerLdapInstance#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerLdapInstanceHostToTerraform(struct?: AamAuthenticationServerLdapInstanceHostOutputReference | AamAuthenticationServerLdapInstanceHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerLdapInstanceHostToHclTerraform(struct?: AamAuthenticationServerLdapInstanceHostOutputReference | AamAuthenticationServerLdapInstanceHost): any {
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

export class AamAuthenticationServerLdapInstanceHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerLdapInstanceHost | undefined {
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

  public set internalValue(value: AamAuthenticationServerLdapInstanceHost | undefined) {
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
export interface AamAuthenticationServerLdapInstanceSamplingEnable {
  /**
  * 'all': all; 'admin-bind-success': Admin Bind Success; 'admin-bind-failure': Admin Bind Failure; 'bind-success': User Bind Success; 'bind-failure': User Bind Failure; 'search-success': Search Success; 'search-failure': Search Failure; 'authorize-success': Authorization Success; 'authorize-failure': Authorization Failure; 'timeout-error': Timeout; 'other-error': Other Error; 'request': Request; 'ssl-session-created': TLS/SSL Session Created; 'ssl-session-failure': TLS/SSL Session Failure; 'pw_expiry': Password expiry; 'pw_change_success': Password change success; 'pw_change_failure': Password change failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#counters1 AamAuthenticationServerLdapInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerLdapInstanceSamplingEnableToTerraform(struct?: AamAuthenticationServerLdapInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerLdapInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationServerLdapInstanceSamplingEnable | cdktf.IResolvable): any {
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

export class AamAuthenticationServerLdapInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerLdapInstanceSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationServerLdapInstanceSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationServerLdapInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerLdapInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerLdapInstanceSamplingEnableOutputReference {
    return new AamAuthenticationServerLdapInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance thunder_aam_authentication_server_ldap_instance}
*/
export class AamAuthenticationServerLdapInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ldap_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationServerLdapInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationServerLdapInstance to import
  * @param importFromId The id of the existing AamAuthenticationServerLdapInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationServerLdapInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ldap_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_ldap_instance thunder_aam_authentication_server_ldap_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationServerLdapInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationServerLdapInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ldap_instance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminDn = config.adminDn;
    this._adminSecret = config.adminSecret;
    this._authType = config.authType;
    this._base = config.base;
    this._bindWithDn = config.bindWithDn;
    this._caCert = config.caCert;
    this._defaultDomain = config.defaultDomain;
    this._dnAttribute = config.dnAttribute;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._healthCheckString = config.healthCheckString;
    this._id = config.id;
    this._ldapsConnReuseIdleTimeout = config.ldapsConnReuseIdleTimeout;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._port = config.port;
    this._portHm = config.portHm;
    this._portHmDisable = config.portHmDisable;
    this._promptPwChangeBeforeExp = config.promptPwChangeBeforeExp;
    this._protocol = config.protocol;
    this._pwdmaxage = config.pwdmaxage;
    this._secretString = config.secretString;
    this._timeout = config.timeout;
    this._uuid = config.uuid;
    this._deriveBindDn.internalValue = config.deriveBindDn;
    this._host.internalValue = config.host;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _deriveBindDn = new AamAuthenticationServerLdapInstanceDeriveBindDnOutputReference(this, "derive_bind_dn");
  public get deriveBindDn() {
    return this._deriveBindDn;
  }
  public putDeriveBindDn(value: AamAuthenticationServerLdapInstanceDeriveBindDn) {
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
  private _host = new AamAuthenticationServerLdapInstanceHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerLdapInstanceHost) {
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
  private _samplingEnable = new AamAuthenticationServerLdapInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerLdapInstanceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_dn: cdktf.stringToTerraform(this._adminDn),
      admin_secret: cdktf.numberToTerraform(this._adminSecret),
      auth_type: cdktf.stringToTerraform(this._authType),
      base: cdktf.stringToTerraform(this._base),
      bind_with_dn: cdktf.numberToTerraform(this._bindWithDn),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      dn_attribute: cdktf.stringToTerraform(this._dnAttribute),
      health_check: cdktf.numberToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      health_check_string: cdktf.stringToTerraform(this._healthCheckString),
      id: cdktf.stringToTerraform(this._id),
      ldaps_conn_reuse_idle_timeout: cdktf.numberToTerraform(this._ldapsConnReuseIdleTimeout),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      port: cdktf.numberToTerraform(this._port),
      port_hm: cdktf.stringToTerraform(this._portHm),
      port_hm_disable: cdktf.numberToTerraform(this._portHmDisable),
      prompt_pw_change_before_exp: cdktf.numberToTerraform(this._promptPwChangeBeforeExp),
      protocol: cdktf.stringToTerraform(this._protocol),
      pwdmaxage: cdktf.numberToTerraform(this._pwdmaxage),
      secret_string: cdktf.stringToTerraform(this._secretString),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      derive_bind_dn: aamAuthenticationServerLdapInstanceDeriveBindDnToTerraform(this._deriveBindDn.internalValue),
      host: aamAuthenticationServerLdapInstanceHostToTerraform(this._host.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationServerLdapInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_dn: {
        value: cdktf.stringToHclTerraform(this._adminDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_secret: {
        value: cdktf.numberToHclTerraform(this._adminSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base: {
        value: cdktf.stringToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_with_dn: {
        value: cdktf.numberToHclTerraform(this._bindWithDn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_domain: {
        value: cdktf.stringToHclTerraform(this._defaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_attribute: {
        value: cdktf.stringToHclTerraform(this._dnAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.numberToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_disable: {
        value: cdktf.numberToHclTerraform(this._healthCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_string: {
        value: cdktf.stringToHclTerraform(this._healthCheckString),
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
      ldaps_conn_reuse_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._ldapsConnReuseIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
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
      port_hm: {
        value: cdktf.stringToHclTerraform(this._portHm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_hm_disable: {
        value: cdktf.numberToHclTerraform(this._portHmDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prompt_pw_change_before_exp: {
        value: cdktf.numberToHclTerraform(this._promptPwChangeBeforeExp),
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
      pwdmaxage: {
        value: cdktf.numberToHclTerraform(this._pwdmaxage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      derive_bind_dn: {
        value: aamAuthenticationServerLdapInstanceDeriveBindDnToHclTerraform(this._deriveBindDn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerLdapInstanceDeriveBindDnList",
      },
      host: {
        value: aamAuthenticationServerLdapInstanceHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerLdapInstanceHostList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationServerLdapInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerLdapInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
