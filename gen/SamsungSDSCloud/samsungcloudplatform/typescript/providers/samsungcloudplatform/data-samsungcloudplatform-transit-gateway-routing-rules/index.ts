// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTransitGatewayRoutingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination Network Cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#destination_network_cidr DataSamsungcloudplatformTransitGatewayRoutingRules#destination_network_cidr}
  */
  readonly destinationNetworkCidr?: string;
  /**
  * is Editable (true | false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#editable DataSamsungcloudplatformTransitGatewayRoutingRules#editable}
  */
  readonly editable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#id DataSamsungcloudplatformTransitGatewayRoutingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing Rule Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#routing_rule_id DataSamsungcloudplatformTransitGatewayRoutingRules#routing_rule_id}
  */
  readonly routingRuleId?: string;
  /**
  * Routing Table ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#routing_table_id DataSamsungcloudplatformTransitGatewayRoutingRules#routing_table_id}
  */
  readonly routingTableId?: string;
  /**
  * Source Interface Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#source_service_interface_id DataSamsungcloudplatformTransitGatewayRoutingRules#source_service_interface_id}
  */
  readonly sourceServiceInterfaceId?: string;
  /**
  * Total List size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#total_counts DataSamsungcloudplatformTransitGatewayRoutingRules#total_counts}
  */
  readonly totalCounts?: number;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#contents DataSamsungcloudplatformTransitGatewayRoutingRules#contents}
  */
  readonly contents?: DataSamsungcloudplatformTransitGatewayRoutingRulesContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTransitGatewayRoutingRulesContents {
}

export function dataSamsungcloudplatformTransitGatewayRoutingRulesContentsToTerraform(struct?: DataSamsungcloudplatformTransitGatewayRoutingRulesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTransitGatewayRoutingRulesContentsToHclTerraform(struct?: DataSamsungcloudplatformTransitGatewayRoutingRulesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTransitGatewayRoutingRulesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTransitGatewayRoutingRulesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTransitGatewayRoutingRulesContents | cdktf.IResolvable | undefined) {
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

  // destination_network_cidr - computed: true, optional: false, required: false
  public get destinationNetworkCidr() {
    return this.getStringAttribute('destination_network_cidr');
  }

  // editable - computed: true, optional: false, required: false
  public get editable() {
    return this.getBooleanAttribute('editable');
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

  // routing_rule_id - computed: true, optional: false, required: false
  public get routingRuleId() {
    return this.getStringAttribute('routing_rule_id');
  }

  // routing_rule_state - computed: true, optional: false, required: false
  public get routingRuleState() {
    return this.getStringAttribute('routing_rule_state');
  }

  // source_service_interface_id - computed: true, optional: false, required: false
  public get sourceServiceInterfaceId() {
    return this.getStringAttribute('source_service_interface_id');
  }

  // source_service_interface_name - computed: true, optional: false, required: false
  public get sourceServiceInterfaceName() {
    return this.getStringAttribute('source_service_interface_name');
  }

  // source_transit_gateway_connection_id - computed: true, optional: false, required: false
  public get sourceTransitGatewayConnectionId() {
    return this.getStringAttribute('source_transit_gateway_connection_id');
  }
}

export class DataSamsungcloudplatformTransitGatewayRoutingRulesContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTransitGatewayRoutingRulesContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTransitGatewayRoutingRulesContentsOutputReference {
    return new DataSamsungcloudplatformTransitGatewayRoutingRulesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules samsungcloudplatform_transit_gateway_routing_rules}
*/
export class DataSamsungcloudplatformTransitGatewayRoutingRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_routing_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTransitGatewayRoutingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTransitGatewayRoutingRules to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTransitGatewayRoutingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTransitGatewayRoutingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_routing_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/transit_gateway_routing_rules samsungcloudplatform_transit_gateway_routing_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTransitGatewayRoutingRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTransitGatewayRoutingRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_routing_rules',
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
    this._destinationNetworkCidr = config.destinationNetworkCidr;
    this._editable = config.editable;
    this._id = config.id;
    this._routingRuleId = config.routingRuleId;
    this._routingTableId = config.routingTableId;
    this._sourceServiceInterfaceId = config.sourceServiceInterfaceId;
    this._totalCounts = config.totalCounts;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_network_cidr - computed: false, optional: true, required: false
  private _destinationNetworkCidr?: string; 
  public get destinationNetworkCidr() {
    return this.getStringAttribute('destination_network_cidr');
  }
  public set destinationNetworkCidr(value: string) {
    this._destinationNetworkCidr = value;
  }
  public resetDestinationNetworkCidr() {
    this._destinationNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNetworkCidrInput() {
    return this._destinationNetworkCidr;
  }

  // editable - computed: false, optional: true, required: false
  private _editable?: string; 
  public get editable() {
    return this.getStringAttribute('editable');
  }
  public set editable(value: string) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
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

  // routing_rule_id - computed: false, optional: true, required: false
  private _routingRuleId?: string; 
  public get routingRuleId() {
    return this.getStringAttribute('routing_rule_id');
  }
  public set routingRuleId(value: string) {
    this._routingRuleId = value;
  }
  public resetRoutingRuleId() {
    this._routingRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleIdInput() {
    return this._routingRuleId;
  }

  // routing_table_id - computed: false, optional: true, required: false
  private _routingTableId?: string; 
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }
  public set routingTableId(value: string) {
    this._routingTableId = value;
  }
  public resetRoutingTableId() {
    this._routingTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableIdInput() {
    return this._routingTableId;
  }

  // source_service_interface_id - computed: false, optional: true, required: false
  private _sourceServiceInterfaceId?: string; 
  public get sourceServiceInterfaceId() {
    return this.getStringAttribute('source_service_interface_id');
  }
  public set sourceServiceInterfaceId(value: string) {
    this._sourceServiceInterfaceId = value;
  }
  public resetSourceServiceInterfaceId() {
    this._sourceServiceInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInterfaceIdInput() {
    return this._sourceServiceInterfaceId;
  }

  // total_counts - computed: false, optional: true, required: false
  private _totalCounts?: number; 
  public get totalCounts() {
    return this.getNumberAttribute('total_counts');
  }
  public set totalCounts(value: number) {
    this._totalCounts = value;
  }
  public resetTotalCounts() {
    this._totalCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCountsInput() {
    return this._totalCounts;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformTransitGatewayRoutingRulesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformTransitGatewayRoutingRulesContents[] | cdktf.IResolvable) {
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
      destination_network_cidr: cdktf.stringToTerraform(this._destinationNetworkCidr),
      editable: cdktf.stringToTerraform(this._editable),
      id: cdktf.stringToTerraform(this._id),
      routing_rule_id: cdktf.stringToTerraform(this._routingRuleId),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
      source_service_interface_id: cdktf.stringToTerraform(this._sourceServiceInterfaceId),
      total_counts: cdktf.numberToTerraform(this._totalCounts),
      contents: cdktf.listMapper(dataSamsungcloudplatformTransitGatewayRoutingRulesContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_network_cidr: {
        value: cdktf.stringToHclTerraform(this._destinationNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      editable: {
        value: cdktf.stringToHclTerraform(this._editable),
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
      routing_rule_id: {
        value: cdktf.stringToHclTerraform(this._routingRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table_id: {
        value: cdktf.stringToHclTerraform(this._routingTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_interface_id: {
        value: cdktf.stringToHclTerraform(this._sourceServiceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_counts: {
        value: cdktf.numberToHclTerraform(this._totalCounts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTransitGatewayRoutingRulesContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformTransitGatewayRoutingRulesContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
