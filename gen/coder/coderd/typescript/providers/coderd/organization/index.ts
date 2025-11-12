// https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#description Organization#description}
  */
  readonly description?: string;
  /**
  * Display name of the organization. Defaults to name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#display_name Organization#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#icon Organization#icon}
  */
  readonly icon?: string;
  /**
  * Name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * Claims from the IdP provider that will give users access to this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#org_sync_idp_groups Organization#org_sync_idp_groups}
  */
  readonly orgSyncIdpGroups?: string[];
  /**
  * group_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#group_sync Organization#group_sync}
  */
  readonly groupSync?: OrganizationGroupSync;
  /**
  * role_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#role_sync Organization#role_sync}
  */
  readonly roleSync?: OrganizationRoleSync;
}
export interface OrganizationGroupSync {
  /**
  * Controls whether groups will be created if they are missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#auto_create_missing Organization#auto_create_missing}
  */
  readonly autoCreateMissing?: boolean | cdktf.IResolvable;
  /**
  * The claim field that specifies what groups a user should be in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#field Organization#field}
  */
  readonly field?: string;
  /**
  * A map from OIDC group name to Coder group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#mapping Organization#mapping}
  */
  readonly mapping?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A regular expression that will be used to filter the groups returned by the OIDC provider. Any group not matched will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#regex_filter Organization#regex_filter}
  */
  readonly regexFilter?: string;
}

export function organizationGroupSyncToTerraform(struct?: OrganizationGroupSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_missing: cdktf.booleanToTerraform(struct!.autoCreateMissing),
    field: cdktf.stringToTerraform(struct!.field),
    mapping: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.mapping),
    regex_filter: cdktf.stringToTerraform(struct!.regexFilter),
  }
}


export function organizationGroupSyncToHclTerraform(struct?: OrganizationGroupSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_missing: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.mapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    regex_filter: {
      value: cdktf.stringToHclTerraform(struct!.regexFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationGroupSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationGroupSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateMissing = this._autoCreateMissing;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._regexFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexFilter = this._regexFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationGroupSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateMissing = undefined;
      this._field = undefined;
      this._mapping = undefined;
      this._regexFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateMissing = value.autoCreateMissing;
      this._field = value.field;
      this._mapping = value.mapping;
      this._regexFilter = value.regexFilter;
    }
  }

  // auto_create_missing - computed: false, optional: true, required: false
  private _autoCreateMissing?: boolean | cdktf.IResolvable; 
  public get autoCreateMissing() {
    return this.getBooleanAttribute('auto_create_missing');
  }
  public set autoCreateMissing(value: boolean | cdktf.IResolvable) {
    this._autoCreateMissing = value;
  }
  public resetAutoCreateMissing() {
    this._autoCreateMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateMissingInput() {
    return this._autoCreateMissing;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get mapping() {
    return this.interpolationForAttribute('mapping');
  }
  public set mapping(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }

  // regex_filter - computed: false, optional: true, required: false
  private _regexFilter?: string; 
  public get regexFilter() {
    return this.getStringAttribute('regex_filter');
  }
  public set regexFilter(value: string) {
    this._regexFilter = value;
  }
  public resetRegexFilter() {
    this._regexFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFilterInput() {
    return this._regexFilter;
  }
}
export interface OrganizationRoleSync {
  /**
  * The claim field that specifies what organization roles a user should be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#field Organization#field}
  */
  readonly field?: string;
  /**
  * A map from OIDC group name to Coder organization role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#mapping Organization#mapping}
  */
  readonly mapping?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function organizationRoleSyncToTerraform(struct?: OrganizationRoleSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    mapping: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.mapping),
  }
}


export function organizationRoleSyncToHclTerraform(struct?: OrganizationRoleSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.mapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationRoleSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationRoleSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationRoleSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._mapping = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._mapping = value.mapping;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get mapping() {
    return this.interpolationForAttribute('mapping');
  }
  public set mapping(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization coderd_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coderd_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coderd_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coderd/0.0.12/docs/resources/organization coderd_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'coderd_organization',
      terraformGeneratorMetadata: {
        providerName: 'coderd',
        providerVersion: '0.0.12',
        providerVersionConstraint: '0.0.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._icon = config.icon;
    this._name = config.name;
    this._orgSyncIdpGroups = config.orgSyncIdpGroups;
    this._groupSync.internalValue = config.groupSync;
    this._roleSync.internalValue = config.roleSync;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // org_sync_idp_groups - computed: false, optional: true, required: false
  private _orgSyncIdpGroups?: string[]; 
  public get orgSyncIdpGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('org_sync_idp_groups'));
  }
  public set orgSyncIdpGroups(value: string[]) {
    this._orgSyncIdpGroups = value;
  }
  public resetOrgSyncIdpGroups() {
    this._orgSyncIdpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgSyncIdpGroupsInput() {
    return this._orgSyncIdpGroups;
  }

  // group_sync - computed: false, optional: true, required: false
  private _groupSync = new OrganizationGroupSyncOutputReference(this, "group_sync");
  public get groupSync() {
    return this._groupSync;
  }
  public putGroupSync(value: OrganizationGroupSync) {
    this._groupSync.internalValue = value;
  }
  public resetGroupSync() {
    this._groupSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSyncInput() {
    return this._groupSync.internalValue;
  }

  // role_sync - computed: false, optional: true, required: false
  private _roleSync = new OrganizationRoleSyncOutputReference(this, "role_sync");
  public get roleSync() {
    return this._roleSync;
  }
  public putRoleSync(value: OrganizationRoleSync) {
    this._roleSync.internalValue = value;
  }
  public resetRoleSync() {
    this._roleSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSyncInput() {
    return this._roleSync.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      icon: cdktf.stringToTerraform(this._icon),
      name: cdktf.stringToTerraform(this._name),
      org_sync_idp_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orgSyncIdpGroups),
      group_sync: organizationGroupSyncToTerraform(this._groupSync.internalValue),
      role_sync: organizationRoleSyncToTerraform(this._roleSync.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
      org_sync_idp_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orgSyncIdpGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_sync: {
        value: organizationGroupSyncToHclTerraform(this._groupSync.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationGroupSync",
      },
      role_sync: {
        value: organizationRoleSyncToHclTerraform(this._roleSync.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationRoleSync",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
