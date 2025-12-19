// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyForwardPolicySourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#id SlbTemplatePolicyForwardPolicySource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match any source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_any SlbTemplatePolicyForwardPolicySource#match_any}
  */
  readonly matchAny?: number;
  /**
  * Authorize-policy for user and group based policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_authorize_policy SlbTemplatePolicyForwardPolicySource#match_authorize_policy}
  */
  readonly matchAuthorizePolicy?: string;
  /**
  * Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_class_list SlbTemplatePolicyForwardPolicySource#match_class_list}
  */
  readonly matchClassList?: string;
  /**
  * source destination match rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#name SlbTemplatePolicyForwardPolicySource#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#policy_name SlbTemplatePolicyForwardPolicySource#policy_name}
  */
  readonly policyName: string;
  /**
  * Priority of the source(higher the number higher the priority, default 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#priority SlbTemplatePolicyForwardPolicySource#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#user_tag SlbTemplatePolicyForwardPolicySource#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#uuid SlbTemplatePolicyForwardPolicySource#uuid}
  */
  readonly uuid?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#destination SlbTemplatePolicyForwardPolicySource#destination}
  */
  readonly destination?: SlbTemplatePolicyForwardPolicySourceDestination;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#sampling_enable SlbTemplatePolicyForwardPolicySource#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests hit this rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#counters1 SlbTemplatePolicyForwardPolicySource#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct {
  /**
  * Forwading action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#action SlbTemplatePolicyForwardPolicySource#action}
  */
  readonly action?: string;
  /**
  * Disable REQMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#disable_reqmod_icap SlbTemplatePolicyForwardPolicySource#disable_reqmod_icap}
  */
  readonly disableReqmodIcap?: number;
  /**
  * Disable RESPMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#disable_respmod_icap SlbTemplatePolicyForwardPolicySource#disable_respmod_icap}
  */
  readonly disableRespmodIcap?: number;
  /**
  * Forwarding action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#dual_stack_action SlbTemplatePolicyForwardPolicySource#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Match request host (HTTP stage) or SNI/SAN (SSL stage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_host SlbTemplatePolicyForwardPolicySource#match_host}
  */
  readonly matchHost?: string;
  /**
  * Match the value of HTTP header "Content-Encoding"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_content_encoding SlbTemplatePolicyForwardPolicySource#match_http_content_encoding}
  */
  readonly matchHttpContentEncoding?: string;
  /**
  * Match the value of HTTP header "Content-Length" with an inclusive range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_content_length_range_begin SlbTemplatePolicyForwardPolicySource#match_http_content_length_range_begin}
  */
  readonly matchHttpContentLengthRangeBegin?: number;
  /**
  * End of the "Content-Length" range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_content_length_range_end SlbTemplatePolicyForwardPolicySource#match_http_content_length_range_end}
  */
  readonly matchHttpContentLengthRangeEnd?: number;
  /**
  * Match the value of HTTP header "Content-Type"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_content_type SlbTemplatePolicyForwardPolicySource#match_http_content_type}
  */
  readonly matchHttpContentType?: string;
  /**
  * Matching the name of all request headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_header SlbTemplatePolicyForwardPolicySource#match_http_header}
  */
  readonly matchHttpHeader?: string;
  /**
  * Match HTTP request method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_connect SlbTemplatePolicyForwardPolicySource#match_http_method_connect}
  */
  readonly matchHttpMethodConnect?: number;
  /**
  * Match HTTP request method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_delete SlbTemplatePolicyForwardPolicySource#match_http_method_delete}
  */
  readonly matchHttpMethodDelete?: number;
  /**
  * Match HTTP request method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_get SlbTemplatePolicyForwardPolicySource#match_http_method_get}
  */
  readonly matchHttpMethodGet?: number;
  /**
  * Match HTTP request method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_head SlbTemplatePolicyForwardPolicySource#match_http_method_head}
  */
  readonly matchHttpMethodHead?: number;
  /**
  * Match HTTP request method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_options SlbTemplatePolicyForwardPolicySource#match_http_method_options}
  */
  readonly matchHttpMethodOptions?: number;
  /**
  * Match HTTP request method PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_patch SlbTemplatePolicyForwardPolicySource#match_http_method_patch}
  */
  readonly matchHttpMethodPatch?: number;
  /**
  * Match HTTP request method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_post SlbTemplatePolicyForwardPolicySource#match_http_method_post}
  */
  readonly matchHttpMethodPost?: number;
  /**
  * Match HTTP request method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_put SlbTemplatePolicyForwardPolicySource#match_http_method_put}
  */
  readonly matchHttpMethodPut?: number;
  /**
  * Match HTTP request method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_method_trace SlbTemplatePolicyForwardPolicySource#match_http_method_trace}
  */
  readonly matchHttpMethodTrace?: number;
  /**
  * Match file extension of URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_request_file_extension SlbTemplatePolicyForwardPolicySource#match_http_request_file_extension}
  */
  readonly matchHttpRequestFileExtension?: string;
  /**
  * Match URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_url SlbTemplatePolicyForwardPolicySource#match_http_url}
  */
  readonly matchHttpUrl?: string;
  /**
  * Match URI in HTTP request line by given regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_url_regex SlbTemplatePolicyForwardPolicySource#match_http_url_regex}
  */
  readonly matchHttpUrlRegex?: string;
  /**
  * Matching the value of HTTP header "User-Agent"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_http_user_agent SlbTemplatePolicyForwardPolicySource#match_http_user_agent}
  */
  readonly matchHttpUserAgent?: string;
  /**
  * Match target server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_server_address SlbTemplatePolicyForwardPolicySource#match_server_address}
  */
  readonly matchServerAddress?: string;
  /**
  * Match target server port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_server_port SlbTemplatePolicyForwardPolicySource#match_server_port}
  */
  readonly matchServerPort?: number;
  /**
  * Math targer server port range inclusively
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_server_port_range_begin SlbTemplatePolicyForwardPolicySource#match_server_port_range_begin}
  */
  readonly matchServerPortRangeBegin?: number;
  /**
  * End of port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_server_port_range_end SlbTemplatePolicyForwardPolicySource#match_server_port_range_end}
  */
  readonly matchServerPortRangeEnd?: number;
  /**
  * Enable rule in this time-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_time_range SlbTemplatePolicyForwardPolicySource#match_time_range}
  */
  readonly matchTimeRange?: string;
  /**
  * Match web-category list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_web_category_list SlbTemplatePolicyForwardPolicySource#match_web_category_list}
  */
  readonly matchWebCategoryList?: string;
  /**
  * Match web-reputation scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#match_web_reputation_scope SlbTemplatePolicyForwardPolicySource#match_web_reputation_scope}
  */
  readonly matchWebReputationScope?: string;
  /**
  * Send notify-page to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#notify_page SlbTemplatePolicyForwardPolicySource#notify_page}
  */
  readonly notifyPage?: string;
  /**
  * Rule priority (1000 is highest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#priority SlbTemplatePolicyForwardPolicySource#priority}
  */
  readonly priority: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#user_tag SlbTemplatePolicyForwardPolicySource#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#uuid SlbTemplatePolicyForwardPolicySource#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#sampling_enable SlbTemplatePolicyForwardPolicySource#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct | cdktf.IResolvable): any {
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
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct | cdktf.IResolvable | undefined) {
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
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListSamplingEnable[] | cdktf.IResolvable) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests matching this destination rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#counters1 SlbTemplatePolicyForwardPolicySource#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationAny {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#action SlbTemplatePolicyForwardPolicySource#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#dual_stack_action SlbTemplatePolicyForwardPolicySource#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#uuid SlbTemplatePolicyForwardPolicySource#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#sampling_enable SlbTemplatePolicyForwardPolicySource#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceDestinationAnyToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAnyOutputReference | SlbTemplatePolicyForwardPolicySourceDestinationAny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dual_stack_action: cdktf.stringToTerraform(struct!.dualStackAction),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbTemplatePolicyForwardPolicySourceDestinationAnyToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAnyOutputReference | SlbTemplatePolicyForwardPolicySourceDestinationAny): any {
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
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceDestinationAnyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationAny | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationAny | undefined) {
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
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceDestinationAnySamplingEnable[] | cdktf.IResolvable) {
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
export interface SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#action SlbTemplatePolicyForwardPolicySource#action}
  */
  readonly action?: string;
  /**
  * Destination Class List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#dest_class_list SlbTemplatePolicyForwardPolicySource#dest_class_list}
  */
  readonly destClassList: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#dual_stack_action SlbTemplatePolicyForwardPolicySource#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#priority SlbTemplatePolicyForwardPolicySource#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': Match URL; 'ip': Match destination IP address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#type SlbTemplatePolicyForwardPolicySource#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#uuid SlbTemplatePolicyForwardPolicySource#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplatePolicyForwardPolicySourceDestinationClassListListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct | cdktf.IResolvable): any {
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


export function slbTemplatePolicyForwardPolicySourceDestinationClassListListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationClassListListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationClassListListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#action SlbTemplatePolicyForwardPolicySource#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#dual_stack_action SlbTemplatePolicyForwardPolicySource#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#priority SlbTemplatePolicyForwardPolicySource#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#type SlbTemplatePolicyForwardPolicySource#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#uuid SlbTemplatePolicyForwardPolicySource#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Category List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#web_category_list SlbTemplatePolicyForwardPolicySource#web_category_list}
  */
  readonly webCategoryList: string;
}

