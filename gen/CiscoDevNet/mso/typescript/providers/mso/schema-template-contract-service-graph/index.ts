// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateContractServiceGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#contract_name SchemaTemplateContractServiceGraph#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#id SchemaTemplateContractServiceGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#schema_id SchemaTemplateContractServiceGraph#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#service_graph_name SchemaTemplateContractServiceGraph#service_graph_name}
  */
  readonly serviceGraphName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#service_graph_schema_id SchemaTemplateContractServiceGraph#service_graph_schema_id}
  */
  readonly serviceGraphSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#service_graph_template_name SchemaTemplateContractServiceGraph#service_graph_template_name}
  */
  readonly serviceGraphTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#template_name SchemaTemplateContractServiceGraph#template_name}
  */
  readonly templateName: string;
  /**
  * node_relationship block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#node_relationship SchemaTemplateContractServiceGraph#node_relationship}
  */
  readonly nodeRelationship: SchemaTemplateContractServiceGraphNodeRelationship[] | cdktf.IResolvable;
}
export interface SchemaTemplateContractServiceGraphNodeRelationship {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#consumer_connector_bd_name SchemaTemplateContractServiceGraph#consumer_connector_bd_name}
  */
  readonly consumerConnectorBdName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#consumer_connector_bd_schema_id SchemaTemplateContractServiceGraph#consumer_connector_bd_schema_id}
  */
  readonly consumerConnectorBdSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#consumer_connector_bd_template_name SchemaTemplateContractServiceGraph#consumer_connector_bd_template_name}
  */
  readonly consumerConnectorBdTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#provider_connector_bd_name SchemaTemplateContractServiceGraph#provider_connector_bd_name}
  */
  readonly providerConnectorBdName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#provider_connector_bd_schema_id SchemaTemplateContractServiceGraph#provider_connector_bd_schema_id}
  */
  readonly providerConnectorBdSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#provider_connector_bd_template_name SchemaTemplateContractServiceGraph#provider_connector_bd_template_name}
  */
  readonly providerConnectorBdTemplateName?: string;
}

export function schemaTemplateContractServiceGraphNodeRelationshipToTerraform(struct?: SchemaTemplateContractServiceGraphNodeRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_connector_bd_name: cdktf.stringToTerraform(struct!.consumerConnectorBdName),
    consumer_connector_bd_schema_id: cdktf.stringToTerraform(struct!.consumerConnectorBdSchemaId),
    consumer_connector_bd_template_name: cdktf.stringToTerraform(struct!.consumerConnectorBdTemplateName),
    provider_connector_bd_name: cdktf.stringToTerraform(struct!.providerConnectorBdName),
    provider_connector_bd_schema_id: cdktf.stringToTerraform(struct!.providerConnectorBdSchemaId),
    provider_connector_bd_template_name: cdktf.stringToTerraform(struct!.providerConnectorBdTemplateName),
  }
}


