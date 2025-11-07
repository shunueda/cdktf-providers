// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpHotspotUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#___path___ IpHotspotUserProfile#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#___unset___ IpHotspotUserProfile#___unset___}
  */
  readonly unset?: string;
  /**
  * Allows to add mac cookie for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#add_mac_cookie IpHotspotUserProfile#add_mac_cookie}
  */
  readonly addMacCookie?: boolean | cdktf.IResolvable;
  /**
  * Name of the address list in which users IP address will be added. Useful to mark traffic per user groups for queue tree configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#address_list IpHotspotUserProfile#address_list}
  */
  readonly addressList?: string;
  /**
  * IP pool name from which the user will get IP. When user has improper network settings configuration on the computer, HotSpot server makes translation and assigns correct IP address from the pool instead of incorrect one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#address_pool IpHotspotUserProfile#address_pool}
  */
  readonly addressPool?: string;
  /**
  * Enable forced advertisement popups. After certain interval specific web-page is being displayed for HotSpot users. Advertisement page might be blocked by browsers popup blockers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#advertise IpHotspotUserProfile#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Set of intervals between advertisement popups. After the list is done, the last value is used for all further advertisements, 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#advertise_interval IpHotspotUserProfile#advertise_interval}
  */
  readonly advertiseInterval?: string[];
  /**
  * How long advertisement is shown, before blocking network access for HotSpot client. Connection to Internet is not allowed, when advertisement is not shown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#advertise_timeout IpHotspotUserProfile#advertise_timeout}
  */
  readonly advertiseTimeout?: string;
  /**
  * List of URLs that is show for advertisement popups. After the last URL is used, list starts from the begining.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#advertise_url IpHotspotUserProfile#advertise_url}
  */
  readonly advertiseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#id IpHotspotUserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximal period of inactivity for authorized HotSpot clients. Timer is counting, when there is no traffic coming from that client and going through the router, for example computer is switched off. User is logged out, dropped of the host list, the address used by the user is freed, when timeout is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#idle_timeout IpHotspotUserProfile#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Name of the firewall chain applied to incoming packets from the users of this profile, jump rule is required from built-in chain (input, forward, output) to chain=hotspot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#incoming_filter IpHotspotUserProfile#incoming_filter}
  */
  readonly incomingFilter?: string;
  /**
  * Packet mark put on incoming packets from every user of this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#incoming_packet_mark IpHotspotUserProfile#incoming_packet_mark}
  */
  readonly incomingPacketMark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#insert_queue_before IpHotspotUserProfile#insert_queue_before}
  */
  readonly insertQueueBefore?: string;
  /**
  * Keepalive timeout for authorized HotSpot clients. Used to detect, that the computer of the client is alive and reachable. User is logged out, when timeout value is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#keepalive_timeout IpHotspotUserProfile#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Selects mac-cookie timeout from last login or logout. Read more>>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#mac_cookie_timeout IpHotspotUserProfile#mac_cookie_timeout}
  */
  readonly macCookieTimeout?: string;
  /**
  * Descriptive name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#name IpHotspotUserProfile#name}
  */
  readonly name: string;
  /**
  * Script name to be executed, when user logs in to the HotSpot from the particular profile. It is possible to get username from internal user and interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on bridge interface, then interface variable will show bridge as actual interface unless use-ip-firewall' is set in bridge settings. List of available variables: $user $username (alternative var name for $user) $address $``mac-address`` $interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#on_login IpHotspotUserProfile#on_login}
  */
  readonly onLogin?: string;
  /**
  * Script name to be executed, when user logs out from the HotSpot.It is possible to get username from internal user and interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on bridge interface, then interface variable will show bridge as actual interface unless use-ip-firewall is set in bridge settings. List of available variables: $user $username (alternative var name for $user) $address $``mac-address`` $interface $cause Starting with v6.34rc11 some additional variables are available: $uptime-secs - final session time in seconds $bytes-in - bytes uploaded $bytes-out - bytes downloaded $bytes-total - bytes up + bytes down $packets-in - packets uploaded $packets-out - packets downloaded $packets-total - packets up + packets down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#on_logout IpHotspotUserProfile#on_logout}
  */
  readonly onLogout?: string;
  /**
  * Option to show status page for user authenticated with mac login method. For example to show advertisement on status page (alogin.html) http-login - open status page only for HTTP login (includes cookie and HTTPS) always - open HTTP status page in case of mac login as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#open_status_page IpHotspotUserProfile#open_status_page}
  */
  readonly openStatusPage?: string;
  /**
  * Name of the firewall chain applied to outgoing packets from the users of this profile, jump rule is required from built-in chain (input, forward, output) to chain=hotspot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#outgoing_filter IpHotspotUserProfile#outgoing_filter}
  */
  readonly outgoingFilter?: string;
  /**
  * Packet mark put on outgoing packets from every user of this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#outgoing_packet_mark IpHotspotUserProfile#outgoing_packet_mark}
  */
  readonly outgoingPacketMark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#parent_queue IpHotspotUserProfile#parent_queue}
  */
  readonly parentQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#queue_type IpHotspotUserProfile#queue_type}
  */
  readonly queueType?: string;
  /**
  * Simple dynamic queue is created for user, once it logs in to the HotSpot. Rate-limitation is configured in the following form [rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold] [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]]. For example, to set 1M download, 512k upload for the client, rate-limit=512k/1M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#rate_limit IpHotspotUserProfile#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * Allowed session time for client. After this time, the user is logged out unconditionally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#session_timeout IpHotspotUserProfile#session_timeout}
  */
  readonly sessionTimeout?: string;
  /**
  * Allowed number of simultaneously logged in users with the same HotSpot username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#shared_users IpHotspotUserProfile#shared_users}
  */
  readonly sharedUsers?: string;
  /**
  * HotSpot status page autorefresh interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#status_autorefresh IpHotspotUserProfile#status_autorefresh}
  */
  readonly statusAutorefresh?: string;
  /**
  * Use transparent HTTP proxy for the authorized users of this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#transparent_proxy IpHotspotUserProfile#transparent_proxy}
  */
  readonly transparentProxy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile routeros_ip_hotspot_user_profile}
