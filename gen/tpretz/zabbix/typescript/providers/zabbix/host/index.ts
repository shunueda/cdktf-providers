// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable host for monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Hostgroup IDs to associate this host with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#groups Host#groups}
  */
  readonly groups: string[];
  /**
  * FQDN of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#host Host#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#id Host#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inventory Mode, one of: disabled, manual, automatic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#inventory_mode Host#inventory_mode}
  */
  readonly inventoryMode?: string;
  /**
  * Zabbix host displayname, defaults to the value of "host"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#name Host#name}
  */
  readonly name?: string;
  /**
  * ID of proxy to monitor this host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#proxyid Host#proxyid}
  */
  readonly proxyid?: string;
  /**
  * Template IDs to attach to this host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#templates Host#templates}
  */
  readonly templates?: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#interface Host#interface}
  */
  readonly interface: HostInterface[] | cdktf.IResolvable;
  /**
  * inventory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#inventory Host#inventory}
  */
  readonly inventory?: HostInventory[] | cdktf.IResolvable;
  /**
  * macro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#macro Host#macro}
  */
  readonly macro?: HostMacro[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#tag Host#tag}
  */
  readonly tag?: HostTag[] | cdktf.IResolvable;
}
export interface HostInterface {
  /**
  * Interface DNS name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#dns Host#dns}
  */
  readonly dns?: string;
  /**
  * Interface IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#ip Host#ip}
  */
  readonly ip?: string;
  /**
  * Primary interface of this type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#main Host#main}
  */
  readonly main?: boolean | cdktf.IResolvable;
  /**
  * Destination Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#port Host#port}
  */
  readonly port?: number;
  /**
  * Authentication Passphrase (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_authpassphrase Host#snmp3_authpassphrase}
  */
  readonly snmp3Authpassphrase?: string;
  /**
  * Authentication Protocol (v3 only), one of: md5, sha
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_authprotocol Host#snmp3_authprotocol}
  */
  readonly snmp3Authprotocol?: string;
  /**
  * Context Name (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_contextname Host#snmp3_contextname}
  */
  readonly snmp3Contextname?: string;
  /**
  * Priv Passphrase (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_privpassphrase Host#snmp3_privpassphrase}
  */
  readonly snmp3Privpassphrase?: string;
  /**
  * Priv Protocol (v3 only), one of: aes, des
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_privprotocol Host#snmp3_privprotocol}
  */
  readonly snmp3Privprotocol?: string;
  /**
  * Security Level (v3 only), one of: noauthnopriv, authnopriv, authpriv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_securitylevel Host#snmp3_securitylevel}
  */
  readonly snmp3Securitylevel?: string;
  /**
  * Security Name (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp3_securityname Host#snmp3_securityname}
  */
  readonly snmp3Securityname?: string;
  /**
  * SNMP Bulk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp_bulk Host#snmp_bulk}
  */
  readonly snmpBulk?: boolean | cdktf.IResolvable;
  /**
  * HSNMP Community (v1/v2 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp_community Host#snmp_community}
  */
  readonly snmpCommunity?: string;
  /**
  * SNMP Version, one of: 1, 2, 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#snmp_version Host#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#type Host#type}
  */
  readonly type?: string;
}

