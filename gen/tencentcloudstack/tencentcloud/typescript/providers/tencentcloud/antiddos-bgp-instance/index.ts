// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosBgpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#id AntiddosBgpInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Payment Type: Payment Mode: PREPAID (Prepaid) / POSTPAID_BY_MONTH (Postpaid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#instance_charge_type AntiddosBgpInstance#instance_charge_type}
  */
  readonly instanceChargeType: string;
  /**
  * High-defense package types: Enterprise, Standard, StandardPlus (Standard Edition 2.0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#package_type AntiddosBgpInstance#package_type}
  */
  readonly packageType: string;
  /**
  * enterprise_package_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#enterprise_package_config AntiddosBgpInstance#enterprise_package_config}
  */
  readonly enterprisePackageConfig?: AntiddosBgpInstanceEnterprisePackageConfig;
  /**
  * instance_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#instance_charge_prepaid AntiddosBgpInstance#instance_charge_prepaid}
  */
  readonly instanceChargePrepaid?: AntiddosBgpInstanceInstanceChargePrepaid;
  /**
  * standard_package_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#standard_package_config AntiddosBgpInstance#standard_package_config}
  */
  readonly standardPackageConfig?: AntiddosBgpInstanceStandardPackageConfig;
  /**
  * standard_plus_package_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#standard_plus_package_config AntiddosBgpInstance#standard_plus_package_config}
  */
  readonly standardPlusPackageConfig?: AntiddosBgpInstanceStandardPlusPackageConfig;
  /**
  * tag_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#tag_info_list AntiddosBgpInstance#tag_info_list}
  */
  readonly tagInfoList?: AntiddosBgpInstanceTagInfoListStruct[] | cdktf.IResolvable;
}
export interface AntiddosBgpInstanceEnterprisePackageConfig {
  /**
  * Service bandwidth scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#bandwidth AntiddosBgpInstance#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Guaranteed protection bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#basic_protect_bandwidth AntiddosBgpInstance#basic_protect_bandwidth}
  */
  readonly basicProtectBandwidth: number;
  /**
  * Whether to enable elastic service bandwidth. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#elastic_bandwidth_flag AntiddosBgpInstance#elastic_bandwidth_flag}
  */
  readonly elasticBandwidthFlag?: boolean | cdktf.IResolvable;
  /**
  * Elastic bandwidth (Gbps), selectable elastic bandwidth [0, 400, 500, 600, 800, 1000], default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#elastic_protect_bandwidth AntiddosBgpInstance#elastic_protect_bandwidth}
  */
  readonly elasticProtectBandwidth?: number;
  /**
  * Number of protected IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#protect_ip_count AntiddosBgpInstance#protect_ip_count}
  */
  readonly protectIpCount: number;
  /**
  * The region where the high-defense package was purchased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#region AntiddosBgpInstance#region}
  */
  readonly region: string;
}

