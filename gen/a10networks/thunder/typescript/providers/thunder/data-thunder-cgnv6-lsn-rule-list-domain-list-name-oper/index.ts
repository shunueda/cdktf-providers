// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnRuleListDomainListNameOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#id DataThunderCgnv6LsnRuleListDomainListNameOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#name DataThunderCgnv6LsnRuleListDomainListNameOper#name}
  */
  readonly name: string;
  /**
  * Configure a Specific Rule-Set (Domain List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#name_domain_list DataThunderCgnv6LsnRuleListDomainListNameOper#name_domain_list}
  */
  readonly nameDomainList: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#oper DataThunderCgnv6LsnRuleListDomainListNameOper#oper}
  */
  readonly oper?: DataThunderCgnv6LsnRuleListDomainListNameOperOper;
}
export interface DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#action DataThunderCgnv6LsnRuleListDomainListNameOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#action_type DataThunderCgnv6LsnRuleListDomainListNameOper#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#dnat_domain_unresolved_drops DataThunderCgnv6LsnRuleListDomainListNameOper#dnat_domain_unresolved_drops}
  */
  readonly dnatDomainUnresolvedDrops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#domain_name DataThunderCgnv6LsnRuleListDomainListNameOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#dscp_direction DataThunderCgnv6LsnRuleListDomainListNameOper#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#dscp_match DataThunderCgnv6LsnRuleListDomainListNameOper#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#dscp_value DataThunderCgnv6LsnRuleListDomainListNameOper#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#end_port DataThunderCgnv6LsnRuleListDomainListNameOper#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#fast DataThunderCgnv6LsnRuleListDomainListNameOper#fast}
  */
  readonly fast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#hits DataThunderCgnv6LsnRuleListDomainListNameOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#http_alg DataThunderCgnv6LsnRuleListDomainListNameOper#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#ipv4_list DataThunderCgnv6LsnRuleListDomainListNameOper#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#no_snat DataThunderCgnv6LsnRuleListDomainListNameOper#no_snat}
  */
  readonly noSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#pool DataThunderCgnv6LsnRuleListDomainListNameOper#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#pool_shared DataThunderCgnv6LsnRuleListDomainListNameOper#pool_shared}
  */
  readonly poolShared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#port_list DataThunderCgnv6LsnRuleListDomainListNameOper#port_list}
  */
  readonly portList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#proto DataThunderCgnv6LsnRuleListDomainListNameOper#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#start_port DataThunderCgnv6LsnRuleListDomainListNameOper#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#timeout_val DataThunderCgnv6LsnRuleListDomainListNameOper#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#vrid DataThunderCgnv6LsnRuleListDomainListNameOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructToTerraform(struct?: DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dnat_domain_unresolved_drops: cdktf.numberToTerraform(struct!.dnatDomainUnresolvedDrops),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_match: cdktf.stringToTerraform(struct!.dscpMatch),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    fast: cdktf.numberToTerraform(struct!.fast),
    hits: cdktf.numberToTerraform(struct!.hits),
    http_alg: cdktf.stringToTerraform(struct!.httpAlg),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    pool_shared: cdktf.numberToTerraform(struct!.poolShared),
    port_list: cdktf.stringToTerraform(struct!.portList),
    proto: cdktf.stringToTerraform(struct!.proto),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    timeout_val: cdktf.numberToTerraform(struct!.timeoutVal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructToHclTerraform(struct?: DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnat_domain_unresolved_drops: {
      value: cdktf.numberToHclTerraform(struct!.dnatDomainUnresolvedDrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_match: {
      value: cdktf.stringToHclTerraform(struct!.dscpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast: {
      value: cdktf.numberToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_alg: {
      value: cdktf.stringToHclTerraform(struct!.httpAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_shared: {
      value: cdktf.numberToHclTerraform(struct!.poolShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_val: {
      value: cdktf.numberToHclTerraform(struct!.timeoutVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dnatDomainUnresolvedDrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatDomainUnresolvedDrops = this._dnatDomainUnresolvedDrops;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpMatch = this._dscpMatch;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._httpAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAlg = this._httpAlg;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._poolShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolShared = this._poolShared;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._timeoutVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutVal = this._timeoutVal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionType = undefined;
      this._dnatDomainUnresolvedDrops = undefined;
      this._domainName = undefined;
      this._dscpDirection = undefined;
      this._dscpMatch = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._fast = undefined;
      this._hits = undefined;
      this._httpAlg = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._poolShared = undefined;
      this._portList = undefined;
      this._proto = undefined;
      this._startPort = undefined;
      this._timeoutVal = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionType = value.actionType;
      this._dnatDomainUnresolvedDrops = value.dnatDomainUnresolvedDrops;
      this._domainName = value.domainName;
      this._dscpDirection = value.dscpDirection;
      this._dscpMatch = value.dscpMatch;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._fast = value.fast;
      this._hits = value.hits;
      this._httpAlg = value.httpAlg;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._poolShared = value.poolShared;
      this._portList = value.portList;
      this._proto = value.proto;
      this._startPort = value.startPort;
      this._timeoutVal = value.timeoutVal;
      this._vrid = value.vrid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dnat_domain_unresolved_drops - computed: false, optional: true, required: false
  private _dnatDomainUnresolvedDrops?: number; 
  public get dnatDomainUnresolvedDrops() {
    return this.getNumberAttribute('dnat_domain_unresolved_drops');
  }
  public set dnatDomainUnresolvedDrops(value: number) {
    this._dnatDomainUnresolvedDrops = value;
  }
  public resetDnatDomainUnresolvedDrops() {
    this._dnatDomainUnresolvedDrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatDomainUnresolvedDropsInput() {
    return this._dnatDomainUnresolvedDrops;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_match - computed: false, optional: true, required: false
  private _dscpMatch?: string; 
  public get dscpMatch() {
    return this.getStringAttribute('dscp_match');
  }
  public set dscpMatch(value: string) {
    this._dscpMatch = value;
  }
  public resetDscpMatch() {
    this._dscpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMatchInput() {
    return this._dscpMatch;
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

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: number; 
  public get fast() {
    return this.getNumberAttribute('fast');
  }
  public set fast(value: number) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // http_alg - computed: false, optional: true, required: false
  private _httpAlg?: string; 
  public get httpAlg() {
    return this.getStringAttribute('http_alg');
  }
  public set httpAlg(value: string) {
    this._httpAlg = value;
  }
  public resetHttpAlg() {
    this._httpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAlgInput() {
    return this._httpAlg;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // pool_shared - computed: false, optional: true, required: false
  private _poolShared?: number; 
  public get poolShared() {
    return this.getNumberAttribute('pool_shared');
  }
  public set poolShared(value: number) {
    this._poolShared = value;
  }
  public resetPoolShared() {
    this._poolShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSharedInput() {
    return this._poolShared;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // timeout_val - computed: false, optional: true, required: false
  private _timeoutVal?: number; 
  public get timeoutVal() {
    return this.getNumberAttribute('timeout_val');
  }
  public set timeoutVal(value: number) {
    this._timeoutVal = value;
  }
  public resetTimeoutVal() {
    this._timeoutVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutValInput() {
    return this._timeoutVal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructOutputReference {
    return new DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6LsnRuleListDomainListNameOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#rule_count DataThunderCgnv6LsnRuleListDomainListNameOper#rule_count}
  */
  readonly ruleCount?: number;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#rule_list DataThunderCgnv6LsnRuleListDomainListNameOper#rule_list}
  */
  readonly ruleList?: DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6LsnRuleListDomainListNameOperOperToTerraform(struct?: DataThunderCgnv6LsnRuleListDomainListNameOperOperOutputReference | DataThunderCgnv6LsnRuleListDomainListNameOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_count: cdktf.numberToTerraform(struct!.ruleCount),
    rule_list: cdktf.listMapper(dataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructToTerraform, true)(struct!.ruleList),
  }
}


export function dataThunderCgnv6LsnRuleListDomainListNameOperOperToHclTerraform(struct?: DataThunderCgnv6LsnRuleListDomainListNameOperOperOutputReference | DataThunderCgnv6LsnRuleListDomainListNameOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_count: {
      value: cdktf.numberToHclTerraform(struct!.ruleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructToHclTerraform, true)(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnRuleListDomainListNameOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnRuleListDomainListNameOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCount = this._ruleCount;
    }
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnRuleListDomainListNameOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleCount = undefined;
      this._ruleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleCount = value.ruleCount;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // rule_count - computed: false, optional: true, required: false
  private _ruleCount?: number; 
  public get ruleCount() {
    return this.getNumberAttribute('rule_count');
  }
  public set ruleCount(value: number) {
    this._ruleCount = value;
  }
  public resetRuleCount() {
    this._ruleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCountInput() {
    return this._ruleCount;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DataThunderCgnv6LsnRuleListDomainListNameOperOperRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper thunder_cgnv6_lsn_rule_list_domain_list_name_oper}
*/
export class DataThunderCgnv6LsnRuleListDomainListNameOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_rule_list_domain_list_name_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnRuleListDomainListNameOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnRuleListDomainListNameOper to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnRuleListDomainListNameOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnRuleListDomainListNameOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_rule_list_domain_list_name_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_rule_list_domain_list_name_oper thunder_cgnv6_lsn_rule_list_domain_list_name_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnRuleListDomainListNameOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnRuleListDomainListNameOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_rule_list_domain_list_name_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._nameDomainList = config.nameDomainList;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_domain_list - computed: false, optional: false, required: true
  private _nameDomainList?: string; 
  public get nameDomainList() {
    return this.getStringAttribute('name_domain_list');
  }
  public set nameDomainList(value: string) {
    this._nameDomainList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDomainListInput() {
    return this._nameDomainList;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderCgnv6LsnRuleListDomainListNameOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6LsnRuleListDomainListNameOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_domain_list: cdktf.stringToTerraform(this._nameDomainList),
      oper: dataThunderCgnv6LsnRuleListDomainListNameOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_domain_list: {
        value: cdktf.stringToHclTerraform(this._nameDomainList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderCgnv6LsnRuleListDomainListNameOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnRuleListDomainListNameOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
