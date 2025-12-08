// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StarRocksNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#auto_renew StarRocksNodeGroup#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#cu StarRocksNodeGroup#cu}
  */
  readonly cu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#description StarRocksNodeGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#disk_number StarRocksNodeGroup#disk_number}
  */
  readonly diskNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#duration StarRocksNodeGroup#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#fast_mode StarRocksNodeGroup#fast_mode}
  */
  readonly fastMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#id StarRocksNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#instance_id StarRocksNodeGroup#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#local_storage_instance_type StarRocksNodeGroup#local_storage_instance_type}
  */
  readonly localStorageInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#node_group_name StarRocksNodeGroup#node_group_name}
  */
  readonly nodeGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#pay_type StarRocksNodeGroup#pay_type}
  */
  readonly payType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#pricing_cycle StarRocksNodeGroup#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#promotion_option_no StarRocksNodeGroup#promotion_option_no}
  */
  readonly promotionOptionNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#resident_node_number StarRocksNodeGroup#resident_node_number}
  */
  readonly residentNodeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#spec_type StarRocksNodeGroup#spec_type}
  */
  readonly specType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#storage_performance_level StarRocksNodeGroup#storage_performance_level}
  */
  readonly storagePerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#storage_size StarRocksNodeGroup#storage_size}
  */
  readonly storageSize?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#timeouts StarRocksNodeGroup#timeouts}
  */
  readonly timeouts?: StarRocksNodeGroupTimeouts;
}
export interface StarRocksNodeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#create StarRocksNodeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#delete StarRocksNodeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#update StarRocksNodeGroup#update}
  */
  readonly update?: string;
}

