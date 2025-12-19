// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaxcomputeProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#comment MaxcomputeProject#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#default_quota MaxcomputeProject#default_quota}
  */
  readonly defaultQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#id MaxcomputeProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#is_logical MaxcomputeProject#is_logical}
  */
  readonly isLogical?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#product_type MaxcomputeProject#product_type}
  */
  readonly productType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#project_name MaxcomputeProject#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#status MaxcomputeProject#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#tags MaxcomputeProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#three_tier_model MaxcomputeProject#three_tier_model}
  */
  readonly threeTierModel?: boolean | cdktf.IResolvable;
  /**
  * ip_white_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#ip_white_list MaxcomputeProject#ip_white_list}
  */
  readonly ipWhiteList?: MaxcomputeProjectIpWhiteListStruct;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#properties MaxcomputeProject#properties}
  */
  readonly properties?: MaxcomputeProjectProperties;
  /**
  * security_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#security_properties MaxcomputeProject#security_properties}
  */
  readonly securityProperties?: MaxcomputeProjectSecurityProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#timeouts MaxcomputeProject#timeouts}
  */
  readonly timeouts?: MaxcomputeProjectTimeouts;
}
export interface MaxcomputeProjectIpWhiteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#ip_list MaxcomputeProject#ip_list}
  */
  readonly ipList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#vpc_ip_list MaxcomputeProject#vpc_ip_list}
  */
  readonly vpcIpList?: string;
}

export function maxcomputeProjectIpWhiteListStructToTerraform(struct?: MaxcomputeProjectIpWhiteListStructOutputReference | MaxcomputeProjectIpWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_list: cdktf.stringToTerraform(struct!.ipList),
    vpc_ip_list: cdktf.stringToTerraform(struct!.vpcIpList),
  }
}


