// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfApiRateLimitRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Api Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule#api_id TsfApiRateLimitRule#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule#id TsfApiRateLimitRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * qps value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule#max_qps TsfApiRateLimitRule#max_qps}
  */
  readonly maxQps: number;
  /**
  * Enabled/disabled, enabled/disabled, if not passed, it is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule#usable_status TsfApiRateLimitRule#usable_status}
  */
  readonly usableStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule tencentcloud_tsf_api_rate_limit_rule}
*/
export class TsfApiRateLimitRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_api_rate_limit_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfApiRateLimitRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfApiRateLimitRule to import
  * @param importFromId The id of the existing TsfApiRateLimitRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfApiRateLimitRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_api_rate_limit_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_api_rate_limit_rule tencentcloud_tsf_api_rate_limit_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfApiRateLimitRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TsfApiRateLimitRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_api_rate_limit_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._id = config.id;
    this._maxQps = config.maxQps;
    this._usableStatus = config.usableStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // max_qps - computed: false, optional: false, required: true
  private _maxQps?: number; 
  public get maxQps() {
    return this.getNumberAttribute('max_qps');
  }
  public set maxQps(value: number) {
    this._maxQps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQpsInput() {
    return this._maxQps;
  }

  // rule_content - computed: true, optional: false, required: false
  public get ruleContent() {
    return this.getStringAttribute('rule_content');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // tsf_rule_id - computed: true, optional: false, required: false
  public get tsfRuleId() {
    return this.getStringAttribute('tsf_rule_id');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // usable_status - computed: true, optional: true, required: false
  private _usableStatus?: string; 
  public get usableStatus() {
    return this.getStringAttribute('usable_status');
  }
  public set usableStatus(value: string) {
    this._usableStatus = value;
  }
  public resetUsableStatus() {
    this._usableStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableStatusInput() {
    return this._usableStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      id: cdktf.stringToTerraform(this._id),
      max_qps: cdktf.numberToTerraform(this._maxQps),
      usable_status: cdktf.stringToTerraform(this._usableStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
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
      max_qps: {
        value: cdktf.numberToHclTerraform(this._maxQps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usable_status: {
        value: cdktf.stringToHclTerraform(this._usableStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
