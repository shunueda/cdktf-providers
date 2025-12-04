// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpHotspotProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#___path___ IpHotspotProfile#___path___}
  */
  readonly path?: string;
  /**
  * DNS name of the HotSpot server (it appears as the location of the login page). This name will automatically be added as a static DNS entry in the DNS cache. Name can affect if Hotspot is automatically detected by client device. For example, iOS devices may not detect Hotspot that has a name which includes `.local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#dns_name IpHotspotProfile#dns_name}
  */
  readonly dnsName?: string;
  /**
  * IP address of HotSpot service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#hotspot_address IpHotspotProfile#hotspot_address}
  */
  readonly hotspotAddress?: string;
  /**
  * Directory name in which HotSpot HTML pages are stored (by default hotspot directory). It is possible to specify different directory with modified HTML pages. To change HotSpot login page, connect to the router with FTP and download hotspot directory contents. v6.31 and older software builds: For devices where `flash` directory is present, hotspot html directory must be stored there and path must be typed in as follows: `/(hotspot_dir)`. This must be done in this order as hotspot sees `flash` directory as root location. v6.32 and newer software builds: full path must be typed in html-directory field, including `/flash/(hotspot_dir)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#html_directory IpHotspotProfile#html_directory}
  */
  readonly htmlDirectory?: string;
  /**
  * Alternative path for hotspot html files. It should be used only if customized hotspot html files are stored on external storage(attached usb, hdd, etc). If configured then hotspot will switch to this html path as soon at it becomes available and switch back to html-directory path if override path becomes non-available for some reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#html_directory_override IpHotspotProfile#html_directory_override}
  */
  readonly htmlDirectoryOverride?: string;
  /**
  * HTTP cookie validity time, the option is related to cookie HotSpot login method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#http_cookie_lifetime IpHotspotProfile#http_cookie_lifetime}
  */
  readonly httpCookieLifetime?: string;
  /**
  * Address and port of the proxy server for HotSpot service, when default value is used all request are resolved by the local `/ip proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#http_proxy IpHotspotProfile#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Whether to redirect unauthenticated user to hotspot login page, if he is visiting a https:// url. Since certificate domain name will mismatch, often this leads to errors, so you can set this parameter to `no` and all https requests will simply be rejected and user will have to visit a http page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#https_redirect IpHotspotProfile#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#id IpHotspotProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used HotSpot authentication method
  *  * mac-cookie - enables login by mac cookie method.
  *  * cookie - may only be used with other HTTP authentication method. HTTP cookie is generated, when user authenticates in HotSpot for the first time. User is not asked for the login/password and authenticated automatically, until cookie-lifetime is active.
  *  * http-chap - login/password is required for the user to authenticate in HotSpot. CHAP challenge-response method with MD5 hashing algorithm is used for protecting passwords. 
  *  * http-pap - login/password is required for user to authenticate in HotSpot. Username and password are sent over network in plain text.
  *  * https - login/password is required for user to authenticate in HotSpot. Client login/password exchange between client and server is encrypted with SSL tunnel.
  *  * mac - client is authenticated without asking login form. Client MAC-address is added to `/ip hotspot user` database, client is authenticated as soon as connected to the HotSpot
  *  * trial - client is allowed to use internet without HotSpot login for the specified amount of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#login_by IpHotspotProfile#login_by}
  */
  readonly loginBy?: string[];
  /**
  * Allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#mac_auth_mode IpHotspotProfile#mac_auth_mode}
  */
  readonly macAuthMode?: string;
  /**
  * Used together with MAC authentication, field used to specify password for the users to be authenticated by their MAC addresses. The following option is required, when specific RADIUS server rejects authentication for the clients with blank password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#mac_auth_password IpHotspotProfile#mac_auth_password}
  */
  readonly macAuthPassword?: string;
  /**
  * Descriptive name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#name IpHotspotProfile#name}
  */
  readonly name: string;
  /**
  * `NAS-Port-Type` value to be sent to RADIUS server, `NAS-Port-Type` values are described in the RADIUS RFC 2865. This optional value attribute indicates the type of the physical port of the HotSpot server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#nas_port_type IpHotspotProfile#nas_port_type}
  */
  readonly nasPortType?: string;
  /**
  * Send RADIUS server accounting information for each user, when yes is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#radius_accounting IpHotspotProfile#radius_accounting}
  */
  readonly radiusAccounting?: boolean | cdktf.IResolvable;
  /**
  * Default domain to use for RADIUS requests. Allows to use separate RADIUS server per `/ip hotspot profile`. If used, same domain name should be specified under `/radius domain` value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#radius_default_domain IpHotspotProfile#radius_default_domain}
  */
  readonly radiusDefaultDomain?: string;
  /**
  * How often to send accounting updates . When received is set, interim-time is used from RADIUS server. 0s is the same as received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#radius_interim_update IpHotspotProfile#radius_interim_update}
  */
  readonly radiusInterimUpdate?: string;
  /**
  * `RADIUS-Location-Id` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#radius_location_id IpHotspotProfile#radius_location_id}
  */
  readonly radiusLocationId?: string;
  /**
  * `RADIUS-Location-Id` to be sent to RADIUS server. Used to identify location of the HotSpot server during the communication with RADIUS server. Value is optional and used together with RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#radius_location_name IpHotspotProfile#radius_location_name}
  */
  readonly radiusLocationName?: string;
  /**
  * Controls how the MAC address of the client is encoded in the `User-Name` and `User-Password` attributes when using MAC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#radius_mac_format IpHotspotProfile#radius_mac_format}
  */
  readonly radiusMacFormat?: string;
  /**
  * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold] [rx-burst-time[/tx-burst-time]]]] [priority] [rx-rate-min[/tx-rate-min]] from the point of view of the router (so `rx` is client upload, and `tx` is client download). All rates should be numbers with optional 'k' (1,000s) or 'M' (1,000,000s). If tx-rate is not specified, rx-rate is as tx-rate too. Same goes for tx-burst-rate and tx-burst-threshold and tx-burst-time. If both rx-burst-threshold and tx-burst-threshold are not specified (but burst-rate is specified), rx-rate and tx-rate is used as burst thresholds. If both rx-burst-time and tx-burst-time are not specified, 1s is used as default. rx-rate-min and tx-rate min are the values of limit-at properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#rate_limit IpHotspotProfile#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * SMTP server address to be used to redirect HotSpot users SMTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#smtp_server IpHotspotProfile#smtp_server}
  */
  readonly smtpServer?: string;
  /**
  * Split username from domain name when the username is given in `user@domain` or in `domain\user` format from RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#split_user_domain IpHotspotProfile#split_user_domain}
  */
  readonly splitUserDomain?: boolean | cdktf.IResolvable;
  /**
  * Name of the SSL certificate on the router to to use only for HTTPS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#ssl_certificate IpHotspotProfile#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Used only with trial authentication method. Time value specifies, how long trial user identified by MAC address can use access to public networks without HotSpot authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#trial_uptime_limit IpHotspotProfile#trial_uptime_limit}
  */
  readonly trialUptimeLimit?: string;
  /**
  * Used only with trial authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#trial_uptime_reset IpHotspotProfile#trial_uptime_reset}
  */
  readonly trialUptimeReset?: string;
  /**
  * Specifies hotspot user profile for trial users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#trial_user_profile IpHotspotProfile#trial_user_profile}
  */
  readonly trialUserProfile?: string;
  /**
  * Use RADIUS to authenticate HotSpot users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#use_radius IpHotspotProfile#use_radius}
  */
  readonly useRadius?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile routeros_ip_hotspot_profile}
