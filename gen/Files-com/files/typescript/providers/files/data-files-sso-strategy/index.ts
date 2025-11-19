// https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/sso_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesSsoStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/sso_strategy#id DataFilesSsoStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/sso_strategy files_sso_strategy}
*/
export class DataFilesSsoStrategy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_sso_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesSsoStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesSsoStrategy to import
  * @param importFromId The id of the existing DataFilesSsoStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/sso_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesSsoStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_sso_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/data-sources/sso_strategy files_sso_strategy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesSsoStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesSsoStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_sso_strategy',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.388',
        providerVersionConstraint: '0.1.388'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deprovision_behavior - computed: true, optional: false, required: false
  public get deprovisionBehavior() {
    return this.getStringAttribute('deprovision_behavior');
  }

  // deprovision_groups - computed: true, optional: false, required: false
  public get deprovisionGroups() {
    return this.getBooleanAttribute('deprovision_groups');
  }

  // deprovision_users - computed: true, optional: false, required: false
  public get deprovisionUsers() {
    return this.getBooleanAttribute('deprovision_users');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // ldap_base_dn - computed: true, optional: false, required: false
  public get ldapBaseDn() {
    return this.getStringAttribute('ldap_base_dn');
  }

  // ldap_domain - computed: true, optional: false, required: false
  public get ldapDomain() {
    return this.getStringAttribute('ldap_domain');
  }

  // ldap_host - computed: true, optional: false, required: false
  public get ldapHost() {
    return this.getStringAttribute('ldap_host');
  }

  // ldap_host_2 - computed: true, optional: false, required: false
  public get ldapHost2() {
    return this.getStringAttribute('ldap_host_2');
  }

  // ldap_host_3 - computed: true, optional: false, required: false
  public get ldapHost3() {
    return this.getStringAttribute('ldap_host_3');
  }

  // ldap_port - computed: true, optional: false, required: false
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }

  // ldap_secure - computed: true, optional: false, required: false
  public get ldapSecure() {
    return this.getBooleanAttribute('ldap_secure');
  }

  // ldap_username - computed: true, optional: false, required: false
  public get ldapUsername() {
    return this.getStringAttribute('ldap_username');
  }

  // ldap_username_field - computed: true, optional: false, required: false
  public get ldapUsernameField() {
    return this.getStringAttribute('ldap_username_field');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // provider_ - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider_');
  }

  // provider_identifier - computed: true, optional: false, required: false
  public get providerIdentifier() {
    return this.getStringAttribute('provider_identifier');
  }

  // provision_attachments_permission - computed: true, optional: false, required: false
  public get provisionAttachmentsPermission() {
    return this.getBooleanAttribute('provision_attachments_permission');
  }

  // provision_company - computed: true, optional: false, required: false
  public get provisionCompany() {
    return this.getStringAttribute('provision_company');
  }

  // provision_dav_permission - computed: true, optional: false, required: false
  public get provisionDavPermission() {
    return this.getBooleanAttribute('provision_dav_permission');
  }

  // provision_email_signup_groups - computed: true, optional: false, required: false
  public get provisionEmailSignupGroups() {
    return this.getStringAttribute('provision_email_signup_groups');
  }

  // provision_filesystem_layout - computed: true, optional: false, required: false
  public get provisionFilesystemLayout() {
    return this.getStringAttribute('provision_filesystem_layout');
  }

  // provision_ftp_permission - computed: true, optional: false, required: false
  public get provisionFtpPermission() {
    return this.getBooleanAttribute('provision_ftp_permission');
  }

  // provision_group_admin_groups - computed: true, optional: false, required: false
  public get provisionGroupAdminGroups() {
    return this.getStringAttribute('provision_group_admin_groups');
  }

  // provision_group_default - computed: true, optional: false, required: false
  public get provisionGroupDefault() {
    return this.getStringAttribute('provision_group_default');
  }

  // provision_group_exclusion - computed: true, optional: false, required: false
  public get provisionGroupExclusion() {
    return this.getStringAttribute('provision_group_exclusion');
  }

  // provision_group_inclusion - computed: true, optional: false, required: false
  public get provisionGroupInclusion() {
    return this.getStringAttribute('provision_group_inclusion');
  }

  // provision_group_required - computed: true, optional: false, required: false
  public get provisionGroupRequired() {
    return this.getStringAttribute('provision_group_required');
  }

  // provision_groups - computed: true, optional: false, required: false
  public get provisionGroups() {
    return this.getBooleanAttribute('provision_groups');
  }

  // provision_readonly_site_admin_groups - computed: true, optional: false, required: false
  public get provisionReadonlySiteAdminGroups() {
    return this.getStringAttribute('provision_readonly_site_admin_groups');
  }

  // provision_require_2fa - computed: true, optional: false, required: false
  public get provisionRequire2Fa() {
    return this.getStringAttribute('provision_require_2fa');
  }

  // provision_sftp_permission - computed: true, optional: false, required: false
  public get provisionSftpPermission() {
    return this.getBooleanAttribute('provision_sftp_permission');
  }

  // provision_site_admin_groups - computed: true, optional: false, required: false
  public get provisionSiteAdminGroups() {
    return this.getStringAttribute('provision_site_admin_groups');
  }

  // provision_time_zone - computed: true, optional: false, required: false
  public get provisionTimeZone() {
    return this.getStringAttribute('provision_time_zone');
  }

  // provision_users - computed: true, optional: false, required: false
  public get provisionUsers() {
    return this.getBooleanAttribute('provision_users');
  }

  // saml_provider_cert_fingerprint - computed: true, optional: false, required: false
  public get samlProviderCertFingerprint() {
    return this.getStringAttribute('saml_provider_cert_fingerprint');
  }

  // saml_provider_issuer_url - computed: true, optional: false, required: false
  public get samlProviderIssuerUrl() {
    return this.getStringAttribute('saml_provider_issuer_url');
  }

  // saml_provider_metadata_content - computed: true, optional: false, required: false
  public get samlProviderMetadataContent() {
    return this.getStringAttribute('saml_provider_metadata_content');
  }

  // saml_provider_metadata_url - computed: true, optional: false, required: false
  public get samlProviderMetadataUrl() {
    return this.getStringAttribute('saml_provider_metadata_url');
  }

  // saml_provider_slo_target_url - computed: true, optional: false, required: false
  public get samlProviderSloTargetUrl() {
    return this.getStringAttribute('saml_provider_slo_target_url');
  }

  // saml_provider_sso_target_url - computed: true, optional: false, required: false
  public get samlProviderSsoTargetUrl() {
    return this.getStringAttribute('saml_provider_sso_target_url');
  }

  // scim_authentication_method - computed: true, optional: false, required: false
  public get scimAuthenticationMethod() {
    return this.getStringAttribute('scim_authentication_method');
  }

  // scim_oauth_access_token - computed: true, optional: false, required: false
  public get scimOauthAccessToken() {
    return this.getStringAttribute('scim_oauth_access_token');
  }

  // scim_oauth_access_token_expires_at - computed: true, optional: false, required: false
  public get scimOauthAccessTokenExpiresAt() {
    return this.getStringAttribute('scim_oauth_access_token_expires_at');
  }

  // scim_username - computed: true, optional: false, required: false
  public get scimUsername() {
    return this.getStringAttribute('scim_username');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
