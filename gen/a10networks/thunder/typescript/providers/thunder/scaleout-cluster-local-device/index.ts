// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterLocalDeviceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#action ScaleoutClusterLocalDeviceA#action}
  */
  readonly action?: string;
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#cluster_id ScaleoutClusterLocalDeviceA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * 'layer-2': Nodes in cluster are layer 2 connected (default mode); 'layer-3': Nodes in cluster are l3 connected;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#cluster_mode ScaleoutClusterLocalDeviceA#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#id ScaleoutClusterLocalDeviceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#id1 ScaleoutClusterLocalDeviceA#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#priority ScaleoutClusterLocalDeviceA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#start_delay ScaleoutClusterLocalDeviceA#start_delay}
  */
  readonly startDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * exclude_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#exclude_interfaces ScaleoutClusterLocalDeviceA#exclude_interfaces}
  */
  readonly excludeInterfaces?: ScaleoutClusterLocalDeviceExcludeInterfacesA;
  /**
  * l2_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#l2_redirect ScaleoutClusterLocalDeviceA#l2_redirect}
  */
  readonly l2Redirect?: ScaleoutClusterLocalDeviceL2RedirectA;
  /**
  * session_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#session_sync ScaleoutClusterLocalDeviceA#session_sync}
  */
  readonly sessionSync?: ScaleoutClusterLocalDeviceSessionSyncA;
  /**
  * tracking_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#tracking_template ScaleoutClusterLocalDeviceA#tracking_template}
  */
  readonly trackingTemplate?: ScaleoutClusterLocalDeviceTrackingTemplateA;
  /**
  * traffic_redirection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#traffic_redirection ScaleoutClusterLocalDeviceA#traffic_redirection}
  */
  readonly trafficRedirection?: ScaleoutClusterLocalDeviceTrafficRedirectionA;
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ethernet ScaleoutClusterLocalDeviceA#ethernet}
  */
  readonly ethernet?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesEthCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesEthCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA {
  /**
  * Loopback Interface (Loopback interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#loopback ScaleoutClusterLocalDeviceA#loopback}
  */
  readonly loopback?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA {
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk ScaleoutClusterLocalDeviceA#trunk}
  */
  readonly trunk?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA {
  /**
  * Virtual ethernet Interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ve ScaleoutClusterLocalDeviceA#ve}
  */
  readonly ve?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesVeCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesVeCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#eth_cfg ScaleoutClusterLocalDeviceA#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#loopback_cfg ScaleoutClusterLocalDeviceA#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk_cfg ScaleoutClusterLocalDeviceA#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ve_cfg ScaleoutClusterLocalDeviceA#ve_cfg}
  */
  readonly veCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesAToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesAOutputReference | ScaleoutClusterLocalDeviceExcludeInterfacesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesEthCfgAToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAToTerraform, true)(struct!.trunkCfg),
    ve_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesVeCfgAToTerraform, true)(struct!.veCfg),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesAToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesAOutputReference | ScaleoutClusterLocalDeviceExcludeInterfacesA): any {
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
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesEthCfgAToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgAList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesVeCfgAToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesA | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesA | undefined) {
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
  private _ethCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgAList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgA[] | cdktf.IResolvable) {
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
  private _loopbackCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgAList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgA[] | cdktf.IResolvable) {
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
  private _trunkCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgAList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgA[] | cdktf.IResolvable) {
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
  private _veCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgAList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgA[] | cdktf.IResolvable) {
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
export interface ScaleoutClusterLocalDeviceL2RedirectA {
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ethernet_vlan ScaleoutClusterLocalDeviceA#ethernet_vlan}
  */
  readonly ethernetVlan?: number;
  /**
  * Ethernet port (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#redirect_eth ScaleoutClusterLocalDeviceA#redirect_eth}
  */
  readonly redirectEth?: number;
  /**
  * L2 Trunk group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#redirect_trunk ScaleoutClusterLocalDeviceA#redirect_trunk}
  */
  readonly redirectTrunk?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk_vlan ScaleoutClusterLocalDeviceA#trunk_vlan}
  */
  readonly trunkVlan?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceL2RedirectAToTerraform(struct?: ScaleoutClusterLocalDeviceL2RedirectAOutputReference | ScaleoutClusterLocalDeviceL2RedirectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_vlan: cdktf.numberToTerraform(struct!.ethernetVlan),
    redirect_eth: cdktf.numberToTerraform(struct!.redirectEth),
    redirect_trunk: cdktf.numberToTerraform(struct!.redirectTrunk),
    trunk_vlan: cdktf.numberToTerraform(struct!.trunkVlan),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceL2RedirectAToHclTerraform(struct?: ScaleoutClusterLocalDeviceL2RedirectAOutputReference | ScaleoutClusterLocalDeviceL2RedirectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_vlan: {
      value: cdktf.numberToHclTerraform(struct!.ethernetVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_eth: {
      value: cdktf.numberToHclTerraform(struct!.redirectEth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_trunk: {
      value: cdktf.numberToHclTerraform(struct!.redirectTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_vlan: {
      value: cdktf.numberToHclTerraform(struct!.trunkVlan),
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

export class ScaleoutClusterLocalDeviceL2RedirectAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceL2RedirectA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetVlan = this._ethernetVlan;
    }
    if (this._redirectEth !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectEth = this._redirectEth;
    }
    if (this._redirectTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectTrunk = this._redirectTrunk;
    }
    if (this._trunkVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkVlan = this._trunkVlan;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceL2RedirectA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernetVlan = undefined;
      this._redirectEth = undefined;
      this._redirectTrunk = undefined;
      this._trunkVlan = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernetVlan = value.ethernetVlan;
      this._redirectEth = value.redirectEth;
      this._redirectTrunk = value.redirectTrunk;
      this._trunkVlan = value.trunkVlan;
      this._uuid = value.uuid;
    }
  }

  // ethernet_vlan - computed: false, optional: true, required: false
  private _ethernetVlan?: number; 
  public get ethernetVlan() {
    return this.getNumberAttribute('ethernet_vlan');
  }
  public set ethernetVlan(value: number) {
    this._ethernetVlan = value;
  }
  public resetEthernetVlan() {
    this._ethernetVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetVlanInput() {
    return this._ethernetVlan;
  }

  // redirect_eth - computed: false, optional: true, required: false
  private _redirectEth?: number; 
  public get redirectEth() {
    return this.getNumberAttribute('redirect_eth');
  }
  public set redirectEth(value: number) {
    this._redirectEth = value;
  }
  public resetRedirectEth() {
    this._redirectEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectEthInput() {
    return this._redirectEth;
  }

  // redirect_trunk - computed: false, optional: true, required: false
  private _redirectTrunk?: number; 
  public get redirectTrunk() {
    return this.getNumberAttribute('redirect_trunk');
  }
  public set redirectTrunk(value: number) {
    this._redirectTrunk = value;
  }
  public resetRedirectTrunk() {
    this._redirectTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTrunkInput() {
    return this._redirectTrunk;
  }

  // trunk_vlan - computed: false, optional: true, required: false
  private _trunkVlan?: number; 
  public get trunkVlan() {
    return this.getNumberAttribute('trunk_vlan');
  }
  public set trunkVlan(value: number) {
    this._trunkVlan = value;
  }
  public resetTrunkVlan() {
    this._trunkVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkVlanInput() {
    return this._trunkVlan;
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
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ethernet ScaleoutClusterLocalDeviceA#ethernet}
  */
  readonly ethernet?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA {
  /**
  * Loopback Interface(Not applicable in 'layer-2' mode) (Loopback interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#loopback ScaleoutClusterLocalDeviceA#loopback}
  */
  readonly loopback?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA {
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk ScaleoutClusterLocalDeviceA#trunk}
  */
  readonly trunk?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA {
  /**
  * Virtual ethernet Interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ve ScaleoutClusterLocalDeviceA#ve}
  */
  readonly ve?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA | cdktf.IResolvable): any {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#eth_cfg ScaleoutClusterLocalDeviceA#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#loopback_cfg ScaleoutClusterLocalDeviceA#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk_cfg ScaleoutClusterLocalDeviceA#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ve_cfg ScaleoutClusterLocalDeviceA#ve_cfg}
  */
  readonly veCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesAOutputReference | ScaleoutClusterLocalDeviceSessionSyncInterfacesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAToTerraform, true)(struct!.trunkCfg),
    ve_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAToTerraform, true)(struct!.veCfg),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesAOutputReference | ScaleoutClusterLocalDeviceSessionSyncInterfacesA): any {
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
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesA | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesA | undefined) {
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
  private _ethCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgAList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgA[] | cdktf.IResolvable) {
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
  private _loopbackCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgAList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgA[] | cdktf.IResolvable) {
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
  private _trunkCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgAList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgA[] | cdktf.IResolvable) {
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
  private _veCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgAList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgA[] | cdktf.IResolvable) {
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
export interface ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA {
  /**
  * Do not choose default route for redirection(Not applicable in 'layer-2' mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#skip_default_route ScaleoutClusterLocalDeviceA#skip_default_route}
  */
  readonly skipDefaultRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAOutputReference | ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_default_route: cdktf.numberToTerraform(struct!.skipDefaultRoute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAOutputReference | ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA): any {
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

export class ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA | undefined {
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

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA | undefined) {
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
export interface ScaleoutClusterLocalDeviceSessionSyncA {
  /**
  * Follow shared partition for session sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#follow_shared ScaleoutClusterLocalDeviceA#follow_shared}
  */
  readonly followShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#interfaces ScaleoutClusterLocalDeviceA#interfaces}
  */
  readonly interfaces?: ScaleoutClusterLocalDeviceSessionSyncInterfacesA;
  /**
  * reachability_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#reachability_options ScaleoutClusterLocalDeviceA#reachability_options}
  */
  readonly reachabilityOptions?: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA;
}

export function scaleoutClusterLocalDeviceSessionSyncAToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncAOutputReference | ScaleoutClusterLocalDeviceSessionSyncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_shared: cdktf.numberToTerraform(struct!.followShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    interfaces: scaleoutClusterLocalDeviceSessionSyncInterfacesAToTerraform(struct!.interfaces),
    reachability_options: scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAToTerraform(struct!.reachabilityOptions),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncAToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncAOutputReference | ScaleoutClusterLocalDeviceSessionSyncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.followShared),
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
    interfaces: {
      value: scaleoutClusterLocalDeviceSessionSyncInterfacesAToHclTerraform(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesAList",
    },
    reachability_options: {
      value: scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAToHclTerraform(struct!.reachabilityOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.followShared = this._followShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._reachabilityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachabilityOptions = this._reachabilityOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followShared = undefined;
      this._uuid = undefined;
      this._interfaces.internalValue = undefined;
      this._reachabilityOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followShared = value.followShared;
      this._uuid = value.uuid;
      this._interfaces.internalValue = value.interfaces;
      this._reachabilityOptions.internalValue = value.reachabilityOptions;
    }
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ScaleoutClusterLocalDeviceSessionSyncInterfacesAOutputReference(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesA) {
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
  private _reachabilityOptions = new ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsAOutputReference(this, "reachability_options");
  public get reachabilityOptions() {
    return this._reachabilityOptions;
  }
  public putReachabilityOptions(value: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsA) {
    this._reachabilityOptions.internalValue = value;
  }
  public resetReachabilityOptions() {
    this._reachabilityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityOptionsInput() {
    return this._reachabilityOptions.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA {
  /**
  * Partition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#partition_name ScaleoutClusterLocalDeviceA#partition_name}
  */
  readonly partitionName?: string;
  /**
  * bind tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#template_name ScaleoutClusterLocalDeviceA#template_name}
  */
  readonly templateName?: string;
}

export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionName = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionName = value.partitionName;
      this._templateName = value.templateName;
    }
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA {
  /**
  * 'down': node stops processing user traffic; 'exit-cluster': node exits scaleout cluster;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#action ScaleoutClusterLocalDeviceA#action}
  */
  readonly action?: string;
  /**
  * 'ipv4': take action for IPv4 traffic-only; 'ipv6': take action for IPv6 traffic-only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ip_version ScaleoutClusterLocalDeviceA#ip_version}
  */
  readonly ipVersion: string;
  /**
  * bind multi tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#multi_template ScaleoutClusterLocalDeviceA#multi_template}
  */
  readonly multiTemplate: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#threshold ScaleoutClusterLocalDeviceA#threshold}
  */
  readonly threshold?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#user_tag ScaleoutClusterLocalDeviceA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#template ScaleoutClusterLocalDeviceA#template}
  */
  readonly template?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    multi_template: cdktf.stringToTerraform(struct!.multiTemplate),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAToTerraform, true)(struct!.template),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA | cdktf.IResolvable): any {
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
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_template: {
      value: cdktf.stringToHclTerraform(struct!.multiTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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
    template: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAToHclTerraform, true)(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._multiTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTemplate = this._multiTemplate;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipVersion = undefined;
      this._multiTemplate = undefined;
      this._threshold = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ipVersion = value.ipVersion;
      this._multiTemplate = value.multiTemplate;
      this._threshold = value.threshold;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
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

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // multi_template - computed: false, optional: false, required: true
  private _multiTemplate?: string; 
  public get multiTemplate() {
    return this.getStringAttribute('multi_template');
  }
  public set multiTemplate(value: string) {
    this._multiTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTemplateInput() {
    return this._multiTemplate;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // template - computed: false, optional: true, required: false
  private _template = new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateAList(this, "template", false);
  public get template() {
    return this._template;
  }
  public putTemplate(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateA[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA {
  /**
  * 'down': node stops processing user traffic; 'exit-cluster': node exits scaleout cluster;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#action ScaleoutClusterLocalDeviceA#action}
  */
  readonly action?: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#threshold ScaleoutClusterLocalDeviceA#threshold}
  */
  readonly threshold?: number;
}

export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA | cdktf.IResolvable): any {
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
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threshold = value.threshold;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA {
  /**
  * 'ipv4': take action for IPv4 traffic-only; 'ipv6': take action for IPv6 traffic-only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ip_version ScaleoutClusterLocalDeviceA#ip_version}
  */
  readonly ipVersion: string;
  /**
  * bind tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#template ScaleoutClusterLocalDeviceA#template}
  */
  readonly template: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#user_tag ScaleoutClusterLocalDeviceA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#threshold_cfg ScaleoutClusterLocalDeviceA#threshold_cfg}
  */
  readonly thresholdCfg?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    template: cdktf.stringToTerraform(struct!.template),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    threshold_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAToTerraform, true)(struct!.thresholdCfg),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    threshold_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAToHclTerraform, true)(struct!.thresholdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._thresholdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCfg = this._thresholdCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipVersion = undefined;
      this._template = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._thresholdCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipVersion = value.ipVersion;
      this._template = value.template;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._thresholdCfg.internalValue = value.thresholdCfg;
    }
  }

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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

  // threshold_cfg - computed: false, optional: true, required: false
  private _thresholdCfg = new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgAList(this, "threshold_cfg", false);
  public get thresholdCfg() {
    return this._thresholdCfg;
  }
  public putThresholdCfg(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgA[] | cdktf.IResolvable) {
    this._thresholdCfg.internalValue = value;
  }
  public resetThresholdCfg() {
    this._thresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCfgInput() {
    return this._thresholdCfg.internalValue;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateA {
  /**
  * multi_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#multi_template_list ScaleoutClusterLocalDeviceA#multi_template_list}
  */
  readonly multiTemplateList?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA[] | cdktf.IResolvable;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#template_list ScaleoutClusterLocalDeviceA#template_list}
  */
  readonly templateList?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrackingTemplateAToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateAOutputReference | ScaleoutClusterLocalDeviceTrackingTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_template_list: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAToTerraform, true)(struct!.multiTemplateList),
    template_list: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAToTerraform, true)(struct!.templateList),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateAOutputReference | ScaleoutClusterLocalDeviceTrackingTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_template_list: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAToHclTerraform, true)(struct!.multiTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAList",
    },
    template_list: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAToHclTerraform, true)(struct!.templateList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTemplateList = this._multiTemplateList?.internalValue;
    }
    if (this._templateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateList = this._templateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiTemplateList.internalValue = undefined;
      this._templateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiTemplateList.internalValue = value.multiTemplateList;
      this._templateList.internalValue = value.templateList;
    }
  }

  // multi_template_list - computed: false, optional: true, required: false
  private _multiTemplateList = new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructAList(this, "multi_template_list", false);
  public get multiTemplateList() {
    return this._multiTemplateList;
  }
  public putMultiTemplateList(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructA[] | cdktf.IResolvable) {
    this._multiTemplateList.internalValue = value;
  }
  public resetMultiTemplateList() {
    this._multiTemplateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTemplateListInput() {
    return this._multiTemplateList.internalValue;
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructAList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructA[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionEncapA {
  /**
  * 'vxlan': Use vxlan for encapsulation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#type ScaleoutClusterLocalDeviceA#type}
  */
  readonly type?: string;
  /**
  * Always use IPv4 VxLAN for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#use_v4_vxlan ScaleoutClusterLocalDeviceA#use_v4_vxlan}
  */
  readonly useV4Vxlan?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ethernet ScaleoutClusterLocalDeviceA#ethernet}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#loopback ScaleoutClusterLocalDeviceA#loopback}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk ScaleoutClusterLocalDeviceA#trunk}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ve ScaleoutClusterLocalDeviceA#ve}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#eth_cfg ScaleoutClusterLocalDeviceA#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgA[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#loopback_cfg ScaleoutClusterLocalDeviceA#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgA[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#trunk_cfg ScaleoutClusterLocalDeviceA#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgA[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#ve_cfg ScaleoutClusterLocalDeviceA#ve_cfg}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#skip_default_route ScaleoutClusterLocalDeviceA#skip_default_route}
  */
  readonly skipDefaultRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
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
export interface ScaleoutClusterLocalDeviceTrafficRedirectionA {
  /**
  * Follow shared partition for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#follow_shared ScaleoutClusterLocalDeviceA#follow_shared}
  */
  readonly followShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#uuid ScaleoutClusterLocalDeviceA#uuid}
  */
  readonly uuid?: string;
  /**
  * encap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#encap ScaleoutClusterLocalDeviceA#encap}
  */
  readonly encap?: ScaleoutClusterLocalDeviceTrafficRedirectionEncapA;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#interfaces ScaleoutClusterLocalDeviceA#interfaces}
  */
  readonly interfaces?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesA;
  /**
  * reachability_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#reachability_options ScaleoutClusterLocalDeviceA#reachability_options}
  */
  readonly reachabilityOptions?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsA;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionAToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_shared: cdktf.numberToTerraform(struct!.followShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    encap: scaleoutClusterLocalDeviceTrafficRedirectionEncapAToTerraform(struct!.encap),
    interfaces: scaleoutClusterLocalDeviceTrafficRedirectionInterfacesAToTerraform(struct!.interfaces),
    reachability_options: scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAToTerraform(struct!.reachabilityOptions),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionAToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionAOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.followShared),
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
    encap: {
      value: scaleoutClusterLocalDeviceTrafficRedirectionEncapAToHclTerraform(struct!.encap),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionEncapAList",
    },
    interfaces: {
      value: scaleoutClusterLocalDeviceTrafficRedirectionInterfacesAToHclTerraform(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesAList",
    },
    reachability_options: {
      value: scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAToHclTerraform(struct!.reachabilityOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.followShared = this._followShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._encap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._reachabilityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachabilityOptions = this._reachabilityOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followShared = undefined;
      this._uuid = undefined;
      this._encap.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._reachabilityOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followShared = value.followShared;
      this._uuid = value.uuid;
      this._encap.internalValue = value.encap;
      this._interfaces.internalValue = value.interfaces;
      this._reachabilityOptions.internalValue = value.reachabilityOptions;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device thunder_scaleout_cluster_local_device}
*/
export class ScaleoutClusterLocalDeviceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_local_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterLocalDeviceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterLocalDeviceA to import
  * @param importFromId The id of the existing ScaleoutClusterLocalDeviceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterLocalDeviceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_local_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_local_device thunder_scaleout_cluster_local_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterLocalDeviceAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterLocalDeviceAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_local_device',
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
    this._action = config.action;
    this._clusterId = config.clusterId;
    this._clusterMode = config.clusterMode;
    this._id = config.id;
    this._id1 = config.id1;
    this._priority = config.priority;
    this._startDelay = config.startDelay;
    this._uuid = config.uuid;
    this._excludeInterfaces.internalValue = config.excludeInterfaces;
    this._l2Redirect.internalValue = config.l2Redirect;
    this._sessionSync.internalValue = config.sessionSync;
    this._trackingTemplate.internalValue = config.trackingTemplate;
    this._trafficRedirection.internalValue = config.trafficRedirection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
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

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: number; 
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }
  public set startDelay(value: number) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
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

  // exclude_interfaces - computed: false, optional: true, required: false
  private _excludeInterfaces = new ScaleoutClusterLocalDeviceExcludeInterfacesAOutputReference(this, "exclude_interfaces");
  public get excludeInterfaces() {
    return this._excludeInterfaces;
  }
  public putExcludeInterfaces(value: ScaleoutClusterLocalDeviceExcludeInterfacesA) {
    this._excludeInterfaces.internalValue = value;
  }
  public resetExcludeInterfaces() {
    this._excludeInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfacesInput() {
    return this._excludeInterfaces.internalValue;
  }

  // l2_redirect - computed: false, optional: true, required: false
  private _l2Redirect = new ScaleoutClusterLocalDeviceL2RedirectAOutputReference(this, "l2_redirect");
  public get l2Redirect() {
    return this._l2Redirect;
  }
  public putL2Redirect(value: ScaleoutClusterLocalDeviceL2RedirectA) {
    this._l2Redirect.internalValue = value;
  }
  public resetL2Redirect() {
    this._l2Redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectInput() {
    return this._l2Redirect.internalValue;
  }

  // session_sync - computed: false, optional: true, required: false
  private _sessionSync = new ScaleoutClusterLocalDeviceSessionSyncAOutputReference(this, "session_sync");
  public get sessionSync() {
    return this._sessionSync;
  }
  public putSessionSync(value: ScaleoutClusterLocalDeviceSessionSyncA) {
    this._sessionSync.internalValue = value;
  }
  public resetSessionSync() {
    this._sessionSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncInput() {
    return this._sessionSync.internalValue;
  }

  // tracking_template - computed: false, optional: true, required: false
  private _trackingTemplate = new ScaleoutClusterLocalDeviceTrackingTemplateAOutputReference(this, "tracking_template");
  public get trackingTemplate() {
    return this._trackingTemplate;
  }
  public putTrackingTemplate(value: ScaleoutClusterLocalDeviceTrackingTemplateA) {
    this._trackingTemplate.internalValue = value;
  }
  public resetTrackingTemplate() {
    this._trackingTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingTemplateInput() {
    return this._trackingTemplate.internalValue;
  }

  // traffic_redirection - computed: false, optional: true, required: false
  private _trafficRedirection = new ScaleoutClusterLocalDeviceTrafficRedirectionAOutputReference(this, "traffic_redirection");
  public get trafficRedirection() {
    return this._trafficRedirection;
  }
  public putTrafficRedirection(value: ScaleoutClusterLocalDeviceTrafficRedirectionA) {
    this._trafficRedirection.internalValue = value;
  }
  public resetTrafficRedirection() {
    this._trafficRedirection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRedirectionInput() {
    return this._trafficRedirection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      priority: cdktf.numberToTerraform(this._priority),
      start_delay: cdktf.numberToTerraform(this._startDelay),
      uuid: cdktf.stringToTerraform(this._uuid),
      exclude_interfaces: scaleoutClusterLocalDeviceExcludeInterfacesAToTerraform(this._excludeInterfaces.internalValue),
      l2_redirect: scaleoutClusterLocalDeviceL2RedirectAToTerraform(this._l2Redirect.internalValue),
      session_sync: scaleoutClusterLocalDeviceSessionSyncAToTerraform(this._sessionSync.internalValue),
      tracking_template: scaleoutClusterLocalDeviceTrackingTemplateAToTerraform(this._trackingTemplate.internalValue),
      traffic_redirection: scaleoutClusterLocalDeviceTrafficRedirectionAToTerraform(this._trafficRedirection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_delay: {
        value: cdktf.numberToHclTerraform(this._startDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_interfaces: {
        value: scaleoutClusterLocalDeviceExcludeInterfacesAToHclTerraform(this._excludeInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesAList",
      },
      l2_redirect: {
        value: scaleoutClusterLocalDeviceL2RedirectAToHclTerraform(this._l2Redirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceL2RedirectAList",
      },
      session_sync: {
        value: scaleoutClusterLocalDeviceSessionSyncAToHclTerraform(this._sessionSync.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceSessionSyncAList",
      },
      tracking_template: {
        value: scaleoutClusterLocalDeviceTrackingTemplateAToHclTerraform(this._trackingTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateAList",
      },
      traffic_redirection: {
        value: scaleoutClusterLocalDeviceTrafficRedirectionAToHclTerraform(this._trafficRedirection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
