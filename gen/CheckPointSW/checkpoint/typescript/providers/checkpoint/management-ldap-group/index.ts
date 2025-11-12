// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementLdapGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * LDAP account unit of the group.  Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#account_unit ManagementLdapGroup#account_unit}
  */
  readonly accountUnit: string;
  /**
  * Branch of the selected LDAP Account Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#account_unit_branch ManagementLdapGroup#account_unit_branch}
  */
  readonly accountUnitBranch?: string;
  /**
  * Indicate whether to apply LDAP filter for dynamic group. <font color="red">Relevant only when</font> 'scope' is not set to 'only_group_in_branch'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#apply_filter_for_dynamic_group ManagementLdapGroup#apply_filter_for_dynamic_group}
  */
  readonly applyFilterForDynamicGroup?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#color ManagementLdapGroup#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#comments ManagementLdapGroup#comments}
  */
  readonly comments?: string;
  /**
  * Group name in the selected branch. <font color="red">Required only when</font> 'scope' is set to 'only_group_in_branch'. Must be in DN syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#group_prefix ManagementLdapGroup#group_prefix}
  */
  readonly groupPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#id ManagementLdapGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#ignore_errors ManagementLdapGroup#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#ignore_warnings ManagementLdapGroup#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * LDAP filter for the dynamic group. <font color="red">Relevant only when</font> 'apply-filter-for-dynamic-group' is set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#ldap_filter ManagementLdapGroup#ldap_filter}
  */
  readonly ldapFilter?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#name ManagementLdapGroup#name}
  */
  readonly name: string;
  /**
  * Group's scope. There are three possible ways of defining a group, based on the users defined on the Account Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#scope ManagementLdapGroup#scope}
  */
  readonly scope?: string;
  /**
  * Sub tree prefix of the selected branch. <font color="red">Relevant only when</font> 'scope' is set to 'only_sub_prefix'. Must be in DN syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#sub_tree_prefix ManagementLdapGroup#sub_tree_prefix}
  */
  readonly subTreePrefix?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#tags ManagementLdapGroup#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group checkpoint_management_ldap_group}
*/
export class ManagementLdapGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_ldap_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementLdapGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementLdapGroup to import
  * @param importFromId The id of the existing ManagementLdapGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementLdapGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_ldap_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_ldap_group checkpoint_management_ldap_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementLdapGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementLdapGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_ldap_group',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUnit = config.accountUnit;
    this._accountUnitBranch = config.accountUnitBranch;
    this._applyFilterForDynamicGroup = config.applyFilterForDynamicGroup;
    this._color = config.color;
    this._comments = config.comments;
    this._groupPrefix = config.groupPrefix;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ldapFilter = config.ldapFilter;
    this._name = config.name;
    this._scope = config.scope;
    this._subTreePrefix = config.subTreePrefix;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_unit - computed: false, optional: false, required: true
  private _accountUnit?: string; 
  public get accountUnit() {
    return this.getStringAttribute('account_unit');
  }
  public set accountUnit(value: string) {
    this._accountUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUnitInput() {
    return this._accountUnit;
  }

  // account_unit_branch - computed: false, optional: true, required: false
  private _accountUnitBranch?: string; 
  public get accountUnitBranch() {
    return this.getStringAttribute('account_unit_branch');
  }
  public set accountUnitBranch(value: string) {
    this._accountUnitBranch = value;
  }
  public resetAccountUnitBranch() {
    this._accountUnitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUnitBranchInput() {
    return this._accountUnitBranch;
  }

  // apply_filter_for_dynamic_group - computed: false, optional: true, required: false
  private _applyFilterForDynamicGroup?: boolean | cdktf.IResolvable; 
  public get applyFilterForDynamicGroup() {
    return this.getBooleanAttribute('apply_filter_for_dynamic_group');
  }
  public set applyFilterForDynamicGroup(value: boolean | cdktf.IResolvable) {
    this._applyFilterForDynamicGroup = value;
  }
  public resetApplyFilterForDynamicGroup() {
    this._applyFilterForDynamicGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyFilterForDynamicGroupInput() {
    return this._applyFilterForDynamicGroup;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // group_prefix - computed: false, optional: true, required: false
  private _groupPrefix?: string; 
  public get groupPrefix() {
    return this.getStringAttribute('group_prefix');
  }
  public set groupPrefix(value: string) {
    this._groupPrefix = value;
  }
  public resetGroupPrefix() {
    this._groupPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPrefixInput() {
    return this._groupPrefix;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sub_tree_prefix - computed: false, optional: true, required: false
  private _subTreePrefix?: string; 
  public get subTreePrefix() {
    return this.getStringAttribute('sub_tree_prefix');
  }
  public set subTreePrefix(value: string) {
    this._subTreePrefix = value;
  }
  public resetSubTreePrefix() {
    this._subTreePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTreePrefixInput() {
    return this._subTreePrefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_unit: cdktf.stringToTerraform(this._accountUnit),
      account_unit_branch: cdktf.stringToTerraform(this._accountUnitBranch),
      apply_filter_for_dynamic_group: cdktf.booleanToTerraform(this._applyFilterForDynamicGroup),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      group_prefix: cdktf.stringToTerraform(this._groupPrefix),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ldap_filter: cdktf.stringToTerraform(this._ldapFilter),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      sub_tree_prefix: cdktf.stringToTerraform(this._subTreePrefix),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_unit: {
        value: cdktf.stringToHclTerraform(this._accountUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_unit_branch: {
        value: cdktf.stringToHclTerraform(this._accountUnitBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_filter_for_dynamic_group: {
        value: cdktf.booleanToHclTerraform(this._applyFilterForDynamicGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_prefix: {
        value: cdktf.stringToHclTerraform(this._groupPrefix),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_filter: {
        value: cdktf.stringToHclTerraform(this._ldapFilter),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_tree_prefix: {
        value: cdktf.stringToHclTerraform(this._subTreePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