export function starRocksNodeGroupTimeoutsToTerraform(struct?: StarRocksNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function starRocksNodeGroupTimeoutsToHclTerraform(struct?: StarRocksNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StarRocksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StarRocksNodeGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StarRocksNodeGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group alicloud_star_rocks_node_group}
*/
export class StarRocksNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_star_rocks_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StarRocksNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StarRocksNodeGroup to import
  * @param importFromId The id of the existing StarRocksNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StarRocksNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_star_rocks_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/star_rocks_node_group alicloud_star_rocks_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StarRocksNodeGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StarRocksNodeGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_star_rocks_node_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._cu = config.cu;
    this._description = config.description;
    this._diskNumber = config.diskNumber;
    this._duration = config.duration;
    this._fastMode = config.fastMode;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._localStorageInstanceType = config.localStorageInstanceType;
    this._nodeGroupName = config.nodeGroupName;
    this._payType = config.payType;
    this._pricingCycle = config.pricingCycle;
    this._promotionOptionNo = config.promotionOptionNo;
    this._residentNodeNumber = config.residentNodeNumber;
    this._specType = config.specType;
    this._storagePerformanceLevel = config.storagePerformanceLevel;
    this._storageSize = config.storageSize;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cu - computed: false, optional: true, required: false
  private _cu?: number; 
  public get cu() {
    return this.getNumberAttribute('cu');
  }
  public set cu(value: number) {
    this._cu = value;
  }
  public resetCu() {
    this._cu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cuInput() {
    return this._cu;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disk_number - computed: false, optional: true, required: false
  private _diskNumber?: number; 
  public get diskNumber() {
    return this.getNumberAttribute('disk_number');
  }
  public set diskNumber(value: number) {
    this._diskNumber = value;
  }
  public resetDiskNumber() {
    this._diskNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNumberInput() {
    return this._diskNumber;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // fast_mode - computed: false, optional: true, required: false
  private _fastMode?: boolean | cdktf.IResolvable; 
  public get fastMode() {
    return this.getBooleanAttribute('fast_mode');
  }
  public set fastMode(value: boolean | cdktf.IResolvable) {
    this._fastMode = value;
  }
  public resetFastMode() {
    this._fastMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastModeInput() {
    return this._fastMode;
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // local_storage_instance_type - computed: false, optional: true, required: false
  private _localStorageInstanceType?: string; 
  public get localStorageInstanceType() {
    return this.getStringAttribute('local_storage_instance_type');
  }
  public set localStorageInstanceType(value: string) {
    this._localStorageInstanceType = value;
  }
  public resetLocalStorageInstanceType() {
    this._localStorageInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInstanceTypeInput() {
    return this._localStorageInstanceType;
  }

  // node_group_id - computed: true, optional: false, required: false
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }

  // node_group_name - computed: false, optional: true, required: false
  private _nodeGroupName?: string; 
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  public resetNodeGroupName() {
    this._nodeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: string; 
  public get payType() {
    return this.getStringAttribute('pay_type');
  }
  public set payType(value: string) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // promotion_option_no - computed: false, optional: true, required: false
  private _promotionOptionNo?: string; 
  public get promotionOptionNo() {
    return this.getStringAttribute('promotion_option_no');
  }
  public set promotionOptionNo(value: string) {
    this._promotionOptionNo = value;
  }
  public resetPromotionOptionNo() {
    this._promotionOptionNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionOptionNoInput() {
    return this._promotionOptionNo;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resident_node_number - computed: false, optional: true, required: false
  private _residentNodeNumber?: number; 
  public get residentNodeNumber() {
    return this.getNumberAttribute('resident_node_number');
  }
  public set residentNodeNumber(value: number) {
    this._residentNodeNumber = value;
  }
  public resetResidentNodeNumber() {
    this._residentNodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get residentNodeNumberInput() {
    return this._residentNodeNumber;
  }

  // spec_type - computed: false, optional: true, required: false
  private _specType?: string; 
  public get specType() {
    return this.getStringAttribute('spec_type');
  }
  public set specType(value: string) {
    this._specType = value;
  }
  public resetSpecType() {
    this._specType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specTypeInput() {
    return this._specType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_performance_level - computed: false, optional: true, required: false
  private _storagePerformanceLevel?: string; 
  public get storagePerformanceLevel() {
    return this.getStringAttribute('storage_performance_level');
  }
  public set storagePerformanceLevel(value: string) {
    this._storagePerformanceLevel = value;
  }
  public resetStoragePerformanceLevel() {
    this._storagePerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePerformanceLevelInput() {
    return this._storagePerformanceLevel;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StarRocksNodeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StarRocksNodeGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      cu: cdktf.numberToTerraform(this._cu),
      description: cdktf.stringToTerraform(this._description),
      disk_number: cdktf.numberToTerraform(this._diskNumber),
      duration: cdktf.numberToTerraform(this._duration),
      fast_mode: cdktf.booleanToTerraform(this._fastMode),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      local_storage_instance_type: cdktf.stringToTerraform(this._localStorageInstanceType),
      node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
      pay_type: cdktf.stringToTerraform(this._payType),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      promotion_option_no: cdktf.stringToTerraform(this._promotionOptionNo),
      resident_node_number: cdktf.numberToTerraform(this._residentNodeNumber),
      spec_type: cdktf.stringToTerraform(this._specType),
      storage_performance_level: cdktf.stringToTerraform(this._storagePerformanceLevel),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      timeouts: starRocksNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cu: {
        value: cdktf.numberToHclTerraform(this._cu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_number: {
        value: cdktf.numberToHclTerraform(this._diskNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_mode: {
        value: cdktf.booleanToHclTerraform(this._fastMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_storage_instance_type: {
        value: cdktf.stringToHclTerraform(this._localStorageInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_group_name: {
        value: cdktf.stringToHclTerraform(this._nodeGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_type: {
        value: cdktf.stringToHclTerraform(this._payType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promotion_option_no: {
        value: cdktf.stringToHclTerraform(this._promotionOptionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resident_node_number: {
        value: cdktf.numberToHclTerraform(this._residentNodeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spec_type: {
        value: cdktf.stringToHclTerraform(this._specType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_performance_level: {
        value: cdktf.stringToHclTerraform(this._storagePerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: starRocksNodeGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StarRocksNodeGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
