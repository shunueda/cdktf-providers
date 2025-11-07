// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenRouteServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#access_region_id DataAlicloudCenRouteServices#access_region_id}
  */
  readonly accessRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#cen_id DataAlicloudCenRouteServices#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#host DataAlicloudCenRouteServices#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#host_region_id DataAlicloudCenRouteServices#host_region_id}
  */
  readonly hostRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#host_vpc_id DataAlicloudCenRouteServices#host_vpc_id}
  */
  readonly hostVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#id DataAlicloudCenRouteServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#output_file DataAlicloudCenRouteServices#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#status DataAlicloudCenRouteServices#status}
  */
  readonly status?: string;
}
export interface DataAlicloudCenRouteServicesServices {
}

export function dataAlicloudCenRouteServicesServicesToTerraform(struct?: DataAlicloudCenRouteServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenRouteServicesServicesToHclTerraform(struct?: DataAlicloudCenRouteServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenRouteServicesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCenRouteServicesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenRouteServicesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_region_id - computed: true, optional: false, required: false
  public get accessRegionId() {
    return this.getStringAttribute('access_region_id');
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // host_region_id - computed: true, optional: false, required: false
  public get hostRegionId() {
    return this.getStringAttribute('host_region_id');
  }

  // host_vpc_id - computed: true, optional: false, required: false
  public get hostVpcId() {
    return this.getStringAttribute('host_vpc_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
}

export class DataAlicloudCenRouteServicesServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCenRouteServicesServicesOutputReference {
    return new DataAlicloudCenRouteServicesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services alicloud_cen_route_services}
*/
export class DataAlicloudCenRouteServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_route_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenRouteServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenRouteServices to import
  * @param importFromId The id of the existing DataAlicloudCenRouteServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenRouteServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_route_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_services alicloud_cen_route_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenRouteServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenRouteServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_route_services',
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
    this._accessRegionId = config.accessRegionId;
    this._cenId = config.cenId;
    this._host = config.host;
    this._hostRegionId = config.hostRegionId;
    this._hostVpcId = config.hostVpcId;
    this._id = config.id;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_region_id - computed: false, optional: true, required: false
  private _accessRegionId?: string; 
  public get accessRegionId() {
    return this.getStringAttribute('access_region_id');
  }
  public set accessRegionId(value: string) {
    this._accessRegionId = value;
  }
  public resetAccessRegionId() {
    this._accessRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRegionIdInput() {
    return this._accessRegionId;
  }

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_region_id - computed: false, optional: true, required: false
  private _hostRegionId?: string; 
  public get hostRegionId() {
    return this.getStringAttribute('host_region_id');
  }
  public set hostRegionId(value: string) {
    this._hostRegionId = value;
  }
  public resetHostRegionId() {
    this._hostRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRegionIdInput() {
    return this._hostRegionId;
  }

  // host_vpc_id - computed: false, optional: true, required: false
  private _hostVpcId?: string; 
  public get hostVpcId() {
    return this.getStringAttribute('host_vpc_id');
  }
  public set hostVpcId(value: string) {
    this._hostVpcId = value;
  }
  public resetHostVpcId() {
    this._hostVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostVpcIdInput() {
    return this._hostVpcId;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // services - computed: true, optional: false, required: false
  private _services = new DataAlicloudCenRouteServicesServicesList(this, "services", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_region_id: cdktf.stringToTerraform(this._accessRegionId),
      cen_id: cdktf.stringToTerraform(this._cenId),
      host: cdktf.stringToTerraform(this._host),
      host_region_id: cdktf.stringToTerraform(this._hostRegionId),
      host_vpc_id: cdktf.stringToTerraform(this._hostVpcId),
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_region_id: {
        value: cdktf.stringToHclTerraform(this._accessRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_region_id: {
        value: cdktf.stringToHclTerraform(this._hostRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_vpc_id: {
        value: cdktf.stringToHclTerraform(this._hostVpcId),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
