// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithSubManifestPkgInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `ID` of the condition that is evaluated to decide if this pkg info is included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#condition_id MonolithSubManifestPkgInfo#condition_id}
  */
  readonly conditionId?: number;
  /**
  * The default shard value. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#default_shard MonolithSubManifestPkgInfo#default_shard}
  */
  readonly defaultShard?: number;
  /**
  * Machines tagged with one of these tags will not receive the pkg info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#excluded_tag_ids MonolithSubManifestPkgInfo#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * If `true`, this pkg info will be displayed in the featured items section in Managed Software Center. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#featured_item MonolithSubManifestPkgInfo#featured_item}
  */
  readonly featuredItem?: boolean | cdktf.IResolvable;
  /**
  * Sub manifest key under which this pkg info will be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#key MonolithSubManifestPkgInfo#key}
  */
  readonly key: string;
  /**
  * The name of the pkg info to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#pkg_info_name MonolithSubManifestPkgInfo#pkg_info_name}
  */
  readonly pkgInfoName: string;
  /**
  * The modulo used to calculate the shards. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#shard_modulo MonolithSubManifestPkgInfo#shard_modulo}
  */
  readonly shardModulo?: number;
  /**
  * The `ID` of the sub manifest this pkg info is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#sub_manifest_id MonolithSubManifestPkgInfo#sub_manifest_id}
  */
  readonly subManifestId: number;
  /**
  * A set of tag shard values different from the default shard, to determine if the tagged machines will receive the pkg info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#tag_shards MonolithSubManifestPkgInfo#tag_shards}
  */
  readonly tagShards?: MonolithSubManifestPkgInfoTagShards[] | cdktf.IResolvable;
}
export interface MonolithSubManifestPkgInfoTagShards {
  /**
  * The shard for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#shard MonolithSubManifestPkgInfo#shard}
  */
  readonly shard: number;
  /**
  * The `ID` of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#tag_id MonolithSubManifestPkgInfo#tag_id}
  */
  readonly tagId: number;
}

export function monolithSubManifestPkgInfoTagShardsToTerraform(struct?: MonolithSubManifestPkgInfoTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard: cdktf.numberToTerraform(struct!.shard),
    tag_id: cdktf.numberToTerraform(struct!.tagId),
  }
}


export function monolithSubManifestPkgInfoTagShardsToHclTerraform(struct?: MonolithSubManifestPkgInfoTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard: {
      value: cdktf.numberToHclTerraform(struct!.shard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_id: {
      value: cdktf.numberToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonolithSubManifestPkgInfoTagShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonolithSubManifestPkgInfoTagShards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard;
    }
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonolithSubManifestPkgInfoTagShards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shard = undefined;
      this._tagId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shard = value.shard;
      this._tagId = value.tagId;
    }
  }

  // shard - computed: true, optional: false, required: true
  private _shard?: number; 
  public get shard() {
    return this.getNumberAttribute('shard');
  }
  public set shard(value: number) {
    this._shard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard;
  }

  // tag_id - computed: true, optional: false, required: true
  private _tagId?: number; 
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }
  public set tagId(value: number) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }
}

