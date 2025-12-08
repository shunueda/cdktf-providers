// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotasQuotaAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#id QuotasQuotaAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#product_code QuotasQuotaAlarm#product_code}
  */
  readonly productCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#quota_action_code QuotasQuotaAlarm#quota_action_code}
  */
  readonly quotaActionCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#quota_alarm_name QuotasQuotaAlarm#quota_alarm_name}
  */
  readonly quotaAlarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#threshold QuotasQuotaAlarm#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#threshold_percent QuotasQuotaAlarm#threshold_percent}
  */
  readonly thresholdPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#threshold_type QuotasQuotaAlarm#threshold_type}
  */
  readonly thresholdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#web_hook QuotasQuotaAlarm#web_hook}
  */
  readonly webHook?: string;
  /**
  * quota_dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#quota_dimensions QuotasQuotaAlarm#quota_dimensions}
  */
  readonly quotaDimensions?: QuotasQuotaAlarmQuotaDimensions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#timeouts QuotasQuotaAlarm#timeouts}
  */
  readonly timeouts?: QuotasQuotaAlarmTimeouts;
}
export interface QuotasQuotaAlarmQuotaDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#key QuotasQuotaAlarm#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#value QuotasQuotaAlarm#value}
  */
  readonly value?: string;
}

export function quotasQuotaAlarmQuotaDimensionsToTerraform(struct?: QuotasQuotaAlarmQuotaDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function quotasQuotaAlarmQuotaDimensionsToHclTerraform(struct?: QuotasQuotaAlarmQuotaDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuotasQuotaAlarmQuotaDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuotasQuotaAlarmQuotaDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotasQuotaAlarmQuotaDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class QuotasQuotaAlarmQuotaDimensionsList extends cdktf.ComplexList {
  public internalValue? : QuotasQuotaAlarmQuotaDimensions[] | cdktf.IResolvable

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
  public get(index: number): QuotasQuotaAlarmQuotaDimensionsOutputReference {
    return new QuotasQuotaAlarmQuotaDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuotasQuotaAlarmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#create QuotasQuotaAlarm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#delete QuotasQuotaAlarm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#update QuotasQuotaAlarm#update}
  */
  readonly update?: string;
}

export function quotasQuotaAlarmTimeoutsToTerraform(struct?: QuotasQuotaAlarmTimeouts | cdktf.IResolvable): any {
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


export function quotasQuotaAlarmTimeoutsToHclTerraform(struct?: QuotasQuotaAlarmTimeouts | cdktf.IResolvable): any {
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

export class QuotasQuotaAlarmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuotasQuotaAlarmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuotasQuotaAlarmTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm alicloud_quotas_quota_alarm}
*/
export class QuotasQuotaAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_quotas_quota_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuotasQuotaAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuotasQuotaAlarm to import
  * @param importFromId The id of the existing QuotasQuotaAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuotasQuotaAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_quotas_quota_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/quotas_quota_alarm alicloud_quotas_quota_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotasQuotaAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: QuotasQuotaAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_quotas_quota_alarm',
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
    this._id = config.id;
    this._productCode = config.productCode;
    this._quotaActionCode = config.quotaActionCode;
    this._quotaAlarmName = config.quotaAlarmName;
    this._threshold = config.threshold;
    this._thresholdPercent = config.thresholdPercent;
    this._thresholdType = config.thresholdType;
    this._webHook = config.webHook;
    this._quotaDimensions.internalValue = config.quotaDimensions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // product_code - computed: false, optional: false, required: true
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // quota_action_code - computed: false, optional: false, required: true
  private _quotaActionCode?: string; 
  public get quotaActionCode() {
    return this.getStringAttribute('quota_action_code');
  }
  public set quotaActionCode(value: string) {
    this._quotaActionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaActionCodeInput() {
    return this._quotaActionCode;
  }

  // quota_alarm_name - computed: false, optional: false, required: true
  private _quotaAlarmName?: string; 
  public get quotaAlarmName() {
    return this.getStringAttribute('quota_alarm_name');
  }
  public set quotaAlarmName(value: string) {
    this._quotaAlarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaAlarmNameInput() {
    return this._quotaAlarmName;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_percent - computed: false, optional: true, required: false
  private _thresholdPercent?: number; 
  public get thresholdPercent() {
    return this.getNumberAttribute('threshold_percent');
  }
  public set thresholdPercent(value: number) {
    this._thresholdPercent = value;
  }
  public resetThresholdPercent() {
    this._thresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentInput() {
    return this._thresholdPercent;
  }

  // threshold_type - computed: true, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // web_hook - computed: false, optional: true, required: false
  private _webHook?: string; 
  public get webHook() {
    return this.getStringAttribute('web_hook');
  }
  public set webHook(value: string) {
    this._webHook = value;
  }
  public resetWebHook() {
    this._webHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHookInput() {
    return this._webHook;
  }

  // quota_dimensions - computed: false, optional: true, required: false
  private _quotaDimensions = new QuotasQuotaAlarmQuotaDimensionsList(this, "quota_dimensions", true);
  public get quotaDimensions() {
    return this._quotaDimensions;
  }
  public putQuotaDimensions(value: QuotasQuotaAlarmQuotaDimensions[] | cdktf.IResolvable) {
    this._quotaDimensions.internalValue = value;
  }
  public resetQuotaDimensions() {
    this._quotaDimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaDimensionsInput() {
    return this._quotaDimensions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QuotasQuotaAlarmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QuotasQuotaAlarmTimeouts) {
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
      product_code: cdktf.stringToTerraform(this._productCode),
      quota_action_code: cdktf.stringToTerraform(this._quotaActionCode),
      quota_alarm_name: cdktf.stringToTerraform(this._quotaAlarmName),
      threshold: cdktf.numberToTerraform(this._threshold),
      threshold_percent: cdktf.numberToTerraform(this._thresholdPercent),
      threshold_type: cdktf.stringToTerraform(this._thresholdType),
      web_hook: cdktf.stringToTerraform(this._webHook),
      quota_dimensions: cdktf.listMapper(quotasQuotaAlarmQuotaDimensionsToTerraform, true)(this._quotaDimensions.internalValue),
      timeouts: quotasQuotaAlarmTimeoutsToTerraform(this._timeouts.internalValue),
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
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_action_code: {
        value: cdktf.stringToHclTerraform(this._quotaActionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_alarm_name: {
        value: cdktf.stringToHclTerraform(this._quotaAlarmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_percent: {
        value: cdktf.numberToHclTerraform(this._thresholdPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_type: {
        value: cdktf.stringToHclTerraform(this._thresholdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_hook: {
        value: cdktf.stringToHclTerraform(this._webHook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_dimensions: {
        value: cdktf.listMapperHcl(quotasQuotaAlarmQuotaDimensionsToHclTerraform, true)(this._quotaDimensions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QuotasQuotaAlarmQuotaDimensionsList",
      },
      timeouts: {
        value: quotasQuotaAlarmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuotasQuotaAlarmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