*/
export class IpHotspotProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_hotspot_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpHotspotProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpHotspotProfile to import
  * @param importFromId The id of the existing IpHotspotProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpHotspotProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_hotspot_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_hotspot_profile routeros_ip_hotspot_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpHotspotProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IpHotspotProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_hotspot_profile',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._dnsName = config.dnsName;
    this._hotspotAddress = config.hotspotAddress;
    this._htmlDirectory = config.htmlDirectory;
    this._htmlDirectoryOverride = config.htmlDirectoryOverride;
    this._httpCookieLifetime = config.httpCookieLifetime;
    this._httpProxy = config.httpProxy;
    this._httpsRedirect = config.httpsRedirect;
    this._id = config.id;
    this._loginBy = config.loginBy;
    this._macAuthMode = config.macAuthMode;
    this._macAuthPassword = config.macAuthPassword;
    this._name = config.name;
    this._nasPortType = config.nasPortType;
    this._radiusAccounting = config.radiusAccounting;
    this._radiusDefaultDomain = config.radiusDefaultDomain;
    this._radiusInterimUpdate = config.radiusInterimUpdate;
    this._radiusLocationId = config.radiusLocationId;
    this._radiusLocationName = config.radiusLocationName;
    this._radiusMacFormat = config.radiusMacFormat;
    this._rateLimit = config.rateLimit;
    this._smtpServer = config.smtpServer;
    this._splitUserDomain = config.splitUserDomain;
    this._sslCertificate = config.sslCertificate;
    this._trialUptimeLimit = config.trialUptimeLimit;
    this._trialUptimeReset = config.trialUptimeReset;
    this._trialUserProfile = config.trialUserProfile;
    this._useRadius = config.useRadius;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // hotspot_address - computed: false, optional: true, required: false
  private _hotspotAddress?: string; 
  public get hotspotAddress() {
    return this.getStringAttribute('hotspot_address');
  }
  public set hotspotAddress(value: string) {
    this._hotspotAddress = value;
  }
  public resetHotspotAddress() {
    this._hotspotAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspotAddressInput() {
    return this._hotspotAddress;
  }

  // html_directory - computed: false, optional: true, required: false
  private _htmlDirectory?: string; 
  public get htmlDirectory() {
    return this.getStringAttribute('html_directory');
  }
  public set htmlDirectory(value: string) {
    this._htmlDirectory = value;
  }
  public resetHtmlDirectory() {
    this._htmlDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlDirectoryInput() {
    return this._htmlDirectory;
  }

  // html_directory_override - computed: false, optional: true, required: false
  private _htmlDirectoryOverride?: string; 
  public get htmlDirectoryOverride() {
    return this.getStringAttribute('html_directory_override');
  }
  public set htmlDirectoryOverride(value: string) {
    this._htmlDirectoryOverride = value;
  }
  public resetHtmlDirectoryOverride() {
    this._htmlDirectoryOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlDirectoryOverrideInput() {
    return this._htmlDirectoryOverride;
  }

  // http_cookie_lifetime - computed: false, optional: true, required: false
  private _httpCookieLifetime?: string; 
  public get httpCookieLifetime() {
    return this.getStringAttribute('http_cookie_lifetime');
  }
  public set httpCookieLifetime(value: string) {
    this._httpCookieLifetime = value;
  }
  public resetHttpCookieLifetime() {
    this._httpCookieLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieLifetimeInput() {
    return this._httpCookieLifetime;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
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

  // login_by - computed: false, optional: true, required: false
  private _loginBy?: string[]; 
  public get loginBy() {
    return cdktf.Fn.tolist(this.getListAttribute('login_by'));
  }
  public set loginBy(value: string[]) {
    this._loginBy = value;
  }
  public resetLoginBy() {
    this._loginBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginByInput() {
    return this._loginBy;
  }

  // mac_auth_mode - computed: false, optional: true, required: false
  private _macAuthMode?: string; 
  public get macAuthMode() {
    return this.getStringAttribute('mac_auth_mode');
  }
  public set macAuthMode(value: string) {
    this._macAuthMode = value;
  }
  public resetMacAuthMode() {
    this._macAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthModeInput() {
    return this._macAuthMode;
  }

  // mac_auth_password - computed: false, optional: true, required: false
  private _macAuthPassword?: string; 
  public get macAuthPassword() {
    return this.getStringAttribute('mac_auth_password');
  }
  public set macAuthPassword(value: string) {
    this._macAuthPassword = value;
  }
  public resetMacAuthPassword() {
    this._macAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthPasswordInput() {
    return this._macAuthPassword;
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

  // nas_port_type - computed: false, optional: true, required: false
  private _nasPortType?: string; 
  public get nasPortType() {
    return this.getStringAttribute('nas_port_type');
  }
  public set nasPortType(value: string) {
    this._nasPortType = value;
  }
  public resetNasPortType() {
    this._nasPortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasPortTypeInput() {
    return this._nasPortType;
  }

  // radius_accounting - computed: false, optional: true, required: false
  private _radiusAccounting?: boolean | cdktf.IResolvable; 
  public get radiusAccounting() {
    return this.getBooleanAttribute('radius_accounting');
  }
  public set radiusAccounting(value: boolean | cdktf.IResolvable) {
    this._radiusAccounting = value;
  }
  public resetRadiusAccounting() {
    this._radiusAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAccountingInput() {
    return this._radiusAccounting;
  }

  // radius_default_domain - computed: false, optional: true, required: false
  private _radiusDefaultDomain?: string; 
  public get radiusDefaultDomain() {
    return this.getStringAttribute('radius_default_domain');
  }
  public set radiusDefaultDomain(value: string) {
    this._radiusDefaultDomain = value;
  }
  public resetRadiusDefaultDomain() {
    this._radiusDefaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDefaultDomainInput() {
    return this._radiusDefaultDomain;
  }

  // radius_interim_update - computed: false, optional: true, required: false
  private _radiusInterimUpdate?: string; 
  public get radiusInterimUpdate() {
    return this.getStringAttribute('radius_interim_update');
  }
  public set radiusInterimUpdate(value: string) {
    this._radiusInterimUpdate = value;
  }
  public resetRadiusInterimUpdate() {
    this._radiusInterimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInterimUpdateInput() {
    return this._radiusInterimUpdate;
  }

  // radius_location_id - computed: false, optional: true, required: false
  private _radiusLocationId?: string; 
  public get radiusLocationId() {
    return this.getStringAttribute('radius_location_id');
  }
  public set radiusLocationId(value: string) {
    this._radiusLocationId = value;
  }
  public resetRadiusLocationId() {
    this._radiusLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusLocationIdInput() {
    return this._radiusLocationId;
  }

  // radius_location_name - computed: false, optional: true, required: false
  private _radiusLocationName?: string; 
  public get radiusLocationName() {
    return this.getStringAttribute('radius_location_name');
  }
  public set radiusLocationName(value: string) {
    this._radiusLocationName = value;
  }
  public resetRadiusLocationName() {
    this._radiusLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusLocationNameInput() {
    return this._radiusLocationName;
  }

  // radius_mac_format - computed: false, optional: true, required: false
  private _radiusMacFormat?: string; 
  public get radiusMacFormat() {
    return this.getStringAttribute('radius_mac_format');
  }
  public set radiusMacFormat(value: string) {
    this._radiusMacFormat = value;
  }
  public resetRadiusMacFormat() {
    this._radiusMacFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacFormatInput() {
    return this._radiusMacFormat;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: string; 
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }
  public set rateLimit(value: string) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer?: string; 
  public get smtpServer() {
    return this.getStringAttribute('smtp_server');
  }
  public set smtpServer(value: string) {
    this._smtpServer = value;
  }
  public resetSmtpServer() {
    this._smtpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer;
  }

  // split_user_domain - computed: false, optional: true, required: false
  private _splitUserDomain?: boolean | cdktf.IResolvable; 
  public get splitUserDomain() {
    return this.getBooleanAttribute('split_user_domain');
  }
  public set splitUserDomain(value: boolean | cdktf.IResolvable) {
    this._splitUserDomain = value;
  }
  public resetSplitUserDomain() {
    this._splitUserDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitUserDomainInput() {
    return this._splitUserDomain;
  }

  // ssl_certificate - computed: false, optional: true, required: false
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

  // trial_uptime_limit - computed: false, optional: true, required: false
  private _trialUptimeLimit?: string; 
  public get trialUptimeLimit() {
    return this.getStringAttribute('trial_uptime_limit');
  }
  public set trialUptimeLimit(value: string) {
    this._trialUptimeLimit = value;
  }
  public resetTrialUptimeLimit() {
    this._trialUptimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialUptimeLimitInput() {
    return this._trialUptimeLimit;
  }

  // trial_uptime_reset - computed: false, optional: true, required: false
  private _trialUptimeReset?: string; 
  public get trialUptimeReset() {
    return this.getStringAttribute('trial_uptime_reset');
  }
  public set trialUptimeReset(value: string) {
    this._trialUptimeReset = value;
  }
  public resetTrialUptimeReset() {
    this._trialUptimeReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialUptimeResetInput() {
    return this._trialUptimeReset;
  }

  // trial_user_profile - computed: false, optional: true, required: false
  private _trialUserProfile?: string; 
  public get trialUserProfile() {
    return this.getStringAttribute('trial_user_profile');
  }
  public set trialUserProfile(value: string) {
    this._trialUserProfile = value;
  }
  public resetTrialUserProfile() {
    this._trialUserProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialUserProfileInput() {
    return this._trialUserProfile;
  }

  // use_radius - computed: false, optional: true, required: false
  private _useRadius?: boolean | cdktf.IResolvable; 
  public get useRadius() {
    return this.getBooleanAttribute('use_radius');
  }
  public set useRadius(value: boolean | cdktf.IResolvable) {
    this._useRadius = value;
  }
  public resetUseRadius() {
    this._useRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRadiusInput() {
    return this._useRadius;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      hotspot_address: cdktf.stringToTerraform(this._hotspotAddress),
      html_directory: cdktf.stringToTerraform(this._htmlDirectory),
      html_directory_override: cdktf.stringToTerraform(this._htmlDirectoryOverride),
      http_cookie_lifetime: cdktf.stringToTerraform(this._httpCookieLifetime),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      https_redirect: cdktf.booleanToTerraform(this._httpsRedirect),
      id: cdktf.stringToTerraform(this._id),
      login_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginBy),
      mac_auth_mode: cdktf.stringToTerraform(this._macAuthMode),
      mac_auth_password: cdktf.stringToTerraform(this._macAuthPassword),
      name: cdktf.stringToTerraform(this._name),
      nas_port_type: cdktf.stringToTerraform(this._nasPortType),
      radius_accounting: cdktf.booleanToTerraform(this._radiusAccounting),
      radius_default_domain: cdktf.stringToTerraform(this._radiusDefaultDomain),
      radius_interim_update: cdktf.stringToTerraform(this._radiusInterimUpdate),
      radius_location_id: cdktf.stringToTerraform(this._radiusLocationId),
      radius_location_name: cdktf.stringToTerraform(this._radiusLocationName),
      radius_mac_format: cdktf.stringToTerraform(this._radiusMacFormat),
      rate_limit: cdktf.stringToTerraform(this._rateLimit),
      smtp_server: cdktf.stringToTerraform(this._smtpServer),
      split_user_domain: cdktf.booleanToTerraform(this._splitUserDomain),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      trial_uptime_limit: cdktf.stringToTerraform(this._trialUptimeLimit),
      trial_uptime_reset: cdktf.stringToTerraform(this._trialUptimeReset),
      trial_user_profile: cdktf.stringToTerraform(this._trialUserProfile),
      use_radius: cdktf.booleanToTerraform(this._useRadius),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hotspot_address: {
        value: cdktf.stringToHclTerraform(this._hotspotAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      html_directory: {
        value: cdktf.stringToHclTerraform(this._htmlDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      html_directory_override: {
        value: cdktf.stringToHclTerraform(this._htmlDirectoryOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cookie_lifetime: {
        value: cdktf.stringToHclTerraform(this._httpCookieLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_redirect: {
        value: cdktf.booleanToHclTerraform(this._httpsRedirect),
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
      login_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loginBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mac_auth_mode: {
        value: cdktf.stringToHclTerraform(this._macAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_auth_password: {
        value: cdktf.stringToHclTerraform(this._macAuthPassword),
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
      nas_port_type: {
        value: cdktf.stringToHclTerraform(this._nasPortType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_accounting: {
        value: cdktf.booleanToHclTerraform(this._radiusAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_default_domain: {
        value: cdktf.stringToHclTerraform(this._radiusDefaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_interim_update: {
        value: cdktf.stringToHclTerraform(this._radiusInterimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_location_id: {
        value: cdktf.stringToHclTerraform(this._radiusLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_location_name: {
        value: cdktf.stringToHclTerraform(this._radiusLocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_format: {
        value: cdktf.stringToHclTerraform(this._radiusMacFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.stringToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_server: {
        value: cdktf.stringToHclTerraform(this._smtpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_user_domain: {
        value: cdktf.booleanToHclTerraform(this._splitUserDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trial_uptime_limit: {
        value: cdktf.stringToHclTerraform(this._trialUptimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trial_uptime_reset: {
        value: cdktf.stringToHclTerraform(this._trialUptimeReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trial_user_profile: {
        value: cdktf.stringToHclTerraform(this._trialUserProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_radius: {
        value: cdktf.booleanToHclTerraform(this._useRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
