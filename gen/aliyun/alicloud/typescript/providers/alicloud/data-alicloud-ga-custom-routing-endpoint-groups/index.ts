// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudGaCustomRoutingEndpointGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#accelerator_id DataAlicloudGaCustomRoutingEndpointGroups#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#endpoint_group_id DataAlicloudGaCustomRoutingEndpointGroups#endpoint_group_id}
  */
  readonly endpointGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#id DataAlicloudGaCustomRoutingEndpointGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#ids DataAlicloudGaCustomRoutingEndpointGroups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#listener_id DataAlicloudGaCustomRoutingEndpointGroups#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#name_regex DataAlicloudGaCustomRoutingEndpointGroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#output_file DataAlicloudGaCustomRoutingEndpointGroups#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#page_number DataAlicloudGaCustomRoutingEndpointGroups#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#page_size DataAlicloudGaCustomRoutingEndpointGroups#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#status DataAlicloudGaCustomRoutingEndpointGroups#status}
  */
  readonly status?: string;
}
export interface DataAlicloudGaCustomRoutingEndpointGroupsGroups {
}

export function dataAlicloudGaCustomRoutingEndpointGroupsGroupsToTerraform(struct?: DataAlicloudGaCustomRoutingEndpointGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaCustomRoutingEndpointGroupsGroupsToHclTerraform(struct?: DataAlicloudGaCustomRoutingEndpointGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaCustomRoutingEndpointGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaCustomRoutingEndpointGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaCustomRoutingEndpointGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_id - computed: true, optional: false, required: false
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }

  // custom_routing_endpoint_group_name - computed: true, optional: false, required: false
  public get customRoutingEndpointGroupName() {
    return this.getStringAttribute('custom_routing_endpoint_group_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint_group_id - computed: true, optional: false, required: false
  public get endpointGroupId() {
    return this.getStringAttribute('endpoint_group_id');
  }

  // endpoint_group_ip_list - computed: true, optional: false, required: false
  public get endpointGroupIpList() {
    return this.getListAttribute('endpoint_group_ip_list');
  }

  // endpoint_group_region - computed: true, optional: false, required: false
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }

  // endpoint_group_unconfirmed_ip_list - computed: true, optional: false, required: false
  public get endpointGroupUnconfirmedIpList() {
    return this.getListAttribute('endpoint_group_unconfirmed_ip_list');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudGaCustomRoutingEndpointGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaCustomRoutingEndpointGroupsGroupsOutputReference {
    return new DataAlicloudGaCustomRoutingEndpointGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups alicloud_ga_custom_routing_endpoint_groups}
*/
export class DataAlicloudGaCustomRoutingEndpointGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_custom_routing_endpoint_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudGaCustomRoutingEndpointGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudGaCustomRoutingEndpointGroups to import
  * @param importFromId The id of the existing DataAlicloudGaCustomRoutingEndpointGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudGaCustomRoutingEndpointGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_custom_routing_endpoint_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_endpoint_groups alicloud_ga_custom_routing_endpoint_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudGaCustomRoutingEndpointGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudGaCustomRoutingEndpointGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_custom_routing_endpoint_groups',
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
    this._acceleratorId = config.acceleratorId;
    this._endpointGroupId = config.endpointGroupId;
    this._id = config.id;
    this._ids = config.ids;
    this._listenerId = config.listenerId;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_id - computed: false, optional: false, required: true
  private _acceleratorId?: string; 
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }
  public set acceleratorId(value: string) {
    this._acceleratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdInput() {
    return this._acceleratorId;
  }

  // endpoint_group_id - computed: false, optional: true, required: false
  private _endpointGroupId?: string; 
  public get endpointGroupId() {
    return this.getStringAttribute('endpoint_group_id');
  }
  public set endpointGroupId(value: string) {
    this._endpointGroupId = value;
  }
  public resetEndpointGroupId() {
    this._endpointGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupIdInput() {
    return this._endpointGroupId;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAlicloudGaCustomRoutingEndpointGroupsGroupsList(this, "groups", false);
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

  // listener_id - computed: false, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
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

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      endpoint_group_id: cdktf.stringToTerraform(this._endpointGroupId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_id: {
        value: cdktf.stringToHclTerraform(this._acceleratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_group_id: {
        value: cdktf.stringToHclTerraform(this._endpointGroupId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
