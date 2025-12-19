// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVirtualWireVlanPairSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#id NetworkVirtualWireVlanPairSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * virtual wire vlan set id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#set_id NetworkVirtualWireVlanPairSet#set_id}
  */
  readonly setId: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#user_tag NetworkVirtualWireVlanPairSet#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#uuid NetworkVirtualWireVlanPairSet#uuid}
  */
  readonly uuid?: string;
  /**
  * set_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#set_cfg NetworkVirtualWireVlanPairSet#set_cfg}
  */
  readonly setCfg?: NetworkVirtualWireVlanPairSetSetCfg[] | cdktf.IResolvable;
}
export interface NetworkVirtualWireVlanPairSetSetCfg {
  /**
  * virtual wire vlan pair id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#virtual_wire_vlan_pair NetworkVirtualWireVlanPairSet#virtual_wire_vlan_pair}
  */
  readonly virtualWireVlanPair?: number;
}

export function networkVirtualWireVlanPairSetSetCfgToTerraform(struct?: NetworkVirtualWireVlanPairSetSetCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_wire_vlan_pair: cdktf.numberToTerraform(struct!.virtualWireVlanPair),
  }
}


export function networkVirtualWireVlanPairSetSetCfgToHclTerraform(struct?: NetworkVirtualWireVlanPairSetSetCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_wire_vlan_pair: {
      value: cdktf.numberToHclTerraform(struct!.virtualWireVlanPair),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualWireVlanPairSetSetCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVirtualWireVlanPairSetSetCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualWireVlanPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualWireVlanPair = this._virtualWireVlanPair;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualWireVlanPairSetSetCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualWireVlanPair = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualWireVlanPair = value.virtualWireVlanPair;
    }
  }

  // virtual_wire_vlan_pair - computed: false, optional: true, required: false
  private _virtualWireVlanPair?: number; 
  public get virtualWireVlanPair() {
    return this.getNumberAttribute('virtual_wire_vlan_pair');
  }
  public set virtualWireVlanPair(value: number) {
    this._virtualWireVlanPair = value;
  }
  public resetVirtualWireVlanPair() {
    this._virtualWireVlanPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireVlanPairInput() {
    return this._virtualWireVlanPair;
  }
}

export class NetworkVirtualWireVlanPairSetSetCfgList extends cdktf.ComplexList {
  public internalValue? : NetworkVirtualWireVlanPairSetSetCfg[] | cdktf.IResolvable

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
  public get(index: number): NetworkVirtualWireVlanPairSetSetCfgOutputReference {
    return new NetworkVirtualWireVlanPairSetSetCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set thunder_network_virtual_wire_vlan_pair_set}
*/
export class NetworkVirtualWireVlanPairSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_vlan_pair_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVirtualWireVlanPairSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVirtualWireVlanPairSet to import
  * @param importFromId The id of the existing NetworkVirtualWireVlanPairSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVirtualWireVlanPairSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_vlan_pair_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_vlan_pair_set thunder_network_virtual_wire_vlan_pair_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVirtualWireVlanPairSetConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVirtualWireVlanPairSetConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_vlan_pair_set',
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
    this._setId = config.setId;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._setCfg.internalValue = config.setCfg;
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

  // set_id - computed: false, optional: false, required: true
  private _setId?: number; 
  public get setId() {
    return this.getNumberAttribute('set_id');
  }
  public set setId(value: number) {
    this._setId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
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

  // set_cfg - computed: false, optional: true, required: false
  private _setCfg = new NetworkVirtualWireVlanPairSetSetCfgList(this, "set_cfg", false);
  public get setCfg() {
    return this._setCfg;
  }
  public putSetCfg(value: NetworkVirtualWireVlanPairSetSetCfg[] | cdktf.IResolvable) {
    this._setCfg.internalValue = value;
  }
  public resetSetCfg() {
    this._setCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCfgInput() {
    return this._setCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      set_id: cdktf.numberToTerraform(this._setId),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      set_cfg: cdktf.listMapper(networkVirtualWireVlanPairSetSetCfgToTerraform, true)(this._setCfg.internalValue),
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
      set_id: {
        value: cdktf.numberToHclTerraform(this._setId),
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
      set_cfg: {
        value: cdktf.listMapperHcl(networkVirtualWireVlanPairSetSetCfgToHclTerraform, true)(this._setCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVirtualWireVlanPairSetSetCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
