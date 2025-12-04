// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing type: `PREPAID` prepaid, `POSTPAID_BY_HOUR` postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#charge_type ClickhouseInstance#charge_type}
  */
  readonly chargeType: string;
  /**
  * The password for the default account to log in to the instance. 8-16 characters, including at least three of the following: uppercase letters, lowercase letters, numbers, and special characters `!@#%^*`. The first character cannot be a special character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#ck_default_user_pwd ClickhouseInstance#ck_default_user_pwd}
  */
  readonly ckDefaultUserPwd?: string;
  /**
  * CLS log set id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#cls_log_set_id ClickhouseInstance#cls_log_set_id}
  */
  readonly clsLogSetId?: string;
  /**
  * COS bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#cos_bucket_name ClickhouseInstance#cos_bucket_name}
  */
  readonly cosBucketName?: string;
  /**
  * Whether it is highly available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#ha_flag ClickhouseInstance#ha_flag}
  */
  readonly haFlag: boolean | cdktf.IResolvable;
  /**
  * Whether ZK is highly available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#ha_zk ClickhouseInstance#ha_zk}
  */
  readonly haZk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#id ClickhouseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#instance_name ClickhouseInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Whether it is mounted on a bare disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#mount_disk_type ClickhouseInstance#mount_disk_type}
  */
  readonly mountDiskType?: number;
  /**
  * Product version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#product_version ClickhouseInstance#product_version}
  */
  readonly productVersion: string;
  /**
  * PREPAID needs to be passed. Whether to renew automatically. 1 means auto renewal is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#renew_flag ClickhouseInstance#renew_flag}
  */
  readonly renewFlag?: number;
  /**
  * Subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#subnet_id ClickhouseInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#tags ClickhouseInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Prepaid needs to be delivered, billing time length, how many months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#time_span ClickhouseInstance#time_span}
  */
  readonly timeSpan?: number;
  /**
  * Private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#vpc_id ClickhouseInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#zone ClickhouseInstance#zone}
  */
  readonly zone: string;
  /**
  * common_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#common_spec ClickhouseInstance#common_spec}
  */
  readonly commonSpec?: ClickhouseInstanceCommonSpec;
  /**
  * data_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#data_spec ClickhouseInstance#data_spec}
  */
  readonly dataSpec: ClickhouseInstanceDataSpec;
  /**
  * secondary_zone_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#secondary_zone_info ClickhouseInstance#secondary_zone_info}
  */
  readonly secondaryZoneInfo?: ClickhouseInstanceSecondaryZoneInfo[] | cdktf.IResolvable;
}
export interface ClickhouseInstanceCommonSpec {
  /**
  * Node count. NOTE: Only support value 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#count ClickhouseInstance#count}
  */
  readonly count: number;
  /**
  * Disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#disk_size ClickhouseInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * Spec name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#spec_name ClickhouseInstance#spec_name}
  */
  readonly specName: string;
}

