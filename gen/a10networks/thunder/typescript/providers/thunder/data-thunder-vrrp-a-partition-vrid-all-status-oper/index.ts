// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpAPartitionVridAllStatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#id DataThunderVrrpAPartitionVridAllStatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#oper DataThunderVrrpAPartitionVridAllStatusOper#oper}
  */
  readonly oper?: DataThunderVrrpAPartitionVridAllStatusOperOper;
}
export interface DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#active_device_id DataThunderVrrpAPartitionVridAllStatusOper#active_device_id}
  */
  readonly activeDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#active_priority DataThunderVrrpAPartitionVridAllStatusOper#active_priority}
  */
  readonly activePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#active_weight DataThunderVrrpAPartitionVridAllStatusOper#active_weight}
  */
  readonly activeWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#local_device_id DataThunderVrrpAPartitionVridAllStatusOper#local_device_id}
  */
  readonly localDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#partition_name DataThunderVrrpAPartitionVridAllStatusOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#standby_device_id DataThunderVrrpAPartitionVridAllStatusOper#standby_device_id}
  */
  readonly standbyDeviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#standby_priority DataThunderVrrpAPartitionVridAllStatusOper#standby_priority}
  */
  readonly standbyPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#standby_weight DataThunderVrrpAPartitionVridAllStatusOper#standby_weight}
  */
  readonly standbyWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#vrid DataThunderVrrpAPartitionVridAllStatusOper#vrid}
  */
  readonly vrid?: number;
}

