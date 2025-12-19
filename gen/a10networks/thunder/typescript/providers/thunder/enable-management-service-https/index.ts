// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnableManagementServiceHttpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#all_data_intf EnableManagementServiceHttps#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#id EnableManagementServiceHttps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#uuid EnableManagementServiceHttps#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#acl_v4_list EnableManagementServiceHttps#acl_v4_list}
  */
  readonly aclV4List?: EnableManagementServiceHttpsAclV4ListStruct[] | cdktf.IResolvable;
  /**
  * acl_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#acl_v6_list EnableManagementServiceHttps#acl_v6_list}
  */
  readonly aclV6List?: EnableManagementServiceHttpsAclV6ListStruct[] | cdktf.IResolvable;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#eth_cfg EnableManagementServiceHttps#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServiceHttpsEthCfg[] | cdktf.IResolvable;
  /**
  * lif_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#lif_cfg EnableManagementServiceHttps#lif_cfg}
  */
  readonly lifCfg?: EnableManagementServiceHttpsLifCfg;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_cfg EnableManagementServiceHttps#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServiceHttpsTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_cfg EnableManagementServiceHttps#ve_cfg}
  */
  readonly veCfg?: EnableManagementServiceHttpsVeCfg[] | cdktf.IResolvable;
}
export interface EnableManagementServiceHttpsAclV4ListEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ethernet_end EnableManagementServiceHttps#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ethernet_start EnableManagementServiceHttps#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServiceHttpsAclV4ListEthCfgToTerraform(struct?: EnableManagementServiceHttpsAclV4ListEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServiceHttpsAclV4ListEthCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV4ListEthCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsAclV4ListEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV4ListEthCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsAclV4ListEthCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsAclV4ListEthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV4ListEthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV4ListEthCfgOutputReference {
    return new EnableManagementServiceHttpsAclV4ListEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV4ListLifCfg {
  /**
  * Lif name (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#lif EnableManagementServiceHttps#lif}
  */
  readonly lif?: string;
}

export function enableManagementServiceHttpsAclV4ListLifCfgToTerraform(struct?: EnableManagementServiceHttpsAclV4ListLifCfgOutputReference | EnableManagementServiceHttpsAclV4ListLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
  }
}


export function enableManagementServiceHttpsAclV4ListLifCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV4ListLifCfgOutputReference | EnableManagementServiceHttpsAclV4ListLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceHttpsAclV4ListLifCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableManagementServiceHttpsAclV4ListLifCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceHttpsAclV4ListLifCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lif = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lif = value.lif;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }
}
export interface EnableManagementServiceHttpsAclV4ListTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_end EnableManagementServiceHttps#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_start EnableManagementServiceHttps#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServiceHttpsAclV4ListTunnelCfgToTerraform(struct?: EnableManagementServiceHttpsAclV4ListTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServiceHttpsAclV4ListTunnelCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV4ListTunnelCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsAclV4ListTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV4ListTunnelCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsAclV4ListTunnelCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsAclV4ListTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV4ListTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV4ListTunnelCfgOutputReference {
    return new EnableManagementServiceHttpsAclV4ListTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV4ListVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_end EnableManagementServiceHttps#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_start EnableManagementServiceHttps#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServiceHttpsAclV4ListVeCfgToTerraform(struct?: EnableManagementServiceHttpsAclV4ListVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServiceHttpsAclV4ListVeCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV4ListVeCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsAclV4ListVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV4ListVeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsAclV4ListVeCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsAclV4ListVeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV4ListVeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV4ListVeCfgOutputReference {
    return new EnableManagementServiceHttpsAclV4ListVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV4ListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#acl_id EnableManagementServiceHttps#acl_id}
  */
  readonly aclId: number;
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#all_data_intf EnableManagementServiceHttps#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#management EnableManagementServiceHttps#management}
  */
  readonly management?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#user_tag EnableManagementServiceHttps#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#uuid EnableManagementServiceHttps#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#eth_cfg EnableManagementServiceHttps#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServiceHttpsAclV4ListEthCfg[] | cdktf.IResolvable;
  /**
  * lif_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#lif_cfg EnableManagementServiceHttps#lif_cfg}
  */
  readonly lifCfg?: EnableManagementServiceHttpsAclV4ListLifCfg;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_cfg EnableManagementServiceHttps#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServiceHttpsAclV4ListTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_cfg EnableManagementServiceHttps#ve_cfg}
  */
  readonly veCfg?: EnableManagementServiceHttpsAclV4ListVeCfg[] | cdktf.IResolvable;
}

