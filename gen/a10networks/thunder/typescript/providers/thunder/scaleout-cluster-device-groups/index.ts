// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterDeviceGroupsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#cluster_id ScaleoutClusterDeviceGroupsA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#enable ScaleoutClusterDeviceGroupsA#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#id ScaleoutClusterDeviceGroupsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#uuid ScaleoutClusterDeviceGroupsA#uuid}
  */
  readonly uuid?: string;
  /**
  * device_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#device_group_list ScaleoutClusterDeviceGroupsA#device_group_list}
  */
  readonly deviceGroupList?: ScaleoutClusterDeviceGroupsDeviceGroupListStructA[] | cdktf.IResolvable;
}
export interface ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#device_id_end ScaleoutClusterDeviceGroupsA#device_id_end}
  */
  readonly deviceIdEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#device_id_start ScaleoutClusterDeviceGroupsA#device_id_start}
  */
  readonly deviceIdStart?: number;
}

export function scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAToTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id_end: cdktf.numberToTerraform(struct!.deviceIdEnd),
    device_id_start: cdktf.numberToTerraform(struct!.deviceIdStart),
  }
}


export function scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAToHclTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id_end: {
      value: cdktf.numberToHclTerraform(struct!.deviceIdEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_id_start: {
      value: cdktf.numberToHclTerraform(struct!.deviceIdStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceIdEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdEnd = this._deviceIdEnd;
    }
    if (this._deviceIdStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdStart = this._deviceIdStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceIdEnd = undefined;
      this._deviceIdStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceIdEnd = value.deviceIdEnd;
      this._deviceIdStart = value.deviceIdStart;
    }
  }

  // device_id_end - computed: false, optional: true, required: false
  private _deviceIdEnd?: number; 
  public get deviceIdEnd() {
    return this.getNumberAttribute('device_id_end');
  }
  public set deviceIdEnd(value: number) {
    this._deviceIdEnd = value;
  }
  public resetDeviceIdEnd() {
    this._deviceIdEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdEndInput() {
    return this._deviceIdEnd;
  }

  // device_id_start - computed: false, optional: true, required: false
  private _deviceIdStart?: number; 
  public get deviceIdStart() {
    return this.getNumberAttribute('device_id_start');
  }
  public set deviceIdStart(value: number) {
    this._deviceIdStart = value;
  }
  public resetDeviceIdStart() {
    this._deviceIdStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdStartInput() {
    return this._deviceIdStart;
  }
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAOutputReference {
    return new ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterDeviceGroupsDeviceGroupListStructA {
  /**
  * scaleout device group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#device_group ScaleoutClusterDeviceGroupsA#device_group}
  */
  readonly deviceGroup: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#user_tag ScaleoutClusterDeviceGroupsA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#uuid ScaleoutClusterDeviceGroupsA#uuid}
  */
  readonly uuid?: string;
  /**
  * device_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#device_id_list ScaleoutClusterDeviceGroupsA#device_id_list}
  */
  readonly deviceIdList?: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA[] | cdktf.IResolvable;
}

export function scaleoutClusterDeviceGroupsDeviceGroupListStructAToTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: cdktf.numberToTerraform(struct!.deviceGroup),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    device_id_list: cdktf.listMapper(scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAToTerraform, true)(struct!.deviceIdList),
  }
}


export function scaleoutClusterDeviceGroupsDeviceGroupListStructAToHclTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: cdktf.numberToHclTerraform(struct!.deviceGroup),
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
    device_id_list: {
      value: cdktf.listMapperHcl(scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAToHclTerraform, true)(struct!.deviceIdList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterDeviceGroupsDeviceGroupListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._deviceIdList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdList = this._deviceIdList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterDeviceGroupsDeviceGroupListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._deviceIdList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup = value.deviceGroup;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._deviceIdList.internalValue = value.deviceIdList;
    }
  }

  // device_group - computed: false, optional: false, required: true
  private _deviceGroup?: number; 
  public get deviceGroup() {
    return this.getNumberAttribute('device_group');
  }
  public set deviceGroup(value: number) {
    this._deviceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup;
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

  // device_id_list - computed: false, optional: true, required: false
  private _deviceIdList = new ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructAList(this, "device_id_list", false);
  public get deviceIdList() {
    return this._deviceIdList;
  }
  public putDeviceIdList(value: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructA[] | cdktf.IResolvable) {
    this._deviceIdList.internalValue = value;
  }
  public resetDeviceIdList() {
    this._deviceIdList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdListInput() {
    return this._deviceIdList.internalValue;
  }
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListStructAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterDeviceGroupsDeviceGroupListStructA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterDeviceGroupsDeviceGroupListStructAOutputReference {
    return new ScaleoutClusterDeviceGroupsDeviceGroupListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups thunder_scaleout_cluster_device_groups}
*/
export class ScaleoutClusterDeviceGroupsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_device_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterDeviceGroupsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterDeviceGroupsA to import
  * @param importFromId The id of the existing ScaleoutClusterDeviceGroupsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterDeviceGroupsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_device_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_device_groups thunder_scaleout_cluster_device_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterDeviceGroupsAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterDeviceGroupsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_device_groups',
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
    this._clusterId = config.clusterId;
    this._enable = config.enable;
    this._id = config.id;
    this._uuid = config.uuid;
    this._deviceGroupList.internalValue = config.deviceGroupList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // device_group_list - computed: false, optional: true, required: false
  private _deviceGroupList = new ScaleoutClusterDeviceGroupsDeviceGroupListStructAList(this, "device_group_list", false);
  public get deviceGroupList() {
    return this._deviceGroupList;
  }
  public putDeviceGroupList(value: ScaleoutClusterDeviceGroupsDeviceGroupListStructA[] | cdktf.IResolvable) {
    this._deviceGroupList.internalValue = value;
  }
  public resetDeviceGroupList() {
    this._deviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupListInput() {
    return this._deviceGroupList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      device_group_list: cdktf.listMapper(scaleoutClusterDeviceGroupsDeviceGroupListStructAToTerraform, true)(this._deviceGroupList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      device_group_list: {
        value: cdktf.listMapperHcl(scaleoutClusterDeviceGroupsDeviceGroupListStructAToHclTerraform, true)(this._deviceGroupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterDeviceGroupsDeviceGroupListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
