// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether adaptive response time monitoring is enabled for this monitor. The default is Disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#adaptive LtmMonitor#adaptive}
  */
  readonly adaptive?: string;
  /**
  * Specifies the absolute number of milliseconds that may not be exceeded by a monitor probe, regardless of Allowed Divergence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#adaptive_limit LtmMonitor#adaptive_limit}
  */
  readonly adaptiveLimit?: number;
  /**
  * Specifies the location in the LDAP tree from which the monitor starts the health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#base LtmMonitor#base}
  */
  readonly base?: string;
  /**
  * Specifies whether the system will query the LDAP servers pointed to by any referrals in the query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#chase_referrals LtmMonitor#chase_referrals}
  */
  readonly chaseReferrals?: string;
  /**
  * Specifies, when enabled, that the SSL options setting (in OpenSSL) is set to ALL. The default value is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#compatibility LtmMonitor#compatibility}
  */
  readonly compatibility?: string;
  /**
  * Custom parent monitor to inherit from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#custom_parent LtmMonitor#custom_parent}
  */
  readonly customParent?: string;
  /**
  * the database in which your user is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#database LtmMonitor#database}
  */
  readonly database?: string;
  /**
  * Alias for the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#destination LtmMonitor#destination}
  */
  readonly destination?: string;
  /**
  * Specifies the domain name to check, for example, Domain is allowed only in case of Parent as /Common/smtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#domain LtmMonitor#domain}
  */
  readonly domain?: string;
  /**
  * Specifies the full path and file name of the file that the system attempts to download. The health check is successful if the system can download the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#filename LtmMonitor#filename}
  */
  readonly filename?: string;
  /**
  * Specifies an LDAP key for which the monitor searches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#filter LtmMonitor#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#id LtmMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies, in seconds, the frequency at which the system issues the monitor check when either the resource is down or the status of the resource is unknown. The default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#interval LtmMonitor#interval}
  */
  readonly interval?: number;
  /**
  * Displays the differentiated services code point (DSCP).The default is 0 (zero)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#ip_dscp LtmMonitor#ip_dscp}
  */
  readonly ipDscp?: number;
  /**
  * Specifies whether the target must include attributes in its response to be considered up. The options are no (Specifies that the system performs only a one-level search (based on the Filter setting), and does not require that the target returns any attributes.) and yes (Specifies that the system performs a sub-tree search, and if the target returns no attributes, the target is considered down.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#mandatory_attributes LtmMonitor#mandatory_attributes}
  */
  readonly mandatoryAttributes?: string;
  /**
  * Specifies whether the system automatically changes the status of a resource to Enabled at the next successful monitor check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#manual_resume LtmMonitor#manual_resume}
  */
  readonly manualResume?: string;
  /**
  * Specifies the data transfer process (DTP) mode. The default value is passive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#mode LtmMonitor#mode}
  */
  readonly mode?: string;
  /**
  * Name of the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#name LtmMonitor#name}
  */
  readonly name: string;
  /**
  * Existing monitor to inherit from. Must be one of /Common/http, /Common/https, /Common/icmp, /Common/gateway_icmp or /Common/tcp_half_open or /Common/smtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#parent LtmMonitor#parent}
  */
  readonly parent: string;
  /**
  * Specifies the password if the monitored target requires authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#password LtmMonitor#password}
  */
  readonly password?: string;
  /**
  * Specifies the regular expression representing the text string that the monitor looks for in the returned resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#receive LtmMonitor#receive}
  */
  readonly receive?: string;
  /**
  * The system marks the node or pool member disabled when its response matches Receive Disable String but not Receive String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#receive_disable LtmMonitor#receive_disable}
  */
  readonly receiveDisable?: string;
  /**
  * Instructs the system to mark the target resource down when the test is successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#reverse LtmMonitor#reverse}
  */
  readonly reverse?: string;
  /**
  * Specifies the secure communications protocol that the monitor uses to communicate with the target. The options are none (Specifies that the system does not use a security protocol for communications with the target.), ssl (Specifies that the system uses the SSL protocol for communications with the target.), and tls (Specifies that the system uses the TLS protocol for communications with the target.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#security LtmMonitor#security}
  */
  readonly security?: string;
  /**
  * Specifies the text string that the monitor sends to the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#send LtmMonitor#send}
  */
  readonly send?: string;
  /**
  * the ssl profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#ssl_profile LtmMonitor#ssl_profile}
  */
  readonly sslProfile?: string;
  /**
  * Specifies the number of seconds to wait after a resource first responds correctly to the monitor before setting the resource to up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#time_until_up LtmMonitor#time_until_up}
  */
  readonly timeUntilUp?: number;
  /**
  * Specifies the number of seconds the target has in which to respond to the monitor request. The default is 16 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#timeout LtmMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Specifies whether the monitor operates in transparent mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#transparent LtmMonitor#transparent}
  */
  readonly transparent?: string;
  /**
  * Specifies the interval for the system to use to perform the health check when a resource is up. The default is 0 (Disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#up_interval LtmMonitor#up_interval}
  */
  readonly upInterval?: number;
  /**
  * Specifies the user name if the monitored target requires authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#username LtmMonitor#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor bigip_ltm_monitor}
*/
export class LtmMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmMonitor to import
  * @param importFromId The id of the existing LtmMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_monitor bigip_ltm_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: LtmMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_monitor',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adaptive = config.adaptive;
    this._adaptiveLimit = config.adaptiveLimit;
    this._base = config.base;
    this._chaseReferrals = config.chaseReferrals;
    this._compatibility = config.compatibility;
    this._customParent = config.customParent;
    this._database = config.database;
    this._destination = config.destination;
    this._domain = config.domain;
    this._filename = config.filename;
    this._filter = config.filter;
    this._id = config.id;
    this._interval = config.interval;
    this._ipDscp = config.ipDscp;
    this._mandatoryAttributes = config.mandatoryAttributes;
    this._manualResume = config.manualResume;
    this._mode = config.mode;
    this._name = config.name;
    this._parent = config.parent;
    this._password = config.password;
    this._receive = config.receive;
    this._receiveDisable = config.receiveDisable;
    this._reverse = config.reverse;
    this._security = config.security;
    this._send = config.send;
    this._sslProfile = config.sslProfile;
    this._timeUntilUp = config.timeUntilUp;
    this._timeout = config.timeout;
    this._transparent = config.transparent;
    this._upInterval = config.upInterval;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive - computed: true, optional: true, required: false
  private _adaptive?: string; 
  public get adaptive() {
    return this.getStringAttribute('adaptive');
  }
  public set adaptive(value: string) {
    this._adaptive = value;
  }
  public resetAdaptive() {
    this._adaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveInput() {
    return this._adaptive;
  }

  // adaptive_limit - computed: true, optional: true, required: false
  private _adaptiveLimit?: number; 
  public get adaptiveLimit() {
    return this.getNumberAttribute('adaptive_limit');
  }
  public set adaptiveLimit(value: number) {
    this._adaptiveLimit = value;
  }
  public resetAdaptiveLimit() {
    this._adaptiveLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveLimitInput() {
    return this._adaptiveLimit;
  }

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

  // chase_referrals - computed: true, optional: true, required: false
  private _chaseReferrals?: string; 
  public get chaseReferrals() {
    return this.getStringAttribute('chase_referrals');
  }
  public set chaseReferrals(value: string) {
    this._chaseReferrals = value;
  }
  public resetChaseReferrals() {
    this._chaseReferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chaseReferralsInput() {
    return this._chaseReferrals;
  }

  // compatibility - computed: false, optional: true, required: false
  private _compatibility?: string; 
  public get compatibility() {
    return this.getStringAttribute('compatibility');
  }
  public set compatibility(value: string) {
    this._compatibility = value;
  }
  public resetCompatibility() {
    this._compatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityInput() {
    return this._compatibility;
  }

  // custom_parent - computed: false, optional: true, required: false
  private _customParent?: string; 
  public get customParent() {
    return this.getStringAttribute('custom_parent');
  }
  public set customParent(value: string) {
    this._customParent = value;
  }
  public resetCustomParent() {
    this._customParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParentInput() {
    return this._customParent;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ip_dscp - computed: true, optional: true, required: false
  private _ipDscp?: number; 
  public get ipDscp() {
    return this.getNumberAttribute('ip_dscp');
  }
  public set ipDscp(value: number) {
    this._ipDscp = value;
  }
  public resetIpDscp() {
    this._ipDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDscpInput() {
    return this._ipDscp;
  }

  // mandatory_attributes - computed: false, optional: true, required: false
  private _mandatoryAttributes?: string; 
  public get mandatoryAttributes() {
    return this.getStringAttribute('mandatory_attributes');
  }
  public set mandatoryAttributes(value: string) {
    this._mandatoryAttributes = value;
  }
  public resetMandatoryAttributes() {
    this._mandatoryAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryAttributesInput() {
    return this._mandatoryAttributes;
  }

  // manual_resume - computed: true, optional: true, required: false
  private _manualResume?: string; 
  public get manualResume() {
    return this.getStringAttribute('manual_resume');
  }
  public set manualResume(value: string) {
    this._manualResume = value;
  }
  public resetManualResume() {
    this._manualResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualResumeInput() {
    return this._manualResume;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
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

  // receive - computed: false, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // receive_disable - computed: false, optional: true, required: false
  private _receiveDisable?: string; 
  public get receiveDisable() {
    return this.getStringAttribute('receive_disable');
  }
  public set receiveDisable(value: string) {
    this._receiveDisable = value;
  }
  public resetReceiveDisable() {
    this._receiveDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveDisableInput() {
    return this._receiveDisable;
  }

  // reverse - computed: true, optional: true, required: false
  private _reverse?: string; 
  public get reverse() {
    return this.getStringAttribute('reverse');
  }
  public set reverse(value: string) {
    this._reverse = value;
  }
  public resetReverse() {
    this._reverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseInput() {
    return this._reverse;
  }

  // security - computed: false, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // ssl_profile - computed: false, optional: true, required: false
  private _sslProfile?: string; 
  public get sslProfile() {
    return this.getStringAttribute('ssl_profile');
  }
  public set sslProfile(value: string) {
    this._sslProfile = value;
  }
  public resetSslProfile() {
    this._sslProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileInput() {
    return this._sslProfile;
  }

  // time_until_up - computed: true, optional: true, required: false
  private _timeUntilUp?: number; 
  public get timeUntilUp() {
    return this.getNumberAttribute('time_until_up');
  }
  public set timeUntilUp(value: number) {
    this._timeUntilUp = value;
  }
  public resetTimeUntilUp() {
    this._timeUntilUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUntilUpInput() {
    return this._timeUntilUp;
  }

  // timeout - computed: true, optional: true, required: false
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

  // transparent - computed: true, optional: true, required: false
  private _transparent?: string; 
  public get transparent() {
    return this.getStringAttribute('transparent');
  }
  public set transparent(value: string) {
    this._transparent = value;
  }
  public resetTransparent() {
    this._transparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentInput() {
    return this._transparent;
  }

  // up_interval - computed: true, optional: true, required: false
  private _upInterval?: number; 
  public get upInterval() {
    return this.getNumberAttribute('up_interval');
  }
  public set upInterval(value: number) {
    this._upInterval = value;
  }
  public resetUpInterval() {
    this._upInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upIntervalInput() {
    return this._upInterval;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptive: cdktf.stringToTerraform(this._adaptive),
      adaptive_limit: cdktf.numberToTerraform(this._adaptiveLimit),
      base: cdktf.stringToTerraform(this._base),
      chase_referrals: cdktf.stringToTerraform(this._chaseReferrals),
      compatibility: cdktf.stringToTerraform(this._compatibility),
      custom_parent: cdktf.stringToTerraform(this._customParent),
      database: cdktf.stringToTerraform(this._database),
      destination: cdktf.stringToTerraform(this._destination),
      domain: cdktf.stringToTerraform(this._domain),
      filename: cdktf.stringToTerraform(this._filename),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      ip_dscp: cdktf.numberToTerraform(this._ipDscp),
      mandatory_attributes: cdktf.stringToTerraform(this._mandatoryAttributes),
      manual_resume: cdktf.stringToTerraform(this._manualResume),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      password: cdktf.stringToTerraform(this._password),
      receive: cdktf.stringToTerraform(this._receive),
      receive_disable: cdktf.stringToTerraform(this._receiveDisable),
      reverse: cdktf.stringToTerraform(this._reverse),
      security: cdktf.stringToTerraform(this._security),
      send: cdktf.stringToTerraform(this._send),
      ssl_profile: cdktf.stringToTerraform(this._sslProfile),
      time_until_up: cdktf.numberToTerraform(this._timeUntilUp),
      timeout: cdktf.numberToTerraform(this._timeout),
      transparent: cdktf.stringToTerraform(this._transparent),
      up_interval: cdktf.numberToTerraform(this._upInterval),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptive: {
        value: cdktf.stringToHclTerraform(this._adaptive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_limit: {
        value: cdktf.numberToHclTerraform(this._adaptiveLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      base: {
        value: cdktf.stringToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chase_referrals: {
        value: cdktf.stringToHclTerraform(this._chaseReferrals),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility: {
        value: cdktf.stringToHclTerraform(this._compatibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_parent: {
        value: cdktf.stringToHclTerraform(this._customParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
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
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_dscp: {
        value: cdktf.numberToHclTerraform(this._ipDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mandatory_attributes: {
        value: cdktf.stringToHclTerraform(this._mandatoryAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_resume: {
        value: cdktf.stringToHclTerraform(this._manualResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
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
      receive: {
        value: cdktf.stringToHclTerraform(this._receive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_disable: {
        value: cdktf.stringToHclTerraform(this._receiveDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse: {
        value: cdktf.stringToHclTerraform(this._reverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send: {
        value: cdktf.stringToHclTerraform(this._send),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_profile: {
        value: cdktf.stringToHclTerraform(this._sslProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_until_up: {
        value: cdktf.numberToHclTerraform(this._timeUntilUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transparent: {
        value: cdktf.stringToHclTerraform(this._transparent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up_interval: {
        value: cdktf.numberToHclTerraform(this._upInterval),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
