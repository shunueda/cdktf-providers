// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmRenewInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#id CvmRenewInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#instance_id CvmRenewInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to renew the elastic data disk. Valid values:
  * - `TRUE`: Indicates to renew the subscription instance and renew the attached elastic data disk at the same time
  * - `FALSE`: Indicates that the subscription instance will be renewed and the elastic data disk attached to it will not be renewed
  * Default value: TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#renew_portable_data_disk CvmRenewInstance#renew_portable_data_disk}
  */
  readonly renewPortableDataDisk?: boolean | cdktf.IResolvable;
  /**
  * instance_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#instance_charge_prepaid CvmRenewInstance#instance_charge_prepaid}
  */
  readonly instanceChargePrepaid?: CvmRenewInstanceInstanceChargePrepaid;
}
export interface CvmRenewInstanceInstanceChargePrepaid {
  /**
  * Subscription period; unit: month; valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60. Note: This field may return null, indicating that no valid value is found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#period CvmRenewInstance#period}
  */
  readonly period: number;
  /**
  * Auto renewal flag. Valid values:
  * - `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically;
  * - `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically;
  * - `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically;
  * Default value: NOTIFY_AND_MANUAL_RENEW. If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. Note: This field may return null, indicating that no valid value is found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#renew_flag CvmRenewInstance#renew_flag}
  */
  readonly renewFlag?: string;
}

export function cvmRenewInstanceInstanceChargePrepaidToTerraform(struct?: CvmRenewInstanceInstanceChargePrepaidOutputReference | CvmRenewInstanceInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
  }
}


export function cvmRenewInstanceInstanceChargePrepaidToHclTerraform(struct?: CvmRenewInstanceInstanceChargePrepaidOutputReference | CvmRenewInstanceInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmRenewInstanceInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmRenewInstanceInstanceChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmRenewInstanceInstanceChargePrepaid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._renewFlag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._renewFlag = value.renewFlag;
    }
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // renew_flag - computed: false, optional: true, required: false
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance tencentcloud_cvm_renew_instance}
*/
export class CvmRenewInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_renew_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmRenewInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmRenewInstance to import
  * @param importFromId The id of the existing CvmRenewInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmRenewInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_renew_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cvm_renew_instance tencentcloud_cvm_renew_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmRenewInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CvmRenewInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_renew_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._instanceId = config.instanceId;
    this._renewPortableDataDisk = config.renewPortableDataDisk;
    this._instanceChargePrepaid.internalValue = config.instanceChargePrepaid;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // renew_portable_data_disk - computed: false, optional: true, required: false
  private _renewPortableDataDisk?: boolean | cdktf.IResolvable; 
  public get renewPortableDataDisk() {
    return this.getBooleanAttribute('renew_portable_data_disk');
  }
  public set renewPortableDataDisk(value: boolean | cdktf.IResolvable) {
    this._renewPortableDataDisk = value;
  }
  public resetRenewPortableDataDisk() {
    this._renewPortableDataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewPortableDataDiskInput() {
    return this._renewPortableDataDisk;
  }

  // instance_charge_prepaid - computed: false, optional: true, required: false
  private _instanceChargePrepaid = new CvmRenewInstanceInstanceChargePrepaidOutputReference(this, "instance_charge_prepaid");
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }
  public putInstanceChargePrepaid(value: CvmRenewInstanceInstanceChargePrepaid) {
    this._instanceChargePrepaid.internalValue = value;
  }
  public resetInstanceChargePrepaid() {
    this._instanceChargePrepaid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargePrepaidInput() {
    return this._instanceChargePrepaid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      renew_portable_data_disk: cdktf.booleanToTerraform(this._renewPortableDataDisk),
      instance_charge_prepaid: cvmRenewInstanceInstanceChargePrepaidToTerraform(this._instanceChargePrepaid.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_portable_data_disk: {
        value: cdktf.booleanToHclTerraform(this._renewPortableDataDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_charge_prepaid: {
        value: cvmRenewInstanceInstanceChargePrepaidToHclTerraform(this._instanceChargePrepaid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmRenewInstanceInstanceChargePrepaidList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
