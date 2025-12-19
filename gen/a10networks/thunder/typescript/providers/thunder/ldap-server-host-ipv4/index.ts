// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapServerHostIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * Configure the group DN which user belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#base LdapServerHostIpv4#base}
  */
  readonly base?: string;
  /**
  * LDAP common name identifier (i.e.: cn, uid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#cn_value LdapServerHostIpv4#cn_value}
  */
  readonly cnValue?: string;
  /**
  * LDAP distinguished name (dn)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#dn_value LdapServerHostIpv4#dn_value}
  */
  readonly dnValue?: string;
  /**
  * Configure AD domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#domain LdapServerHostIpv4#domain}
  */
  readonly domain?: string;
  /**
  * Configure the group DN which user belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#group LdapServerHostIpv4#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#id LdapServerHostIpv4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV4 address of ldap server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#ipv4_addr LdapServerHostIpv4#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#uuid LdapServerHostIpv4#uuid}
  */
  readonly uuid?: string;
  /**
  * domain_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#domain_cfg LdapServerHostIpv4#domain_cfg}
  */
  readonly domainCfg?: LdapServerHostIpv4DomainCfg;
  /**
  * ipv4_addr_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#ipv4_addr_cfg LdapServerHostIpv4#ipv4_addr_cfg}
  */
  readonly ipv4AddrCfg?: LdapServerHostIpv4Ipv4AddrCfg;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#port_cfg LdapServerHostIpv4#port_cfg}
  */
  readonly portCfg?: LdapServerHostIpv4PortCfg;
}
export interface LdapServerHostIpv4DomainCfg {
  /**
  * Specify the LDAP server's port (default 389 without ssl or 636 with ssl)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#port LdapServerHostIpv4#port}
  */
  readonly port?: number;
  /**
  * Use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#ssl LdapServerHostIpv4#ssl}
  */
  readonly ssl?: number;
  /**
  * Specify the LDAP server's timeout (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#timeout LdapServerHostIpv4#timeout}
  */
  readonly timeout?: number;
}

