// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudGaCustomRoutingPortMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#accelerator_id DataAlicloudGaCustomRoutingPortMappings#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#endpoint_group_id DataAlicloudGaCustomRoutingPortMappings#endpoint_group_id}
  */
  readonly endpointGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#id DataAlicloudGaCustomRoutingPortMappings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#listener_id DataAlicloudGaCustomRoutingPortMappings#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#output_file DataAlicloudGaCustomRoutingPortMappings#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#page_number DataAlicloudGaCustomRoutingPortMappings#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#page_size DataAlicloudGaCustomRoutingPortMappings#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#status DataAlicloudGaCustomRoutingPortMappings#status}
  */
  readonly status?: string;
}
export interface DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddress {
}

export function dataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressToTerraform(struct?: DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressToHclTerraform(struct?: DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressOutputReference {
    return new DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappings {
}

export function dataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsToTerraform(struct?: DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsToHclTerraform(struct?: DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappings | undefined) {
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

  // accelerator_port - computed: true, optional: false, required: false
  public get acceleratorPort() {
    return this.getNumberAttribute('accelerator_port');
  }

  // destination_socket_address - computed: true, optional: false, required: false
  private _destinationSocketAddress = new DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsDestinationSocketAddressList(this, "destination_socket_address", false);
  public get destinationSocketAddress() {
    return this._destinationSocketAddress;
  }

  // endpoint_group_id - computed: true, optional: false, required: false
  public get endpointGroupId() {
    return this.getStringAttribute('endpoint_group_id');
  }

  // endpoint_group_region - computed: true, optional: false, required: false
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vswitch - computed: true, optional: false, required: false
  public get vswitch() {
    return this.getStringAttribute('vswitch');
  }
}

export class DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsOutputReference {
    return new DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings alicloud_ga_custom_routing_port_mappings}
*/
export class DataAlicloudGaCustomRoutingPortMappings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_custom_routing_port_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudGaCustomRoutingPortMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudGaCustomRoutingPortMappings to import
  * @param importFromId The id of the existing DataAlicloudGaCustomRoutingPortMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudGaCustomRoutingPortMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_custom_routing_port_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_custom_routing_port_mappings alicloud_ga_custom_routing_port_mappings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudGaCustomRoutingPortMappingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudGaCustomRoutingPortMappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_custom_routing_port_mappings',
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
    this._listenerId = config.listenerId;
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

  // custom_routing_port_mappings - computed: true, optional: false, required: false
  private _customRoutingPortMappings = new DataAlicloudGaCustomRoutingPortMappingsCustomRoutingPortMappingsList(this, "custom_routing_port_mappings", false);
  public get customRoutingPortMappings() {
    return this._customRoutingPortMappings;
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
      listener_id: cdktf.stringToTerraform(this._listenerId),
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
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
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
