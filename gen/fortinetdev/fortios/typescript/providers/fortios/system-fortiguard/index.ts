// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFortiguardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_cache SystemFortiguard#antispam_cache}
  */
  readonly antispamCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_cache_mpercent SystemFortiguard#antispam_cache_mpercent}
  */
  readonly antispamCacheMpercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_cache_mpermille SystemFortiguard#antispam_cache_mpermille}
  */
  readonly antispamCacheMpermille?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_cache_ttl SystemFortiguard#antispam_cache_ttl}
  */
  readonly antispamCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_expiration SystemFortiguard#antispam_expiration}
  */
  readonly antispamExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_force_off SystemFortiguard#antispam_force_off}
  */
  readonly antispamForceOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_license SystemFortiguard#antispam_license}
  */
  readonly antispamLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#antispam_timeout SystemFortiguard#antispam_timeout}
  */
  readonly antispamTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#anycast_sdns_server_ip SystemFortiguard#anycast_sdns_server_ip}
  */
  readonly anycastSdnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#anycast_sdns_server_port SystemFortiguard#anycast_sdns_server_port}
  */
  readonly anycastSdnsServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#auto_firmware_upgrade SystemFortiguard#auto_firmware_upgrade}
  */
  readonly autoFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#auto_firmware_upgrade_day SystemFortiguard#auto_firmware_upgrade_day}
  */
  readonly autoFirmwareUpgradeDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#auto_firmware_upgrade_delay SystemFortiguard#auto_firmware_upgrade_delay}
  */
  readonly autoFirmwareUpgradeDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#auto_firmware_upgrade_end_hour SystemFortiguard#auto_firmware_upgrade_end_hour}
  */
  readonly autoFirmwareUpgradeEndHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#auto_firmware_upgrade_start_hour SystemFortiguard#auto_firmware_upgrade_start_hour}
  */
  readonly autoFirmwareUpgradeStartHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#auto_join_forticloud SystemFortiguard#auto_join_forticloud}
  */
  readonly autoJoinForticloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#ddns_server_ip SystemFortiguard#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#ddns_server_ip6 SystemFortiguard#ddns_server_ip6}
  */
  readonly ddnsServerIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#ddns_server_port SystemFortiguard#ddns_server_port}
  */
  readonly ddnsServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#fds_license_expiring_days SystemFortiguard#fds_license_expiring_days}
  */
  readonly fdsLicenseExpiringDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#fortiguard_anycast SystemFortiguard#fortiguard_anycast}
  */
  readonly fortiguardAnycast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#fortiguard_anycast_source SystemFortiguard#fortiguard_anycast_source}
  */
  readonly fortiguardAnycastSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#gui_prompt_auto_upgrade SystemFortiguard#gui_prompt_auto_upgrade}
  */
  readonly guiPromptAutoUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#id SystemFortiguard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#interface SystemFortiguard#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#interface_select_method SystemFortiguard#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#load_balance_servers SystemFortiguard#load_balance_servers}
  */
  readonly loadBalanceServers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_cache SystemFortiguard#outbreak_prevention_cache}
  */
  readonly outbreakPreventionCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_cache_mpercent SystemFortiguard#outbreak_prevention_cache_mpercent}
  */
  readonly outbreakPreventionCacheMpercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_cache_mpermille SystemFortiguard#outbreak_prevention_cache_mpermille}
  */
  readonly outbreakPreventionCacheMpermille?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_cache_ttl SystemFortiguard#outbreak_prevention_cache_ttl}
  */
  readonly outbreakPreventionCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_expiration SystemFortiguard#outbreak_prevention_expiration}
  */
  readonly outbreakPreventionExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_force_off SystemFortiguard#outbreak_prevention_force_off}
  */
  readonly outbreakPreventionForceOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_license SystemFortiguard#outbreak_prevention_license}
  */
  readonly outbreakPreventionLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#outbreak_prevention_timeout SystemFortiguard#outbreak_prevention_timeout}
  */
  readonly outbreakPreventionTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#persistent_connection SystemFortiguard#persistent_connection}
  */
  readonly persistentConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#port SystemFortiguard#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#protocol SystemFortiguard#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#proxy_password SystemFortiguard#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#proxy_server_ip SystemFortiguard#proxy_server_ip}
  */
  readonly proxyServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#proxy_server_port SystemFortiguard#proxy_server_port}
  */
  readonly proxyServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#proxy_username SystemFortiguard#proxy_username}
  */
  readonly proxyUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#sandbox_inline_scan SystemFortiguard#sandbox_inline_scan}
  */
  readonly sandboxInlineScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#sandbox_region SystemFortiguard#sandbox_region}
  */
  readonly sandboxRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#sdns_options SystemFortiguard#sdns_options}
  */
  readonly sdnsOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#sdns_server_ip SystemFortiguard#sdns_server_ip}
  */
  readonly sdnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#sdns_server_port SystemFortiguard#sdns_server_port}
  */
  readonly sdnsServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#service_account_id SystemFortiguard#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#source_ip SystemFortiguard#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#source_ip6 SystemFortiguard#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#subscribe_update_notification SystemFortiguard#subscribe_update_notification}
  */
  readonly subscribeUpdateNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#update_build_proxy SystemFortiguard#update_build_proxy}
  */
  readonly updateBuildProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#update_dldb SystemFortiguard#update_dldb}
  */
  readonly updateDldb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#update_extdb SystemFortiguard#update_extdb}
  */
  readonly updateExtdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#update_ffdb SystemFortiguard#update_ffdb}
  */
  readonly updateFfdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#update_server_location SystemFortiguard#update_server_location}
  */
  readonly updateServerLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#update_uwdb SystemFortiguard#update_uwdb}
  */
  readonly updateUwdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#vdom SystemFortiguard#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#vdomparam SystemFortiguard#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#videofilter_expiration SystemFortiguard#videofilter_expiration}
  */
  readonly videofilterExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#videofilter_license SystemFortiguard#videofilter_license}
  */
  readonly videofilterLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#vrf_select SystemFortiguard#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#webfilter_cache SystemFortiguard#webfilter_cache}
  */
  readonly webfilterCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#webfilter_cache_ttl SystemFortiguard#webfilter_cache_ttl}
  */
  readonly webfilterCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#webfilter_expiration SystemFortiguard#webfilter_expiration}
  */
  readonly webfilterExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#webfilter_force_off SystemFortiguard#webfilter_force_off}
  */
  readonly webfilterForceOff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#webfilter_license SystemFortiguard#webfilter_license}
  */
  readonly webfilterLicense?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#webfilter_timeout SystemFortiguard#webfilter_timeout}
  */
  readonly webfilterTimeout: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard fortios_system_fortiguard}
