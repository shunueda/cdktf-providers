// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept account groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#accept_account_groups PermissionGroup#accept_account_groups}
  */
  readonly acceptAccountGroups?: boolean | cdktf.IResolvable;
  /**
  * Accept code repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#accept_code_repositories PermissionGroup#accept_code_repositories}
  */
  readonly acceptCodeRepositories?: boolean | cdktf.IResolvable;
  /**
  * Accept resource lists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#accept_resource_lists PermissionGroup#accept_resource_lists}
  */
  readonly acceptResourceLists?: boolean | cdktf.IResolvable;
  /**
  * Custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#custom PermissionGroup#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#description PermissionGroup#description}
  */
  readonly description?: string;
  /**
  * Name of the permission group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#name PermissionGroup#name}
  */
  readonly name: string;
  /**
  * Permission group type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#permission_group_type PermissionGroup#permission_group_type}
  */
  readonly permissionGroupType?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#features PermissionGroup#features}
  */
  readonly features: PermissionGroupFeatures[] | cdktf.IResolvable;
}
export interface PermissionGroupFeaturesOperations {
  /**
  * Create operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#create PermissionGroup#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Delete operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#delete PermissionGroup#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Read operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#read PermissionGroup#read}
  */
  readonly read?: boolean | cdktf.IResolvable;
  /**
  * Update operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#update PermissionGroup#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
}

export function permissionGroupFeaturesOperationsToTerraform(struct?: PermissionGroupFeaturesOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    read: cdktf.booleanToTerraform(struct!.read),
    update: cdktf.booleanToTerraform(struct!.update),
  }
}


export function permissionGroupFeaturesOperationsToHclTerraform(struct?: PermissionGroupFeaturesOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionGroupFeaturesOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionGroupFeaturesOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionGroupFeaturesOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

export class PermissionGroupFeaturesOperationsList extends cdktf.ComplexList {
  public internalValue? : PermissionGroupFeaturesOperations[] | cdktf.IResolvable

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
  public get(index: number): PermissionGroupFeaturesOperationsOutputReference {
    return new PermissionGroupFeaturesOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PermissionGroupFeatures {
  /**
  * Feature name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#feature_name PermissionGroup#feature_name}
  */
  readonly featureName: string;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#operations PermissionGroup#operations}
  */
  readonly operations: PermissionGroupFeaturesOperations[] | cdktf.IResolvable;
}

export function permissionGroupFeaturesToTerraform(struct?: PermissionGroupFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    operations: cdktf.listMapper(permissionGroupFeaturesOperationsToTerraform, true)(struct!.operations),
  }
}


export function permissionGroupFeaturesToHclTerraform(struct?: PermissionGroupFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(permissionGroupFeaturesOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "PermissionGroupFeaturesOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionGroupFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PermissionGroupFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionGroupFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureName = undefined;
      this._operations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureName = value.featureName;
      this._operations.internalValue = value.operations;
    }
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new PermissionGroupFeaturesOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: PermissionGroupFeaturesOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}

export class PermissionGroupFeaturesList extends cdktf.ComplexList {
  public internalValue? : PermissionGroupFeatures[] | cdktf.IResolvable

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
  public get(index: number): PermissionGroupFeaturesOutputReference {
    return new PermissionGroupFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group prismacloud_permission_group}
*/
export class PermissionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_permission_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PermissionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PermissionGroup to import
  * @param importFromId The id of the existing PermissionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PermissionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_permission_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/permission_group prismacloud_permission_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_permission_group',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptAccountGroups = config.acceptAccountGroups;
    this._acceptCodeRepositories = config.acceptCodeRepositories;
    this._acceptResourceLists = config.acceptResourceLists;
    this._custom = config.custom;
    this._description = config.description;
    this._name = config.name;
    this._permissionGroupType = config.permissionGroupType;
    this._features.internalValue = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_account_groups - computed: true, optional: true, required: false
  private _acceptAccountGroups?: boolean | cdktf.IResolvable; 
  public get acceptAccountGroups() {
    return this.getBooleanAttribute('accept_account_groups');
  }
  public set acceptAccountGroups(value: boolean | cdktf.IResolvable) {
    this._acceptAccountGroups = value;
  }
  public resetAcceptAccountGroups() {
    this._acceptAccountGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAccountGroupsInput() {
    return this._acceptAccountGroups;
  }

  // accept_code_repositories - computed: true, optional: true, required: false
  private _acceptCodeRepositories?: boolean | cdktf.IResolvable; 
  public get acceptCodeRepositories() {
    return this.getBooleanAttribute('accept_code_repositories');
  }
  public set acceptCodeRepositories(value: boolean | cdktf.IResolvable) {
    this._acceptCodeRepositories = value;
  }
  public resetAcceptCodeRepositories() {
    this._acceptCodeRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCodeRepositoriesInput() {
    return this._acceptCodeRepositories;
  }

  // accept_resource_lists - computed: true, optional: true, required: false
  private _acceptResourceLists?: boolean | cdktf.IResolvable; 
  public get acceptResourceLists() {
    return this.getBooleanAttribute('accept_resource_lists');
  }
  public set acceptResourceLists(value: boolean | cdktf.IResolvable) {
    this._acceptResourceLists = value;
  }
  public resetAcceptResourceLists() {
    this._acceptResourceLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptResourceListsInput() {
    return this._acceptResourceLists;
  }

  // associated_roles - computed: true, optional: false, required: false
  private _associatedRoles = new cdktf.StringMap(this, "associated_roles");
  public get associatedRoles() {
    return this._associatedRoles;
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_ts - computed: true, optional: false, required: false
  public get lastModifiedTs() {
    return this.getNumberAttribute('last_modified_ts');
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

  // permission_group_type - computed: true, optional: true, required: false
  private _permissionGroupType?: string; 
  public get permissionGroupType() {
    return this.getStringAttribute('permission_group_type');
  }
  public set permissionGroupType(value: string) {
    this._permissionGroupType = value;
  }
  public resetPermissionGroupType() {
    this._permissionGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupTypeInput() {
    return this._permissionGroupType;
  }

  // features - computed: false, optional: false, required: true
  private _features = new PermissionGroupFeaturesList(this, "features", true);
  public get features() {
    return this._features;
  }
  public putFeatures(value: PermissionGroupFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_account_groups: cdktf.booleanToTerraform(this._acceptAccountGroups),
      accept_code_repositories: cdktf.booleanToTerraform(this._acceptCodeRepositories),
      accept_resource_lists: cdktf.booleanToTerraform(this._acceptResourceLists),
      custom: cdktf.booleanToTerraform(this._custom),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      permission_group_type: cdktf.stringToTerraform(this._permissionGroupType),
      features: cdktf.listMapper(permissionGroupFeaturesToTerraform, true)(this._features.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_account_groups: {
        value: cdktf.booleanToHclTerraform(this._acceptAccountGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accept_code_repositories: {
        value: cdktf.booleanToHclTerraform(this._acceptCodeRepositories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accept_resource_lists: {
        value: cdktf.booleanToHclTerraform(this._acceptResourceLists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom: {
        value: cdktf.booleanToHclTerraform(this._custom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      permission_group_type: {
        value: cdktf.stringToHclTerraform(this._permissionGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktf.listMapperHcl(permissionGroupFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PermissionGroupFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
