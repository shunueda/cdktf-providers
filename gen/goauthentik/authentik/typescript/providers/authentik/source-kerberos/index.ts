// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceKerberosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#authentication_flow SourceKerberos#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#enabled SourceKerberos#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#enrollment_flow SourceKerberos#enrollment_flow}
  */
  readonly enrollmentFlow?: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `name_link`
  *   - `name_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#group_matching_mode SourceKerberos#group_matching_mode}
  */
  readonly groupMatchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#id SourceKerberos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Custom krb5.conf to use. Uses the system one by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#krb5_conf SourceKerberos#krb5_conf}
  */
  readonly krb5Conf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#name SourceKerberos#name}
  */
  readonly name: string;
  /**
  * If enabled, the authentik-stored password will be updated upon login with the Kerberos password backend Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#password_login_update_internal_password SourceKerberos#password_login_update_internal_password}
  */
  readonly passwordLoginUpdateInternalPassword?: boolean | cdktf.IResolvable;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#policy_engine_mode SourceKerberos#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Kerberos realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#realm SourceKerberos#realm}
  */
  readonly realm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#slug SourceKerberos#slug}
  */
  readonly slug: string;
  /**
  * Credential cache to use for SPNEGO in form type:residual
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#spnego_ccache SourceKerberos#spnego_ccache}
  */
  readonly spnegoCcache?: string;
  /**
  * SPNEGO keytab base64-encoded or path to keytab in the form FILE:path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#spnego_keytab SourceKerberos#spnego_keytab}
  */
  readonly spnegoKeytab?: string;
  /**
  * Force the use of a specific server name for SPNEGO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#spnego_server_name SourceKerberos#spnego_server_name}
  */
  readonly spnegoServerName?: string;
  /**
  * Credentials cache to authenticate to kadmin for sync. Must be in the form TYPE:residual
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#sync_ccache SourceKerberos#sync_ccache}
  */
  readonly syncCcache?: string;
  /**
  * Keytab to authenticate to kadmin for sync. Must be base64-encoded or in the form TYPE:residual
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#sync_keytab SourceKerberos#sync_keytab}
  */
  readonly syncKeytab?: string;
  /**
  * Password to authenticate to kadmin for sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#sync_password SourceKerberos#sync_password}
  */
  readonly syncPassword?: string;
  /**
  * Principal to authenticate to kadmin for sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#sync_principal SourceKerberos#sync_principal}
  */
  readonly syncPrincipal?: string;
  /**
  * Sync users from Kerberos into authentik Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#sync_users SourceKerberos#sync_users}
  */
  readonly syncUsers?: boolean | cdktf.IResolvable;
  /**
  * When a user changes their password, sync it back to Kerberos Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#sync_users_password SourceKerberos#sync_users_password}
  */
  readonly syncUsersPassword?: boolean | cdktf.IResolvable;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `email_link`
  *   - `email_deny`
  *   - `username_link`
  *   - `username_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#user_matching_mode SourceKerberos#user_matching_mode}
  */
  readonly userMatchingMode?: string;
  /**
  * Defaults to `goauthentik.io/sources/%(slug)s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#user_path_template SourceKerberos#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#uuid SourceKerberos#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos authentik_source_kerberos}
*/
export class SourceKerberos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_source_kerberos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceKerberos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceKerberos to import
  * @param importFromId The id of the existing SourceKerberos that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceKerberos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_source_kerberos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_kerberos authentik_source_kerberos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceKerberosConfig
  */
  public constructor(scope: Construct, id: string, config: SourceKerberosConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_source_kerberos',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationFlow = config.authenticationFlow;
    this._enabled = config.enabled;
    this._enrollmentFlow = config.enrollmentFlow;
    this._groupMatchingMode = config.groupMatchingMode;
    this._id = config.id;
    this._krb5Conf = config.krb5Conf;
    this._name = config.name;
    this._passwordLoginUpdateInternalPassword = config.passwordLoginUpdateInternalPassword;
    this._policyEngineMode = config.policyEngineMode;
    this._realm = config.realm;
    this._slug = config.slug;
    this._spnegoCcache = config.spnegoCcache;
    this._spnegoKeytab = config.spnegoKeytab;
    this._spnegoServerName = config.spnegoServerName;
    this._syncCcache = config.syncCcache;
    this._syncKeytab = config.syncKeytab;
    this._syncPassword = config.syncPassword;
    this._syncPrincipal = config.syncPrincipal;
    this._syncUsers = config.syncUsers;
    this._syncUsersPassword = config.syncUsersPassword;
    this._userMatchingMode = config.userMatchingMode;
    this._userPathTemplate = config.userPathTemplate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow?: string; 
  public get authenticationFlow() {
    return this.getStringAttribute('authentication_flow');
  }
  public set authenticationFlow(value: string) {
    this._authenticationFlow = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enrollment_flow - computed: false, optional: true, required: false
  private _enrollmentFlow?: string; 
  public get enrollmentFlow() {
    return this.getStringAttribute('enrollment_flow');
  }
  public set enrollmentFlow(value: string) {
    this._enrollmentFlow = value;
  }
  public resetEnrollmentFlow() {
    this._enrollmentFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlowInput() {
    return this._enrollmentFlow;
  }

  // group_matching_mode - computed: false, optional: true, required: false
  private _groupMatchingMode?: string; 
  public get groupMatchingMode() {
    return this.getStringAttribute('group_matching_mode');
  }
  public set groupMatchingMode(value: string) {
    this._groupMatchingMode = value;
  }
  public resetGroupMatchingMode() {
    this._groupMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMatchingModeInput() {
    return this._groupMatchingMode;
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

  // krb5_conf - computed: false, optional: true, required: false
  private _krb5Conf?: string; 
  public get krb5Conf() {
    return this.getStringAttribute('krb5_conf');
  }
  public set krb5Conf(value: string) {
    this._krb5Conf = value;
  }
  public resetKrb5Conf() {
    this._krb5Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfInput() {
    return this._krb5Conf;
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

  // password_login_update_internal_password - computed: false, optional: true, required: false
  private _passwordLoginUpdateInternalPassword?: boolean | cdktf.IResolvable; 
  public get passwordLoginUpdateInternalPassword() {
    return this.getBooleanAttribute('password_login_update_internal_password');
  }
  public set passwordLoginUpdateInternalPassword(value: boolean | cdktf.IResolvable) {
    this._passwordLoginUpdateInternalPassword = value;
  }
  public resetPasswordLoginUpdateInternalPassword() {
    this._passwordLoginUpdateInternalPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLoginUpdateInternalPasswordInput() {
    return this._passwordLoginUpdateInternalPassword;
  }

  // policy_engine_mode - computed: false, optional: true, required: false
  private _policyEngineMode?: string; 
  public get policyEngineMode() {
    return this.getStringAttribute('policy_engine_mode');
  }
  public set policyEngineMode(value: string) {
    this._policyEngineMode = value;
  }
  public resetPolicyEngineMode() {
    this._policyEngineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineModeInput() {
    return this._policyEngineMode;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // spnego_ccache - computed: false, optional: true, required: false
  private _spnegoCcache?: string; 
  public get spnegoCcache() {
    return this.getStringAttribute('spnego_ccache');
  }
  public set spnegoCcache(value: string) {
    this._spnegoCcache = value;
  }
  public resetSpnegoCcache() {
    this._spnegoCcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnegoCcacheInput() {
    return this._spnegoCcache;
  }

  // spnego_keytab - computed: false, optional: true, required: false
  private _spnegoKeytab?: string; 
  public get spnegoKeytab() {
    return this.getStringAttribute('spnego_keytab');
  }
  public set spnegoKeytab(value: string) {
    this._spnegoKeytab = value;
  }
  public resetSpnegoKeytab() {
    this._spnegoKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnegoKeytabInput() {
    return this._spnegoKeytab;
  }

  // spnego_server_name - computed: false, optional: true, required: false
  private _spnegoServerName?: string; 
  public get spnegoServerName() {
    return this.getStringAttribute('spnego_server_name');
  }
  public set spnegoServerName(value: string) {
    this._spnegoServerName = value;
  }
  public resetSpnegoServerName() {
    this._spnegoServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnegoServerNameInput() {
    return this._spnegoServerName;
  }

  // sync_ccache - computed: false, optional: true, required: false
  private _syncCcache?: string; 
  public get syncCcache() {
    return this.getStringAttribute('sync_ccache');
  }
  public set syncCcache(value: string) {
    this._syncCcache = value;
  }
  public resetSyncCcache() {
    this._syncCcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncCcacheInput() {
    return this._syncCcache;
  }

  // sync_keytab - computed: false, optional: true, required: false
  private _syncKeytab?: string; 
  public get syncKeytab() {
    return this.getStringAttribute('sync_keytab');
  }
  public set syncKeytab(value: string) {
    this._syncKeytab = value;
  }
  public resetSyncKeytab() {
    this._syncKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncKeytabInput() {
    return this._syncKeytab;
  }

  // sync_password - computed: false, optional: true, required: false
  private _syncPassword?: string; 
  public get syncPassword() {
    return this.getStringAttribute('sync_password');
  }
  public set syncPassword(value: string) {
    this._syncPassword = value;
  }
  public resetSyncPassword() {
    this._syncPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPasswordInput() {
    return this._syncPassword;
  }

  // sync_principal - computed: false, optional: true, required: false
  private _syncPrincipal?: string; 
  public get syncPrincipal() {
    return this.getStringAttribute('sync_principal');
  }
  public set syncPrincipal(value: string) {
    this._syncPrincipal = value;
  }
  public resetSyncPrincipal() {
    this._syncPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPrincipalInput() {
    return this._syncPrincipal;
  }

  // sync_users - computed: false, optional: true, required: false
  private _syncUsers?: boolean | cdktf.IResolvable; 
  public get syncUsers() {
    return this.getBooleanAttribute('sync_users');
  }
  public set syncUsers(value: boolean | cdktf.IResolvable) {
    this._syncUsers = value;
  }
  public resetSyncUsers() {
    this._syncUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUsersInput() {
    return this._syncUsers;
  }

  // sync_users_password - computed: false, optional: true, required: false
  private _syncUsersPassword?: boolean | cdktf.IResolvable; 
  public get syncUsersPassword() {
    return this.getBooleanAttribute('sync_users_password');
  }
  public set syncUsersPassword(value: boolean | cdktf.IResolvable) {
    this._syncUsersPassword = value;
  }
  public resetSyncUsersPassword() {
    this._syncUsersPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUsersPasswordInput() {
    return this._syncUsersPassword;
  }

  // user_matching_mode - computed: false, optional: true, required: false
  private _userMatchingMode?: string; 
  public get userMatchingMode() {
    return this.getStringAttribute('user_matching_mode');
  }
  public set userMatchingMode(value: string) {
    this._userMatchingMode = value;
  }
  public resetUserMatchingMode() {
    this._userMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchingModeInput() {
    return this._userMatchingMode;
  }

  // user_path_template - computed: false, optional: true, required: false
  private _userPathTemplate?: string; 
  public get userPathTemplate() {
    return this.getStringAttribute('user_path_template');
  }
  public set userPathTemplate(value: string) {
    this._userPathTemplate = value;
  }
  public resetUserPathTemplate() {
    this._userPathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathTemplateInput() {
    return this._userPathTemplate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enrollment_flow: cdktf.stringToTerraform(this._enrollmentFlow),
      group_matching_mode: cdktf.stringToTerraform(this._groupMatchingMode),
      id: cdktf.stringToTerraform(this._id),
      krb5_conf: cdktf.stringToTerraform(this._krb5Conf),
      name: cdktf.stringToTerraform(this._name),
      password_login_update_internal_password: cdktf.booleanToTerraform(this._passwordLoginUpdateInternalPassword),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      realm: cdktf.stringToTerraform(this._realm),
      slug: cdktf.stringToTerraform(this._slug),
      spnego_ccache: cdktf.stringToTerraform(this._spnegoCcache),
      spnego_keytab: cdktf.stringToTerraform(this._spnegoKeytab),
      spnego_server_name: cdktf.stringToTerraform(this._spnegoServerName),
      sync_ccache: cdktf.stringToTerraform(this._syncCcache),
      sync_keytab: cdktf.stringToTerraform(this._syncKeytab),
      sync_password: cdktf.stringToTerraform(this._syncPassword),
      sync_principal: cdktf.stringToTerraform(this._syncPrincipal),
      sync_users: cdktf.booleanToTerraform(this._syncUsers),
      sync_users_password: cdktf.booleanToTerraform(this._syncUsersPassword),
      user_matching_mode: cdktf.stringToTerraform(this._userMatchingMode),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enrollment_flow: {
        value: cdktf.stringToHclTerraform(this._enrollmentFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_matching_mode: {
        value: cdktf.stringToHclTerraform(this._groupMatchingMode),
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
      krb5_conf: {
        value: cdktf.stringToHclTerraform(this._krb5Conf),
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
      password_login_update_internal_password: {
        value: cdktf.booleanToHclTerraform(this._passwordLoginUpdateInternalPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spnego_ccache: {
        value: cdktf.stringToHclTerraform(this._spnegoCcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spnego_keytab: {
        value: cdktf.stringToHclTerraform(this._spnegoKeytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spnego_server_name: {
        value: cdktf.stringToHclTerraform(this._spnegoServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_ccache: {
        value: cdktf.stringToHclTerraform(this._syncCcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_keytab: {
        value: cdktf.stringToHclTerraform(this._syncKeytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_password: {
        value: cdktf.stringToHclTerraform(this._syncPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_principal: {
        value: cdktf.stringToHclTerraform(this._syncPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_users: {
        value: cdktf.booleanToHclTerraform(this._syncUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_users_password: {
        value: cdktf.booleanToHclTerraform(this._syncUsersPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_matching_mode: {
        value: cdktf.stringToHclTerraform(this._userMatchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_path_template: {
        value: cdktf.stringToHclTerraform(this._userPathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
