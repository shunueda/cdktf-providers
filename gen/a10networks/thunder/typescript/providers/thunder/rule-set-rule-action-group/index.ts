// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleSetRuleActionGroupAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply CGNv6 policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#cgnv6 RuleSetRuleActionGroupA#cgnv6}
  */
  readonly cgnv6?: number;
  /**
  * 'lsn-lid': Apply specified CGNv6 LSN LID;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#cgnv6_ds_lite RuleSetRuleActionGroupA#cgnv6_ds_lite}
  */
  readonly cgnv6DsLite?: string;
  /**
  * LSN LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#cgnv6_ds_lite_lsn_lid RuleSetRuleActionGroupA#cgnv6_ds_lite_lsn_lid}
  */
  readonly cgnv6DsLiteLsnLid?: number;
  /**
  * LSN LID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#cgnv6_lsn_lid RuleSetRuleActionGroupA#cgnv6_lsn_lid}
  */
  readonly cgnv6LsnLid?: number;
  /**
  * 'lsn-lid': Apply specified CGNv6 LSN LID; 'fixed-nat': Apply CGNv6 Fixed NAT; 'ds-lite': Apply CGNv6 DS-Lite;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#cgnv6_policy RuleSetRuleActionGroupA#cgnv6_policy}
  */
  readonly cgnv6Policy?: string;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#deny_fw_log RuleSetRuleActionGroupA#deny_fw_log}
  */
  readonly denyFwLog?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#deny_log RuleSetRuleActionGroupA#deny_log}
  */
  readonly denyLog?: number;
  /**
  * 'fw-logging-template': Logging with specified fw template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#deny_log_template_type RuleSetRuleActionGroupA#deny_log_template_type}
  */
  readonly denyLogTemplateType?: string;
  /**
  * Limit policy Template (only works for inbound rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#deny_reset_limit_policy RuleSetRuleActionGroupA#deny_reset_limit_policy}
  */
  readonly denyResetLimitPolicy?: number;
  /**
  * DSCP Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#dscp_number RuleSetRuleActionGroupA#dscp_number}
  */
  readonly dscpNumber?: number;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#dscp_value RuleSetRuleActionGroupA#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * Forward packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#forward RuleSetRuleActionGroupA#forward}
  */
  readonly forward?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#id RuleSetRuleActionGroupA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable DS-Lite tunnel inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#inspect_payload RuleSetRuleActionGroupA#inspect_payload}
  */
  readonly inspectPayload?: number;
  /**
  * Apply IPsec encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#ipsec RuleSetRuleActionGroupA#ipsec}
  */
  readonly ipsec?: number;
  /**
  * Apply IPsec Group encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#ipsec_group RuleSetRuleActionGroupA#ipsec_group}
  */
  readonly ipsecGroup?: number;
  /**
  * Listen on port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#listen_on_port RuleSetRuleActionGroupA#listen_on_port}
  */
  readonly listenOnPort?: number;
  /**
  * on-timeout for Syn-cookie (Timeout in seconds, default is 120 seconds (2 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#on_timeout RuleSetRuleActionGroupA#on_timeout}
  */
  readonly onTimeout?: number;
  /**
  * Limit policy Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_limit_policy RuleSetRuleActionGroupA#permit_limit_policy}
  */
  readonly permitLimitPolicy?: number;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_log RuleSetRuleActionGroupA#permit_log}
  */
  readonly permitLog?: number;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default:off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_respond_to_user_mac RuleSetRuleActionGroupA#permit_respond_to_user_mac}
  */
  readonly permitRespondToUserMac?: number;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#reset_fw_log RuleSetRuleActionGroupA#reset_fw_log}
  */
  readonly resetFwLog?: string;
  /**
  * Enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#reset_log RuleSetRuleActionGroupA#reset_log}
  */
  readonly resetLog?: number;
  /**
  * 'fw-logging-template': Logging with specified fw template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#reset_log_template_type RuleSetRuleActionGroupA#reset_log_template_type}
  */
  readonly resetLogTemplateType?: string;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default:off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#reset_respond_to_user_mac RuleSetRuleActionGroupA#reset_respond_to_user_mac}
  */
  readonly resetRespondToUserMac?: number;
  /**
  * Rule_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#rule_name RuleSetRuleActionGroupA#rule_name}
  */
  readonly ruleName: string;
  /**
  * Rule_set_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#rule_set_name RuleSetRuleActionGroupA#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * DSCP setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#set_dscp RuleSetRuleActionGroupA#set_dscp}
  */
  readonly setDscp?: number;
  /**
  * Skip Unicast Reverse Path Forwarding check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#skip_urpf_check RuleSetRuleActionGroupA#skip_urpf_check}
  */
  readonly skipUrpfCheck?: number;
  /**
  * Configure Firewall rule Syn-Cookie Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#syn_cookie RuleSetRuleActionGroupA#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#syn_cookie_enable RuleSetRuleActionGroupA#syn_cookie_enable}
  */
  readonly synCookieEnable?: string;
  /**
  * Firewall rule TCP parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#tcp RuleSetRuleActionGroupA#tcp}
  */
  readonly tcp?: number;
  /**
  * Decimal number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#threshold_val RuleSetRuleActionGroupA#threshold_val}
  */
  readonly thresholdVal?: number;
  /**
  * 'permit': permit; 'deny': deny; 'reset': reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#type RuleSetRuleActionGroupA#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#uuid RuleSetRuleActionGroupA#uuid}
  */
  readonly uuid?: string;
  /**
  * VPN IPsec Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#vpn_ipsec_group_name RuleSetRuleActionGroupA#vpn_ipsec_group_name}
  */
  readonly vpnIpsecGroupName?: string;
  /**
  * VPN IPsec name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#vpn_ipsec_name RuleSetRuleActionGroupA#vpn_ipsec_name}
  */
  readonly vpnIpsecName?: string;
  /**
  * logging_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#logging_template_list RuleSetRuleActionGroupA#logging_template_list}
  */
  readonly loggingTemplateList?: RuleSetRuleActionGroupLoggingTemplateListStructA[] | cdktf.IResolvable;
}
export interface RuleSetRuleActionGroupLoggingTemplateListStructA {
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_cgnv6_log RuleSetRuleActionGroupA#permit_cgnv6_log}
  */
  readonly permitCgnv6Log?: string;
  /**
  * Logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_fw_log RuleSetRuleActionGroupA#permit_fw_log}
  */
  readonly permitFwLog?: string;
  /**
  * 'fw-logging-template': Logging with specified fw template; 'cgnv6-logging-template': Logging with specified cgnv6 template; 'netflow-monitor': Logging with specified netflow/ipfix monitor;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_log_template_type RuleSetRuleActionGroupA#permit_log_template_type}
  */
  readonly permitLogTemplateType?: string;
  /**
  * Name of netflow monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#permit_netflow_log RuleSetRuleActionGroupA#permit_netflow_log}
  */
  readonly permitNetflowLog?: string;
}