export function slbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct | cdktf.IResolvable): any {
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


export function slbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#action SlbTemplatePolicyForwardPolicySource#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#dual_stack_action SlbTemplatePolicyForwardPolicySource#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#priority SlbTemplatePolicyForwardPolicySource#priority}
  */
  readonly priority?: number;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#type SlbTemplatePolicyForwardPolicySource#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#uuid SlbTemplatePolicyForwardPolicySource#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Reputation Scope Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#web_reputation_scope SlbTemplatePolicyForwardPolicySource#web_reputation_scope}
  */
  readonly webReputationScope: string;
}

export function slbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct | cdktf.IResolvable): any {
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


export function slbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplatePolicyForwardPolicySourceDestination {
  /**
  * adv_match_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#adv_match_list SlbTemplatePolicyForwardPolicySource#adv_match_list}
  */
  readonly advMatchList?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct[] | cdktf.IResolvable;
  /**
  * any block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#any SlbTemplatePolicyForwardPolicySource#any}
  */
  readonly any?: SlbTemplatePolicyForwardPolicySourceDestinationAny;
  /**
  * class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#class_list_list SlbTemplatePolicyForwardPolicySource#class_list_list}
  */
  readonly classListList?: SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct[] | cdktf.IResolvable;
  /**
  * web_category_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#web_category_list_list SlbTemplatePolicyForwardPolicySource#web_category_list_list}
  */
  readonly webCategoryListList?: SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct[] | cdktf.IResolvable;
  /**
  * web_reputation_scope_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#web_reputation_scope_list SlbTemplatePolicyForwardPolicySource#web_reputation_scope_list}
  */
  readonly webReputationScopeList?: SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct[] | cdktf.IResolvable;
}

export function slbTemplatePolicyForwardPolicySourceDestinationToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationOutputReference | SlbTemplatePolicyForwardPolicySourceDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adv_match_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructToTerraform, true)(struct!.advMatchList),
    any: slbTemplatePolicyForwardPolicySourceDestinationAnyToTerraform(struct!.any),
    class_list_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationClassListListStructToTerraform, true)(struct!.classListList),
    web_category_list_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructToTerraform, true)(struct!.webCategoryListList),
    web_reputation_scope_list: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructToTerraform, true)(struct!.webReputationScopeList),
  }
}


