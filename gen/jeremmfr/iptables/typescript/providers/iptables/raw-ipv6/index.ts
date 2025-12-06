// https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RawIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#id RawIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#name RawIpv6#name}
  */
  readonly name: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#rule RawIpv6#rule}
  */
  readonly rule: RawIpv6Rule[] | cdktf.IResolvable;
}
export interface RawIpv6Rule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#action RawIpv6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#chain RawIpv6#chain}
  */
  readonly chain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#dst_cidr_blocks RawIpv6#dst_cidr_blocks}
  */
  readonly dstCidrBlocks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#from_port RawIpv6#from_port}
  */
  readonly fromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#iface_in RawIpv6#iface_in}
  */
  readonly ifaceIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#iface_out RawIpv6#iface_out}
  */
  readonly ifaceOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#notrack RawIpv6#notrack}
  */
  readonly notrack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#position RawIpv6#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#protocol RawIpv6#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#src_cidr_blocks RawIpv6#src_cidr_blocks}
  */
  readonly srcCidrBlocks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#tcpflags_comp RawIpv6#tcpflags_comp}
  */
  readonly tcpflagsComp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#tcpflags_mask RawIpv6#tcpflags_mask}
  */
  readonly tcpflagsMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#tcpmss RawIpv6#tcpmss}
  */
  readonly tcpmss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#to_port RawIpv6#to_port}
  */
  readonly toPort?: string;
}

