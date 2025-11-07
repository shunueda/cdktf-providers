// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappFirewallRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies what to do should none of the rules match. Either `allow` or `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#default_action VappFirewallRules#default_action}
  */
  readonly defaultAction: string;
  /**
  * Enable or disable firewall service. Default is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#enabled VappFirewallRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#id VappFirewallRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag to enable logging for default action. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#log_default_action VappFirewallRules#log_default_action}
  */
  readonly logDefaultAction?: boolean | cdktf.IResolvable;
  /**
  * vApp network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#network_id VappFirewallRules#network_id}
  */
  readonly networkId: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#org VappFirewallRules#org}
  */
  readonly org?: string;
  /**
  * vApp identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#vapp_id VappFirewallRules#vapp_id}
  */
  readonly vappId: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#vdc VappFirewallRules#vdc}
  */
  readonly vdc?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#rule VappFirewallRules#rule}
  */
  readonly rule?: VappFirewallRulesRule[] | cdktf.IResolvable;
}
export interface VappFirewallRulesRule {
  /**
  * Destination IP address to which the rule applies. A value of `Any` matches any IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#destination_ip VappFirewallRules#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Destination port to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#destination_port VappFirewallRules#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Destination VM identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#destination_vm_id VappFirewallRules#destination_vm_id}
  */
  readonly destinationVmId?: string;
  /**
  * The value can be one of: `assigned` - assigned internal IP will be automatically chosen. `NAT`: NATed external IP will be automatically chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#destination_vm_ip_type VappFirewallRules#destination_vm_ip_type}
  */
  readonly destinationVmIpType?: string;
  /**
  * Destination VM NIC ID to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#destination_vm_nic_id VappFirewallRules#destination_vm_nic_id}
  */
  readonly destinationVmNicId?: number;
  /**
  * 'true' value will enable rule logging. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#enable_logging VappFirewallRules#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * 'true' value will enable firewall rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#enabled VappFirewallRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#name VappFirewallRules#name}
  */
  readonly name?: string;
  /**
  * One of: `drop` (drop packets that match the rule), `allow` (allow packets that match the rule to pass through the firewall)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#policy VappFirewallRules#policy}
  */
  readonly policy?: string;
  /**
  * Specify the protocols to which the rule should be applied. One of: `any`, `icmp`, `tcp`, `udp`, `tcp&udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#protocol VappFirewallRules#protocol}
  */
  readonly protocol?: string;
  /**
  * Source IP address to which the rule applies. A value of `Any` matches any IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#source_ip VappFirewallRules#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source port to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#source_port VappFirewallRules#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Source VM identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#source_vm_id VappFirewallRules#source_vm_id}
  */
  readonly sourceVmId?: string;
  /**
  * The value can be one of: `assigned` - assigned internal IP will be automatically chosen. `NAT`: NATed external IP will be automatically chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#source_vm_ip_type VappFirewallRules#source_vm_ip_type}
  */
  readonly sourceVmIpType?: string;
  /**
  * Source VM NIC ID to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#source_vm_nic_id VappFirewallRules#source_vm_nic_id}
  */
  readonly sourceVmNicId?: number;
}

export function vappFirewallRulesRuleToTerraform(struct?: VappFirewallRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    destination_vm_id: cdktf.stringToTerraform(struct!.destinationVmId),
    destination_vm_ip_type: cdktf.stringToTerraform(struct!.destinationVmIpType),
    destination_vm_nic_id: cdktf.numberToTerraform(struct!.destinationVmNicId),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    policy: cdktf.stringToTerraform(struct!.policy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
    source_vm_id: cdktf.stringToTerraform(struct!.sourceVmId),
    source_vm_ip_type: cdktf.stringToTerraform(struct!.sourceVmIpType),
    source_vm_nic_id: cdktf.numberToTerraform(struct!.sourceVmNicId),
  }
}


