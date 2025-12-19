// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAInterfaceTrunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * both a router and server interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#both VrrpAInterfaceTrunk#both}
  */
  readonly both?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#id VrrpAInterfaceTrunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * do not send out heartbeat packet from this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#no_heartbeat VrrpAInterfaceTrunk#no_heartbeat}
  */
  readonly noHeartbeat?: number;
  /**
  * interface to upstream router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#router_interface VrrpAInterfaceTrunk#router_interface}
  */
  readonly routerInterface?: number;
  /**
  * interface to real server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#server_interface VrrpAInterfaceTrunk#server_interface}
  */
  readonly serverInterface?: number;
  /**
  * Ethernet Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#trunk_val VrrpAInterfaceTrunk#trunk_val}
  */
  readonly trunkVal: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#user_tag VrrpAInterfaceTrunk#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#uuid VrrpAInterfaceTrunk#uuid}
  */
  readonly uuid?: string;
  /**
  * vlan_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#vlan_cfg VrrpAInterfaceTrunk#vlan_cfg}
  */
  readonly vlanCfg?: VrrpAInterfaceTrunkVlanCfg[] | cdktf.IResolvable;
}
export interface VrrpAInterfaceTrunkVlanCfg {
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#vlan VrrpAInterfaceTrunk#vlan}
  */
  readonly vlan?: number;
}

export function vrrpAInterfaceTrunkVlanCfgToTerraform(struct?: VrrpAInterfaceTrunkVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vrrpAInterfaceTrunkVlanCfgToHclTerraform(struct?: VrrpAInterfaceTrunkVlanCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAInterfaceTrunkVlanCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAInterfaceTrunkVlanCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAInterfaceTrunkVlanCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlan = value.vlan;
    }
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
}

export class VrrpAInterfaceTrunkVlanCfgList extends cdktf.ComplexList {
  public internalValue? : VrrpAInterfaceTrunkVlanCfg[] | cdktf.IResolvable

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
  public get(index: number): VrrpAInterfaceTrunkVlanCfgOutputReference {
    return new VrrpAInterfaceTrunkVlanCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk thunder_vrrp_a_interface_trunk}
*/
export class VrrpAInterfaceTrunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_interface_trunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAInterfaceTrunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAInterfaceTrunk to import
  * @param importFromId The id of the existing VrrpAInterfaceTrunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAInterfaceTrunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_interface_trunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_interface_trunk thunder_vrrp_a_interface_trunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAInterfaceTrunkConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAInterfaceTrunkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_interface_trunk',
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
    this._both = config.both;
    this._id = config.id;
    this._noHeartbeat = config.noHeartbeat;
    this._routerInterface = config.routerInterface;
    this._serverInterface = config.serverInterface;
    this._trunkVal = config.trunkVal;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vlanCfg.internalValue = config.vlanCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // both - computed: false, optional: true, required: false
  private _both?: number; 
  public get both() {
    return this.getNumberAttribute('both');
  }
  public set both(value: number) {
    this._both = value;
  }
  public resetBoth() {
    this._both = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both;
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

  // no_heartbeat - computed: false, optional: true, required: false
  private _noHeartbeat?: number; 
  public get noHeartbeat() {
    return this.getNumberAttribute('no_heartbeat');
  }
  public set noHeartbeat(value: number) {
    this._noHeartbeat = value;
  }
  public resetNoHeartbeat() {
    this._noHeartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeartbeatInput() {
    return this._noHeartbeat;
  }

  // router_interface - computed: false, optional: true, required: false
  private _routerInterface?: number; 
  public get routerInterface() {
    return this.getNumberAttribute('router_interface');
  }
  public set routerInterface(value: number) {
    this._routerInterface = value;
  }
  public resetRouterInterface() {
    this._routerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInterfaceInput() {
    return this._routerInterface;
  }

  // server_interface - computed: false, optional: true, required: false
  private _serverInterface?: number; 
  public get serverInterface() {
    return this.getNumberAttribute('server_interface');
  }
  public set serverInterface(value: number) {
    this._serverInterface = value;
  }
  public resetServerInterface() {
    this._serverInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInterfaceInput() {
    return this._serverInterface;
  }

  // trunk_val - computed: false, optional: false, required: true
  private _trunkVal?: number; 
  public get trunkVal() {
    return this.getNumberAttribute('trunk_val');
  }
  public set trunkVal(value: number) {
    this._trunkVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkValInput() {
    return this._trunkVal;
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

  // vlan_cfg - computed: false, optional: true, required: false
  private _vlanCfg = new VrrpAInterfaceTrunkVlanCfgList(this, "vlan_cfg", false);
  public get vlanCfg() {
    return this._vlanCfg;
  }
  public putVlanCfg(value: VrrpAInterfaceTrunkVlanCfg[] | cdktf.IResolvable) {
    this._vlanCfg.internalValue = value;
  }
  public resetVlanCfg() {
    this._vlanCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCfgInput() {
    return this._vlanCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      both: cdktf.numberToTerraform(this._both),
      id: cdktf.stringToTerraform(this._id),
      no_heartbeat: cdktf.numberToTerraform(this._noHeartbeat),
      router_interface: cdktf.numberToTerraform(this._routerInterface),
      server_interface: cdktf.numberToTerraform(this._serverInterface),
      trunk_val: cdktf.numberToTerraform(this._trunkVal),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan_cfg: cdktf.listMapper(vrrpAInterfaceTrunkVlanCfgToTerraform, true)(this._vlanCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      both: {
        value: cdktf.numberToHclTerraform(this._both),
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
      no_heartbeat: {
        value: cdktf.numberToHclTerraform(this._noHeartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_interface: {
        value: cdktf.numberToHclTerraform(this._routerInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_interface: {
        value: cdktf.numberToHclTerraform(this._serverInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk_val: {
        value: cdktf.numberToHclTerraform(this._trunkVal),
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
      vlan_cfg: {
        value: cdktf.listMapperHcl(vrrpAInterfaceTrunkVlanCfgToHclTerraform, true)(this._vlanCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAInterfaceTrunkVlanCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
