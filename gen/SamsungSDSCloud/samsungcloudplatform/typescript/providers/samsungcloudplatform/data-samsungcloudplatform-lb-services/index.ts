// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformLbServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#created_by DataSamsungcloudplatformLbServices#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#id DataSamsungcloudplatformLbServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol layer type (L4, L7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#layer_type DataSamsungcloudplatformLbServices#layer_type}
  */
  readonly layerType?: string;
  /**
  * Load balancer service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#lb_service_name DataSamsungcloudplatformLbServices#lb_service_name}
  */
  readonly lbServiceName?: string;
  /**
  * Load balancer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#load_balancer_id DataSamsungcloudplatformLbServices#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Load balancer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#load_balancer_name DataSamsungcloudplatformLbServices#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#page DataSamsungcloudplatformLbServices#page}
  */
  readonly page?: number;
  /**
  * The file storage protocol type to create (NFS, CIFS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#protocol DataSamsungcloudplatformLbServices#protocol}
  */
  readonly protocol?: string;
  /**
  * Service ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#service_ip_address DataSamsungcloudplatformLbServices#service_ip_address}
  */
  readonly serviceIpAddress?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#size DataSamsungcloudplatformLbServices#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#sort DataSamsungcloudplatformLbServices#sort}
  */
  readonly sort?: string;
  /**
  * check status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#status_check DataSamsungcloudplatformLbServices#status_check}
  */
  readonly statusCheck?: boolean | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformLbServicesContents {
}

export function dataSamsungcloudplatformLbServicesContentsToTerraform(struct?: DataSamsungcloudplatformLbServicesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformLbServicesContentsToHclTerraform(struct?: DataSamsungcloudplatformLbServicesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformLbServicesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformLbServicesContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLbServicesContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // default_forwarding_ports - computed: true, optional: false, required: false
  public get defaultForwardingPorts() {
    return this.getStringAttribute('default_forwarding_ports');
  }

  // layer_type - computed: true, optional: false, required: false
  public get layerType() {
    return this.getStringAttribute('layer_type');
  }

  // lb_service_id - computed: true, optional: false, required: false
  public get lbServiceId() {
    return this.getStringAttribute('lb_service_id');
  }

  // lb_service_ip_id - computed: true, optional: false, required: false
  public get lbServiceIpId() {
    return this.getStringAttribute('lb_service_ip_id');
  }

  // lb_service_name - computed: true, optional: false, required: false
  public get lbServiceName() {
    return this.getStringAttribute('lb_service_name');
  }

  // lb_service_state - computed: true, optional: false, required: false
  public get lbServiceState() {
    return this.getStringAttribute('lb_service_state');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // service_ip_address - computed: true, optional: false, required: false
  public get serviceIpAddress() {
    return this.getStringAttribute('service_ip_address');
  }

  // service_ports - computed: true, optional: false, required: false
  public get servicePorts() {
    return this.getStringAttribute('service_ports');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
}

export class DataSamsungcloudplatformLbServicesContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformLbServicesContentsOutputReference {
    return new DataSamsungcloudplatformLbServicesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services samsungcloudplatform_lb_services}
*/
export class DataSamsungcloudplatformLbServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformLbServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformLbServices to import
  * @param importFromId The id of the existing DataSamsungcloudplatformLbServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformLbServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_services samsungcloudplatform_lb_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformLbServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformLbServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_services',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._layerType = config.layerType;
    this._lbServiceName = config.lbServiceName;
    this._loadBalancerId = config.loadBalancerId;
    this._loadBalancerName = config.loadBalancerName;
    this._page = config.page;
    this._protocol = config.protocol;
    this._serviceIpAddress = config.serviceIpAddress;
    this._size = config.size;
    this._sort = config.sort;
    this._statusCheck = config.statusCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformLbServicesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // layer_type - computed: false, optional: true, required: false
  private _layerType?: string; 
  public get layerType() {
    return this.getStringAttribute('layer_type');
  }
  public set layerType(value: string) {
    this._layerType = value;
  }
  public resetLayerType() {
    this._layerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerTypeInput() {
    return this._layerType;
  }

  // lb_service_name - computed: false, optional: true, required: false
  private _lbServiceName?: string; 
  public get lbServiceName() {
    return this.getStringAttribute('lb_service_name');
  }
  public set lbServiceName(value: string) {
    this._lbServiceName = value;
  }
  public resetLbServiceName() {
    this._lbServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbServiceNameInput() {
    return this._lbServiceName;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // load_balancer_name - computed: false, optional: true, required: false
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  public resetLoadBalancerName() {
    this._loadBalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_ip_address - computed: false, optional: true, required: false
  private _serviceIpAddress?: string; 
  public get serviceIpAddress() {
    return this.getStringAttribute('service_ip_address');
  }
  public set serviceIpAddress(value: string) {
    this._serviceIpAddress = value;
  }
  public resetServiceIpAddress() {
    this._serviceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpAddressInput() {
    return this._serviceIpAddress;
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

  // status_check - computed: false, optional: true, required: false
  private _statusCheck?: boolean | cdktf.IResolvable; 
  public get statusCheck() {
    return this.getBooleanAttribute('status_check');
  }
  public set statusCheck(value: boolean | cdktf.IResolvable) {
    this._statusCheck = value;
  }
  public resetStatusCheck() {
    this._statusCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      layer_type: cdktf.stringToTerraform(this._layerType),
      lb_service_name: cdktf.stringToTerraform(this._lbServiceName),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      page: cdktf.numberToTerraform(this._page),
      protocol: cdktf.stringToTerraform(this._protocol),
      service_ip_address: cdktf.stringToTerraform(this._serviceIpAddress),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
      status_check: cdktf.booleanToTerraform(this._statusCheck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      layer_type: {
        value: cdktf.stringToHclTerraform(this._layerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_service_name: {
        value: cdktf.stringToHclTerraform(this._lbServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ip_address: {
        value: cdktf.stringToHclTerraform(this._serviceIpAddress),
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
      status_check: {
        value: cdktf.booleanToHclTerraform(this._statusCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
