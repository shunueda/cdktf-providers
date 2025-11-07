// https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapGroupSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * An attribute on the group entry which denoting the group description. Used when importing groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#description_attribute LdapGroupSetting#description_attribute}
  */
  readonly descriptionAttribute: string;
  /**
  * The LDAP filter used to search for group entries. Used for importing groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#filter LdapGroupSetting#filter}
  */
  readonly filter: string;
  /**
  * A search base for group entry DNs, relative to the DN on the LDAP server’s URL (and not relative to the LDAP Setting’s “Search Base”). Used when importing groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#group_base_dn LdapGroupSetting#group_base_dn}
  */
  readonly groupBaseDn?: string;
  /**
  * A multi-value attribute on the group entry containing user DNs or IDs of the group members (e.g., uniqueMember,member).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#group_member_attribute LdapGroupSetting#group_member_attribute}
  */
  readonly groupMemberAttribute: string;
  /**
  * Attribute on the group entry denoting the group name. Used when importing groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#group_name_attribute LdapGroupSetting#group_name_attribute}
  */
  readonly groupNameAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#id LdapGroupSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The LDAP setting key you want to use for group retrieval. The value for this field corresponds to 'enabledLdap' field of the ldap group setting XML block of system configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#ldap_setting_key LdapGroupSetting#ldap_setting_key}
  */
  readonly ldapSettingKey: string;
  /**
  * Ldap group setting name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#name LdapGroupSetting#name}
  */
  readonly name: string;
  /**
  * The JFrog Platform Deployment (JPD) supports three ways of mapping groups to LDAP schemas:
  * Static: Group objects are aware of their members, however, the users are not aware of the groups they belong to. Each group object such as groupOfNames or groupOfUniqueNames holds its respective member attributes, typically member or uniqueMember, which is a user DN.
  * Dynamic: User objects are aware of what groups they belong to, but the group objects are not aware of their members. Each user object contains a custom attribute, such as group, that holds the group DNs or group names of which the user is a member.
  * Hierarchy: The user's DN is indicative of the groups the user belongs to by using group names as part of user DN hierarchy. Each user DN contains a list of ou's or custom attributes that make up the group association. For example, uid=user1,ou=developers,ou=uk,dc=jfrog,dc=org indicates that user1 belongs to two groups: uk and developers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#strategy LdapGroupSetting#strategy}
  */
  readonly strategy: string;
  /**
  * When set, enables deep search through the sub-tree of the LDAP URL + Search Base. True by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#sub_tree LdapGroupSetting#sub_tree}
  */
  readonly subTree?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting artifactory_ldap_group_setting}
*/
export class LdapGroupSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_ldap_group_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapGroupSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapGroupSetting to import
  * @param importFromId The id of the existing LdapGroupSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapGroupSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_ldap_group_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.10.1/docs/resources/ldap_group_setting artifactory_ldap_group_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapGroupSettingConfig
  */
  public constructor(scope: Construct, id: string, config: LdapGroupSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_ldap_group_setting',
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
    this._descriptionAttribute = config.descriptionAttribute;
    this._filter = config.filter;
    this._groupBaseDn = config.groupBaseDn;
    this._groupMemberAttribute = config.groupMemberAttribute;
    this._groupNameAttribute = config.groupNameAttribute;
    this._id = config.id;
    this._ldapSettingKey = config.ldapSettingKey;
    this._name = config.name;
    this._strategy = config.strategy;
    this._subTree = config.subTree;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_attribute - computed: false, optional: false, required: true
  private _descriptionAttribute?: string; 
  public get descriptionAttribute() {
    return this.getStringAttribute('description_attribute');
  }
  public set descriptionAttribute(value: string) {
    this._descriptionAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionAttributeInput() {
    return this._descriptionAttribute;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // group_base_dn - computed: false, optional: true, required: false
  private _groupBaseDn?: string; 
  public get groupBaseDn() {
    return this.getStringAttribute('group_base_dn');
  }
  public set groupBaseDn(value: string) {
    this._groupBaseDn = value;
  }
  public resetGroupBaseDn() {
    this._groupBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBaseDnInput() {
    return this._groupBaseDn;
  }

  // group_member_attribute - computed: false, optional: false, required: true
  private _groupMemberAttribute?: string; 
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }
  public set groupMemberAttribute(value: string) {
    this._groupMemberAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeInput() {
    return this._groupMemberAttribute;
  }

  // group_name_attribute - computed: false, optional: false, required: true
  private _groupNameAttribute?: string; 
  public get groupNameAttribute() {
    return this.getStringAttribute('group_name_attribute');
  }
  public set groupNameAttribute(value: string) {
    this._groupNameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameAttributeInput() {
    return this._groupNameAttribute;
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

  // ldap_setting_key - computed: false, optional: false, required: true
  private _ldapSettingKey?: string; 
  public get ldapSettingKey() {
    return this.getStringAttribute('ldap_setting_key');
  }
  public set ldapSettingKey(value: string) {
    this._ldapSettingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSettingKeyInput() {
    return this._ldapSettingKey;
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

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // sub_tree - computed: false, optional: true, required: false
  private _subTree?: boolean | cdktf.IResolvable; 
  public get subTree() {
    return this.getBooleanAttribute('sub_tree');
  }
  public set subTree(value: boolean | cdktf.IResolvable) {
    this._subTree = value;
  }
  public resetSubTree() {
    this._subTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTreeInput() {
    return this._subTree;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_attribute: cdktf.stringToTerraform(this._descriptionAttribute),
      filter: cdktf.stringToTerraform(this._filter),
      group_base_dn: cdktf.stringToTerraform(this._groupBaseDn),
      group_member_attribute: cdktf.stringToTerraform(this._groupMemberAttribute),
      group_name_attribute: cdktf.stringToTerraform(this._groupNameAttribute),
      id: cdktf.stringToTerraform(this._id),
      ldap_setting_key: cdktf.stringToTerraform(this._ldapSettingKey),
      name: cdktf.stringToTerraform(this._name),
      strategy: cdktf.stringToTerraform(this._strategy),
      sub_tree: cdktf.booleanToTerraform(this._subTree),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_attribute: {
        value: cdktf.stringToHclTerraform(this._descriptionAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_base_dn: {
        value: cdktf.stringToHclTerraform(this._groupBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_attribute: {
        value: cdktf.stringToHclTerraform(this._groupMemberAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name_attribute: {
        value: cdktf.stringToHclTerraform(this._groupNameAttribute),
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
      ldap_setting_key: {
        value: cdktf.stringToHclTerraform(this._ldapSettingKey),
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
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_tree: {
        value: cdktf.booleanToHclTerraform(this._subTree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
