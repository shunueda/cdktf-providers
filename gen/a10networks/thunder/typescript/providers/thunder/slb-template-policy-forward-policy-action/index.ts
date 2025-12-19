// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyForwardPolicyActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'forward-to-internet': Forward request to Internet; 'forward-to-service-group': Forward request to service group; 'forward-to-proxy': Forward request to HTTP proxy server; 'drop': Drop request;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#action1 SlbTemplatePolicyForwardPolicyAction#action1}
  */
  readonly action1?: string;
  /**
  * drop-message sent to the client as webpage(html tags are included and quotation marks are required for white spaces)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#drop_message SlbTemplatePolicyForwardPolicyAction#drop_message}
  */
  readonly dropMessage?: string;
  /**
  * Specify URL to which client request is redirected upon being dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#drop_redirect_url SlbTemplatePolicyForwardPolicyAction#drop_redirect_url}
  */
  readonly dropRedirectUrl?: string;
  /**
  * Specify response code for drop action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#drop_response_code SlbTemplatePolicyForwardPolicyAction#drop_response_code}
  */
  readonly dropResponseCode?: number;
  /**
  * service group to forward the packets to Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#fake_sg SlbTemplatePolicyForwardPolicyAction#fake_sg}
  */
  readonly fakeSg?: string;
  /**
  * Fallback service group for Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#fall_back SlbTemplatePolicyForwardPolicyAction#fall_back}
  */
  readonly fallBack?: string;
  /**
  * Source NAT pool or pool group for fallback server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#fall_back_snat SlbTemplatePolicyForwardPolicyAction#fall_back_snat}
  */
  readonly fallBackSnat?: string;
  /**
  * Source port translation only for fallback server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#fall_back_snat_pt_only SlbTemplatePolicyForwardPolicyAction#fall_back_snat_pt_only}
  */
  readonly fallBackSnatPtOnly?: number;
  /**
  * Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#forward_snat SlbTemplatePolicyForwardPolicyAction#forward_snat}
  */
  readonly forwardSnat?: string;
  /**
  * Source port translation only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#forward_snat_pt_only SlbTemplatePolicyForwardPolicyAction#forward_snat_pt_only}
  */
  readonly forwardSnatPtOnly?: number;
  /**
  * '301': Moved permanently; '302': Found;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#http_status_code SlbTemplatePolicyForwardPolicyAction#http_status_code}
  */
  readonly httpStatusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#id SlbTemplatePolicyForwardPolicyAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#log SlbTemplatePolicyForwardPolicyAction#log}
  */
  readonly log?: number;
  /**
  * Action policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#name SlbTemplatePolicyForwardPolicyAction#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#policy_name SlbTemplatePolicyForwardPolicyAction#policy_name}
  */
  readonly policyName: string;
  /**
  * Enable proxy chaining feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#proxy_chaining SlbTemplatePolicyForwardPolicyAction#proxy_chaining}
  */
  readonly proxyChaining?: number;
  /**
  * Forward all https packets to upstream proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#proxy_chaining_bypass SlbTemplatePolicyForwardPolicyAction#proxy_chaining_bypass}
  */
  readonly proxyChainingBypass?: number;
  /**
  * service group to forward the packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#real_sg SlbTemplatePolicyForwardPolicyAction#real_sg}
  */
  readonly realSg?: string;
  /**
  * Fetch server certificate by upstream proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#support_cert_fetch SlbTemplatePolicyForwardPolicyAction#support_cert_fetch}
  */
  readonly supportCertFetch?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#user_tag SlbTemplatePolicyForwardPolicyAction#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#uuid SlbTemplatePolicyForwardPolicyAction#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#sampling_enable SlbTemplatePolicyForwardPolicyAction#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicyActionSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyForwardPolicyActionSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests matching this destination rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#counters1 SlbTemplatePolicyForwardPolicyAction#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicyActionSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicyActionSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicyActionSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyActionSamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicyActionSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyActionSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicyActionSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicyActionSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyActionSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyActionSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicyActionSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action thunder_slb_template_policy_forward_policy_action}
