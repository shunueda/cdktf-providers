// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SddpRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#category SddpRule#category}
  */
  readonly category: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#content SddpRule#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#content_category SddpRule#content_category}
  */
  readonly contentCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#description SddpRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#id SddpRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#lang SddpRule#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#product_code SddpRule#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#product_id SddpRule#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#risk_level_id SddpRule#risk_level_id}
  */
  readonly riskLevelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#rule_name SddpRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#rule_type SddpRule#rule_type}
  */
  readonly ruleType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#stat_express SddpRule#stat_express}
  */
  readonly statExpress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#status SddpRule#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#target SddpRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#warn_level SddpRule#warn_level}
  */
  readonly warnLevel?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule alicloud_sddp_rule}
*/
export class SddpRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sddp_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SddpRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SddpRule to import
  * @param importFromId The id of the existing SddpRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SddpRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sddp_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sddp_rule alicloud_sddp_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SddpRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SddpRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sddp_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._content = config.content;
    this._contentCategory = config.contentCategory;
    this._description = config.description;
    this._id = config.id;
    this._lang = config.lang;
    this._productCode = config.productCode;
    this._productId = config.productId;
    this._riskLevelId = config.riskLevelId;
    this._ruleName = config.ruleName;
    this._ruleType = config.ruleType;
    this._statExpress = config.statExpress;
    this._status = config.status;
    this._target = config.target;
    this._warnLevel = config.warnLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_category - computed: true, optional: true, required: false
  private _contentCategory?: string; 
  public get contentCategory() {
    return this.getStringAttribute('content_category');
  }
  public set contentCategory(value: string) {
    this._contentCategory = value;
  }
  public resetContentCategory() {
    this._contentCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCategoryInput() {
    return this._contentCategory;
  }

  // custom_type - computed: true, optional: false, required: false
  public get customType() {
    return this.getNumberAttribute('custom_type');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // risk_level_id - computed: false, optional: true, required: false
  private _riskLevelId?: string; 
  public get riskLevelId() {
    return this.getStringAttribute('risk_level_id');
  }
  public set riskLevelId(value: string) {
    this._riskLevelId = value;
  }
  public resetRiskLevelId() {
    this._riskLevelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelIdInput() {
    return this._riskLevelId;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: number; 
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }
  public set ruleType(value: number) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // stat_express - computed: false, optional: true, required: false
  private _statExpress?: string; 
  public get statExpress() {
    return this.getStringAttribute('stat_express');
  }
  public set statExpress(value: string) {
    this._statExpress = value;
  }
  public resetStatExpress() {
    this._statExpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statExpressInput() {
    return this._statExpress;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // warn_level - computed: false, optional: true, required: false
  private _warnLevel?: number; 
  public get warnLevel() {
    return this.getNumberAttribute('warn_level');
  }
  public set warnLevel(value: number) {
    this._warnLevel = value;
  }
  public resetWarnLevel() {
    this._warnLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnLevelInput() {
    return this._warnLevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.numberToTerraform(this._category),
      content: cdktf.stringToTerraform(this._content),
      content_category: cdktf.stringToTerraform(this._contentCategory),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      product_code: cdktf.stringToTerraform(this._productCode),
      product_id: cdktf.stringToTerraform(this._productId),
      risk_level_id: cdktf.stringToTerraform(this._riskLevelId),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_type: cdktf.numberToTerraform(this._ruleType),
      stat_express: cdktf.stringToTerraform(this._statExpress),
      status: cdktf.numberToTerraform(this._status),
      target: cdktf.stringToTerraform(this._target),
      warn_level: cdktf.numberToTerraform(this._warnLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.numberToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_category: {
        value: cdktf.stringToHclTerraform(this._contentCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_level_id: {
        value: cdktf.stringToHclTerraform(this._riskLevelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_type: {
        value: cdktf.numberToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stat_express: {
        value: cdktf.stringToHclTerraform(this._statExpress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warn_level: {
        value: cdktf.numberToHclTerraform(this._warnLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
