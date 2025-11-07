// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateContractServiceGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph#contract_name DataMsoSchemaTemplateContractServiceGraph#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph#id DataMsoSchemaTemplateContractServiceGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph#schema_id DataMsoSchemaTemplateContractServiceGraph#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph#template_name DataMsoSchemaTemplateContractServiceGraph#template_name}
  */
  readonly templateName: string;
}
export interface DataMsoSchemaTemplateContractServiceGraphNodeRelationship {
}

export function dataMsoSchemaTemplateContractServiceGraphNodeRelationshipToTerraform(struct?: DataMsoSchemaTemplateContractServiceGraphNodeRelationship): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaTemplateContractServiceGraphNodeRelationshipToHclTerraform(struct?: DataMsoSchemaTemplateContractServiceGraphNodeRelationship): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaTemplateContractServiceGraphNodeRelationshipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaTemplateContractServiceGraphNodeRelationship | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaTemplateContractServiceGraphNodeRelationship | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_connector_bd_name - computed: true, optional: false, required: false
  public get consumerConnectorBdName() {
    return this.getStringAttribute('consumer_connector_bd_name');
  }

  // consumer_connector_bd_schema_id - computed: true, optional: false, required: false
  public get consumerConnectorBdSchemaId() {
    return this.getStringAttribute('consumer_connector_bd_schema_id');
  }

  // consumer_connector_bd_template_name - computed: true, optional: false, required: false
  public get consumerConnectorBdTemplateName() {
    return this.getStringAttribute('consumer_connector_bd_template_name');
  }

  // provider_connector_bd_name - computed: true, optional: false, required: false
  public get providerConnectorBdName() {
    return this.getStringAttribute('provider_connector_bd_name');
  }

  // provider_connector_bd_schema_id - computed: true, optional: false, required: false
  public get providerConnectorBdSchemaId() {
    return this.getStringAttribute('provider_connector_bd_schema_id');
  }

  // provider_connector_bd_template_name - computed: true, optional: false, required: false
  public get providerConnectorBdTemplateName() {
    return this.getStringAttribute('provider_connector_bd_template_name');
  }
}

export class DataMsoSchemaTemplateContractServiceGraphNodeRelationshipList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaTemplateContractServiceGraphNodeRelationshipOutputReference {
    return new DataMsoSchemaTemplateContractServiceGraphNodeRelationshipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph mso_schema_template_contract_service_graph}
*/
export class DataMsoSchemaTemplateContractServiceGraph extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_contract_service_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateContractServiceGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateContractServiceGraph to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateContractServiceGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateContractServiceGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_contract_service_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/data-sources/schema_template_contract_service_graph mso_schema_template_contract_service_graph} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateContractServiceGraphConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateContractServiceGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_contract_service_graph',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractName = config.contractName;
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_name - computed: false, optional: false, required: true
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
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

  // node_relationship - computed: true, optional: false, required: false
  private _nodeRelationship = new DataMsoSchemaTemplateContractServiceGraphNodeRelationshipList(this, "node_relationship", false);
  public get nodeRelationship() {
    return this._nodeRelationship;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // service_graph_name - computed: true, optional: false, required: false
  public get serviceGraphName() {
    return this.getStringAttribute('service_graph_name');
  }

  // service_graph_schema_id - computed: true, optional: false, required: false
  public get serviceGraphSchemaId() {
    return this.getStringAttribute('service_graph_schema_id');
  }

  // service_graph_template_name - computed: true, optional: false, required: false
  public get serviceGraphTemplateName() {
    return this.getStringAttribute('service_graph_template_name');
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_name: cdktf.stringToTerraform(this._contractName),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_name: {
        value: cdktf.stringToHclTerraform(this._contractName),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
