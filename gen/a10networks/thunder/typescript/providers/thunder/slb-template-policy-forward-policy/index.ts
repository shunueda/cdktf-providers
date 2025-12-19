// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyForwardPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable acos event logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#acos_event_log SlbTemplatePolicyForwardPolicyA#acos_event_log}
  */
  readonly acosEventLog?: number;
  /**
  * Enable adv-match rules and deactive all the other kinds of destination rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#enable_adv_match SlbTemplatePolicyForwardPolicyA#enable_adv_match}
  */
  readonly enableAdvMatch?: number;
  /**
  * Forward HTTP CONNECT request to ICAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#forward_http_connect_to_icap SlbTemplatePolicyForwardPolicyA#forward_http_connect_to_icap}
  */
  readonly forwardHttpConnectToIcap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#id SlbTemplatePolicyForwardPolicyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable local logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#local_logging SlbTemplatePolicyForwardPolicyA#local_logging}
  */
  readonly localLogging?: number;
  /**
  * Inspects only first request of a connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#no_client_conn_reuse SlbTemplatePolicyForwardPolicyA#no_client_conn_reuse}
  */
  readonly noClientConnReuse?: number;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#policy_name SlbTemplatePolicyForwardPolicyA#policy_name}
  */
  readonly policyName: string;
  /**
  * ICAP reqmod template (Reqmod ICAP Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#reqmod_icap SlbTemplatePolicyForwardPolicyA#reqmod_icap}
  */
  readonly reqmodIcap?: string;
  /**
  * Wait for web category to be resolved before taking proxy decision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#require_web_category SlbTemplatePolicyForwardPolicyA#require_web_category}
  */
  readonly requireWebCategory?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action_list SlbTemplatePolicyForwardPolicyA#action_list}
  */
  readonly actionList?: SlbTemplatePolicyForwardPolicyActionListStructA[] | cdktf.IResolvable;
  /**
  * dual_stack_action_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dual_stack_action_list SlbTemplatePolicyForwardPolicyA#dual_stack_action_list}
  */
  readonly dualStackActionList?: SlbTemplatePolicyForwardPolicyDualStackActionListStructA[] | cdktf.IResolvable;
  /**
  * filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#filtering SlbTemplatePolicyForwardPolicyA#filtering}
  */
  readonly filtering?: SlbTemplatePolicyForwardPolicyFilteringA[] | cdktf.IResolvable;
  /**
  * san_filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#san_filtering SlbTemplatePolicyForwardPolicyA#san_filtering}
  */
  readonly sanFiltering?: SlbTemplatePolicyForwardPolicySanFilteringA[] | cdktf.IResolvable;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#source_list SlbTemplatePolicyForwardPolicyA#source_list}
  */
  readonly sourceList?: SlbTemplatePolicyForwardPolicySourceListStructA[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyForwardPolicyActionListSamplingEnableA {
  /**
  * 'all': all; 'hits': Number of requests matching this destination rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#counters1 SlbTemplatePolicyForwardPolicyA#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicyActionListSamplingEnableAToTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicyActionListSamplingEnableAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyActionListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyActionListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyActionListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicyActionListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyActionListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyActionListSamplingEnableAOutputReference {
    return new SlbTemplatePolicyForwardPolicyActionListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyActionListStructA {
  /**
  * 'forward-to-internet': Forward request to Internet; 'forward-to-service-group': Forward request to service group; 'forward-to-proxy': Forward request to HTTP proxy server; 'drop': Drop request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action1 SlbTemplatePolicyForwardPolicyA#action1}
  */
  readonly action1?: string;
  /**
  * drop-message sent to the client as webpage(html tags are included and quotation marks are required for white spaces)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#drop_message SlbTemplatePolicyForwardPolicyA#drop_message}
  */
  readonly dropMessage?: string;
  /**
  * Specify URL to which client request is redirected upon being dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#drop_redirect_url SlbTemplatePolicyForwardPolicyA#drop_redirect_url}
  */
  readonly dropRedirectUrl?: string;
  /**
  * Specify response code for drop action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#drop_response_code SlbTemplatePolicyForwardPolicyA#drop_response_code}
  */
  readonly dropResponseCode?: number;
  /**
  * service group to forward the packets to Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#fake_sg SlbTemplatePolicyForwardPolicyA#fake_sg}
  */
  readonly fakeSg?: string;
  /**
  * Fallback service group for Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#fall_back SlbTemplatePolicyForwardPolicyA#fall_back}
  */
  readonly fallBack?: string;
  /**
  * Source NAT pool or pool group for fallback server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#fall_back_snat SlbTemplatePolicyForwardPolicyA#fall_back_snat}
  */
  readonly fallBackSnat?: string;
  /**
  * Source port translation only for fallback server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#fall_back_snat_pt_only SlbTemplatePolicyForwardPolicyA#fall_back_snat_pt_only}
  */
  readonly fallBackSnatPtOnly?: number;
  /**
  * Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#forward_snat SlbTemplatePolicyForwardPolicyA#forward_snat}
  */
  readonly forwardSnat?: string;
  /**
  * Source port translation only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#forward_snat_pt_only SlbTemplatePolicyForwardPolicyA#forward_snat_pt_only}
  */
  readonly forwardSnatPtOnly?: number;
  /**
  * '301': Moved permanently; '302': Found;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#http_status_code SlbTemplatePolicyForwardPolicyA#http_status_code}
  */
  readonly httpStatusCode?: string;
  /**
  * enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#log SlbTemplatePolicyForwardPolicyA#log}
  */
  readonly log?: number;
  /**
  * Action policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#name SlbTemplatePolicyForwardPolicyA#name}
  */
  readonly name: string;
  /**
  * Enable proxy chaining feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#proxy_chaining SlbTemplatePolicyForwardPolicyA#proxy_chaining}
  */
  readonly proxyChaining?: number;
  /**
  * Forward all https packets to upstream proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#proxy_chaining_bypass SlbTemplatePolicyForwardPolicyA#proxy_chaining_bypass}
  */
  readonly proxyChainingBypass?: number;
  /**
  * service group to forward the packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#real_sg SlbTemplatePolicyForwardPolicyA#real_sg}
  */
  readonly realSg?: string;
  /**
  * Fetch server certificate by upstream proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#support_cert_fetch SlbTemplatePolicyForwardPolicyA#support_cert_fetch}
  */
  readonly supportCertFetch?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#user_tag SlbTemplatePolicyForwardPolicyA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#sampling_enable SlbTemplatePolicyForwardPolicyA#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicyActionListSamplingEnableA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicyActionListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action1: cdktf.stringToTerraform(struct!.action1),
    drop_message: cdktf.stringToTerraform(struct!.dropMessage),
    drop_redirect_url: cdktf.stringToTerraform(struct!.dropRedirectUrl),
    drop_response_code: cdktf.numberToTerraform(struct!.dropResponseCode),
    fake_sg: cdktf.stringToTerraform(struct!.fakeSg),
    fall_back: cdktf.stringToTerraform(struct!.fallBack),
    fall_back_snat: cdktf.stringToTerraform(struct!.fallBackSnat),
    fall_back_snat_pt_only: cdktf.numberToTerraform(struct!.fallBackSnatPtOnly),
    forward_snat: cdktf.stringToTerraform(struct!.forwardSnat),
    forward_snat_pt_only: cdktf.numberToTerraform(struct!.forwardSnatPtOnly),
    http_status_code: cdktf.stringToTerraform(struct!.httpStatusCode),
    log: cdktf.numberToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    proxy_chaining: cdktf.numberToTerraform(struct!.proxyChaining),
    proxy_chaining_bypass: cdktf.numberToTerraform(struct!.proxyChainingBypass),
    real_sg: cdktf.stringToTerraform(struct!.realSg),
    support_cert_fetch: cdktf.numberToTerraform(struct!.supportCertFetch),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicyActionListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicyActionListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyActionListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action1: {
      value: cdktf.stringToHclTerraform(struct!.action1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_message: {
      value: cdktf.stringToHclTerraform(struct!.dropMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.dropRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_response_code: {
      value: cdktf.numberToHclTerraform(struct!.dropResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fake_sg: {
      value: cdktf.stringToHclTerraform(struct!.fakeSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back: {
      value: cdktf.stringToHclTerraform(struct!.fallBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back_snat: {
      value: cdktf.stringToHclTerraform(struct!.fallBackSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back_snat_pt_only: {
      value: cdktf.numberToHclTerraform(struct!.fallBackSnatPtOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_snat: {
      value: cdktf.stringToHclTerraform(struct!.forwardSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_snat_pt_only: {
      value: cdktf.numberToHclTerraform(struct!.forwardSnatPtOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_status_code: {
      value: cdktf.stringToHclTerraform(struct!.httpStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_chaining: {
      value: cdktf.numberToHclTerraform(struct!.proxyChaining),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_chaining_bypass: {
      value: cdktf.numberToHclTerraform(struct!.proxyChainingBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_sg: {
      value: cdktf.stringToHclTerraform(struct!.realSg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_cert_fetch: {
      value: cdktf.numberToHclTerraform(struct!.supportCertFetch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyActionListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyActionListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyActionListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyActionListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.action1 = this._action1;
    }
    if (this._dropMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropMessage = this._dropMessage;
    }
    if (this._dropRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropRedirectUrl = this._dropRedirectUrl;
    }
    if (this._dropResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropResponseCode = this._dropResponseCode;
    }
    if (this._fakeSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.fakeSg = this._fakeSg;
    }
    if (this._fallBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBack = this._fallBack;
    }
    if (this._fallBackSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBackSnat = this._fallBackSnat;
    }
    if (this._fallBackSnatPtOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBackSnatPtOnly = this._fallBackSnatPtOnly;
    }
    if (this._forwardSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSnat = this._forwardSnat;
    }
    if (this._forwardSnatPtOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSnatPtOnly = this._forwardSnatPtOnly;
    }
    if (this._httpStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatusCode = this._httpStatusCode;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proxyChaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyChaining = this._proxyChaining;
    }
    if (this._proxyChainingBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyChainingBypass = this._proxyChainingBypass;
    }
    if (this._realSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.realSg = this._realSg;
    }
    if (this._supportCertFetch !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportCertFetch = this._supportCertFetch;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyActionListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action1 = undefined;
      this._dropMessage = undefined;
      this._dropRedirectUrl = undefined;
      this._dropResponseCode = undefined;
      this._fakeSg = undefined;
      this._fallBack = undefined;
      this._fallBackSnat = undefined;
      this._fallBackSnatPtOnly = undefined;
      this._forwardSnat = undefined;
      this._forwardSnatPtOnly = undefined;
      this._httpStatusCode = undefined;
      this._log = undefined;
      this._name = undefined;
      this._proxyChaining = undefined;
      this._proxyChainingBypass = undefined;
      this._realSg = undefined;
      this._supportCertFetch = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action1 = value.action1;
      this._dropMessage = value.dropMessage;
      this._dropRedirectUrl = value.dropRedirectUrl;
      this._dropResponseCode = value.dropResponseCode;
      this._fakeSg = value.fakeSg;
      this._fallBack = value.fallBack;
      this._fallBackSnat = value.fallBackSnat;
      this._fallBackSnatPtOnly = value.fallBackSnatPtOnly;
      this._forwardSnat = value.forwardSnat;
      this._forwardSnatPtOnly = value.forwardSnatPtOnly;
      this._httpStatusCode = value.httpStatusCode;
      this._log = value.log;
      this._name = value.name;
      this._proxyChaining = value.proxyChaining;
      this._proxyChainingBypass = value.proxyChainingBypass;
      this._realSg = value.realSg;
      this._supportCertFetch = value.supportCertFetch;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action1 - computed: false, optional: true, required: false
  private _action1?: string; 
  public get action1() {
    return this.getStringAttribute('action1');
  }
  public set action1(value: string) {
    this._action1 = value;
  }
  public resetAction1() {
    this._action1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get action1Input() {
    return this._action1;
  }

  // drop_message - computed: false, optional: true, required: false
  private _dropMessage?: string; 
  public get dropMessage() {
    return this.getStringAttribute('drop_message');
  }
  public set dropMessage(value: string) {
    this._dropMessage = value;
  }
  public resetDropMessage() {
    this._dropMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropMessageInput() {
    return this._dropMessage;
  }

  // drop_redirect_url - computed: false, optional: true, required: false
  private _dropRedirectUrl?: string; 
  public get dropRedirectUrl() {
    return this.getStringAttribute('drop_redirect_url');
  }
  public set dropRedirectUrl(value: string) {
    this._dropRedirectUrl = value;
  }
  public resetDropRedirectUrl() {
    this._dropRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRedirectUrlInput() {
    return this._dropRedirectUrl;
  }

  // drop_response_code - computed: false, optional: true, required: false
  private _dropResponseCode?: number; 
  public get dropResponseCode() {
    return this.getNumberAttribute('drop_response_code');
  }
  public set dropResponseCode(value: number) {
    this._dropResponseCode = value;
  }
  public resetDropResponseCode() {
    this._dropResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropResponseCodeInput() {
    return this._dropResponseCode;
  }

  // fake_sg - computed: false, optional: true, required: false
  private _fakeSg?: string; 
  public get fakeSg() {
    return this.getStringAttribute('fake_sg');
  }
  public set fakeSg(value: string) {
    this._fakeSg = value;
  }
  public resetFakeSg() {
    this._fakeSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeSgInput() {
    return this._fakeSg;
  }

  // fall_back - computed: false, optional: true, required: false
  private _fallBack?: string; 
  public get fallBack() {
    return this.getStringAttribute('fall_back');
  }
  public set fallBack(value: string) {
    this._fallBack = value;
  }
  public resetFallBack() {
    this._fallBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackInput() {
    return this._fallBack;
  }

  // fall_back_snat - computed: false, optional: true, required: false
  private _fallBackSnat?: string; 
  public get fallBackSnat() {
    return this.getStringAttribute('fall_back_snat');
  }
  public set fallBackSnat(value: string) {
    this._fallBackSnat = value;
  }
  public resetFallBackSnat() {
    this._fallBackSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackSnatInput() {
    return this._fallBackSnat;
  }

  // fall_back_snat_pt_only - computed: false, optional: true, required: false
  private _fallBackSnatPtOnly?: number; 
  public get fallBackSnatPtOnly() {
    return this.getNumberAttribute('fall_back_snat_pt_only');
  }
  public set fallBackSnatPtOnly(value: number) {
    this._fallBackSnatPtOnly = value;
  }
  public resetFallBackSnatPtOnly() {
    this._fallBackSnatPtOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackSnatPtOnlyInput() {
    return this._fallBackSnatPtOnly;
  }

  // forward_snat - computed: false, optional: true, required: false
  private _forwardSnat?: string; 
  public get forwardSnat() {
    return this.getStringAttribute('forward_snat');
  }
  public set forwardSnat(value: string) {
    this._forwardSnat = value;
  }
  public resetForwardSnat() {
    this._forwardSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSnatInput() {
    return this._forwardSnat;
  }

  // forward_snat_pt_only - computed: false, optional: true, required: false
  private _forwardSnatPtOnly?: number; 
  public get forwardSnatPtOnly() {
    return this.getNumberAttribute('forward_snat_pt_only');
  }
  public set forwardSnatPtOnly(value: number) {
    this._forwardSnatPtOnly = value;
  }
  public resetForwardSnatPtOnly() {
    this._forwardSnatPtOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSnatPtOnlyInput() {
    return this._forwardSnatPtOnly;
  }

  // http_status_code - computed: false, optional: true, required: false
  private _httpStatusCode?: string; 
  public get httpStatusCode() {
    return this.getStringAttribute('http_status_code');
  }
  public set httpStatusCode(value: string) {
    this._httpStatusCode = value;
  }
  public resetHttpStatusCode() {
    this._httpStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusCodeInput() {
    return this._httpStatusCode;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // proxy_chaining - computed: false, optional: true, required: false
  private _proxyChaining?: number; 
  public get proxyChaining() {
    return this.getNumberAttribute('proxy_chaining');
  }
  public set proxyChaining(value: number) {
    this._proxyChaining = value;
  }
  public resetProxyChaining() {
    this._proxyChaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyChainingInput() {
    return this._proxyChaining;
  }

  // proxy_chaining_bypass - computed: false, optional: true, required: false
  private _proxyChainingBypass?: number; 
  public get proxyChainingBypass() {
    return this.getNumberAttribute('proxy_chaining_bypass');
  }
  public set proxyChainingBypass(value: number) {
    this._proxyChainingBypass = value;
  }
  public resetProxyChainingBypass() {
    this._proxyChainingBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyChainingBypassInput() {
    return this._proxyChainingBypass;
  }

  // real_sg - computed: false, optional: true, required: false
  private _realSg?: string; 
  public get realSg() {
    return this.getStringAttribute('real_sg');
  }
  public set realSg(value: string) {
    this._realSg = value;
  }
  public resetRealSg() {
    this._realSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realSgInput() {
    return this._realSg;
  }

  // support_cert_fetch - computed: false, optional: true, required: false
  private _supportCertFetch?: number; 
  public get supportCertFetch() {
    return this.getNumberAttribute('support_cert_fetch');
  }
  public set supportCertFetch(value: number) {
    this._supportCertFetch = value;
  }
  public resetSupportCertFetch() {
    this._supportCertFetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCertFetchInput() {
    return this._supportCertFetch;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicyActionListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicyActionListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicyActionListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyActionListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyActionListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicyActionListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA {
  /**
  * 'all': all; 'hits': Number of requests forward by this action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#counters1 SlbTemplatePolicyForwardPolicyA#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAToTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAOutputReference {
    return new SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyDualStackActionListStructA {
  /**
  * Fallback service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#fall_back SlbTemplatePolicyForwardPolicyA#fall_back}
  */
  readonly fallBack?: string;
  /**
  * Source NAT pool or pool group for fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#fall_back_snat SlbTemplatePolicyForwardPolicyA#fall_back_snat}
  */
  readonly fallBackSnat?: string;
  /**
  * IPv4 service group to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#ipv4 SlbTemplatePolicyForwardPolicyA#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv4 source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#ipv4_snat SlbTemplatePolicyForwardPolicyA#ipv4_snat}
  */
  readonly ipv4Snat?: string;
  /**
  * IPv6 service group to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#ipv6 SlbTemplatePolicyForwardPolicyA#ipv6}
  */
  readonly ipv6?: string;
  /**
  * IPv6 source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#ipv6_snat SlbTemplatePolicyForwardPolicyA#ipv6_snat}
  */
  readonly ipv6Snat?: string;
  /**
  * enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#log SlbTemplatePolicyForwardPolicyA#log}
  */
  readonly log?: number;
  /**
  * Action name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#name SlbTemplatePolicyForwardPolicyA#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#user_tag SlbTemplatePolicyForwardPolicyA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#sampling_enable SlbTemplatePolicyForwardPolicyA#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicyDualStackActionListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_back: cdktf.stringToTerraform(struct!.fallBack),
    fall_back_snat: cdktf.stringToTerraform(struct!.fallBackSnat),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv4_snat: cdktf.stringToTerraform(struct!.ipv4Snat),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    ipv6_snat: cdktf.stringToTerraform(struct!.ipv6Snat),
    log: cdktf.numberToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicyDualStackActionListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_back: {
      value: cdktf.stringToHclTerraform(struct!.fallBack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fall_back_snat: {
      value: cdktf.stringToHclTerraform(struct!.fallBackSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_snat: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Snat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_snat: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Snat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyDualStackActionListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBack = this._fallBack;
    }
    if (this._fallBackSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallBackSnat = this._fallBackSnat;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv4Snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Snat = this._ipv4Snat;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Snat = this._ipv6Snat;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyDualStackActionListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallBack = undefined;
      this._fallBackSnat = undefined;
      this._ipv4 = undefined;
      this._ipv4Snat = undefined;
      this._ipv6 = undefined;
      this._ipv6Snat = undefined;
      this._log = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallBack = value.fallBack;
      this._fallBackSnat = value.fallBackSnat;
      this._ipv4 = value.ipv4;
      this._ipv4Snat = value.ipv4Snat;
      this._ipv6 = value.ipv6;
      this._ipv6Snat = value.ipv6Snat;
      this._log = value.log;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // fall_back - computed: false, optional: true, required: false
  private _fallBack?: string; 
  public get fallBack() {
    return this.getStringAttribute('fall_back');
  }
  public set fallBack(value: string) {
    this._fallBack = value;
  }
  public resetFallBack() {
    this._fallBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackInput() {
    return this._fallBack;
  }

  // fall_back_snat - computed: false, optional: true, required: false
  private _fallBackSnat?: string; 
  public get fallBackSnat() {
    return this.getStringAttribute('fall_back_snat');
  }
  public set fallBackSnat(value: string) {
    this._fallBackSnat = value;
  }
  public resetFallBackSnat() {
    this._fallBackSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallBackSnatInput() {
    return this._fallBackSnat;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_snat - computed: false, optional: true, required: false
  private _ipv4Snat?: string; 
  public get ipv4Snat() {
    return this.getStringAttribute('ipv4_snat');
  }
  public set ipv4Snat(value: string) {
    this._ipv4Snat = value;
  }
  public resetIpv4Snat() {
    this._ipv4Snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SnatInput() {
    return this._ipv4Snat;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_snat - computed: false, optional: true, required: false
  private _ipv6Snat?: string; 
  public get ipv6Snat() {
    return this.getStringAttribute('ipv6_snat');
  }
  public set ipv6Snat(value: string) {
    this._ipv6Snat = value;
  }
  public resetIpv6Snat() {
    this._ipv6Snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SnatInput() {
    return this._ipv6Snat;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicyDualStackActionListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicyDualStackActionListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyDualStackActionListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyDualStackActionListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicyDualStackActionListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicyFilteringA {
  /**
  * 'bypassed-sni-disable': Disable SNI filtering for bypassed URL's(enabled by default); 'intercepted-sni-enable': Enable SNI filtering for intercepted URL's(disabled by default); 'intercepted-http-disable': Disable HTTP(host/URL) filtering for intercepted URL's(enabled by default); 'no-sni-allow': Allow connection if SNI filtering is enabled and SNI header is not present(Drop by default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#ssli_url_filtering SlbTemplatePolicyForwardPolicyA#ssli_url_filtering}
  */
  readonly ssliUrlFiltering?: string;
}

export function slbTemplatePolicyForwardPolicyFilteringAToTerraform(struct?: SlbTemplatePolicyForwardPolicyFilteringA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssli_url_filtering: cdktf.stringToTerraform(struct!.ssliUrlFiltering),
  }
}


export function slbTemplatePolicyForwardPolicyFilteringAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyFilteringA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssli_url_filtering: {
      value: cdktf.stringToHclTerraform(struct!.ssliUrlFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicyFilteringAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyFilteringA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssliUrlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliUrlFiltering = this._ssliUrlFiltering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicyFilteringA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssliUrlFiltering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssliUrlFiltering = value.ssliUrlFiltering;
    }
  }

  // ssli_url_filtering - computed: false, optional: true, required: false
  private _ssliUrlFiltering?: string; 
  public get ssliUrlFiltering() {
    return this.getStringAttribute('ssli_url_filtering');
  }
  public set ssliUrlFiltering(value: string) {
    this._ssliUrlFiltering = value;
  }
  public resetSsliUrlFiltering() {
    this._ssliUrlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliUrlFilteringInput() {
    return this._ssliUrlFiltering;
  }
}

export class SlbTemplatePolicyForwardPolicyFilteringAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyFilteringA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyFilteringAOutputReference {
    return new SlbTemplatePolicyForwardPolicyFilteringAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySanFilteringA {
  /**
  * 'enable-san': Enable SAN filtering(disabled by default); 'bypassed-san-disable': Disable SAN filtering for bypassed URL's(enabled by default); 'intercepted-san-enable': Enable SAN filtering for intercepted URL's(disabled by default); 'no-san-allow': Allow connection if SAN filtering is enabled and SAN field is not present(Drop by default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#ssli_url_filtering_san SlbTemplatePolicyForwardPolicyA#ssli_url_filtering_san}
  */
  readonly ssliUrlFilteringSan?: string;
}

export function slbTemplatePolicyForwardPolicySanFilteringAToTerraform(struct?: SlbTemplatePolicyForwardPolicySanFilteringA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssli_url_filtering_san: cdktf.stringToTerraform(struct!.ssliUrlFilteringSan),
  }
}


export function slbTemplatePolicyForwardPolicySanFilteringAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySanFilteringA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssli_url_filtering_san: {
      value: cdktf.stringToHclTerraform(struct!.ssliUrlFilteringSan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySanFilteringAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySanFilteringA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssliUrlFilteringSan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssliUrlFilteringSan = this._ssliUrlFilteringSan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySanFilteringA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssliUrlFilteringSan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssliUrlFilteringSan = value.ssliUrlFilteringSan;
    }
  }

  // ssli_url_filtering_san - computed: false, optional: true, required: false
  private _ssliUrlFilteringSan?: string; 
  public get ssliUrlFilteringSan() {
    return this.getStringAttribute('ssli_url_filtering_san');
  }
  public set ssliUrlFilteringSan(value: string) {
    this._ssliUrlFilteringSan = value;
  }
  public resetSsliUrlFilteringSan() {
    this._ssliUrlFilteringSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssliUrlFilteringSanInput() {
    return this._ssliUrlFilteringSan;
  }
}

export class SlbTemplatePolicyForwardPolicySanFilteringAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySanFilteringA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySanFilteringAOutputReference {
    return new SlbTemplatePolicyForwardPolicySanFilteringAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA {
  /**
  * 'all': all; 'hits': Number of requests hit this rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#counters1 SlbTemplatePolicyForwardPolicyA#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA {
  /**
  * Forwading action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action SlbTemplatePolicyForwardPolicyA#action}
  */
  readonly action?: string;
  /**
  * Disable REQMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#disable_reqmod_icap SlbTemplatePolicyForwardPolicyA#disable_reqmod_icap}
  */
  readonly disableReqmodIcap?: number;
  /**
  * Disable RESPMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#disable_respmod_icap SlbTemplatePolicyForwardPolicyA#disable_respmod_icap}
  */
  readonly disableRespmodIcap?: number;
  /**
  * Forwarding action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dual_stack_action SlbTemplatePolicyForwardPolicyA#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Match request host (HTTP stage) or SNI/SAN (SSL stage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_host SlbTemplatePolicyForwardPolicyA#match_host}
  */
  readonly matchHost?: string;
  /**
  * Match the value of HTTP header "Content-Encoding"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_content_encoding SlbTemplatePolicyForwardPolicyA#match_http_content_encoding}
  */
  readonly matchHttpContentEncoding?: string;
  /**
  * Match the value of HTTP header "Content-Length" with an inclusive range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_content_length_range_begin SlbTemplatePolicyForwardPolicyA#match_http_content_length_range_begin}
  */
  readonly matchHttpContentLengthRangeBegin?: number;
  /**
  * End of the "Content-Length" range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_content_length_range_end SlbTemplatePolicyForwardPolicyA#match_http_content_length_range_end}
  */
  readonly matchHttpContentLengthRangeEnd?: number;
  /**
  * Match the value of HTTP header "Content-Type"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_content_type SlbTemplatePolicyForwardPolicyA#match_http_content_type}
  */
  readonly matchHttpContentType?: string;
  /**
  * Matching the name of all request headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_header SlbTemplatePolicyForwardPolicyA#match_http_header}
  */
  readonly matchHttpHeader?: string;
  /**
  * Match HTTP request method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_connect SlbTemplatePolicyForwardPolicyA#match_http_method_connect}
  */
  readonly matchHttpMethodConnect?: number;
  /**
  * Match HTTP request method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_delete SlbTemplatePolicyForwardPolicyA#match_http_method_delete}
  */
  readonly matchHttpMethodDelete?: number;
  /**
  * Match HTTP request method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_get SlbTemplatePolicyForwardPolicyA#match_http_method_get}
  */
  readonly matchHttpMethodGet?: number;
  /**
  * Match HTTP request method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_head SlbTemplatePolicyForwardPolicyA#match_http_method_head}
  */
  readonly matchHttpMethodHead?: number;
  /**
  * Match HTTP request method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_options SlbTemplatePolicyForwardPolicyA#match_http_method_options}
  */
  readonly matchHttpMethodOptions?: number;
  /**
  * Match HTTP request method PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_patch SlbTemplatePolicyForwardPolicyA#match_http_method_patch}
  */
  readonly matchHttpMethodPatch?: number;
  /**
  * Match HTTP request method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_post SlbTemplatePolicyForwardPolicyA#match_http_method_post}
  */
  readonly matchHttpMethodPost?: number;
  /**
  * Match HTTP request method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_put SlbTemplatePolicyForwardPolicyA#match_http_method_put}
  */
  readonly matchHttpMethodPut?: number;
  /**
  * Match HTTP request method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_method_trace SlbTemplatePolicyForwardPolicyA#match_http_method_trace}
  */
  readonly matchHttpMethodTrace?: number;
  /**
  * Match file extension of URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_request_file_extension SlbTemplatePolicyForwardPolicyA#match_http_request_file_extension}
  */
  readonly matchHttpRequestFileExtension?: string;
  /**
  * Match URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_url SlbTemplatePolicyForwardPolicyA#match_http_url}
  */
  readonly matchHttpUrl?: string;
  /**
  * Match URI in HTTP request line by given regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_url_regex SlbTemplatePolicyForwardPolicyA#match_http_url_regex}
  */
  readonly matchHttpUrlRegex?: string;
  /**
  * Matching the value of HTTP header "User-Agent"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_http_user_agent SlbTemplatePolicyForwardPolicyA#match_http_user_agent}
  */
  readonly matchHttpUserAgent?: string;
  /**
  * Match target server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_server_address SlbTemplatePolicyForwardPolicyA#match_server_address}
  */
  readonly matchServerAddress?: string;
  /**
  * Match target server port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_server_port SlbTemplatePolicyForwardPolicyA#match_server_port}
  */
  readonly matchServerPort?: number;
  /**
  * Math targer server port range inclusively
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_server_port_range_begin SlbTemplatePolicyForwardPolicyA#match_server_port_range_begin}
  */
  readonly matchServerPortRangeBegin?: number;
  /**
  * End of port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_server_port_range_end SlbTemplatePolicyForwardPolicyA#match_server_port_range_end}
  */
  readonly matchServerPortRangeEnd?: number;
  /**
  * Enable rule in this time-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_time_range SlbTemplatePolicyForwardPolicyA#match_time_range}
  */
  readonly matchTimeRange?: string;
  /**
  * Match web-category list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_web_category_list SlbTemplatePolicyForwardPolicyA#match_web_category_list}
  */
  readonly matchWebCategoryList?: string;
  /**
  * Match web-reputation scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_web_reputation_scope SlbTemplatePolicyForwardPolicyA#match_web_reputation_scope}
  */
  readonly matchWebReputationScope?: string;
  /**
  * Send notify-page to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#notify_page SlbTemplatePolicyForwardPolicyA#notify_page}
  */
  readonly notifyPage?: string;
  /**
  * Rule priority (1000 is highest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#priority SlbTemplatePolicyForwardPolicyA#priority}
  */
  readonly priority: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#user_tag SlbTemplatePolicyForwardPolicyA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#sampling_enable SlbTemplatePolicyForwardPolicyA#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    disable_reqmod_icap: cdktf.numberToTerraform(struct!.disableReqmodIcap),
    disable_respmod_icap: cdktf.numberToTerraform(struct!.disableRespmodIcap),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    match_host: cdktf.stringToTerraform(struct!.matchHost),
    match_http_content_encoding: cdktf.stringToTerraform(struct!.matchHttpContentEncoding),
    match_http_content_length_range_begin: cdktf.numberToTerraform(struct!.matchHttpContentLengthRangeBegin),
    match_http_content_length_range_end: cdktf.numberToTerraform(struct!.matchHttpContentLengthRangeEnd),
    match_http_content_type: cdktf.stringToTerraform(struct!.matchHttpContentType),
    match_http_header: cdktf.stringToTerraform(struct!.matchHttpHeader),
    match_http_method_connect: cdktf.numberToTerraform(struct!.matchHttpMethodConnect),
    match_http_method_delete: cdktf.numberToTerraform(struct!.matchHttpMethodDelete),
    match_http_method_get: cdktf.numberToTerraform(struct!.matchHttpMethodGet),
    match_http_method_head: cdktf.numberToTerraform(struct!.matchHttpMethodHead),
    match_http_method_options: cdktf.numberToTerraform(struct!.matchHttpMethodOptions),
    match_http_method_patch: cdktf.numberToTerraform(struct!.matchHttpMethodPatch),
    match_http_method_post: cdktf.numberToTerraform(struct!.matchHttpMethodPost),
    match_http_method_put: cdktf.numberToTerraform(struct!.matchHttpMethodPut),
    match_http_method_trace: cdktf.numberToTerraform(struct!.matchHttpMethodTrace),
    match_http_request_file_extension: cdktf.stringToTerraform(struct!.matchHttpRequestFileExtension),
    match_http_url: cdktf.stringToTerraform(struct!.matchHttpUrl),
    match_http_url_regex: cdktf.stringToTerraform(struct!.matchHttpUrlRegex),
    match_http_user_agent: cdktf.stringToTerraform(struct!.matchHttpUserAgent),
    match_server_address: cdktf.stringToTerraform(struct!.matchServerAddress),
    match_server_port: cdktf.numberToTerraform(struct!.matchServerPort),
    match_server_port_range_begin: cdktf.numberToTerraform(struct!.matchServerPortRangeBegin),
    match_server_port_range_end: cdktf.numberToTerraform(struct!.matchServerPortRangeEnd),
    match_time_range: cdktf.stringToTerraform(struct!.matchTimeRange),
    match_web_category_list: cdktf.stringToTerraform(struct!.matchWebCategoryList),
    match_web_reputation_scope: cdktf.stringToTerraform(struct!.matchWebReputationScope),
    notify_page: cdktf.stringToTerraform(struct!.notifyPage),
    priority: cdktf.numberToTerraform(struct!.priority),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA | cdktf.IResolvable): any {
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
    disable_reqmod_icap: {
      value: cdktf.numberToHclTerraform(struct!.disableReqmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_respmod_icap: {
      value: cdktf.numberToHclTerraform(struct!.disableRespmodIcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_host: {
      value: cdktf.stringToHclTerraform(struct!.matchHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpContentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_content_length_range_begin: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpContentLengthRangeBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_content_length_range_end: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpContentLengthRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_content_type: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_header: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_method_connect: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_delete: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_get: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_head: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodHead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_options: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_patch: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodPatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_post: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_put: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_method_trace: {
      value: cdktf.numberToHclTerraform(struct!.matchHttpMethodTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_http_request_file_extension: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpRequestFileExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_url: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_url_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpUrlRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_http_user_agent: {
      value: cdktf.stringToHclTerraform(struct!.matchHttpUserAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_server_address: {
      value: cdktf.stringToHclTerraform(struct!.matchServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_server_port: {
      value: cdktf.numberToHclTerraform(struct!.matchServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_server_port_range_begin: {
      value: cdktf.numberToHclTerraform(struct!.matchServerPortRangeBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_server_port_range_end: {
      value: cdktf.numberToHclTerraform(struct!.matchServerPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_time_range: {
      value: cdktf.stringToHclTerraform(struct!.matchTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_web_category_list: {
      value: cdktf.stringToHclTerraform(struct!.matchWebCategoryList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_web_reputation_scope: {
      value: cdktf.stringToHclTerraform(struct!.matchWebReputationScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_page: {
      value: cdktf.stringToHclTerraform(struct!.notifyPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._disableReqmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReqmodIcap = this._disableReqmodIcap;
    }
    if (this._disableRespmodIcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRespmodIcap = this._disableRespmodIcap;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._matchHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHost = this._matchHost;
    }
    if (this._matchHttpContentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentEncoding = this._matchHttpContentEncoding;
    }
    if (this._matchHttpContentLengthRangeBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentLengthRangeBegin = this._matchHttpContentLengthRangeBegin;
    }
    if (this._matchHttpContentLengthRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentLengthRangeEnd = this._matchHttpContentLengthRangeEnd;
    }
    if (this._matchHttpContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpContentType = this._matchHttpContentType;
    }
    if (this._matchHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpHeader = this._matchHttpHeader;
    }
    if (this._matchHttpMethodConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodConnect = this._matchHttpMethodConnect;
    }
    if (this._matchHttpMethodDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodDelete = this._matchHttpMethodDelete;
    }
    if (this._matchHttpMethodGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodGet = this._matchHttpMethodGet;
    }
    if (this._matchHttpMethodHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodHead = this._matchHttpMethodHead;
    }
    if (this._matchHttpMethodOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodOptions = this._matchHttpMethodOptions;
    }
    if (this._matchHttpMethodPatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodPatch = this._matchHttpMethodPatch;
    }
    if (this._matchHttpMethodPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodPost = this._matchHttpMethodPost;
    }
    if (this._matchHttpMethodPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodPut = this._matchHttpMethodPut;
    }
    if (this._matchHttpMethodTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpMethodTrace = this._matchHttpMethodTrace;
    }
    if (this._matchHttpRequestFileExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpRequestFileExtension = this._matchHttpRequestFileExtension;
    }
    if (this._matchHttpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpUrl = this._matchHttpUrl;
    }
    if (this._matchHttpUrlRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpUrlRegex = this._matchHttpUrlRegex;
    }
    if (this._matchHttpUserAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHttpUserAgent = this._matchHttpUserAgent;
    }
    if (this._matchServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerAddress = this._matchServerAddress;
    }
    if (this._matchServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerPort = this._matchServerPort;
    }
    if (this._matchServerPortRangeBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerPortRangeBegin = this._matchServerPortRangeBegin;
    }
    if (this._matchServerPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchServerPortRangeEnd = this._matchServerPortRangeEnd;
    }
    if (this._matchTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTimeRange = this._matchTimeRange;
    }
    if (this._matchWebCategoryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchWebCategoryList = this._matchWebCategoryList;
    }
    if (this._matchWebReputationScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchWebReputationScope = this._matchWebReputationScope;
    }
    if (this._notifyPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyPage = this._notifyPage;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._disableReqmodIcap = undefined;
      this._disableRespmodIcap = undefined;
      this._dualStackAction = undefined;
      this._matchHost = undefined;
      this._matchHttpContentEncoding = undefined;
      this._matchHttpContentLengthRangeBegin = undefined;
      this._matchHttpContentLengthRangeEnd = undefined;
      this._matchHttpContentType = undefined;
      this._matchHttpHeader = undefined;
      this._matchHttpMethodConnect = undefined;
      this._matchHttpMethodDelete = undefined;
      this._matchHttpMethodGet = undefined;
      this._matchHttpMethodHead = undefined;
      this._matchHttpMethodOptions = undefined;
      this._matchHttpMethodPatch = undefined;
      this._matchHttpMethodPost = undefined;
      this._matchHttpMethodPut = undefined;
      this._matchHttpMethodTrace = undefined;
      this._matchHttpRequestFileExtension = undefined;
      this._matchHttpUrl = undefined;
      this._matchHttpUrlRegex = undefined;
      this._matchHttpUserAgent = undefined;
      this._matchServerAddress = undefined;
      this._matchServerPort = undefined;
      this._matchServerPortRangeBegin = undefined;
      this._matchServerPortRangeEnd = undefined;
      this._matchTimeRange = undefined;
      this._matchWebCategoryList = undefined;
      this._matchWebReputationScope = undefined;
      this._notifyPage = undefined;
      this._priority = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._disableReqmodIcap = value.disableReqmodIcap;
      this._disableRespmodIcap = value.disableRespmodIcap;
      this._dualStackAction = value.dualStackAction;
      this._matchHost = value.matchHost;
      this._matchHttpContentEncoding = value.matchHttpContentEncoding;
      this._matchHttpContentLengthRangeBegin = value.matchHttpContentLengthRangeBegin;
      this._matchHttpContentLengthRangeEnd = value.matchHttpContentLengthRangeEnd;
      this._matchHttpContentType = value.matchHttpContentType;
      this._matchHttpHeader = value.matchHttpHeader;
      this._matchHttpMethodConnect = value.matchHttpMethodConnect;
      this._matchHttpMethodDelete = value.matchHttpMethodDelete;
      this._matchHttpMethodGet = value.matchHttpMethodGet;
      this._matchHttpMethodHead = value.matchHttpMethodHead;
      this._matchHttpMethodOptions = value.matchHttpMethodOptions;
      this._matchHttpMethodPatch = value.matchHttpMethodPatch;
      this._matchHttpMethodPost = value.matchHttpMethodPost;
      this._matchHttpMethodPut = value.matchHttpMethodPut;
      this._matchHttpMethodTrace = value.matchHttpMethodTrace;
      this._matchHttpRequestFileExtension = value.matchHttpRequestFileExtension;
      this._matchHttpUrl = value.matchHttpUrl;
      this._matchHttpUrlRegex = value.matchHttpUrlRegex;
      this._matchHttpUserAgent = value.matchHttpUserAgent;
      this._matchServerAddress = value.matchServerAddress;
      this._matchServerPort = value.matchServerPort;
      this._matchServerPortRangeBegin = value.matchServerPortRangeBegin;
      this._matchServerPortRangeEnd = value.matchServerPortRangeEnd;
      this._matchTimeRange = value.matchTimeRange;
      this._matchWebCategoryList = value.matchWebCategoryList;
      this._matchWebReputationScope = value.matchWebReputationScope;
      this._notifyPage = value.notifyPage;
      this._priority = value.priority;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // disable_reqmod_icap - computed: false, optional: true, required: false
  private _disableReqmodIcap?: number; 
  public get disableReqmodIcap() {
    return this.getNumberAttribute('disable_reqmod_icap');
  }
  public set disableReqmodIcap(value: number) {
    this._disableReqmodIcap = value;
  }
  public resetDisableReqmodIcap() {
    this._disableReqmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReqmodIcapInput() {
    return this._disableReqmodIcap;
  }

  // disable_respmod_icap - computed: false, optional: true, required: false
  private _disableRespmodIcap?: number; 
  public get disableRespmodIcap() {
    return this.getNumberAttribute('disable_respmod_icap');
  }
  public set disableRespmodIcap(value: number) {
    this._disableRespmodIcap = value;
  }
  public resetDisableRespmodIcap() {
    this._disableRespmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRespmodIcapInput() {
    return this._disableRespmodIcap;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // match_host - computed: false, optional: true, required: false
  private _matchHost?: string; 
  public get matchHost() {
    return this.getStringAttribute('match_host');
  }
  public set matchHost(value: string) {
    this._matchHost = value;
  }
  public resetMatchHost() {
    this._matchHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHostInput() {
    return this._matchHost;
  }

  // match_http_content_encoding - computed: false, optional: true, required: false
  private _matchHttpContentEncoding?: string; 
  public get matchHttpContentEncoding() {
    return this.getStringAttribute('match_http_content_encoding');
  }
  public set matchHttpContentEncoding(value: string) {
    this._matchHttpContentEncoding = value;
  }
  public resetMatchHttpContentEncoding() {
    this._matchHttpContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentEncodingInput() {
    return this._matchHttpContentEncoding;
  }

  // match_http_content_length_range_begin - computed: false, optional: true, required: false
  private _matchHttpContentLengthRangeBegin?: number; 
  public get matchHttpContentLengthRangeBegin() {
    return this.getNumberAttribute('match_http_content_length_range_begin');
  }
  public set matchHttpContentLengthRangeBegin(value: number) {
    this._matchHttpContentLengthRangeBegin = value;
  }
  public resetMatchHttpContentLengthRangeBegin() {
    this._matchHttpContentLengthRangeBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentLengthRangeBeginInput() {
    return this._matchHttpContentLengthRangeBegin;
  }

  // match_http_content_length_range_end - computed: false, optional: true, required: false
  private _matchHttpContentLengthRangeEnd?: number; 
  public get matchHttpContentLengthRangeEnd() {
    return this.getNumberAttribute('match_http_content_length_range_end');
  }
  public set matchHttpContentLengthRangeEnd(value: number) {
    this._matchHttpContentLengthRangeEnd = value;
  }
  public resetMatchHttpContentLengthRangeEnd() {
    this._matchHttpContentLengthRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentLengthRangeEndInput() {
    return this._matchHttpContentLengthRangeEnd;
  }

  // match_http_content_type - computed: false, optional: true, required: false
  private _matchHttpContentType?: string; 
  public get matchHttpContentType() {
    return this.getStringAttribute('match_http_content_type');
  }
  public set matchHttpContentType(value: string) {
    this._matchHttpContentType = value;
  }
  public resetMatchHttpContentType() {
    this._matchHttpContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpContentTypeInput() {
    return this._matchHttpContentType;
  }

  // match_http_header - computed: false, optional: true, required: false
  private _matchHttpHeader?: string; 
  public get matchHttpHeader() {
    return this.getStringAttribute('match_http_header');
  }
  public set matchHttpHeader(value: string) {
    this._matchHttpHeader = value;
  }
  public resetMatchHttpHeader() {
    this._matchHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpHeaderInput() {
    return this._matchHttpHeader;
  }

  // match_http_method_connect - computed: false, optional: true, required: false
  private _matchHttpMethodConnect?: number; 
  public get matchHttpMethodConnect() {
    return this.getNumberAttribute('match_http_method_connect');
  }
  public set matchHttpMethodConnect(value: number) {
    this._matchHttpMethodConnect = value;
  }
  public resetMatchHttpMethodConnect() {
    this._matchHttpMethodConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodConnectInput() {
    return this._matchHttpMethodConnect;
  }

  // match_http_method_delete - computed: false, optional: true, required: false
  private _matchHttpMethodDelete?: number; 
  public get matchHttpMethodDelete() {
    return this.getNumberAttribute('match_http_method_delete');
  }
  public set matchHttpMethodDelete(value: number) {
    this._matchHttpMethodDelete = value;
  }
  public resetMatchHttpMethodDelete() {
    this._matchHttpMethodDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodDeleteInput() {
    return this._matchHttpMethodDelete;
  }

  // match_http_method_get - computed: false, optional: true, required: false
  private _matchHttpMethodGet?: number; 
  public get matchHttpMethodGet() {
    return this.getNumberAttribute('match_http_method_get');
  }
  public set matchHttpMethodGet(value: number) {
    this._matchHttpMethodGet = value;
  }
  public resetMatchHttpMethodGet() {
    this._matchHttpMethodGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodGetInput() {
    return this._matchHttpMethodGet;
  }

  // match_http_method_head - computed: false, optional: true, required: false
  private _matchHttpMethodHead?: number; 
  public get matchHttpMethodHead() {
    return this.getNumberAttribute('match_http_method_head');
  }
  public set matchHttpMethodHead(value: number) {
    this._matchHttpMethodHead = value;
  }
  public resetMatchHttpMethodHead() {
    this._matchHttpMethodHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodHeadInput() {
    return this._matchHttpMethodHead;
  }

  // match_http_method_options - computed: false, optional: true, required: false
  private _matchHttpMethodOptions?: number; 
  public get matchHttpMethodOptions() {
    return this.getNumberAttribute('match_http_method_options');
  }
  public set matchHttpMethodOptions(value: number) {
    this._matchHttpMethodOptions = value;
  }
  public resetMatchHttpMethodOptions() {
    this._matchHttpMethodOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodOptionsInput() {
    return this._matchHttpMethodOptions;
  }

  // match_http_method_patch - computed: false, optional: true, required: false
  private _matchHttpMethodPatch?: number; 
  public get matchHttpMethodPatch() {
    return this.getNumberAttribute('match_http_method_patch');
  }
  public set matchHttpMethodPatch(value: number) {
    this._matchHttpMethodPatch = value;
  }
  public resetMatchHttpMethodPatch() {
    this._matchHttpMethodPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodPatchInput() {
    return this._matchHttpMethodPatch;
  }

  // match_http_method_post - computed: false, optional: true, required: false
  private _matchHttpMethodPost?: number; 
  public get matchHttpMethodPost() {
    return this.getNumberAttribute('match_http_method_post');
  }
  public set matchHttpMethodPost(value: number) {
    this._matchHttpMethodPost = value;
  }
  public resetMatchHttpMethodPost() {
    this._matchHttpMethodPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodPostInput() {
    return this._matchHttpMethodPost;
  }

  // match_http_method_put - computed: false, optional: true, required: false
  private _matchHttpMethodPut?: number; 
  public get matchHttpMethodPut() {
    return this.getNumberAttribute('match_http_method_put');
  }
  public set matchHttpMethodPut(value: number) {
    this._matchHttpMethodPut = value;
  }
  public resetMatchHttpMethodPut() {
    this._matchHttpMethodPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodPutInput() {
    return this._matchHttpMethodPut;
  }

  // match_http_method_trace - computed: false, optional: true, required: false
  private _matchHttpMethodTrace?: number; 
  public get matchHttpMethodTrace() {
    return this.getNumberAttribute('match_http_method_trace');
  }
  public set matchHttpMethodTrace(value: number) {
    this._matchHttpMethodTrace = value;
  }
  public resetMatchHttpMethodTrace() {
    this._matchHttpMethodTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpMethodTraceInput() {
    return this._matchHttpMethodTrace;
  }

  // match_http_request_file_extension - computed: false, optional: true, required: false
  private _matchHttpRequestFileExtension?: string; 
  public get matchHttpRequestFileExtension() {
    return this.getStringAttribute('match_http_request_file_extension');
  }
  public set matchHttpRequestFileExtension(value: string) {
    this._matchHttpRequestFileExtension = value;
  }
  public resetMatchHttpRequestFileExtension() {
    this._matchHttpRequestFileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpRequestFileExtensionInput() {
    return this._matchHttpRequestFileExtension;
  }

  // match_http_url - computed: false, optional: true, required: false
  private _matchHttpUrl?: string; 
  public get matchHttpUrl() {
    return this.getStringAttribute('match_http_url');
  }
  public set matchHttpUrl(value: string) {
    this._matchHttpUrl = value;
  }
  public resetMatchHttpUrl() {
    this._matchHttpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpUrlInput() {
    return this._matchHttpUrl;
  }

  // match_http_url_regex - computed: false, optional: true, required: false
  private _matchHttpUrlRegex?: string; 
  public get matchHttpUrlRegex() {
    return this.getStringAttribute('match_http_url_regex');
  }
  public set matchHttpUrlRegex(value: string) {
    this._matchHttpUrlRegex = value;
  }
  public resetMatchHttpUrlRegex() {
    this._matchHttpUrlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpUrlRegexInput() {
    return this._matchHttpUrlRegex;
  }

  // match_http_user_agent - computed: false, optional: true, required: false
  private _matchHttpUserAgent?: string; 
  public get matchHttpUserAgent() {
    return this.getStringAttribute('match_http_user_agent');
  }
  public set matchHttpUserAgent(value: string) {
    this._matchHttpUserAgent = value;
  }
  public resetMatchHttpUserAgent() {
    this._matchHttpUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHttpUserAgentInput() {
    return this._matchHttpUserAgent;
  }

  // match_server_address - computed: false, optional: true, required: false
  private _matchServerAddress?: string; 
  public get matchServerAddress() {
    return this.getStringAttribute('match_server_address');
  }
  public set matchServerAddress(value: string) {
    this._matchServerAddress = value;
  }
  public resetMatchServerAddress() {
    this._matchServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerAddressInput() {
    return this._matchServerAddress;
  }

  // match_server_port - computed: false, optional: true, required: false
  private _matchServerPort?: number; 
  public get matchServerPort() {
    return this.getNumberAttribute('match_server_port');
  }
  public set matchServerPort(value: number) {
    this._matchServerPort = value;
  }
  public resetMatchServerPort() {
    this._matchServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerPortInput() {
    return this._matchServerPort;
  }

  // match_server_port_range_begin - computed: false, optional: true, required: false
  private _matchServerPortRangeBegin?: number; 
  public get matchServerPortRangeBegin() {
    return this.getNumberAttribute('match_server_port_range_begin');
  }
  public set matchServerPortRangeBegin(value: number) {
    this._matchServerPortRangeBegin = value;
  }
  public resetMatchServerPortRangeBegin() {
    this._matchServerPortRangeBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerPortRangeBeginInput() {
    return this._matchServerPortRangeBegin;
  }

  // match_server_port_range_end - computed: false, optional: true, required: false
  private _matchServerPortRangeEnd?: number; 
  public get matchServerPortRangeEnd() {
    return this.getNumberAttribute('match_server_port_range_end');
  }
  public set matchServerPortRangeEnd(value: number) {
    this._matchServerPortRangeEnd = value;
  }
  public resetMatchServerPortRangeEnd() {
    this._matchServerPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchServerPortRangeEndInput() {
    return this._matchServerPortRangeEnd;
  }

  // match_time_range - computed: false, optional: true, required: false
  private _matchTimeRange?: string; 
  public get matchTimeRange() {
    return this.getStringAttribute('match_time_range');
  }
  public set matchTimeRange(value: string) {
    this._matchTimeRange = value;
  }
  public resetMatchTimeRange() {
    this._matchTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTimeRangeInput() {
    return this._matchTimeRange;
  }

  // match_web_category_list - computed: false, optional: true, required: false
  private _matchWebCategoryList?: string; 
  public get matchWebCategoryList() {
    return this.getStringAttribute('match_web_category_list');
  }
  public set matchWebCategoryList(value: string) {
    this._matchWebCategoryList = value;
  }
  public resetMatchWebCategoryList() {
    this._matchWebCategoryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchWebCategoryListInput() {
    return this._matchWebCategoryList;
  }

  // match_web_reputation_scope - computed: false, optional: true, required: false
  private _matchWebReputationScope?: string; 
  public get matchWebReputationScope() {
    return this.getStringAttribute('match_web_reputation_scope');
  }
  public set matchWebReputationScope(value: string) {
    this._matchWebReputationScope = value;
  }
  public resetMatchWebReputationScope() {
    this._matchWebReputationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchWebReputationScopeInput() {
    return this._matchWebReputationScope;
  }

  // notify_page - computed: false, optional: true, required: false
  private _notifyPage?: string; 
  public get notifyPage() {
    return this.getStringAttribute('notify_page');
  }
  public set notifyPage(value: string) {
    this._notifyPage = value;
  }
  public resetNotifyPage() {
    this._notifyPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPageInput() {
    return this._notifyPage;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA {
  /**
  * 'all': all; 'hits': Number of requests matching this destination rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#counters1 SlbTemplatePolicyForwardPolicyA#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationAnyA {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action SlbTemplatePolicyForwardPolicyA#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dual_stack_action SlbTemplatePolicyForwardPolicyA#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#sampling_enable SlbTemplatePolicyForwardPolicyA#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAnyAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnyAOutputReference | SlbTemplatePolicyForwardPolicySourceListDestinationAnyA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAnyAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAnyAOutputReference | SlbTemplatePolicyForwardPolicySourceListDestinationAnyA): any {
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
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAnyAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationAnyA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationAnyA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._dualStackAction = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._dualStackAction = value.dualStackAction;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceListDestinationAnySamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action SlbTemplatePolicyForwardPolicyA#action}
  */
  readonly action?: string;
  /**
  * Destination Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dest_class_list SlbTemplatePolicyForwardPolicyA#dest_class_list}
  */
  readonly destClassList: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dual_stack_action SlbTemplatePolicyForwardPolicyA#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#priority SlbTemplatePolicyForwardPolicyA#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': Match URL; 'ip': Match destination IP address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#type SlbTemplatePolicyForwardPolicyA#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dest_class_list: cdktf.stringToTerraform(struct!.destClassList),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA | cdktf.IResolvable): any {
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
    dest_class_list: {
      value: cdktf.stringToHclTerraform(struct!.destClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destClassList = this._destClassList;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destClassList = undefined;
      this._dualStackAction = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destClassList = value.destClassList;
      this._dualStackAction = value.dualStackAction;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
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

  // dest_class_list - computed: false, optional: false, required: true
  private _destClassList?: string; 
  public get destClassList() {
    return this.getStringAttribute('dest_class_list');
  }
  public set destClassList(value: string) {
    this._destClassList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destClassListInput() {
    return this._destClassList;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action SlbTemplatePolicyForwardPolicyA#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dual_stack_action SlbTemplatePolicyForwardPolicyA#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#priority SlbTemplatePolicyForwardPolicyA#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#type SlbTemplatePolicyForwardPolicyA#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Category List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#web_category_list SlbTemplatePolicyForwardPolicyA#web_category_list}
  */
  readonly webCategoryList: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    web_category_list: cdktf.stringToTerraform(struct!.webCategoryList),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA | cdktf.IResolvable): any {
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
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    web_category_list: {
      value: cdktf.stringToHclTerraform(struct!.webCategoryList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._webCategoryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategoryList = this._webCategoryList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dualStackAction = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._webCategoryList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dualStackAction = value.dualStackAction;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
      this._webCategoryList = value.webCategoryList;
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

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // web_category_list - computed: false, optional: false, required: true
  private _webCategoryList?: string; 
  public get webCategoryList() {
    return this.getStringAttribute('web_category_list');
  }
  public set webCategoryList(value: string) {
    this._webCategoryList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryListInput() {
    return this._webCategoryList;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#action SlbTemplatePolicyForwardPolicyA#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#dual_stack_action SlbTemplatePolicyForwardPolicyA#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#priority SlbTemplatePolicyForwardPolicyA#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#type SlbTemplatePolicyForwardPolicyA#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Reputation Scope Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#web_reputation_scope SlbTemplatePolicyForwardPolicyA#web_reputation_scope}
  */
  readonly webReputationScope: string;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    web_reputation_scope: cdktf.stringToTerraform(struct!.webReputationScope),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA | cdktf.IResolvable): any {
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
    dual_stack_action: {
      value: cdktf.stringToHclTerraform(struct!.dualStackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    web_reputation_scope: {
      value: cdktf.stringToHclTerraform(struct!.webReputationScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dualStackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStackAction = this._dualStackAction;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._webReputationScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.webReputationScope = this._webReputationScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dualStackAction = undefined;
      this._priority = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._webReputationScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dualStackAction = value.dualStackAction;
      this._priority = value.priority;
      this._type = value.type;
      this._uuid = value.uuid;
      this._webReputationScope = value.webReputationScope;
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

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // web_reputation_scope - computed: false, optional: false, required: true
  private _webReputationScope?: string; 
  public get webReputationScope() {
    return this.getStringAttribute('web_reputation_scope');
  }
  public set webReputationScope(value: string) {
    this._webReputationScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationScopeInput() {
    return this._webReputationScope;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListDestinationA {
  /**
  * adv_match_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#adv_match_list SlbTemplatePolicyForwardPolicyA#adv_match_list}
  */
  readonly advMatchList?: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA[] | cdktf.IResolvable;
  /**
  * any block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#any SlbTemplatePolicyForwardPolicyA#any}
  */
  readonly any?: SlbTemplatePolicyForwardPolicySourceListDestinationAnyA;
  /**
  * class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#class_list_list SlbTemplatePolicyForwardPolicyA#class_list_list}
  */
  readonly classListList?: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA[] | cdktf.IResolvable;
  /**
  * web_category_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#web_category_list_list SlbTemplatePolicyForwardPolicyA#web_category_list_list}
  */
  readonly webCategoryListList?: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA[] | cdktf.IResolvable;
  /**
  * web_reputation_scope_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#web_reputation_scope_list SlbTemplatePolicyForwardPolicyA#web_reputation_scope_list}
  */
  readonly webReputationScopeList?: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListDestinationAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAOutputReference | SlbTemplatePolicyForwardPolicySourceListDestinationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adv_match_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAToTerraform, true)(struct!.advMatchList),
    any: slbTemplatePolicyForwardPolicySourceListDestinationAnyAToTerraform(struct!.any),
    class_list_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAToTerraform, true)(struct!.classListList),
    web_category_list_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAToTerraform, true)(struct!.webCategoryListList),
    web_reputation_scope_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAToTerraform, true)(struct!.webReputationScopeList),
  }
}


export function slbTemplatePolicyForwardPolicySourceListDestinationAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListDestinationAOutputReference | SlbTemplatePolicyForwardPolicySourceListDestinationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adv_match_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAToHclTerraform, true)(struct!.advMatchList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAList",
    },
    any: {
      value: slbTemplatePolicyForwardPolicySourceListDestinationAnyAToHclTerraform(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAnyAList",
    },
    class_list_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAToHclTerraform, true)(struct!.classListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAList",
    },
    web_category_list_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAToHclTerraform, true)(struct!.webCategoryListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAList",
    },
    web_reputation_scope_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAToHclTerraform, true)(struct!.webReputationScopeList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListDestinationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListDestinationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advMatchList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advMatchList = this._advMatchList?.internalValue;
    }
    if (this._any?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any?.internalValue;
    }
    if (this._classListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListList = this._classListList?.internalValue;
    }
    if (this._webCategoryListList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategoryListList = this._webCategoryListList?.internalValue;
    }
    if (this._webReputationScopeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webReputationScopeList = this._webReputationScopeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListDestinationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advMatchList.internalValue = undefined;
      this._any.internalValue = undefined;
      this._classListList.internalValue = undefined;
      this._webCategoryListList.internalValue = undefined;
      this._webReputationScopeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advMatchList.internalValue = value.advMatchList;
      this._any.internalValue = value.any;
      this._classListList.internalValue = value.classListList;
      this._webCategoryListList.internalValue = value.webCategoryListList;
      this._webReputationScopeList.internalValue = value.webReputationScopeList;
    }
  }

  // adv_match_list - computed: false, optional: true, required: false
  private _advMatchList = new SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructAList(this, "adv_match_list", false);
  public get advMatchList() {
    return this._advMatchList;
  }
  public putAdvMatchList(value: SlbTemplatePolicyForwardPolicySourceListDestinationAdvMatchListStructA[] | cdktf.IResolvable) {
    this._advMatchList.internalValue = value;
  }
  public resetAdvMatchList() {
    this._advMatchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advMatchListInput() {
    return this._advMatchList.internalValue;
  }

  // any - computed: false, optional: true, required: false
  private _any = new SlbTemplatePolicyForwardPolicySourceListDestinationAnyAOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: SlbTemplatePolicyForwardPolicySourceListDestinationAnyA) {
    this._any.internalValue = value;
  }
  public resetAny() {
    this._any.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any.internalValue;
  }

  // class_list_list - computed: false, optional: true, required: false
  private _classListList = new SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructAList(this, "class_list_list", false);
  public get classListList() {
    return this._classListList;
  }
  public putClassListList(value: SlbTemplatePolicyForwardPolicySourceListDestinationClassListListStructA[] | cdktf.IResolvable) {
    this._classListList.internalValue = value;
  }
  public resetClassListList() {
    this._classListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListListInput() {
    return this._classListList.internalValue;
  }

  // web_category_list_list - computed: false, optional: true, required: false
  private _webCategoryListList = new SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructAList(this, "web_category_list_list", false);
  public get webCategoryListList() {
    return this._webCategoryListList;
  }
  public putWebCategoryListList(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebCategoryListListStructA[] | cdktf.IResolvable) {
    this._webCategoryListList.internalValue = value;
  }
  public resetWebCategoryListList() {
    this._webCategoryListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryListListInput() {
    return this._webCategoryListList.internalValue;
  }

  // web_reputation_scope_list - computed: false, optional: true, required: false
  private _webReputationScopeList = new SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructAList(this, "web_reputation_scope_list", false);
  public get webReputationScopeList() {
    return this._webReputationScopeList;
  }
  public putWebReputationScopeList(value: SlbTemplatePolicyForwardPolicySourceListDestinationWebReputationScopeListStructA[] | cdktf.IResolvable) {
    this._webReputationScopeList.internalValue = value;
  }
  public resetWebReputationScopeList() {
    this._webReputationScopeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationScopeListInput() {
    return this._webReputationScopeList.internalValue;
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListSamplingEnableA {
  /**
  * 'all': all; 'hits': Number of requests matching this source rule; 'destination-match-not-found': Number of requests without matching destination rule; 'no-host-info': Failed to parse ip or host information from request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#counters1 SlbTemplatePolicyForwardPolicyA#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceListSamplingEnableAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceListSamplingEnableAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListSamplingEnableAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceListStructA {
  /**
  * Match any source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_any SlbTemplatePolicyForwardPolicyA#match_any}
  */
  readonly matchAny?: number;
  /**
  * Authorize-policy for user and group based policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_authorize_policy SlbTemplatePolicyForwardPolicyA#match_authorize_policy}
  */
  readonly matchAuthorizePolicy?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#match_class_list SlbTemplatePolicyForwardPolicyA#match_class_list}
  */
  readonly matchClassList?: string;
  /**
  * source destination match rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#name SlbTemplatePolicyForwardPolicyA#name}
  */
  readonly name: string;
  /**
  * Priority of the source(higher the number higher the priority, default 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#priority SlbTemplatePolicyForwardPolicyA#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#user_tag SlbTemplatePolicyForwardPolicyA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#uuid SlbTemplatePolicyForwardPolicyA#uuid}
  */
  readonly uuid?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#destination SlbTemplatePolicyForwardPolicyA#destination}
  */
  readonly destination?: SlbTemplatePolicyForwardPolicySourceListDestinationA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#sampling_enable SlbTemplatePolicyForwardPolicyA#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceListSamplingEnableA[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceListStructAToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_any: cdktf.numberToTerraform(struct!.matchAny),
    match_authorize_policy: cdktf.stringToTerraform(struct!.matchAuthorizePolicy),
    match_class_list: cdktf.stringToTerraform(struct!.matchClassList),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    destination: slbTemplatePolicyForwardPolicySourceListDestinationAToTerraform(struct!.destination),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceListStructAToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_any: {
      value: cdktf.numberToHclTerraform(struct!.matchAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_authorize_policy: {
      value: cdktf.stringToHclTerraform(struct!.matchAuthorizePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_class_list: {
      value: cdktf.stringToHclTerraform(struct!.matchClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    destination: {
      value: slbTemplatePolicyForwardPolicySourceListDestinationAToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListDestinationAList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAny = this._matchAny;
    }
    if (this._matchAuthorizePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAuthorizePolicy = this._matchAuthorizePolicy;
    }
    if (this._matchClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchClassList = this._matchClassList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchAny = undefined;
      this._matchAuthorizePolicy = undefined;
      this._matchClassList = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._destination.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchAny = value.matchAny;
      this._matchAuthorizePolicy = value.matchAuthorizePolicy;
      this._matchClassList = value.matchClassList;
      this._name = value.name;
      this._priority = value.priority;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._destination.internalValue = value.destination;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // match_any - computed: false, optional: true, required: false
  private _matchAny?: number; 
  public get matchAny() {
    return this.getNumberAttribute('match_any');
  }
  public set matchAny(value: number) {
    this._matchAny = value;
  }
  public resetMatchAny() {
    this._matchAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyInput() {
    return this._matchAny;
  }

  // match_authorize_policy - computed: false, optional: true, required: false
  private _matchAuthorizePolicy?: string; 
  public get matchAuthorizePolicy() {
    return this.getStringAttribute('match_authorize_policy');
  }
  public set matchAuthorizePolicy(value: string) {
    this._matchAuthorizePolicy = value;
  }
  public resetMatchAuthorizePolicy() {
    this._matchAuthorizePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAuthorizePolicyInput() {
    return this._matchAuthorizePolicy;
  }

  // match_class_list - computed: false, optional: true, required: false
  private _matchClassList?: string; 
  public get matchClassList() {
    return this.getStringAttribute('match_class_list');
  }
  public set matchClassList(value: string) {
    this._matchClassList = value;
  }
  public resetMatchClassList() {
    this._matchClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClassListInput() {
    return this._matchClassList;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new SlbTemplatePolicyForwardPolicySourceListDestinationAOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: SlbTemplatePolicyForwardPolicySourceListDestinationA) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbTemplatePolicyForwardPolicySourceListStructAList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceListStructA[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceListStructAOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy thunder_slb_template_policy_forward_policy}
*/
export class SlbTemplatePolicyForwardPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyForwardPolicyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyForwardPolicyA to import
  * @param importFromId The id of the existing SlbTemplatePolicyForwardPolicyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyForwardPolicyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy thunder_slb_template_policy_forward_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyForwardPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyForwardPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy',
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
    this._acosEventLog = config.acosEventLog;
    this._enableAdvMatch = config.enableAdvMatch;
    this._forwardHttpConnectToIcap = config.forwardHttpConnectToIcap;
    this._id = config.id;
    this._localLogging = config.localLogging;
    this._noClientConnReuse = config.noClientConnReuse;
    this._policyName = config.policyName;
    this._reqmodIcap = config.reqmodIcap;
    this._requireWebCategory = config.requireWebCategory;
    this._uuid = config.uuid;
    this._actionList.internalValue = config.actionList;
    this._dualStackActionList.internalValue = config.dualStackActionList;
    this._filtering.internalValue = config.filtering;
    this._sanFiltering.internalValue = config.sanFiltering;
    this._sourceList.internalValue = config.sourceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acos_event_log - computed: false, optional: true, required: false
  private _acosEventLog?: number; 
  public get acosEventLog() {
    return this.getNumberAttribute('acos_event_log');
  }
  public set acosEventLog(value: number) {
    this._acosEventLog = value;
  }
  public resetAcosEventLog() {
    this._acosEventLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acosEventLogInput() {
    return this._acosEventLog;
  }

  // enable_adv_match - computed: false, optional: true, required: false
  private _enableAdvMatch?: number; 
  public get enableAdvMatch() {
    return this.getNumberAttribute('enable_adv_match');
  }
  public set enableAdvMatch(value: number) {
    this._enableAdvMatch = value;
  }
  public resetEnableAdvMatch() {
    this._enableAdvMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdvMatchInput() {
    return this._enableAdvMatch;
  }

  // forward_http_connect_to_icap - computed: false, optional: true, required: false
  private _forwardHttpConnectToIcap?: number; 
  public get forwardHttpConnectToIcap() {
    return this.getNumberAttribute('forward_http_connect_to_icap');
  }
  public set forwardHttpConnectToIcap(value: number) {
    this._forwardHttpConnectToIcap = value;
  }
  public resetForwardHttpConnectToIcap() {
    this._forwardHttpConnectToIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHttpConnectToIcapInput() {
    return this._forwardHttpConnectToIcap;
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

  // local_logging - computed: false, optional: true, required: false
  private _localLogging?: number; 
  public get localLogging() {
    return this.getNumberAttribute('local_logging');
  }
  public set localLogging(value: number) {
    this._localLogging = value;
  }
  public resetLocalLogging() {
    this._localLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoggingInput() {
    return this._localLogging;
  }

  // no_client_conn_reuse - computed: false, optional: true, required: false
  private _noClientConnReuse?: number; 
  public get noClientConnReuse() {
    return this.getNumberAttribute('no_client_conn_reuse');
  }
  public set noClientConnReuse(value: number) {
    this._noClientConnReuse = value;
  }
  public resetNoClientConnReuse() {
    this._noClientConnReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientConnReuseInput() {
    return this._noClientConnReuse;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // reqmod_icap - computed: false, optional: true, required: false
  private _reqmodIcap?: string; 
  public get reqmodIcap() {
    return this.getStringAttribute('reqmod_icap');
  }
  public set reqmodIcap(value: string) {
    this._reqmodIcap = value;
  }
  public resetReqmodIcap() {
    this._reqmodIcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqmodIcapInput() {
    return this._reqmodIcap;
  }

  // require_web_category - computed: false, optional: true, required: false
  private _requireWebCategory?: number; 
  public get requireWebCategory() {
    return this.getNumberAttribute('require_web_category');
  }
  public set requireWebCategory(value: number) {
    this._requireWebCategory = value;
  }
  public resetRequireWebCategory() {
    this._requireWebCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireWebCategoryInput() {
    return this._requireWebCategory;
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

  // action_list - computed: false, optional: true, required: false
  private _actionList = new SlbTemplatePolicyForwardPolicyActionListStructAList(this, "action_list", false);
  public get actionList() {
    return this._actionList;
  }
  public putActionList(value: SlbTemplatePolicyForwardPolicyActionListStructA[] | cdktf.IResolvable) {
    this._actionList.internalValue = value;
  }
  public resetActionList() {
    this._actionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionListInput() {
    return this._actionList.internalValue;
  }

  // dual_stack_action_list - computed: false, optional: true, required: false
  private _dualStackActionList = new SlbTemplatePolicyForwardPolicyDualStackActionListStructAList(this, "dual_stack_action_list", false);
  public get dualStackActionList() {
    return this._dualStackActionList;
  }
  public putDualStackActionList(value: SlbTemplatePolicyForwardPolicyDualStackActionListStructA[] | cdktf.IResolvable) {
    this._dualStackActionList.internalValue = value;
  }
  public resetDualStackActionList() {
    this._dualStackActionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionListInput() {
    return this._dualStackActionList.internalValue;
  }

  // filtering - computed: false, optional: true, required: false
  private _filtering = new SlbTemplatePolicyForwardPolicyFilteringAList(this, "filtering", false);
  public get filtering() {
    return this._filtering;
  }
  public putFiltering(value: SlbTemplatePolicyForwardPolicyFilteringA[] | cdktf.IResolvable) {
    this._filtering.internalValue = value;
  }
  public resetFiltering() {
    this._filtering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringInput() {
    return this._filtering.internalValue;
  }

  // san_filtering - computed: false, optional: true, required: false
  private _sanFiltering = new SlbTemplatePolicyForwardPolicySanFilteringAList(this, "san_filtering", false);
  public get sanFiltering() {
    return this._sanFiltering;
  }
  public putSanFiltering(value: SlbTemplatePolicyForwardPolicySanFilteringA[] | cdktf.IResolvable) {
    this._sanFiltering.internalValue = value;
  }
  public resetSanFiltering() {
    this._sanFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanFilteringInput() {
    return this._sanFiltering.internalValue;
  }

  // source_list - computed: false, optional: true, required: false
  private _sourceList = new SlbTemplatePolicyForwardPolicySourceListStructAList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: SlbTemplatePolicyForwardPolicySourceListStructA[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  public resetSourceList() {
    this._sourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acos_event_log: cdktf.numberToTerraform(this._acosEventLog),
      enable_adv_match: cdktf.numberToTerraform(this._enableAdvMatch),
      forward_http_connect_to_icap: cdktf.numberToTerraform(this._forwardHttpConnectToIcap),
      id: cdktf.stringToTerraform(this._id),
      local_logging: cdktf.numberToTerraform(this._localLogging),
      no_client_conn_reuse: cdktf.numberToTerraform(this._noClientConnReuse),
      policy_name: cdktf.stringToTerraform(this._policyName),
      reqmod_icap: cdktf.stringToTerraform(this._reqmodIcap),
      require_web_category: cdktf.numberToTerraform(this._requireWebCategory),
      uuid: cdktf.stringToTerraform(this._uuid),
      action_list: cdktf.listMapper(slbTemplatePolicyForwardPolicyActionListStructAToTerraform, true)(this._actionList.internalValue),
      dual_stack_action_list: cdktf.listMapper(slbTemplatePolicyForwardPolicyDualStackActionListStructAToTerraform, true)(this._dualStackActionList.internalValue),
      filtering: cdktf.listMapper(slbTemplatePolicyForwardPolicyFilteringAToTerraform, true)(this._filtering.internalValue),
      san_filtering: cdktf.listMapper(slbTemplatePolicyForwardPolicySanFilteringAToTerraform, true)(this._sanFiltering.internalValue),
      source_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceListStructAToTerraform, true)(this._sourceList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acos_event_log: {
        value: cdktf.numberToHclTerraform(this._acosEventLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_adv_match: {
        value: cdktf.numberToHclTerraform(this._enableAdvMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_http_connect_to_icap: {
        value: cdktf.numberToHclTerraform(this._forwardHttpConnectToIcap),
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
      local_logging: {
        value: cdktf.numberToHclTerraform(this._localLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_client_conn_reuse: {
        value: cdktf.numberToHclTerraform(this._noClientConnReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqmod_icap: {
        value: cdktf.stringToHclTerraform(this._reqmodIcap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_web_category: {
        value: cdktf.numberToHclTerraform(this._requireWebCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_list: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyActionListStructAToHclTerraform, true)(this._actionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicyActionListStructAList",
      },
      dual_stack_action_list: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyDualStackActionListStructAToHclTerraform, true)(this._dualStackActionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicyDualStackActionListStructAList",
      },
      filtering: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyFilteringAToHclTerraform, true)(this._filtering.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicyFilteringAList",
      },
      san_filtering: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySanFilteringAToHclTerraform, true)(this._sanFiltering.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicySanFilteringAList",
      },
      source_list: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceListStructAToHclTerraform, true)(this._sourceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicySourceListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
