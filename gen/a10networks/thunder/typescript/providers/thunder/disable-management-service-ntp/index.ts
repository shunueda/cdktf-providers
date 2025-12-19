// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisableManagementServiceNtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#all_data_intf DisableManagementServiceNtp#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#id DisableManagementServiceNtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#management DisableManagementServiceNtp#management}
  */
  readonly management?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#uuid DisableManagementServiceNtp#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#eth_cfg DisableManagementServiceNtp#eth_cfg}
  */
  readonly ethCfg?: DisableManagementServiceNtpEthCfg[] | cdktf.IResolvable;
  /**
  * lif_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#lif_cfg DisableManagementServiceNtp#lif_cfg}
  */
  readonly lifCfg?: DisableManagementServiceNtpLifCfg;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#tunnel_cfg DisableManagementServiceNtp#tunnel_cfg}
  */
  readonly tunnelCfg?: DisableManagementServiceNtpTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#ve_cfg DisableManagementServiceNtp#ve_cfg}
  */
  readonly veCfg?: DisableManagementServiceNtpVeCfg[] | cdktf.IResolvable;
}
export interface DisableManagementServiceNtpEthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#ethernet_end DisableManagementServiceNtp#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#ethernet_start DisableManagementServiceNtp#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function disableManagementServiceNtpEthCfgToTerraform(struct?: DisableManagementServiceNtpEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function disableManagementServiceNtpEthCfgToHclTerraform(struct?: DisableManagementServiceNtpEthCfg | cdktf.IResolvable): any {
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

export class DisableManagementServiceNtpEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisableManagementServiceNtpEthCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DisableManagementServiceNtpEthCfg | cdktf.IResolvable | undefined) {
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

export class DisableManagementServiceNtpEthCfgList extends cdktf.ComplexList {
  public internalValue? : DisableManagementServiceNtpEthCfg[] | cdktf.IResolvable

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
  public get(index: number): DisableManagementServiceNtpEthCfgOutputReference {
    return new DisableManagementServiceNtpEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisableManagementServiceNtpLifCfg {
  /**
  * Lif name (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#lif DisableManagementServiceNtp#lif}
  */
  readonly lif?: string;
}

export function disableManagementServiceNtpLifCfgToTerraform(struct?: DisableManagementServiceNtpLifCfgOutputReference | DisableManagementServiceNtpLifCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
  }
}


export function disableManagementServiceNtpLifCfgToHclTerraform(struct?: DisableManagementServiceNtpLifCfgOutputReference | DisableManagementServiceNtpLifCfg): any {
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

export class DisableManagementServiceNtpLifCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisableManagementServiceNtpLifCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisableManagementServiceNtpLifCfg | undefined) {
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
export interface DisableManagementServiceNtpTunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#tunnel_end DisableManagementServiceNtp#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#tunnel_start DisableManagementServiceNtp#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function disableManagementServiceNtpTunnelCfgToTerraform(struct?: DisableManagementServiceNtpTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function disableManagementServiceNtpTunnelCfgToHclTerraform(struct?: DisableManagementServiceNtpTunnelCfg | cdktf.IResolvable): any {
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

export class DisableManagementServiceNtpTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisableManagementServiceNtpTunnelCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DisableManagementServiceNtpTunnelCfg | cdktf.IResolvable | undefined) {
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

export class DisableManagementServiceNtpTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : DisableManagementServiceNtpTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): DisableManagementServiceNtpTunnelCfgOutputReference {
    return new DisableManagementServiceNtpTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisableManagementServiceNtpVeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#ve_end DisableManagementServiceNtp#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#ve_start DisableManagementServiceNtp#ve_start}
  */
  readonly veStart?: number;
}

export function disableManagementServiceNtpVeCfgToTerraform(struct?: DisableManagementServiceNtpVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function disableManagementServiceNtpVeCfgToHclTerraform(struct?: DisableManagementServiceNtpVeCfg | cdktf.IResolvable): any {
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

export class DisableManagementServiceNtpVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DisableManagementServiceNtpVeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DisableManagementServiceNtpVeCfg | cdktf.IResolvable | undefined) {
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

export class DisableManagementServiceNtpVeCfgList extends cdktf.ComplexList {
  public internalValue? : DisableManagementServiceNtpVeCfg[] | cdktf.IResolvable

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
  public get(index: number): DisableManagementServiceNtpVeCfgOutputReference {
    return new DisableManagementServiceNtpVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp thunder_disable_management_service_ntp}
*/
export class DisableManagementServiceNtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_disable_management_service_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisableManagementServiceNtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisableManagementServiceNtp to import
  * @param importFromId The id of the existing DisableManagementServiceNtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisableManagementServiceNtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_disable_management_service_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/disable_management_service_ntp thunder_disable_management_service_ntp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisableManagementServiceNtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DisableManagementServiceNtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_disable_management_service_ntp',
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
    this._management = config.management;
    this._uuid = config.uuid;
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
  private _ethCfg = new DisableManagementServiceNtpEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: DisableManagementServiceNtpEthCfg[] | cdktf.IResolvable) {
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
  private _lifCfg = new DisableManagementServiceNtpLifCfgOutputReference(this, "lif_cfg");
  public get lifCfg() {
    return this._lifCfg;
  }
  public putLifCfg(value: DisableManagementServiceNtpLifCfg) {
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
  private _tunnelCfg = new DisableManagementServiceNtpTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: DisableManagementServiceNtpTunnelCfg[] | cdktf.IResolvable) {
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
  private _veCfg = new DisableManagementServiceNtpVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: DisableManagementServiceNtpVeCfg[] | cdktf.IResolvable) {
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
      management: cdktf.numberToTerraform(this._management),
      uuid: cdktf.stringToTerraform(this._uuid),
      eth_cfg: cdktf.listMapper(disableManagementServiceNtpEthCfgToTerraform, true)(this._ethCfg.internalValue),
      lif_cfg: disableManagementServiceNtpLifCfgToTerraform(this._lifCfg.internalValue),
      tunnel_cfg: cdktf.listMapper(disableManagementServiceNtpTunnelCfgToTerraform, true)(this._tunnelCfg.internalValue),
      ve_cfg: cdktf.listMapper(disableManagementServiceNtpVeCfgToTerraform, true)(this._veCfg.internalValue),
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
      management: {
        value: cdktf.numberToHclTerraform(this._management),
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
      eth_cfg: {
        value: cdktf.listMapperHcl(disableManagementServiceNtpEthCfgToHclTerraform, true)(this._ethCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisableManagementServiceNtpEthCfgList",
      },
      lif_cfg: {
        value: disableManagementServiceNtpLifCfgToHclTerraform(this._lifCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisableManagementServiceNtpLifCfgList",
      },
      tunnel_cfg: {
        value: cdktf.listMapperHcl(disableManagementServiceNtpTunnelCfgToHclTerraform, true)(this._tunnelCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisableManagementServiceNtpTunnelCfgList",
      },
      ve_cfg: {
        value: cdktf.listMapperHcl(disableManagementServiceNtpVeCfgToHclTerraform, true)(this._veCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisableManagementServiceNtpVeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
