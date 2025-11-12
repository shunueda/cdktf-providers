// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#id Vnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the vnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#name Vnet#name}
  */
  readonly name: string;
  /**
  * V-Net state. Allowed values: `active` or `disabled`. Default value is `active`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#state Vnet#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#tags Vnet#tags}
  */
  readonly tags?: string[];
  /**
  * ID of tenant. Users of this tenant will be permitted to edit this unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#tenantid Vnet#tenantid}
  */
  readonly tenantid: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#vlanid Vnet#vlanid}
  */
  readonly vlanid?: string;
  /**
  * ID of VPC. If not specified, the V-Net will be created in the VPC marked as a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#vpcid Vnet#vpcid}
  */
  readonly vpcid?: number;
  /**
  * VXLAN ID. If not specified will be generated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#vxlanid Vnet#vxlanid}
  */
  readonly vxlanid?: number;
  /**
  * sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#sites Vnet#sites}
  */
  readonly sites: VnetSites[] | cdktf.IResolvable;
}
export interface VnetSitesGateways {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#dhcp Vnet#dhcp}
  */
  readonly dhcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#dhcpendip Vnet#dhcpendip}
  */
  readonly dhcpendip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#dhcpoptionsetid Vnet#dhcpoptionsetid}
  */
  readonly dhcpoptionsetid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#dhcpstartip Vnet#dhcpstartip}
  */
  readonly dhcpstartip?: string;
  /**
  * The address will be serving as anycast default gateway for selected subnet. Example: `203.0.113.1/25`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#prefix Vnet#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#vlanid Vnet#vlanid}
  */
  readonly vlanid?: string;
}

export function vnetSitesGatewaysToTerraform(struct?: VnetSitesGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.stringToTerraform(struct!.dhcp),
    dhcpendip: cdktf.stringToTerraform(struct!.dhcpendip),
    dhcpoptionsetid: cdktf.numberToTerraform(struct!.dhcpoptionsetid),
    dhcpstartip: cdktf.stringToTerraform(struct!.dhcpstartip),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    vlanid: cdktf.stringToTerraform(struct!.vlanid),
  }
}


