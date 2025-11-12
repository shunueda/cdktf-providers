// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmStoreAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the app artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#artifact_id MdmStoreApp#artifact_id}
  */
  readonly artifactId: string;
  /**
  * An array that contains the associated domains to add to this app. Available in iOS 13 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#associated_domains MdmStoreApp#associated_domains}
  */
  readonly associatedDomains?: string[];
  /**
  * If `true`, perform claimed site association verification directly at the domain instead of on Apple's servers. Only set this to `true` for domains that can't access the internet. Available in iOS 14 and later. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#associated_domains_enable_direct_downloads MdmStoreApp#associated_domains_enable_direct_downloads}
  */
  readonly associatedDomainsEnableDirectDownloads?: boolean | cdktf.IResolvable;
  /**
  * A dictionary serialized as plist that contains the initial configuration of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#configuration MdmStoreApp#configuration}
  */
  readonly configuration?: string;
  /**
  * The content filter UUID for this app. Available in iOS 16 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#content_filter_uuid MdmStoreApp#content_filter_uuid}
  */
  readonly contentFilterUuid?: string;
  /**
  * The default shard value. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#default_shard MdmStoreApp#default_shard}
  */
  readonly defaultShard?: number;
  /**
  * The DNS proxy UUID for this app. Available in iOS 16 and later..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#dns_proxy_uuid MdmStoreApp#dns_proxy_uuid}
  */
  readonly dnsProxyUuid?: string;
  /**
  * Machines tagged with one of these tags will not receive the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#excluded_tag_ids MdmStoreApp#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * Toggles the installation of the app on iOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#ios MdmStoreApp#ios}
  */
  readonly ios?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#ios_max_version MdmStoreApp#ios_max_version}
  */
  readonly iosMaxVersion?: string;
  /**
  * Devices with this iOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#ios_min_version MdmStoreApp#ios_min_version}
  */
  readonly iosMinVersion?: string;
  /**
  * Toggles the installation of the app on iPadOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#ipados MdmStoreApp#ipados}
  */
  readonly ipados?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iPadOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#ipados_max_version MdmStoreApp#ipados_max_version}
  */
  readonly ipadosMaxVersion?: string;
  /**
  * Devices with this iPadOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#ipados_min_version MdmStoreApp#ipados_min_version}
  */
  readonly ipadosMinVersion?: string;
  /**
  * The location asset `ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#location_asset_id MdmStoreApp#location_asset_id}
  */
  readonly locationAssetId: number;
  /**
  * Toggles the installation of the app on macOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#macos MdmStoreApp#macos}
  */
  readonly macos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this macOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#macos_max_version MdmStoreApp#macos_max_version}
  */
  readonly macosMaxVersion?: string;
  /**
  * Devices with this macOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#macos_min_version MdmStoreApp#macos_min_version}
  */
  readonly macosMinVersion?: string;
  /**
  * If `true`, prevent backup of app data. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#prevent_backup MdmStoreApp#prevent_backup}
  */
  readonly preventBackup?: boolean | cdktf.IResolvable;
  /**
  * If `false`, this app isn't removable while it's a managed app. Available in iOS 14 and later, and tvOS 14 and later. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#removable MdmStoreApp#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the app will be removed when the device is unenrolled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#remove_on_unenroll MdmStoreApp#remove_on_unenroll}
  */
  readonly removeOnUnenroll?: boolean | cdktf.IResolvable;
  /**
  * The modulo used to calculate the shards. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#shard_modulo MdmStoreApp#shard_modulo}
  */
  readonly shardModulo?: number;
  /**
  * A set of tag shard values different from the default shard, to determine if the tagged machines will receive the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#tag_shards MdmStoreApp#tag_shards}
  */
  readonly tagShards?: MdmStoreAppTagShards[] | cdktf.IResolvable;
  /**
  * Toggles the installation of the app on tvOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#tvos MdmStoreApp#tvos}
  */
  readonly tvos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this tvOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#tvos_max_version MdmStoreApp#tvos_max_version}
  */
  readonly tvosMaxVersion?: string;
  /**
  * Devices with this tvOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#tvos_min_version MdmStoreApp#tvos_min_version}
  */
  readonly tvosMinVersion?: string;
  /**
  * Version of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#version MdmStoreApp#version}
  */
  readonly version: number;
  /**
  * A per-app VPN unique identifier for this app. Available in iOS 7 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#vpn_uuid MdmStoreApp#vpn_uuid}
  */
  readonly vpnUuid?: string;
}
export interface MdmStoreAppTagShards {
  /**
  * The shard for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#shard MdmStoreApp#shard}
  */
  readonly shard: number;
  /**
  * The `ID` of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#tag_id MdmStoreApp#tag_id}
  */
  readonly tagId: number;
}

export function mdmStoreAppTagShardsToTerraform(struct?: MdmStoreAppTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard: cdktf.numberToTerraform(struct!.shard),
    tag_id: cdktf.numberToTerraform(struct!.tagId),
  }
}


