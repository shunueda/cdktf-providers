// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfLaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#id TsfLane#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lane name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#lane_name TsfLane#lane_name}
  */
  readonly laneName: string;
  /**
  * Program id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#program_id_list TsfLane#program_id_list}
  */
  readonly programIdList?: string[];
  /**
  * Lane Remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#remark TsfLane#remark}
  */
  readonly remark: string;
  /**
  * lane_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#lane_group_list TsfLane#lane_group_list}
  */
  readonly laneGroupList: TsfLaneLaneGroupListStruct[] | cdktf.IResolvable;
}
export interface TsfLaneLaneGroupListStruct {
  /**
  * application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#application_id TsfLane#application_id}
  */
  readonly applicationId?: string;
  /**
  * application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#application_name TsfLane#application_name}
  */
  readonly applicationName?: string;
  /**
  * cluster type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#cluster_type TsfLane#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#create_time TsfLane#create_time}
  */
  readonly createTime?: number;
  /**
  * Whether to enter the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#entrance TsfLane#entrance}
  */
  readonly entrance: boolean | cdktf.IResolvable;
  /**
  * Deployment group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#group_id TsfLane#group_id}
  */
  readonly groupId: string;
  /**
  * deployment group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#group_name TsfLane#group_name}
  */
  readonly groupName?: string;
  /**
  * Swimlane deployment group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#lane_group_id TsfLane#lane_group_id}
  */
  readonly laneGroupId?: string;
  /**
  * Lane ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#lane_id TsfLane#lane_id}
  */
  readonly laneId?: string;
  /**
  * Namespace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#namespace_id TsfLane#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * namespace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#namespace_name TsfLane#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#update_time TsfLane#update_time}
  */
  readonly updateTime?: number;
}

export function tsfLaneLaneGroupListStructToTerraform(struct?: TsfLaneLaneGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    create_time: cdktf.numberToTerraform(struct!.createTime),
    entrance: cdktf.booleanToTerraform(struct!.entrance),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    lane_group_id: cdktf.stringToTerraform(struct!.laneGroupId),
    lane_id: cdktf.stringToTerraform(struct!.laneId),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    update_time: cdktf.numberToTerraform(struct!.updateTime),
  }
}


export function tsfLaneLaneGroupListStructToHclTerraform(struct?: TsfLaneLaneGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.numberToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entrance: {
      value: cdktf.booleanToHclTerraform(struct!.entrance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lane_group_id: {
      value: cdktf.stringToHclTerraform(struct!.laneGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lane_id: {
      value: cdktf.stringToHclTerraform(struct!.laneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.numberToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfLaneLaneGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfLaneLaneGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._entrance !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrance = this._entrance;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._laneGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.laneGroupId = this._laneGroupId;
    }
    if (this._laneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.laneId = this._laneId;
    }
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfLaneLaneGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._applicationName = undefined;
      this._clusterType = undefined;
      this._createTime = undefined;
      this._entrance = undefined;
      this._groupId = undefined;
      this._groupName = undefined;
      this._laneGroupId = undefined;
      this._laneId = undefined;
      this._namespaceId = undefined;
      this._namespaceName = undefined;
      this._updateTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._applicationName = value.applicationName;
      this._clusterType = value.clusterType;
      this._createTime = value.createTime;
      this._entrance = value.entrance;
      this._groupId = value.groupId;
      this._groupName = value.groupName;
      this._laneGroupId = value.laneGroupId;
      this._laneId = value.laneId;
      this._namespaceId = value.namespaceId;
      this._namespaceName = value.namespaceName;
      this._updateTime = value.updateTime;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: number; 
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }
  public set createTime(value: number) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // entrance - computed: false, optional: false, required: true
  private _entrance?: boolean | cdktf.IResolvable; 
  public get entrance() {
    return this.getBooleanAttribute('entrance');
  }
  public set entrance(value: boolean | cdktf.IResolvable) {
    this._entrance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entranceInput() {
    return this._entrance;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // lane_group_id - computed: false, optional: true, required: false
  private _laneGroupId?: string; 
  public get laneGroupId() {
    return this.getStringAttribute('lane_group_id');
  }
  public set laneGroupId(value: string) {
    this._laneGroupId = value;
  }
  public resetLaneGroupId() {
    this._laneGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get laneGroupIdInput() {
    return this._laneGroupId;
  }

  // lane_id - computed: false, optional: true, required: false
  private _laneId?: string; 
  public get laneId() {
    return this.getStringAttribute('lane_id');
  }
  public set laneId(value: string) {
    this._laneId = value;
  }
  public resetLaneId() {
    this._laneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get laneIdInput() {
    return this._laneId;
  }

  // namespace_id - computed: false, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // namespace_name - computed: false, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: number; 
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
  public set updateTime(value: number) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }
}

export class TsfLaneLaneGroupListStructList extends cdktf.ComplexList {
  public internalValue? : TsfLaneLaneGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfLaneLaneGroupListStructOutputReference {
    return new TsfLaneLaneGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane tencentcloud_tsf_lane}
*/
export class TsfLane extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_lane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfLane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfLane to import
  * @param importFromId The id of the existing TsfLane that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfLane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_lane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/tsf_lane tencentcloud_tsf_lane} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfLaneConfig
  */
  public constructor(scope: Construct, id: string, config: TsfLaneConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_lane',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._laneName = config.laneName;
    this._programIdList = config.programIdList;
    this._remark = config.remark;
    this._laneGroupList.internalValue = config.laneGroupList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // entrance - computed: true, optional: false, required: false
  public get entrance() {
    return this.getBooleanAttribute('entrance');
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

  // lane_id - computed: true, optional: false, required: false
  public get laneId() {
    return this.getStringAttribute('lane_id');
  }

  // lane_name - computed: false, optional: false, required: true
  private _laneName?: string; 
  public get laneName() {
    return this.getStringAttribute('lane_name');
  }
  public set laneName(value: string) {
    this._laneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get laneNameInput() {
    return this._laneName;
  }

  // namespace_id_list - computed: true, optional: false, required: false
  public get namespaceIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('namespace_id_list'));
  }

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // lane_group_list - computed: false, optional: false, required: true
  private _laneGroupList = new TsfLaneLaneGroupListStructList(this, "lane_group_list", false);
  public get laneGroupList() {
    return this._laneGroupList;
  }
  public putLaneGroupList(value: TsfLaneLaneGroupListStruct[] | cdktf.IResolvable) {
    this._laneGroupList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get laneGroupListInput() {
    return this._laneGroupList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lane_name: cdktf.stringToTerraform(this._laneName),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
      remark: cdktf.stringToTerraform(this._remark),
      lane_group_list: cdktf.listMapper(tsfLaneLaneGroupListStructToTerraform, true)(this._laneGroupList.internalValue),
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
      lane_name: {
        value: cdktf.stringToHclTerraform(this._laneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lane_group_list: {
        value: cdktf.listMapperHcl(tsfLaneLaneGroupListStructToHclTerraform, true)(this._laneGroupList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfLaneLaneGroupListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
