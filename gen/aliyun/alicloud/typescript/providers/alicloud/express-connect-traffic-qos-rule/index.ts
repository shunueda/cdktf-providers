// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressConnectTrafficQosRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#dst_cidr ExpressConnectTrafficQosRule#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#dst_ipv6_cidr ExpressConnectTrafficQosRule#dst_ipv6_cidr}
  */
  readonly dstIpv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#dst_port_range ExpressConnectTrafficQosRule#dst_port_range}
  */
  readonly dstPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#id ExpressConnectTrafficQosRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#match_dscp ExpressConnectTrafficQosRule#match_dscp}
  */
  readonly matchDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#priority ExpressConnectTrafficQosRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#protocol ExpressConnectTrafficQosRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#qos_id ExpressConnectTrafficQosRule#qos_id}
  */
  readonly qosId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#queue_id ExpressConnectTrafficQosRule#queue_id}
  */
  readonly queueId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#remarking_dscp ExpressConnectTrafficQosRule#remarking_dscp}
  */
  readonly remarkingDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#rule_description ExpressConnectTrafficQosRule#rule_description}
  */
  readonly ruleDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#rule_name ExpressConnectTrafficQosRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#src_cidr ExpressConnectTrafficQosRule#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#src_ipv6_cidr ExpressConnectTrafficQosRule#src_ipv6_cidr}
  */
  readonly srcIpv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#src_port_range ExpressConnectTrafficQosRule#src_port_range}
  */
  readonly srcPortRange?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#timeouts ExpressConnectTrafficQosRule#timeouts}
  */
  readonly timeouts?: ExpressConnectTrafficQosRuleTimeouts;
}
export interface ExpressConnectTrafficQosRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#create ExpressConnectTrafficQosRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#delete ExpressConnectTrafficQosRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#update ExpressConnectTrafficQosRule#update}
  */
  readonly update?: string;
}

