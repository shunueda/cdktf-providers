// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTgwPeeringsByTgwConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw#id DataSamsungcloudplatformTgwPeeringsByTgw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Transit Gateway ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw#transit_gateway_id DataSamsungcloudplatformTgwPeeringsByTgw#transit_gateway_id}
  */
  readonly transitGatewayId: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw#contents DataSamsungcloudplatformTgwPeeringsByTgw#contents}
  */
  readonly contents?: DataSamsungcloudplatformTgwPeeringsByTgwContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTgwPeeringsByTgwContents {
}

export function dataSamsungcloudplatformTgwPeeringsByTgwContentsToTerraform(struct?: DataSamsungcloudplatformTgwPeeringsByTgwContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTgwPeeringsByTgwContentsToHclTerraform(struct?: DataSamsungcloudplatformTgwPeeringsByTgwContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTgwPeeringsByTgwContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTgwPeeringsByTgwContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTgwPeeringsByTgwContents | cdktf.IResolvable | undefined) {
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

export class DataSamsungcloudplatformTgwPeeringsByTgwContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTgwPeeringsByTgwContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTgwPeeringsByTgwContentsOutputReference {
    return new DataSamsungcloudplatformTgwPeeringsByTgwContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw samsungcloudplatform_tgw_peerings_by_tgw}
*/
export class DataSamsungcloudplatformTgwPeeringsByTgw extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_tgw_peerings_by_tgw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTgwPeeringsByTgw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTgwPeeringsByTgw to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTgwPeeringsByTgw that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTgwPeeringsByTgw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_tgw_peerings_by_tgw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/tgw_peerings_by_tgw samsungcloudplatform_tgw_peerings_by_tgw} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTgwPeeringsByTgwConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTgwPeeringsByTgwConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_tgw_peerings_by_tgw',
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
    this._id = config.id;
    this._transitGatewayId = config.transitGatewayId;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformTgwPeeringsByTgwContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformTgwPeeringsByTgwContents[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      contents: cdktf.listMapper(dataSamsungcloudplatformTgwPeeringsByTgwContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTgwPeeringsByTgwContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformTgwPeeringsByTgwContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
