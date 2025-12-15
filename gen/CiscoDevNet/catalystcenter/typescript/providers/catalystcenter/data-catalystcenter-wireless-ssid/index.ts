// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterWirelessSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_ssid#id DataCatalystcenterWirelessSsid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Site ID - only site level Global is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_ssid#site_id DataCatalystcenterWirelessSsid#site_id}
  */
  readonly siteId: string;
}
export interface DataCatalystcenterWirelessSsidMultiPskSettings {
}

export function dataCatalystcenterWirelessSsidMultiPskSettingsToTerraform(struct?: DataCatalystcenterWirelessSsidMultiPskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterWirelessSsidMultiPskSettingsToHclTerraform(struct?: DataCatalystcenterWirelessSsidMultiPskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterWirelessSsidMultiPskSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCatalystcenterWirelessSsidMultiPskSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterWirelessSsidMultiPskSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // passphrase_type - computed: true, optional: false, required: false
  public get passphraseType() {
    return this.getStringAttribute('passphrase_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}

export class DataCatalystcenterWirelessSsidMultiPskSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterWirelessSsidMultiPskSettingsOutputReference {
    return new DataCatalystcenterWirelessSsidMultiPskSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_ssid catalystcenter_wireless_ssid}
*/
export class DataCatalystcenterWirelessSsid extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterWirelessSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterWirelessSsid to import
  * @param importFromId The id of the existing DataCatalystcenterWirelessSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterWirelessSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/wireless_ssid catalystcenter_wireless_ssid} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterWirelessSsidConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterWirelessSsidConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_wireless_ssid',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
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
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaa_override - computed: true, optional: false, required: false
  public get aaaOverride() {
    return this.getBooleanAttribute('aaa_override');
  }

  // acct_servers - computed: true, optional: false, required: false
  public get acctServers() {
    return cdktf.Fn.tolist(this.getListAttribute('acct_servers'));
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // ap_beacon_protection - computed: true, optional: false, required: false
  public get apBeaconProtection() {
    return this.getBooleanAttribute('ap_beacon_protection');
  }

  // auth_key8021x - computed: true, optional: false, required: false
  public get authKey8021X() {
    return this.getBooleanAttribute('auth_key8021x');
  }

  // auth_key8021x_plus_ft - computed: true, optional: false, required: false
  public get authKey8021XPlusFt() {
    return this.getBooleanAttribute('auth_key8021x_plus_ft');
  }

  // auth_key8021x_sha256 - computed: true, optional: false, required: false
  public get authKey8021XSha256() {
    return this.getBooleanAttribute('auth_key8021x_sha256');
  }

  // auth_key_easy_psk - computed: true, optional: false, required: false
  public get authKeyEasyPsk() {
    return this.getBooleanAttribute('auth_key_easy_psk');
  }

  // auth_key_easy_psk_sha256 - computed: true, optional: false, required: false
  public get authKeyEasyPskSha256() {
    return this.getBooleanAttribute('auth_key_easy_psk_sha256');
  }

  // auth_key_owe - computed: true, optional: false, required: false
  public get authKeyOwe() {
    return this.getBooleanAttribute('auth_key_owe');
  }

  // auth_key_psk - computed: true, optional: false, required: false
  public get authKeyPsk() {
    return this.getBooleanAttribute('auth_key_psk');
  }

  // auth_key_psk_plus_ft - computed: true, optional: false, required: false
  public get authKeyPskPlusFt() {
    return this.getBooleanAttribute('auth_key_psk_plus_ft');
  }

  // auth_key_sae - computed: true, optional: false, required: false
  public get authKeySae() {
    return this.getBooleanAttribute('auth_key_sae');
  }

  // auth_key_sae_ext - computed: true, optional: false, required: false
  public get authKeySaeExt() {
    return this.getBooleanAttribute('auth_key_sae_ext');
  }

  // auth_key_sae_ext_plus_ft - computed: true, optional: false, required: false
  public get authKeySaeExtPlusFt() {
    return this.getBooleanAttribute('auth_key_sae_ext_plus_ft');
  }

  // auth_key_sae_plus_ft - computed: true, optional: false, required: false
  public get authKeySaePlusFt() {
    return this.getBooleanAttribute('auth_key_sae_plus_ft');
  }

  // auth_key_suite_b1921x - computed: true, optional: false, required: false
  public get authKeySuiteB1921X() {
    return this.getBooleanAttribute('auth_key_suite_b1921x');
  }

  // auth_key_suite_b1x - computed: true, optional: false, required: false
  public get authKeySuiteB1X() {
    return this.getBooleanAttribute('auth_key_suite_b1x');
  }

  // auth_server - computed: true, optional: false, required: false
  public get authServer() {
    return this.getStringAttribute('auth_server');
  }

  // auth_servers - computed: true, optional: false, required: false
  public get authServers() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_servers'));
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // basic_service_set_client_idle_timeout - computed: true, optional: false, required: false
  public get basicServiceSetClientIdleTimeout() {
    return this.getNumberAttribute('basic_service_set_client_idle_timeout');
  }

  // basic_service_set_max_idle - computed: true, optional: false, required: false
  public get basicServiceSetMaxIdle() {
    return this.getBooleanAttribute('basic_service_set_max_idle');
  }

  // broadcast_ssid - computed: true, optional: false, required: false
  public get broadcastSsid() {
    return this.getBooleanAttribute('broadcast_ssid');
  }

  // cckm - computed: true, optional: false, required: false
  public get cckm() {
    return this.getBooleanAttribute('cckm');
  }

  // cckm_tsf_tolerance - computed: true, optional: false, required: false
  public get cckmTsfTolerance() {
    return this.getNumberAttribute('cckm_tsf_tolerance');
  }

  // client_exclusion - computed: true, optional: false, required: false
  public get clientExclusion() {
    return this.getBooleanAttribute('client_exclusion');
  }

  // client_exclusion_timeout - computed: true, optional: false, required: false
  public get clientExclusionTimeout() {
    return this.getNumberAttribute('client_exclusion_timeout');
  }

  // client_rate_limit - computed: true, optional: false, required: false
  public get clientRateLimit() {
    return this.getNumberAttribute('client_rate_limit');
  }

  // coverage_hole_detection - computed: true, optional: false, required: false
  public get coverageHoleDetection() {
    return this.getBooleanAttribute('coverage_hole_detection');
  }

  // directed_multicast_service - computed: true, optional: false, required: false
  public get directedMulticastService() {
    return this.getBooleanAttribute('directed_multicast_service');
  }

  // egress_qos - computed: true, optional: false, required: false
  public get egressQos() {
    return this.getStringAttribute('egress_qos');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_auth_ip_address - computed: true, optional: false, required: false
  public get externalAuthIpAddress() {
    return this.getStringAttribute('external_auth_ip_address');
  }

  // fast_lane - computed: true, optional: false, required: false
  public get fastLane() {
    return this.getBooleanAttribute('fast_lane');
  }

  // fast_transition - computed: true, optional: false, required: false
  public get fastTransition() {
    return this.getStringAttribute('fast_transition');
  }

  // fast_transition_over_the_distributed_system - computed: true, optional: false, required: false
  public get fastTransitionOverTheDistributedSystem() {
    return this.getBooleanAttribute('fast_transition_over_the_distributed_system');
  }

  // ghz24_policy - computed: true, optional: false, required: false
  public get ghz24Policy() {
    return this.getStringAttribute('ghz24_policy');
  }

  // ghz6_policy_client_steering - computed: true, optional: false, required: false
  public get ghz6PolicyClientSteering() {
    return this.getBooleanAttribute('ghz6_policy_client_steering');
  }

  // hex - computed: true, optional: false, required: false
  public get hex() {
    return this.getBooleanAttribute('hex');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ingress_qos - computed: true, optional: false, required: false
  public get ingressQos() {
    return this.getStringAttribute('ingress_qos');
  }

  // l3_auth_type - computed: true, optional: false, required: false
  public get l3AuthType() {
    return this.getStringAttribute('l3_auth_type');
  }

  // mac_filtering - computed: true, optional: false, required: false
  public get macFiltering() {
    return this.getBooleanAttribute('mac_filtering');
  }

  // mft_client_protection - computed: true, optional: false, required: false
  public get mftClientProtection() {
    return this.getStringAttribute('mft_client_protection');
  }

  // multi_psk_settings - computed: true, optional: false, required: false
  private _multiPskSettings = new DataCatalystcenterWirelessSsidMultiPskSettingsList(this, "multi_psk_settings", false);
  public get multiPskSettings() {
    return this._multiPskSettings;
  }

  // nas_options - computed: true, optional: false, required: false
  public get nasOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('nas_options'));
  }

  // neighbor_list - computed: true, optional: false, required: false
  public get neighborList() {
    return this.getBooleanAttribute('neighbor_list');
  }

  // open_ssid - computed: true, optional: false, required: false
  public get openSsid() {
    return this.getStringAttribute('open_ssid');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // posturing - computed: true, optional: false, required: false
  public get posturing() {
    return this.getBooleanAttribute('posturing');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // protected_management_frame - computed: true, optional: false, required: false
  public get protectedManagementFrame() {
    return this.getStringAttribute('protected_management_frame');
  }

  // random_mac_filter - computed: true, optional: false, required: false
  public get randomMacFilter() {
    return this.getBooleanAttribute('random_mac_filter');
  }

  // rsn_cipher_suite_ccmp128 - computed: true, optional: false, required: false
  public get rsnCipherSuiteCcmp128() {
    return this.getBooleanAttribute('rsn_cipher_suite_ccmp128');
  }

  // rsn_cipher_suite_ccmp256 - computed: true, optional: false, required: false
  public get rsnCipherSuiteCcmp256() {
    return this.getBooleanAttribute('rsn_cipher_suite_ccmp256');
  }

  // rsn_cipher_suite_gcmp128 - computed: true, optional: false, required: false
  public get rsnCipherSuiteGcmp128() {
    return this.getBooleanAttribute('rsn_cipher_suite_gcmp128');
  }

  // rsn_cipher_suite_gcmp256 - computed: true, optional: false, required: false
  public get rsnCipherSuiteGcmp256() {
    return this.getBooleanAttribute('rsn_cipher_suite_gcmp256');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // session_timeout_enable - computed: true, optional: false, required: false
  public get sessionTimeoutEnable() {
    return this.getBooleanAttribute('session_timeout_enable');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // sleeping_client - computed: true, optional: false, required: false
  public get sleepingClient() {
    return this.getBooleanAttribute('sleeping_client');
  }

  // sleeping_client_timeout - computed: true, optional: false, required: false
  public get sleepingClientTimeout() {
    return this.getNumberAttribute('sleeping_client_timeout');
  }

  // ssid - computed: true, optional: false, required: false
  public get ssid() {
    return this.getStringAttribute('ssid');
  }

  // ssid_radio_type - computed: true, optional: false, required: false
  public get ssidRadioType() {
    return this.getStringAttribute('ssid_radio_type');
  }

  // web_passthrough - computed: true, optional: false, required: false
  public get webPassthrough() {
    return this.getBooleanAttribute('web_passthrough');
  }

  // wlan_band_select - computed: true, optional: false, required: false
  public get wlanBandSelect() {
    return this.getBooleanAttribute('wlan_band_select');
  }

  // wlan_type - computed: true, optional: false, required: false
  public get wlanType() {
    return this.getStringAttribute('wlan_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
