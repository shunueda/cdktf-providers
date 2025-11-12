// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTransitGatewayPeeringsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approver Transit Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#approver_transit_gateway_id DataSamsungcloudplatformTransitGatewayPeerings#approver_transit_gateway_id}
  */
  readonly approverTransitGatewayId?: string;
  /**
  * User ID who create the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#created_by DataSamsungcloudplatformTransitGatewayPeerings#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#id DataSamsungcloudplatformTransitGatewayPeerings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#page DataSamsungcloudplatformTransitGatewayPeerings#page}
  */
  readonly page?: number;
  /**
  * Requester Transit Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#requester_transit_gateway_id DataSamsungcloudplatformTransitGatewayPeerings#requester_transit_gateway_id}
  */
  readonly requesterTransitGatewayId?: string;
  /**
  * List size per a page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#size DataSamsungcloudplatformTransitGatewayPeerings#size}
  */
  readonly size?: number;
  /**
  * Transit Gateway Peering Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#transit_gateway_peering_name DataSamsungcloudplatformTransitGatewayPeerings#transit_gateway_peering_name}
  */
  readonly transitGatewayPeeringName?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#contents DataSamsungcloudplatformTransitGatewayPeerings#contents}
  */
  readonly contents?: DataSamsungcloudplatformTransitGatewayPeeringsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTransitGatewayPeeringsContents {
}

export function dataSamsungcloudplatformTransitGatewayPeeringsContentsToTerraform(struct?: DataSamsungcloudplatformTransitGatewayPeeringsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTransitGatewayPeeringsContentsToHclTerraform(struct?: DataSamsungcloudplatformTransitGatewayPeeringsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTransitGatewayPeeringsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTransitGatewayPeeringsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTransitGatewayPeeringsContents | cdktf.IResolvable | undefined) {
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

  // approver_transit_gateway_id - computed: true, optional: false, required: false
  public get approverTransitGatewayId() {
    return this.getStringAttribute('approver_transit_gateway_id');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // requester_project_id - computed: true, optional: false, required: false
  public get requesterProjectId() {
    return this.getStringAttribute('requester_project_id');
  }

  // requester_transit_gateway_id - computed: true, optional: false, required: false
  public get requesterTransitGatewayId() {
    return this.getStringAttribute('requester_transit_gateway_id');
  }

  // transit_gateway_peering_description - computed: true, optional: false, required: false
  public get transitGatewayPeeringDescription() {
    return this.getStringAttribute('transit_gateway_peering_description');
  }

  // transit_gateway_peering_id - computed: true, optional: false, required: false
  public get transitGatewayPeeringId() {
    return this.getStringAttribute('transit_gateway_peering_id');
  }

  // transit_gateway_peering_name - computed: true, optional: false, required: false
  public get transitGatewayPeeringName() {
    return this.getStringAttribute('transit_gateway_peering_name');
  }

  // transit_gateway_peering_state - computed: true, optional: false, required: false
  public get transitGatewayPeeringState() {
    return this.getStringAttribute('transit_gateway_peering_state');
  }
}

export class DataSamsungcloudplatformTransitGatewayPeeringsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTransitGatewayPeeringsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTransitGatewayPeeringsContentsOutputReference {
    return new DataSamsungcloudplatformTransitGatewayPeeringsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings samsungcloudplatform_transit_gateway_peerings}
*/
export class DataSamsungcloudplatformTransitGatewayPeerings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_peerings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTransitGatewayPeerings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTransitGatewayPeerings to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTransitGatewayPeerings that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTransitGatewayPeerings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_peerings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_peerings samsungcloudplatform_transit_gateway_peerings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTransitGatewayPeeringsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTransitGatewayPeeringsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_peerings',
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
    this._approverTransitGatewayId = config.approverTransitGatewayId;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._page = config.page;
    this._requesterTransitGatewayId = config.requesterTransitGatewayId;
    this._size = config.size;
    this._transitGatewayPeeringName = config.transitGatewayPeeringName;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_transit_gateway_id - computed: false, optional: true, required: false
  private _approverTransitGatewayId?: string; 
  public get approverTransitGatewayId() {
    return this.getStringAttribute('approver_transit_gateway_id');
  }
  public set approverTransitGatewayId(value: string) {
    this._approverTransitGatewayId = value;
  }
  public resetApproverTransitGatewayId() {
    this._approverTransitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverTransitGatewayIdInput() {
    return this._approverTransitGatewayId;
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

  // requester_transit_gateway_id - computed: false, optional: true, required: false
  private _requesterTransitGatewayId?: string; 
  public get requesterTransitGatewayId() {
    return this.getStringAttribute('requester_transit_gateway_id');
  }
  public set requesterTransitGatewayId(value: string) {
    this._requesterTransitGatewayId = value;
  }
  public resetRequesterTransitGatewayId() {
    this._requesterTransitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterTransitGatewayIdInput() {
    return this._requesterTransitGatewayId;
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

  // transit_gateway_peering_name - computed: false, optional: true, required: false
  private _transitGatewayPeeringName?: string; 
  public get transitGatewayPeeringName() {
    return this.getStringAttribute('transit_gateway_peering_name');
  }
  public set transitGatewayPeeringName(value: string) {
    this._transitGatewayPeeringName = value;
  }
  public resetTransitGatewayPeeringName() {
    this._transitGatewayPeeringName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPeeringNameInput() {
    return this._transitGatewayPeeringName;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformTransitGatewayPeeringsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformTransitGatewayPeeringsContents[] | cdktf.IResolvable) {
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
      approver_transit_gateway_id: cdktf.stringToTerraform(this._approverTransitGatewayId),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      requester_transit_gateway_id: cdktf.stringToTerraform(this._requesterTransitGatewayId),
      size: cdktf.numberToTerraform(this._size),
      transit_gateway_peering_name: cdktf.stringToTerraform(this._transitGatewayPeeringName),
      contents: cdktf.listMapper(dataSamsungcloudplatformTransitGatewayPeeringsContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approver_transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._approverTransitGatewayId),
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
      requester_transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._requesterTransitGatewayId),
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
      transit_gateway_peering_name: {
        value: cdktf.stringToHclTerraform(this._transitGatewayPeeringName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTransitGatewayPeeringsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformTransitGatewayPeeringsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
