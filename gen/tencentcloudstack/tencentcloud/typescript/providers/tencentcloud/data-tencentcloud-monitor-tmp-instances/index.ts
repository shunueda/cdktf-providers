// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorTmpInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#id DataTencentcloudMonitorTmpInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter according to instance charge type.
  * 	- 2: Prepaid;
  * 	- 3: Postpaid by hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#instance_charge_type DataTencentcloudMonitorTmpInstances#instance_charge_type}
  */
  readonly instanceChargeType?: number;
  /**
  * Query according to one or more instance IDs. The instance ID is like: prom-xxxx. The maximum number of instances requested is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#instance_ids DataTencentcloudMonitorTmpInstances#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Filter according to instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#instance_name DataTencentcloudMonitorTmpInstances#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Filter according to instance status.
  * 	- 1: Creating;
  * 	- 2: In operation;
  * 	- 3: Abnormal;
  * 	- 4: Reconstruction;
  * 	- 5: Destruction;
  * 	- 6: Stopped taking;
  * 	- 8: Suspension of service due to arrears;
  * 	- 9: Service has been suspended due to arrears.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#instance_status DataTencentcloudMonitorTmpInstances#instance_status}
  */
  readonly instanceStatus?: number[];
  /**
  * Filter according to ipv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#ipv4_address DataTencentcloudMonitorTmpInstances#ipv4_address}
  */
  readonly ipv4Address?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#result_output_file DataTencentcloudMonitorTmpInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter according to availability area. The availability area is shaped like: ap-Guangzhou-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#zones DataTencentcloudMonitorTmpInstances#zones}
  */
  readonly zones?: string[];
  /**
  * tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#tag_filters DataTencentcloudMonitorTmpInstances#tag_filters}
  */
  readonly tagFilters?: DataTencentcloudMonitorTmpInstancesTagFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudMonitorTmpInstancesInstanceSetGrant {
}

