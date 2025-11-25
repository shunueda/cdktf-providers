// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodSuperPlayerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the unencrypted adaptive bitrate streaming template that allows output, which is required if `drm_switch` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#adaptive_dynamic_streaming_definition VodSuperPlayerConfig#adaptive_dynamic_streaming_definition}
  */
  readonly adaptiveDynamicStreamingDefinition?: string;
  /**
  * Template description. Length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#comment VodSuperPlayerConfig#comment}
  */
  readonly comment?: string;
  /**
  * Domain name used for playback. If it is left empty or set to `Default`, the domain name configured in [Default Distribution Configuration](https://cloud.tencent.com/document/product/266/33373) will be used. `Default` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#domain VodSuperPlayerConfig#domain}
  */
  readonly domain?: string;
  /**
  * Switch of DRM-protected adaptive bitstream playback: `true`: enabled, indicating to play back only output adaptive bitstreams protected by DRM; `false`: disabled, indicating to play back unencrypted output adaptive bitstreams. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#drm_switch VodSuperPlayerConfig#drm_switch}
  */
  readonly drmSwitch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#id VodSuperPlayerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the image sprite template that allows output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#image_sprite_definition VodSuperPlayerConfig#image_sprite_definition}
  */
  readonly imageSpriteDefinition?: string;
  /**
  * Player configuration name, which can contain up to 64 letters, digits, underscores, and hyphens (such as test_ABC-123) and must be unique under a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#name VodSuperPlayerConfig#name}
  */
  readonly name: string;
  /**
  * Scheme used for playback. If it is left empty or set to `Default`, the scheme configured in [Default Distribution Configuration](https://cloud.tencent.com/document/product/266/33373) will be used. Other valid values: `HTTP`; `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#scheme VodSuperPlayerConfig#scheme}
  */
  readonly scheme?: string;
  /**
  * Subapplication ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#sub_app_id VodSuperPlayerConfig#sub_app_id}
  */
  readonly subAppId?: number;
  /**
  * drm_streaming_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#drm_streaming_info VodSuperPlayerConfig#drm_streaming_info}
  */
  readonly drmStreamingInfo?: VodSuperPlayerConfigDrmStreamingInfo;
  /**
  * resolution_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#resolution_names VodSuperPlayerConfig#resolution_names}
  */
  readonly resolutionNames?: VodSuperPlayerConfigResolutionNames[] | cdktf.IResolvable;
}
export interface VodSuperPlayerConfigDrmStreamingInfo {
  /**
  * ID of the adaptive dynamic streaming template whose protection type is `SimpleAES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#simple_aes_definition VodSuperPlayerConfig#simple_aes_definition}
  */
  readonly simpleAesDefinition?: string;
}

export function vodSuperPlayerConfigDrmStreamingInfoToTerraform(struct?: VodSuperPlayerConfigDrmStreamingInfoOutputReference | VodSuperPlayerConfigDrmStreamingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_aes_definition: cdktf.stringToTerraform(struct!.simpleAesDefinition),
  }
}


