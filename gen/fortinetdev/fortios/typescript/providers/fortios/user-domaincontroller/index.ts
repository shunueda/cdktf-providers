// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserDomaincontrollerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#ad_mode UserDomaincontroller#ad_mode}
  */
  readonly adMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#adlds_dn UserDomaincontroller#adlds_dn}
  */
  readonly adldsDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#adlds_ip6 UserDomaincontroller#adlds_ip6}
  */
  readonly adldsIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#adlds_ip_address UserDomaincontroller#adlds_ip_address}
  */
  readonly adldsIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#adlds_port UserDomaincontroller#adlds_port}
  */
  readonly adldsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#change_detection UserDomaincontroller#change_detection}
  */
  readonly changeDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#change_detection_period UserDomaincontroller#change_detection_period}
  */
  readonly changeDetectionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#dns_srv_lookup UserDomaincontroller#dns_srv_lookup}
  */
  readonly dnsSrvLookup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#domain_name UserDomaincontroller#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#dynamic_sort_subtable UserDomaincontroller#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#get_all_tables UserDomaincontroller#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#hostname UserDomaincontroller#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#id UserDomaincontroller#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#interface UserDomaincontroller#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#interface_select_method UserDomaincontroller#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#ip6 UserDomaincontroller#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#ip_address UserDomaincontroller#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#ldap_server UserDomaincontroller#ldap_server}
  */
  readonly ldapServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#name UserDomaincontroller#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#password UserDomaincontroller#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#port UserDomaincontroller#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#replication_port UserDomaincontroller#replication_port}
  */
  readonly replicationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#source_ip6 UserDomaincontroller#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#source_ip_address UserDomaincontroller#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#source_port UserDomaincontroller#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#username UserDomaincontroller#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#vdomparam UserDomaincontroller#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * extra_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#extra_server UserDomaincontroller#extra_server}
  */
  readonly extraServer?: UserDomaincontrollerExtraServer[] | cdktf.IResolvable;
}
export interface UserDomaincontrollerExtraServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#id UserDomaincontroller#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#ip_address UserDomaincontroller#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#port UserDomaincontroller#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#source_ip_address UserDomaincontroller#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#source_port UserDomaincontroller#source_port}
  */
  readonly sourcePort?: number;
}

export function userDomaincontrollerExtraServerToTerraform(struct?: UserDomaincontrollerExtraServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    source_ip_address: cdktf.stringToTerraform(struct!.sourceIpAddress),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
  }
}


