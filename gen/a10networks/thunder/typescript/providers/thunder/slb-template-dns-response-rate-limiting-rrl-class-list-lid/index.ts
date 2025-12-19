// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsResponseRateLimitingRrlClassListLidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#dns_name SlbTemplateDnsResponseRateLimitingRrlClassListLid#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#id SlbTemplateDnsResponseRateLimitingRrlClassListLid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'log-only': Only log rate-limiting, do not actually rate limit. Requires enable-log configuration; 'rate-limit': Rate-Limit based on configuration (Default); 'whitelist': Whitelist, disable rate-limiting;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_action SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_action}
  */
  readonly lidAction?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_enable_log SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_enable_log}
  */
  readonly lidEnableLog?: number;
  /**
  * IP subnet mask (response rate by IP subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_match_subnet SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_match_subnet}
  */
  readonly lidMatchSubnet?: string;
  /**
  * IPV6 subnet mask (response rate by IPv6 subnet mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_match_subnet_v6 SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_match_subnet_v6}
  */
  readonly lidMatchSubnetV6?: number;
  /**
  * Queries from entries whose NX Responses exceeding this rate within the window will be dropped (default 5 per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_nx_response_rate SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_nx_response_rate}
  */
  readonly lidNxResponseRate?: number;
  /**
  * Responses exceeding this rate within the window will be dropped (default 5 per second), 0 for unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_response_rate SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_response_rate}
  */
  readonly lidResponseRate?: number;
  /**
  * Every n'th response that would be rate-limited will be let through instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_slip_rate SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_slip_rate}
  */
  readonly lidSlipRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_src_ip_only SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_src_ip_only}
  */
  readonly lidSrcIpOnly?: number;
  /**
  * Every n'th response that would be rate-limited will respond with TC bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_tc_rate SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_tc_rate}
  */
  readonly lidTcRate?: number;
  /**
  * Rate-Limiting Interval in Seconds (default is one)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lid_window SlbTemplateDnsResponseRateLimitingRrlClassListLid#lid_window}
  */
  readonly lidWindow?: number;
  /**
  * Specify a limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#lidnum SlbTemplateDnsResponseRateLimitingRrlClassListLid#lidnum}
  */
  readonly lidnum: number;
  /**
  * Rrl_class_list_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#rrl_class_list_name SlbTemplateDnsResponseRateLimitingRrlClassListLid#rrl_class_list_name}
  */
  readonly rrlClassListName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#user_tag SlbTemplateDnsResponseRateLimitingRrlClassListLid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#uuid SlbTemplateDnsResponseRateLimitingRrlClassListLid#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid thunder_slb_template_dns_response_rate_limiting_rrl_class_list_lid}
