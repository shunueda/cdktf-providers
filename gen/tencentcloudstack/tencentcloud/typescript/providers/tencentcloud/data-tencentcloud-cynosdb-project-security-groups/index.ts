// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCynosdbProjectSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups#id DataTencentcloudCynosdbProjectSecurityGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups#project_id DataTencentcloudCynosdbProjectSecurityGroups#project_id}
  */
  readonly projectId?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups#result_output_file DataTencentcloudCynosdbProjectSecurityGroups#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Search Keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups#search_key DataTencentcloudCynosdbProjectSecurityGroups#search_key}
  */
  readonly searchKey?: string;
}
export interface DataTencentcloudCynosdbProjectSecurityGroupsGroupsInbound {
}

export function dataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundToTerraform(struct?: DataTencentcloudCynosdbProjectSecurityGroupsGroupsInbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundToHclTerraform(struct?: DataTencentcloudCynosdbProjectSecurityGroupsGroupsInbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbProjectSecurityGroupsGroupsInbound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbProjectSecurityGroupsGroupsInbound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // address_module - computed: true, optional: false, required: false
  public get addressModule() {
    return this.getStringAttribute('address_module');
  }

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // service_module - computed: true, optional: false, required: false
  public get serviceModule() {
    return this.getStringAttribute('service_module');
  }
}

export class DataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundOutputReference {
    return new DataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutbound {
}

export function dataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundToTerraform(struct?: DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundToHclTerraform(struct?: DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutbound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutbound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // address_module - computed: true, optional: false, required: false
  public get addressModule() {
    return this.getStringAttribute('address_module');
  }

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // service_module - computed: true, optional: false, required: false
  public get serviceModule() {
    return this.getStringAttribute('service_module');
  }
}

export class DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundOutputReference {
    return new DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbProjectSecurityGroupsGroups {
}

export function dataTencentcloudCynosdbProjectSecurityGroupsGroupsToTerraform(struct?: DataTencentcloudCynosdbProjectSecurityGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbProjectSecurityGroupsGroupsToHclTerraform(struct?: DataTencentcloudCynosdbProjectSecurityGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbProjectSecurityGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbProjectSecurityGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // inbound - computed: true, optional: false, required: false
  private _inbound = new DataTencentcloudCynosdbProjectSecurityGroupsGroupsInboundList(this, "inbound", false);
  public get inbound() {
    return this._inbound;
  }

  // outbound - computed: true, optional: false, required: false
  private _outbound = new DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutboundList(this, "outbound", false);
  public get outbound() {
    return this._outbound;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // security_group_remark - computed: true, optional: false, required: false
  public get securityGroupRemark() {
    return this.getStringAttribute('security_group_remark');
  }
}

export class DataTencentcloudCynosdbProjectSecurityGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutputReference {
    return new DataTencentcloudCynosdbProjectSecurityGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups tencentcloud_cynosdb_project_security_groups}
*/
export class DataTencentcloudCynosdbProjectSecurityGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_project_security_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCynosdbProjectSecurityGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCynosdbProjectSecurityGroups to import
  * @param importFromId The id of the existing DataTencentcloudCynosdbProjectSecurityGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCynosdbProjectSecurityGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_project_security_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/cynosdb_project_security_groups tencentcloud_cynosdb_project_security_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCynosdbProjectSecurityGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCynosdbProjectSecurityGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_project_security_groups',
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
    this._id = config.id;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._searchKey = config.searchKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: false
  private _groups = new DataTencentcloudCynosdbProjectSecurityGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.numberToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
