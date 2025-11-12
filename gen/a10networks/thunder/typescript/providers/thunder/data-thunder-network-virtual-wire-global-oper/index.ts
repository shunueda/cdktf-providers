// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVirtualWireGlobalOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#id DataThunderNetworkVirtualWireGlobalOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#oper DataThunderNetworkVirtualWireGlobalOper#oper}
  */
  readonly oper?: DataThunderNetworkVirtualWireGlobalOperOper;
}
export interface DataThunderNetworkVirtualWireGlobalOperOperVlanGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#active_member DataThunderNetworkVirtualWireGlobalOper#active_member}
  */
  readonly activeMember?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#group_id DataThunderNetworkVirtualWireGlobalOper#group_id}
  */
  readonly groupId?: number;
}

export function dataThunderNetworkVirtualWireGlobalOperOperVlanGroupToTerraform(struct?: DataThunderNetworkVirtualWireGlobalOperOperVlanGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_member: cdktf.numberToTerraform(struct!.activeMember),
    group_id: cdktf.numberToTerraform(struct!.groupId),
  }
}


export function dataThunderNetworkVirtualWireGlobalOperOperVlanGroupToHclTerraform(struct?: DataThunderNetworkVirtualWireGlobalOperOperVlanGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_member: {
      value: cdktf.numberToHclTerraform(struct!.activeMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireGlobalOperOperVlanGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkVirtualWireGlobalOperOperVlanGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMember = this._activeMember;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireGlobalOperOperVlanGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeMember = undefined;
      this._groupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeMember = value.activeMember;
      this._groupId = value.groupId;
    }
  }

  // active_member - computed: false, optional: true, required: false
  private _activeMember?: number; 
  public get activeMember() {
    return this.getNumberAttribute('active_member');
  }
  public set activeMember(value: number) {
    this._activeMember = value;
  }
  public resetActiveMember() {
    this._activeMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMemberInput() {
    return this._activeMember;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }
}

export class DataThunderNetworkVirtualWireGlobalOperOperVlanGroupList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkVirtualWireGlobalOperOperVlanGroup[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkVirtualWireGlobalOperOperVlanGroupOutputReference {
    return new DataThunderNetworkVirtualWireGlobalOperOperVlanGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkVirtualWireGlobalOperOperVlanSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#active_pair DataThunderNetworkVirtualWireGlobalOper#active_pair}
  */
  readonly activePair?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#set_id DataThunderNetworkVirtualWireGlobalOper#set_id}
  */
  readonly setId?: number;
}

export function dataThunderNetworkVirtualWireGlobalOperOperVlanSetToTerraform(struct?: DataThunderNetworkVirtualWireGlobalOperOperVlanSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_pair: cdktf.numberToTerraform(struct!.activePair),
    set_id: cdktf.numberToTerraform(struct!.setId),
  }
}


export function dataThunderNetworkVirtualWireGlobalOperOperVlanSetToHclTerraform(struct?: DataThunderNetworkVirtualWireGlobalOperOperVlanSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_pair: {
      value: cdktf.numberToHclTerraform(struct!.activePair),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_id: {
      value: cdktf.numberToHclTerraform(struct!.setId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireGlobalOperOperVlanSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkVirtualWireGlobalOperOperVlanSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activePair !== undefined) {
      hasAnyValues = true;
      internalValueResult.activePair = this._activePair;
    }
    if (this._setId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setId = this._setId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireGlobalOperOperVlanSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activePair = undefined;
      this._setId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activePair = value.activePair;
      this._setId = value.setId;
    }
  }

  // active_pair - computed: false, optional: true, required: false
  private _activePair?: number; 
  public get activePair() {
    return this.getNumberAttribute('active_pair');
  }
  public set activePair(value: number) {
    this._activePair = value;
  }
  public resetActivePair() {
    this._activePair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePairInput() {
    return this._activePair;
  }

  // set_id - computed: false, optional: true, required: false
  private _setId?: number; 
  public get setId() {
    return this.getNumberAttribute('set_id');
  }
  public set setId(value: number) {
    this._setId = value;
  }
  public resetSetId() {
    this._setId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
  }
}

export class DataThunderNetworkVirtualWireGlobalOperOperVlanSetList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkVirtualWireGlobalOperOperVlanSet[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkVirtualWireGlobalOperOperVlanSetOutputReference {
    return new DataThunderNetworkVirtualWireGlobalOperOperVlanSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkVirtualWireGlobalOperOper {
  /**
  * vlan_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#vlan_group DataThunderNetworkVirtualWireGlobalOper#vlan_group}
  */
  readonly vlanGroup?: DataThunderNetworkVirtualWireGlobalOperOperVlanGroup[] | cdktf.IResolvable;
  /**
  * vlan_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#vlan_set DataThunderNetworkVirtualWireGlobalOper#vlan_set}
  */
  readonly vlanSet?: DataThunderNetworkVirtualWireGlobalOperOperVlanSet[] | cdktf.IResolvable;
}

export function dataThunderNetworkVirtualWireGlobalOperOperToTerraform(struct?: DataThunderNetworkVirtualWireGlobalOperOperOutputReference | DataThunderNetworkVirtualWireGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_group: cdktf.listMapper(dataThunderNetworkVirtualWireGlobalOperOperVlanGroupToTerraform, true)(struct!.vlanGroup),
    vlan_set: cdktf.listMapper(dataThunderNetworkVirtualWireGlobalOperOperVlanSetToTerraform, true)(struct!.vlanSet),
  }
}


export function dataThunderNetworkVirtualWireGlobalOperOperToHclTerraform(struct?: DataThunderNetworkVirtualWireGlobalOperOperOutputReference | DataThunderNetworkVirtualWireGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_group: {
      value: cdktf.listMapperHcl(dataThunderNetworkVirtualWireGlobalOperOperVlanGroupToHclTerraform, true)(struct!.vlanGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVirtualWireGlobalOperOperVlanGroupList",
    },
    vlan_set: {
      value: cdktf.listMapperHcl(dataThunderNetworkVirtualWireGlobalOperOperVlanSetToHclTerraform, true)(struct!.vlanSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVirtualWireGlobalOperOperVlanSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireGlobalOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVirtualWireGlobalOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanGroup = this._vlanGroup?.internalValue;
    }
    if (this._vlanSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSet = this._vlanSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireGlobalOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vlanGroup.internalValue = undefined;
      this._vlanSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vlanGroup.internalValue = value.vlanGroup;
      this._vlanSet.internalValue = value.vlanSet;
    }
  }

  // vlan_group - computed: false, optional: true, required: false
  private _vlanGroup = new DataThunderNetworkVirtualWireGlobalOperOperVlanGroupList(this, "vlan_group", false);
  public get vlanGroup() {
    return this._vlanGroup;
  }
  public putVlanGroup(value: DataThunderNetworkVirtualWireGlobalOperOperVlanGroup[] | cdktf.IResolvable) {
    this._vlanGroup.internalValue = value;
  }
  public resetVlanGroup() {
    this._vlanGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanGroupInput() {
    return this._vlanGroup.internalValue;
  }

  // vlan_set - computed: false, optional: true, required: false
  private _vlanSet = new DataThunderNetworkVirtualWireGlobalOperOperVlanSetList(this, "vlan_set", false);
  public get vlanSet() {
    return this._vlanSet;
  }
  public putVlanSet(value: DataThunderNetworkVirtualWireGlobalOperOperVlanSet[] | cdktf.IResolvable) {
    this._vlanSet.internalValue = value;
  }
  public resetVlanSet() {
    this._vlanSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSetInput() {
    return this._vlanSet.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper thunder_network_virtual_wire_global_oper}
*/
export class DataThunderNetworkVirtualWireGlobalOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_global_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVirtualWireGlobalOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVirtualWireGlobalOper to import
  * @param importFromId The id of the existing DataThunderNetworkVirtualWireGlobalOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVirtualWireGlobalOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_global_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_virtual_wire_global_oper thunder_network_virtual_wire_global_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVirtualWireGlobalOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVirtualWireGlobalOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_global_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNetworkVirtualWireGlobalOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkVirtualWireGlobalOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderNetworkVirtualWireGlobalOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderNetworkVirtualWireGlobalOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVirtualWireGlobalOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
