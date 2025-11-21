// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdwdorisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the table name is case sensitive, 0 refers to sensitive, 1 refers to insensitive, compared in lowercase; 2 refers to insensitive, and the table name is changed to lowercase for storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#case_sensitive CdwdorisInstance#case_sensitive}
  */
  readonly caseSensitive?: number;
  /**
  * Database password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#doris_user_pwd CdwdorisInstance#doris_user_pwd}
  */
  readonly dorisUserPwd: string;
  /**
  * Whether to enable multi-availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#enable_multi_zones CdwdorisInstance#enable_multi_zones}
  */
  readonly enableMultiZones?: boolean | cdktf.IResolvable;
  /**
  * Whether it is highly available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#ha_flag CdwdorisInstance#ha_flag}
  */
  readonly haFlag: boolean | cdktf.IResolvable;
  /**
  * High availability type: 0 indicates non-high availability (only one FE, FeSpec.CreateInstanceSpec.Count=1), 1 indicates read high availability (at least 3 FEs must be deployed, FeSpec.CreateInstanceSpec.Count>=3, and it must be an odd number), 2 indicates read and write high availability (at least 5 FEs must be deployed, FeSpec.CreateInstanceSpec.Count>=5, and it must be an odd number).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#ha_type CdwdorisInstance#ha_type}
  */
  readonly haType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#id CdwdorisInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#instance_name CdwdorisInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Product version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#product_version CdwdorisInstance#product_version}
  */
  readonly productVersion: string;
  /**
  * Security Group Id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#security_group_ids CdwdorisInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * User subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#user_subnet_id CdwdorisInstance#user_subnet_id}
  */
  readonly userSubnetId: string;
  /**
  * User VPCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#user_vpc_id CdwdorisInstance#user_vpc_id}
  */
  readonly userVpcId: string;
  /**
  * Whether to enable resource group. `open` - enable, `close` - disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#workload_group_status CdwdorisInstance#workload_group_status}
  */
  readonly workloadGroupStatus: string;
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#zone CdwdorisInstance#zone}
  */
  readonly zone: string;
  /**
  * be_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#be_spec CdwdorisInstance#be_spec}
  */
  readonly beSpec: CdwdorisInstanceBeSpec;
  /**
  * charge_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#charge_properties CdwdorisInstance#charge_properties}
  */
  readonly chargeProperties: CdwdorisInstanceChargeProperties;
  /**
  * fe_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#fe_spec CdwdorisInstance#fe_spec}
  */
  readonly feSpec: CdwdorisInstanceFeSpec;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#tags CdwdorisInstance#tags}
  */
  readonly tags?: CdwdorisInstanceTags[] | cdktf.IResolvable;
  /**
  * user_multi_zone_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#user_multi_zone_infos CdwdorisInstance#user_multi_zone_infos}
  */
  readonly userMultiZoneInfos?: CdwdorisInstanceUserMultiZoneInfos;
}
export interface CdwdorisInstanceBeSpec {
  /**
  * Quantities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#count CdwdorisInstance#count}
  */
  readonly count: number;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#disk_size CdwdorisInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * Specification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#spec_name CdwdorisInstance#spec_name}
  */
  readonly specName: string;
}