export function schemaTemplateContractServiceGraphNodeRelationshipToHclTerraform(struct?: SchemaTemplateContractServiceGraphNodeRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_connector_bd_name: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorBdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_connector_bd_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorBdSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_connector_bd_template_name: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorBdTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector_bd_name: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorBdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector_bd_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorBdSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector_bd_template_name: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorBdTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaTemplateContractServiceGraphNodeRelationshipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaTemplateContractServiceGraphNodeRelationship | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerConnectorBdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorBdName = this._consumerConnectorBdName;
    }
    if (this._consumerConnectorBdSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorBdSchemaId = this._consumerConnectorBdSchemaId;
    }
    if (this._consumerConnectorBdTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorBdTemplateName = this._consumerConnectorBdTemplateName;
    }
    if (this._providerConnectorBdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorBdName = this._providerConnectorBdName;
    }
    if (this._providerConnectorBdSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorBdSchemaId = this._providerConnectorBdSchemaId;
    }
    if (this._providerConnectorBdTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorBdTemplateName = this._providerConnectorBdTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTemplateContractServiceGraphNodeRelationship | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerConnectorBdName = undefined;
      this._consumerConnectorBdSchemaId = undefined;
      this._consumerConnectorBdTemplateName = undefined;
      this._providerConnectorBdName = undefined;
      this._providerConnectorBdSchemaId = undefined;
      this._providerConnectorBdTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerConnectorBdName = value.consumerConnectorBdName;
      this._consumerConnectorBdSchemaId = value.consumerConnectorBdSchemaId;
      this._consumerConnectorBdTemplateName = value.consumerConnectorBdTemplateName;
      this._providerConnectorBdName = value.providerConnectorBdName;
      this._providerConnectorBdSchemaId = value.providerConnectorBdSchemaId;
      this._providerConnectorBdTemplateName = value.providerConnectorBdTemplateName;
    }
  }

  // consumer_connector_bd_name - computed: false, optional: false, required: true
  private _consumerConnectorBdName?: string; 
  public get consumerConnectorBdName() {
    return this.getStringAttribute('consumer_connector_bd_name');
  }
  public set consumerConnectorBdName(value: string) {
    this._consumerConnectorBdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorBdNameInput() {
    return this._consumerConnectorBdName;
  }

  // consumer_connector_bd_schema_id - computed: true, optional: true, required: false
  private _consumerConnectorBdSchemaId?: string; 
  public get consumerConnectorBdSchemaId() {
    return this.getStringAttribute('consumer_connector_bd_schema_id');
  }
  public set consumerConnectorBdSchemaId(value: string) {
    this._consumerConnectorBdSchemaId = value;
  }
  public resetConsumerConnectorBdSchemaId() {
    this._consumerConnectorBdSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorBdSchemaIdInput() {
    return this._consumerConnectorBdSchemaId;
  }

  // consumer_connector_bd_template_name - computed: true, optional: true, required: false
  private _consumerConnectorBdTemplateName?: string; 
  public get consumerConnectorBdTemplateName() {
    return this.getStringAttribute('consumer_connector_bd_template_name');
  }
  public set consumerConnectorBdTemplateName(value: string) {
    this._consumerConnectorBdTemplateName = value;
  }
  public resetConsumerConnectorBdTemplateName() {
    this._consumerConnectorBdTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorBdTemplateNameInput() {
    return this._consumerConnectorBdTemplateName;
  }

  // provider_connector_bd_name - computed: false, optional: false, required: true
  private _providerConnectorBdName?: string; 
  public get providerConnectorBdName() {
    return this.getStringAttribute('provider_connector_bd_name');
  }
  public set providerConnectorBdName(value: string) {
    this._providerConnectorBdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorBdNameInput() {
    return this._providerConnectorBdName;
  }

  // provider_connector_bd_schema_id - computed: true, optional: true, required: false
  private _providerConnectorBdSchemaId?: string; 
  public get providerConnectorBdSchemaId() {
    return this.getStringAttribute('provider_connector_bd_schema_id');
  }
  public set providerConnectorBdSchemaId(value: string) {
    this._providerConnectorBdSchemaId = value;
  }
  public resetProviderConnectorBdSchemaId() {
    this._providerConnectorBdSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorBdSchemaIdInput() {
    return this._providerConnectorBdSchemaId;
  }

  // provider_connector_bd_template_name - computed: true, optional: true, required: false
  private _providerConnectorBdTemplateName?: string; 
  public get providerConnectorBdTemplateName() {
    return this.getStringAttribute('provider_connector_bd_template_name');
  }
  public set providerConnectorBdTemplateName(value: string) {
    this._providerConnectorBdTemplateName = value;
  }
  public resetProviderConnectorBdTemplateName() {
    this._providerConnectorBdTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorBdTemplateNameInput() {
    return this._providerConnectorBdTemplateName;
  }
}

export class SchemaTemplateContractServiceGraphNodeRelationshipList extends cdktf.ComplexList {
  public internalValue? : SchemaTemplateContractServiceGraphNodeRelationship[] | cdktf.IResolvable

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
  public get(index: number): SchemaTemplateContractServiceGraphNodeRelationshipOutputReference {
    return new SchemaTemplateContractServiceGraphNodeRelationshipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph mso_schema_template_contract_service_graph}
*/
export class SchemaTemplateContractServiceGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_contract_service_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateContractServiceGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateContractServiceGraph to import
  * @param importFromId The id of the existing SchemaTemplateContractServiceGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateContractServiceGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_contract_service_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_contract_service_graph mso_schema_template_contract_service_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateContractServiceGraphConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateContractServiceGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_contract_service_graph',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._serviceGraphName = config.serviceGraphName;
    this._serviceGraphSchemaId = config.serviceGraphSchemaId;
    this._serviceGraphTemplateName = config.serviceGraphTemplateName;
    this._templateName = config.templateName;
    this._nodeRelationship.internalValue = config.nodeRelationship;
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

  // service_graph_name - computed: false, optional: false, required: true
  private _serviceGraphName?: string; 
  public get serviceGraphName() {
    return this.getStringAttribute('service_graph_name');
  }
  public set serviceGraphName(value: string) {
    this._serviceGraphName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGraphNameInput() {
    return this._serviceGraphName;
  }

  // service_graph_schema_id - computed: true, optional: true, required: false
  private _serviceGraphSchemaId?: string; 
  public get serviceGraphSchemaId() {
    return this.getStringAttribute('service_graph_schema_id');
  }
  public set serviceGraphSchemaId(value: string) {
    this._serviceGraphSchemaId = value;
  }
  public resetServiceGraphSchemaId() {
    this._serviceGraphSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGraphSchemaIdInput() {
    return this._serviceGraphSchemaId;
  }

  // service_graph_template_name - computed: true, optional: true, required: false
  private _serviceGraphTemplateName?: string; 
  public get serviceGraphTemplateName() {
    return this.getStringAttribute('service_graph_template_name');
  }
  public set serviceGraphTemplateName(value: string) {
    this._serviceGraphTemplateName = value;
  }
  public resetServiceGraphTemplateName() {
    this._serviceGraphTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGraphTemplateNameInput() {
    return this._serviceGraphTemplateName;
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

  // node_relationship - computed: false, optional: false, required: true
  private _nodeRelationship = new SchemaTemplateContractServiceGraphNodeRelationshipList(this, "node_relationship", false);
  public get nodeRelationship() {
    return this._nodeRelationship;
  }
  public putNodeRelationship(value: SchemaTemplateContractServiceGraphNodeRelationship[] | cdktf.IResolvable) {
    this._nodeRelationship.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRelationshipInput() {
    return this._nodeRelationship.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_name: cdktf.stringToTerraform(this._contractName),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      service_graph_name: cdktf.stringToTerraform(this._serviceGraphName),
      service_graph_schema_id: cdktf.stringToTerraform(this._serviceGraphSchemaId),
      service_graph_template_name: cdktf.stringToTerraform(this._serviceGraphTemplateName),
      template_name: cdktf.stringToTerraform(this._templateName),
      node_relationship: cdktf.listMapper(schemaTemplateContractServiceGraphNodeRelationshipToTerraform, true)(this._nodeRelationship.internalValue),
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
      service_graph_name: {
        value: cdktf.stringToHclTerraform(this._serviceGraphName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_graph_schema_id: {
        value: cdktf.stringToHclTerraform(this._serviceGraphSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_graph_template_name: {
        value: cdktf.stringToHclTerraform(this._serviceGraphTemplateName),
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
      node_relationship: {
        value: cdktf.listMapperHcl(schemaTemplateContractServiceGraphNodeRelationshipToHclTerraform, true)(this._nodeRelationship.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaTemplateContractServiceGraphNodeRelationshipList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
