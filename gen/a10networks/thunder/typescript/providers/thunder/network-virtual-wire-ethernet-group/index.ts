// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVirtualWireEthernetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#group_id NetworkVirtualWireEthernetGroup#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#id NetworkVirtualWireEthernetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#user_tag NetworkVirtualWireEthernetGroup#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#uuid NetworkVirtualWireEthernetGroup#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#eth_list NetworkVirtualWireEthernetGroup#eth_list}
  */
  readonly ethList?: NetworkVirtualWireEthernetGroupEthListStruct[] | cdktf.IResolvable;
  /**
  * trunk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#trunk_list NetworkVirtualWireEthernetGroup#trunk_list}
  */
  readonly trunkList?: NetworkVirtualWireEthernetGroupTrunkListStruct[] | cdktf.IResolvable;
}
export interface NetworkVirtualWireEthernetGroupEthListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#eth_end NetworkVirtualWireEthernetGroup#eth_end}
  */
  readonly ethEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#eth_start NetworkVirtualWireEthernetGroup#eth_start}
  */
  readonly ethStart?: number;
}

export function networkVirtualWireEthernetGroupEthListStructToTerraform(struct?: NetworkVirtualWireEthernetGroupEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_end: cdktf.numberToTerraform(struct!.ethEnd),
    eth_start: cdktf.numberToTerraform(struct!.ethStart),
  }
}


export function networkVirtualWireEthernetGroupEthListStructToHclTerraform(struct?: NetworkVirtualWireEthernetGroupEthListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_end: {
      value: cdktf.numberToHclTerraform(struct!.ethEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_start: {
      value: cdktf.numberToHclTerraform(struct!.ethStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualWireEthernetGroupEthListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVirtualWireEthernetGroupEthListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethEnd = this._ethEnd;
    }
    if (this._ethStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethStart = this._ethStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualWireEthernetGroupEthListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethEnd = undefined;
      this._ethStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethEnd = value.ethEnd;
      this._ethStart = value.ethStart;
    }
  }

  // eth_end - computed: false, optional: true, required: false
  private _ethEnd?: number; 
  public get ethEnd() {
    return this.getNumberAttribute('eth_end');
  }
  public set ethEnd(value: number) {
    this._ethEnd = value;
  }
  public resetEthEnd() {
    this._ethEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethEndInput() {
    return this._ethEnd;
  }

  // eth_start - computed: false, optional: true, required: false
  private _ethStart?: number; 
  public get ethStart() {
    return this.getNumberAttribute('eth_start');
  }
  public set ethStart(value: number) {
    this._ethStart = value;
  }
  public resetEthStart() {
    this._ethStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethStartInput() {
    return this._ethStart;
  }
}

export class NetworkVirtualWireEthernetGroupEthListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkVirtualWireEthernetGroupEthListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkVirtualWireEthernetGroupEthListStructOutputReference {
    return new NetworkVirtualWireEthernetGroupEthListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVirtualWireEthernetGroupTrunkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#trunk_end NetworkVirtualWireEthernetGroup#trunk_end}
  */
  readonly trunkEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#trunk_start NetworkVirtualWireEthernetGroup#trunk_start}
  */
  readonly trunkStart?: number;
}

export function networkVirtualWireEthernetGroupTrunkListStructToTerraform(struct?: NetworkVirtualWireEthernetGroupTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk_end: cdktf.numberToTerraform(struct!.trunkEnd),
    trunk_start: cdktf.numberToTerraform(struct!.trunkStart),
  }
}


export function networkVirtualWireEthernetGroupTrunkListStructToHclTerraform(struct?: NetworkVirtualWireEthernetGroupTrunkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.trunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.trunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualWireEthernetGroupTrunkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVirtualWireEthernetGroupTrunkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkEnd = this._trunkEnd;
    }
    if (this._trunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkStart = this._trunkStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualWireEthernetGroupTrunkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunkEnd = undefined;
      this._trunkStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunkEnd = value.trunkEnd;
      this._trunkStart = value.trunkStart;
    }
  }

  // trunk_end - computed: false, optional: true, required: false
  private _trunkEnd?: number; 
  public get trunkEnd() {
    return this.getNumberAttribute('trunk_end');
  }
  public set trunkEnd(value: number) {
    this._trunkEnd = value;
  }
  public resetTrunkEnd() {
    this._trunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkEndInput() {
    return this._trunkEnd;
  }

  // trunk_start - computed: false, optional: true, required: false
  private _trunkStart?: number; 
  public get trunkStart() {
    return this.getNumberAttribute('trunk_start');
  }
  public set trunkStart(value: number) {
    this._trunkStart = value;
  }
  public resetTrunkStart() {
    this._trunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkStartInput() {
    return this._trunkStart;
  }
}

export class NetworkVirtualWireEthernetGroupTrunkListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkVirtualWireEthernetGroupTrunkListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkVirtualWireEthernetGroupTrunkListStructOutputReference {
    return new NetworkVirtualWireEthernetGroupTrunkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group thunder_network_virtual_wire_ethernet_group}
*/
export class NetworkVirtualWireEthernetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_ethernet_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVirtualWireEthernetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVirtualWireEthernetGroup to import
  * @param importFromId The id of the existing NetworkVirtualWireEthernetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVirtualWireEthernetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_ethernet_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_virtual_wire_ethernet_group thunder_network_virtual_wire_ethernet_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVirtualWireEthernetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVirtualWireEthernetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_ethernet_group',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ethList.internalValue = config.ethList;
    this._trunkList.internalValue = config.trunkList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // eth_list - computed: false, optional: true, required: false
  private _ethList = new NetworkVirtualWireEthernetGroupEthListStructList(this, "eth_list", false);
  public get ethList() {
    return this._ethList;
  }
  public putEthList(value: NetworkVirtualWireEthernetGroupEthListStruct[] | cdktf.IResolvable) {
    this._ethList.internalValue = value;
  }
  public resetEthList() {
    this._ethList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethListInput() {
    return this._ethList.internalValue;
  }

  // trunk_list - computed: false, optional: true, required: false
  private _trunkList = new NetworkVirtualWireEthernetGroupTrunkListStructList(this, "trunk_list", false);
  public get trunkList() {
    return this._trunkList;
  }
  public putTrunkList(value: NetworkVirtualWireEthernetGroupTrunkListStruct[] | cdktf.IResolvable) {
    this._trunkList.internalValue = value;
  }
  public resetTrunkList() {
    this._trunkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkListInput() {
    return this._trunkList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      eth_list: cdktf.listMapper(networkVirtualWireEthernetGroupEthListStructToTerraform, true)(this._ethList.internalValue),
      trunk_list: cdktf.listMapper(networkVirtualWireEthernetGroupTrunkListStructToTerraform, true)(this._trunkList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
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
      eth_list: {
        value: cdktf.listMapperHcl(networkVirtualWireEthernetGroupEthListStructToHclTerraform, true)(this._ethList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVirtualWireEthernetGroupEthListStructList",
      },
      trunk_list: {
        value: cdktf.listMapperHcl(networkVirtualWireEthernetGroupTrunkListStructToHclTerraform, true)(this._trunkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVirtualWireEthernetGroupTrunkListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
