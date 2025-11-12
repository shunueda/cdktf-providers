// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogdiskFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#admin LogdiskFilter#admin}
  */
  readonly admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#anomaly LogdiskFilter#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#auth LogdiskFilter#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#cpu_memory_usage LogdiskFilter#cpu_memory_usage}
  */
  readonly cpuMemoryUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#debug LogdiskFilter#debug}
  */
  readonly debug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#dhcp LogdiskFilter#dhcp}
  */
  readonly dhcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#dlp_archive LogdiskFilter#dlp_archive}
  */
  readonly dlpArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#dns LogdiskFilter#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#dynamic_sort_subtable LogdiskFilter#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#event LogdiskFilter#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#filter LogdiskFilter#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#filter_type LogdiskFilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#forti_switch LogdiskFilter#forti_switch}
  */
  readonly fortiSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#forward_traffic LogdiskFilter#forward_traffic}
  */
  readonly forwardTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#get_all_tables LogdiskFilter#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#gtp LogdiskFilter#gtp}
  */
  readonly gtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#ha LogdiskFilter#ha}
  */
  readonly ha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#http_transaction LogdiskFilter#http_transaction}
  */
  readonly httpTransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#id LogdiskFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#ipsec LogdiskFilter#ipsec}
  */
  readonly ipsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#ldb_monitor LogdiskFilter#ldb_monitor}
  */
  readonly ldbMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#local_traffic LogdiskFilter#local_traffic}
  */
  readonly localTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#multicast_traffic LogdiskFilter#multicast_traffic}
  */
  readonly multicastTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#netscan_discovery LogdiskFilter#netscan_discovery}
  */
  readonly netscanDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#netscan_vulnerability LogdiskFilter#netscan_vulnerability}
  */
  readonly netscanVulnerability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#pattern LogdiskFilter#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#ppp LogdiskFilter#ppp}
  */
  readonly ppp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#radius LogdiskFilter#radius}
  */
  readonly radius?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#severity LogdiskFilter#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#sniffer_traffic LogdiskFilter#sniffer_traffic}
  */
  readonly snifferTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#ssh LogdiskFilter#ssh}
  */
  readonly ssh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#sslvpn_log_adm LogdiskFilter#sslvpn_log_adm}
  */
  readonly sslvpnLogAdm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#sslvpn_log_auth LogdiskFilter#sslvpn_log_auth}
  */
  readonly sslvpnLogAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#sslvpn_log_session LogdiskFilter#sslvpn_log_session}
  */
  readonly sslvpnLogSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#system LogdiskFilter#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#vdomparam LogdiskFilter#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#vip_ssl LogdiskFilter#vip_ssl}
  */
  readonly vipSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#voip LogdiskFilter#voip}
  */
  readonly voip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#wan_opt LogdiskFilter#wan_opt}
  */
  readonly wanOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#wireless_activity LogdiskFilter#wireless_activity}
  */
  readonly wirelessActivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#ztna_traffic LogdiskFilter#ztna_traffic}
  */
  readonly ztnaTraffic?: string;
  /**
  * free_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#free_style LogdiskFilter#free_style}
  */
  readonly freeStyle?: LogdiskFilterFreeStyle[] | cdktf.IResolvable;
}
export interface LogdiskFilterFreeStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#category LogdiskFilter#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#filter LogdiskFilter#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#filter_type LogdiskFilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#id LogdiskFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function logdiskFilterFreeStyleToTerraform(struct?: LogdiskFilterFreeStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    filter: cdktf.stringToTerraform(struct!.filter),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function logdiskFilterFreeStyleToHclTerraform(struct?: LogdiskFilterFreeStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogdiskFilterFreeStyleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogdiskFilterFreeStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogdiskFilterFreeStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._filter = undefined;
      this._filterType = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._filter = value.filter;
      this._filterType = value.filterType;
      this._id = value.id;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // id - computed: true, optional: true, required: false
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
}

