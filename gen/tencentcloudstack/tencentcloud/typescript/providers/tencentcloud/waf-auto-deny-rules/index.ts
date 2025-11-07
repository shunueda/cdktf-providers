// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafAutoDenyRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The threshold number of attacks that triggers IP autodeny, ranging from 2 to 100 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules#attack_threshold WafAutoDenyRules#attack_threshold}
  */
  readonly attackThreshold: number;
  /**
  * The IP autodeny time after triggering the IP autodeny, ranging from 5 to 360 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules#deny_time_threshold WafAutoDenyRules#deny_time_threshold}
  */
  readonly denyTimeThreshold: number;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules#domain WafAutoDenyRules#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules#id WafAutoDenyRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP autodeny statistical time, ranging from 1-60 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules#time_threshold WafAutoDenyRules#time_threshold}
  */
  readonly timeThreshold: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules tencentcloud_waf_auto_deny_rules}
*/
export class WafAutoDenyRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_auto_deny_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafAutoDenyRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafAutoDenyRules to import
  * @param importFromId The id of the existing WafAutoDenyRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafAutoDenyRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_auto_deny_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_auto_deny_rules tencentcloud_waf_auto_deny_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafAutoDenyRulesConfig
  */
  public constructor(scope: Construct, id: string, config: WafAutoDenyRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_auto_deny_rules',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attackThreshold = config.attackThreshold;
    this._denyTimeThreshold = config.denyTimeThreshold;
    this._domain = config.domain;
    this._id = config.id;
    this._timeThreshold = config.timeThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_threshold - computed: false, optional: false, required: true
  private _attackThreshold?: number; 
  public get attackThreshold() {
    return this.getNumberAttribute('attack_threshold');
  }
  public set attackThreshold(value: number) {
    this._attackThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackThresholdInput() {
    return this._attackThreshold;
  }

  // deny_time_threshold - computed: false, optional: false, required: true
  private _denyTimeThreshold?: number; 
  public get denyTimeThreshold() {
    return this.getNumberAttribute('deny_time_threshold');
  }
  public set denyTimeThreshold(value: number) {
    this._denyTimeThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTimeThresholdInput() {
    return this._denyTimeThreshold;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // time_threshold - computed: false, optional: false, required: true
  private _timeThreshold?: number; 
  public get timeThreshold() {
    return this.getNumberAttribute('time_threshold');
  }
  public set timeThreshold(value: number) {
    this._timeThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeThresholdInput() {
    return this._timeThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_threshold: cdktf.numberToTerraform(this._attackThreshold),
      deny_time_threshold: cdktf.numberToTerraform(this._denyTimeThreshold),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      time_threshold: cdktf.numberToTerraform(this._timeThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_threshold: {
        value: cdktf.numberToHclTerraform(this._attackThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deny_time_threshold: {
        value: cdktf.numberToHclTerraform(this._denyTimeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      time_threshold: {
        value: cdktf.numberToHclTerraform(this._timeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