export function dataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructToTerraform(struct?: DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_device_id: cdktf.numberToTerraform(struct!.activeDeviceId),
    active_priority: cdktf.numberToTerraform(struct!.activePriority),
    active_weight: cdktf.numberToTerraform(struct!.activeWeight),
    local_device_id: cdktf.numberToTerraform(struct!.localDeviceId),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    standby_device_id: cdktf.numberToTerraform(struct!.standbyDeviceId),
    standby_priority: cdktf.numberToTerraform(struct!.standbyPriority),
    standby_weight: cdktf.numberToTerraform(struct!.standbyWeight),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function dataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructToHclTerraform(struct?: DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_device_id: {
      value: cdktf.numberToHclTerraform(struct!.activeDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_priority: {
      value: cdktf.numberToHclTerraform(struct!.activePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_weight: {
      value: cdktf.numberToHclTerraform(struct!.activeWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_device_id: {
      value: cdktf.numberToHclTerraform(struct!.localDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_device_id: {
      value: cdktf.numberToHclTerraform(struct!.standbyDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_priority: {
      value: cdktf.numberToHclTerraform(struct!.standbyPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_weight: {
      value: cdktf.numberToHclTerraform(struct!.standbyWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeviceId = this._activeDeviceId;
    }
    if (this._activePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.activePriority = this._activePriority;
    }
    if (this._activeWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeWeight = this._activeWeight;
    }
    if (this._localDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDeviceId = this._localDeviceId;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._standbyDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDeviceId = this._standbyDeviceId;
    }
    if (this._standbyPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyPriority = this._standbyPriority;
    }
    if (this._standbyWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyWeight = this._standbyWeight;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeviceId = undefined;
      this._activePriority = undefined;
      this._activeWeight = undefined;
      this._localDeviceId = undefined;
      this._partitionName = undefined;
      this._standbyDeviceId = undefined;
      this._standbyPriority = undefined;
      this._standbyWeight = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeviceId = value.activeDeviceId;
      this._activePriority = value.activePriority;
      this._activeWeight = value.activeWeight;
      this._localDeviceId = value.localDeviceId;
      this._partitionName = value.partitionName;
      this._standbyDeviceId = value.standbyDeviceId;
      this._standbyPriority = value.standbyPriority;
      this._standbyWeight = value.standbyWeight;
      this._vrid = value.vrid;
    }
  }

  // active_device_id - computed: false, optional: true, required: false
  private _activeDeviceId?: number; 
  public get activeDeviceId() {
    return this.getNumberAttribute('active_device_id');
  }
  public set activeDeviceId(value: number) {
    this._activeDeviceId = value;
  }
  public resetActiveDeviceId() {
    this._activeDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeviceIdInput() {
    return this._activeDeviceId;
  }

  // active_priority - computed: false, optional: true, required: false
  private _activePriority?: number; 
  public get activePriority() {
    return this.getNumberAttribute('active_priority');
  }
  public set activePriority(value: number) {
    this._activePriority = value;
  }
  public resetActivePriority() {
    this._activePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePriorityInput() {
    return this._activePriority;
  }

  // active_weight - computed: false, optional: true, required: false
  private _activeWeight?: number; 
  public get activeWeight() {
    return this.getNumberAttribute('active_weight');
  }
  public set activeWeight(value: number) {
    this._activeWeight = value;
  }
  public resetActiveWeight() {
    this._activeWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeWeightInput() {
    return this._activeWeight;
  }

  // local_device_id - computed: false, optional: true, required: false
  private _localDeviceId?: number; 
  public get localDeviceId() {
    return this.getNumberAttribute('local_device_id');
  }
  public set localDeviceId(value: number) {
    this._localDeviceId = value;
  }
  public resetLocalDeviceId() {
    this._localDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeviceIdInput() {
    return this._localDeviceId;
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

  // standby_device_id - computed: false, optional: true, required: false
  private _standbyDeviceId?: number; 
  public get standbyDeviceId() {
    return this.getNumberAttribute('standby_device_id');
  }
  public set standbyDeviceId(value: number) {
    this._standbyDeviceId = value;
  }
  public resetStandbyDeviceId() {
    this._standbyDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDeviceIdInput() {
    return this._standbyDeviceId;
  }

  // standby_priority - computed: false, optional: true, required: false
  private _standbyPriority?: number; 
  public get standbyPriority() {
    return this.getNumberAttribute('standby_priority');
  }
  public set standbyPriority(value: number) {
    this._standbyPriority = value;
  }
  public resetStandbyPriority() {
    this._standbyPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyPriorityInput() {
    return this._standbyPriority;
  }

  // standby_weight - computed: false, optional: true, required: false
  private _standbyWeight?: number; 
  public get standbyWeight() {
    return this.getNumberAttribute('standby_weight');
  }
  public set standbyWeight(value: number) {
    this._standbyWeight = value;
  }
  public resetStandbyWeight() {
    this._standbyWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyWeightInput() {
    return this._standbyWeight;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructOutputReference {
    return new DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpAPartitionVridAllStatusOperOper {
  /**
  * all_partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#all_partition_list DataThunderVrrpAPartitionVridAllStatusOper#all_partition_list}
  */
  readonly allPartitionList?: DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpAPartitionVridAllStatusOperOperToTerraform(struct?: DataThunderVrrpAPartitionVridAllStatusOperOperOutputReference | DataThunderVrrpAPartitionVridAllStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_partition_list: cdktf.listMapper(dataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructToTerraform, true)(struct!.allPartitionList),
  }
}


export function dataThunderVrrpAPartitionVridAllStatusOperOperToHclTerraform(struct?: DataThunderVrrpAPartitionVridAllStatusOperOperOutputReference | DataThunderVrrpAPartitionVridAllStatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_partition_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructToHclTerraform, true)(struct!.allPartitionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAPartitionVridAllStatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpAPartitionVridAllStatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPartitionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPartitionList = this._allPartitionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAPartitionVridAllStatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPartitionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPartitionList.internalValue = value.allPartitionList;
    }
  }

  // all_partition_list - computed: false, optional: true, required: false
  private _allPartitionList = new DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStructList(this, "all_partition_list", false);
  public get allPartitionList() {
    return this._allPartitionList;
  }
  public putAllPartitionList(value: DataThunderVrrpAPartitionVridAllStatusOperOperAllPartitionListStruct[] | cdktf.IResolvable) {
    this._allPartitionList.internalValue = value;
  }
  public resetAllPartitionList() {
    this._allPartitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionListInput() {
    return this._allPartitionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper thunder_vrrp_a_partition_vrid_all_status_oper}
*/
export class DataThunderVrrpAPartitionVridAllStatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_partition_vrid_all_status_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpAPartitionVridAllStatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpAPartitionVridAllStatusOper to import
  * @param importFromId The id of the existing DataThunderVrrpAPartitionVridAllStatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpAPartitionVridAllStatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_partition_vrid_all_status_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_partition_vrid_all_status_oper thunder_vrrp_a_partition_vrid_all_status_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpAPartitionVridAllStatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpAPartitionVridAllStatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_partition_vrid_all_status_oper',
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
  private _oper = new DataThunderVrrpAPartitionVridAllStatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVrrpAPartitionVridAllStatusOperOper) {
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
      oper: dataThunderVrrpAPartitionVridAllStatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVrrpAPartitionVridAllStatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpAPartitionVridAllStatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
