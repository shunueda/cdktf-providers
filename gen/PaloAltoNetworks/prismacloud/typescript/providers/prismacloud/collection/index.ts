// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collection description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#description Collection#description}
  */
  readonly description?: string;
  /**
  * Collection name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#name Collection#name}
  */
  readonly name: string;
  /**
  * asset_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#asset_groups Collection#asset_groups}
  */
  readonly assetGroups: CollectionAssetGroups[] | cdktf.IResolvable;
}
export interface CollectionAssetGroups {
  /**
  * List of account group ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#account_group_ids Collection#account_group_ids}
  */
  readonly accountGroupIds?: string[];
  /**
  * List of account group ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#account_ids Collection#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * List of account group ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#repository_ids Collection#repository_ids}
  */
  readonly repositoryIds?: string[];
}

export function collectionAssetGroupsToTerraform(struct?: CollectionAssetGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountGroupIds),
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    repository_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositoryIds),
  }
}


export function collectionAssetGroupsToHclTerraform(struct?: CollectionAssetGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repository_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositoryIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectionAssetGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectionAssetGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroupIds = this._accountGroupIds;
    }
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._repositoryIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryIds = this._repositoryIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectionAssetGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountGroupIds = undefined;
      this._accountIds = undefined;
      this._repositoryIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountGroupIds = value.accountGroupIds;
      this._accountIds = value.accountIds;
      this._repositoryIds = value.repositoryIds;
    }
  }

  // account_group_ids - computed: false, optional: true, required: false
  private _accountGroupIds?: string[]; 
  public get accountGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_group_ids'));
  }
  public set accountGroupIds(value: string[]) {
    this._accountGroupIds = value;
  }
  public resetAccountGroupIds() {
    this._accountGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupIdsInput() {
    return this._accountGroupIds;
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_ids'));
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // repository_ids - computed: false, optional: true, required: false
  private _repositoryIds?: string[]; 
  public get repositoryIds() {
    return cdktf.Fn.tolist(this.getListAttribute('repository_ids'));
  }
  public set repositoryIds(value: string[]) {
    this._repositoryIds = value;
  }
  public resetRepositoryIds() {
    this._repositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdsInput() {
    return this._repositoryIds;
  }
}

export class CollectionAssetGroupsList extends cdktf.ComplexList {
  public internalValue? : CollectionAssetGroups[] | cdktf.IResolvable

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
  public get(index: number): CollectionAssetGroupsOutputReference {
    return new CollectionAssetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection prismacloud_collection}
*/
export class Collection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Collection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Collection to import
  * @param importFromId The id of the existing Collection that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Collection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/collection prismacloud_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectionConfig
  */
  public constructor(scope: Construct, id: string, config: CollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_collection',
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
    this._description = config.description;
    this._name = config.name;
    this._assetGroups.internalValue = config.assetGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_ts - computed: true, optional: false, required: false
  public get createdTs() {
    return this.getNumberAttribute('created_ts');
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

  // asset_groups - computed: false, optional: false, required: true
  private _assetGroups = new CollectionAssetGroupsList(this, "asset_groups", false);
  public get assetGroups() {
    return this._assetGroups;
  }
  public putAssetGroups(value: CollectionAssetGroups[] | cdktf.IResolvable) {
    this._assetGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetGroupsInput() {
    return this._assetGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      asset_groups: cdktf.listMapper(collectionAssetGroupsToTerraform, true)(this._assetGroups.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_groups: {
        value: cdktf.listMapperHcl(collectionAssetGroupsToHclTerraform, true)(this._assetGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CollectionAssetGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
