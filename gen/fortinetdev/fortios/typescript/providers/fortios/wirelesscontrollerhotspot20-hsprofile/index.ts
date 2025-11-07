// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wirelesscontrollerhotspot20HsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#access_network_asra Wirelesscontrollerhotspot20Hsprofile#access_network_asra}
  */
  readonly accessNetworkAsra?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#access_network_esr Wirelesscontrollerhotspot20Hsprofile#access_network_esr}
  */
  readonly accessNetworkEsr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#access_network_internet Wirelesscontrollerhotspot20Hsprofile#access_network_internet}
  */
  readonly accessNetworkInternet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#access_network_type Wirelesscontrollerhotspot20Hsprofile#access_network_type}
  */
  readonly accessNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#access_network_uesa Wirelesscontrollerhotspot20Hsprofile#access_network_uesa}
  */
  readonly accessNetworkUesa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#advice_of_charge Wirelesscontrollerhotspot20Hsprofile#advice_of_charge}
  */
  readonly adviceOfCharge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#anqp_domain_id Wirelesscontrollerhotspot20Hsprofile#anqp_domain_id}
  */
  readonly anqpDomainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#bss_transition Wirelesscontrollerhotspot20Hsprofile#bss_transition}
  */
  readonly bssTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#conn_cap Wirelesscontrollerhotspot20Hsprofile#conn_cap}
  */
  readonly connCap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#deauth_request_timeout Wirelesscontrollerhotspot20Hsprofile#deauth_request_timeout}
  */
  readonly deauthRequestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#dgaf Wirelesscontrollerhotspot20Hsprofile#dgaf}
  */
  readonly dgaf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#domain_name Wirelesscontrollerhotspot20Hsprofile#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#dynamic_sort_subtable Wirelesscontrollerhotspot20Hsprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#gas_comeback_delay Wirelesscontrollerhotspot20Hsprofile#gas_comeback_delay}
  */
  readonly gasComebackDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#gas_fragmentation_limit Wirelesscontrollerhotspot20Hsprofile#gas_fragmentation_limit}
  */
  readonly gasFragmentationLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#get_all_tables Wirelesscontrollerhotspot20Hsprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#hessid Wirelesscontrollerhotspot20Hsprofile#hessid}
  */
  readonly hessid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#id Wirelesscontrollerhotspot20Hsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#ip_addr_type Wirelesscontrollerhotspot20Hsprofile#ip_addr_type}
  */
  readonly ipAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#l2tif Wirelesscontrollerhotspot20Hsprofile#l2tif}
  */
  readonly l2Tif?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#n3gpp_plmn Wirelesscontrollerhotspot20Hsprofile#n3gpp_plmn}
  */
  readonly n3GppPlmn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#nai_realm Wirelesscontrollerhotspot20Hsprofile#nai_realm}
  */
  readonly naiRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#name Wirelesscontrollerhotspot20Hsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#network_auth Wirelesscontrollerhotspot20Hsprofile#network_auth}
  */
  readonly networkAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#oper_friendly_name Wirelesscontrollerhotspot20Hsprofile#oper_friendly_name}
  */
  readonly operFriendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#oper_icon Wirelesscontrollerhotspot20Hsprofile#oper_icon}
  */
  readonly operIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#osu_provider_nai Wirelesscontrollerhotspot20Hsprofile#osu_provider_nai}
  */
  readonly osuProviderNai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#osu_ssid Wirelesscontrollerhotspot20Hsprofile#osu_ssid}
  */
  readonly osuSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#pame_bi Wirelesscontrollerhotspot20Hsprofile#pame_bi}
  */
  readonly pameBi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#proxy_arp Wirelesscontrollerhotspot20Hsprofile#proxy_arp}
  */
  readonly proxyArp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#qos_map Wirelesscontrollerhotspot20Hsprofile#qos_map}
  */
  readonly qosMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#release Wirelesscontrollerhotspot20Hsprofile#release}
  */
  readonly release?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#roaming_consortium Wirelesscontrollerhotspot20Hsprofile#roaming_consortium}
  */
  readonly roamingConsortium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#terms_and_conditions Wirelesscontrollerhotspot20Hsprofile#terms_and_conditions}
  */
  readonly termsAndConditions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#vdomparam Wirelesscontrollerhotspot20Hsprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#venue_group Wirelesscontrollerhotspot20Hsprofile#venue_group}
  */
  readonly venueGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#venue_name Wirelesscontrollerhotspot20Hsprofile#venue_name}
  */
  readonly venueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#venue_type Wirelesscontrollerhotspot20Hsprofile#venue_type}
  */
  readonly venueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#venue_url Wirelesscontrollerhotspot20Hsprofile#venue_url}
  */
  readonly venueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wan_metrics Wirelesscontrollerhotspot20Hsprofile#wan_metrics}
  */
  readonly wanMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wba_charging_currency Wirelesscontrollerhotspot20Hsprofile#wba_charging_currency}
  */
  readonly wbaChargingCurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wba_charging_rate Wirelesscontrollerhotspot20Hsprofile#wba_charging_rate}
  */
  readonly wbaChargingRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wba_data_clearing_provider Wirelesscontrollerhotspot20Hsprofile#wba_data_clearing_provider}
  */
  readonly wbaDataClearingProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wba_financial_clearing_provider Wirelesscontrollerhotspot20Hsprofile#wba_financial_clearing_provider}
  */
  readonly wbaFinancialClearingProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wba_open_roaming Wirelesscontrollerhotspot20Hsprofile#wba_open_roaming}
  */
  readonly wbaOpenRoaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#wnm_sleep_mode Wirelesscontrollerhotspot20Hsprofile#wnm_sleep_mode}
  */
  readonly wnmSleepMode?: string;
  /**
  * osu_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#osu_provider Wirelesscontrollerhotspot20Hsprofile#osu_provider}
  */
  readonly osuProvider?: Wirelesscontrollerhotspot20HsprofileOsuProvider[] | cdktf.IResolvable;
}
export interface Wirelesscontrollerhotspot20HsprofileOsuProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#name Wirelesscontrollerhotspot20Hsprofile#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerhotspot20HsprofileOsuProviderToTerraform(struct?: Wirelesscontrollerhotspot20HsprofileOsuProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerhotspot20HsprofileOsuProviderToHclTerraform(struct?: Wirelesscontrollerhotspot20HsprofileOsuProvider | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wirelesscontrollerhotspot20HsprofileOsuProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wirelesscontrollerhotspot20HsprofileOsuProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wirelesscontrollerhotspot20HsprofileOsuProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wirelesscontrollerhotspot20HsprofileOsuProviderList extends cdktf.ComplexList {
  public internalValue? : Wirelesscontrollerhotspot20HsprofileOsuProvider[] | cdktf.IResolvable

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
  public get(index: number): Wirelesscontrollerhotspot20HsprofileOsuProviderOutputReference {
    return new Wirelesscontrollerhotspot20HsprofileOsuProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile fortios_wirelesscontrollerhotspot20_hsprofile}
