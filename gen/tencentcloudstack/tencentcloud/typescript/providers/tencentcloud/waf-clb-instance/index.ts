// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafClbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to purchase API Security, 1: yes, 0: no. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#api_security WafClbInstance#api_security}
  */
  readonly apiSecurity?: number;
  /**
  * Auto renew flag, 1: enable, 0: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#auto_renew_flag WafClbInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Whether to purchase Bot management, 1: yes, 0: no. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#bot_management WafClbInstance#bot_management}
  */
  readonly botManagement?: number;
  /**
  * Is elastic billing enabled, 1: enable, 0: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#elastic_mode WafClbInstance#elastic_mode}
  */
  readonly elasticMode?: number;
  /**
  * Billing order parameters. support: premium_clb, enterprise_clb, ultimate_clb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#goods_category WafClbInstance#goods_category}
  */
  readonly goodsCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#id WafClbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Waf instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#instance_name WafClbInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * QPS Limit, Minimum setting 10000. Only `elastic_mode` is 1, can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#qps_limit WafClbInstance#qps_limit}
  */
  readonly qpsLimit?: number;
  /**
  * Time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#time_span WafClbInstance#time_span}
  */
  readonly timeSpan?: number;
  /**
  * Time unit, support d, m, y. d: day, m: month, y: year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#time_unit WafClbInstance#time_unit}
  */
  readonly timeUnit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance tencentcloud_waf_clb_instance}
*/
export class WafClbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_clb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafClbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafClbInstance to import
  * @param importFromId The id of the existing WafClbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafClbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_clb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/waf_clb_instance tencentcloud_waf_clb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafClbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: WafClbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_clb_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiSecurity = config.apiSecurity;
    this._autoRenewFlag = config.autoRenewFlag;
    this._botManagement = config.botManagement;
    this._elasticMode = config.elasticMode;
    this._goodsCategory = config.goodsCategory;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._qpsLimit = config.qpsLimit;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_security - computed: false, optional: true, required: false
  private _apiSecurity?: number; 
  public get apiSecurity() {
    return this.getNumberAttribute('api_security');
  }
  public set apiSecurity(value: number) {
    this._apiSecurity = value;
  }
  public resetApiSecurity() {
    this._apiSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecurityInput() {
    return this._apiSecurity;
  }

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // begin_time - computed: true, optional: false, required: false
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }

  // bot_management - computed: false, optional: true, required: false
  private _botManagement?: number; 
  public get botManagement() {
    return this.getNumberAttribute('bot_management');
  }
  public set botManagement(value: number) {
    this._botManagement = value;
  }
  public resetBotManagement() {
    this._botManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botManagementInput() {
    return this._botManagement;
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // elastic_mode - computed: false, optional: true, required: false
  private _elasticMode?: number; 
  public get elasticMode() {
    return this.getNumberAttribute('elastic_mode');
  }
  public set elasticMode(value: number) {
    this._elasticMode = value;
  }
  public resetElasticMode() {
    this._elasticMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticModeInput() {
    return this._elasticMode;
  }

  // goods_category - computed: false, optional: false, required: true
  private _goodsCategory?: string; 
  public get goodsCategory() {
    return this.getStringAttribute('goods_category');
  }
  public set goodsCategory(value: string) {
    this._goodsCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodsCategoryInput() {
    return this._goodsCategory;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // qps_limit - computed: true, optional: true, required: false
  private _qpsLimit?: number; 
  public get qpsLimit() {
    return this.getNumberAttribute('qps_limit');
  }
  public set qpsLimit(value: number) {
    this._qpsLimit = value;
  }
  public resetQpsLimit() {
    this._qpsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsLimitInput() {
    return this._qpsLimit;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // valid_time - computed: true, optional: false, required: false
  public get validTime() {
    return this.getStringAttribute('valid_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_security: cdktf.numberToTerraform(this._apiSecurity),
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      bot_management: cdktf.numberToTerraform(this._botManagement),
      elastic_mode: cdktf.numberToTerraform(this._elasticMode),
      goods_category: cdktf.stringToTerraform(this._goodsCategory),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      qps_limit: cdktf.numberToTerraform(this._qpsLimit),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_security: {
        value: cdktf.numberToHclTerraform(this._apiSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bot_management: {
        value: cdktf.numberToHclTerraform(this._botManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elastic_mode: {
        value: cdktf.numberToHclTerraform(this._elasticMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      goods_category: {
        value: cdktf.stringToHclTerraform(this._goodsCategory),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qps_limit: {
        value: cdktf.numberToHclTerraform(this._qpsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
