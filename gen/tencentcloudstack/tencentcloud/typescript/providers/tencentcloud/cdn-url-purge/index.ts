// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnUrlPurgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify purge area. NOTE: only purge same area cache contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge#area CdnUrlPurge#area}
  */
  readonly area?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge#id CdnUrlPurge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Change to purge again. NOTE: this argument only works while resource update, if set to `0` or null will not be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge#redo CdnUrlPurge#redo}
  */
  readonly redo?: number;
  /**
  * Whether to encode urls, if set to `true` will auto encode instead of manual process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge#url_encode CdnUrlPurge#url_encode}
  */
  readonly urlEncode?: boolean | cdktf.IResolvable;
  /**
  * List of url to purge. NOTE: urls need include protocol prefix `http://` or `https://`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge#urls CdnUrlPurge#urls}
  */
  readonly urls: string[];
}
export interface CdnUrlPurgePurgeHistory {
}

export function cdnUrlPurgePurgeHistoryToTerraform(struct?: CdnUrlPurgePurgeHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnUrlPurgePurgeHistoryToHclTerraform(struct?: CdnUrlPurgePurgeHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnUrlPurgePurgeHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnUrlPurgePurgeHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnUrlPurgePurgeHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // flush_type - computed: true, optional: false, required: false
  public get flushType() {
    return this.getStringAttribute('flush_type');
  }

  // purge_type - computed: true, optional: false, required: false
  public get purgeType() {
    return this.getStringAttribute('purge_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class CdnUrlPurgePurgeHistoryList extends cdktf.ComplexList {

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
  public get(index: number): CdnUrlPurgePurgeHistoryOutputReference {
    return new CdnUrlPurgePurgeHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge tencentcloud_cdn_url_purge}
*/
export class CdnUrlPurge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdn_url_purge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnUrlPurge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnUrlPurge to import
  * @param importFromId The id of the existing CdnUrlPurge that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnUrlPurge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdn_url_purge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cdn_url_purge tencentcloud_cdn_url_purge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnUrlPurgeConfig
  */
  public constructor(scope: Construct, id: string, config: CdnUrlPurgeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdn_url_purge',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._redo = config.redo;
    this._urlEncode = config.urlEncode;
    this._urls = config.urls;
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

  // purge_history - computed: true, optional: false, required: false
  private _purgeHistory = new CdnUrlPurgePurgeHistoryList(this, "purge_history", false);
  public get purgeHistory() {
    return this._purgeHistory;
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

  // url_encode - computed: false, optional: true, required: false
  private _urlEncode?: boolean | cdktf.IResolvable; 
  public get urlEncode() {
    return this.getBooleanAttribute('url_encode');
  }
  public set urlEncode(value: boolean | cdktf.IResolvable) {
    this._urlEncode = value;
  }
  public resetUrlEncode() {
    this._urlEncode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlEncodeInput() {
    return this._urlEncode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      id: cdktf.stringToTerraform(this._id),
      redo: cdktf.numberToTerraform(this._redo),
      url_encode: cdktf.booleanToTerraform(this._urlEncode),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
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
      redo: {
        value: cdktf.numberToHclTerraform(this._redo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_encode: {
        value: cdktf.booleanToHclTerraform(this._urlEncode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
