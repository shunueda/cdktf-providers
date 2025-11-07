// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTransitGatewayConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approver VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#approver_vpc_id DataSamsungcloudplatformTransitGatewayConnections#approver_vpc_id}
  */
  readonly approverVpcId?: string;
  /**
  * User ID who create the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#created_by DataSamsungcloudplatformTransitGatewayConnections#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#id DataSamsungcloudplatformTransitGatewayConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Page number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#page DataSamsungcloudplatformTransitGatewayConnections#page}
  */
  readonly page?: number;
  /**
  * Requester TGW ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#requester_transit_gateway_id DataSamsungcloudplatformTransitGatewayConnections#requester_transit_gateway_id}
  */
  readonly requesterTransitGatewayId?: string;
  /**
  * List size per a page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#size DataSamsungcloudplatformTransitGatewayConnections#size}
  */
  readonly size?: number;
  /**
  * TGW VPC Connection Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#transit_gateway_connection_name DataSamsungcloudplatformTransitGatewayConnections#transit_gateway_connection_name}
  */
  readonly transitGatewayConnectionName?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#contents DataSamsungcloudplatformTransitGatewayConnections#contents}
  */
  readonly contents?: DataSamsungcloudplatformTransitGatewayConnectionsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTransitGatewayConnectionsContents {
}

export function dataSamsungcloudplatformTransitGatewayConnectionsContentsToTerraform(struct?: DataSamsungcloudplatformTransitGatewayConnectionsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTransitGatewayConnectionsContentsToHclTerraform(struct?: DataSamsungcloudplatformTransitGatewayConnectionsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTransitGatewayConnectionsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTransitGatewayConnectionsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTransitGatewayConnectionsContents | cdktf.IResolvable | undefined) {
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

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // transit_gateway_connection_description - computed: true, optional: false, required: false
  public get transitGatewayConnectionDescription() {
    return this.getStringAttribute('transit_gateway_connection_description');
  }

  // transit_gateway_connection_id - computed: true, optional: false, required: false
  public get transitGatewayConnectionId() {
    return this.getStringAttribute('transit_gateway_connection_id');
  }

  // transit_gateway_connection_name - computed: true, optional: false, required: false
  public get transitGatewayConnectionName() {
    return this.getStringAttribute('transit_gateway_connection_name');
  }

  // transit_gateway_connection_state - computed: true, optional: false, required: false
  public get transitGatewayConnectionState() {
    return this.getStringAttribute('transit_gateway_connection_state');
  }

  // transit_gateway_connection_type - computed: true, optional: false, required: false
  public get transitGatewayConnectionType() {
    return this.getStringAttribute('transit_gateway_connection_type');
  }
}

export class DataSamsungcloudplatformTransitGatewayConnectionsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTransitGatewayConnectionsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTransitGatewayConnectionsContentsOutputReference {
    return new DataSamsungcloudplatformTransitGatewayConnectionsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections samsungcloudplatform_transit_gateway_connections}
*/
export class DataSamsungcloudplatformTransitGatewayConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTransitGatewayConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTransitGatewayConnections to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTransitGatewayConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTransitGatewayConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/transit_gateway_connections samsungcloudplatform_transit_gateway_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTransitGatewayConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTransitGatewayConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_connections',
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
    this._approverVpcId = config.approverVpcId;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._page = config.page;
    this._requesterTransitGatewayId = config.requesterTransitGatewayId;
    this._size = config.size;
    this._transitGatewayConnectionName = config.transitGatewayConnectionName;
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

  // transit_gateway_connection_name - computed: false, optional: true, required: false
  private _transitGatewayConnectionName?: string; 
  public get transitGatewayConnectionName() {
    return this.getStringAttribute('transit_gateway_connection_name');
  }
  public set transitGatewayConnectionName(value: string) {
    this._transitGatewayConnectionName = value;
  }
  public resetTransitGatewayConnectionName() {
    this._transitGatewayConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectionNameInput() {
    return this._transitGatewayConnectionName;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformTransitGatewayConnectionsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformTransitGatewayConnectionsContents[] | cdktf.IResolvable) {
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
      requester_transit_gateway_id: cdktf.stringToTerraform(this._requesterTransitGatewayId),
      size: cdktf.numberToTerraform(this._size),
      transit_gateway_connection_name: cdktf.stringToTerraform(this._transitGatewayConnectionName),
      contents: cdktf.listMapper(dataSamsungcloudplatformTransitGatewayConnectionsContentsToTerraform, true)(this._contents.internalValue),
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
      transit_gateway_connection_name: {
        value: cdktf.stringToHclTerraform(this._transitGatewayConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTransitGatewayConnectionsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformTransitGatewayConnectionsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