export function expressConnectTrafficQosRuleTimeoutsToTerraform(struct?: ExpressConnectTrafficQosRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function expressConnectTrafficQosRuleTimeoutsToHclTerraform(struct?: ExpressConnectTrafficQosRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpressConnectTrafficQosRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressConnectTrafficQosRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressConnectTrafficQosRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule alicloud_express_connect_traffic_qos_rule}
*/
export class ExpressConnectTrafficQosRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_traffic_qos_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressConnectTrafficQosRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressConnectTrafficQosRule to import
  * @param importFromId The id of the existing ExpressConnectTrafficQosRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressConnectTrafficQosRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_traffic_qos_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/express_connect_traffic_qos_rule alicloud_express_connect_traffic_qos_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressConnectTrafficQosRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressConnectTrafficQosRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_traffic_qos_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstCidr = config.dstCidr;
    this._dstIpv6Cidr = config.dstIpv6Cidr;
    this._dstPortRange = config.dstPortRange;
    this._id = config.id;
    this._matchDscp = config.matchDscp;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._qosId = config.qosId;
    this._queueId = config.queueId;
    this._remarkingDscp = config.remarkingDscp;
    this._ruleDescription = config.ruleDescription;
    this._ruleName = config.ruleName;
    this._srcCidr = config.srcCidr;
    this._srcIpv6Cidr = config.srcIpv6Cidr;
    this._srcPortRange = config.srcPortRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_cidr - computed: false, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_ipv6_cidr - computed: false, optional: true, required: false
  private _dstIpv6Cidr?: string; 
  public get dstIpv6Cidr() {
    return this.getStringAttribute('dst_ipv6_cidr');
  }
  public set dstIpv6Cidr(value: string) {
    this._dstIpv6Cidr = value;
  }
  public resetDstIpv6Cidr() {
    this._dstIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv6CidrInput() {
    return this._dstIpv6Cidr;
  }

  // dst_port_range - computed: true, optional: true, required: false
  private _dstPortRange?: string; 
  public get dstPortRange() {
    return this.getStringAttribute('dst_port_range');
  }
  public set dstPortRange(value: string) {
    this._dstPortRange = value;
  }
  public resetDstPortRange() {
    this._dstPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortRangeInput() {
    return this._dstPortRange;
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

  // match_dscp - computed: true, optional: true, required: false
  private _matchDscp?: number; 
  public get matchDscp() {
    return this.getNumberAttribute('match_dscp');
  }
  public set matchDscp(value: number) {
    this._matchDscp = value;
  }
  public resetMatchDscp() {
    this._matchDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDscpInput() {
    return this._matchDscp;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // qos_id - computed: false, optional: false, required: true
  private _qosId?: string; 
  public get qosId() {
    return this.getStringAttribute('qos_id');
  }
  public set qosId(value: string) {
    this._qosId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosIdInput() {
    return this._qosId;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // remarking_dscp - computed: true, optional: true, required: false
  private _remarkingDscp?: number; 
  public get remarkingDscp() {
    return this.getNumberAttribute('remarking_dscp');
  }
  public set remarkingDscp(value: number) {
    this._remarkingDscp = value;
  }
  public resetRemarkingDscp() {
    this._remarkingDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkingDscpInput() {
    return this._remarkingDscp;
  }

  // rule_description - computed: false, optional: true, required: false
  private _ruleDescription?: string; 
  public get ruleDescription() {
    return this.getStringAttribute('rule_description');
  }
  public set ruleDescription(value: string) {
    this._ruleDescription = value;
  }
  public resetRuleDescription() {
    this._ruleDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDescriptionInput() {
    return this._ruleDescription;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // src_cidr - computed: false, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_ipv6_cidr - computed: false, optional: true, required: false
  private _srcIpv6Cidr?: string; 
  public get srcIpv6Cidr() {
    return this.getStringAttribute('src_ipv6_cidr');
  }
  public set srcIpv6Cidr(value: string) {
    this._srcIpv6Cidr = value;
  }
  public resetSrcIpv6Cidr() {
    this._srcIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6CidrInput() {
    return this._srcIpv6Cidr;
  }

  // src_port_range - computed: true, optional: true, required: false
  private _srcPortRange?: string; 
  public get srcPortRange() {
    return this.getStringAttribute('src_port_range');
  }
  public set srcPortRange(value: string) {
    this._srcPortRange = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressConnectTrafficQosRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressConnectTrafficQosRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_cidr: cdktf.stringToTerraform(this._dstCidr),
      dst_ipv6_cidr: cdktf.stringToTerraform(this._dstIpv6Cidr),
      dst_port_range: cdktf.stringToTerraform(this._dstPortRange),
      id: cdktf.stringToTerraform(this._id),
      match_dscp: cdktf.numberToTerraform(this._matchDscp),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      qos_id: cdktf.stringToTerraform(this._qosId),
      queue_id: cdktf.stringToTerraform(this._queueId),
      remarking_dscp: cdktf.numberToTerraform(this._remarkingDscp),
      rule_description: cdktf.stringToTerraform(this._ruleDescription),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      src_cidr: cdktf.stringToTerraform(this._srcCidr),
      src_ipv6_cidr: cdktf.stringToTerraform(this._srcIpv6Cidr),
      src_port_range: cdktf.stringToTerraform(this._srcPortRange),
      timeouts: expressConnectTrafficQosRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_cidr: {
        value: cdktf.stringToHclTerraform(this._dstCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._dstIpv6Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port_range: {
        value: cdktf.stringToHclTerraform(this._dstPortRange),
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
      match_dscp: {
        value: cdktf.numberToHclTerraform(this._matchDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_id: {
        value: cdktf.stringToHclTerraform(this._qosId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remarking_dscp: {
        value: cdktf.numberToHclTerraform(this._remarkingDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_description: {
        value: cdktf.stringToHclTerraform(this._ruleDescription),
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
      src_cidr: {
        value: cdktf.stringToHclTerraform(this._srcCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._srcIpv6Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port_range: {
        value: cdktf.stringToHclTerraform(this._srcPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: expressConnectTrafficQosRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressConnectTrafficQosRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
