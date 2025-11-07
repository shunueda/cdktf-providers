// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow persisted users to access their profile.  Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#allow_user_to_access_profile SamlSettings#allow_user_to_access_profile}
  */
  readonly allowUserToAccessProfile?: boolean | cdktf.IResolvable;
  /**
  * Auto redirect to login through the IdP when clicking on Artifactory's login link.  Default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#auto_redirect SamlSettings#auto_redirect}
  */
  readonly autoRedirect?: boolean | cdktf.IResolvable;
  /**
  * SAML certificate that contains the public key for the IdP service provider.  Used by Artifactory to verify sign-in requests. Default value is "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#certificate SamlSettings#certificate}
  */
  readonly certificate?: string;
  /**
  * Name of the attribute in the SAML response from the IdP that contains the user's email. Default value is "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#email_attribute SamlSettings#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * Enable SAML SSO.  Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#enable SamlSettings#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Name of the attribute in the SAML response from the IdP that contains the user's group memberships. Default value is "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#group_attribute SamlSettings#group_attribute}
  */
  readonly groupAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#id SamlSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service provider login url configured on the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#login_url SamlSettings#login_url}
  */
  readonly loginUrl: string;
  /**
  * Service provider logout url, or where to redirect after user logs out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#logout_url SamlSettings#logout_url}
  */
  readonly logoutUrl: string;
  /**
  * When automatic user creation is off, authenticated users are not automatically created inside Artifactory. Instead, for every request from an SSO user, the user is temporarily associated with default groups (if such groups are defined), and the permissions for these groups apply. Without auto-user creation, you must manually create the user inside Artifactory to manage user permissions not attached to their default groups. Default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#no_auto_user_creation SamlSettings#no_auto_user_creation}
  */
  readonly noAutoUserCreation?: boolean | cdktf.IResolvable;
  /**
  * The SAML service provider name. This should be a URI that is also known as the entityID, providerID, or entity identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#service_provider_name SamlSettings#service_provider_name}
  */
  readonly serviceProviderName: string;
  /**
  * Associate user with Artifactory groups based on the "group_attribute" provided in the SAML response from the identity provider.  Default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#sync_groups SamlSettings#sync_groups}
  */
  readonly syncGroups?: boolean | cdktf.IResolvable;
  /**
  * When set, an X.509 public certificate will be created by Artifactory. Download this certificate and upload it to your IDP and choose your own encryption algorithm. This process will let you encrypt the assertion section in your SAML response. Default value is "false".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#use_encrypted_assertion SamlSettings#use_encrypted_assertion}
  */
  readonly useEncryptedAssertion?: boolean | cdktf.IResolvable;
  /**
  * Enable "audience", or who the SAML assertion is intended for.  Ensures that the correct service provider intended for Artifactory is used on the IdP. Default value is "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#verify_audience_restriction SamlSettings#verify_audience_restriction}
  */
  readonly verifyAudienceRestriction?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings artifactory_saml_settings}
*/
export class SamlSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_saml_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlSettings to import
  * @param importFromId The id of the existing SamlSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_saml_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/saml_settings artifactory_saml_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SamlSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_saml_settings',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.10.1'
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
    this._certificate = config.certificate;
    this._emailAttribute = config.emailAttribute;
    this._enable = config.enable;
    this._groupAttribute = config.groupAttribute;
    this._id = config.id;
    this._loginUrl = config.loginUrl;
    this._logoutUrl = config.logoutUrl;
    this._noAutoUserCreation = config.noAutoUserCreation;
    this._serviceProviderName = config.serviceProviderName;
    this._syncGroups = config.syncGroups;
    this._useEncryptedAssertion = config.useEncryptedAssertion;
    this._verifyAudienceRestriction = config.verifyAudienceRestriction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_user_to_access_profile - computed: false, optional: true, required: false
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

  // auto_redirect - computed: false, optional: true, required: false
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

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
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

  // enable - computed: false, optional: true, required: false
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

  // no_auto_user_creation - computed: false, optional: true, required: false
  private _noAutoUserCreation?: boolean | cdktf.IResolvable; 
  public get noAutoUserCreation() {
    return this.getBooleanAttribute('no_auto_user_creation');
  }
  public set noAutoUserCreation(value: boolean | cdktf.IResolvable) {
    this._noAutoUserCreation = value;
  }
  public resetNoAutoUserCreation() {
    this._noAutoUserCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoUserCreationInput() {
    return this._noAutoUserCreation;
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

  // sync_groups - computed: false, optional: true, required: false
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

  // use_encrypted_assertion - computed: false, optional: true, required: false
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

  // verify_audience_restriction - computed: false, optional: true, required: false
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
      certificate: cdktf.stringToTerraform(this._certificate),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      enable: cdktf.booleanToTerraform(this._enable),
      group_attribute: cdktf.stringToTerraform(this._groupAttribute),
      id: cdktf.stringToTerraform(this._id),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      no_auto_user_creation: cdktf.booleanToTerraform(this._noAutoUserCreation),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      no_auto_user_creation: {
        value: cdktf.booleanToHclTerraform(this._noAutoUserCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
