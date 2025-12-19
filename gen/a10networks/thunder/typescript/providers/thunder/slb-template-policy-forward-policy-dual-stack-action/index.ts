// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyForwardPolicyDualStackActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fallback service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#fall_back SlbTemplatePolicyForwardPolicyDualStackAction#fall_back}
  */
  readonly fallBack?: string;
  /**
  * Source NAT pool or pool group for fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#fall_back_snat SlbTemplatePolicyForwardPolicyDualStackAction#fall_back_snat}
  */
  readonly fallBackSnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#id SlbTemplatePolicyForwardPolicyDualStackAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 service group to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#ipv4 SlbTemplatePolicyForwardPolicyDualStackAction#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv4 source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#ipv4_snat SlbTemplatePolicyForwardPolicyDualStackAction#ipv4_snat}
  */
  readonly ipv4Snat?: string;
  /**
  * IPv6 service group to forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#ipv6 SlbTemplatePolicyForwardPolicyDualStackAction#ipv6}
  */
  readonly ipv6?: string;
  /**
  * IPv6 source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#ipv6_snat SlbTemplatePolicyForwardPolicyDualStackAction#ipv6_snat}
  */
  readonly ipv6Snat?: string;
  /**
  * enable logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#log SlbTemplatePolicyForwardPolicyDualStackAction#log}
  */
  readonly log?: number;
  /**
  * Action name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#name SlbTemplatePolicyForwardPolicyDualStackAction#name}
  */
  readonly name: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#policy_name SlbTemplatePolicyForwardPolicyDualStackAction#policy_name}
  */
  readonly policyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#user_tag SlbTemplatePolicyForwardPolicyDualStackAction#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#uuid SlbTemplatePolicyForwardPolicyDualStackAction#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#sampling_enable SlbTemplatePolicyForwardPolicyDualStackAction#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable {
  /**
  * 'all': all; 'hits': Number of requests forward by this action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#counters1 SlbTemplatePolicyForwardPolicyDualStackAction#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplatePolicyForwardPolicyDualStackActionSamplingEnableToTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplatePolicyForwardPolicyDualStackActionSamplingEnableToHclTerraform(struct?: SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnableOutputReference {
    return new SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action thunder_slb_template_policy_forward_policy_dual_stack_action}
*/
export class SlbTemplatePolicyForwardPolicyDualStackAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_dual_stack_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyForwardPolicyDualStackAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyForwardPolicyDualStackAction to import
  * @param importFromId The id of the existing SlbTemplatePolicyForwardPolicyDualStackAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyForwardPolicyDualStackAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_dual_stack_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_dual_stack_action thunder_slb_template_policy_forward_policy_dual_stack_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyForwardPolicyDualStackActionConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyForwardPolicyDualStackActionConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_dual_stack_action',
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
    this._fallBack = config.fallBack;
    this._fallBackSnat = config.fallBackSnat;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._ipv4Snat = config.ipv4Snat;
    this._ipv6 = config.ipv6;
    this._ipv6Snat = config.ipv6Snat;
    this._log = config.log;
    this._name = config.name;
    this._policyName = config.policyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _samplingEnable = new SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnable[] | cdktf.IResolvable) {
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
      fall_back: cdktf.stringToTerraform(this._fallBack),
      fall_back_snat: cdktf.stringToTerraform(this._fallBackSnat),
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      ipv4_snat: cdktf.stringToTerraform(this._ipv4Snat),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      ipv6_snat: cdktf.stringToTerraform(this._ipv6Snat),
      log: cdktf.numberToTerraform(this._log),
      name: cdktf.stringToTerraform(this._name),
      policy_name: cdktf.stringToTerraform(this._policyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbTemplatePolicyForwardPolicyDualStackActionSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_snat: {
        value: cdktf.stringToHclTerraform(this._ipv4Snat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_snat: {
        value: cdktf.stringToHclTerraform(this._ipv6Snat),
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
        value: cdktf.listMapperHcl(slbTemplatePolicyForwardPolicyDualStackActionSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplatePolicyForwardPolicyDualStackActionSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
