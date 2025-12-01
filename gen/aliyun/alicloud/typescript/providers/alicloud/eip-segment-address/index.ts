// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipSegmentAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#bandwidth EipSegmentAddress#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#eip_mask EipSegmentAddress#eip_mask}
  */
  readonly eipMask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#id EipSegmentAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#internet_charge_type EipSegmentAddress#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#isp EipSegmentAddress#isp}
  */
  readonly isp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#netmode EipSegmentAddress#netmode}
  */
  readonly netmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#resource_group_id EipSegmentAddress#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#zone EipSegmentAddress#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#timeouts EipSegmentAddress#timeouts}
  */
  readonly timeouts?: EipSegmentAddressTimeouts;
}
export interface EipSegmentAddressTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#create EipSegmentAddress#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#delete EipSegmentAddress#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#update EipSegmentAddress#update}
  */
  readonly update?: string;
}

export function eipSegmentAddressTimeoutsToTerraform(struct?: EipSegmentAddressTimeouts | cdktf.IResolvable): any {
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


export function eipSegmentAddressTimeoutsToHclTerraform(struct?: EipSegmentAddressTimeouts | cdktf.IResolvable): any {
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

export class EipSegmentAddressTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EipSegmentAddressTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EipSegmentAddressTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address alicloud_eip_segment_address}
*/
export class EipSegmentAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eip_segment_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EipSegmentAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EipSegmentAddress to import
  * @param importFromId The id of the existing EipSegmentAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EipSegmentAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eip_segment_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eip_segment_address alicloud_eip_segment_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipSegmentAddressConfig
  */
  public constructor(scope: Construct, id: string, config: EipSegmentAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eip_segment_address',
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
    this._bandwidth = config.bandwidth;
    this._eipMask = config.eipMask;
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._isp = config.isp;
    this._netmode = config.netmode;
    this._resourceGroupId = config.resourceGroupId;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eip_mask - computed: false, optional: false, required: true
  private _eipMask?: string; 
  public get eipMask() {
    return this.getStringAttribute('eip_mask');
  }
  public set eipMask(value: string) {
    this._eipMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipMaskInput() {
    return this._eipMask;
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

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // isp - computed: false, optional: true, required: false
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // netmode - computed: false, optional: true, required: false
  private _netmode?: string; 
  public get netmode() {
    return this.getStringAttribute('netmode');
  }
  public set netmode(value: string) {
    this._netmode = value;
  }
  public resetNetmode() {
    this._netmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmodeInput() {
    return this._netmode;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // segment_address_name - computed: true, optional: false, required: false
  public get segmentAddressName() {
    return this.getStringAttribute('segment_address_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EipSegmentAddressTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EipSegmentAddressTimeouts) {
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
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      eip_mask: cdktf.stringToTerraform(this._eipMask),
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      isp: cdktf.stringToTerraform(this._isp),
      netmode: cdktf.stringToTerraform(this._netmode),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: eipSegmentAddressTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip_mask: {
        value: cdktf.stringToHclTerraform(this._eipMask),
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
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isp: {
        value: cdktf.stringToHclTerraform(this._isp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmode: {
        value: cdktf.stringToHclTerraform(this._netmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: eipSegmentAddressTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EipSegmentAddressTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
