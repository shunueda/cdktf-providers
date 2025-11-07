// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set, auto created users will have access to their profile page and will be able to perform actions such as generating an API key. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#allow_user_to_access_profile SamlSettings#allow_user_to_access_profile}
  */
  readonly allowUserToAccessProfile?: boolean | cdktf.IResolvable;
  /**
  * When set, clicking on the login link will direct users to the configured SAML login URL. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#auto_redirect SamlSettings#auto_redirect}
  */
  readonly autoRedirect?: boolean | cdktf.IResolvable;
  /**
  * When set, authenticated users are automatically created in Artifactory. When not set, for every request from an SSO user, the user is temporarily associated with default groups (if such groups are defined), and the permissions for these groups apply. Without automatic user creation, you must manually create the user inside Artifactory to manage user permissions not attached to their default groups. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#auto_user_creation SamlSettings#auto_user_creation}
  */
  readonly autoUserCreation?: boolean | cdktf.IResolvable;
  /**
  * The certificate for SAML Authentication in Base64 format. NOTE! The certificate must contain the public key to allow Artifactory to verify sign-in requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#certificate SamlSettings#certificate}
  */
  readonly certificate: string;
  /**
  * If `auto_user_creation` is enabled or an internal user exists, the system will set the user's email to the value in this attribute that is returned by the SAML login XML response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#email_attribute SamlSettings#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * When set, SAML integration is enabled and users may be authenticated via a SAML server. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#enable SamlSettings#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The group attribute in the SAML login XML response. Note that the system will search for a case-sensitive match to an existing group..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#group_attribute SamlSettings#group_attribute}
  */
  readonly groupAttribute?: string;
  /**
  * List of LDAP group setting names. Only support in Artifactory 7.98 or later. See [Enabling Synchronization of LDAP Groups for SAML SSO](https://jfrog.com/help/r/jfrog-platform-administration-documentation/enabling-synchronization-of-ldap-groups-for-saml-sso) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#ldap_group_settings SamlSettings#ldap_group_settings}
  */
  readonly ldapGroupSettings?: string[];
  /**
  * The identity provider login URL (when you try to login, the service provider redirects to this URL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#login_url SamlSettings#login_url}
  */
  readonly loginUrl: string;
  /**
  * The identity provider logout URL (when you try to logout, the service provider redirects to this URL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#logout_url SamlSettings#logout_url}
  */
  readonly logoutUrl: string;
  /**
  * SAML Settings name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#name SamlSettings#name}
  */
  readonly name: string;
  /**
  * The username attribute used to configure the SSO URL for the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#name_id_attribute SamlSettings#name_id_attribute}
  */
  readonly nameIdAttribute?: string;
  /**
  * The SAML service provider name. This should be a URI that is also known as the entityID, providerID, or entity identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#service_provider_name SamlSettings#service_provider_name}
  */
  readonly serviceProviderName: string;
  /**
  * When set, in addition to the groups the user is already associated with, he will also be associated with the groups returned in the SAML login response. Note that the user's association with the returned groups is not persistent. It is only valid for the current login session. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#sync_groups SamlSettings#sync_groups}
  */
  readonly syncGroups?: boolean | cdktf.IResolvable;
  /**
  * When set, an X.509 public certificate will be created by Artifactory. Download this certificate and upload it to your IDP and choose your own encryption algorithm. This process will let you encrypt the assertion section in your SAML response. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#use_encrypted_assertion SamlSettings#use_encrypted_assertion}
  */
  readonly useEncryptedAssertion?: boolean | cdktf.IResolvable;
  /**
  * Set this flag to specify who the assertion is intended for. The "audience" will be the service provider and is typically a URL but can technically be formatted as any string of data. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#verify_audience_restriction SamlSettings#verify_audience_restriction}
  */
  readonly verifyAudienceRestriction?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings platform_saml_settings}
