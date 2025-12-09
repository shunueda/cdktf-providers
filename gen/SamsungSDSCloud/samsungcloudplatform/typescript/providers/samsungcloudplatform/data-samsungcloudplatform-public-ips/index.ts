// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformPublicIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#created_by DataSamsungcloudplatformPublicIps#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#id DataSamsungcloudplatformPublicIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#ip_address DataSamsungcloudplatformPublicIps#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Enable bill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#is_billable DataSamsungcloudplatformPublicIps#is_billable}
  */
  readonly isBillable?: boolean | cdktf.IResolvable;
  /**
  * Enable view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#is_viewable DataSamsungcloudplatformPublicIps#is_viewable}
  */
  readonly isViewable?: boolean | cdktf.IResolvable;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#page DataSamsungcloudplatformPublicIps#page}
  */
  readonly page?: number;
  /**
  * The reason to make public ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#public_ip_purpose DataSamsungcloudplatformPublicIps#public_ip_purpose}
  */
  readonly publicIpPurpose?: string;
  /**
  * Public ip status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#public_ip_state DataSamsungcloudplatformPublicIps#public_ip_state}
  */
  readonly publicIpState?: string;
  /**
  * Service zone id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#service_zone_id DataSamsungcloudplatformPublicIps#service_zone_id}
  */
  readonly serviceZoneId?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#size DataSamsungcloudplatformPublicIps#size}
  */
  readonly size?: number;
  /**
  * Uplink type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#uplink_type DataSamsungcloudplatformPublicIps#uplink_type}
  */
  readonly uplinkType?: string;
  /**
  * VPC id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#vpc_id DataSamsungcloudplatformPublicIps#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#contents DataSamsungcloudplatformPublicIps#contents}
  */
  readonly contents?: DataSamsungcloudplatformPublicIpsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformPublicIpsContents {
}

export function dataSamsungcloudplatformPublicIpsContentsToTerraform(struct?: DataSamsungcloudplatformPublicIpsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformPublicIpsContentsToHclTerraform(struct?: DataSamsungcloudplatformPublicIpsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformPublicIpsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformPublicIpsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformPublicIpsContents | cdktf.IResolvable | undefined) {
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

  // attached_object_name - computed: true, optional: false, required: false
  public get attachedObjectName() {
    return this.getStringAttribute('attached_object_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_id - computed: true, optional: false, required: false
  public get ipAddressId() {
    return this.getStringAttribute('ip_address_id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public_ip_address_description - computed: true, optional: false, required: false
  public get publicIpAddressDescription() {
    return this.getStringAttribute('public_ip_address_description');
  }

  // public_ip_address_id - computed: true, optional: false, required: false
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // public_ip_purpose - computed: true, optional: false, required: false
  public get publicIpPurpose() {
    return this.getStringAttribute('public_ip_purpose');
  }

  // public_ip_state - computed: true, optional: false, required: false
  public get publicIpState() {
    return this.getStringAttribute('public_ip_state');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // uplink_type - computed: true, optional: false, required: false
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
}

export class DataSamsungcloudplatformPublicIpsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformPublicIpsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformPublicIpsContentsOutputReference {
    return new DataSamsungcloudplatformPublicIpsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips samsungcloudplatform_public_ips}
*/
export class DataSamsungcloudplatformPublicIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_public_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformPublicIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformPublicIps to import
  * @param importFromId The id of the existing DataSamsungcloudplatformPublicIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformPublicIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_public_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/public_ips samsungcloudplatform_public_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformPublicIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformPublicIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_public_ips',
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
    this._ipAddress = config.ipAddress;
    this._isBillable = config.isBillable;
    this._isViewable = config.isViewable;
    this._page = config.page;
    this._publicIpPurpose = config.publicIpPurpose;
    this._publicIpState = config.publicIpState;
    this._serviceZoneId = config.serviceZoneId;
    this._size = config.size;
    this._uplinkType = config.uplinkType;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_billable - computed: false, optional: true, required: false
  private _isBillable?: boolean | cdktf.IResolvable; 
  public get isBillable() {
    return this.getBooleanAttribute('is_billable');
  }
  public set isBillable(value: boolean | cdktf.IResolvable) {
    this._isBillable = value;
  }
  public resetIsBillable() {
    this._isBillable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBillableInput() {
    return this._isBillable;
  }

  // is_viewable - computed: false, optional: true, required: false
  private _isViewable?: boolean | cdktf.IResolvable; 
  public get isViewable() {
    return this.getBooleanAttribute('is_viewable');
  }
  public set isViewable(value: boolean | cdktf.IResolvable) {
    this._isViewable = value;
  }
  public resetIsViewable() {
    this._isViewable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isViewableInput() {
    return this._isViewable;
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

  // public_ip_purpose - computed: false, optional: true, required: false
  private _publicIpPurpose?: string; 
  public get publicIpPurpose() {
    return this.getStringAttribute('public_ip_purpose');
  }
  public set publicIpPurpose(value: string) {
    this._publicIpPurpose = value;
  }
  public resetPublicIpPurpose() {
    this._publicIpPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPurposeInput() {
    return this._publicIpPurpose;
  }

  // public_ip_state - computed: false, optional: true, required: false
  private _publicIpState?: string; 
  public get publicIpState() {
    return this.getStringAttribute('public_ip_state');
  }
  public set publicIpState(value: string) {
    this._publicIpState = value;
  }
  public resetPublicIpState() {
    this._publicIpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpStateInput() {
    return this._publicIpState;
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

  // uplink_type - computed: false, optional: true, required: false
  private _uplinkType?: string; 
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
  public set uplinkType(value: string) {
    this._uplinkType = value;
  }
  public resetUplinkType() {
    this._uplinkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTypeInput() {
    return this._uplinkType;
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
  private _contents = new DataSamsungcloudplatformPublicIpsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformPublicIpsContents[] | cdktf.IResolvable) {
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
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_billable: cdktf.booleanToTerraform(this._isBillable),
      is_viewable: cdktf.booleanToTerraform(this._isViewable),
      page: cdktf.numberToTerraform(this._page),
      public_ip_purpose: cdktf.stringToTerraform(this._publicIpPurpose),
      public_ip_state: cdktf.stringToTerraform(this._publicIpState),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      size: cdktf.numberToTerraform(this._size),
      uplink_type: cdktf.stringToTerraform(this._uplinkType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      contents: cdktf.listMapper(dataSamsungcloudplatformPublicIpsContentsToTerraform, true)(this._contents.internalValue),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_billable: {
        value: cdktf.booleanToHclTerraform(this._isBillable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_viewable: {
        value: cdktf.booleanToHclTerraform(this._isViewable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_ip_purpose: {
        value: cdktf.stringToHclTerraform(this._publicIpPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_state: {
        value: cdktf.stringToHclTerraform(this._publicIpState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      uplink_type: {
        value: cdktf.stringToHclTerraform(this._uplinkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformPublicIpsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformPublicIpsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
