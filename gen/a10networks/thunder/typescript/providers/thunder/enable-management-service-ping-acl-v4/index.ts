// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnableManagementServicePingAclV4Config extends cdktf.TerraformMetaArguments {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#acl_id EnableManagementServicePingAclV4#acl_id}
  */
  readonly aclId: number;
  /**
  * All Data Interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#all_data_intf EnableManagementServicePingAclV4#all_data_intf}
  */
  readonly allDataIntf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#id EnableManagementServicePingAclV4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#management EnableManagementServicePingAclV4#management}
  */
  readonly management?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#user_tag EnableManagementServicePingAclV4#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#uuid EnableManagementServicePingAclV4#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#eth_cfg EnableManagementServicePingAclV4#eth_cfg}
  */
  readonly ethCfg?: EnableManagementServicePingAclV4EthCfg[] | cdktf.IResolvable;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#tunnel_cfg EnableManagementServicePingAclV4#tunnel_cfg}
  */
  readonly tunnelCfg?: EnableManagementServicePingAclV4TunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#ve_cfg EnableManagementServicePingAclV4#ve_cfg}
  */
  readonly veCfg?: EnableManagementServicePingAclV4VeCfg[] | cdktf.IResolvable;
}
export interface EnableManagementServicePingAclV4EthCfg {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#ethernet_end EnableManagementServicePingAclV4#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#ethernet_start EnableManagementServicePingAclV4#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function enableManagementServicePingAclV4EthCfgToTerraform(struct?: EnableManagementServicePingAclV4EthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function enableManagementServicePingAclV4EthCfgToHclTerraform(struct?: EnableManagementServicePingAclV4EthCfg | cdktf.IResolvable): any {
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

export class EnableManagementServicePingAclV4EthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServicePingAclV4EthCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServicePingAclV4EthCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServicePingAclV4EthCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServicePingAclV4EthCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServicePingAclV4EthCfgOutputReference {
    return new EnableManagementServicePingAclV4EthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServicePingAclV4TunnelCfg {
  /**
  * tunnel port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#tunnel_end EnableManagementServicePingAclV4#tunnel_end}
  */
  readonly tunnelEnd?: number;
  /**
  * tunnel port (tunnel Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#tunnel_start EnableManagementServicePingAclV4#tunnel_start}
  */
  readonly tunnelStart?: number;
}

export function enableManagementServicePingAclV4TunnelCfgToTerraform(struct?: EnableManagementServicePingAclV4TunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_end: cdktf.numberToTerraform(struct!.tunnelEnd),
    tunnel_start: cdktf.numberToTerraform(struct!.tunnelStart),
  }
}


export function enableManagementServicePingAclV4TunnelCfgToHclTerraform(struct?: EnableManagementServicePingAclV4TunnelCfg | cdktf.IResolvable): any {
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

export class EnableManagementServicePingAclV4TunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServicePingAclV4TunnelCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServicePingAclV4TunnelCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServicePingAclV4TunnelCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServicePingAclV4TunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServicePingAclV4TunnelCfgOutputReference {
    return new EnableManagementServicePingAclV4TunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnableManagementServicePingAclV4VeCfg {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#ve_end EnableManagementServicePingAclV4#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#ve_start EnableManagementServicePingAclV4#ve_start}
  */
  readonly veStart?: number;
}

export function enableManagementServicePingAclV4VeCfgToTerraform(struct?: EnableManagementServicePingAclV4VeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function enableManagementServicePingAclV4VeCfgToHclTerraform(struct?: EnableManagementServicePingAclV4VeCfg | cdktf.IResolvable): any {
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

export class EnableManagementServicePingAclV4VeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnableManagementServicePingAclV4VeCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnableManagementServicePingAclV4VeCfg | cdktf.IResolvable | undefined) {
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

export class EnableManagementServicePingAclV4VeCfgList extends cdktf.ComplexList {
  public internalValue? : EnableManagementServicePingAclV4VeCfg[] | cdktf.IResolvable

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
  public get(index: number): EnableManagementServicePingAclV4VeCfgOutputReference {
    return new EnableManagementServicePingAclV4VeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4 thunder_enable_management_service_ping_acl_v4}
*/
export class EnableManagementServicePingAclV4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_enable_management_service_ping_acl_v4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnableManagementServicePingAclV4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnableManagementServicePingAclV4 to import
  * @param importFromId The id of the existing EnableManagementServicePingAclV4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnableManagementServicePingAclV4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_enable_management_service_ping_acl_v4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_management_service_ping_acl_v4 thunder_enable_management_service_ping_acl_v4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnableManagementServicePingAclV4Config
  */
  public constructor(scope: Construct, id: string, config: EnableManagementServicePingAclV4Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_enable_management_service_ping_acl_v4',
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
    this._aclId = config.aclId;
    this._allDataIntf = config.allDataIntf;
    this._id = config.id;
    this._management = config.management;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ethCfg.internalValue = config.ethCfg;
    this._tunnelCfg.internalValue = config.tunnelCfg;
    this._veCfg.internalValue = config.veCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _ethCfg = new EnableManagementServicePingAclV4EthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: EnableManagementServicePingAclV4EthCfg[] | cdktf.IResolvable) {
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
  private _tunnelCfg = new EnableManagementServicePingAclV4TunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: EnableManagementServicePingAclV4TunnelCfg[] | cdktf.IResolvable) {
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
  private _veCfg = new EnableManagementServicePingAclV4VeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: EnableManagementServicePingAclV4VeCfg[] | cdktf.IResolvable) {
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
      acl_id: cdktf.numberToTerraform(this._aclId),
      all_data_intf: cdktf.numberToTerraform(this._allDataIntf),
      id: cdktf.stringToTerraform(this._id),
      management: cdktf.numberToTerraform(this._management),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      eth_cfg: cdktf.listMapper(enableManagementServicePingAclV4EthCfgToTerraform, true)(this._ethCfg.internalValue),
      tunnel_cfg: cdktf.listMapper(enableManagementServicePingAclV4TunnelCfgToTerraform, true)(this._tunnelCfg.internalValue),
      ve_cfg: cdktf.listMapper(enableManagementServicePingAclV4VeCfgToTerraform, true)(this._veCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_id: {
        value: cdktf.numberToHclTerraform(this._aclId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      eth_cfg: {
        value: cdktf.listMapperHcl(enableManagementServicePingAclV4EthCfgToHclTerraform, true)(this._ethCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServicePingAclV4EthCfgList",
      },
      tunnel_cfg: {
        value: cdktf.listMapperHcl(enableManagementServicePingAclV4TunnelCfgToHclTerraform, true)(this._tunnelCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServicePingAclV4TunnelCfgList",
      },
      ve_cfg: {
        value: cdktf.listMapperHcl(enableManagementServicePingAclV4VeCfgToHclTerraform, true)(this._veCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnableManagementServicePingAclV4VeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
