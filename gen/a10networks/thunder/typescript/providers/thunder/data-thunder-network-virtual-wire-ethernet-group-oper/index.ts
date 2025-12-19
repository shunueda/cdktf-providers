// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkVirtualWireEthernetGroupOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#group_id DataThunderNetworkVirtualWireEthernetGroupOper#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#id DataThunderNetworkVirtualWireEthernetGroupOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#oper DataThunderNetworkVirtualWireEthernetGroupOper#oper}
  */
  readonly oper?: DataThunderNetworkVirtualWireEthernetGroupOperOper;
}
export interface DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#eth_member_num DataThunderNetworkVirtualWireEthernetGroupOper#eth_member_num}
  */
  readonly ethMemberNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#eth_member_status DataThunderNetworkVirtualWireEthernetGroupOper#eth_member_status}
  */
  readonly ethMemberStatus?: string;
}

export function dataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusToTerraform(struct?: DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_member_num: cdktf.numberToTerraform(struct!.ethMemberNum),
    eth_member_status: cdktf.stringToTerraform(struct!.ethMemberStatus),
  }
}


export function dataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusToHclTerraform(struct?: DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_member_num: {
      value: cdktf.numberToHclTerraform(struct!.ethMemberNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_member_status: {
      value: cdktf.stringToHclTerraform(struct!.ethMemberStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethMemberNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethMemberNum = this._ethMemberNum;
    }
    if (this._ethMemberStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethMemberStatus = this._ethMemberStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethMemberNum = undefined;
      this._ethMemberStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethMemberNum = value.ethMemberNum;
      this._ethMemberStatus = value.ethMemberStatus;
    }
  }

  // eth_member_num - computed: false, optional: true, required: false
  private _ethMemberNum?: number; 
  public get ethMemberNum() {
    return this.getNumberAttribute('eth_member_num');
  }
  public set ethMemberNum(value: number) {
    this._ethMemberNum = value;
  }
  public resetEthMemberNum() {
    this._ethMemberNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethMemberNumInput() {
    return this._ethMemberNum;
  }

  // eth_member_status - computed: false, optional: true, required: false
  private _ethMemberStatus?: string; 
  public get ethMemberStatus() {
    return this.getStringAttribute('eth_member_status');
  }
  public set ethMemberStatus(value: string) {
    this._ethMemberStatus = value;
  }
  public resetEthMemberStatus() {
    this._ethMemberStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethMemberStatusInput() {
    return this._ethMemberStatus;
  }
}

export class DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusOutputReference {
    return new DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#trunk_member_num DataThunderNetworkVirtualWireEthernetGroupOper#trunk_member_num}
  */
  readonly trunkMemberNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#trunk_member_status DataThunderNetworkVirtualWireEthernetGroupOper#trunk_member_status}
  */
  readonly trunkMemberStatus?: string;
}

export function dataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusToTerraform(struct?: DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk_member_num: cdktf.numberToTerraform(struct!.trunkMemberNum),
    trunk_member_status: cdktf.stringToTerraform(struct!.trunkMemberStatus),
  }
}


export function dataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusToHclTerraform(struct?: DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk_member_num: {
      value: cdktf.numberToHclTerraform(struct!.trunkMemberNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_member_status: {
      value: cdktf.stringToHclTerraform(struct!.trunkMemberStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunkMemberNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkMemberNum = this._trunkMemberNum;
    }
    if (this._trunkMemberStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkMemberStatus = this._trunkMemberStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunkMemberNum = undefined;
      this._trunkMemberStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunkMemberNum = value.trunkMemberNum;
      this._trunkMemberStatus = value.trunkMemberStatus;
    }
  }

  // trunk_member_num - computed: false, optional: true, required: false
  private _trunkMemberNum?: number; 
  public get trunkMemberNum() {
    return this.getNumberAttribute('trunk_member_num');
  }
  public set trunkMemberNum(value: number) {
    this._trunkMemberNum = value;
  }
  public resetTrunkMemberNum() {
    this._trunkMemberNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberNumInput() {
    return this._trunkMemberNum;
  }

  // trunk_member_status - computed: false, optional: true, required: false
  private _trunkMemberStatus?: string; 
  public get trunkMemberStatus() {
    return this.getStringAttribute('trunk_member_status');
  }
  public set trunkMemberStatus(value: string) {
    this._trunkMemberStatus = value;
  }
  public resetTrunkMemberStatus() {
    this._trunkMemberStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberStatusInput() {
    return this._trunkMemberStatus;
  }
}

export class DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusList extends cdktf.ComplexList {
  public internalValue? : DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus[] | cdktf.IResolvable

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
  public get(index: number): DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusOutputReference {
    return new DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderNetworkVirtualWireEthernetGroupOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#group_status DataThunderNetworkVirtualWireEthernetGroupOper#group_status}
  */
  readonly groupStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#lead_port DataThunderNetworkVirtualWireEthernetGroupOper#lead_port}
  */
  readonly leadPort?: number;
  /**
  * eth_member_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#eth_member_status DataThunderNetworkVirtualWireEthernetGroupOper#eth_member_status}
  */
  readonly ethMemberStatus?: DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus[] | cdktf.IResolvable;
  /**
  * trunk_member_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#trunk_member_status DataThunderNetworkVirtualWireEthernetGroupOper#trunk_member_status}
  */
  readonly trunkMemberStatus?: DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus[] | cdktf.IResolvable;
}

export function dataThunderNetworkVirtualWireEthernetGroupOperOperToTerraform(struct?: DataThunderNetworkVirtualWireEthernetGroupOperOperOutputReference | DataThunderNetworkVirtualWireEthernetGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_status: cdktf.stringToTerraform(struct!.groupStatus),
    lead_port: cdktf.numberToTerraform(struct!.leadPort),
    eth_member_status: cdktf.listMapper(dataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusToTerraform, true)(struct!.ethMemberStatus),
    trunk_member_status: cdktf.listMapper(dataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusToTerraform, true)(struct!.trunkMemberStatus),
  }
}


export function dataThunderNetworkVirtualWireEthernetGroupOperOperToHclTerraform(struct?: DataThunderNetworkVirtualWireEthernetGroupOperOperOutputReference | DataThunderNetworkVirtualWireEthernetGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_status: {
      value: cdktf.stringToHclTerraform(struct!.groupStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lead_port: {
      value: cdktf.numberToHclTerraform(struct!.leadPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth_member_status: {
      value: cdktf.listMapperHcl(dataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusToHclTerraform, true)(struct!.ethMemberStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusList",
    },
    trunk_member_status: {
      value: cdktf.listMapperHcl(dataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusToHclTerraform, true)(struct!.trunkMemberStatus),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkVirtualWireEthernetGroupOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkVirtualWireEthernetGroupOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupStatus = this._groupStatus;
    }
    if (this._leadPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadPort = this._leadPort;
    }
    if (this._ethMemberStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethMemberStatus = this._ethMemberStatus?.internalValue;
    }
    if (this._trunkMemberStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkMemberStatus = this._trunkMemberStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkVirtualWireEthernetGroupOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupStatus = undefined;
      this._leadPort = undefined;
      this._ethMemberStatus.internalValue = undefined;
      this._trunkMemberStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupStatus = value.groupStatus;
      this._leadPort = value.leadPort;
      this._ethMemberStatus.internalValue = value.ethMemberStatus;
      this._trunkMemberStatus.internalValue = value.trunkMemberStatus;
    }
  }

  // group_status - computed: false, optional: true, required: false
  private _groupStatus?: string; 
  public get groupStatus() {
    return this.getStringAttribute('group_status');
  }
  public set groupStatus(value: string) {
    this._groupStatus = value;
  }
  public resetGroupStatus() {
    this._groupStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupStatusInput() {
    return this._groupStatus;
  }

  // lead_port - computed: false, optional: true, required: false
  private _leadPort?: number; 
  public get leadPort() {
    return this.getNumberAttribute('lead_port');
  }
  public set leadPort(value: number) {
    this._leadPort = value;
  }
  public resetLeadPort() {
    this._leadPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadPortInput() {
    return this._leadPort;
  }

  // eth_member_status - computed: false, optional: true, required: false
  private _ethMemberStatus = new DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatusList(this, "eth_member_status", false);
  public get ethMemberStatus() {
    return this._ethMemberStatus;
  }
  public putEthMemberStatus(value: DataThunderNetworkVirtualWireEthernetGroupOperOperEthMemberStatus[] | cdktf.IResolvable) {
    this._ethMemberStatus.internalValue = value;
  }
  public resetEthMemberStatus() {
    this._ethMemberStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethMemberStatusInput() {
    return this._ethMemberStatus.internalValue;
  }

  // trunk_member_status - computed: false, optional: true, required: false
  private _trunkMemberStatus = new DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatusList(this, "trunk_member_status", false);
  public get trunkMemberStatus() {
    return this._trunkMemberStatus;
  }
  public putTrunkMemberStatus(value: DataThunderNetworkVirtualWireEthernetGroupOperOperTrunkMemberStatus[] | cdktf.IResolvable) {
    this._trunkMemberStatus.internalValue = value;
  }
  public resetTrunkMemberStatus() {
    this._trunkMemberStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberStatusInput() {
    return this._trunkMemberStatus.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper thunder_network_virtual_wire_ethernet_group_oper}
*/
export class DataThunderNetworkVirtualWireEthernetGroupOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_ethernet_group_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkVirtualWireEthernetGroupOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkVirtualWireEthernetGroupOper to import
  * @param importFromId The id of the existing DataThunderNetworkVirtualWireEthernetGroupOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkVirtualWireEthernetGroupOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_ethernet_group_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/network_virtual_wire_ethernet_group_oper thunder_network_virtual_wire_ethernet_group_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkVirtualWireEthernetGroupOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkVirtualWireEthernetGroupOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_ethernet_group_oper',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNetworkVirtualWireEthernetGroupOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetworkVirtualWireEthernetGroupOperOper) {
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
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderNetworkVirtualWireEthernetGroupOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderNetworkVirtualWireEthernetGroupOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkVirtualWireEthernetGroupOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
