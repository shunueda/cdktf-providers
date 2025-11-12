// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentClusterFirewallSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Security group comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#comment VirtualEnvironmentClusterFirewallSecurityGroup#comment}
  */
  readonly comment?: string;
  /**
  * The ID of the container to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#container_id VirtualEnvironmentClusterFirewallSecurityGroup#container_id}
  */
  readonly containerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#id VirtualEnvironmentClusterFirewallSecurityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Security group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#name VirtualEnvironmentClusterFirewallSecurityGroup#name}
  */
  readonly name: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#node_name VirtualEnvironmentClusterFirewallSecurityGroup#node_name}
  */
  readonly nodeName?: string;
  /**
  * The ID of the VM to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#vm_id VirtualEnvironmentClusterFirewallSecurityGroup#vm_id}
  */
  readonly vmId?: number;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#rule VirtualEnvironmentClusterFirewallSecurityGroup#rule}
  */
  readonly rule: VirtualEnvironmentClusterFirewallSecurityGroupRule[] | cdktf.IResolvable;
}
export interface VirtualEnvironmentClusterFirewallSecurityGroupRule {
  /**
  * Rules action ('ACCEPT', 'DROP', 'REJECT')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#action VirtualEnvironmentClusterFirewallSecurityGroup#action}
  */
  readonly action?: string;
  /**
  * Rules comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#comment VirtualEnvironmentClusterFirewallSecurityGroup#comment}
  */
  readonly comment?: string;
  /**
  * Restrict packet destination address. This can refer to a single IP address, an IP set ('+ipsetname') or an IP alias definition. You can also specify an address range like '20.34.101.207-201.3.9.99', or a list of IP addresses and networks (entries are separated by comma). Please do not mix IPv4 and IPv6 addresses inside such lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#dest VirtualEnvironmentClusterFirewallSecurityGroup#dest}
  */
  readonly dest?: string;
  /**
  * Restrict TCP/UDP destination port. You can use service names or simple numbers (0-65535), as defined in '/etc/services'. Port ranges can be specified with '\d+:\d+', for example '80:85', and you can use comma separated list to match several ports or ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#dport VirtualEnvironmentClusterFirewallSecurityGroup#dport}
  */
  readonly dport?: string;
  /**
  * Enable rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#enabled VirtualEnvironmentClusterFirewallSecurityGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Network interface name. You have to use network configuration key names for VMs and containers ('net\d+'). Host related rules can use arbitrary strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#iface VirtualEnvironmentClusterFirewallSecurityGroup#iface}
  */
  readonly iface?: string;
  /**
  * Log level for this rule ('emerg', 'alert', 'crit', 'err', 'warning', 'notice', 'info', 'debug', 'nolog')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#log VirtualEnvironmentClusterFirewallSecurityGroup#log}
  */
  readonly log?: string;
  /**
  * Use predefined standard macro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#macro VirtualEnvironmentClusterFirewallSecurityGroup#macro}
  */
  readonly macro?: string;
  /**
  * Restrict packet protocol. You can use protocol names or simple numbers (0-255), as defined in '/etc/protocols'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#proto VirtualEnvironmentClusterFirewallSecurityGroup#proto}
  */
  readonly proto?: string;
  /**
  * Security group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#security_group VirtualEnvironmentClusterFirewallSecurityGroup#security_group}
  */
  readonly securityGroup?: string;
  /**
  * Restrict packet source address. This can refer to a single IP address, an IP set ('+ipsetname') or an IP alias definition. You can also specify an address range like '20.34.101.207-201.3.9.99', or a list of IP addresses and networks (entries are separated by comma). Please do not mix IPv4 and IPv6 addresses inside such lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#source VirtualEnvironmentClusterFirewallSecurityGroup#source}
  */
  readonly source?: string;
  /**
  * Restrict TCP/UDP source port. You can use service names or simple numbers (0-65535), as defined in '/etc/services'. Port ranges can be specified with '\d+:\d+', for example '80:85', and you can use comma separated list to match several ports or ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#sport VirtualEnvironmentClusterFirewallSecurityGroup#sport}
  */
  readonly sport?: string;
  /**
  * Rules type ('in', 'out', 'forward')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#type VirtualEnvironmentClusterFirewallSecurityGroup#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentClusterFirewallSecurityGroupRuleToTerraform(struct?: VirtualEnvironmentClusterFirewallSecurityGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    dest: cdktf.stringToTerraform(struct!.dest),
    dport: cdktf.stringToTerraform(struct!.dport),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    iface: cdktf.stringToTerraform(struct!.iface),
    log: cdktf.stringToTerraform(struct!.log),
    macro: cdktf.stringToTerraform(struct!.macro),
    proto: cdktf.stringToTerraform(struct!.proto),
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
    source: cdktf.stringToTerraform(struct!.source),
    sport: cdktf.stringToTerraform(struct!.sport),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentClusterFirewallSecurityGroupRuleToHclTerraform(struct?: VirtualEnvironmentClusterFirewallSecurityGroupRule | cdktf.IResolvable): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest: {
      value: cdktf.stringToHclTerraform(struct!.dest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dport: {
      value: cdktf.stringToHclTerraform(struct!.dport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macro: {
      value: cdktf.stringToHclTerraform(struct!.macro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sport: {
      value: cdktf.stringToHclTerraform(struct!.sport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClusterFirewallSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentClusterFirewallSecurityGroupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._dest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dest = this._dest;
    }
    if (this._dport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dport = this._dport;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._macro !== undefined) {
      hasAnyValues = true;
      internalValueResult.macro = this._macro;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sport !== undefined) {
      hasAnyValues = true;
      internalValueResult.sport = this._sport;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClusterFirewallSecurityGroupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._dest = undefined;
      this._dport = undefined;
      this._enabled = undefined;
      this._iface = undefined;
      this._log = undefined;
      this._macro = undefined;
      this._proto = undefined;
      this._securityGroup = undefined;
      this._source = undefined;
      this._sport = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._dest = value.dest;
      this._dport = value.dport;
      this._enabled = value.enabled;
      this._iface = value.iface;
      this._log = value.log;
      this._macro = value.macro;
      this._proto = value.proto;
      this._securityGroup = value.securityGroup;
      this._source = value.source;
      this._sport = value.sport;
      this._type = value.type;
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

  // dest - computed: false, optional: true, required: false
  private _dest?: string; 
  public get dest() {
    return this.getStringAttribute('dest');
  }
  public set dest(value: string) {
    this._dest = value;
  }
  public resetDest() {
    this._dest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destInput() {
    return this._dest;
  }

  // dport - computed: false, optional: true, required: false
  private _dport?: string; 
  public get dport() {
    return this.getStringAttribute('dport');
  }
  public set dport(value: string) {
    this._dport = value;
  }
  public resetDport() {
    this._dport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportInput() {
    return this._dport;
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

  // iface - computed: false, optional: true, required: false
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // macro - computed: false, optional: true, required: false
  private _macro?: string; 
  public get macro() {
    return this.getStringAttribute('macro');
  }
  public set macro(value: string) {
    this._macro = value;
  }
  public resetMacro() {
    this._macro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro;
  }

  // pos - computed: true, optional: false, required: false
  public get pos() {
    return this.getNumberAttribute('pos');
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sport - computed: false, optional: true, required: false
  private _sport?: string; 
  public get sport() {
    return this.getStringAttribute('sport');
  }
  public set sport(value: string) {
    this._sport = value;
  }
  public resetSport() {
    this._sport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportInput() {
    return this._sport;
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
}

export class VirtualEnvironmentClusterFirewallSecurityGroupRuleList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentClusterFirewallSecurityGroupRule[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentClusterFirewallSecurityGroupRuleOutputReference {
    return new VirtualEnvironmentClusterFirewallSecurityGroupRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group proxmox_virtual_environment_cluster_firewall_security_group}
*/
export class VirtualEnvironmentClusterFirewallSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_cluster_firewall_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentClusterFirewallSecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentClusterFirewallSecurityGroup to import
  * @param importFromId The id of the existing VirtualEnvironmentClusterFirewallSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentClusterFirewallSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_cluster_firewall_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_cluster_firewall_security_group proxmox_virtual_environment_cluster_firewall_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentClusterFirewallSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentClusterFirewallSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_cluster_firewall_security_group',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0',
        providerVersionConstraint: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._containerId = config.containerId;
    this._id = config.id;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._vmId = config.vmId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // container_id - computed: false, optional: true, required: false
  private _containerId?: number; 
  public get containerId() {
    return this.getNumberAttribute('container_id');
  }
  public set containerId(value: number) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new VirtualEnvironmentClusterFirewallSecurityGroupRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: VirtualEnvironmentClusterFirewallSecurityGroupRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
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
      comment: cdktf.stringToTerraform(this._comment),
      container_id: cdktf.numberToTerraform(this._containerId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      vm_id: cdktf.numberToTerraform(this._vmId),
      rule: cdktf.listMapper(virtualEnvironmentClusterFirewallSecurityGroupRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_id: {
        value: cdktf.numberToHclTerraform(this._containerId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.numberToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule: {
        value: cdktf.listMapperHcl(virtualEnvironmentClusterFirewallSecurityGroupRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentClusterFirewallSecurityGroupRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
