// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#addr_type SystemDdns#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#bound_ip SystemDdns#bound_ip}
  */
  readonly boundIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#clear_text SystemDdns#clear_text}
  */
  readonly clearText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_auth SystemDdns#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_domain SystemDdns#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_key SystemDdns#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_keyname SystemDdns#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_password SystemDdns#ddns_password}
  */
  readonly ddnsPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_server SystemDdns#ddns_server}
  */
  readonly ddnsServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_server_ip SystemDdns#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_sn SystemDdns#ddns_sn}
  */
  readonly ddnsSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_ttl SystemDdns#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_username SystemDdns#ddns_username}
  */
  readonly ddnsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_zone SystemDdns#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddnsid SystemDdns#ddnsid}
  */
  readonly ddnsid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#dynamic_sort_subtable SystemDdns#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#get_all_tables SystemDdns#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#id SystemDdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#server_type SystemDdns#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ssl_certificate SystemDdns#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#update_interval SystemDdns#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#use_public_ip SystemDdns#use_public_ip}
  */
  readonly usePublicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#vdomparam SystemDdns#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * ddns_server_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#ddns_server_addr SystemDdns#ddns_server_addr}
  */
  readonly ddnsServerAddr?: SystemDdnsDdnsServerAddr[] | cdktf.IResolvable;
  /**
  * monitor_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#monitor_interface SystemDdns#monitor_interface}
  */
  readonly monitorInterface: SystemDdnsMonitorInterface[] | cdktf.IResolvable;
}
export interface SystemDdnsDdnsServerAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#addr SystemDdns#addr}
  */
  readonly addr?: string;
}

