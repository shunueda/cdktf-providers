// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafOwaspRuleStatusConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#domain WafOwaspRuleStatusConfig#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#id WafOwaspRuleStatusConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reason for modification. valid values: 0: none (compatibility record is empty). 1: avoid false positives due to business characteristics. 2: reporting of rule-based false positives. 3: gray release of core business rules. 4: others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#reason WafOwaspRuleStatusConfig#reason}
  */
  readonly reason?: number;
  /**
  * Rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#rule_id WafOwaspRuleStatusConfig#rule_id}
  */
  readonly ruleId: string;
  /**
  * Rule switch. valid values: 0 (disabled), 1 (enabled), 2 (observation only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#rule_status WafOwaspRuleStatusConfig#rule_status}
  */
  readonly ruleStatus: number;
  /**
  * If reverse requires the input of data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#type_id WafOwaspRuleStatusConfig#type_id}
  */
  readonly typeId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config tencentcloud_waf_owasp_rule_status_config}
*/
export class WafOwaspRuleStatusConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_owasp_rule_status_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafOwaspRuleStatusConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafOwaspRuleStatusConfig to import
  * @param importFromId The id of the existing WafOwaspRuleStatusConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafOwaspRuleStatusConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_owasp_rule_status_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_owasp_rule_status_config tencentcloud_waf_owasp_rule_status_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafOwaspRuleStatusConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WafOwaspRuleStatusConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_owasp_rule_status_config',
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
    this._domain = config.domain;
    this._id = config.id;
    this._reason = config.reason;
    this._ruleId = config.ruleId;
    this._ruleStatus = config.ruleStatus;
    this._typeId = config.typeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cve_id - computed: true, optional: false, required: false
  public get cveId() {
    return this.getStringAttribute('cve_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getNumberAttribute('locked');
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: number; 
  public get reason() {
    return this.getNumberAttribute('reason');
  }
  public set reason(value: number) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_status - computed: false, optional: false, required: true
  private _ruleStatus?: number; 
  public get ruleStatus() {
    return this.getNumberAttribute('rule_status');
  }
  public set ruleStatus(value: number) {
    this._ruleStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
  }

  // type_id - computed: true, optional: true, required: false
  private _typeId?: number; 
  public get typeId() {
    return this.getNumberAttribute('type_id');
  }
  public set typeId(value: number) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // vul_level - computed: true, optional: false, required: false
  public get vulLevel() {
    return this.getNumberAttribute('vul_level');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      reason: cdktf.numberToTerraform(this._reason),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      rule_status: cdktf.numberToTerraform(this._ruleStatus),
      type_id: cdktf.numberToTerraform(this._typeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      reason: {
        value: cdktf.numberToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_status: {
        value: cdktf.numberToHclTerraform(this._ruleStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_id: {
        value: cdktf.numberToHclTerraform(this._typeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
