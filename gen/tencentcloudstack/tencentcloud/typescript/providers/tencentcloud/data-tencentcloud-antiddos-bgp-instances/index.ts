// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAntiddosBgpInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#filter_instance_id_list DataTencentcloudAntiddosBgpInstances#filter_instance_id_list}
  */
  readonly filterInstanceIdList?: string[];
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#filter_region DataTencentcloudAntiddosBgpInstances#filter_region}
  */
  readonly filterRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#id DataTencentcloudAntiddosBgpInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#result_output_file DataTencentcloudAntiddosBgpInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filter_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#filter_tag DataTencentcloudAntiddosBgpInstances#filter_tag}
  */
  readonly filterTag?: DataTencentcloudAntiddosBgpInstancesFilterTag[] | cdktf.IResolvable;
}
export interface DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfig {
}

export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // basic_protect_bandwidth - computed: true, optional: false, required: false
  public get basicProtectBandwidth() {
    return this.getNumberAttribute('basic_protect_bandwidth');
  }

  // elastic_bandwidth_flag - computed: true, optional: false, required: false
  public get elasticBandwidthFlag() {
    return this.getBooleanAttribute('elastic_bandwidth_flag');
  }

  // elastic_protect_bandwidth - computed: true, optional: false, required: false
  public get elasticProtectBandwidth() {
    return this.getNumberAttribute('elastic_protect_bandwidth');
  }

  // protect_ip_count - computed: true, optional: false, required: false
  public get protectIpCount() {
    return this.getNumberAttribute('protect_ip_count');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaid {
}

export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfig {
}

export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // elastic_bandwidth_flag - computed: true, optional: false, required: false
  public get elasticBandwidthFlag() {
    return this.getBooleanAttribute('elastic_bandwidth_flag');
  }

  // protect_ip_count - computed: true, optional: false, required: false
  public get protectIpCount() {
    return this.getNumberAttribute('protect_ip_count');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfig {
}

export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // elastic_bandwidth_flag - computed: true, optional: false, required: false
  public get elasticBandwidthFlag() {
    return this.getBooleanAttribute('elastic_bandwidth_flag');
  }

  // protect_count - computed: true, optional: false, required: false
  public get protectCount() {
    return this.getStringAttribute('protect_count');
  }

  // protect_ip_count - computed: true, optional: false, required: false
  public get protectIpCount() {
    return this.getNumberAttribute('protect_ip_count');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStruct {
}

export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBgpInstancesBgpInstanceListStruct {
}

export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListStructToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAntiddosBgpInstancesBgpInstanceListStructToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesBgpInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesBgpInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enterprise_package_config - computed: true, optional: false, required: false
  private _enterprisePackageConfig = new DataTencentcloudAntiddosBgpInstancesBgpInstanceListEnterprisePackageConfigList(this, "enterprise_package_config", false);
  public get enterprisePackageConfig() {
    return this._enterprisePackageConfig;
  }

  // instance_charge_prepaid - computed: true, optional: false, required: false
  private _instanceChargePrepaid = new DataTencentcloudAntiddosBgpInstancesBgpInstanceListInstanceChargePrepaidList(this, "instance_charge_prepaid", false);
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // standard_package_config - computed: true, optional: false, required: false
  private _standardPackageConfig = new DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPackageConfigList(this, "standard_package_config", false);
  public get standardPackageConfig() {
    return this._standardPackageConfig;
  }

  // standard_plus_package_config - computed: true, optional: false, required: false
  private _standardPlusPackageConfig = new DataTencentcloudAntiddosBgpInstancesBgpInstanceListStandardPlusPackageConfigList(this, "standard_plus_package_config", false);
  public get standardPlusPackageConfig() {
    return this._standardPlusPackageConfig;
  }

  // tag_info_list - computed: true, optional: false, required: false
  private _tagInfoList = new DataTencentcloudAntiddosBgpInstancesBgpInstanceListTagInfoListStructList(this, "tag_info_list", false);
  public get tagInfoList() {
    return this._tagInfoList;
  }
}

export class DataTencentcloudAntiddosBgpInstancesBgpInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesBgpInstanceListStructOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesBgpInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAntiddosBgpInstancesFilterTag {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#tag_key DataTencentcloudAntiddosBgpInstances#tag_key}
  */
  readonly tagKey: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#tag_value DataTencentcloudAntiddosBgpInstances#tag_value}
  */
  readonly tagValue: string;
}

export function dataTencentcloudAntiddosBgpInstancesFilterTagToTerraform(struct?: DataTencentcloudAntiddosBgpInstancesFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dataTencentcloudAntiddosBgpInstancesFilterTagToHclTerraform(struct?: DataTencentcloudAntiddosBgpInstancesFilterTag | cdktf.IResolvable): any {
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

export class DataTencentcloudAntiddosBgpInstancesFilterTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAntiddosBgpInstancesFilterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudAntiddosBgpInstancesFilterTag | cdktf.IResolvable | undefined) {
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

export class DataTencentcloudAntiddosBgpInstancesFilterTagList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudAntiddosBgpInstancesFilterTag[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudAntiddosBgpInstancesFilterTagOutputReference {
    return new DataTencentcloudAntiddosBgpInstancesFilterTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances tencentcloud_antiddos_bgp_instances}
*/
export class DataTencentcloudAntiddosBgpInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_bgp_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAntiddosBgpInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAntiddosBgpInstances to import
  * @param importFromId The id of the existing DataTencentcloudAntiddosBgpInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAntiddosBgpInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_bgp_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/antiddos_bgp_instances tencentcloud_antiddos_bgp_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAntiddosBgpInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAntiddosBgpInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_bgp_instances',
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
    this._filterInstanceIdList = config.filterInstanceIdList;
    this._filterRegion = config.filterRegion;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._filterTag.internalValue = config.filterTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_instance_list - computed: true, optional: false, required: false
  private _bgpInstanceList = new DataTencentcloudAntiddosBgpInstancesBgpInstanceListStructList(this, "bgp_instance_list", false);
  public get bgpInstanceList() {
    return this._bgpInstanceList;
  }

  // filter_instance_id_list - computed: false, optional: true, required: false
  private _filterInstanceIdList?: string[]; 
  public get filterInstanceIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_instance_id_list'));
  }
  public set filterInstanceIdList(value: string[]) {
    this._filterInstanceIdList = value;
  }
  public resetFilterInstanceIdList() {
    this._filterInstanceIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInstanceIdListInput() {
    return this._filterInstanceIdList;
  }

  // filter_region - computed: false, optional: false, required: true
  private _filterRegion?: string; 
  public get filterRegion() {
    return this.getStringAttribute('filter_region');
  }
  public set filterRegion(value: string) {
    this._filterRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRegionInput() {
    return this._filterRegion;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // filter_tag - computed: false, optional: true, required: false
  private _filterTag = new DataTencentcloudAntiddosBgpInstancesFilterTagList(this, "filter_tag", false);
  public get filterTag() {
    return this._filterTag;
  }
  public putFilterTag(value: DataTencentcloudAntiddosBgpInstancesFilterTag[] | cdktf.IResolvable) {
    this._filterTag.internalValue = value;
  }
  public resetFilterTag() {
    this._filterTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTagInput() {
    return this._filterTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_instance_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterInstanceIdList),
      filter_region: cdktf.stringToTerraform(this._filterRegion),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filter_tag: cdktf.listMapper(dataTencentcloudAntiddosBgpInstancesFilterTagToTerraform, true)(this._filterTag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_instance_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterInstanceIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_region: {
        value: cdktf.stringToHclTerraform(this._filterRegion),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_tag: {
        value: cdktf.listMapperHcl(dataTencentcloudAntiddosBgpInstancesFilterTagToHclTerraform, true)(this._filterTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudAntiddosBgpInstancesFilterTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
