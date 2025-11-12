// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteSslSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Numeric identifier of the account in which the site is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#account_id SiteSslSettings#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#id SiteSslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#site_id SiteSslSettings#site_id}
  */
  readonly siteId: number;
  /**
  * hsts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#hsts SiteSslSettings#hsts}
  */
  readonly hsts?: SiteSslSettingsHsts[] | cdktf.IResolvable;
  /**
  * inbound_tls_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#inbound_tls_settings SiteSslSettings#inbound_tls_settings}
  */
  readonly inboundTlsSettings?: SiteSslSettingsInboundTlsSettings[] | cdktf.IResolvable;
}
export interface SiteSslSettingsHsts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#is_enabled SiteSslSettings#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#max_age SiteSslSettings#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#pre_loaded SiteSslSettings#pre_loaded}
  */
  readonly preLoaded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#sub_domains_included SiteSslSettings#sub_domains_included}
  */
  readonly subDomainsIncluded?: boolean | cdktf.IResolvable;
}

export function siteSslSettingsHstsToTerraform(struct?: SiteSslSettingsHsts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    pre_loaded: cdktf.booleanToTerraform(struct!.preLoaded),
    sub_domains_included: cdktf.booleanToTerraform(struct!.subDomainsIncluded),
  }
}


export function siteSslSettingsHstsToHclTerraform(struct?: SiteSslSettingsHsts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pre_loaded: {
      value: cdktf.booleanToHclTerraform(struct!.preLoaded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_domains_included: {
      value: cdktf.booleanToHclTerraform(struct!.subDomainsIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSslSettingsHstsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSslSettingsHsts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._preLoaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.preLoaded = this._preLoaded;
    }
    if (this._subDomainsIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.subDomainsIncluded = this._subDomainsIncluded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSslSettingsHsts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._maxAge = undefined;
      this._preLoaded = undefined;
      this._subDomainsIncluded = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._maxAge = value.maxAge;
      this._preLoaded = value.preLoaded;
      this._subDomainsIncluded = value.subDomainsIncluded;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // pre_loaded - computed: true, optional: true, required: false
  private _preLoaded?: boolean | cdktf.IResolvable; 
  public get preLoaded() {
    return this.getBooleanAttribute('pre_loaded');
  }
  public set preLoaded(value: boolean | cdktf.IResolvable) {
    this._preLoaded = value;
  }
  public resetPreLoaded() {
    this._preLoaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoadedInput() {
    return this._preLoaded;
  }

  // sub_domains_included - computed: true, optional: true, required: false
  private _subDomainsIncluded?: boolean | cdktf.IResolvable; 
  public get subDomainsIncluded() {
    return this.getBooleanAttribute('sub_domains_included');
  }
  public set subDomainsIncluded(value: boolean | cdktf.IResolvable) {
    this._subDomainsIncluded = value;
  }
  public resetSubDomainsIncluded() {
    this._subDomainsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainsIncludedInput() {
    return this._subDomainsIncluded;
  }
}

export class SiteSslSettingsHstsList extends cdktf.ComplexList {
  public internalValue? : SiteSslSettingsHsts[] | cdktf.IResolvable

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
  public get(index: number): SiteSslSettingsHstsOutputReference {
    return new SiteSslSettingsHstsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSslSettingsInboundTlsSettingsTlsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#ciphers_support SiteSslSettings#ciphers_support}
  */
  readonly ciphersSupport: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#tls_version SiteSslSettings#tls_version}
  */
  readonly tlsVersion: string;
}

export function siteSslSettingsInboundTlsSettingsTlsConfigurationToTerraform(struct?: SiteSslSettingsInboundTlsSettingsTlsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers_support: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphersSupport),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
  }
}


export function siteSslSettingsInboundTlsSettingsTlsConfigurationToHclTerraform(struct?: SiteSslSettingsInboundTlsSettingsTlsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers_support: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ciphersSupport),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSslSettingsInboundTlsSettingsTlsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSslSettingsInboundTlsSettingsTlsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphersSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphersSupport = this._ciphersSupport;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSslSettingsInboundTlsSettingsTlsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphersSupport = undefined;
      this._tlsVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphersSupport = value.ciphersSupport;
      this._tlsVersion = value.tlsVersion;
    }
  }

  // ciphers_support - computed: false, optional: false, required: true
  private _ciphersSupport?: string[]; 
  public get ciphersSupport() {
    return this.getListAttribute('ciphers_support');
  }
  public set ciphersSupport(value: string[]) {
    this._ciphersSupport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersSupportInput() {
    return this._ciphersSupport;
  }

  // tls_version - computed: false, optional: false, required: true
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }
}

export class SiteSslSettingsInboundTlsSettingsTlsConfigurationList extends cdktf.ComplexList {
  public internalValue? : SiteSslSettingsInboundTlsSettingsTlsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SiteSslSettingsInboundTlsSettingsTlsConfigurationOutputReference {
    return new SiteSslSettingsInboundTlsSettingsTlsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSslSettingsInboundTlsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#configuration_profile SiteSslSettings#configuration_profile}
  */
  readonly configurationProfile: string;
  /**
  * tls_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#tls_configuration SiteSslSettings#tls_configuration}
  */
  readonly tlsConfiguration?: SiteSslSettingsInboundTlsSettingsTlsConfiguration[] | cdktf.IResolvable;
}

export function siteSslSettingsInboundTlsSettingsToTerraform(struct?: SiteSslSettingsInboundTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_profile: cdktf.stringToTerraform(struct!.configurationProfile),
    tls_configuration: cdktf.listMapper(siteSslSettingsInboundTlsSettingsTlsConfigurationToTerraform, true)(struct!.tlsConfiguration),
  }
}


export function siteSslSettingsInboundTlsSettingsToHclTerraform(struct?: SiteSslSettingsInboundTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_profile: {
      value: cdktf.stringToHclTerraform(struct!.configurationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_configuration: {
      value: cdktf.listMapperHcl(siteSslSettingsInboundTlsSettingsTlsConfigurationToHclTerraform, true)(struct!.tlsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSslSettingsInboundTlsSettingsTlsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSslSettingsInboundTlsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSslSettingsInboundTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationProfile = this._configurationProfile;
    }
    if (this._tlsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfiguration = this._tlsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSslSettingsInboundTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationProfile = undefined;
      this._tlsConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationProfile = value.configurationProfile;
      this._tlsConfiguration.internalValue = value.tlsConfiguration;
    }
  }

  // configuration_profile - computed: false, optional: false, required: true
  private _configurationProfile?: string; 
  public get configurationProfile() {
    return this.getStringAttribute('configuration_profile');
  }
  public set configurationProfile(value: string) {
    this._configurationProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationProfileInput() {
    return this._configurationProfile;
  }

  // tls_configuration - computed: false, optional: true, required: false
  private _tlsConfiguration = new SiteSslSettingsInboundTlsSettingsTlsConfigurationList(this, "tls_configuration", false);
  public get tlsConfiguration() {
    return this._tlsConfiguration;
  }
  public putTlsConfiguration(value: SiteSslSettingsInboundTlsSettingsTlsConfiguration[] | cdktf.IResolvable) {
    this._tlsConfiguration.internalValue = value;
  }
  public resetTlsConfiguration() {
    this._tlsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigurationInput() {
    return this._tlsConfiguration.internalValue;
  }
}

export class SiteSslSettingsInboundTlsSettingsList extends cdktf.ComplexList {
  public internalValue? : SiteSslSettingsInboundTlsSettings[] | cdktf.IResolvable

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
  public get(index: number): SiteSslSettingsInboundTlsSettingsOutputReference {
    return new SiteSslSettingsInboundTlsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings incapsula_site_ssl_settings}
*/
export class SiteSslSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_site_ssl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteSslSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteSslSettings to import
  * @param importFromId The id of the existing SiteSslSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteSslSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_site_ssl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/site_ssl_settings incapsula_site_ssl_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteSslSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SiteSslSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_site_ssl_settings',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._siteId = config.siteId;
    this._hsts.internalValue = config.hsts;
    this._inboundTlsSettings.internalValue = config.inboundTlsSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // hsts - computed: false, optional: true, required: false
  private _hsts = new SiteSslSettingsHstsList(this, "hsts", true);
  public get hsts() {
    return this._hsts;
  }
  public putHsts(value: SiteSslSettingsHsts[] | cdktf.IResolvable) {
    this._hsts.internalValue = value;
  }
  public resetHsts() {
    this._hsts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsInput() {
    return this._hsts.internalValue;
  }

  // inbound_tls_settings - computed: false, optional: true, required: false
  private _inboundTlsSettings = new SiteSslSettingsInboundTlsSettingsList(this, "inbound_tls_settings", true);
  public get inboundTlsSettings() {
    return this._inboundTlsSettings;
  }
  public putInboundTlsSettings(value: SiteSslSettingsInboundTlsSettings[] | cdktf.IResolvable) {
    this._inboundTlsSettings.internalValue = value;
  }
  public resetInboundTlsSettings() {
    this._inboundTlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTlsSettingsInput() {
    return this._inboundTlsSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.numberToTerraform(this._siteId),
      hsts: cdktf.listMapper(siteSslSettingsHstsToTerraform, true)(this._hsts.internalValue),
      inbound_tls_settings: cdktf.listMapper(siteSslSettingsInboundTlsSettingsToTerraform, true)(this._inboundTlsSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsts: {
        value: cdktf.listMapperHcl(siteSslSettingsHstsToHclTerraform, true)(this._hsts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteSslSettingsHstsList",
      },
      inbound_tls_settings: {
        value: cdktf.listMapperHcl(siteSslSettingsInboundTlsSettingsToHclTerraform, true)(this._inboundTlsSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteSslSettingsInboundTlsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