export function slbTemplatePolicyForwardPolicySourceDestinationToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationOutputReference | SlbTemplatePolicyForwardPolicySourceDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adv_match_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructToHclTerraform, true)(struct!.advMatchList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructList",
    },
    any: {
      value: slbTemplatePolicyForwardPolicySourceDestinationAnyToHclTerraform(struct!.any),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationAnyList",
    },
    class_list_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationClassListListStructToHclTerraform, true)(struct!.classListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationClassListListStructList",
    },
    web_category_list_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructToHclTerraform, true)(struct!.webCategoryListList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructList",
    },
    web_reputation_scope_list: {
      value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructToHclTerraform, true)(struct!.webReputationScopeList),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplatePolicyForwardPolicySourceDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestination | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestination | undefined) {
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
  private _advMatchList = new SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStructList(this, "adv_match_list", false);
  public get advMatchList() {
    return this._advMatchList;
  }
  public putAdvMatchList(value: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchListStruct[] | cdktf.IResolvable) {
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
  private _any = new SlbTemplatePolicyForwardPolicySourceDestinationAnyOutputReference(this, "any");
  public get any() {
    return this._any;
  }
  public putAny(value: SlbTemplatePolicyForwardPolicySourceDestinationAny) {
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
  private _classListList = new SlbTemplatePolicyForwardPolicySourceDestinationClassListListStructList(this, "class_list_list", false);
  public get classListList() {
    return this._classListList;
  }
  public putClassListList(value: SlbTemplatePolicyForwardPolicySourceDestinationClassListListStruct[] | cdktf.IResolvable) {
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
  private _webCategoryListList = new SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStructList(this, "web_category_list_list", false);
  public get webCategoryListList() {
    return this._webCategoryListList;
  }
  public putWebCategoryListList(value: SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListListStruct[] | cdktf.IResolvable) {
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
  private _webReputationScopeList = new SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStructList(this, "web_reputation_scope_list", false);
  public get webReputationScopeList() {
    return this._webReputationScopeList;
  }
  public putWebReputationScopeList(value: SlbTemplatePolicyForwardPolicySourceDestinationWebReputationScopeListStruct[] | cdktf.IResolvable) {
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
export interface SlbTemplatePolicyForwardPolicySourceSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests matching this source rule; 'destination-match-not-found': Number of requests without matching destination rule; 'no-host-info': Failed to parse ip or host information from request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#counters1 SlbTemplatePolicyForwardPolicySource#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceSamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source thunder_slb_template_policy_forward_policy_source}
*/
export class SlbTemplatePolicyForwardPolicySource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyForwardPolicySource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyForwardPolicySource to import
  * @param importFromId The id of the existing SlbTemplatePolicyForwardPolicySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyForwardPolicySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source thunder_slb_template_policy_forward_policy_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyForwardPolicySourceConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyForwardPolicySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_source',
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
    this._matchAny = config.matchAny;
    this._matchAuthorizePolicy = config.matchAuthorizePolicy;
    this._matchClassList = config.matchClassList;
    this._name = config.name;
    this._policyName = config.policyName;
    this._priority = config.priority;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._destination.internalValue = config.destination;
    this._samplingEnable.internalValue = config.samplingEnable;
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
  private _destination = new SlbTemplatePolicyForwardPolicySourceDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: SlbTemplatePolicyForwardPolicySourceDestination) {
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
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      match_any: cdktf.numberToTerraform(this._matchAny),
      match_authorize_policy: cdktf.stringToTerraform(this._matchAuthorizePolicy),
      match_class_list: cdktf.stringToTerraform(this._matchClassList),
      name: cdktf.stringToTerraform(this._name),
      policy_name: cdktf.stringToTerraform(this._policyName),
      priority: cdktf.numberToTerraform(this._priority),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      destination: slbTemplatePolicyForwardPolicySourceDestinationToTerraform(this._destination.internalValue),
      sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      match_any: {
        value: cdktf.numberToHclTerraform(this._matchAny),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_authorize_policy: {
        value: cdktf.stringToHclTerraform(this._matchAuthorizePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_class_list: {
        value: cdktf.stringToHclTerraform(this._matchClassList),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      destination: {
        value: slbTemplatePolicyForwardPolicySourceDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicySourceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
