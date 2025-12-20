// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcDataMaskStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#id DlcDataMaskStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#strategy DlcDataMaskStrategy#strategy}
  */
  readonly strategy?: DlcDataMaskStrategyStrategy;
}
export interface DlcDataMaskStrategyStrategyGroups {
  /**
  * The type of the data masking strategy. Supported value: MASK/MASK_NONE/MASK_NULL/MASK_HASH/MASK_SHOW_LAST_4/MASK_SHOW_FIRST_4/MASK_DATE_SHOW_YEAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#strategy_type DlcDataMaskStrategy#strategy_type}
  */
  readonly strategyType?: string;
  /**
  * The unique ID of the work group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#work_group_id DlcDataMaskStrategy#work_group_id}
  */
  readonly workGroupId?: number;
}

export function dlcDataMaskStrategyStrategyGroupsToTerraform(struct?: DlcDataMaskStrategyStrategyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
    work_group_id: cdktf.numberToTerraform(struct!.workGroupId),
  }
}


export function dlcDataMaskStrategyStrategyGroupsToHclTerraform(struct?: DlcDataMaskStrategyStrategyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group_id: {
      value: cdktf.numberToHclTerraform(struct!.workGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDataMaskStrategyStrategyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcDataMaskStrategyStrategyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    if (this._workGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroupId = this._workGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDataMaskStrategyStrategyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strategyType = undefined;
      this._workGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strategyType = value.strategyType;
      this._workGroupId = value.workGroupId;
    }
  }

  // strategy_type - computed: false, optional: true, required: false
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  public resetStrategyType() {
    this._strategyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // work_group_id - computed: false, optional: true, required: false
  private _workGroupId?: number; 
  public get workGroupId() {
    return this.getNumberAttribute('work_group_id');
  }
  public set workGroupId(value: number) {
    this._workGroupId = value;
  }
  public resetWorkGroupId() {
    this._workGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupIdInput() {
    return this._workGroupId;
  }
}

export class DlcDataMaskStrategyStrategyGroupsList extends cdktf.ComplexList {
  public internalValue? : DlcDataMaskStrategyStrategyGroups[] | cdktf.IResolvable

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
  public get(index: number): DlcDataMaskStrategyStrategyGroupsOutputReference {
    return new DlcDataMaskStrategyStrategyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlcDataMaskStrategyStrategy {
  /**
  * The description of the data masking strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#strategy_desc DlcDataMaskStrategy#strategy_desc}
  */
  readonly strategyDesc?: string;
  /**
  * The name of the data masking strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#strategy_name DlcDataMaskStrategy#strategy_name}
  */
  readonly strategyName?: string;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#groups DlcDataMaskStrategy#groups}
  */
  readonly groups?: DlcDataMaskStrategyStrategyGroups[] | cdktf.IResolvable;
}

export function dlcDataMaskStrategyStrategyToTerraform(struct?: DlcDataMaskStrategyStrategyOutputReference | DlcDataMaskStrategyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy_desc: cdktf.stringToTerraform(struct!.strategyDesc),
    strategy_name: cdktf.stringToTerraform(struct!.strategyName),
    groups: cdktf.listMapper(dlcDataMaskStrategyStrategyGroupsToTerraform, true)(struct!.groups),
  }
}


export function dlcDataMaskStrategyStrategyToHclTerraform(struct?: DlcDataMaskStrategyStrategyOutputReference | DlcDataMaskStrategyStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy_desc: {
      value: cdktf.stringToHclTerraform(struct!.strategyDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_name: {
      value: cdktf.stringToHclTerraform(struct!.strategyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(dlcDataMaskStrategyStrategyGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "DlcDataMaskStrategyStrategyGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDataMaskStrategyStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcDataMaskStrategyStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategyDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyDesc = this._strategyDesc;
    }
    if (this._strategyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyName = this._strategyName;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDataMaskStrategyStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategyDesc = undefined;
      this._strategyName = undefined;
      this._groups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategyDesc = value.strategyDesc;
      this._strategyName = value.strategyName;
      this._groups.internalValue = value.groups;
    }
  }

  // strategy_desc - computed: false, optional: true, required: false
  private _strategyDesc?: string; 
  public get strategyDesc() {
    return this.getStringAttribute('strategy_desc');
  }
  public set strategyDesc(value: string) {
    this._strategyDesc = value;
  }
  public resetStrategyDesc() {
    this._strategyDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyDescInput() {
    return this._strategyDesc;
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // strategy_name - computed: false, optional: true, required: false
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  public resetStrategyName() {
    this._strategyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new DlcDataMaskStrategyStrategyGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DlcDataMaskStrategyStrategyGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy tencentcloud_dlc_data_mask_strategy}
*/
export class DlcDataMaskStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_data_mask_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcDataMaskStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcDataMaskStrategy to import
  * @param importFromId The id of the existing DlcDataMaskStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcDataMaskStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_data_mask_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_data_mask_strategy tencentcloud_dlc_data_mask_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcDataMaskStrategyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlcDataMaskStrategyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_data_mask_strategy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._strategy.internalValue = config.strategy;
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

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DlcDataMaskStrategyStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DlcDataMaskStrategyStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      strategy: dlcDataMaskStrategyStrategyToTerraform(this._strategy.internalValue),
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
      strategy: {
        value: dlcDataMaskStrategyStrategyToHclTerraform(this._strategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcDataMaskStrategyStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