export function antiddosBgpInstanceEnterprisePackageConfigToTerraform(struct?: AntiddosBgpInstanceEnterprisePackageConfigOutputReference | AntiddosBgpInstanceEnterprisePackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    basic_protect_bandwidth: cdktf.numberToTerraform(struct!.basicProtectBandwidth),
    elastic_bandwidth_flag: cdktf.booleanToTerraform(struct!.elasticBandwidthFlag),
    elastic_protect_bandwidth: cdktf.numberToTerraform(struct!.elasticProtectBandwidth),
    protect_ip_count: cdktf.numberToTerraform(struct!.protectIpCount),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function antiddosBgpInstanceEnterprisePackageConfigToHclTerraform(struct?: AntiddosBgpInstanceEnterprisePackageConfigOutputReference | AntiddosBgpInstanceEnterprisePackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    basic_protect_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.basicProtectBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elastic_bandwidth_flag: {
      value: cdktf.booleanToHclTerraform(struct!.elasticBandwidthFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elastic_protect_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.elasticProtectBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protect_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.protectIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosBgpInstanceEnterprisePackageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosBgpInstanceEnterprisePackageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._basicProtectBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicProtectBandwidth = this._basicProtectBandwidth;
    }
    if (this._elasticBandwidthFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticBandwidthFlag = this._elasticBandwidthFlag;
    }
    if (this._elasticProtectBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticProtectBandwidth = this._elasticProtectBandwidth;
    }
    if (this._protectIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectIpCount = this._protectIpCount;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosBgpInstanceEnterprisePackageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidth = undefined;
      this._basicProtectBandwidth = undefined;
      this._elasticBandwidthFlag = undefined;
      this._elasticProtectBandwidth = undefined;
      this._protectIpCount = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidth = value.bandwidth;
      this._basicProtectBandwidth = value.basicProtectBandwidth;
      this._elasticBandwidthFlag = value.elasticBandwidthFlag;
      this._elasticProtectBandwidth = value.elasticProtectBandwidth;
      this._protectIpCount = value.protectIpCount;
      this._region = value.region;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // basic_protect_bandwidth - computed: false, optional: false, required: true
  private _basicProtectBandwidth?: number; 
  public get basicProtectBandwidth() {
    return this.getNumberAttribute('basic_protect_bandwidth');
  }
  public set basicProtectBandwidth(value: number) {
    this._basicProtectBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basicProtectBandwidthInput() {
    return this._basicProtectBandwidth;
  }

  // elastic_bandwidth_flag - computed: true, optional: true, required: false
  private _elasticBandwidthFlag?: boolean | cdktf.IResolvable; 
  public get elasticBandwidthFlag() {
    return this.getBooleanAttribute('elastic_bandwidth_flag');
  }
  public set elasticBandwidthFlag(value: boolean | cdktf.IResolvable) {
    this._elasticBandwidthFlag = value;
  }
  public resetElasticBandwidthFlag() {
    this._elasticBandwidthFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticBandwidthFlagInput() {
    return this._elasticBandwidthFlag;
  }

  // elastic_protect_bandwidth - computed: true, optional: true, required: false
  private _elasticProtectBandwidth?: number; 
  public get elasticProtectBandwidth() {
    return this.getNumberAttribute('elastic_protect_bandwidth');
  }
  public set elasticProtectBandwidth(value: number) {
    this._elasticProtectBandwidth = value;
  }
  public resetElasticProtectBandwidth() {
    this._elasticProtectBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticProtectBandwidthInput() {
    return this._elasticProtectBandwidth;
  }

  // protect_ip_count - computed: false, optional: false, required: true
  private _protectIpCount?: number; 
  public get protectIpCount() {
    return this.getNumberAttribute('protect_ip_count');
  }
  public set protectIpCount(value: number) {
    this._protectIpCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectIpCountInput() {
    return this._protectIpCount;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface AntiddosBgpInstanceInstanceChargePrepaid {
  /**
  * Purchase period in months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#period AntiddosBgpInstance#period}
  */
  readonly period?: number;
  /**
  * OTIFY_AND_MANUAL_RENEW: Notify the user of the expiration date and do not automatically renew. NOTIFY_AND_AUTO_RENEW: Notify the user of the expiration date and automatically renew. DISABLE_NOTIFY_AND_MANUAL_RENEW: Do not notify the user of the expiration date and do not automatically renew. The default is: Notify the user of the expiration date and do not automatically renew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#renew_flag AntiddosBgpInstance#renew_flag}
  */
  readonly renewFlag?: string;
}

export function antiddosBgpInstanceInstanceChargePrepaidToTerraform(struct?: AntiddosBgpInstanceInstanceChargePrepaidOutputReference | AntiddosBgpInstanceInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
  }
}


export function antiddosBgpInstanceInstanceChargePrepaidToHclTerraform(struct?: AntiddosBgpInstanceInstanceChargePrepaidOutputReference | AntiddosBgpInstanceInstanceChargePrepaid): any {
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

export class AntiddosBgpInstanceInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosBgpInstanceInstanceChargePrepaid | undefined {
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

  public set internalValue(value: AntiddosBgpInstanceInstanceChargePrepaid | undefined) {
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
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
export interface AntiddosBgpInstanceStandardPackageConfig {
  /**
  * Protected service bandwidth 50Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#bandwidth AntiddosBgpInstance#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Whether to enable elastic service bandwidth. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#elastic_bandwidth_flag AntiddosBgpInstance#elastic_bandwidth_flag}
  */
  readonly elasticBandwidthFlag?: boolean | cdktf.IResolvable;
  /**
  * Number of protected IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#protect_ip_count AntiddosBgpInstance#protect_ip_count}
  */
  readonly protectIpCount: number;
  /**
  * The region where the high-defense package was purchased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#region AntiddosBgpInstance#region}
  */
  readonly region: string;
}

export function antiddosBgpInstanceStandardPackageConfigToTerraform(struct?: AntiddosBgpInstanceStandardPackageConfigOutputReference | AntiddosBgpInstanceStandardPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    elastic_bandwidth_flag: cdktf.booleanToTerraform(struct!.elasticBandwidthFlag),
    protect_ip_count: cdktf.numberToTerraform(struct!.protectIpCount),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function antiddosBgpInstanceStandardPackageConfigToHclTerraform(struct?: AntiddosBgpInstanceStandardPackageConfigOutputReference | AntiddosBgpInstanceStandardPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elastic_bandwidth_flag: {
      value: cdktf.booleanToHclTerraform(struct!.elasticBandwidthFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protect_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.protectIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosBgpInstanceStandardPackageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosBgpInstanceStandardPackageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._elasticBandwidthFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticBandwidthFlag = this._elasticBandwidthFlag;
    }
    if (this._protectIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectIpCount = this._protectIpCount;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosBgpInstanceStandardPackageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidth = undefined;
      this._elasticBandwidthFlag = undefined;
      this._protectIpCount = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidth = value.bandwidth;
      this._elasticBandwidthFlag = value.elasticBandwidthFlag;
      this._protectIpCount = value.protectIpCount;
      this._region = value.region;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // elastic_bandwidth_flag - computed: true, optional: true, required: false
  private _elasticBandwidthFlag?: boolean | cdktf.IResolvable; 
  public get elasticBandwidthFlag() {
    return this.getBooleanAttribute('elastic_bandwidth_flag');
  }
  public set elasticBandwidthFlag(value: boolean | cdktf.IResolvable) {
    this._elasticBandwidthFlag = value;
  }
  public resetElasticBandwidthFlag() {
    this._elasticBandwidthFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticBandwidthFlagInput() {
    return this._elasticBandwidthFlag;
  }

  // protect_ip_count - computed: false, optional: false, required: true
  private _protectIpCount?: number; 
  public get protectIpCount() {
    return this.getNumberAttribute('protect_ip_count');
  }
  public set protectIpCount(value: number) {
    this._protectIpCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectIpCountInput() {
    return this._protectIpCount;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface AntiddosBgpInstanceStandardPlusPackageConfig {
  /**
  * 50Mbps protected bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#bandwidth AntiddosBgpInstance#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Whether to enable elastic service bandwidth. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#elastic_bandwidth_flag AntiddosBgpInstance#elastic_bandwidth_flag}
  */
  readonly elasticBandwidthFlag?: boolean | cdktf.IResolvable;
  /**
  * Protection Count: TWO_TIMES: Two full-power protections; UNLIMITED: Infinite protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#protect_count AntiddosBgpInstance#protect_count}
  */
  readonly protectCount: string;
  /**
  * Number of protected IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#protect_ip_count AntiddosBgpInstance#protect_ip_count}
  */
  readonly protectIpCount: number;
  /**
  * The region where the high-defense package was purchased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#region AntiddosBgpInstance#region}
  */
  readonly region: string;
}

export function antiddosBgpInstanceStandardPlusPackageConfigToTerraform(struct?: AntiddosBgpInstanceStandardPlusPackageConfigOutputReference | AntiddosBgpInstanceStandardPlusPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    elastic_bandwidth_flag: cdktf.booleanToTerraform(struct!.elasticBandwidthFlag),
    protect_count: cdktf.stringToTerraform(struct!.protectCount),
    protect_ip_count: cdktf.numberToTerraform(struct!.protectIpCount),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function antiddosBgpInstanceStandardPlusPackageConfigToHclTerraform(struct?: AntiddosBgpInstanceStandardPlusPackageConfigOutputReference | AntiddosBgpInstanceStandardPlusPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elastic_bandwidth_flag: {
      value: cdktf.booleanToHclTerraform(struct!.elasticBandwidthFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protect_count: {
      value: cdktf.stringToHclTerraform(struct!.protectCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_ip_count: {
      value: cdktf.numberToHclTerraform(struct!.protectIpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosBgpInstanceStandardPlusPackageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosBgpInstanceStandardPlusPackageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._elasticBandwidthFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticBandwidthFlag = this._elasticBandwidthFlag;
    }
    if (this._protectCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectCount = this._protectCount;
    }
    if (this._protectIpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectIpCount = this._protectIpCount;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosBgpInstanceStandardPlusPackageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidth = undefined;
      this._elasticBandwidthFlag = undefined;
      this._protectCount = undefined;
      this._protectIpCount = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidth = value.bandwidth;
      this._elasticBandwidthFlag = value.elasticBandwidthFlag;
      this._protectCount = value.protectCount;
      this._protectIpCount = value.protectIpCount;
      this._region = value.region;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // elastic_bandwidth_flag - computed: true, optional: true, required: false
  private _elasticBandwidthFlag?: boolean | cdktf.IResolvable; 
  public get elasticBandwidthFlag() {
    return this.getBooleanAttribute('elastic_bandwidth_flag');
  }
  public set elasticBandwidthFlag(value: boolean | cdktf.IResolvable) {
    this._elasticBandwidthFlag = value;
  }
  public resetElasticBandwidthFlag() {
    this._elasticBandwidthFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticBandwidthFlagInput() {
    return this._elasticBandwidthFlag;
  }

  // protect_count - computed: false, optional: false, required: true
  private _protectCount?: string; 
  public get protectCount() {
    return this.getStringAttribute('protect_count');
  }
  public set protectCount(value: string) {
    this._protectCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectCountInput() {
    return this._protectCount;
  }

  // protect_ip_count - computed: false, optional: false, required: true
  private _protectIpCount?: number; 
  public get protectIpCount() {
    return this.getNumberAttribute('protect_ip_count');
  }
  public set protectIpCount(value: number) {
    this._protectIpCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectIpCountInput() {
    return this._protectIpCount;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface AntiddosBgpInstanceTagInfoListStruct {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#tag_key AntiddosBgpInstance#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#tag_value AntiddosBgpInstance#tag_value}
  */
  readonly tagValue: string;
}

export function antiddosBgpInstanceTagInfoListStructToTerraform(struct?: AntiddosBgpInstanceTagInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function antiddosBgpInstanceTagInfoListStructToHclTerraform(struct?: AntiddosBgpInstanceTagInfoListStruct | cdktf.IResolvable): any {
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

export class AntiddosBgpInstanceTagInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiddosBgpInstanceTagInfoListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntiddosBgpInstanceTagInfoListStruct | cdktf.IResolvable | undefined) {
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

export class AntiddosBgpInstanceTagInfoListStructList extends cdktf.ComplexList {
  public internalValue? : AntiddosBgpInstanceTagInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): AntiddosBgpInstanceTagInfoListStructOutputReference {
    return new AntiddosBgpInstanceTagInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance tencentcloud_antiddos_bgp_instance}
*/
export class AntiddosBgpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_bgp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosBgpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosBgpInstance to import
  * @param importFromId The id of the existing AntiddosBgpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosBgpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_bgp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/antiddos_bgp_instance tencentcloud_antiddos_bgp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosBgpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosBgpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_bgp_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._instanceChargeType = config.instanceChargeType;
    this._packageType = config.packageType;
    this._enterprisePackageConfig.internalValue = config.enterprisePackageConfig;
    this._instanceChargePrepaid.internalValue = config.instanceChargePrepaid;
    this._standardPackageConfig.internalValue = config.standardPackageConfig;
    this._standardPlusPackageConfig.internalValue = config.standardPlusPackageConfig;
    this._tagInfoList.internalValue = config.tagInfoList;
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

  // instance_charge_type - computed: false, optional: false, required: true
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // enterprise_package_config - computed: false, optional: true, required: false
  private _enterprisePackageConfig = new AntiddosBgpInstanceEnterprisePackageConfigOutputReference(this, "enterprise_package_config");
  public get enterprisePackageConfig() {
    return this._enterprisePackageConfig;
  }
  public putEnterprisePackageConfig(value: AntiddosBgpInstanceEnterprisePackageConfig) {
    this._enterprisePackageConfig.internalValue = value;
  }
  public resetEnterprisePackageConfig() {
    this._enterprisePackageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterprisePackageConfigInput() {
    return this._enterprisePackageConfig.internalValue;
  }

  // instance_charge_prepaid - computed: false, optional: true, required: false
  private _instanceChargePrepaid = new AntiddosBgpInstanceInstanceChargePrepaidOutputReference(this, "instance_charge_prepaid");
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }
  public putInstanceChargePrepaid(value: AntiddosBgpInstanceInstanceChargePrepaid) {
    this._instanceChargePrepaid.internalValue = value;
  }
  public resetInstanceChargePrepaid() {
    this._instanceChargePrepaid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargePrepaidInput() {
    return this._instanceChargePrepaid.internalValue;
  }

  // standard_package_config - computed: false, optional: true, required: false
  private _standardPackageConfig = new AntiddosBgpInstanceStandardPackageConfigOutputReference(this, "standard_package_config");
  public get standardPackageConfig() {
    return this._standardPackageConfig;
  }
  public putStandardPackageConfig(value: AntiddosBgpInstanceStandardPackageConfig) {
    this._standardPackageConfig.internalValue = value;
  }
  public resetStandardPackageConfig() {
    this._standardPackageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPackageConfigInput() {
    return this._standardPackageConfig.internalValue;
  }

  // standard_plus_package_config - computed: false, optional: true, required: false
  private _standardPlusPackageConfig = new AntiddosBgpInstanceStandardPlusPackageConfigOutputReference(this, "standard_plus_package_config");
  public get standardPlusPackageConfig() {
    return this._standardPlusPackageConfig;
  }
  public putStandardPlusPackageConfig(value: AntiddosBgpInstanceStandardPlusPackageConfig) {
    this._standardPlusPackageConfig.internalValue = value;
  }
  public resetStandardPlusPackageConfig() {
    this._standardPlusPackageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardPlusPackageConfigInput() {
    return this._standardPlusPackageConfig.internalValue;
  }

  // tag_info_list - computed: false, optional: true, required: false
  private _tagInfoList = new AntiddosBgpInstanceTagInfoListStructList(this, "tag_info_list", false);
  public get tagInfoList() {
    return this._tagInfoList;
  }
  public putTagInfoList(value: AntiddosBgpInstanceTagInfoListStruct[] | cdktf.IResolvable) {
    this._tagInfoList.internalValue = value;
  }
  public resetTagInfoList() {
    this._tagInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInfoListInput() {
    return this._tagInfoList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      package_type: cdktf.stringToTerraform(this._packageType),
      enterprise_package_config: antiddosBgpInstanceEnterprisePackageConfigToTerraform(this._enterprisePackageConfig.internalValue),
      instance_charge_prepaid: antiddosBgpInstanceInstanceChargePrepaidToTerraform(this._instanceChargePrepaid.internalValue),
      standard_package_config: antiddosBgpInstanceStandardPackageConfigToTerraform(this._standardPackageConfig.internalValue),
      standard_plus_package_config: antiddosBgpInstanceStandardPlusPackageConfigToTerraform(this._standardPlusPackageConfig.internalValue),
      tag_info_list: cdktf.listMapper(antiddosBgpInstanceTagInfoListStructToTerraform, true)(this._tagInfoList.internalValue),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_package_config: {
        value: antiddosBgpInstanceEnterprisePackageConfigToHclTerraform(this._enterprisePackageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosBgpInstanceEnterprisePackageConfigList",
      },
      instance_charge_prepaid: {
        value: antiddosBgpInstanceInstanceChargePrepaidToHclTerraform(this._instanceChargePrepaid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosBgpInstanceInstanceChargePrepaidList",
      },
      standard_package_config: {
        value: antiddosBgpInstanceStandardPackageConfigToHclTerraform(this._standardPackageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosBgpInstanceStandardPackageConfigList",
      },
      standard_plus_package_config: {
        value: antiddosBgpInstanceStandardPlusPackageConfigToHclTerraform(this._standardPlusPackageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosBgpInstanceStandardPlusPackageConfigList",
      },
      tag_info_list: {
        value: cdktf.listMapperHcl(antiddosBgpInstanceTagInfoListStructToHclTerraform, true)(this._tagInfoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosBgpInstanceTagInfoListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
