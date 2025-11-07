// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#authn_request_url SamlConfiguration#authn_request_url}
  */
  readonly authnRequestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#configuration_name SamlConfiguration#configuration_name}
  */
  readonly configurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#debug_mode SamlConfiguration#debug_mode}
  */
  readonly debugMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#disable_requested_authn_context SamlConfiguration#disable_requested_authn_context}
  */
  readonly disableRequestedAuthnContext?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#email_attribute SamlConfiguration#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#id SamlConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#is_redirect_binding SamlConfiguration#is_redirect_binding}
  */
  readonly isRedirectBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#issuer SamlConfiguration#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#logout_enabled SamlConfiguration#logout_enabled}
  */
  readonly logoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#logout_url SamlConfiguration#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#roles_attribute SamlConfiguration#roles_attribute}
  */
  readonly rolesAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#sign_authn_request SamlConfiguration#sign_authn_request}
  */
  readonly signAuthnRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#sp_initiated_login_enabled SamlConfiguration#sp_initiated_login_enabled}
  */
  readonly spInitiatedLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#sp_initiated_login_path SamlConfiguration#sp_initiated_login_path}
  */
  readonly spInitiatedLoginPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#x509cert1 SamlConfiguration#x509cert1}
  */
  readonly x509Cert1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#x509cert2 SamlConfiguration#x509cert2}
  */
  readonly x509Cert2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#x509cert3 SamlConfiguration#x509cert3}
  */
  readonly x509Cert3?: string;
  /**
  * on_demand_provisioning_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#on_demand_provisioning_enabled SamlConfiguration#on_demand_provisioning_enabled}
  */
  readonly onDemandProvisioningEnabled?: SamlConfigurationOnDemandProvisioningEnabled;
}
export interface SamlConfigurationOnDemandProvisioningEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#first_name_attribute SamlConfiguration#first_name_attribute}
  */
  readonly firstNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#last_name_attribute SamlConfiguration#last_name_attribute}
  */
  readonly lastNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#on_demand_provisioning_roles SamlConfiguration#on_demand_provisioning_roles}
  */
  readonly onDemandProvisioningRoles: string[];
}

export function samlConfigurationOnDemandProvisioningEnabledToTerraform(struct?: SamlConfigurationOnDemandProvisioningEnabledOutputReference | SamlConfigurationOnDemandProvisioningEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_name_attribute: cdktf.stringToTerraform(struct!.firstNameAttribute),
    last_name_attribute: cdktf.stringToTerraform(struct!.lastNameAttribute),
    on_demand_provisioning_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.onDemandProvisioningRoles),
  }
}


