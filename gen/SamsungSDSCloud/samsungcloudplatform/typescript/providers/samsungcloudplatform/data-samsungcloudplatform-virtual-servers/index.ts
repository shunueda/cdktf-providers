// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformVirtualServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto Scaling Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#auto_scaling_enabled DataSamsungcloudplatformVirtualServers#auto_scaling_enabled}
  */
  readonly autoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Auto Scaling Group Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#auto_scaling_group_id DataSamsungcloudplatformVirtualServers#auto_scaling_group_id}
  */
  readonly autoScalingGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#id DataSamsungcloudplatformVirtualServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#page DataSamsungcloudplatformVirtualServers#page}
  */
  readonly page?: number;
  /**
  * Server Group Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#server_group_id DataSamsungcloudplatformVirtualServers#server_group_id}
  */
  readonly serverGroupId?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#size DataSamsungcloudplatformVirtualServers#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#sort DataSamsungcloudplatformVirtualServers#sort}
  */
  readonly sort?: string;
  /**
  * Virtual server id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#virtual_server_id DataSamsungcloudplatformVirtualServers#virtual_server_id}
  */
  readonly virtualServerId?: string;
  /**
  * Virtual Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#virtual_server_name DataSamsungcloudplatformVirtualServers#virtual_server_name}
  */
  readonly virtualServerName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#filter DataSamsungcloudplatformVirtualServers#filter}
  */
  readonly filter?: DataSamsungcloudplatformVirtualServersFilter[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformVirtualServersContentsSecurityGroupIds {
}

export function dataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsToTerraform(struct?: DataSamsungcloudplatformVirtualServersContentsSecurityGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsToHclTerraform(struct?: DataSamsungcloudplatformVirtualServersContentsSecurityGroupIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformVirtualServersContentsSecurityGroupIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformVirtualServersContentsSecurityGroupIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // security_group_member_state - computed: true, optional: false, required: false
  public get securityGroupMemberState() {
    return this.getStringAttribute('security_group_member_state');
  }
}

export class DataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsOutputReference {
    return new DataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformVirtualServersContents {
}

export function dataSamsungcloudplatformVirtualServersContentsToTerraform(struct?: DataSamsungcloudplatformVirtualServersContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformVirtualServersContentsToHclTerraform(struct?: DataSamsungcloudplatformVirtualServersContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformVirtualServersContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformVirtualServersContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformVirtualServersContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_enabled - computed: true, optional: false, required: false
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // block_storage_ids - computed: true, optional: false, required: false
  public get blockStorageIds() {
    return this.getListAttribute('block_storage_ids');
  }

  // contract - computed: true, optional: false, required: false
  public get contract() {
    return this.getStringAttribute('contract');
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }

  // dns_enabled - computed: true, optional: false, required: false
  public get dnsEnabled() {
    return this.getBooleanAttribute('dns_enabled');
  }

  // encrypt_enabled - computed: true, optional: false, required: false
  public get encryptEnabled() {
    return this.getBooleanAttribute('encrypt_enabled');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // initial_script_content - computed: true, optional: false, required: false
  public get initialScriptContent() {
    return this.getStringAttribute('initial_script_content');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_dr - computed: true, optional: false, required: false
  public get isDr() {
    return this.getBooleanAttribute('is_dr');
  }

  // key_pair_id - computed: true, optional: false, required: false
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // next_contract_end_date - computed: true, optional: false, required: false
  public get nextContractEndDate() {
    return this.getStringAttribute('next_contract_end_date');
  }

  // next_contract_id - computed: true, optional: false, required: false
  public get nextContractId() {
    return this.getStringAttribute('next_contract_id');
  }

  // nic_ids - computed: true, optional: false, required: false
  public get nicIds() {
    return this.getListAttribute('nic_ids');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // placement_group_id - computed: true, optional: false, required: false
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  private _securityGroupIds = new DataSamsungcloudplatformVirtualServersContentsSecurityGroupIdsList(this, "security_group_ids", false);
  public get securityGroupIds() {
    return this._securityGroupIds;
  }

  // server_group_id - computed: true, optional: false, required: false
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // server_type_id - computed: true, optional: false, required: false
  public get serverTypeId() {
    return this.getStringAttribute('server_type_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // serviced_for - computed: true, optional: false, required: false
  public get servicedFor() {
    return this.getStringAttribute('serviced_for');
  }

  // serviced_group_for - computed: true, optional: false, required: false
  public get servicedGroupFor() {
    return this.getStringAttribute('serviced_group_for');
  }

  // virtual_server_dr_id - computed: true, optional: false, required: false
  public get virtualServerDrId() {
    return this.getStringAttribute('virtual_server_dr_id');
  }

  // virtual_server_id - computed: true, optional: false, required: false
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }

  // virtual_server_name - computed: true, optional: false, required: false
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }

  // virtual_server_state - computed: true, optional: false, required: false
  public get virtualServerState() {
    return this.getStringAttribute('virtual_server_state');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataSamsungcloudplatformVirtualServersContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformVirtualServersContentsOutputReference {
    return new DataSamsungcloudplatformVirtualServersContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformVirtualServersFilter {
  /**
  * Filtering target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#name DataSamsungcloudplatformVirtualServers#name}
  */
  readonly name: string;
  /**
  * Enable regex match for values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#use_regex DataSamsungcloudplatformVirtualServers#use_regex}
  */
  readonly useRegex?: boolean | cdktf.IResolvable;
  /**
  * Filtering values. Each matching value is appended. (OR rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#values DataSamsungcloudplatformVirtualServers#values}
  */
  readonly values: string[];
}

export function dataSamsungcloudplatformVirtualServersFilterToTerraform(struct?: DataSamsungcloudplatformVirtualServersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_regex: cdktf.booleanToTerraform(struct!.useRegex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataSamsungcloudplatformVirtualServersFilterToHclTerraform(struct?: DataSamsungcloudplatformVirtualServersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_regex: {
      value: cdktf.booleanToHclTerraform(struct!.useRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSamsungcloudplatformVirtualServersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformVirtualServersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRegex = this._useRegex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformVirtualServersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._useRegex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._useRegex = value.useRegex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_regex - computed: false, optional: true, required: false
  private _useRegex?: boolean | cdktf.IResolvable; 
  public get useRegex() {
    return this.getBooleanAttribute('use_regex');
  }
  public set useRegex(value: boolean | cdktf.IResolvable) {
    this._useRegex = value;
  }
  public resetUseRegex() {
    this._useRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRegexInput() {
    return this._useRegex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataSamsungcloudplatformVirtualServersFilterList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformVirtualServersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformVirtualServersFilterOutputReference {
    return new DataSamsungcloudplatformVirtualServersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers samsungcloudplatform_virtual_servers}
*/
export class DataSamsungcloudplatformVirtualServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_virtual_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformVirtualServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformVirtualServers to import
  * @param importFromId The id of the existing DataSamsungcloudplatformVirtualServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformVirtualServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_virtual_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/virtual_servers samsungcloudplatform_virtual_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformVirtualServersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformVirtualServersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_virtual_servers',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingEnabled = config.autoScalingEnabled;
    this._autoScalingGroupId = config.autoScalingGroupId;
    this._id = config.id;
    this._page = config.page;
    this._serverGroupId = config.serverGroupId;
    this._size = config.size;
    this._sort = config.sort;
    this._virtualServerId = config.virtualServerId;
    this._virtualServerName = config.virtualServerName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_enabled - computed: false, optional: true, required: false
  private _autoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }
  public set autoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScalingEnabled = value;
  }
  public resetAutoScalingEnabled() {
    this._autoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingEnabledInput() {
    return this._autoScalingEnabled;
  }

  // auto_scaling_group_id - computed: false, optional: true, required: false
  private _autoScalingGroupId?: string; 
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }
  public set autoScalingGroupId(value: string) {
    this._autoScalingGroupId = value;
  }
  public resetAutoScalingGroupId() {
    this._autoScalingGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupIdInput() {
    return this._autoScalingGroupId;
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformVirtualServersContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // server_group_id - computed: false, optional: true, required: false
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  public resetServerGroupId() {
    this._serverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // virtual_server_id - computed: false, optional: true, required: false
  private _virtualServerId?: string; 
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }
  public set virtualServerId(value: string) {
    this._virtualServerId = value;
  }
  public resetVirtualServerId() {
    this._virtualServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdInput() {
    return this._virtualServerId;
  }

  // virtual_server_name - computed: false, optional: true, required: false
  private _virtualServerName?: string; 
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }
  public set virtualServerName(value: string) {
    this._virtualServerName = value;
  }
  public resetVirtualServerName() {
    this._virtualServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerNameInput() {
    return this._virtualServerName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSamsungcloudplatformVirtualServersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSamsungcloudplatformVirtualServersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_enabled: cdktf.booleanToTerraform(this._autoScalingEnabled),
      auto_scaling_group_id: cdktf.stringToTerraform(this._autoScalingGroupId),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      server_group_id: cdktf.stringToTerraform(this._serverGroupId),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
      virtual_server_id: cdktf.stringToTerraform(this._virtualServerId),
      virtual_server_name: cdktf.stringToTerraform(this._virtualServerName),
      filter: cdktf.listMapper(dataSamsungcloudplatformVirtualServersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._autoScalingGroupId),
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
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_group_id: {
        value: cdktf.stringToHclTerraform(this._serverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_id: {
        value: cdktf.stringToHclTerraform(this._virtualServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_name: {
        value: cdktf.stringToHclTerraform(this._virtualServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformVirtualServersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSamsungcloudplatformVirtualServersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
