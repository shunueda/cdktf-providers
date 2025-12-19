// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRuleSetRuleOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#id DataThunderRuleSetRuleOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#name DataThunderRuleSetRuleOper#name}
  */
  readonly name: string;
  /**
  * Rule_set_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#rule_set_name DataThunderRuleSetRuleOper#rule_set_name}
  */
  readonly ruleSetName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#oper DataThunderRuleSetRuleOper#oper}
  */
  readonly oper?: DataThunderRuleSetRuleOperOper;
}
export interface DataThunderRuleSetRuleOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#action DataThunderRuleSetRuleOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#activesessionicmp DataThunderRuleSetRuleOper#activesessionicmp}
  */
  readonly activesessionicmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#activesessionother DataThunderRuleSetRuleOper#activesessionother}
  */
  readonly activesessionother?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#activesessionsctp DataThunderRuleSetRuleOper#activesessionsctp}
  */
  readonly activesessionsctp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#activesessiontcp DataThunderRuleSetRuleOper#activesessiontcp}
  */
  readonly activesessiontcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#activesessiontotal DataThunderRuleSetRuleOper#activesessiontotal}
  */
  readonly activesessiontotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#activesessionudp DataThunderRuleSetRuleOper#activesessionudp}
  */
  readonly activesessionudp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#denybytes DataThunderRuleSetRuleOper#denybytes}
  */
  readonly denybytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#denypackets DataThunderRuleSetRuleOper#denypackets}
  */
  readonly denypackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#hitcount DataThunderRuleSetRuleOper#hitcount}
  */
  readonly hitcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#last_hitcount_time DataThunderRuleSetRuleOper#last_hitcount_time}
  */
  readonly lastHitcountTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#permitbytes DataThunderRuleSetRuleOper#permitbytes}
  */
  readonly permitbytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#permitpackets DataThunderRuleSetRuleOper#permitpackets}
  */
  readonly permitpackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#ratelimitdrops DataThunderRuleSetRuleOper#ratelimitdrops}
  */
  readonly ratelimitdrops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#resetbytes DataThunderRuleSetRuleOper#resetbytes}
  */
  readonly resetbytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#resetpackets DataThunderRuleSetRuleOper#resetpackets}
  */
  readonly resetpackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#sessionicmp DataThunderRuleSetRuleOper#sessionicmp}
  */
  readonly sessionicmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#sessionother DataThunderRuleSetRuleOper#sessionother}
  */
  readonly sessionother?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#sessionsctp DataThunderRuleSetRuleOper#sessionsctp}
  */
  readonly sessionsctp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#sessiontcp DataThunderRuleSetRuleOper#sessiontcp}
  */
  readonly sessiontcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#sessiontotal DataThunderRuleSetRuleOper#sessiontotal}
  */
  readonly sessiontotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#sessionudp DataThunderRuleSetRuleOper#sessionudp}
  */
  readonly sessionudp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#status DataThunderRuleSetRuleOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#synacksent DataThunderRuleSetRuleOper#synacksent}
  */
  readonly synacksent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#syncookieon DataThunderRuleSetRuleOper#syncookieon}
  */
  readonly syncookieon?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#tcphalfopencount DataThunderRuleSetRuleOper#tcphalfopencount}
  */
  readonly tcphalfopencount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#totalbytes DataThunderRuleSetRuleOper#totalbytes}
  */
  readonly totalbytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#totalpackets DataThunderRuleSetRuleOper#totalpackets}
  */
  readonly totalpackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#verificationfailed DataThunderRuleSetRuleOper#verificationfailed}
  */
  readonly verificationfailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#verificationpassed DataThunderRuleSetRuleOper#verificationpassed}
  */
  readonly verificationpassed?: number;
}