*/
export class IpHotspotUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_hotspot_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpHotspotUserProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpHotspotUserProfile to import
  * @param importFromId The id of the existing IpHotspotUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpHotspotUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_hotspot_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user_profile routeros_ip_hotspot_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpHotspotUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IpHotspotUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_hotspot_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
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
    this._unset = config.unset;
    this._addMacCookie = config.addMacCookie;
    this._addressList = config.addressList;
    this._addressPool = config.addressPool;
    this._advertise = config.advertise;
    this._advertiseInterval = config.advertiseInterval;
    this._advertiseTimeout = config.advertiseTimeout;
    this._advertiseUrl = config.advertiseUrl;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._incomingFilter = config.incomingFilter;
    this._incomingPacketMark = config.incomingPacketMark;
    this._insertQueueBefore = config.insertQueueBefore;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._macCookieTimeout = config.macCookieTimeout;
    this._name = config.name;
    this._onLogin = config.onLogin;
    this._onLogout = config.onLogout;
    this._openStatusPage = config.openStatusPage;
    this._outgoingFilter = config.outgoingFilter;
    this._outgoingPacketMark = config.outgoingPacketMark;
    this._parentQueue = config.parentQueue;
    this._queueType = config.queueType;
    this._rateLimit = config.rateLimit;
    this._sessionTimeout = config.sessionTimeout;
    this._sharedUsers = config.sharedUsers;
    this._statusAutorefresh = config.statusAutorefresh;
    this._transparentProxy = config.transparentProxy;
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

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
  }

  // add_mac_cookie - computed: false, optional: true, required: false
  private _addMacCookie?: boolean | cdktf.IResolvable; 
  public get addMacCookie() {
    return this.getBooleanAttribute('add_mac_cookie');
  }
  public set addMacCookie(value: boolean | cdktf.IResolvable) {
    this._addMacCookie = value;
  }
  public resetAddMacCookie() {
    this._addMacCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addMacCookieInput() {
    return this._addMacCookie;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList?: string; 
  public get addressList() {
    return this.getStringAttribute('address_list');
  }
  public set addressList(value: string) {
    this._addressList = value;
  }
  public resetAddressList() {
    this._addressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList;
  }

  // address_pool - computed: false, optional: true, required: false
  private _addressPool?: string; 
  public get addressPool() {
    return this.getStringAttribute('address_pool');
  }
  public set addressPool(value: string) {
    this._addressPool = value;
  }
  public resetAddressPool() {
    this._addressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolInput() {
    return this._addressPool;
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
  }

  // advertise_interval - computed: false, optional: true, required: false
  private _advertiseInterval?: string[]; 
  public get advertiseInterval() {
    return cdktf.Fn.tolist(this.getListAttribute('advertise_interval'));
  }
  public set advertiseInterval(value: string[]) {
    this._advertiseInterval = value;
  }
  public resetAdvertiseInterval() {
    this._advertiseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIntervalInput() {
    return this._advertiseInterval;
  }

  // advertise_timeout - computed: false, optional: true, required: false
  private _advertiseTimeout?: string; 
  public get advertiseTimeout() {
    return this.getStringAttribute('advertise_timeout');
  }
  public set advertiseTimeout(value: string) {
    this._advertiseTimeout = value;
  }
  public resetAdvertiseTimeout() {
    this._advertiseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseTimeoutInput() {
    return this._advertiseTimeout;
  }

  // advertise_url - computed: false, optional: true, required: false
  private _advertiseUrl?: string; 
  public get advertiseUrl() {
    return this.getStringAttribute('advertise_url');
  }
  public set advertiseUrl(value: string) {
    this._advertiseUrl = value;
  }
  public resetAdvertiseUrl() {
    this._advertiseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseUrlInput() {
    return this._advertiseUrl;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // incoming_filter - computed: false, optional: true, required: false
  private _incomingFilter?: string; 
  public get incomingFilter() {
    return this.getStringAttribute('incoming_filter');
  }
  public set incomingFilter(value: string) {
    this._incomingFilter = value;
  }
  public resetIncomingFilter() {
    this._incomingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingFilterInput() {
    return this._incomingFilter;
  }

  // incoming_packet_mark - computed: false, optional: true, required: false
  private _incomingPacketMark?: string; 
  public get incomingPacketMark() {
    return this.getStringAttribute('incoming_packet_mark');
  }
  public set incomingPacketMark(value: string) {
    this._incomingPacketMark = value;
  }
  public resetIncomingPacketMark() {
    this._incomingPacketMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPacketMarkInput() {
    return this._incomingPacketMark;
  }

  // insert_queue_before - computed: false, optional: true, required: false
  private _insertQueueBefore?: string; 
  public get insertQueueBefore() {
    return this.getStringAttribute('insert_queue_before');
  }
  public set insertQueueBefore(value: string) {
    this._insertQueueBefore = value;
  }
  public resetInsertQueueBefore() {
    this._insertQueueBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQueueBeforeInput() {
    return this._insertQueueBefore;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // mac_cookie_timeout - computed: false, optional: true, required: false
  private _macCookieTimeout?: string; 
  public get macCookieTimeout() {
    return this.getStringAttribute('mac_cookie_timeout');
  }
  public set macCookieTimeout(value: string) {
    this._macCookieTimeout = value;
  }
  public resetMacCookieTimeout() {
    this._macCookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCookieTimeoutInput() {
    return this._macCookieTimeout;
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

  // on_login - computed: false, optional: true, required: false
  private _onLogin?: string; 
  public get onLogin() {
    return this.getStringAttribute('on_login');
  }
  public set onLogin(value: string) {
    this._onLogin = value;
  }
  public resetOnLogin() {
    this._onLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLoginInput() {
    return this._onLogin;
  }

  // on_logout - computed: false, optional: true, required: false
  private _onLogout?: string; 
  public get onLogout() {
    return this.getStringAttribute('on_logout');
  }
  public set onLogout(value: string) {
    this._onLogout = value;
  }
  public resetOnLogout() {
    this._onLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLogoutInput() {
    return this._onLogout;
  }

  // open_status_page - computed: false, optional: true, required: false
  private _openStatusPage?: string; 
  public get openStatusPage() {
    return this.getStringAttribute('open_status_page');
  }
  public set openStatusPage(value: string) {
    this._openStatusPage = value;
  }
  public resetOpenStatusPage() {
    this._openStatusPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openStatusPageInput() {
    return this._openStatusPage;
  }

  // outgoing_filter - computed: false, optional: true, required: false
  private _outgoingFilter?: string; 
  public get outgoingFilter() {
    return this.getStringAttribute('outgoing_filter');
  }
  public set outgoingFilter(value: string) {
    this._outgoingFilter = value;
  }
  public resetOutgoingFilter() {
    this._outgoingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingFilterInput() {
    return this._outgoingFilter;
  }

  // outgoing_packet_mark - computed: false, optional: true, required: false
  private _outgoingPacketMark?: string; 
  public get outgoingPacketMark() {
    return this.getStringAttribute('outgoing_packet_mark');
  }
  public set outgoingPacketMark(value: string) {
    this._outgoingPacketMark = value;
  }
  public resetOutgoingPacketMark() {
    this._outgoingPacketMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingPacketMarkInput() {
    return this._outgoingPacketMark;
  }

  // parent_queue - computed: false, optional: true, required: false
  private _parentQueue?: string; 
  public get parentQueue() {
    return this.getStringAttribute('parent_queue');
  }
  public set parentQueue(value: string) {
    this._parentQueue = value;
  }
  public resetParentQueue() {
    this._parentQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentQueueInput() {
    return this._parentQueue;
  }

  // queue_type - computed: false, optional: true, required: false
  private _queueType?: string; 
  public get queueType() {
    return this.getStringAttribute('queue_type');
  }
  public set queueType(value: string) {
    this._queueType = value;
  }
  public resetQueueType() {
    this._queueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTypeInput() {
    return this._queueType;
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

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: string; 
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }
  public set sessionTimeout(value: string) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // shared_users - computed: false, optional: true, required: false
  private _sharedUsers?: string; 
  public get sharedUsers() {
    return this.getStringAttribute('shared_users');
  }
  public set sharedUsers(value: string) {
    this._sharedUsers = value;
  }
  public resetSharedUsers() {
    this._sharedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedUsersInput() {
    return this._sharedUsers;
  }

  // status_autorefresh - computed: false, optional: true, required: false
  private _statusAutorefresh?: string; 
  public get statusAutorefresh() {
    return this.getStringAttribute('status_autorefresh');
  }
  public set statusAutorefresh(value: string) {
    this._statusAutorefresh = value;
  }
  public resetStatusAutorefresh() {
    this._statusAutorefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusAutorefreshInput() {
    return this._statusAutorefresh;
  }

  // transparent_proxy - computed: false, optional: true, required: false
  private _transparentProxy?: boolean | cdktf.IResolvable; 
  public get transparentProxy() {
    return this.getBooleanAttribute('transparent_proxy');
  }
  public set transparentProxy(value: boolean | cdktf.IResolvable) {
    this._transparentProxy = value;
  }
  public resetTransparentProxy() {
    this._transparentProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentProxyInput() {
    return this._transparentProxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___unset___: cdktf.stringToTerraform(this._unset),
      add_mac_cookie: cdktf.booleanToTerraform(this._addMacCookie),
      address_list: cdktf.stringToTerraform(this._addressList),
      address_pool: cdktf.stringToTerraform(this._addressPool),
      advertise: cdktf.booleanToTerraform(this._advertise),
      advertise_interval: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advertiseInterval),
      advertise_timeout: cdktf.stringToTerraform(this._advertiseTimeout),
      advertise_url: cdktf.stringToTerraform(this._advertiseUrl),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      incoming_filter: cdktf.stringToTerraform(this._incomingFilter),
      incoming_packet_mark: cdktf.stringToTerraform(this._incomingPacketMark),
      insert_queue_before: cdktf.stringToTerraform(this._insertQueueBefore),
      keepalive_timeout: cdktf.stringToTerraform(this._keepaliveTimeout),
      mac_cookie_timeout: cdktf.stringToTerraform(this._macCookieTimeout),
      name: cdktf.stringToTerraform(this._name),
      on_login: cdktf.stringToTerraform(this._onLogin),
      on_logout: cdktf.stringToTerraform(this._onLogout),
      open_status_page: cdktf.stringToTerraform(this._openStatusPage),
      outgoing_filter: cdktf.stringToTerraform(this._outgoingFilter),
      outgoing_packet_mark: cdktf.stringToTerraform(this._outgoingPacketMark),
      parent_queue: cdktf.stringToTerraform(this._parentQueue),
      queue_type: cdktf.stringToTerraform(this._queueType),
      rate_limit: cdktf.stringToTerraform(this._rateLimit),
      session_timeout: cdktf.stringToTerraform(this._sessionTimeout),
      shared_users: cdktf.stringToTerraform(this._sharedUsers),
      status_autorefresh: cdktf.stringToTerraform(this._statusAutorefresh),
      transparent_proxy: cdktf.booleanToTerraform(this._transparentProxy),
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
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_mac_cookie: {
        value: cdktf.booleanToHclTerraform(this._addMacCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_list: {
        value: cdktf.stringToHclTerraform(this._addressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise: {
        value: cdktf.booleanToHclTerraform(this._advertise),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_interval: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advertiseInterval),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      advertise_timeout: {
        value: cdktf.stringToHclTerraform(this._advertiseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_url: {
        value: cdktf.stringToHclTerraform(this._advertiseUrl),
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
      idle_timeout: {
        value: cdktf.stringToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incoming_filter: {
        value: cdktf.stringToHclTerraform(this._incomingFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incoming_packet_mark: {
        value: cdktf.stringToHclTerraform(this._incomingPacketMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_queue_before: {
        value: cdktf.stringToHclTerraform(this._insertQueueBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_timeout: {
        value: cdktf.stringToHclTerraform(this._keepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_cookie_timeout: {
        value: cdktf.stringToHclTerraform(this._macCookieTimeout),
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
      on_login: {
        value: cdktf.stringToHclTerraform(this._onLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_logout: {
        value: cdktf.stringToHclTerraform(this._onLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_status_page: {
        value: cdktf.stringToHclTerraform(this._openStatusPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outgoing_filter: {
        value: cdktf.stringToHclTerraform(this._outgoingFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outgoing_packet_mark: {
        value: cdktf.stringToHclTerraform(this._outgoingPacketMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_queue: {
        value: cdktf.stringToHclTerraform(this._parentQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_type: {
        value: cdktf.stringToHclTerraform(this._queueType),
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
      session_timeout: {
        value: cdktf.stringToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_users: {
        value: cdktf.stringToHclTerraform(this._sharedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_autorefresh: {
        value: cdktf.stringToHclTerraform(this._statusAutorefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transparent_proxy: {
        value: cdktf.booleanToHclTerraform(this._transparentProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