export function dataTencentcloudMonitorTmpInstancesInstanceSetGrantToTerraform(struct?: DataTencentcloudMonitorTmpInstancesInstanceSetGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorTmpInstancesInstanceSetGrantToHclTerraform(struct?: DataTencentcloudMonitorTmpInstancesInstanceSetGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorTmpInstancesInstanceSetGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorTmpInstancesInstanceSetGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorTmpInstancesInstanceSetGrant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_agent_manage - computed: true, optional: false, required: false
  public get hasAgentManage() {
    return this.getNumberAttribute('has_agent_manage');
  }

  // has_api_operation - computed: true, optional: false, required: false
  public get hasApiOperation() {
    return this.getNumberAttribute('has_api_operation');
  }

  // has_charge_operation - computed: true, optional: false, required: false
  public get hasChargeOperation() {
    return this.getNumberAttribute('has_charge_operation');
  }

  // has_grafana_status_change - computed: true, optional: false, required: false
  public get hasGrafanaStatusChange() {
    return this.getNumberAttribute('has_grafana_status_change');
  }

  // has_tke_manage - computed: true, optional: false, required: false
  public get hasTkeManage() {
    return this.getNumberAttribute('has_tke_manage');
  }

  // has_vpc_display - computed: true, optional: false, required: false
  public get hasVpcDisplay() {
    return this.getNumberAttribute('has_vpc_display');
  }
}

export class DataTencentcloudMonitorTmpInstancesInstanceSetGrantList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorTmpInstancesInstanceSetGrantOutputReference {
    return new DataTencentcloudMonitorTmpInstancesInstanceSetGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecification {
}

export function dataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationToTerraform(struct?: DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationToHclTerraform(struct?: DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationOutputReference {
    return new DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorTmpInstancesInstanceSet {
}

export function dataTencentcloudMonitorTmpInstancesInstanceSetToTerraform(struct?: DataTencentcloudMonitorTmpInstancesInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorTmpInstancesInstanceSetToHclTerraform(struct?: DataTencentcloudMonitorTmpInstancesInstanceSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorTmpInstancesInstanceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorTmpInstancesInstanceSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorTmpInstancesInstanceSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_rule_limit - computed: true, optional: false, required: false
  public get alertRuleLimit() {
    return this.getNumberAttribute('alert_rule_limit');
  }

  // api_root_path - computed: true, optional: false, required: false
  public get apiRootPath() {
    return this.getStringAttribute('api_root_path');
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // auto_renew_flag - computed: true, optional: false, required: false
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }

  // charge_status - computed: true, optional: false, required: false
  public get chargeStatus() {
    return this.getNumberAttribute('charge_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_retention_time - computed: true, optional: false, required: false
  public get dataRetentionTime() {
    return this.getNumberAttribute('data_retention_time');
  }

  // enable_grafana - computed: true, optional: false, required: false
  public get enableGrafana() {
    return this.getNumberAttribute('enable_grafana');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // grafana_instance_id - computed: true, optional: false, required: false
  public get grafanaInstanceId() {
    return this.getStringAttribute('grafana_instance_id');
  }

  // grafana_ip_white_list - computed: true, optional: false, required: false
  public get grafanaIpWhiteList() {
    return this.getStringAttribute('grafana_ip_white_list');
  }

  // grafana_status - computed: true, optional: false, required: false
  public get grafanaStatus() {
    return this.getNumberAttribute('grafana_status');
  }

  // grafana_url - computed: true, optional: false, required: false
  public get grafanaUrl() {
    return this.getStringAttribute('grafana_url');
  }

  // grant - computed: true, optional: false, required: false
  private _grant = new DataTencentcloudMonitorTmpInstancesInstanceSetGrantList(this, "grant", false);
  public get grant() {
    return this._grant;
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getNumberAttribute('instance_charge_type');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getNumberAttribute('instance_status');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // is_near_expire - computed: true, optional: false, required: false
  public get isNearExpire() {
    return this.getNumberAttribute('is_near_expire');
  }

  // migration_type - computed: true, optional: false, required: false
  public get migrationType() {
    return this.getNumberAttribute('migration_type');
  }

  // proxy_address - computed: true, optional: false, required: false
  public get proxyAddress() {
    return this.getStringAttribute('proxy_address');
  }

  // recording_rule_limit - computed: true, optional: false, required: false
  public get recordingRuleLimit() {
    return this.getNumberAttribute('recording_rule_limit');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // remote_write - computed: true, optional: false, required: false
  public get remoteWrite() {
    return this.getStringAttribute('remote_write');
  }

  // spec_name - computed: true, optional: false, required: false
  public get specName() {
    return this.getStringAttribute('spec_name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tag_specification - computed: true, optional: false, required: false
  private _tagSpecification = new DataTencentcloudMonitorTmpInstancesInstanceSetTagSpecificationList(this, "tag_specification", false);
  public get tagSpecification() {
    return this._tagSpecification;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataTencentcloudMonitorTmpInstancesInstanceSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorTmpInstancesInstanceSetOutputReference {
    return new DataTencentcloudMonitorTmpInstancesInstanceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorTmpInstancesTagFilters {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#key DataTencentcloudMonitorTmpInstances#key}
  */
  readonly key: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#value DataTencentcloudMonitorTmpInstances#value}
  */
  readonly value: string;
}

export function dataTencentcloudMonitorTmpInstancesTagFiltersToTerraform(struct?: DataTencentcloudMonitorTmpInstancesTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataTencentcloudMonitorTmpInstancesTagFiltersToHclTerraform(struct?: DataTencentcloudMonitorTmpInstancesTagFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataTencentcloudMonitorTmpInstancesTagFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorTmpInstancesTagFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorTmpInstancesTagFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataTencentcloudMonitorTmpInstancesTagFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudMonitorTmpInstancesTagFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudMonitorTmpInstancesTagFiltersOutputReference {
    return new DataTencentcloudMonitorTmpInstancesTagFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances tencentcloud_monitor_tmp_instances}
*/
export class DataTencentcloudMonitorTmpInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorTmpInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorTmpInstances to import
  * @param importFromId The id of the existing DataTencentcloudMonitorTmpInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorTmpInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/monitor_tmp_instances tencentcloud_monitor_tmp_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorTmpInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorTmpInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._instanceIds = config.instanceIds;
    this._instanceName = config.instanceName;
    this._instanceStatus = config.instanceStatus;
    this._ipv4Address = config.ipv4Address;
    this._resultOutputFile = config.resultOutputFile;
    this._zones = config.zones;
    this._tagFilters.internalValue = config.tagFilters;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: number; 
  public get instanceChargeType() {
    return this.getNumberAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: number) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_set - computed: true, optional: false, required: false
  private _instanceSet = new DataTencentcloudMonitorTmpInstancesInstanceSetList(this, "instance_set", false);
  public get instanceSet() {
    return this._instanceSet;
  }

  // instance_status - computed: false, optional: true, required: false
  private _instanceStatus?: number[]; 
  public get instanceStatus() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('instance_status')));
  }
  public set instanceStatus(value: number[]) {
    this._instanceStatus = value;
  }
  public resetInstanceStatus() {
    this._instanceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStatusInput() {
    return this._instanceStatus;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string[]; 
  public get ipv4Address() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_address'));
  }
  public set ipv4Address(value: string[]) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters = new DataTencentcloudMonitorTmpInstancesTagFiltersList(this, "tag_filters", false);
  public get tagFilters() {
    return this._tagFilters;
  }
  public putTagFilters(value: DataTencentcloudMonitorTmpInstancesTagFilters[] | cdktf.IResolvable) {
    this._tagFilters.internalValue = value;
  }
  public resetTagFilters() {
    this._tagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.numberToTerraform(this._instanceChargeType),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_status: cdktf.listMapper(cdktf.numberToTerraform, false)(this._instanceStatus),
      ipv4_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Address),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      tag_filters: cdktf.listMapper(dataTencentcloudMonitorTmpInstancesTagFiltersToTerraform, true)(this._tagFilters.internalValue),
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
        value: cdktf.numberToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_status: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._instanceStatus),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ipv4_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Address),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_filters: {
        value: cdktf.listMapperHcl(dataTencentcloudMonitorTmpInstancesTagFiltersToHclTerraform, true)(this._tagFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudMonitorTmpInstancesTagFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