export function ldapServerHostIpv4DomainCfgToTerraform(struct?: LdapServerHostIpv4DomainCfgOutputReference | LdapServerHostIpv4DomainCfg): any {
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


export function ldapServerHostIpv4DomainCfgToHclTerraform(struct?: LdapServerHostIpv4DomainCfgOutputReference | LdapServerHostIpv4DomainCfg): any {
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

export class LdapServerHostIpv4DomainCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerHostIpv4DomainCfg | undefined {
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

  public set internalValue(value: LdapServerHostIpv4DomainCfg | undefined) {
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
export interface LdapServerHostIpv4Ipv4AddrCfg {
  /**
  * Specify the LDAP server's port (default 3268 without ssl or 3269 with ssl)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#port LdapServerHostIpv4#port}
  */
  readonly port?: number;
  /**
  * Use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#ssl LdapServerHostIpv4#ssl}
  */
  readonly ssl?: number;
  /**
  * Specify the LDAP server's timeout (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#timeout LdapServerHostIpv4#timeout}
  */
  readonly timeout?: number;
}

export function ldapServerHostIpv4Ipv4AddrCfgToTerraform(struct?: LdapServerHostIpv4Ipv4AddrCfgOutputReference | LdapServerHostIpv4Ipv4AddrCfg): any {
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


export function ldapServerHostIpv4Ipv4AddrCfgToHclTerraform(struct?: LdapServerHostIpv4Ipv4AddrCfgOutputReference | LdapServerHostIpv4Ipv4AddrCfg): any {
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

export class LdapServerHostIpv4Ipv4AddrCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerHostIpv4Ipv4AddrCfg | undefined {
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

  public set internalValue(value: LdapServerHostIpv4Ipv4AddrCfg | undefined) {
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
export interface LdapServerHostIpv4PortCfg {
  /**
  * Specify the LDAP server's port (default 389 without ssl or 636 with ssl)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#port LdapServerHostIpv4#port}
  */
  readonly port?: number;
  /**
  * Use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#ssl LdapServerHostIpv4#ssl}
  */
  readonly ssl?: number;
  /**
  * Specify the LDAP server's timeout (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#timeout LdapServerHostIpv4#timeout}
  */
  readonly timeout?: number;
}

export function ldapServerHostIpv4PortCfgToTerraform(struct?: LdapServerHostIpv4PortCfgOutputReference | LdapServerHostIpv4PortCfg): any {
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


export function ldapServerHostIpv4PortCfgToHclTerraform(struct?: LdapServerHostIpv4PortCfgOutputReference | LdapServerHostIpv4PortCfg): any {
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

export class LdapServerHostIpv4PortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LdapServerHostIpv4PortCfg | undefined {
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

  public set internalValue(value: LdapServerHostIpv4PortCfg | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4 thunder_ldap_server_host_ipv4}
*/
export class LdapServerHostIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ldap_server_host_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapServerHostIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapServerHostIpv4 to import
  * @param importFromId The id of the existing LdapServerHostIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapServerHostIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ldap_server_host_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ldap_server_host_ipv4 thunder_ldap_server_host_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapServerHostIpv4Config
  */
  public constructor(scope: Construct, id: string, config: LdapServerHostIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ldap_server_host_ipv4',
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
    this._id = config.id;
    this._ipv4Addr = config.ipv4Addr;
    this._uuid = config.uuid;
    this._domainCfg.internalValue = config.domainCfg;
    this._ipv4AddrCfg.internalValue = config.ipv4AddrCfg;
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

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
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
  private _domainCfg = new LdapServerHostIpv4DomainCfgOutputReference(this, "domain_cfg");
  public get domainCfg() {
    return this._domainCfg;
  }
  public putDomainCfg(value: LdapServerHostIpv4DomainCfg) {
    this._domainCfg.internalValue = value;
  }
  public resetDomainCfg() {
    this._domainCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainCfgInput() {
    return this._domainCfg.internalValue;
  }

  // ipv4_addr_cfg - computed: false, optional: true, required: false
  private _ipv4AddrCfg = new LdapServerHostIpv4Ipv4AddrCfgOutputReference(this, "ipv4_addr_cfg");
  public get ipv4AddrCfg() {
    return this._ipv4AddrCfg;
  }
  public putIpv4AddrCfg(value: LdapServerHostIpv4Ipv4AddrCfg) {
    this._ipv4AddrCfg.internalValue = value;
  }
  public resetIpv4AddrCfg() {
    this._ipv4AddrCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrCfgInput() {
    return this._ipv4AddrCfg.internalValue;
  }

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new LdapServerHostIpv4PortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: LdapServerHostIpv4PortCfg) {
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
      id: cdktf.stringToTerraform(this._id),
      ipv4_addr: cdktf.stringToTerraform(this._ipv4Addr),
      uuid: cdktf.stringToTerraform(this._uuid),
      domain_cfg: ldapServerHostIpv4DomainCfgToTerraform(this._domainCfg.internalValue),
      ipv4_addr_cfg: ldapServerHostIpv4Ipv4AddrCfgToTerraform(this._ipv4AddrCfg.internalValue),
      port_cfg: ldapServerHostIpv4PortCfgToTerraform(this._portCfg.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
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
        value: ldapServerHostIpv4DomainCfgToHclTerraform(this._domainCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapServerHostIpv4DomainCfgList",
      },
      ipv4_addr_cfg: {
        value: ldapServerHostIpv4Ipv4AddrCfgToHclTerraform(this._ipv4AddrCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapServerHostIpv4Ipv4AddrCfgList",
      },
      port_cfg: {
        value: ldapServerHostIpv4PortCfgToHclTerraform(this._portCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapServerHostIpv4PortCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