export class LogdiskFilterFreeStyleList extends cdktf.ComplexList {
  public internalValue? : LogdiskFilterFreeStyle[] | cdktf.IResolvable

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
  public get(index: number): LogdiskFilterFreeStyleOutputReference {
    return new LogdiskFilterFreeStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter fortios_logdisk_filter}
*/
export class LogdiskFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_logdisk_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogdiskFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogdiskFilter to import
  * @param importFromId The id of the existing LogdiskFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogdiskFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_logdisk_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/logdisk_filter fortios_logdisk_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogdiskFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogdiskFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_logdisk_filter',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._anomaly = config.anomaly;
    this._auth = config.auth;
    this._cpuMemoryUsage = config.cpuMemoryUsage;
    this._debug = config.debug;
    this._dhcp = config.dhcp;
    this._dlpArchive = config.dlpArchive;
    this._dns = config.dns;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._event = config.event;
    this._filter = config.filter;
    this._filterType = config.filterType;
    this._fortiSwitch = config.fortiSwitch;
    this._forwardTraffic = config.forwardTraffic;
    this._getAllTables = config.fetchAllTables;
    this._gtp = config.gtp;
    this._ha = config.ha;
    this._httpTransaction = config.httpTransaction;
    this._id = config.id;
    this._ipsec = config.ipsec;
    this._ldbMonitor = config.ldbMonitor;
    this._localTraffic = config.localTraffic;
    this._multicastTraffic = config.multicastTraffic;
    this._netscanDiscovery = config.netscanDiscovery;
    this._netscanVulnerability = config.netscanVulnerability;
    this._pattern = config.pattern;
    this._ppp = config.ppp;
    this._radius = config.radius;
    this._severity = config.severity;
    this._snifferTraffic = config.snifferTraffic;
    this._ssh = config.ssh;
    this._sslvpnLogAdm = config.sslvpnLogAdm;
    this._sslvpnLogAuth = config.sslvpnLogAuth;
    this._sslvpnLogSession = config.sslvpnLogSession;
    this._system = config.systemAttribute;
    this._vdomparam = config.vdomparam;
    this._vipSsl = config.vipSsl;
    this._voip = config.voip;
    this._wanOpt = config.wanOpt;
    this._wirelessActivity = config.wirelessActivity;
    this._ztnaTraffic = config.ztnaTraffic;
    this._freeStyle.internalValue = config.freeStyle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: false, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // anomaly - computed: true, optional: true, required: false
  private _anomaly?: string; 
  public get anomaly() {
    return this.getStringAttribute('anomaly');
  }
  public set anomaly(value: string) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // cpu_memory_usage - computed: false, optional: true, required: false
  private _cpuMemoryUsage?: string; 
  public get cpuMemoryUsage() {
    return this.getStringAttribute('cpu_memory_usage');
  }
  public set cpuMemoryUsage(value: string) {
    this._cpuMemoryUsage = value;
  }
  public resetCpuMemoryUsage() {
    this._cpuMemoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMemoryUsageInput() {
    return this._cpuMemoryUsage;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dlp_archive - computed: true, optional: true, required: false
  private _dlpArchive?: string; 
  public get dlpArchive() {
    return this.getStringAttribute('dlp_archive');
  }
  public set dlpArchive(value: string) {
    this._dlpArchive = value;
  }
  public resetDlpArchive() {
    this._dlpArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpArchiveInput() {
    return this._dlpArchive;
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

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // forti_switch - computed: true, optional: true, required: false
  private _fortiSwitch?: string; 
  public get fortiSwitch() {
    return this.getStringAttribute('forti_switch');
  }
  public set fortiSwitch(value: string) {
    this._fortiSwitch = value;
  }
  public resetFortiSwitch() {
    this._fortiSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiSwitchInput() {
    return this._fortiSwitch;
  }

  // forward_traffic - computed: true, optional: true, required: false
  private _forwardTraffic?: string; 
  public get forwardTraffic() {
    return this.getStringAttribute('forward_traffic');
  }
  public set forwardTraffic(value: string) {
    this._forwardTraffic = value;
  }
  public resetForwardTraffic() {
    this._forwardTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficInput() {
    return this._forwardTraffic;
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

  // gtp - computed: true, optional: true, required: false
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // ha - computed: false, optional: true, required: false
  private _ha?: string; 
  public get ha() {
    return this.getStringAttribute('ha');
  }
  public set ha(value: string) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
  }

  // http_transaction - computed: true, optional: true, required: false
  private _httpTransaction?: string; 
  public get httpTransaction() {
    return this.getStringAttribute('http_transaction');
  }
  public set httpTransaction(value: string) {
    this._httpTransaction = value;
  }
  public resetHttpTransaction() {
    this._httpTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTransactionInput() {
    return this._httpTransaction;
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

  // ipsec - computed: false, optional: true, required: false
  private _ipsec?: string; 
  public get ipsec() {
    return this.getStringAttribute('ipsec');
  }
  public set ipsec(value: string) {
    this._ipsec = value;
  }
  public resetIpsec() {
    this._ipsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInput() {
    return this._ipsec;
  }

  // ldb_monitor - computed: false, optional: true, required: false
  private _ldbMonitor?: string; 
  public get ldbMonitor() {
    return this.getStringAttribute('ldb_monitor');
  }
  public set ldbMonitor(value: string) {
    this._ldbMonitor = value;
  }
  public resetLdbMonitor() {
    this._ldbMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldbMonitorInput() {
    return this._ldbMonitor;
  }

  // local_traffic - computed: true, optional: true, required: false
  private _localTraffic?: string; 
  public get localTraffic() {
    return this.getStringAttribute('local_traffic');
  }
  public set localTraffic(value: string) {
    this._localTraffic = value;
  }
  public resetLocalTraffic() {
    this._localTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTrafficInput() {
    return this._localTraffic;
  }

  // multicast_traffic - computed: true, optional: true, required: false
  private _multicastTraffic?: string; 
  public get multicastTraffic() {
    return this.getStringAttribute('multicast_traffic');
  }
  public set multicastTraffic(value: string) {
    this._multicastTraffic = value;
  }
  public resetMulticastTraffic() {
    this._multicastTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTrafficInput() {
    return this._multicastTraffic;
  }

  // netscan_discovery - computed: false, optional: true, required: false
  private _netscanDiscovery?: string; 
  public get netscanDiscovery() {
    return this.getStringAttribute('netscan_discovery');
  }
  public set netscanDiscovery(value: string) {
    this._netscanDiscovery = value;
  }
  public resetNetscanDiscovery() {
    this._netscanDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netscanDiscoveryInput() {
    return this._netscanDiscovery;
  }

  // netscan_vulnerability - computed: false, optional: true, required: false
  private _netscanVulnerability?: string; 
  public get netscanVulnerability() {
    return this.getStringAttribute('netscan_vulnerability');
  }
  public set netscanVulnerability(value: string) {
    this._netscanVulnerability = value;
  }
  public resetNetscanVulnerability() {
    this._netscanVulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netscanVulnerabilityInput() {
    return this._netscanVulnerability;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // ppp - computed: false, optional: true, required: false
  private _ppp?: string; 
  public get ppp() {
    return this.getStringAttribute('ppp');
  }
  public set ppp(value: string) {
    this._ppp = value;
  }
  public resetPpp() {
    this._ppp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppInput() {
    return this._ppp;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // sniffer_traffic - computed: true, optional: true, required: false
  private _snifferTraffic?: string; 
  public get snifferTraffic() {
    return this.getStringAttribute('sniffer_traffic');
  }
  public set snifferTraffic(value: string) {
    this._snifferTraffic = value;
  }
  public resetSnifferTraffic() {
    this._snifferTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snifferTrafficInput() {
    return this._snifferTraffic;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: string; 
  public get ssh() {
    return this.getStringAttribute('ssh');
  }
  public set ssh(value: string) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // sslvpn_log_adm - computed: false, optional: true, required: false
  private _sslvpnLogAdm?: string; 
  public get sslvpnLogAdm() {
    return this.getStringAttribute('sslvpn_log_adm');
  }
  public set sslvpnLogAdm(value: string) {
    this._sslvpnLogAdm = value;
  }
  public resetSslvpnLogAdm() {
    this._sslvpnLogAdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnLogAdmInput() {
    return this._sslvpnLogAdm;
  }

  // sslvpn_log_auth - computed: false, optional: true, required: false
  private _sslvpnLogAuth?: string; 
  public get sslvpnLogAuth() {
    return this.getStringAttribute('sslvpn_log_auth');
  }
  public set sslvpnLogAuth(value: string) {
    this._sslvpnLogAuth = value;
  }
  public resetSslvpnLogAuth() {
    this._sslvpnLogAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnLogAuthInput() {
    return this._sslvpnLogAuth;
  }

  // sslvpn_log_session - computed: false, optional: true, required: false
  private _sslvpnLogSession?: string; 
  public get sslvpnLogSession() {
    return this.getStringAttribute('sslvpn_log_session');
  }
  public set sslvpnLogSession(value: string) {
    this._sslvpnLogSession = value;
  }
  public resetSslvpnLogSession() {
    this._sslvpnLogSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnLogSessionInput() {
    return this._sslvpnLogSession;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
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

  // vip_ssl - computed: false, optional: true, required: false
  private _vipSsl?: string; 
  public get vipSsl() {
    return this.getStringAttribute('vip_ssl');
  }
  public set vipSsl(value: string) {
    this._vipSsl = value;
  }
  public resetVipSsl() {
    this._vipSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipSslInput() {
    return this._vipSsl;
  }

  // voip - computed: true, optional: true, required: false
  private _voip?: string; 
  public get voip() {
    return this.getStringAttribute('voip');
  }
  public set voip(value: string) {
    this._voip = value;
  }
  public resetVoip() {
    this._voip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipInput() {
    return this._voip;
  }

  // wan_opt - computed: false, optional: true, required: false
  private _wanOpt?: string; 
  public get wanOpt() {
    return this.getStringAttribute('wan_opt');
  }
  public set wanOpt(value: string) {
    this._wanOpt = value;
  }
  public resetWanOpt() {
    this._wanOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanOptInput() {
    return this._wanOpt;
  }

  // wireless_activity - computed: false, optional: true, required: false
  private _wirelessActivity?: string; 
  public get wirelessActivity() {
    return this.getStringAttribute('wireless_activity');
  }
  public set wirelessActivity(value: string) {
    this._wirelessActivity = value;
  }
  public resetWirelessActivity() {
    this._wirelessActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessActivityInput() {
    return this._wirelessActivity;
  }

  // ztna_traffic - computed: true, optional: true, required: false
  private _ztnaTraffic?: string; 
  public get ztnaTraffic() {
    return this.getStringAttribute('ztna_traffic');
  }
  public set ztnaTraffic(value: string) {
    this._ztnaTraffic = value;
  }
  public resetZtnaTraffic() {
    this._ztnaTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaTrafficInput() {
    return this._ztnaTraffic;
  }

  // free_style - computed: false, optional: true, required: false
  private _freeStyle = new LogdiskFilterFreeStyleList(this, "free_style", false);
  public get freeStyle() {
    return this._freeStyle;
  }
  public putFreeStyle(value: LogdiskFilterFreeStyle[] | cdktf.IResolvable) {
    this._freeStyle.internalValue = value;
  }
  public resetFreeStyle() {
    this._freeStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeStyleInput() {
    return this._freeStyle.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.stringToTerraform(this._admin),
      anomaly: cdktf.stringToTerraform(this._anomaly),
      auth: cdktf.stringToTerraform(this._auth),
      cpu_memory_usage: cdktf.stringToTerraform(this._cpuMemoryUsage),
      debug: cdktf.stringToTerraform(this._debug),
      dhcp: cdktf.stringToTerraform(this._dhcp),
      dlp_archive: cdktf.stringToTerraform(this._dlpArchive),
      dns: cdktf.stringToTerraform(this._dns),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      event: cdktf.stringToTerraform(this._event),
      filter: cdktf.stringToTerraform(this._filter),
      filter_type: cdktf.stringToTerraform(this._filterType),
      forti_switch: cdktf.stringToTerraform(this._fortiSwitch),
      forward_traffic: cdktf.stringToTerraform(this._forwardTraffic),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      gtp: cdktf.stringToTerraform(this._gtp),
      ha: cdktf.stringToTerraform(this._ha),
      http_transaction: cdktf.stringToTerraform(this._httpTransaction),
      id: cdktf.stringToTerraform(this._id),
      ipsec: cdktf.stringToTerraform(this._ipsec),
      ldb_monitor: cdktf.stringToTerraform(this._ldbMonitor),
      local_traffic: cdktf.stringToTerraform(this._localTraffic),
      multicast_traffic: cdktf.stringToTerraform(this._multicastTraffic),
      netscan_discovery: cdktf.stringToTerraform(this._netscanDiscovery),
      netscan_vulnerability: cdktf.stringToTerraform(this._netscanVulnerability),
      pattern: cdktf.stringToTerraform(this._pattern),
      ppp: cdktf.stringToTerraform(this._ppp),
      radius: cdktf.stringToTerraform(this._radius),
      severity: cdktf.stringToTerraform(this._severity),
      sniffer_traffic: cdktf.stringToTerraform(this._snifferTraffic),
      ssh: cdktf.stringToTerraform(this._ssh),
      sslvpn_log_adm: cdktf.stringToTerraform(this._sslvpnLogAdm),
      sslvpn_log_auth: cdktf.stringToTerraform(this._sslvpnLogAuth),
      sslvpn_log_session: cdktf.stringToTerraform(this._sslvpnLogSession),
      system: cdktf.stringToTerraform(this._system),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vip_ssl: cdktf.stringToTerraform(this._vipSsl),
      voip: cdktf.stringToTerraform(this._voip),
      wan_opt: cdktf.stringToTerraform(this._wanOpt),
      wireless_activity: cdktf.stringToTerraform(this._wirelessActivity),
      ztna_traffic: cdktf.stringToTerraform(this._ztnaTraffic),
      free_style: cdktf.listMapper(logdiskFilterFreeStyleToTerraform, true)(this._freeStyle.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.stringToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anomaly: {
        value: cdktf.stringToHclTerraform(this._anomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_memory_usage: {
        value: cdktf.stringToHclTerraform(this._cpuMemoryUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.stringToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp: {
        value: cdktf.stringToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_archive: {
        value: cdktf.stringToHclTerraform(this._dlpArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
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
      event: {
        value: cdktf.stringToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forti_switch: {
        value: cdktf.stringToHclTerraform(this._fortiSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_traffic: {
        value: cdktf.stringToHclTerraform(this._forwardTraffic),
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
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha: {
        value: cdktf.stringToHclTerraform(this._ha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_transaction: {
        value: cdktf.stringToHclTerraform(this._httpTransaction),
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
      ipsec: {
        value: cdktf.stringToHclTerraform(this._ipsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldb_monitor: {
        value: cdktf.stringToHclTerraform(this._ldbMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_traffic: {
        value: cdktf.stringToHclTerraform(this._localTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_traffic: {
        value: cdktf.stringToHclTerraform(this._multicastTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netscan_discovery: {
        value: cdktf.stringToHclTerraform(this._netscanDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netscan_vulnerability: {
        value: cdktf.stringToHclTerraform(this._netscanVulnerability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp: {
        value: cdktf.stringToHclTerraform(this._ppp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius: {
        value: cdktf.stringToHclTerraform(this._radius),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sniffer_traffic: {
        value: cdktf.stringToHclTerraform(this._snifferTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh: {
        value: cdktf.stringToHclTerraform(this._ssh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_log_adm: {
        value: cdktf.stringToHclTerraform(this._sslvpnLogAdm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_log_auth: {
        value: cdktf.stringToHclTerraform(this._sslvpnLogAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslvpn_log_session: {
        value: cdktf.stringToHclTerraform(this._sslvpnLogSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
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
      vip_ssl: {
        value: cdktf.stringToHclTerraform(this._vipSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voip: {
        value: cdktf.stringToHclTerraform(this._voip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_opt: {
        value: cdktf.stringToHclTerraform(this._wanOpt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_activity: {
        value: cdktf.stringToHclTerraform(this._wirelessActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_traffic: {
        value: cdktf.stringToHclTerraform(this._ztnaTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      free_style: {
        value: cdktf.listMapperHcl(logdiskFilterFreeStyleToHclTerraform, true)(this._freeStyle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogdiskFilterFreeStyleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
