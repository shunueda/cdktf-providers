// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataChainguardImageRepoConfig extends cdktf.TerraformMetaArguments {
  /**
  * The exact UIDP of the repository to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#id DataChainguardImageRepo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the repository to lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#name DataChainguardImageRepo#name}
  */
  readonly name?: string;
  /**
  * The UIDP of the group in which to lookup the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#parent_id DataChainguardImageRepo#parent_id}
  */
  readonly parentId?: string;
}
export interface DataChainguardImageRepoItemsSyncConfig {
}

export function dataChainguardImageRepoItemsSyncConfigToTerraform(struct?: DataChainguardImageRepoItemsSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataChainguardImageRepoItemsSyncConfigToHclTerraform(struct?: DataChainguardImageRepoItemsSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataChainguardImageRepoItemsSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataChainguardImageRepoItemsSyncConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataChainguardImageRepoItemsSyncConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // apko_overlay - computed: true, optional: false, required: false
  public get apkoOverlay() {
    return this.getStringAttribute('apko_overlay');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // unique_tags - computed: true, optional: false, required: false
  public get uniqueTags() {
    return this.getBooleanAttribute('unique_tags');
  }
}
export interface DataChainguardImageRepoItems {
  /**
  * List of active tags for this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#active_tags DataChainguardImageRepo#active_tags}
  */
  readonly activeTags?: string[];
  /**
  * Known aliases for a given image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#aliases DataChainguardImageRepo#aliases}
  */
  readonly aliases?: string[];
  /**
  * List of bundles associated with this repo (a-z freeform keywords for sales purposes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#bundles DataChainguardImageRepo#bundles}
  */
  readonly bundles?: string[];
  /**
  * The README for this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#readme DataChainguardImageRepo#readme}
  */
  readonly readme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#sync_config DataChainguardImageRepo#sync_config}
  */
  readonly syncConfig?: DataChainguardImageRepoItemsSyncConfig;
  /**
  * Image tier associated with this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#tier DataChainguardImageRepo#tier}
  */
  readonly tier?: string;
}

export function dataChainguardImageRepoItemsToTerraform(struct?: DataChainguardImageRepoItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeTags),
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    bundles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bundles),
    readme: cdktf.stringToTerraform(struct!.readme),
    sync_config: dataChainguardImageRepoItemsSyncConfigToTerraform(struct!.syncConfig),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataChainguardImageRepoItemsToHclTerraform(struct?: DataChainguardImageRepoItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bundles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bundles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readme: {
      value: cdktf.stringToHclTerraform(struct!.readme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_config: {
      value: dataChainguardImageRepoItemsSyncConfigToHclTerraform(struct!.syncConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataChainguardImageRepoItemsSyncConfig",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataChainguardImageRepoItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataChainguardImageRepoItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTags = this._activeTags;
    }
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._bundles !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundles = this._bundles;
    }
    if (this._readme !== undefined) {
      hasAnyValues = true;
      internalValueResult.readme = this._readme;
    }
    if (this._syncConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncConfig = this._syncConfig?.internalValue;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataChainguardImageRepoItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTags = undefined;
      this._aliases = undefined;
      this._bundles = undefined;
      this._readme = undefined;
      this._syncConfig.internalValue = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTags = value.activeTags;
      this._aliases = value.aliases;
      this._bundles = value.bundles;
      this._readme = value.readme;
      this._syncConfig.internalValue = value.syncConfig;
      this._tier = value.tier;
    }
  }

  // active_tags - computed: true, optional: true, required: false
  private _activeTags?: string[]; 
  public get activeTags() {
    return this.getListAttribute('active_tags');
  }
  public set activeTags(value: string[]) {
    this._activeTags = value;
  }
  public resetActiveTags() {
    this._activeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTagsInput() {
    return this._activeTags;
  }

  // aliases - computed: true, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // bundles - computed: true, optional: true, required: false
  private _bundles?: string[]; 
  public get bundles() {
    return this.getListAttribute('bundles');
  }
  public set bundles(value: string[]) {
    this._bundles = value;
  }
  public resetBundles() {
    this._bundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesInput() {
    return this._bundles;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // readme - computed: true, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // sync_config - computed: true, optional: true, required: false
  private _syncConfig = new DataChainguardImageRepoItemsSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: DataChainguardImageRepoItemsSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}

export class DataChainguardImageRepoItemsList extends cdktf.ComplexList {
  public internalValue? : DataChainguardImageRepoItems[] | cdktf.IResolvable

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
  public get(index: number): DataChainguardImageRepoItemsOutputReference {
    return new DataChainguardImageRepoItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo chainguard_image_repo}
*/
export class DataChainguardImageRepo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_image_repo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataChainguardImageRepo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataChainguardImageRepo to import
  * @param importFromId The id of the existing DataChainguardImageRepo that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataChainguardImageRepo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_image_repo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.38/docs/data-sources/image_repo chainguard_image_repo} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataChainguardImageRepoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataChainguardImageRepoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chainguard_image_repo',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.38',
        providerVersionConstraint: '0.1.38'
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
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // items - computed: true, optional: false, required: false
  private _items = new DataChainguardImageRepoItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
