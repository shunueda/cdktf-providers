// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnableManagementServiceSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#all_data_intf EnableManagementServiceSsh#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#id EnableManagementServiceSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#uuid EnableManagementServiceSsh#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#acl_v4_list EnableManagementServiceSsh#acl_v4_list}
  */
  readonly aclV4List?: EnableManagementServiceSshAclV4ListStruct[] | cdktf.IResolvable;
  /**
  * acl_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#acl_v6_list EnableManagementServiceSsh#acl_v6_list}
  */
  readonly aclV6List?: EnableManagementServiceSshAclV6ListStruct[] | cdktf.IResolvable;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#eth_cfg EnableManagementServiceSsh#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServiceSshEthCfg[] | cdktf.IResolvable;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_cfg EnableManagementServiceSsh#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServiceSshTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_cfg EnableManagementServiceSsh#ve_cfg}
  */
  readonly veCfg?: EnableManagementServiceSshVeCfg[] | cdktf.IResolvable;
}
export interface EnableManagementServiceSshAclV4ListEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ethernet_end EnableManagementServiceSsh#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ethernet_start EnableManagementServiceSsh#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServiceSshAclV4ListEthCfgToTerraform(struct?: EnableManagementServiceSshAclV4ListEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServiceSshAclV4ListEthCfgToHclTerraform(struct?: EnableManagementServiceSshAclV4ListEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV4ListEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV4ListEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV4ListEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class EnableManagementServiceSshAclV4ListEthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV4ListEthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV4ListEthCfgOutputReference {
    return new EnableManagementServiceSshAclV4ListEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV4ListTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_end EnableManagementServiceSsh#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_start EnableManagementServiceSsh#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServiceSshAclV4ListTunnelCfgToTerraform(struct?: EnableManagementServiceSshAclV4ListTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServiceSshAclV4ListTunnelCfgToHclTerraform(struct?: EnableManagementServiceSshAclV4ListTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_end: {
      value: cdktf.numberToHclTerraform(struct!.tunnelEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_start: {
      value: cdktf.numberToHclTerraform(struct!.tunnelStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV4ListTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV4ListTunnelCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEnd = this._tunnelEnd;
    }
    if (this._tunnelStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelStart = this._tunnelStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV4ListTunnelCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelEnd = undefined;
      this._tunnelStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelEnd = value.tunnelEnd;
      this._tunnelStart = value.tunnelStart;
    }
  }

  // tunnel_end - computed: false, optional: true, required: false
  private _tunnelEnd?: number; 
  public get tunnelEnd() {
    return this.getNumberAttribute('tunnel_end');
  }
  public set tunnelEnd(value: number) {
    this._tunnelEnd = value;
  }
  public resetTunnelEnd() {
    this._tunnelEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndInput() {
    return this._tunnelEnd;
  }

  // tunnel_start - computed: false, optional: true, required: false
  private _tunnelStart?: number; 
  public get tunnelStart() {
    return this.getNumberAttribute('tunnel_start');
  }
  public set tunnelStart(value: number) {
    this._tunnelStart = value;
  }
  public resetTunnelStart() {
    this._tunnelStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelStartInput() {
    return this._tunnelStart;
  }
}

export class EnableManagementServiceSshAclV4ListTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV4ListTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV4ListTunnelCfgOutputReference {
    return new EnableManagementServiceSshAclV4ListTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV4ListVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_end EnableManagementServiceSsh#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_start EnableManagementServiceSsh#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServiceSshAclV4ListVeCfgToTerraform(struct?: EnableManagementServiceSshAclV4ListVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServiceSshAclV4ListVeCfgToHclTerraform(struct?: EnableManagementServiceSshAclV4ListVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve_end: {
      value: cdktf.numberToHclTerraform(struct!.veEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve_start: {
      value: cdktf.numberToHclTerraform(struct!.veStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV4ListVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV4ListVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._veEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.veEnd = this._veEnd;
    }
    if (this._veStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.veStart = this._veStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV4ListVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._veEnd = undefined;
      this._veStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._veEnd = value.veEnd;
      this._veStart = value.veStart;
    }
  }

  // ve_end - computed: false, optional: true, required: false
  private _veEnd?: number; 
  public get veEnd() {
    return this.getNumberAttribute('ve_end');
  }
  public set veEnd(value: number) {
    this._veEnd = value;
  }
  public resetVeEnd() {
    this._veEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veEndInput() {
    return this._veEnd;
  }

  // ve_start - computed: false, optional: true, required: false
  private _veStart?: number; 
  public get veStart() {
    return this.getNumberAttribute('ve_start');
  }
  public set veStart(value: number) {
    this._veStart = value;
  }
  public resetVeStart() {
    this._veStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veStartInput() {
    return this._veStart;
  }
}

export class EnableManagementServiceSshAclV4ListVeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV4ListVeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV4ListVeCfgOutputReference {
    return new EnableManagementServiceSshAclV4ListVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV4ListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#acl_id EnableManagementServiceSsh#acl_id}
  */
  readonly aclId: number;
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#all_data_intf EnableManagementServiceSsh#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#management EnableManagementServiceSsh#management}
  */
  readonly management?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#user_tag EnableManagementServiceSsh#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#uuid EnableManagementServiceSsh#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#eth_cfg EnableManagementServiceSsh#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServiceSshAclV4ListEthCfg[] | cdktf.IResolvable;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_cfg EnableManagementServiceSsh#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServiceSshAclV4ListTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_cfg EnableManagementServiceSsh#ve_cfg}
  */
  readonly veCfg?: EnableManagementServiceSshAclV4ListVeCfg[] | cdktf.IResolvable;
}

export function enableManagementServiceSshAclV4ListStructToTerraform(struct?: EnableManagementServiceSshAclV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    all_data_intf: cdktf.numberToTerraform(struct!.allDataIntf),
    management: cdktf.numberToTerraform(struct!.management),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(enableManagementServiceSshAclV4ListEthCfgToTerraform, true)(struct!.ethCfg),
    tunnel_cfg: cdktf.listMapper(enableManagementServiceSshAclV4ListTunnelCfgToTerraform, true)(struct!.tunnelCfg),
    ve_cfg: cdktf.listMapper(enableManagementServiceSshAclV4ListVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function enableManagementServiceSshAclV4ListStructToHclTerraform(struct?: EnableManagementServiceSshAclV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_data_intf: {
      value: cdktf.numberToHclTerraform(struct!.allDataIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management: {
      value: cdktf.numberToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eth_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceSshAclV4ListEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceSshAclV4ListEthCfgList",
    },
    tunnel_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceSshAclV4ListTunnelCfgToHclTerraform, true)(struct!.tunnelCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceSshAclV4ListTunnelCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceSshAclV4ListVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceSshAclV4ListVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._allDataIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDataIntf = this._allDataIntf;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._tunnelCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCfg = this._tunnelCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclId = undefined;
      this._allDataIntf = undefined;
      this._management = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._tunnelCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclId = value.aclId;
      this._allDataIntf = value.allDataIntf;
      this._management = value.management;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ethCfg.internalValue = value.ethCfg;
      this._tunnelCfg.internalValue = value.tunnelCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // acl_id - computed: false, optional: false, required: true
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // all_data_intf - computed: false, optional: true, required: false
  private _allDataIntf?: number; 
  public get allDataIntf() {
    return this.getNumberAttribute('all_data_intf');
  }
  public set allDataIntf(value: number) {
    this._allDataIntf = value;
  }
  public resetAllDataIntf() {
    this._allDataIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDataIntfInput() {
    return this._allDataIntf;
  }

  // management - computed: false, optional: true, required: false
  private _management?: number; 
  public get management() {
    return this.getNumberAttribute('management');
  }
  public set management(value: number) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
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

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new EnableManagementServiceSshAclV4ListEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServiceSshAclV4ListEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new EnableManagementServiceSshAclV4ListTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServiceSshAclV4ListTunnelCfg[] | cdktf.IResolvable) {
    this._tunnelCfg.internalValue = value;
  }
  public resetTunnelCfg() {
    this._tunnelCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCfgInput() {
    return this._tunnelCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new EnableManagementServiceSshAclV4ListVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServiceSshAclV4ListVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}

export class EnableManagementServiceSshAclV4ListStructList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV4ListStructOutputReference {
    return new EnableManagementServiceSshAclV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV6ListEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ethernet_end EnableManagementServiceSsh#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ethernet_start EnableManagementServiceSsh#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServiceSshAclV6ListEthCfgToTerraform(struct?: EnableManagementServiceSshAclV6ListEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServiceSshAclV6ListEthCfgToHclTerraform(struct?: EnableManagementServiceSshAclV6ListEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV6ListEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV6ListEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV6ListEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class EnableManagementServiceSshAclV6ListEthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV6ListEthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV6ListEthCfgOutputReference {
    return new EnableManagementServiceSshAclV6ListEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV6ListTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_end EnableManagementServiceSsh#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_start EnableManagementServiceSsh#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServiceSshAclV6ListTunnelCfgToTerraform(struct?: EnableManagementServiceSshAclV6ListTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServiceSshAclV6ListTunnelCfgToHclTerraform(struct?: EnableManagementServiceSshAclV6ListTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_end: {
      value: cdktf.numberToHclTerraform(struct!.tunnelEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_start: {
      value: cdktf.numberToHclTerraform(struct!.tunnelStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV6ListTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV6ListTunnelCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEnd = this._tunnelEnd;
    }
    if (this._tunnelStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelStart = this._tunnelStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV6ListTunnelCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelEnd = undefined;
      this._tunnelStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelEnd = value.tunnelEnd;
      this._tunnelStart = value.tunnelStart;
    }
  }

  // tunnel_end - computed: false, optional: true, required: false
  private _tunnelEnd?: number; 
  public get tunnelEnd() {
    return this.getNumberAttribute('tunnel_end');
  }
  public set tunnelEnd(value: number) {
    this._tunnelEnd = value;
  }
  public resetTunnelEnd() {
    this._tunnelEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndInput() {
    return this._tunnelEnd;
  }

  // tunnel_start - computed: false, optional: true, required: false
  private _tunnelStart?: number; 
  public get tunnelStart() {
    return this.getNumberAttribute('tunnel_start');
  }
  public set tunnelStart(value: number) {
    this._tunnelStart = value;
  }
  public resetTunnelStart() {
    this._tunnelStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelStartInput() {
    return this._tunnelStart;
  }
}

export class EnableManagementServiceSshAclV6ListTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV6ListTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV6ListTunnelCfgOutputReference {
    return new EnableManagementServiceSshAclV6ListTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV6ListVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_end EnableManagementServiceSsh#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_start EnableManagementServiceSsh#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServiceSshAclV6ListVeCfgToTerraform(struct?: EnableManagementServiceSshAclV6ListVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServiceSshAclV6ListVeCfgToHclTerraform(struct?: EnableManagementServiceSshAclV6ListVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve_end: {
      value: cdktf.numberToHclTerraform(struct!.veEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve_start: {
      value: cdktf.numberToHclTerraform(struct!.veStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV6ListVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV6ListVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._veEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.veEnd = this._veEnd;
    }
    if (this._veStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.veStart = this._veStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV6ListVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._veEnd = undefined;
      this._veStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._veEnd = value.veEnd;
      this._veStart = value.veStart;
    }
  }

  // ve_end - computed: false, optional: true, required: false
  private _veEnd?: number; 
  public get veEnd() {
    return this.getNumberAttribute('ve_end');
  }
  public set veEnd(value: number) {
    this._veEnd = value;
  }
  public resetVeEnd() {
    this._veEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veEndInput() {
    return this._veEnd;
  }

  // ve_start - computed: false, optional: true, required: false
  private _veStart?: number; 
  public get veStart() {
    return this.getNumberAttribute('ve_start');
  }
  public set veStart(value: number) {
    this._veStart = value;
  }
  public resetVeStart() {
    this._veStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veStartInput() {
    return this._veStart;
  }
}

export class EnableManagementServiceSshAclV6ListVeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV6ListVeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV6ListVeCfgOutputReference {
    return new EnableManagementServiceSshAclV6ListVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshAclV6ListStruct {
  /**
  * ACL name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#acl_name EnableManagementServiceSsh#acl_name}
  */
  readonly aclName: string;
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#all_data_intf EnableManagementServiceSsh#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#management EnableManagementServiceSsh#management}
  */
  readonly management?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#user_tag EnableManagementServiceSsh#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#uuid EnableManagementServiceSsh#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#eth_cfg EnableManagementServiceSsh#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServiceSshAclV6ListEthCfg[] | cdktf.IResolvable;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_cfg EnableManagementServiceSsh#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServiceSshAclV6ListTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_cfg EnableManagementServiceSsh#ve_cfg}
  */
  readonly veCfg?: EnableManagementServiceSshAclV6ListVeCfg[] | cdktf.IResolvable;
}

export function enableManagementServiceSshAclV6ListStructToTerraform(struct?: EnableManagementServiceSshAclV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    all_data_intf: cdktf.numberToTerraform(struct!.allDataIntf),
    management: cdktf.numberToTerraform(struct!.management),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(enableManagementServiceSshAclV6ListEthCfgToTerraform, true)(struct!.ethCfg),
    tunnel_cfg: cdktf.listMapper(enableManagementServiceSshAclV6ListTunnelCfgToTerraform, true)(struct!.tunnelCfg),
    ve_cfg: cdktf.listMapper(enableManagementServiceSshAclV6ListVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function enableManagementServiceSshAclV6ListStructToHclTerraform(struct?: EnableManagementServiceSshAclV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_data_intf: {
      value: cdktf.numberToHclTerraform(struct!.allDataIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management: {
      value: cdktf.numberToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eth_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceSshAclV6ListEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceSshAclV6ListEthCfgList",
    },
    tunnel_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceSshAclV6ListTunnelCfgToHclTerraform, true)(struct!.tunnelCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceSshAclV6ListTunnelCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceSshAclV6ListVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceSshAclV6ListVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshAclV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshAclV6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._allDataIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDataIntf = this._allDataIntf;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._tunnelCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCfg = this._tunnelCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshAclV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._allDataIntf = undefined;
      this._management = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._tunnelCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._allDataIntf = value.allDataIntf;
      this._management = value.management;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ethCfg.internalValue = value.ethCfg;
      this._tunnelCfg.internalValue = value.tunnelCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // acl_name - computed: false, optional: false, required: true
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // all_data_intf - computed: false, optional: true, required: false
  private _allDataIntf?: number; 
  public get allDataIntf() {
    return this.getNumberAttribute('all_data_intf');
  }
  public set allDataIntf(value: number) {
    this._allDataIntf = value;
  }
  public resetAllDataIntf() {
    this._allDataIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDataIntfInput() {
    return this._allDataIntf;
  }

  // management - computed: false, optional: true, required: false
  private _management?: number; 
  public get management() {
    return this.getNumberAttribute('management');
  }
  public set management(value: number) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
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

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new EnableManagementServiceSshAclV6ListEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServiceSshAclV6ListEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new EnableManagementServiceSshAclV6ListTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServiceSshAclV6ListTunnelCfg[] | cdktf.IResolvable) {
    this._tunnelCfg.internalValue = value;
  }
  public resetTunnelCfg() {
    this._tunnelCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCfgInput() {
    return this._tunnelCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new EnableManagementServiceSshAclV6ListVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServiceSshAclV6ListVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}

export class EnableManagementServiceSshAclV6ListStructList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshAclV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshAclV6ListStructOutputReference {
    return new EnableManagementServiceSshAclV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ethernet_end EnableManagementServiceSsh#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ethernet_start EnableManagementServiceSsh#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServiceSshEthCfgToTerraform(struct?: EnableManagementServiceSshEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServiceSshEthCfgToHclTerraform(struct?: EnableManagementServiceSshEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class EnableManagementServiceSshEthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshEthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshEthCfgOutputReference {
    return new EnableManagementServiceSshEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_end EnableManagementServiceSsh#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#tunnel_start EnableManagementServiceSsh#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServiceSshTunnelCfgToTerraform(struct?: EnableManagementServiceSshTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServiceSshTunnelCfgToHclTerraform(struct?: EnableManagementServiceSshTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_end: {
      value: cdktf.numberToHclTerraform(struct!.tunnelEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_start: {
      value: cdktf.numberToHclTerraform(struct!.tunnelStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshTunnelCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEnd = this._tunnelEnd;
    }
    if (this._tunnelStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelStart = this._tunnelStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshTunnelCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelEnd = undefined;
      this._tunnelStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelEnd = value.tunnelEnd;
      this._tunnelStart = value.tunnelStart;
    }
  }

  // tunnel_end - computed: false, optional: true, required: false
  private _tunnelEnd?: number; 
  public get tunnelEnd() {
    return this.getNumberAttribute('tunnel_end');
  }
  public set tunnelEnd(value: number) {
    this._tunnelEnd = value;
  }
  public resetTunnelEnd() {
    this._tunnelEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEndInput() {
    return this._tunnelEnd;
  }

  // tunnel_start - computed: false, optional: true, required: false
  private _tunnelStart?: number; 
  public get tunnelStart() {
    return this.getNumberAttribute('tunnel_start');
  }
  public set tunnelStart(value: number) {
    this._tunnelStart = value;
  }
  public resetTunnelStart() {
    this._tunnelStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelStartInput() {
    return this._tunnelStart;
  }
}

export class EnableManagementServiceSshTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshTunnelCfgOutputReference {
    return new EnableManagementServiceSshTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceSshVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_end EnableManagementServiceSsh#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#ve_start EnableManagementServiceSsh#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServiceSshVeCfgToTerraform(struct?: EnableManagementServiceSshVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServiceSshVeCfgToHclTerraform(struct?: EnableManagementServiceSshVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve_end: {
      value: cdktf.numberToHclTerraform(struct!.veEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve_start: {
      value: cdktf.numberToHclTerraform(struct!.veStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceSshVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceSshVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._veEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.veEnd = this._veEnd;
    }
    if (this._veStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.veStart = this._veStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceSshVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._veEnd = undefined;
      this._veStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._veEnd = value.veEnd;
      this._veStart = value.veStart;
    }
  }

  // ve_end - computed: false, optional: true, required: false
  private _veEnd?: number; 
  public get veEnd() {
    return this.getNumberAttribute('ve_end');
  }
  public set veEnd(value: number) {
    this._veEnd = value;
  }
  public resetVeEnd() {
    this._veEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veEndInput() {
    return this._veEnd;
  }

  // ve_start - computed: false, optional: true, required: false
  private _veStart?: number; 
  public get veStart() {
    return this.getNumberAttribute('ve_start');
  }
  public set veStart(value: number) {
    this._veStart = value;
  }
  public resetVeStart() {
    this._veStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veStartInput() {
    return this._veStart;
  }
}

export class EnableManagementServiceSshVeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceSshVeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceSshVeCfgOutputReference {
    return new EnableManagementServiceSshVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh thunder_enable_management_service_ssh}
*/
export class EnableManagementServiceSsh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_enable_management_service_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnableManagementServiceSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnableManagementServiceSsh to import
  * @param importFromId The id of the existing EnableManagementServiceSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnableManagementServiceSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_enable_management_service_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ssh thunder_enable_management_service_ssh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnableManagementServiceSshConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnableManagementServiceSshConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_enable_management_service_ssh',
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
    this._allDataIntf = config.allDataIntf;
    this._id = config.id;
    this._uuid = config.uuid;
    this._aclV4List.internalValue = config.aclV4List;
    this._aclV6List.internalValue = config.aclV6List;
    this._ethCfg.internalValue = config.ethCfg;
    this._tunnelCfg.internalValue = config.tunnelCfg;
    this._veCfg.internalValue = config.veCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_data_intf - computed: false, optional: true, required: false
  private _allDataIntf?: number; 
  public get allDataIntf() {
    return this.getNumberAttribute('all_data_intf');
  }
  public set allDataIntf(value: number) {
    this._allDataIntf = value;
  }
  public resetAllDataIntf() {
    this._allDataIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDataIntfInput() {
    return this._allDataIntf;
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

  // acl_v4_list - computed: false, optional: true, required: false
  private _aclV4List = new EnableManagementServiceSshAclV4ListStructList(this, "acl_v4_list", false);
  public get aclV4List() {
    return this._aclV4List;
  }
  public putAclV4List(value: EnableManagementServiceSshAclV4ListStruct[] | cdktf.IResolvable) {
    this._aclV4List.internalValue = value;
  }
  public resetAclV4List() {
    this._aclV4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclV4ListInput() {
    return this._aclV4List.internalValue;
  }

  // acl_v6_list - computed: false, optional: true, required: false
  private _aclV6List = new EnableManagementServiceSshAclV6ListStructList(this, "acl_v6_list", false);
  public get aclV6List() {
    return this._aclV6List;
  }
  public putAclV6List(value: EnableManagementServiceSshAclV6ListStruct[] | cdktf.IResolvable) {
    this._aclV6List.internalValue = value;
  }
  public resetAclV6List() {
    this._aclV6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclV6ListInput() {
    return this._aclV6List.internalValue;
  }

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new EnableManagementServiceSshEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServiceSshEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new EnableManagementServiceSshTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServiceSshTunnelCfg[] | cdktf.IResolvable) {
    this._tunnelCfg.internalValue = value;
  }
  public resetTunnelCfg() {
    this._tunnelCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCfgInput() {
    return this._tunnelCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new EnableManagementServiceSshVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServiceSshVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_data_intf: cdktf.numberToTerraform(this._allDataIntf),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      acl_v4_list: cdktf.listMapper(enableManagementServiceSshAclV4ListStructToTerraform, true)(this._aclV4List.internalValue),
      acl_v6_list: cdktf.listMapper(enableManagementServiceSshAclV6ListStructToTerraform, true)(this._aclV6List.internalValue),
      eth_cfg: cdktf.listMapper(enableManagementServiceSshEthCfgToTerraform, true)(this._ethCfg.internalValue),
      tunnel_cfg: cdktf.listMapper(enableManagementServiceSshTunnelCfgToTerraform, true)(this._tunnelCfg.internalValue),
      ve_cfg: cdktf.listMapper(enableManagementServiceSshVeCfgToTerraform, true)(this._veCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_data_intf: {
        value: cdktf.numberToHclTerraform(this._allDataIntf),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_v4_list: {
        value: cdktf.listMapperHcl(enableManagementServiceSshAclV4ListStructToHclTerraform, true)(this._aclV4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceSshAclV4ListStructList",
      },
      acl_v6_list: {
        value: cdktf.listMapperHcl(enableManagementServiceSshAclV6ListStructToHclTerraform, true)(this._aclV6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceSshAclV6ListStructList",
      },
      eth_cfg: {
        value: cdktf.listMapperHcl(enableManagementServiceSshEthCfgToHclTerraform, true)(this._ethCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceSshEthCfgList",
      },
      tunnel_cfg: {
        value: cdktf.listMapperHcl(enableManagementServiceSshTunnelCfgToHclTerraform, true)(this._tunnelCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceSshTunnelCfgList",
      },
      ve_cfg: {
        value: cdktf.listMapperHcl(enableManagementServiceSshVeCfgToHclTerraform, true)(this._veCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceSshVeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
