// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterLocalDeviceTrafficRedirectionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#cluster_id ScaleoutClusterLocalDeviceTrafficRedirectionA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Follow shared partition for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#follow_shared ScaleoutClusterLocalDeviceTrafficRedirectionA#follow_shared}
  */
  readonly followShared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#id ScaleoutClusterLocalDeviceTrafficRedirectionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#uuid ScaleoutClusterLocalDeviceTrafficRedirectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * encap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#encap ScaleoutClusterLocalDeviceTrafficRedirectionA#encap}
  */
  readonly encap?: ScaleoutClusterLocalDeviceTrafficRedirectionEncapA;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#interfaces ScaleoutClusterLocalDeviceTrafficRedirectionA#interfaces}
  */
  readonly interfaces?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA;
  /**
  * reachability_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#reachability_options ScaleoutClusterLocalDeviceTrafficRedirectionA#reachability_options}
  */
  readonly reachabilityOptions?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA;
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionEncapA {
  /**
  * 'vxlan': Use vxlan for encapsulation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#type ScaleoutClusterLocalDeviceTrafficRedirectionA#type}
  */
  readonly type?: string;
  /**
  * Always use IPv4 VxLAN for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#use_v4_vxlan ScaleoutClusterLocalDeviceTrafficRedirectionA#use_v4_vxlan}
  */
  readonly useV4Vxlan?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#uuid ScaleoutClusterLocalDeviceTrafficRedirectionA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionEncapAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionEncapAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionEncapA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    use_v4_vxlan: cdktf.numberToTerraform(struct!.useV4Vxlan),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionEncapAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionEncapAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionEncapA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_v4_vxlan: {
      value: cdktf.numberToHclTerraform(struct!.useV4Vxlan),
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

export class ScaleoutClusterLocalDeviceTrafficRedirectionEncapAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionEncapA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useV4Vxlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.useV4Vxlan = this._useV4Vxlan;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionEncapA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._useV4Vxlan = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._useV4Vxlan = value.useV4Vxlan;
      this._uuid = value.uuid;
    }
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

  // use_v4_vxlan - computed: false, optional: true, required: false
  private _useV4Vxlan?: number; 
  public get useV4Vxlan() {
    return this.getNumberAttribute('use_v4_vxlan');
  }
  public set useV4Vxlan(value: number) {
    this._useV4Vxlan = value;
  }
  public resetUseV4Vxlan() {
    this._useV4Vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useV4VxlanInput() {
    return this._useV4Vxlan;
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
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#ethernet ScaleoutClusterLocalDeviceTrafficRedirectionA#ethernet}
  */
  readonly ethernet?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA {
  /**
  * Loopback Interface (Loopback interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#loopback ScaleoutClusterLocalDeviceTrafficRedirectionA#loopback}
  */
  readonly loopback?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopback = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopback = value.loopback;
    }
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA {
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#trunk ScaleoutClusterLocalDeviceTrafficRedirectionA#trunk}
  */
  readonly trunk?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunk = value.trunk;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA {
  /**
  * Virtual ethernet Interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#ve ScaleoutClusterLocalDeviceTrafficRedirectionA#ve}
  */
  readonly ve?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ve = value.ve;
    }
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#uuid ScaleoutClusterLocalDeviceTrafficRedirectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#eth_cfg ScaleoutClusterLocalDeviceTrafficRedirectionA#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#loopback_cfg ScaleoutClusterLocalDeviceTrafficRedirectionA#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#trunk_cfg ScaleoutClusterLocalDeviceTrafficRedirectionA#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#ve_cfg ScaleoutClusterLocalDeviceTrafficRedirectionA#ve_cfg}
  */
  readonly veCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAToTerraform, true)(struct!.trunkCfg),
    ve_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAToTerraform, true)(struct!.veCfg),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA): any {
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
    eth_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._loopbackCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackCfg = this._loopbackCfg?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._loopbackCfg.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ethCfg.internalValue = value.ethCfg;
      this._loopbackCfg.internalValue = value.loopbackCfg;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._veCfg.internalValue = value.veCfg;
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

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgAList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // loopback_cfg - computed: false, optional: true, required: false
  private _loopbackCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgAList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA[] | cdktf.IResolvable) {
    this._loopbackCfg.internalValue = value;
  }
  public resetLoopbackCfg() {
    this._loopbackCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackCfgInput() {
    return this._loopbackCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgAList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgAList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgA[] | cdktf.IResolvable) {
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
export interface ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA {
  /**
  * Do not choose default route for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#skip_default_route ScaleoutClusterLocalDeviceTrafficRedirectionA#skip_default_route}
  */
  readonly skipDefaultRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#uuid ScaleoutClusterLocalDeviceTrafficRedirectionA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_default_route: cdktf.numberToTerraform(struct!.skipDefaultRoute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_default_route: {
      value: cdktf.numberToHclTerraform(struct!.skipDefaultRoute),
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

export class ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDefaultRoute = this._skipDefaultRoute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipDefaultRoute = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipDefaultRoute = value.skipDefaultRoute;
      this._uuid = value.uuid;
    }
  }

  // skip_default_route - computed: false, optional: true, required: false
  private _skipDefaultRoute?: number; 
  public get skipDefaultRoute() {
    return this.getNumberAttribute('skip_default_route');
  }
  public set skipDefaultRoute(value: number) {
    this._skipDefaultRoute = value;
  }
  public resetSkipDefaultRoute() {
    this._skipDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDefaultRouteInput() {
    return this._skipDefaultRoute;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection thunder_scaleout_cluster_local_device_traffic_redirection}
*/
export class ScaleoutClusterLocalDeviceTrafficRedirectionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_local_device_traffic_redirection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterLocalDeviceTrafficRedirectionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterLocalDeviceTrafficRedirectionA to import
  * @param importFromId The id of the existing ScaleoutClusterLocalDeviceTrafficRedirectionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterLocalDeviceTrafficRedirectionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_local_device_traffic_redirection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device_traffic_redirection thunder_scaleout_cluster_local_device_traffic_redirection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterLocalDeviceTrafficRedirectionAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterLocalDeviceTrafficRedirectionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_local_device_traffic_redirection',
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
    this._clusterId = config.clusterId;
    this._followShared = config.followShared;
    this._id = config.id;
    this._uuid = config.uuid;
    this._encap.internalValue = config.encap;
    this._interfaces.internalValue = config.interfaces;
    this._reachabilityOptions.internalValue = config.reachabilityOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // follow_shared - computed: false, optional: true, required: false
  private _followShared?: number; 
  public get followShared() {
    return this.getNumberAttribute('follow_shared');
  }
  public set followShared(value: number) {
    this._followShared = value;
  }
  public resetFollowShared() {
    this._followShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedInput() {
    return this._followShared;
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

  // encap - computed: false, optional: true, required: false
  private _encap = new ScaleoutClusterLocalDeviceTrafficRedirectionEncapAOutputReference(this, "encap");
  public get encap() {
    return this._encap;
  }
  public putEncap(value: ScaleoutClusterLocalDeviceTrafficRedirectionEncapA) {
    this._encap.internalValue = value;
  }
  public resetEncap() {
    this._encap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesAOutputReference(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // reachability_options - computed: false, optional: true, required: false
  private _reachabilityOptions = new ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAOutputReference(this, "reachability_options");
  public get reachabilityOptions() {
    return this._reachabilityOptions;
  }
  public putReachabilityOptions(value: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA) {
    this._reachabilityOptions.internalValue = value;
  }
  public resetReachabilityOptions() {
    this._reachabilityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityOptionsInput() {
    return this._reachabilityOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      follow_shared: cdktf.numberToTerraform(this._followShared),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      encap: scaleoutClusterLocalDeviceTrafficRedirectionEncapAToTerraform(this._encap.internalValue),
      interfaces: scaleoutClusterLocalDeviceTrafficRedirectionInterfacesAToTerraform(this._interfaces.internalValue),
      reachability_options: scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAToTerraform(this._reachabilityOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow_shared: {
        value: cdktf.numberToHclTerraform(this._followShared),
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
      encap: {
        value: scaleoutClusterLocalDeviceTrafficRedirectionEncapAToHclTerraform(this._encap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionEncapAList",
      },
      interfaces: {
        value: scaleoutClusterLocalDeviceTrafficRedirectionInterfacesAToHclTerraform(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesAList",
      },
      reachability_options: {
        value: scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAToHclTerraform(this._reachabilityOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