export function vodSuperPlayerConfigDrmStreamingInfoToHclTerraform(struct?: VodSuperPlayerConfigDrmStreamingInfoOutputReference | VodSuperPlayerConfigDrmStreamingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_aes_definition: {
      value: cdktf.stringToHclTerraform(struct!.simpleAesDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodSuperPlayerConfigDrmStreamingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodSuperPlayerConfigDrmStreamingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleAesDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleAesDefinition = this._simpleAesDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodSuperPlayerConfigDrmStreamingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simpleAesDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simpleAesDefinition = value.simpleAesDefinition;
    }
  }

  // simple_aes_definition - computed: false, optional: true, required: false
  private _simpleAesDefinition?: string; 
  public get simpleAesDefinition() {
    return this.getStringAttribute('simple_aes_definition');
  }
  public set simpleAesDefinition(value: string) {
    this._simpleAesDefinition = value;
  }
  public resetSimpleAesDefinition() {
    this._simpleAesDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleAesDefinitionInput() {
    return this._simpleAesDefinition;
  }
}
export interface VodSuperPlayerConfigResolutionNames {
  /**
  * Length of video short side in px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#min_edge_length VodSuperPlayerConfig#min_edge_length}
  */
  readonly minEdgeLength: number;
  /**
  * Display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#name VodSuperPlayerConfig#name}
  */
  readonly name: string;
}

export function vodSuperPlayerConfigResolutionNamesToTerraform(struct?: VodSuperPlayerConfigResolutionNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_edge_length: cdktf.numberToTerraform(struct!.minEdgeLength),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vodSuperPlayerConfigResolutionNamesToHclTerraform(struct?: VodSuperPlayerConfigResolutionNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_edge_length: {
      value: cdktf.numberToHclTerraform(struct!.minEdgeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodSuperPlayerConfigResolutionNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodSuperPlayerConfigResolutionNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minEdgeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minEdgeLength = this._minEdgeLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodSuperPlayerConfigResolutionNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minEdgeLength = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minEdgeLength = value.minEdgeLength;
      this._name = value.name;
    }
  }

  // min_edge_length - computed: false, optional: false, required: true
  private _minEdgeLength?: number; 
  public get minEdgeLength() {
    return this.getNumberAttribute('min_edge_length');
  }
  public set minEdgeLength(value: number) {
    this._minEdgeLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minEdgeLengthInput() {
    return this._minEdgeLength;
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
}

export class VodSuperPlayerConfigResolutionNamesList extends cdktf.ComplexList {
  public internalValue? : VodSuperPlayerConfigResolutionNames[] | cdktf.IResolvable

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
  public get(index: number): VodSuperPlayerConfigResolutionNamesOutputReference {
    return new VodSuperPlayerConfigResolutionNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config tencentcloud_vod_super_player_config}
*/
export class VodSuperPlayerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_super_player_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodSuperPlayerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodSuperPlayerConfig to import
  * @param importFromId The id of the existing VodSuperPlayerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodSuperPlayerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_super_player_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_super_player_config tencentcloud_vod_super_player_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodSuperPlayerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VodSuperPlayerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_super_player_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adaptiveDynamicStreamingDefinition = config.adaptiveDynamicStreamingDefinition;
    this._comment = config.comment;
    this._domain = config.domain;
    this._drmSwitch = config.drmSwitch;
    this._id = config.id;
    this._imageSpriteDefinition = config.imageSpriteDefinition;
    this._name = config.name;
    this._scheme = config.scheme;
    this._subAppId = config.subAppId;
    this._drmStreamingInfo.internalValue = config.drmStreamingInfo;
    this._resolutionNames.internalValue = config.resolutionNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive_dynamic_streaming_definition - computed: false, optional: true, required: false
  private _adaptiveDynamicStreamingDefinition?: string; 
  public get adaptiveDynamicStreamingDefinition() {
    return this.getStringAttribute('adaptive_dynamic_streaming_definition');
  }
  public set adaptiveDynamicStreamingDefinition(value: string) {
    this._adaptiveDynamicStreamingDefinition = value;
  }
  public resetAdaptiveDynamicStreamingDefinition() {
    this._adaptiveDynamicStreamingDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveDynamicStreamingDefinitionInput() {
    return this._adaptiveDynamicStreamingDefinition;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // drm_switch - computed: false, optional: true, required: false
  private _drmSwitch?: boolean | cdktf.IResolvable; 
  public get drmSwitch() {
    return this.getBooleanAttribute('drm_switch');
  }
  public set drmSwitch(value: boolean | cdktf.IResolvable) {
    this._drmSwitch = value;
  }
  public resetDrmSwitch() {
    this._drmSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmSwitchInput() {
    return this._drmSwitch;
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

  // image_sprite_definition - computed: false, optional: true, required: false
  private _imageSpriteDefinition?: string; 
  public get imageSpriteDefinition() {
    return this.getStringAttribute('image_sprite_definition');
  }
  public set imageSpriteDefinition(value: string) {
    this._imageSpriteDefinition = value;
  }
  public resetImageSpriteDefinition() {
    this._imageSpriteDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpriteDefinitionInput() {
    return this._imageSpriteDefinition;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // sub_app_id - computed: false, optional: true, required: false
  private _subAppId?: number; 
  public get subAppId() {
    return this.getNumberAttribute('sub_app_id');
  }
  public set subAppId(value: number) {
    this._subAppId = value;
  }
  public resetSubAppId() {
    this._subAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAppIdInput() {
    return this._subAppId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // drm_streaming_info - computed: false, optional: true, required: false
  private _drmStreamingInfo = new VodSuperPlayerConfigDrmStreamingInfoOutputReference(this, "drm_streaming_info");
  public get drmStreamingInfo() {
    return this._drmStreamingInfo;
  }
  public putDrmStreamingInfo(value: VodSuperPlayerConfigDrmStreamingInfo) {
    this._drmStreamingInfo.internalValue = value;
  }
  public resetDrmStreamingInfo() {
    this._drmStreamingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmStreamingInfoInput() {
    return this._drmStreamingInfo.internalValue;
  }

  // resolution_names - computed: false, optional: true, required: false
  private _resolutionNames = new VodSuperPlayerConfigResolutionNamesList(this, "resolution_names", false);
  public get resolutionNames() {
    return this._resolutionNames;
  }
  public putResolutionNames(value: VodSuperPlayerConfigResolutionNames[] | cdktf.IResolvable) {
    this._resolutionNames.internalValue = value;
  }
  public resetResolutionNames() {
    this._resolutionNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionNamesInput() {
    return this._resolutionNames.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptive_dynamic_streaming_definition: cdktf.stringToTerraform(this._adaptiveDynamicStreamingDefinition),
      comment: cdktf.stringToTerraform(this._comment),
      domain: cdktf.stringToTerraform(this._domain),
      drm_switch: cdktf.booleanToTerraform(this._drmSwitch),
      id: cdktf.stringToTerraform(this._id),
      image_sprite_definition: cdktf.stringToTerraform(this._imageSpriteDefinition),
      name: cdktf.stringToTerraform(this._name),
      scheme: cdktf.stringToTerraform(this._scheme),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      drm_streaming_info: vodSuperPlayerConfigDrmStreamingInfoToTerraform(this._drmStreamingInfo.internalValue),
      resolution_names: cdktf.listMapper(vodSuperPlayerConfigResolutionNamesToTerraform, true)(this._resolutionNames.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptive_dynamic_streaming_definition: {
        value: cdktf.stringToHclTerraform(this._adaptiveDynamicStreamingDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drm_switch: {
        value: cdktf.booleanToHclTerraform(this._drmSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_sprite_definition: {
        value: cdktf.stringToHclTerraform(this._imageSpriteDefinition),
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
      scheme: {
        value: cdktf.stringToHclTerraform(this._scheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_app_id: {
        value: cdktf.numberToHclTerraform(this._subAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drm_streaming_info: {
        value: vodSuperPlayerConfigDrmStreamingInfoToHclTerraform(this._drmStreamingInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodSuperPlayerConfigDrmStreamingInfoList",
      },
      resolution_names: {
        value: cdktf.listMapperHcl(vodSuperPlayerConfigResolutionNamesToHclTerraform, true)(this._resolutionNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodSuperPlayerConfigResolutionNamesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
