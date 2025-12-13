// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the profile artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#artifact_id MdmProfile#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The default shard value. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#default_shard MdmProfile#default_shard}
  */
  readonly defaultShard?: number;
  /**
  * Machines tagged with one of these tags will not receive the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#excluded_tag_ids MdmProfile#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * Toggles the installation of the profile on iOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#ios MdmProfile#ios}
  */
  readonly ios?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iOS version or higher will **not** receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#ios_max_version MdmProfile#ios_max_version}
  */
  readonly iosMaxVersion?: string;
  /**
  * Devices with this iOS version or higher will receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#ios_min_version MdmProfile#ios_min_version}
  */
  readonly iosMinVersion?: string;
  /**
  * Toggles the installation of the profile on iPadOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#ipados MdmProfile#ipados}
  */
  readonly ipados?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iPadOS version or higher will **not** receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#ipados_max_version MdmProfile#ipados_max_version}
  */
  readonly ipadosMaxVersion?: string;
  /**
  * Devices with this iPadOS version or higher will receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#ipados_min_version MdmProfile#ipados_min_version}
  */
  readonly ipadosMinVersion?: string;
  /**
  * Toggles the installation of the profile on macOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#macos MdmProfile#macos}
  */
  readonly macos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this macOS version or higher will **not** receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#macos_max_version MdmProfile#macos_max_version}
  */
  readonly macosMaxVersion?: string;
  /**
  * Devices with this macOS version or higher will receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#macos_min_version MdmProfile#macos_min_version}
  */
  readonly macosMinVersion?: string;
  /**
  * The modulo used to calculate the shards. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#shard_modulo MdmProfile#shard_modulo}
  */
  readonly shardModulo?: number;
  /**
  * The configuration profile, serialized and base 64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#source MdmProfile#source}
  */
  readonly source: string;
  /**
  * A set of tag shard values different from the default shard, to determine if the tagged machines will receive the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#tag_shards MdmProfile#tag_shards}
  */
  readonly tagShards?: MdmProfileTagShards[] | cdktf.IResolvable;
  /**
  * Toggles the installation of the profile on tvOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#tvos MdmProfile#tvos}
  */
  readonly tvos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this tvOS version or higher will **not** receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#tvos_max_version MdmProfile#tvos_max_version}
  */
  readonly tvosMaxVersion?: string;
  /**
  * Devices with this tvOS version or higher will receive this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#tvos_min_version MdmProfile#tvos_min_version}
  */
  readonly tvosMinVersion?: string;
  /**
  * Version of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#version MdmProfile#version}
  */
  readonly version: number;
}
export interface MdmProfileTagShards {
  /**
  * The shard for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#shard MdmProfile#shard}
  */
  readonly shard: number;
  /**
  * The `ID` of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#tag_id MdmProfile#tag_id}
  */
  readonly tagId: number;
}

export function mdmProfileTagShardsToTerraform(struct?: MdmProfileTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard: cdktf.numberToTerraform(struct!.shard),
    tag_id: cdktf.numberToTerraform(struct!.tagId),
  }
}