*/
export class SlbTemplateDnsResponseRateLimitingRrlClassListLid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_response_rate_limiting_rrl_class_list_lid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsResponseRateLimitingRrlClassListLid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsResponseRateLimitingRrlClassListLid to import
  * @param importFromId The id of the existing SlbTemplateDnsResponseRateLimitingRrlClassListLid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsResponseRateLimitingRrlClassListLid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_response_rate_limiting_rrl_class_list_lid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_response_rate_limiting_rrl_class_list_lid thunder_slb_template_dns_response_rate_limiting_rrl_class_list_lid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsResponseRateLimitingRrlClassListLidConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsResponseRateLimitingRrlClassListLidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_response_rate_limiting_rrl_class_list_lid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._lidAction = config.lidAction;
    this._lidEnableLog = config.lidEnableLog;
    this._lidMatchSubnet = config.lidMatchSubnet;
    this._lidMatchSubnetV6 = config.lidMatchSubnetV6;
    this._lidNxResponseRate = config.lidNxResponseRate;
    this._lidResponseRate = config.lidResponseRate;
    this._lidSlipRate = config.lidSlipRate;
    this._lidSrcIpOnly = config.lidSrcIpOnly;
    this._lidTcRate = config.lidTcRate;
    this._lidWindow = config.lidWindow;
    this._lidnum = config.lidnum;
    this._rrlClassListName = config.rrlClassListName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // lid_action - computed: false, optional: true, required: false
  private _lidAction?: string; 
  public get lidAction() {
    return this.getStringAttribute('lid_action');
  }
  public set lidAction(value: string) {
    this._lidAction = value;
  }
  public resetLidAction() {
    this._lidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidActionInput() {
    return this._lidAction;
  }

  // lid_enable_log - computed: false, optional: true, required: false
  private _lidEnableLog?: number; 
  public get lidEnableLog() {
    return this.getNumberAttribute('lid_enable_log');
  }
  public set lidEnableLog(value: number) {
    this._lidEnableLog = value;
  }
  public resetLidEnableLog() {
    this._lidEnableLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidEnableLogInput() {
    return this._lidEnableLog;
  }

  // lid_match_subnet - computed: false, optional: true, required: false
  private _lidMatchSubnet?: string; 
  public get lidMatchSubnet() {
    return this.getStringAttribute('lid_match_subnet');
  }
  public set lidMatchSubnet(value: string) {
    this._lidMatchSubnet = value;
  }
  public resetLidMatchSubnet() {
    this._lidMatchSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidMatchSubnetInput() {
    return this._lidMatchSubnet;
  }

  // lid_match_subnet_v6 - computed: false, optional: true, required: false
  private _lidMatchSubnetV6?: number; 
  public get lidMatchSubnetV6() {
    return this.getNumberAttribute('lid_match_subnet_v6');
  }
  public set lidMatchSubnetV6(value: number) {
    this._lidMatchSubnetV6 = value;
  }
  public resetLidMatchSubnetV6() {
    this._lidMatchSubnetV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidMatchSubnetV6Input() {
    return this._lidMatchSubnetV6;
  }

  // lid_nx_response_rate - computed: false, optional: true, required: false
  private _lidNxResponseRate?: number; 
  public get lidNxResponseRate() {
    return this.getNumberAttribute('lid_nx_response_rate');
  }
  public set lidNxResponseRate(value: number) {
    this._lidNxResponseRate = value;
  }
  public resetLidNxResponseRate() {
    this._lidNxResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidNxResponseRateInput() {
    return this._lidNxResponseRate;
  }

  // lid_response_rate - computed: false, optional: true, required: false
  private _lidResponseRate?: number; 
  public get lidResponseRate() {
    return this.getNumberAttribute('lid_response_rate');
  }
  public set lidResponseRate(value: number) {
    this._lidResponseRate = value;
  }
  public resetLidResponseRate() {
    this._lidResponseRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidResponseRateInput() {
    return this._lidResponseRate;
  }

  // lid_slip_rate - computed: false, optional: true, required: false
  private _lidSlipRate?: number; 
  public get lidSlipRate() {
    return this.getNumberAttribute('lid_slip_rate');
  }
  public set lidSlipRate(value: number) {
    this._lidSlipRate = value;
  }
  public resetLidSlipRate() {
    this._lidSlipRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidSlipRateInput() {
    return this._lidSlipRate;
  }

  // lid_src_ip_only - computed: false, optional: true, required: false
  private _lidSrcIpOnly?: number; 
  public get lidSrcIpOnly() {
    return this.getNumberAttribute('lid_src_ip_only');
  }
  public set lidSrcIpOnly(value: number) {
    this._lidSrcIpOnly = value;
  }
  public resetLidSrcIpOnly() {
    this._lidSrcIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidSrcIpOnlyInput() {
    return this._lidSrcIpOnly;
  }

  // lid_tc_rate - computed: false, optional: true, required: false
  private _lidTcRate?: number; 
  public get lidTcRate() {
    return this.getNumberAttribute('lid_tc_rate');
  }
  public set lidTcRate(value: number) {
    this._lidTcRate = value;
  }
  public resetLidTcRate() {
    this._lidTcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidTcRateInput() {
    return this._lidTcRate;
  }

  // lid_window - computed: false, optional: true, required: false
  private _lidWindow?: number; 
  public get lidWindow() {
    return this.getNumberAttribute('lid_window');
  }
  public set lidWindow(value: number) {
    this._lidWindow = value;
  }
  public resetLidWindow() {
    this._lidWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidWindowInput() {
    return this._lidWindow;
  }

  // lidnum - computed: false, optional: false, required: true
  private _lidnum?: number; 
  public get lidnum() {
    return this.getNumberAttribute('lidnum');
  }
  public set lidnum(value: number) {
    this._lidnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidnumInput() {
    return this._lidnum;
  }

  // rrl_class_list_name - computed: false, optional: false, required: true
  private _rrlClassListName?: string; 
  public get rrlClassListName() {
    return this.getStringAttribute('rrl_class_list_name');
  }
  public set rrlClassListName(value: string) {
    this._rrlClassListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rrlClassListNameInput() {
    return this._rrlClassListName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      lid_action: cdktf.stringToTerraform(this._lidAction),
      lid_enable_log: cdktf.numberToTerraform(this._lidEnableLog),
      lid_match_subnet: cdktf.stringToTerraform(this._lidMatchSubnet),
      lid_match_subnet_v6: cdktf.numberToTerraform(this._lidMatchSubnetV6),
      lid_nx_response_rate: cdktf.numberToTerraform(this._lidNxResponseRate),
      lid_response_rate: cdktf.numberToTerraform(this._lidResponseRate),
      lid_slip_rate: cdktf.numberToTerraform(this._lidSlipRate),
      lid_src_ip_only: cdktf.numberToTerraform(this._lidSrcIpOnly),
      lid_tc_rate: cdktf.numberToTerraform(this._lidTcRate),
      lid_window: cdktf.numberToTerraform(this._lidWindow),
      lidnum: cdktf.numberToTerraform(this._lidnum),
      rrl_class_list_name: cdktf.stringToTerraform(this._rrlClassListName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      lid_action: {
        value: cdktf.stringToHclTerraform(this._lidAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid_enable_log: {
        value: cdktf.numberToHclTerraform(this._lidEnableLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_match_subnet: {
        value: cdktf.stringToHclTerraform(this._lidMatchSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid_match_subnet_v6: {
        value: cdktf.numberToHclTerraform(this._lidMatchSubnetV6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_nx_response_rate: {
        value: cdktf.numberToHclTerraform(this._lidNxResponseRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_response_rate: {
        value: cdktf.numberToHclTerraform(this._lidResponseRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_slip_rate: {
        value: cdktf.numberToHclTerraform(this._lidSlipRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_src_ip_only: {
        value: cdktf.numberToHclTerraform(this._lidSrcIpOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_tc_rate: {
        value: cdktf.numberToHclTerraform(this._lidTcRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lid_window: {
        value: cdktf.numberToHclTerraform(this._lidWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lidnum: {
        value: cdktf.numberToHclTerraform(this._lidnum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rrl_class_list_name: {
        value: cdktf.stringToHclTerraform(this._rrlClassListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
