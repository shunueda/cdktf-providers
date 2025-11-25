// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/advanced_threat_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaAdvancedThreatSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/advanced_threat_settings#id DataZiaAdvancedThreatSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/advanced_threat_settings zia_advanced_threat_settings}
*/
export class DataZiaAdvancedThreatSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_advanced_threat_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaAdvancedThreatSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaAdvancedThreatSettings to import
  * @param importFromId The id of the existing DataZiaAdvancedThreatSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/advanced_threat_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaAdvancedThreatSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_advanced_threat_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/advanced_threat_settings zia_advanced_threat_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaAdvancedThreatSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaAdvancedThreatSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_advanced_threat_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activex_blocked - computed: true, optional: false, required: false
  public get activexBlocked() {
    return this.getBooleanAttribute('activex_blocked');
  }

  // activex_capture - computed: true, optional: false, required: false
  public get activexCapture() {
    return this.getBooleanAttribute('activex_capture');
  }

  // ad_spyware_sites_blocked - computed: true, optional: false, required: false
  public get adSpywareSitesBlocked() {
    return this.getBooleanAttribute('ad_spyware_sites_blocked');
  }

  // ad_spyware_sites_capture - computed: true, optional: false, required: false
  public get adSpywareSitesCapture() {
    return this.getBooleanAttribute('ad_spyware_sites_capture');
  }

  // alert_for_unknown_suspicious_c2_traffic - computed: true, optional: false, required: false
  public get alertForUnknownSuspiciousC2Traffic() {
    return this.getBooleanAttribute('alert_for_unknown_suspicious_c2_traffic');
  }

  // anonymizer_blocked - computed: true, optional: false, required: false
  public get anonymizerBlocked() {
    return this.getBooleanAttribute('anonymizer_blocked');
  }

  // anonymizer_capture - computed: true, optional: false, required: false
  public get anonymizerCapture() {
    return this.getBooleanAttribute('anonymizer_capture');
  }

  // bit_torrent_blocked - computed: true, optional: false, required: false
  public get bitTorrentBlocked() {
    return this.getBooleanAttribute('bit_torrent_blocked');
  }

  // bit_torrent_capture - computed: true, optional: false, required: false
  public get bitTorrentCapture() {
    return this.getBooleanAttribute('bit_torrent_capture');
  }

  // block_countries_capture - computed: true, optional: false, required: false
  public get blockCountriesCapture() {
    return this.getBooleanAttribute('block_countries_capture');
  }

  // blocked_countries - computed: true, optional: false, required: false
  public get blockedCountries() {
    return this.getListAttribute('blocked_countries');
  }

  // browser_exploits_blocked - computed: true, optional: false, required: false
  public get browserExploitsBlocked() {
    return this.getBooleanAttribute('browser_exploits_blocked');
  }

  // browser_exploits_capture - computed: true, optional: false, required: false
  public get browserExploitsCapture() {
    return this.getBooleanAttribute('browser_exploits_capture');
  }

  // cmd_ctl_server_blocked - computed: true, optional: false, required: false
  public get cmdCtlServerBlocked() {
    return this.getBooleanAttribute('cmd_ctl_server_blocked');
  }

  // cmd_ctl_server_capture - computed: true, optional: false, required: false
  public get cmdCtlServerCapture() {
    return this.getBooleanAttribute('cmd_ctl_server_capture');
  }

  // cmd_ctl_traffic_blocked - computed: true, optional: false, required: false
  public get cmdCtlTrafficBlocked() {
    return this.getBooleanAttribute('cmd_ctl_traffic_blocked');
  }

  // cmd_ctl_traffic_capture - computed: true, optional: false, required: false
  public get cmdCtlTrafficCapture() {
    return this.getBooleanAttribute('cmd_ctl_traffic_capture');
  }

  // cookie_stealing_blocked - computed: true, optional: false, required: false
  public get cookieStealingBlocked() {
    return this.getBooleanAttribute('cookie_stealing_blocked');
  }

  // cookie_stealing_pcap_enabled - computed: true, optional: false, required: false
  public get cookieStealingPcapEnabled() {
    return this.getBooleanAttribute('cookie_stealing_pcap_enabled');
  }

  // crypto_mining_blocked - computed: true, optional: false, required: false
  public get cryptoMiningBlocked() {
    return this.getBooleanAttribute('crypto_mining_blocked');
  }

  // crypto_mining_capture - computed: true, optional: false, required: false
  public get cryptoMiningCapture() {
    return this.getBooleanAttribute('crypto_mining_capture');
  }

  // dga_domains_blocked - computed: true, optional: false, required: false
  public get dgaDomainsBlocked() {
    return this.getBooleanAttribute('dga_domains_blocked');
  }

  // dga_domains_capture - computed: true, optional: false, required: false
  public get dgaDomainsCapture() {
    return this.getBooleanAttribute('dga_domains_capture');
  }

  // file_format_vunerabilites_blocked - computed: true, optional: false, required: false
  public get fileFormatVunerabilitesBlocked() {
    return this.getBooleanAttribute('file_format_vunerabilites_blocked');
  }

  // file_format_vunerabilites_capture - computed: true, optional: false, required: false
  public get fileFormatVunerabilitesCapture() {
    return this.getBooleanAttribute('file_format_vunerabilites_capture');
  }

  // google_talk_blocked - computed: true, optional: false, required: false
  public get googleTalkBlocked() {
    return this.getBooleanAttribute('google_talk_blocked');
  }

  // google_talk_capture - computed: true, optional: false, required: false
  public get googleTalkCapture() {
    return this.getBooleanAttribute('google_talk_capture');
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

  // irc_tunnelling_blocked - computed: true, optional: false, required: false
  public get ircTunnellingBlocked() {
    return this.getBooleanAttribute('irc_tunnelling_blocked');
  }

  // irc_tunnelling_capture - computed: true, optional: false, required: false
  public get ircTunnellingCapture() {
    return this.getBooleanAttribute('irc_tunnelling_capture');
  }

  // known_phishing_sites_blocked - computed: true, optional: false, required: false
  public get knownPhishingSitesBlocked() {
    return this.getBooleanAttribute('known_phishing_sites_blocked');
  }

  // known_phishing_sites_capture - computed: true, optional: false, required: false
  public get knownPhishingSitesCapture() {
    return this.getBooleanAttribute('known_phishing_sites_capture');
  }

  // malicious_urls_capture - computed: true, optional: false, required: false
  public get maliciousUrlsCapture() {
    return this.getBooleanAttribute('malicious_urls_capture');
  }

  // malware_sites_blocked - computed: true, optional: false, required: false
  public get malwareSitesBlocked() {
    return this.getBooleanAttribute('malware_sites_blocked');
  }

  // malware_sites_capture - computed: true, optional: false, required: false
  public get malwareSitesCapture() {
    return this.getBooleanAttribute('malware_sites_capture');
  }

  // potential_malicious_requests_blocked - computed: true, optional: false, required: false
  public get potentialMaliciousRequestsBlocked() {
    return this.getBooleanAttribute('potential_malicious_requests_blocked');
  }

  // potential_malicious_requests_capture - computed: true, optional: false, required: false
  public get potentialMaliciousRequestsCapture() {
    return this.getBooleanAttribute('potential_malicious_requests_capture');
  }

  // risk_tolerance - computed: true, optional: false, required: false
  public get riskTolerance() {
    return this.getNumberAttribute('risk_tolerance');
  }

  // risk_tolerance_capture - computed: true, optional: false, required: false
  public get riskToleranceCapture() {
    return this.getBooleanAttribute('risk_tolerance_capture');
  }

  // ssh_tunnelling_blocked - computed: true, optional: false, required: false
  public get sshTunnellingBlocked() {
    return this.getBooleanAttribute('ssh_tunnelling_blocked');
  }

  // ssh_tunnelling_capture - computed: true, optional: false, required: false
  public get sshTunnellingCapture() {
    return this.getBooleanAttribute('ssh_tunnelling_capture');
  }

  // suspect_adware_spyware_sites_blocked - computed: true, optional: false, required: false
  public get suspectAdwareSpywareSitesBlocked() {
    return this.getBooleanAttribute('suspect_adware_spyware_sites_blocked');
  }

  // suspect_adware_spyware_sites_capture - computed: true, optional: false, required: false
  public get suspectAdwareSpywareSitesCapture() {
    return this.getBooleanAttribute('suspect_adware_spyware_sites_capture');
  }

  // suspected_phishing_sites_blocked - computed: true, optional: false, required: false
  public get suspectedPhishingSitesBlocked() {
    return this.getBooleanAttribute('suspected_phishing_sites_blocked');
  }

  // suspected_phishing_sites_capture - computed: true, optional: false, required: false
  public get suspectedPhishingSitesCapture() {
    return this.getBooleanAttribute('suspected_phishing_sites_capture');
  }

  // tor_blocked - computed: true, optional: false, required: false
  public get torBlocked() {
    return this.getBooleanAttribute('tor_blocked');
  }

  // tor_capture - computed: true, optional: false, required: false
  public get torCapture() {
    return this.getBooleanAttribute('tor_capture');
  }

  // web_spam_blocked - computed: true, optional: false, required: false
  public get webSpamBlocked() {
    return this.getBooleanAttribute('web_spam_blocked');
  }

  // web_spam_capture - computed: true, optional: false, required: false
  public get webSpamCapture() {
    return this.getBooleanAttribute('web_spam_capture');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
