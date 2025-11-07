// https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#auth_mode ConfigAuth#auth_mode}
  */
  readonly authMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#id ConfigAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_base_dn ConfigAuth#ldap_base_dn}
  */
  readonly ldapBaseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_filter ConfigAuth#ldap_filter}
  */
  readonly ldapFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_admin_dn ConfigAuth#ldap_group_admin_dn}
  */
  readonly ldapGroupAdminDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_base_dn ConfigAuth#ldap_group_base_dn}
  */
  readonly ldapGroupBaseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_filter ConfigAuth#ldap_group_filter}
  */
  readonly ldapGroupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_gid ConfigAuth#ldap_group_gid}
  */
  readonly ldapGroupGid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_membership ConfigAuth#ldap_group_membership}
  */
  readonly ldapGroupMembership?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_scope ConfigAuth#ldap_group_scope}
  */
  readonly ldapGroupScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_group_uid ConfigAuth#ldap_group_uid}
  */
  readonly ldapGroupUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_scope ConfigAuth#ldap_scope}
  */
  readonly ldapScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_search_dn ConfigAuth#ldap_search_dn}
  */
  readonly ldapSearchDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_search_password ConfigAuth#ldap_search_password}
  */
  readonly ldapSearchPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_uid ConfigAuth#ldap_uid}
  */
  readonly ldapUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_url ConfigAuth#ldap_url}
  */
  readonly ldapUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#ldap_verify_cert ConfigAuth#ldap_verify_cert}
  */
  readonly ldapVerifyCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_admin_group ConfigAuth#oidc_admin_group}
  */
  readonly oidcAdminGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_auto_onboard ConfigAuth#oidc_auto_onboard}
  */
  readonly oidcAutoOnboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_client_id ConfigAuth#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_client_secret ConfigAuth#oidc_client_secret}
  */
  readonly oidcClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_endpoint ConfigAuth#oidc_endpoint}
  */
  readonly oidcEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_group_filter ConfigAuth#oidc_group_filter}
  */
  readonly oidcGroupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_groups_claim ConfigAuth#oidc_groups_claim}
  */
  readonly oidcGroupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_logout ConfigAuth#oidc_logout}
  */
  readonly oidcLogout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_name ConfigAuth#oidc_name}
  */
  readonly oidcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_scope ConfigAuth#oidc_scope}
  */
  readonly oidcScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_user_claim ConfigAuth#oidc_user_claim}
  */
  readonly oidcUserClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#oidc_verify_cert ConfigAuth#oidc_verify_cert}
  */
  readonly oidcVerifyCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#primary_auth_mode ConfigAuth#primary_auth_mode}
  */
  readonly primaryAuthMode?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth harbor_config_auth}
