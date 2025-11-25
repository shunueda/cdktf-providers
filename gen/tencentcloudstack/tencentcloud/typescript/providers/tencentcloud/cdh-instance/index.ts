// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdhInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The available zone for the CDH instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#availability_zone CdhInstance#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * The charge type of instance. Valid values are `PREPAID`. The default is `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#charge_type CdhInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * The name of the CDH instance. The max length of host_name is 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#host_name CdhInstance#host_name}
  */
  readonly hostName?: string;
  /**
  * The type of the CDH instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#host_type CdhInstance#host_type}
  */
  readonly hostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#id CdhInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tenancy (time unit is month) of the prepaid instance, NOTE: it only works when charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#prepaid_period CdhInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#prepaid_renew_flag CdhInstance#prepaid_renew_flag}
  */
  readonly prepaidRenewFlag?: string;
  /**
  * The project the instance belongs to, default to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#project_id CdhInstance#project_id}
  */
  readonly projectId?: number;
}
export interface CdhInstanceHostResource {
}

export function cdhInstanceHostResourceToTerraform(struct?: CdhInstanceHostResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdhInstanceHostResourceToHclTerraform(struct?: CdhInstanceHostResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdhInstanceHostResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CdhInstanceHostResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdhInstanceHostResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_available_num - computed: true, optional: false, required: false
  public get cpuAvailableNum() {
    return this.getNumberAttribute('cpu_available_num');
  }

  // cpu_total_num - computed: true, optional: false, required: false
  public get cpuTotalNum() {
    return this.getNumberAttribute('cpu_total_num');
  }

  // disk_available_size - computed: true, optional: false, required: false
  public get diskAvailableSize() {
    return this.getNumberAttribute('disk_available_size');
  }

  // disk_total_size - computed: true, optional: false, required: false
  public get diskTotalSize() {
    return this.getNumberAttribute('disk_total_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // memory_available_size - computed: true, optional: false, required: false
  public get memoryAvailableSize() {
    return this.getNumberAttribute('memory_available_size');
  }

  // memory_total_size - computed: true, optional: false, required: false
  public get memoryTotalSize() {
    return this.getNumberAttribute('memory_total_size');
  }
}

export class CdhInstanceHostResourceList extends cdktf.ComplexList {

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
  public get(index: number): CdhInstanceHostResourceOutputReference {
    return new CdhInstanceHostResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance tencentcloud_cdh_instance}
*/
export class CdhInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdh_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdhInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdhInstance to import
  * @param importFromId The id of the existing CdhInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdhInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdh_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cdh_instance tencentcloud_cdh_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdhInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CdhInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdh_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._hostName = config.hostName;
    this._hostType = config.hostType;
    this._id = config.id;
    this._prepaidPeriod = config.prepaidPeriod;
    this._prepaidRenewFlag = config.prepaidRenewFlag;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cvm_instance_ids - computed: true, optional: false, required: false
  public get cvmInstanceIds() {
    return this.getListAttribute('cvm_instance_ids');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
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

  // host_resource - computed: true, optional: false, required: false
  private _hostResource = new CdhInstanceHostResourceList(this, "host_resource", false);
  public get hostResource() {
    return this._hostResource;
  }

  // host_state - computed: true, optional: false, required: false
  public get hostState() {
    return this.getStringAttribute('host_state');
  }

  // host_type - computed: false, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
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

  // prepaid_period - computed: false, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
  }

  // prepaid_renew_flag - computed: true, optional: true, required: false
  private _prepaidRenewFlag?: string; 
  public get prepaidRenewFlag() {
    return this.getStringAttribute('prepaid_renew_flag');
  }
  public set prepaidRenewFlag(value: string) {
    this._prepaidRenewFlag = value;
  }
  public resetPrepaidRenewFlag() {
    this._prepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidRenewFlagInput() {
    return this._prepaidRenewFlag;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      host_name: cdktf.stringToTerraform(this._hostName),
      host_type: cdktf.stringToTerraform(this._hostType),
      id: cdktf.stringToTerraform(this._id),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      prepaid_renew_flag: cdktf.stringToTerraform(this._prepaidRenewFlag),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
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
      host_type: {
        value: cdktf.stringToHclTerraform(this._hostType),
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
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepaid_renew_flag: {
        value: cdktf.stringToHclTerraform(this._prepaidRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