export function mdmProfileTagShardsToHclTerraform(struct?: MdmProfileTagShards | cdktf.IResolvable): any {
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

export class MdmProfileTagShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmProfileTagShards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmProfileTagShards | cdktf.IResolvable | undefined) {
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

export class MdmProfileTagShardsList extends cdktf.ComplexList {
  public internalValue? : MdmProfileTagShards[] | cdktf.IResolvable

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
  public get(index: number): MdmProfileTagShardsOutputReference {
    return new MdmProfileTagShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile zentral_mdm_profile}
*/
export class MdmProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmProfile to import
  * @param importFromId The id of the existing MdmProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_profile zentral_mdm_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmProfileConfig
  */
  public constructor(scope: Construct, id: string, config: MdmProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_profile',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactId = config.artifactId;
    this._defaultShard = config.defaultShard;
    this._excludedTagIds = config.excludedTagIds;
    this._ios = config.ios;
    this._iosMaxVersion = config.iosMaxVersion;
    this._iosMinVersion = config.iosMinVersion;
    this._ipados = config.ipados;
    this._ipadosMaxVersion = config.ipadosMaxVersion;
    this._ipadosMinVersion = config.ipadosMinVersion;
    this._macos = config.macos;
    this._macosMaxVersion = config.macosMaxVersion;
    this._macosMinVersion = config.macosMinVersion;
    this._shardModulo = config.shardModulo;
    this._source = config.source;
    this._tagShards.internalValue = config.tagShards;
    this._tvos = config.tvos;
    this._tvosMaxVersion = config.tvosMaxVersion;
    this._tvosMinVersion = config.tvosMinVersion;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ios - computed: true, optional: true, required: false
  private _ios?: boolean | cdktf.IResolvable; 
  public get ios() {
    return this.getBooleanAttribute('ios');
  }
  public set ios(value: boolean | cdktf.IResolvable) {
    this._ios = value;
  }
  public resetIos() {
    this._ios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios;
  }

  // ios_max_version - computed: true, optional: true, required: false
  private _iosMaxVersion?: string; 
  public get iosMaxVersion() {
    return this.getStringAttribute('ios_max_version');
  }
  public set iosMaxVersion(value: string) {
    this._iosMaxVersion = value;
  }
  public resetIosMaxVersion() {
    this._iosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosMaxVersionInput() {
    return this._iosMaxVersion;
  }

  // ios_min_version - computed: true, optional: true, required: false
  private _iosMinVersion?: string; 
  public get iosMinVersion() {
    return this.getStringAttribute('ios_min_version');
  }
  public set iosMinVersion(value: string) {
    this._iosMinVersion = value;
  }
  public resetIosMinVersion() {
    this._iosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosMinVersionInput() {
    return this._iosMinVersion;
  }

  // ipados - computed: true, optional: true, required: false
  private _ipados?: boolean | cdktf.IResolvable; 
  public get ipados() {
    return this.getBooleanAttribute('ipados');
  }
  public set ipados(value: boolean | cdktf.IResolvable) {
    this._ipados = value;
  }
  public resetIpados() {
    this._ipados = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipadosInput() {
    return this._ipados;
  }

  // ipados_max_version - computed: true, optional: true, required: false
  private _ipadosMaxVersion?: string; 
  public get ipadosMaxVersion() {
    return this.getStringAttribute('ipados_max_version');
  }
  public set ipadosMaxVersion(value: string) {
    this._ipadosMaxVersion = value;
  }
  public resetIpadosMaxVersion() {
    this._ipadosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipadosMaxVersionInput() {
    return this._ipadosMaxVersion;
  }

  // ipados_min_version - computed: true, optional: true, required: false
  private _ipadosMinVersion?: string; 
  public get ipadosMinVersion() {
    return this.getStringAttribute('ipados_min_version');
  }
  public set ipadosMinVersion(value: string) {
    this._ipadosMinVersion = value;
  }
  public resetIpadosMinVersion() {
    this._ipadosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipadosMinVersionInput() {
    return this._ipadosMinVersion;
  }

  // macos - computed: true, optional: true, required: false
  private _macos?: boolean | cdktf.IResolvable; 
  public get macos() {
    return this.getBooleanAttribute('macos');
  }
  public set macos(value: boolean | cdktf.IResolvable) {
    this._macos = value;
  }
  public resetMacos() {
    this._macos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosInput() {
    return this._macos;
  }

  // macos_max_version - computed: true, optional: true, required: false
  private _macosMaxVersion?: string; 
  public get macosMaxVersion() {
    return this.getStringAttribute('macos_max_version');
  }
  public set macosMaxVersion(value: string) {
    this._macosMaxVersion = value;
  }
  public resetMacosMaxVersion() {
    this._macosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosMaxVersionInput() {
    return this._macosMaxVersion;
  }

  // macos_min_version - computed: true, optional: true, required: false
  private _macosMinVersion?: string; 
  public get macosMinVersion() {
    return this.getStringAttribute('macos_min_version');
  }
  public set macosMinVersion(value: string) {
    this._macosMinVersion = value;
  }
  public resetMacosMinVersion() {
    this._macosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosMinVersionInput() {
    return this._macosMinVersion;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tag_shards - computed: true, optional: true, required: false
  private _tagShards = new MdmProfileTagShardsList(this, "tag_shards", true);
  public get tagShards() {
    return this._tagShards;
  }
  public putTagShards(value: MdmProfileTagShards[] | cdktf.IResolvable) {
    this._tagShards.internalValue = value;
  }
  public resetTagShards() {
    this._tagShards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagShardsInput() {
    return this._tagShards.internalValue;
  }

  // tvos - computed: true, optional: true, required: false
  private _tvos?: boolean | cdktf.IResolvable; 
  public get tvos() {
    return this.getBooleanAttribute('tvos');
  }
  public set tvos(value: boolean | cdktf.IResolvable) {
    this._tvos = value;
  }
  public resetTvos() {
    this._tvos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvosInput() {
    return this._tvos;
  }

  // tvos_max_version - computed: true, optional: true, required: false
  private _tvosMaxVersion?: string; 
  public get tvosMaxVersion() {
    return this.getStringAttribute('tvos_max_version');
  }
  public set tvosMaxVersion(value: string) {
    this._tvosMaxVersion = value;
  }
  public resetTvosMaxVersion() {
    this._tvosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvosMaxVersionInput() {
    return this._tvosMaxVersion;
  }

  // tvos_min_version - computed: true, optional: true, required: false
  private _tvosMinVersion?: string; 
  public get tvosMinVersion() {
    return this.getStringAttribute('tvos_min_version');
  }
  public set tvosMinVersion(value: string) {
    this._tvosMinVersion = value;
  }
  public resetTvosMinVersion() {
    this._tvosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvosMinVersionInput() {
    return this._tvosMinVersion;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_id: cdktf.stringToTerraform(this._artifactId),
      default_shard: cdktf.numberToTerraform(this._defaultShard),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      ios: cdktf.booleanToTerraform(this._ios),
      ios_max_version: cdktf.stringToTerraform(this._iosMaxVersion),
      ios_min_version: cdktf.stringToTerraform(this._iosMinVersion),
      ipados: cdktf.booleanToTerraform(this._ipados),
      ipados_max_version: cdktf.stringToTerraform(this._ipadosMaxVersion),
      ipados_min_version: cdktf.stringToTerraform(this._ipadosMinVersion),
      macos: cdktf.booleanToTerraform(this._macos),
      macos_max_version: cdktf.stringToTerraform(this._macosMaxVersion),
      macos_min_version: cdktf.stringToTerraform(this._macosMinVersion),
      shard_modulo: cdktf.numberToTerraform(this._shardModulo),
      source: cdktf.stringToTerraform(this._source),
      tag_shards: cdktf.listMapper(mdmProfileTagShardsToTerraform, false)(this._tagShards.internalValue),
      tvos: cdktf.booleanToTerraform(this._tvos),
      tvos_max_version: cdktf.stringToTerraform(this._tvosMaxVersion),
      tvos_min_version: cdktf.stringToTerraform(this._tvosMinVersion),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_id: {
        value: cdktf.stringToHclTerraform(this._artifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ios: {
        value: cdktf.booleanToHclTerraform(this._ios),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ios_max_version: {
        value: cdktf.stringToHclTerraform(this._iosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ios_min_version: {
        value: cdktf.stringToHclTerraform(this._iosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipados: {
        value: cdktf.booleanToHclTerraform(this._ipados),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipados_max_version: {
        value: cdktf.stringToHclTerraform(this._ipadosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipados_min_version: {
        value: cdktf.stringToHclTerraform(this._ipadosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macos: {
        value: cdktf.booleanToHclTerraform(this._macos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      macos_max_version: {
        value: cdktf.stringToHclTerraform(this._macosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macos_min_version: {
        value: cdktf.stringToHclTerraform(this._macosMinVersion),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_shards: {
        value: cdktf.listMapperHcl(mdmProfileTagShardsToHclTerraform, false)(this._tagShards.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdmProfileTagShardsList",
      },
      tvos: {
        value: cdktf.booleanToHclTerraform(this._tvos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tvos_max_version: {
        value: cdktf.stringToHclTerraform(this._tvosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tvos_min_version: {
        value: cdktf.stringToHclTerraform(this._tvosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