export class MonolithSubManifestPkgInfoTagShardsList extends cdktf.ComplexList {
  public internalValue? : MonolithSubManifestPkgInfoTagShards[] | cdktf.IResolvable

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
  public get(index: number): MonolithSubManifestPkgInfoTagShardsOutputReference {
    return new MonolithSubManifestPkgInfoTagShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info zentral_monolith_sub_manifest_pkg_info}
*/
export class MonolithSubManifestPkgInfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_sub_manifest_pkg_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithSubManifestPkgInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithSubManifestPkgInfo to import
  * @param importFromId The id of the existing MonolithSubManifestPkgInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithSubManifestPkgInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_sub_manifest_pkg_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_sub_manifest_pkg_info zentral_monolith_sub_manifest_pkg_info} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithSubManifestPkgInfoConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithSubManifestPkgInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_sub_manifest_pkg_info',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionId = config.conditionId;
    this._defaultShard = config.defaultShard;
    this._excludedTagIds = config.excludedTagIds;
    this._featuredItem = config.featuredItem;
    this._key = config.key;
    this._pkgInfoName = config.pkgInfoName;
    this._shardModulo = config.shardModulo;
    this._subManifestId = config.subManifestId;
    this._tagShards.internalValue = config.tagShards;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_id - computed: false, optional: true, required: false
  private _conditionId?: number; 
  public get conditionId() {
    return this.getNumberAttribute('condition_id');
  }
  public set conditionId(value: number) {
    this._conditionId = value;
  }
  public resetConditionId() {
    this._conditionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionIdInput() {
    return this._conditionId;
  }

  // default_shard - computed: true, optional: true, required: false
  private _defaultShard?: number; 
  public get defaultShard() {
    return this.getNumberAttribute('default_shard');
  }
  public set defaultShard(value: number) {
    this._defaultShard = value;
  }
  public resetDefaultShard() {
    this._defaultShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultShardInput() {
    return this._defaultShard;
  }

  // excluded_tag_ids - computed: true, optional: true, required: false
  private _excludedTagIds?: number[]; 
  public get excludedTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('excluded_tag_ids')));
  }
  public set excludedTagIds(value: number[]) {
    this._excludedTagIds = value;
  }
  public resetExcludedTagIds() {
    this._excludedTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTagIdsInput() {
    return this._excludedTagIds;
  }

  // featured_item - computed: true, optional: true, required: false
  private _featuredItem?: boolean | cdktf.IResolvable; 
  public get featuredItem() {
    return this.getBooleanAttribute('featured_item');
  }
  public set featuredItem(value: boolean | cdktf.IResolvable) {
    this._featuredItem = value;
  }
  public resetFeaturedItem() {
    this._featuredItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuredItemInput() {
    return this._featuredItem;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // pkg_info_name - computed: false, optional: false, required: true
  private _pkgInfoName?: string; 
  public get pkgInfoName() {
    return this.getStringAttribute('pkg_info_name');
  }
  public set pkgInfoName(value: string) {
    this._pkgInfoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInfoNameInput() {
    return this._pkgInfoName;
  }

  // shard_modulo - computed: true, optional: true, required: false
  private _shardModulo?: number; 
  public get shardModulo() {
    return this.getNumberAttribute('shard_modulo');
  }
  public set shardModulo(value: number) {
    this._shardModulo = value;
  }
  public resetShardModulo() {
    this._shardModulo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardModuloInput() {
    return this._shardModulo;
  }

  // sub_manifest_id - computed: false, optional: false, required: true
  private _subManifestId?: number; 
  public get subManifestId() {
    return this.getNumberAttribute('sub_manifest_id');
  }
  public set subManifestId(value: number) {
    this._subManifestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subManifestIdInput() {
    return this._subManifestId;
  }

  // tag_shards - computed: true, optional: true, required: false
  private _tagShards = new MonolithSubManifestPkgInfoTagShardsList(this, "tag_shards", true);
  public get tagShards() {
    return this._tagShards;
  }
  public putTagShards(value: MonolithSubManifestPkgInfoTagShards[] | cdktf.IResolvable) {
    this._tagShards.internalValue = value;
  }
  public resetTagShards() {
    this._tagShards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagShardsInput() {
    return this._tagShards.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_id: cdktf.numberToTerraform(this._conditionId),
      default_shard: cdktf.numberToTerraform(this._defaultShard),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      featured_item: cdktf.booleanToTerraform(this._featuredItem),
      key: cdktf.stringToTerraform(this._key),
      pkg_info_name: cdktf.stringToTerraform(this._pkgInfoName),
      shard_modulo: cdktf.numberToTerraform(this._shardModulo),
      sub_manifest_id: cdktf.numberToTerraform(this._subManifestId),
      tag_shards: cdktf.listMapper(monolithSubManifestPkgInfoTagShardsToTerraform, false)(this._tagShards.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_id: {
        value: cdktf.numberToHclTerraform(this._conditionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_shard: {
        value: cdktf.numberToHclTerraform(this._defaultShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      excluded_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      featured_item: {
        value: cdktf.booleanToHclTerraform(this._featuredItem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_info_name: {
        value: cdktf.stringToHclTerraform(this._pkgInfoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_modulo: {
        value: cdktf.numberToHclTerraform(this._shardModulo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_manifest_id: {
        value: cdktf.numberToHclTerraform(this._subManifestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_shards: {
        value: cdktf.listMapperHcl(monolithSubManifestPkgInfoTagShardsToHclTerraform, false)(this._tagShards.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonolithSubManifestPkgInfoTagShardsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