export function enableManagementServiceHttpsAclV4ListStructToTerraform(struct?: EnableManagementServiceHttpsAclV4ListStruct | cdktf.IResolvable): any {
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
    eth_cfg: cdktf.listMapper(enableManagementServiceHttpsAclV4ListEthCfgToTerraform, true)(struct!.ethCfg),
    lif_cfg: enableManagementServiceHttpsAclV4ListLifCfgToTerraform(struct!.lifCfg),
    tunnel_cfg: cdktf.listMapper(enableManagementServiceHttpsAclV4ListTunnelCfgToTerraform, true)(struct!.tunnelCfg),
    ve_cfg: cdktf.listMapper(enableManagementServiceHttpsAclV4ListVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function enableManagementServiceHttpsAclV4ListStructToHclTerraform(struct?: EnableManagementServiceHttpsAclV4ListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV4ListEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV4ListEthCfgList",
    },
    lif_cfg: {
      value: enableManagementServiceHttpsAclV4ListLifCfgToHclTerraform(struct!.lifCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV4ListLifCfgList",
    },
    tunnel_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV4ListTunnelCfgToHclTerraform, true)(struct!.tunnelCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV4ListTunnelCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV4ListVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV4ListVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceHttpsAclV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV4ListStruct | cdktf.IResolvable | undefined {
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
    if (this._lifCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifCfg = this._lifCfg?.internalValue;
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

  public set internalValue(value: EnableManagementServiceHttpsAclV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclId = undefined;
      this._allDataIntf = undefined;
      this._management = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._lifCfg.internalValue = undefined;
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
      this._lifCfg.internalValue = value.lifCfg;
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
  private _ethCfg = new EnableManagementServiceHttpsAclV4ListEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServiceHttpsAclV4ListEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // lif_cfg - computed: false, optional: true, required: false
  private _lifCfg = new EnableManagementServiceHttpsAclV4ListLifCfgOutputReference(this, "lif_cfg");
  public get lifCfg() {
    return this._lifCfg;
  }
  public putLifCfg(value: EnableManagementServiceHttpsAclV4ListLifCfg) {
    this._lifCfg.internalValue = value;
  }
  public resetLifCfg() {
    this._lifCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifCfgInput() {
    return this._lifCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new EnableManagementServiceHttpsAclV4ListTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServiceHttpsAclV4ListTunnelCfg[] | cdktf.IResolvable) {
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
  private _veCfg = new EnableManagementServiceHttpsAclV4ListVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServiceHttpsAclV4ListVeCfg[] | cdktf.IResolvable) {
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

export class EnableManagementServiceHttpsAclV4ListStructList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV4ListStructOutputReference {
    return new EnableManagementServiceHttpsAclV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV6ListEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ethernet_end EnableManagementServiceHttps#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ethernet_start EnableManagementServiceHttps#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServiceHttpsAclV6ListEthCfgToTerraform(struct?: EnableManagementServiceHttpsAclV6ListEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServiceHttpsAclV6ListEthCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV6ListEthCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsAclV6ListEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV6ListEthCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsAclV6ListEthCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsAclV6ListEthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV6ListEthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV6ListEthCfgOutputReference {
    return new EnableManagementServiceHttpsAclV6ListEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV6ListLifCfg {
  /**
  * Lif name (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#lif EnableManagementServiceHttps#lif}
  */
  readonly lif?: string;
}

export function enableManagementServiceHttpsAclV6ListLifCfgToTerraform(struct?: EnableManagementServiceHttpsAclV6ListLifCfgOutputReference | EnableManagementServiceHttpsAclV6ListLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
  }
}


export function enableManagementServiceHttpsAclV6ListLifCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV6ListLifCfgOutputReference | EnableManagementServiceHttpsAclV6ListLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceHttpsAclV6ListLifCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableManagementServiceHttpsAclV6ListLifCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceHttpsAclV6ListLifCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lif = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lif = value.lif;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }
}
export interface EnableManagementServiceHttpsAclV6ListTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_end EnableManagementServiceHttps#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_start EnableManagementServiceHttps#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServiceHttpsAclV6ListTunnelCfgToTerraform(struct?: EnableManagementServiceHttpsAclV6ListTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServiceHttpsAclV6ListTunnelCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV6ListTunnelCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsAclV6ListTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV6ListTunnelCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsAclV6ListTunnelCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsAclV6ListTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV6ListTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV6ListTunnelCfgOutputReference {
    return new EnableManagementServiceHttpsAclV6ListTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV6ListVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_end EnableManagementServiceHttps#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_start EnableManagementServiceHttps#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServiceHttpsAclV6ListVeCfgToTerraform(struct?: EnableManagementServiceHttpsAclV6ListVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServiceHttpsAclV6ListVeCfgToHclTerraform(struct?: EnableManagementServiceHttpsAclV6ListVeCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsAclV6ListVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV6ListVeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsAclV6ListVeCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsAclV6ListVeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV6ListVeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV6ListVeCfgOutputReference {
    return new EnableManagementServiceHttpsAclV6ListVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsAclV6ListStruct {
  /**
  * ACL name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#acl_name EnableManagementServiceHttps#acl_name}
  */
  readonly aclName: string;
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#all_data_intf EnableManagementServiceHttps#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#management EnableManagementServiceHttps#management}
  */
  readonly management?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#user_tag EnableManagementServiceHttps#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#uuid EnableManagementServiceHttps#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#eth_cfg EnableManagementServiceHttps#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServiceHttpsAclV6ListEthCfg[] | cdktf.IResolvable;
  /**
  * lif_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#lif_cfg EnableManagementServiceHttps#lif_cfg}
  */
  readonly lifCfg?: EnableManagementServiceHttpsAclV6ListLifCfg;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_cfg EnableManagementServiceHttps#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServiceHttpsAclV6ListTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_cfg EnableManagementServiceHttps#ve_cfg}
  */
  readonly veCfg?: EnableManagementServiceHttpsAclV6ListVeCfg[] | cdktf.IResolvable;
}

export function enableManagementServiceHttpsAclV6ListStructToTerraform(struct?: EnableManagementServiceHttpsAclV6ListStruct | cdktf.IResolvable): any {
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
    eth_cfg: cdktf.listMapper(enableManagementServiceHttpsAclV6ListEthCfgToTerraform, true)(struct!.ethCfg),
    lif_cfg: enableManagementServiceHttpsAclV6ListLifCfgToTerraform(struct!.lifCfg),
    tunnel_cfg: cdktf.listMapper(enableManagementServiceHttpsAclV6ListTunnelCfgToTerraform, true)(struct!.tunnelCfg),
    ve_cfg: cdktf.listMapper(enableManagementServiceHttpsAclV6ListVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function enableManagementServiceHttpsAclV6ListStructToHclTerraform(struct?: EnableManagementServiceHttpsAclV6ListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV6ListEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV6ListEthCfgList",
    },
    lif_cfg: {
      value: enableManagementServiceHttpsAclV6ListLifCfgToHclTerraform(struct!.lifCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV6ListLifCfgList",
    },
    tunnel_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV6ListTunnelCfgToHclTerraform, true)(struct!.tunnelCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV6ListTunnelCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV6ListVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "EnableManagementServiceHttpsAclV6ListVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceHttpsAclV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsAclV6ListStruct | cdktf.IResolvable | undefined {
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
    if (this._lifCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifCfg = this._lifCfg?.internalValue;
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

  public set internalValue(value: EnableManagementServiceHttpsAclV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._allDataIntf = undefined;
      this._management = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._lifCfg.internalValue = undefined;
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
      this._lifCfg.internalValue = value.lifCfg;
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
  private _ethCfg = new EnableManagementServiceHttpsAclV6ListEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServiceHttpsAclV6ListEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // lif_cfg - computed: false, optional: true, required: false
  private _lifCfg = new EnableManagementServiceHttpsAclV6ListLifCfgOutputReference(this, "lif_cfg");
  public get lifCfg() {
    return this._lifCfg;
  }
  public putLifCfg(value: EnableManagementServiceHttpsAclV6ListLifCfg) {
    this._lifCfg.internalValue = value;
  }
  public resetLifCfg() {
    this._lifCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifCfgInput() {
    return this._lifCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new EnableManagementServiceHttpsAclV6ListTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServiceHttpsAclV6ListTunnelCfg[] | cdktf.IResolvable) {
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
  private _veCfg = new EnableManagementServiceHttpsAclV6ListVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServiceHttpsAclV6ListVeCfg[] | cdktf.IResolvable) {
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

export class EnableManagementServiceHttpsAclV6ListStructList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsAclV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsAclV6ListStructOutputReference {
    return new EnableManagementServiceHttpsAclV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ethernet_end EnableManagementServiceHttps#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ethernet_start EnableManagementServiceHttps#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServiceHttpsEthCfgToTerraform(struct?: EnableManagementServiceHttpsEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServiceHttpsEthCfgToHclTerraform(struct?: EnableManagementServiceHttpsEthCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsEthCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsEthCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsEthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsEthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsEthCfgOutputReference {
    return new EnableManagementServiceHttpsEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsLifCfg {
  /**
  * Lif name (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#lif EnableManagementServiceHttps#lif}
  */
  readonly lif?: string;
}

export function enableManagementServiceHttpsLifCfgToTerraform(struct?: EnableManagementServiceHttpsLifCfgOutputReference | EnableManagementServiceHttpsLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
  }
}


export function enableManagementServiceHttpsLifCfgToHclTerraform(struct?: EnableManagementServiceHttpsLifCfgOutputReference | EnableManagementServiceHttpsLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnableManagementServiceHttpsLifCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnableManagementServiceHttpsLifCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnableManagementServiceHttpsLifCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lif = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lif = value.lif;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }
}
export interface EnableManagementServiceHttpsTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_end EnableManagementServiceHttps#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#tunnel_start EnableManagementServiceHttps#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServiceHttpsTunnelCfgToTerraform(struct?: EnableManagementServiceHttpsTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServiceHttpsTunnelCfgToHclTerraform(struct?: EnableManagementServiceHttpsTunnelCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsTunnelCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsTunnelCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsTunnelCfgOutputReference {
    return new EnableManagementServiceHttpsTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServiceHttpsVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_end EnableManagementServiceHttps#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#ve_start EnableManagementServiceHttps#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServiceHttpsVeCfgToTerraform(struct?: EnableManagementServiceHttpsVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServiceHttpsVeCfgToHclTerraform(struct?: EnableManagementServiceHttpsVeCfg | cdktf.IResolvable): any {
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

export class EnableManagementServiceHttpsVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServiceHttpsVeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServiceHttpsVeCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServiceHttpsVeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServiceHttpsVeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServiceHttpsVeCfgOutputReference {
    return new EnableManagementServiceHttpsVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https thunder_enable_management_service_https}
*/
export class EnableManagementServiceHttps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_enable_management_service_https";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnableManagementServiceHttps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnableManagementServiceHttps to import
  * @param importFromId The id of the existing EnableManagementServiceHttps that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnableManagementServiceHttps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_enable_management_service_https", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/enable_management_service_https thunder_enable_management_service_https} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnableManagementServiceHttpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnableManagementServiceHttpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_enable_management_service_https',
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
    this._allDataIntf = config.allDataIntf;
    this._id = config.id;
    this._uuid = config.uuid;
    this._aclV4List.internalValue = config.aclV4List;
    this._aclV6List.internalValue = config.aclV6List;
    this._ethCfg.internalValue = config.ethCfg;
    this._lifCfg.internalValue = config.lifCfg;
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
  private _aclV4List = new EnableManagementServiceHttpsAclV4ListStructList(this, "acl_v4_list", false);
  public get aclV4List() {
    return this._aclV4List;
  }
  public putAclV4List(value: EnableManagementServiceHttpsAclV4ListStruct[] | cdktf.IResolvable) {
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
  private _aclV6List = new EnableManagementServiceHttpsAclV6ListStructList(this, "acl_v6_list", false);
  public get aclV6List() {
    return this._aclV6List;
  }
  public putAclV6List(value: EnableManagementServiceHttpsAclV6ListStruct[] | cdktf.IResolvable) {
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
  private _ethCfg = new EnableManagementServiceHttpsEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServiceHttpsEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // lif_cfg - computed: false, optional: true, required: false
  private _lifCfg = new EnableManagementServiceHttpsLifCfgOutputReference(this, "lif_cfg");
  public get lifCfg() {
    return this._lifCfg;
  }
  public putLifCfg(value: EnableManagementServiceHttpsLifCfg) {
    this._lifCfg.internalValue = value;
  }
  public resetLifCfg() {
    this._lifCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifCfgInput() {
    return this._lifCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new EnableManagementServiceHttpsTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServiceHttpsTunnelCfg[] | cdktf.IResolvable) {
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
  private _veCfg = new EnableManagementServiceHttpsVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServiceHttpsVeCfg[] | cdktf.IResolvable) {
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
      acl_v4_list: cdktf.listMapper(enableManagementServiceHttpsAclV4ListStructToTerraform, true)(this._aclV4List.internalValue),
      acl_v6_list: cdktf.listMapper(enableManagementServiceHttpsAclV6ListStructToTerraform, true)(this._aclV6List.internalValue),
      eth_cfg: cdktf.listMapper(enableManagementServiceHttpsEthCfgToTerraform, true)(this._ethCfg.internalValue),
      lif_cfg: enableManagementServiceHttpsLifCfgToTerraform(this._lifCfg.internalValue),
      tunnel_cfg: cdktf.listMapper(enableManagementServiceHttpsTunnelCfgToTerraform, true)(this._tunnelCfg.internalValue),
      ve_cfg: cdktf.listMapper(enableManagementServiceHttpsVeCfgToTerraform, true)(this._veCfg.internalValue),
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
        value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV4ListStructToHclTerraform, true)(this._aclV4List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceHttpsAclV4ListStructList",
      },
      acl_v6_list: {
        value: cdktf.listMapperHcl(enableManagementServiceHttpsAclV6ListStructToHclTerraform, true)(this._aclV6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceHttpsAclV6ListStructList",
      },
      eth_cfg: {
        value: cdktf.listMapperHcl(enableManagementServiceHttpsEthCfgToHclTerraform, true)(this._ethCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceHttpsEthCfgList",
      },
      lif_cfg: {
        value: enableManagementServiceHttpsLifCfgToHclTerraform(this._lifCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceHttpsLifCfgList",
      },
      tunnel_cfg: {
        value: cdktf.listMapperHcl(enableManagementServiceHttpsTunnelCfgToHclTerraform, true)(this._tunnelCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceHttpsTunnelCfgList",
      },
      ve_cfg: {
        value: cdktf.listMapperHcl(enableManagementServiceHttpsVeCfgToHclTerraform, true)(this._veCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServiceHttpsVeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
