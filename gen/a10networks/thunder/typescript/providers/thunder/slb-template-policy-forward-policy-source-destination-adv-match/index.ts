// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forwading action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#action SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#action}
  */
  readonly action?: string;
  /**
  * Disable REQMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#disable_reqmod_icap SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#disable_reqmod_icap}
  */
  readonly disableReqmodIcap?: number;
  /**
  * Disable RESPMOD ICAP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#disable_respmod_icap SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#disable_respmod_icap}
  */
  readonly disableRespmodIcap?: number;
  /**
  * Forwarding action of this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#dual_stack_action SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#id SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match request host (HTTP stage) or SNI/SAN (SSL stage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_host SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_host}
  */
  readonly matchHost?: string;
  /**
  * Match the value of HTTP header "Content-Encoding"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_content_encoding SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_content_encoding}
  */
  readonly matchHttpContentEncoding?: string;
  /**
  * Match the value of HTTP header "Content-Length" with an inclusive range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_content_length_range_begin SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_content_length_range_begin}
  */
  readonly matchHttpContentLengthRangeBegin?: number;
  /**
  * End of the "Content-Length" range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_content_length_range_end SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_content_length_range_end}
  */
  readonly matchHttpContentLengthRangeEnd?: number;
  /**
  * Match the value of HTTP header "Content-Type"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_content_type SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_content_type}
  */
  readonly matchHttpContentType?: string;
  /**
  * Matching the name of all request headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_header SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_header}
  */
  readonly matchHttpHeader?: string;
  /**
  * Match HTTP request method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_connect SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_connect}
  */
  readonly matchHttpMethodConnect?: number;
  /**
  * Match HTTP request method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_delete SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_delete}
  */
  readonly matchHttpMethodDelete?: number;
  /**
  * Match HTTP request method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_get SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_get}
  */
  readonly matchHttpMethodGet?: number;
  /**
  * Match HTTP request method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_head SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_head}
  */
  readonly matchHttpMethodHead?: number;
  /**
  * Match HTTP request method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_options SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_options}
  */
  readonly matchHttpMethodOptions?: number;
  /**
  * Match HTTP request method PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_patch SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_patch}
  */
  readonly matchHttpMethodPatch?: number;
  /**
  * Match HTTP request method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_post SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_post}
  */
  readonly matchHttpMethodPost?: number;
  /**
  * Match HTTP request method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_put SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_put}
  */
  readonly matchHttpMethodPut?: number;
  /**
  * Match HTTP request method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_method_trace SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_method_trace}
  */
  readonly matchHttpMethodTrace?: number;
  /**
  * Match file extension of URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_request_file_extension SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_request_file_extension}
  */
  readonly matchHttpRequestFileExtension?: string;
  /**
  * Match URL in HTTP request line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_url SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_url}
  */
  readonly matchHttpUrl?: string;
  /**
  * Match URI in HTTP request line by given regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_url_regex SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_url_regex}
  */
  readonly matchHttpUrlRegex?: string;
  /**
  * Matching the value of HTTP header "User-Agent"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_http_user_agent SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_http_user_agent}
  */
  readonly matchHttpUserAgent?: string;
  /**
  * Match target server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_server_address SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_server_address}
  */
  readonly matchServerAddress?: string;
  /**
  * Match target server port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_server_port SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_server_port}
  */
  readonly matchServerPort?: number;
  /**
  * Math targer server port range inclusively
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_server_port_range_begin SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_server_port_range_begin}
  */
  readonly matchServerPortRangeBegin?: number;
  /**
  * End of port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_server_port_range_end SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_server_port_range_end}
  */
  readonly matchServerPortRangeEnd?: number;
  /**
  * Enable rule in this time-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_time_range SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_time_range}
  */
  readonly matchTimeRange?: string;
  /**
  * Match web-category list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_web_category_list SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_web_category_list}
  */
  readonly matchWebCategoryList?: string;
  /**
  * Match web-reputation scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#match_web_reputation_scope SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#match_web_reputation_scope}
  */
  readonly matchWebReputationScope?: string;
  /**
  * Send notify-page to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#notify_page SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#notify_page}
  */
  readonly notifyPage?: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#policy_name SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#policy_name}
  */
  readonly policyName: string;
  /**
  * Rule priority (1000 is highest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#priority SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#priority}
  */
  readonly priority: number;
  /**
  * Source_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#source_name SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#source_name}
  */
  readonly sourceName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#user_tag SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#uuid SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#sampling_enable SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests hit this rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#counters1 SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match thunder_slb_template_policy_forward_policy_source_destination_adv_match}