*/
export class SamlSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_saml_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlSettings to import
  * @param importFromId The id of the existing SamlSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_saml_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/saml_settings platform_saml_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SamlSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_saml_settings',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUserToAccessProfile = config.allowUserToAccessProfile;
    this._autoRedirect = config.autoRedirect;
    this._autoUserCreation = config.autoUserCreation;
    this._certificate = config.certificate;
    this._emailAttribute = config.emailAttribute;
    this._enable = config.enable;
    this._groupAttribute = config.groupAttribute;
    this._ldapGroupSettings = config.ldapGroupSettings;
    this._loginUrl = config.loginUrl;
    this._logoutUrl = config.logoutUrl;
    this._name = config.name;
    this._nameIdAttribute = config.nameIdAttribute;
    this._serviceProviderName = config.serviceProviderName;
    this._syncGroups = config.syncGroups;
    this._useEncryptedAssertion = config.useEncryptedAssertion;
    this._verifyAudienceRestriction = config.verifyAudienceRestriction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_user_to_access_profile - computed: true, optional: true, required: false
  private _allowUserToAccessProfile?: boolean | cdktf.IResolvable; 
  public get allowUserToAccessProfile() {
    return this.getBooleanAttribute('allow_user_to_access_profile');
  }
  public set allowUserToAccessProfile(value: boolean | cdktf.IResolvable) {
    this._allowUserToAccessProfile = value;
  }
  public resetAllowUserToAccessProfile() {
    this._allowUserToAccessProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToAccessProfileInput() {
    return this._allowUserToAccessProfile;
  }

  // auto_redirect - computed: true, optional: true, required: false
  private _autoRedirect?: boolean | cdktf.IResolvable; 
  public get autoRedirect() {
    return this.getBooleanAttribute('auto_redirect');
  }
  public set autoRedirect(value: boolean | cdktf.IResolvable) {
    this._autoRedirect = value;
  }
  public resetAutoRedirect() {
    this._autoRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectInput() {
    return this._autoRedirect;
  }

  // auto_user_creation - computed: true, optional: true, required: false
  private _autoUserCreation?: boolean | cdktf.IResolvable; 
  public get autoUserCreation() {
    return this.getBooleanAttribute('auto_user_creation');
  }
  public set autoUserCreation(value: boolean | cdktf.IResolvable) {
    this._autoUserCreation = value;
  }
  public resetAutoUserCreation() {
    this._autoUserCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUserCreationInput() {
    return this._autoUserCreation;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // email_attribute - computed: false, optional: true, required: false
  private _emailAttribute?: string; 
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }
  public set emailAttribute(value: string) {
    this._emailAttribute = value;
  }
  public resetEmailAttribute() {
    this._emailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeInput() {
    return this._emailAttribute;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_attribute - computed: false, optional: true, required: false
  private _groupAttribute?: string; 
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }
  public set groupAttribute(value: string) {
    this._groupAttribute = value;
  }
  public resetGroupAttribute() {
    this._groupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute;
  }

  // ldap_group_settings - computed: false, optional: true, required: false
  private _ldapGroupSettings?: string[]; 
  public get ldapGroupSettings() {
    return cdktf.Fn.tolist(this.getListAttribute('ldap_group_settings'));
  }
  public set ldapGroupSettings(value: string[]) {
    this._ldapGroupSettings = value;
  }
  public resetLdapGroupSettings() {
    this._ldapGroupSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupSettingsInput() {
    return this._ldapGroupSettings;
  }

  // login_url - computed: false, optional: false, required: true
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // logout_url - computed: false, optional: false, required: true
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
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

  // name_id_attribute - computed: false, optional: true, required: false
  private _nameIdAttribute?: string; 
  public get nameIdAttribute() {
    return this.getStringAttribute('name_id_attribute');
  }
  public set nameIdAttribute(value: string) {
    this._nameIdAttribute = value;
  }
  public resetNameIdAttribute() {
    this._nameIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdAttributeInput() {
    return this._nameIdAttribute;
  }

  // service_provider_name - computed: false, optional: false, required: true
  private _serviceProviderName?: string; 
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderNameInput() {
    return this._serviceProviderName;
  }

  // sync_groups - computed: true, optional: true, required: false
  private _syncGroups?: boolean | cdktf.IResolvable; 
  public get syncGroups() {
    return this.getBooleanAttribute('sync_groups');
  }
  public set syncGroups(value: boolean | cdktf.IResolvable) {
    this._syncGroups = value;
  }
  public resetSyncGroups() {
    this._syncGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGroupsInput() {
    return this._syncGroups;
  }

  // use_encrypted_assertion - computed: true, optional: true, required: false
  private _useEncryptedAssertion?: boolean | cdktf.IResolvable; 
  public get useEncryptedAssertion() {
    return this.getBooleanAttribute('use_encrypted_assertion');
  }
  public set useEncryptedAssertion(value: boolean | cdktf.IResolvable) {
    this._useEncryptedAssertion = value;
  }
  public resetUseEncryptedAssertion() {
    this._useEncryptedAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEncryptedAssertionInput() {
    return this._useEncryptedAssertion;
  }

  // verify_audience_restriction - computed: true, optional: true, required: false
  private _verifyAudienceRestriction?: boolean | cdktf.IResolvable; 
  public get verifyAudienceRestriction() {
    return this.getBooleanAttribute('verify_audience_restriction');
  }
  public set verifyAudienceRestriction(value: boolean | cdktf.IResolvable) {
    this._verifyAudienceRestriction = value;
  }
  public resetVerifyAudienceRestriction() {
    this._verifyAudienceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAudienceRestrictionInput() {
    return this._verifyAudienceRestriction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_user_to_access_profile: cdktf.booleanToTerraform(this._allowUserToAccessProfile),
      auto_redirect: cdktf.booleanToTerraform(this._autoRedirect),
      auto_user_creation: cdktf.booleanToTerraform(this._autoUserCreation),
      certificate: cdktf.stringToTerraform(this._certificate),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      enable: cdktf.booleanToTerraform(this._enable),
      group_attribute: cdktf.stringToTerraform(this._groupAttribute),
      ldap_group_settings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapGroupSettings),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      name: cdktf.stringToTerraform(this._name),
      name_id_attribute: cdktf.stringToTerraform(this._nameIdAttribute),
      service_provider_name: cdktf.stringToTerraform(this._serviceProviderName),
      sync_groups: cdktf.booleanToTerraform(this._syncGroups),
      use_encrypted_assertion: cdktf.booleanToTerraform(this._useEncryptedAssertion),
      verify_audience_restriction: cdktf.booleanToTerraform(this._verifyAudienceRestriction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_user_to_access_profile: {
        value: cdktf.booleanToHclTerraform(this._allowUserToAccessProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_redirect: {
        value: cdktf.booleanToHclTerraform(this._autoRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_user_creation: {
        value: cdktf.booleanToHclTerraform(this._autoUserCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_attribute: {
        value: cdktf.stringToHclTerraform(this._emailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_attribute: {
        value: cdktf.stringToHclTerraform(this._groupAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_settings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapGroupSettings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_url: {
        value: cdktf.stringToHclTerraform(this._loginUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
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
      name_id_attribute: {
        value: cdktf.stringToHclTerraform(this._nameIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider_name: {
        value: cdktf.stringToHclTerraform(this._serviceProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_groups: {
        value: cdktf.booleanToHclTerraform(this._syncGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_encrypted_assertion: {
        value: cdktf.booleanToHclTerraform(this._useEncryptedAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verify_audience_restriction: {
        value: cdktf.booleanToHclTerraform(this._verifyAudienceRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
