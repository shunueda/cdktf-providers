// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationAdaptivePolicyAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the adaptive policy ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#description OrganizationAdaptivePolicyAcl#description}
  */
  readonly description?: string;
  /**
  * IP version of adpative policy ACL. One of: `any`, `ipv4` or `ipv6`
  *   - Choices: `any`, `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#ip_version OrganizationAdaptivePolicyAcl#ip_version}
  */
  readonly ipVersion: string;
  /**
  * Name of the adaptive policy ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#name OrganizationAdaptivePolicyAcl#name}
  */
  readonly name: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#organization_id OrganizationAdaptivePolicyAcl#organization_id}
  */
  readonly organizationId: string;
  /**
  * An ordered array of the adaptive policy ACL rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#rules OrganizationAdaptivePolicyAcl#rules}
  */
  readonly rules: OrganizationAdaptivePolicyAclRules[] | cdktf.IResolvable;
}
export interface OrganizationAdaptivePolicyAclRules {
  /**
  * Destination port. Must be in the format of single port: `1`, port list: `1,2` or port range: `1-10`, and in the range of 1-65535, or `any`. Default is `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#dst_port OrganizationAdaptivePolicyAcl#dst_port}
  */
  readonly dstPort?: string;
  /**
  * If enabled, when this rule is hit an entry will be logged to the event log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#log OrganizationAdaptivePolicyAcl#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * `allow` or `deny` traffic specified by this rule.
  *   - Choices: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#policy OrganizationAdaptivePolicyAcl#policy}
  */
  readonly policy: string;
  /**
  * The type of protocol (must be `tcp`, `udp`, `icmp` or `any`).
  *   - Choices: `any`, `icmp`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#protocol OrganizationAdaptivePolicyAcl#protocol}
  */
  readonly protocol: string;
  /**
  * Source port. Must be in the format of single port: `1`, port list: `1,2` or port range: `1-10`, and in the range of 1-65535, or `any`. Default is `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#src_port OrganizationAdaptivePolicyAcl#src_port}
  */
  readonly srcPort?: string;
  /**
  * If enabled, means TCP connection with this node must be established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#tcp_established OrganizationAdaptivePolicyAcl#tcp_established}
  */
  readonly tcpEstablished?: boolean | cdktf.IResolvable;
}

export function organizationAdaptivePolicyAclRulesToTerraform(struct?: OrganizationAdaptivePolicyAclRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    log: cdktf.booleanToTerraform(struct!.log),
    policy: cdktf.stringToTerraform(struct!.policy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
    tcp_established: cdktf.booleanToTerraform(struct!.tcpEstablished),
  }
}


export function organizationAdaptivePolicyAclRulesToHclTerraform(struct?: OrganizationAdaptivePolicyAclRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port: {
      value: cdktf.stringToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    src_port: {
      value: cdktf.stringToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_established: {
      value: cdktf.booleanToHclTerraform(struct!.tcpEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationAdaptivePolicyAclRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationAdaptivePolicyAclRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._tcpEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEstablished = this._tcpEstablished;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationAdaptivePolicyAclRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstPort = undefined;
      this._log = undefined;
      this._policy = undefined;
      this._protocol = undefined;
      this._srcPort = undefined;
      this._tcpEstablished = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstPort = value.dstPort;
      this._log = value.log;
      this._policy = value.policy;
      this._protocol = value.protocol;
      this._srcPort = value.srcPort;
      this._tcpEstablished = value.tcpEstablished;
    }
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

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // tcp_established - computed: false, optional: true, required: false
  private _tcpEstablished?: boolean | cdktf.IResolvable; 
  public get tcpEstablished() {
    return this.getBooleanAttribute('tcp_established');
  }
  public set tcpEstablished(value: boolean | cdktf.IResolvable) {
    this._tcpEstablished = value;
  }
  public resetTcpEstablished() {
    this._tcpEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedInput() {
    return this._tcpEstablished;
  }
}

export class OrganizationAdaptivePolicyAclRulesList extends cdktf.ComplexList {
  public internalValue? : OrganizationAdaptivePolicyAclRules[] | cdktf.IResolvable

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
  public get(index: number): OrganizationAdaptivePolicyAclRulesOutputReference {
    return new OrganizationAdaptivePolicyAclRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl meraki_organization_adaptive_policy_acl}
*/
export class OrganizationAdaptivePolicyAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_adaptive_policy_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationAdaptivePolicyAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationAdaptivePolicyAcl to import
  * @param importFromId The id of the existing OrganizationAdaptivePolicyAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationAdaptivePolicyAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_adaptive_policy_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_adaptive_policy_acl meraki_organization_adaptive_policy_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationAdaptivePolicyAclConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationAdaptivePolicyAclConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_adaptive_policy_acl',
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
    this._description = config.description;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new OrganizationAdaptivePolicyAclRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: OrganizationAdaptivePolicyAclRules[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      rules: cdktf.listMapper(organizationAdaptivePolicyAclRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(organizationAdaptivePolicyAclRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationAdaptivePolicyAclRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
