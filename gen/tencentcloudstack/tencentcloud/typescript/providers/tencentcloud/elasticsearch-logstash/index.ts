// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchLogstashConfig extends cdktf.TerraformMetaArguments {
  /**
  * whether to use voucher auto, 1 when use, else 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#auto_voucher ElasticsearchLogstash#auto_voucher}
  */
  readonly autoVoucher?: number;
  /**
  * Period when charged by months or years(unit depends on TimeUnit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#charge_period ElasticsearchLogstash#charge_period}
  */
  readonly chargePeriod?: number;
  /**
  * Charge type. PREPAID: charged by months or years; POSTPAID_BY_HOUR: charged by hours; default vaule: POSTPAID_BY_HOUR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#charge_type ElasticsearchLogstash#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Deployment mode, 0: single availability zone, 1: multiple availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#deploy_mode ElasticsearchLogstash#deploy_mode}
  */
  readonly deployMode?: number;
  /**
  * node disk size (unit GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#disk_size ElasticsearchLogstash#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Disk type. CLOUD_SSD: SSD cloud disk; CLOUD_PREMIUM: high hard energy cloud disk; default: CLOUD_SSD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#disk_type ElasticsearchLogstash#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#id ElasticsearchLogstash#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name (compose of 1-50 letter, number, - or _).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#instance_name ElasticsearchLogstash#instance_name}
  */
  readonly instanceName: string;
  /**
  * License type. oss: open source version; xpack:xpack version; default: xpack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#license_type ElasticsearchLogstash#license_type}
  */
  readonly licenseType?: string;
  /**
  * Instance version(6.8.13, 7.10.1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#logstash_version ElasticsearchLogstash#logstash_version}
  */
  readonly logstashVersion: string;
  /**
  * Node num(range 2-50).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#node_num ElasticsearchLogstash#node_num}
  */
  readonly nodeNum?: number;
  /**
  * Node type. Valid values:
  * - LOGSTASH.S1.SMALL2: 1 core 2G;
  * - LOGSTASH.S1.MEDIUM4:2 core 4G;
  * - LOGSTASH.S1.MEDIUM8:2 core 8G;
  * - LOGSTASH.S1.LARGE16:4 core 16G;
  * - LOGSTASH.S1.2XLARGE32:8 core 32G;
  * - LOGSTASH.S1.4XLARGE32:16 core 32G;
  * - LOGSTASH.S1.4XLARGE64:16 core 64G.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#node_type ElasticsearchLogstash#node_type}
  */
  readonly nodeType?: string;
  /**
  * Automatic renewal flag. RENEW_FLAG_AUTO: auto renewal; RENEW_FLAG_MANUAL: do not renew automatically, users renew manually. It needs to be set when ChargeType is PREPAID. If this parameter is not passed, ordinary users will not renew automatically by default, and SVIP users will renew automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#renew_flag ElasticsearchLogstash#renew_flag}
  */
  readonly renewFlag?: string;
  /**
  * Subnet id. Create multi zone instance, parameter subnet_id need input '-', details input to multi_zone_infos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#subnet_id ElasticsearchLogstash#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#tags ElasticsearchLogstash#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * charge time unit(set when ChargeType is PREPAID, default value: ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#time_unit ElasticsearchLogstash#time_unit}
  */
  readonly timeUnit?: string;
  /**
  * Voucher list(only can use one voucher by now).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#voucher_ids ElasticsearchLogstash#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * VPC id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#vpc_id ElasticsearchLogstash#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Available zone. Create multi zone instance, parameter zone need input '-', details input to multi_zone_infos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#zone ElasticsearchLogstash#zone}
  */
  readonly zone: string;
  /**
  * multi_zone_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#multi_zone_infos ElasticsearchLogstash#multi_zone_infos}
  */
  readonly multiZoneInfos?: ElasticsearchLogstashMultiZoneInfos[] | cdktf.IResolvable;
  /**
  * operation_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#operation_duration ElasticsearchLogstash#operation_duration}
  */
  readonly operationDuration?: ElasticsearchLogstashOperationDuration;
}
export interface ElasticsearchLogstashMultiZoneInfos {
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#availability_zone ElasticsearchLogstash#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Whether it is a hidden availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#hidden ElasticsearchLogstash#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#subnet_id ElasticsearchLogstash#subnet_id}
  */
  readonly subnetId: string;
}