*/
export class Wirelesscontrollerhotspot20Hsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontrollerhotspot20_hsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wirelesscontrollerhotspot20Hsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wirelesscontrollerhotspot20Hsprofile to import
  * @param importFromId The id of the existing Wirelesscontrollerhotspot20Hsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wirelesscontrollerhotspot20Hsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontrollerhotspot20_hsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_hsprofile fortios_wirelesscontrollerhotspot20_hsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wirelesscontrollerhotspot20HsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Wirelesscontrollerhotspot20HsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontrollerhotspot20_hsprofile',
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
    this._accessNetworkAsra = config.accessNetworkAsra;
    this._accessNetworkEsr = config.accessNetworkEsr;
    this._accessNetworkInternet = config.accessNetworkInternet;
    this._accessNetworkType = config.accessNetworkType;
    this._accessNetworkUesa = config.accessNetworkUesa;
    this._adviceOfCharge = config.adviceOfCharge;
    this._anqpDomainId = config.anqpDomainId;
    this._bssTransition = config.bssTransition;
    this._connCap = config.connCap;
    this._deauthRequestTimeout = config.deauthRequestTimeout;
    this._dgaf = config.dgaf;
    this._domainName = config.domainName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._gasComebackDelay = config.gasComebackDelay;
    this._gasFragmentationLimit = config.gasFragmentationLimit;
    this._getAllTables = config.fetchAllTables;
    this._hessid = config.hessid;
    this._id = config.id;
    this._ipAddrType = config.ipAddrType;
    this._l2Tif = config.l2Tif;
    this._n3GppPlmn = config.n3GppPlmn;
    this._naiRealm = config.naiRealm;
    this._name = config.name;
    this._networkAuth = config.networkAuth;
    this._operFriendlyName = config.operFriendlyName;
    this._operIcon = config.operIcon;
    this._osuProviderNai = config.osuProviderNai;
    this._osuSsid = config.osuSsid;
    this._pameBi = config.pameBi;
    this._proxyArp = config.proxyArp;
    this._qosMap = config.qosMap;
    this._release = config.release;
    this._roamingConsortium = config.roamingConsortium;
    this._termsAndConditions = config.termsAndConditions;
    this._vdomparam = config.vdomparam;
    this._venueGroup = config.venueGroup;
    this._venueName = config.venueName;
    this._venueType = config.venueType;
    this._venueUrl = config.venueUrl;
    this._wanMetrics = config.wanMetrics;
    this._wbaChargingCurrency = config.wbaChargingCurrency;
    this._wbaChargingRate = config.wbaChargingRate;
    this._wbaDataClearingProvider = config.wbaDataClearingProvider;
    this._wbaFinancialClearingProvider = config.wbaFinancialClearingProvider;
    this._wbaOpenRoaming = config.wbaOpenRoaming;
    this._wnmSleepMode = config.wnmSleepMode;
    this._osuProvider.internalValue = config.osuProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_network_asra - computed: true, optional: true, required: false
  private _accessNetworkAsra?: string; 
  public get accessNetworkAsra() {
    return this.getStringAttribute('access_network_asra');
  }
  public set accessNetworkAsra(value: string) {
    this._accessNetworkAsra = value;
  }
  public resetAccessNetworkAsra() {
    this._accessNetworkAsra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkAsraInput() {
    return this._accessNetworkAsra;
  }

  // access_network_esr - computed: true, optional: true, required: false
  private _accessNetworkEsr?: string; 
  public get accessNetworkEsr() {
    return this.getStringAttribute('access_network_esr');
  }
  public set accessNetworkEsr(value: string) {
    this._accessNetworkEsr = value;
  }
  public resetAccessNetworkEsr() {
    this._accessNetworkEsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkEsrInput() {
    return this._accessNetworkEsr;
  }

  // access_network_internet - computed: true, optional: true, required: false
  private _accessNetworkInternet?: string; 
  public get accessNetworkInternet() {
    return this.getStringAttribute('access_network_internet');
  }
  public set accessNetworkInternet(value: string) {
    this._accessNetworkInternet = value;
  }
  public resetAccessNetworkInternet() {
    this._accessNetworkInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkInternetInput() {
    return this._accessNetworkInternet;
  }

  // access_network_type - computed: true, optional: true, required: false
  private _accessNetworkType?: string; 
  public get accessNetworkType() {
    return this.getStringAttribute('access_network_type');
  }
  public set accessNetworkType(value: string) {
    this._accessNetworkType = value;
  }
  public resetAccessNetworkType() {
    this._accessNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkTypeInput() {
    return this._accessNetworkType;
  }

  // access_network_uesa - computed: true, optional: true, required: false
  private _accessNetworkUesa?: string; 
  public get accessNetworkUesa() {
    return this.getStringAttribute('access_network_uesa');
  }
  public set accessNetworkUesa(value: string) {
    this._accessNetworkUesa = value;
  }
  public resetAccessNetworkUesa() {
    this._accessNetworkUesa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkUesaInput() {
    return this._accessNetworkUesa;
  }

  // advice_of_charge - computed: false, optional: true, required: false
  private _adviceOfCharge?: string; 
  public get adviceOfCharge() {
    return this.getStringAttribute('advice_of_charge');
  }
  public set adviceOfCharge(value: string) {
    this._adviceOfCharge = value;
  }
  public resetAdviceOfCharge() {
    this._adviceOfCharge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adviceOfChargeInput() {
    return this._adviceOfCharge;
  }

  // anqp_domain_id - computed: false, optional: true, required: false
  private _anqpDomainId?: number; 
  public get anqpDomainId() {
    return this.getNumberAttribute('anqp_domain_id');
  }
  public set anqpDomainId(value: number) {
    this._anqpDomainId = value;
  }
  public resetAnqpDomainId() {
    this._anqpDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anqpDomainIdInput() {
    return this._anqpDomainId;
  }

  // bss_transition - computed: true, optional: true, required: false
  private _bssTransition?: string; 
  public get bssTransition() {
    return this.getStringAttribute('bss_transition');
  }
  public set bssTransition(value: string) {
    this._bssTransition = value;
  }
  public resetBssTransition() {
    this._bssTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bssTransitionInput() {
    return this._bssTransition;
  }

  // conn_cap - computed: false, optional: true, required: false
  private _connCap?: string; 
  public get connCap() {
    return this.getStringAttribute('conn_cap');
  }
  public set connCap(value: string) {
    this._connCap = value;
  }
  public resetConnCap() {
    this._connCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCapInput() {
    return this._connCap;
  }

  // deauth_request_timeout - computed: true, optional: true, required: false
  private _deauthRequestTimeout?: number; 
  public get deauthRequestTimeout() {
    return this.getNumberAttribute('deauth_request_timeout');
  }
  public set deauthRequestTimeout(value: number) {
    this._deauthRequestTimeout = value;
  }
  public resetDeauthRequestTimeout() {
    this._deauthRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deauthRequestTimeoutInput() {
    return this._deauthRequestTimeout;
  }

  // dgaf - computed: true, optional: true, required: false
  private _dgaf?: string; 
  public get dgaf() {
    return this.getStringAttribute('dgaf');
  }
  public set dgaf(value: string) {
    this._dgaf = value;
  }
  public resetDgaf() {
    this._dgaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgafInput() {
    return this._dgaf;
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

  // gas_comeback_delay - computed: true, optional: true, required: false
  private _gasComebackDelay?: number; 
  public get gasComebackDelay() {
    return this.getNumberAttribute('gas_comeback_delay');
  }
  public set gasComebackDelay(value: number) {
    this._gasComebackDelay = value;
  }
  public resetGasComebackDelay() {
    this._gasComebackDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gasComebackDelayInput() {
    return this._gasComebackDelay;
  }

  // gas_fragmentation_limit - computed: true, optional: true, required: false
  private _gasFragmentationLimit?: number; 
  public get gasFragmentationLimit() {
    return this.getNumberAttribute('gas_fragmentation_limit');
  }
  public set gasFragmentationLimit(value: number) {
    this._gasFragmentationLimit = value;
  }
  public resetGasFragmentationLimit() {
    this._gasFragmentationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gasFragmentationLimitInput() {
    return this._gasFragmentationLimit;
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

  // hessid - computed: true, optional: true, required: false
  private _hessid?: string; 
  public get hessid() {
    return this.getStringAttribute('hessid');
  }
  public set hessid(value: string) {
    this._hessid = value;
  }
  public resetHessid() {
    this._hessid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hessidInput() {
    return this._hessid;
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

  // ip_addr_type - computed: false, optional: true, required: false
  private _ipAddrType?: string; 
  public get ipAddrType() {
    return this.getStringAttribute('ip_addr_type');
  }
  public set ipAddrType(value: string) {
    this._ipAddrType = value;
  }
  public resetIpAddrType() {
    this._ipAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrTypeInput() {
    return this._ipAddrType;
  }

  // l2tif - computed: true, optional: true, required: false
  private _l2Tif?: string; 
  public get l2Tif() {
    return this.getStringAttribute('l2tif');
  }
  public set l2Tif(value: string) {
    this._l2Tif = value;
  }
  public resetL2Tif() {
    this._l2Tif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TifInput() {
    return this._l2Tif;
  }

  // n3gpp_plmn - computed: false, optional: true, required: false
  private _n3GppPlmn?: string; 
  public get n3GppPlmn() {
    return this.getStringAttribute('n3gpp_plmn');
  }
  public set n3GppPlmn(value: string) {
    this._n3GppPlmn = value;
  }
  public resetN3GppPlmn() {
    this._n3GppPlmn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n3GppPlmnInput() {
    return this._n3GppPlmn;
  }

  // nai_realm - computed: false, optional: true, required: false
  private _naiRealm?: string; 
  public get naiRealm() {
    return this.getStringAttribute('nai_realm');
  }
  public set naiRealm(value: string) {
    this._naiRealm = value;
  }
  public resetNaiRealm() {
    this._naiRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naiRealmInput() {
    return this._naiRealm;
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

  // network_auth - computed: false, optional: true, required: false
  private _networkAuth?: string; 
  public get networkAuth() {
    return this.getStringAttribute('network_auth');
  }
  public set networkAuth(value: string) {
    this._networkAuth = value;
  }
  public resetNetworkAuth() {
    this._networkAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAuthInput() {
    return this._networkAuth;
  }

  // oper_friendly_name - computed: false, optional: true, required: false
  private _operFriendlyName?: string; 
  public get operFriendlyName() {
    return this.getStringAttribute('oper_friendly_name');
  }
  public set operFriendlyName(value: string) {
    this._operFriendlyName = value;
  }
  public resetOperFriendlyName() {
    this._operFriendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operFriendlyNameInput() {
    return this._operFriendlyName;
  }

  // oper_icon - computed: false, optional: true, required: false
  private _operIcon?: string; 
  public get operIcon() {
    return this.getStringAttribute('oper_icon');
  }
  public set operIcon(value: string) {
    this._operIcon = value;
  }
  public resetOperIcon() {
    this._operIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operIconInput() {
    return this._operIcon;
  }

  // osu_provider_nai - computed: false, optional: true, required: false
  private _osuProviderNai?: string; 
  public get osuProviderNai() {
    return this.getStringAttribute('osu_provider_nai');
  }
  public set osuProviderNai(value: string) {
    this._osuProviderNai = value;
  }
  public resetOsuProviderNai() {
    this._osuProviderNai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuProviderNaiInput() {
    return this._osuProviderNai;
  }

  // osu_ssid - computed: false, optional: true, required: false
  private _osuSsid?: string; 
  public get osuSsid() {
    return this.getStringAttribute('osu_ssid');
  }
  public set osuSsid(value: string) {
    this._osuSsid = value;
  }
  public resetOsuSsid() {
    this._osuSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuSsidInput() {
    return this._osuSsid;
  }

  // pame_bi - computed: true, optional: true, required: false
  private _pameBi?: string; 
  public get pameBi() {
    return this.getStringAttribute('pame_bi');
  }
  public set pameBi(value: string) {
    this._pameBi = value;
  }
  public resetPameBi() {
    this._pameBi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pameBiInput() {
    return this._pameBi;
  }

  // proxy_arp - computed: true, optional: true, required: false
  private _proxyArp?: string; 
  public get proxyArp() {
    return this.getStringAttribute('proxy_arp');
  }
  public set proxyArp(value: string) {
    this._proxyArp = value;
  }
  public resetProxyArp() {
    this._proxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp;
  }

  // qos_map - computed: false, optional: true, required: false
  private _qosMap?: string; 
  public get qosMap() {
    return this.getStringAttribute('qos_map');
  }
  public set qosMap(value: string) {
    this._qosMap = value;
  }
  public resetQosMap() {
    this._qosMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMapInput() {
    return this._qosMap;
  }

  // release - computed: true, optional: true, required: false
  private _release?: number; 
  public get release() {
    return this.getNumberAttribute('release');
  }
  public set release(value: number) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // roaming_consortium - computed: false, optional: true, required: false
  private _roamingConsortium?: string; 
  public get roamingConsortium() {
    return this.getStringAttribute('roaming_consortium');
  }
  public set roamingConsortium(value: string) {
    this._roamingConsortium = value;
  }
  public resetRoamingConsortium() {
    this._roamingConsortium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingConsortiumInput() {
    return this._roamingConsortium;
  }

  // terms_and_conditions - computed: false, optional: true, required: false
  private _termsAndConditions?: string; 
  public get termsAndConditions() {
    return this.getStringAttribute('terms_and_conditions');
  }
  public set termsAndConditions(value: string) {
    this._termsAndConditions = value;
  }
  public resetTermsAndConditions() {
    this._termsAndConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsAndConditionsInput() {
    return this._termsAndConditions;
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

  // venue_group - computed: true, optional: true, required: false
  private _venueGroup?: string; 
  public get venueGroup() {
    return this.getStringAttribute('venue_group');
  }
  public set venueGroup(value: string) {
    this._venueGroup = value;
  }
  public resetVenueGroup() {
    this._venueGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueGroupInput() {
    return this._venueGroup;
  }

  // venue_name - computed: false, optional: true, required: false
  private _venueName?: string; 
  public get venueName() {
    return this.getStringAttribute('venue_name');
  }
  public set venueName(value: string) {
    this._venueName = value;
  }
  public resetVenueName() {
    this._venueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueNameInput() {
    return this._venueName;
  }

  // venue_type - computed: true, optional: true, required: false
  private _venueType?: string; 
  public get venueType() {
    return this.getStringAttribute('venue_type');
  }
  public set venueType(value: string) {
    this._venueType = value;
  }
  public resetVenueType() {
    this._venueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueTypeInput() {
    return this._venueType;
  }

  // venue_url - computed: false, optional: true, required: false
  private _venueUrl?: string; 
  public get venueUrl() {
    return this.getStringAttribute('venue_url');
  }
  public set venueUrl(value: string) {
    this._venueUrl = value;
  }
  public resetVenueUrl() {
    this._venueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueUrlInput() {
    return this._venueUrl;
  }

  // wan_metrics - computed: false, optional: true, required: false
  private _wanMetrics?: string; 
  public get wanMetrics() {
    return this.getStringAttribute('wan_metrics');
  }
  public set wanMetrics(value: string) {
    this._wanMetrics = value;
  }
  public resetWanMetrics() {
    this._wanMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanMetricsInput() {
    return this._wanMetrics;
  }

  // wba_charging_currency - computed: false, optional: true, required: false
  private _wbaChargingCurrency?: string; 
  public get wbaChargingCurrency() {
    return this.getStringAttribute('wba_charging_currency');
  }
  public set wbaChargingCurrency(value: string) {
    this._wbaChargingCurrency = value;
  }
  public resetWbaChargingCurrency() {
    this._wbaChargingCurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbaChargingCurrencyInput() {
    return this._wbaChargingCurrency;
  }

  // wba_charging_rate - computed: false, optional: true, required: false
  private _wbaChargingRate?: number; 
  public get wbaChargingRate() {
    return this.getNumberAttribute('wba_charging_rate');
  }
  public set wbaChargingRate(value: number) {
    this._wbaChargingRate = value;
  }
  public resetWbaChargingRate() {
    this._wbaChargingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbaChargingRateInput() {
    return this._wbaChargingRate;
  }

  // wba_data_clearing_provider - computed: false, optional: true, required: false
  private _wbaDataClearingProvider?: string; 
  public get wbaDataClearingProvider() {
    return this.getStringAttribute('wba_data_clearing_provider');
  }
  public set wbaDataClearingProvider(value: string) {
    this._wbaDataClearingProvider = value;
  }
  public resetWbaDataClearingProvider() {
    this._wbaDataClearingProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbaDataClearingProviderInput() {
    return this._wbaDataClearingProvider;
  }

  // wba_financial_clearing_provider - computed: false, optional: true, required: false
  private _wbaFinancialClearingProvider?: string; 
  public get wbaFinancialClearingProvider() {
    return this.getStringAttribute('wba_financial_clearing_provider');
  }
  public set wbaFinancialClearingProvider(value: string) {
    this._wbaFinancialClearingProvider = value;
  }
  public resetWbaFinancialClearingProvider() {
    this._wbaFinancialClearingProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbaFinancialClearingProviderInput() {
    return this._wbaFinancialClearingProvider;
  }

  // wba_open_roaming - computed: true, optional: true, required: false
  private _wbaOpenRoaming?: string; 
  public get wbaOpenRoaming() {
    return this.getStringAttribute('wba_open_roaming');
  }
  public set wbaOpenRoaming(value: string) {
    this._wbaOpenRoaming = value;
  }
  public resetWbaOpenRoaming() {
    this._wbaOpenRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbaOpenRoamingInput() {
    return this._wbaOpenRoaming;
  }

  // wnm_sleep_mode - computed: true, optional: true, required: false
  private _wnmSleepMode?: string; 
  public get wnmSleepMode() {
    return this.getStringAttribute('wnm_sleep_mode');
  }
  public set wnmSleepMode(value: string) {
    this._wnmSleepMode = value;
  }
  public resetWnmSleepMode() {
    this._wnmSleepMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wnmSleepModeInput() {
    return this._wnmSleepMode;
  }

  // osu_provider - computed: false, optional: true, required: false
  private _osuProvider = new Wirelesscontrollerhotspot20HsprofileOsuProviderList(this, "osu_provider", true);
  public get osuProvider() {
    return this._osuProvider;
  }
  public putOsuProvider(value: Wirelesscontrollerhotspot20HsprofileOsuProvider[] | cdktf.IResolvable) {
    this._osuProvider.internalValue = value;
  }
  public resetOsuProvider() {
    this._osuProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuProviderInput() {
    return this._osuProvider.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_network_asra: cdktf.stringToTerraform(this._accessNetworkAsra),
      access_network_esr: cdktf.stringToTerraform(this._accessNetworkEsr),
      access_network_internet: cdktf.stringToTerraform(this._accessNetworkInternet),
      access_network_type: cdktf.stringToTerraform(this._accessNetworkType),
      access_network_uesa: cdktf.stringToTerraform(this._accessNetworkUesa),
      advice_of_charge: cdktf.stringToTerraform(this._adviceOfCharge),
      anqp_domain_id: cdktf.numberToTerraform(this._anqpDomainId),
      bss_transition: cdktf.stringToTerraform(this._bssTransition),
      conn_cap: cdktf.stringToTerraform(this._connCap),
      deauth_request_timeout: cdktf.numberToTerraform(this._deauthRequestTimeout),
      dgaf: cdktf.stringToTerraform(this._dgaf),
      domain_name: cdktf.stringToTerraform(this._domainName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      gas_comeback_delay: cdktf.numberToTerraform(this._gasComebackDelay),
      gas_fragmentation_limit: cdktf.numberToTerraform(this._gasFragmentationLimit),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hessid: cdktf.stringToTerraform(this._hessid),
      id: cdktf.stringToTerraform(this._id),
      ip_addr_type: cdktf.stringToTerraform(this._ipAddrType),
      l2tif: cdktf.stringToTerraform(this._l2Tif),
      n3gpp_plmn: cdktf.stringToTerraform(this._n3GppPlmn),
      nai_realm: cdktf.stringToTerraform(this._naiRealm),
      name: cdktf.stringToTerraform(this._name),
      network_auth: cdktf.stringToTerraform(this._networkAuth),
      oper_friendly_name: cdktf.stringToTerraform(this._operFriendlyName),
      oper_icon: cdktf.stringToTerraform(this._operIcon),
      osu_provider_nai: cdktf.stringToTerraform(this._osuProviderNai),
      osu_ssid: cdktf.stringToTerraform(this._osuSsid),
      pame_bi: cdktf.stringToTerraform(this._pameBi),
      proxy_arp: cdktf.stringToTerraform(this._proxyArp),
      qos_map: cdktf.stringToTerraform(this._qosMap),
      release: cdktf.numberToTerraform(this._release),
      roaming_consortium: cdktf.stringToTerraform(this._roamingConsortium),
      terms_and_conditions: cdktf.stringToTerraform(this._termsAndConditions),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      venue_group: cdktf.stringToTerraform(this._venueGroup),
      venue_name: cdktf.stringToTerraform(this._venueName),
      venue_type: cdktf.stringToTerraform(this._venueType),
      venue_url: cdktf.stringToTerraform(this._venueUrl),
      wan_metrics: cdktf.stringToTerraform(this._wanMetrics),
      wba_charging_currency: cdktf.stringToTerraform(this._wbaChargingCurrency),
      wba_charging_rate: cdktf.numberToTerraform(this._wbaChargingRate),
      wba_data_clearing_provider: cdktf.stringToTerraform(this._wbaDataClearingProvider),
      wba_financial_clearing_provider: cdktf.stringToTerraform(this._wbaFinancialClearingProvider),
      wba_open_roaming: cdktf.stringToTerraform(this._wbaOpenRoaming),
      wnm_sleep_mode: cdktf.stringToTerraform(this._wnmSleepMode),
      osu_provider: cdktf.listMapper(wirelesscontrollerhotspot20HsprofileOsuProviderToTerraform, true)(this._osuProvider.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_network_asra: {
        value: cdktf.stringToHclTerraform(this._accessNetworkAsra),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_network_esr: {
        value: cdktf.stringToHclTerraform(this._accessNetworkEsr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_network_internet: {
        value: cdktf.stringToHclTerraform(this._accessNetworkInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_network_type: {
        value: cdktf.stringToHclTerraform(this._accessNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_network_uesa: {
        value: cdktf.stringToHclTerraform(this._accessNetworkUesa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advice_of_charge: {
        value: cdktf.stringToHclTerraform(this._adviceOfCharge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anqp_domain_id: {
        value: cdktf.numberToHclTerraform(this._anqpDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bss_transition: {
        value: cdktf.stringToHclTerraform(this._bssTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_cap: {
        value: cdktf.stringToHclTerraform(this._connCap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deauth_request_timeout: {
        value: cdktf.numberToHclTerraform(this._deauthRequestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dgaf: {
        value: cdktf.stringToHclTerraform(this._dgaf),
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
      gas_comeback_delay: {
        value: cdktf.numberToHclTerraform(this._gasComebackDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gas_fragmentation_limit: {
        value: cdktf.numberToHclTerraform(this._gasFragmentationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hessid: {
        value: cdktf.stringToHclTerraform(this._hessid),
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
      ip_addr_type: {
        value: cdktf.stringToHclTerraform(this._ipAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2tif: {
        value: cdktf.stringToHclTerraform(this._l2Tif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n3gpp_plmn: {
        value: cdktf.stringToHclTerraform(this._n3GppPlmn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nai_realm: {
        value: cdktf.stringToHclTerraform(this._naiRealm),
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
      network_auth: {
        value: cdktf.stringToHclTerraform(this._networkAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper_friendly_name: {
        value: cdktf.stringToHclTerraform(this._operFriendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper_icon: {
        value: cdktf.stringToHclTerraform(this._operIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osu_provider_nai: {
        value: cdktf.stringToHclTerraform(this._osuProviderNai),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osu_ssid: {
        value: cdktf.stringToHclTerraform(this._osuSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pame_bi: {
        value: cdktf.stringToHclTerraform(this._pameBi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_arp: {
        value: cdktf.stringToHclTerraform(this._proxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_map: {
        value: cdktf.stringToHclTerraform(this._qosMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.numberToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      roaming_consortium: {
        value: cdktf.stringToHclTerraform(this._roamingConsortium),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terms_and_conditions: {
        value: cdktf.stringToHclTerraform(this._termsAndConditions),
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
      venue_group: {
        value: cdktf.stringToHclTerraform(this._venueGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      venue_name: {
        value: cdktf.stringToHclTerraform(this._venueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      venue_type: {
        value: cdktf.stringToHclTerraform(this._venueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      venue_url: {
        value: cdktf.stringToHclTerraform(this._venueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_metrics: {
        value: cdktf.stringToHclTerraform(this._wanMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wba_charging_currency: {
        value: cdktf.stringToHclTerraform(this._wbaChargingCurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wba_charging_rate: {
        value: cdktf.numberToHclTerraform(this._wbaChargingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wba_data_clearing_provider: {
        value: cdktf.stringToHclTerraform(this._wbaDataClearingProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wba_financial_clearing_provider: {
        value: cdktf.stringToHclTerraform(this._wbaFinancialClearingProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wba_open_roaming: {
        value: cdktf.stringToHclTerraform(this._wbaOpenRoaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wnm_sleep_mode: {
        value: cdktf.stringToHclTerraform(this._wnmSleepMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osu_provider: {
        value: cdktf.listMapperHcl(wirelesscontrollerhotspot20HsprofileOsuProviderToHclTerraform, true)(this._osuProvider.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Wirelesscontrollerhotspot20HsprofileOsuProviderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
