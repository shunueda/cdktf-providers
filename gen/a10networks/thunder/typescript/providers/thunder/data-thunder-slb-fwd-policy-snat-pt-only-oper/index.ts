// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFwdPolicySnatPtOnlyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#id DataThunderSlbFwdPolicySnatPtOnlyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#oper DataThunderSlbFwdPolicySnatPtOnlyOper#oper}
  */
  readonly oper?: DataThunderSlbFwdPolicySnatPtOnlyOperOper;
}
export interface DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#failed DataThunderSlbFwdPolicySnatPtOnlyOper#failed}
  */
  readonly failed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#group DataThunderSlbFwdPolicySnatPtOnlyOper#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#port_usage DataThunderSlbFwdPolicySnatPtOnlyOper#port_usage}
  */
  readonly portUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#total_freed DataThunderSlbFwdPolicySnatPtOnlyOper#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#total_used DataThunderSlbFwdPolicySnatPtOnlyOper#total_used}
  */
  readonly totalUsed?: number;
}

export function dataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructToTerraform(struct?: DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed: cdktf.numberToTerraform(struct!.failed),
    group: cdktf.stringToTerraform(struct!.group),
    port_usage: cdktf.numberToTerraform(struct!.portUsage),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_used: cdktf.numberToTerraform(struct!.totalUsed),
  }
}


export function dataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructToHclTerraform(struct?: DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed: {
      value: cdktf.numberToHclTerraform(struct!.failed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_usage: {
      value: cdktf.numberToHclTerraform(struct!.portUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_used: {
      value: cdktf.numberToHclTerraform(struct!.totalUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failed !== undefined) {
      hasAnyValues = true;
      internalValueResult.failed = this._failed;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._portUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUsage = this._portUsage;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUsed = this._totalUsed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failed = undefined;
      this._group = undefined;
      this._portUsage = undefined;
      this._totalFreed = undefined;
      this._totalUsed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failed = value.failed;
      this._group = value.group;
      this._portUsage = value.portUsage;
      this._totalFreed = value.totalFreed;
      this._totalUsed = value.totalUsed;
    }
  }

  // failed - computed: false, optional: true, required: false
  private _failed?: number; 
  public get failed() {
    return this.getNumberAttribute('failed');
  }
  public set failed(value: number) {
    this._failed = value;
  }
  public resetFailed() {
    this._failed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedInput() {
    return this._failed;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // port_usage - computed: false, optional: true, required: false
  private _portUsage?: number; 
  public get portUsage() {
    return this.getNumberAttribute('port_usage');
  }
  public set portUsage(value: number) {
    this._portUsage = value;
  }
  public resetPortUsage() {
    this._portUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUsageInput() {
    return this._portUsage;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_used - computed: false, optional: true, required: false
  private _totalUsed?: number; 
  public get totalUsed() {
    return this.getNumberAttribute('total_used');
  }
  public set totalUsed(value: number) {
    this._totalUsed = value;
  }
  public resetTotalUsed() {
    this._totalUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUsedInput() {
    return this._totalUsed;
  }
}

export class DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructOutputReference {
    return new DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbFwdPolicySnatPtOnlyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#detail_info DataThunderSlbFwdPolicySnatPtOnlyOper#detail_info}
  */
  readonly detailInfo?: number;
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#group_list DataThunderSlbFwdPolicySnatPtOnlyOper#group_list}
  */
  readonly groupList?: DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbFwdPolicySnatPtOnlyOperOperToTerraform(struct?: DataThunderSlbFwdPolicySnatPtOnlyOperOperOutputReference | DataThunderSlbFwdPolicySnatPtOnlyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_info: cdktf.numberToTerraform(struct!.detailInfo),
    group_list: cdktf.listMapper(dataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructToTerraform, true)(struct!.groupList),
  }
}


export function dataThunderSlbFwdPolicySnatPtOnlyOperOperToHclTerraform(struct?: DataThunderSlbFwdPolicySnatPtOnlyOperOperOutputReference | DataThunderSlbFwdPolicySnatPtOnlyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_info: {
      value: cdktf.numberToHclTerraform(struct!.detailInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_list: {
      value: cdktf.listMapperHcl(dataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructToHclTerraform, true)(struct!.groupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFwdPolicySnatPtOnlyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFwdPolicySnatPtOnlyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailInfo = this._detailInfo;
    }
    if (this._groupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFwdPolicySnatPtOnlyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailInfo = undefined;
      this._groupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailInfo = value.detailInfo;
      this._groupList.internalValue = value.groupList;
    }
  }

  // detail_info - computed: false, optional: true, required: false
  private _detailInfo?: number; 
  public get detailInfo() {
    return this.getNumberAttribute('detail_info');
  }
  public set detailInfo(value: number) {
    this._detailInfo = value;
  }
  public resetDetailInfo() {
    this._detailInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInfoInput() {
    return this._detailInfo;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStructList(this, "group_list", false);
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: DataThunderSlbFwdPolicySnatPtOnlyOperOperGroupListStruct[] | cdktf.IResolvable) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper thunder_slb_fwd_policy_snat_pt_only_oper}
*/
export class DataThunderSlbFwdPolicySnatPtOnlyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_fwd_policy_snat_pt_only_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFwdPolicySnatPtOnlyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFwdPolicySnatPtOnlyOper to import
  * @param importFromId The id of the existing DataThunderSlbFwdPolicySnatPtOnlyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFwdPolicySnatPtOnlyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_fwd_policy_snat_pt_only_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_fwd_policy_snat_pt_only_oper thunder_slb_fwd_policy_snat_pt_only_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFwdPolicySnatPtOnlyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFwdPolicySnatPtOnlyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_fwd_policy_snat_pt_only_oper',
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
  private _oper = new DataThunderSlbFwdPolicySnatPtOnlyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbFwdPolicySnatPtOnlyOperOper) {
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
      oper: dataThunderSlbFwdPolicySnatPtOnlyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbFwdPolicySnatPtOnlyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFwdPolicySnatPtOnlyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