export function elasticsearchLogstashMultiZoneInfosToTerraform(struct?: ElasticsearchLogstashMultiZoneInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function elasticsearchLogstashMultiZoneInfosToHclTerraform(struct?: ElasticsearchLogstashMultiZoneInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchLogstashMultiZoneInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ElasticsearchLogstashMultiZoneInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchLogstashMultiZoneInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._hidden = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._hidden = value.hidden;
      this._subnetId = value.subnetId;
    }
  }

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

  // hidden - computed: true, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ElasticsearchLogstashMultiZoneInfosList extends cdktf.ComplexList {
  public internalValue? : ElasticsearchLogstashMultiZoneInfos[] | cdktf.IResolvable

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
  public get(index: number): ElasticsearchLogstashMultiZoneInfosOutputReference {
    return new ElasticsearchLogstashMultiZoneInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ElasticsearchLogstashOperationDuration {
  /**
  * day of week, from Monday to Sunday, value range: [0, 6]notes: may return null when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#periods ElasticsearchLogstash#periods}
  */
  readonly periods: number[];
  /**
  * operation end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#time_end ElasticsearchLogstash#time_end}
  */
  readonly timeEnd: string;
  /**
  * operation start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#time_start ElasticsearchLogstash#time_start}
  */
  readonly timeStart: string;
  /**
  * time zone, for example: UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#time_zone ElasticsearchLogstash#time_zone}
  */
  readonly timeZone: string;
}

export function elasticsearchLogstashOperationDurationToTerraform(struct?: ElasticsearchLogstashOperationDurationOutputReference | ElasticsearchLogstashOperationDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    periods: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.periods),
    time_end: cdktf.stringToTerraform(struct!.timeEnd),
    time_start: cdktf.stringToTerraform(struct!.timeStart),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function elasticsearchLogstashOperationDurationToHclTerraform(struct?: ElasticsearchLogstashOperationDurationOutputReference | ElasticsearchLogstashOperationDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    periods: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.periods),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    time_end: {
      value: cdktf.stringToHclTerraform(struct!.timeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_start: {
      value: cdktf.stringToHclTerraform(struct!.timeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticsearchLogstashOperationDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticsearchLogstashOperationDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periods !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods;
    }
    if (this._timeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeEnd = this._timeEnd;
    }
    if (this._timeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStart = this._timeStart;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchLogstashOperationDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._periods = undefined;
      this._timeEnd = undefined;
      this._timeStart = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._periods = value.periods;
      this._timeEnd = value.timeEnd;
      this._timeStart = value.timeStart;
      this._timeZone = value.timeZone;
    }
  }

  // periods - computed: false, optional: false, required: true
  private _periods?: number[]; 
  public get periods() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('periods')));
  }
  public set periods(value: number[]) {
    this._periods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods;
  }

  // time_end - computed: false, optional: false, required: true
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: false, optional: false, required: true
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash tencentcloud_elasticsearch_logstash}
*/
export class ElasticsearchLogstash extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_logstash";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchLogstash resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchLogstash to import
  * @param importFromId The id of the existing ElasticsearchLogstash that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchLogstash to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_logstash", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/elasticsearch_logstash tencentcloud_elasticsearch_logstash} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchLogstashConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchLogstashConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_logstash',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVoucher = config.autoVoucher;
    this._chargePeriod = config.chargePeriod;
    this._chargeType = config.chargeType;
    this._deployMode = config.deployMode;
    this._diskSize = config.diskSize;
    this._diskType = config.diskType;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._licenseType = config.licenseType;
    this._logstashVersion = config.logstashVersion;
    this._nodeNum = config.nodeNum;
    this._nodeType = config.nodeType;
    this._renewFlag = config.renewFlag;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeUnit = config.timeUnit;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
    this._multiZoneInfos.internalValue = config.multiZoneInfos;
    this._operationDuration.internalValue = config.operationDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_voucher - computed: false, optional: true, required: false
  private _autoVoucher?: number; 
  public get autoVoucher() {
    return this.getNumberAttribute('auto_voucher');
  }
  public set autoVoucher(value: number) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // charge_period - computed: false, optional: true, required: false
  private _chargePeriod?: number; 
  public get chargePeriod() {
    return this.getNumberAttribute('charge_period');
  }
  public set chargePeriod(value: number) {
    this._chargePeriod = value;
  }
  public resetChargePeriod() {
    this._chargePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargePeriodInput() {
    return this._chargePeriod;
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

  // deploy_mode - computed: false, optional: true, required: false
  private _deployMode?: number; 
  public get deployMode() {
    return this.getNumberAttribute('deploy_mode');
  }
  public set deployMode(value: number) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // logstash_version - computed: false, optional: false, required: true
  private _logstashVersion?: string; 
  public get logstashVersion() {
    return this.getStringAttribute('logstash_version');
  }
  public set logstashVersion(value: string) {
    this._logstashVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashVersionInput() {
    return this._logstashVersion;
  }

  // node_num - computed: false, optional: true, required: false
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: true, optional: true, required: false
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

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // voucher_ids - computed: false, optional: true, required: false
  private _voucherIds?: string[]; 
  public get voucherIds() {
    return cdktf.Fn.tolist(this.getListAttribute('voucher_ids'));
  }
  public set voucherIds(value: string[]) {
    this._voucherIds = value;
  }
  public resetVoucherIds() {
    this._voucherIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voucherIdsInput() {
    return this._voucherIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // multi_zone_infos - computed: false, optional: true, required: false
  private _multiZoneInfos = new ElasticsearchLogstashMultiZoneInfosList(this, "multi_zone_infos", false);
  public get multiZoneInfos() {
    return this._multiZoneInfos;
  }
  public putMultiZoneInfos(value: ElasticsearchLogstashMultiZoneInfos[] | cdktf.IResolvable) {
    this._multiZoneInfos.internalValue = value;
  }
  public resetMultiZoneInfos() {
    this._multiZoneInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInfosInput() {
    return this._multiZoneInfos.internalValue;
  }

  // operation_duration - computed: false, optional: true, required: false
  private _operationDuration = new ElasticsearchLogstashOperationDurationOutputReference(this, "operation_duration");
  public get operationDuration() {
    return this._operationDuration;
  }
  public putOperationDuration(value: ElasticsearchLogstashOperationDuration) {
    this._operationDuration.internalValue = value;
  }
  public resetOperationDuration() {
    this._operationDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDurationInput() {
    return this._operationDuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_voucher: cdktf.numberToTerraform(this._autoVoucher),
      charge_period: cdktf.numberToTerraform(this._chargePeriod),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      deploy_mode: cdktf.numberToTerraform(this._deployMode),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      license_type: cdktf.stringToTerraform(this._licenseType),
      logstash_version: cdktf.stringToTerraform(this._logstashVersion),
      node_num: cdktf.numberToTerraform(this._nodeNum),
      node_type: cdktf.stringToTerraform(this._nodeType),
      renew_flag: cdktf.stringToTerraform(this._renewFlag),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
      multi_zone_infos: cdktf.listMapper(elasticsearchLogstashMultiZoneInfosToTerraform, true)(this._multiZoneInfos.internalValue),
      operation_duration: elasticsearchLogstashOperationDurationToTerraform(this._operationDuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_voucher: {
        value: cdktf.numberToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_period: {
        value: cdktf.numberToHclTerraform(this._chargePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.numberToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logstash_version: {
        value: cdktf.stringToHclTerraform(this._logstashVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_num: {
        value: cdktf.numberToHclTerraform(this._nodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_flag: {
        value: cdktf.stringToHclTerraform(this._renewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voucher_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._voucherIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
      multi_zone_infos: {
        value: cdktf.listMapperHcl(elasticsearchLogstashMultiZoneInfosToHclTerraform, true)(this._multiZoneInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchLogstashMultiZoneInfosList",
      },
      operation_duration: {
        value: elasticsearchLogstashOperationDurationToHclTerraform(this._operationDuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElasticsearchLogstashOperationDurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
