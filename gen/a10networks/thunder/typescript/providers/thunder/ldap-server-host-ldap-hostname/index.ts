// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapServerHostLdapHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure the group DN which user belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#base LdapServerHostLdapHostname#base}
  */
  readonly base?: string;
  /**
  * LDAP common name identifier (i.e.: cn, uid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#cn_value LdapServerHostLdapHostname#cn_value}
  */
  readonly cnValue?: string;
  /**
  * LDAP distinguished name (dn)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#dn_value LdapServerHostLdapHostname#dn_value}
  */
  readonly dnValue?: string;
  /**
  * Configure AD domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#domain LdapServerHostLdapHostname#domain}
  */
  readonly domain?: string;
  /**
  * Configure the group DN which user belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#group LdapServerHostLdapHostname#group}
  */
  readonly group?: string;
  /**
  * Hostname of LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#hostname LdapServerHostLdapHostname#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#id LdapServerHostLdapHostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#uuid LdapServerHostLdapHostname#uuid}
  */
  readonly uuid?: string;
  /**
  * domain_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#domain_cfg LdapServerHostLdapHostname#domain_cfg}
  */
  readonly domainCfg?: LdapServerHostLdapHostnameDomainCfg;
  /**
  * hostname_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#hostname_cfg LdapServerHostLdapHostname#hostname_cfg}
  */
  readonly hostnameCfg?: LdapServerHostLdapHostnameHostnameCfg;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#port_cfg LdapServerHostLdapHostname#port_cfg}
  */
  readonly portCfg?: LdapServerHostLdapHostnamePortCfg;
}
export interface LdapServerHostLdapHostnameDomainCfg {
  /**
  * Specify the LDAP server's port (default 389 without ssl or 636 with ssl)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#port LdapServerHostLdapHostname#port}
  */
  readonly port?: number;
  /**
  * Use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#ssl LdapServerHostLdapHostname#ssl}
  */
  readonly ssl?: number;
  /**
  * Specify the LDAP server's timeout (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#timeout LdapServerHostLdapHostname#timeout}
  */
  readonly timeout?: number;
}