export function rawIpv6RuleToTerraform(struct?: RawIpv6Rule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    chain: cdktf.stringToTerraform(struct!.chain),
    dst_cidr_blocks: cdktf.stringToTerraform(struct!.dstCidrBlocks),
    from_port: cdktf.stringToTerraform(struct!.fromPort),
    iface_in: cdktf.stringToTerraform(struct!.ifaceIn),
    iface_out: cdktf.stringToTerraform(struct!.ifaceOut),
    notrack: cdktf.booleanToTerraform(struct!.notrack),
    position: cdktf.stringToTerraform(struct!.position),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr_blocks: cdktf.stringToTerraform(struct!.srcCidrBlocks),
    tcpflags_comp: cdktf.stringToTerraform(struct!.tcpflagsComp),
    tcpflags_mask: cdktf.stringToTerraform(struct!.tcpflagsMask),
    tcpmss: cdktf.stringToTerraform(struct!.tcpmss),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function rawIpv6RuleToHclTerraform(struct?: RawIpv6Rule | cdktf.IResolvable): any {
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
    chain: {
      value: cdktf.stringToHclTerraform(struct!.chain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr_blocks: {
      value: cdktf.stringToHclTerraform(struct!.dstCidrBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_port: {
      value: cdktf.stringToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iface_in: {
      value: cdktf.stringToHclTerraform(struct!.ifaceIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iface_out: {
      value: cdktf.stringToHclTerraform(struct!.ifaceOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notrack: {
      value: cdktf.booleanToHclTerraform(struct!.notrack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
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
    src_cidr_blocks: {
      value: cdktf.stringToHclTerraform(struct!.srcCidrBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcpflags_comp: {
      value: cdktf.stringToHclTerraform(struct!.tcpflagsComp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcpflags_mask: {
      value: cdktf.stringToHclTerraform(struct!.tcpflagsMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcpmss: {
      value: cdktf.stringToHclTerraform(struct!.tcpmss),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.stringToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RawIpv6RuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RawIpv6Rule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._chain !== undefined) {
      hasAnyValues = true;
      internalValueResult.chain = this._chain;
    }
    if (this._dstCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidrBlocks = this._dstCidrBlocks;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ifaceIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceIn = this._ifaceIn;
    }
    if (this._ifaceOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceOut = this._ifaceOut;
    }
    if (this._notrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.notrack = this._notrack;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidrBlocks = this._srcCidrBlocks;
    }
    if (this._tcpflagsComp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpflagsComp = this._tcpflagsComp;
    }
    if (this._tcpflagsMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpflagsMask = this._tcpflagsMask;
    }
    if (this._tcpmss !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpmss = this._tcpmss;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RawIpv6Rule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._chain = undefined;
      this._dstCidrBlocks = undefined;
      this._fromPort = undefined;
      this._ifaceIn = undefined;
      this._ifaceOut = undefined;
      this._notrack = undefined;
      this._position = undefined;
      this._protocol = undefined;
      this._srcCidrBlocks = undefined;
      this._tcpflagsComp = undefined;
      this._tcpflagsMask = undefined;
      this._tcpmss = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._chain = value.chain;
      this._dstCidrBlocks = value.dstCidrBlocks;
      this._fromPort = value.fromPort;
      this._ifaceIn = value.ifaceIn;
      this._ifaceOut = value.ifaceOut;
      this._notrack = value.notrack;
      this._position = value.position;
      this._protocol = value.protocol;
      this._srcCidrBlocks = value.srcCidrBlocks;
      this._tcpflagsComp = value.tcpflagsComp;
      this._tcpflagsMask = value.tcpflagsMask;
      this._tcpmss = value.tcpmss;
      this._toPort = value.toPort;
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

  // chain - computed: false, optional: true, required: false
  private _chain?: string; 
  public get chain() {
    return this.getStringAttribute('chain');
  }
  public set chain(value: string) {
    this._chain = value;
  }
  public resetChain() {
    this._chain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
  }

  // dst_cidr_blocks - computed: false, optional: true, required: false
  private _dstCidrBlocks?: string; 
  public get dstCidrBlocks() {
    return this.getStringAttribute('dst_cidr_blocks');
  }
  public set dstCidrBlocks(value: string) {
    this._dstCidrBlocks = value;
  }
  public resetDstCidrBlocks() {
    this._dstCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrBlocksInput() {
    return this._dstCidrBlocks;
  }

  // from_port - computed: false, optional: true, required: false
  private _fromPort?: string; 
  public get fromPort() {
    return this.getStringAttribute('from_port');
  }
  public set fromPort(value: string) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // iface_in - computed: false, optional: true, required: false
  private _ifaceIn?: string; 
  public get ifaceIn() {
    return this.getStringAttribute('iface_in');
  }
  public set ifaceIn(value: string) {
    this._ifaceIn = value;
  }
  public resetIfaceIn() {
    this._ifaceIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInInput() {
    return this._ifaceIn;
  }

  // iface_out - computed: false, optional: true, required: false
  private _ifaceOut?: string; 
  public get ifaceOut() {
    return this.getStringAttribute('iface_out');
  }
  public set ifaceOut(value: string) {
    this._ifaceOut = value;
  }
  public resetIfaceOut() {
    this._ifaceOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceOutInput() {
    return this._ifaceOut;
  }

  // notrack - computed: false, optional: true, required: false
  private _notrack?: boolean | cdktf.IResolvable; 
  public get notrack() {
    return this.getBooleanAttribute('notrack');
  }
  public set notrack(value: boolean | cdktf.IResolvable) {
    this._notrack = value;
  }
  public resetNotrack() {
    this._notrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notrackInput() {
    return this._notrack;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

  // src_cidr_blocks - computed: false, optional: true, required: false
  private _srcCidrBlocks?: string; 
  public get srcCidrBlocks() {
    return this.getStringAttribute('src_cidr_blocks');
  }
  public set srcCidrBlocks(value: string) {
    this._srcCidrBlocks = value;
  }
  public resetSrcCidrBlocks() {
    this._srcCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrBlocksInput() {
    return this._srcCidrBlocks;
  }

  // tcpflags_comp - computed: false, optional: true, required: false
  private _tcpflagsComp?: string; 
  public get tcpflagsComp() {
    return this.getStringAttribute('tcpflags_comp');
  }
  public set tcpflagsComp(value: string) {
    this._tcpflagsComp = value;
  }
  public resetTcpflagsComp() {
    this._tcpflagsComp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpflagsCompInput() {
    return this._tcpflagsComp;
  }

  // tcpflags_mask - computed: false, optional: true, required: false
  private _tcpflagsMask?: string; 
  public get tcpflagsMask() {
    return this.getStringAttribute('tcpflags_mask');
  }
  public set tcpflagsMask(value: string) {
    this._tcpflagsMask = value;
  }
  public resetTcpflagsMask() {
    this._tcpflagsMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpflagsMaskInput() {
    return this._tcpflagsMask;
  }

  // tcpmss - computed: false, optional: true, required: false
  private _tcpmss?: string; 
  public get tcpmss() {
    return this.getStringAttribute('tcpmss');
  }
  public set tcpmss(value: string) {
    this._tcpmss = value;
  }
  public resetTcpmss() {
    this._tcpmss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpmssInput() {
    return this._tcpmss;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class RawIpv6RuleList extends cdktf.ComplexList {
  public internalValue? : RawIpv6Rule[] | cdktf.IResolvable

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
  public get(index: number): RawIpv6RuleOutputReference {
    return new RawIpv6RuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6 iptables_raw_ipv6}
*/
export class RawIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iptables_raw_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RawIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RawIpv6 to import
  * @param importFromId The id of the existing RawIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RawIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iptables_raw_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/raw_ipv6 iptables_raw_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RawIpv6Config
  */
  public constructor(scope: Construct, id: string, config: RawIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'iptables_raw_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'iptables',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
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
    this._name = config.name;
    this._rule.internalValue = config.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new RawIpv6RuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: RawIpv6Rule[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule: cdktf.listMapper(rawIpv6RuleToTerraform, true)(this._rule.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(rawIpv6RuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RawIpv6RuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