export function samlConfigurationOnDemandProvisioningEnabledToHclTerraform(struct?: SamlConfigurationOnDemandProvisioningEnabledOutputReference | SamlConfigurationOnDemandProvisioningEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.firstNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.lastNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_demand_provisioning_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.onDemandProvisioningRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlConfigurationOnDemandProvisioningEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SamlConfigurationOnDemandProvisioningEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstNameAttribute = this._firstNameAttribute;
    }
    if (this._lastNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastNameAttribute = this._lastNameAttribute;
    }
    if (this._onDemandProvisioningRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandProvisioningRoles = this._onDemandProvisioningRoles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlConfigurationOnDemandProvisioningEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstNameAttribute = undefined;
      this._lastNameAttribute = undefined;
      this._onDemandProvisioningRoles = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstNameAttribute = value.firstNameAttribute;
      this._lastNameAttribute = value.lastNameAttribute;
      this._onDemandProvisioningRoles = value.onDemandProvisioningRoles;
    }
  }

  // first_name_attribute - computed: false, optional: true, required: false
  private _firstNameAttribute?: string; 
  public get firstNameAttribute() {
    return this.getStringAttribute('first_name_attribute');
  }
  public set firstNameAttribute(value: string) {
    this._firstNameAttribute = value;
  }
  public resetFirstNameAttribute() {
    this._firstNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameAttributeInput() {
    return this._firstNameAttribute;
  }

  // last_name_attribute - computed: false, optional: true, required: false
  private _lastNameAttribute?: string; 
  public get lastNameAttribute() {
    return this.getStringAttribute('last_name_attribute');
  }
  public set lastNameAttribute(value: string) {
    this._lastNameAttribute = value;
  }
  public resetLastNameAttribute() {
    this._lastNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameAttributeInput() {
    return this._lastNameAttribute;
  }

  // on_demand_provisioning_roles - computed: false, optional: false, required: true
  private _onDemandProvisioningRoles?: string[]; 
  public get onDemandProvisioningRoles() {
    return this.getListAttribute('on_demand_provisioning_roles');
  }
  public set onDemandProvisioningRoles(value: string[]) {
    this._onDemandProvisioningRoles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandProvisioningRolesInput() {
    return this._onDemandProvisioningRoles;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration sumologic_saml_configuration}
*/
export class SamlConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_saml_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlConfiguration to import
  * @param importFromId The id of the existing SamlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_saml_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/saml_configuration sumologic_saml_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SamlConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_saml_configuration',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authnRequestUrl = config.authnRequestUrl;
    this._configurationName = config.configurationName;
    this._debugMode = config.debugMode;
    this._disableRequestedAuthnContext = config.disableRequestedAuthnContext;
    this._emailAttribute = config.emailAttribute;
    this._id = config.id;
    this._isRedirectBinding = config.isRedirectBinding;
    this._issuer = config.issuer;
    this._logoutEnabled = config.logoutEnabled;
    this._logoutUrl = config.logoutUrl;
    this._rolesAttribute = config.rolesAttribute;
    this._signAuthnRequest = config.signAuthnRequest;
    this._spInitiatedLoginEnabled = config.spInitiatedLoginEnabled;
    this._spInitiatedLoginPath = config.spInitiatedLoginPath;
    this._x509Cert1 = config.x509Cert1;
    this._x509Cert2 = config.x509Cert2;
    this._x509Cert3 = config.x509Cert3;
    this._onDemandProvisioningEnabled.internalValue = config.onDemandProvisioningEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_consumer_url - computed: true, optional: false, required: false
  public get assertionConsumerUrl() {
    return this.getStringAttribute('assertion_consumer_url');
  }

  // authn_request_url - computed: false, optional: true, required: false
  private _authnRequestUrl?: string; 
  public get authnRequestUrl() {
    return this.getStringAttribute('authn_request_url');
  }
  public set authnRequestUrl(value: string) {
    this._authnRequestUrl = value;
  }
  public resetAuthnRequestUrl() {
    this._authnRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnRequestUrlInput() {
    return this._authnRequestUrl;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // configuration_name - computed: false, optional: false, required: true
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: boolean | cdktf.IResolvable; 
  public get debugMode() {
    return this.getBooleanAttribute('debug_mode');
  }
  public set debugMode(value: boolean | cdktf.IResolvable) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // disable_requested_authn_context - computed: false, optional: true, required: false
  private _disableRequestedAuthnContext?: boolean | cdktf.IResolvable; 
  public get disableRequestedAuthnContext() {
    return this.getBooleanAttribute('disable_requested_authn_context');
  }
  public set disableRequestedAuthnContext(value: boolean | cdktf.IResolvable) {
    this._disableRequestedAuthnContext = value;
  }
  public resetDisableRequestedAuthnContext() {
    this._disableRequestedAuthnContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRequestedAuthnContextInput() {
    return this._disableRequestedAuthnContext;
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

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
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

  // is_redirect_binding - computed: false, optional: true, required: false
  private _isRedirectBinding?: boolean | cdktf.IResolvable; 
  public get isRedirectBinding() {
    return this.getBooleanAttribute('is_redirect_binding');
  }
  public set isRedirectBinding(value: boolean | cdktf.IResolvable) {
    this._isRedirectBinding = value;
  }
  public resetIsRedirectBinding() {
    this._isRedirectBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedirectBindingInput() {
    return this._isRedirectBinding;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // logout_enabled - computed: false, optional: true, required: false
  private _logoutEnabled?: boolean | cdktf.IResolvable; 
  public get logoutEnabled() {
    return this.getBooleanAttribute('logout_enabled');
  }
  public set logoutEnabled(value: boolean | cdktf.IResolvable) {
    this._logoutEnabled = value;
  }
  public resetLogoutEnabled() {
    this._logoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEnabledInput() {
    return this._logoutEnabled;
  }

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // roles_attribute - computed: false, optional: true, required: false
  private _rolesAttribute?: string; 
  public get rolesAttribute() {
    return this.getStringAttribute('roles_attribute');
  }
  public set rolesAttribute(value: string) {
    this._rolesAttribute = value;
  }
  public resetRolesAttribute() {
    this._rolesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesAttributeInput() {
    return this._rolesAttribute;
  }

  // sign_authn_request - computed: false, optional: true, required: false
  private _signAuthnRequest?: boolean | cdktf.IResolvable; 
  public get signAuthnRequest() {
    return this.getBooleanAttribute('sign_authn_request');
  }
  public set signAuthnRequest(value: boolean | cdktf.IResolvable) {
    this._signAuthnRequest = value;
  }
  public resetSignAuthnRequest() {
    this._signAuthnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthnRequestInput() {
    return this._signAuthnRequest;
  }

  // sp_initiated_login_enabled - computed: false, optional: true, required: false
  private _spInitiatedLoginEnabled?: boolean | cdktf.IResolvable; 
  public get spInitiatedLoginEnabled() {
    return this.getBooleanAttribute('sp_initiated_login_enabled');
  }
  public set spInitiatedLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._spInitiatedLoginEnabled = value;
  }
  public resetSpInitiatedLoginEnabled() {
    this._spInitiatedLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInitiatedLoginEnabledInput() {
    return this._spInitiatedLoginEnabled;
  }

  // sp_initiated_login_path - computed: false, optional: true, required: false
  private _spInitiatedLoginPath?: string; 
  public get spInitiatedLoginPath() {
    return this.getStringAttribute('sp_initiated_login_path');
  }
  public set spInitiatedLoginPath(value: string) {
    this._spInitiatedLoginPath = value;
  }
  public resetSpInitiatedLoginPath() {
    this._spInitiatedLoginPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInitiatedLoginPathInput() {
    return this._spInitiatedLoginPath;
  }

  // x509cert1 - computed: false, optional: false, required: true
  private _x509Cert1?: string; 
  public get x509Cert1() {
    return this.getStringAttribute('x509cert1');
  }
  public set x509Cert1(value: string) {
    this._x509Cert1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509Cert1Input() {
    return this._x509Cert1;
  }

  // x509cert2 - computed: false, optional: true, required: false
  private _x509Cert2?: string; 
  public get x509Cert2() {
    return this.getStringAttribute('x509cert2');
  }
  public set x509Cert2(value: string) {
    this._x509Cert2 = value;
  }
  public resetX509Cert2() {
    this._x509Cert2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509Cert2Input() {
    return this._x509Cert2;
  }

  // x509cert3 - computed: false, optional: true, required: false
  private _x509Cert3?: string; 
  public get x509Cert3() {
    return this.getStringAttribute('x509cert3');
  }
  public set x509Cert3(value: string) {
    this._x509Cert3 = value;
  }
  public resetX509Cert3() {
    this._x509Cert3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509Cert3Input() {
    return this._x509Cert3;
  }

  // on_demand_provisioning_enabled - computed: false, optional: true, required: false
  private _onDemandProvisioningEnabled = new SamlConfigurationOnDemandProvisioningEnabledOutputReference(this, "on_demand_provisioning_enabled");
  public get onDemandProvisioningEnabled() {
    return this._onDemandProvisioningEnabled;
  }
  public putOnDemandProvisioningEnabled(value: SamlConfigurationOnDemandProvisioningEnabled) {
    this._onDemandProvisioningEnabled.internalValue = value;
  }
  public resetOnDemandProvisioningEnabled() {
    this._onDemandProvisioningEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandProvisioningEnabledInput() {
    return this._onDemandProvisioningEnabled.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authn_request_url: cdktf.stringToTerraform(this._authnRequestUrl),
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      debug_mode: cdktf.booleanToTerraform(this._debugMode),
      disable_requested_authn_context: cdktf.booleanToTerraform(this._disableRequestedAuthnContext),
      email_attribute: cdktf.stringToTerraform(this._emailAttribute),
      id: cdktf.stringToTerraform(this._id),
      is_redirect_binding: cdktf.booleanToTerraform(this._isRedirectBinding),
      issuer: cdktf.stringToTerraform(this._issuer),
      logout_enabled: cdktf.booleanToTerraform(this._logoutEnabled),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      roles_attribute: cdktf.stringToTerraform(this._rolesAttribute),
      sign_authn_request: cdktf.booleanToTerraform(this._signAuthnRequest),
      sp_initiated_login_enabled: cdktf.booleanToTerraform(this._spInitiatedLoginEnabled),
      sp_initiated_login_path: cdktf.stringToTerraform(this._spInitiatedLoginPath),
      x509cert1: cdktf.stringToTerraform(this._x509Cert1),
      x509cert2: cdktf.stringToTerraform(this._x509Cert2),
      x509cert3: cdktf.stringToTerraform(this._x509Cert3),
      on_demand_provisioning_enabled: samlConfigurationOnDemandProvisioningEnabledToTerraform(this._onDemandProvisioningEnabled.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authn_request_url: {
        value: cdktf.stringToHclTerraform(this._authnRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_mode: {
        value: cdktf.booleanToHclTerraform(this._debugMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_requested_authn_context: {
        value: cdktf.booleanToHclTerraform(this._disableRequestedAuthnContext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_attribute: {
        value: cdktf.stringToHclTerraform(this._emailAttribute),
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
      is_redirect_binding: {
        value: cdktf.booleanToHclTerraform(this._isRedirectBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_enabled: {
        value: cdktf.booleanToHclTerraform(this._logoutEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles_attribute: {
        value: cdktf.stringToHclTerraform(this._rolesAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_authn_request: {
        value: cdktf.booleanToHclTerraform(this._signAuthnRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sp_initiated_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._spInitiatedLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sp_initiated_login_path: {
        value: cdktf.stringToHclTerraform(this._spInitiatedLoginPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509cert1: {
        value: cdktf.stringToHclTerraform(this._x509Cert1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509cert2: {
        value: cdktf.stringToHclTerraform(this._x509Cert2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509cert3: {
        value: cdktf.stringToHclTerraform(this._x509Cert3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_provisioning_enabled: {
        value: samlConfigurationOnDemandProvisioningEnabledToHclTerraform(this._onDemandProvisioningEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SamlConfigurationOnDemandProvisioningEnabledList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
