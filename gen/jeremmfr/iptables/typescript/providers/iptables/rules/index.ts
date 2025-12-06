// https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#id Rules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#name Rules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#on_cidr_blocks Rules#on_cidr_blocks}
  */
  readonly onCidrBlocks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#project Rules#project}
  */
  readonly project: string;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#egress Rules#egress}
  */
  readonly egress?: RulesEgress[] | cdktf.IResolvable;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#ingress Rules#ingress}
  */
  readonly ingress?: RulesIngress[] | cdktf.IResolvable;
}
export interface RulesEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#action Rules#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#cidr_blocks Rules#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#fragment Rules#fragment}
  */
  readonly fragment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#from_port Rules#from_port}
  */
  readonly fromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#icmptype Rules#icmptype}
  */
  readonly icmptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#iface_in Rules#iface_in}
  */
  readonly ifaceIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#iface_out Rules#iface_out}
  */
  readonly ifaceOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#position Rules#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#protocol Rules#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#state Rules#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#to_port Rules#to_port}
  */
  readonly toPort?: string;
}

export function rulesEgressToTerraform(struct?: RulesEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    fragment: cdktf.booleanToTerraform(struct!.fragment),
    from_port: cdktf.stringToTerraform(struct!.fromPort),
    icmptype: cdktf.stringToTerraform(struct!.icmptype),
    iface_in: cdktf.stringToTerraform(struct!.ifaceIn),
    iface_out: cdktf.stringToTerraform(struct!.ifaceOut),
    position: cdktf.stringToTerraform(struct!.position),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    state: cdktf.stringToTerraform(struct!.state),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function rulesEgressToHclTerraform(struct?: RulesEgress | cdktf.IResolvable): any {
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
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fragment: {
      value: cdktf.booleanToHclTerraform(struct!.fragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_port: {
      value: cdktf.stringToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmptype: {
      value: cdktf.stringToHclTerraform(struct!.icmptype),
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
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

export class RulesEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._fragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragment = this._fragment;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._icmptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmptype = this._icmptype;
    }
    if (this._ifaceIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceIn = this._ifaceIn;
    }
    if (this._ifaceOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceOut = this._ifaceOut;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidrBlocks = undefined;
      this._fragment = undefined;
      this._fromPort = undefined;
      this._icmptype = undefined;
      this._ifaceIn = undefined;
      this._ifaceOut = undefined;
      this._position = undefined;
      this._protocol = undefined;
      this._state = undefined;
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
      this._cidrBlocks = value.cidrBlocks;
      this._fragment = value.fragment;
      this._fromPort = value.fromPort;
      this._icmptype = value.icmptype;
      this._ifaceIn = value.ifaceIn;
      this._ifaceOut = value.ifaceOut;
      this._position = value.position;
      this._protocol = value.protocol;
      this._state = value.state;
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

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_blocks'));
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // fragment - computed: false, optional: true, required: false
  private _fragment?: boolean | cdktf.IResolvable; 
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }
  public set fragment(value: boolean | cdktf.IResolvable) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
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

  // icmptype - computed: false, optional: true, required: false
  private _icmptype?: string; 
  public get icmptype() {
    return this.getStringAttribute('icmptype');
  }
  public set icmptype(value: string) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

export class RulesEgressList extends cdktf.ComplexList {
  public internalValue? : RulesEgress[] | cdktf.IResolvable

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
  public get(index: number): RulesEgressOutputReference {
    return new RulesEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RulesIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#action Rules#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#cidr_blocks Rules#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#fragment Rules#fragment}
  */
  readonly fragment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#from_port Rules#from_port}
  */
  readonly fromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#icmptype Rules#icmptype}
  */
  readonly icmptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#iface_in Rules#iface_in}
  */
  readonly ifaceIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#iface_out Rules#iface_out}
  */
  readonly ifaceOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#position Rules#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#protocol Rules#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#state Rules#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#to_port Rules#to_port}
  */
  readonly toPort?: string;
}

export function rulesIngressToTerraform(struct?: RulesIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlocks),
    fragment: cdktf.booleanToTerraform(struct!.fragment),
    from_port: cdktf.stringToTerraform(struct!.fromPort),
    icmptype: cdktf.stringToTerraform(struct!.icmptype),
    iface_in: cdktf.stringToTerraform(struct!.ifaceIn),
    iface_out: cdktf.stringToTerraform(struct!.ifaceOut),
    position: cdktf.stringToTerraform(struct!.position),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    state: cdktf.stringToTerraform(struct!.state),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function rulesIngressToHclTerraform(struct?: RulesIngress | cdktf.IResolvable): any {
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
    cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fragment: {
      value: cdktf.booleanToHclTerraform(struct!.fragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_port: {
      value: cdktf.stringToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmptype: {
      value: cdktf.stringToHclTerraform(struct!.icmptype),
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
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

export class RulesIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RulesIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    if (this._fragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragment = this._fragment;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._icmptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmptype = this._icmptype;
    }
    if (this._ifaceIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceIn = this._ifaceIn;
    }
    if (this._ifaceOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifaceOut = this._ifaceOut;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulesIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidrBlocks = undefined;
      this._fragment = undefined;
      this._fromPort = undefined;
      this._icmptype = undefined;
      this._ifaceIn = undefined;
      this._ifaceOut = undefined;
      this._position = undefined;
      this._protocol = undefined;
      this._state = undefined;
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
      this._cidrBlocks = value.cidrBlocks;
      this._fragment = value.fragment;
      this._fromPort = value.fromPort;
      this._icmptype = value.icmptype;
      this._ifaceIn = value.ifaceIn;
      this._ifaceOut = value.ifaceOut;
      this._position = value.position;
      this._protocol = value.protocol;
      this._state = value.state;
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

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_blocks'));
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // fragment - computed: false, optional: true, required: false
  private _fragment?: boolean | cdktf.IResolvable; 
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }
  public set fragment(value: boolean | cdktf.IResolvable) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
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

  // icmptype - computed: false, optional: true, required: false
  private _icmptype?: string; 
  public get icmptype() {
    return this.getStringAttribute('icmptype');
  }
  public set icmptype(value: string) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

export class RulesIngressList extends cdktf.ComplexList {
  public internalValue? : RulesIngress[] | cdktf.IResolvable

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
  public get(index: number): RulesIngressOutputReference {
    return new RulesIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules iptables_rules}
*/
export class Rules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iptables_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rules to import
  * @param importFromId The id of the existing Rules that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iptables_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/rules iptables_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulesConfig
  */
  public constructor(scope: Construct, id: string, config: RulesConfig) {
    super(scope, id, {
      terraformResourceType: 'iptables_rules',
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
    this._onCidrBlocks = config.onCidrBlocks;
    this._project = config.project;
    this._egress.internalValue = config.egress;
    this._ingress.internalValue = config.ingress;
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

  // on_cidr_blocks - computed: false, optional: false, required: true
  private _onCidrBlocks?: string[]; 
  public get onCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('on_cidr_blocks'));
  }
  public set onCidrBlocks(value: string[]) {
    this._onCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onCidrBlocksInput() {
    return this._onCidrBlocks;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new RulesEgressList(this, "egress", true);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: RulesEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new RulesIngressList(this, "ingress", true);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: RulesIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onCidrBlocks),
      project: cdktf.stringToTerraform(this._project),
      egress: cdktf.listMapper(rulesEgressToTerraform, true)(this._egress.internalValue),
      ingress: cdktf.listMapper(rulesIngressToTerraform, true)(this._ingress.internalValue),
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
      on_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onCidrBlocks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress: {
        value: cdktf.listMapperHcl(rulesEgressToHclTerraform, true)(this._egress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RulesEgressList",
      },
      ingress: {
        value: cdktf.listMapperHcl(rulesIngressToHclTerraform, true)(this._ingress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RulesIngressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
