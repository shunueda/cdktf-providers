// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/org_idp_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZitadelOrgIdpLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/org_idp_ldap#id DataZitadelOrgIdpLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/org_idp_ldap#org_id DataZitadelOrgIdpLdap#org_id}
  */
  readonly orgId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/org_idp_ldap zitadel_org_idp_ldap}
*/
export class DataZitadelOrgIdpLdap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_org_idp_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZitadelOrgIdpLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZitadelOrgIdpLdap to import
  * @param importFromId The id of the existing DataZitadelOrgIdpLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/org_idp_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZitadelOrgIdpLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_org_idp_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/data-sources/org_idp_ldap zitadel_org_idp_ldap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZitadelOrgIdpLdapConfig
  */
  public constructor(scope: Construct, id: string, config: DataZitadelOrgIdpLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_org_idp_ldap',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_linking - computed: true, optional: false, required: false
  public get autoLinking() {
    return this.getStringAttribute('auto_linking');
  }

  // avatar_url_attribute - computed: true, optional: false, required: false
  public get avatarUrlAttribute() {
    return this.getStringAttribute('avatar_url_attribute');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // bind_password - computed: true, optional: false, required: false
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }

  // display_name_attribute - computed: true, optional: false, required: false
  public get displayNameAttribute() {
    return this.getStringAttribute('display_name_attribute');
  }

  // email_attribute - computed: true, optional: false, required: false
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }

  // email_verified_attribute - computed: true, optional: false, required: false
  public get emailVerifiedAttribute() {
    return this.getStringAttribute('email_verified_attribute');
  }

  // first_name_attribute - computed: true, optional: false, required: false
  public get firstNameAttribute() {
    return this.getStringAttribute('first_name_attribute');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // id_attribute - computed: true, optional: false, required: false
  public get idAttribute() {
    return this.getStringAttribute('id_attribute');
  }

  // is_auto_creation - computed: true, optional: false, required: false
  public get isAutoCreation() {
    return this.getBooleanAttribute('is_auto_creation');
  }

  // is_auto_update - computed: true, optional: false, required: false
  public get isAutoUpdate() {
    return this.getBooleanAttribute('is_auto_update');
  }

  // is_creation_allowed - computed: true, optional: false, required: false
  public get isCreationAllowed() {
    return this.getBooleanAttribute('is_creation_allowed');
  }

  // is_linking_allowed - computed: true, optional: false, required: false
  public get isLinkingAllowed() {
    return this.getBooleanAttribute('is_linking_allowed');
  }

  // last_name_attribute - computed: true, optional: false, required: false
  public get lastNameAttribute() {
    return this.getStringAttribute('last_name_attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nick_name_attribute - computed: true, optional: false, required: false
  public get nickNameAttribute() {
    return this.getStringAttribute('nick_name_attribute');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // phone_attribute - computed: true, optional: false, required: false
  public get phoneAttribute() {
    return this.getStringAttribute('phone_attribute');
  }

  // phone_verified_attribute - computed: true, optional: false, required: false
  public get phoneVerifiedAttribute() {
    return this.getStringAttribute('phone_verified_attribute');
  }

  // preferred_language_attribute - computed: true, optional: false, required: false
  public get preferredLanguageAttribute() {
    return this.getStringAttribute('preferred_language_attribute');
  }

  // preferred_username_attribute - computed: true, optional: false, required: false
  public get preferredUsernameAttribute() {
    return this.getStringAttribute('preferred_username_attribute');
  }

  // profile_attribute - computed: true, optional: false, required: false
  public get profileAttribute() {
    return this.getStringAttribute('profile_attribute');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getListAttribute('servers');
  }

  // start_tls - computed: true, optional: false, required: false
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // user_base - computed: true, optional: false, required: false
  public get userBase() {
    return this.getStringAttribute('user_base');
  }

  // user_filters - computed: true, optional: false, required: false
  public get userFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('user_filters'));
  }

  // user_object_classes - computed: true, optional: false, required: false
  public get userObjectClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('user_object_classes'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