export function dataThunderRuleSetRuleOperOperToTerraform(struct?: DataThunderRuleSetRuleOperOperOutputReference | DataThunderRuleSetRuleOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    activesessionicmp: cdktf.numberToTerraform(struct!.activesessionicmp),
    activesessionother: cdktf.numberToTerraform(struct!.activesessionother),
    activesessionsctp: cdktf.numberToTerraform(struct!.activesessionsctp),
    activesessiontcp: cdktf.numberToTerraform(struct!.activesessiontcp),
    activesessiontotal: cdktf.numberToTerraform(struct!.activesessiontotal),
    activesessionudp: cdktf.numberToTerraform(struct!.activesessionudp),
    denybytes: cdktf.numberToTerraform(struct!.denybytes),
    denypackets: cdktf.numberToTerraform(struct!.denypackets),
    hitcount: cdktf.numberToTerraform(struct!.hitcount),
    last_hitcount_time: cdktf.stringToTerraform(struct!.lastHitcountTime),
    permitbytes: cdktf.numberToTerraform(struct!.permitbytes),
    permitpackets: cdktf.numberToTerraform(struct!.permitpackets),
    ratelimitdrops: cdktf.numberToTerraform(struct!.ratelimitdrops),
    resetbytes: cdktf.numberToTerraform(struct!.resetbytes),
    resetpackets: cdktf.numberToTerraform(struct!.resetpackets),
    sessionicmp: cdktf.numberToTerraform(struct!.sessionicmp),
    sessionother: cdktf.numberToTerraform(struct!.sessionother),
    sessionsctp: cdktf.numberToTerraform(struct!.sessionsctp),
    sessiontcp: cdktf.numberToTerraform(struct!.sessiontcp),
    sessiontotal: cdktf.numberToTerraform(struct!.sessiontotal),
    sessionudp: cdktf.numberToTerraform(struct!.sessionudp),
    status: cdktf.stringToTerraform(struct!.status),
    synacksent: cdktf.numberToTerraform(struct!.synacksent),
    syncookieon: cdktf.numberToTerraform(struct!.syncookieon),
    tcphalfopencount: cdktf.numberToTerraform(struct!.tcphalfopencount),
    totalbytes: cdktf.numberToTerraform(struct!.totalbytes),
    totalpackets: cdktf.numberToTerraform(struct!.totalpackets),
    verificationfailed: cdktf.numberToTerraform(struct!.verificationfailed),
    verificationpassed: cdktf.numberToTerraform(struct!.verificationpassed),
  }
}


