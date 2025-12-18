// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgNacidpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required if `ldap_type`==`custom`, LDAP filter that will identify the type of group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#group_filter OrgNacidp#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * enum: `ldap`, `mxedge_proxy`, `oauth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#idp_type OrgNacidp#idp_type}
  */
  readonly idpType: string;
  /**
  * Required if `idp_type`==`ldap`, whole domain or a specific organization unit (container) in Search base to specify where users and groups are found in the LDAP tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_base_dn OrgNacidp#ldap_base_dn}
  */
  readonly ldapBaseDn?: string;
  /**
  * Required if `idp_type`==`ldap`, the account used to authenticate against the LDAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_bind_dn OrgNacidp#ldap_bind_dn}
  */
  readonly ldapBindDn?: string;
  /**
  * Required if `idp_type`==`ldap`, the password used to authenticate against the LDAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_bind_password OrgNacidp#ldap_bind_password}
  */
  readonly ldapBindPassword?: string;
  /**
  * Required if `idp_type`==`ldap`, list of CA certificates to validate the LDAP certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_cacerts OrgNacidp#ldap_cacerts}
  */
  readonly ldapCacerts?: string[];
  /**
  * If `idp_type`==`ldap`, LDAPS Client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_client_cert OrgNacidp#ldap_client_cert}
  */
  readonly ldapClientCert?: string;
  /**
  * If `idp_type`==`ldap`, Key for the `ldap_client_cert`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_client_key OrgNacidp#ldap_client_key}
  */
  readonly ldapClientKey?: string;
  /**
  * If `ldap_type`==`custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_group_attr OrgNacidp#ldap_group_attr}
  */
  readonly ldapGroupAttr?: string;
  /**
  * If `ldap_type`==`custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_group_dn OrgNacidp#ldap_group_dn}
  */
  readonly ldapGroupDn?: string;
  /**
  * If `idp_type`==`ldap`, whether to recursively resolve LDAP groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_resolve_groups OrgNacidp#ldap_resolve_groups}
  */
  readonly ldapResolveGroups?: boolean | cdktf.IResolvable;
  /**
  * If `idp_type`==`ldap`, list of LDAP/LDAPS server IP Addresses or Hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_server_hosts OrgNacidp#ldap_server_hosts}
  */
  readonly ldapServerHosts?: string[];
  /**
  * if `idp_type`==`ldap`. enum: `azure`, `custom`, `google`, `okta`, `ping_identity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_type OrgNacidp#ldap_type}
  */
  readonly ldapType?: string;
  /**
  * Required if `ldap_type`==`custom`, LDAP filter that will identify the type of user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#ldap_user_filter OrgNacidp#ldap_user_filter}
  */
  readonly ldapUserFilter?: string;
  /**
  * Required if `ldap_type`==`custom`,LDAP filter that will identify the type of member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#member_filter OrgNacidp#member_filter}
  */
  readonly memberFilter?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#name OrgNacidp#name}
  */
  readonly name: string;
  /**
  * Required if `idp_type`==`oauth`, Client Credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_cc_client_id OrgNacidp#oauth_cc_client_id}
  */
  readonly oauthCcClientId?: string;
  /**
  * Required if `idp_type`==`oauth`, oauth_cc_client_secret is RSA private key, of the form "-----BEGIN RSA PRIVATE KEY--...."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_cc_client_secret OrgNacidp#oauth_cc_client_secret}
  */
  readonly oauthCcClientSecret?: string;
  /**
  * If `idp_type`==`oauth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_discovery_url OrgNacidp#oauth_discovery_url}
  */
  readonly oauthDiscoveryUrl?: string;
  /**
  * enum: `us` (United States, default), `ca` (Canada), `eu` (Europe), `asia` (Asia), `au` (Australia)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_ping_identity_region OrgNacidp#oauth_ping_identity_region}
  */
  readonly oauthPingIdentityRegion?: string;
  /**
  * If `idp_type`==`oauth`, ropc = Resource Owner Password Credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_ropc_client_id OrgNacidp#oauth_ropc_client_id}
  */
  readonly oauthRopcClientId?: string;
  /**
  * If `oauth_type`==`azure` or `oauth_type`==`azure-gov`. oauth_ropc_client_secret can be empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_ropc_client_secret OrgNacidp#oauth_ropc_client_secret}
  */
  readonly oauthRopcClientSecret?: string;
  /**
  * Required if `idp_type`==`oauth`, oauth_tenant_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_tenant_id OrgNacidp#oauth_tenant_id}
  */
  readonly oauthTenantId?: string;
  /**
  * if `idp_type`==`oauth`. enum: `azure`, `azure-gov`, `okta`, `ping_identity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#oauth_type OrgNacidp#oauth_type}
  */
  readonly oauthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#org_id OrgNacidp#org_id}
  */
  readonly orgId: string;
  /**
  * If `idp_type`==`oauth`, indicates if SCIM provisioning is enabled for the OAuth IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#scim_enabled OrgNacidp#scim_enabled}
  */
  readonly scimEnabled?: boolean | cdktf.IResolvable;
  /**
  * If `idp_type`==`oauth`, scim_secret_token (auto-generated when not provided by caller and `scim_enabled`==`true`, empty string when `scim_enabled`==`false`) is used as the Bearer token in the Authorization header of SCIM provisioning requests by the IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#scim_secret_token OrgNacidp#scim_secret_token}
  */
  readonly scimSecretToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp mist_org_nacidp}
