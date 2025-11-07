// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudPrivatelinkVpcEndpointServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#auto_accept_connection DataAlicloudPrivatelinkVpcEndpointServices#auto_accept_connection}
  */
  readonly autoAcceptConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#id DataAlicloudPrivatelinkVpcEndpointServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#ids DataAlicloudPrivatelinkVpcEndpointServices#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#name_regex DataAlicloudPrivatelinkVpcEndpointServices#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#output_file DataAlicloudPrivatelinkVpcEndpointServices#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#service_business_status DataAlicloudPrivatelinkVpcEndpointServices#service_business_status}
  */
  readonly serviceBusinessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#status DataAlicloudPrivatelinkVpcEndpointServices#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#tags DataAlicloudPrivatelinkVpcEndpointServices#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#vpc_endpoint_service_name DataAlicloudPrivatelinkVpcEndpointServices#vpc_endpoint_service_name}
  */
  readonly vpcEndpointServiceName?: string;
}
export interface DataAlicloudPrivatelinkVpcEndpointServicesServices {
}

export function dataAlicloudPrivatelinkVpcEndpointServicesServicesToTerraform(struct?: DataAlicloudPrivatelinkVpcEndpointServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudPrivatelinkVpcEndpointServicesServicesToHclTerraform(struct?: DataAlicloudPrivatelinkVpcEndpointServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudPrivatelinkVpcEndpointServicesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudPrivatelinkVpcEndpointServicesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudPrivatelinkVpcEndpointServicesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_accept_connection - computed: true, optional: false, required: false
  public get autoAcceptConnection() {
    return this.getBooleanAttribute('auto_accept_connection');
  }

  // connect_bandwidth - computed: true, optional: false, required: false
  public get connectBandwidth() {
    return this.getNumberAttribute('connect_bandwidth');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_business_status - computed: true, optional: false, required: false
  public get serviceBusinessStatus() {
    return this.getStringAttribute('service_business_status');
  }

  // service_description - computed: true, optional: false, required: false
  public get serviceDescription() {
    return this.getStringAttribute('service_description');
  }

  // service_domain - computed: true, optional: false, required: false
  public get serviceDomain() {
    return this.getStringAttribute('service_domain');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
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

  // vpc_endpoint_service_name - computed: true, optional: false, required: false
  public get vpcEndpointServiceName() {
    return this.getStringAttribute('vpc_endpoint_service_name');
  }
}

export class DataAlicloudPrivatelinkVpcEndpointServicesServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudPrivatelinkVpcEndpointServicesServicesOutputReference {
    return new DataAlicloudPrivatelinkVpcEndpointServicesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services alicloud_privatelink_vpc_endpoint_services}
*/
export class DataAlicloudPrivatelinkVpcEndpointServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_privatelink_vpc_endpoint_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudPrivatelinkVpcEndpointServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudPrivatelinkVpcEndpointServices to import
  * @param importFromId The id of the existing DataAlicloudPrivatelinkVpcEndpointServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudPrivatelinkVpcEndpointServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_privatelink_vpc_endpoint_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/privatelink_vpc_endpoint_services alicloud_privatelink_vpc_endpoint_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudPrivatelinkVpcEndpointServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudPrivatelinkVpcEndpointServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_privatelink_vpc_endpoint_services',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAcceptConnection = config.autoAcceptConnection;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._serviceBusinessStatus = config.serviceBusinessStatus;
    this._status = config.status;
    this._tags = config.tags;
    this._vpcEndpointServiceName = config.vpcEndpointServiceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_accept_connection - computed: false, optional: true, required: false
  private _autoAcceptConnection?: boolean | cdktf.IResolvable; 
  public get autoAcceptConnection() {
    return this.getBooleanAttribute('auto_accept_connection');
  }
  public set autoAcceptConnection(value: boolean | cdktf.IResolvable) {
    this._autoAcceptConnection = value;
  }
  public resetAutoAcceptConnection() {
    this._autoAcceptConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptConnectionInput() {
    return this._autoAcceptConnection;
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

  // service_business_status - computed: false, optional: true, required: false
  private _serviceBusinessStatus?: string; 
  public get serviceBusinessStatus() {
    return this.getStringAttribute('service_business_status');
  }
  public set serviceBusinessStatus(value: string) {
    this._serviceBusinessStatus = value;
  }
  public resetServiceBusinessStatus() {
    this._serviceBusinessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusinessStatusInput() {
    return this._serviceBusinessStatus;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataAlicloudPrivatelinkVpcEndpointServicesServicesList(this, "services", false);
  public get services() {
    return this._services;
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

  // vpc_endpoint_service_name - computed: false, optional: true, required: false
  private _vpcEndpointServiceName?: string; 
  public get vpcEndpointServiceName() {
    return this.getStringAttribute('vpc_endpoint_service_name');
  }
  public set vpcEndpointServiceName(value: string) {
    this._vpcEndpointServiceName = value;
  }
  public resetVpcEndpointServiceName() {
    this._vpcEndpointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointServiceNameInput() {
    return this._vpcEndpointServiceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept_connection: cdktf.booleanToTerraform(this._autoAcceptConnection),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      service_business_status: cdktf.stringToTerraform(this._serviceBusinessStatus),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_endpoint_service_name: cdktf.stringToTerraform(this._vpcEndpointServiceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_accept_connection: {
        value: cdktf.booleanToHclTerraform(this._autoAcceptConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      service_business_status: {
        value: cdktf.stringToHclTerraform(this._serviceBusinessStatus),
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
      vpc_endpoint_service_name: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