export function ldapServerHostLdapHostnameDomainCfgToTerraform(struct?: LdapServerHostLdapHostnameDomainCfgOutputReference | LdapServerHostLdapHostnameDomainCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.numberToTerraform(struct!.ssl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ldapServerHostLdapHostnameDomainCfgToHclTerraform(struct?: LdapServerHostLdapHostnameDomainCfgOutputReference | LdapServerHostLdapHostnameDomainCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: cdktf.numberToHclTerraform(struct!.ssl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapServerHostLdapHostnameDomainCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerHostLdapHostnameDomainCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapServerHostLdapHostnameDomainCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._ssl = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._ssl = value.ssl;
      this._timeout = value.timeout;
    }
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

  // ssl - computed: false, optional: true, required: false
  private _ssl?: number; 
  public get ssl() {
    return this.getNumberAttribute('ssl');
  }
  public set ssl(value: number) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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
}
export interface LdapServerHostLdapHostnameHostnameCfg {
  /**
  * Specify the LDAP server's port (default 3268 without ssl or 3269 with ssl)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#port LdapServerHostLdapHostname#port}
  */
  readonly port?: number;
  /**
  * Use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#ssl LdapServerHostLdapHostname#ssl}
  */
  readonly ssl?: number;
  /**
  * Specify the LDAP server's timeout (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#timeout LdapServerHostLdapHostname#timeout}
  */
  readonly timeout?: number;
}

export function ldapServerHostLdapHostnameHostnameCfgToTerraform(struct?: LdapServerHostLdapHostnameHostnameCfgOutputReference | LdapServerHostLdapHostnameHostnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.numberToTerraform(struct!.ssl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ldapServerHostLdapHostnameHostnameCfgToHclTerraform(struct?: LdapServerHostLdapHostnameHostnameCfgOutputReference | LdapServerHostLdapHostnameHostnameCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: cdktf.numberToHclTerraform(struct!.ssl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapServerHostLdapHostnameHostnameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerHostLdapHostnameHostnameCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapServerHostLdapHostnameHostnameCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._ssl = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._ssl = value.ssl;
      this._timeout = value.timeout;
    }
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

  // ssl - computed: false, optional: true, required: false
  private _ssl?: number; 
  public get ssl() {
    return this.getNumberAttribute('ssl');
  }
  public set ssl(value: number) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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
}
export interface LdapServerHostLdapHostnamePortCfg {
  /**
  * Specify the LDAP server's port (default 389 without ssl or 636 with ssl)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#port LdapServerHostLdapHostname#port}
  */
  readonly port?: number;
  /**
  * Use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#ssl LdapServerHostLdapHostname#ssl}
  */
  readonly ssl?: number;
  /**
  * Specify the LDAP server's timeout (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#timeout LdapServerHostLdapHostname#timeout}
  */
  readonly timeout?: number;
}

export function ldapServerHostLdapHostnamePortCfgToTerraform(struct?: LdapServerHostLdapHostnamePortCfgOutputReference | LdapServerHostLdapHostnamePortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.numberToTerraform(struct!.ssl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ldapServerHostLdapHostnamePortCfgToHclTerraform(struct?: LdapServerHostLdapHostnamePortCfgOutputReference | LdapServerHostLdapHostnamePortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: cdktf.numberToHclTerraform(struct!.ssl),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapServerHostLdapHostnamePortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerHostLdapHostnamePortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapServerHostLdapHostnamePortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._ssl = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._ssl = value.ssl;
      this._timeout = value.timeout;
    }
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

  // ssl - computed: false, optional: true, required: false
  private _ssl?: number; 
  public get ssl() {
    return this.getNumberAttribute('ssl');
  }
  public set ssl(value: number) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname thunder_ldap_server_host_ldap_hostname}
*/
export class LdapServerHostLdapHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ldap_server_host_ldap_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapServerHostLdapHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapServerHostLdapHostname to import
  * @param importFromId The id of the existing LdapServerHostLdapHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapServerHostLdapHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ldap_server_host_ldap_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ldap_hostname thunder_ldap_server_host_ldap_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapServerHostLdapHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: LdapServerHostLdapHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ldap_server_host_ldap_hostname',
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
    this._base = config.base;
    this._cnValue = config.cnValue;
    this._dnValue = config.dnValue;
    this._domain = config.domain;
    this._group = config.group;
    this._hostname = config.hostname;
    this._id = config.id;
    this._uuid = config.uuid;
    this._domainCfg.internalValue = config.domainCfg;
    this._hostnameCfg.internalValue = config.hostnameCfg;
    this._portCfg.internalValue = config.portCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cn_value - computed: false, optional: true, required: false
  private _cnValue?: string; 
  public get cnValue() {
    return this.getStringAttribute('cn_value');
  }
  public set cnValue(value: string) {
    this._cnValue = value;
  }
  public resetCnValue() {
    this._cnValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnValueInput() {
    return this._cnValue;
  }

  // dn_value - computed: false, optional: true, required: false
  private _dnValue?: string; 
  public get dnValue() {
    return this.getStringAttribute('dn_value');
  }
  public set dnValue(value: string) {
    this._dnValue = value;
  }
  public resetDnValue() {
    this._dnValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnValueInput() {
    return this._dnValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // domain_cfg - computed: false, optional: true, required: false
  private _domainCfg = new LdapServerHostLdapHostnameDomainCfgOutputReference(this, "domain_cfg");
  public get domainCfg() {
    return this._domainCfg;
  }
  public putDomainCfg(value: LdapServerHostLdapHostnameDomainCfg) {
    this._domainCfg.internalValue = value;
  }
  public resetDomainCfg() {
    this._domainCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCfgInput() {
    return this._domainCfg.internalValue;
  }

  // hostname_cfg - computed: false, optional: true, required: false
  private _hostnameCfg = new LdapServerHostLdapHostnameHostnameCfgOutputReference(this, "hostname_cfg");
  public get hostnameCfg() {
    return this._hostnameCfg;
  }
  public putHostnameCfg(value: LdapServerHostLdapHostnameHostnameCfg) {
    this._hostnameCfg.internalValue = value;
  }
  public resetHostnameCfg() {
    this._hostnameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameCfgInput() {
    return this._hostnameCfg.internalValue;
  }

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new LdapServerHostLdapHostnamePortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: LdapServerHostLdapHostnamePortCfg) {
    this._portCfg.internalValue = value;
  }
  public resetPortCfg() {
    this._portCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCfgInput() {
    return this._portCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base: cdktf.stringToTerraform(this._base),
      cn_value: cdktf.stringToTerraform(this._cnValue),
      dn_value: cdktf.stringToTerraform(this._dnValue),
      domain: cdktf.stringToTerraform(this._domain),
      group: cdktf.stringToTerraform(this._group),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      domain_cfg: ldapServerHostLdapHostnameDomainCfgToTerraform(this._domainCfg.internalValue),
      hostname_cfg: ldapServerHostLdapHostnameHostnameCfgToTerraform(this._hostnameCfg.internalValue),
      port_cfg: ldapServerHostLdapHostnamePortCfgToTerraform(this._portCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base: {
        value: cdktf.stringToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_value: {
        value: cdktf.stringToHclTerraform(this._cnValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_value: {
        value: cdktf.stringToHclTerraform(this._dnValue),
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
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_cfg: {
        value: ldapServerHostLdapHostnameDomainCfgToHclTerraform(this._domainCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapServerHostLdapHostnameDomainCfgList",
      },
      hostname_cfg: {
        value: ldapServerHostLdapHostnameHostnameCfgToHclTerraform(this._hostnameCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapServerHostLdapHostnameHostnameCfgList",
      },
      port_cfg: {
        value: ldapServerHostLdapHostnamePortCfgToHclTerraform(this._portCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapServerHostLdapHostnamePortCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
