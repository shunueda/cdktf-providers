// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the folder in which the application group is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#application_group_folder_path ApplicationGroup#application_group_folder_path}
  */
  readonly applicationGroupFolderPath?: string;
  /**
  * Delivery groups to associate with the application group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#delivery_groups ApplicationGroup#delivery_groups}
  */
  readonly deliveryGroups: string[];
  /**
  * Description of the application group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#description ApplicationGroup#description}
  */
  readonly description?: string;
  /**
  * Whether the application group is enabled or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#enabled ApplicationGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to applications in this application group to only users included in this list. 
  * 
  * -> **Note** User must be in SID, SAM account name (`DOMAIN\UserOrGroupName`) or UPN (`user@domain.com`) format
  * 
  * ~> **Please Note** If `included_users` attribute is omitted or set to `null`, all users in the specified delivery groups will have access to applications in this application group. If attribute is specified as an empty list i.e. `[]`, then no user will have access to the applications in this application group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#included_users ApplicationGroup#included_users}
  */
  readonly includedUsers?: string[];
  /**
  * Metadata for the Application Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#metadata ApplicationGroup#metadata}
  */
  readonly metadata?: ApplicationGroupMetadata[] | cdktf.IResolvable;
  /**
  * Name of the application group to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#name ApplicationGroup#name}
  */
  readonly name: string;
  /**
  * The tag to restrict the application group to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#restrict_to_tag ApplicationGroup#restrict_to_tag}
  */
  readonly restrictToTag?: string;
  /**
  * The IDs of the scopes for the application group to be a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#scopes ApplicationGroup#scopes}
  */
  readonly scopes?: string[];
  /**
  * A set of identifiers of tags to associate with the application group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#tags ApplicationGroup#tags}
  */
  readonly tags?: string[];
}
export interface ApplicationGroupMetadata {
  /**
  * Metadata name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#name ApplicationGroup#name}
  */
  readonly name: string;
  /**
  * Metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#value ApplicationGroup#value}
  */
  readonly value: string;
}

export function applicationGroupMetadataToTerraform(struct?: ApplicationGroupMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationGroupMetadataToHclTerraform(struct?: ApplicationGroupMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGroupMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGroupMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGroupMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationGroupMetadataList extends cdktf.ComplexList {
  public internalValue? : ApplicationGroupMetadata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGroupMetadataOutputReference {
    return new ApplicationGroupMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group citrix_application_group}
*/
export class ApplicationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_application_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationGroup to import
  * @param importFromId The id of the existing ApplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_application_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/application_group citrix_application_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_application_group',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationGroupFolderPath = config.applicationGroupFolderPath;
    this._deliveryGroups = config.deliveryGroups;
    this._description = config.description;
    this._enabled = config.enabled;
    this._includedUsers = config.includedUsers;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._restrictToTag = config.restrictToTag;
    this._scopes = config.scopes;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_folder_path - computed: false, optional: true, required: false
  private _applicationGroupFolderPath?: string; 
  public get applicationGroupFolderPath() {
    return this.getStringAttribute('application_group_folder_path');
  }
  public set applicationGroupFolderPath(value: string) {
    this._applicationGroupFolderPath = value;
  }
  public resetApplicationGroupFolderPath() {
    this._applicationGroupFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupFolderPathInput() {
    return this._applicationGroupFolderPath;
  }

  // built_in_scopes - computed: true, optional: false, required: false
  public get builtInScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('built_in_scopes'));
  }

  // delivery_groups - computed: false, optional: false, required: true
  private _deliveryGroups?: string[]; 
  public get deliveryGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_groups'));
  }
  public set deliveryGroups(value: string[]) {
    this._deliveryGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryGroupsInput() {
    return this._deliveryGroups;
  }

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

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_users - computed: false, optional: true, required: false
  private _includedUsers?: string[]; 
  public get includedUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('included_users'));
  }
  public set includedUsers(value: string[]) {
    this._includedUsers = value;
  }
  public resetIncludedUsers() {
    this._includedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedUsersInput() {
    return this._includedUsers;
  }

  // inherited_scopes - computed: true, optional: false, required: false
  public get inheritedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('inherited_scopes'));
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationGroupMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationGroupMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // restrict_to_tag - computed: false, optional: true, required: false
  private _restrictToTag?: string; 
  public get restrictToTag() {
    return this.getStringAttribute('restrict_to_tag');
  }
  public set restrictToTag(value: string) {
    this._restrictToTag = value;
  }
  public resetRestrictToTag() {
    this._restrictToTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToTagInput() {
    return this._restrictToTag;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return cdktf.Fn.tolist(this.getListAttribute('tenants'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_group_folder_path: cdktf.stringToTerraform(this._applicationGroupFolderPath),
      delivery_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deliveryGroups),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      included_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedUsers),
      metadata: cdktf.listMapper(applicationGroupMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      restrict_to_tag: cdktf.stringToTerraform(this._restrictToTag),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_group_folder_path: {
        value: cdktf.stringToHclTerraform(this._applicationGroupFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deliveryGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      included_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metadata: {
        value: cdktf.listMapperHcl(applicationGroupMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGroupMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_to_tag: {
        value: cdktf.stringToHclTerraform(this._restrictToTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
