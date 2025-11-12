// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaxComputeTunnelQuotaTimerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#id MaxComputeTunnelQuotaTimer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#nickname MaxComputeTunnelQuotaTimer#nickname}
  */
  readonly nickname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#time_zone MaxComputeTunnelQuotaTimer#time_zone}
  */
  readonly timeZone?: string;
  /**
  * quota_timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#quota_timer MaxComputeTunnelQuotaTimer#quota_timer}
  */
  readonly quotaTimer?: MaxComputeTunnelQuotaTimerQuotaTimer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#timeouts MaxComputeTunnelQuotaTimer#timeouts}
  */
  readonly timeouts?: MaxComputeTunnelQuotaTimerTimeouts;
}
export interface MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#elastic_reserved_slot_num MaxComputeTunnelQuotaTimer#elastic_reserved_slot_num}
  */
  readonly elasticReservedSlotNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#slot_num MaxComputeTunnelQuotaTimer#slot_num}
  */
  readonly slotNum: number;
}

export function maxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterToTerraform(struct?: MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterOutputReference | MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elastic_reserved_slot_num: cdktf.numberToTerraform(struct!.elasticReservedSlotNum),
    slot_num: cdktf.numberToTerraform(struct!.slotNum),
  }
}


export function maxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterToHclTerraform(struct?: MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterOutputReference | MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elastic_reserved_slot_num: {
      value: cdktf.numberToHclTerraform(struct!.elasticReservedSlotNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_num: {
      value: cdktf.numberToHclTerraform(struct!.slotNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticReservedSlotNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticReservedSlotNum = this._elasticReservedSlotNum;
    }
    if (this._slotNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotNum = this._slotNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elasticReservedSlotNum = undefined;
      this._slotNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elasticReservedSlotNum = value.elasticReservedSlotNum;
      this._slotNum = value.slotNum;
    }
  }

  // elastic_reserved_slot_num - computed: false, optional: false, required: true
  private _elasticReservedSlotNum?: number; 
  public get elasticReservedSlotNum() {
    return this.getNumberAttribute('elastic_reserved_slot_num');
  }
  public set elasticReservedSlotNum(value: number) {
    this._elasticReservedSlotNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticReservedSlotNumInput() {
    return this._elasticReservedSlotNum;
  }

  // slot_num - computed: false, optional: false, required: true
  private _slotNum?: number; 
  public get slotNum() {
    return this.getNumberAttribute('slot_num');
  }
  public set slotNum(value: number) {
    this._slotNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNumInput() {
    return this._slotNum;
  }
}
export interface MaxComputeTunnelQuotaTimerQuotaTimer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#begin_time MaxComputeTunnelQuotaTimer#begin_time}
  */
  readonly beginTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#end_time MaxComputeTunnelQuotaTimer#end_time}
  */
  readonly endTime: string;
  /**
  * tunnel_quota_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#tunnel_quota_parameter MaxComputeTunnelQuotaTimer#tunnel_quota_parameter}
  */
  readonly tunnelQuotaParameter?: MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter;
}

export function maxComputeTunnelQuotaTimerQuotaTimerToTerraform(struct?: MaxComputeTunnelQuotaTimerQuotaTimer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_time: cdktf.stringToTerraform(struct!.beginTime),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    tunnel_quota_parameter: maxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterToTerraform(struct!.tunnelQuotaParameter),
  }
}


export function maxComputeTunnelQuotaTimerQuotaTimerToHclTerraform(struct?: MaxComputeTunnelQuotaTimerQuotaTimer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_time: {
      value: cdktf.stringToHclTerraform(struct!.beginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_quota_parameter: {
      value: maxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterToHclTerraform(struct!.tunnelQuotaParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeTunnelQuotaTimerQuotaTimerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaxComputeTunnelQuotaTimerQuotaTimer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginTime = this._beginTime;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._tunnelQuotaParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelQuotaParameter = this._tunnelQuotaParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeTunnelQuotaTimerQuotaTimer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beginTime = undefined;
      this._endTime = undefined;
      this._tunnelQuotaParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beginTime = value.beginTime;
      this._endTime = value.endTime;
      this._tunnelQuotaParameter.internalValue = value.tunnelQuotaParameter;
    }
  }

  // begin_time - computed: false, optional: false, required: true
  private _beginTime?: string; 
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }
  public set beginTime(value: string) {
    this._beginTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginTimeInput() {
    return this._beginTime;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // tunnel_quota_parameter - computed: false, optional: true, required: false
  private _tunnelQuotaParameter = new MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameterOutputReference(this, "tunnel_quota_parameter");
  public get tunnelQuotaParameter() {
    return this._tunnelQuotaParameter;
  }
  public putTunnelQuotaParameter(value: MaxComputeTunnelQuotaTimerQuotaTimerTunnelQuotaParameter) {
    this._tunnelQuotaParameter.internalValue = value;
  }
  public resetTunnelQuotaParameter() {
    this._tunnelQuotaParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelQuotaParameterInput() {
    return this._tunnelQuotaParameter.internalValue;
  }
}

export class MaxComputeTunnelQuotaTimerQuotaTimerList extends cdktf.ComplexList {
  public internalValue? : MaxComputeTunnelQuotaTimerQuotaTimer[] | cdktf.IResolvable

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
  public get(index: number): MaxComputeTunnelQuotaTimerQuotaTimerOutputReference {
    return new MaxComputeTunnelQuotaTimerQuotaTimerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaxComputeTunnelQuotaTimerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#create MaxComputeTunnelQuotaTimer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#delete MaxComputeTunnelQuotaTimer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#update MaxComputeTunnelQuotaTimer#update}
  */
  readonly update?: string;
}

export function maxComputeTunnelQuotaTimerTimeoutsToTerraform(struct?: MaxComputeTunnelQuotaTimerTimeouts | cdktf.IResolvable): any {
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


export function maxComputeTunnelQuotaTimerTimeoutsToHclTerraform(struct?: MaxComputeTunnelQuotaTimerTimeouts | cdktf.IResolvable): any {
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

export class MaxComputeTunnelQuotaTimerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaxComputeTunnelQuotaTimerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MaxComputeTunnelQuotaTimerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer alicloud_max_compute_tunnel_quota_timer}
*/
export class MaxComputeTunnelQuotaTimer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_max_compute_tunnel_quota_timer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaxComputeTunnelQuotaTimer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaxComputeTunnelQuotaTimer to import
  * @param importFromId The id of the existing MaxComputeTunnelQuotaTimer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaxComputeTunnelQuotaTimer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_max_compute_tunnel_quota_timer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/max_compute_tunnel_quota_timer alicloud_max_compute_tunnel_quota_timer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaxComputeTunnelQuotaTimerConfig
  */
  public constructor(scope: Construct, id: string, config: MaxComputeTunnelQuotaTimerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_max_compute_tunnel_quota_timer',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._nickname = config.nickname;
    this._timeZone = config.timeZone;
    this._quotaTimer.internalValue = config.quotaTimer;
    this._timeouts.internalValue = config.timeouts;
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

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // quota_timer - computed: false, optional: true, required: false
  private _quotaTimer = new MaxComputeTunnelQuotaTimerQuotaTimerList(this, "quota_timer", true);
  public get quotaTimer() {
    return this._quotaTimer;
  }
  public putQuotaTimer(value: MaxComputeTunnelQuotaTimerQuotaTimer[] | cdktf.IResolvable) {
    this._quotaTimer.internalValue = value;
  }
  public resetQuotaTimer() {
    this._quotaTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaTimerInput() {
    return this._quotaTimer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MaxComputeTunnelQuotaTimerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaxComputeTunnelQuotaTimerTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      nickname: cdktf.stringToTerraform(this._nickname),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      quota_timer: cdktf.listMapper(maxComputeTunnelQuotaTimerQuotaTimerToTerraform, true)(this._quotaTimer.internalValue),
      timeouts: maxComputeTunnelQuotaTimerTimeoutsToTerraform(this._timeouts.internalValue),
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
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_timer: {
        value: cdktf.listMapperHcl(maxComputeTunnelQuotaTimerQuotaTimerToHclTerraform, true)(this._quotaTimer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MaxComputeTunnelQuotaTimerQuotaTimerList",
      },
      timeouts: {
        value: maxComputeTunnelQuotaTimerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaxComputeTunnelQuotaTimerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
