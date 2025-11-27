// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmEnterpriseAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the app artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#artifact_id MdmEnterpriseApp#artifact_id}
  */
  readonly artifactId: string;
  /**
  * A dictionary serialized as plist that contains the initial configuration of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#configuration MdmEnterpriseApp#configuration}
  */
  readonly configuration?: string;
  /**
  * The default shard value. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#default_shard MdmEnterpriseApp#default_shard}
  */
  readonly defaultShard?: number;
  /**
  * Machines tagged with one of these tags will not receive the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#excluded_tag_ids MdmEnterpriseApp#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * If `true`, install the app as a managed app. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#install_as_managed MdmEnterpriseApp#install_as_managed}
  */
  readonly installAsManaged?: boolean | cdktf.IResolvable;
  /**
  * Toggles the installation of the app on iOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ios MdmEnterpriseApp#ios}
  */
  readonly ios?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the app is an iOS app that can run on an Apple silicon in macOS 11 and later. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ios_app MdmEnterpriseApp#ios_app}
  */
  readonly iosApp?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ios_max_version MdmEnterpriseApp#ios_max_version}
  */
  readonly iosMaxVersion?: string;
  /**
  * Devices with this iOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ios_min_version MdmEnterpriseApp#ios_min_version}
  */
  readonly iosMinVersion?: string;
  /**
  * Toggles the installation of the app on iPadOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ipados MdmEnterpriseApp#ipados}
  */
  readonly ipados?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iPadOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ipados_max_version MdmEnterpriseApp#ipados_max_version}
  */
  readonly ipadosMaxVersion?: string;
  /**
  * Devices with this iPadOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#ipados_min_version MdmEnterpriseApp#ipados_min_version}
  */
  readonly ipadosMinVersion?: string;
  /**
  * Toggles the installation of the app on macOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#macos MdmEnterpriseApp#macos}
  */
  readonly macos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this macOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#macos_max_version MdmEnterpriseApp#macos_max_version}
  */
  readonly macosMaxVersion?: string;
  /**
  * Devices with this macOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#macos_min_version MdmEnterpriseApp#macos_min_version}
  */
  readonly macosMinVersion?: string;
  /**
  * The hexadecimal digest of the sha256 hash of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#package_sha256 MdmEnterpriseApp#package_sha256}
  */
  readonly packageSha256: string;
  /**
  * The URI of the app package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#package_uri MdmEnterpriseApp#package_uri}
  */
  readonly packageUri: string;
  /**
  * If `true`, the app will be removed when the device is unenrolled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#remove_on_unenroll MdmEnterpriseApp#remove_on_unenroll}
  */
  readonly removeOnUnenroll?: boolean | cdktf.IResolvable;
  /**
  * The modulo used to calculate the shards. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#shard_modulo MdmEnterpriseApp#shard_modulo}
  */
  readonly shardModulo?: number;
  /**
  * A set of tag shard values different from the default shard, to determine if the tagged machines will receive the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#tag_shards MdmEnterpriseApp#tag_shards}
  */
  readonly tagShards?: MdmEnterpriseAppTagShards[] | cdktf.IResolvable;
  /**
  * Toggles the installation of the app on tvOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#tvos MdmEnterpriseApp#tvos}
  */
  readonly tvos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this tvOS version or higher will **not** receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#tvos_max_version MdmEnterpriseApp#tvos_max_version}
  */
  readonly tvosMaxVersion?: string;
  /**
  * Devices with this tvOS version or higher will receive this app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#tvos_min_version MdmEnterpriseApp#tvos_min_version}
  */
  readonly tvosMinVersion?: string;
  /**
  * Version of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#version MdmEnterpriseApp#version}
  */
  readonly version: number;
}
export interface MdmEnterpriseAppTagShards {
  /**
  * The shard for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#shard MdmEnterpriseApp#shard}
  */
  readonly shard: number;
  /**
  * The `ID` of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#tag_id MdmEnterpriseApp#tag_id}
  */
  readonly tagId: number;
}

export function mdmEnterpriseAppTagShardsToTerraform(struct?: MdmEnterpriseAppTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard: cdktf.numberToTerraform(struct!.shard),
    tag_id: cdktf.numberToTerraform(struct!.tagId),
  }
}


