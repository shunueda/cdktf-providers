// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneInterfaceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#id ZoneInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#name ZoneInterfaceA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#uuid ZoneInterfaceA#uuid}
  */
  readonly uuid?: string;
  /**
  * ethernet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#ethernet_list ZoneInterfaceA#ethernet_list}
  */
  readonly ethernetList?: ZoneInterfaceEthernetListStructA[] | cdktf.IResolvable;
  /**
  * lif_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#lif_list ZoneInterfaceA#lif_list}
  */
  readonly lifList?: ZoneInterfaceLifListStructA[] | cdktf.IResolvable;
  /**
  * trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#trunk_list ZoneInterfaceA#trunk_list}
  */
  readonly trunkList?: ZoneInterfaceTrunkListStructA[] | cdktf.IResolvable;
  /**
  * tunnel_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#tunnel_list ZoneInterfaceA#tunnel_list}
  */
  readonly tunnelList?: ZoneInterfaceTunnelListStructA[] | cdktf.IResolvable;
  /**
  * ve_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#ve_list ZoneInterfaceA#ve_list}
  */
  readonly veList?: ZoneInterfaceVeListStructA[] | cdktf.IResolvable;
}
export interface ZoneInterfaceEthernetListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_ethernet_end ZoneInterfaceA#interface_ethernet_end}
  */
  readonly interfaceEthernetEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_ethernet_start ZoneInterfaceA#interface_ethernet_start}
  */
  readonly interfaceEthernetStart?: number;
}

export function zoneInterfaceEthernetListStructAToTerraform(struct?: ZoneInterfaceEthernetListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ethernet_end: cdktf.numberToTerraform(struct!.interfaceEthernetEnd),
    interface_ethernet_start: cdktf.numberToTerraform(struct!.interfaceEthernetStart),
  }
}


