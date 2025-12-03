// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafOwaspRuleTypeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#domain WafOwaspRuleTypeConfig#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#id WafOwaspRuleTypeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protection mode of the rule type. valid values: 0 (observation), 1 (intercept).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#rule_type_action WafOwaspRuleTypeConfig#rule_type_action}
  */
  readonly ruleTypeAction?: number;
  /**
  * Protection level of the rule. valid values: 100 (loose), 200 (normal), 300 (strict), 400 (ultra-strict).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#rule_type_level WafOwaspRuleTypeConfig#rule_type_level}
  */
  readonly ruleTypeLevel?: number;
  /**
  * The switch status of the rule type. valid values: 0 (disabled), 1 (enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#rule_type_status WafOwaspRuleTypeConfig#rule_type_status}
  */
  readonly ruleTypeStatus?: number;
  /**
  * Rule type ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#type_id WafOwaspRuleTypeConfig#type_id}
  */
  readonly typeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config tencentcloud_waf_owasp_rule_type_config}
*/
export class WafOwaspRuleTypeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_owasp_rule_type_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafOwaspRuleTypeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafOwaspRuleTypeConfig to import
  * @param importFromId The id of the existing WafOwaspRuleTypeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafOwaspRuleTypeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_owasp_rule_type_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/waf_owasp_rule_type_config tencentcloud_waf_owasp_rule_type_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafOwaspRuleTypeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WafOwaspRuleTypeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_owasp_rule_type_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._ruleTypeAction = config.ruleTypeAction;
    this._ruleTypeLevel = config.ruleTypeLevel;
    this._ruleTypeStatus = config.ruleTypeStatus;
    this._typeId = config.typeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_rule - computed: true, optional: false, required: false
  public get activeRule() {
    return this.getNumberAttribute('active_rule');
  }

  // classification - computed: true, optional: false, required: false
  public get classification() {
    return this.getStringAttribute('classification');
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

  // rule_type_action - computed: true, optional: true, required: false
  private _ruleTypeAction?: number; 
  public get ruleTypeAction() {
    return this.getNumberAttribute('rule_type_action');
  }
  public set ruleTypeAction(value: number) {
    this._ruleTypeAction = value;
  }
  public resetRuleTypeAction() {
    this._ruleTypeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeActionInput() {
    return this._ruleTypeAction;
  }

  // rule_type_level - computed: true, optional: true, required: false
  private _ruleTypeLevel?: number; 
  public get ruleTypeLevel() {
    return this.getNumberAttribute('rule_type_level');
  }
  public set ruleTypeLevel(value: number) {
    this._ruleTypeLevel = value;
  }
  public resetRuleTypeLevel() {
    this._ruleTypeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeLevelInput() {
    return this._ruleTypeLevel;
  }

  // rule_type_name - computed: true, optional: false, required: false
  public get ruleTypeName() {
    return this.getStringAttribute('rule_type_name');
  }

  // rule_type_status - computed: true, optional: true, required: false
  private _ruleTypeStatus?: number; 
  public get ruleTypeStatus() {
    return this.getNumberAttribute('rule_type_status');
  }
  public set ruleTypeStatus(value: number) {
    this._ruleTypeStatus = value;
  }
  public resetRuleTypeStatus() {
    this._ruleTypeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeStatusInput() {
    return this._ruleTypeStatus;
  }

  // total_rule - computed: true, optional: false, required: false
  public get totalRule() {
    return this.getNumberAttribute('total_rule');
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      rule_type_action: cdktf.numberToTerraform(this._ruleTypeAction),
      rule_type_level: cdktf.numberToTerraform(this._ruleTypeLevel),
      rule_type_status: cdktf.numberToTerraform(this._ruleTypeStatus),
      type_id: cdktf.stringToTerraform(this._typeId),
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
      rule_type_action: {
        value: cdktf.numberToHclTerraform(this._ruleTypeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_type_level: {
        value: cdktf.numberToHclTerraform(this._ruleTypeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_type_status: {
        value: cdktf.numberToHclTerraform(this._ruleTypeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_id: {
        value: cdktf.stringToHclTerraform(this._typeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
