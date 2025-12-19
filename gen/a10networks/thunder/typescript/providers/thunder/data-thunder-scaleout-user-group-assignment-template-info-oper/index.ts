// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutUserGroupAssignmentTemplateInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#id DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#oper DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#oper}
  */
  readonly oper?: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper;
}
export interface DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#address_prefix DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#address_prefix}
  */
  readonly addressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#ip_count_per_prefix DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#ip_count_per_prefix}
  */
  readonly ipCountPerPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#prefixes_count DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#prefixes_count}
  */
  readonly prefixesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#prefixes_per_user_group DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#prefixes_per_user_group}
  */
  readonly prefixesPerUserGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#user_group_range_end DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#user_group_range_end}
  */
  readonly userGroupRangeEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#user_group_range_start DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#user_group_range_start}
  */
  readonly userGroupRangeStart?: number;
}

export function dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructToTerraform(struct?: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefix: cdktf.stringToTerraform(struct!.addressPrefix),
    ip_count_per_prefix: cdktf.numberToTerraform(struct!.ipCountPerPrefix),
    prefixes_count: cdktf.numberToTerraform(struct!.prefixesCount),
    prefixes_per_user_group: cdktf.numberToTerraform(struct!.prefixesPerUserGroup),
    user_group_range_end: cdktf.numberToTerraform(struct!.userGroupRangeEnd),
    user_group_range_start: cdktf.numberToTerraform(struct!.userGroupRangeStart),
  }
}


export function dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructToHclTerraform(struct?: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_prefix: {
      value: cdktf.stringToHclTerraform(struct!.addressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_count_per_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ipCountPerPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefixes_count: {
      value: cdktf.numberToHclTerraform(struct!.prefixesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefixes_per_user_group: {
      value: cdktf.numberToHclTerraform(struct!.prefixesPerUserGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group_range_end: {
      value: cdktf.numberToHclTerraform(struct!.userGroupRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group_range_start: {
      value: cdktf.numberToHclTerraform(struct!.userGroupRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPrefix = this._addressPrefix;
    }
    if (this._ipCountPerPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCountPerPrefix = this._ipCountPerPrefix;
    }
    if (this._prefixesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixesCount = this._prefixesCount;
    }
    if (this._prefixesPerUserGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixesPerUserGroup = this._prefixesPerUserGroup;
    }
    if (this._userGroupRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupRangeEnd = this._userGroupRangeEnd;
    }
    if (this._userGroupRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupRangeStart = this._userGroupRangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressPrefix = undefined;
      this._ipCountPerPrefix = undefined;
      this._prefixesCount = undefined;
      this._prefixesPerUserGroup = undefined;
      this._userGroupRangeEnd = undefined;
      this._userGroupRangeStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressPrefix = value.addressPrefix;
      this._ipCountPerPrefix = value.ipCountPerPrefix;
      this._prefixesCount = value.prefixesCount;
      this._prefixesPerUserGroup = value.prefixesPerUserGroup;
      this._userGroupRangeEnd = value.userGroupRangeEnd;
      this._userGroupRangeStart = value.userGroupRangeStart;
    }
  }

  // address_prefix - computed: false, optional: true, required: false
  private _addressPrefix?: string; 
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }
  public resetAddressPrefix() {
    this._addressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix;
  }

  // ip_count_per_prefix - computed: false, optional: true, required: false
  private _ipCountPerPrefix?: number; 
  public get ipCountPerPrefix() {
    return this.getNumberAttribute('ip_count_per_prefix');
  }
  public set ipCountPerPrefix(value: number) {
    this._ipCountPerPrefix = value;
  }
  public resetIpCountPerPrefix() {
    this._ipCountPerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCountPerPrefixInput() {
    return this._ipCountPerPrefix;
  }

  // prefixes_count - computed: false, optional: true, required: false
  private _prefixesCount?: number; 
  public get prefixesCount() {
    return this.getNumberAttribute('prefixes_count');
  }
  public set prefixesCount(value: number) {
    this._prefixesCount = value;
  }
  public resetPrefixesCount() {
    this._prefixesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesCountInput() {
    return this._prefixesCount;
  }

  // prefixes_per_user_group - computed: false, optional: true, required: false
  private _prefixesPerUserGroup?: number; 
  public get prefixesPerUserGroup() {
    return this.getNumberAttribute('prefixes_per_user_group');
  }
  public set prefixesPerUserGroup(value: number) {
    this._prefixesPerUserGroup = value;
  }
  public resetPrefixesPerUserGroup() {
    this._prefixesPerUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesPerUserGroupInput() {
    return this._prefixesPerUserGroup;
  }

  // user_group_range_end - computed: false, optional: true, required: false
  private _userGroupRangeEnd?: number; 
  public get userGroupRangeEnd() {
    return this.getNumberAttribute('user_group_range_end');
  }
  public set userGroupRangeEnd(value: number) {
    this._userGroupRangeEnd = value;
  }
  public resetUserGroupRangeEnd() {
    this._userGroupRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeEndInput() {
    return this._userGroupRangeEnd;
  }

  // user_group_range_start - computed: false, optional: true, required: false
  private _userGroupRangeStart?: number; 
  public get userGroupRangeStart() {
    return this.getNumberAttribute('user_group_range_start');
  }
  public set userGroupRangeStart(value: number) {
    this._userGroupRangeStart = value;
  }
  public resetUserGroupRangeStart() {
    this._userGroupRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupRangeStartInput() {
    return this._userGroupRangeStart;
  }
}

export class DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructOutputReference {
    return new DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#name DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#name}
  */
  readonly name?: string;
  /**
  * assignment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#assignment_list DataThunderScaleoutUserGroupAssignmentTemplateInfoOper#assignment_list}
  */
  readonly assignmentList?: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperToTerraform(struct?: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperOutputReference | DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    assignment_list: cdktf.listMapper(dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructToTerraform, true)(struct!.assignmentList),
  }
}


export function dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperToHclTerraform(struct?: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperOutputReference | DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assignment_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructToHclTerraform, true)(struct!.assignmentList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._assignmentList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentList = this._assignmentList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._assignmentList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._assignmentList.internalValue = value.assignmentList;
    }
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

  // assignment_list - computed: false, optional: true, required: false
  private _assignmentList = new DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStructList(this, "assignment_list", false);
  public get assignmentList() {
    return this._assignmentList;
  }
  public putAssignmentList(value: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperAssignmentListStruct[] | cdktf.IResolvable) {
    this._assignmentList.internalValue = value;
  }
  public resetAssignmentList() {
    this._assignmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentListInput() {
    return this._assignmentList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper thunder_scaleout_user_group_assignment_template_info_oper}
*/
export class DataThunderScaleoutUserGroupAssignmentTemplateInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_user_group_assignment_template_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutUserGroupAssignmentTemplateInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutUserGroupAssignmentTemplateInfoOper to import
  * @param importFromId The id of the existing DataThunderScaleoutUserGroupAssignmentTemplateInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutUserGroupAssignmentTemplateInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_user_group_assignment_template_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_user_group_assignment_template_info_oper thunder_scaleout_user_group_assignment_template_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutUserGroupAssignmentTemplateInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_user_group_assignment_template_info_oper',
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
  private _oper = new DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOper) {
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
      oper: dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutUserGroupAssignmentTemplateInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
