// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OssBucketRefererConfigA extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#allow_empty_referer OssBucketReferer#allow_empty_referer}
  */
  readonly allowEmptyReferer: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#allow_truncate_query_string OssBucketReferer#allow_truncate_query_string}
  */
  readonly allowTruncateQueryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#bucket OssBucketReferer#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#id OssBucketReferer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#referer_blacklist OssBucketReferer#referer_blacklist}
  */
  readonly refererBlacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#referer_list OssBucketReferer#referer_list}
  */
  readonly refererList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#truncate_path OssBucketReferer#truncate_path}
  */
  readonly truncatePath?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#timeouts OssBucketReferer#timeouts}
  */
  readonly timeouts?: OssBucketRefererTimeouts;
}
export interface OssBucketRefererTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#create OssBucketReferer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#delete OssBucketReferer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#update OssBucketReferer#update}
  */
  readonly update?: string;
}

export function ossBucketRefererTimeoutsToTerraform(struct?: OssBucketRefererTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ossBucketRefererTimeoutsToHclTerraform(struct?: OssBucketRefererTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketRefererTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OssBucketRefererTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketRefererTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
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
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer alicloud_oss_bucket_referer}
*/
export class OssBucketReferer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oss_bucket_referer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OssBucketReferer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OssBucketReferer to import
  * @param importFromId The id of the existing OssBucketReferer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OssBucketReferer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oss_bucket_referer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_referer alicloud_oss_bucket_referer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OssBucketRefererConfigA
  */
  public constructor(scope: Construct, id: string, config: OssBucketRefererConfigA) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oss_bucket_referer',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowEmptyReferer = config.allowEmptyReferer;
    this._allowTruncateQueryString = config.allowTruncateQueryString;
    this._bucket = config.bucket;
    this._id = config.id;
    this._refererBlacklist = config.refererBlacklist;
    this._refererList = config.refererList;
    this._truncatePath = config.truncatePath;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty_referer - computed: false, optional: false, required: true
  private _allowEmptyReferer?: boolean | cdktf.IResolvable; 
  public get allowEmptyReferer() {
    return this.getBooleanAttribute('allow_empty_referer');
  }
  public set allowEmptyReferer(value: boolean | cdktf.IResolvable) {
    this._allowEmptyReferer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyRefererInput() {
    return this._allowEmptyReferer;
  }

  // allow_truncate_query_string - computed: true, optional: true, required: false
  private _allowTruncateQueryString?: boolean | cdktf.IResolvable; 
  public get allowTruncateQueryString() {
    return this.getBooleanAttribute('allow_truncate_query_string');
  }
  public set allowTruncateQueryString(value: boolean | cdktf.IResolvable) {
    this._allowTruncateQueryString = value;
  }
  public resetAllowTruncateQueryString() {
    this._allowTruncateQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTruncateQueryStringInput() {
    return this._allowTruncateQueryString;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // referer_blacklist - computed: false, optional: true, required: false
  private _refererBlacklist?: string[]; 
  public get refererBlacklist() {
    return cdktf.Fn.tolist(this.getListAttribute('referer_blacklist'));
  }
  public set refererBlacklist(value: string[]) {
    this._refererBlacklist = value;
  }
  public resetRefererBlacklist() {
    this._refererBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererBlacklistInput() {
    return this._refererBlacklist;
  }

  // referer_list - computed: false, optional: true, required: false
  private _refererList?: string[]; 
  public get refererList() {
    return cdktf.Fn.tolist(this.getListAttribute('referer_list'));
  }
  public set refererList(value: string[]) {
    this._refererList = value;
  }
  public resetRefererList() {
    this._refererList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererListInput() {
    return this._refererList;
  }

  // truncate_path - computed: false, optional: true, required: false
  private _truncatePath?: boolean | cdktf.IResolvable; 
  public get truncatePath() {
    return this.getBooleanAttribute('truncate_path');
  }
  public set truncatePath(value: boolean | cdktf.IResolvable) {
    this._truncatePath = value;
  }
  public resetTruncatePath() {
    this._truncatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatePathInput() {
    return this._truncatePath;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OssBucketRefererTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OssBucketRefererTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_empty_referer: cdktf.booleanToTerraform(this._allowEmptyReferer),
      allow_truncate_query_string: cdktf.booleanToTerraform(this._allowTruncateQueryString),
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      referer_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._refererBlacklist),
      referer_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._refererList),
      truncate_path: cdktf.booleanToTerraform(this._truncatePath),
      timeouts: ossBucketRefererTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_empty_referer: {
        value: cdktf.booleanToHclTerraform(this._allowEmptyReferer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_truncate_query_string: {
        value: cdktf.booleanToHclTerraform(this._allowTruncateQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      referer_blacklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._refererBlacklist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      referer_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._refererList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      truncate_path: {
        value: cdktf.booleanToHclTerraform(this._truncatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: ossBucketRefererTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OssBucketRefererTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
