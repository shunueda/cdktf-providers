// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyEventMatcherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#action PolicyEventMatcher#action}
  */
  readonly action?: string;
  /**
  * Allowed values:
  *   - `authentik.commands`
  *   - `authentik.tenants`
  *   - `authentik.tasks`
  *   - `authentik.admin`
  *   - `authentik.api`
  *   - `authentik.core`
  *   - `authentik.crypto`
  *   - `authentik.endpoints`
  *   - `authentik.endpoints.connectors.agent`
  *   - `authentik.enterprise`
  *   - `authentik.events`
  *   - `authentik.flows`
  *   - `authentik.outposts`
  *   - `authentik.policies.dummy`
  *   - `authentik.policies.event_matcher`
  *   - `authentik.policies.expiry`
  *   - `authentik.policies.expression`
  *   - `authentik.policies.geoip`
  *   - `authentik.policies.password`
  *   - `authentik.policies.reputation`
  *   - `authentik.policies`
  *   - `authentik.providers.ldap`
  *   - `authentik.providers.oauth2`
  *   - `authentik.providers.proxy`
  *   - `authentik.providers.rac`
  *   - `authentik.providers.radius`
  *   - `authentik.providers.saml`
  *   - `authentik.providers.scim`
  *   - `authentik.rbac`
  *   - `authentik.recovery`
  *   - `authentik.sources.kerberos`
  *   - `authentik.sources.ldap`
  *   - `authentik.sources.oauth`
  *   - `authentik.sources.plex`
  *   - `authentik.sources.saml`
  *   - `authentik.sources.scim`
  *   - `authentik.sources.telegram`
  *   - `authentik.stages.authenticator`
  *   - `authentik.stages.authenticator_duo`
  *   - `authentik.stages.authenticator_email`
  *   - `authentik.stages.authenticator_sms`
  *   - `authentik.stages.authenticator_static`
  *   - `authentik.stages.authenticator_totp`
  *   - `authentik.stages.authenticator_validate`
  *   - `authentik.stages.authenticator_webauthn`
  *   - `authentik.stages.captcha`
  *   - `authentik.stages.consent`
  *   - `authentik.stages.deny`
  *   - `authentik.stages.dummy`
  *   - `authentik.stages.email`
  *   - `authentik.stages.identification`
  *   - `authentik.stages.invitation`
  *   - `authentik.stages.password`
  *   - `authentik.stages.prompt`
  *   - `authentik.stages.redirect`
  *   - `authentik.stages.user_delete`
  *   - `authentik.stages.user_login`
  *   - `authentik.stages.user_logout`
  *   - `authentik.stages.user_write`
  *   - `authentik.tasks.schedules`
  *   - `authentik.brands`
  *   - `authentik.blueprints`
  *   - `authentik.enterprise.audit`
  *   - `authentik.enterprise.endpoints.connectors.agent`
  *   - `authentik.enterprise.policies.unique_password`
  *   - `authentik.enterprise.providers.google_workspace`
  *   - `authentik.enterprise.providers.microsoft_entra`
  *   - `authentik.enterprise.providers.radius`
  *   - `authentik.enterprise.providers.scim`
  *   - `authentik.enterprise.providers.ssf`
  *   - `authentik.enterprise.search`
  *   - `authentik.enterprise.stages.authenticator_endpoint_gdtc`
  *   - `authentik.enterprise.stages.mtls`
  *   - `authentik.enterprise.stages.source`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#app PolicyEventMatcher#app}
  */
  readonly app?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#client_ip PolicyEventMatcher#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#execution_logging PolicyEventMatcher#execution_logging}
  */
  readonly executionLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#id PolicyEventMatcher#id}
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
  *   - `authentik_endpoints.deviceuserbinding`
  *   - `authentik_endpoints.endpointstage`
  *   - `authentik_endpoints_connectors_agent.agentconnector`
  *   - `authentik_endpoints_connectors_agent.agentdeviceuserbinding`
  *   - `authentik_endpoints_connectors_agent.enrollmenttoken`
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#model PolicyEventMatcher#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#name PolicyEventMatcher#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher authentik_policy_event_matcher}
*/
export class PolicyEventMatcher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_policy_event_matcher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyEventMatcher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyEventMatcher to import
  * @param importFromId The id of the existing PolicyEventMatcher that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyEventMatcher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_policy_event_matcher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.1/docs/resources/policy_event_matcher authentik_policy_event_matcher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyEventMatcherConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyEventMatcherConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_policy_event_matcher',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.1',
        providerVersionConstraint: '2025.10.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._app = config.app;
    this._clientIp = config.clientIp;
    this._executionLogging = config.executionLogging;
    this._id = config.id;
    this._model = config.model;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // execution_logging - computed: false, optional: true, required: false
  private _executionLogging?: boolean | cdktf.IResolvable; 
  public get executionLogging() {
    return this.getBooleanAttribute('execution_logging');
  }
  public set executionLogging(value: boolean | cdktf.IResolvable) {
    this._executionLogging = value;
  }
  public resetExecutionLogging() {
    this._executionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLoggingInput() {
    return this._executionLogging;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      app: cdktf.stringToTerraform(this._app),
      client_ip: cdktf.stringToTerraform(this._clientIp),
      execution_logging: cdktf.booleanToTerraform(this._executionLogging),
      id: cdktf.stringToTerraform(this._id),
      model: cdktf.stringToTerraform(this._model),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip: {
        value: cdktf.stringToHclTerraform(this._clientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_logging: {
        value: cdktf.booleanToHclTerraform(this._executionLogging),
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
      model: {
        value: cdktf.stringToHclTerraform(this._model),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
