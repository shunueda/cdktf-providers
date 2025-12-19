// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbServiceMatchingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable rule matching on associated zone (default is enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#disable GslbServiceMatchingRules#disable}
  */
  readonly disable?: number;
  /**
  * Enable hit count of rule matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#hitcount_enable GslbServiceMatchingRules#hitcount_enable}
  */
  readonly hitcountEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#id GslbServiceMatchingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#user_tag GslbServiceMatchingRules#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#uuid GslbServiceMatchingRules#uuid}
  */
  readonly uuid?: string;
  /**
  * GSLB zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#zone GslbServiceMatchingRules#zone}
  */
  readonly zone: string;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#rule_list GslbServiceMatchingRules#rule_list}
  */
  readonly ruleList?: GslbServiceMatchingRulesRuleListStruct[] | cdktf.IResolvable;
}
export interface GslbServiceMatchingRulesRuleListHealthState {
  /**
  * Health state of GSLB service-ip (GSLB service-ip name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#gslb_service_ip GslbServiceMatchingRules#gslb_service_ip}
  */
  readonly gslbServiceIp?: string;
  /**
  * Health state of GSLB site (GSLB site name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#gslb_site GslbServiceMatchingRules#gslb_site}
  */
  readonly gslbSite?: string;
  /**
  * 'Up': Up; 'Down': Down;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#service_ip_state GslbServiceMatchingRules#service_ip_state}
  */
  readonly serviceIpState?: string;
  /**
  * 'AllUp': AllUp; 'Down': Down; 'AllUp-or-PartUp': AllUp-or-PartUp; 'Down-or-PartUp': Down-or-PartUp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#site_state GslbServiceMatchingRules#site_state}
  */
  readonly siteState?: string;
  /**
  * Health state of SLB server (SLB server name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#slb_server GslbServiceMatchingRules#slb_server}
  */
  readonly slbServer?: string;
  /**
  * 'Up': Up; 'Down': Down;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#slb_svr_state GslbServiceMatchingRules#slb_svr_state}
  */
  readonly slbSvrState?: string;
}

export function gslbServiceMatchingRulesRuleListHealthStateToTerraform(struct?: GslbServiceMatchingRulesRuleListHealthState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_ip: cdktf.stringToTerraform(struct!.gslbServiceIp),
    gslb_site: cdktf.stringToTerraform(struct!.gslbSite),
    service_ip_state: cdktf.stringToTerraform(struct!.serviceIpState),
    site_state: cdktf.stringToTerraform(struct!.siteState),
    slb_server: cdktf.stringToTerraform(struct!.slbServer),
    slb_svr_state: cdktf.stringToTerraform(struct!.slbSvrState),
  }
}


