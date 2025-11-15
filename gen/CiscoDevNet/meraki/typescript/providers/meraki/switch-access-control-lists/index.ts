// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchAccessControlListsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#network_id SwitchAccessControlLists#network_id}
  */
  readonly networkId: string;
  /**
  * An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#rules SwitchAccessControlLists#rules}
  */
  readonly rules: SwitchAccessControlListsRules[] | cdktf.IResolvable;
}
export interface SwitchAccessControlListsRules {
  /**
  * Description of the rule (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#comment SwitchAccessControlLists#comment}
  */
  readonly comment?: string;
  /**
  * Destination IP address (in IP or CIDR notation) or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#dst_cidr SwitchAccessControlLists#dst_cidr}
  */
  readonly dstCidr: string;
  /**
  * Destination port. Must be in the range of 1-65535 or `any`. Default is `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#dst_port SwitchAccessControlLists#dst_port}
  */
  readonly dstPort?: string;
  /**
  * IP address version (must be `any`, `ipv4` or `ipv6`). Applicable only if network supports IPv6. Default value is `ipv4`.
  *   - Choices: `any`, `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#ip_version SwitchAccessControlLists#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * `allow` or `deny` traffic specified by this rule.
  *   - Choices: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#policy SwitchAccessControlLists#policy}
  */
  readonly policy: string;
  /**
  * The type of protocol (must be `tcp`, `udp`, or `any`).
  *   - Choices: `any`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#protocol SwitchAccessControlLists#protocol}
  */
  readonly protocol: string;
  /**
  * Source IP address (in IP or CIDR notation) or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#src_cidr SwitchAccessControlLists#src_cidr}
  */
  readonly srcCidr: string;
  /**
  * Source port. Must be in the range of 1-65535 or `any`. Default is `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#src_port SwitchAccessControlLists#src_port}
  */
  readonly srcPort?: string;
  /**
  * Incoming traffic VLAN. Must be in the range of 1-4095 or `any`. Default is `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#vlan SwitchAccessControlLists#vlan}
  */
  readonly vlan?: string;
}

export function switchAccessControlListsRulesToTerraform(struct?: SwitchAccessControlListsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    policy: cdktf.stringToTerraform(struct!.policy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
    vlan: cdktf.stringToTerraform(struct!.vlan),
  }
}


export function switchAccessControlListsRulesToHclTerraform(struct?: SwitchAccessControlListsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchAccessControlListsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchAccessControlListsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchAccessControlListsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._dstCidr = undefined;
      this._dstPort = undefined;
      this._ipVersion = undefined;
      this._policy = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPort = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._dstCidr = value.dstCidr;
      this._dstPort = value.dstPort;
      this._ipVersion = value.ipVersion;
      this._policy = value.policy;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPort = value.srcPort;
      this._vlan = value.vlan;
    }
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

  // dst_cidr - computed: false, optional: false, required: true
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // src_cidr - computed: false, optional: false, required: true
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class SwitchAccessControlListsRulesList extends cdktf.ComplexList {
  public internalValue? : SwitchAccessControlListsRules[] | cdktf.IResolvable

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
  public get(index: number): SwitchAccessControlListsRulesOutputReference {
    return new SwitchAccessControlListsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists meraki_switch_access_control_lists}
*/
export class SwitchAccessControlLists extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_access_control_lists";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchAccessControlLists resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchAccessControlLists to import
  * @param importFromId The id of the existing SwitchAccessControlLists that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchAccessControlLists to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_access_control_lists", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_access_control_lists meraki_switch_access_control_lists} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchAccessControlListsConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchAccessControlListsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_access_control_lists',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SwitchAccessControlListsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SwitchAccessControlListsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      rules: cdktf.listMapper(switchAccessControlListsRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(switchAccessControlListsRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchAccessControlListsRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
