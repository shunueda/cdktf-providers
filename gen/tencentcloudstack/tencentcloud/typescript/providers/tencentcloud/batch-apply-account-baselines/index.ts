// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchApplyAccountBaselinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines#id BatchApplyAccountBaselines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Member account UIN, which is also the UIN of the account to which the baseline is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines#member_uin_list BatchApplyAccountBaselines#member_uin_list}
  */
  readonly memberUinList: number[];
  /**
  * baseline_config_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines#baseline_config_items BatchApplyAccountBaselines#baseline_config_items}
  */
  readonly baselineConfigItems: BatchApplyAccountBaselinesBaselineConfigItems[] | cdktf.IResolvable;
}
export interface BatchApplyAccountBaselinesBaselineConfigItems {
  /**
  * Account Factory baseline item configuration. Different items have different parameters.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines#configuration BatchApplyAccountBaselines#configuration}
  */
  readonly configuration?: string;
  /**
  * A unique identifier for an Account Factory baseline item, which can only contain English letters, digits, and @,._[]-:()+=. It must be 2-128 characters long.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines#identifier BatchApplyAccountBaselines#identifier}
  */
  readonly identifier?: string;
}

export function batchApplyAccountBaselinesBaselineConfigItemsToTerraform(struct?: BatchApplyAccountBaselinesBaselineConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function batchApplyAccountBaselinesBaselineConfigItemsToHclTerraform(struct?: BatchApplyAccountBaselinesBaselineConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchApplyAccountBaselinesBaselineConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchApplyAccountBaselinesBaselineConfigItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchApplyAccountBaselinesBaselineConfigItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._identifier = value.identifier;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class BatchApplyAccountBaselinesBaselineConfigItemsList extends cdktf.ComplexList {
  public internalValue? : BatchApplyAccountBaselinesBaselineConfigItems[] | cdktf.IResolvable

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
  public get(index: number): BatchApplyAccountBaselinesBaselineConfigItemsOutputReference {
    return new BatchApplyAccountBaselinesBaselineConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines tencentcloud_batch_apply_account_baselines}
*/
export class BatchApplyAccountBaselines extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_batch_apply_account_baselines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchApplyAccountBaselines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchApplyAccountBaselines to import
  * @param importFromId The id of the existing BatchApplyAccountBaselines that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchApplyAccountBaselines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_batch_apply_account_baselines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/batch_apply_account_baselines tencentcloud_batch_apply_account_baselines} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchApplyAccountBaselinesConfig
  */
  public constructor(scope: Construct, id: string, config: BatchApplyAccountBaselinesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_batch_apply_account_baselines',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._memberUinList = config.memberUinList;
    this._baselineConfigItems.internalValue = config.baselineConfigItems;
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

  // member_uin_list - computed: false, optional: false, required: true
  private _memberUinList?: number[]; 
  public get memberUinList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('member_uin_list')));
  }
  public set memberUinList(value: number[]) {
    this._memberUinList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUinListInput() {
    return this._memberUinList;
  }

  // baseline_config_items - computed: false, optional: false, required: true
  private _baselineConfigItems = new BatchApplyAccountBaselinesBaselineConfigItemsList(this, "baseline_config_items", false);
  public get baselineConfigItems() {
    return this._baselineConfigItems;
  }
  public putBaselineConfigItems(value: BatchApplyAccountBaselinesBaselineConfigItems[] | cdktf.IResolvable) {
    this._baselineConfigItems.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineConfigItemsInput() {
    return this._baselineConfigItems.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      member_uin_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._memberUinList),
      baseline_config_items: cdktf.listMapper(batchApplyAccountBaselinesBaselineConfigItemsToTerraform, true)(this._baselineConfigItems.internalValue),
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
      member_uin_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._memberUinList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      baseline_config_items: {
        value: cdktf.listMapperHcl(batchApplyAccountBaselinesBaselineConfigItemsToHclTerraform, true)(this._baselineConfigItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchApplyAccountBaselinesBaselineConfigItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