export function ruleSetRuleActionGroupLoggingTemplateListStructAToTerraform(struct?: RuleSetRuleActionGroupLoggingTemplateListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permit_cgnv6_log: cdktf.stringToTerraform(struct!.permitCgnv6Log),
    permit_fw_log: cdktf.stringToTerraform(struct!.permitFwLog),
    permit_log_template_type: cdktf.stringToTerraform(struct!.permitLogTemplateType),
    permit_netflow_log: cdktf.stringToTerraform(struct!.permitNetflowLog),
  }
}


export function ruleSetRuleActionGroupLoggingTemplateListStructAToHclTerraform(struct?: RuleSetRuleActionGroupLoggingTemplateListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permit_cgnv6_log: {
      value: cdktf.stringToHclTerraform(struct!.permitCgnv6Log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_fw_log: {
      value: cdktf.stringToHclTerraform(struct!.permitFwLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_log_template_type: {
      value: cdktf.stringToHclTerraform(struct!.permitLogTemplateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_netflow_log: {
      value: cdktf.stringToHclTerraform(struct!.permitNetflowLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleSetRuleActionGroupLoggingTemplateListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RuleSetRuleActionGroupLoggingTemplateListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permitCgnv6Log !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitCgnv6Log = this._permitCgnv6Log;
    }
    if (this._permitFwLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFwLog = this._permitFwLog;
    }
    if (this._permitLogTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLogTemplateType = this._permitLogTemplateType;
    }
    if (this._permitNetflowLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNetflowLog = this._permitNetflowLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleSetRuleActionGroupLoggingTemplateListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permitCgnv6Log = undefined;
      this._permitFwLog = undefined;
      this._permitLogTemplateType = undefined;
      this._permitNetflowLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permitCgnv6Log = value.permitCgnv6Log;
      this._permitFwLog = value.permitFwLog;
      this._permitLogTemplateType = value.permitLogTemplateType;
      this._permitNetflowLog = value.permitNetflowLog;
    }
  }

  // permit_cgnv6_log - computed: false, optional: true, required: false
  private _permitCgnv6Log?: string; 
  public get permitCgnv6Log() {
    return this.getStringAttribute('permit_cgnv6_log');
  }
  public set permitCgnv6Log(value: string) {
    this._permitCgnv6Log = value;
  }
  public resetPermitCgnv6Log() {
    this._permitCgnv6Log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitCgnv6LogInput() {
    return this._permitCgnv6Log;
  }

  // permit_fw_log - computed: false, optional: true, required: false
  private _permitFwLog?: string; 
  public get permitFwLog() {
    return this.getStringAttribute('permit_fw_log');
  }
  public set permitFwLog(value: string) {
    this._permitFwLog = value;
  }
  public resetPermitFwLog() {
    this._permitFwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFwLogInput() {
    return this._permitFwLog;
  }

  // permit_log_template_type - computed: false, optional: true, required: false
  private _permitLogTemplateType?: string; 
  public get permitLogTemplateType() {
    return this.getStringAttribute('permit_log_template_type');
  }
  public set permitLogTemplateType(value: string) {
    this._permitLogTemplateType = value;
  }
  public resetPermitLogTemplateType() {
    this._permitLogTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogTemplateTypeInput() {
    return this._permitLogTemplateType;
  }

  // permit_netflow_log - computed: false, optional: true, required: false
  private _permitNetflowLog?: string; 
  public get permitNetflowLog() {
    return this.getStringAttribute('permit_netflow_log');
  }
  public set permitNetflowLog(value: string) {
    this._permitNetflowLog = value;
  }
  public resetPermitNetflowLog() {
    this._permitNetflowLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNetflowLogInput() {
    return this._permitNetflowLog;
  }
}

export class RuleSetRuleActionGroupLoggingTemplateListStructAList extends cdktf.ComplexList {
  public internalValue? : RuleSetRuleActionGroupLoggingTemplateListStructA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RuleSetRuleActionGroupLoggingTemplateListStructAOutputReference {
    return new RuleSetRuleActionGroupLoggingTemplateListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group thunder_rule_set_rule_action_group}
*/
export class RuleSetRuleActionGroupA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_rule_action_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleSetRuleActionGroupA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleSetRuleActionGroupA to import
  * @param importFromId The id of the existing RuleSetRuleActionGroupA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleSetRuleActionGroupA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_rule_action_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/rule_set_rule_action_group thunder_rule_set_rule_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleSetRuleActionGroupAConfig
  */
  public constructor(scope: Construct, id: string, config: RuleSetRuleActionGroupAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_rule_action_group',
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
    this._cgnv6 = config.cgnv6;
    this._cgnv6DsLite = config.cgnv6DsLite;
    this._cgnv6DsLiteLsnLid = config.cgnv6DsLiteLsnLid;
    this._cgnv6LsnLid = config.cgnv6LsnLid;
    this._cgnv6Policy = config.cgnv6Policy;
    this._denyFwLog = config.denyFwLog;
    this._denyLog = config.denyLog;
    this._denyLogTemplateType = config.denyLogTemplateType;
    this._denyResetLimitPolicy = config.denyResetLimitPolicy;
    this._dscpNumber = config.dscpNumber;
    this._dscpValue = config.dscpValue;
    this._forward = config.forward;
    this._id = config.id;
    this._inspectPayload = config.inspectPayload;
    this._ipsec = config.ipsec;
    this._ipsecGroup = config.ipsecGroup;
    this._listenOnPort = config.listenOnPort;
    this._onTimeout = config.onTimeout;
    this._permitLimitPolicy = config.permitLimitPolicy;
    this._permitLog = config.permitLog;
    this._permitRespondToUserMac = config.permitRespondToUserMac;
    this._resetFwLog = config.resetFwLog;
    this._resetLog = config.resetLog;
    this._resetLogTemplateType = config.resetLogTemplateType;
    this._resetRespondToUserMac = config.resetRespondToUserMac;
    this._ruleName = config.ruleName;
    this._ruleSetName = config.ruleSetName;
    this._setDscp = config.setDscp;
    this._skipUrpfCheck = config.skipUrpfCheck;
    this._synCookie = config.synCookie;
    this._synCookieEnable = config.synCookieEnable;
    this._tcp = config.tcp;
    this._thresholdVal = config.thresholdVal;
    this._type = config.type;
    this._uuid = config.uuid;
    this._vpnIpsecGroupName = config.vpnIpsecGroupName;
    this._vpnIpsecName = config.vpnIpsecName;
    this._loggingTemplateList.internalValue = config.loggingTemplateList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cgnv6 - computed: false, optional: true, required: false
  private _cgnv6?: number; 
  public get cgnv6() {
    return this.getNumberAttribute('cgnv6');
  }
  public set cgnv6(value: number) {
    this._cgnv6 = value;
  }
  public resetCgnv6() {
    this._cgnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6Input() {
    return this._cgnv6;
  }

  // cgnv6_ds_lite - computed: false, optional: true, required: false
  private _cgnv6DsLite?: string; 
  public get cgnv6DsLite() {
    return this.getStringAttribute('cgnv6_ds_lite');
  }
  public set cgnv6DsLite(value: string) {
    this._cgnv6DsLite = value;
  }
  public resetCgnv6DsLite() {
    this._cgnv6DsLite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteInput() {
    return this._cgnv6DsLite;
  }

  // cgnv6_ds_lite_lsn_lid - computed: false, optional: true, required: false
  private _cgnv6DsLiteLsnLid?: number; 
  public get cgnv6DsLiteLsnLid() {
    return this.getNumberAttribute('cgnv6_ds_lite_lsn_lid');
  }
  public set cgnv6DsLiteLsnLid(value: number) {
    this._cgnv6DsLiteLsnLid = value;
  }
  public resetCgnv6DsLiteLsnLid() {
    this._cgnv6DsLiteLsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6DsLiteLsnLidInput() {
    return this._cgnv6DsLiteLsnLid;
  }

  // cgnv6_lsn_lid - computed: false, optional: true, required: false
  private _cgnv6LsnLid?: number; 
  public get cgnv6LsnLid() {
    return this.getNumberAttribute('cgnv6_lsn_lid');
  }
  public set cgnv6LsnLid(value: number) {
    this._cgnv6LsnLid = value;
  }
  public resetCgnv6LsnLid() {
    this._cgnv6LsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6LsnLidInput() {
    return this._cgnv6LsnLid;
  }

  // cgnv6_policy - computed: false, optional: true, required: false
  private _cgnv6Policy?: string; 
  public get cgnv6Policy() {
    return this.getStringAttribute('cgnv6_policy');
  }
  public set cgnv6Policy(value: string) {
    this._cgnv6Policy = value;
  }
  public resetCgnv6Policy() {
    this._cgnv6Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6PolicyInput() {
    return this._cgnv6Policy;
  }

  // deny_fw_log - computed: false, optional: true, required: false
  private _denyFwLog?: string; 
  public get denyFwLog() {
    return this.getStringAttribute('deny_fw_log');
  }
  public set denyFwLog(value: string) {
    this._denyFwLog = value;
  }
  public resetDenyFwLog() {
    this._denyFwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFwLogInput() {
    return this._denyFwLog;
  }

  // deny_log - computed: false, optional: true, required: false
  private _denyLog?: number; 
  public get denyLog() {
    return this.getNumberAttribute('deny_log');
  }
  public set denyLog(value: number) {
    this._denyLog = value;
  }
  public resetDenyLog() {
    this._denyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogInput() {
    return this._denyLog;
  }

  // deny_log_template_type - computed: false, optional: true, required: false
  private _denyLogTemplateType?: string; 
  public get denyLogTemplateType() {
    return this.getStringAttribute('deny_log_template_type');
  }
  public set denyLogTemplateType(value: string) {
    this._denyLogTemplateType = value;
  }
  public resetDenyLogTemplateType() {
    this._denyLogTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogTemplateTypeInput() {
    return this._denyLogTemplateType;
  }

  // deny_reset_limit_policy - computed: false, optional: true, required: false
  private _denyResetLimitPolicy?: number; 
  public get denyResetLimitPolicy() {
    return this.getNumberAttribute('deny_reset_limit_policy');
  }
  public set denyResetLimitPolicy(value: number) {
    this._denyResetLimitPolicy = value;
  }
  public resetDenyResetLimitPolicy() {
    this._denyResetLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyResetLimitPolicyInput() {
    return this._denyResetLimitPolicy;
  }

  // dscp_number - computed: false, optional: true, required: false
  private _dscpNumber?: number; 
  public get dscpNumber() {
    return this.getNumberAttribute('dscp_number');
  }
  public set dscpNumber(value: number) {
    this._dscpNumber = value;
  }
  public resetDscpNumber() {
    this._dscpNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpNumberInput() {
    return this._dscpNumber;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: number; 
  public get forward() {
    return this.getNumberAttribute('forward');
  }
  public set forward(value: number) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
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

  // inspect_payload - computed: false, optional: true, required: false
  private _inspectPayload?: number; 
  public get inspectPayload() {
    return this.getNumberAttribute('inspect_payload');
  }
  public set inspectPayload(value: number) {
    this._inspectPayload = value;
  }
  public resetInspectPayload() {
    this._inspectPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectPayloadInput() {
    return this._inspectPayload;
  }

  // ipsec - computed: false, optional: true, required: false
  private _ipsec?: number; 
  public get ipsec() {
    return this.getNumberAttribute('ipsec');
  }
  public set ipsec(value: number) {
    this._ipsec = value;
  }
  public resetIpsec() {
    this._ipsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInput() {
    return this._ipsec;
  }

  // ipsec_group - computed: false, optional: true, required: false
  private _ipsecGroup?: number; 
  public get ipsecGroup() {
    return this.getNumberAttribute('ipsec_group');
  }
  public set ipsecGroup(value: number) {
    this._ipsecGroup = value;
  }
  public resetIpsecGroup() {
    this._ipsecGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecGroupInput() {
    return this._ipsecGroup;
  }

  // listen_on_port - computed: false, optional: true, required: false
  private _listenOnPort?: number; 
  public get listenOnPort() {
    return this.getNumberAttribute('listen_on_port');
  }
  public set listenOnPort(value: number) {
    this._listenOnPort = value;
  }
  public resetListenOnPort() {
    this._listenOnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortInput() {
    return this._listenOnPort;
  }

  // on_timeout - computed: false, optional: true, required: false
  private _onTimeout?: number; 
  public get onTimeout() {
    return this.getNumberAttribute('on_timeout');
  }
  public set onTimeout(value: number) {
    this._onTimeout = value;
  }
  public resetOnTimeout() {
    this._onTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTimeoutInput() {
    return this._onTimeout;
  }

  // permit_limit_policy - computed: false, optional: true, required: false
  private _permitLimitPolicy?: number; 
  public get permitLimitPolicy() {
    return this.getNumberAttribute('permit_limit_policy');
  }
  public set permitLimitPolicy(value: number) {
    this._permitLimitPolicy = value;
  }
  public resetPermitLimitPolicy() {
    this._permitLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLimitPolicyInput() {
    return this._permitLimitPolicy;
  }

  // permit_log - computed: false, optional: true, required: false
  private _permitLog?: number; 
  public get permitLog() {
    return this.getNumberAttribute('permit_log');
  }
  public set permitLog(value: number) {
    this._permitLog = value;
  }
  public resetPermitLog() {
    this._permitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogInput() {
    return this._permitLog;
  }

  // permit_respond_to_user_mac - computed: false, optional: true, required: false
  private _permitRespondToUserMac?: number; 
  public get permitRespondToUserMac() {
    return this.getNumberAttribute('permit_respond_to_user_mac');
  }
  public set permitRespondToUserMac(value: number) {
    this._permitRespondToUserMac = value;
  }
  public resetPermitRespondToUserMac() {
    this._permitRespondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRespondToUserMacInput() {
    return this._permitRespondToUserMac;
  }

  // reset_fw_log - computed: false, optional: true, required: false
  private _resetFwLog?: string; 
  public get resetFwLog() {
    return this.getStringAttribute('reset_fw_log');
  }
  public set resetFwLog(value: string) {
    this._resetFwLog = value;
  }
  public resetResetFwLog() {
    this._resetFwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetFwLogInput() {
    return this._resetFwLog;
  }

  // reset_log - computed: false, optional: true, required: false
  private _resetLog?: number; 
  public get resetLog() {
    return this.getNumberAttribute('reset_log');
  }
  public set resetLog(value: number) {
    this._resetLog = value;
  }
  public resetResetLog() {
    this._resetLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLogInput() {
    return this._resetLog;
  }

  // reset_log_template_type - computed: false, optional: true, required: false
  private _resetLogTemplateType?: string; 
  public get resetLogTemplateType() {
    return this.getStringAttribute('reset_log_template_type');
  }
  public set resetLogTemplateType(value: string) {
    this._resetLogTemplateType = value;
  }
  public resetResetLogTemplateType() {
    this._resetLogTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLogTemplateTypeInput() {
    return this._resetLogTemplateType;
  }

  // reset_respond_to_user_mac - computed: false, optional: true, required: false
  private _resetRespondToUserMac?: number; 
  public get resetRespondToUserMac() {
    return this.getNumberAttribute('reset_respond_to_user_mac');
  }
  public set resetRespondToUserMac(value: number) {
    this._resetRespondToUserMac = value;
  }
  public resetResetRespondToUserMac() {
    this._resetRespondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetRespondToUserMacInput() {
    return this._resetRespondToUserMac;
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

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // set_dscp - computed: false, optional: true, required: false
  private _setDscp?: number; 
  public get setDscp() {
    return this.getNumberAttribute('set_dscp');
  }
  public set setDscp(value: number) {
    this._setDscp = value;
  }
  public resetSetDscp() {
    this._setDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDscpInput() {
    return this._setDscp;
  }

  // skip_urpf_check - computed: false, optional: true, required: false
  private _skipUrpfCheck?: number; 
  public get skipUrpfCheck() {
    return this.getNumberAttribute('skip_urpf_check');
  }
  public set skipUrpfCheck(value: number) {
    this._skipUrpfCheck = value;
  }
  public resetSkipUrpfCheck() {
    this._skipUrpfCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUrpfCheckInput() {
    return this._skipUrpfCheck;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // syn_cookie_enable - computed: false, optional: true, required: false
  private _synCookieEnable?: string; 
  public get synCookieEnable() {
    return this.getStringAttribute('syn_cookie_enable');
  }
  public set synCookieEnable(value: string) {
    this._synCookieEnable = value;
  }
  public resetSynCookieEnable() {
    this._synCookieEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieEnableInput() {
    return this._synCookieEnable;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // threshold_val - computed: false, optional: true, required: false
  private _thresholdVal?: number; 
  public get thresholdVal() {
    return this.getNumberAttribute('threshold_val');
  }
  public set thresholdVal(value: number) {
    this._thresholdVal = value;
  }
  public resetThresholdVal() {
    this._thresholdVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValInput() {
    return this._thresholdVal;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // vpn_ipsec_group_name - computed: false, optional: true, required: false
  private _vpnIpsecGroupName?: string; 
  public get vpnIpsecGroupName() {
    return this.getStringAttribute('vpn_ipsec_group_name');
  }
  public set vpnIpsecGroupName(value: string) {
    this._vpnIpsecGroupName = value;
  }
  public resetVpnIpsecGroupName() {
    this._vpnIpsecGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecGroupNameInput() {
    return this._vpnIpsecGroupName;
  }

  // vpn_ipsec_name - computed: false, optional: true, required: false
  private _vpnIpsecName?: string; 
  public get vpnIpsecName() {
    return this.getStringAttribute('vpn_ipsec_name');
  }
  public set vpnIpsecName(value: string) {
    this._vpnIpsecName = value;
  }
  public resetVpnIpsecName() {
    this._vpnIpsecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIpsecNameInput() {
    return this._vpnIpsecName;
  }

  // logging_template_list - computed: false, optional: true, required: false
  private _loggingTemplateList = new RuleSetRuleActionGroupLoggingTemplateListStructAList(this, "logging_template_list", false);
  public get loggingTemplateList() {
    return this._loggingTemplateList;
  }
  public putLoggingTemplateList(value: RuleSetRuleActionGroupLoggingTemplateListStructA[] | cdktf.IResolvable) {
    this._loggingTemplateList.internalValue = value;
  }
  public resetLoggingTemplateList() {
    this._loggingTemplateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTemplateListInput() {
    return this._loggingTemplateList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cgnv6: cdktf.numberToTerraform(this._cgnv6),
      cgnv6_ds_lite: cdktf.stringToTerraform(this._cgnv6DsLite),
      cgnv6_ds_lite_lsn_lid: cdktf.numberToTerraform(this._cgnv6DsLiteLsnLid),
      cgnv6_lsn_lid: cdktf.numberToTerraform(this._cgnv6LsnLid),
      cgnv6_policy: cdktf.stringToTerraform(this._cgnv6Policy),
      deny_fw_log: cdktf.stringToTerraform(this._denyFwLog),
      deny_log: cdktf.numberToTerraform(this._denyLog),
      deny_log_template_type: cdktf.stringToTerraform(this._denyLogTemplateType),
      deny_reset_limit_policy: cdktf.numberToTerraform(this._denyResetLimitPolicy),
      dscp_number: cdktf.numberToTerraform(this._dscpNumber),
      dscp_value: cdktf.stringToTerraform(this._dscpValue),
      forward: cdktf.numberToTerraform(this._forward),
      id: cdktf.stringToTerraform(this._id),
      inspect_payload: cdktf.numberToTerraform(this._inspectPayload),
      ipsec: cdktf.numberToTerraform(this._ipsec),
      ipsec_group: cdktf.numberToTerraform(this._ipsecGroup),
      listen_on_port: cdktf.numberToTerraform(this._listenOnPort),
      on_timeout: cdktf.numberToTerraform(this._onTimeout),
      permit_limit_policy: cdktf.numberToTerraform(this._permitLimitPolicy),
      permit_log: cdktf.numberToTerraform(this._permitLog),
      permit_respond_to_user_mac: cdktf.numberToTerraform(this._permitRespondToUserMac),
      reset_fw_log: cdktf.stringToTerraform(this._resetFwLog),
      reset_log: cdktf.numberToTerraform(this._resetLog),
      reset_log_template_type: cdktf.stringToTerraform(this._resetLogTemplateType),
      reset_respond_to_user_mac: cdktf.numberToTerraform(this._resetRespondToUserMac),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      set_dscp: cdktf.numberToTerraform(this._setDscp),
      skip_urpf_check: cdktf.numberToTerraform(this._skipUrpfCheck),
      syn_cookie: cdktf.numberToTerraform(this._synCookie),
      syn_cookie_enable: cdktf.stringToTerraform(this._synCookieEnable),
      tcp: cdktf.numberToTerraform(this._tcp),
      threshold_val: cdktf.numberToTerraform(this._thresholdVal),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      vpn_ipsec_group_name: cdktf.stringToTerraform(this._vpnIpsecGroupName),
      vpn_ipsec_name: cdktf.stringToTerraform(this._vpnIpsecName),
      logging_template_list: cdktf.listMapper(ruleSetRuleActionGroupLoggingTemplateListStructAToTerraform, true)(this._loggingTemplateList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cgnv6: {
        value: cdktf.numberToHclTerraform(this._cgnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_ds_lite: {
        value: cdktf.stringToHclTerraform(this._cgnv6DsLite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgnv6_ds_lite_lsn_lid: {
        value: cdktf.numberToHclTerraform(this._cgnv6DsLiteLsnLid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_lsn_lid: {
        value: cdktf.numberToHclTerraform(this._cgnv6LsnLid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgnv6_policy: {
        value: cdktf.stringToHclTerraform(this._cgnv6Policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_fw_log: {
        value: cdktf.stringToHclTerraform(this._denyFwLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_log: {
        value: cdktf.numberToHclTerraform(this._denyLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deny_log_template_type: {
        value: cdktf.stringToHclTerraform(this._denyLogTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_reset_limit_policy: {
        value: cdktf.numberToHclTerraform(this._denyResetLimitPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_number: {
        value: cdktf.numberToHclTerraform(this._dscpNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_value: {
        value: cdktf.stringToHclTerraform(this._dscpValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.numberToHclTerraform(this._forward),
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
      inspect_payload: {
        value: cdktf.numberToHclTerraform(this._inspectPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec: {
        value: cdktf.numberToHclTerraform(this._ipsec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_group: {
        value: cdktf.numberToHclTerraform(this._ipsecGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listen_on_port: {
        value: cdktf.numberToHclTerraform(this._listenOnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_timeout: {
        value: cdktf.numberToHclTerraform(this._onTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permit_limit_policy: {
        value: cdktf.numberToHclTerraform(this._permitLimitPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permit_log: {
        value: cdktf.numberToHclTerraform(this._permitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permit_respond_to_user_mac: {
        value: cdktf.numberToHclTerraform(this._permitRespondToUserMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_fw_log: {
        value: cdktf.stringToHclTerraform(this._resetFwLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_log: {
        value: cdktf.numberToHclTerraform(this._resetLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_log_template_type: {
        value: cdktf.stringToHclTerraform(this._resetLogTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_respond_to_user_mac: {
        value: cdktf.numberToHclTerraform(this._resetRespondToUserMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_dscp: {
        value: cdktf.numberToHclTerraform(this._setDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_urpf_check: {
        value: cdktf.numberToHclTerraform(this._skipUrpfCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie: {
        value: cdktf.numberToHclTerraform(this._synCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie_enable: {
        value: cdktf.stringToHclTerraform(this._synCookieEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp: {
        value: cdktf.numberToHclTerraform(this._tcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_val: {
        value: cdktf.numberToHclTerraform(this._thresholdVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      vpn_ipsec_group_name: {
        value: cdktf.stringToHclTerraform(this._vpnIpsecGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_ipsec_name: {
        value: cdktf.stringToHclTerraform(this._vpnIpsecName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_template_list: {
        value: cdktf.listMapperHcl(ruleSetRuleActionGroupLoggingTemplateListStructAToHclTerraform, true)(this._loggingTemplateList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleSetRuleActionGroupLoggingTemplateListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