export function systemDdnsDdnsServerAddrToTerraform(struct?: SystemDdnsDdnsServerAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function systemDdnsDdnsServerAddrToHclTerraform(struct?: SystemDdnsDdnsServerAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDdnsDdnsServerAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDdnsDdnsServerAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDdnsDdnsServerAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}

export class SystemDdnsDdnsServerAddrList extends cdktf.ComplexList {
  public internalValue? : SystemDdnsDdnsServerAddr[] | cdktf.IResolvable

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
  public get(index: number): SystemDdnsDdnsServerAddrOutputReference {
    return new SystemDdnsDdnsServerAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDdnsMonitorInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#interface_name SystemDdns#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemDdnsMonitorInterfaceToTerraform(struct?: SystemDdnsMonitorInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemDdnsMonitorInterfaceToHclTerraform(struct?: SystemDdnsMonitorInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDdnsMonitorInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDdnsMonitorInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDdnsMonitorInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemDdnsMonitorInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemDdnsMonitorInterface[] | cdktf.IResolvable

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
  public get(index: number): SystemDdnsMonitorInterfaceOutputReference {
    return new SystemDdnsMonitorInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns fortios_system_ddns}
*/
export class SystemDdns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ddns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDdns to import
  * @param importFromId The id of the existing SystemDdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ddns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ddns fortios_system_ddns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDdnsConfig
  */
  public constructor(scope: Construct, id: string, config: SystemDdnsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ddns',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrType = config.addrType;
    this._boundIp = config.boundIp;
    this._clearText = config.clearText;
    this._ddnsAuth = config.ddnsAuth;
    this._ddnsDomain = config.ddnsDomain;
    this._ddnsKey = config.ddnsKey;
    this._ddnsKeyname = config.ddnsKeyname;
    this._ddnsPassword = config.ddnsPassword;
    this._ddnsServer = config.ddnsServer;
    this._ddnsServerIp = config.ddnsServerIp;
    this._ddnsSn = config.ddnsSn;
    this._ddnsTtl = config.ddnsTtl;
    this._ddnsUsername = config.ddnsUsername;
    this._ddnsZone = config.ddnsZone;
    this._ddnsid = config.ddnsid;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._serverType = config.serverType;
    this._sslCertificate = config.sslCertificate;
    this._updateInterval = config.updateInterval;
    this._usePublicIp = config.usePublicIp;
    this._vdomparam = config.vdomparam;
    this._ddnsServerAddr.internalValue = config.ddnsServerAddr;
    this._monitorInterface.internalValue = config.monitorInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // bound_ip - computed: true, optional: true, required: false
  private _boundIp?: string; 
  public get boundIp() {
    return this.getStringAttribute('bound_ip');
  }
  public set boundIp(value: string) {
    this._boundIp = value;
  }
  public resetBoundIp() {
    this._boundIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpInput() {
    return this._boundIp;
  }

  // clear_text - computed: true, optional: true, required: false
  private _clearText?: string; 
  public get clearText() {
    return this.getStringAttribute('clear_text');
  }
  public set clearText(value: string) {
    this._clearText = value;
  }
  public resetClearText() {
    this._clearText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTextInput() {
    return this._clearText;
  }

  // ddns_auth - computed: true, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_domain - computed: false, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_key - computed: false, optional: true, required: false
  private _ddnsKey?: string; 
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }
  public set ddnsKey(value: string) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_password - computed: false, optional: true, required: false
  private _ddnsPassword?: string; 
  public get ddnsPassword() {
    return this.getStringAttribute('ddns_password');
  }
  public set ddnsPassword(value: string) {
    this._ddnsPassword = value;
  }
  public resetDdnsPassword() {
    this._ddnsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPasswordInput() {
    return this._ddnsPassword;
  }

  // ddns_server - computed: false, optional: false, required: true
  private _ddnsServer?: string; 
  public get ddnsServer() {
    return this.getStringAttribute('ddns_server');
  }
  public set ddnsServer(value: string) {
    this._ddnsServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerInput() {
    return this._ddnsServer;
  }

  // ddns_server_ip - computed: false, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_sn - computed: false, optional: true, required: false
  private _ddnsSn?: string; 
  public get ddnsSn() {
    return this.getStringAttribute('ddns_sn');
  }
  public set ddnsSn(value: string) {
    this._ddnsSn = value;
  }
  public resetDdnsSn() {
    this._ddnsSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSnInput() {
    return this._ddnsSn;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_username - computed: false, optional: true, required: false
  private _ddnsUsername?: string; 
  public get ddnsUsername() {
    return this.getStringAttribute('ddns_username');
  }
  public set ddnsUsername(value: string) {
    this._ddnsUsername = value;
  }
  public resetDdnsUsername() {
    this._ddnsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUsernameInput() {
    return this._ddnsUsername;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // ddnsid - computed: true, optional: true, required: false
  private _ddnsid?: number; 
  public get ddnsid() {
    return this.getNumberAttribute('ddnsid');
  }
  public set ddnsid(value: number) {
    this._ddnsid = value;
  }
  public resetDdnsid() {
    this._ddnsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsidInput() {
    return this._ddnsid;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // ssl_certificate - computed: true, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // use_public_ip - computed: true, optional: true, required: false
  private _usePublicIp?: string; 
  public get usePublicIp() {
    return this.getStringAttribute('use_public_ip');
  }
  public set usePublicIp(value: string) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // ddns_server_addr - computed: false, optional: true, required: false
  private _ddnsServerAddr = new SystemDdnsDdnsServerAddrList(this, "ddns_server_addr", true);
  public get ddnsServerAddr() {
    return this._ddnsServerAddr;
  }
  public putDdnsServerAddr(value: SystemDdnsDdnsServerAddr[] | cdktf.IResolvable) {
    this._ddnsServerAddr.internalValue = value;
  }
  public resetDdnsServerAddr() {
    this._ddnsServerAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerAddrInput() {
    return this._ddnsServerAddr.internalValue;
  }

  // monitor_interface - computed: false, optional: false, required: true
  private _monitorInterface = new SystemDdnsMonitorInterfaceList(this, "monitor_interface", true);
  public get monitorInterface() {
    return this._monitorInterface;
  }
  public putMonitorInterface(value: SystemDdnsMonitorInterface[] | cdktf.IResolvable) {
    this._monitorInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInterfaceInput() {
    return this._monitorInterface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_type: cdktf.stringToTerraform(this._addrType),
      bound_ip: cdktf.stringToTerraform(this._boundIp),
      clear_text: cdktf.stringToTerraform(this._clearText),
      ddns_auth: cdktf.stringToTerraform(this._ddnsAuth),
      ddns_domain: cdktf.stringToTerraform(this._ddnsDomain),
      ddns_key: cdktf.stringToTerraform(this._ddnsKey),
      ddns_keyname: cdktf.stringToTerraform(this._ddnsKeyname),
      ddns_password: cdktf.stringToTerraform(this._ddnsPassword),
      ddns_server: cdktf.stringToTerraform(this._ddnsServer),
      ddns_server_ip: cdktf.stringToTerraform(this._ddnsServerIp),
      ddns_sn: cdktf.stringToTerraform(this._ddnsSn),
      ddns_ttl: cdktf.numberToTerraform(this._ddnsTtl),
      ddns_username: cdktf.stringToTerraform(this._ddnsUsername),
      ddns_zone: cdktf.stringToTerraform(this._ddnsZone),
      ddnsid: cdktf.numberToTerraform(this._ddnsid),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      server_type: cdktf.stringToTerraform(this._serverType),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      use_public_ip: cdktf.stringToTerraform(this._usePublicIp),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      ddns_server_addr: cdktf.listMapper(systemDdnsDdnsServerAddrToTerraform, true)(this._ddnsServerAddr.internalValue),
      monitor_interface: cdktf.listMapper(systemDdnsMonitorInterfaceToTerraform, true)(this._monitorInterface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bound_ip: {
        value: cdktf.stringToHclTerraform(this._boundIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_text: {
        value: cdktf.stringToHclTerraform(this._clearText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_auth: {
        value: cdktf.stringToHclTerraform(this._ddnsAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_domain: {
        value: cdktf.stringToHclTerraform(this._ddnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_key: {
        value: cdktf.stringToHclTerraform(this._ddnsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_keyname: {
        value: cdktf.stringToHclTerraform(this._ddnsKeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_password: {
        value: cdktf.stringToHclTerraform(this._ddnsPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server: {
        value: cdktf.stringToHclTerraform(this._ddnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server_ip: {
        value: cdktf.stringToHclTerraform(this._ddnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_sn: {
        value: cdktf.stringToHclTerraform(this._ddnsSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_ttl: {
        value: cdktf.numberToHclTerraform(this._ddnsTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddns_username: {
        value: cdktf.stringToHclTerraform(this._ddnsUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_zone: {
        value: cdktf.stringToHclTerraform(this._ddnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddnsid: {
        value: cdktf.numberToHclTerraform(this._ddnsid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_public_ip: {
        value: cdktf.stringToHclTerraform(this._usePublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server_addr: {
        value: cdktf.listMapperHcl(systemDdnsDdnsServerAddrToHclTerraform, true)(this._ddnsServerAddr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemDdnsDdnsServerAddrList",
      },
      monitor_interface: {
        value: cdktf.listMapperHcl(systemDdnsMonitorInterfaceToHclTerraform, true)(this._monitorInterface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemDdnsMonitorInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