*/
export class OrgNacidp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_nacidp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgNacidp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgNacidp to import
  * @param importFromId The id of the existing OrgNacidp that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgNacidp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_nacidp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nacidp mist_org_nacidp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgNacidpConfig
  */
  public constructor(scope: Construct, id: string, config: OrgNacidpConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_nacidp',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupFilter = config.groupFilter;
    this._idpType = config.idpType;
    this._ldapBaseDn = config.ldapBaseDn;
    this._ldapBindDn = config.ldapBindDn;
    this._ldapBindPassword = config.ldapBindPassword;
    this._ldapCacerts = config.ldapCacerts;
    this._ldapClientCert = config.ldapClientCert;
    this._ldapClientKey = config.ldapClientKey;
    this._ldapGroupAttr = config.ldapGroupAttr;
    this._ldapGroupDn = config.ldapGroupDn;
    this._ldapResolveGroups = config.ldapResolveGroups;
    this._ldapServerHosts = config.ldapServerHosts;
    this._ldapType = config.ldapType;
    this._ldapUserFilter = config.ldapUserFilter;
    this._memberFilter = config.memberFilter;
    this._name = config.name;
    this._oauthCcClientId = config.oauthCcClientId;
    this._oauthCcClientSecret = config.oauthCcClientSecret;
    this._oauthDiscoveryUrl = config.oauthDiscoveryUrl;
    this._oauthPingIdentityRegion = config.oauthPingIdentityRegion;
    this._oauthRopcClientId = config.oauthRopcClientId;
    this._oauthRopcClientSecret = config.oauthRopcClientSecret;
    this._oauthTenantId = config.oauthTenantId;
    this._oauthType = config.oauthType;
    this._orgId = config.orgId;
    this._scimEnabled = config.scimEnabled;
    this._scimSecretToken = config.scimSecretToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_filter - computed: false, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_type - computed: false, optional: false, required: true
  private _idpType?: string; 
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }
  public set idpType(value: string) {
    this._idpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTypeInput() {
    return this._idpType;
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

  // ldap_bind_dn - computed: false, optional: true, required: false
  private _ldapBindDn?: string; 
  public get ldapBindDn() {
    return this.getStringAttribute('ldap_bind_dn');
  }
  public set ldapBindDn(value: string) {
    this._ldapBindDn = value;
  }
  public resetLdapBindDn() {
    this._ldapBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBindDnInput() {
    return this._ldapBindDn;
  }

  // ldap_bind_password - computed: false, optional: true, required: false
  private _ldapBindPassword?: string; 
  public get ldapBindPassword() {
    return this.getStringAttribute('ldap_bind_password');
  }
  public set ldapBindPassword(value: string) {
    this._ldapBindPassword = value;
  }
  public resetLdapBindPassword() {
    this._ldapBindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBindPasswordInput() {
    return this._ldapBindPassword;
  }

  // ldap_cacerts - computed: false, optional: true, required: false
  private _ldapCacerts?: string[]; 
  public get ldapCacerts() {
    return this.getListAttribute('ldap_cacerts');
  }
  public set ldapCacerts(value: string[]) {
    this._ldapCacerts = value;
  }
  public resetLdapCacerts() {
    this._ldapCacerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapCacertsInput() {
    return this._ldapCacerts;
  }

  // ldap_client_cert - computed: false, optional: true, required: false
  private _ldapClientCert?: string; 
  public get ldapClientCert() {
    return this.getStringAttribute('ldap_client_cert');
  }
  public set ldapClientCert(value: string) {
    this._ldapClientCert = value;
  }
  public resetLdapClientCert() {
    this._ldapClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapClientCertInput() {
    return this._ldapClientCert;
  }

  // ldap_client_key - computed: false, optional: true, required: false
  private _ldapClientKey?: string; 
  public get ldapClientKey() {
    return this.getStringAttribute('ldap_client_key');
  }
  public set ldapClientKey(value: string) {
    this._ldapClientKey = value;
  }
  public resetLdapClientKey() {
    this._ldapClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapClientKeyInput() {
    return this._ldapClientKey;
  }

  // ldap_group_attr - computed: false, optional: true, required: false
  private _ldapGroupAttr?: string; 
  public get ldapGroupAttr() {
    return this.getStringAttribute('ldap_group_attr');
  }
  public set ldapGroupAttr(value: string) {
    this._ldapGroupAttr = value;
  }
  public resetLdapGroupAttr() {
    this._ldapGroupAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupAttrInput() {
    return this._ldapGroupAttr;
  }

  // ldap_group_dn - computed: false, optional: true, required: false
  private _ldapGroupDn?: string; 
  public get ldapGroupDn() {
    return this.getStringAttribute('ldap_group_dn');
  }
  public set ldapGroupDn(value: string) {
    this._ldapGroupDn = value;
  }
  public resetLdapGroupDn() {
    this._ldapGroupDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupDnInput() {
    return this._ldapGroupDn;
  }

  // ldap_resolve_groups - computed: true, optional: true, required: false
  private _ldapResolveGroups?: boolean | cdktf.IResolvable; 
  public get ldapResolveGroups() {
    return this.getBooleanAttribute('ldap_resolve_groups');
  }
  public set ldapResolveGroups(value: boolean | cdktf.IResolvable) {
    this._ldapResolveGroups = value;
  }
  public resetLdapResolveGroups() {
    this._ldapResolveGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapResolveGroupsInput() {
    return this._ldapResolveGroups;
  }

  // ldap_server_hosts - computed: false, optional: true, required: false
  private _ldapServerHosts?: string[]; 
  public get ldapServerHosts() {
    return this.getListAttribute('ldap_server_hosts');
  }
  public set ldapServerHosts(value: string[]) {
    this._ldapServerHosts = value;
  }
  public resetLdapServerHosts() {
    this._ldapServerHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerHostsInput() {
    return this._ldapServerHosts;
  }

  // ldap_type - computed: false, optional: true, required: false
  private _ldapType?: string; 
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }
  public set ldapType(value: string) {
    this._ldapType = value;
  }
  public resetLdapType() {
    this._ldapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTypeInput() {
    return this._ldapType;
  }

  // ldap_user_filter - computed: false, optional: true, required: false
  private _ldapUserFilter?: string; 
  public get ldapUserFilter() {
    return this.getStringAttribute('ldap_user_filter');
  }
  public set ldapUserFilter(value: string) {
    this._ldapUserFilter = value;
  }
  public resetLdapUserFilter() {
    this._ldapUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUserFilterInput() {
    return this._ldapUserFilter;
  }

  // member_filter - computed: false, optional: true, required: false
  private _memberFilter?: string; 
  public get memberFilter() {
    return this.getStringAttribute('member_filter');
  }
  public set memberFilter(value: string) {
    this._memberFilter = value;
  }
  public resetMemberFilter() {
    this._memberFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberFilterInput() {
    return this._memberFilter;
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

  // oauth_cc_client_id - computed: false, optional: true, required: false
  private _oauthCcClientId?: string; 
  public get oauthCcClientId() {
    return this.getStringAttribute('oauth_cc_client_id');
  }
  public set oauthCcClientId(value: string) {
    this._oauthCcClientId = value;
  }
  public resetOauthCcClientId() {
    this._oauthCcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCcClientIdInput() {
    return this._oauthCcClientId;
  }

  // oauth_cc_client_secret - computed: false, optional: true, required: false
  private _oauthCcClientSecret?: string; 
  public get oauthCcClientSecret() {
    return this.getStringAttribute('oauth_cc_client_secret');
  }
  public set oauthCcClientSecret(value: string) {
    this._oauthCcClientSecret = value;
  }
  public resetOauthCcClientSecret() {
    this._oauthCcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCcClientSecretInput() {
    return this._oauthCcClientSecret;
  }

  // oauth_discovery_url - computed: false, optional: true, required: false
  private _oauthDiscoveryUrl?: string; 
  public get oauthDiscoveryUrl() {
    return this.getStringAttribute('oauth_discovery_url');
  }
  public set oauthDiscoveryUrl(value: string) {
    this._oauthDiscoveryUrl = value;
  }
  public resetOauthDiscoveryUrl() {
    this._oauthDiscoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthDiscoveryUrlInput() {
    return this._oauthDiscoveryUrl;
  }

  // oauth_ping_identity_region - computed: true, optional: true, required: false
  private _oauthPingIdentityRegion?: string; 
  public get oauthPingIdentityRegion() {
    return this.getStringAttribute('oauth_ping_identity_region');
  }
  public set oauthPingIdentityRegion(value: string) {
    this._oauthPingIdentityRegion = value;
  }
  public resetOauthPingIdentityRegion() {
    this._oauthPingIdentityRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthPingIdentityRegionInput() {
    return this._oauthPingIdentityRegion;
  }

  // oauth_ropc_client_id - computed: false, optional: true, required: false
  private _oauthRopcClientId?: string; 
  public get oauthRopcClientId() {
    return this.getStringAttribute('oauth_ropc_client_id');
  }
  public set oauthRopcClientId(value: string) {
    this._oauthRopcClientId = value;
  }
  public resetOauthRopcClientId() {
    this._oauthRopcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRopcClientIdInput() {
    return this._oauthRopcClientId;
  }

  // oauth_ropc_client_secret - computed: false, optional: true, required: false
  private _oauthRopcClientSecret?: string; 
  public get oauthRopcClientSecret() {
    return this.getStringAttribute('oauth_ropc_client_secret');
  }
  public set oauthRopcClientSecret(value: string) {
    this._oauthRopcClientSecret = value;
  }
  public resetOauthRopcClientSecret() {
    this._oauthRopcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRopcClientSecretInput() {
    return this._oauthRopcClientSecret;
  }

  // oauth_tenant_id - computed: false, optional: true, required: false
  private _oauthTenantId?: string; 
  public get oauthTenantId() {
    return this.getStringAttribute('oauth_tenant_id');
  }
  public set oauthTenantId(value: string) {
    this._oauthTenantId = value;
  }
  public resetOauthTenantId() {
    this._oauthTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTenantIdInput() {
    return this._oauthTenantId;
  }

  // oauth_type - computed: true, optional: true, required: false
  private _oauthType?: string; 
  public get oauthType() {
    return this.getStringAttribute('oauth_type');
  }
  public set oauthType(value: string) {
    this._oauthType = value;
  }
  public resetOauthType() {
    this._oauthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTypeInput() {
    return this._oauthType;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // scim_enabled - computed: true, optional: true, required: false
  private _scimEnabled?: boolean | cdktf.IResolvable; 
  public get scimEnabled() {
    return this.getBooleanAttribute('scim_enabled');
  }
  public set scimEnabled(value: boolean | cdktf.IResolvable) {
    this._scimEnabled = value;
  }
  public resetScimEnabled() {
    this._scimEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimEnabledInput() {
    return this._scimEnabled;
  }

  // scim_secret_token - computed: true, optional: true, required: false
  private _scimSecretToken?: string; 
  public get scimSecretToken() {
    return this.getStringAttribute('scim_secret_token');
  }
  public set scimSecretToken(value: string) {
    this._scimSecretToken = value;
  }
  public resetScimSecretToken() {
    this._scimSecretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimSecretTokenInput() {
    return this._scimSecretToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      idp_type: cdktf.stringToTerraform(this._idpType),
      ldap_base_dn: cdktf.stringToTerraform(this._ldapBaseDn),
      ldap_bind_dn: cdktf.stringToTerraform(this._ldapBindDn),
      ldap_bind_password: cdktf.stringToTerraform(this._ldapBindPassword),
      ldap_cacerts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapCacerts),
      ldap_client_cert: cdktf.stringToTerraform(this._ldapClientCert),
      ldap_client_key: cdktf.stringToTerraform(this._ldapClientKey),
      ldap_group_attr: cdktf.stringToTerraform(this._ldapGroupAttr),
      ldap_group_dn: cdktf.stringToTerraform(this._ldapGroupDn),
      ldap_resolve_groups: cdktf.booleanToTerraform(this._ldapResolveGroups),
      ldap_server_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapServerHosts),
      ldap_type: cdktf.stringToTerraform(this._ldapType),
      ldap_user_filter: cdktf.stringToTerraform(this._ldapUserFilter),
      member_filter: cdktf.stringToTerraform(this._memberFilter),
      name: cdktf.stringToTerraform(this._name),
      oauth_cc_client_id: cdktf.stringToTerraform(this._oauthCcClientId),
      oauth_cc_client_secret: cdktf.stringToTerraform(this._oauthCcClientSecret),
      oauth_discovery_url: cdktf.stringToTerraform(this._oauthDiscoveryUrl),
      oauth_ping_identity_region: cdktf.stringToTerraform(this._oauthPingIdentityRegion),
      oauth_ropc_client_id: cdktf.stringToTerraform(this._oauthRopcClientId),
      oauth_ropc_client_secret: cdktf.stringToTerraform(this._oauthRopcClientSecret),
      oauth_tenant_id: cdktf.stringToTerraform(this._oauthTenantId),
      oauth_type: cdktf.stringToTerraform(this._oauthType),
      org_id: cdktf.stringToTerraform(this._orgId),
      scim_enabled: cdktf.booleanToTerraform(this._scimEnabled),
      scim_secret_token: cdktf.stringToTerraform(this._scimSecretToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_filter: {
        value: cdktf.stringToHclTerraform(this._groupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_type: {
        value: cdktf.stringToHclTerraform(this._idpType),
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
      ldap_bind_dn: {
        value: cdktf.stringToHclTerraform(this._ldapBindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_bind_password: {
        value: cdktf.stringToHclTerraform(this._ldapBindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_cacerts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapCacerts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ldap_client_cert: {
        value: cdktf.stringToHclTerraform(this._ldapClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_client_key: {
        value: cdktf.stringToHclTerraform(this._ldapClientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_attr: {
        value: cdktf.stringToHclTerraform(this._ldapGroupAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_group_dn: {
        value: cdktf.stringToHclTerraform(this._ldapGroupDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_resolve_groups: {
        value: cdktf.booleanToHclTerraform(this._ldapResolveGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_server_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapServerHosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ldap_type: {
        value: cdktf.stringToHclTerraform(this._ldapType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_user_filter: {
        value: cdktf.stringToHclTerraform(this._ldapUserFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_filter: {
        value: cdktf.stringToHclTerraform(this._memberFilter),
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
      oauth_cc_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthCcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_cc_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthCcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_discovery_url: {
        value: cdktf.stringToHclTerraform(this._oauthDiscoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_ping_identity_region: {
        value: cdktf.stringToHclTerraform(this._oauthPingIdentityRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_ropc_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthRopcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_ropc_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthRopcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_tenant_id: {
        value: cdktf.stringToHclTerraform(this._oauthTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_type: {
        value: cdktf.stringToHclTerraform(this._oauthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_enabled: {
        value: cdktf.booleanToHclTerraform(this._scimEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scim_secret_token: {
        value: cdktf.stringToHclTerraform(this._scimSecretToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