export function mdmEnterpriseAppTagShardsToHclTerraform(struct?: MdmEnterpriseAppTagShards | cdktf.IResolvable): any {
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

export class MdmEnterpriseAppTagShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmEnterpriseAppTagShards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmEnterpriseAppTagShards | cdktf.IResolvable | undefined) {
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

export class MdmEnterpriseAppTagShardsList extends cdktf.ComplexList {
  public internalValue? : MdmEnterpriseAppTagShards[] | cdktf.IResolvable

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
  public get(index: number): MdmEnterpriseAppTagShardsOutputReference {
    return new MdmEnterpriseAppTagShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app zentral_mdm_enterprise_app}
*/
export class MdmEnterpriseApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_enterprise_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmEnterpriseApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmEnterpriseApp to import
  * @param importFromId The id of the existing MdmEnterpriseApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmEnterpriseApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_enterprise_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/mdm_enterprise_app zentral_mdm_enterprise_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmEnterpriseAppConfig
  */
  public constructor(scope: Construct, id: string, config: MdmEnterpriseAppConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_enterprise_app',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
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
    this._configuration = config.configuration;
    this._defaultShard = config.defaultShard;
    this._excludedTagIds = config.excludedTagIds;
    this._installAsManaged = config.installAsManaged;
    this._ios = config.ios;
    this._iosApp = config.iosApp;
    this._iosMaxVersion = config.iosMaxVersion;
    this._iosMinVersion = config.iosMinVersion;
    this._ipados = config.ipados;
    this._ipadosMaxVersion = config.ipadosMaxVersion;
    this._ipadosMinVersion = config.ipadosMinVersion;
    this._macos = config.macos;
    this._macosMaxVersion = config.macosMaxVersion;
    this._macosMinVersion = config.macosMinVersion;
    this._packageSha256 = config.packageSha256;
    this._packageUri = config.packageUri;
    this._removeOnUnenroll = config.removeOnUnenroll;
    this._shardModulo = config.shardModulo;
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

  // install_as_managed - computed: true, optional: true, required: false
  private _installAsManaged?: boolean | cdktf.IResolvable; 
  public get installAsManaged() {
    return this.getBooleanAttribute('install_as_managed');
  }
  public set installAsManaged(value: boolean | cdktf.IResolvable) {
    this._installAsManaged = value;
  }
  public resetInstallAsManaged() {
    this._installAsManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installAsManagedInput() {
    return this._installAsManaged;
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

  // ios_app - computed: true, optional: true, required: false
  private _iosApp?: boolean | cdktf.IResolvable; 
  public get iosApp() {
    return this.getBooleanAttribute('ios_app');
  }
  public set iosApp(value: boolean | cdktf.IResolvable) {
    this._iosApp = value;
  }
  public resetIosApp() {
    this._iosApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosAppInput() {
    return this._iosApp;
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

  // package_sha256 - computed: false, optional: false, required: true
  private _packageSha256?: string; 
  public get packageSha256() {
    return this.getStringAttribute('package_sha256');
  }
  public set packageSha256(value: string) {
    this._packageSha256 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSha256Input() {
    return this._packageSha256;
  }

  // package_uri - computed: false, optional: false, required: true
  private _packageUri?: string; 
  public get packageUri() {
    return this.getStringAttribute('package_uri');
  }
  public set packageUri(value: string) {
    this._packageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUriInput() {
    return this._packageUri;
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
  private _tagShards = new MdmEnterpriseAppTagShardsList(this, "tag_shards", true);
  public get tagShards() {
    return this._tagShards;
  }
  public putTagShards(value: MdmEnterpriseAppTagShards[] | cdktf.IResolvable) {
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
      configuration: cdktf.stringToTerraform(this._configuration),
      default_shard: cdktf.numberToTerraform(this._defaultShard),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      install_as_managed: cdktf.booleanToTerraform(this._installAsManaged),
      ios: cdktf.booleanToTerraform(this._ios),
      ios_app: cdktf.booleanToTerraform(this._iosApp),
      ios_max_version: cdktf.stringToTerraform(this._iosMaxVersion),
      ios_min_version: cdktf.stringToTerraform(this._iosMinVersion),
      ipados: cdktf.booleanToTerraform(this._ipados),
      ipados_max_version: cdktf.stringToTerraform(this._ipadosMaxVersion),
      ipados_min_version: cdktf.stringToTerraform(this._ipadosMinVersion),
      macos: cdktf.booleanToTerraform(this._macos),
      macos_max_version: cdktf.stringToTerraform(this._macosMaxVersion),
      macos_min_version: cdktf.stringToTerraform(this._macosMinVersion),
      package_sha256: cdktf.stringToTerraform(this._packageSha256),
      package_uri: cdktf.stringToTerraform(this._packageUri),
      remove_on_unenroll: cdktf.booleanToTerraform(this._removeOnUnenroll),
      shard_modulo: cdktf.numberToTerraform(this._shardModulo),
      tag_shards: cdktf.listMapper(mdmEnterpriseAppTagShardsToTerraform, false)(this._tagShards.internalValue),
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
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
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
      install_as_managed: {
        value: cdktf.booleanToHclTerraform(this._installAsManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ios: {
        value: cdktf.booleanToHclTerraform(this._ios),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ios_app: {
        value: cdktf.booleanToHclTerraform(this._iosApp),
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
      package_sha256: {
        value: cdktf.stringToHclTerraform(this._packageSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_uri: {
        value: cdktf.stringToHclTerraform(this._packageUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(mdmEnterpriseAppTagShardsToHclTerraform, false)(this._tagShards.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdmEnterpriseAppTagShardsList",
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
