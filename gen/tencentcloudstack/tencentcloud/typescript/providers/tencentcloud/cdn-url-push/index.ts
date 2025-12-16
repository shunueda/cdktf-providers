// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnUrlPushConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify push area. NOTE: only push same area cache contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#area CdnUrlPush#area}
  */
  readonly area?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#id CdnUrlPush#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer to push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#layer CdnUrlPush#layer}
  */
  readonly layer?: string;
  /**
  * Whether to recursive parse m3u8 files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#parse_m3u8 CdnUrlPush#parse_m3u8}
  */
  readonly parseM3U8?: boolean | cdktf.IResolvable;
  /**
  * Change to push again. NOTE: this argument only works while resource update, if set to `0` or null will not be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#redo CdnUrlPush#redo}
  */
  readonly redo?: number;
  /**
  * List of url to push. NOTE: urls need include protocol prefix `http://` or `https://`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#urls CdnUrlPush#urls}
  */
  readonly urls: string[];
  /**
  * Specify `User-Agent` HTTP header, default: `TencentCdn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#user_agent CdnUrlPush#user_agent}
  */
  readonly userAgent?: string;
}
export interface CdnUrlPushPushHistory {
}

export function cdnUrlPushPushHistoryToTerraform(struct?: CdnUrlPushPushHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnUrlPushPushHistoryToHclTerraform(struct?: CdnUrlPushPushHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnUrlPushPushHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnUrlPushPushHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnUrlPushPushHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class CdnUrlPushPushHistoryList extends cdktf.ComplexList {

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
  public get(index: number): CdnUrlPushPushHistoryOutputReference {
    return new CdnUrlPushPushHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push tencentcloud_cdn_url_push}
*/
export class CdnUrlPush extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdn_url_push";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnUrlPush resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnUrlPush to import
  * @param importFromId The id of the existing CdnUrlPush that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnUrlPush to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdn_url_push", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_url_push tencentcloud_cdn_url_push} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnUrlPushConfig
  */
  public constructor(scope: Construct, id: string, config: CdnUrlPushConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdn_url_push',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._area = config.area;
    this._id = config.id;
    this._layer = config.layer;
    this._parseM3U8 = config.parseM3U8;
    this._redo = config.redo;
    this._urls = config.urls;
    this._userAgent = config.userAgent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
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

  // layer - computed: false, optional: true, required: false
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  public resetLayer() {
    this._layer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
  }

  // parse_m3u8 - computed: false, optional: true, required: false
  private _parseM3U8?: boolean | cdktf.IResolvable; 
  public get parseM3U8() {
    return this.getBooleanAttribute('parse_m3u8');
  }
  public set parseM3U8(value: boolean | cdktf.IResolvable) {
    this._parseM3U8 = value;
  }
  public resetParseM3U8() {
    this._parseM3U8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseM3U8Input() {
    return this._parseM3U8;
  }

  // push_history - computed: true, optional: false, required: false
  private _pushHistory = new CdnUrlPushPushHistoryList(this, "push_history", false);
  public get pushHistory() {
    return this._pushHistory;
  }

  // redo - computed: false, optional: true, required: false
  private _redo?: number; 
  public get redo() {
    return this.getNumberAttribute('redo');
  }
  public set redo(value: number) {
    this._redo = value;
  }
  public resetRedo() {
    this._redo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redoInput() {
    return this._redo;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // urls - computed: false, optional: false, required: true
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      id: cdktf.stringToTerraform(this._id),
      layer: cdktf.stringToTerraform(this._layer),
      parse_m3u8: cdktf.booleanToTerraform(this._parseM3U8),
      redo: cdktf.numberToTerraform(this._redo),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      user_agent: cdktf.stringToTerraform(this._userAgent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer: {
        value: cdktf.stringToHclTerraform(this._layer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parse_m3u8: {
        value: cdktf.booleanToHclTerraform(this._parseM3U8),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redo: {
        value: cdktf.numberToHclTerraform(this._redo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
