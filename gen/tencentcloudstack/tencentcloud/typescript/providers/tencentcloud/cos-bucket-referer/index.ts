// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosBucketRefererConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket format should be [custom name]-[appid], for example `mycos-1258798060`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#bucket CosBucketReferer#bucket}
  */
  readonly bucket: string;
  /**
  * A list of domain names in the blocklist/allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#domain_list CosBucketReferer#domain_list}
  */
  readonly domainList: string[];
  /**
  * Whether to allow access with an empty referer. Enumerated values: `Allow`, `Deny` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#empty_refer_configuration CosBucketReferer#empty_refer_configuration}
  */
  readonly emptyReferConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#id CosBucketReferer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Hotlink protection type. Enumerated values: `Black-List`, `White-List`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#referer_type CosBucketReferer#referer_type}
  */
  readonly refererType: string;
  /**
  * Whether to enable hotlink protection. Enumerated values: `Enabled`, `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#status CosBucketReferer#status}
  */
  readonly status: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer tencentcloud_cos_bucket_referer}
*/
export class CosBucketReferer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_bucket_referer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosBucketReferer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosBucketReferer to import
  * @param importFromId The id of the existing CosBucketReferer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosBucketReferer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_bucket_referer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cos_bucket_referer tencentcloud_cos_bucket_referer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosBucketRefererConfig
  */
  public constructor(scope: Construct, id: string, config: CosBucketRefererConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_bucket_referer',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._domainList = config.domainList;
    this._emptyReferConfiguration = config.emptyReferConfiguration;
    this._id = config.id;
    this._refererType = config.refererType;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain_list - computed: false, optional: false, required: true
  private _domainList?: string[]; 
  public get domainList() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_list'));
  }
  public set domainList(value: string[]) {
    this._domainList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList;
  }

  // empty_refer_configuration - computed: false, optional: true, required: false
  private _emptyReferConfiguration?: string; 
  public get emptyReferConfiguration() {
    return this.getStringAttribute('empty_refer_configuration');
  }
  public set emptyReferConfiguration(value: string) {
    this._emptyReferConfiguration = value;
  }
  public resetEmptyReferConfiguration() {
    this._emptyReferConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyReferConfigurationInput() {
    return this._emptyReferConfiguration;
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

  // referer_type - computed: false, optional: false, required: true
  private _refererType?: string; 
  public get refererType() {
    return this.getStringAttribute('referer_type');
  }
  public set refererType(value: string) {
    this._refererType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refererTypeInput() {
    return this._refererType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      domain_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainList),
      empty_refer_configuration: cdktf.stringToTerraform(this._emptyReferConfiguration),
      id: cdktf.stringToTerraform(this._id),
      referer_type: cdktf.stringToTerraform(this._refererType),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      empty_refer_configuration: {
        value: cdktf.stringToHclTerraform(this._emptyReferConfiguration),
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
      referer_type: {
        value: cdktf.stringToHclTerraform(this._refererType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
