// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#base LdapDirectory#base}
  */
  readonly base: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#connectivity_test_filter LdapDirectory#connectivity_test_filter}
  */
  readonly connectivityTestFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#description LdapDirectory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#disabled_group_filter LdapDirectory#disabled_group_filter}
  */
  readonly disabledGroupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#disabled_user_filter LdapDirectory#disabled_user_filter}
  */
  readonly disabledUserFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#distinguished_name LdapDirectory#distinguished_name}
  */
  readonly distinguishedName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#group_member_of_attribute LdapDirectory#group_member_of_attribute}
  */
  readonly groupMemberOfAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#group_membership_attribute LdapDirectory#group_membership_attribute}
  */
  readonly groupMembershipAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#group_object_filter LdapDirectory#group_object_filter}
  */
  readonly groupObjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#group_profile_id_template LdapDirectory#group_profile_id_template}
  */
  readonly groupProfileIdTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#group_search_filter LdapDirectory#group_search_filter}
  */
  readonly groupSearchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#group_sync_filter LdapDirectory#group_sync_filter}
  */
  readonly groupSyncFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#id LdapDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#parent LdapDirectory#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#password LdapDirectory#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#profile_id_template LdapDirectory#profile_id_template}
  */
  readonly profileIdTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#reject_unauthorized LdapDirectory#reject_unauthorized}
  */
  readonly rejectUnauthorized: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#tags LdapDirectory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#title LdapDirectory#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#tls_enabled LdapDirectory#tls_enabled}
  */
  readonly tlsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#tls_server_certificate LdapDirectory#tls_server_certificate}
  */
  readonly tlsServerCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#url LdapDirectory#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_canonical_name_attribute LdapDirectory#user_canonical_name_attribute}
  */
  readonly userCanonicalNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_display_name_attribute LdapDirectory#user_display_name_attribute}
  */
  readonly userDisplayNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_email_attribute LdapDirectory#user_email_attribute}
  */
  readonly userEmailAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_family_name_attribute LdapDirectory#user_family_name_attribute}
  */
  readonly userFamilyNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_given_name_attribute LdapDirectory#user_given_name_attribute}
  */
  readonly userGivenNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_match_filter LdapDirectory#user_match_filter}
  */
  readonly userMatchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_object_filter LdapDirectory#user_object_filter}
  */
  readonly userObjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_search_attributes LdapDirectory#user_search_attributes}
  */
  readonly userSearchAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#user_search_filter LdapDirectory#user_search_filter}
  */
  readonly userSearchFilter?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory turbot_ldap_directory}
