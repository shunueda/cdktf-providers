// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcVswitchCidrReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#cidr_reservation_cidr VpcVswitchCidrReservation#cidr_reservation_cidr}
  */
  readonly cidrReservationCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#cidr_reservation_description VpcVswitchCidrReservation#cidr_reservation_description}
  */
  readonly cidrReservationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#cidr_reservation_mask VpcVswitchCidrReservation#cidr_reservation_mask}
  */
  readonly cidrReservationMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#cidr_reservation_type VpcVswitchCidrReservation#cidr_reservation_type}
  */
  readonly cidrReservationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#id VpcVswitchCidrReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#ip_version VpcVswitchCidrReservation#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#vswitch_cidr_reservation_name VpcVswitchCidrReservation#vswitch_cidr_reservation_name}
  */
  readonly vswitchCidrReservationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#vswitch_id VpcVswitchCidrReservation#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#timeouts VpcVswitchCidrReservation#timeouts}
  */
  readonly timeouts?: VpcVswitchCidrReservationTimeouts;
}
export interface VpcVswitchCidrReservationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#create VpcVswitchCidrReservation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#delete VpcVswitchCidrReservation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#update VpcVswitchCidrReservation#update}
  */
  readonly update?: string;
}

export function vpcVswitchCidrReservationTimeoutsToTerraform(struct?: VpcVswitchCidrReservationTimeouts | cdktf.IResolvable): any {
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


export function vpcVswitchCidrReservationTimeoutsToHclTerraform(struct?: VpcVswitchCidrReservationTimeouts | cdktf.IResolvable): any {
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

export class VpcVswitchCidrReservationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcVswitchCidrReservationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcVswitchCidrReservationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation alicloud_vpc_vswitch_cidr_reservation}
*/
export class VpcVswitchCidrReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_vswitch_cidr_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcVswitchCidrReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcVswitchCidrReservation to import
  * @param importFromId The id of the existing VpcVswitchCidrReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcVswitchCidrReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_vswitch_cidr_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/vpc_vswitch_cidr_reservation alicloud_vpc_vswitch_cidr_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcVswitchCidrReservationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcVswitchCidrReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_vswitch_cidr_reservation',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrReservationCidr = config.cidrReservationCidr;
    this._cidrReservationDescription = config.cidrReservationDescription;
    this._cidrReservationMask = config.cidrReservationMask;
    this._cidrReservationType = config.cidrReservationType;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._vswitchCidrReservationName = config.vswitchCidrReservationName;
    this._vswitchId = config.vswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_reservation_cidr - computed: true, optional: true, required: false
  private _cidrReservationCidr?: string; 
  public get cidrReservationCidr() {
    return this.getStringAttribute('cidr_reservation_cidr');
  }
  public set cidrReservationCidr(value: string) {
    this._cidrReservationCidr = value;
  }
  public resetCidrReservationCidr() {
    this._cidrReservationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrReservationCidrInput() {
    return this._cidrReservationCidr;
  }

  // cidr_reservation_description - computed: false, optional: true, required: false
  private _cidrReservationDescription?: string; 
  public get cidrReservationDescription() {
    return this.getStringAttribute('cidr_reservation_description');
  }
  public set cidrReservationDescription(value: string) {
    this._cidrReservationDescription = value;
  }
  public resetCidrReservationDescription() {
    this._cidrReservationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrReservationDescriptionInput() {
    return this._cidrReservationDescription;
  }

  // cidr_reservation_mask - computed: false, optional: true, required: false
  private _cidrReservationMask?: string; 
  public get cidrReservationMask() {
    return this.getStringAttribute('cidr_reservation_mask');
  }
  public set cidrReservationMask(value: string) {
    this._cidrReservationMask = value;
  }
  public resetCidrReservationMask() {
    this._cidrReservationMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrReservationMaskInput() {
    return this._cidrReservationMask;
  }

  // cidr_reservation_type - computed: true, optional: true, required: false
  private _cidrReservationType?: string; 
  public get cidrReservationType() {
    return this.getStringAttribute('cidr_reservation_type');
  }
  public set cidrReservationType(value: string) {
    this._cidrReservationType = value;
  }
  public resetCidrReservationType() {
    this._cidrReservationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrReservationTypeInput() {
    return this._cidrReservationType;
  }

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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_cidr_reservation_id - computed: true, optional: false, required: false
  public get vswitchCidrReservationId() {
    return this.getStringAttribute('vswitch_cidr_reservation_id');
  }

  // vswitch_cidr_reservation_name - computed: false, optional: true, required: false
  private _vswitchCidrReservationName?: string; 
  public get vswitchCidrReservationName() {
    return this.getStringAttribute('vswitch_cidr_reservation_name');
  }
  public set vswitchCidrReservationName(value: string) {
    this._vswitchCidrReservationName = value;
  }
  public resetVswitchCidrReservationName() {
    this._vswitchCidrReservationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchCidrReservationNameInput() {
    return this._vswitchCidrReservationName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcVswitchCidrReservationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcVswitchCidrReservationTimeouts) {
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
      cidr_reservation_cidr: cdktf.stringToTerraform(this._cidrReservationCidr),
      cidr_reservation_description: cdktf.stringToTerraform(this._cidrReservationDescription),
      cidr_reservation_mask: cdktf.stringToTerraform(this._cidrReservationMask),
      cidr_reservation_type: cdktf.stringToTerraform(this._cidrReservationType),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      vswitch_cidr_reservation_name: cdktf.stringToTerraform(this._vswitchCidrReservationName),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: vpcVswitchCidrReservationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_reservation_cidr: {
        value: cdktf.stringToHclTerraform(this._cidrReservationCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_reservation_description: {
        value: cdktf.stringToHclTerraform(this._cidrReservationDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_reservation_mask: {
        value: cdktf.stringToHclTerraform(this._cidrReservationMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_reservation_type: {
        value: cdktf.stringToHclTerraform(this._cidrReservationType),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_cidr_reservation_name: {
        value: cdktf.stringToHclTerraform(this._vswitchCidrReservationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcVswitchCidrReservationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcVswitchCidrReservationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