*/
export class SlbTemplatePolicyForwardPolicyAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyForwardPolicyAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyForwardPolicyAction to import
  * @param importFromId The id of the existing SlbTemplatePolicyForwardPolicyAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyForwardPolicyAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_action thunder_slb_template_policy_forward_policy_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyForwardPolicyActionConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyForwardPolicyActionConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_action',
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
    this._action1 = config.action1;
    this._dropMessage = config.dropMessage;
    this._dropRedirectUrl = config.dropRedirectUrl;
    this._dropResponseCode = config.dropResponseCode;
    this._fakeSg = config.fakeSg;
    this._fallBack = config.fallBack;
    this._fallBackSnat = config.fallBackSnat;
    this._fallBackSnatPtOnly = config.fallBackSnatPtOnly;
    this._forwardSnat = config.forwardSnat;
    this._forwardSnatPtOnly = config.forwardSnatPtOnly;
    this._httpStatusCode = config.httpStatusCode;
    this._id = config.id;
    this._log = config.log;
    this._name = config.name;
    this._policyName = config.policyName;
    this._proxyChaining = config.proxyChaining;
    this._proxyChainingBypass = config.proxyChainingBypass;
    this._realSg = config.realSg;
    this._supportCertFetch = config.supportCertFetch;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _samplingEnable = new SlbTemplatePolicyForwardPolicyActionSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicyActionSamplingEnable[] | cdktf.IResolvable) {
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
      action1: cdktf.stringToTerraform(this._action1),
      drop_message: cdktf.stringToTerraform(this._dropMessage),
      drop_redirect_url: cdktf.stringToTerraform(this._dropRedirectUrl),
      drop_response_code: cdktf.numberToTerraform(this._dropResponseCode),
      fake_sg: cdktf.stringToTerraform(this._fakeSg),
      fall_back: cdktf.stringToTerraform(this._fallBack),
      fall_back_snat: cdktf.stringToTerraform(this._fallBackSnat),
      fall_back_snat_pt_only: cdktf.numberToTerraform(this._fallBackSnatPtOnly),
      forward_snat: cdktf.stringToTerraform(this._forwardSnat),
      forward_snat_pt_only: cdktf.numberToTerraform(this._forwardSnatPtOnly),
      http_status_code: cdktf.stringToTerraform(this._httpStatusCode),
      id: cdktf.stringToTerraform(this._id),
      log: cdktf.numberToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      policy_name: cdktf.stringToTerraform(this._policyName),
      proxy_chaining: cdktf.numberToTerraform(this._proxyChaining),
      proxy_chaining_bypass: cdktf.numberToTerraform(this._proxyChainingBypass),
      real_sg: cdktf.stringToTerraform(this._realSg),
      support_cert_fetch: cdktf.numberToTerraform(this._supportCertFetch),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicyActionSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action1: {
        value: cdktf.stringToHclTerraform(this._action1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_message: {
        value: cdktf.stringToHclTerraform(this._dropMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_redirect_url: {
        value: cdktf.stringToHclTerraform(this._dropRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_response_code: {
        value: cdktf.numberToHclTerraform(this._dropResponseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fake_sg: {
        value: cdktf.stringToHclTerraform(this._fakeSg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_back: {
        value: cdktf.stringToHclTerraform(this._fallBack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_back_snat: {
        value: cdktf.stringToHclTerraform(this._fallBackSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_back_snat_pt_only: {
        value: cdktf.numberToHclTerraform(this._fallBackSnatPtOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_snat: {
        value: cdktf.stringToHclTerraform(this._forwardSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_snat_pt_only: {
        value: cdktf.numberToHclTerraform(this._forwardSnatPtOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_status_code: {
        value: cdktf.stringToHclTerraform(this._httpStatusCode),
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
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      proxy_chaining: {
        value: cdktf.numberToHclTerraform(this._proxyChaining),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_chaining_bypass: {
        value: cdktf.numberToHclTerraform(this._proxyChainingBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      real_sg: {
        value: cdktf.stringToHclTerraform(this._realSg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_cert_fetch: {
        value: cdktf.numberToHclTerraform(this._supportCertFetch),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyActionSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicyActionSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
