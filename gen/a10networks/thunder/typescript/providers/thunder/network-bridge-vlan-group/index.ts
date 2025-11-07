// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkBridgeVlanGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bridge VLAN Group Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#bridge_vlan_group_number NetworkBridgeVlanGroup#bridge_vlan_group_number}
  */
  readonly bridgeVlanGroupNumber: number;
  /**
  * 'forward-all-traffic': Forward all traffic between bridge members; 'forward-ip-traffic': Forward only IP traffic between bridge members (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#forward_traffic NetworkBridgeVlanGroup#forward_traffic}
  */
  readonly forwardTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#id NetworkBridgeVlanGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Bridge Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#name NetworkBridgeVlanGroup#name}
  */
  readonly name?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#user_tag NetworkBridgeVlanGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#uuid NetworkBridgeVlanGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual Ethernet Port (Virtual Ethernet Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#ve NetworkBridgeVlanGroup#ve}
  */
  readonly ve?: number;
  /**
  * vlan_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#vlan_list NetworkBridgeVlanGroup#vlan_list}
  */
  readonly vlanList?: NetworkBridgeVlanGroupVlanListStruct[] | cdktf.IResolvable;
}
export interface NetworkBridgeVlanGroupVlanListStruct {
  /**
  * VLAN id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#vlan_end NetworkBridgeVlanGroup#vlan_end}
  */
  readonly vlanEnd?: number;
  /**
  * VLAN id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#vlan_start NetworkBridgeVlanGroup#vlan_start}
  */
  readonly vlanStart?: number;
}

export function networkBridgeVlanGroupVlanListStructToTerraform(struct?: NetworkBridgeVlanGroupVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_end: cdktf.numberToTerraform(struct!.vlanEnd),
    vlan_start: cdktf.numberToTerraform(struct!.vlanStart),
  }
}


export function networkBridgeVlanGroupVlanListStructToHclTerraform(struct?: NetworkBridgeVlanGroupVlanListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_end: {
      value: cdktf.numberToHclTerraform(struct!.vlanEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_start: {
      value: cdktf.numberToHclTerraform(struct!.vlanStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkBridgeVlanGroupVlanListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkBridgeVlanGroupVlanListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanEnd = this._vlanEnd;
    }
    if (this._vlanStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanStart = this._vlanStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkBridgeVlanGroupVlanListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanEnd = undefined;
      this._vlanStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanEnd = value.vlanEnd;
      this._vlanStart = value.vlanStart;
    }
  }

  // vlan_end - computed: false, optional: true, required: false
  private _vlanEnd?: number; 
  public get vlanEnd() {
    return this.getNumberAttribute('vlan_end');
  }
  public set vlanEnd(value: number) {
    this._vlanEnd = value;
  }
  public resetVlanEnd() {
    this._vlanEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEndInput() {
    return this._vlanEnd;
  }

  // vlan_start - computed: false, optional: true, required: false
  private _vlanStart?: number; 
  public get vlanStart() {
    return this.getNumberAttribute('vlan_start');
  }
  public set vlanStart(value: number) {
    this._vlanStart = value;
  }
  public resetVlanStart() {
    this._vlanStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanStartInput() {
    return this._vlanStart;
  }
}

export class NetworkBridgeVlanGroupVlanListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkBridgeVlanGroupVlanListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkBridgeVlanGroupVlanListStructOutputReference {
    return new NetworkBridgeVlanGroupVlanListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group thunder_network_bridge_vlan_group}
*/
export class NetworkBridgeVlanGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_bridge_vlan_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkBridgeVlanGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkBridgeVlanGroup to import
  * @param importFromId The id of the existing NetworkBridgeVlanGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkBridgeVlanGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_bridge_vlan_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_bridge_vlan_group thunder_network_bridge_vlan_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkBridgeVlanGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkBridgeVlanGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_bridge_vlan_group',
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
    this._bridgeVlanGroupNumber = config.bridgeVlanGroupNumber;
    this._forwardTraffic = config.forwardTraffic;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._vlanList.internalValue = config.vlanList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_vlan_group_number - computed: false, optional: false, required: true
  private _bridgeVlanGroupNumber?: number; 
  public get bridgeVlanGroupNumber() {
    return this.getNumberAttribute('bridge_vlan_group_number');
  }
  public set bridgeVlanGroupNumber(value: number) {
    this._bridgeVlanGroupNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeVlanGroupNumberInput() {
    return this._bridgeVlanGroupNumber;
  }

  // forward_traffic - computed: false, optional: true, required: false
  private _forwardTraffic?: string; 
  public get forwardTraffic() {
    return this.getStringAttribute('forward_traffic');
  }
  public set forwardTraffic(value: string) {
    this._forwardTraffic = value;
  }
  public resetForwardTraffic() {
    this._forwardTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficInput() {
    return this._forwardTraffic;
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

  // vlan_list - computed: false, optional: true, required: false
  private _vlanList = new NetworkBridgeVlanGroupVlanListStructList(this, "vlan_list", false);
  public get vlanList() {
    return this._vlanList;
  }
  public putVlanList(value: NetworkBridgeVlanGroupVlanListStruct[] | cdktf.IResolvable) {
    this._vlanList.internalValue = value;
  }
  public resetVlanList() {
    this._vlanList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanListInput() {
    return this._vlanList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_vlan_group_number: cdktf.numberToTerraform(this._bridgeVlanGroupNumber),
      forward_traffic: cdktf.stringToTerraform(this._forwardTraffic),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      vlan_list: cdktf.listMapper(networkBridgeVlanGroupVlanListStructToTerraform, true)(this._vlanList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_vlan_group_number: {
        value: cdktf.numberToHclTerraform(this._bridgeVlanGroupNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_traffic: {
        value: cdktf.stringToHclTerraform(this._forwardTraffic),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_list: {
        value: cdktf.listMapperHcl(networkBridgeVlanGroupVlanListStructToHclTerraform, true)(this._vlanList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkBridgeVlanGroupVlanListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