*/
export class SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_source_destination_adv_match";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch to import
  * @param importFromId The id of the existing SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyForwardPolicySourceDestinationAdvMatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_source_destination_adv_match", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_adv_match thunder_slb_template_policy_forward_policy_source_destination_adv_match} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_source_destination_adv_match',
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
    this._action = config.action;
    this._disableReqmodIcap = config.disableReqmodIcap;
    this._disableRespmodIcap = config.disableRespmodIcap;
    this._dualStackAction = config.dualStackAction;
    this._id = config.id;
    this._matchHost = config.matchHost;
    this._matchHttpContentEncoding = config.matchHttpContentEncoding;
    this._matchHttpContentLengthRangeBegin = config.matchHttpContentLengthRangeBegin;
    this._matchHttpContentLengthRangeEnd = config.matchHttpContentLengthRangeEnd;
    this._matchHttpContentType = config.matchHttpContentType;
    this._matchHttpHeader = config.matchHttpHeader;
    this._matchHttpMethodConnect = config.matchHttpMethodConnect;
    this._matchHttpMethodDelete = config.matchHttpMethodDelete;
    this._matchHttpMethodGet = config.matchHttpMethodGet;
    this._matchHttpMethodHead = config.matchHttpMethodHead;
    this._matchHttpMethodOptions = config.matchHttpMethodOptions;
    this._matchHttpMethodPatch = config.matchHttpMethodPatch;
    this._matchHttpMethodPost = config.matchHttpMethodPost;
    this._matchHttpMethodPut = config.matchHttpMethodPut;
    this._matchHttpMethodTrace = config.matchHttpMethodTrace;
    this._matchHttpRequestFileExtension = config.matchHttpRequestFileExtension;
    this._matchHttpUrl = config.matchHttpUrl;
    this._matchHttpUrlRegex = config.matchHttpUrlRegex;
    this._matchHttpUserAgent = config.matchHttpUserAgent;
    this._matchServerAddress = config.matchServerAddress;
    this._matchServerPort = config.matchServerPort;
    this._matchServerPortRangeBegin = config.matchServerPortRangeBegin;
    this._matchServerPortRangeEnd = config.matchServerPortRangeEnd;
    this._matchTimeRange = config.matchTimeRange;
    this._matchWebCategoryList = config.matchWebCategoryList;
    this._matchWebReputationScope = config.matchWebReputationScope;
    this._notifyPage = config.notifyPage;
    this._policyName = config.policyName;
    this._priority = config.priority;
    this._sourceName = config.sourceName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
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
  private _samplingEnable = new SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnable[] | cdktf.IResolvable) {
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
      action: cdktf.stringToTerraform(this._action),
      disable_reqmod_icap: cdktf.numberToTerraform(this._disableReqmodIcap),
      disable_respmod_icap: cdktf.numberToTerraform(this._disableRespmodIcap),
      dual_stack_action: cdktf.stringToTerraform(this._dualStackAction),
      id: cdktf.stringToTerraform(this._id),
      match_host: cdktf.stringToTerraform(this._matchHost),
      match_http_content_encoding: cdktf.stringToTerraform(this._matchHttpContentEncoding),
      match_http_content_length_range_begin: cdktf.numberToTerraform(this._matchHttpContentLengthRangeBegin),
      match_http_content_length_range_end: cdktf.numberToTerraform(this._matchHttpContentLengthRangeEnd),
      match_http_content_type: cdktf.stringToTerraform(this._matchHttpContentType),
      match_http_header: cdktf.stringToTerraform(this._matchHttpHeader),
      match_http_method_connect: cdktf.numberToTerraform(this._matchHttpMethodConnect),
      match_http_method_delete: cdktf.numberToTerraform(this._matchHttpMethodDelete),
      match_http_method_get: cdktf.numberToTerraform(this._matchHttpMethodGet),
      match_http_method_head: cdktf.numberToTerraform(this._matchHttpMethodHead),
      match_http_method_options: cdktf.numberToTerraform(this._matchHttpMethodOptions),
      match_http_method_patch: cdktf.numberToTerraform(this._matchHttpMethodPatch),
      match_http_method_post: cdktf.numberToTerraform(this._matchHttpMethodPost),
      match_http_method_put: cdktf.numberToTerraform(this._matchHttpMethodPut),
      match_http_method_trace: cdktf.numberToTerraform(this._matchHttpMethodTrace),
      match_http_request_file_extension: cdktf.stringToTerraform(this._matchHttpRequestFileExtension),
      match_http_url: cdktf.stringToTerraform(this._matchHttpUrl),
      match_http_url_regex: cdktf.stringToTerraform(this._matchHttpUrlRegex),
      match_http_user_agent: cdktf.stringToTerraform(this._matchHttpUserAgent),
      match_server_address: cdktf.stringToTerraform(this._matchServerAddress),
      match_server_port: cdktf.numberToTerraform(this._matchServerPort),
      match_server_port_range_begin: cdktf.numberToTerraform(this._matchServerPortRangeBegin),
      match_server_port_range_end: cdktf.numberToTerraform(this._matchServerPortRangeEnd),
      match_time_range: cdktf.stringToTerraform(this._matchTimeRange),
      match_web_category_list: cdktf.stringToTerraform(this._matchWebCategoryList),
      match_web_reputation_scope: cdktf.stringToTerraform(this._matchWebReputationScope),
      notify_page: cdktf.stringToTerraform(this._notifyPage),
      policy_name: cdktf.stringToTerraform(this._policyName),
      priority: cdktf.numberToTerraform(this._priority),
      source_name: cdktf.stringToTerraform(this._sourceName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_reqmod_icap: {
        value: cdktf.numberToHclTerraform(this._disableReqmodIcap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_respmod_icap: {
        value: cdktf.numberToHclTerraform(this._disableRespmodIcap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dual_stack_action: {
        value: cdktf.stringToHclTerraform(this._dualStackAction),
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
      match_host: {
        value: cdktf.stringToHclTerraform(this._matchHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_content_encoding: {
        value: cdktf.stringToHclTerraform(this._matchHttpContentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_content_length_range_begin: {
        value: cdktf.numberToHclTerraform(this._matchHttpContentLengthRangeBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_content_length_range_end: {
        value: cdktf.numberToHclTerraform(this._matchHttpContentLengthRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_content_type: {
        value: cdktf.stringToHclTerraform(this._matchHttpContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_header: {
        value: cdktf.stringToHclTerraform(this._matchHttpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_method_connect: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_delete: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_get: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodGet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_head: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodHead),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_options: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_patch: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodPatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_post: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodPost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_put: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodPut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_method_trace: {
        value: cdktf.numberToHclTerraform(this._matchHttpMethodTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_http_request_file_extension: {
        value: cdktf.stringToHclTerraform(this._matchHttpRequestFileExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_url: {
        value: cdktf.stringToHclTerraform(this._matchHttpUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_url_regex: {
        value: cdktf.stringToHclTerraform(this._matchHttpUrlRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_http_user_agent: {
        value: cdktf.stringToHclTerraform(this._matchHttpUserAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_server_address: {
        value: cdktf.stringToHclTerraform(this._matchServerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_server_port: {
        value: cdktf.numberToHclTerraform(this._matchServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_server_port_range_begin: {
        value: cdktf.numberToHclTerraform(this._matchServerPortRangeBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_server_port_range_end: {
        value: cdktf.numberToHclTerraform(this._matchServerPortRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_time_range: {
        value: cdktf.stringToHclTerraform(this._matchTimeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_web_category_list: {
        value: cdktf.stringToHclTerraform(this._matchWebCategoryList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_web_reputation_scope: {
        value: cdktf.stringToHclTerraform(this._matchWebReputationScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_page: {
        value: cdktf.stringToHclTerraform(this._notifyPage),
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
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicySourceDestinationAdvMatchSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
