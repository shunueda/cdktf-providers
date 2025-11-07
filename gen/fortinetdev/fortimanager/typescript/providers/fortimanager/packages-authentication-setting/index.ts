// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesAuthenticationSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#active_auth_scheme PackagesAuthenticationSetting#active_auth_scheme}
  */
  readonly activeAuthScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#adom PackagesAuthenticationSetting#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#auth_https PackagesAuthenticationSetting#auth_https}
  */
  readonly authHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal PackagesAuthenticationSetting#captive_portal}
  */
  readonly captivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal6 PackagesAuthenticationSetting#captive_portal6}
  */
  readonly captivePortal6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal_ip PackagesAuthenticationSetting#captive_portal_ip}
  */
  readonly captivePortalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal_ip6 PackagesAuthenticationSetting#captive_portal_ip6}
  */
  readonly captivePortalIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal_port PackagesAuthenticationSetting#captive_portal_port}
  */
  readonly captivePortalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal_ssl_port PackagesAuthenticationSetting#captive_portal_ssl_port}
  */
  readonly captivePortalSslPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#captive_portal_type PackagesAuthenticationSetting#captive_portal_type}
  */
  readonly captivePortalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#cert_auth PackagesAuthenticationSetting#cert_auth}
  */
  readonly certAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#cert_captive_portal PackagesAuthenticationSetting#cert_captive_portal}
  */
  readonly certCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#cert_captive_portal_ip PackagesAuthenticationSetting#cert_captive_portal_ip}
  */
  readonly certCaptivePortalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#cert_captive_portal_port PackagesAuthenticationSetting#cert_captive_portal_port}
  */
  readonly certCaptivePortalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#cookie_max_age PackagesAuthenticationSetting#cookie_max_age}
  */
  readonly cookieMaxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#cookie_refresh_div PackagesAuthenticationSetting#cookie_refresh_div}
  */
  readonly cookieRefreshDiv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#dev_range PackagesAuthenticationSetting#dev_range}
  */
  readonly devRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#id PackagesAuthenticationSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#ip_auth_cookie PackagesAuthenticationSetting#ip_auth_cookie}
  */
  readonly ipAuthCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#persistent_cookie PackagesAuthenticationSetting#persistent_cookie}
  */
  readonly persistentCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#pkg PackagesAuthenticationSetting#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#pkg_folder_path PackagesAuthenticationSetting#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#rewrite_https_port PackagesAuthenticationSetting#rewrite_https_port}
  */
  readonly rewriteHttpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#scopetype PackagesAuthenticationSetting#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#sso_auth_scheme PackagesAuthenticationSetting#sso_auth_scheme}
  */
  readonly ssoAuthScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#update_time PackagesAuthenticationSetting#update_time}
  */
  readonly updateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#user_cert_ca PackagesAuthenticationSetting#user_cert_ca}
  */
  readonly userCertCa?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting fortimanager_packages_authentication_setting}
