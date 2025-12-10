// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfPathRewriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to shield the mapped path, Y: Yes N: No.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#blocked TsfPathRewrite#blocked}
  */
  readonly blocked: string;
  /**
  * gateway deployment group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#gateway_group_id TsfPathRewrite#gateway_group_id}
  */
  readonly gatewayGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#id TsfPathRewrite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule order, the smaller the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#order TsfPathRewrite#order}
  */
  readonly order: number;
  /**
  * regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#regex TsfPathRewrite#regex}
  */
  readonly regex: string;
  /**
  * content to replace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#replacement TsfPathRewrite#replacement}
  */
  readonly replacement: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite tencentcloud_tsf_path_rewrite}
*/
export class TsfPathRewrite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_path_rewrite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfPathRewrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfPathRewrite to import
  * @param importFromId The id of the existing TsfPathRewrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfPathRewrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_path_rewrite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/tsf_path_rewrite tencentcloud_tsf_path_rewrite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfPathRewriteConfig
  */
  public constructor(scope: Construct, id: string, config: TsfPathRewriteConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_path_rewrite',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blocked = config.blocked;
    this._gatewayGroupId = config.gatewayGroupId;
    this._id = config.id;
    this._order = config.order;
    this._regex = config.regex;
    this._replacement = config.replacement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked - computed: false, optional: false, required: true
  private _blocked?: string; 
  public get blocked() {
    return this.getStringAttribute('blocked');
  }
  public set blocked(value: string) {
    this._blocked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // gateway_group_id - computed: false, optional: false, required: true
  private _gatewayGroupId?: string; 
  public get gatewayGroupId() {
    return this.getStringAttribute('gateway_group_id');
  }
  public set gatewayGroupId(value: string) {
    this._gatewayGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayGroupIdInput() {
    return this._gatewayGroupId;
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // path_rewrite_id - computed: true, optional: false, required: false
  public get pathRewriteId() {
    return this.getStringAttribute('path_rewrite_id');
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: false, required: true
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked: cdktf.stringToTerraform(this._blocked),
      gateway_group_id: cdktf.stringToTerraform(this._gatewayGroupId),
      id: cdktf.stringToTerraform(this._id),
      order: cdktf.numberToTerraform(this._order),
      regex: cdktf.stringToTerraform(this._regex),
      replacement: cdktf.stringToTerraform(this._replacement),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked: {
        value: cdktf.stringToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_group_id: {
        value: cdktf.stringToHclTerraform(this._gatewayGroupId),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regex: {
        value: cdktf.stringToHclTerraform(this._regex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement: {
        value: cdktf.stringToHclTerraform(this._replacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