export function gslbServiceMatchingRulesRuleListHealthStateToHclTerraform(struct?: GslbServiceMatchingRulesRuleListHealthState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.gslbServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_site: {
      value: cdktf.stringToHclTerraform(struct!.gslbSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ip_state: {
      value: cdktf.stringToHclTerraform(struct!.serviceIpState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_state: {
      value: cdktf.stringToHclTerraform(struct!.siteState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_server: {
      value: cdktf.stringToHclTerraform(struct!.slbServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_svr_state: {
      value: cdktf.stringToHclTerraform(struct!.slbSvrState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbServiceMatchingRulesRuleListHealthStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbServiceMatchingRulesRuleListHealthState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIp = this._gslbServiceIp;
    }
    if (this._gslbSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSite = this._gslbSite;
    }
    if (this._serviceIpState !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpState = this._serviceIpState;
    }
    if (this._siteState !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteState = this._siteState;
    }
    if (this._slbServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbServer = this._slbServer;
    }
    if (this._slbSvrState !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbSvrState = this._slbSvrState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbServiceMatchingRulesRuleListHealthState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gslbServiceIp = undefined;
      this._gslbSite = undefined;
      this._serviceIpState = undefined;
      this._siteState = undefined;
      this._slbServer = undefined;
      this._slbSvrState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gslbServiceIp = value.gslbServiceIp;
      this._gslbSite = value.gslbSite;
      this._serviceIpState = value.serviceIpState;
      this._siteState = value.siteState;
      this._slbServer = value.slbServer;
      this._slbSvrState = value.slbSvrState;
    }
  }

  // gslb_service_ip - computed: false, optional: true, required: false
  private _gslbServiceIp?: string; 
  public get gslbServiceIp() {
    return this.getStringAttribute('gslb_service_ip');
  }
  public set gslbServiceIp(value: string) {
    this._gslbServiceIp = value;
  }
  public resetGslbServiceIp() {
    this._gslbServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpInput() {
    return this._gslbServiceIp;
  }

  // gslb_site - computed: false, optional: true, required: false
  private _gslbSite?: string; 
  public get gslbSite() {
    return this.getStringAttribute('gslb_site');
  }
  public set gslbSite(value: string) {
    this._gslbSite = value;
  }
  public resetGslbSite() {
    this._gslbSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteInput() {
    return this._gslbSite;
  }

  // service_ip_state - computed: false, optional: true, required: false
  private _serviceIpState?: string; 
  public get serviceIpState() {
    return this.getStringAttribute('service_ip_state');
  }
  public set serviceIpState(value: string) {
    this._serviceIpState = value;
  }
  public resetServiceIpState() {
    this._serviceIpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpStateInput() {
    return this._serviceIpState;
  }

  // site_state - computed: false, optional: true, required: false
  private _siteState?: string; 
  public get siteState() {
    return this.getStringAttribute('site_state');
  }
  public set siteState(value: string) {
    this._siteState = value;
  }
  public resetSiteState() {
    this._siteState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteStateInput() {
    return this._siteState;
  }

  // slb_server - computed: false, optional: true, required: false
  private _slbServer?: string; 
  public get slbServer() {
    return this.getStringAttribute('slb_server');
  }
  public set slbServer(value: string) {
    this._slbServer = value;
  }
  public resetSlbServer() {
    this._slbServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServerInput() {
    return this._slbServer;
  }

  // slb_svr_state - computed: false, optional: true, required: false
  private _slbSvrState?: string; 
  public get slbSvrState() {
    return this.getStringAttribute('slb_svr_state');
  }
  public set slbSvrState(value: string) {
    this._slbSvrState = value;
  }
  public resetSlbSvrState() {
    this._slbSvrState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbSvrStateInput() {
    return this._slbSvrState;
  }
}

export class GslbServiceMatchingRulesRuleListHealthStateList extends cdktf.ComplexList {
  public internalValue? : GslbServiceMatchingRulesRuleListHealthState[] | cdktf.IResolvable

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
  public get(index: number): GslbServiceMatchingRulesRuleListHealthStateOutputReference {
    return new GslbServiceMatchingRulesRuleListHealthStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbServiceMatchingRulesRuleListStruct {
  /**
  * Domain name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#domain_match_string GslbServiceMatchingRules#domain_match_string}
  */
  readonly domainMatchString?: string;
  /**
  * 'equals': Domain name equals to string; 'contains': Domain name contains string; 'starts-with': Domain name starts with string; 'ends-with': Domain name ends with string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#domain_match_type GslbServiceMatchingRules#domain_match_type}
  */
  readonly domainMatchType?: string;
  /**
  * Sequence number of rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#seq_num GslbServiceMatchingRules#seq_num}
  */
  readonly seqNum: number;
  /**
  * Name of zone service to be redirected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#service GslbServiceMatchingRules#service}
  */
  readonly service?: string;
  /**
  * Client source IPv4 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#src_ipv4 GslbServiceMatchingRules#src_ipv4}
  */
  readonly srcIpv4?: string;
  /**
  * Client source IPv6 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#src_ipv6 GslbServiceMatchingRules#src_ipv6}
  */
  readonly srcIpv6?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#user_tag GslbServiceMatchingRules#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#uuid GslbServiceMatchingRules#uuid}
  */
  readonly uuid?: string;
  /**
  * health_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#health_state GslbServiceMatchingRules#health_state}
  */
  readonly healthState?: GslbServiceMatchingRulesRuleListHealthState[] | cdktf.IResolvable;
}

export function gslbServiceMatchingRulesRuleListStructToTerraform(struct?: GslbServiceMatchingRulesRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_match_string: cdktf.stringToTerraform(struct!.domainMatchString),
    domain_match_type: cdktf.stringToTerraform(struct!.domainMatchType),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    service: cdktf.stringToTerraform(struct!.service),
    src_ipv4: cdktf.stringToTerraform(struct!.srcIpv4),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    health_state: cdktf.listMapper(gslbServiceMatchingRulesRuleListHealthStateToTerraform, true)(struct!.healthState),
  }
}


export function gslbServiceMatchingRulesRuleListStructToHclTerraform(struct?: GslbServiceMatchingRulesRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_match_string: {
      value: cdktf.stringToHclTerraform(struct!.domainMatchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_match_type: {
      value: cdktf.stringToHclTerraform(struct!.domainMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_state: {
      value: cdktf.listMapperHcl(gslbServiceMatchingRulesRuleListHealthStateToHclTerraform, true)(struct!.healthState),
      isBlock: true,
      type: "list",
      storageClassType: "GslbServiceMatchingRulesRuleListHealthStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbServiceMatchingRulesRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbServiceMatchingRulesRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainMatchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatchString = this._domainMatchString;
    }
    if (this._domainMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatchType = this._domainMatchType;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._srcIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv4 = this._srcIpv4;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._healthState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthState = this._healthState?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbServiceMatchingRulesRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainMatchString = undefined;
      this._domainMatchType = undefined;
      this._seqNum = undefined;
      this._service = undefined;
      this._srcIpv4 = undefined;
      this._srcIpv6 = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._healthState.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainMatchString = value.domainMatchString;
      this._domainMatchType = value.domainMatchType;
      this._seqNum = value.seqNum;
      this._service = value.service;
      this._srcIpv4 = value.srcIpv4;
      this._srcIpv6 = value.srcIpv6;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._healthState.internalValue = value.healthState;
    }
  }

  // domain_match_string - computed: false, optional: true, required: false
  private _domainMatchString?: string; 
  public get domainMatchString() {
    return this.getStringAttribute('domain_match_string');
  }
  public set domainMatchString(value: string) {
    this._domainMatchString = value;
  }
  public resetDomainMatchString() {
    this._domainMatchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchStringInput() {
    return this._domainMatchString;
  }

  // domain_match_type - computed: false, optional: true, required: false
  private _domainMatchType?: string; 
  public get domainMatchType() {
    return this.getStringAttribute('domain_match_type');
  }
  public set domainMatchType(value: string) {
    this._domainMatchType = value;
  }
  public resetDomainMatchType() {
    this._domainMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchTypeInput() {
    return this._domainMatchType;
  }

  // seq_num - computed: false, optional: false, required: true
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // src_ipv4 - computed: false, optional: true, required: false
  private _srcIpv4?: string; 
  public get srcIpv4() {
    return this.getStringAttribute('src_ipv4');
  }
  public set srcIpv4(value: string) {
    this._srcIpv4 = value;
  }
  public resetSrcIpv4() {
    this._srcIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4Input() {
    return this._srcIpv4;
  }

  // src_ipv6 - computed: false, optional: true, required: false
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  public resetSrcIpv6() {
    this._srcIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
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

  // health_state - computed: false, optional: true, required: false
  private _healthState = new GslbServiceMatchingRulesRuleListHealthStateList(this, "health_state", false);
  public get healthState() {
    return this._healthState;
  }
  public putHealthState(value: GslbServiceMatchingRulesRuleListHealthState[] | cdktf.IResolvable) {
    this._healthState.internalValue = value;
  }
  public resetHealthState() {
    this._healthState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStateInput() {
    return this._healthState.internalValue;
  }
}

export class GslbServiceMatchingRulesRuleListStructList extends cdktf.ComplexList {
  public internalValue? : GslbServiceMatchingRulesRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbServiceMatchingRulesRuleListStructOutputReference {
    return new GslbServiceMatchingRulesRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules thunder_gslb_service_matching_rules}
*/
export class GslbServiceMatchingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_service_matching_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbServiceMatchingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbServiceMatchingRules to import
  * @param importFromId The id of the existing GslbServiceMatchingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbServiceMatchingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_service_matching_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_service_matching_rules thunder_gslb_service_matching_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbServiceMatchingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: GslbServiceMatchingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_service_matching_rules',
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
    this._disable = config.disable;
    this._hitcountEnable = config.hitcountEnable;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zone = config.zone;
    this._ruleList.internalValue = config.ruleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // hitcount_enable - computed: false, optional: true, required: false
  private _hitcountEnable?: number; 
  public get hitcountEnable() {
    return this.getNumberAttribute('hitcount_enable');
  }
  public set hitcountEnable(value: number) {
    this._hitcountEnable = value;
  }
  public resetHitcountEnable() {
    this._hitcountEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitcountEnableInput() {
    return this._hitcountEnable;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new GslbServiceMatchingRulesRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: GslbServiceMatchingRulesRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      hitcount_enable: cdktf.numberToTerraform(this._hitcountEnable),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone: cdktf.stringToTerraform(this._zone),
      rule_list: cdktf.listMapper(gslbServiceMatchingRulesRuleListStructToTerraform, true)(this._ruleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hitcount_enable: {
        value: cdktf.numberToHclTerraform(this._hitcountEnable),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_list: {
        value: cdktf.listMapperHcl(gslbServiceMatchingRulesRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbServiceMatchingRulesRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