export function vnetSitesGatewaysToHclTerraform(struct?: VnetSitesGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.stringToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcpendip: {
      value: cdktf.stringToHclTerraform(struct!.dhcpendip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcpoptionsetid: {
      value: cdktf.numberToHclTerraform(struct!.dhcpoptionsetid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcpstartip: {
      value: cdktf.stringToHclTerraform(struct!.dhcpstartip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.stringToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnetSitesGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnetSitesGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dhcpendip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpendip = this._dhcpendip;
    }
    if (this._dhcpoptionsetid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpoptionsetid = this._dhcpoptionsetid;
    }
    if (this._dhcpstartip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpstartip = this._dhcpstartip;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnetSitesGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._dhcpendip = undefined;
      this._dhcpoptionsetid = undefined;
      this._dhcpstartip = undefined;
      this._prefix = undefined;
      this._vlanid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._dhcpendip = value.dhcpendip;
      this._dhcpoptionsetid = value.dhcpoptionsetid;
      this._dhcpstartip = value.dhcpstartip;
      this._prefix = value.prefix;
      this._vlanid = value.vlanid;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dhcpendip - computed: true, optional: true, required: false
  private _dhcpendip?: string; 
  public get dhcpendip() {
    return this.getStringAttribute('dhcpendip');
  }
  public set dhcpendip(value: string) {
    this._dhcpendip = value;
  }
  public resetDhcpendip() {
    this._dhcpendip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpendipInput() {
    return this._dhcpendip;
  }

  // dhcpoptionsetid - computed: true, optional: true, required: false
  private _dhcpoptionsetid?: number; 
  public get dhcpoptionsetid() {
    return this.getNumberAttribute('dhcpoptionsetid');
  }
  public set dhcpoptionsetid(value: number) {
    this._dhcpoptionsetid = value;
  }
  public resetDhcpoptionsetid() {
    this._dhcpoptionsetid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpoptionsetidInput() {
    return this._dhcpoptionsetid;
  }

  // dhcpstartip - computed: true, optional: true, required: false
  private _dhcpstartip?: string; 
  public get dhcpstartip() {
    return this.getStringAttribute('dhcpstartip');
  }
  public set dhcpstartip(value: string) {
    this._dhcpstartip = value;
  }
  public resetDhcpstartip() {
    this._dhcpstartip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpstartipInput() {
    return this._dhcpstartip;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }
}

export class VnetSitesGatewaysList extends cdktf.ComplexList {
  public internalValue? : VnetSitesGateways[] | cdktf.IResolvable

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
  public get(index: number): VnetSitesGatewaysOutputReference {
    return new VnetSitesGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnetSitesInterface {
  /**
  * Switch port ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#id Vnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * LAG mode. Allows for active-standby dual-homing, assuming LAG configuration on the remote end. Valid value is `on` or `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#lacp Vnet#lacp}
  */
  readonly lacp?: string;
  /**
  * Switch port name. Example: `swp5@my-sw01`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#name Vnet#name}
  */
  readonly name?: string;
  /**
  * Only when global 'vlanid' is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#untagged Vnet#untagged}
  */
  readonly untagged?: string;
  /**
  * VLAN tag for current port. If vlanid is not set - means port untagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#vlanid Vnet#vlanid}
  */
  readonly vlanid?: string;
}

export function vnetSitesInterfaceToTerraform(struct?: VnetSitesInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    lacp: cdktf.stringToTerraform(struct!.lacp),
    name: cdktf.stringToTerraform(struct!.name),
    untagged: cdktf.stringToTerraform(struct!.untagged),
    vlanid: cdktf.stringToTerraform(struct!.vlanid),
  }
}


export function vnetSitesInterfaceToHclTerraform(struct?: VnetSitesInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lacp: {
      value: cdktf.stringToHclTerraform(struct!.lacp),
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
    untagged: {
      value: cdktf.stringToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.stringToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnetSitesInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnetSitesInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lacp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnetSitesInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._lacp = undefined;
      this._name = undefined;
      this._untagged = undefined;
      this._vlanid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._lacp = value.lacp;
      this._name = value.name;
      this._untagged = value.untagged;
      this._vlanid = value.vlanid;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lacp - computed: false, optional: true, required: false
  private _lacp?: string; 
  public get lacp() {
    return this.getStringAttribute('lacp');
  }
  public set lacp(value: string) {
    this._lacp = value;
  }
  public resetLacp() {
    this._lacp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp;
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

  // untagged - computed: false, optional: true, required: false
  private _untagged?: string; 
  public get untagged() {
    return this.getStringAttribute('untagged');
  }
  public set untagged(value: string) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }
}

export class VnetSitesInterfaceList extends cdktf.ComplexList {
  public internalValue? : VnetSitesInterface[] | cdktf.IResolvable

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
  public get(index: number): VnetSitesInterfaceOutputReference {
    return new VnetSitesInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnetSitesInterfacetag {
  /**
  * Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#accessmode Vnet#accessmode}
  */
  readonly accessmode?: boolean | cdktf.IResolvable;
  /**
  * Any tag. Example: `zone1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#tag Vnet#tag}
  */
  readonly tag: string;
}

export function vnetSitesInterfacetagToTerraform(struct?: VnetSitesInterfacetag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessmode: cdktf.booleanToTerraform(struct!.accessmode),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vnetSitesInterfacetagToHclTerraform(struct?: VnetSitesInterfacetag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessmode: {
      value: cdktf.booleanToHclTerraform(struct!.accessmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnetSitesInterfacetagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnetSitesInterfacetag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessmode = this._accessmode;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnetSitesInterfacetag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessmode = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessmode = value.accessmode;
      this._tag = value.tag;
    }
  }

  // accessmode - computed: false, optional: true, required: false
  private _accessmode?: boolean | cdktf.IResolvable; 
  public get accessmode() {
    return this.getBooleanAttribute('accessmode');
  }
  public set accessmode(value: boolean | cdktf.IResolvable) {
    this._accessmode = value;
  }
  public resetAccessmode() {
    this._accessmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessmodeInput() {
    return this._accessmode;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class VnetSitesInterfacetagList extends cdktf.ComplexList {
  public internalValue? : VnetSitesInterfacetag[] | cdktf.IResolvable

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
  public get(index: number): VnetSitesInterfacetagOutputReference {
    return new VnetSitesInterfacetagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnetSitesPorts {
  /**
  * Switch port ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#id Vnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * LAG mode. Allows for active-standby dual-homing, assuming LAG configuration on the remote end. Valid value is `on` or `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#lacp Vnet#lacp}
  */
  readonly lacp?: string;
  /**
  * Switch port name. Example: `swp5@my-sw01`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#name Vnet#name}
  */
  readonly name?: string;
  /**
  * Only when global 'vlanid' is specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#untagged Vnet#untagged}
  */
  readonly untagged?: string;
  /**
  * VLAN tag for current port. If vlanid is not set - means port untagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#vlanid Vnet#vlanid}
  */
  readonly vlanid?: string;
}

export function vnetSitesPortsToTerraform(struct?: VnetSitesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    lacp: cdktf.stringToTerraform(struct!.lacp),
    name: cdktf.stringToTerraform(struct!.name),
    untagged: cdktf.stringToTerraform(struct!.untagged),
    vlanid: cdktf.stringToTerraform(struct!.vlanid),
  }
}


export function vnetSitesPortsToHclTerraform(struct?: VnetSitesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lacp: {
      value: cdktf.stringToHclTerraform(struct!.lacp),
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
    untagged: {
      value: cdktf.stringToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.stringToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnetSitesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnetSitesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lacp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnetSitesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._lacp = undefined;
      this._name = undefined;
      this._untagged = undefined;
      this._vlanid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._lacp = value.lacp;
      this._name = value.name;
      this._untagged = value.untagged;
      this._vlanid = value.vlanid;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lacp - computed: false, optional: true, required: false
  private _lacp?: string; 
  public get lacp() {
    return this.getStringAttribute('lacp');
  }
  public set lacp(value: string) {
    this._lacp = value;
  }
  public resetLacp() {
    this._lacp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp;
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

  // untagged - computed: false, optional: true, required: false
  private _untagged?: string; 
  public get untagged() {
    return this.getStringAttribute('untagged');
  }
  public set untagged(value: string) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }
}

export class VnetSitesPortsList extends cdktf.ComplexList {
  public internalValue? : VnetSitesPorts[] | cdktf.IResolvable

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
  public get(index: number): VnetSitesPortsOutputReference {
    return new VnetSitesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnetSites {
  /**
  * The site ID. Ports from these sites will be allowed to participate in the V-Net. (Multi-site vnet would require backbone connectivity between sites).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#id Vnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#gateways Vnet#gateways}
  */
  readonly gateways?: VnetSitesGateways[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#interface Vnet#interface}
  */
  readonly interface?: VnetSitesInterface[] | cdktf.IResolvable;
  /**
  * interfacetag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#interfacetag Vnet#interfacetag}
  */
  readonly interfacetag?: VnetSitesInterfacetag[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#ports Vnet#ports}
  */
  readonly ports?: VnetSitesPorts[] | cdktf.IResolvable;
}

export function vnetSitesToTerraform(struct?: VnetSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    gateways: cdktf.listMapper(vnetSitesGatewaysToTerraform, true)(struct!.gateways),
    interface: cdktf.listMapper(vnetSitesInterfaceToTerraform, true)(struct!.interface),
    interfacetag: cdktf.listMapper(vnetSitesInterfacetagToTerraform, true)(struct!.interfacetag),
    ports: cdktf.listMapper(vnetSitesPortsToTerraform, true)(struct!.ports),
  }
}


export function vnetSitesToHclTerraform(struct?: VnetSites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateways: {
      value: cdktf.listMapperHcl(vnetSitesGatewaysToHclTerraform, true)(struct!.gateways),
      isBlock: true,
      type: "set",
      storageClassType: "VnetSitesGatewaysList",
    },
    interface: {
      value: cdktf.listMapperHcl(vnetSitesInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "VnetSitesInterfaceList",
    },
    interfacetag: {
      value: cdktf.listMapperHcl(vnetSitesInterfacetagToHclTerraform, true)(struct!.interfacetag),
      isBlock: true,
      type: "set",
      storageClassType: "VnetSitesInterfacetagList",
    },
    ports: {
      value: cdktf.listMapperHcl(vnetSitesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "VnetSitesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnetSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnetSites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._interfacetag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacetag = this._interfacetag?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnetSites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._gateways.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._interfacetag.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._gateways.internalValue = value.gateways;
      this._interface.internalValue = value.interface;
      this._interfacetag.internalValue = value.interfacetag;
      this._ports.internalValue = value.ports;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways = new VnetSitesGatewaysList(this, "gateways", true);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: VnetSitesGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new VnetSitesInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: VnetSitesInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // interfacetag - computed: false, optional: true, required: false
  private _interfacetag = new VnetSitesInterfacetagList(this, "interfacetag", true);
  public get interfacetag() {
    return this._interfacetag;
  }
  public putInterfacetag(value: VnetSitesInterfacetag[] | cdktf.IResolvable) {
    this._interfacetag.internalValue = value;
  }
  public resetInterfacetag() {
    this._interfacetag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacetagInput() {
    return this._interfacetag.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new VnetSitesPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: VnetSitesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class VnetSitesList extends cdktf.ComplexList {
  public internalValue? : VnetSites[] | cdktf.IResolvable

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
  public get(index: number): VnetSitesOutputReference {
    return new VnetSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet netris_vnet}
*/
export class Vnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_vnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vnet to import
  * @param importFromId The id of the existing Vnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_vnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/vnet netris_vnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VnetConfig
  */
  public constructor(scope: Construct, id: string, config: VnetConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_vnet',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
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
    this._state = config.state;
    this._tags = config.tags;
    this._tenantid = config.tenantid;
    this._vlanid = config.vlanid;
    this._vpcid = config.vpcid;
    this._vxlanid = config.vxlanid;
    this._sites.internalValue = config.sites;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // vpcid - computed: false, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
  }

  // vxlanid - computed: true, optional: true, required: false
  private _vxlanid?: number; 
  public get vxlanid() {
    return this.getNumberAttribute('vxlanid');
  }
  public set vxlanid(value: number) {
    this._vxlanid = value;
  }
  public resetVxlanid() {
    this._vxlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanidInput() {
    return this._vxlanid;
  }

  // sites - computed: false, optional: false, required: true
  private _sites = new VnetSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
  }
  public putSites(value: VnetSites[] | cdktf.IResolvable) {
    this._sites.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenantid: cdktf.numberToTerraform(this._tenantid),
      vlanid: cdktf.stringToTerraform(this._vlanid),
      vpcid: cdktf.numberToTerraform(this._vpcid),
      vxlanid: cdktf.numberToTerraform(this._vxlanid),
      sites: cdktf.listMapper(vnetSitesToTerraform, true)(this._sites.internalValue),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenantid: {
        value: cdktf.numberToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlanid: {
        value: cdktf.stringToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vxlanid: {
        value: cdktf.numberToHclTerraform(this._vxlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sites: {
        value: cdktf.listMapperHcl(vnetSitesToHclTerraform, true)(this._sites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnetSitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
