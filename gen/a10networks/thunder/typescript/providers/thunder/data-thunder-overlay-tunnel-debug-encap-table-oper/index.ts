// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderOverlayTunnelDebugEncapTableOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#id DataThunderOverlayTunnelDebugEncapTableOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#oper DataThunderOverlayTunnelDebugEncapTableOper#oper}
  */
  readonly oper?: DataThunderOverlayTunnelDebugEncapTableOperOper;
}
export interface DataThunderOverlayTunnelDebugEncapTableOperOperVtep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#age DataThunderOverlayTunnelDebugEncapTableOper#age}
  */
  readonly age?: number;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#dst_vtep_ip DataThunderOverlayTunnelDebugEncapTableOper#dst_vtep_ip}
  */
  readonly dstVtepIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#dst_vtep_ipv6 DataThunderOverlayTunnelDebugEncapTableOper#dst_vtep_ipv6}
  */
  readonly dstVtepIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#dst_vtep_mac DataThunderOverlayTunnelDebugEncapTableOper#dst_vtep_mac}
  */
  readonly dstVtepMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#encap_type DataThunderOverlayTunnelDebugEncapTableOper#encap_type}
  */
  readonly encapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#hindex DataThunderOverlayTunnelDebugEncapTableOper#hindex}
  */
  readonly hindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#index DataThunderOverlayTunnelDebugEncapTableOper#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#is_ipv6 DataThunderOverlayTunnelDebugEncapTableOper#is_ipv6}
  */
  readonly isIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#is_static DataThunderOverlayTunnelDebugEncapTableOper#is_static}
  */
  readonly isStatic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#lifname DataThunderOverlayTunnelDebugEncapTableOper#lifname}
  */
  readonly lifname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#partname DataThunderOverlayTunnelDebugEncapTableOper#partname}
  */
  readonly partname?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#src_vtep_ip DataThunderOverlayTunnelDebugEncapTableOper#src_vtep_ip}
  */
  readonly srcVtepIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#src_vtep_ipv6 DataThunderOverlayTunnelDebugEncapTableOper#src_vtep_ipv6}
  */
  readonly srcVtepIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#vlan DataThunderOverlayTunnelDebugEncapTableOper#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#vtep_id DataThunderOverlayTunnelDebugEncapTableOper#vtep_id}
  */
  readonly vtepId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#vtep_vnp_id DataThunderOverlayTunnelDebugEncapTableOper#vtep_vnp_id}
  */
  readonly vtepVnpId?: number;
}

export function dataThunderOverlayTunnelDebugEncapTableOperOperVtepToTerraform(struct?: DataThunderOverlayTunnelDebugEncapTableOperOperVtep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    dst_vtep_ip: cdktf.stringToTerraform(struct!.dstVtepIp),
    dst_vtep_ipv6: cdktf.stringToTerraform(struct!.dstVtepIpv6),
    dst_vtep_mac: cdktf.stringToTerraform(struct!.dstVtepMac),
    encap_type: cdktf.stringToTerraform(struct!.encapType),
    hindex: cdktf.numberToTerraform(struct!.hindex),
    index: cdktf.numberToTerraform(struct!.index),
    is_ipv6: cdktf.numberToTerraform(struct!.isIpv6),
    is_static: cdktf.numberToTerraform(struct!.isStatic),
    lifname: cdktf.stringToTerraform(struct!.lifname),
    partname: cdktf.stringToTerraform(struct!.partname),
    src_vtep_ip: cdktf.stringToTerraform(struct!.srcVtepIp),
    src_vtep_ipv6: cdktf.stringToTerraform(struct!.srcVtepIpv6),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vtep_id: cdktf.numberToTerraform(struct!.vtepId),
    vtep_vnp_id: cdktf.numberToTerraform(struct!.vtepVnpId),
  }
}