export function hostInterfaceToTerraform(struct?: HostInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    ip: cdktf.stringToTerraform(struct!.ip),
    main: cdktf.booleanToTerraform(struct!.main),
    port: cdktf.numberToTerraform(struct!.port),
    snmp3_authpassphrase: cdktf.stringToTerraform(struct!.snmp3Authpassphrase),
    snmp3_authprotocol: cdktf.stringToTerraform(struct!.snmp3Authprotocol),
    snmp3_contextname: cdktf.stringToTerraform(struct!.snmp3Contextname),
    snmp3_privpassphrase: cdktf.stringToTerraform(struct!.snmp3Privpassphrase),
    snmp3_privprotocol: cdktf.stringToTerraform(struct!.snmp3Privprotocol),
    snmp3_securitylevel: cdktf.stringToTerraform(struct!.snmp3Securitylevel),
    snmp3_securityname: cdktf.stringToTerraform(struct!.snmp3Securityname),
    snmp_bulk: cdktf.booleanToTerraform(struct!.snmpBulk),
    snmp_community: cdktf.stringToTerraform(struct!.snmpCommunity),
    snmp_version: cdktf.stringToTerraform(struct!.snmpVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hostInterfaceToHclTerraform(struct?: HostInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main: {
      value: cdktf.booleanToHclTerraform(struct!.main),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp3_authpassphrase: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Authpassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_authprotocol: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Authprotocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_contextname: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Contextname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_privpassphrase: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Privpassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_privprotocol: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Privprotocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_securitylevel: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Securitylevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp3_securityname: {
      value: cdktf.stringToHclTerraform(struct!.snmp3Securityname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_bulk: {
      value: cdktf.booleanToHclTerraform(struct!.snmpBulk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snmp_community: {
      value: cdktf.stringToHclTerraform(struct!.snmpCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_version: {
      value: cdktf.stringToHclTerraform(struct!.snmpVersion),
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

export class HostInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._main !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._snmp3Authpassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Authpassphrase = this._snmp3Authpassphrase;
    }
    if (this._snmp3Authprotocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Authprotocol = this._snmp3Authprotocol;
    }
    if (this._snmp3Contextname !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Contextname = this._snmp3Contextname;
    }
    if (this._snmp3Privpassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Privpassphrase = this._snmp3Privpassphrase;
    }
    if (this._snmp3Privprotocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Privprotocol = this._snmp3Privprotocol;
    }
    if (this._snmp3Securitylevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Securitylevel = this._snmp3Securitylevel;
    }
    if (this._snmp3Securityname !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp3Securityname = this._snmp3Securityname;
    }
    if (this._snmpBulk !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpBulk = this._snmpBulk;
    }
    if (this._snmpCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpCommunity = this._snmpCommunity;
    }
    if (this._snmpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpVersion = this._snmpVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._ip = undefined;
      this._main = undefined;
      this._port = undefined;
      this._snmp3Authpassphrase = undefined;
      this._snmp3Authprotocol = undefined;
      this._snmp3Contextname = undefined;
      this._snmp3Privpassphrase = undefined;
      this._snmp3Privprotocol = undefined;
      this._snmp3Securitylevel = undefined;
      this._snmp3Securityname = undefined;
      this._snmpBulk = undefined;
      this._snmpCommunity = undefined;
      this._snmpVersion = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._ip = value.ip;
      this._main = value.main;
      this._port = value.port;
      this._snmp3Authpassphrase = value.snmp3Authpassphrase;
      this._snmp3Authprotocol = value.snmp3Authprotocol;
      this._snmp3Contextname = value.snmp3Contextname;
      this._snmp3Privpassphrase = value.snmp3Privpassphrase;
      this._snmp3Privprotocol = value.snmp3Privprotocol;
      this._snmp3Securitylevel = value.snmp3Securitylevel;
      this._snmp3Securityname = value.snmp3Securityname;
      this._snmpBulk = value.snmpBulk;
      this._snmpCommunity = value.snmpCommunity;
      this._snmpVersion = value.snmpVersion;
      this._type = value.type;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // main - computed: false, optional: true, required: false
  private _main?: boolean | cdktf.IResolvable; 
  public get main() {
    return this.getBooleanAttribute('main');
  }
  public set main(value: boolean | cdktf.IResolvable) {
    this._main = value;
  }
  public resetMain() {
    this._main = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main;
  }

  // port - computed: true, optional: true, required: false
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

  // snmp3_authpassphrase - computed: false, optional: true, required: false
  private _snmp3Authpassphrase?: string; 
  public get snmp3Authpassphrase() {
    return this.getStringAttribute('snmp3_authpassphrase');
  }
  public set snmp3Authpassphrase(value: string) {
    this._snmp3Authpassphrase = value;
  }
  public resetSnmp3Authpassphrase() {
    this._snmp3Authpassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3AuthpassphraseInput() {
    return this._snmp3Authpassphrase;
  }

  // snmp3_authprotocol - computed: false, optional: true, required: false
  private _snmp3Authprotocol?: string; 
  public get snmp3Authprotocol() {
    return this.getStringAttribute('snmp3_authprotocol');
  }
  public set snmp3Authprotocol(value: string) {
    this._snmp3Authprotocol = value;
  }
  public resetSnmp3Authprotocol() {
    this._snmp3Authprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3AuthprotocolInput() {
    return this._snmp3Authprotocol;
  }

  // snmp3_contextname - computed: false, optional: true, required: false
  private _snmp3Contextname?: string; 
  public get snmp3Contextname() {
    return this.getStringAttribute('snmp3_contextname');
  }
  public set snmp3Contextname(value: string) {
    this._snmp3Contextname = value;
  }
  public resetSnmp3Contextname() {
    this._snmp3Contextname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3ContextnameInput() {
    return this._snmp3Contextname;
  }

  // snmp3_privpassphrase - computed: false, optional: true, required: false
  private _snmp3Privpassphrase?: string; 
  public get snmp3Privpassphrase() {
    return this.getStringAttribute('snmp3_privpassphrase');
  }
  public set snmp3Privpassphrase(value: string) {
    this._snmp3Privpassphrase = value;
  }
  public resetSnmp3Privpassphrase() {
    this._snmp3Privpassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3PrivpassphraseInput() {
    return this._snmp3Privpassphrase;
  }

  // snmp3_privprotocol - computed: false, optional: true, required: false
  private _snmp3Privprotocol?: string; 
  public get snmp3Privprotocol() {
    return this.getStringAttribute('snmp3_privprotocol');
  }
  public set snmp3Privprotocol(value: string) {
    this._snmp3Privprotocol = value;
  }
  public resetSnmp3Privprotocol() {
    this._snmp3Privprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3PrivprotocolInput() {
    return this._snmp3Privprotocol;
  }

  // snmp3_securitylevel - computed: false, optional: true, required: false
  private _snmp3Securitylevel?: string; 
  public get snmp3Securitylevel() {
    return this.getStringAttribute('snmp3_securitylevel');
  }
  public set snmp3Securitylevel(value: string) {
    this._snmp3Securitylevel = value;
  }
  public resetSnmp3Securitylevel() {
    this._snmp3Securitylevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3SecuritylevelInput() {
    return this._snmp3Securitylevel;
  }

  // snmp3_securityname - computed: false, optional: true, required: false
  private _snmp3Securityname?: string; 
  public get snmp3Securityname() {
    return this.getStringAttribute('snmp3_securityname');
  }
  public set snmp3Securityname(value: string) {
    this._snmp3Securityname = value;
  }
  public resetSnmp3Securityname() {
    this._snmp3Securityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3SecuritynameInput() {
    return this._snmp3Securityname;
  }

  // snmp_bulk - computed: false, optional: true, required: false
  private _snmpBulk?: boolean | cdktf.IResolvable; 
  public get snmpBulk() {
    return this.getBooleanAttribute('snmp_bulk');
  }
  public set snmpBulk(value: boolean | cdktf.IResolvable) {
    this._snmpBulk = value;
  }
  public resetSnmpBulk() {
    this._snmpBulk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpBulkInput() {
    return this._snmpBulk;
  }

  // snmp_community - computed: false, optional: true, required: false
  private _snmpCommunity?: string; 
  public get snmpCommunity() {
    return this.getStringAttribute('snmp_community');
  }
  public set snmpCommunity(value: string) {
    this._snmpCommunity = value;
  }
  public resetSnmpCommunity() {
    this._snmpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunityInput() {
    return this._snmpCommunity;
  }

  // snmp_version - computed: false, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class HostInterfaceList extends cdktf.ComplexList {
  public internalValue? : HostInterface[] | cdktf.IResolvable

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
  public get(index: number): HostInterfaceOutputReference {
    return new HostInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostInventory {
  /**
  * Inventory alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#alias Host#alias}
  */
  readonly alias?: string;
  /**
  * Inventory asset_tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#asset_tag Host#asset_tag}
  */
  readonly assetTag?: string;
  /**
  * Inventory chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#chassis Host#chassis}
  */
  readonly chassis?: string;
  /**
  * Inventory contact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#contact Host#contact}
  */
  readonly contact?: string;
  /**
  * Inventory contract_number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#contract_number Host#contract_number}
  */
  readonly contractNumber?: string;
  /**
  * Inventory date_hw_decomm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#date_hw_decomm Host#date_hw_decomm}
  */
  readonly dateHwDecomm?: string;
  /**
  * Inventory date_hw_expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#date_hw_expiry Host#date_hw_expiry}
  */
  readonly dateHwExpiry?: string;
  /**
  * Inventory date_hw_install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#date_hw_install Host#date_hw_install}
  */
  readonly dateHwInstall?: string;
  /**
  * Inventory date_hw_purchase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#date_hw_purchase Host#date_hw_purchase}
  */
  readonly dateHwPurchase?: string;
  /**
  * Inventory deployment_status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#deployment_status Host#deployment_status}
  */
  readonly deploymentStatus?: string;
  /**
  * Inventory hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#hardware Host#hardware}
  */
  readonly hardware?: string;
  /**
  * Inventory hardware_full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#hardware_full Host#hardware_full}
  */
  readonly hardwareFull?: string;
  /**
  * Inventory host_netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#host_netmask Host#host_netmask}
  */
  readonly hostNetmask?: string;
  /**
  * Inventory host_networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#host_networks Host#host_networks}
  */
  readonly hostNetworks?: string;
  /**
  * Inventory host_router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#host_router Host#host_router}
  */
  readonly hostRouter?: string;
  /**
  * Inventory hw_arch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#hw_arch Host#hw_arch}
  */
  readonly hwArch?: string;
  /**
  * Inventory installer_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#installer_name Host#installer_name}
  */
  readonly installerName?: string;
  /**
  * Inventory location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#location Host#location}
  */
  readonly location?: string;
  /**
  * Inventory location_lat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#location_lat Host#location_lat}
  */
  readonly locationLat?: string;
  /**
  * Inventory location_lon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#location_lon Host#location_lon}
  */
  readonly locationLon?: string;
  /**
  * Inventory macaddress_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#macaddress_a Host#macaddress_a}
  */
  readonly macaddressA?: string;
  /**
  * Inventory macaddress_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#macaddress_b Host#macaddress_b}
  */
  readonly macaddressB?: string;
  /**
  * Inventory model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#model Host#model}
  */
  readonly model?: string;
  /**
  * Inventory name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#name Host#name}
  */
  readonly name?: string;
  /**
  * Inventory notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#notes Host#notes}
  */
  readonly notes?: string;
  /**
  * Inventory oob_ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#oob_ip Host#oob_ip}
  */
  readonly oobIp?: string;
  /**
  * Inventory oob_netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#oob_netmask Host#oob_netmask}
  */
  readonly oobNetmask?: string;
  /**
  * Inventory oob_router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#oob_router Host#oob_router}
  */
  readonly oobRouter?: string;
  /**
  * Inventory os
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#os Host#os}
  */
  readonly os?: string;
  /**
  * Inventory os_full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#os_full Host#os_full}
  */
  readonly osFull?: string;
  /**
  * Inventory os_short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#os_short Host#os_short}
  */
  readonly osShort?: string;
  /**
  * Inventory poc_1_cell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_cell Host#poc_1_cell}
  */
  readonly poc1Cell?: string;
  /**
  * Inventory poc_1_email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_email Host#poc_1_email}
  */
  readonly poc1Email?: string;
  /**
  * Inventory poc_1_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_name Host#poc_1_name}
  */
  readonly poc1Name?: string;
  /**
  * Inventory poc_1_notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_notes Host#poc_1_notes}
  */
  readonly poc1Notes?: string;
  /**
  * Inventory poc_1_phone_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_phone_a Host#poc_1_phone_a}
  */
  readonly poc1PhoneA?: string;
  /**
  * Inventory poc_1_phone_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_phone_b Host#poc_1_phone_b}
  */
  readonly poc1PhoneB?: string;
  /**
  * Inventory poc_1_screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_1_screen Host#poc_1_screen}
  */
  readonly poc1Screen?: string;
  /**
  * Inventory poc_2_cell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_cell Host#poc_2_cell}
  */
  readonly poc2Cell?: string;
  /**
  * Inventory poc_2_email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_email Host#poc_2_email}
  */
  readonly poc2Email?: string;
  /**
  * Inventory poc_2_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_name Host#poc_2_name}
  */
  readonly poc2Name?: string;
  /**
  * Inventory poc_2_notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_notes Host#poc_2_notes}
  */
  readonly poc2Notes?: string;
  /**
  * Inventory poc_2_phone_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_phone_a Host#poc_2_phone_a}
  */
  readonly poc2PhoneA?: string;
  /**
  * Inventory poc_2_phone_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_phone_b Host#poc_2_phone_b}
  */
  readonly poc2PhoneB?: string;
  /**
  * Inventory poc_2_screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#poc_2_screen Host#poc_2_screen}
  */
  readonly poc2Screen?: string;
  /**
  * Inventory serialno_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#serialno_a Host#serialno_a}
  */
  readonly serialnoA?: string;
  /**
  * Inventory serialno_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#serialno_b Host#serialno_b}
  */
  readonly serialnoB?: string;
  /**
  * Inventory site_address_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_address_a Host#site_address_a}
  */
  readonly siteAddressA?: string;
  /**
  * Inventory site_address_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_address_b Host#site_address_b}
  */
  readonly siteAddressB?: string;
  /**
  * Inventory site_address_c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_address_c Host#site_address_c}
  */
  readonly siteAddressC?: string;
  /**
  * Inventory site_city
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_city Host#site_city}
  */
  readonly siteCity?: string;
  /**
  * Inventory site_country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_country Host#site_country}
  */
  readonly siteCountry?: string;
  /**
  * Inventory site_notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_notes Host#site_notes}
  */
  readonly siteNotes?: string;
  /**
  * Inventory site_rack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_rack Host#site_rack}
  */
  readonly siteRack?: string;
  /**
  * Inventory site_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_state Host#site_state}
  */
  readonly siteState?: string;
  /**
  * Inventory site_zip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#site_zip Host#site_zip}
  */
  readonly siteZip?: string;
  /**
  * Inventory software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software Host#software}
  */
  readonly softwareAttribute?: string;
  /**
  * Inventory software_app_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software_app_a Host#software_app_a}
  */
  readonly softwareAppA?: string;
  /**
  * Inventory software_app_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software_app_b Host#software_app_b}
  */
  readonly softwareAppB?: string;
  /**
  * Inventory software_app_c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software_app_c Host#software_app_c}
  */
  readonly softwareAppC?: string;
  /**
  * Inventory software_app_d
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software_app_d Host#software_app_d}
  */
  readonly softwareAppD?: string;
  /**
  * Inventory software_app_e
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software_app_e Host#software_app_e}
  */
  readonly softwareAppE?: string;
  /**
  * Inventory software_full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#software_full Host#software_full}
  */
  readonly softwareFull?: string;
  /**
  * Inventory tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#tag Host#tag}
  */
  readonly tag?: string;
  /**
  * Inventory type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#type Host#type}
  */
  readonly type?: string;
  /**
  * Inventory type_full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#type_full Host#type_full}
  */
  readonly typeFull?: string;
  /**
  * Inventory url_a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#url_a Host#url_a}
  */
  readonly urlA?: string;
  /**
  * Inventory url_b
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#url_b Host#url_b}
  */
  readonly urlB?: string;
  /**
  * Inventory url_c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#url_c Host#url_c}
  */
  readonly urlC?: string;
  /**
  * Inventory vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#vendor Host#vendor}
  */
  readonly vendor?: string;
}

export function hostInventoryToTerraform(struct?: HostInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    asset_tag: cdktf.stringToTerraform(struct!.assetTag),
    chassis: cdktf.stringToTerraform(struct!.chassis),
    contact: cdktf.stringToTerraform(struct!.contact),
    contract_number: cdktf.stringToTerraform(struct!.contractNumber),
    date_hw_decomm: cdktf.stringToTerraform(struct!.dateHwDecomm),
    date_hw_expiry: cdktf.stringToTerraform(struct!.dateHwExpiry),
    date_hw_install: cdktf.stringToTerraform(struct!.dateHwInstall),
    date_hw_purchase: cdktf.stringToTerraform(struct!.dateHwPurchase),
    deployment_status: cdktf.stringToTerraform(struct!.deploymentStatus),
    hardware: cdktf.stringToTerraform(struct!.hardware),
    hardware_full: cdktf.stringToTerraform(struct!.hardwareFull),
    host_netmask: cdktf.stringToTerraform(struct!.hostNetmask),
    host_networks: cdktf.stringToTerraform(struct!.hostNetworks),
    host_router: cdktf.stringToTerraform(struct!.hostRouter),
    hw_arch: cdktf.stringToTerraform(struct!.hwArch),
    installer_name: cdktf.stringToTerraform(struct!.installerName),
    location: cdktf.stringToTerraform(struct!.location),
    location_lat: cdktf.stringToTerraform(struct!.locationLat),
    location_lon: cdktf.stringToTerraform(struct!.locationLon),
    macaddress_a: cdktf.stringToTerraform(struct!.macaddressA),
    macaddress_b: cdktf.stringToTerraform(struct!.macaddressB),
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    oob_ip: cdktf.stringToTerraform(struct!.oobIp),
    oob_netmask: cdktf.stringToTerraform(struct!.oobNetmask),
    oob_router: cdktf.stringToTerraform(struct!.oobRouter),
    os: cdktf.stringToTerraform(struct!.os),
    os_full: cdktf.stringToTerraform(struct!.osFull),
    os_short: cdktf.stringToTerraform(struct!.osShort),
    poc_1_cell: cdktf.stringToTerraform(struct!.poc1Cell),
    poc_1_email: cdktf.stringToTerraform(struct!.poc1Email),
    poc_1_name: cdktf.stringToTerraform(struct!.poc1Name),
    poc_1_notes: cdktf.stringToTerraform(struct!.poc1Notes),
    poc_1_phone_a: cdktf.stringToTerraform(struct!.poc1PhoneA),
    poc_1_phone_b: cdktf.stringToTerraform(struct!.poc1PhoneB),
    poc_1_screen: cdktf.stringToTerraform(struct!.poc1Screen),
    poc_2_cell: cdktf.stringToTerraform(struct!.poc2Cell),
    poc_2_email: cdktf.stringToTerraform(struct!.poc2Email),
    poc_2_name: cdktf.stringToTerraform(struct!.poc2Name),
    poc_2_notes: cdktf.stringToTerraform(struct!.poc2Notes),
    poc_2_phone_a: cdktf.stringToTerraform(struct!.poc2PhoneA),
    poc_2_phone_b: cdktf.stringToTerraform(struct!.poc2PhoneB),
    poc_2_screen: cdktf.stringToTerraform(struct!.poc2Screen),
    serialno_a: cdktf.stringToTerraform(struct!.serialnoA),
    serialno_b: cdktf.stringToTerraform(struct!.serialnoB),
    site_address_a: cdktf.stringToTerraform(struct!.siteAddressA),
    site_address_b: cdktf.stringToTerraform(struct!.siteAddressB),
    site_address_c: cdktf.stringToTerraform(struct!.siteAddressC),
    site_city: cdktf.stringToTerraform(struct!.siteCity),
    site_country: cdktf.stringToTerraform(struct!.siteCountry),
    site_notes: cdktf.stringToTerraform(struct!.siteNotes),
    site_rack: cdktf.stringToTerraform(struct!.siteRack),
    site_state: cdktf.stringToTerraform(struct!.siteState),
    site_zip: cdktf.stringToTerraform(struct!.siteZip),
    software: cdktf.stringToTerraform(struct!.softwareAttribute),
    software_app_a: cdktf.stringToTerraform(struct!.softwareAppA),
    software_app_b: cdktf.stringToTerraform(struct!.softwareAppB),
    software_app_c: cdktf.stringToTerraform(struct!.softwareAppC),
    software_app_d: cdktf.stringToTerraform(struct!.softwareAppD),
    software_app_e: cdktf.stringToTerraform(struct!.softwareAppE),
    software_full: cdktf.stringToTerraform(struct!.softwareFull),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
    type_full: cdktf.stringToTerraform(struct!.typeFull),
    url_a: cdktf.stringToTerraform(struct!.urlA),
    url_b: cdktf.stringToTerraform(struct!.urlB),
    url_c: cdktf.stringToTerraform(struct!.urlC),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function hostInventoryToHclTerraform(struct?: HostInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asset_tag: {
      value: cdktf.stringToHclTerraform(struct!.assetTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chassis: {
      value: cdktf.stringToHclTerraform(struct!.chassis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact: {
      value: cdktf.stringToHclTerraform(struct!.contact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contract_number: {
      value: cdktf.stringToHclTerraform(struct!.contractNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_hw_decomm: {
      value: cdktf.stringToHclTerraform(struct!.dateHwDecomm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_hw_expiry: {
      value: cdktf.stringToHclTerraform(struct!.dateHwExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_hw_install: {
      value: cdktf.stringToHclTerraform(struct!.dateHwInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_hw_purchase: {
      value: cdktf.stringToHclTerraform(struct!.dateHwPurchase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_status: {
      value: cdktf.stringToHclTerraform(struct!.deploymentStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware: {
      value: cdktf.stringToHclTerraform(struct!.hardware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_full: {
      value: cdktf.stringToHclTerraform(struct!.hardwareFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_netmask: {
      value: cdktf.stringToHclTerraform(struct!.hostNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_networks: {
      value: cdktf.stringToHclTerraform(struct!.hostNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_router: {
      value: cdktf.stringToHclTerraform(struct!.hostRouter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_arch: {
      value: cdktf.stringToHclTerraform(struct!.hwArch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installer_name: {
      value: cdktf.stringToHclTerraform(struct!.installerName),
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
    location_lat: {
      value: cdktf.stringToHclTerraform(struct!.locationLat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_lon: {
      value: cdktf.stringToHclTerraform(struct!.locationLon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddress_a: {
      value: cdktf.stringToHclTerraform(struct!.macaddressA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddress_b: {
      value: cdktf.stringToHclTerraform(struct!.macaddressB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
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
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oob_ip: {
      value: cdktf.stringToHclTerraform(struct!.oobIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oob_netmask: {
      value: cdktf.stringToHclTerraform(struct!.oobNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oob_router: {
      value: cdktf.stringToHclTerraform(struct!.oobRouter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_full: {
      value: cdktf.stringToHclTerraform(struct!.osFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_short: {
      value: cdktf.stringToHclTerraform(struct!.osShort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_cell: {
      value: cdktf.stringToHclTerraform(struct!.poc1Cell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_email: {
      value: cdktf.stringToHclTerraform(struct!.poc1Email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_name: {
      value: cdktf.stringToHclTerraform(struct!.poc1Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_notes: {
      value: cdktf.stringToHclTerraform(struct!.poc1Notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_phone_a: {
      value: cdktf.stringToHclTerraform(struct!.poc1PhoneA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_phone_b: {
      value: cdktf.stringToHclTerraform(struct!.poc1PhoneB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_1_screen: {
      value: cdktf.stringToHclTerraform(struct!.poc1Screen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_cell: {
      value: cdktf.stringToHclTerraform(struct!.poc2Cell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_email: {
      value: cdktf.stringToHclTerraform(struct!.poc2Email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_name: {
      value: cdktf.stringToHclTerraform(struct!.poc2Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_notes: {
      value: cdktf.stringToHclTerraform(struct!.poc2Notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_phone_a: {
      value: cdktf.stringToHclTerraform(struct!.poc2PhoneA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_phone_b: {
      value: cdktf.stringToHclTerraform(struct!.poc2PhoneB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poc_2_screen: {
      value: cdktf.stringToHclTerraform(struct!.poc2Screen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialno_a: {
      value: cdktf.stringToHclTerraform(struct!.serialnoA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialno_b: {
      value: cdktf.stringToHclTerraform(struct!.serialnoB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_address_a: {
      value: cdktf.stringToHclTerraform(struct!.siteAddressA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_address_b: {
      value: cdktf.stringToHclTerraform(struct!.siteAddressB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_address_c: {
      value: cdktf.stringToHclTerraform(struct!.siteAddressC),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_city: {
      value: cdktf.stringToHclTerraform(struct!.siteCity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_country: {
      value: cdktf.stringToHclTerraform(struct!.siteCountry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_notes: {
      value: cdktf.stringToHclTerraform(struct!.siteNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_rack: {
      value: cdktf.stringToHclTerraform(struct!.siteRack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_state: {
      value: cdktf.stringToHclTerraform(struct!.siteState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_zip: {
      value: cdktf.stringToHclTerraform(struct!.siteZip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software: {
      value: cdktf.stringToHclTerraform(struct!.softwareAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_app_a: {
      value: cdktf.stringToHclTerraform(struct!.softwareAppA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_app_b: {
      value: cdktf.stringToHclTerraform(struct!.softwareAppB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_app_c: {
      value: cdktf.stringToHclTerraform(struct!.softwareAppC),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_app_d: {
      value: cdktf.stringToHclTerraform(struct!.softwareAppD),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_app_e: {
      value: cdktf.stringToHclTerraform(struct!.softwareAppE),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_full: {
      value: cdktf.stringToHclTerraform(struct!.softwareFull),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_full: {
      value: cdktf.stringToHclTerraform(struct!.typeFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_a: {
      value: cdktf.stringToHclTerraform(struct!.urlA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_b: {
      value: cdktf.stringToHclTerraform(struct!.urlB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_c: {
      value: cdktf.stringToHclTerraform(struct!.urlC),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostInventoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._assetTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetTag = this._assetTag;
    }
    if (this._chassis !== undefined) {
      hasAnyValues = true;
      internalValueResult.chassis = this._chassis;
    }
    if (this._contact !== undefined) {
      hasAnyValues = true;
      internalValueResult.contact = this._contact;
    }
    if (this._contractNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractNumber = this._contractNumber;
    }
    if (this._dateHwDecomm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHwDecomm = this._dateHwDecomm;
    }
    if (this._dateHwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHwExpiry = this._dateHwExpiry;
    }
    if (this._dateHwInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHwInstall = this._dateHwInstall;
    }
    if (this._dateHwPurchase !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHwPurchase = this._dateHwPurchase;
    }
    if (this._deploymentStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentStatus = this._deploymentStatus;
    }
    if (this._hardware !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware;
    }
    if (this._hardwareFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareFull = this._hardwareFull;
    }
    if (this._hostNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetmask = this._hostNetmask;
    }
    if (this._hostNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetworks = this._hostNetworks;
    }
    if (this._hostRouter !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRouter = this._hostRouter;
    }
    if (this._hwArch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwArch = this._hwArch;
    }
    if (this._installerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerName = this._installerName;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._locationLat !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationLat = this._locationLat;
    }
    if (this._locationLon !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationLon = this._locationLon;
    }
    if (this._macaddressA !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddressA = this._macaddressA;
    }
    if (this._macaddressB !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddressB = this._macaddressB;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._oobIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobIp = this._oobIp;
    }
    if (this._oobNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobNetmask = this._oobNetmask;
    }
    if (this._oobRouter !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobRouter = this._oobRouter;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._osFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.osFull = this._osFull;
    }
    if (this._osShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShort = this._osShort;
    }
    if (this._poc1Cell !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1Cell = this._poc1Cell;
    }
    if (this._poc1Email !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1Email = this._poc1Email;
    }
    if (this._poc1Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1Name = this._poc1Name;
    }
    if (this._poc1Notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1Notes = this._poc1Notes;
    }
    if (this._poc1PhoneA !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1PhoneA = this._poc1PhoneA;
    }
    if (this._poc1PhoneB !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1PhoneB = this._poc1PhoneB;
    }
    if (this._poc1Screen !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc1Screen = this._poc1Screen;
    }
    if (this._poc2Cell !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2Cell = this._poc2Cell;
    }
    if (this._poc2Email !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2Email = this._poc2Email;
    }
    if (this._poc2Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2Name = this._poc2Name;
    }
    if (this._poc2Notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2Notes = this._poc2Notes;
    }
    if (this._poc2PhoneA !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2PhoneA = this._poc2PhoneA;
    }
    if (this._poc2PhoneB !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2PhoneB = this._poc2PhoneB;
    }
    if (this._poc2Screen !== undefined) {
      hasAnyValues = true;
      internalValueResult.poc2Screen = this._poc2Screen;
    }
    if (this._serialnoA !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialnoA = this._serialnoA;
    }
    if (this._serialnoB !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialnoB = this._serialnoB;
    }
    if (this._siteAddressA !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteAddressA = this._siteAddressA;
    }
    if (this._siteAddressB !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteAddressB = this._siteAddressB;
    }
    if (this._siteAddressC !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteAddressC = this._siteAddressC;
    }
    if (this._siteCity !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteCity = this._siteCity;
    }
    if (this._siteCountry !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteCountry = this._siteCountry;
    }
    if (this._siteNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNotes = this._siteNotes;
    }
    if (this._siteRack !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRack = this._siteRack;
    }
    if (this._siteState !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteState = this._siteState;
    }
    if (this._siteZip !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteZip = this._siteZip;
    }
    if (this._software !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAttribute = this._software;
    }
    if (this._softwareAppA !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAppA = this._softwareAppA;
    }
    if (this._softwareAppB !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAppB = this._softwareAppB;
    }
    if (this._softwareAppC !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAppC = this._softwareAppC;
    }
    if (this._softwareAppD !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAppD = this._softwareAppD;
    }
    if (this._softwareAppE !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAppE = this._softwareAppE;
    }
    if (this._softwareFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareFull = this._softwareFull;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeFull = this._typeFull;
    }
    if (this._urlA !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlA = this._urlA;
    }
    if (this._urlB !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlB = this._urlB;
    }
    if (this._urlC !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlC = this._urlC;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._assetTag = undefined;
      this._chassis = undefined;
      this._contact = undefined;
      this._contractNumber = undefined;
      this._dateHwDecomm = undefined;
      this._dateHwExpiry = undefined;
      this._dateHwInstall = undefined;
      this._dateHwPurchase = undefined;
      this._deploymentStatus = undefined;
      this._hardware = undefined;
      this._hardwareFull = undefined;
      this._hostNetmask = undefined;
      this._hostNetworks = undefined;
      this._hostRouter = undefined;
      this._hwArch = undefined;
      this._installerName = undefined;
      this._location = undefined;
      this._locationLat = undefined;
      this._locationLon = undefined;
      this._macaddressA = undefined;
      this._macaddressB = undefined;
      this._model = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._oobIp = undefined;
      this._oobNetmask = undefined;
      this._oobRouter = undefined;
      this._os = undefined;
      this._osFull = undefined;
      this._osShort = undefined;
      this._poc1Cell = undefined;
      this._poc1Email = undefined;
      this._poc1Name = undefined;
      this._poc1Notes = undefined;
      this._poc1PhoneA = undefined;
      this._poc1PhoneB = undefined;
      this._poc1Screen = undefined;
      this._poc2Cell = undefined;
      this._poc2Email = undefined;
      this._poc2Name = undefined;
      this._poc2Notes = undefined;
      this._poc2PhoneA = undefined;
      this._poc2PhoneB = undefined;
      this._poc2Screen = undefined;
      this._serialnoA = undefined;
      this._serialnoB = undefined;
      this._siteAddressA = undefined;
      this._siteAddressB = undefined;
      this._siteAddressC = undefined;
      this._siteCity = undefined;
      this._siteCountry = undefined;
      this._siteNotes = undefined;
      this._siteRack = undefined;
      this._siteState = undefined;
      this._siteZip = undefined;
      this._software = undefined;
      this._softwareAppA = undefined;
      this._softwareAppB = undefined;
      this._softwareAppC = undefined;
      this._softwareAppD = undefined;
      this._softwareAppE = undefined;
      this._softwareFull = undefined;
      this._tag = undefined;
      this._type = undefined;
      this._typeFull = undefined;
      this._urlA = undefined;
      this._urlB = undefined;
      this._urlC = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._assetTag = value.assetTag;
      this._chassis = value.chassis;
      this._contact = value.contact;
      this._contractNumber = value.contractNumber;
      this._dateHwDecomm = value.dateHwDecomm;
      this._dateHwExpiry = value.dateHwExpiry;
      this._dateHwInstall = value.dateHwInstall;
      this._dateHwPurchase = value.dateHwPurchase;
      this._deploymentStatus = value.deploymentStatus;
      this._hardware = value.hardware;
      this._hardwareFull = value.hardwareFull;
      this._hostNetmask = value.hostNetmask;
      this._hostNetworks = value.hostNetworks;
      this._hostRouter = value.hostRouter;
      this._hwArch = value.hwArch;
      this._installerName = value.installerName;
      this._location = value.location;
      this._locationLat = value.locationLat;
      this._locationLon = value.locationLon;
      this._macaddressA = value.macaddressA;
      this._macaddressB = value.macaddressB;
      this._model = value.model;
      this._name = value.name;
      this._notes = value.notes;
      this._oobIp = value.oobIp;
      this._oobNetmask = value.oobNetmask;
      this._oobRouter = value.oobRouter;
      this._os = value.os;
      this._osFull = value.osFull;
      this._osShort = value.osShort;
      this._poc1Cell = value.poc1Cell;
      this._poc1Email = value.poc1Email;
      this._poc1Name = value.poc1Name;
      this._poc1Notes = value.poc1Notes;
      this._poc1PhoneA = value.poc1PhoneA;
      this._poc1PhoneB = value.poc1PhoneB;
      this._poc1Screen = value.poc1Screen;
      this._poc2Cell = value.poc2Cell;
      this._poc2Email = value.poc2Email;
      this._poc2Name = value.poc2Name;
      this._poc2Notes = value.poc2Notes;
      this._poc2PhoneA = value.poc2PhoneA;
      this._poc2PhoneB = value.poc2PhoneB;
      this._poc2Screen = value.poc2Screen;
      this._serialnoA = value.serialnoA;
      this._serialnoB = value.serialnoB;
      this._siteAddressA = value.siteAddressA;
      this._siteAddressB = value.siteAddressB;
      this._siteAddressC = value.siteAddressC;
      this._siteCity = value.siteCity;
      this._siteCountry = value.siteCountry;
      this._siteNotes = value.siteNotes;
      this._siteRack = value.siteRack;
      this._siteState = value.siteState;
      this._siteZip = value.siteZip;
      this._software = value.softwareAttribute;
      this._softwareAppA = value.softwareAppA;
      this._softwareAppB = value.softwareAppB;
      this._softwareAppC = value.softwareAppC;
      this._softwareAppD = value.softwareAppD;
      this._softwareAppE = value.softwareAppE;
      this._softwareFull = value.softwareFull;
      this._tag = value.tag;
      this._type = value.type;
      this._typeFull = value.typeFull;
      this._urlA = value.urlA;
      this._urlB = value.urlB;
      this._urlC = value.urlC;
      this._vendor = value.vendor;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // asset_tag - computed: false, optional: true, required: false
  private _assetTag?: string; 
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }
  public set assetTag(value: string) {
    this._assetTag = value;
  }
  public resetAssetTag() {
    this._assetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag;
  }

  // chassis - computed: false, optional: true, required: false
  private _chassis?: string; 
  public get chassis() {
    return this.getStringAttribute('chassis');
  }
  public set chassis(value: string) {
    this._chassis = value;
  }
  public resetChassis() {
    this._chassis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisInput() {
    return this._chassis;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // contract_number - computed: false, optional: true, required: false
  private _contractNumber?: string; 
  public get contractNumber() {
    return this.getStringAttribute('contract_number');
  }
  public set contractNumber(value: string) {
    this._contractNumber = value;
  }
  public resetContractNumber() {
    this._contractNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNumberInput() {
    return this._contractNumber;
  }

  // date_hw_decomm - computed: false, optional: true, required: false
  private _dateHwDecomm?: string; 
  public get dateHwDecomm() {
    return this.getStringAttribute('date_hw_decomm');
  }
  public set dateHwDecomm(value: string) {
    this._dateHwDecomm = value;
  }
  public resetDateHwDecomm() {
    this._dateHwDecomm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHwDecommInput() {
    return this._dateHwDecomm;
  }

  // date_hw_expiry - computed: false, optional: true, required: false
  private _dateHwExpiry?: string; 
  public get dateHwExpiry() {
    return this.getStringAttribute('date_hw_expiry');
  }
  public set dateHwExpiry(value: string) {
    this._dateHwExpiry = value;
  }
  public resetDateHwExpiry() {
    this._dateHwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHwExpiryInput() {
    return this._dateHwExpiry;
  }

  // date_hw_install - computed: false, optional: true, required: false
  private _dateHwInstall?: string; 
  public get dateHwInstall() {
    return this.getStringAttribute('date_hw_install');
  }
  public set dateHwInstall(value: string) {
    this._dateHwInstall = value;
  }
  public resetDateHwInstall() {
    this._dateHwInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHwInstallInput() {
    return this._dateHwInstall;
  }

  // date_hw_purchase - computed: false, optional: true, required: false
  private _dateHwPurchase?: string; 
  public get dateHwPurchase() {
    return this.getStringAttribute('date_hw_purchase');
  }
  public set dateHwPurchase(value: string) {
    this._dateHwPurchase = value;
  }
  public resetDateHwPurchase() {
    this._dateHwPurchase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHwPurchaseInput() {
    return this._dateHwPurchase;
  }

  // deployment_status - computed: false, optional: true, required: false
  private _deploymentStatus?: string; 
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }
  public set deploymentStatus(value: string) {
    this._deploymentStatus = value;
  }
  public resetDeploymentStatus() {
    this._deploymentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStatusInput() {
    return this._deploymentStatus;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
  }

  // hardware_full - computed: false, optional: true, required: false
  private _hardwareFull?: string; 
  public get hardwareFull() {
    return this.getStringAttribute('hardware_full');
  }
  public set hardwareFull(value: string) {
    this._hardwareFull = value;
  }
  public resetHardwareFull() {
    this._hardwareFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareFullInput() {
    return this._hardwareFull;
  }

  // host_netmask - computed: false, optional: true, required: false
  private _hostNetmask?: string; 
  public get hostNetmask() {
    return this.getStringAttribute('host_netmask');
  }
  public set hostNetmask(value: string) {
    this._hostNetmask = value;
  }
  public resetHostNetmask() {
    this._hostNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetmaskInput() {
    return this._hostNetmask;
  }

  // host_networks - computed: false, optional: true, required: false
  private _hostNetworks?: string; 
  public get hostNetworks() {
    return this.getStringAttribute('host_networks');
  }
  public set hostNetworks(value: string) {
    this._hostNetworks = value;
  }
  public resetHostNetworks() {
    this._hostNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworksInput() {
    return this._hostNetworks;
  }

  // host_router - computed: false, optional: true, required: false
  private _hostRouter?: string; 
  public get hostRouter() {
    return this.getStringAttribute('host_router');
  }
  public set hostRouter(value: string) {
    this._hostRouter = value;
  }
  public resetHostRouter() {
    this._hostRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRouterInput() {
    return this._hostRouter;
  }

  // hw_arch - computed: false, optional: true, required: false
  private _hwArch?: string; 
  public get hwArch() {
    return this.getStringAttribute('hw_arch');
  }
  public set hwArch(value: string) {
    this._hwArch = value;
  }
  public resetHwArch() {
    this._hwArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwArchInput() {
    return this._hwArch;
  }

  // installer_name - computed: false, optional: true, required: false
  private _installerName?: string; 
  public get installerName() {
    return this.getStringAttribute('installer_name');
  }
  public set installerName(value: string) {
    this._installerName = value;
  }
  public resetInstallerName() {
    this._installerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerNameInput() {
    return this._installerName;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_lat - computed: false, optional: true, required: false
  private _locationLat?: string; 
  public get locationLat() {
    return this.getStringAttribute('location_lat');
  }
  public set locationLat(value: string) {
    this._locationLat = value;
  }
  public resetLocationLat() {
    this._locationLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationLatInput() {
    return this._locationLat;
  }

  // location_lon - computed: false, optional: true, required: false
  private _locationLon?: string; 
  public get locationLon() {
    return this.getStringAttribute('location_lon');
  }
  public set locationLon(value: string) {
    this._locationLon = value;
  }
  public resetLocationLon() {
    this._locationLon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationLonInput() {
    return this._locationLon;
  }

  // macaddress_a - computed: false, optional: true, required: false
  private _macaddressA?: string; 
  public get macaddressA() {
    return this.getStringAttribute('macaddress_a');
  }
  public set macaddressA(value: string) {
    this._macaddressA = value;
  }
  public resetMacaddressA() {
    this._macaddressA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddressAInput() {
    return this._macaddressA;
  }

  // macaddress_b - computed: false, optional: true, required: false
  private _macaddressB?: string; 
  public get macaddressB() {
    return this.getStringAttribute('macaddress_b');
  }
  public set macaddressB(value: string) {
    this._macaddressB = value;
  }
  public resetMacaddressB() {
    this._macaddressB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddressBInput() {
    return this._macaddressB;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // oob_ip - computed: false, optional: true, required: false
  private _oobIp?: string; 
  public get oobIp() {
    return this.getStringAttribute('oob_ip');
  }
  public set oobIp(value: string) {
    this._oobIp = value;
  }
  public resetOobIp() {
    this._oobIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobIpInput() {
    return this._oobIp;
  }

  // oob_netmask - computed: false, optional: true, required: false
  private _oobNetmask?: string; 
  public get oobNetmask() {
    return this.getStringAttribute('oob_netmask');
  }
  public set oobNetmask(value: string) {
    this._oobNetmask = value;
  }
  public resetOobNetmask() {
    this._oobNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobNetmaskInput() {
    return this._oobNetmask;
  }

  // oob_router - computed: false, optional: true, required: false
  private _oobRouter?: string; 
  public get oobRouter() {
    return this.getStringAttribute('oob_router');
  }
  public set oobRouter(value: string) {
    this._oobRouter = value;
  }
  public resetOobRouter() {
    this._oobRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobRouterInput() {
    return this._oobRouter;
  }

  // os - computed: false, optional: true, required: false
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

  // os_full - computed: false, optional: true, required: false
  private _osFull?: string; 
  public get osFull() {
    return this.getStringAttribute('os_full');
  }
  public set osFull(value: string) {
    this._osFull = value;
  }
  public resetOsFull() {
    this._osFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFullInput() {
    return this._osFull;
  }

  // os_short - computed: false, optional: true, required: false
  private _osShort?: string; 
  public get osShort() {
    return this.getStringAttribute('os_short');
  }
  public set osShort(value: string) {
    this._osShort = value;
  }
  public resetOsShort() {
    this._osShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortInput() {
    return this._osShort;
  }

  // poc_1_cell - computed: false, optional: true, required: false
  private _poc1Cell?: string; 
  public get poc1Cell() {
    return this.getStringAttribute('poc_1_cell');
  }
  public set poc1Cell(value: string) {
    this._poc1Cell = value;
  }
  public resetPoc1Cell() {
    this._poc1Cell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1CellInput() {
    return this._poc1Cell;
  }

  // poc_1_email - computed: false, optional: true, required: false
  private _poc1Email?: string; 
  public get poc1Email() {
    return this.getStringAttribute('poc_1_email');
  }
  public set poc1Email(value: string) {
    this._poc1Email = value;
  }
  public resetPoc1Email() {
    this._poc1Email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1EmailInput() {
    return this._poc1Email;
  }

  // poc_1_name - computed: false, optional: true, required: false
  private _poc1Name?: string; 
  public get poc1Name() {
    return this.getStringAttribute('poc_1_name');
  }
  public set poc1Name(value: string) {
    this._poc1Name = value;
  }
  public resetPoc1Name() {
    this._poc1Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1NameInput() {
    return this._poc1Name;
  }

  // poc_1_notes - computed: false, optional: true, required: false
  private _poc1Notes?: string; 
  public get poc1Notes() {
    return this.getStringAttribute('poc_1_notes');
  }
  public set poc1Notes(value: string) {
    this._poc1Notes = value;
  }
  public resetPoc1Notes() {
    this._poc1Notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1NotesInput() {
    return this._poc1Notes;
  }

  // poc_1_phone_a - computed: false, optional: true, required: false
  private _poc1PhoneA?: string; 
  public get poc1PhoneA() {
    return this.getStringAttribute('poc_1_phone_a');
  }
  public set poc1PhoneA(value: string) {
    this._poc1PhoneA = value;
  }
  public resetPoc1PhoneA() {
    this._poc1PhoneA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1PhoneAInput() {
    return this._poc1PhoneA;
  }

  // poc_1_phone_b - computed: false, optional: true, required: false
  private _poc1PhoneB?: string; 
  public get poc1PhoneB() {
    return this.getStringAttribute('poc_1_phone_b');
  }
  public set poc1PhoneB(value: string) {
    this._poc1PhoneB = value;
  }
  public resetPoc1PhoneB() {
    this._poc1PhoneB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1PhoneBInput() {
    return this._poc1PhoneB;
  }

  // poc_1_screen - computed: false, optional: true, required: false
  private _poc1Screen?: string; 
  public get poc1Screen() {
    return this.getStringAttribute('poc_1_screen');
  }
  public set poc1Screen(value: string) {
    this._poc1Screen = value;
  }
  public resetPoc1Screen() {
    this._poc1Screen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc1ScreenInput() {
    return this._poc1Screen;
  }

  // poc_2_cell - computed: false, optional: true, required: false
  private _poc2Cell?: string; 
  public get poc2Cell() {
    return this.getStringAttribute('poc_2_cell');
  }
  public set poc2Cell(value: string) {
    this._poc2Cell = value;
  }
  public resetPoc2Cell() {
    this._poc2Cell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2CellInput() {
    return this._poc2Cell;
  }

  // poc_2_email - computed: false, optional: true, required: false
  private _poc2Email?: string; 
  public get poc2Email() {
    return this.getStringAttribute('poc_2_email');
  }
  public set poc2Email(value: string) {
    this._poc2Email = value;
  }
  public resetPoc2Email() {
    this._poc2Email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2EmailInput() {
    return this._poc2Email;
  }

  // poc_2_name - computed: false, optional: true, required: false
  private _poc2Name?: string; 
  public get poc2Name() {
    return this.getStringAttribute('poc_2_name');
  }
  public set poc2Name(value: string) {
    this._poc2Name = value;
  }
  public resetPoc2Name() {
    this._poc2Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2NameInput() {
    return this._poc2Name;
  }

  // poc_2_notes - computed: false, optional: true, required: false
  private _poc2Notes?: string; 
  public get poc2Notes() {
    return this.getStringAttribute('poc_2_notes');
  }
  public set poc2Notes(value: string) {
    this._poc2Notes = value;
  }
  public resetPoc2Notes() {
    this._poc2Notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2NotesInput() {
    return this._poc2Notes;
  }

  // poc_2_phone_a - computed: false, optional: true, required: false
  private _poc2PhoneA?: string; 
  public get poc2PhoneA() {
    return this.getStringAttribute('poc_2_phone_a');
  }
  public set poc2PhoneA(value: string) {
    this._poc2PhoneA = value;
  }
  public resetPoc2PhoneA() {
    this._poc2PhoneA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2PhoneAInput() {
    return this._poc2PhoneA;
  }

  // poc_2_phone_b - computed: false, optional: true, required: false
  private _poc2PhoneB?: string; 
  public get poc2PhoneB() {
    return this.getStringAttribute('poc_2_phone_b');
  }
  public set poc2PhoneB(value: string) {
    this._poc2PhoneB = value;
  }
  public resetPoc2PhoneB() {
    this._poc2PhoneB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2PhoneBInput() {
    return this._poc2PhoneB;
  }

  // poc_2_screen - computed: false, optional: true, required: false
  private _poc2Screen?: string; 
  public get poc2Screen() {
    return this.getStringAttribute('poc_2_screen');
  }
  public set poc2Screen(value: string) {
    this._poc2Screen = value;
  }
  public resetPoc2Screen() {
    this._poc2Screen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poc2ScreenInput() {
    return this._poc2Screen;
  }

  // serialno_a - computed: false, optional: true, required: false
  private _serialnoA?: string; 
  public get serialnoA() {
    return this.getStringAttribute('serialno_a');
  }
  public set serialnoA(value: string) {
    this._serialnoA = value;
  }
  public resetSerialnoA() {
    this._serialnoA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialnoAInput() {
    return this._serialnoA;
  }

  // serialno_b - computed: false, optional: true, required: false
  private _serialnoB?: string; 
  public get serialnoB() {
    return this.getStringAttribute('serialno_b');
  }
  public set serialnoB(value: string) {
    this._serialnoB = value;
  }
  public resetSerialnoB() {
    this._serialnoB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialnoBInput() {
    return this._serialnoB;
  }

  // site_address_a - computed: false, optional: true, required: false
  private _siteAddressA?: string; 
  public get siteAddressA() {
    return this.getStringAttribute('site_address_a');
  }
  public set siteAddressA(value: string) {
    this._siteAddressA = value;
  }
  public resetSiteAddressA() {
    this._siteAddressA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAddressAInput() {
    return this._siteAddressA;
  }

  // site_address_b - computed: false, optional: true, required: false
  private _siteAddressB?: string; 
  public get siteAddressB() {
    return this.getStringAttribute('site_address_b');
  }
  public set siteAddressB(value: string) {
    this._siteAddressB = value;
  }
  public resetSiteAddressB() {
    this._siteAddressB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAddressBInput() {
    return this._siteAddressB;
  }

  // site_address_c - computed: false, optional: true, required: false
  private _siteAddressC?: string; 
  public get siteAddressC() {
    return this.getStringAttribute('site_address_c');
  }
  public set siteAddressC(value: string) {
    this._siteAddressC = value;
  }
  public resetSiteAddressC() {
    this._siteAddressC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAddressCInput() {
    return this._siteAddressC;
  }

  // site_city - computed: false, optional: true, required: false
  private _siteCity?: string; 
  public get siteCity() {
    return this.getStringAttribute('site_city');
  }
  public set siteCity(value: string) {
    this._siteCity = value;
  }
  public resetSiteCity() {
    this._siteCity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCityInput() {
    return this._siteCity;
  }

  // site_country - computed: false, optional: true, required: false
  private _siteCountry?: string; 
  public get siteCountry() {
    return this.getStringAttribute('site_country');
  }
  public set siteCountry(value: string) {
    this._siteCountry = value;
  }
  public resetSiteCountry() {
    this._siteCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCountryInput() {
    return this._siteCountry;
  }

  // site_notes - computed: false, optional: true, required: false
  private _siteNotes?: string; 
  public get siteNotes() {
    return this.getStringAttribute('site_notes');
  }
  public set siteNotes(value: string) {
    this._siteNotes = value;
  }
  public resetSiteNotes() {
    this._siteNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNotesInput() {
    return this._siteNotes;
  }

  // site_rack - computed: false, optional: true, required: false
  private _siteRack?: string; 
  public get siteRack() {
    return this.getStringAttribute('site_rack');
  }
  public set siteRack(value: string) {
    this._siteRack = value;
  }
  public resetSiteRack() {
    this._siteRack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRackInput() {
    return this._siteRack;
  }

  // site_state - computed: false, optional: true, required: false
  private _siteState?: string; 
  public get siteState() {
    return this.getStringAttribute('site_state');
  }
  public set siteState(value: string) {
    this._siteState = value;
  }
  public resetSiteState() {
    this._siteState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteStateInput() {
    return this._siteState;
  }

  // site_zip - computed: false, optional: true, required: false
  private _siteZip?: string; 
  public get siteZip() {
    return this.getStringAttribute('site_zip');
  }
  public set siteZip(value: string) {
    this._siteZip = value;
  }
  public resetSiteZip() {
    this._siteZip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteZipInput() {
    return this._siteZip;
  }

  // software - computed: false, optional: true, required: false
  private _software?: string; 
  public get softwareAttribute() {
    return this.getStringAttribute('software');
  }
  public set softwareAttribute(value: string) {
    this._software = value;
  }
  public resetSoftwareAttribute() {
    this._software = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software;
  }

  // software_app_a - computed: false, optional: true, required: false
  private _softwareAppA?: string; 
  public get softwareAppA() {
    return this.getStringAttribute('software_app_a');
  }
  public set softwareAppA(value: string) {
    this._softwareAppA = value;
  }
  public resetSoftwareAppA() {
    this._softwareAppA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAppAInput() {
    return this._softwareAppA;
  }

  // software_app_b - computed: false, optional: true, required: false
  private _softwareAppB?: string; 
  public get softwareAppB() {
    return this.getStringAttribute('software_app_b');
  }
  public set softwareAppB(value: string) {
    this._softwareAppB = value;
  }
  public resetSoftwareAppB() {
    this._softwareAppB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAppBInput() {
    return this._softwareAppB;
  }

  // software_app_c - computed: false, optional: true, required: false
  private _softwareAppC?: string; 
  public get softwareAppC() {
    return this.getStringAttribute('software_app_c');
  }
  public set softwareAppC(value: string) {
    this._softwareAppC = value;
  }
  public resetSoftwareAppC() {
    this._softwareAppC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAppCInput() {
    return this._softwareAppC;
  }

  // software_app_d - computed: false, optional: true, required: false
  private _softwareAppD?: string; 
  public get softwareAppD() {
    return this.getStringAttribute('software_app_d');
  }
  public set softwareAppD(value: string) {
    this._softwareAppD = value;
  }
  public resetSoftwareAppD() {
    this._softwareAppD = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAppDInput() {
    return this._softwareAppD;
  }

  // software_app_e - computed: false, optional: true, required: false
  private _softwareAppE?: string; 
  public get softwareAppE() {
    return this.getStringAttribute('software_app_e');
  }
  public set softwareAppE(value: string) {
    this._softwareAppE = value;
  }
  public resetSoftwareAppE() {
    this._softwareAppE = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAppEInput() {
    return this._softwareAppE;
  }

  // software_full - computed: false, optional: true, required: false
  private _softwareFull?: string; 
  public get softwareFull() {
    return this.getStringAttribute('software_full');
  }
  public set softwareFull(value: string) {
    this._softwareFull = value;
  }
  public resetSoftwareFull() {
    this._softwareFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareFullInput() {
    return this._softwareFull;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_full - computed: false, optional: true, required: false
  private _typeFull?: string; 
  public get typeFull() {
    return this.getStringAttribute('type_full');
  }
  public set typeFull(value: string) {
    this._typeFull = value;
  }
  public resetTypeFull() {
    this._typeFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeFullInput() {
    return this._typeFull;
  }

  // url_a - computed: false, optional: true, required: false
  private _urlA?: string; 
  public get urlA() {
    return this.getStringAttribute('url_a');
  }
  public set urlA(value: string) {
    this._urlA = value;
  }
  public resetUrlA() {
    this._urlA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAInput() {
    return this._urlA;
  }

  // url_b - computed: false, optional: true, required: false
  private _urlB?: string; 
  public get urlB() {
    return this.getStringAttribute('url_b');
  }
  public set urlB(value: string) {
    this._urlB = value;
  }
  public resetUrlB() {
    this._urlB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBInput() {
    return this._urlB;
  }

  // url_c - computed: false, optional: true, required: false
  private _urlC?: string; 
  public get urlC() {
    return this.getStringAttribute('url_c');
  }
  public set urlC(value: string) {
    this._urlC = value;
  }
  public resetUrlC() {
    this._urlC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCInput() {
    return this._urlC;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class HostInventoryList extends cdktf.ComplexList {
  public internalValue? : HostInventory[] | cdktf.IResolvable

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
  public get(index: number): HostInventoryOutputReference {
    return new HostInventoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostMacro {
  /**
  * Macro Name (key)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#name Host#name}
  */
  readonly name: string;
  /**
  * Macro Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#value Host#value}
  */
  readonly value: string;
}

export function hostMacroToTerraform(struct?: HostMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostMacroToHclTerraform(struct?: HostMacro | cdktf.IResolvable): any {
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

export class HostMacroOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostMacro | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostMacro | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

export class HostMacroList extends cdktf.ComplexList {
  public internalValue? : HostMacro[] | cdktf.IResolvable

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
  public get(index: number): HostMacroOutputReference {
    return new HostMacroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostTag {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#key Host#key}
  */
  readonly key: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#value Host#value}
  */
  readonly value?: string;
}

export function hostTagToTerraform(struct?: HostTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostTagToHclTerraform(struct?: HostTag | cdktf.IResolvable): any {
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

export class HostTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HostTagList extends cdktf.ComplexList {
  public internalValue? : HostTag[] | cdktf.IResolvable

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
  public get(index: number): HostTagOutputReference {
    return new HostTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host zabbix_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/host zabbix_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_host',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._groups = config.groups;
    this._host = config.host;
    this._id = config.id;
    this._inventoryMode = config.inventoryMode;
    this._name = config.name;
    this._proxyid = config.proxyid;
    this._templates = config.templates;
    this._interface.internalValue = config.interface;
    this._inventory.internalValue = config.inventory;
    this._macro.internalValue = config.macro;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // inventory_mode - computed: false, optional: true, required: false
  private _inventoryMode?: string; 
  public get inventoryMode() {
    return this.getStringAttribute('inventory_mode');
  }
  public set inventoryMode(value: string) {
    this._inventoryMode = value;
  }
  public resetInventoryMode() {
    this._inventoryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryModeInput() {
    return this._inventoryMode;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // proxyid - computed: false, optional: true, required: false
  private _proxyid?: string; 
  public get proxyid() {
    return this.getStringAttribute('proxyid');
  }
  public set proxyid(value: string) {
    this._proxyid = value;
  }
  public resetProxyid() {
    this._proxyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyidInput() {
    return this._proxyid;
  }

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return cdktf.Fn.tolist(this.getListAttribute('templates'));
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new HostInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: HostInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // inventory - computed: false, optional: true, required: false
  private _inventory = new HostInventoryList(this, "inventory", false);
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: HostInventory[] | cdktf.IResolvable) {
    this._inventory.internalValue = value;
  }
  public resetInventory() {
    this._inventory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
  }

  // macro - computed: false, optional: true, required: false
  private _macro = new HostMacroList(this, "macro", false);
  public get macro() {
    return this._macro;
  }
  public putMacro(value: HostMacro[] | cdktf.IResolvable) {
    this._macro.internalValue = value;
  }
  public resetMacro() {
    this._macro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new HostTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: HostTag[] | cdktf.IResolvable) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      inventory_mode: cdktf.stringToTerraform(this._inventoryMode),
      name: cdktf.stringToTerraform(this._name),
      proxyid: cdktf.stringToTerraform(this._proxyid),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      interface: cdktf.listMapper(hostInterfaceToTerraform, true)(this._interface.internalValue),
      inventory: cdktf.listMapper(hostInventoryToTerraform, true)(this._inventory.internalValue),
      macro: cdktf.listMapper(hostMacroToTerraform, true)(this._macro.internalValue),
      tag: cdktf.listMapper(hostTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      inventory_mode: {
        value: cdktf.stringToHclTerraform(this._inventoryMode),
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
      proxyid: {
        value: cdktf.stringToHclTerraform(this._proxyid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface: {
        value: cdktf.listMapperHcl(hostInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostInterfaceList",
      },
      inventory: {
        value: cdktf.listMapperHcl(hostInventoryToHclTerraform, true)(this._inventory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostInventoryList",
      },
      macro: {
        value: cdktf.listMapperHcl(hostMacroToHclTerraform, true)(this._macro.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostMacroList",
      },
      tag: {
        value: cdktf.listMapperHcl(hostTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
