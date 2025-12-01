// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudNlbServerGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#id DataAlicloudNlbServerGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#ids DataAlicloudNlbServerGroups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#name_regex DataAlicloudNlbServerGroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#output_file DataAlicloudNlbServerGroups#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#resource_group_id DataAlicloudNlbServerGroups#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#server_group_names DataAlicloudNlbServerGroups#server_group_names}
  */
  readonly serverGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#server_group_type DataAlicloudNlbServerGroups#server_group_type}
  */
  readonly serverGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#status DataAlicloudNlbServerGroups#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#tags DataAlicloudNlbServerGroups#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlicloudNlbServerGroupsGroupsHealthCheck {
}

export function dataAlicloudNlbServerGroupsGroupsHealthCheckToTerraform(struct?: DataAlicloudNlbServerGroupsGroupsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudNlbServerGroupsGroupsHealthCheckToHclTerraform(struct?: DataAlicloudNlbServerGroupsGroupsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudNlbServerGroupsGroupsHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudNlbServerGroupsGroupsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudNlbServerGroupsGroupsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_check_connect_port - computed: true, optional: false, required: false
  public get healthCheckConnectPort() {
    return this.getNumberAttribute('health_check_connect_port');
  }

  // health_check_connect_timeout - computed: true, optional: false, required: false
  public get healthCheckConnectTimeout() {
    return this.getNumberAttribute('health_check_connect_timeout');
  }

  // health_check_domain - computed: true, optional: false, required: false
  public get healthCheckDomain() {
    return this.getStringAttribute('health_check_domain');
  }

  // health_check_enabled - computed: true, optional: false, required: false
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }

  // health_check_http_code - computed: true, optional: false, required: false
  public get healthCheckHttpCode() {
    return this.getListAttribute('health_check_http_code');
  }

  // health_check_interval - computed: true, optional: false, required: false
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // health_check_url - computed: true, optional: false, required: false
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // http_check_method - computed: true, optional: false, required: false
  public get httpCheckMethod() {
    return this.getStringAttribute('http_check_method');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}

export class DataAlicloudNlbServerGroupsGroupsHealthCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudNlbServerGroupsGroupsHealthCheckOutputReference {
    return new DataAlicloudNlbServerGroupsGroupsHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudNlbServerGroupsGroups {
}

export function dataAlicloudNlbServerGroupsGroupsToTerraform(struct?: DataAlicloudNlbServerGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudNlbServerGroupsGroupsToHclTerraform(struct?: DataAlicloudNlbServerGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudNlbServerGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudNlbServerGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudNlbServerGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_ip_version - computed: true, optional: false, required: false
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }

  // connection_drain - computed: true, optional: false, required: false
  public get connectionDrain() {
    return this.getBooleanAttribute('connection_drain');
  }

  // connection_drain_timeout - computed: true, optional: false, required: false
  public get connectionDrainTimeout() {
    return this.getNumberAttribute('connection_drain_timeout');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataAlicloudNlbServerGroupsGroupsHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // preserve_client_ip_enabled - computed: true, optional: false, required: false
  public get preserveClientIpEnabled() {
    return this.getBooleanAttribute('preserve_client_ip_enabled');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // related_load_balancer_ids - computed: true, optional: false, required: false
  public get relatedLoadBalancerIds() {
    return this.getListAttribute('related_load_balancer_ids');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // scheduler - computed: true, optional: false, required: false
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }

  // server_count - computed: true, optional: false, required: false
  public get serverCount() {
    return this.getNumberAttribute('server_count');
  }

  // server_group_name - computed: true, optional: false, required: false
  public get serverGroupName() {
    return this.getStringAttribute('server_group_name');
  }

  // server_group_type - computed: true, optional: false, required: false
  public get serverGroupType() {
    return this.getStringAttribute('server_group_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAlicloudNlbServerGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudNlbServerGroupsGroupsOutputReference {
    return new DataAlicloudNlbServerGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups alicloud_nlb_server_groups}
*/
export class DataAlicloudNlbServerGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nlb_server_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudNlbServerGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudNlbServerGroups to import
  * @param importFromId The id of the existing DataAlicloudNlbServerGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudNlbServerGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nlb_server_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/nlb_server_groups alicloud_nlb_server_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudNlbServerGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudNlbServerGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nlb_server_groups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
    this._serverGroupNames = config.serverGroupNames;
    this._serverGroupType = config.serverGroupType;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAlicloudNlbServerGroupsGroupsList(this, "groups", false);
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // server_group_names - computed: false, optional: true, required: false
  private _serverGroupNames?: string[]; 
  public get serverGroupNames() {
    return this.getListAttribute('server_group_names');
  }
  public set serverGroupNames(value: string[]) {
    this._serverGroupNames = value;
  }
  public resetServerGroupNames() {
    this._serverGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupNamesInput() {
    return this._serverGroupNames;
  }

  // server_group_type - computed: false, optional: true, required: false
  private _serverGroupType?: string; 
  public get serverGroupType() {
    return this.getStringAttribute('server_group_type');
  }
  public set serverGroupType(value: string) {
    this._serverGroupType = value;
  }
  public resetServerGroupType() {
    this._serverGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupTypeInput() {
    return this._serverGroupType;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      server_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverGroupNames),
      server_group_type: cdktf.stringToTerraform(this._serverGroupType),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_group_type: {
        value: cdktf.stringToHclTerraform(this._serverGroupType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