export function dataThunderRuleSetRuleOperOperToHclTerraform(struct?: DataThunderRuleSetRuleOperOperOutputReference | DataThunderRuleSetRuleOperOper): any {
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
    activesessionicmp: {
      value: cdktf.numberToHclTerraform(struct!.activesessionicmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessionother: {
      value: cdktf.numberToHclTerraform(struct!.activesessionother),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessionsctp: {
      value: cdktf.numberToHclTerraform(struct!.activesessionsctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessiontcp: {
      value: cdktf.numberToHclTerraform(struct!.activesessiontcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessiontotal: {
      value: cdktf.numberToHclTerraform(struct!.activesessiontotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activesessionudp: {
      value: cdktf.numberToHclTerraform(struct!.activesessionudp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    denybytes: {
      value: cdktf.numberToHclTerraform(struct!.denybytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    denypackets: {
      value: cdktf.numberToHclTerraform(struct!.denypackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hitcount: {
      value: cdktf.numberToHclTerraform(struct!.hitcount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_hitcount_time: {
      value: cdktf.stringToHclTerraform(struct!.lastHitcountTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permitbytes: {
      value: cdktf.numberToHclTerraform(struct!.permitbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permitpackets: {
      value: cdktf.numberToHclTerraform(struct!.permitpackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimitdrops: {
      value: cdktf.numberToHclTerraform(struct!.ratelimitdrops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resetbytes: {
      value: cdktf.numberToHclTerraform(struct!.resetbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resetpackets: {
      value: cdktf.numberToHclTerraform(struct!.resetpackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionicmp: {
      value: cdktf.numberToHclTerraform(struct!.sessionicmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionother: {
      value: cdktf.numberToHclTerraform(struct!.sessionother),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionsctp: {
      value: cdktf.numberToHclTerraform(struct!.sessionsctp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessiontcp: {
      value: cdktf.numberToHclTerraform(struct!.sessiontcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessiontotal: {
      value: cdktf.numberToHclTerraform(struct!.sessiontotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessionudp: {
      value: cdktf.numberToHclTerraform(struct!.sessionudp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synacksent: {
      value: cdktf.numberToHclTerraform(struct!.synacksent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookieon: {
      value: cdktf.numberToHclTerraform(struct!.syncookieon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcphalfopencount: {
      value: cdktf.numberToHclTerraform(struct!.tcphalfopencount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    totalbytes: {
      value: cdktf.numberToHclTerraform(struct!.totalbytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    totalpackets: {
      value: cdktf.numberToHclTerraform(struct!.totalpackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verificationfailed: {
      value: cdktf.numberToHclTerraform(struct!.verificationfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verificationpassed: {
      value: cdktf.numberToHclTerraform(struct!.verificationpassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRuleSetRuleOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRuleSetRuleOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._activesessionicmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionicmp = this._activesessionicmp;
    }
    if (this._activesessionother !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionother = this._activesessionother;
    }
    if (this._activesessionsctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionsctp = this._activesessionsctp;
    }
    if (this._activesessiontcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessiontcp = this._activesessiontcp;
    }
    if (this._activesessiontotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessiontotal = this._activesessiontotal;
    }
    if (this._activesessionudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.activesessionudp = this._activesessionudp;
    }
    if (this._denybytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.denybytes = this._denybytes;
    }
    if (this._denypackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.denypackets = this._denypackets;
    }
    if (this._hitcount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitcount = this._hitcount;
    }
    if (this._lastHitcountTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastHitcountTime = this._lastHitcountTime;
    }
    if (this._permitbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitbytes = this._permitbytes;
    }
    if (this._permitpackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitpackets = this._permitpackets;
    }
    if (this._ratelimitdrops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitdrops = this._ratelimitdrops;
    }
    if (this._resetbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetbytes = this._resetbytes;
    }
    if (this._resetpackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetpackets = this._resetpackets;
    }
    if (this._sessionicmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionicmp = this._sessionicmp;
    }
    if (this._sessionother !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionother = this._sessionother;
    }
    if (this._sessionsctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsctp = this._sessionsctp;
    }
    if (this._sessiontcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessiontcp = this._sessiontcp;
    }
    if (this._sessiontotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessiontotal = this._sessiontotal;
    }
    if (this._sessionudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionudp = this._sessionudp;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._synacksent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synacksent = this._synacksent;
    }
    if (this._syncookieon !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookieon = this._syncookieon;
    }
    if (this._tcphalfopencount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcphalfopencount = this._tcphalfopencount;
    }
    if (this._totalbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalbytes = this._totalbytes;
    }
    if (this._totalpackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalpackets = this._totalpackets;
    }
    if (this._verificationfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationfailed = this._verificationfailed;
    }
    if (this._verificationpassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationpassed = this._verificationpassed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRuleSetRuleOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._activesessionicmp = undefined;
      this._activesessionother = undefined;
      this._activesessionsctp = undefined;
      this._activesessiontcp = undefined;
      this._activesessiontotal = undefined;
      this._activesessionudp = undefined;
      this._denybytes = undefined;
      this._denypackets = undefined;
      this._hitcount = undefined;
      this._lastHitcountTime = undefined;
      this._permitbytes = undefined;
      this._permitpackets = undefined;
      this._ratelimitdrops = undefined;
      this._resetbytes = undefined;
      this._resetpackets = undefined;
      this._sessionicmp = undefined;
      this._sessionother = undefined;
      this._sessionsctp = undefined;
      this._sessiontcp = undefined;
      this._sessiontotal = undefined;
      this._sessionudp = undefined;
      this._status = undefined;
      this._synacksent = undefined;
      this._syncookieon = undefined;
      this._tcphalfopencount = undefined;
      this._totalbytes = undefined;
      this._totalpackets = undefined;
      this._verificationfailed = undefined;
      this._verificationpassed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._activesessionicmp = value.activesessionicmp;
      this._activesessionother = value.activesessionother;
      this._activesessionsctp = value.activesessionsctp;
      this._activesessiontcp = value.activesessiontcp;
      this._activesessiontotal = value.activesessiontotal;
      this._activesessionudp = value.activesessionudp;
      this._denybytes = value.denybytes;
      this._denypackets = value.denypackets;
      this._hitcount = value.hitcount;
      this._lastHitcountTime = value.lastHitcountTime;
      this._permitbytes = value.permitbytes;
      this._permitpackets = value.permitpackets;
      this._ratelimitdrops = value.ratelimitdrops;
      this._resetbytes = value.resetbytes;
      this._resetpackets = value.resetpackets;
      this._sessionicmp = value.sessionicmp;
      this._sessionother = value.sessionother;
      this._sessionsctp = value.sessionsctp;
      this._sessiontcp = value.sessiontcp;
      this._sessiontotal = value.sessiontotal;
      this._sessionudp = value.sessionudp;
      this._status = value.status;
      this._synacksent = value.synacksent;
      this._syncookieon = value.syncookieon;
      this._tcphalfopencount = value.tcphalfopencount;
      this._totalbytes = value.totalbytes;
      this._totalpackets = value.totalpackets;
      this._verificationfailed = value.verificationfailed;
      this._verificationpassed = value.verificationpassed;
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

  // activesessionicmp - computed: false, optional: true, required: false
  private _activesessionicmp?: number; 
  public get activesessionicmp() {
    return this.getNumberAttribute('activesessionicmp');
  }
  public set activesessionicmp(value: number) {
    this._activesessionicmp = value;
  }
  public resetActivesessionicmp() {
    this._activesessionicmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionicmpInput() {
    return this._activesessionicmp;
  }

  // activesessionother - computed: false, optional: true, required: false
  private _activesessionother?: number; 
  public get activesessionother() {
    return this.getNumberAttribute('activesessionother');
  }
  public set activesessionother(value: number) {
    this._activesessionother = value;
  }
  public resetActivesessionother() {
    this._activesessionother = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionotherInput() {
    return this._activesessionother;
  }

  // activesessionsctp - computed: false, optional: true, required: false
  private _activesessionsctp?: number; 
  public get activesessionsctp() {
    return this.getNumberAttribute('activesessionsctp');
  }
  public set activesessionsctp(value: number) {
    this._activesessionsctp = value;
  }
  public resetActivesessionsctp() {
    this._activesessionsctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionsctpInput() {
    return this._activesessionsctp;
  }

  // activesessiontcp - computed: false, optional: true, required: false
  private _activesessiontcp?: number; 
  public get activesessiontcp() {
    return this.getNumberAttribute('activesessiontcp');
  }
  public set activesessiontcp(value: number) {
    this._activesessiontcp = value;
  }
  public resetActivesessiontcp() {
    this._activesessiontcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessiontcpInput() {
    return this._activesessiontcp;
  }

  // activesessiontotal - computed: false, optional: true, required: false
  private _activesessiontotal?: number; 
  public get activesessiontotal() {
    return this.getNumberAttribute('activesessiontotal');
  }
  public set activesessiontotal(value: number) {
    this._activesessiontotal = value;
  }
  public resetActivesessiontotal() {
    this._activesessiontotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessiontotalInput() {
    return this._activesessiontotal;
  }

  // activesessionudp - computed: false, optional: true, required: false
  private _activesessionudp?: number; 
  public get activesessionudp() {
    return this.getNumberAttribute('activesessionudp');
  }
  public set activesessionudp(value: number) {
    this._activesessionudp = value;
  }
  public resetActivesessionudp() {
    this._activesessionudp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activesessionudpInput() {
    return this._activesessionudp;
  }

  // denybytes - computed: false, optional: true, required: false
  private _denybytes?: number; 
  public get denybytes() {
    return this.getNumberAttribute('denybytes');
  }
  public set denybytes(value: number) {
    this._denybytes = value;
  }
  public resetDenybytes() {
    this._denybytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denybytesInput() {
    return this._denybytes;
  }

  // denypackets - computed: false, optional: true, required: false
  private _denypackets?: number; 
  public get denypackets() {
    return this.getNumberAttribute('denypackets');
  }
  public set denypackets(value: number) {
    this._denypackets = value;
  }
  public resetDenypackets() {
    this._denypackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denypacketsInput() {
    return this._denypackets;
  }

  // hitcount - computed: false, optional: true, required: false
  private _hitcount?: number; 
  public get hitcount() {
    return this.getNumberAttribute('hitcount');
  }
  public set hitcount(value: number) {
    this._hitcount = value;
  }
  public resetHitcount() {
    this._hitcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitcountInput() {
    return this._hitcount;
  }

  // last_hitcount_time - computed: false, optional: true, required: false
  private _lastHitcountTime?: string; 
  public get lastHitcountTime() {
    return this.getStringAttribute('last_hitcount_time');
  }
  public set lastHitcountTime(value: string) {
    this._lastHitcountTime = value;
  }
  public resetLastHitcountTime() {
    this._lastHitcountTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastHitcountTimeInput() {
    return this._lastHitcountTime;
  }

  // permitbytes - computed: false, optional: true, required: false
  private _permitbytes?: number; 
  public get permitbytes() {
    return this.getNumberAttribute('permitbytes');
  }
  public set permitbytes(value: number) {
    this._permitbytes = value;
  }
  public resetPermitbytes() {
    this._permitbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitbytesInput() {
    return this._permitbytes;
  }

  // permitpackets - computed: false, optional: true, required: false
  private _permitpackets?: number; 
  public get permitpackets() {
    return this.getNumberAttribute('permitpackets');
  }
  public set permitpackets(value: number) {
    this._permitpackets = value;
  }
  public resetPermitpackets() {
    this._permitpackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitpacketsInput() {
    return this._permitpackets;
  }

  // ratelimitdrops - computed: false, optional: true, required: false
  private _ratelimitdrops?: number; 
  public get ratelimitdrops() {
    return this.getNumberAttribute('ratelimitdrops');
  }
  public set ratelimitdrops(value: number) {
    this._ratelimitdrops = value;
  }
  public resetRatelimitdrops() {
    this._ratelimitdrops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitdropsInput() {
    return this._ratelimitdrops;
  }

  // resetbytes - computed: false, optional: true, required: false
  private _resetbytes?: number; 
  public get resetbytes() {
    return this.getNumberAttribute('resetbytes');
  }
  public set resetbytes(value: number) {
    this._resetbytes = value;
  }
  public resetResetbytes() {
    this._resetbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetbytesInput() {
    return this._resetbytes;
  }

  // resetpackets - computed: false, optional: true, required: false
  private _resetpackets?: number; 
  public get resetpackets() {
    return this.getNumberAttribute('resetpackets');
  }
  public set resetpackets(value: number) {
    this._resetpackets = value;
  }
  public resetResetpackets() {
    this._resetpackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetpacketsInput() {
    return this._resetpackets;
  }

  // sessionicmp - computed: false, optional: true, required: false
  private _sessionicmp?: number; 
  public get sessionicmp() {
    return this.getNumberAttribute('sessionicmp');
  }
  public set sessionicmp(value: number) {
    this._sessionicmp = value;
  }
  public resetSessionicmp() {
    this._sessionicmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionicmpInput() {
    return this._sessionicmp;
  }

  // sessionother - computed: false, optional: true, required: false
  private _sessionother?: number; 
  public get sessionother() {
    return this.getNumberAttribute('sessionother');
  }
  public set sessionother(value: number) {
    this._sessionother = value;
  }
  public resetSessionother() {
    this._sessionother = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionotherInput() {
    return this._sessionother;
  }

  // sessionsctp - computed: false, optional: true, required: false
  private _sessionsctp?: number; 
  public get sessionsctp() {
    return this.getNumberAttribute('sessionsctp');
  }
  public set sessionsctp(value: number) {
    this._sessionsctp = value;
  }
  public resetSessionsctp() {
    this._sessionsctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsctpInput() {
    return this._sessionsctp;
  }

  // sessiontcp - computed: false, optional: true, required: false
  private _sessiontcp?: number; 
  public get sessiontcp() {
    return this.getNumberAttribute('sessiontcp');
  }
  public set sessiontcp(value: number) {
    this._sessiontcp = value;
  }
  public resetSessiontcp() {
    this._sessiontcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontcpInput() {
    return this._sessiontcp;
  }

  // sessiontotal - computed: false, optional: true, required: false
  private _sessiontotal?: number; 
  public get sessiontotal() {
    return this.getNumberAttribute('sessiontotal');
  }
  public set sessiontotal(value: number) {
    this._sessiontotal = value;
  }
  public resetSessiontotal() {
    this._sessiontotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontotalInput() {
    return this._sessiontotal;
  }

  // sessionudp - computed: false, optional: true, required: false
  private _sessionudp?: number; 
  public get sessionudp() {
    return this.getNumberAttribute('sessionudp');
  }
  public set sessionudp(value: number) {
    this._sessionudp = value;
  }
  public resetSessionudp() {
    this._sessionudp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionudpInput() {
    return this._sessionudp;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // synacksent - computed: false, optional: true, required: false
  private _synacksent?: number; 
  public get synacksent() {
    return this.getNumberAttribute('synacksent');
  }
  public set synacksent(value: number) {
    this._synacksent = value;
  }
  public resetSynacksent() {
    this._synacksent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synacksentInput() {
    return this._synacksent;
  }

  // syncookieon - computed: false, optional: true, required: false
  private _syncookieon?: number; 
  public get syncookieon() {
    return this.getNumberAttribute('syncookieon');
  }
  public set syncookieon(value: number) {
    this._syncookieon = value;
  }
  public resetSyncookieon() {
    this._syncookieon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookieonInput() {
    return this._syncookieon;
  }

  // tcphalfopencount - computed: false, optional: true, required: false
  private _tcphalfopencount?: number; 
  public get tcphalfopencount() {
    return this.getNumberAttribute('tcphalfopencount');
  }
  public set tcphalfopencount(value: number) {
    this._tcphalfopencount = value;
  }
  public resetTcphalfopencount() {
    this._tcphalfopencount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcphalfopencountInput() {
    return this._tcphalfopencount;
  }

  // totalbytes - computed: false, optional: true, required: false
  private _totalbytes?: number; 
  public get totalbytes() {
    return this.getNumberAttribute('totalbytes');
  }
  public set totalbytes(value: number) {
    this._totalbytes = value;
  }
  public resetTotalbytes() {
    this._totalbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalbytesInput() {
    return this._totalbytes;
  }

  // totalpackets - computed: false, optional: true, required: false
  private _totalpackets?: number; 
  public get totalpackets() {
    return this.getNumberAttribute('totalpackets');
  }
  public set totalpackets(value: number) {
    this._totalpackets = value;
  }
  public resetTotalpackets() {
    this._totalpackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalpacketsInput() {
    return this._totalpackets;
  }

  // verificationfailed - computed: false, optional: true, required: false
  private _verificationfailed?: number; 
  public get verificationfailed() {
    return this.getNumberAttribute('verificationfailed');
  }
  public set verificationfailed(value: number) {
    this._verificationfailed = value;
  }
  public resetVerificationfailed() {
    this._verificationfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationfailedInput() {
    return this._verificationfailed;
  }

  // verificationpassed - computed: false, optional: true, required: false
  private _verificationpassed?: number; 
  public get verificationpassed() {
    return this.getNumberAttribute('verificationpassed');
  }
  public set verificationpassed(value: number) {
    this._verificationpassed = value;
  }
  public resetVerificationpassed() {
    this._verificationpassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationpassedInput() {
    return this._verificationpassed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper thunder_rule_set_rule_oper}
*/
export class DataThunderRuleSetRuleOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rule_set_rule_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRuleSetRuleOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRuleSetRuleOper to import
  * @param importFromId The id of the existing DataThunderRuleSetRuleOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRuleSetRuleOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rule_set_rule_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rule_set_rule_oper thunder_rule_set_rule_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRuleSetRuleOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderRuleSetRuleOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_rule_set_rule_oper',
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
    this._id = config.id;
    this._name = config.name;
    this._ruleSetName = config.ruleSetName;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderRuleSetRuleOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRuleSetRuleOperOper) {
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
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
      oper: dataThunderRuleSetRuleOperOperToTerraform(this._oper.internalValue),
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
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderRuleSetRuleOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRuleSetRuleOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
