// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaWebportalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#auth_portal ZtnaWebportal#auth_portal}
  */
  readonly authPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#auth_rule ZtnaWebportal#auth_rule}
  */
  readonly authRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#auth_virtual_host ZtnaWebportal#auth_virtual_host}
  */
  readonly authVirtualHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#clipboard ZtnaWebportal#clipboard}
  */
  readonly clipboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#cookie_age ZtnaWebportal#cookie_age}
  */
  readonly cookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#customize_forticlient_download_url ZtnaWebportal#customize_forticlient_download_url}
  */
  readonly customizeForticlientDownloadUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#decrypted_traffic_mirror ZtnaWebportal#decrypted_traffic_mirror}
  */
  readonly decryptedTrafficMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#default_window_height ZtnaWebportal#default_window_height}
  */
  readonly defaultWindowHeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#default_window_width ZtnaWebportal#default_window_width}
  */
  readonly defaultWindowWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#display_bookmark ZtnaWebportal#display_bookmark}
  */
  readonly displayBookmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#display_history ZtnaWebportal#display_history}
  */
  readonly displayHistory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#display_status ZtnaWebportal#display_status}
  */
  readonly displayStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#focus_bookmark ZtnaWebportal#focus_bookmark}
  */
  readonly focusBookmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#forticlient_download ZtnaWebportal#forticlient_download}
  */
  readonly forticlientDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#forticlient_download_method ZtnaWebportal#forticlient_download_method}
  */
  readonly forticlientDownloadMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#heading ZtnaWebportal#heading}
  */
  readonly heading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#host ZtnaWebportal#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#id ZtnaWebportal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#log_blocked_traffic ZtnaWebportal#log_blocked_traffic}
  */
  readonly logBlockedTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#macos_forticlient_download_url ZtnaWebportal#macos_forticlient_download_url}
  */
  readonly macosForticlientDownloadUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#name ZtnaWebportal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#policy_auth_sso ZtnaWebportal#policy_auth_sso}
  */
  readonly policyAuthSso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#theme ZtnaWebportal#theme}
  */
  readonly theme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#vdomparam ZtnaWebportal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#vip ZtnaWebportal#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#vip6 ZtnaWebportal#vip6}
  */
  readonly vip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#windows_forticlient_download_url ZtnaWebportal#windows_forticlient_download_url}
  */
  readonly windowsForticlientDownloadUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal fortios_ztna_webportal}