*/
export class ConfigAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_config_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigAuth to import
  * @param importFromId The id of the existing ConfigAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_config_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/config_auth harbor_config_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigAuthConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_config_auth',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMode = config.authMode;
    this._id = config.id;
    this._ldapBaseDn = config.ldapBaseDn;
    this._ldapFilter = config.ldapFilter;
    this._ldapGroupAdminDn = config.ldapGroupAdminDn;
    this._ldapGroupBaseDn = config.ldapGroupBaseDn;
    this._ldapGroupFilter = config.ldapGroupFilter;
    this._ldapGroupGid = config.ldapGroupGid;
    this._ldapGroupMembership = config.ldapGroupMembership;
    this._ldapGroupScope = config.ldapGroupScope;
    this._ldapGroupUid = config.ldapGroupUid;
    this._ldapScope = config.ldapScope;
    this._ldapSearchDn = config.ldapSearchDn;
    this._ldapSearchPassword = config.ldapSearchPassword;
    this._ldapUid = config.ldapUid;
    this._ldapUrl = config.ldapUrl;
    this._ldapVerifyCert = config.ldapVerifyCert;
    this._oidcAdminGroup = config.oidcAdminGroup;
    this._oidcAutoOnboard = config.oidcAutoOnboard;
    this._oidcClientId = config.oidcClientId;
    this._oidcClientSecret = config.oidcClientSecret;
    this._oidcEndpoint = config.oidcEndpoint;
    this._oidcGroupFilter = config.oidcGroupFilter;
    this._oidcGroupsClaim = config.oidcGroupsClaim;
    this._oidcLogout = config.oidcLogout;
    this._oidcName = config.oidcName;
    this._oidcScope = config.oidcScope;
    this._oidcUserClaim = config.oidcUserClaim;
    this._oidcVerifyCert = config.oidcVerifyCert;
    this._primaryAuthMode = config.primaryAuthMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
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

  // ldap_base_dn - computed: false, optional: true, required: false
  private _ldapBaseDn?: string; 
  public get ldapBaseDn() {
    return this.getStringAttribute('ldap_base_dn');
  }
  public set ldapBaseDn(value: string) {
    this._ldapBaseDn = value;
  }
  public resetLdapBaseDn() {
    this._ldapBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBaseDnInput() {
    return this._ldapBaseDn;
  }

  // ldap_filter - computed: false, optional: true, required: false
  private _ldapFilter?: string; 
  public get ldapFilter() {
    return this.getStringAttribute('ldap_filter');
  }
  public set ldapFilter(value: string) {
    this._ldapFilter = value;
  }
  public resetLdapFilter() {
    this._ldapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapFilterInput() {
    return this._ldapFilter;
  }

  // ldap_group_admin_dn - computed: false, optional: true, required: false
  private _ldapGroupAdminDn?: string; 
  public get ldapGroupAdminDn() {
    return this.getStringAttribute('ldap_group_admin_dn');
  }
  public set ldapGroupAdminDn(value: string) {
    this._ldapGroupAdminDn = value;
  }
  public resetLdapGroupAdminDn() {
    this._ldapGroupAdminDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupAdminDnInput() {
    return this._ldapGroupAdminDn;
  }

  // ldap_group_base_dn - computed: false, optional: true, required: false
  private _ldapGroupBaseDn?: string; 
  public get ldapGroupBaseDn() {
    return this.getStringAttribute('ldap_group_base_dn');
  }
  public set ldapGroupBaseDn(value: string) {
    this._ldapGroupBaseDn = value;
  }
  public resetLdapGroupBaseDn() {
    this._ldapGroupBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupBaseDnInput() {
    return this._ldapGroupBaseDn;
  }

  // ldap_group_filter - computed: false, optional: true, required: false
  private _ldapGroupFilter?: string; 
  public get ldapGroupFilter() {
    return this.getStringAttribute('ldap_group_filter');
  }
  public set ldapGroupFilter(value: string) {
    this._ldapGroupFilter = value;
  }
  public resetLdapGroupFilter() {
    this._ldapGroupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupFilterInput() {
    return this._ldapGroupFilter;
  }

  // ldap_group_gid - computed: false, optional: true, required: false
  private _ldapGroupGid?: string; 
  public get ldapGroupGid() {
    return this.getStringAttribute('ldap_group_gid');
  }
  public set ldapGroupGid(value: string) {
    this._ldapGroupGid = value;
  }
  public resetLdapGroupGid() {
    this._ldapGroupGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupGidInput() {
    return this._ldapGroupGid;
  }

  // ldap_group_membership - computed: false, optional: true, required: false
  private _ldapGroupMembership?: string; 
  public get ldapGroupMembership() {
    return this.getStringAttribute('ldap_group_membership');
  }
  public set ldapGroupMembership(value: string) {
    this._ldapGroupMembership = value;
  }
  public resetLdapGroupMembership() {
    this._ldapGroupMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupMembershipInput() {
    return this._ldapGroupMembership;
  }

  // ldap_group_scope - computed: false, optional: true, required: false
  private _ldapGroupScope?: string; 
  public get ldapGroupScope() {
    return this.getStringAttribute('ldap_group_scope');
  }
  public set ldapGroupScope(value: string) {
    this._ldapGroupScope = value;
  }
  public resetLdapGroupScope() {
    this._ldapGroupScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupScopeInput() {
    return this._ldapGroupScope;
  }

  // ldap_group_uid - computed: false, optional: true, required: false
  private _ldapGroupUid?: string; 
  public get ldapGroupUid() {
    return this.getStringAttribute('ldap_group_uid');
  }
  public set ldapGroupUid(value: string) {
    this._ldapGroupUid = value;
  }
  public resetLdapGroupUid() {
    this._ldapGroupUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupUidInput() {
    return this._ldapGroupUid;
  }

  // ldap_scope - computed: false, optional: true, required: false
  private _ldapScope?: string; 
  public get ldapScope() {
    return this.getStringAttribute('ldap_scope');
  }
  public set ldapScope(value: string) {
    this._ldapScope = value;
  }
  public resetLdapScope() {
    this._ldapScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapScopeInput() {
    return this._ldapScope;
  }

  // ldap_search_dn - computed: false, optional: true, required: false
  private _ldapSearchDn?: string; 
  public get ldapSearchDn() {
    return this.getStringAttribute('ldap_search_dn');
  }
  public set ldapSearchDn(value: string) {
    this._ldapSearchDn = value;
  }
  public resetLdapSearchDn() {
    this._ldapSearchDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSearchDnInput() {
    return this._ldapSearchDn;
  }

  // ldap_search_password - computed: false, optional: true, required: false
  private _ldapSearchPassword?: string; 
  public get ldapSearchPassword() {
    return this.getStringAttribute('ldap_search_password');
  }
  public set ldapSearchPassword(value: string) {
    this._ldapSearchPassword = value;
  }
  public resetLdapSearchPassword() {
    this._ldapSearchPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSearchPasswordInput() {
    return this._ldapSearchPassword;
  }

  // ldap_uid - computed: false, optional: true, required: false
  private _ldapUid?: string; 
  public get ldapUid() {
    return this.getStringAttribute('ldap_uid');
  }
  public set ldapUid(value: string) {
    this._ldapUid = value;
  }
  public resetLdapUid() {
    this._ldapUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUidInput() {
    return this._ldapUid;
  }

  // ldap_url - computed: false, optional: true, required: false
  private _ldapUrl?: string; 
  public get ldapUrl() {
    return this.getStringAttribute('ldap_url');
  }
  public set ldapUrl(value: string) {
    this._ldapUrl = value;
  }
  public resetLdapUrl() {
    this._ldapUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUrlInput() {
    return this._ldapUrl;
  }

  // ldap_verify_cert - computed: false, optional: true, required: false
  private _ldapVerifyCert?: boolean | cdktf.IResolvable; 
  public get ldapVerifyCert() {
    return this.getBooleanAttribute('ldap_verify_cert');
  }
  public set ldapVerifyCert(value: boolean | cdktf.IResolvable) {
    this._ldapVerifyCert = value;
  }
  public resetLdapVerifyCert() {
    this._ldapVerifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapVerifyCertInput() {
    return this._ldapVerifyCert;
  }

  // oidc_admin_group - computed: false, optional: true, required: false
  private _oidcAdminGroup?: string; 
  public get oidcAdminGroup() {
    return this.getStringAttribute('oidc_admin_group');
  }
  public set oidcAdminGroup(value: string) {
    this._oidcAdminGroup = value;
  }
  public resetOidcAdminGroup() {
    this._oidcAdminGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAdminGroupInput() {
    return this._oidcAdminGroup;
  }

  // oidc_auto_onboard - computed: false, optional: true, required: false
  private _oidcAutoOnboard?: boolean | cdktf.IResolvable; 
  public get oidcAutoOnboard() {
    return this.getBooleanAttribute('oidc_auto_onboard');
  }
  public set oidcAutoOnboard(value: boolean | cdktf.IResolvable) {
    this._oidcAutoOnboard = value;
  }
  public resetOidcAutoOnboard() {
    this._oidcAutoOnboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAutoOnboardInput() {
    return this._oidcAutoOnboard;
  }

  // oidc_client_id - computed: false, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_client_secret - computed: false, optional: true, required: false
  private _oidcClientSecret?: string; 
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }
  public set oidcClientSecret(value: string) {
    this._oidcClientSecret = value;
  }
  public resetOidcClientSecret() {
    this._oidcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretInput() {
    return this._oidcClientSecret;
  }

  // oidc_endpoint - computed: false, optional: true, required: false
  private _oidcEndpoint?: string; 
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }
  public set oidcEndpoint(value: string) {
    this._oidcEndpoint = value;
  }
  public resetOidcEndpoint() {
    this._oidcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointInput() {
    return this._oidcEndpoint;
  }

  // oidc_group_filter - computed: false, optional: true, required: false
  private _oidcGroupFilter?: string; 
  public get oidcGroupFilter() {
    return this.getStringAttribute('oidc_group_filter');
  }
  public set oidcGroupFilter(value: string) {
    this._oidcGroupFilter = value;
  }
  public resetOidcGroupFilter() {
    this._oidcGroupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupFilterInput() {
    return this._oidcGroupFilter;
  }

  // oidc_groups_claim - computed: false, optional: true, required: false
  private _oidcGroupsClaim?: string; 
  public get oidcGroupsClaim() {
    return this.getStringAttribute('oidc_groups_claim');
  }
  public set oidcGroupsClaim(value: string) {
    this._oidcGroupsClaim = value;
  }
  public resetOidcGroupsClaim() {
    this._oidcGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsClaimInput() {
    return this._oidcGroupsClaim;
  }

  // oidc_logout - computed: false, optional: true, required: false
  private _oidcLogout?: boolean | cdktf.IResolvable; 
  public get oidcLogout() {
    return this.getBooleanAttribute('oidc_logout');
  }
  public set oidcLogout(value: boolean | cdktf.IResolvable) {
    this._oidcLogout = value;
  }
  public resetOidcLogout() {
    this._oidcLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcLogoutInput() {
    return this._oidcLogout;
  }

  // oidc_name - computed: false, optional: true, required: false
  private _oidcName?: string; 
  public get oidcName() {
    return this.getStringAttribute('oidc_name');
  }
  public set oidcName(value: string) {
    this._oidcName = value;
  }
  public resetOidcName() {
    this._oidcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcNameInput() {
    return this._oidcName;
  }

  // oidc_scope - computed: false, optional: true, required: false
  private _oidcScope?: string; 
  public get oidcScope() {
    return this.getStringAttribute('oidc_scope');
  }
  public set oidcScope(value: string) {
    this._oidcScope = value;
  }
  public resetOidcScope() {
    this._oidcScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopeInput() {
    return this._oidcScope;
  }

  // oidc_user_claim - computed: false, optional: true, required: false
  private _oidcUserClaim?: string; 
  public get oidcUserClaim() {
    return this.getStringAttribute('oidc_user_claim');
  }
  public set oidcUserClaim(value: string) {
    this._oidcUserClaim = value;
  }
  public resetOidcUserClaim() {
    this._oidcUserClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUserClaimInput() {
    return this._oidcUserClaim;
  }

  // oidc_verify_cert - computed: false, optional: true, required: false
  private _oidcVerifyCert?: boolean | cdktf.IResolvable; 
  public get oidcVerifyCert() {
    return this.getBooleanAttribute('oidc_verify_cert');
  }
  public set oidcVerifyCert(value: boolean | cdktf.IResolvable) {
    this._oidcVerifyCert = value;
  }
  public resetOidcVerifyCert() {
    this._oidcVerifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcVerifyCertInput() {
    return this._oidcVerifyCert;
  }

  // primary_auth_mode - computed: false, optional: true, required: false
  private _primaryAuthMode?: boolean | cdktf.IResolvable; 
  public get primaryAuthMode() {
    return this.getBooleanAttribute('primary_auth_mode');
  }
  public set primaryAuthMode(value: boolean | cdktf.IResolvable) {
    this._primaryAuthMode = value;
  }
  public resetPrimaryAuthMode() {
    this._primaryAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAuthModeInput() {
    return this._primaryAuthMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mode: cdktf.stringToTerraform(this._authMode),
      id: cdktf.stringToTerraform(this._id),
      ldap_base_dn: cdktf.stringToTerraform(this._ldapBaseDn),
      ldap_filter: cdktf.stringToTerraform(this._ldapFilter),
      ldap_group_admin_dn: cdktf.stringToTerraform(this._ldapGroupAdminDn),
      ldap_group_base_dn: cdktf.stringToTerraform(this._ldapGroupBaseDn),
      ldap_group_filter: cdktf.stringToTerraform(this._ldapGroupFilter),
      ldap_group_gid: cdktf.stringToTerraform(this._ldapGroupGid),
      ldap_group_membership: cdktf.stringToTerraform(this._ldapGroupMembership),
      ldap_group_scope: cdktf.stringToTerraform(this._ldapGroupScope),
      ldap_group_uid: cdktf.stringToTerraform(this._ldapGroupUid),
      ldap_scope: cdktf.stringToTerraform(this._ldapScope),
      ldap_search_dn: cdktf.stringToTerraform(this._ldapSearchDn),
      ldap_search_password: cdktf.stringToTerraform(this._ldapSearchPassword),
      ldap_uid: cdktf.stringToTerraform(this._ldapUid),
      ldap_url: cdktf.stringToTerraform(this._ldapUrl),
      ldap_verify_cert: cdktf.booleanToTerraform(this._ldapVerifyCert),
      oidc_admin_group: cdktf.stringToTerraform(this._oidcAdminGroup),
      oidc_auto_onboard: cdktf.booleanToTerraform(this._oidcAutoOnboard),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_client_secret: cdktf.stringToTerraform(this._oidcClientSecret),
      oidc_endpoint: cdktf.stringToTerraform(this._oidcEndpoint),
      oidc_group_filter: cdktf.stringToTerraform(this._oidcGroupFilter),
      oidc_groups_claim: cdktf.stringToTerraform(this._oidcGroupsClaim),
      oidc_logout: cdktf.booleanToTerraform(this._oidcLogout),
      oidc_name: cdktf.stringToTerraform(this._oidcName),
      oidc_scope: cdktf.stringToTerraform(this._oidcScope),
      oidc_user_claim: cdktf.stringToTerraform(this._oidcUserClaim),
      oidc_verify_cert: cdktf.booleanToTerraform(this._oidcVerifyCert),
      primary_auth_mode: cdktf.booleanToTerraform(this._primaryAuthMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
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
      ldap_base_dn: {
        value: cdktf.stringToHclTerraform(this._ldapBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_filter: {
        value: cdktf.stringToHclTerraform(this._ldapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_admin_dn: {
        value: cdktf.stringToHclTerraform(this._ldapGroupAdminDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_base_dn: {
        value: cdktf.stringToHclTerraform(this._ldapGroupBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_filter: {
        value: cdktf.stringToHclTerraform(this._ldapGroupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_gid: {
        value: cdktf.stringToHclTerraform(this._ldapGroupGid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_membership: {
        value: cdktf.stringToHclTerraform(this._ldapGroupMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_scope: {
        value: cdktf.stringToHclTerraform(this._ldapGroupScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_uid: {
        value: cdktf.stringToHclTerraform(this._ldapGroupUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_scope: {
        value: cdktf.stringToHclTerraform(this._ldapScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_search_dn: {
        value: cdktf.stringToHclTerraform(this._ldapSearchDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_search_password: {
        value: cdktf.stringToHclTerraform(this._ldapSearchPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_uid: {
        value: cdktf.stringToHclTerraform(this._ldapUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_url: {
        value: cdktf.stringToHclTerraform(this._ldapUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_verify_cert: {
        value: cdktf.booleanToHclTerraform(this._ldapVerifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_admin_group: {
        value: cdktf.stringToHclTerraform(this._oidcAdminGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_auto_onboard: {
        value: cdktf.booleanToHclTerraform(this._oidcAutoOnboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret: {
        value: cdktf.stringToHclTerraform(this._oidcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_endpoint: {
        value: cdktf.stringToHclTerraform(this._oidcEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_group_filter: {
        value: cdktf.stringToHclTerraform(this._oidcGroupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_groups_claim: {
        value: cdktf.stringToHclTerraform(this._oidcGroupsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_logout: {
        value: cdktf.booleanToHclTerraform(this._oidcLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_name: {
        value: cdktf.stringToHclTerraform(this._oidcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_scope: {
        value: cdktf.stringToHclTerraform(this._oidcScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_user_claim: {
        value: cdktf.stringToHclTerraform(this._oidcUserClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_verify_cert: {
        value: cdktf.booleanToHclTerraform(this._oidcVerifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_auth_mode: {
        value: cdktf.booleanToHclTerraform(this._primaryAuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
