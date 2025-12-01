// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CddcDedicatedHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#allocation_status CddcDedicatedHost#allocation_status}
  */
  readonly allocationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#auto_renew CddcDedicatedHost#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#dedicated_host_group_id CddcDedicatedHost#dedicated_host_group_id}
  */
  readonly dedicatedHostGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#host_class CddcDedicatedHost#host_class}
  */
  readonly hostClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#host_name CddcDedicatedHost#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#id CddcDedicatedHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#image_category CddcDedicatedHost#image_category}
  */
  readonly imageCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#os_password CddcDedicatedHost#os_password}
  */
  readonly osPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#payment_type CddcDedicatedHost#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#period CddcDedicatedHost#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#tags CddcDedicatedHost#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#used_time CddcDedicatedHost#used_time}
  */
  readonly usedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#vswitch_id CddcDedicatedHost#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#zone_id CddcDedicatedHost#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#timeouts CddcDedicatedHost#timeouts}
  */
  readonly timeouts?: CddcDedicatedHostTimeouts;
}
export interface CddcDedicatedHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#create CddcDedicatedHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#delete CddcDedicatedHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#update CddcDedicatedHost#update}
  */
  readonly update?: string;
}

export function cddcDedicatedHostTimeoutsToTerraform(struct?: CddcDedicatedHostTimeouts | cdktf.IResolvable): any {
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


export function cddcDedicatedHostTimeoutsToHclTerraform(struct?: CddcDedicatedHostTimeouts | cdktf.IResolvable): any {
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

export class CddcDedicatedHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CddcDedicatedHostTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CddcDedicatedHostTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host alicloud_cddc_dedicated_host}
*/
export class CddcDedicatedHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cddc_dedicated_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CddcDedicatedHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CddcDedicatedHost to import
  * @param importFromId The id of the existing CddcDedicatedHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CddcDedicatedHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cddc_dedicated_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cddc_dedicated_host alicloud_cddc_dedicated_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CddcDedicatedHostConfig
  */
  public constructor(scope: Construct, id: string, config: CddcDedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cddc_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationStatus = config.allocationStatus;
    this._autoRenew = config.autoRenew;
    this._dedicatedHostGroupId = config.dedicatedHostGroupId;
    this._hostClass = config.hostClass;
    this._hostName = config.hostName;
    this._id = config.id;
    this._imageCategory = config.imageCategory;
    this._osPassword = config.osPassword;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._tags = config.tags;
    this._usedTime = config.usedTime;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_status - computed: true, optional: true, required: false
  private _allocationStatus?: string; 
  public get allocationStatus() {
    return this.getStringAttribute('allocation_status');
  }
  public set allocationStatus(value: string) {
    this._allocationStatus = value;
  }
  public resetAllocationStatus() {
    this._allocationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStatusInput() {
    return this._allocationStatus;
  }

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

  // dedicated_host_group_id - computed: false, optional: false, required: true
  private _dedicatedHostGroupId?: string; 
  public get dedicatedHostGroupId() {
    return this.getStringAttribute('dedicated_host_group_id');
  }
  public set dedicatedHostGroupId(value: string) {
    this._dedicatedHostGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupIdInput() {
    return this._dedicatedHostGroupId;
  }

  // dedicated_host_id - computed: true, optional: false, required: false
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }

  // host_class - computed: false, optional: false, required: true
  private _hostClass?: string; 
  public get hostClass() {
    return this.getStringAttribute('host_class');
  }
  public set hostClass(value: string) {
    this._hostClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostClassInput() {
    return this._hostClass;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // image_category - computed: false, optional: true, required: false
  private _imageCategory?: string; 
  public get imageCategory() {
    return this.getStringAttribute('image_category');
  }
  public set imageCategory(value: string) {
    this._imageCategory = value;
  }
  public resetImageCategory() {
    this._imageCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCategoryInput() {
    return this._imageCategory;
  }

  // os_password - computed: false, optional: true, required: false
  private _osPassword?: string; 
  public get osPassword() {
    return this.getStringAttribute('os_password');
  }
  public set osPassword(value: string) {
    this._osPassword = value;
  }
  public resetOsPassword() {
    this._osPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPasswordInput() {
    return this._osPassword;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // used_time - computed: false, optional: true, required: false
  private _usedTime?: number; 
  public get usedTime() {
    return this.getNumberAttribute('used_time');
  }
  public set usedTime(value: number) {
    this._usedTime = value;
  }
  public resetUsedTime() {
    this._usedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedTimeInput() {
    return this._usedTime;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CddcDedicatedHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CddcDedicatedHostTimeouts) {
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
      allocation_status: cdktf.stringToTerraform(this._allocationStatus),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      dedicated_host_group_id: cdktf.stringToTerraform(this._dedicatedHostGroupId),
      host_class: cdktf.stringToTerraform(this._hostClass),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      image_category: cdktf.stringToTerraform(this._imageCategory),
      os_password: cdktf.stringToTerraform(this._osPassword),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      used_time: cdktf.numberToTerraform(this._usedTime),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: cddcDedicatedHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_status: {
        value: cdktf.stringToHclTerraform(this._allocationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dedicated_host_group_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_class: {
        value: cdktf.stringToHclTerraform(this._hostClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_category: {
        value: cdktf.stringToHclTerraform(this._imageCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_password: {
        value: cdktf.stringToHclTerraform(this._osPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      used_time: {
        value: cdktf.numberToHclTerraform(this._usedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cddcDedicatedHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CddcDedicatedHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
