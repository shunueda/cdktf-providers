// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformVpcPeeringsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approver VPC Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#approver_vpc_id DataSamsungcloudplatformVpcPeerings#approver_vpc_id}
  */
  readonly approverVpcId?: string;
  /**
  * Created By
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#created_by DataSamsungcloudplatformVpcPeerings#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#id DataSamsungcloudplatformVpcPeerings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#page DataSamsungcloudplatformVpcPeerings#page}
  */
  readonly page?: number;
  /**
  * Requester VPC Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#requester_vpc_id DataSamsungcloudplatformVpcPeerings#requester_vpc_id}
  */
  readonly requesterVpcId?: string;
  /**
  * Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#size DataSamsungcloudplatformVpcPeerings#size}
  */
  readonly size?: number;
  /**
  * VPC Peering Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#vpc_peering_name DataSamsungcloudplatformVpcPeerings#vpc_peering_name}
  */
  readonly vpcPeeringName?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#contents DataSamsungcloudplatformVpcPeerings#contents}
  */
  readonly contents?: DataSamsungcloudplatformVpcPeeringsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformVpcPeeringsContents {
}

export function dataSamsungcloudplatformVpcPeeringsContentsToTerraform(struct?: DataSamsungcloudplatformVpcPeeringsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformVpcPeeringsContentsToHclTerraform(struct?: DataSamsungcloudplatformVpcPeeringsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformVpcPeeringsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformVpcPeeringsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformVpcPeeringsContents | cdktf.IResolvable | undefined) {
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

  // approver_project_id - computed: true, optional: false, required: false
  public get approverProjectId() {
    return this.getStringAttribute('approver_project_id');
  }

  // approver_vpc_id - computed: true, optional: false, required: false
  public get approverVpcId() {
    return this.getStringAttribute('approver_vpc_id');
  }

  // automated - computed: true, optional: false, required: false
  public get automated() {
    return this.getBooleanAttribute('automated');
  }

  // completed_dt - computed: true, optional: false, required: false
  public get completedDt() {
    return this.getStringAttribute('completed_dt');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // requester_project_id - computed: true, optional: false, required: false
  public get requesterProjectId() {
    return this.getStringAttribute('requester_project_id');
  }

  // requester_vpc_id - computed: true, optional: false, required: false
  public get requesterVpcId() {
    return this.getStringAttribute('requester_vpc_id');
  }

  // vpc_peering_description - computed: true, optional: false, required: false
  public get vpcPeeringDescription() {
    return this.getStringAttribute('vpc_peering_description');
  }

  // vpc_peering_id - computed: true, optional: false, required: false
  public get vpcPeeringId() {
    return this.getStringAttribute('vpc_peering_id');
  }

  // vpc_peering_name - computed: true, optional: false, required: false
  public get vpcPeeringName() {
    return this.getStringAttribute('vpc_peering_name');
  }

  // vpc_peering_state - computed: true, optional: false, required: false
  public get vpcPeeringState() {
    return this.getStringAttribute('vpc_peering_state');
  }

  // vpc_peering_type - computed: true, optional: false, required: false
  public get vpcPeeringType() {
    return this.getStringAttribute('vpc_peering_type');
  }
}

export class DataSamsungcloudplatformVpcPeeringsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformVpcPeeringsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformVpcPeeringsContentsOutputReference {
    return new DataSamsungcloudplatformVpcPeeringsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings samsungcloudplatform_vpc_peerings}
*/
export class DataSamsungcloudplatformVpcPeerings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_vpc_peerings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformVpcPeerings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformVpcPeerings to import
  * @param importFromId The id of the existing DataSamsungcloudplatformVpcPeerings that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformVpcPeerings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_vpc_peerings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/vpc_peerings samsungcloudplatform_vpc_peerings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformVpcPeeringsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformVpcPeeringsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_vpc_peerings',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approverVpcId = config.approverVpcId;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._page = config.page;
    this._requesterVpcId = config.requesterVpcId;
    this._size = config.size;
    this._vpcPeeringName = config.vpcPeeringName;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_vpc_id - computed: false, optional: true, required: false
  private _approverVpcId?: string; 
  public get approverVpcId() {
    return this.getStringAttribute('approver_vpc_id');
  }
  public set approverVpcId(value: string) {
    this._approverVpcId = value;
  }
  public resetApproverVpcId() {
    this._approverVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverVpcIdInput() {
    return this._approverVpcId;
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

  // requester_vpc_id - computed: false, optional: true, required: false
  private _requesterVpcId?: string; 
  public get requesterVpcId() {
    return this.getStringAttribute('requester_vpc_id');
  }
  public set requesterVpcId(value: string) {
    this._requesterVpcId = value;
  }
  public resetRequesterVpcId() {
    this._requesterVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterVpcIdInput() {
    return this._requesterVpcId;
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

  // vpc_peering_name - computed: false, optional: true, required: false
  private _vpcPeeringName?: string; 
  public get vpcPeeringName() {
    return this.getStringAttribute('vpc_peering_name');
  }
  public set vpcPeeringName(value: string) {
    this._vpcPeeringName = value;
  }
  public resetVpcPeeringName() {
    this._vpcPeeringName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringNameInput() {
    return this._vpcPeeringName;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformVpcPeeringsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformVpcPeeringsContents[] | cdktf.IResolvable) {
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
      approver_vpc_id: cdktf.stringToTerraform(this._approverVpcId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      requester_vpc_id: cdktf.stringToTerraform(this._requesterVpcId),
      size: cdktf.numberToTerraform(this._size),
      vpc_peering_name: cdktf.stringToTerraform(this._vpcPeeringName),
      contents: cdktf.listMapper(dataSamsungcloudplatformVpcPeeringsContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approver_vpc_id: {
        value: cdktf.stringToHclTerraform(this._approverVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requester_vpc_id: {
        value: cdktf.stringToHclTerraform(this._requesterVpcId),
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
      vpc_peering_name: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformVpcPeeringsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformVpcPeeringsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