export function mdmStoreAppTagShardsToHclTerraform(struct?: MdmStoreAppTagShards | cdktf.IResolvable): any {
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

export class MdmStoreAppTagShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmStoreAppTagShards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmStoreAppTagShards | cdktf.IResolvable | undefined) {
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

export class MdmStoreAppTagShardsList extends cdktf.ComplexList {
  public internalValue? : MdmStoreAppTagShards[] | cdktf.IResolvable

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
  public get(index: number): MdmStoreAppTagShardsOutputReference {
    return new MdmStoreAppTagShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app zentral_mdm_store_app}
*/
export class MdmStoreApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_store_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmStoreApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmStoreApp to import
  * @param importFromId The id of the existing MdmStoreApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmStoreApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_store_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/mdm_store_app zentral_mdm_store_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmStoreAppConfig
  */
  public constructor(scope: Construct, id: string, config: MdmStoreAppConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_store_app',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
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
    this._associatedDomains = config.associatedDomains;
    this._associatedDomainsEnableDirectDownloads = config.associatedDomainsEnableDirectDownloads;
    this._configuration = config.configuration;
    this._contentFilterUuid = config.contentFilterUuid;
    this._defaultShard = config.defaultShard;
    this._dnsProxyUuid = config.dnsProxyUuid;
    this._excludedTagIds = config.excludedTagIds;
    this._ios = config.ios;
    this._iosMaxVersion = config.iosMaxVersion;
    this._iosMinVersion = config.iosMinVersion;
    this._ipados = config.ipados;
    this._ipadosMaxVersion = config.ipadosMaxVersion;
    this._ipadosMinVersion = config.ipadosMinVersion;
    this._locationAssetId = config.locationAssetId;
    this._macos = config.macos;
    this._macosMaxVersion = config.macosMaxVersion;
    this._macosMinVersion = config.macosMinVersion;
    this._preventBackup = config.preventBackup;
    this._removable = config.removable;
    this._removeOnUnenroll = config.removeOnUnenroll;
    this._shardModulo = config.shardModulo;
    this._tagShards.internalValue = config.tagShards;
    this._tvos = config.tvos;
    this._tvosMaxVersion = config.tvosMaxVersion;
    this._tvosMinVersion = config.tvosMinVersion;
    this._version = config.version;
    this._vpnUuid = config.vpnUuid;
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

  // associated_domains - computed: true, optional: true, required: false
  private _associatedDomains?: string[]; 
  public get associatedDomains() {
    return this.getListAttribute('associated_domains');
  }
  public set associatedDomains(value: string[]) {
    this._associatedDomains = value;
  }
  public resetAssociatedDomains() {
    this._associatedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDomainsInput() {
    return this._associatedDomains;
  }

  // associated_domains_enable_direct_downloads - computed: true, optional: true, required: false
  private _associatedDomainsEnableDirectDownloads?: boolean | cdktf.IResolvable; 
  public get associatedDomainsEnableDirectDownloads() {
    return this.getBooleanAttribute('associated_domains_enable_direct_downloads');
  }
  public set associatedDomainsEnableDirectDownloads(value: boolean | cdktf.IResolvable) {
    this._associatedDomainsEnableDirectDownloads = value;
  }
  public resetAssociatedDomainsEnableDirectDownloads() {
    this._associatedDomainsEnableDirectDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedDomainsEnableDirectDownloadsInput() {
    return this._associatedDomainsEnableDirectDownloads;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // content_filter_uuid - computed: false, optional: true, required: false
  private _contentFilterUuid?: string; 
  public get contentFilterUuid() {
    return this.getStringAttribute('content_filter_uuid');
  }
  public set contentFilterUuid(value: string) {
    this._contentFilterUuid = value;
  }
  public resetContentFilterUuid() {
    this._contentFilterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterUuidInput() {
    return this._contentFilterUuid;
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

  // dns_proxy_uuid - computed: false, optional: true, required: false
  private _dnsProxyUuid?: string; 
  public get dnsProxyUuid() {
    return this.getStringAttribute('dns_proxy_uuid');
  }
  public set dnsProxyUuid(value: string) {
    this._dnsProxyUuid = value;
  }
  public resetDnsProxyUuid() {
    this._dnsProxyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyUuidInput() {
    return this._dnsProxyUuid;
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

  // location_asset_id - computed: false, optional: false, required: true
  private _locationAssetId?: number; 
  public get locationAssetId() {
    return this.getNumberAttribute('location_asset_id');
  }
  public set locationAssetId(value: number) {
    this._locationAssetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationAssetIdInput() {
    return this._locationAssetId;
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

  // prevent_backup - computed: true, optional: true, required: false
  private _preventBackup?: boolean | cdktf.IResolvable; 
  public get preventBackup() {
    return this.getBooleanAttribute('prevent_backup');
  }
  public set preventBackup(value: boolean | cdktf.IResolvable) {
    this._preventBackup = value;
  }
  public resetPreventBackup() {
    this._preventBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventBackupInput() {
    return this._preventBackup;
  }

  // removable - computed: true, optional: true, required: false
  private _removable?: boolean | cdktf.IResolvable; 
  public get removable() {
    return this.getBooleanAttribute('removable');
  }
  public set removable(value: boolean | cdktf.IResolvable) {
    this._removable = value;
  }
  public resetRemovable() {
    this._removable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removableInput() {
    return this._removable;
  }

  // remove_on_unenroll - computed: true, optional: true, required: false
  private _removeOnUnenroll?: boolean | cdktf.IResolvable; 
  public get removeOnUnenroll() {
    return this.getBooleanAttribute('remove_on_unenroll');
  }
  public set removeOnUnenroll(value: boolean | cdktf.IResolvable) {
    this._removeOnUnenroll = value;
  }
  public resetRemoveOnUnenroll() {
    this._removeOnUnenroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeOnUnenrollInput() {
    return this._removeOnUnenroll;
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

  // tag_shards - computed: true, optional: true, required: false
  private _tagShards = new MdmStoreAppTagShardsList(this, "tag_shards", true);
  public get tagShards() {
    return this._tagShards;
  }
  public putTagShards(value: MdmStoreAppTagShards[] | cdktf.IResolvable) {
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

  // vpn_uuid - computed: false, optional: true, required: false
  private _vpnUuid?: string; 
  public get vpnUuid() {
    return this.getStringAttribute('vpn_uuid');
  }
  public set vpnUuid(value: string) {
    this._vpnUuid = value;
  }
  public resetVpnUuid() {
    this._vpnUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnUuidInput() {
    return this._vpnUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_id: cdktf.stringToTerraform(this._artifactId),
      associated_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedDomains),
      associated_domains_enable_direct_downloads: cdktf.booleanToTerraform(this._associatedDomainsEnableDirectDownloads),
      configuration: cdktf.stringToTerraform(this._configuration),
      content_filter_uuid: cdktf.stringToTerraform(this._contentFilterUuid),
      default_shard: cdktf.numberToTerraform(this._defaultShard),
      dns_proxy_uuid: cdktf.stringToTerraform(this._dnsProxyUuid),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      ios: cdktf.booleanToTerraform(this._ios),
      ios_max_version: cdktf.stringToTerraform(this._iosMaxVersion),
      ios_min_version: cdktf.stringToTerraform(this._iosMinVersion),
      ipados: cdktf.booleanToTerraform(this._ipados),
      ipados_max_version: cdktf.stringToTerraform(this._ipadosMaxVersion),
      ipados_min_version: cdktf.stringToTerraform(this._ipadosMinVersion),
      location_asset_id: cdktf.numberToTerraform(this._locationAssetId),
      macos: cdktf.booleanToTerraform(this._macos),
      macos_max_version: cdktf.stringToTerraform(this._macosMaxVersion),
      macos_min_version: cdktf.stringToTerraform(this._macosMinVersion),
      prevent_backup: cdktf.booleanToTerraform(this._preventBackup),
      removable: cdktf.booleanToTerraform(this._removable),
      remove_on_unenroll: cdktf.booleanToTerraform(this._removeOnUnenroll),
      shard_modulo: cdktf.numberToTerraform(this._shardModulo),
      tag_shards: cdktf.listMapper(mdmStoreAppTagShardsToTerraform, false)(this._tagShards.internalValue),
      tvos: cdktf.booleanToTerraform(this._tvos),
      tvos_max_version: cdktf.stringToTerraform(this._tvosMaxVersion),
      tvos_min_version: cdktf.stringToTerraform(this._tvosMinVersion),
      version: cdktf.numberToTerraform(this._version),
      vpn_uuid: cdktf.stringToTerraform(this._vpnUuid),
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
      associated_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      associated_domains_enable_direct_downloads: {
        value: cdktf.booleanToHclTerraform(this._associatedDomainsEnableDirectDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_filter_uuid: {
        value: cdktf.stringToHclTerraform(this._contentFilterUuid),
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
      dns_proxy_uuid: {
        value: cdktf.stringToHclTerraform(this._dnsProxyUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      location_asset_id: {
        value: cdktf.numberToHclTerraform(this._locationAssetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      prevent_backup: {
        value: cdktf.booleanToHclTerraform(this._preventBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      removable: {
        value: cdktf.booleanToHclTerraform(this._removable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_on_unenroll: {
        value: cdktf.booleanToHclTerraform(this._removeOnUnenroll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shard_modulo: {
        value: cdktf.numberToHclTerraform(this._shardModulo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_shards: {
        value: cdktf.listMapperHcl(mdmStoreAppTagShardsToHclTerraform, false)(this._tagShards.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdmStoreAppTagShardsList",
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
      vpn_uuid: {
        value: cdktf.stringToHclTerraform(this._vpnUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
