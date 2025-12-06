// https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#id Nat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#name Nat#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#on_cidr_blocks Nat#on_cidr_blocks}
  */
  readonly onCidrBlocks: string[];
  /**
  * dnat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#dnat Nat#dnat}
  */
  readonly dnat?: NatDnat[] | cdktf.IResolvable;
  /**
  * snat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#snat Nat#snat}
  */
  readonly snat?: NatSnat[] | cdktf.IResolvable;
}
export interface NatDnat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#except_cidr_blocks Nat#except_cidr_blocks}
  */
  readonly exceptCidrBlocks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#filter_cidr_blocks Nat#filter_cidr_blocks}
  */
  readonly filterCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#iface Nat#iface}
  */
  readonly iface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#nat_ip Nat#nat_ip}
  */
  readonly natIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#nth_every Nat#nth_every}
  */
  readonly nthEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#nth_packet Nat#nth_packet}
  */
  readonly nthPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#position Nat#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#protocol Nat#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#to_port Nat#to_port}
  */
  readonly toPort?: string;
}

export function natDnatToTerraform(struct?: NatDnat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    except_cidr_blocks: cdktf.stringToTerraform(struct!.exceptCidrBlocks),
    filter_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterCidrBlocks),
    iface: cdktf.stringToTerraform(struct!.iface),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    nth_every: cdktf.stringToTerraform(struct!.nthEvery),
    nth_packet: cdktf.stringToTerraform(struct!.nthPacket),
    position: cdktf.stringToTerraform(struct!.position),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function natDnatToHclTerraform(struct?: NatDnat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    except_cidr_blocks: {
      value: cdktf.stringToHclTerraform(struct!.exceptCidrBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nth_every: {
      value: cdktf.stringToHclTerraform(struct!.nthEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nth_packet: {
      value: cdktf.stringToHclTerraform(struct!.nthPacket),
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

export class NatDnatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NatDnat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptCidrBlocks = this._exceptCidrBlocks;
    }
    if (this._filterCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCidrBlocks = this._filterCidrBlocks;
    }
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._nthEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.nthEvery = this._nthEvery;
    }
    if (this._nthPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.nthPacket = this._nthPacket;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatDnat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptCidrBlocks = undefined;
      this._filterCidrBlocks = undefined;
      this._iface = undefined;
      this._natIp = undefined;
      this._nthEvery = undefined;
      this._nthPacket = undefined;
      this._position = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptCidrBlocks = value.exceptCidrBlocks;
      this._filterCidrBlocks = value.filterCidrBlocks;
      this._iface = value.iface;
      this._natIp = value.natIp;
      this._nthEvery = value.nthEvery;
      this._nthPacket = value.nthPacket;
      this._position = value.position;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // except_cidr_blocks - computed: false, optional: true, required: false
  private _exceptCidrBlocks?: string; 
  public get exceptCidrBlocks() {
    return this.getStringAttribute('except_cidr_blocks');
  }
  public set exceptCidrBlocks(value: string) {
    this._exceptCidrBlocks = value;
  }
  public resetExceptCidrBlocks() {
    this._exceptCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptCidrBlocksInput() {
    return this._exceptCidrBlocks;
  }

  // filter_cidr_blocks - computed: false, optional: true, required: false
  private _filterCidrBlocks?: string[]; 
  public get filterCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_cidr_blocks'));
  }
  public set filterCidrBlocks(value: string[]) {
    this._filterCidrBlocks = value;
  }
  public resetFilterCidrBlocks() {
    this._filterCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCidrBlocksInput() {
    return this._filterCidrBlocks;
  }

  // iface - computed: false, optional: false, required: true
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }

  // nat_ip - computed: false, optional: false, required: true
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // nth_every - computed: false, optional: true, required: false
  private _nthEvery?: string; 
  public get nthEvery() {
    return this.getStringAttribute('nth_every');
  }
  public set nthEvery(value: string) {
    this._nthEvery = value;
  }
  public resetNthEvery() {
    this._nthEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nthEveryInput() {
    return this._nthEvery;
  }

  // nth_packet - computed: false, optional: true, required: false
  private _nthPacket?: string; 
  public get nthPacket() {
    return this.getStringAttribute('nth_packet');
  }
  public set nthPacket(value: string) {
    this._nthPacket = value;
  }
  public resetNthPacket() {
    this._nthPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nthPacketInput() {
    return this._nthPacket;
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

export class NatDnatList extends cdktf.ComplexList {
  public internalValue? : NatDnat[] | cdktf.IResolvable

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
  public get(index: number): NatDnatOutputReference {
    return new NatDnatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NatSnat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#except_cidr_blocks Nat#except_cidr_blocks}
  */
  readonly exceptCidrBlocks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#filter_cidr_blocks Nat#filter_cidr_blocks}
  */
  readonly filterCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#iface Nat#iface}
  */
  readonly iface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#nat_ip Nat#nat_ip}
  */
  readonly natIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#nth_every Nat#nth_every}
  */
  readonly nthEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#nth_packet Nat#nth_packet}
  */
  readonly nthPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#position Nat#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#protocol Nat#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#to_port Nat#to_port}
  */
  readonly toPort?: string;
}

export function natSnatToTerraform(struct?: NatSnat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    except_cidr_blocks: cdktf.stringToTerraform(struct!.exceptCidrBlocks),
    filter_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterCidrBlocks),
    iface: cdktf.stringToTerraform(struct!.iface),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    nth_every: cdktf.stringToTerraform(struct!.nthEvery),
    nth_packet: cdktf.stringToTerraform(struct!.nthPacket),
    position: cdktf.stringToTerraform(struct!.position),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function natSnatToHclTerraform(struct?: NatSnat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    except_cidr_blocks: {
      value: cdktf.stringToHclTerraform(struct!.exceptCidrBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nth_every: {
      value: cdktf.stringToHclTerraform(struct!.nthEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nth_packet: {
      value: cdktf.stringToHclTerraform(struct!.nthPacket),
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

export class NatSnatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NatSnat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptCidrBlocks = this._exceptCidrBlocks;
    }
    if (this._filterCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCidrBlocks = this._filterCidrBlocks;
    }
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._nthEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.nthEvery = this._nthEvery;
    }
    if (this._nthPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.nthPacket = this._nthPacket;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatSnat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptCidrBlocks = undefined;
      this._filterCidrBlocks = undefined;
      this._iface = undefined;
      this._natIp = undefined;
      this._nthEvery = undefined;
      this._nthPacket = undefined;
      this._position = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptCidrBlocks = value.exceptCidrBlocks;
      this._filterCidrBlocks = value.filterCidrBlocks;
      this._iface = value.iface;
      this._natIp = value.natIp;
      this._nthEvery = value.nthEvery;
      this._nthPacket = value.nthPacket;
      this._position = value.position;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // except_cidr_blocks - computed: false, optional: true, required: false
  private _exceptCidrBlocks?: string; 
  public get exceptCidrBlocks() {
    return this.getStringAttribute('except_cidr_blocks');
  }
  public set exceptCidrBlocks(value: string) {
    this._exceptCidrBlocks = value;
  }
  public resetExceptCidrBlocks() {
    this._exceptCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptCidrBlocksInput() {
    return this._exceptCidrBlocks;
  }

  // filter_cidr_blocks - computed: false, optional: true, required: false
  private _filterCidrBlocks?: string[]; 
  public get filterCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_cidr_blocks'));
  }
  public set filterCidrBlocks(value: string[]) {
    this._filterCidrBlocks = value;
  }
  public resetFilterCidrBlocks() {
    this._filterCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCidrBlocksInput() {
    return this._filterCidrBlocks;
  }

  // iface - computed: false, optional: false, required: true
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }

  // nat_ip - computed: false, optional: false, required: true
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // nth_every - computed: false, optional: true, required: false
  private _nthEvery?: string; 
  public get nthEvery() {
    return this.getStringAttribute('nth_every');
  }
  public set nthEvery(value: string) {
    this._nthEvery = value;
  }
  public resetNthEvery() {
    this._nthEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nthEveryInput() {
    return this._nthEvery;
  }

  // nth_packet - computed: false, optional: true, required: false
  private _nthPacket?: string; 
  public get nthPacket() {
    return this.getStringAttribute('nth_packet');
  }
  public set nthPacket(value: string) {
    this._nthPacket = value;
  }
  public resetNthPacket() {
    this._nthPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nthPacketInput() {
    return this._nthPacket;
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

export class NatSnatList extends cdktf.ComplexList {
  public internalValue? : NatSnat[] | cdktf.IResolvable

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
  public get(index: number): NatSnatOutputReference {
    return new NatSnatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat iptables_nat}
*/
export class Nat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iptables_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nat to import
  * @param importFromId The id of the existing Nat that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iptables_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs/resources/nat iptables_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatConfig
  */
  public constructor(scope: Construct, id: string, config: NatConfig) {
    super(scope, id, {
      terraformResourceType: 'iptables_nat',
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
    this._dnat.internalValue = config.dnat;
    this._snat.internalValue = config.snat;
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

  // dnat - computed: false, optional: true, required: false
  private _dnat = new NatDnatList(this, "dnat", true);
  public get dnat() {
    return this._dnat;
  }
  public putDnat(value: NatDnat[] | cdktf.IResolvable) {
    this._dnat.internalValue = value;
  }
  public resetDnat() {
    this._dnat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatInput() {
    return this._dnat.internalValue;
  }

  // snat - computed: false, optional: true, required: false
  private _snat = new NatSnatList(this, "snat", true);
  public get snat() {
    return this._snat;
  }
  public putSnat(value: NatSnat[] | cdktf.IResolvable) {
    this._snat.internalValue = value;
  }
  public resetSnat() {
    this._snat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onCidrBlocks),
      dnat: cdktf.listMapper(natDnatToTerraform, true)(this._dnat.internalValue),
      snat: cdktf.listMapper(natSnatToTerraform, true)(this._snat.internalValue),
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
      dnat: {
        value: cdktf.listMapperHcl(natDnatToHclTerraform, true)(this._dnat.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatDnatList",
      },
      snat: {
        value: cdktf.listMapperHcl(natSnatToHclTerraform, true)(this._snat.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NatSnatList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