*/
export class ZtnaWebportal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_ztna_webportal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZtnaWebportal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZtnaWebportal to import
  * @param importFromId The id of the existing ZtnaWebportal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZtnaWebportal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_ztna_webportal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/ztna_webportal fortios_ztna_webportal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaWebportalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZtnaWebportalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_ztna_webportal',
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
    this._authPortal = config.authPortal;
    this._authRule = config.authRule;
    this._authVirtualHost = config.authVirtualHost;
    this._clipboard = config.clipboard;
    this._cookieAge = config.cookieAge;
    this._customizeForticlientDownloadUrl = config.customizeForticlientDownloadUrl;
    this._decryptedTrafficMirror = config.decryptedTrafficMirror;
    this._defaultWindowHeight = config.defaultWindowHeight;
    this._defaultWindowWidth = config.defaultWindowWidth;
    this._displayBookmark = config.displayBookmark;
    this._displayHistory = config.displayHistory;
    this._displayStatus = config.displayStatus;
    this._focusBookmark = config.focusBookmark;
    this._forticlientDownload = config.forticlientDownload;
    this._forticlientDownloadMethod = config.forticlientDownloadMethod;
    this._heading = config.heading;
    this._host = config.host;
    this._id = config.id;
    this._logBlockedTraffic = config.logBlockedTraffic;
    this._macosForticlientDownloadUrl = config.macosForticlientDownloadUrl;
    this._name = config.name;
    this._policyAuthSso = config.policyAuthSso;
    this._theme = config.theme;
    this._vdomparam = config.vdomparam;
    this._vip = config.vip;
    this._vip6 = config.vip6;
    this._windowsForticlientDownloadUrl = config.windowsForticlientDownloadUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_portal - computed: true, optional: true, required: false
  private _authPortal?: string; 
  public get authPortal() {
    return this.getStringAttribute('auth_portal');
  }
  public set authPortal(value: string) {
    this._authPortal = value;
  }
  public resetAuthPortal() {
    this._authPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalInput() {
    return this._authPortal;
  }

  // auth_rule - computed: false, optional: true, required: false
  private _authRule?: string; 
  public get authRule() {
    return this.getStringAttribute('auth_rule');
  }
  public set authRule(value: string) {
    this._authRule = value;
  }
  public resetAuthRule() {
    this._authRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRuleInput() {
    return this._authRule;
  }

  // auth_virtual_host - computed: false, optional: true, required: false
  private _authVirtualHost?: string; 
  public get authVirtualHost() {
    return this.getStringAttribute('auth_virtual_host');
  }
  public set authVirtualHost(value: string) {
    this._authVirtualHost = value;
  }
  public resetAuthVirtualHost() {
    this._authVirtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authVirtualHostInput() {
    return this._authVirtualHost;
  }

  // clipboard - computed: true, optional: true, required: false
  private _clipboard?: string; 
  public get clipboard() {
    return this.getStringAttribute('clipboard');
  }
  public set clipboard(value: string) {
    this._clipboard = value;
  }
  public resetClipboard() {
    this._clipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardInput() {
    return this._clipboard;
  }

  // cookie_age - computed: true, optional: true, required: false
  private _cookieAge?: number; 
  public get cookieAge() {
    return this.getNumberAttribute('cookie_age');
  }
  public set cookieAge(value: number) {
    this._cookieAge = value;
  }
  public resetCookieAge() {
    this._cookieAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieAgeInput() {
    return this._cookieAge;
  }

  // customize_forticlient_download_url - computed: true, optional: true, required: false
  private _customizeForticlientDownloadUrl?: string; 
  public get customizeForticlientDownloadUrl() {
    return this.getStringAttribute('customize_forticlient_download_url');
  }
  public set customizeForticlientDownloadUrl(value: string) {
    this._customizeForticlientDownloadUrl = value;
  }
  public resetCustomizeForticlientDownloadUrl() {
    this._customizeForticlientDownloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeForticlientDownloadUrlInput() {
    return this._customizeForticlientDownloadUrl;
  }

  // decrypted_traffic_mirror - computed: false, optional: true, required: false
  private _decryptedTrafficMirror?: string; 
  public get decryptedTrafficMirror() {
    return this.getStringAttribute('decrypted_traffic_mirror');
  }
  public set decryptedTrafficMirror(value: string) {
    this._decryptedTrafficMirror = value;
  }
  public resetDecryptedTrafficMirror() {
    this._decryptedTrafficMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptedTrafficMirrorInput() {
    return this._decryptedTrafficMirror;
  }

  // default_window_height - computed: true, optional: true, required: false
  private _defaultWindowHeight?: number; 
  public get defaultWindowHeight() {
    return this.getNumberAttribute('default_window_height');
  }
  public set defaultWindowHeight(value: number) {
    this._defaultWindowHeight = value;
  }
  public resetDefaultWindowHeight() {
    this._defaultWindowHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWindowHeightInput() {
    return this._defaultWindowHeight;
  }

  // default_window_width - computed: true, optional: true, required: false
  private _defaultWindowWidth?: number; 
  public get defaultWindowWidth() {
    return this.getNumberAttribute('default_window_width');
  }
  public set defaultWindowWidth(value: number) {
    this._defaultWindowWidth = value;
  }
  public resetDefaultWindowWidth() {
    this._defaultWindowWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWindowWidthInput() {
    return this._defaultWindowWidth;
  }

  // display_bookmark - computed: true, optional: true, required: false
  private _displayBookmark?: string; 
  public get displayBookmark() {
    return this.getStringAttribute('display_bookmark');
  }
  public set displayBookmark(value: string) {
    this._displayBookmark = value;
  }
  public resetDisplayBookmark() {
    this._displayBookmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayBookmarkInput() {
    return this._displayBookmark;
  }

  // display_history - computed: true, optional: true, required: false
  private _displayHistory?: string; 
  public get displayHistory() {
    return this.getStringAttribute('display_history');
  }
  public set displayHistory(value: string) {
    this._displayHistory = value;
  }
  public resetDisplayHistory() {
    this._displayHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayHistoryInput() {
    return this._displayHistory;
  }

  // display_status - computed: true, optional: true, required: false
  private _displayStatus?: string; 
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }
  public set displayStatus(value: string) {
    this._displayStatus = value;
  }
  public resetDisplayStatus() {
    this._displayStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStatusInput() {
    return this._displayStatus;
  }

  // focus_bookmark - computed: true, optional: true, required: false
  private _focusBookmark?: string; 
  public get focusBookmark() {
    return this.getStringAttribute('focus_bookmark');
  }
  public set focusBookmark(value: string) {
    this._focusBookmark = value;
  }
  public resetFocusBookmark() {
    this._focusBookmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get focusBookmarkInput() {
    return this._focusBookmark;
  }

  // forticlient_download - computed: true, optional: true, required: false
  private _forticlientDownload?: string; 
  public get forticlientDownload() {
    return this.getStringAttribute('forticlient_download');
  }
  public set forticlientDownload(value: string) {
    this._forticlientDownload = value;
  }
  public resetForticlientDownload() {
    this._forticlientDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientDownloadInput() {
    return this._forticlientDownload;
  }

  // forticlient_download_method - computed: true, optional: true, required: false
  private _forticlientDownloadMethod?: string; 
  public get forticlientDownloadMethod() {
    return this.getStringAttribute('forticlient_download_method');
  }
  public set forticlientDownloadMethod(value: string) {
    this._forticlientDownloadMethod = value;
  }
  public resetForticlientDownloadMethod() {
    this._forticlientDownloadMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientDownloadMethodInput() {
    return this._forticlientDownloadMethod;
  }

  // heading - computed: true, optional: true, required: false
  private _heading?: string; 
  public get heading() {
    return this.getStringAttribute('heading');
  }
  public set heading(value: string) {
    this._heading = value;
  }
  public resetHeading() {
    this._heading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headingInput() {
    return this._heading;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // log_blocked_traffic - computed: true, optional: true, required: false
  private _logBlockedTraffic?: string; 
  public get logBlockedTraffic() {
    return this.getStringAttribute('log_blocked_traffic');
  }
  public set logBlockedTraffic(value: string) {
    this._logBlockedTraffic = value;
  }
  public resetLogBlockedTraffic() {
    this._logBlockedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlockedTrafficInput() {
    return this._logBlockedTraffic;
  }

  // macos_forticlient_download_url - computed: false, optional: true, required: false
  private _macosForticlientDownloadUrl?: string; 
  public get macosForticlientDownloadUrl() {
    return this.getStringAttribute('macos_forticlient_download_url');
  }
  public set macosForticlientDownloadUrl(value: string) {
    this._macosForticlientDownloadUrl = value;
  }
  public resetMacosForticlientDownloadUrl() {
    this._macosForticlientDownloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosForticlientDownloadUrlInput() {
    return this._macosForticlientDownloadUrl;
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

  // policy_auth_sso - computed: true, optional: true, required: false
  private _policyAuthSso?: string; 
  public get policyAuthSso() {
    return this.getStringAttribute('policy_auth_sso');
  }
  public set policyAuthSso(value: string) {
    this._policyAuthSso = value;
  }
  public resetPolicyAuthSso() {
    this._policyAuthSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAuthSsoInput() {
    return this._policyAuthSso;
  }

  // theme - computed: true, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
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

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip6 - computed: false, optional: true, required: false
  private _vip6?: string; 
  public get vip6() {
    return this.getStringAttribute('vip6');
  }
  public set vip6(value: string) {
    this._vip6 = value;
  }
  public resetVip6() {
    this._vip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vip6Input() {
    return this._vip6;
  }

  // windows_forticlient_download_url - computed: false, optional: true, required: false
  private _windowsForticlientDownloadUrl?: string; 
  public get windowsForticlientDownloadUrl() {
    return this.getStringAttribute('windows_forticlient_download_url');
  }
  public set windowsForticlientDownloadUrl(value: string) {
    this._windowsForticlientDownloadUrl = value;
  }
  public resetWindowsForticlientDownloadUrl() {
    this._windowsForticlientDownloadUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsForticlientDownloadUrlInput() {
    return this._windowsForticlientDownloadUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_portal: cdktf.stringToTerraform(this._authPortal),
      auth_rule: cdktf.stringToTerraform(this._authRule),
      auth_virtual_host: cdktf.stringToTerraform(this._authVirtualHost),
      clipboard: cdktf.stringToTerraform(this._clipboard),
      cookie_age: cdktf.numberToTerraform(this._cookieAge),
      customize_forticlient_download_url: cdktf.stringToTerraform(this._customizeForticlientDownloadUrl),
      decrypted_traffic_mirror: cdktf.stringToTerraform(this._decryptedTrafficMirror),
      default_window_height: cdktf.numberToTerraform(this._defaultWindowHeight),
      default_window_width: cdktf.numberToTerraform(this._defaultWindowWidth),
      display_bookmark: cdktf.stringToTerraform(this._displayBookmark),
      display_history: cdktf.stringToTerraform(this._displayHistory),
      display_status: cdktf.stringToTerraform(this._displayStatus),
      focus_bookmark: cdktf.stringToTerraform(this._focusBookmark),
      forticlient_download: cdktf.stringToTerraform(this._forticlientDownload),
      forticlient_download_method: cdktf.stringToTerraform(this._forticlientDownloadMethod),
      heading: cdktf.stringToTerraform(this._heading),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      log_blocked_traffic: cdktf.stringToTerraform(this._logBlockedTraffic),
      macos_forticlient_download_url: cdktf.stringToTerraform(this._macosForticlientDownloadUrl),
      name: cdktf.stringToTerraform(this._name),
      policy_auth_sso: cdktf.stringToTerraform(this._policyAuthSso),
      theme: cdktf.stringToTerraform(this._theme),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vip: cdktf.stringToTerraform(this._vip),
      vip6: cdktf.stringToTerraform(this._vip6),
      windows_forticlient_download_url: cdktf.stringToTerraform(this._windowsForticlientDownloadUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_portal: {
        value: cdktf.stringToHclTerraform(this._authPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_rule: {
        value: cdktf.stringToHclTerraform(this._authRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_virtual_host: {
        value: cdktf.stringToHclTerraform(this._authVirtualHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clipboard: {
        value: cdktf.stringToHclTerraform(this._clipboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_age: {
        value: cdktf.numberToHclTerraform(this._cookieAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      customize_forticlient_download_url: {
        value: cdktf.stringToHclTerraform(this._customizeForticlientDownloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decrypted_traffic_mirror: {
        value: cdktf.stringToHclTerraform(this._decryptedTrafficMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_window_height: {
        value: cdktf.numberToHclTerraform(this._defaultWindowHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_window_width: {
        value: cdktf.numberToHclTerraform(this._defaultWindowWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_bookmark: {
        value: cdktf.stringToHclTerraform(this._displayBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_history: {
        value: cdktf.stringToHclTerraform(this._displayHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_status: {
        value: cdktf.stringToHclTerraform(this._displayStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      focus_bookmark: {
        value: cdktf.stringToHclTerraform(this._focusBookmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_download: {
        value: cdktf.stringToHclTerraform(this._forticlientDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticlient_download_method: {
        value: cdktf.stringToHclTerraform(this._forticlientDownloadMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading: {
        value: cdktf.stringToHclTerraform(this._heading),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      log_blocked_traffic: {
        value: cdktf.stringToHclTerraform(this._logBlockedTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macos_forticlient_download_url: {
        value: cdktf.stringToHclTerraform(this._macosForticlientDownloadUrl),
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
      policy_auth_sso: {
        value: cdktf.stringToHclTerraform(this._policyAuthSso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
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
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip6: {
        value: cdktf.stringToHclTerraform(this._vip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows_forticlient_download_url: {
        value: cdktf.stringToHclTerraform(this._windowsForticlientDownloadUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