export function maxcomputeProjectIpWhiteListStructToHclTerraform(struct?: MaxcomputeProjectIpWhiteListStructOutputReference | MaxcomputeProjectIpWhiteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_list: {
      value: cdktf.stringToHclTerraform(struct!.ipList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_ip_list: {
      value: cdktf.stringToHclTerraform(struct!.vpcIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxcomputeProjectIpWhiteListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxcomputeProjectIpWhiteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList;
    }
    if (this._vpcIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIpList = this._vpcIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxcomputeProjectIpWhiteListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipList = undefined;
      this._vpcIpList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipList = value.ipList;
      this._vpcIpList = value.vpcIpList;
    }
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string; 
  public get ipList() {
    return this.getStringAttribute('ip_list');
  }
  public set ipList(value: string) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // vpc_ip_list - computed: false, optional: true, required: false
  private _vpcIpList?: string; 
  public get vpcIpList() {
    return this.getStringAttribute('vpc_ip_list');
  }
  public set vpcIpList(value: string) {
    this._vpcIpList = value;
  }
  public resetVpcIpList() {
    this._vpcIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIpListInput() {
    return this._vpcIpList;
  }
}
export interface MaxcomputeProjectPropertiesEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#algorithm MaxcomputeProject#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#enable MaxcomputeProject#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#key MaxcomputeProject#key}
  */
  readonly key?: string;
}

export function maxcomputeProjectPropertiesEncryptionToTerraform(struct?: MaxcomputeProjectPropertiesEncryptionOutputReference | MaxcomputeProjectPropertiesEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    enable: cdktf.booleanToTerraform(struct!.enable),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function maxcomputeProjectPropertiesEncryptionToHclTerraform(struct?: MaxcomputeProjectPropertiesEncryptionOutputReference | MaxcomputeProjectPropertiesEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxcomputeProjectPropertiesEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxcomputeProjectPropertiesEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxcomputeProjectPropertiesEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._enable = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._enable = value.enable;
      this._key = value.key;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
}
export interface MaxcomputeProjectPropertiesTableLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#type MaxcomputeProject#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#value MaxcomputeProject#value}
  */
  readonly value?: string;
}

export function maxcomputeProjectPropertiesTableLifecycleToTerraform(struct?: MaxcomputeProjectPropertiesTableLifecycleOutputReference | MaxcomputeProjectPropertiesTableLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function maxcomputeProjectPropertiesTableLifecycleToHclTerraform(struct?: MaxcomputeProjectPropertiesTableLifecycleOutputReference | MaxcomputeProjectPropertiesTableLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class MaxcomputeProjectPropertiesTableLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxcomputeProjectPropertiesTableLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxcomputeProjectPropertiesTableLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: true, required: false
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
export interface MaxcomputeProjectProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#allow_full_scan MaxcomputeProject#allow_full_scan}
  */
  readonly allowFullScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#enable_decimal2 MaxcomputeProject#enable_decimal2}
  */
  readonly enableDecimal2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#enable_dr MaxcomputeProject#enable_dr}
  */
  readonly enableDr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#retention_days MaxcomputeProject#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#sql_metering_max MaxcomputeProject#sql_metering_max}
  */
  readonly sqlMeteringMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#timezone MaxcomputeProject#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#type_system MaxcomputeProject#type_system}
  */
  readonly typeSystem?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#encryption MaxcomputeProject#encryption}
  */
  readonly encryption?: MaxcomputeProjectPropertiesEncryption;
  /**
  * table_lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#table_lifecycle MaxcomputeProject#table_lifecycle}
  */
  readonly tableLifecycle?: MaxcomputeProjectPropertiesTableLifecycle;
}

export function maxcomputeProjectPropertiesToTerraform(struct?: MaxcomputeProjectPropertiesOutputReference | MaxcomputeProjectProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_full_scan: cdktf.booleanToTerraform(struct!.allowFullScan),
    enable_decimal2: cdktf.booleanToTerraform(struct!.enableDecimal2),
    enable_dr: cdktf.booleanToTerraform(struct!.enableDr),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    sql_metering_max: cdktf.stringToTerraform(struct!.sqlMeteringMax),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type_system: cdktf.stringToTerraform(struct!.typeSystem),
    encryption: maxcomputeProjectPropertiesEncryptionToTerraform(struct!.encryption),
    table_lifecycle: maxcomputeProjectPropertiesTableLifecycleToTerraform(struct!.tableLifecycle),
  }
}


export function maxcomputeProjectPropertiesToHclTerraform(struct?: MaxcomputeProjectPropertiesOutputReference | MaxcomputeProjectProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_full_scan: {
      value: cdktf.booleanToHclTerraform(struct!.allowFullScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_decimal2: {
      value: cdktf.booleanToHclTerraform(struct!.enableDecimal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_dr: {
      value: cdktf.booleanToHclTerraform(struct!.enableDr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_metering_max: {
      value: cdktf.stringToHclTerraform(struct!.sqlMeteringMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_system: {
      value: cdktf.stringToHclTerraform(struct!.typeSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: maxcomputeProjectPropertiesEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "MaxcomputeProjectPropertiesEncryptionList",
    },
    table_lifecycle: {
      value: maxcomputeProjectPropertiesTableLifecycleToHclTerraform(struct!.tableLifecycle),
      isBlock: true,
      type: "list",
      storageClassType: "MaxcomputeProjectPropertiesTableLifecycleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxcomputeProjectPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxcomputeProjectProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFullScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFullScan = this._allowFullScan;
    }
    if (this._enableDecimal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDecimal2 = this._enableDecimal2;
    }
    if (this._enableDr !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDr = this._enableDr;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._sqlMeteringMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMeteringMax = this._sqlMeteringMax;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._typeSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeSystem = this._typeSystem;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._tableLifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableLifecycle = this._tableLifecycle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxcomputeProjectProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowFullScan = undefined;
      this._enableDecimal2 = undefined;
      this._enableDr = undefined;
      this._retentionDays = undefined;
      this._sqlMeteringMax = undefined;
      this._timezone = undefined;
      this._typeSystem = undefined;
      this._encryption.internalValue = undefined;
      this._tableLifecycle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowFullScan = value.allowFullScan;
      this._enableDecimal2 = value.enableDecimal2;
      this._enableDr = value.enableDr;
      this._retentionDays = value.retentionDays;
      this._sqlMeteringMax = value.sqlMeteringMax;
      this._timezone = value.timezone;
      this._typeSystem = value.typeSystem;
      this._encryption.internalValue = value.encryption;
      this._tableLifecycle.internalValue = value.tableLifecycle;
    }
  }

  // allow_full_scan - computed: false, optional: true, required: false
  private _allowFullScan?: boolean | cdktf.IResolvable; 
  public get allowFullScan() {
    return this.getBooleanAttribute('allow_full_scan');
  }
  public set allowFullScan(value: boolean | cdktf.IResolvable) {
    this._allowFullScan = value;
  }
  public resetAllowFullScan() {
    this._allowFullScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFullScanInput() {
    return this._allowFullScan;
  }

  // enable_decimal2 - computed: false, optional: true, required: false
  private _enableDecimal2?: boolean | cdktf.IResolvable; 
  public get enableDecimal2() {
    return this.getBooleanAttribute('enable_decimal2');
  }
  public set enableDecimal2(value: boolean | cdktf.IResolvable) {
    this._enableDecimal2 = value;
  }
  public resetEnableDecimal2() {
    this._enableDecimal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDecimal2Input() {
    return this._enableDecimal2;
  }

  // enable_dr - computed: false, optional: true, required: false
  private _enableDr?: boolean | cdktf.IResolvable; 
  public get enableDr() {
    return this.getBooleanAttribute('enable_dr');
  }
  public set enableDr(value: boolean | cdktf.IResolvable) {
    this._enableDr = value;
  }
  public resetEnableDr() {
    this._enableDr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDrInput() {
    return this._enableDr;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // sql_metering_max - computed: false, optional: true, required: false
  private _sqlMeteringMax?: string; 
  public get sqlMeteringMax() {
    return this.getStringAttribute('sql_metering_max');
  }
  public set sqlMeteringMax(value: string) {
    this._sqlMeteringMax = value;
  }
  public resetSqlMeteringMax() {
    this._sqlMeteringMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlMeteringMaxInput() {
    return this._sqlMeteringMax;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type_system - computed: false, optional: true, required: false
  private _typeSystem?: string; 
  public get typeSystem() {
    return this.getStringAttribute('type_system');
  }
  public set typeSystem(value: string) {
    this._typeSystem = value;
  }
  public resetTypeSystem() {
    this._typeSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeSystemInput() {
    return this._typeSystem;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new MaxcomputeProjectPropertiesEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MaxcomputeProjectPropertiesEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // table_lifecycle - computed: false, optional: true, required: false
  private _tableLifecycle = new MaxcomputeProjectPropertiesTableLifecycleOutputReference(this, "table_lifecycle");
  public get tableLifecycle() {
    return this._tableLifecycle;
  }
  public putTableLifecycle(value: MaxcomputeProjectPropertiesTableLifecycle) {
    this._tableLifecycle.internalValue = value;
  }
  public resetTableLifecycle() {
    this._tableLifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableLifecycleInput() {
    return this._tableLifecycle.internalValue;
  }
}
export interface MaxcomputeProjectSecurityPropertiesProjectProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#exception_policy MaxcomputeProject#exception_policy}
  */
  readonly exceptionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#protected MaxcomputeProject#protected}
  */
  readonly protected?: boolean | cdktf.IResolvable;
}

export function maxcomputeProjectSecurityPropertiesProjectProtectionToTerraform(struct?: MaxcomputeProjectSecurityPropertiesProjectProtectionOutputReference | MaxcomputeProjectSecurityPropertiesProjectProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exception_policy: cdktf.stringToTerraform(struct!.exceptionPolicy),
    protected: cdktf.booleanToTerraform(struct!.protected),
  }
}


export function maxcomputeProjectSecurityPropertiesProjectProtectionToHclTerraform(struct?: MaxcomputeProjectSecurityPropertiesProjectProtectionOutputReference | MaxcomputeProjectSecurityPropertiesProjectProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exception_policy: {
      value: cdktf.stringToHclTerraform(struct!.exceptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected: {
      value: cdktf.booleanToHclTerraform(struct!.protected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxcomputeProjectSecurityPropertiesProjectProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxcomputeProjectSecurityPropertiesProjectProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPolicy = this._exceptionPolicy;
    }
    if (this._protected !== undefined) {
      hasAnyValues = true;
      internalValueResult.protected = this._protected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxcomputeProjectSecurityPropertiesProjectProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exceptionPolicy = undefined;
      this._protected = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exceptionPolicy = value.exceptionPolicy;
      this._protected = value.protected;
    }
  }

  // exception_policy - computed: false, optional: true, required: false
  private _exceptionPolicy?: string; 
  public get exceptionPolicy() {
    return this.getStringAttribute('exception_policy');
  }
  public set exceptionPolicy(value: string) {
    this._exceptionPolicy = value;
  }
  public resetExceptionPolicy() {
    this._exceptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPolicyInput() {
    return this._exceptionPolicy;
  }

  // protected - computed: false, optional: true, required: false
  private _protected?: boolean | cdktf.IResolvable; 
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
  public set protected(value: boolean | cdktf.IResolvable) {
    this._protected = value;
  }
  public resetProtected() {
    this._protected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInput() {
    return this._protected;
  }
}
export interface MaxcomputeProjectSecurityProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#enable_download_privilege MaxcomputeProject#enable_download_privilege}
  */
  readonly enableDownloadPrivilege?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#label_security MaxcomputeProject#label_security}
  */
  readonly labelSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#object_creator_has_access_permission MaxcomputeProject#object_creator_has_access_permission}
  */
  readonly objectCreatorHasAccessPermission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#object_creator_has_grant_permission MaxcomputeProject#object_creator_has_grant_permission}
  */
  readonly objectCreatorHasGrantPermission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#using_acl MaxcomputeProject#using_acl}
  */
  readonly usingAcl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#using_policy MaxcomputeProject#using_policy}
  */
  readonly usingPolicy?: boolean | cdktf.IResolvable;
  /**
  * project_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#project_protection MaxcomputeProject#project_protection}
  */
  readonly projectProtection?: MaxcomputeProjectSecurityPropertiesProjectProtection;
}

export function maxcomputeProjectSecurityPropertiesToTerraform(struct?: MaxcomputeProjectSecurityPropertiesOutputReference | MaxcomputeProjectSecurityProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_download_privilege: cdktf.booleanToTerraform(struct!.enableDownloadPrivilege),
    label_security: cdktf.booleanToTerraform(struct!.labelSecurity),
    object_creator_has_access_permission: cdktf.booleanToTerraform(struct!.objectCreatorHasAccessPermission),
    object_creator_has_grant_permission: cdktf.booleanToTerraform(struct!.objectCreatorHasGrantPermission),
    using_acl: cdktf.booleanToTerraform(struct!.usingAcl),
    using_policy: cdktf.booleanToTerraform(struct!.usingPolicy),
    project_protection: maxcomputeProjectSecurityPropertiesProjectProtectionToTerraform(struct!.projectProtection),
  }
}


export function maxcomputeProjectSecurityPropertiesToHclTerraform(struct?: MaxcomputeProjectSecurityPropertiesOutputReference | MaxcomputeProjectSecurityProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_download_privilege: {
      value: cdktf.booleanToHclTerraform(struct!.enableDownloadPrivilege),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_security: {
      value: cdktf.booleanToHclTerraform(struct!.labelSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_creator_has_access_permission: {
      value: cdktf.booleanToHclTerraform(struct!.objectCreatorHasAccessPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_creator_has_grant_permission: {
      value: cdktf.booleanToHclTerraform(struct!.objectCreatorHasGrantPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    using_acl: {
      value: cdktf.booleanToHclTerraform(struct!.usingAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    using_policy: {
      value: cdktf.booleanToHclTerraform(struct!.usingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_protection: {
      value: maxcomputeProjectSecurityPropertiesProjectProtectionToHclTerraform(struct!.projectProtection),
      isBlock: true,
      type: "list",
      storageClassType: "MaxcomputeProjectSecurityPropertiesProjectProtectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxcomputeProjectSecurityPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxcomputeProjectSecurityProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDownloadPrivilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDownloadPrivilege = this._enableDownloadPrivilege;
    }
    if (this._labelSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSecurity = this._labelSecurity;
    }
    if (this._objectCreatorHasAccessPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectCreatorHasAccessPermission = this._objectCreatorHasAccessPermission;
    }
    if (this._objectCreatorHasGrantPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectCreatorHasGrantPermission = this._objectCreatorHasGrantPermission;
    }
    if (this._usingAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingAcl = this._usingAcl;
    }
    if (this._usingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingPolicy = this._usingPolicy;
    }
    if (this._projectProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectProtection = this._projectProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxcomputeProjectSecurityProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDownloadPrivilege = undefined;
      this._labelSecurity = undefined;
      this._objectCreatorHasAccessPermission = undefined;
      this._objectCreatorHasGrantPermission = undefined;
      this._usingAcl = undefined;
      this._usingPolicy = undefined;
      this._projectProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDownloadPrivilege = value.enableDownloadPrivilege;
      this._labelSecurity = value.labelSecurity;
      this._objectCreatorHasAccessPermission = value.objectCreatorHasAccessPermission;
      this._objectCreatorHasGrantPermission = value.objectCreatorHasGrantPermission;
      this._usingAcl = value.usingAcl;
      this._usingPolicy = value.usingPolicy;
      this._projectProtection.internalValue = value.projectProtection;
    }
  }

  // enable_download_privilege - computed: false, optional: true, required: false
  private _enableDownloadPrivilege?: boolean | cdktf.IResolvable; 
  public get enableDownloadPrivilege() {
    return this.getBooleanAttribute('enable_download_privilege');
  }
  public set enableDownloadPrivilege(value: boolean | cdktf.IResolvable) {
    this._enableDownloadPrivilege = value;
  }
  public resetEnableDownloadPrivilege() {
    this._enableDownloadPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDownloadPrivilegeInput() {
    return this._enableDownloadPrivilege;
  }

  // label_security - computed: false, optional: true, required: false
  private _labelSecurity?: boolean | cdktf.IResolvable; 
  public get labelSecurity() {
    return this.getBooleanAttribute('label_security');
  }
  public set labelSecurity(value: boolean | cdktf.IResolvable) {
    this._labelSecurity = value;
  }
  public resetLabelSecurity() {
    this._labelSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSecurityInput() {
    return this._labelSecurity;
  }

  // object_creator_has_access_permission - computed: false, optional: true, required: false
  private _objectCreatorHasAccessPermission?: boolean | cdktf.IResolvable; 
  public get objectCreatorHasAccessPermission() {
    return this.getBooleanAttribute('object_creator_has_access_permission');
  }
  public set objectCreatorHasAccessPermission(value: boolean | cdktf.IResolvable) {
    this._objectCreatorHasAccessPermission = value;
  }
  public resetObjectCreatorHasAccessPermission() {
    this._objectCreatorHasAccessPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectCreatorHasAccessPermissionInput() {
    return this._objectCreatorHasAccessPermission;
  }

  // object_creator_has_grant_permission - computed: false, optional: true, required: false
  private _objectCreatorHasGrantPermission?: boolean | cdktf.IResolvable; 
  public get objectCreatorHasGrantPermission() {
    return this.getBooleanAttribute('object_creator_has_grant_permission');
  }
  public set objectCreatorHasGrantPermission(value: boolean | cdktf.IResolvable) {
    this._objectCreatorHasGrantPermission = value;
  }
  public resetObjectCreatorHasGrantPermission() {
    this._objectCreatorHasGrantPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectCreatorHasGrantPermissionInput() {
    return this._objectCreatorHasGrantPermission;
  }

  // using_acl - computed: false, optional: true, required: false
  private _usingAcl?: boolean | cdktf.IResolvable; 
  public get usingAcl() {
    return this.getBooleanAttribute('using_acl');
  }
  public set usingAcl(value: boolean | cdktf.IResolvable) {
    this._usingAcl = value;
  }
  public resetUsingAcl() {
    this._usingAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingAclInput() {
    return this._usingAcl;
  }

  // using_policy - computed: false, optional: true, required: false
  private _usingPolicy?: boolean | cdktf.IResolvable; 
  public get usingPolicy() {
    return this.getBooleanAttribute('using_policy');
  }
  public set usingPolicy(value: boolean | cdktf.IResolvable) {
    this._usingPolicy = value;
  }
  public resetUsingPolicy() {
    this._usingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingPolicyInput() {
    return this._usingPolicy;
  }

  // project_protection - computed: false, optional: true, required: false
  private _projectProtection = new MaxcomputeProjectSecurityPropertiesProjectProtectionOutputReference(this, "project_protection");
  public get projectProtection() {
    return this._projectProtection;
  }
  public putProjectProtection(value: MaxcomputeProjectSecurityPropertiesProjectProtection) {
    this._projectProtection.internalValue = value;
  }
  public resetProjectProtection() {
    this._projectProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectProtectionInput() {
    return this._projectProtection.internalValue;
  }
}
export interface MaxcomputeProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#create MaxcomputeProject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#delete MaxcomputeProject#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#update MaxcomputeProject#update}
  */
  readonly update?: string;
}

export function maxcomputeProjectTimeoutsToTerraform(struct?: MaxcomputeProjectTimeouts | cdktf.IResolvable): any {
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


export function maxcomputeProjectTimeoutsToHclTerraform(struct?: MaxcomputeProjectTimeouts | cdktf.IResolvable): any {
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

export class MaxcomputeProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaxcomputeProjectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MaxcomputeProjectTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project alicloud_maxcompute_project}
*/
export class MaxcomputeProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_maxcompute_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaxcomputeProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaxcomputeProject to import
  * @param importFromId The id of the existing MaxcomputeProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaxcomputeProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_maxcompute_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/maxcompute_project alicloud_maxcompute_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaxcomputeProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MaxcomputeProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_maxcompute_project',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._defaultQuota = config.defaultQuota;
    this._id = config.id;
    this._isLogical = config.isLogical;
    this._productType = config.productType;
    this._projectName = config.projectName;
    this._status = config.status;
    this._tags = config.tags;
    this._threeTierModel = config.threeTierModel;
    this._ipWhiteList.internalValue = config.ipWhiteList;
    this._properties.internalValue = config.properties;
    this._securityProperties.internalValue = config.securityProperties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_quota - computed: false, optional: true, required: false
  private _defaultQuota?: string; 
  public get defaultQuota() {
    return this.getStringAttribute('default_quota');
  }
  public set defaultQuota(value: string) {
    this._defaultQuota = value;
  }
  public resetDefaultQuota() {
    this._defaultQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaInput() {
    return this._defaultQuota;
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

  // is_logical - computed: false, optional: true, required: false
  private _isLogical?: string; 
  public get isLogical() {
    return this.getStringAttribute('is_logical');
  }
  public set isLogical(value: string) {
    this._isLogical = value;
  }
  public resetIsLogical() {
    this._isLogical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLogicalInput() {
    return this._isLogical;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // product_type - computed: false, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // three_tier_model - computed: true, optional: true, required: false
  private _threeTierModel?: boolean | cdktf.IResolvable; 
  public get threeTierModel() {
    return this.getBooleanAttribute('three_tier_model');
  }
  public set threeTierModel(value: boolean | cdktf.IResolvable) {
    this._threeTierModel = value;
  }
  public resetThreeTierModel() {
    this._threeTierModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threeTierModelInput() {
    return this._threeTierModel;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // ip_white_list - computed: false, optional: true, required: false
  private _ipWhiteList = new MaxcomputeProjectIpWhiteListStructOutputReference(this, "ip_white_list");
  public get ipWhiteList() {
    return this._ipWhiteList;
  }
  public putIpWhiteList(value: MaxcomputeProjectIpWhiteListStruct) {
    this._ipWhiteList.internalValue = value;
  }
  public resetIpWhiteList() {
    this._ipWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteListInput() {
    return this._ipWhiteList.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new MaxcomputeProjectPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: MaxcomputeProjectProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // security_properties - computed: false, optional: true, required: false
  private _securityProperties = new MaxcomputeProjectSecurityPropertiesOutputReference(this, "security_properties");
  public get securityProperties() {
    return this._securityProperties;
  }
  public putSecurityProperties(value: MaxcomputeProjectSecurityProperties) {
    this._securityProperties.internalValue = value;
  }
  public resetSecurityProperties() {
    this._securityProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPropertiesInput() {
    return this._securityProperties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MaxcomputeProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaxcomputeProjectTimeouts) {
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
      comment: cdktf.stringToTerraform(this._comment),
      default_quota: cdktf.stringToTerraform(this._defaultQuota),
      id: cdktf.stringToTerraform(this._id),
      is_logical: cdktf.stringToTerraform(this._isLogical),
      product_type: cdktf.stringToTerraform(this._productType),
      project_name: cdktf.stringToTerraform(this._projectName),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      three_tier_model: cdktf.booleanToTerraform(this._threeTierModel),
      ip_white_list: maxcomputeProjectIpWhiteListStructToTerraform(this._ipWhiteList.internalValue),
      properties: maxcomputeProjectPropertiesToTerraform(this._properties.internalValue),
      security_properties: maxcomputeProjectSecurityPropertiesToTerraform(this._securityProperties.internalValue),
      timeouts: maxcomputeProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_quota: {
        value: cdktf.stringToHclTerraform(this._defaultQuota),
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
      is_logical: {
        value: cdktf.stringToHclTerraform(this._isLogical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_type: {
        value: cdktf.stringToHclTerraform(this._productType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      three_tier_model: {
        value: cdktf.booleanToHclTerraform(this._threeTierModel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_white_list: {
        value: maxcomputeProjectIpWhiteListStructToHclTerraform(this._ipWhiteList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaxcomputeProjectIpWhiteListStructList",
      },
      properties: {
        value: maxcomputeProjectPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaxcomputeProjectPropertiesList",
      },
      security_properties: {
        value: maxcomputeProjectSecurityPropertiesToHclTerraform(this._securityProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaxcomputeProjectSecurityPropertiesList",
      },
      timeouts: {
        value: maxcomputeProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaxcomputeProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