*/
export class SystemFortiguard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_fortiguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFortiguard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFortiguard to import
  * @param importFromId The id of the existing SystemFortiguard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFortiguard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_fortiguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortiguard fortios_system_fortiguard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFortiguardConfig
  */
  public constructor(scope: Construct, id: string, config: SystemFortiguardConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_fortiguard',
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
    this._antispamCache = config.antispamCache;
    this._antispamCacheMpercent = config.antispamCacheMpercent;
    this._antispamCacheMpermille = config.antispamCacheMpermille;
    this._antispamCacheTtl = config.antispamCacheTtl;
    this._antispamExpiration = config.antispamExpiration;
    this._antispamForceOff = config.antispamForceOff;
    this._antispamLicense = config.antispamLicense;
    this._antispamTimeout = config.antispamTimeout;
    this._anycastSdnsServerIp = config.anycastSdnsServerIp;
    this._anycastSdnsServerPort = config.anycastSdnsServerPort;
    this._autoFirmwareUpgrade = config.autoFirmwareUpgrade;
    this._autoFirmwareUpgradeDay = config.autoFirmwareUpgradeDay;
    this._autoFirmwareUpgradeDelay = config.autoFirmwareUpgradeDelay;
    this._autoFirmwareUpgradeEndHour = config.autoFirmwareUpgradeEndHour;
    this._autoFirmwareUpgradeStartHour = config.autoFirmwareUpgradeStartHour;
    this._autoJoinForticloud = config.autoJoinForticloud;
    this._ddnsServerIp = config.ddnsServerIp;
    this._ddnsServerIp6 = config.ddnsServerIp6;
    this._ddnsServerPort = config.ddnsServerPort;
    this._fdsLicenseExpiringDays = config.fdsLicenseExpiringDays;
    this._fortiguardAnycast = config.fortiguardAnycast;
    this._fortiguardAnycastSource = config.fortiguardAnycastSource;
    this._guiPromptAutoUpgrade = config.guiPromptAutoUpgrade;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._loadBalanceServers = config.loadBalanceServers;
    this._outbreakPreventionCache = config.outbreakPreventionCache;
    this._outbreakPreventionCacheMpercent = config.outbreakPreventionCacheMpercent;
    this._outbreakPreventionCacheMpermille = config.outbreakPreventionCacheMpermille;
    this._outbreakPreventionCacheTtl = config.outbreakPreventionCacheTtl;
    this._outbreakPreventionExpiration = config.outbreakPreventionExpiration;
    this._outbreakPreventionForceOff = config.outbreakPreventionForceOff;
    this._outbreakPreventionLicense = config.outbreakPreventionLicense;
    this._outbreakPreventionTimeout = config.outbreakPreventionTimeout;
    this._persistentConnection = config.persistentConnection;
    this._port = config.port;
    this._protocol = config.protocol;
    this._proxyPassword = config.proxyPassword;
    this._proxyServerIp = config.proxyServerIp;
    this._proxyServerPort = config.proxyServerPort;
    this._proxyUsername = config.proxyUsername;
    this._sandboxInlineScan = config.sandboxInlineScan;
    this._sandboxRegion = config.sandboxRegion;
    this._sdnsOptions = config.sdnsOptions;
    this._sdnsServerIp = config.sdnsServerIp;
    this._sdnsServerPort = config.sdnsServerPort;
    this._serviceAccountId = config.serviceAccountId;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._subscribeUpdateNotification = config.subscribeUpdateNotification;
    this._updateBuildProxy = config.updateBuildProxy;
    this._updateDldb = config.updateDldb;
    this._updateExtdb = config.updateExtdb;
    this._updateFfdb = config.updateFfdb;
    this._updateServerLocation = config.updateServerLocation;
    this._updateUwdb = config.updateUwdb;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._videofilterExpiration = config.videofilterExpiration;
    this._videofilterLicense = config.videofilterLicense;
    this._vrfSelect = config.vrfSelect;
    this._webfilterCache = config.webfilterCache;
    this._webfilterCacheTtl = config.webfilterCacheTtl;
    this._webfilterExpiration = config.webfilterExpiration;
    this._webfilterForceOff = config.webfilterForceOff;
    this._webfilterLicense = config.webfilterLicense;
    this._webfilterTimeout = config.webfilterTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // antispam_cache - computed: true, optional: true, required: false
  private _antispamCache?: string; 
  public get antispamCache() {
    return this.getStringAttribute('antispam_cache');
  }
  public set antispamCache(value: string) {
    this._antispamCache = value;
  }
  public resetAntispamCache() {
    this._antispamCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheInput() {
    return this._antispamCache;
  }

  // antispam_cache_mpercent - computed: true, optional: true, required: false
  private _antispamCacheMpercent?: number; 
  public get antispamCacheMpercent() {
    return this.getNumberAttribute('antispam_cache_mpercent');
  }
  public set antispamCacheMpercent(value: number) {
    this._antispamCacheMpercent = value;
  }
  public resetAntispamCacheMpercent() {
    this._antispamCacheMpercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheMpercentInput() {
    return this._antispamCacheMpercent;
  }

  // antispam_cache_mpermille - computed: true, optional: true, required: false
  private _antispamCacheMpermille?: number; 
  public get antispamCacheMpermille() {
    return this.getNumberAttribute('antispam_cache_mpermille');
  }
  public set antispamCacheMpermille(value: number) {
    this._antispamCacheMpermille = value;
  }
  public resetAntispamCacheMpermille() {
    this._antispamCacheMpermille = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheMpermilleInput() {
    return this._antispamCacheMpermille;
  }

  // antispam_cache_ttl - computed: true, optional: true, required: false
  private _antispamCacheTtl?: number; 
  public get antispamCacheTtl() {
    return this.getNumberAttribute('antispam_cache_ttl');
  }
  public set antispamCacheTtl(value: number) {
    this._antispamCacheTtl = value;
  }
  public resetAntispamCacheTtl() {
    this._antispamCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamCacheTtlInput() {
    return this._antispamCacheTtl;
  }

  // antispam_expiration - computed: false, optional: true, required: false
  private _antispamExpiration?: number; 
  public get antispamExpiration() {
    return this.getNumberAttribute('antispam_expiration');
  }
  public set antispamExpiration(value: number) {
    this._antispamExpiration = value;
  }
  public resetAntispamExpiration() {
    this._antispamExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamExpirationInput() {
    return this._antispamExpiration;
  }

  // antispam_force_off - computed: true, optional: true, required: false
  private _antispamForceOff?: string; 
  public get antispamForceOff() {
    return this.getStringAttribute('antispam_force_off');
  }
  public set antispamForceOff(value: string) {
    this._antispamForceOff = value;
  }
  public resetAntispamForceOff() {
    this._antispamForceOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamForceOffInput() {
    return this._antispamForceOff;
  }

  // antispam_license - computed: true, optional: true, required: false
  private _antispamLicense?: number; 
  public get antispamLicense() {
    return this.getNumberAttribute('antispam_license');
  }
  public set antispamLicense(value: number) {
    this._antispamLicense = value;
  }
  public resetAntispamLicense() {
    this._antispamLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamLicenseInput() {
    return this._antispamLicense;
  }

  // antispam_timeout - computed: false, optional: false, required: true
  private _antispamTimeout?: number; 
  public get antispamTimeout() {
    return this.getNumberAttribute('antispam_timeout');
  }
  public set antispamTimeout(value: number) {
    this._antispamTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get antispamTimeoutInput() {
    return this._antispamTimeout;
  }

  // anycast_sdns_server_ip - computed: true, optional: true, required: false
  private _anycastSdnsServerIp?: string; 
  public get anycastSdnsServerIp() {
    return this.getStringAttribute('anycast_sdns_server_ip');
  }
  public set anycastSdnsServerIp(value: string) {
    this._anycastSdnsServerIp = value;
  }
  public resetAnycastSdnsServerIp() {
    this._anycastSdnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastSdnsServerIpInput() {
    return this._anycastSdnsServerIp;
  }

  // anycast_sdns_server_port - computed: true, optional: true, required: false
  private _anycastSdnsServerPort?: number; 
  public get anycastSdnsServerPort() {
    return this.getNumberAttribute('anycast_sdns_server_port');
  }
  public set anycastSdnsServerPort(value: number) {
    this._anycastSdnsServerPort = value;
  }
  public resetAnycastSdnsServerPort() {
    this._anycastSdnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastSdnsServerPortInput() {
    return this._anycastSdnsServerPort;
  }

  // auto_firmware_upgrade - computed: true, optional: true, required: false
  private _autoFirmwareUpgrade?: string; 
  public get autoFirmwareUpgrade() {
    return this.getStringAttribute('auto_firmware_upgrade');
  }
  public set autoFirmwareUpgrade(value: string) {
    this._autoFirmwareUpgrade = value;
  }
  public resetAutoFirmwareUpgrade() {
    this._autoFirmwareUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeInput() {
    return this._autoFirmwareUpgrade;
  }

  // auto_firmware_upgrade_day - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeDay?: string; 
  public get autoFirmwareUpgradeDay() {
    return this.getStringAttribute('auto_firmware_upgrade_day');
  }
  public set autoFirmwareUpgradeDay(value: string) {
    this._autoFirmwareUpgradeDay = value;
  }
  public resetAutoFirmwareUpgradeDay() {
    this._autoFirmwareUpgradeDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeDayInput() {
    return this._autoFirmwareUpgradeDay;
  }

  // auto_firmware_upgrade_delay - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeDelay?: number; 
  public get autoFirmwareUpgradeDelay() {
    return this.getNumberAttribute('auto_firmware_upgrade_delay');
  }
  public set autoFirmwareUpgradeDelay(value: number) {
    this._autoFirmwareUpgradeDelay = value;
  }
  public resetAutoFirmwareUpgradeDelay() {
    this._autoFirmwareUpgradeDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeDelayInput() {
    return this._autoFirmwareUpgradeDelay;
  }

  // auto_firmware_upgrade_end_hour - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeEndHour?: number; 
  public get autoFirmwareUpgradeEndHour() {
    return this.getNumberAttribute('auto_firmware_upgrade_end_hour');
  }
  public set autoFirmwareUpgradeEndHour(value: number) {
    this._autoFirmwareUpgradeEndHour = value;
  }
  public resetAutoFirmwareUpgradeEndHour() {
    this._autoFirmwareUpgradeEndHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeEndHourInput() {
    return this._autoFirmwareUpgradeEndHour;
  }

  // auto_firmware_upgrade_start_hour - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeStartHour?: number; 
  public get autoFirmwareUpgradeStartHour() {
    return this.getNumberAttribute('auto_firmware_upgrade_start_hour');
  }
  public set autoFirmwareUpgradeStartHour(value: number) {
    this._autoFirmwareUpgradeStartHour = value;
  }
  public resetAutoFirmwareUpgradeStartHour() {
    this._autoFirmwareUpgradeStartHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeStartHourInput() {
    return this._autoFirmwareUpgradeStartHour;
  }

  // auto_join_forticloud - computed: true, optional: true, required: false
  private _autoJoinForticloud?: string; 
  public get autoJoinForticloud() {
    return this.getStringAttribute('auto_join_forticloud');
  }
  public set autoJoinForticloud(value: string) {
    this._autoJoinForticloud = value;
  }
  public resetAutoJoinForticloud() {
    this._autoJoinForticloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoJoinForticloudInput() {
    return this._autoJoinForticloud;
  }

  // ddns_server_ip - computed: true, optional: true, required: false
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

  // ddns_server_ip6 - computed: true, optional: true, required: false
  private _ddnsServerIp6?: string; 
  public get ddnsServerIp6() {
    return this.getStringAttribute('ddns_server_ip6');
  }
  public set ddnsServerIp6(value: string) {
    this._ddnsServerIp6 = value;
  }
  public resetDdnsServerIp6() {
    this._ddnsServerIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIp6Input() {
    return this._ddnsServerIp6;
  }

  // ddns_server_port - computed: true, optional: true, required: false
  private _ddnsServerPort?: number; 
  public get ddnsServerPort() {
    return this.getNumberAttribute('ddns_server_port');
  }
  public set ddnsServerPort(value: number) {
    this._ddnsServerPort = value;
  }
  public resetDdnsServerPort() {
    this._ddnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerPortInput() {
    return this._ddnsServerPort;
  }

  // fds_license_expiring_days - computed: true, optional: true, required: false
  private _fdsLicenseExpiringDays?: number; 
  public get fdsLicenseExpiringDays() {
    return this.getNumberAttribute('fds_license_expiring_days');
  }
  public set fdsLicenseExpiringDays(value: number) {
    this._fdsLicenseExpiringDays = value;
  }
  public resetFdsLicenseExpiringDays() {
    this._fdsLicenseExpiringDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsLicenseExpiringDaysInput() {
    return this._fdsLicenseExpiringDays;
  }

  // fortiguard_anycast - computed: true, optional: true, required: false
  private _fortiguardAnycast?: string; 
  public get fortiguardAnycast() {
    return this.getStringAttribute('fortiguard_anycast');
  }
  public set fortiguardAnycast(value: string) {
    this._fortiguardAnycast = value;
  }
  public resetFortiguardAnycast() {
    this._fortiguardAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardAnycastInput() {
    return this._fortiguardAnycast;
  }

  // fortiguard_anycast_source - computed: true, optional: true, required: false
  private _fortiguardAnycastSource?: string; 
  public get fortiguardAnycastSource() {
    return this.getStringAttribute('fortiguard_anycast_source');
  }
  public set fortiguardAnycastSource(value: string) {
    this._fortiguardAnycastSource = value;
  }
  public resetFortiguardAnycastSource() {
    this._fortiguardAnycastSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardAnycastSourceInput() {
    return this._fortiguardAnycastSource;
  }

  // gui_prompt_auto_upgrade - computed: true, optional: true, required: false
  private _guiPromptAutoUpgrade?: string; 
  public get guiPromptAutoUpgrade() {
    return this.getStringAttribute('gui_prompt_auto_upgrade');
  }
  public set guiPromptAutoUpgrade(value: string) {
    this._guiPromptAutoUpgrade = value;
  }
  public resetGuiPromptAutoUpgrade() {
    this._guiPromptAutoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiPromptAutoUpgradeInput() {
    return this._guiPromptAutoUpgrade;
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

  // load_balance_servers - computed: true, optional: true, required: false
  private _loadBalanceServers?: number; 
  public get loadBalanceServers() {
    return this.getNumberAttribute('load_balance_servers');
  }
  public set loadBalanceServers(value: number) {
    this._loadBalanceServers = value;
  }
  public resetLoadBalanceServers() {
    this._loadBalanceServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceServersInput() {
    return this._loadBalanceServers;
  }

  // outbreak_prevention_cache - computed: true, optional: true, required: false
  private _outbreakPreventionCache?: string; 
  public get outbreakPreventionCache() {
    return this.getStringAttribute('outbreak_prevention_cache');
  }
  public set outbreakPreventionCache(value: string) {
    this._outbreakPreventionCache = value;
  }
  public resetOutbreakPreventionCache() {
    this._outbreakPreventionCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionCacheInput() {
    return this._outbreakPreventionCache;
  }

  // outbreak_prevention_cache_mpercent - computed: true, optional: true, required: false
  private _outbreakPreventionCacheMpercent?: number; 
  public get outbreakPreventionCacheMpercent() {
    return this.getNumberAttribute('outbreak_prevention_cache_mpercent');
  }
  public set outbreakPreventionCacheMpercent(value: number) {
    this._outbreakPreventionCacheMpercent = value;
  }
  public resetOutbreakPreventionCacheMpercent() {
    this._outbreakPreventionCacheMpercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionCacheMpercentInput() {
    return this._outbreakPreventionCacheMpercent;
  }

  // outbreak_prevention_cache_mpermille - computed: true, optional: true, required: false
  private _outbreakPreventionCacheMpermille?: number; 
  public get outbreakPreventionCacheMpermille() {
    return this.getNumberAttribute('outbreak_prevention_cache_mpermille');
  }
  public set outbreakPreventionCacheMpermille(value: number) {
    this._outbreakPreventionCacheMpermille = value;
  }
  public resetOutbreakPreventionCacheMpermille() {
    this._outbreakPreventionCacheMpermille = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionCacheMpermilleInput() {
    return this._outbreakPreventionCacheMpermille;
  }

  // outbreak_prevention_cache_ttl - computed: true, optional: true, required: false
  private _outbreakPreventionCacheTtl?: number; 
  public get outbreakPreventionCacheTtl() {
    return this.getNumberAttribute('outbreak_prevention_cache_ttl');
  }
  public set outbreakPreventionCacheTtl(value: number) {
    this._outbreakPreventionCacheTtl = value;
  }
  public resetOutbreakPreventionCacheTtl() {
    this._outbreakPreventionCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionCacheTtlInput() {
    return this._outbreakPreventionCacheTtl;
  }

  // outbreak_prevention_expiration - computed: true, optional: true, required: false
  private _outbreakPreventionExpiration?: number; 
  public get outbreakPreventionExpiration() {
    return this.getNumberAttribute('outbreak_prevention_expiration');
  }
  public set outbreakPreventionExpiration(value: number) {
    this._outbreakPreventionExpiration = value;
  }
  public resetOutbreakPreventionExpiration() {
    this._outbreakPreventionExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionExpirationInput() {
    return this._outbreakPreventionExpiration;
  }

  // outbreak_prevention_force_off - computed: true, optional: true, required: false
  private _outbreakPreventionForceOff?: string; 
  public get outbreakPreventionForceOff() {
    return this.getStringAttribute('outbreak_prevention_force_off');
  }
  public set outbreakPreventionForceOff(value: string) {
    this._outbreakPreventionForceOff = value;
  }
  public resetOutbreakPreventionForceOff() {
    this._outbreakPreventionForceOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionForceOffInput() {
    return this._outbreakPreventionForceOff;
  }

  // outbreak_prevention_license - computed: true, optional: true, required: false
  private _outbreakPreventionLicense?: number; 
  public get outbreakPreventionLicense() {
    return this.getNumberAttribute('outbreak_prevention_license');
  }
  public set outbreakPreventionLicense(value: number) {
    this._outbreakPreventionLicense = value;
  }
  public resetOutbreakPreventionLicense() {
    this._outbreakPreventionLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionLicenseInput() {
    return this._outbreakPreventionLicense;
  }

  // outbreak_prevention_timeout - computed: false, optional: false, required: true
  private _outbreakPreventionTimeout?: number; 
  public get outbreakPreventionTimeout() {
    return this.getNumberAttribute('outbreak_prevention_timeout');
  }
  public set outbreakPreventionTimeout(value: number) {
    this._outbreakPreventionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionTimeoutInput() {
    return this._outbreakPreventionTimeout;
  }

  // persistent_connection - computed: true, optional: true, required: false
  private _persistentConnection?: string; 
  public get persistentConnection() {
    return this.getStringAttribute('persistent_connection');
  }
  public set persistentConnection(value: string) {
    this._persistentConnection = value;
  }
  public resetPersistentConnection() {
    this._persistentConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentConnectionInput() {
    return this._persistentConnection;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
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

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_server_ip - computed: true, optional: true, required: false
  private _proxyServerIp?: string; 
  public get proxyServerIp() {
    return this.getStringAttribute('proxy_server_ip');
  }
  public set proxyServerIp(value: string) {
    this._proxyServerIp = value;
  }
  public resetProxyServerIp() {
    this._proxyServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerIpInput() {
    return this._proxyServerIp;
  }

  // proxy_server_port - computed: false, optional: true, required: false
  private _proxyServerPort?: number; 
  public get proxyServerPort() {
    return this.getNumberAttribute('proxy_server_port');
  }
  public set proxyServerPort(value: number) {
    this._proxyServerPort = value;
  }
  public resetProxyServerPort() {
    this._proxyServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerPortInput() {
    return this._proxyServerPort;
  }

  // proxy_username - computed: false, optional: true, required: false
  private _proxyUsername?: string; 
  public get proxyUsername() {
    return this.getStringAttribute('proxy_username');
  }
  public set proxyUsername(value: string) {
    this._proxyUsername = value;
  }
  public resetProxyUsername() {
    this._proxyUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUsernameInput() {
    return this._proxyUsername;
  }

  // sandbox_inline_scan - computed: true, optional: true, required: false
  private _sandboxInlineScan?: string; 
  public get sandboxInlineScan() {
    return this.getStringAttribute('sandbox_inline_scan');
  }
  public set sandboxInlineScan(value: string) {
    this._sandboxInlineScan = value;
  }
  public resetSandboxInlineScan() {
    this._sandboxInlineScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInlineScanInput() {
    return this._sandboxInlineScan;
  }

  // sandbox_region - computed: false, optional: true, required: false
  private _sandboxRegion?: string; 
  public get sandboxRegion() {
    return this.getStringAttribute('sandbox_region');
  }
  public set sandboxRegion(value: string) {
    this._sandboxRegion = value;
  }
  public resetSandboxRegion() {
    this._sandboxRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxRegionInput() {
    return this._sandboxRegion;
  }

  // sdns_options - computed: false, optional: true, required: false
  private _sdnsOptions?: string; 
  public get sdnsOptions() {
    return this.getStringAttribute('sdns_options');
  }
  public set sdnsOptions(value: string) {
    this._sdnsOptions = value;
  }
  public resetSdnsOptions() {
    this._sdnsOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnsOptionsInput() {
    return this._sdnsOptions;
  }

  // sdns_server_ip - computed: false, optional: true, required: false
  private _sdnsServerIp?: string; 
  public get sdnsServerIp() {
    return this.getStringAttribute('sdns_server_ip');
  }
  public set sdnsServerIp(value: string) {
    this._sdnsServerIp = value;
  }
  public resetSdnsServerIp() {
    this._sdnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnsServerIpInput() {
    return this._sdnsServerIp;
  }

  // sdns_server_port - computed: true, optional: true, required: false
  private _sdnsServerPort?: number; 
  public get sdnsServerPort() {
    return this.getNumberAttribute('sdns_server_port');
  }
  public set sdnsServerPort(value: number) {
    this._sdnsServerPort = value;
  }
  public resetSdnsServerPort() {
    this._sdnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnsServerPortInput() {
    return this._sdnsServerPort;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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

  // subscribe_update_notification - computed: true, optional: true, required: false
  private _subscribeUpdateNotification?: string; 
  public get subscribeUpdateNotification() {
    return this.getStringAttribute('subscribe_update_notification');
  }
  public set subscribeUpdateNotification(value: string) {
    this._subscribeUpdateNotification = value;
  }
  public resetSubscribeUpdateNotification() {
    this._subscribeUpdateNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeUpdateNotificationInput() {
    return this._subscribeUpdateNotification;
  }

  // update_build_proxy - computed: true, optional: true, required: false
  private _updateBuildProxy?: string; 
  public get updateBuildProxy() {
    return this.getStringAttribute('update_build_proxy');
  }
  public set updateBuildProxy(value: string) {
    this._updateBuildProxy = value;
  }
  public resetUpdateBuildProxy() {
    this._updateBuildProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBuildProxyInput() {
    return this._updateBuildProxy;
  }

  // update_dldb - computed: true, optional: true, required: false
  private _updateDldb?: string; 
  public get updateDldb() {
    return this.getStringAttribute('update_dldb');
  }
  public set updateDldb(value: string) {
    this._updateDldb = value;
  }
  public resetUpdateDldb() {
    this._updateDldb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDldbInput() {
    return this._updateDldb;
  }

  // update_extdb - computed: true, optional: true, required: false
  private _updateExtdb?: string; 
  public get updateExtdb() {
    return this.getStringAttribute('update_extdb');
  }
  public set updateExtdb(value: string) {
    this._updateExtdb = value;
  }
  public resetUpdateExtdb() {
    this._updateExtdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateExtdbInput() {
    return this._updateExtdb;
  }

  // update_ffdb - computed: true, optional: true, required: false
  private _updateFfdb?: string; 
  public get updateFfdb() {
    return this.getStringAttribute('update_ffdb');
  }
  public set updateFfdb(value: string) {
    this._updateFfdb = value;
  }
  public resetUpdateFfdb() {
    this._updateFfdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateFfdbInput() {
    return this._updateFfdb;
  }

  // update_server_location - computed: true, optional: true, required: false
  private _updateServerLocation?: string; 
  public get updateServerLocation() {
    return this.getStringAttribute('update_server_location');
  }
  public set updateServerLocation(value: string) {
    this._updateServerLocation = value;
  }
  public resetUpdateServerLocation() {
    this._updateServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateServerLocationInput() {
    return this._updateServerLocation;
  }

  // update_uwdb - computed: true, optional: true, required: false
  private _updateUwdb?: string; 
  public get updateUwdb() {
    return this.getStringAttribute('update_uwdb');
  }
  public set updateUwdb(value: string) {
    this._updateUwdb = value;
  }
  public resetUpdateUwdb() {
    this._updateUwdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUwdbInput() {
    return this._updateUwdb;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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

  // videofilter_expiration - computed: true, optional: true, required: false
  private _videofilterExpiration?: number; 
  public get videofilterExpiration() {
    return this.getNumberAttribute('videofilter_expiration');
  }
  public set videofilterExpiration(value: number) {
    this._videofilterExpiration = value;
  }
  public resetVideofilterExpiration() {
    this._videofilterExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videofilterExpirationInput() {
    return this._videofilterExpiration;
  }

  // videofilter_license - computed: true, optional: true, required: false
  private _videofilterLicense?: number; 
  public get videofilterLicense() {
    return this.getNumberAttribute('videofilter_license');
  }
  public set videofilterLicense(value: number) {
    this._videofilterLicense = value;
  }
  public resetVideofilterLicense() {
    this._videofilterLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videofilterLicenseInput() {
    return this._videofilterLicense;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // webfilter_cache - computed: true, optional: true, required: false
  private _webfilterCache?: string; 
  public get webfilterCache() {
    return this.getStringAttribute('webfilter_cache');
  }
  public set webfilterCache(value: string) {
    this._webfilterCache = value;
  }
  public resetWebfilterCache() {
    this._webfilterCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterCacheInput() {
    return this._webfilterCache;
  }

  // webfilter_cache_ttl - computed: true, optional: true, required: false
  private _webfilterCacheTtl?: number; 
  public get webfilterCacheTtl() {
    return this.getNumberAttribute('webfilter_cache_ttl');
  }
  public set webfilterCacheTtl(value: number) {
    this._webfilterCacheTtl = value;
  }
  public resetWebfilterCacheTtl() {
    this._webfilterCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterCacheTtlInput() {
    return this._webfilterCacheTtl;
  }

  // webfilter_expiration - computed: true, optional: true, required: false
  private _webfilterExpiration?: number; 
  public get webfilterExpiration() {
    return this.getNumberAttribute('webfilter_expiration');
  }
  public set webfilterExpiration(value: number) {
    this._webfilterExpiration = value;
  }
  public resetWebfilterExpiration() {
    this._webfilterExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterExpirationInput() {
    return this._webfilterExpiration;
  }

  // webfilter_force_off - computed: true, optional: true, required: false
  private _webfilterForceOff?: string; 
  public get webfilterForceOff() {
    return this.getStringAttribute('webfilter_force_off');
  }
  public set webfilterForceOff(value: string) {
    this._webfilterForceOff = value;
  }
  public resetWebfilterForceOff() {
    this._webfilterForceOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterForceOffInput() {
    return this._webfilterForceOff;
  }

  // webfilter_license - computed: true, optional: true, required: false
  private _webfilterLicense?: number; 
  public get webfilterLicense() {
    return this.getNumberAttribute('webfilter_license');
  }
  public set webfilterLicense(value: number) {
    this._webfilterLicense = value;
  }
  public resetWebfilterLicense() {
    this._webfilterLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterLicenseInput() {
    return this._webfilterLicense;
  }

  // webfilter_timeout - computed: false, optional: false, required: true
  private _webfilterTimeout?: number; 
  public get webfilterTimeout() {
    return this.getNumberAttribute('webfilter_timeout');
  }
  public set webfilterTimeout(value: number) {
    this._webfilterTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterTimeoutInput() {
    return this._webfilterTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      antispam_cache: cdktf.stringToTerraform(this._antispamCache),
      antispam_cache_mpercent: cdktf.numberToTerraform(this._antispamCacheMpercent),
      antispam_cache_mpermille: cdktf.numberToTerraform(this._antispamCacheMpermille),
      antispam_cache_ttl: cdktf.numberToTerraform(this._antispamCacheTtl),
      antispam_expiration: cdktf.numberToTerraform(this._antispamExpiration),
      antispam_force_off: cdktf.stringToTerraform(this._antispamForceOff),
      antispam_license: cdktf.numberToTerraform(this._antispamLicense),
      antispam_timeout: cdktf.numberToTerraform(this._antispamTimeout),
      anycast_sdns_server_ip: cdktf.stringToTerraform(this._anycastSdnsServerIp),
      anycast_sdns_server_port: cdktf.numberToTerraform(this._anycastSdnsServerPort),
      auto_firmware_upgrade: cdktf.stringToTerraform(this._autoFirmwareUpgrade),
      auto_firmware_upgrade_day: cdktf.stringToTerraform(this._autoFirmwareUpgradeDay),
      auto_firmware_upgrade_delay: cdktf.numberToTerraform(this._autoFirmwareUpgradeDelay),
      auto_firmware_upgrade_end_hour: cdktf.numberToTerraform(this._autoFirmwareUpgradeEndHour),
      auto_firmware_upgrade_start_hour: cdktf.numberToTerraform(this._autoFirmwareUpgradeStartHour),
      auto_join_forticloud: cdktf.stringToTerraform(this._autoJoinForticloud),
      ddns_server_ip: cdktf.stringToTerraform(this._ddnsServerIp),
      ddns_server_ip6: cdktf.stringToTerraform(this._ddnsServerIp6),
      ddns_server_port: cdktf.numberToTerraform(this._ddnsServerPort),
      fds_license_expiring_days: cdktf.numberToTerraform(this._fdsLicenseExpiringDays),
      fortiguard_anycast: cdktf.stringToTerraform(this._fortiguardAnycast),
      fortiguard_anycast_source: cdktf.stringToTerraform(this._fortiguardAnycastSource),
      gui_prompt_auto_upgrade: cdktf.stringToTerraform(this._guiPromptAutoUpgrade),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      load_balance_servers: cdktf.numberToTerraform(this._loadBalanceServers),
      outbreak_prevention_cache: cdktf.stringToTerraform(this._outbreakPreventionCache),
      outbreak_prevention_cache_mpercent: cdktf.numberToTerraform(this._outbreakPreventionCacheMpercent),
      outbreak_prevention_cache_mpermille: cdktf.numberToTerraform(this._outbreakPreventionCacheMpermille),
      outbreak_prevention_cache_ttl: cdktf.numberToTerraform(this._outbreakPreventionCacheTtl),
      outbreak_prevention_expiration: cdktf.numberToTerraform(this._outbreakPreventionExpiration),
      outbreak_prevention_force_off: cdktf.stringToTerraform(this._outbreakPreventionForceOff),
      outbreak_prevention_license: cdktf.numberToTerraform(this._outbreakPreventionLicense),
      outbreak_prevention_timeout: cdktf.numberToTerraform(this._outbreakPreventionTimeout),
      persistent_connection: cdktf.stringToTerraform(this._persistentConnection),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_password: cdktf.stringToTerraform(this._proxyPassword),
      proxy_server_ip: cdktf.stringToTerraform(this._proxyServerIp),
      proxy_server_port: cdktf.numberToTerraform(this._proxyServerPort),
      proxy_username: cdktf.stringToTerraform(this._proxyUsername),
      sandbox_inline_scan: cdktf.stringToTerraform(this._sandboxInlineScan),
      sandbox_region: cdktf.stringToTerraform(this._sandboxRegion),
      sdns_options: cdktf.stringToTerraform(this._sdnsOptions),
      sdns_server_ip: cdktf.stringToTerraform(this._sdnsServerIp),
      sdns_server_port: cdktf.numberToTerraform(this._sdnsServerPort),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      subscribe_update_notification: cdktf.stringToTerraform(this._subscribeUpdateNotification),
      update_build_proxy: cdktf.stringToTerraform(this._updateBuildProxy),
      update_dldb: cdktf.stringToTerraform(this._updateDldb),
      update_extdb: cdktf.stringToTerraform(this._updateExtdb),
      update_ffdb: cdktf.stringToTerraform(this._updateFfdb),
      update_server_location: cdktf.stringToTerraform(this._updateServerLocation),
      update_uwdb: cdktf.stringToTerraform(this._updateUwdb),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      videofilter_expiration: cdktf.numberToTerraform(this._videofilterExpiration),
      videofilter_license: cdktf.numberToTerraform(this._videofilterLicense),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      webfilter_cache: cdktf.stringToTerraform(this._webfilterCache),
      webfilter_cache_ttl: cdktf.numberToTerraform(this._webfilterCacheTtl),
      webfilter_expiration: cdktf.numberToTerraform(this._webfilterExpiration),
      webfilter_force_off: cdktf.stringToTerraform(this._webfilterForceOff),
      webfilter_license: cdktf.numberToTerraform(this._webfilterLicense),
      webfilter_timeout: cdktf.numberToTerraform(this._webfilterTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      antispam_cache: {
        value: cdktf.stringToHclTerraform(this._antispamCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antispam_cache_mpercent: {
        value: cdktf.numberToHclTerraform(this._antispamCacheMpercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_cache_mpermille: {
        value: cdktf.numberToHclTerraform(this._antispamCacheMpermille),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._antispamCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_expiration: {
        value: cdktf.numberToHclTerraform(this._antispamExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_force_off: {
        value: cdktf.stringToHclTerraform(this._antispamForceOff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antispam_license: {
        value: cdktf.numberToHclTerraform(this._antispamLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antispam_timeout: {
        value: cdktf.numberToHclTerraform(this._antispamTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anycast_sdns_server_ip: {
        value: cdktf.stringToHclTerraform(this._anycastSdnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anycast_sdns_server_port: {
        value: cdktf.numberToHclTerraform(this._anycastSdnsServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_firmware_upgrade: {
        value: cdktf.stringToHclTerraform(this._autoFirmwareUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_firmware_upgrade_day: {
        value: cdktf.stringToHclTerraform(this._autoFirmwareUpgradeDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_firmware_upgrade_delay: {
        value: cdktf.numberToHclTerraform(this._autoFirmwareUpgradeDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_firmware_upgrade_end_hour: {
        value: cdktf.numberToHclTerraform(this._autoFirmwareUpgradeEndHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_firmware_upgrade_start_hour: {
        value: cdktf.numberToHclTerraform(this._autoFirmwareUpgradeStartHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_join_forticloud: {
        value: cdktf.stringToHclTerraform(this._autoJoinForticloud),
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
      ddns_server_ip6: {
        value: cdktf.stringToHclTerraform(this._ddnsServerIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_server_port: {
        value: cdktf.numberToHclTerraform(this._ddnsServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fds_license_expiring_days: {
        value: cdktf.numberToHclTerraform(this._fdsLicenseExpiringDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortiguard_anycast: {
        value: cdktf.stringToHclTerraform(this._fortiguardAnycast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_anycast_source: {
        value: cdktf.stringToHclTerraform(this._fortiguardAnycastSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_prompt_auto_upgrade: {
        value: cdktf.stringToHclTerraform(this._guiPromptAutoUpgrade),
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
      load_balance_servers: {
        value: cdktf.numberToHclTerraform(this._loadBalanceServers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbreak_prevention_cache: {
        value: cdktf.stringToHclTerraform(this._outbreakPreventionCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbreak_prevention_cache_mpercent: {
        value: cdktf.numberToHclTerraform(this._outbreakPreventionCacheMpercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbreak_prevention_cache_mpermille: {
        value: cdktf.numberToHclTerraform(this._outbreakPreventionCacheMpermille),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbreak_prevention_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._outbreakPreventionCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbreak_prevention_expiration: {
        value: cdktf.numberToHclTerraform(this._outbreakPreventionExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbreak_prevention_force_off: {
        value: cdktf.stringToHclTerraform(this._outbreakPreventionForceOff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbreak_prevention_license: {
        value: cdktf.numberToHclTerraform(this._outbreakPreventionLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outbreak_prevention_timeout: {
        value: cdktf.numberToHclTerraform(this._outbreakPreventionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_connection: {
        value: cdktf.stringToHclTerraform(this._persistentConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_password: {
        value: cdktf.stringToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_server_ip: {
        value: cdktf.stringToHclTerraform(this._proxyServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_server_port: {
        value: cdktf.numberToHclTerraform(this._proxyServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_username: {
        value: cdktf.stringToHclTerraform(this._proxyUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_inline_scan: {
        value: cdktf.stringToHclTerraform(this._sandboxInlineScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_region: {
        value: cdktf.stringToHclTerraform(this._sandboxRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdns_options: {
        value: cdktf.stringToHclTerraform(this._sdnsOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdns_server_ip: {
        value: cdktf.stringToHclTerraform(this._sdnsServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdns_server_port: {
        value: cdktf.numberToHclTerraform(this._sdnsServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_update_notification: {
        value: cdktf.stringToHclTerraform(this._subscribeUpdateNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_build_proxy: {
        value: cdktf.stringToHclTerraform(this._updateBuildProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_dldb: {
        value: cdktf.stringToHclTerraform(this._updateDldb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_extdb: {
        value: cdktf.stringToHclTerraform(this._updateExtdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_ffdb: {
        value: cdktf.stringToHclTerraform(this._updateFfdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_server_location: {
        value: cdktf.stringToHclTerraform(this._updateServerLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_uwdb: {
        value: cdktf.stringToHclTerraform(this._updateUwdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
      videofilter_expiration: {
        value: cdktf.numberToHclTerraform(this._videofilterExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      videofilter_license: {
        value: cdktf.numberToHclTerraform(this._videofilterLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_cache: {
        value: cdktf.stringToHclTerraform(this._webfilterCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._webfilterCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_expiration: {
        value: cdktf.numberToHclTerraform(this._webfilterExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_force_off: {
        value: cdktf.stringToHclTerraform(this._webfilterForceOff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webfilter_license: {
        value: cdktf.numberToHclTerraform(this._webfilterLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webfilter_timeout: {
        value: cdktf.numberToHclTerraform(this._webfilterTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