export function cdwdorisInstanceBeSpecToTerraform(struct?: CdwdorisInstanceBeSpecOutputReference | CdwdorisInstanceBeSpec): any {
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


export function cdwdorisInstanceBeSpecToHclTerraform(struct?: CdwdorisInstanceBeSpecOutputReference | CdwdorisInstanceBeSpec): any {
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

export class CdwdorisInstanceBeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwdorisInstanceBeSpec | undefined {
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

  public set internalValue(value: CdwdorisInstanceBeSpec | undefined) {
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
export interface CdwdorisInstanceChargeProperties {
  /**
  * Billing type: `PREPAID` for prepayment, and `POSTPAID_BY_HOUR` for postpayment. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#charge_type CdwdorisInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Whether to automatically renew. 1 means automatic renewal is enabled. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#renew_flag CdwdorisInstance#renew_flag}
  */
  readonly renewFlag?: number;
  /**
  * Billing duration Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#time_span CdwdorisInstance#time_span}
  */
  readonly timeSpan?: number;
  /**
  * Billing time unit, and `m` means month, etc. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#time_unit CdwdorisInstance#time_unit}
  */
  readonly timeUnit?: string;
}

export function cdwdorisInstanceChargePropertiesToTerraform(struct?: CdwdorisInstanceChargePropertiesOutputReference | CdwdorisInstanceChargeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charge_type: cdktf.stringToTerraform(struct!.chargeType),
    renew_flag: cdktf.numberToTerraform(struct!.renewFlag),
    time_span: cdktf.numberToTerraform(struct!.timeSpan),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function cdwdorisInstanceChargePropertiesToHclTerraform(struct?: CdwdorisInstanceChargePropertiesOutputReference | CdwdorisInstanceChargeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    charge_type: {
      value: cdktf.stringToHclTerraform(struct!.chargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_flag: {
      value: cdktf.numberToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_span: {
      value: cdktf.numberToHclTerraform(struct!.timeSpan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwdorisInstanceChargePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwdorisInstanceChargeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeType = this._chargeType;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    if (this._timeSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSpan = this._timeSpan;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwdorisInstanceChargeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargeType = undefined;
      this._renewFlag = undefined;
      this._timeSpan = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargeType = value.chargeType;
      this._renewFlag = value.renewFlag;
      this._timeSpan = value.timeSpan;
      this._timeUnit = value.timeUnit;
    }
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

  // renew_flag - computed: false, optional: true, required: false
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
}
export interface CdwdorisInstanceFeSpec {
  /**
  * Quantities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#count CdwdorisInstance#count}
  */
  readonly count: number;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#disk_size CdwdorisInstance#disk_size}
  */
  readonly diskSize: number;
  /**
  * Specification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#spec_name CdwdorisInstance#spec_name}
  */
  readonly specName: string;
}

export function cdwdorisInstanceFeSpecToTerraform(struct?: CdwdorisInstanceFeSpecOutputReference | CdwdorisInstanceFeSpec): any {
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


export function cdwdorisInstanceFeSpecToHclTerraform(struct?: CdwdorisInstanceFeSpecOutputReference | CdwdorisInstanceFeSpec): any {
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

export class CdwdorisInstanceFeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwdorisInstanceFeSpec | undefined {
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

  public set internalValue(value: CdwdorisInstanceFeSpec | undefined) {
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
export interface CdwdorisInstanceTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#tag_key CdwdorisInstance#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#tag_value CdwdorisInstance#tag_value}
  */
  readonly tagValue: string;
}

export function cdwdorisInstanceTagsToTerraform(struct?: CdwdorisInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function cdwdorisInstanceTagsToHclTerraform(struct?: CdwdorisInstanceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwdorisInstanceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdwdorisInstanceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwdorisInstanceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class CdwdorisInstanceTagsList extends cdktf.ComplexList {
  public internalValue? : CdwdorisInstanceTags[] | cdktf.IResolvable

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
  public get(index: number): CdwdorisInstanceTagsOutputReference {
    return new CdwdorisInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdwdorisInstanceUserMultiZoneInfos {
  /**
  * Subnet ID Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#subnet_id CdwdorisInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The number of available IP addresses in the current subnet Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#subnet_ip_num CdwdorisInstance#subnet_ip_num}
  */
  readonly subnetIpNum?: number;
  /**
  * Availability zone Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#zone CdwdorisInstance#zone}
  */
  readonly zone?: string;
}

export function cdwdorisInstanceUserMultiZoneInfosToTerraform(struct?: CdwdorisInstanceUserMultiZoneInfosOutputReference | CdwdorisInstanceUserMultiZoneInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_ip_num: cdktf.numberToTerraform(struct!.subnetIpNum),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function cdwdorisInstanceUserMultiZoneInfosToHclTerraform(struct?: CdwdorisInstanceUserMultiZoneInfosOutputReference | CdwdorisInstanceUserMultiZoneInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ip_num: {
      value: cdktf.numberToHclTerraform(struct!.subnetIpNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdwdorisInstanceUserMultiZoneInfosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdwdorisInstanceUserMultiZoneInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetIpNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpNum = this._subnetIpNum;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdwdorisInstanceUserMultiZoneInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._subnetIpNum = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._subnetIpNum = value.subnetIpNum;
      this._zone = value.zone;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_ip_num - computed: false, optional: true, required: false
  private _subnetIpNum?: number; 
  public get subnetIpNum() {
    return this.getNumberAttribute('subnet_ip_num');
  }
  public set subnetIpNum(value: number) {
    this._subnetIpNum = value;
  }
  public resetSubnetIpNum() {
    this._subnetIpNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpNumInput() {
    return this._subnetIpNum;
  }

  // zone - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance tencentcloud_cdwdoris_instance}
*/
export class CdwdorisInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdwdoris_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdwdorisInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdwdorisInstance to import
  * @param importFromId The id of the existing CdwdorisInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdwdorisInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdwdoris_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cdwdoris_instance tencentcloud_cdwdoris_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdwdorisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CdwdorisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdwdoris_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caseSensitive = config.caseSensitive;
    this._dorisUserPwd = config.dorisUserPwd;
    this._enableMultiZones = config.enableMultiZones;
    this._haFlag = config.haFlag;
    this._haType = config.haType;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._productVersion = config.productVersion;
    this._securityGroupIds = config.securityGroupIds;
    this._userSubnetId = config.userSubnetId;
    this._userVpcId = config.userVpcId;
    this._workloadGroupStatus = config.workloadGroupStatus;
    this._zone = config.zone;
    this._beSpec.internalValue = config.beSpec;
    this._chargeProperties.internalValue = config.chargeProperties;
    this._feSpec.internalValue = config.feSpec;
    this._tags.internalValue = config.tags;
    this._userMultiZoneInfos.internalValue = config.userMultiZoneInfos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: number; 
  public get caseSensitive() {
    return this.getNumberAttribute('case_sensitive');
  }
  public set caseSensitive(value: number) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // doris_user_pwd - computed: false, optional: false, required: true
  private _dorisUserPwd?: string; 
  public get dorisUserPwd() {
    return this.getStringAttribute('doris_user_pwd');
  }
  public set dorisUserPwd(value: string) {
    this._dorisUserPwd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dorisUserPwdInput() {
    return this._dorisUserPwd;
  }

  // enable_multi_zones - computed: false, optional: true, required: false
  private _enableMultiZones?: boolean | cdktf.IResolvable; 
  public get enableMultiZones() {
    return this.getBooleanAttribute('enable_multi_zones');
  }
  public set enableMultiZones(value: boolean | cdktf.IResolvable) {
    this._enableMultiZones = value;
  }
  public resetEnableMultiZones() {
    this._enableMultiZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiZonesInput() {
    return this._enableMultiZones;
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

  // ha_type - computed: false, optional: true, required: false
  private _haType?: number; 
  public get haType() {
    return this.getNumberAttribute('ha_type');
  }
  public set haType(value: number) {
    this._haType = value;
  }
  public resetHaType() {
    this._haType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haTypeInput() {
    return this._haType;
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // user_subnet_id - computed: false, optional: false, required: true
  private _userSubnetId?: string; 
  public get userSubnetId() {
    return this.getStringAttribute('user_subnet_id');
  }
  public set userSubnetId(value: string) {
    this._userSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSubnetIdInput() {
    return this._userSubnetId;
  }

  // user_vpc_id - computed: false, optional: false, required: true
  private _userVpcId?: string; 
  public get userVpcId() {
    return this.getStringAttribute('user_vpc_id');
  }
  public set userVpcId(value: string) {
    this._userVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVpcIdInput() {
    return this._userVpcId;
  }

  // workload_group_status - computed: false, optional: false, required: true
  private _workloadGroupStatus?: string; 
  public get workloadGroupStatus() {
    return this.getStringAttribute('workload_group_status');
  }
  public set workloadGroupStatus(value: string) {
    this._workloadGroupStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupStatusInput() {
    return this._workloadGroupStatus;
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

  // be_spec - computed: false, optional: false, required: true
  private _beSpec = new CdwdorisInstanceBeSpecOutputReference(this, "be_spec");
  public get beSpec() {
    return this._beSpec;
  }
  public putBeSpec(value: CdwdorisInstanceBeSpec) {
    this._beSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beSpecInput() {
    return this._beSpec.internalValue;
  }

  // charge_properties - computed: false, optional: false, required: true
  private _chargeProperties = new CdwdorisInstanceChargePropertiesOutputReference(this, "charge_properties");
  public get chargeProperties() {
    return this._chargeProperties;
  }
  public putChargeProperties(value: CdwdorisInstanceChargeProperties) {
    this._chargeProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargePropertiesInput() {
    return this._chargeProperties.internalValue;
  }

  // fe_spec - computed: false, optional: false, required: true
  private _feSpec = new CdwdorisInstanceFeSpecOutputReference(this, "fe_spec");
  public get feSpec() {
    return this._feSpec;
  }
  public putFeSpec(value: CdwdorisInstanceFeSpec) {
    this._feSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feSpecInput() {
    return this._feSpec.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new CdwdorisInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CdwdorisInstanceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_multi_zone_infos - computed: false, optional: true, required: false
  private _userMultiZoneInfos = new CdwdorisInstanceUserMultiZoneInfosOutputReference(this, "user_multi_zone_infos");
  public get userMultiZoneInfos() {
    return this._userMultiZoneInfos;
  }
  public putUserMultiZoneInfos(value: CdwdorisInstanceUserMultiZoneInfos) {
    this._userMultiZoneInfos.internalValue = value;
  }
  public resetUserMultiZoneInfos() {
    this._userMultiZoneInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMultiZoneInfosInput() {
    return this._userMultiZoneInfos.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      case_sensitive: cdktf.numberToTerraform(this._caseSensitive),
      doris_user_pwd: cdktf.stringToTerraform(this._dorisUserPwd),
      enable_multi_zones: cdktf.booleanToTerraform(this._enableMultiZones),
      ha_flag: cdktf.booleanToTerraform(this._haFlag),
      ha_type: cdktf.numberToTerraform(this._haType),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      product_version: cdktf.stringToTerraform(this._productVersion),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      user_subnet_id: cdktf.stringToTerraform(this._userSubnetId),
      user_vpc_id: cdktf.stringToTerraform(this._userVpcId),
      workload_group_status: cdktf.stringToTerraform(this._workloadGroupStatus),
      zone: cdktf.stringToTerraform(this._zone),
      be_spec: cdwdorisInstanceBeSpecToTerraform(this._beSpec.internalValue),
      charge_properties: cdwdorisInstanceChargePropertiesToTerraform(this._chargeProperties.internalValue),
      fe_spec: cdwdorisInstanceFeSpecToTerraform(this._feSpec.internalValue),
      tags: cdktf.listMapper(cdwdorisInstanceTagsToTerraform, true)(this._tags.internalValue),
      user_multi_zone_infos: cdwdorisInstanceUserMultiZoneInfosToTerraform(this._userMultiZoneInfos.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      case_sensitive: {
        value: cdktf.numberToHclTerraform(this._caseSensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      doris_user_pwd: {
        value: cdktf.stringToHclTerraform(this._dorisUserPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_multi_zones: {
        value: cdktf.booleanToHclTerraform(this._enableMultiZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_flag: {
        value: cdktf.booleanToHclTerraform(this._haFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_type: {
        value: cdktf.numberToHclTerraform(this._haType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_subnet_id: {
        value: cdktf.stringToHclTerraform(this._userSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_vpc_id: {
        value: cdktf.stringToHclTerraform(this._userVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_group_status: {
        value: cdktf.stringToHclTerraform(this._workloadGroupStatus),
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
      be_spec: {
        value: cdwdorisInstanceBeSpecToHclTerraform(this._beSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwdorisInstanceBeSpecList",
      },
      charge_properties: {
        value: cdwdorisInstanceChargePropertiesToHclTerraform(this._chargeProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwdorisInstanceChargePropertiesList",
      },
      fe_spec: {
        value: cdwdorisInstanceFeSpecToHclTerraform(this._feSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwdorisInstanceFeSpecList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdwdorisInstanceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwdorisInstanceTagsList",
      },
      user_multi_zone_infos: {
        value: cdwdorisInstanceUserMultiZoneInfosToHclTerraform(this._userMultiZoneInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdwdorisInstanceUserMultiZoneInfosList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
