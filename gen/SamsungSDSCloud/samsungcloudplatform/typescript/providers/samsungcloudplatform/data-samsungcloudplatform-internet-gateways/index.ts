// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformInternetGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#created_by DataSamsungcloudplatformInternetGateways#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#id DataSamsungcloudplatformInternetGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description of internet gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#internet_gateway_description DataSamsungcloudplatformInternetGateways#internet_gateway_description}
  */
  readonly internetGatewayDescription?: string;
  /**
  * Internet Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#internet_gateway_id DataSamsungcloudplatformInternetGateways#internet_gateway_id}
  */
  readonly internetGatewayId?: string;
  /**
  * Internet Gateway name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#internet_gateway_name DataSamsungcloudplatformInternetGateways#internet_gateway_name}
  */
  readonly internetGatewayName?: string;
  /**
  * Internet Gateway status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#internet_gateway_state DataSamsungcloudplatformInternetGateways#internet_gateway_state}
  */
  readonly internetGatewayState?: number;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#page DataSamsungcloudplatformInternetGateways#page}
  */
  readonly page?: number;
  /**
  * Service zone id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#service_zone_id DataSamsungcloudplatformInternetGateways#service_zone_id}
  */
  readonly serviceZoneId?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#size DataSamsungcloudplatformInternetGateways#size}
  */
  readonly size?: number;
  /**
  * VPC id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#vpc_id DataSamsungcloudplatformInternetGateways#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#contents DataSamsungcloudplatformInternetGateways#contents}
  */
  readonly contents?: DataSamsungcloudplatformInternetGatewaysContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformInternetGatewaysContents {
}

export function dataSamsungcloudplatformInternetGatewaysContentsToTerraform(struct?: DataSamsungcloudplatformInternetGatewaysContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformInternetGatewaysContentsToHclTerraform(struct?: DataSamsungcloudplatformInternetGatewaysContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformInternetGatewaysContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformInternetGatewaysContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformInternetGatewaysContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // internet_gateway_description - computed: true, optional: false, required: false
  public get internetGatewayDescription() {
    return this.getStringAttribute('internet_gateway_description');
  }

  // internet_gateway_id - computed: true, optional: false, required: false
  public get internetGatewayId() {
    return this.getStringAttribute('internet_gateway_id');
  }

  // internet_gateway_name - computed: true, optional: false, required: false
  public get internetGatewayName() {
    return this.getStringAttribute('internet_gateway_name');
  }

  // internet_gateway_state - computed: true, optional: false, required: false
  public get internetGatewayState() {
    return this.getStringAttribute('internet_gateway_state');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataSamsungcloudplatformInternetGatewaysContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformInternetGatewaysContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformInternetGatewaysContentsOutputReference {
    return new DataSamsungcloudplatformInternetGatewaysContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways samsungcloudplatform_internet_gateways}
*/
export class DataSamsungcloudplatformInternetGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_internet_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformInternetGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformInternetGateways to import
  * @param importFromId The id of the existing DataSamsungcloudplatformInternetGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformInternetGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_internet_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/internet_gateways samsungcloudplatform_internet_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformInternetGatewaysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformInternetGatewaysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_internet_gateways',
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
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._internetGatewayDescription = config.internetGatewayDescription;
    this._internetGatewayId = config.internetGatewayId;
    this._internetGatewayName = config.internetGatewayName;
    this._internetGatewayState = config.internetGatewayState;
    this._page = config.page;
    this._serviceZoneId = config.serviceZoneId;
    this._size = config.size;
    this._vpcId = config.vpcId;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // internet_gateway_description - computed: false, optional: true, required: false
  private _internetGatewayDescription?: string; 
  public get internetGatewayDescription() {
    return this.getStringAttribute('internet_gateway_description');
  }
  public set internetGatewayDescription(value: string) {
    this._internetGatewayDescription = value;
  }
  public resetInternetGatewayDescription() {
    this._internetGatewayDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayDescriptionInput() {
    return this._internetGatewayDescription;
  }

  // internet_gateway_id - computed: false, optional: true, required: false
  private _internetGatewayId?: string; 
  public get internetGatewayId() {
    return this.getStringAttribute('internet_gateway_id');
  }
  public set internetGatewayId(value: string) {
    this._internetGatewayId = value;
  }
  public resetInternetGatewayId() {
    this._internetGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayIdInput() {
    return this._internetGatewayId;
  }

  // internet_gateway_name - computed: false, optional: true, required: false
  private _internetGatewayName?: string; 
  public get internetGatewayName() {
    return this.getStringAttribute('internet_gateway_name');
  }
  public set internetGatewayName(value: string) {
    this._internetGatewayName = value;
  }
  public resetInternetGatewayName() {
    this._internetGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayNameInput() {
    return this._internetGatewayName;
  }

  // internet_gateway_state - computed: false, optional: true, required: false
  private _internetGatewayState?: number; 
  public get internetGatewayState() {
    return this.getNumberAttribute('internet_gateway_state');
  }
  public set internetGatewayState(value: number) {
    this._internetGatewayState = value;
  }
  public resetInternetGatewayState() {
    this._internetGatewayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayStateInput() {
    return this._internetGatewayState;
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

  // service_zone_id - computed: false, optional: true, required: false
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  public resetServiceZoneId() {
    this._serviceZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformInternetGatewaysContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformInternetGatewaysContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      internet_gateway_description: cdktf.stringToTerraform(this._internetGatewayDescription),
      internet_gateway_id: cdktf.stringToTerraform(this._internetGatewayId),
      internet_gateway_name: cdktf.stringToTerraform(this._internetGatewayName),
      internet_gateway_state: cdktf.numberToTerraform(this._internetGatewayState),
      page: cdktf.numberToTerraform(this._page),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      size: cdktf.numberToTerraform(this._size),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      contents: cdktf.listMapper(dataSamsungcloudplatformInternetGatewaysContentsToTerraform, true)(this._contents.internalValue),
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
      internet_gateway_description: {
        value: cdktf.stringToHclTerraform(this._internetGatewayDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gateway_id: {
        value: cdktf.stringToHclTerraform(this._internetGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gateway_name: {
        value: cdktf.stringToHclTerraform(this._internetGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gateway_state: {
        value: cdktf.numberToHclTerraform(this._internetGatewayState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformInternetGatewaysContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformInternetGatewaysContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