export function dataThunderOverlayTunnelDebugEncapTableOperOperVtepToHclTerraform(struct?: DataThunderOverlayTunnelDebugEncapTableOperOperVtep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_vtep_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstVtepIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_vtep_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstVtepIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_vtep_mac: {
      value: cdktf.stringToHclTerraform(struct!.dstVtepMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap_type: {
      value: cdktf.stringToHclTerraform(struct!.encapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hindex: {
      value: cdktf.numberToHclTerraform(struct!.hindex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.isIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_static: {
      value: cdktf.numberToHclTerraform(struct!.isStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifname: {
      value: cdktf.stringToHclTerraform(struct!.lifname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partname: {
      value: cdktf.stringToHclTerraform(struct!.partname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_vtep_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcVtepIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_vtep_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcVtepIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vtep_id: {
      value: cdktf.numberToHclTerraform(struct!.vtepId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vtep_vnp_id: {
      value: cdktf.numberToHclTerraform(struct!.vtepVnpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderOverlayTunnelDebugEncapTableOperOperVtepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderOverlayTunnelDebugEncapTableOperOperVtep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._dstVtepIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVtepIp = this._dstVtepIp;
    }
    if (this._dstVtepIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVtepIpv6 = this._dstVtepIpv6;
    }
    if (this._dstVtepMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVtepMac = this._dstVtepMac;
    }
    if (this._encapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapType = this._encapType;
    }
    if (this._hindex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hindex = this._hindex;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIpv6 = this._isIpv6;
    }
    if (this._isStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStatic = this._isStatic;
    }
    if (this._lifname !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifname = this._lifname;
    }
    if (this._partname !== undefined) {
      hasAnyValues = true;
      internalValueResult.partname = this._partname;
    }
    if (this._srcVtepIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVtepIp = this._srcVtepIp;
    }
    if (this._srcVtepIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVtepIpv6 = this._srcVtepIpv6;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vtepId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepId = this._vtepId;
    }
    if (this._vtepVnpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepVnpId = this._vtepVnpId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderOverlayTunnelDebugEncapTableOperOperVtep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._dstVtepIp = undefined;
      this._dstVtepIpv6 = undefined;
      this._dstVtepMac = undefined;
      this._encapType = undefined;
      this._hindex = undefined;
      this._index = undefined;
      this._isIpv6 = undefined;
      this._isStatic = undefined;
      this._lifname = undefined;
      this._partname = undefined;
      this._srcVtepIp = undefined;
      this._srcVtepIpv6 = undefined;
      this._vlan = undefined;
      this._vtepId = undefined;
      this._vtepVnpId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._dstVtepIp = value.dstVtepIp;
      this._dstVtepIpv6 = value.dstVtepIpv6;
      this._dstVtepMac = value.dstVtepMac;
      this._encapType = value.encapType;
      this._hindex = value.hindex;
      this._index = value.index;
      this._isIpv6 = value.isIpv6;
      this._isStatic = value.isStatic;
      this._lifname = value.lifname;
      this._partname = value.partname;
      this._srcVtepIp = value.srcVtepIp;
      this._srcVtepIpv6 = value.srcVtepIpv6;
      this._vlan = value.vlan;
      this._vtepId = value.vtepId;
      this._vtepVnpId = value.vtepVnpId;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // dst_vtep_ip - computed: false, optional: true, required: false
  private _dstVtepIp?: string; 
  public get dstVtepIp() {
    return this.getStringAttribute('dst_vtep_ip');
  }
  public set dstVtepIp(value: string) {
    this._dstVtepIp = value;
  }
  public resetDstVtepIp() {
    this._dstVtepIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVtepIpInput() {
    return this._dstVtepIp;
  }

  // dst_vtep_ipv6 - computed: false, optional: true, required: false
  private _dstVtepIpv6?: string; 
  public get dstVtepIpv6() {
    return this.getStringAttribute('dst_vtep_ipv6');
  }
  public set dstVtepIpv6(value: string) {
    this._dstVtepIpv6 = value;
  }
  public resetDstVtepIpv6() {
    this._dstVtepIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVtepIpv6Input() {
    return this._dstVtepIpv6;
  }

  // dst_vtep_mac - computed: false, optional: true, required: false
  private _dstVtepMac?: string; 
  public get dstVtepMac() {
    return this.getStringAttribute('dst_vtep_mac');
  }
  public set dstVtepMac(value: string) {
    this._dstVtepMac = value;
  }
  public resetDstVtepMac() {
    this._dstVtepMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVtepMacInput() {
    return this._dstVtepMac;
  }

  // encap_type - computed: false, optional: true, required: false
  private _encapType?: string; 
  public get encapType() {
    return this.getStringAttribute('encap_type');
  }
  public set encapType(value: string) {
    this._encapType = value;
  }
  public resetEncapType() {
    this._encapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTypeInput() {
    return this._encapType;
  }

  // hindex - computed: false, optional: true, required: false
  private _hindex?: number; 
  public get hindex() {
    return this.getNumberAttribute('hindex');
  }
  public set hindex(value: number) {
    this._hindex = value;
  }
  public resetHindex() {
    this._hindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hindexInput() {
    return this._hindex;
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_ipv6 - computed: false, optional: true, required: false
  private _isIpv6?: number; 
  public get isIpv6() {
    return this.getNumberAttribute('is_ipv6');
  }
  public set isIpv6(value: number) {
    this._isIpv6 = value;
  }
  public resetIsIpv6() {
    this._isIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6Input() {
    return this._isIpv6;
  }

  // is_static - computed: false, optional: true, required: false
  private _isStatic?: number; 
  public get isStatic() {
    return this.getNumberAttribute('is_static');
  }
  public set isStatic(value: number) {
    this._isStatic = value;
  }
  public resetIsStatic() {
    this._isStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStaticInput() {
    return this._isStatic;
  }

  // lifname - computed: false, optional: true, required: false
  private _lifname?: string; 
  public get lifname() {
    return this.getStringAttribute('lifname');
  }
  public set lifname(value: string) {
    this._lifname = value;
  }
  public resetLifname() {
    this._lifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifnameInput() {
    return this._lifname;
  }

  // partname - computed: false, optional: true, required: false
  private _partname?: string; 
  public get partname() {
    return this.getStringAttribute('partname');
  }
  public set partname(value: string) {
    this._partname = value;
  }
  public resetPartname() {
    this._partname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnameInput() {
    return this._partname;
  }

  // src_vtep_ip - computed: false, optional: true, required: false
  private _srcVtepIp?: string; 
  public get srcVtepIp() {
    return this.getStringAttribute('src_vtep_ip');
  }
  public set srcVtepIp(value: string) {
    this._srcVtepIp = value;
  }
  public resetSrcVtepIp() {
    this._srcVtepIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVtepIpInput() {
    return this._srcVtepIp;
  }

  // src_vtep_ipv6 - computed: false, optional: true, required: false
  private _srcVtepIpv6?: string; 
  public get srcVtepIpv6() {
    return this.getStringAttribute('src_vtep_ipv6');
  }
  public set srcVtepIpv6(value: string) {
    this._srcVtepIpv6 = value;
  }
  public resetSrcVtepIpv6() {
    this._srcVtepIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVtepIpv6Input() {
    return this._srcVtepIpv6;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vtep_id - computed: false, optional: true, required: false
  private _vtepId?: number; 
  public get vtepId() {
    return this.getNumberAttribute('vtep_id');
  }
  public set vtepId(value: number) {
    this._vtepId = value;
  }
  public resetVtepId() {
    this._vtepId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepIdInput() {
    return this._vtepId;
  }

  // vtep_vnp_id - computed: false, optional: true, required: false
  private _vtepVnpId?: number; 
  public get vtepVnpId() {
    return this.getNumberAttribute('vtep_vnp_id');
  }
  public set vtepVnpId(value: number) {
    this._vtepVnpId = value;
  }
  public resetVtepVnpId() {
    this._vtepVnpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepVnpIdInput() {
    return this._vtepVnpId;
  }
}

export class DataThunderOverlayTunnelDebugEncapTableOperOperVtepList extends cdktf.ComplexList {
  public internalValue? : DataThunderOverlayTunnelDebugEncapTableOperOperVtep[] | cdktf.IResolvable

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
  public get(index: number): DataThunderOverlayTunnelDebugEncapTableOperOperVtepOutputReference {
    return new DataThunderOverlayTunnelDebugEncapTableOperOperVtepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderOverlayTunnelDebugEncapTableOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#tot_ip_encap DataThunderOverlayTunnelDebugEncapTableOper#tot_ip_encap}
  */
  readonly totIpEncap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#tot_ipv6_encap DataThunderOverlayTunnelDebugEncapTableOper#tot_ipv6_encap}
  */
  readonly totIpv6Encap?: number;
  /**
  * vtep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#vtep DataThunderOverlayTunnelDebugEncapTableOper#vtep}
  */
  readonly vtep?: DataThunderOverlayTunnelDebugEncapTableOperOperVtep[] | cdktf.IResolvable;
}

export function dataThunderOverlayTunnelDebugEncapTableOperOperToTerraform(struct?: DataThunderOverlayTunnelDebugEncapTableOperOperOutputReference | DataThunderOverlayTunnelDebugEncapTableOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tot_ip_encap: cdktf.numberToTerraform(struct!.totIpEncap),
    tot_ipv6_encap: cdktf.numberToTerraform(struct!.totIpv6Encap),
    vtep: cdktf.listMapper(dataThunderOverlayTunnelDebugEncapTableOperOperVtepToTerraform, true)(struct!.vtep),
  }
}


export function dataThunderOverlayTunnelDebugEncapTableOperOperToHclTerraform(struct?: DataThunderOverlayTunnelDebugEncapTableOperOperOutputReference | DataThunderOverlayTunnelDebugEncapTableOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tot_ip_encap: {
      value: cdktf.numberToHclTerraform(struct!.totIpEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tot_ipv6_encap: {
      value: cdktf.numberToHclTerraform(struct!.totIpv6Encap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vtep: {
      value: cdktf.listMapperHcl(dataThunderOverlayTunnelDebugEncapTableOperOperVtepToHclTerraform, true)(struct!.vtep),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderOverlayTunnelDebugEncapTableOperOperVtepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderOverlayTunnelDebugEncapTableOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderOverlayTunnelDebugEncapTableOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totIpEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.totIpEncap = this._totIpEncap;
    }
    if (this._totIpv6Encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.totIpv6Encap = this._totIpv6Encap;
    }
    if (this._vtep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtep = this._vtep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderOverlayTunnelDebugEncapTableOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totIpEncap = undefined;
      this._totIpv6Encap = undefined;
      this._vtep.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totIpEncap = value.totIpEncap;
      this._totIpv6Encap = value.totIpv6Encap;
      this._vtep.internalValue = value.vtep;
    }
  }

  // tot_ip_encap - computed: false, optional: true, required: false
  private _totIpEncap?: number; 
  public get totIpEncap() {
    return this.getNumberAttribute('tot_ip_encap');
  }
  public set totIpEncap(value: number) {
    this._totIpEncap = value;
  }
  public resetTotIpEncap() {
    this._totIpEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totIpEncapInput() {
    return this._totIpEncap;
  }

  // tot_ipv6_encap - computed: false, optional: true, required: false
  private _totIpv6Encap?: number; 
  public get totIpv6Encap() {
    return this.getNumberAttribute('tot_ipv6_encap');
  }
  public set totIpv6Encap(value: number) {
    this._totIpv6Encap = value;
  }
  public resetTotIpv6Encap() {
    this._totIpv6Encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totIpv6EncapInput() {
    return this._totIpv6Encap;
  }

  // vtep - computed: false, optional: true, required: false
  private _vtep = new DataThunderOverlayTunnelDebugEncapTableOperOperVtepList(this, "vtep", false);
  public get vtep() {
    return this._vtep;
  }
  public putVtep(value: DataThunderOverlayTunnelDebugEncapTableOperOperVtep[] | cdktf.IResolvable) {
    this._vtep.internalValue = value;
  }
  public resetVtep() {
    this._vtep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepInput() {
    return this._vtep.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper thunder_overlay_tunnel_debug_encap_table_oper}
*/
export class DataThunderOverlayTunnelDebugEncapTableOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_debug_encap_table_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderOverlayTunnelDebugEncapTableOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderOverlayTunnelDebugEncapTableOper to import
  * @param importFromId The id of the existing DataThunderOverlayTunnelDebugEncapTableOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderOverlayTunnelDebugEncapTableOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_debug_encap_table_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_debug_encap_table_oper thunder_overlay_tunnel_debug_encap_table_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderOverlayTunnelDebugEncapTableOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderOverlayTunnelDebugEncapTableOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_debug_encap_table_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderOverlayTunnelDebugEncapTableOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderOverlayTunnelDebugEncapTableOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderOverlayTunnelDebugEncapTableOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderOverlayTunnelDebugEncapTableOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderOverlayTunnelDebugEncapTableOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