export function zoneInterfaceEthernetListStructAToHclTerraform(struct?: ZoneInterfaceEthernetListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.interfaceEthernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.interfaceEthernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneInterfaceEthernetListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceEthernetListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceEthernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceEthernetEnd = this._interfaceEthernetEnd;
    }
    if (this._interfaceEthernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceEthernetStart = this._interfaceEthernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneInterfaceEthernetListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceEthernetEnd = undefined;
      this._interfaceEthernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceEthernetEnd = value.interfaceEthernetEnd;
      this._interfaceEthernetStart = value.interfaceEthernetStart;
    }
  }

  // interface_ethernet_end - computed: false, optional: true, required: false
  private _interfaceEthernetEnd?: number; 
  public get interfaceEthernetEnd() {
    return this.getNumberAttribute('interface_ethernet_end');
  }
  public set interfaceEthernetEnd(value: number) {
    this._interfaceEthernetEnd = value;
  }
  public resetInterfaceEthernetEnd() {
    this._interfaceEthernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceEthernetEndInput() {
    return this._interfaceEthernetEnd;
  }

  // interface_ethernet_start - computed: false, optional: true, required: false
  private _interfaceEthernetStart?: number; 
  public get interfaceEthernetStart() {
    return this.getNumberAttribute('interface_ethernet_start');
  }
  public set interfaceEthernetStart(value: number) {
    this._interfaceEthernetStart = value;
  }
  public resetInterfaceEthernetStart() {
    this._interfaceEthernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceEthernetStartInput() {
    return this._interfaceEthernetStart;
  }
}

export class ZoneInterfaceEthernetListStructAList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceEthernetListStructA[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceEthernetListStructAOutputReference {
    return new ZoneInterfaceEthernetListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceLifListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_lif_end ZoneInterfaceA#interface_lif_end}
  */
  readonly interfaceLifEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_lif_start ZoneInterfaceA#interface_lif_start}
  */
  readonly interfaceLifStart?: number;
}

export function zoneInterfaceLifListStructAToTerraform(struct?: ZoneInterfaceLifListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_lif_end: cdktf.numberToTerraform(struct!.interfaceLifEnd),
    interface_lif_start: cdktf.numberToTerraform(struct!.interfaceLifStart),
  }
}


export function zoneInterfaceLifListStructAToHclTerraform(struct?: ZoneInterfaceLifListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_lif_end: {
      value: cdktf.numberToHclTerraform(struct!.interfaceLifEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_lif_start: {
      value: cdktf.numberToHclTerraform(struct!.interfaceLifStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneInterfaceLifListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceLifListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceLifEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceLifEnd = this._interfaceLifEnd;
    }
    if (this._interfaceLifStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceLifStart = this._interfaceLifStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneInterfaceLifListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceLifEnd = undefined;
      this._interfaceLifStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceLifEnd = value.interfaceLifEnd;
      this._interfaceLifStart = value.interfaceLifStart;
    }
  }

  // interface_lif_end - computed: false, optional: true, required: false
  private _interfaceLifEnd?: number; 
  public get interfaceLifEnd() {
    return this.getNumberAttribute('interface_lif_end');
  }
  public set interfaceLifEnd(value: number) {
    this._interfaceLifEnd = value;
  }
  public resetInterfaceLifEnd() {
    this._interfaceLifEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceLifEndInput() {
    return this._interfaceLifEnd;
  }

  // interface_lif_start - computed: false, optional: true, required: false
  private _interfaceLifStart?: number; 
  public get interfaceLifStart() {
    return this.getNumberAttribute('interface_lif_start');
  }
  public set interfaceLifStart(value: number) {
    this._interfaceLifStart = value;
  }
  public resetInterfaceLifStart() {
    this._interfaceLifStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceLifStartInput() {
    return this._interfaceLifStart;
  }
}

export class ZoneInterfaceLifListStructAList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceLifListStructA[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceLifListStructAOutputReference {
    return new ZoneInterfaceLifListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceTrunkListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_trunk_end ZoneInterfaceA#interface_trunk_end}
  */
  readonly interfaceTrunkEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_trunk_start ZoneInterfaceA#interface_trunk_start}
  */
  readonly interfaceTrunkStart?: number;
}

export function zoneInterfaceTrunkListStructAToTerraform(struct?: ZoneInterfaceTrunkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_trunk_end: cdktf.numberToTerraform(struct!.interfaceTrunkEnd),
    interface_trunk_start: cdktf.numberToTerraform(struct!.interfaceTrunkStart),
  }
}


export function zoneInterfaceTrunkListStructAToHclTerraform(struct?: ZoneInterfaceTrunkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.interfaceTrunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.interfaceTrunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneInterfaceTrunkListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceTrunkListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceTrunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTrunkEnd = this._interfaceTrunkEnd;
    }
    if (this._interfaceTrunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTrunkStart = this._interfaceTrunkStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneInterfaceTrunkListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceTrunkEnd = undefined;
      this._interfaceTrunkStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceTrunkEnd = value.interfaceTrunkEnd;
      this._interfaceTrunkStart = value.interfaceTrunkStart;
    }
  }

  // interface_trunk_end - computed: false, optional: true, required: false
  private _interfaceTrunkEnd?: number; 
  public get interfaceTrunkEnd() {
    return this.getNumberAttribute('interface_trunk_end');
  }
  public set interfaceTrunkEnd(value: number) {
    this._interfaceTrunkEnd = value;
  }
  public resetInterfaceTrunkEnd() {
    this._interfaceTrunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTrunkEndInput() {
    return this._interfaceTrunkEnd;
  }

  // interface_trunk_start - computed: false, optional: true, required: false
  private _interfaceTrunkStart?: number; 
  public get interfaceTrunkStart() {
    return this.getNumberAttribute('interface_trunk_start');
  }
  public set interfaceTrunkStart(value: number) {
    this._interfaceTrunkStart = value;
  }
  public resetInterfaceTrunkStart() {
    this._interfaceTrunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTrunkStartInput() {
    return this._interfaceTrunkStart;
  }
}

export class ZoneInterfaceTrunkListStructAList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceTrunkListStructA[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceTrunkListStructAOutputReference {
    return new ZoneInterfaceTrunkListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceTunnelListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_tunnel_end ZoneInterfaceA#interface_tunnel_end}
  */
  readonly interfaceTunnelEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_tunnel_start ZoneInterfaceA#interface_tunnel_start}
  */
  readonly interfaceTunnelStart?: number;
}

export function zoneInterfaceTunnelListStructAToTerraform(struct?: ZoneInterfaceTunnelListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_tunnel_end: cdktf.numberToTerraform(struct!.interfaceTunnelEnd),
    interface_tunnel_start: cdktf.numberToTerraform(struct!.interfaceTunnelStart),
  }
}


export function zoneInterfaceTunnelListStructAToHclTerraform(struct?: ZoneInterfaceTunnelListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_tunnel_end: {
      value: cdktf.numberToHclTerraform(struct!.interfaceTunnelEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_tunnel_start: {
      value: cdktf.numberToHclTerraform(struct!.interfaceTunnelStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneInterfaceTunnelListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceTunnelListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceTunnelEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTunnelEnd = this._interfaceTunnelEnd;
    }
    if (this._interfaceTunnelStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTunnelStart = this._interfaceTunnelStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneInterfaceTunnelListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceTunnelEnd = undefined;
      this._interfaceTunnelStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceTunnelEnd = value.interfaceTunnelEnd;
      this._interfaceTunnelStart = value.interfaceTunnelStart;
    }
  }

  // interface_tunnel_end - computed: false, optional: true, required: false
  private _interfaceTunnelEnd?: number; 
  public get interfaceTunnelEnd() {
    return this.getNumberAttribute('interface_tunnel_end');
  }
  public set interfaceTunnelEnd(value: number) {
    this._interfaceTunnelEnd = value;
  }
  public resetInterfaceTunnelEnd() {
    this._interfaceTunnelEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTunnelEndInput() {
    return this._interfaceTunnelEnd;
  }

  // interface_tunnel_start - computed: false, optional: true, required: false
  private _interfaceTunnelStart?: number; 
  public get interfaceTunnelStart() {
    return this.getNumberAttribute('interface_tunnel_start');
  }
  public set interfaceTunnelStart(value: number) {
    this._interfaceTunnelStart = value;
  }
  public resetInterfaceTunnelStart() {
    this._interfaceTunnelStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTunnelStartInput() {
    return this._interfaceTunnelStart;
  }
}

export class ZoneInterfaceTunnelListStructAList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceTunnelListStructA[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceTunnelListStructAOutputReference {
    return new ZoneInterfaceTunnelListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceVeListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_ve_end ZoneInterfaceA#interface_ve_end}
  */
  readonly interfaceVeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#interface_ve_start ZoneInterfaceA#interface_ve_start}
  */
  readonly interfaceVeStart?: number;
}

export function zoneInterfaceVeListStructAToTerraform(struct?: ZoneInterfaceVeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ve_end: cdktf.numberToTerraform(struct!.interfaceVeEnd),
    interface_ve_start: cdktf.numberToTerraform(struct!.interfaceVeStart),
  }
}


export function zoneInterfaceVeListStructAToHclTerraform(struct?: ZoneInterfaceVeListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ve_end: {
      value: cdktf.numberToHclTerraform(struct!.interfaceVeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_ve_start: {
      value: cdktf.numberToHclTerraform(struct!.interfaceVeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneInterfaceVeListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceVeListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceVeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVeEnd = this._interfaceVeEnd;
    }
    if (this._interfaceVeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVeStart = this._interfaceVeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneInterfaceVeListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceVeEnd = undefined;
      this._interfaceVeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceVeEnd = value.interfaceVeEnd;
      this._interfaceVeStart = value.interfaceVeStart;
    }
  }

  // interface_ve_end - computed: false, optional: true, required: false
  private _interfaceVeEnd?: number; 
  public get interfaceVeEnd() {
    return this.getNumberAttribute('interface_ve_end');
  }
  public set interfaceVeEnd(value: number) {
    this._interfaceVeEnd = value;
  }
  public resetInterfaceVeEnd() {
    this._interfaceVeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVeEndInput() {
    return this._interfaceVeEnd;
  }

  // interface_ve_start - computed: false, optional: true, required: false
  private _interfaceVeStart?: number; 
  public get interfaceVeStart() {
    return this.getNumberAttribute('interface_ve_start');
  }
  public set interfaceVeStart(value: number) {
    this._interfaceVeStart = value;
  }
  public resetInterfaceVeStart() {
    this._interfaceVeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVeStartInput() {
    return this._interfaceVeStart;
  }
}

export class ZoneInterfaceVeListStructAList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceVeListStructA[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceVeListStructAOutputReference {
    return new ZoneInterfaceVeListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface thunder_zone_interface}
*/
export class ZoneInterfaceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_zone_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneInterfaceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneInterfaceA to import
  * @param importFromId The id of the existing ZoneInterfaceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneInterfaceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_zone_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone_interface thunder_zone_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneInterfaceAConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneInterfaceAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_zone_interface',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._uuid = config.uuid;
    this._ethernetList.internalValue = config.ethernetList;
    this._lifList.internalValue = config.lifList;
    this._trunkList.internalValue = config.trunkList;
    this._tunnelList.internalValue = config.tunnelList;
    this._veList.internalValue = config.veList;
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

  // ethernet_list - computed: false, optional: true, required: false
  private _ethernetList = new ZoneInterfaceEthernetListStructAList(this, "ethernet_list", false);
  public get ethernetList() {
    return this._ethernetList;
  }
  public putEthernetList(value: ZoneInterfaceEthernetListStructA[] | cdktf.IResolvable) {
    this._ethernetList.internalValue = value;
  }
  public resetEthernetList() {
    this._ethernetList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetListInput() {
    return this._ethernetList.internalValue;
  }

  // lif_list - computed: false, optional: true, required: false
  private _lifList = new ZoneInterfaceLifListStructAList(this, "lif_list", false);
  public get lifList() {
    return this._lifList;
  }
  public putLifList(value: ZoneInterfaceLifListStructA[] | cdktf.IResolvable) {
    this._lifList.internalValue = value;
  }
  public resetLifList() {
    this._lifList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifListInput() {
    return this._lifList.internalValue;
  }

  // trunk_list - computed: false, optional: true, required: false
  private _trunkList = new ZoneInterfaceTrunkListStructAList(this, "trunk_list", false);
  public get trunkList() {
    return this._trunkList;
  }
  public putTrunkList(value: ZoneInterfaceTrunkListStructA[] | cdktf.IResolvable) {
    this._trunkList.internalValue = value;
  }
  public resetTrunkList() {
    this._trunkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkListInput() {
    return this._trunkList.internalValue;
  }

  // tunnel_list - computed: false, optional: true, required: false
  private _tunnelList = new ZoneInterfaceTunnelListStructAList(this, "tunnel_list", false);
  public get tunnelList() {
    return this._tunnelList;
  }
  public putTunnelList(value: ZoneInterfaceTunnelListStructA[] | cdktf.IResolvable) {
    this._tunnelList.internalValue = value;
  }
  public resetTunnelList() {
    this._tunnelList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelListInput() {
    return this._tunnelList.internalValue;
  }

  // ve_list - computed: false, optional: true, required: false
  private _veList = new ZoneInterfaceVeListStructAList(this, "ve_list", false);
  public get veList() {
    return this._veList;
  }
  public putVeList(value: ZoneInterfaceVeListStructA[] | cdktf.IResolvable) {
    this._veList.internalValue = value;
  }
  public resetVeList() {
    this._veList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veListInput() {
    return this._veList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      ethernet_list: cdktf.listMapper(zoneInterfaceEthernetListStructAToTerraform, true)(this._ethernetList.internalValue),
      lif_list: cdktf.listMapper(zoneInterfaceLifListStructAToTerraform, true)(this._lifList.internalValue),
      trunk_list: cdktf.listMapper(zoneInterfaceTrunkListStructAToTerraform, true)(this._trunkList.internalValue),
      tunnel_list: cdktf.listMapper(zoneInterfaceTunnelListStructAToTerraform, true)(this._tunnelList.internalValue),
      ve_list: cdktf.listMapper(zoneInterfaceVeListStructAToTerraform, true)(this._veList.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_list: {
        value: cdktf.listMapperHcl(zoneInterfaceEthernetListStructAToHclTerraform, true)(this._ethernetList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneInterfaceEthernetListStructAList",
      },
      lif_list: {
        value: cdktf.listMapperHcl(zoneInterfaceLifListStructAToHclTerraform, true)(this._lifList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneInterfaceLifListStructAList",
      },
      trunk_list: {
        value: cdktf.listMapperHcl(zoneInterfaceTrunkListStructAToHclTerraform, true)(this._trunkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneInterfaceTrunkListStructAList",
      },
      tunnel_list: {
        value: cdktf.listMapperHcl(zoneInterfaceTunnelListStructAToHclTerraform, true)(this._tunnelList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneInterfaceTunnelListStructAList",
      },
      ve_list: {
        value: cdktf.listMapperHcl(zoneInterfaceVeListStructAToHclTerraform, true)(this._veList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneInterfaceVeListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