*/
export class LdapDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_ldap_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapDirectory to import
  * @param importFromId The id of the existing LdapDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_ldap_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/ldap_directory turbot_ldap_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: LdapDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'turbot_ldap_directory',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0',
        providerVersionConstraint: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base = config.base;
    this._connectivityTestFilter = config.connectivityTestFilter;
    this._description = config.description;
    this._disabledGroupFilter = config.disabledGroupFilter;
    this._disabledUserFilter = config.disabledUserFilter;
    this._distinguishedName = config.distinguishedName;
    this._groupMemberOfAttribute = config.groupMemberOfAttribute;
    this._groupMembershipAttribute = config.groupMembershipAttribute;
    this._groupObjectFilter = config.groupObjectFilter;
    this._groupProfileIdTemplate = config.groupProfileIdTemplate;
    this._groupSearchFilter = config.groupSearchFilter;
    this._groupSyncFilter = config.groupSyncFilter;
    this._id = config.id;
    this._parent = config.parent;
    this._password = config.password;
    this._profileIdTemplate = config.profileIdTemplate;
    this._rejectUnauthorized = config.rejectUnauthorized;
    this._tags = config.tags;
    this._title = config.title;
    this._tlsEnabled = config.tlsEnabled;
    this._tlsServerCertificate = config.tlsServerCertificate;
    this._url = config.url;
    this._userCanonicalNameAttribute = config.userCanonicalNameAttribute;
    this._userDisplayNameAttribute = config.userDisplayNameAttribute;
    this._userEmailAttribute = config.userEmailAttribute;
    this._userFamilyNameAttribute = config.userFamilyNameAttribute;
    this._userGivenNameAttribute = config.userGivenNameAttribute;
    this._userMatchFilter = config.userMatchFilter;
    this._userObjectFilter = config.userObjectFilter;
    this._userSearchAttributes = config.userSearchAttributes;
    this._userSearchFilter = config.userSearchFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base - computed: false, optional: false, required: true
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // connectivity_test_filter - computed: false, optional: true, required: false
  private _connectivityTestFilter?: string; 
  public get connectivityTestFilter() {
    return this.getStringAttribute('connectivity_test_filter');
  }
  public set connectivityTestFilter(value: string) {
    this._connectivityTestFilter = value;
  }
  public resetConnectivityTestFilter() {
    this._connectivityTestFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTestFilterInput() {
    return this._connectivityTestFilter;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled_group_filter - computed: false, optional: true, required: false
  private _disabledGroupFilter?: string; 
  public get disabledGroupFilter() {
    return this.getStringAttribute('disabled_group_filter');
  }
  public set disabledGroupFilter(value: string) {
    this._disabledGroupFilter = value;
  }
  public resetDisabledGroupFilter() {
    this._disabledGroupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledGroupFilterInput() {
    return this._disabledGroupFilter;
  }

  // disabled_user_filter - computed: false, optional: true, required: false
  private _disabledUserFilter?: string; 
  public get disabledUserFilter() {
    return this.getStringAttribute('disabled_user_filter');
  }
  public set disabledUserFilter(value: string) {
    this._disabledUserFilter = value;
  }
  public resetDisabledUserFilter() {
    this._disabledUserFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledUserFilterInput() {
    return this._disabledUserFilter;
  }

  // distinguished_name - computed: false, optional: false, required: true
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // group_member_of_attribute - computed: false, optional: true, required: false
  private _groupMemberOfAttribute?: string; 
  public get groupMemberOfAttribute() {
    return this.getStringAttribute('group_member_of_attribute');
  }
  public set groupMemberOfAttribute(value: string) {
    this._groupMemberOfAttribute = value;
  }
  public resetGroupMemberOfAttribute() {
    this._groupMemberOfAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberOfAttributeInput() {
    return this._groupMemberOfAttribute;
  }

  // group_membership_attribute - computed: false, optional: true, required: false
  private _groupMembershipAttribute?: string; 
  public get groupMembershipAttribute() {
    return this.getStringAttribute('group_membership_attribute');
  }
  public set groupMembershipAttribute(value: string) {
    this._groupMembershipAttribute = value;
  }
  public resetGroupMembershipAttribute() {
    this._groupMembershipAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipAttributeInput() {
    return this._groupMembershipAttribute;
  }

  // group_object_filter - computed: false, optional: true, required: false
  private _groupObjectFilter?: string; 
  public get groupObjectFilter() {
    return this.getStringAttribute('group_object_filter');
  }
  public set groupObjectFilter(value: string) {
    this._groupObjectFilter = value;
  }
  public resetGroupObjectFilter() {
    this._groupObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectFilterInput() {
    return this._groupObjectFilter;
  }

  // group_profile_id_template - computed: false, optional: true, required: false
  private _groupProfileIdTemplate?: string; 
  public get groupProfileIdTemplate() {
    return this.getStringAttribute('group_profile_id_template');
  }
  public set groupProfileIdTemplate(value: string) {
    this._groupProfileIdTemplate = value;
  }
  public resetGroupProfileIdTemplate() {
    this._groupProfileIdTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupProfileIdTemplateInput() {
    return this._groupProfileIdTemplate;
  }

  // group_search_filter - computed: false, optional: true, required: false
  private _groupSearchFilter?: string; 
  public get groupSearchFilter() {
    return this.getStringAttribute('group_search_filter');
  }
  public set groupSearchFilter(value: string) {
    this._groupSearchFilter = value;
  }
  public resetGroupSearchFilter() {
    this._groupSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchFilterInput() {
    return this._groupSearchFilter;
  }

  // group_sync_filter - computed: false, optional: true, required: false
  private _groupSyncFilter?: string; 
  public get groupSyncFilter() {
    return this.getStringAttribute('group_sync_filter');
  }
  public set groupSyncFilter(value: string) {
    this._groupSyncFilter = value;
  }
  public resetGroupSyncFilter() {
    this._groupSyncFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSyncFilterInput() {
    return this._groupSyncFilter;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parent_akas - computed: true, optional: false, required: false
  public get parentAkas() {
    return this.getListAttribute('parent_akas');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile_id_template - computed: false, optional: false, required: true
  private _profileIdTemplate?: string; 
  public get profileIdTemplate() {
    return this.getStringAttribute('profile_id_template');
  }
  public set profileIdTemplate(value: string) {
    this._profileIdTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdTemplateInput() {
    return this._profileIdTemplate;
  }

  // reject_unauthorized - computed: false, optional: false, required: true
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tls_enabled - computed: false, optional: false, required: true
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // tls_server_certificate - computed: false, optional: true, required: false
  private _tlsServerCertificate?: string; 
  public get tlsServerCertificate() {
    return this.getStringAttribute('tls_server_certificate');
  }
  public set tlsServerCertificate(value: string) {
    this._tlsServerCertificate = value;
  }
  public resetTlsServerCertificate() {
    this._tlsServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerCertificateInput() {
    return this._tlsServerCertificate;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_canonical_name_attribute - computed: false, optional: true, required: false
  private _userCanonicalNameAttribute?: string; 
  public get userCanonicalNameAttribute() {
    return this.getStringAttribute('user_canonical_name_attribute');
  }
  public set userCanonicalNameAttribute(value: string) {
    this._userCanonicalNameAttribute = value;
  }
  public resetUserCanonicalNameAttribute() {
    this._userCanonicalNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCanonicalNameAttributeInput() {
    return this._userCanonicalNameAttribute;
  }

  // user_display_name_attribute - computed: false, optional: true, required: false
  private _userDisplayNameAttribute?: string; 
  public get userDisplayNameAttribute() {
    return this.getStringAttribute('user_display_name_attribute');
  }
  public set userDisplayNameAttribute(value: string) {
    this._userDisplayNameAttribute = value;
  }
  public resetUserDisplayNameAttribute() {
    this._userDisplayNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDisplayNameAttributeInput() {
    return this._userDisplayNameAttribute;
  }

  // user_email_attribute - computed: false, optional: true, required: false
  private _userEmailAttribute?: string; 
  public get userEmailAttribute() {
    return this.getStringAttribute('user_email_attribute');
  }
  public set userEmailAttribute(value: string) {
    this._userEmailAttribute = value;
  }
  public resetUserEmailAttribute() {
    this._userEmailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailAttributeInput() {
    return this._userEmailAttribute;
  }

  // user_family_name_attribute - computed: false, optional: true, required: false
  private _userFamilyNameAttribute?: string; 
  public get userFamilyNameAttribute() {
    return this.getStringAttribute('user_family_name_attribute');
  }
  public set userFamilyNameAttribute(value: string) {
    this._userFamilyNameAttribute = value;
  }
  public resetUserFamilyNameAttribute() {
    this._userFamilyNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFamilyNameAttributeInput() {
    return this._userFamilyNameAttribute;
  }

  // user_given_name_attribute - computed: false, optional: true, required: false
  private _userGivenNameAttribute?: string; 
  public get userGivenNameAttribute() {
    return this.getStringAttribute('user_given_name_attribute');
  }
  public set userGivenNameAttribute(value: string) {
    this._userGivenNameAttribute = value;
  }
  public resetUserGivenNameAttribute() {
    this._userGivenNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGivenNameAttributeInput() {
    return this._userGivenNameAttribute;
  }

  // user_match_filter - computed: false, optional: true, required: false
  private _userMatchFilter?: string; 
  public get userMatchFilter() {
    return this.getStringAttribute('user_match_filter');
  }
  public set userMatchFilter(value: string) {
    this._userMatchFilter = value;
  }
  public resetUserMatchFilter() {
    this._userMatchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchFilterInput() {
    return this._userMatchFilter;
  }

  // user_object_filter - computed: false, optional: true, required: false
  private _userObjectFilter?: string; 
  public get userObjectFilter() {
    return this.getStringAttribute('user_object_filter');
  }
  public set userObjectFilter(value: string) {
    this._userObjectFilter = value;
  }
  public resetUserObjectFilter() {
    this._userObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectFilterInput() {
    return this._userObjectFilter;
  }

  // user_search_attributes - computed: false, optional: true, required: false
  private _userSearchAttributes?: string[]; 
  public get userSearchAttributes() {
    return this.getListAttribute('user_search_attributes');
  }
  public set userSearchAttributes(value: string[]) {
    this._userSearchAttributes = value;
  }
  public resetUserSearchAttributes() {
    this._userSearchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchAttributesInput() {
    return this._userSearchAttributes;
  }

  // user_search_filter - computed: false, optional: true, required: false
  private _userSearchFilter?: string; 
  public get userSearchFilter() {
    return this.getStringAttribute('user_search_filter');
  }
  public set userSearchFilter(value: string) {
    this._userSearchFilter = value;
  }
  public resetUserSearchFilter() {
    this._userSearchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchFilterInput() {
    return this._userSearchFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base: cdktf.stringToTerraform(this._base),
      connectivity_test_filter: cdktf.stringToTerraform(this._connectivityTestFilter),
      description: cdktf.stringToTerraform(this._description),
      disabled_group_filter: cdktf.stringToTerraform(this._disabledGroupFilter),
      disabled_user_filter: cdktf.stringToTerraform(this._disabledUserFilter),
      distinguished_name: cdktf.stringToTerraform(this._distinguishedName),
      group_member_of_attribute: cdktf.stringToTerraform(this._groupMemberOfAttribute),
      group_membership_attribute: cdktf.stringToTerraform(this._groupMembershipAttribute),
      group_object_filter: cdktf.stringToTerraform(this._groupObjectFilter),
      group_profile_id_template: cdktf.stringToTerraform(this._groupProfileIdTemplate),
      group_search_filter: cdktf.stringToTerraform(this._groupSearchFilter),
      group_sync_filter: cdktf.stringToTerraform(this._groupSyncFilter),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      password: cdktf.stringToTerraform(this._password),
      profile_id_template: cdktf.stringToTerraform(this._profileIdTemplate),
      reject_unauthorized: cdktf.booleanToTerraform(this._rejectUnauthorized),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      tls_server_certificate: cdktf.stringToTerraform(this._tlsServerCertificate),
      url: cdktf.stringToTerraform(this._url),
      user_canonical_name_attribute: cdktf.stringToTerraform(this._userCanonicalNameAttribute),
      user_display_name_attribute: cdktf.stringToTerraform(this._userDisplayNameAttribute),
      user_email_attribute: cdktf.stringToTerraform(this._userEmailAttribute),
      user_family_name_attribute: cdktf.stringToTerraform(this._userFamilyNameAttribute),
      user_given_name_attribute: cdktf.stringToTerraform(this._userGivenNameAttribute),
      user_match_filter: cdktf.stringToTerraform(this._userMatchFilter),
      user_object_filter: cdktf.stringToTerraform(this._userObjectFilter),
      user_search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userSearchAttributes),
      user_search_filter: cdktf.stringToTerraform(this._userSearchFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base: {
        value: cdktf.stringToHclTerraform(this._base),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_test_filter: {
        value: cdktf.stringToHclTerraform(this._connectivityTestFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_group_filter: {
        value: cdktf.stringToHclTerraform(this._disabledGroupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_user_filter: {
        value: cdktf.stringToHclTerraform(this._disabledUserFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distinguished_name: {
        value: cdktf.stringToHclTerraform(this._distinguishedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_of_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMemberOfAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_membership_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMembershipAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_filter: {
        value: cdktf.stringToHclTerraform(this._groupObjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_profile_id_template: {
        value: cdktf.stringToHclTerraform(this._groupProfileIdTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_filter: {
        value: cdktf.stringToHclTerraform(this._groupSearchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_sync_filter: {
        value: cdktf.stringToHclTerraform(this._groupSyncFilter),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id_template: {
        value: cdktf.stringToHclTerraform(this._profileIdTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_unauthorized: {
        value: cdktf.booleanToHclTerraform(this._rejectUnauthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_server_certificate: {
        value: cdktf.stringToHclTerraform(this._tlsServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_canonical_name_attribute: {
        value: cdktf.stringToHclTerraform(this._userCanonicalNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_display_name_attribute: {
        value: cdktf.stringToHclTerraform(this._userDisplayNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email_attribute: {
        value: cdktf.stringToHclTerraform(this._userEmailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_family_name_attribute: {
        value: cdktf.stringToHclTerraform(this._userFamilyNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_given_name_attribute: {
        value: cdktf.stringToHclTerraform(this._userGivenNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_match_filter: {
        value: cdktf.stringToHclTerraform(this._userMatchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_object_filter: {
        value: cdktf.stringToHclTerraform(this._userObjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_search_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userSearchAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_search_filter: {
        value: cdktf.stringToHclTerraform(this._userSearchFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