export function vappFirewallRulesRuleToHclTerraform(struct?: VappFirewallRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_vm_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationVmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_vm_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationVmIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_vm_nic_id: {
      value: cdktf.numberToHclTerraform(struct!.destinationVmNicId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vm_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vm_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceVmIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vm_nic_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceVmNicId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappFirewallRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappFirewallRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationVmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVmId = this._destinationVmId;
    }
    if (this._destinationVmIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVmIpType = this._destinationVmIpType;
    }
    if (this._destinationVmNicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVmNicId = this._destinationVmNicId;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceVmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVmId = this._sourceVmId;
    }
    if (this._sourceVmIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVmIpType = this._sourceVmIpType;
    }
    if (this._sourceVmNicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVmNicId = this._sourceVmNicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappFirewallRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._destinationVmId = undefined;
      this._destinationVmIpType = undefined;
      this._destinationVmNicId = undefined;
      this._enableLogging = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._policy = undefined;
      this._protocol = undefined;
      this._sourceIp = undefined;
      this._sourcePort = undefined;
      this._sourceVmId = undefined;
      this._sourceVmIpType = undefined;
      this._sourceVmNicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._destinationVmId = value.destinationVmId;
      this._destinationVmIpType = value.destinationVmIpType;
      this._destinationVmNicId = value.destinationVmNicId;
      this._enableLogging = value.enableLogging;
      this._enabled = value.enabled;
      this._name = value.name;
      this._policy = value.policy;
      this._protocol = value.protocol;
      this._sourceIp = value.sourceIp;
      this._sourcePort = value.sourcePort;
      this._sourceVmId = value.sourceVmId;
      this._sourceVmIpType = value.sourceVmIpType;
      this._sourceVmNicId = value.sourceVmNicId;
    }
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_vm_id - computed: false, optional: true, required: false
  private _destinationVmId?: string; 
  public get destinationVmId() {
    return this.getStringAttribute('destination_vm_id');
  }
  public set destinationVmId(value: string) {
    this._destinationVmId = value;
  }
  public resetDestinationVmId() {
    this._destinationVmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVmIdInput() {
    return this._destinationVmId;
  }

  // destination_vm_ip_type - computed: false, optional: true, required: false
  private _destinationVmIpType?: string; 
  public get destinationVmIpType() {
    return this.getStringAttribute('destination_vm_ip_type');
  }
  public set destinationVmIpType(value: string) {
    this._destinationVmIpType = value;
  }
  public resetDestinationVmIpType() {
    this._destinationVmIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVmIpTypeInput() {
    return this._destinationVmIpType;
  }

  // destination_vm_nic_id - computed: false, optional: true, required: false
  private _destinationVmNicId?: number; 
  public get destinationVmNicId() {
    return this.getNumberAttribute('destination_vm_nic_id');
  }
  public set destinationVmNicId(value: number) {
    this._destinationVmNicId = value;
  }
  public resetDestinationVmNicId() {
    this._destinationVmNicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVmNicIdInput() {
    return this._destinationVmNicId;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_vm_id - computed: false, optional: true, required: false
  private _sourceVmId?: string; 
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  public resetSourceVmId() {
    this._sourceVmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId;
  }

  // source_vm_ip_type - computed: false, optional: true, required: false
  private _sourceVmIpType?: string; 
  public get sourceVmIpType() {
    return this.getStringAttribute('source_vm_ip_type');
  }
  public set sourceVmIpType(value: string) {
    this._sourceVmIpType = value;
  }
  public resetSourceVmIpType() {
    this._sourceVmIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIpTypeInput() {
    return this._sourceVmIpType;
  }

  // source_vm_nic_id - computed: false, optional: true, required: false
  private _sourceVmNicId?: number; 
  public get sourceVmNicId() {
    return this.getNumberAttribute('source_vm_nic_id');
  }
  public set sourceVmNicId(value: number) {
    this._sourceVmNicId = value;
  }
  public resetSourceVmNicId() {
    this._sourceVmNicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmNicIdInput() {
    return this._sourceVmNicId;
  }
}

export class VappFirewallRulesRuleList extends cdktf.ComplexList {
  public internalValue? : VappFirewallRulesRule[] | cdktf.IResolvable

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
  public get(index: number): VappFirewallRulesRuleOutputReference {
    return new VappFirewallRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules vcd_vapp_firewall_rules}
*/
export class VappFirewallRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp_firewall_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VappFirewallRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VappFirewallRules to import
  * @param importFromId The id of the existing VappFirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VappFirewallRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp_firewall_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_firewall_rules vcd_vapp_firewall_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappFirewallRulesConfig
  */
  public constructor(scope: Construct, id: string, config: VappFirewallRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp_firewall_rules',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logDefaultAction = config.logDefaultAction;
    this._networkId = config.networkId;
    this._org = config.org;
    this._vappId = config.vappId;
    this._vdc = config.vdc;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // log_default_action - computed: false, optional: true, required: false
  private _logDefaultAction?: boolean | cdktf.IResolvable; 
  public get logDefaultAction() {
    return this.getBooleanAttribute('log_default_action');
  }
  public set logDefaultAction(value: boolean | cdktf.IResolvable) {
    this._logDefaultAction = value;
  }
  public resetLogDefaultAction() {
    this._logDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDefaultActionInput() {
    return this._logDefaultAction;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // vapp_id - computed: false, optional: false, required: true
  private _vappId?: string; 
  public get vappId() {
    return this.getStringAttribute('vapp_id');
  }
  public set vappId(value: string) {
    this._vappId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappIdInput() {
    return this._vappId;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new VappFirewallRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: VappFirewallRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      log_default_action: cdktf.booleanToTerraform(this._logDefaultAction),
      network_id: cdktf.stringToTerraform(this._networkId),
      org: cdktf.stringToTerraform(this._org),
      vapp_id: cdktf.stringToTerraform(this._vappId),
      vdc: cdktf.stringToTerraform(this._vdc),
      rule: cdktf.listMapper(vappFirewallRulesRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      log_default_action: {
        value: cdktf.booleanToHclTerraform(this._logDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_id: {
        value: cdktf.stringToHclTerraform(this._vappId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(vappFirewallRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VappFirewallRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
