// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafInstanceAttackLogPostConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attack log delivery switch. 0- Disable, 1- Enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config#attack_log_post WafInstanceAttackLogPostConfig#attack_log_post}
  */
  readonly attackLogPost: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config#id WafInstanceAttackLogPostConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Waf instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config#instance_id WafInstanceAttackLogPostConfig#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config tencentcloud_waf_instance_attack_log_post_config}
*/
export class WafInstanceAttackLogPostConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_instance_attack_log_post_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafInstanceAttackLogPostConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafInstanceAttackLogPostConfig to import
  * @param importFromId The id of the existing WafInstanceAttackLogPostConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafInstanceAttackLogPostConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_instance_attack_log_post_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_instance_attack_log_post_config tencentcloud_waf_instance_attack_log_post_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafInstanceAttackLogPostConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WafInstanceAttackLogPostConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_instance_attack_log_post_config',
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
    this._attackLogPost = config.attackLogPost;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_log_post - computed: false, optional: false, required: true
  private _attackLogPost?: number; 
  public get attackLogPost() {
    return this.getNumberAttribute('attack_log_post');
  }
  public set attackLogPost(value: number) {
    this._attackLogPost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackLogPostInput() {
    return this._attackLogPost;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_log_post: cdktf.numberToTerraform(this._attackLogPost),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_log_post: {
        value: cdktf.numberToHclTerraform(this._attackLogPost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