export function clickhouseInstanceCommonSpecToTerraform(struct?: ClickhouseInstanceCommonSpecOutputReference | ClickhouseInstanceCommonSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function clickhouseInstanceCommonSpecToHclTerraform(struct?: ClickhouseInstanceCommonSpecOutputReference | ClickhouseInstanceCommonSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseInstanceCommonSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseInstanceCommonSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseInstanceCommonSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._diskSize = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._diskSize = value.diskSize;
      this._specName = value.specName;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // spec_name - computed: false, optional: false, required: true
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface ClickhouseInstanceDataSpec {
  /**
  * Data spec count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#count ClickhouseInstance#count}
  */
  readonly count: number;
  /**
  * Disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#disk_size ClickhouseInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * Spec name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#spec_name ClickhouseInstance#spec_name}
  */
  readonly specName: string;
}

export function clickhouseInstanceDataSpecToTerraform(struct?: ClickhouseInstanceDataSpecOutputReference | ClickhouseInstanceDataSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function clickhouseInstanceDataSpecToHclTerraform(struct?: ClickhouseInstanceDataSpecOutputReference | ClickhouseInstanceDataSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseInstanceDataSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseInstanceDataSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseInstanceDataSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._diskSize = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._diskSize = value.diskSize;
      this._specName = value.specName;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // spec_name - computed: false, optional: false, required: true
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface ClickhouseInstanceSecondaryZoneInfo {
  /**
  * Secondary subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#secondary_subnet ClickhouseInstance#secondary_subnet}
  */
  readonly secondarySubnet?: string;
  /**
  * Secondary zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#secondary_zone ClickhouseInstance#secondary_zone}
  */
  readonly secondaryZone?: string;
}

export function clickhouseInstanceSecondaryZoneInfoToTerraform(struct?: ClickhouseInstanceSecondaryZoneInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secondary_subnet: cdktf.stringToTerraform(struct!.secondarySubnet),
    secondary_zone: cdktf.stringToTerraform(struct!.secondaryZone),
  }
}


export function clickhouseInstanceSecondaryZoneInfoToHclTerraform(struct?: ClickhouseInstanceSecondaryZoneInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secondary_subnet: {
      value: cdktf.stringToHclTerraform(struct!.secondarySubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_zone: {
      value: cdktf.stringToHclTerraform(struct!.secondaryZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseInstanceSecondaryZoneInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseInstanceSecondaryZoneInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secondarySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySubnet = this._secondarySubnet;
    }
    if (this._secondaryZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryZone = this._secondaryZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseInstanceSecondaryZoneInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secondarySubnet = undefined;
      this._secondaryZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secondarySubnet = value.secondarySubnet;
      this._secondaryZone = value.secondaryZone;
    }
  }

  // secondary_subnet - computed: true, optional: true, required: false
  private _secondarySubnet?: string; 
  public get secondarySubnet() {
    return this.getStringAttribute('secondary_subnet');
  }
  public set secondarySubnet(value: string) {
    this._secondarySubnet = value;
  }
  public resetSecondarySubnet() {
    this._secondarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySubnetInput() {
    return this._secondarySubnet;
  }

  // secondary_zone - computed: true, optional: true, required: false
  private _secondaryZone?: string; 
  public get secondaryZone() {
    return this.getStringAttribute('secondary_zone');
  }
  public set secondaryZone(value: string) {
    this._secondaryZone = value;
  }
  public resetSecondaryZone() {
    this._secondaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneInput() {
    return this._secondaryZone;
  }
}

export class ClickhouseInstanceSecondaryZoneInfoList extends cdktf.ComplexList {
  public internalValue? : ClickhouseInstanceSecondaryZoneInfo[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseInstanceSecondaryZoneInfoOutputReference {
    return new ClickhouseInstanceSecondaryZoneInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance tencentcloud_clickhouse_instance}
*/
export class ClickhouseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clickhouse_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseInstance to import
  * @param importFromId The id of the existing ClickhouseInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clickhouse_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/clickhouse_instance tencentcloud_clickhouse_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clickhouse_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chargeType = config.chargeType;
    this._ckDefaultUserPwd = config.ckDefaultUserPwd;
    this._clsLogSetId = config.clsLogSetId;
    this._cosBucketName = config.cosBucketName;
    this._haFlag = config.haFlag;
    this._haZk = config.haZk;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._mountDiskType = config.mountDiskType;
    this._productVersion = config.productVersion;
    this._renewFlag = config.renewFlag;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeSpan = config.timeSpan;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
    this._commonSpec.internalValue = config.commonSpec;
    this._dataSpec.internalValue = config.dataSpec;
    this._secondaryZoneInfo.internalValue = config.secondaryZoneInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_info - computed: true, optional: false, required: false
  public get accessInfo() {
    return this.getStringAttribute('access_info');
  }

  // charge_type - computed: false, optional: false, required: true
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // ck_default_user_pwd - computed: false, optional: true, required: false
  private _ckDefaultUserPwd?: string; 
  public get ckDefaultUserPwd() {
    return this.getStringAttribute('ck_default_user_pwd');
  }
  public set ckDefaultUserPwd(value: string) {
    this._ckDefaultUserPwd = value;
  }
  public resetCkDefaultUserPwd() {
    this._ckDefaultUserPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckDefaultUserPwdInput() {
    return this._ckDefaultUserPwd;
  }

  // cls_log_set_id - computed: true, optional: true, required: false
  private _clsLogSetId?: string; 
  public get clsLogSetId() {
    return this.getStringAttribute('cls_log_set_id');
  }
  public set clsLogSetId(value: string) {
    this._clsLogSetId = value;
  }
  public resetClsLogSetId() {
    this._clsLogSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsLogSetIdInput() {
    return this._clsLogSetId;
  }

  // cos_bucket_name - computed: true, optional: true, required: false
  private _cosBucketName?: string; 
  public get cosBucketName() {
    return this.getStringAttribute('cos_bucket_name');
  }
  public set cosBucketName(value: string) {
    this._cosBucketName = value;
  }
  public resetCosBucketName() {
    this._cosBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketNameInput() {
    return this._cosBucketName;
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // ha_flag - computed: false, optional: false, required: true
  private _haFlag?: boolean | cdktf.IResolvable; 
  public get haFlag() {
    return this.getBooleanAttribute('ha_flag');
  }
  public set haFlag(value: boolean | cdktf.IResolvable) {
    this._haFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get haFlagInput() {
    return this._haFlag;
  }

  // ha_zk - computed: true, optional: true, required: false
  private _haZk?: boolean | cdktf.IResolvable; 
  public get haZk() {
    return this.getBooleanAttribute('ha_zk');
  }
  public set haZk(value: boolean | cdktf.IResolvable) {
    this._haZk = value;
  }
  public resetHaZk() {
    this._haZk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haZkInput() {
    return this._haZk;
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

  // mount_disk_type - computed: true, optional: true, required: false
  private _mountDiskType?: number; 
  public get mountDiskType() {
    return this.getNumberAttribute('mount_disk_type');
  }
  public set mountDiskType(value: number) {
    this._mountDiskType = value;
  }
  public resetMountDiskType() {
    this._mountDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDiskTypeInput() {
    return this._mountDiskType;
  }

  // product_version - computed: false, optional: false, required: true
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // renew_flag - computed: true, optional: true, required: false
  private _renewFlag?: number; 
  public get renewFlag() {
    return this.getNumberAttribute('renew_flag');
  }
  public set renewFlag(value: number) {
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

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
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

  // common_spec - computed: false, optional: true, required: false
  private _commonSpec = new ClickhouseInstanceCommonSpecOutputReference(this, "common_spec");
  public get commonSpec() {
    return this._commonSpec;
  }
  public putCommonSpec(value: ClickhouseInstanceCommonSpec) {
    this._commonSpec.internalValue = value;
  }
  public resetCommonSpec() {
    this._commonSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonSpecInput() {
    return this._commonSpec.internalValue;
  }

  // data_spec - computed: false, optional: false, required: true
  private _dataSpec = new ClickhouseInstanceDataSpecOutputReference(this, "data_spec");
  public get dataSpec() {
    return this._dataSpec;
  }
  public putDataSpec(value: ClickhouseInstanceDataSpec) {
    this._dataSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSpecInput() {
    return this._dataSpec.internalValue;
  }

  // secondary_zone_info - computed: false, optional: true, required: false
  private _secondaryZoneInfo = new ClickhouseInstanceSecondaryZoneInfoList(this, "secondary_zone_info", false);
  public get secondaryZoneInfo() {
    return this._secondaryZoneInfo;
  }
  public putSecondaryZoneInfo(value: ClickhouseInstanceSecondaryZoneInfo[] | cdktf.IResolvable) {
    this._secondaryZoneInfo.internalValue = value;
  }
  public resetSecondaryZoneInfo() {
    this._secondaryZoneInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneInfoInput() {
    return this._secondaryZoneInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charge_type: cdktf.stringToTerraform(this._chargeType),
      ck_default_user_pwd: cdktf.stringToTerraform(this._ckDefaultUserPwd),
      cls_log_set_id: cdktf.stringToTerraform(this._clsLogSetId),
      cos_bucket_name: cdktf.stringToTerraform(this._cosBucketName),
      ha_flag: cdktf.booleanToTerraform(this._haFlag),
      ha_zk: cdktf.booleanToTerraform(this._haZk),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      mount_disk_type: cdktf.numberToTerraform(this._mountDiskType),
      product_version: cdktf.stringToTerraform(this._productVersion),
      renew_flag: cdktf.numberToTerraform(this._renewFlag),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
      common_spec: clickhouseInstanceCommonSpecToTerraform(this._commonSpec.internalValue),
      data_spec: clickhouseInstanceDataSpecToTerraform(this._dataSpec.internalValue),
      secondary_zone_info: cdktf.listMapper(clickhouseInstanceSecondaryZoneInfoToTerraform, true)(this._secondaryZoneInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ck_default_user_pwd: {
        value: cdktf.stringToHclTerraform(this._ckDefaultUserPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cls_log_set_id: {
        value: cdktf.stringToHclTerraform(this._clsLogSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_bucket_name: {
        value: cdktf.stringToHclTerraform(this._cosBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_flag: {
        value: cdktf.booleanToHclTerraform(this._haFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_zk: {
        value: cdktf.booleanToHclTerraform(this._haZk),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_disk_type: {
        value: cdktf.numberToHclTerraform(this._mountDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_flag: {
        value: cdktf.numberToHclTerraform(this._renewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      common_spec: {
        value: clickhouseInstanceCommonSpecToHclTerraform(this._commonSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseInstanceCommonSpecList",
      },
      data_spec: {
        value: clickhouseInstanceDataSpecToHclTerraform(this._dataSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseInstanceDataSpecList",
      },
      secondary_zone_info: {
        value: cdktf.listMapperHcl(clickhouseInstanceSecondaryZoneInfoToHclTerraform, true)(this._secondaryZoneInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseInstanceSecondaryZoneInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
