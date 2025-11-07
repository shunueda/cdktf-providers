// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RbacPermissionUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user#id RbacPermissionUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed values:
  *   - `authentik_tenants.domain`
  *   - `authentik_core.group`
  *   - `authentik_core.user`
  *   - `authentik_core.application`
  *   - `authentik_core.applicationentitlement`
  *   - `authentik_core.token`
  *   - `authentik_crypto.certificatekeypair`
  *   - `authentik_enterprise.license`
  *   - `authentik_events.event`
  *   - `authentik_events.notificationtransport`
  *   - `authentik_events.notification`
  *   - `authentik_events.notificationrule`
  *   - `authentik_events.notificationwebhookmapping`
  *   - `authentik_flows.flow`
  *   - `authentik_flows.flowstagebinding`
  *   - `authentik_outposts.dockerserviceconnection`
  *   - `authentik_outposts.kubernetesserviceconnection`
  *   - `authentik_outposts.outpost`
  *   - `authentik_policies_dummy.dummypolicy`
  *   - `authentik_policies_event_matcher.eventmatcherpolicy`
  *   - `authentik_policies_expiry.passwordexpirypolicy`
  *   - `authentik_policies_expression.expressionpolicy`
  *   - `authentik_policies_geoip.geoippolicy`
  *   - `authentik_policies_password.passwordpolicy`
  *   - `authentik_policies_reputation.reputationpolicy`
  *   - `authentik_policies.policybinding`
  *   - `authentik_providers_ldap.ldapprovider`
  *   - `authentik_providers_oauth2.scopemapping`
  *   - `authentik_providers_oauth2.oauth2provider`
  *   - `authentik_providers_proxy.proxyprovider`
  *   - `authentik_providers_rac.racprovider`
  *   - `authentik_providers_rac.endpoint`
  *   - `authentik_providers_rac.racpropertymapping`
  *   - `authentik_providers_radius.radiusprovider`
  *   - `authentik_providers_radius.radiusproviderpropertymapping`
  *   - `authentik_providers_saml.samlprovider`
  *   - `authentik_providers_saml.samlpropertymapping`
  *   - `authentik_providers_scim.scimprovider`
  *   - `authentik_providers_scim.scimmapping`
  *   - `authentik_rbac.role`
  *   - `authentik_rbac.initialpermissions`
  *   - `authentik_sources_kerberos.kerberossource`
  *   - `authentik_sources_kerberos.kerberossourcepropertymapping`
  *   - `authentik_sources_kerberos.userkerberossourceconnection`
  *   - `authentik_sources_kerberos.groupkerberossourceconnection`
  *   - `authentik_sources_ldap.ldapsource`
  *   - `authentik_sources_ldap.ldapsourcepropertymapping`
  *   - `authentik_sources_ldap.userldapsourceconnection`
  *   - `authentik_sources_ldap.groupldapsourceconnection`
  *   - `authentik_sources_oauth.oauthsource`
  *   - `authentik_sources_oauth.oauthsourcepropertymapping`
  *   - `authentik_sources_oauth.useroauthsourceconnection`
  *   - `authentik_sources_oauth.groupoauthsourceconnection`
  *   - `authentik_sources_plex.plexsource`
  *   - `authentik_sources_plex.plexsourcepropertymapping`
  *   - `authentik_sources_plex.userplexsourceconnection`
  *   - `authentik_sources_plex.groupplexsourceconnection`
  *   - `authentik_sources_saml.samlsource`
  *   - `authentik_sources_saml.samlsourcepropertymapping`
  *   - `authentik_sources_saml.usersamlsourceconnection`
  *   - `authentik_sources_saml.groupsamlsourceconnection`
  *   - `authentik_sources_scim.scimsource`
  *   - `authentik_sources_scim.scimsourcepropertymapping`
  *   - `authentik_sources_telegram.telegramsource`
  *   - `authentik_sources_telegram.telegramsourcepropertymapping`
  *   - `authentik_sources_telegram.usertelegramsourceconnection`
  *   - `authentik_sources_telegram.grouptelegramsourceconnection`
  *   - `authentik_stages_authenticator_duo.authenticatorduostage`
  *   - `authentik_stages_authenticator_duo.duodevice`
  *   - `authentik_stages_authenticator_email.authenticatoremailstage`
  *   - `authentik_stages_authenticator_email.emaildevice`
  *   - `authentik_stages_authenticator_sms.authenticatorsmsstage`
  *   - `authentik_stages_authenticator_sms.smsdevice`
  *   - `authentik_stages_authenticator_static.authenticatorstaticstage`
  *   - `authentik_stages_authenticator_static.staticdevice`
  *   - `authentik_stages_authenticator_totp.authenticatortotpstage`
  *   - `authentik_stages_authenticator_totp.totpdevice`
  *   - `authentik_stages_authenticator_validate.authenticatorvalidatestage`
  *   - `authentik_stages_authenticator_webauthn.authenticatorwebauthnstage`
  *   - `authentik_stages_authenticator_webauthn.webauthndevice`
  *   - `authentik_stages_captcha.captchastage`
  *   - `authentik_stages_consent.consentstage`
  *   - `authentik_stages_deny.denystage`
  *   - `authentik_stages_dummy.dummystage`
  *   - `authentik_stages_email.emailstage`
  *   - `authentik_stages_identification.identificationstage`
  *   - `authentik_stages_invitation.invitationstage`
  *   - `authentik_stages_invitation.invitation`
  *   - `authentik_stages_password.passwordstage`
  *   - `authentik_stages_prompt.prompt`
  *   - `authentik_stages_prompt.promptstage`
  *   - `authentik_stages_redirect.redirectstage`
  *   - `authentik_stages_user_delete.userdeletestage`
  *   - `authentik_stages_user_login.userloginstage`
  *   - `authentik_stages_user_logout.userlogoutstage`
  *   - `authentik_stages_user_write.userwritestage`
  *   - `authentik_tasks_schedules.schedule`
  *   - `authentik_brands.brand`
  *   - `authentik_blueprints.blueprintinstance`
  *   - `authentik_policies_unique_password.uniquepasswordpolicy`
  *   - `authentik_providers_google_workspace.googleworkspaceprovider`
  *   - `authentik_providers_google_workspace.googleworkspaceprovidermapping`
  *   - `authentik_providers_microsoft_entra.microsoftentraprovider`
  *   - `authentik_providers_microsoft_entra.microsoftentraprovidermapping`
  *   - `authentik_providers_ssf.ssfprovider`
  *   - `authentik_stages_authenticator_endpoint_gdtc.authenticatorendpointgdtcstage`
  *   - `authentik_stages_mtls.mutualtlsstage`
  *   - `authentik_stages_source.sourcestage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user#model RbacPermissionUser#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user#object_id RbacPermissionUser#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user#permission RbacPermissionUser#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user#user RbacPermissionUser#user}
  */
  readonly user: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user authentik_rbac_permission_user}
*/
export class RbacPermissionUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_rbac_permission_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RbacPermissionUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RbacPermissionUser to import
  * @param importFromId The id of the existing RbacPermissionUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RbacPermissionUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_rbac_permission_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/rbac_permission_user authentik_rbac_permission_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RbacPermissionUserConfig
  */
  public constructor(scope: Construct, id: string, config: RbacPermissionUserConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_rbac_permission_user',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._model = config.model;
    this._objectId = config.objectId;
    this._permission = config.permission;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // user - computed: false, optional: false, required: true
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      model: cdktf.stringToTerraform(this._model),
      object_id: cdktf.stringToTerraform(this._objectId),
      permission: cdktf.stringToTerraform(this._permission),
      user: cdktf.numberToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.numberToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
