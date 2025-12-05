// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumWhitelistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Business identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist#aid RumWhitelist#aid}
  */
  readonly aid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist#id RumWhitelist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, such as taw-123.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist#instance_id RumWhitelist#instance_id}
  */
  readonly instanceId: string;
  /**
  * Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist#remark RumWhitelist#remark}
  */
  readonly remark: string;
  /**
  * uin: business identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist#whitelist_uin RumWhitelist#whitelist_uin}
  */
  readonly whitelistUin: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist tencentcloud_rum_whitelist}
*/
export class RumWhitelist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_whitelist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumWhitelist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumWhitelist to import
  * @param importFromId The id of the existing RumWhitelist that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumWhitelist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_whitelist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_whitelist tencentcloud_rum_whitelist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumWhitelistConfig
  */
  public constructor(scope: Construct, id: string, config: RumWhitelistConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_whitelist',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aid = config.aid;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._remark = config.remark;
    this._whitelistUin = config.whitelistUin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aid - computed: false, optional: true, required: false
  private _aid?: string; 
  public get aid() {
    return this.getStringAttribute('aid');
  }
  public set aid(value: string) {
    this._aid = value;
  }
  public resetAid() {
    this._aid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aidInput() {
    return this._aid;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // create_user - computed: true, optional: false, required: false
  public get createUser() {
    return this.getStringAttribute('create_user');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // whitelist_uin - computed: false, optional: false, required: true
  private _whitelistUin?: string; 
  public get whitelistUin() {
    return this.getStringAttribute('whitelist_uin');
  }
  public set whitelistUin(value: string) {
    this._whitelistUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistUinInput() {
    return this._whitelistUin;
  }

  // wid - computed: true, optional: false, required: false
  public get wid() {
    return this.getStringAttribute('wid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aid: cdktf.stringToTerraform(this._aid),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      remark: cdktf.stringToTerraform(this._remark),
      whitelist_uin: cdktf.stringToTerraform(this._whitelistUin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aid: {
        value: cdktf.stringToHclTerraform(this._aid),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist_uin: {
        value: cdktf.stringToHclTerraform(this._whitelistUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