*/
export class PackagesAuthenticationSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_authentication_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesAuthenticationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesAuthenticationSetting to import
  * @param importFromId The id of the existing PackagesAuthenticationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesAuthenticationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_authentication_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_authentication_setting fortimanager_packages_authentication_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesAuthenticationSettingConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesAuthenticationSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_authentication_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeAuthScheme = config.activeAuthScheme;
    this._adom = config.adom;
    this._authHttps = config.authHttps;
    this._captivePortal = config.captivePortal;
    this._captivePortal6 = config.captivePortal6;
    this._captivePortalIp = config.captivePortalIp;
    this._captivePortalIp6 = config.captivePortalIp6;
    this._captivePortalPort = config.captivePortalPort;
    this._captivePortalSslPort = config.captivePortalSslPort;
    this._captivePortalType = config.captivePortalType;
    this._certAuth = config.certAuth;
    this._certCaptivePortal = config.certCaptivePortal;
    this._certCaptivePortalIp = config.certCaptivePortalIp;
    this._certCaptivePortalPort = config.certCaptivePortalPort;
    this._cookieMaxAge = config.cookieMaxAge;
    this._cookieRefreshDiv = config.cookieRefreshDiv;
    this._devRange = config.devRange;
    this._id = config.id;
    this._ipAuthCookie = config.ipAuthCookie;
    this._persistentCookie = config.persistentCookie;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._rewriteHttpsPort = config.rewriteHttpsPort;
    this._scopetype = config.scopetype;
    this._ssoAuthScheme = config.ssoAuthScheme;
    this._updateTime = config.updateTime;
    this._userCertCa = config.userCertCa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_auth_scheme - computed: false, optional: true, required: false
  private _activeAuthScheme?: string; 
  public get activeAuthScheme() {
    return this.getStringAttribute('active_auth_scheme');
  }
  public set activeAuthScheme(value: string) {
    this._activeAuthScheme = value;
  }
  public resetActiveAuthScheme() {
    this._activeAuthScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAuthSchemeInput() {
    return this._activeAuthScheme;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auth_https - computed: true, optional: true, required: false
  private _authHttps?: string; 
  public get authHttps() {
    return this.getStringAttribute('auth_https');
  }
  public set authHttps(value: string) {
    this._authHttps = value;
  }
  public resetAuthHttps() {
    this._authHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHttpsInput() {
    return this._authHttps;
  }

  // captive_portal - computed: false, optional: true, required: false
  private _captivePortal?: string; 
  public get captivePortal() {
    return this.getStringAttribute('captive_portal');
  }
  public set captivePortal(value: string) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }

  // captive_portal6 - computed: false, optional: true, required: false
  private _captivePortal6?: string; 
  public get captivePortal6() {
    return this.getStringAttribute('captive_portal6');
  }
  public set captivePortal6(value: string) {
    this._captivePortal6 = value;
  }
  public resetCaptivePortal6() {
    this._captivePortal6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortal6Input() {
    return this._captivePortal6;
  }

  // captive_portal_ip - computed: false, optional: true, required: false
  private _captivePortalIp?: string; 
  public get captivePortalIp() {
    return this.getStringAttribute('captive_portal_ip');
  }
  public set captivePortalIp(value: string) {
    this._captivePortalIp = value;
  }
  public resetCaptivePortalIp() {
    this._captivePortalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalIpInput() {
    return this._captivePortalIp;
  }

  // captive_portal_ip6 - computed: false, optional: true, required: false
  private _captivePortalIp6?: string; 
  public get captivePortalIp6() {
    return this.getStringAttribute('captive_portal_ip6');
  }
  public set captivePortalIp6(value: string) {
    this._captivePortalIp6 = value;
  }
  public resetCaptivePortalIp6() {
    this._captivePortalIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalIp6Input() {
    return this._captivePortalIp6;
  }

  // captive_portal_port - computed: true, optional: true, required: false
  private _captivePortalPort?: number; 
  public get captivePortalPort() {
    return this.getNumberAttribute('captive_portal_port');
  }
  public set captivePortalPort(value: number) {
    this._captivePortalPort = value;
  }
  public resetCaptivePortalPort() {
    this._captivePortalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalPortInput() {
    return this._captivePortalPort;
  }

  // captive_portal_ssl_port - computed: true, optional: true, required: false
  private _captivePortalSslPort?: number; 
  public get captivePortalSslPort() {
    return this.getNumberAttribute('captive_portal_ssl_port');
  }
  public set captivePortalSslPort(value: number) {
    this._captivePortalSslPort = value;
  }
  public resetCaptivePortalSslPort() {
    this._captivePortalSslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalSslPortInput() {
    return this._captivePortalSslPort;
  }

  // captive_portal_type - computed: true, optional: true, required: false
  private _captivePortalType?: string; 
  public get captivePortalType() {
    return this.getStringAttribute('captive_portal_type');
  }
  public set captivePortalType(value: string) {
    this._captivePortalType = value;
  }
  public resetCaptivePortalType() {
    this._captivePortalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalTypeInput() {
    return this._captivePortalType;
  }

  // cert_auth - computed: true, optional: true, required: false
  private _certAuth?: string; 
  public get certAuth() {
    return this.getStringAttribute('cert_auth');
  }
  public set certAuth(value: string) {
    this._certAuth = value;
  }
  public resetCertAuth() {
    this._certAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthInput() {
    return this._certAuth;
  }

  // cert_captive_portal - computed: false, optional: true, required: false
  private _certCaptivePortal?: string; 
  public get certCaptivePortal() {
    return this.getStringAttribute('cert_captive_portal');
  }
  public set certCaptivePortal(value: string) {
    this._certCaptivePortal = value;
  }
  public resetCertCaptivePortal() {
    this._certCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCaptivePortalInput() {
    return this._certCaptivePortal;
  }

  // cert_captive_portal_ip - computed: true, optional: true, required: false
  private _certCaptivePortalIp?: string; 
  public get certCaptivePortalIp() {
    return this.getStringAttribute('cert_captive_portal_ip');
  }
  public set certCaptivePortalIp(value: string) {
    this._certCaptivePortalIp = value;
  }
  public resetCertCaptivePortalIp() {
    this._certCaptivePortalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCaptivePortalIpInput() {
    return this._certCaptivePortalIp;
  }

  // cert_captive_portal_port - computed: true, optional: true, required: false
  private _certCaptivePortalPort?: number; 
  public get certCaptivePortalPort() {
    return this.getNumberAttribute('cert_captive_portal_port');
  }
  public set certCaptivePortalPort(value: number) {
    this._certCaptivePortalPort = value;
  }
  public resetCertCaptivePortalPort() {
    this._certCaptivePortalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCaptivePortalPortInput() {
    return this._certCaptivePortalPort;
  }

  // cookie_max_age - computed: true, optional: true, required: false
  private _cookieMaxAge?: number; 
  public get cookieMaxAge() {
    return this.getNumberAttribute('cookie_max_age');
  }
  public set cookieMaxAge(value: number) {
    this._cookieMaxAge = value;
  }
  public resetCookieMaxAge() {
    this._cookieMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMaxAgeInput() {
    return this._cookieMaxAge;
  }

  // cookie_refresh_div - computed: true, optional: true, required: false
  private _cookieRefreshDiv?: number; 
  public get cookieRefreshDiv() {
    return this.getNumberAttribute('cookie_refresh_div');
  }
  public set cookieRefreshDiv(value: number) {
    this._cookieRefreshDiv = value;
  }
  public resetCookieRefreshDiv() {
    this._cookieRefreshDiv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRefreshDivInput() {
    return this._cookieRefreshDiv;
  }

  // dev_range - computed: false, optional: true, required: false
  private _devRange?: string; 
  public get devRange() {
    return this.getStringAttribute('dev_range');
  }
  public set devRange(value: string) {
    this._devRange = value;
  }
  public resetDevRange() {
    this._devRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devRangeInput() {
    return this._devRange;
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

  // ip_auth_cookie - computed: true, optional: true, required: false
  private _ipAuthCookie?: string; 
  public get ipAuthCookie() {
    return this.getStringAttribute('ip_auth_cookie');
  }
  public set ipAuthCookie(value: string) {
    this._ipAuthCookie = value;
  }
  public resetIpAuthCookie() {
    this._ipAuthCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAuthCookieInput() {
    return this._ipAuthCookie;
  }

  // persistent_cookie - computed: true, optional: true, required: false
  private _persistentCookie?: string; 
  public get persistentCookie() {
    return this.getStringAttribute('persistent_cookie');
  }
  public set persistentCookie(value: string) {
    this._persistentCookie = value;
  }
  public resetPersistentCookie() {
    this._persistentCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentCookieInput() {
    return this._persistentCookie;
  }

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // rewrite_https_port - computed: false, optional: true, required: false
  private _rewriteHttpsPort?: number; 
  public get rewriteHttpsPort() {
    return this.getNumberAttribute('rewrite_https_port');
  }
  public set rewriteHttpsPort(value: number) {
    this._rewriteHttpsPort = value;
  }
  public resetRewriteHttpsPort() {
    this._rewriteHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteHttpsPortInput() {
    return this._rewriteHttpsPort;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sso_auth_scheme - computed: false, optional: true, required: false
  private _ssoAuthScheme?: string; 
  public get ssoAuthScheme() {
    return this.getStringAttribute('sso_auth_scheme');
  }
  public set ssoAuthScheme(value: string) {
    this._ssoAuthScheme = value;
  }
  public resetSsoAuthScheme() {
    this._ssoAuthScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAuthSchemeInput() {
    return this._ssoAuthScheme;
  }

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // user_cert_ca - computed: false, optional: true, required: false
  private _userCertCa?: string; 
  public get userCertCa() {
    return this.getStringAttribute('user_cert_ca');
  }
  public set userCertCa(value: string) {
    this._userCertCa = value;
  }
  public resetUserCertCa() {
    this._userCertCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertCaInput() {
    return this._userCertCa;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_auth_scheme: cdktf.stringToTerraform(this._activeAuthScheme),
      adom: cdktf.stringToTerraform(this._adom),
      auth_https: cdktf.stringToTerraform(this._authHttps),
      captive_portal: cdktf.stringToTerraform(this._captivePortal),
      captive_portal6: cdktf.stringToTerraform(this._captivePortal6),
      captive_portal_ip: cdktf.stringToTerraform(this._captivePortalIp),
      captive_portal_ip6: cdktf.stringToTerraform(this._captivePortalIp6),
      captive_portal_port: cdktf.numberToTerraform(this._captivePortalPort),
      captive_portal_ssl_port: cdktf.numberToTerraform(this._captivePortalSslPort),
      captive_portal_type: cdktf.stringToTerraform(this._captivePortalType),
      cert_auth: cdktf.stringToTerraform(this._certAuth),
      cert_captive_portal: cdktf.stringToTerraform(this._certCaptivePortal),
      cert_captive_portal_ip: cdktf.stringToTerraform(this._certCaptivePortalIp),
      cert_captive_portal_port: cdktf.numberToTerraform(this._certCaptivePortalPort),
      cookie_max_age: cdktf.numberToTerraform(this._cookieMaxAge),
      cookie_refresh_div: cdktf.numberToTerraform(this._cookieRefreshDiv),
      dev_range: cdktf.stringToTerraform(this._devRange),
      id: cdktf.stringToTerraform(this._id),
      ip_auth_cookie: cdktf.stringToTerraform(this._ipAuthCookie),
      persistent_cookie: cdktf.stringToTerraform(this._persistentCookie),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      rewrite_https_port: cdktf.numberToTerraform(this._rewriteHttpsPort),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sso_auth_scheme: cdktf.stringToTerraform(this._ssoAuthScheme),
      update_time: cdktf.stringToTerraform(this._updateTime),
      user_cert_ca: cdktf.stringToTerraform(this._userCertCa),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_auth_scheme: {
        value: cdktf.stringToHclTerraform(this._activeAuthScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_https: {
        value: cdktf.stringToHclTerraform(this._authHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal: {
        value: cdktf.stringToHclTerraform(this._captivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal6: {
        value: cdktf.stringToHclTerraform(this._captivePortal6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_ip: {
        value: cdktf.stringToHclTerraform(this._captivePortalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_ip6: {
        value: cdktf.stringToHclTerraform(this._captivePortalIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captive_portal_port: {
        value: cdktf.numberToHclTerraform(this._captivePortalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      captive_portal_ssl_port: {
        value: cdktf.numberToHclTerraform(this._captivePortalSslPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      captive_portal_type: {
        value: cdktf.stringToHclTerraform(this._captivePortalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_auth: {
        value: cdktf.stringToHclTerraform(this._certAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_captive_portal: {
        value: cdktf.stringToHclTerraform(this._certCaptivePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_captive_portal_ip: {
        value: cdktf.stringToHclTerraform(this._certCaptivePortalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_captive_portal_port: {
        value: cdktf.numberToHclTerraform(this._certCaptivePortalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_max_age: {
        value: cdktf.numberToHclTerraform(this._cookieMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cookie_refresh_div: {
        value: cdktf.numberToHclTerraform(this._cookieRefreshDiv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dev_range: {
        value: cdktf.stringToHclTerraform(this._devRange),
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
      ip_auth_cookie: {
        value: cdktf.stringToHclTerraform(this._ipAuthCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_cookie: {
        value: cdktf.stringToHclTerraform(this._persistentCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_https_port: {
        value: cdktf.numberToHclTerraform(this._rewriteHttpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_auth_scheme: {
        value: cdktf.stringToHclTerraform(this._ssoAuthScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_time: {
        value: cdktf.stringToHclTerraform(this._updateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_cert_ca: {
        value: cdktf.stringToHclTerraform(this._userCertCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
