// https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#active Firewall#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#id Firewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#server_ip Firewall#server_ip}
  */
  readonly serverIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#whitelist_hos Firewall#whitelist_hos}
  */
  readonly whitelistHos: boolean | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#rule Firewall#rule}
  */
  readonly rule: FirewallRule[] | cdktf.IResolvable;
}
export interface FirewallRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#action Firewall#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#dst_ip Firewall#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#dst_port Firewall#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#name Firewall#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#protocol Firewall#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#src_ip Firewall#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#src_port Firewall#src_port}
  */
  readonly srcPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#tcp_flags Firewall#tcp_flags}
  */
  readonly tcpFlags?: string;
}

export function firewallRuleToTerraform(struct?: FirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    dst_port: cdktf.stringToTerraform(struct!.dstPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    src_port: cdktf.stringToTerraform(struct!.srcPort),
    tcp_flags: cdktf.stringToTerraform(struct!.tcpFlags),
  }
}


export function firewallRuleToHclTerraform(struct?: FirewallRule | cdktf.IResolvable): any {
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
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
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
    tcp_flags: {
      value: cdktf.stringToHclTerraform(struct!.tcpFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._tcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dstIp = undefined;
      this._dstPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._srcIp = undefined;
      this._srcPort = undefined;
      this._tcpFlags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dstIp = value.dstIp;
      this._dstPort = value.dstPort;
      this._name = value.name;
      this._protocol = value.protocol;
      this._srcIp = value.srcIp;
      this._srcPort = value.srcPort;
      this._tcpFlags = value.tcpFlags;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
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

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
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

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string; 
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }
  public set tcpFlags(value: string) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }
}

export class FirewallRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallRuleOutputReference {
    return new FirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall hetzner-robot_firewall}
*/
export class Firewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hetzner-robot_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Firewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Firewall to import
  * @param importFromId The id of the existing Firewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Firewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hetzner-robot_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/firewall hetzner-robot_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'hetzner-robot_firewall',
      terraformGeneratorMetadata: {
        providerName: 'hetzner-robot',
        providerVersion: '3.5.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._id = config.id;
    this._serverIp = config.serverIp;
    this._whitelistHos = config.whitelistHos;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // server_ip - computed: false, optional: false, required: true
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // whitelist_hos - computed: false, optional: false, required: true
  private _whitelistHos?: boolean | cdktf.IResolvable; 
  public get whitelistHos() {
    return this.getBooleanAttribute('whitelist_hos');
  }
  public set whitelistHos(value: boolean | cdktf.IResolvable) {
    this._whitelistHos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistHosInput() {
    return this._whitelistHos;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new FirewallRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallRule[] | cdktf.IResolvable) {
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
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      server_ip: cdktf.stringToTerraform(this._serverIp),
      whitelist_hos: cdktf.booleanToTerraform(this._whitelistHos),
      rule: cdktf.listMapper(firewallRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
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
      server_ip: {
        value: cdktf.stringToHclTerraform(this._serverIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist_hos: {
        value: cdktf.booleanToHclTerraform(this._whitelistHos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule: {
        value: cdktf.listMapperHcl(firewallRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
