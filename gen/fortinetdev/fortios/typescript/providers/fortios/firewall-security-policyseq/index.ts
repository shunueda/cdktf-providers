// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSecurityPolicyseqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#alter_position FirewallSecurityPolicyseq#alter_position}
  */
  readonly alterPosition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#comment FirewallSecurityPolicyseq#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#enable_state_checking FirewallSecurityPolicyseq#enable_state_checking}
  */
  readonly enableStateChecking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#id FirewallSecurityPolicyseq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#policy_dst_id FirewallSecurityPolicyseq#policy_dst_id}
  */
  readonly policyDstId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#policy_src_id FirewallSecurityPolicyseq#policy_src_id}
  */
  readonly policySrcId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#state_policy_srcdst_pos FirewallSecurityPolicyseq#state_policy_srcdst_pos}
  */
  readonly statePolicySrcdstPos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#vdomparam FirewallSecurityPolicyseq#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface FirewallSecurityPolicyseqStatePolicyListStruct {
}

export function firewallSecurityPolicyseqStatePolicyListStructToTerraform(struct?: FirewallSecurityPolicyseqStatePolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firewallSecurityPolicyseqStatePolicyListStructToHclTerraform(struct?: FirewallSecurityPolicyseqStatePolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirewallSecurityPolicyseqStatePolicyListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallSecurityPolicyseqStatePolicyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSecurityPolicyseqStatePolicyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policyid - computed: true, optional: false, required: false
  public get policyid() {
    return this.getStringAttribute('policyid');
  }
}

export class FirewallSecurityPolicyseqStatePolicyListStructList extends cdktf.ComplexList {

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
  public get(index: number): FirewallSecurityPolicyseqStatePolicyListStructOutputReference {
    return new FirewallSecurityPolicyseqStatePolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq fortios_firewall_security_policyseq}
*/
export class FirewallSecurityPolicyseq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_security_policyseq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSecurityPolicyseq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSecurityPolicyseq to import
  * @param importFromId The id of the existing FirewallSecurityPolicyseq that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSecurityPolicyseq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_security_policyseq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_security_policyseq fortios_firewall_security_policyseq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSecurityPolicyseqConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallSecurityPolicyseqConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_security_policyseq',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alterPosition = config.alterPosition;
    this._comment = config.comment;
    this._enableStateChecking = config.enableStateChecking;
    this._id = config.id;
    this._policyDstId = config.policyDstId;
    this._policySrcId = config.policySrcId;
    this._statePolicySrcdstPos = config.statePolicySrcdstPos;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alter_position - computed: false, optional: false, required: true
  private _alterPosition?: string; 
  public get alterPosition() {
    return this.getStringAttribute('alter_position');
  }
  public set alterPosition(value: string) {
    this._alterPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alterPositionInput() {
    return this._alterPosition;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // enable_state_checking - computed: false, optional: true, required: false
  private _enableStateChecking?: boolean | cdktf.IResolvable; 
  public get enableStateChecking() {
    return this.getBooleanAttribute('enable_state_checking');
  }
  public set enableStateChecking(value: boolean | cdktf.IResolvable) {
    this._enableStateChecking = value;
  }
  public resetEnableStateChecking() {
    this._enableStateChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStateCheckingInput() {
    return this._enableStateChecking;
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

  // policy_dst_id - computed: false, optional: false, required: true
  private _policyDstId?: number; 
  public get policyDstId() {
    return this.getNumberAttribute('policy_dst_id');
  }
  public set policyDstId(value: number) {
    this._policyDstId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDstIdInput() {
    return this._policyDstId;
  }

  // policy_src_id - computed: false, optional: false, required: true
  private _policySrcId?: number; 
  public get policySrcId() {
    return this.getNumberAttribute('policy_src_id');
  }
  public set policySrcId(value: number) {
    this._policySrcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySrcIdInput() {
    return this._policySrcId;
  }

  // state_policy_list - computed: true, optional: false, required: false
  private _statePolicyList = new FirewallSecurityPolicyseqStatePolicyListStructList(this, "state_policy_list", false);
  public get statePolicyList() {
    return this._statePolicyList;
  }

  // state_policy_srcdst_pos - computed: false, optional: true, required: false
  private _statePolicySrcdstPos?: string; 
  public get statePolicySrcdstPos() {
    return this.getStringAttribute('state_policy_srcdst_pos');
  }
  public set statePolicySrcdstPos(value: string) {
    this._statePolicySrcdstPos = value;
  }
  public resetStatePolicySrcdstPos() {
    this._statePolicySrcdstPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statePolicySrcdstPosInput() {
    return this._statePolicySrcdstPos;
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alter_position: cdktf.stringToTerraform(this._alterPosition),
      comment: cdktf.stringToTerraform(this._comment),
      enable_state_checking: cdktf.booleanToTerraform(this._enableStateChecking),
      id: cdktf.stringToTerraform(this._id),
      policy_dst_id: cdktf.numberToTerraform(this._policyDstId),
      policy_src_id: cdktf.numberToTerraform(this._policySrcId),
      state_policy_srcdst_pos: cdktf.stringToTerraform(this._statePolicySrcdstPos),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alter_position: {
        value: cdktf.stringToHclTerraform(this._alterPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_state_checking: {
        value: cdktf.booleanToHclTerraform(this._enableStateChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_dst_id: {
        value: cdktf.numberToHclTerraform(this._policyDstId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_src_id: {
        value: cdktf.numberToHclTerraform(this._policySrcId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state_policy_srcdst_pos: {
        value: cdktf.stringToHclTerraform(this._statePolicySrcdstPos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
