// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#active_auth_scheme AuthenticationSetting#active_auth_scheme}
  */
  readonly activeAuthScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#auth_https AuthenticationSetting#auth_https}
  */
  readonly authHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal AuthenticationSetting#captive_portal}
  */
  readonly captivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal6 AuthenticationSetting#captive_portal6}
  */
  readonly captivePortal6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal_ip AuthenticationSetting#captive_portal_ip}
  */
  readonly captivePortalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal_ip6 AuthenticationSetting#captive_portal_ip6}
  */
  readonly captivePortalIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal_port AuthenticationSetting#captive_portal_port}
  */
  readonly captivePortalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal_ssl_port AuthenticationSetting#captive_portal_ssl_port}
  */
  readonly captivePortalSslPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#captive_portal_type AuthenticationSetting#captive_portal_type}
  */
  readonly captivePortalType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#cert_auth AuthenticationSetting#cert_auth}
  */
  readonly certAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#cert_captive_portal AuthenticationSetting#cert_captive_portal}
  */
  readonly certCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#cert_captive_portal_ip AuthenticationSetting#cert_captive_portal_ip}
  */
  readonly certCaptivePortalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#cert_captive_portal_port AuthenticationSetting#cert_captive_portal_port}
  */
  readonly certCaptivePortalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#cookie_max_age AuthenticationSetting#cookie_max_age}
  */
  readonly cookieMaxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#cookie_refresh_div AuthenticationSetting#cookie_refresh_div}
  */
  readonly cookieRefreshDiv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#dynamic_sort_subtable AuthenticationSetting#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#get_all_tables AuthenticationSetting#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#id AuthenticationSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#ip_auth_cookie AuthenticationSetting#ip_auth_cookie}
  */
  readonly ipAuthCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#persistent_cookie AuthenticationSetting#persistent_cookie}
  */
  readonly persistentCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#sso_auth_scheme AuthenticationSetting#sso_auth_scheme}
  */
  readonly ssoAuthScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#update_time AuthenticationSetting#update_time}
  */
  readonly updateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#vdomparam AuthenticationSetting#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * dev_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#dev_range AuthenticationSetting#dev_range}
  */
  readonly devRange?: AuthenticationSettingDevRange[] | cdktf.IResolvable;
  /**
  * user_cert_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#user_cert_ca AuthenticationSetting#user_cert_ca}
  */
  readonly userCertCa?: AuthenticationSettingUserCertCa[] | cdktf.IResolvable;
}
export interface AuthenticationSettingDevRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#name AuthenticationSetting#name}
  */
  readonly name?: string;
}

export function authenticationSettingDevRangeToTerraform(struct?: AuthenticationSettingDevRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationSettingDevRangeToHclTerraform(struct?: AuthenticationSettingDevRange | cdktf.IResolvable): any {
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

export class AuthenticationSettingDevRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationSettingDevRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthenticationSettingDevRange | cdktf.IResolvable | undefined) {
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

export class AuthenticationSettingDevRangeList extends cdktf.ComplexList {
  public internalValue? : AuthenticationSettingDevRange[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationSettingDevRangeOutputReference {
    return new AuthenticationSettingDevRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationSettingUserCertCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#name AuthenticationSetting#name}
  */
  readonly name?: string;
}

export function authenticationSettingUserCertCaToTerraform(struct?: AuthenticationSettingUserCertCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function authenticationSettingUserCertCaToHclTerraform(struct?: AuthenticationSettingUserCertCa | cdktf.IResolvable): any {
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

export class AuthenticationSettingUserCertCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationSettingUserCertCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthenticationSettingUserCertCa | cdktf.IResolvable | undefined) {
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

export class AuthenticationSettingUserCertCaList extends cdktf.ComplexList {
  public internalValue? : AuthenticationSettingUserCertCa[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationSettingUserCertCaOutputReference {
    return new AuthenticationSettingUserCertCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting fortios_authentication_setting}
*/
export class AuthenticationSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_authentication_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationSetting to import
  * @param importFromId The id of the existing AuthenticationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_authentication_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/authentication_setting fortios_authentication_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_authentication_setting',
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
    this._activeAuthScheme = config.activeAuthScheme;
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ipAuthCookie = config.ipAuthCookie;
    this._persistentCookie = config.persistentCookie;
    this._ssoAuthScheme = config.ssoAuthScheme;
    this._updateTime = config.updateTime;
    this._vdomparam = config.vdomparam;
    this._devRange.internalValue = config.devRange;
    this._userCertCa.internalValue = config.userCertCa;
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

  // captive_portal_ip - computed: true, optional: true, required: false
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

  // captive_portal_ip6 - computed: true, optional: true, required: false
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

  // dev_range - computed: false, optional: true, required: false
  private _devRange = new AuthenticationSettingDevRangeList(this, "dev_range", true);
  public get devRange() {
    return this._devRange;
  }
  public putDevRange(value: AuthenticationSettingDevRange[] | cdktf.IResolvable) {
    this._devRange.internalValue = value;
  }
  public resetDevRange() {
    this._devRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devRangeInput() {
    return this._devRange.internalValue;
  }

  // user_cert_ca - computed: false, optional: true, required: false
  private _userCertCa = new AuthenticationSettingUserCertCaList(this, "user_cert_ca", true);
  public get userCertCa() {
    return this._userCertCa;
  }
  public putUserCertCa(value: AuthenticationSettingUserCertCa[] | cdktf.IResolvable) {
    this._userCertCa.internalValue = value;
  }
  public resetUserCertCa() {
    this._userCertCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertCaInput() {
    return this._userCertCa.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_auth_scheme: cdktf.stringToTerraform(this._activeAuthScheme),
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
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ip_auth_cookie: cdktf.stringToTerraform(this._ipAuthCookie),
      persistent_cookie: cdktf.stringToTerraform(this._persistentCookie),
      sso_auth_scheme: cdktf.stringToTerraform(this._ssoAuthScheme),
      update_time: cdktf.stringToTerraform(this._updateTime),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      dev_range: cdktf.listMapper(authenticationSettingDevRangeToTerraform, true)(this._devRange.internalValue),
      user_cert_ca: cdktf.listMapper(authenticationSettingUserCertCaToTerraform, true)(this._userCertCa.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_range: {
        value: cdktf.listMapperHcl(authenticationSettingDevRangeToHclTerraform, true)(this._devRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationSettingDevRangeList",
      },
      user_cert_ca: {
        value: cdktf.listMapperHcl(authenticationSettingUserCertCaToHclTerraform, true)(this._userCertCa.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthenticationSettingUserCertCaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
