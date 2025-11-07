// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvancedThreatSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Boolean value specifying whether sites are allowed or blocked from accessing vulnerable ActiveX controls that are known to have been exploited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#activex_blocked AdvancedThreatSettings#activex_blocked}
  */
  readonly activexBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for ActiveX controls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#activex_capture AdvancedThreatSettings#activex_capture}
  */
  readonly activexCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block websites known to contain adware or spyware that displays malicious advertisements that can collect users' information without their knowledge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#ad_spyware_sites_blocked AdvancedThreatSettings#ad_spyware_sites_blocked}
  */
  readonly adSpywareSitesBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for adware and spyware sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#ad_spyware_sites_capture AdvancedThreatSettings#ad_spyware_sites_capture}
  */
  readonly adSpywareSitesCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to send alerts upon detecting unknown or suspicious C2 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#alert_for_unknown_suspicious_c2_traffic AdvancedThreatSettings#alert_for_unknown_suspicious_c2_traffic}
  */
  readonly alertForUnknownSuspiciousC2Traffic?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block applications and methods used to obscure the destination and the content accessed by the user, therefore blocking traffic to anonymizing web proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#anonymizer_blocked AdvancedThreatSettings#anonymizer_blocked}
  */
  readonly anonymizerBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for anonymizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#anonymizer_capture AdvancedThreatSettings#anonymizer_capture}
  */
  readonly anonymizerCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for blocked countries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#bit_torrent_blocked AdvancedThreatSettings#bit_torrent_blocked}
  */
  readonly bitTorrentBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for BitTorrent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#bit_torrent_capture AdvancedThreatSettings#bit_torrent_capture}
  */
  readonly bitTorrentCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for blocked countries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#block_countries_capture AdvancedThreatSettings#block_countries_capture}
  */
  readonly blockCountriesCapture?: boolean | cdktf.IResolvable;
  /**
  * Destination countries for which the rule is applicable. If not set, the rule is not restricted to specific destination countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#blocked_countries AdvancedThreatSettings#blocked_countries}
  */
  readonly blockedCountries?: string[];
  /**
  * A Boolean value specifying whether known web browser vulnerabilities prone to exploitation are allowed or blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#browser_exploits_blocked AdvancedThreatSettings#browser_exploits_blocked}
  */
  readonly browserExploitsBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for browser exploits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#browser_exploits_capture AdvancedThreatSettings#browser_exploits_capture}
  */
  readonly browserExploitsCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether connections to known Command & Control (C2) Servers are allowed or blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#cmd_ctl_server_blocked AdvancedThreatSettings#cmd_ctl_server_blocked}
  */
  readonly cmdCtlServerBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for connections to known C2 servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#cmd_ctl_server_capture AdvancedThreatSettings#cmd_ctl_server_capture}
  */
  readonly cmdCtlServerCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether botnets are allowed or blocked from sending or receiving commands to unknown servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#cmd_ctl_traffic_blocked AdvancedThreatSettings#cmd_ctl_traffic_blocked}
  */
  readonly cmdCtlTrafficBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for botnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#cmd_ctl_traffic_capture AdvancedThreatSettings#cmd_ctl_traffic_capture}
  */
  readonly cmdCtlTrafficCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block third-party websites that gather cookie information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#cookie_stealing_blocked AdvancedThreatSettings#cookie_stealing_blocked}
  */
  readonly cookieStealingBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for cookie stealing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#cookie_stealing_pcap_enabled AdvancedThreatSettings#cookie_stealing_pcap_enabled}
  */
  readonly cookieStealingPcapEnabled?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block cryptocurrency mining network traffic and script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#crypto_mining_blocked AdvancedThreatSettings#crypto_mining_blocked}
  */
  readonly cryptoMiningBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for cryptomining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#crypto_mining_capture AdvancedThreatSettings#crypto_mining_capture}
  */
  readonly cryptoMiningCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block domains that are suspected to be generated using domain generation algorithms (DGA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#dga_domains_blocked AdvancedThreatSettings#dga_domains_blocked}
  */
  readonly dgaDomainsBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for DGA domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#dga_domains_capture AdvancedThreatSettings#dga_domains_capture}
  */
  readonly dgaDomainsCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether known file format vulnerabilities and suspicious or malicious content in Microsoft Office or PDF documents are allowed or blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#file_format_vunerabilites_blocked AdvancedThreatSettings#file_format_vunerabilites_blocked}
  */
  readonly fileFormatVunerabilitesBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for file format vulnerabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#file_format_vunerabilites_capture AdvancedThreatSettings#file_format_vunerabilites_capture}
  */
  readonly fileFormatVunerabilitesCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block access to Google Hangouts, a popular P2P VoIP application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#google_talk_blocked AdvancedThreatSettings#google_talk_blocked}
  */
  readonly googleTalkBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for Google Hangouts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#google_talk_capture AdvancedThreatSettings#google_talk_capture}
  */
  readonly googleTalkCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#id AdvancedThreatSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for web spam
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#irc_tunnelling_blocked AdvancedThreatSettings#irc_tunnelling_blocked}
  */
  readonly ircTunnellingBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for IRC tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#irc_tunnelling_capture AdvancedThreatSettings#irc_tunnelling_capture}
  */
  readonly ircTunnellingCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether known phishing sites are allowed or blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#known_phishing_sites_blocked AdvancedThreatSettings#known_phishing_sites_blocked}
  */
  readonly knownPhishingSitesBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for known phishing sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#known_phishing_sites_capture AdvancedThreatSettings#known_phishing_sites_capture}
  */
  readonly knownPhishingSitesCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for malicious URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#malicious_urls_capture AdvancedThreatSettings#malicious_urls_capture}
  */
  readonly maliciousUrlsCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether known malicious sites and content are allowed or blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#malware_sites_blocked AdvancedThreatSettings#malware_sites_blocked}
  */
  readonly malwareSitesBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for malicious sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#malware_sites_capture AdvancedThreatSettings#malware_sites_capture}
  */
  readonly malwareSitesCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block this type of cross-site scripting (XSS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#potential_malicious_requests_blocked AdvancedThreatSettings#potential_malicious_requests_blocked}
  */
  readonly potentialMaliciousRequestsBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for (XSS) attacks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#potential_malicious_requests_capture AdvancedThreatSettings#potential_malicious_requests_capture}
  */
  readonly potentialMaliciousRequestsCapture?: boolean | cdktf.IResolvable;
  /**
  * The Page Risk tolerance index set between 0 and 100 (100 being the highest risk).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#risk_tolerance AdvancedThreatSettings#risk_tolerance}
  */
  readonly riskTolerance?: number;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for suspicious web pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#risk_tolerance_capture AdvancedThreatSettings#risk_tolerance_capture}
  */
  readonly riskToleranceCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block SSH traffic being tunneled over HTTP/Ss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#ssh_tunnelling_blocked AdvancedThreatSettings#ssh_tunnelling_blocked}
  */
  readonly sshTunnellingBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for SSH tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#ssh_tunnelling_capture AdvancedThreatSettings#ssh_tunnelling_capture}
  */
  readonly sshTunnellingCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block any detections of communication and callback traffic associated with spyware agents and data transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#suspect_adware_spyware_sites_blocked AdvancedThreatSettings#suspect_adware_spyware_sites_blocked}
  */
  readonly suspectAdwareSpywareSitesBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for suspected adware and spyware sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#suspect_adware_spyware_sites_capture AdvancedThreatSettings#suspect_adware_spyware_sites_capture}
  */
  readonly suspectAdwareSpywareSitesCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block suspected phishing sites identified through heuristic detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#suspected_phishing_sites_blocked AdvancedThreatSettings#suspected_phishing_sites_blocked}
  */
  readonly suspectedPhishingSitesBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for suspected phishing sites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#suspected_phishing_sites_capture AdvancedThreatSettings#suspected_phishing_sites_capture}
  */
  readonly suspectedPhishingSitesCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block the usage of Tor, a popular P2P anonymizer protocol with support for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#tor_blocked AdvancedThreatSettings#tor_blocked}
  */
  readonly torBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for Tor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#tor_capture AdvancedThreatSettings#tor_capture}
  */
  readonly torCapture?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether to allow or block web pages that pretend to contain useful information, to get higher ranking in search engine results or drive traffic to phishing, adware, or spyware distribution sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#web_spam_blocked AdvancedThreatSettings#web_spam_blocked}
  */
  readonly webSpamBlocked?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value specifying whether packet capture (PCAP) is enabled or not for web spam
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#web_spam_capture AdvancedThreatSettings#web_spam_capture}
  */
  readonly webSpamCapture?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings zia_advanced_threat_settings}
*/
export class AdvancedThreatSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_advanced_threat_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvancedThreatSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvancedThreatSettings to import
  * @param importFromId The id of the existing AdvancedThreatSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvancedThreatSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_advanced_threat_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/advanced_threat_settings zia_advanced_threat_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvancedThreatSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdvancedThreatSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_advanced_threat_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activexBlocked = config.activexBlocked;
    this._activexCapture = config.activexCapture;
    this._adSpywareSitesBlocked = config.adSpywareSitesBlocked;
    this._adSpywareSitesCapture = config.adSpywareSitesCapture;
    this._alertForUnknownSuspiciousC2Traffic = config.alertForUnknownSuspiciousC2Traffic;
    this._anonymizerBlocked = config.anonymizerBlocked;
    this._anonymizerCapture = config.anonymizerCapture;
    this._bitTorrentBlocked = config.bitTorrentBlocked;
    this._bitTorrentCapture = config.bitTorrentCapture;
    this._blockCountriesCapture = config.blockCountriesCapture;
    this._blockedCountries = config.blockedCountries;
    this._browserExploitsBlocked = config.browserExploitsBlocked;
    this._browserExploitsCapture = config.browserExploitsCapture;
    this._cmdCtlServerBlocked = config.cmdCtlServerBlocked;
    this._cmdCtlServerCapture = config.cmdCtlServerCapture;
    this._cmdCtlTrafficBlocked = config.cmdCtlTrafficBlocked;
    this._cmdCtlTrafficCapture = config.cmdCtlTrafficCapture;
    this._cookieStealingBlocked = config.cookieStealingBlocked;
    this._cookieStealingPcapEnabled = config.cookieStealingPcapEnabled;
    this._cryptoMiningBlocked = config.cryptoMiningBlocked;
    this._cryptoMiningCapture = config.cryptoMiningCapture;
    this._dgaDomainsBlocked = config.dgaDomainsBlocked;
    this._dgaDomainsCapture = config.dgaDomainsCapture;
    this._fileFormatVunerabilitesBlocked = config.fileFormatVunerabilitesBlocked;
    this._fileFormatVunerabilitesCapture = config.fileFormatVunerabilitesCapture;
    this._googleTalkBlocked = config.googleTalkBlocked;
    this._googleTalkCapture = config.googleTalkCapture;
    this._id = config.id;
    this._ircTunnellingBlocked = config.ircTunnellingBlocked;
    this._ircTunnellingCapture = config.ircTunnellingCapture;
    this._knownPhishingSitesBlocked = config.knownPhishingSitesBlocked;
    this._knownPhishingSitesCapture = config.knownPhishingSitesCapture;
    this._maliciousUrlsCapture = config.maliciousUrlsCapture;
    this._malwareSitesBlocked = config.malwareSitesBlocked;
    this._malwareSitesCapture = config.malwareSitesCapture;
    this._potentialMaliciousRequestsBlocked = config.potentialMaliciousRequestsBlocked;
    this._potentialMaliciousRequestsCapture = config.potentialMaliciousRequestsCapture;
    this._riskTolerance = config.riskTolerance;
    this._riskToleranceCapture = config.riskToleranceCapture;
    this._sshTunnellingBlocked = config.sshTunnellingBlocked;
    this._sshTunnellingCapture = config.sshTunnellingCapture;
    this._suspectAdwareSpywareSitesBlocked = config.suspectAdwareSpywareSitesBlocked;
    this._suspectAdwareSpywareSitesCapture = config.suspectAdwareSpywareSitesCapture;
    this._suspectedPhishingSitesBlocked = config.suspectedPhishingSitesBlocked;
    this._suspectedPhishingSitesCapture = config.suspectedPhishingSitesCapture;
    this._torBlocked = config.torBlocked;
    this._torCapture = config.torCapture;
    this._webSpamBlocked = config.webSpamBlocked;
    this._webSpamCapture = config.webSpamCapture;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activex_blocked - computed: false, optional: true, required: false
  private _activexBlocked?: boolean | cdktf.IResolvable; 
  public get activexBlocked() {
    return this.getBooleanAttribute('activex_blocked');
  }
  public set activexBlocked(value: boolean | cdktf.IResolvable) {
    this._activexBlocked = value;
  }
  public resetActivexBlocked() {
    this._activexBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activexBlockedInput() {
    return this._activexBlocked;
  }

  // activex_capture - computed: false, optional: true, required: false
  private _activexCapture?: boolean | cdktf.IResolvable; 
  public get activexCapture() {
    return this.getBooleanAttribute('activex_capture');
  }
  public set activexCapture(value: boolean | cdktf.IResolvable) {
    this._activexCapture = value;
  }
  public resetActivexCapture() {
    this._activexCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activexCaptureInput() {
    return this._activexCapture;
  }

  // ad_spyware_sites_blocked - computed: false, optional: true, required: false
  private _adSpywareSitesBlocked?: boolean | cdktf.IResolvable; 
  public get adSpywareSitesBlocked() {
    return this.getBooleanAttribute('ad_spyware_sites_blocked');
  }
  public set adSpywareSitesBlocked(value: boolean | cdktf.IResolvable) {
    this._adSpywareSitesBlocked = value;
  }
  public resetAdSpywareSitesBlocked() {
    this._adSpywareSitesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adSpywareSitesBlockedInput() {
    return this._adSpywareSitesBlocked;
  }

  // ad_spyware_sites_capture - computed: false, optional: true, required: false
  private _adSpywareSitesCapture?: boolean | cdktf.IResolvable; 
  public get adSpywareSitesCapture() {
    return this.getBooleanAttribute('ad_spyware_sites_capture');
  }
  public set adSpywareSitesCapture(value: boolean | cdktf.IResolvable) {
    this._adSpywareSitesCapture = value;
  }
  public resetAdSpywareSitesCapture() {
    this._adSpywareSitesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adSpywareSitesCaptureInput() {
    return this._adSpywareSitesCapture;
  }

  // alert_for_unknown_suspicious_c2_traffic - computed: false, optional: true, required: false
  private _alertForUnknownSuspiciousC2Traffic?: boolean | cdktf.IResolvable; 
  public get alertForUnknownSuspiciousC2Traffic() {
    return this.getBooleanAttribute('alert_for_unknown_suspicious_c2_traffic');
  }
  public set alertForUnknownSuspiciousC2Traffic(value: boolean | cdktf.IResolvable) {
    this._alertForUnknownSuspiciousC2Traffic = value;
  }
  public resetAlertForUnknownSuspiciousC2Traffic() {
    this._alertForUnknownSuspiciousC2Traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertForUnknownSuspiciousC2TrafficInput() {
    return this._alertForUnknownSuspiciousC2Traffic;
  }

  // anonymizer_blocked - computed: false, optional: true, required: false
  private _anonymizerBlocked?: boolean | cdktf.IResolvable; 
  public get anonymizerBlocked() {
    return this.getBooleanAttribute('anonymizer_blocked');
  }
  public set anonymizerBlocked(value: boolean | cdktf.IResolvable) {
    this._anonymizerBlocked = value;
  }
  public resetAnonymizerBlocked() {
    this._anonymizerBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymizerBlockedInput() {
    return this._anonymizerBlocked;
  }

  // anonymizer_capture - computed: false, optional: true, required: false
  private _anonymizerCapture?: boolean | cdktf.IResolvable; 
  public get anonymizerCapture() {
    return this.getBooleanAttribute('anonymizer_capture');
  }
  public set anonymizerCapture(value: boolean | cdktf.IResolvable) {
    this._anonymizerCapture = value;
  }
  public resetAnonymizerCapture() {
    this._anonymizerCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymizerCaptureInput() {
    return this._anonymizerCapture;
  }

  // bit_torrent_blocked - computed: false, optional: true, required: false
  private _bitTorrentBlocked?: boolean | cdktf.IResolvable; 
  public get bitTorrentBlocked() {
    return this.getBooleanAttribute('bit_torrent_blocked');
  }
  public set bitTorrentBlocked(value: boolean | cdktf.IResolvable) {
    this._bitTorrentBlocked = value;
  }
  public resetBitTorrentBlocked() {
    this._bitTorrentBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitTorrentBlockedInput() {
    return this._bitTorrentBlocked;
  }

  // bit_torrent_capture - computed: false, optional: true, required: false
  private _bitTorrentCapture?: boolean | cdktf.IResolvable; 
  public get bitTorrentCapture() {
    return this.getBooleanAttribute('bit_torrent_capture');
  }
  public set bitTorrentCapture(value: boolean | cdktf.IResolvable) {
    this._bitTorrentCapture = value;
  }
  public resetBitTorrentCapture() {
    this._bitTorrentCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitTorrentCaptureInput() {
    return this._bitTorrentCapture;
  }

  // block_countries_capture - computed: false, optional: true, required: false
  private _blockCountriesCapture?: boolean | cdktf.IResolvable; 
  public get blockCountriesCapture() {
    return this.getBooleanAttribute('block_countries_capture');
  }
  public set blockCountriesCapture(value: boolean | cdktf.IResolvable) {
    this._blockCountriesCapture = value;
  }
  public resetBlockCountriesCapture() {
    this._blockCountriesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCountriesCaptureInput() {
    return this._blockCountriesCapture;
  }

  // blocked_countries - computed: true, optional: true, required: false
  private _blockedCountries?: string[]; 
  public get blockedCountries() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_countries'));
  }
  public set blockedCountries(value: string[]) {
    this._blockedCountries = value;
  }
  public resetBlockedCountries() {
    this._blockedCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedCountriesInput() {
    return this._blockedCountries;
  }

  // browser_exploits_blocked - computed: false, optional: true, required: false
  private _browserExploitsBlocked?: boolean | cdktf.IResolvable; 
  public get browserExploitsBlocked() {
    return this.getBooleanAttribute('browser_exploits_blocked');
  }
  public set browserExploitsBlocked(value: boolean | cdktf.IResolvable) {
    this._browserExploitsBlocked = value;
  }
  public resetBrowserExploitsBlocked() {
    this._browserExploitsBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserExploitsBlockedInput() {
    return this._browserExploitsBlocked;
  }

  // browser_exploits_capture - computed: false, optional: true, required: false
  private _browserExploitsCapture?: boolean | cdktf.IResolvable; 
  public get browserExploitsCapture() {
    return this.getBooleanAttribute('browser_exploits_capture');
  }
  public set browserExploitsCapture(value: boolean | cdktf.IResolvable) {
    this._browserExploitsCapture = value;
  }
  public resetBrowserExploitsCapture() {
    this._browserExploitsCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserExploitsCaptureInput() {
    return this._browserExploitsCapture;
  }

  // cmd_ctl_server_blocked - computed: false, optional: true, required: false
  private _cmdCtlServerBlocked?: boolean | cdktf.IResolvable; 
  public get cmdCtlServerBlocked() {
    return this.getBooleanAttribute('cmd_ctl_server_blocked');
  }
  public set cmdCtlServerBlocked(value: boolean | cdktf.IResolvable) {
    this._cmdCtlServerBlocked = value;
  }
  public resetCmdCtlServerBlocked() {
    this._cmdCtlServerBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdCtlServerBlockedInput() {
    return this._cmdCtlServerBlocked;
  }

  // cmd_ctl_server_capture - computed: false, optional: true, required: false
  private _cmdCtlServerCapture?: boolean | cdktf.IResolvable; 
  public get cmdCtlServerCapture() {
    return this.getBooleanAttribute('cmd_ctl_server_capture');
  }
  public set cmdCtlServerCapture(value: boolean | cdktf.IResolvable) {
    this._cmdCtlServerCapture = value;
  }
  public resetCmdCtlServerCapture() {
    this._cmdCtlServerCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdCtlServerCaptureInput() {
    return this._cmdCtlServerCapture;
  }

  // cmd_ctl_traffic_blocked - computed: false, optional: true, required: false
  private _cmdCtlTrafficBlocked?: boolean | cdktf.IResolvable; 
  public get cmdCtlTrafficBlocked() {
    return this.getBooleanAttribute('cmd_ctl_traffic_blocked');
  }
  public set cmdCtlTrafficBlocked(value: boolean | cdktf.IResolvable) {
    this._cmdCtlTrafficBlocked = value;
  }
  public resetCmdCtlTrafficBlocked() {
    this._cmdCtlTrafficBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdCtlTrafficBlockedInput() {
    return this._cmdCtlTrafficBlocked;
  }

  // cmd_ctl_traffic_capture - computed: false, optional: true, required: false
  private _cmdCtlTrafficCapture?: boolean | cdktf.IResolvable; 
  public get cmdCtlTrafficCapture() {
    return this.getBooleanAttribute('cmd_ctl_traffic_capture');
  }
  public set cmdCtlTrafficCapture(value: boolean | cdktf.IResolvable) {
    this._cmdCtlTrafficCapture = value;
  }
  public resetCmdCtlTrafficCapture() {
    this._cmdCtlTrafficCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdCtlTrafficCaptureInput() {
    return this._cmdCtlTrafficCapture;
  }

  // cookie_stealing_blocked - computed: false, optional: true, required: false
  private _cookieStealingBlocked?: boolean | cdktf.IResolvable; 
  public get cookieStealingBlocked() {
    return this.getBooleanAttribute('cookie_stealing_blocked');
  }
  public set cookieStealingBlocked(value: boolean | cdktf.IResolvable) {
    this._cookieStealingBlocked = value;
  }
  public resetCookieStealingBlocked() {
    this._cookieStealingBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieStealingBlockedInput() {
    return this._cookieStealingBlocked;
  }

  // cookie_stealing_pcap_enabled - computed: false, optional: true, required: false
  private _cookieStealingPcapEnabled?: boolean | cdktf.IResolvable; 
  public get cookieStealingPcapEnabled() {
    return this.getBooleanAttribute('cookie_stealing_pcap_enabled');
  }
  public set cookieStealingPcapEnabled(value: boolean | cdktf.IResolvable) {
    this._cookieStealingPcapEnabled = value;
  }
  public resetCookieStealingPcapEnabled() {
    this._cookieStealingPcapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieStealingPcapEnabledInput() {
    return this._cookieStealingPcapEnabled;
  }

  // crypto_mining_blocked - computed: false, optional: true, required: false
  private _cryptoMiningBlocked?: boolean | cdktf.IResolvable; 
  public get cryptoMiningBlocked() {
    return this.getBooleanAttribute('crypto_mining_blocked');
  }
  public set cryptoMiningBlocked(value: boolean | cdktf.IResolvable) {
    this._cryptoMiningBlocked = value;
  }
  public resetCryptoMiningBlocked() {
    this._cryptoMiningBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMiningBlockedInput() {
    return this._cryptoMiningBlocked;
  }

  // crypto_mining_capture - computed: false, optional: true, required: false
  private _cryptoMiningCapture?: boolean | cdktf.IResolvable; 
  public get cryptoMiningCapture() {
    return this.getBooleanAttribute('crypto_mining_capture');
  }
  public set cryptoMiningCapture(value: boolean | cdktf.IResolvable) {
    this._cryptoMiningCapture = value;
  }
  public resetCryptoMiningCapture() {
    this._cryptoMiningCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMiningCaptureInput() {
    return this._cryptoMiningCapture;
  }

  // dga_domains_blocked - computed: false, optional: true, required: false
  private _dgaDomainsBlocked?: boolean | cdktf.IResolvable; 
  public get dgaDomainsBlocked() {
    return this.getBooleanAttribute('dga_domains_blocked');
  }
  public set dgaDomainsBlocked(value: boolean | cdktf.IResolvable) {
    this._dgaDomainsBlocked = value;
  }
  public resetDgaDomainsBlocked() {
    this._dgaDomainsBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgaDomainsBlockedInput() {
    return this._dgaDomainsBlocked;
  }

  // dga_domains_capture - computed: false, optional: true, required: false
  private _dgaDomainsCapture?: boolean | cdktf.IResolvable; 
  public get dgaDomainsCapture() {
    return this.getBooleanAttribute('dga_domains_capture');
  }
  public set dgaDomainsCapture(value: boolean | cdktf.IResolvable) {
    this._dgaDomainsCapture = value;
  }
  public resetDgaDomainsCapture() {
    this._dgaDomainsCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgaDomainsCaptureInput() {
    return this._dgaDomainsCapture;
  }

  // file_format_vunerabilites_blocked - computed: false, optional: true, required: false
  private _fileFormatVunerabilitesBlocked?: boolean | cdktf.IResolvable; 
  public get fileFormatVunerabilitesBlocked() {
    return this.getBooleanAttribute('file_format_vunerabilites_blocked');
  }
  public set fileFormatVunerabilitesBlocked(value: boolean | cdktf.IResolvable) {
    this._fileFormatVunerabilitesBlocked = value;
  }
  public resetFileFormatVunerabilitesBlocked() {
    this._fileFormatVunerabilitesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatVunerabilitesBlockedInput() {
    return this._fileFormatVunerabilitesBlocked;
  }

  // file_format_vunerabilites_capture - computed: false, optional: true, required: false
  private _fileFormatVunerabilitesCapture?: boolean | cdktf.IResolvable; 
  public get fileFormatVunerabilitesCapture() {
    return this.getBooleanAttribute('file_format_vunerabilites_capture');
  }
  public set fileFormatVunerabilitesCapture(value: boolean | cdktf.IResolvable) {
    this._fileFormatVunerabilitesCapture = value;
  }
  public resetFileFormatVunerabilitesCapture() {
    this._fileFormatVunerabilitesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatVunerabilitesCaptureInput() {
    return this._fileFormatVunerabilitesCapture;
  }

  // google_talk_blocked - computed: false, optional: true, required: false
  private _googleTalkBlocked?: boolean | cdktf.IResolvable; 
  public get googleTalkBlocked() {
    return this.getBooleanAttribute('google_talk_blocked');
  }
  public set googleTalkBlocked(value: boolean | cdktf.IResolvable) {
    this._googleTalkBlocked = value;
  }
  public resetGoogleTalkBlocked() {
    this._googleTalkBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleTalkBlockedInput() {
    return this._googleTalkBlocked;
  }

  // google_talk_capture - computed: false, optional: true, required: false
  private _googleTalkCapture?: boolean | cdktf.IResolvable; 
  public get googleTalkCapture() {
    return this.getBooleanAttribute('google_talk_capture');
  }
  public set googleTalkCapture(value: boolean | cdktf.IResolvable) {
    this._googleTalkCapture = value;
  }
  public resetGoogleTalkCapture() {
    this._googleTalkCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleTalkCaptureInput() {
    return this._googleTalkCapture;
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

  // irc_tunnelling_blocked - computed: false, optional: true, required: false
  private _ircTunnellingBlocked?: boolean | cdktf.IResolvable; 
  public get ircTunnellingBlocked() {
    return this.getBooleanAttribute('irc_tunnelling_blocked');
  }
  public set ircTunnellingBlocked(value: boolean | cdktf.IResolvable) {
    this._ircTunnellingBlocked = value;
  }
  public resetIrcTunnellingBlocked() {
    this._ircTunnellingBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ircTunnellingBlockedInput() {
    return this._ircTunnellingBlocked;
  }

  // irc_tunnelling_capture - computed: false, optional: true, required: false
  private _ircTunnellingCapture?: boolean | cdktf.IResolvable; 
  public get ircTunnellingCapture() {
    return this.getBooleanAttribute('irc_tunnelling_capture');
  }
  public set ircTunnellingCapture(value: boolean | cdktf.IResolvable) {
    this._ircTunnellingCapture = value;
  }
  public resetIrcTunnellingCapture() {
    this._ircTunnellingCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ircTunnellingCaptureInput() {
    return this._ircTunnellingCapture;
  }

  // known_phishing_sites_blocked - computed: false, optional: true, required: false
  private _knownPhishingSitesBlocked?: boolean | cdktf.IResolvable; 
  public get knownPhishingSitesBlocked() {
    return this.getBooleanAttribute('known_phishing_sites_blocked');
  }
  public set knownPhishingSitesBlocked(value: boolean | cdktf.IResolvable) {
    this._knownPhishingSitesBlocked = value;
  }
  public resetKnownPhishingSitesBlocked() {
    this._knownPhishingSitesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownPhishingSitesBlockedInput() {
    return this._knownPhishingSitesBlocked;
  }

  // known_phishing_sites_capture - computed: false, optional: true, required: false
  private _knownPhishingSitesCapture?: boolean | cdktf.IResolvable; 
  public get knownPhishingSitesCapture() {
    return this.getBooleanAttribute('known_phishing_sites_capture');
  }
  public set knownPhishingSitesCapture(value: boolean | cdktf.IResolvable) {
    this._knownPhishingSitesCapture = value;
  }
  public resetKnownPhishingSitesCapture() {
    this._knownPhishingSitesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownPhishingSitesCaptureInput() {
    return this._knownPhishingSitesCapture;
  }

  // malicious_urls_capture - computed: false, optional: true, required: false
  private _maliciousUrlsCapture?: boolean | cdktf.IResolvable; 
  public get maliciousUrlsCapture() {
    return this.getBooleanAttribute('malicious_urls_capture');
  }
  public set maliciousUrlsCapture(value: boolean | cdktf.IResolvable) {
    this._maliciousUrlsCapture = value;
  }
  public resetMaliciousUrlsCapture() {
    this._maliciousUrlsCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUrlsCaptureInput() {
    return this._maliciousUrlsCapture;
  }

  // malware_sites_blocked - computed: false, optional: true, required: false
  private _malwareSitesBlocked?: boolean | cdktf.IResolvable; 
  public get malwareSitesBlocked() {
    return this.getBooleanAttribute('malware_sites_blocked');
  }
  public set malwareSitesBlocked(value: boolean | cdktf.IResolvable) {
    this._malwareSitesBlocked = value;
  }
  public resetMalwareSitesBlocked() {
    this._malwareSitesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareSitesBlockedInput() {
    return this._malwareSitesBlocked;
  }

  // malware_sites_capture - computed: false, optional: true, required: false
  private _malwareSitesCapture?: boolean | cdktf.IResolvable; 
  public get malwareSitesCapture() {
    return this.getBooleanAttribute('malware_sites_capture');
  }
  public set malwareSitesCapture(value: boolean | cdktf.IResolvable) {
    this._malwareSitesCapture = value;
  }
  public resetMalwareSitesCapture() {
    this._malwareSitesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareSitesCaptureInput() {
    return this._malwareSitesCapture;
  }

  // potential_malicious_requests_blocked - computed: false, optional: true, required: false
  private _potentialMaliciousRequestsBlocked?: boolean | cdktf.IResolvable; 
  public get potentialMaliciousRequestsBlocked() {
    return this.getBooleanAttribute('potential_malicious_requests_blocked');
  }
  public set potentialMaliciousRequestsBlocked(value: boolean | cdktf.IResolvable) {
    this._potentialMaliciousRequestsBlocked = value;
  }
  public resetPotentialMaliciousRequestsBlocked() {
    this._potentialMaliciousRequestsBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get potentialMaliciousRequestsBlockedInput() {
    return this._potentialMaliciousRequestsBlocked;
  }

  // potential_malicious_requests_capture - computed: false, optional: true, required: false
  private _potentialMaliciousRequestsCapture?: boolean | cdktf.IResolvable; 
  public get potentialMaliciousRequestsCapture() {
    return this.getBooleanAttribute('potential_malicious_requests_capture');
  }
  public set potentialMaliciousRequestsCapture(value: boolean | cdktf.IResolvable) {
    this._potentialMaliciousRequestsCapture = value;
  }
  public resetPotentialMaliciousRequestsCapture() {
    this._potentialMaliciousRequestsCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get potentialMaliciousRequestsCaptureInput() {
    return this._potentialMaliciousRequestsCapture;
  }

  // risk_tolerance - computed: false, optional: true, required: false
  private _riskTolerance?: number; 
  public get riskTolerance() {
    return this.getNumberAttribute('risk_tolerance');
  }
  public set riskTolerance(value: number) {
    this._riskTolerance = value;
  }
  public resetRiskTolerance() {
    this._riskTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskToleranceInput() {
    return this._riskTolerance;
  }

  // risk_tolerance_capture - computed: false, optional: true, required: false
  private _riskToleranceCapture?: boolean | cdktf.IResolvable; 
  public get riskToleranceCapture() {
    return this.getBooleanAttribute('risk_tolerance_capture');
  }
  public set riskToleranceCapture(value: boolean | cdktf.IResolvable) {
    this._riskToleranceCapture = value;
  }
  public resetRiskToleranceCapture() {
    this._riskToleranceCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskToleranceCaptureInput() {
    return this._riskToleranceCapture;
  }

  // ssh_tunnelling_blocked - computed: false, optional: true, required: false
  private _sshTunnellingBlocked?: boolean | cdktf.IResolvable; 
  public get sshTunnellingBlocked() {
    return this.getBooleanAttribute('ssh_tunnelling_blocked');
  }
  public set sshTunnellingBlocked(value: boolean | cdktf.IResolvable) {
    this._sshTunnellingBlocked = value;
  }
  public resetSshTunnellingBlocked() {
    this._sshTunnellingBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnellingBlockedInput() {
    return this._sshTunnellingBlocked;
  }

  // ssh_tunnelling_capture - computed: false, optional: true, required: false
  private _sshTunnellingCapture?: boolean | cdktf.IResolvable; 
  public get sshTunnellingCapture() {
    return this.getBooleanAttribute('ssh_tunnelling_capture');
  }
  public set sshTunnellingCapture(value: boolean | cdktf.IResolvable) {
    this._sshTunnellingCapture = value;
  }
  public resetSshTunnellingCapture() {
    this._sshTunnellingCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnellingCaptureInput() {
    return this._sshTunnellingCapture;
  }

  // suspect_adware_spyware_sites_blocked - computed: false, optional: true, required: false
  private _suspectAdwareSpywareSitesBlocked?: boolean | cdktf.IResolvable; 
  public get suspectAdwareSpywareSitesBlocked() {
    return this.getBooleanAttribute('suspect_adware_spyware_sites_blocked');
  }
  public set suspectAdwareSpywareSitesBlocked(value: boolean | cdktf.IResolvable) {
    this._suspectAdwareSpywareSitesBlocked = value;
  }
  public resetSuspectAdwareSpywareSitesBlocked() {
    this._suspectAdwareSpywareSitesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspectAdwareSpywareSitesBlockedInput() {
    return this._suspectAdwareSpywareSitesBlocked;
  }

  // suspect_adware_spyware_sites_capture - computed: false, optional: true, required: false
  private _suspectAdwareSpywareSitesCapture?: boolean | cdktf.IResolvable; 
  public get suspectAdwareSpywareSitesCapture() {
    return this.getBooleanAttribute('suspect_adware_spyware_sites_capture');
  }
  public set suspectAdwareSpywareSitesCapture(value: boolean | cdktf.IResolvable) {
    this._suspectAdwareSpywareSitesCapture = value;
  }
  public resetSuspectAdwareSpywareSitesCapture() {
    this._suspectAdwareSpywareSitesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspectAdwareSpywareSitesCaptureInput() {
    return this._suspectAdwareSpywareSitesCapture;
  }

  // suspected_phishing_sites_blocked - computed: false, optional: true, required: false
  private _suspectedPhishingSitesBlocked?: boolean | cdktf.IResolvable; 
  public get suspectedPhishingSitesBlocked() {
    return this.getBooleanAttribute('suspected_phishing_sites_blocked');
  }
  public set suspectedPhishingSitesBlocked(value: boolean | cdktf.IResolvable) {
    this._suspectedPhishingSitesBlocked = value;
  }
  public resetSuspectedPhishingSitesBlocked() {
    this._suspectedPhishingSitesBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspectedPhishingSitesBlockedInput() {
    return this._suspectedPhishingSitesBlocked;
  }

  // suspected_phishing_sites_capture - computed: false, optional: true, required: false
  private _suspectedPhishingSitesCapture?: boolean | cdktf.IResolvable; 
  public get suspectedPhishingSitesCapture() {
    return this.getBooleanAttribute('suspected_phishing_sites_capture');
  }
  public set suspectedPhishingSitesCapture(value: boolean | cdktf.IResolvable) {
    this._suspectedPhishingSitesCapture = value;
  }
  public resetSuspectedPhishingSitesCapture() {
    this._suspectedPhishingSitesCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspectedPhishingSitesCaptureInput() {
    return this._suspectedPhishingSitesCapture;
  }

  // tor_blocked - computed: false, optional: true, required: false
  private _torBlocked?: boolean | cdktf.IResolvable; 
  public get torBlocked() {
    return this.getBooleanAttribute('tor_blocked');
  }
  public set torBlocked(value: boolean | cdktf.IResolvable) {
    this._torBlocked = value;
  }
  public resetTorBlocked() {
    this._torBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torBlockedInput() {
    return this._torBlocked;
  }

  // tor_capture - computed: false, optional: true, required: false
  private _torCapture?: boolean | cdktf.IResolvable; 
  public get torCapture() {
    return this.getBooleanAttribute('tor_capture');
  }
  public set torCapture(value: boolean | cdktf.IResolvable) {
    this._torCapture = value;
  }
  public resetTorCapture() {
    this._torCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torCaptureInput() {
    return this._torCapture;
  }

  // web_spam_blocked - computed: false, optional: true, required: false
  private _webSpamBlocked?: boolean | cdktf.IResolvable; 
  public get webSpamBlocked() {
    return this.getBooleanAttribute('web_spam_blocked');
  }
  public set webSpamBlocked(value: boolean | cdktf.IResolvable) {
    this._webSpamBlocked = value;
  }
  public resetWebSpamBlocked() {
    this._webSpamBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSpamBlockedInput() {
    return this._webSpamBlocked;
  }

  // web_spam_capture - computed: false, optional: true, required: false
  private _webSpamCapture?: boolean | cdktf.IResolvable; 
  public get webSpamCapture() {
    return this.getBooleanAttribute('web_spam_capture');
  }
  public set webSpamCapture(value: boolean | cdktf.IResolvable) {
    this._webSpamCapture = value;
  }
  public resetWebSpamCapture() {
    this._webSpamCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSpamCaptureInput() {
    return this._webSpamCapture;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activex_blocked: cdktf.booleanToTerraform(this._activexBlocked),
      activex_capture: cdktf.booleanToTerraform(this._activexCapture),
      ad_spyware_sites_blocked: cdktf.booleanToTerraform(this._adSpywareSitesBlocked),
      ad_spyware_sites_capture: cdktf.booleanToTerraform(this._adSpywareSitesCapture),
      alert_for_unknown_suspicious_c2_traffic: cdktf.booleanToTerraform(this._alertForUnknownSuspiciousC2Traffic),
      anonymizer_blocked: cdktf.booleanToTerraform(this._anonymizerBlocked),
      anonymizer_capture: cdktf.booleanToTerraform(this._anonymizerCapture),
      bit_torrent_blocked: cdktf.booleanToTerraform(this._bitTorrentBlocked),
      bit_torrent_capture: cdktf.booleanToTerraform(this._bitTorrentCapture),
      block_countries_capture: cdktf.booleanToTerraform(this._blockCountriesCapture),
      blocked_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedCountries),
      browser_exploits_blocked: cdktf.booleanToTerraform(this._browserExploitsBlocked),
      browser_exploits_capture: cdktf.booleanToTerraform(this._browserExploitsCapture),
      cmd_ctl_server_blocked: cdktf.booleanToTerraform(this._cmdCtlServerBlocked),
      cmd_ctl_server_capture: cdktf.booleanToTerraform(this._cmdCtlServerCapture),
      cmd_ctl_traffic_blocked: cdktf.booleanToTerraform(this._cmdCtlTrafficBlocked),
      cmd_ctl_traffic_capture: cdktf.booleanToTerraform(this._cmdCtlTrafficCapture),
      cookie_stealing_blocked: cdktf.booleanToTerraform(this._cookieStealingBlocked),
      cookie_stealing_pcap_enabled: cdktf.booleanToTerraform(this._cookieStealingPcapEnabled),
      crypto_mining_blocked: cdktf.booleanToTerraform(this._cryptoMiningBlocked),
      crypto_mining_capture: cdktf.booleanToTerraform(this._cryptoMiningCapture),
      dga_domains_blocked: cdktf.booleanToTerraform(this._dgaDomainsBlocked),
      dga_domains_capture: cdktf.booleanToTerraform(this._dgaDomainsCapture),
      file_format_vunerabilites_blocked: cdktf.booleanToTerraform(this._fileFormatVunerabilitesBlocked),
      file_format_vunerabilites_capture: cdktf.booleanToTerraform(this._fileFormatVunerabilitesCapture),
      google_talk_blocked: cdktf.booleanToTerraform(this._googleTalkBlocked),
      google_talk_capture: cdktf.booleanToTerraform(this._googleTalkCapture),
      id: cdktf.stringToTerraform(this._id),
      irc_tunnelling_blocked: cdktf.booleanToTerraform(this._ircTunnellingBlocked),
      irc_tunnelling_capture: cdktf.booleanToTerraform(this._ircTunnellingCapture),
      known_phishing_sites_blocked: cdktf.booleanToTerraform(this._knownPhishingSitesBlocked),
      known_phishing_sites_capture: cdktf.booleanToTerraform(this._knownPhishingSitesCapture),
      malicious_urls_capture: cdktf.booleanToTerraform(this._maliciousUrlsCapture),
      malware_sites_blocked: cdktf.booleanToTerraform(this._malwareSitesBlocked),
      malware_sites_capture: cdktf.booleanToTerraform(this._malwareSitesCapture),
      potential_malicious_requests_blocked: cdktf.booleanToTerraform(this._potentialMaliciousRequestsBlocked),
      potential_malicious_requests_capture: cdktf.booleanToTerraform(this._potentialMaliciousRequestsCapture),
      risk_tolerance: cdktf.numberToTerraform(this._riskTolerance),
      risk_tolerance_capture: cdktf.booleanToTerraform(this._riskToleranceCapture),
      ssh_tunnelling_blocked: cdktf.booleanToTerraform(this._sshTunnellingBlocked),
      ssh_tunnelling_capture: cdktf.booleanToTerraform(this._sshTunnellingCapture),
      suspect_adware_spyware_sites_blocked: cdktf.booleanToTerraform(this._suspectAdwareSpywareSitesBlocked),
      suspect_adware_spyware_sites_capture: cdktf.booleanToTerraform(this._suspectAdwareSpywareSitesCapture),
      suspected_phishing_sites_blocked: cdktf.booleanToTerraform(this._suspectedPhishingSitesBlocked),
      suspected_phishing_sites_capture: cdktf.booleanToTerraform(this._suspectedPhishingSitesCapture),
      tor_blocked: cdktf.booleanToTerraform(this._torBlocked),
      tor_capture: cdktf.booleanToTerraform(this._torCapture),
      web_spam_blocked: cdktf.booleanToTerraform(this._webSpamBlocked),
      web_spam_capture: cdktf.booleanToTerraform(this._webSpamCapture),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activex_blocked: {
        value: cdktf.booleanToHclTerraform(this._activexBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      activex_capture: {
        value: cdktf.booleanToHclTerraform(this._activexCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ad_spyware_sites_blocked: {
        value: cdktf.booleanToHclTerraform(this._adSpywareSitesBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ad_spyware_sites_capture: {
        value: cdktf.booleanToHclTerraform(this._adSpywareSitesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_for_unknown_suspicious_c2_traffic: {
        value: cdktf.booleanToHclTerraform(this._alertForUnknownSuspiciousC2Traffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anonymizer_blocked: {
        value: cdktf.booleanToHclTerraform(this._anonymizerBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anonymizer_capture: {
        value: cdktf.booleanToHclTerraform(this._anonymizerCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bit_torrent_blocked: {
        value: cdktf.booleanToHclTerraform(this._bitTorrentBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bit_torrent_capture: {
        value: cdktf.booleanToHclTerraform(this._bitTorrentCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_countries_capture: {
        value: cdktf.booleanToHclTerraform(this._blockCountriesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked_countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedCountries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      browser_exploits_blocked: {
        value: cdktf.booleanToHclTerraform(this._browserExploitsBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      browser_exploits_capture: {
        value: cdktf.booleanToHclTerraform(this._browserExploitsCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd_ctl_server_blocked: {
        value: cdktf.booleanToHclTerraform(this._cmdCtlServerBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd_ctl_server_capture: {
        value: cdktf.booleanToHclTerraform(this._cmdCtlServerCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd_ctl_traffic_blocked: {
        value: cdktf.booleanToHclTerraform(this._cmdCtlTrafficBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd_ctl_traffic_capture: {
        value: cdktf.booleanToHclTerraform(this._cmdCtlTrafficCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookie_stealing_blocked: {
        value: cdktf.booleanToHclTerraform(this._cookieStealingBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookie_stealing_pcap_enabled: {
        value: cdktf.booleanToHclTerraform(this._cookieStealingPcapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      crypto_mining_blocked: {
        value: cdktf.booleanToHclTerraform(this._cryptoMiningBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      crypto_mining_capture: {
        value: cdktf.booleanToHclTerraform(this._cryptoMiningCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dga_domains_blocked: {
        value: cdktf.booleanToHclTerraform(this._dgaDomainsBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dga_domains_capture: {
        value: cdktf.booleanToHclTerraform(this._dgaDomainsCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_format_vunerabilites_blocked: {
        value: cdktf.booleanToHclTerraform(this._fileFormatVunerabilitesBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_format_vunerabilites_capture: {
        value: cdktf.booleanToHclTerraform(this._fileFormatVunerabilitesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      google_talk_blocked: {
        value: cdktf.booleanToHclTerraform(this._googleTalkBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      google_talk_capture: {
        value: cdktf.booleanToHclTerraform(this._googleTalkCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      irc_tunnelling_blocked: {
        value: cdktf.booleanToHclTerraform(this._ircTunnellingBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      irc_tunnelling_capture: {
        value: cdktf.booleanToHclTerraform(this._ircTunnellingCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      known_phishing_sites_blocked: {
        value: cdktf.booleanToHclTerraform(this._knownPhishingSitesBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      known_phishing_sites_capture: {
        value: cdktf.booleanToHclTerraform(this._knownPhishingSitesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      malicious_urls_capture: {
        value: cdktf.booleanToHclTerraform(this._maliciousUrlsCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      malware_sites_blocked: {
        value: cdktf.booleanToHclTerraform(this._malwareSitesBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      malware_sites_capture: {
        value: cdktf.booleanToHclTerraform(this._malwareSitesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      potential_malicious_requests_blocked: {
        value: cdktf.booleanToHclTerraform(this._potentialMaliciousRequestsBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      potential_malicious_requests_capture: {
        value: cdktf.booleanToHclTerraform(this._potentialMaliciousRequestsCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk_tolerance: {
        value: cdktf.numberToHclTerraform(this._riskTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      risk_tolerance_capture: {
        value: cdktf.booleanToHclTerraform(this._riskToleranceCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_tunnelling_blocked: {
        value: cdktf.booleanToHclTerraform(this._sshTunnellingBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_tunnelling_capture: {
        value: cdktf.booleanToHclTerraform(this._sshTunnellingCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspect_adware_spyware_sites_blocked: {
        value: cdktf.booleanToHclTerraform(this._suspectAdwareSpywareSitesBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspect_adware_spyware_sites_capture: {
        value: cdktf.booleanToHclTerraform(this._suspectAdwareSpywareSitesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspected_phishing_sites_blocked: {
        value: cdktf.booleanToHclTerraform(this._suspectedPhishingSitesBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspected_phishing_sites_capture: {
        value: cdktf.booleanToHclTerraform(this._suspectedPhishingSitesCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tor_blocked: {
        value: cdktf.booleanToHclTerraform(this._torBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tor_capture: {
        value: cdktf.booleanToHclTerraform(this._torCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_spam_blocked: {
        value: cdktf.booleanToHclTerraform(this._webSpamBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_spam_capture: {
        value: cdktf.booleanToHclTerraform(this._webSpamCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