export function userDomaincontrollerExtraServerToHclTerraform(struct?: UserDomaincontrollerExtraServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    source_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserDomaincontrollerExtraServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserDomaincontrollerExtraServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpAddress = this._sourceIpAddress;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserDomaincontrollerExtraServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._sourceIpAddress = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._sourceIpAddress = value.sourceIpAddress;
      this._sourcePort = value.sourcePort;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // source_ip_address - computed: true, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class UserDomaincontrollerExtraServerList extends cdktf.ComplexList {
  public internalValue? : UserDomaincontrollerExtraServer[] | cdktf.IResolvable

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
  public get(index: number): UserDomaincontrollerExtraServerOutputReference {
    return new UserDomaincontrollerExtraServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller fortios_user_domaincontroller}
*/
export class UserDomaincontroller extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_domaincontroller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserDomaincontroller resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserDomaincontroller to import
  * @param importFromId The id of the existing UserDomaincontroller that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserDomaincontroller to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_domaincontroller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_domaincontroller fortios_user_domaincontroller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserDomaincontrollerConfig
  */
  public constructor(scope: Construct, id: string, config: UserDomaincontrollerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_domaincontroller',
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
    this._adMode = config.adMode;
    this._adldsDn = config.adldsDn;
    this._adldsIp6 = config.adldsIp6;
    this._adldsIpAddress = config.adldsIpAddress;
    this._adldsPort = config.adldsPort;
    this._changeDetection = config.changeDetection;
    this._changeDetectionPeriod = config.changeDetectionPeriod;
    this._dnsSrvLookup = config.dnsSrvLookup;
    this._domainName = config.domainName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._hostname = config.hostname;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ip6 = config.ip6;
    this._ipAddress = config.ipAddress;
    this._ldapServer = config.ldapServer;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._replicationPort = config.replicationPort;
    this._sourceIp6 = config.sourceIp6;
    this._sourceIpAddress = config.sourceIpAddress;
    this._sourcePort = config.sourcePort;
    this._username = config.username;
    this._vdomparam = config.vdomparam;
    this._extraServer.internalValue = config.extraServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_mode - computed: true, optional: true, required: false
  private _adMode?: string; 
  public get adMode() {
    return this.getStringAttribute('ad_mode');
  }
  public set adMode(value: string) {
    this._adMode = value;
  }
  public resetAdMode() {
    this._adMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adModeInput() {
    return this._adMode;
  }

  // adlds_dn - computed: false, optional: true, required: false
  private _adldsDn?: string; 
  public get adldsDn() {
    return this.getStringAttribute('adlds_dn');
  }
  public set adldsDn(value: string) {
    this._adldsDn = value;
  }
  public resetAdldsDn() {
    this._adldsDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adldsDnInput() {
    return this._adldsDn;
  }

  // adlds_ip6 - computed: true, optional: true, required: false
  private _adldsIp6?: string; 
  public get adldsIp6() {
    return this.getStringAttribute('adlds_ip6');
  }
  public set adldsIp6(value: string) {
    this._adldsIp6 = value;
  }
  public resetAdldsIp6() {
    this._adldsIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adldsIp6Input() {
    return this._adldsIp6;
  }

  // adlds_ip_address - computed: true, optional: true, required: false
  private _adldsIpAddress?: string; 
  public get adldsIpAddress() {
    return this.getStringAttribute('adlds_ip_address');
  }
  public set adldsIpAddress(value: string) {
    this._adldsIpAddress = value;
  }
  public resetAdldsIpAddress() {
    this._adldsIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adldsIpAddressInput() {
    return this._adldsIpAddress;
  }

  // adlds_port - computed: true, optional: true, required: false
  private _adldsPort?: number; 
  public get adldsPort() {
    return this.getNumberAttribute('adlds_port');
  }
  public set adldsPort(value: number) {
    this._adldsPort = value;
  }
  public resetAdldsPort() {
    this._adldsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adldsPortInput() {
    return this._adldsPort;
  }

  // change_detection - computed: true, optional: true, required: false
  private _changeDetection?: string; 
  public get changeDetection() {
    return this.getStringAttribute('change_detection');
  }
  public set changeDetection(value: string) {
    this._changeDetection = value;
  }
  public resetChangeDetection() {
    this._changeDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDetectionInput() {
    return this._changeDetection;
  }

  // change_detection_period - computed: true, optional: true, required: false
  private _changeDetectionPeriod?: number; 
  public get changeDetectionPeriod() {
    return this.getNumberAttribute('change_detection_period');
  }
  public set changeDetectionPeriod(value: number) {
    this._changeDetectionPeriod = value;
  }
  public resetChangeDetectionPeriod() {
    this._changeDetectionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDetectionPeriodInput() {
    return this._changeDetectionPeriod;
  }

  // dns_srv_lookup - computed: true, optional: true, required: false
  private _dnsSrvLookup?: string; 
  public get dnsSrvLookup() {
    return this.getStringAttribute('dns_srv_lookup');
  }
  public set dnsSrvLookup(value: string) {
    this._dnsSrvLookup = value;
  }
  public resetDnsSrvLookup() {
    this._dnsSrvLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSrvLookupInput() {
    return this._dnsSrvLookup;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
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

  // ldap_server - computed: false, optional: false, required: true
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // replication_port - computed: false, optional: true, required: false
  private _replicationPort?: number; 
  public get replicationPort() {
    return this.getNumberAttribute('replication_port');
  }
  public set replicationPort(value: number) {
    this._replicationPort = value;
  }
  public resetReplicationPort() {
    this._replicationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPortInput() {
    return this._replicationPort;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // source_ip_address - computed: true, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // extra_server - computed: false, optional: true, required: false
  private _extraServer = new UserDomaincontrollerExtraServerList(this, "extra_server", false);
  public get extraServer() {
    return this._extraServer;
  }
  public putExtraServer(value: UserDomaincontrollerExtraServer[] | cdktf.IResolvable) {
    this._extraServer.internalValue = value;
  }
  public resetExtraServer() {
    this._extraServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraServerInput() {
    return this._extraServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_mode: cdktf.stringToTerraform(this._adMode),
      adlds_dn: cdktf.stringToTerraform(this._adldsDn),
      adlds_ip6: cdktf.stringToTerraform(this._adldsIp6),
      adlds_ip_address: cdktf.stringToTerraform(this._adldsIpAddress),
      adlds_port: cdktf.numberToTerraform(this._adldsPort),
      change_detection: cdktf.stringToTerraform(this._changeDetection),
      change_detection_period: cdktf.numberToTerraform(this._changeDetectionPeriod),
      dns_srv_lookup: cdktf.stringToTerraform(this._dnsSrvLookup),
      domain_name: cdktf.stringToTerraform(this._domainName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ip6: cdktf.stringToTerraform(this._ip6),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      replication_port: cdktf.numberToTerraform(this._replicationPort),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      source_ip_address: cdktf.stringToTerraform(this._sourceIpAddress),
      source_port: cdktf.numberToTerraform(this._sourcePort),
      username: cdktf.stringToTerraform(this._username),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      extra_server: cdktf.listMapper(userDomaincontrollerExtraServerToTerraform, true)(this._extraServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_mode: {
        value: cdktf.stringToHclTerraform(this._adMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adlds_dn: {
        value: cdktf.stringToHclTerraform(this._adldsDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adlds_ip6: {
        value: cdktf.stringToHclTerraform(this._adldsIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adlds_ip_address: {
        value: cdktf.stringToHclTerraform(this._adldsIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adlds_port: {
        value: cdktf.numberToHclTerraform(this._adldsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      change_detection: {
        value: cdktf.stringToHclTerraform(this._changeDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_detection_period: {
        value: cdktf.numberToHclTerraform(this._changeDetectionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_srv_lookup: {
        value: cdktf.stringToHclTerraform(this._dnsSrvLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
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
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      replication_port: {
        value: cdktf.numberToHclTerraform(this._replicationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_address: {
        value: cdktf.stringToHclTerraform(this._sourceIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
      extra_server: {
        value: cdktf.listMapperHcl(userDomaincontrollerExtraServerToHclTerraform, true)(this._extraServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserDomaincontrollerExtraServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
