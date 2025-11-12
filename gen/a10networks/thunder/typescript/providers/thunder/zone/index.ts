// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#id Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of zone object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#user_tag Zone#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#uuid Zone#uuid}
  */
  readonly uuid?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface Zone#interface}
  */
  readonly interface?: ZoneInterface;
  /**
  * local_zone_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#local_zone_cfg Zone#local_zone_cfg}
  */
  readonly localZoneCfg?: ZoneLocalZoneCfg;
  /**
  * vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#vlan Zone#vlan}
  */
  readonly vlan?: ZoneVlan;
}
export interface ZoneInterfaceEthernetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_ethernet_end Zone#interface_ethernet_end}
  */
  readonly interfaceEthernetEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_ethernet_start Zone#interface_ethernet_start}
  */
  readonly interfaceEthernetStart?: number;
}

export function zoneInterfaceEthernetListStructToTerraform(struct?: ZoneInterfaceEthernetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ethernet_end: cdktf.numberToTerraform(struct!.interfaceEthernetEnd),
    interface_ethernet_start: cdktf.numberToTerraform(struct!.interfaceEthernetStart),
  }
}


export function zoneInterfaceEthernetListStructToHclTerraform(struct?: ZoneInterfaceEthernetListStruct | cdktf.IResolvable): any {
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

export class ZoneInterfaceEthernetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceEthernetListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneInterfaceEthernetListStruct | cdktf.IResolvable | undefined) {
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

export class ZoneInterfaceEthernetListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceEthernetListStruct[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceEthernetListStructOutputReference {
    return new ZoneInterfaceEthernetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceLifListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_lif_end Zone#interface_lif_end}
  */
  readonly interfaceLifEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_lif_start Zone#interface_lif_start}
  */
  readonly interfaceLifStart?: number;
}

export function zoneInterfaceLifListStructToTerraform(struct?: ZoneInterfaceLifListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_lif_end: cdktf.numberToTerraform(struct!.interfaceLifEnd),
    interface_lif_start: cdktf.numberToTerraform(struct!.interfaceLifStart),
  }
}


export function zoneInterfaceLifListStructToHclTerraform(struct?: ZoneInterfaceLifListStruct | cdktf.IResolvable): any {
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

export class ZoneInterfaceLifListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceLifListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneInterfaceLifListStruct | cdktf.IResolvable | undefined) {
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

export class ZoneInterfaceLifListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceLifListStruct[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceLifListStructOutputReference {
    return new ZoneInterfaceLifListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceTrunkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_trunk_end Zone#interface_trunk_end}
  */
  readonly interfaceTrunkEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_trunk_start Zone#interface_trunk_start}
  */
  readonly interfaceTrunkStart?: number;
}

export function zoneInterfaceTrunkListStructToTerraform(struct?: ZoneInterfaceTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_trunk_end: cdktf.numberToTerraform(struct!.interfaceTrunkEnd),
    interface_trunk_start: cdktf.numberToTerraform(struct!.interfaceTrunkStart),
  }
}


export function zoneInterfaceTrunkListStructToHclTerraform(struct?: ZoneInterfaceTrunkListStruct | cdktf.IResolvable): any {
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

export class ZoneInterfaceTrunkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceTrunkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneInterfaceTrunkListStruct | cdktf.IResolvable | undefined) {
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

export class ZoneInterfaceTrunkListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceTrunkListStruct[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceTrunkListStructOutputReference {
    return new ZoneInterfaceTrunkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceTunnelListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_tunnel_end Zone#interface_tunnel_end}
  */
  readonly interfaceTunnelEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_tunnel_start Zone#interface_tunnel_start}
  */
  readonly interfaceTunnelStart?: number;
}

export function zoneInterfaceTunnelListStructToTerraform(struct?: ZoneInterfaceTunnelListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_tunnel_end: cdktf.numberToTerraform(struct!.interfaceTunnelEnd),
    interface_tunnel_start: cdktf.numberToTerraform(struct!.interfaceTunnelStart),
  }
}


export function zoneInterfaceTunnelListStructToHclTerraform(struct?: ZoneInterfaceTunnelListStruct | cdktf.IResolvable): any {
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

export class ZoneInterfaceTunnelListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceTunnelListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneInterfaceTunnelListStruct | cdktf.IResolvable | undefined) {
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

export class ZoneInterfaceTunnelListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceTunnelListStruct[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceTunnelListStructOutputReference {
    return new ZoneInterfaceTunnelListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterfaceVeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_ve_end Zone#interface_ve_end}
  */
  readonly interfaceVeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#interface_ve_start Zone#interface_ve_start}
  */
  readonly interfaceVeStart?: number;
}

export function zoneInterfaceVeListStructToTerraform(struct?: ZoneInterfaceVeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ve_end: cdktf.numberToTerraform(struct!.interfaceVeEnd),
    interface_ve_start: cdktf.numberToTerraform(struct!.interfaceVeStart),
  }
}


export function zoneInterfaceVeListStructToHclTerraform(struct?: ZoneInterfaceVeListStruct | cdktf.IResolvable): any {
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

export class ZoneInterfaceVeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneInterfaceVeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneInterfaceVeListStruct | cdktf.IResolvable | undefined) {
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

export class ZoneInterfaceVeListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneInterfaceVeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ZoneInterfaceVeListStructOutputReference {
    return new ZoneInterfaceVeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneInterface {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#uuid Zone#uuid}
  */
  readonly uuid?: string;
  /**
  * ethernet_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#ethernet_list Zone#ethernet_list}
  */
  readonly ethernetList?: ZoneInterfaceEthernetListStruct[] | cdktf.IResolvable;
  /**
  * lif_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#lif_list Zone#lif_list}
  */
  readonly lifList?: ZoneInterfaceLifListStruct[] | cdktf.IResolvable;
  /**
  * trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#trunk_list Zone#trunk_list}
  */
  readonly trunkList?: ZoneInterfaceTrunkListStruct[] | cdktf.IResolvable;
  /**
  * tunnel_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#tunnel_list Zone#tunnel_list}
  */
  readonly tunnelList?: ZoneInterfaceTunnelListStruct[] | cdktf.IResolvable;
  /**
  * ve_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#ve_list Zone#ve_list}
  */
  readonly veList?: ZoneInterfaceVeListStruct[] | cdktf.IResolvable;
}

export function zoneInterfaceToTerraform(struct?: ZoneInterfaceOutputReference | ZoneInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ethernet_list: cdktf.listMapper(zoneInterfaceEthernetListStructToTerraform, true)(struct!.ethernetList),
    lif_list: cdktf.listMapper(zoneInterfaceLifListStructToTerraform, true)(struct!.lifList),
    trunk_list: cdktf.listMapper(zoneInterfaceTrunkListStructToTerraform, true)(struct!.trunkList),
    tunnel_list: cdktf.listMapper(zoneInterfaceTunnelListStructToTerraform, true)(struct!.tunnelList),
    ve_list: cdktf.listMapper(zoneInterfaceVeListStructToTerraform, true)(struct!.veList),
  }
}


export function zoneInterfaceToHclTerraform(struct?: ZoneInterfaceOutputReference | ZoneInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet_list: {
      value: cdktf.listMapperHcl(zoneInterfaceEthernetListStructToHclTerraform, true)(struct!.ethernetList),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneInterfaceEthernetListStructList",
    },
    lif_list: {
      value: cdktf.listMapperHcl(zoneInterfaceLifListStructToHclTerraform, true)(struct!.lifList),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneInterfaceLifListStructList",
    },
    trunk_list: {
      value: cdktf.listMapperHcl(zoneInterfaceTrunkListStructToHclTerraform, true)(struct!.trunkList),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneInterfaceTrunkListStructList",
    },
    tunnel_list: {
      value: cdktf.listMapperHcl(zoneInterfaceTunnelListStructToHclTerraform, true)(struct!.tunnelList),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneInterfaceTunnelListStructList",
    },
    ve_list: {
      value: cdktf.listMapperHcl(zoneInterfaceVeListStructToHclTerraform, true)(struct!.veList),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneInterfaceVeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethernetList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetList = this._ethernetList?.internalValue;
    }
    if (this._lifList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifList = this._lifList?.internalValue;
    }
    if (this._trunkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkList = this._trunkList?.internalValue;
    }
    if (this._tunnelList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelList = this._tunnelList?.internalValue;
    }
    if (this._veList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veList = this._veList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ethernetList.internalValue = undefined;
      this._lifList.internalValue = undefined;
      this._trunkList.internalValue = undefined;
      this._tunnelList.internalValue = undefined;
      this._veList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ethernetList.internalValue = value.ethernetList;
      this._lifList.internalValue = value.lifList;
      this._trunkList.internalValue = value.trunkList;
      this._tunnelList.internalValue = value.tunnelList;
      this._veList.internalValue = value.veList;
    }
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
  private _ethernetList = new ZoneInterfaceEthernetListStructList(this, "ethernet_list", false);
  public get ethernetList() {
    return this._ethernetList;
  }
  public putEthernetList(value: ZoneInterfaceEthernetListStruct[] | cdktf.IResolvable) {
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
  private _lifList = new ZoneInterfaceLifListStructList(this, "lif_list", false);
  public get lifList() {
    return this._lifList;
  }
  public putLifList(value: ZoneInterfaceLifListStruct[] | cdktf.IResolvable) {
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
  private _trunkList = new ZoneInterfaceTrunkListStructList(this, "trunk_list", false);
  public get trunkList() {
    return this._trunkList;
  }
  public putTrunkList(value: ZoneInterfaceTrunkListStruct[] | cdktf.IResolvable) {
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
  private _tunnelList = new ZoneInterfaceTunnelListStructList(this, "tunnel_list", false);
  public get tunnelList() {
    return this._tunnelList;
  }
  public putTunnelList(value: ZoneInterfaceTunnelListStruct[] | cdktf.IResolvable) {
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
  private _veList = new ZoneInterfaceVeListStructList(this, "ve_list", false);
  public get veList() {
    return this._veList;
  }
  public putVeList(value: ZoneInterfaceVeListStruct[] | cdktf.IResolvable) {
    this._veList.internalValue = value;
  }
  public resetVeList() {
    this._veList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veListInput() {
    return this._veList.internalValue;
  }
}
export interface ZoneLocalZoneCfg {
  /**
  * Set to local zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#local_type Zone#local_type}
  */
  readonly localType?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#uuid Zone#uuid}
  */
  readonly uuid?: string;
}

export function zoneLocalZoneCfgToTerraform(struct?: ZoneLocalZoneCfgOutputReference | ZoneLocalZoneCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_type: cdktf.numberToTerraform(struct!.localType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function zoneLocalZoneCfgToHclTerraform(struct?: ZoneLocalZoneCfgOutputReference | ZoneLocalZoneCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_type: {
      value: cdktf.numberToHclTerraform(struct!.localType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneLocalZoneCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneLocalZoneCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localType !== undefined) {
      hasAnyValues = true;
      internalValueResult.localType = this._localType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneLocalZoneCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localType = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localType = value.localType;
      this._uuid = value.uuid;
    }
  }

  // local_type - computed: false, optional: true, required: false
  private _localType?: number; 
  public get localType() {
    return this.getNumberAttribute('local_type');
  }
  public set localType(value: number) {
    this._localType = value;
  }
  public resetLocalType() {
    this._localType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTypeInput() {
    return this._localType;
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
}
export interface ZoneVlanVlanListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#vlan_end Zone#vlan_end}
  */
  readonly vlanEnd?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#vlan_start Zone#vlan_start}
  */
  readonly vlanStart?: number;
}

export function zoneVlanVlanListStructToTerraform(struct?: ZoneVlanVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_end: cdktf.numberToTerraform(struct!.vlanEnd),
    vlan_start: cdktf.numberToTerraform(struct!.vlanStart),
  }
}


export function zoneVlanVlanListStructToHclTerraform(struct?: ZoneVlanVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_end: {
      value: cdktf.numberToHclTerraform(struct!.vlanEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_start: {
      value: cdktf.numberToHclTerraform(struct!.vlanStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneVlanVlanListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneVlanVlanListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanEnd = this._vlanEnd;
    }
    if (this._vlanStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanStart = this._vlanStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneVlanVlanListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanEnd = undefined;
      this._vlanStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanEnd = value.vlanEnd;
      this._vlanStart = value.vlanStart;
    }
  }

  // vlan_end - computed: false, optional: true, required: false
  private _vlanEnd?: number; 
  public get vlanEnd() {
    return this.getNumberAttribute('vlan_end');
  }
  public set vlanEnd(value: number) {
    this._vlanEnd = value;
  }
  public resetVlanEnd() {
    this._vlanEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEndInput() {
    return this._vlanEnd;
  }

  // vlan_start - computed: false, optional: true, required: false
  private _vlanStart?: number; 
  public get vlanStart() {
    return this.getNumberAttribute('vlan_start');
  }
  public set vlanStart(value: number) {
    this._vlanStart = value;
  }
  public resetVlanStart() {
    this._vlanStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanStartInput() {
    return this._vlanStart;
  }
}

export class ZoneVlanVlanListStructList extends cdktf.ComplexList {
  public internalValue? : ZoneVlanVlanListStruct[] | cdktf.IResolvable

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
  public get(index: number): ZoneVlanVlanListStructOutputReference {
    return new ZoneVlanVlanListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneVlan {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#uuid Zone#uuid}
  */
  readonly uuid?: string;
  /**
  * vlan_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#vlan_list Zone#vlan_list}
  */
  readonly vlanList?: ZoneVlanVlanListStruct[] | cdktf.IResolvable;
}

export function zoneVlanToTerraform(struct?: ZoneVlanOutputReference | ZoneVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vlan_list: cdktf.listMapper(zoneVlanVlanListStructToTerraform, true)(struct!.vlanList),
  }
}


export function zoneVlanToHclTerraform(struct?: ZoneVlanOutputReference | ZoneVlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_list: {
      value: cdktf.listMapperHcl(zoneVlanVlanListStructToHclTerraform, true)(struct!.vlanList),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneVlanVlanListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneVlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneVlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vlanList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanList = this._vlanList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneVlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._vlanList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._vlanList.internalValue = value.vlanList;
    }
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

  // vlan_list - computed: false, optional: true, required: false
  private _vlanList = new ZoneVlanVlanListStructList(this, "vlan_list", false);
  public get vlanList() {
    return this._vlanList;
  }
  public putVlanList(value: ZoneVlanVlanListStruct[] | cdktf.IResolvable) {
    this._vlanList.internalValue = value;
  }
  public resetVlanList() {
    this._vlanList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListInput() {
    return this._vlanList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone thunder_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/zone thunder_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_zone',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._interface.internalValue = config.interface;
    this._localZoneCfg.internalValue = config.localZoneCfg;
    this._vlan.internalValue = config.vlan;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new ZoneInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ZoneInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // local_zone_cfg - computed: false, optional: true, required: false
  private _localZoneCfg = new ZoneLocalZoneCfgOutputReference(this, "local_zone_cfg");
  public get localZoneCfg() {
    return this._localZoneCfg;
  }
  public putLocalZoneCfg(value: ZoneLocalZoneCfg) {
    this._localZoneCfg.internalValue = value;
  }
  public resetLocalZoneCfg() {
    this._localZoneCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localZoneCfgInput() {
    return this._localZoneCfg.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new ZoneVlanOutputReference(this, "vlan");
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: ZoneVlan) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      interface: zoneInterfaceToTerraform(this._interface.internalValue),
      local_zone_cfg: zoneLocalZoneCfgToTerraform(this._localZoneCfg.internalValue),
      vlan: zoneVlanToTerraform(this._vlan.internalValue),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      interface: {
        value: zoneInterfaceToHclTerraform(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneInterfaceList",
      },
      local_zone_cfg: {
        value: zoneLocalZoneCfgToHclTerraform(this._localZoneCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneLocalZoneCfgList",
      },
      vlan: {
        value: zoneVlanToHclTerraform(this._vlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneVlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
