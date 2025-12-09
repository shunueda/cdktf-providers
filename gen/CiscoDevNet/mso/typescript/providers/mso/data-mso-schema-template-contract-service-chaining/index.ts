// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateContractServiceChainingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining#contract_name DataMsoSchemaTemplateContractServiceChaining#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining#id DataMsoSchemaTemplateContractServiceChaining#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining#schema_id DataMsoSchemaTemplateContractServiceChaining#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining#template_name DataMsoSchemaTemplateContractServiceChaining#template_name}
  */
  readonly templateName: string;
}
export interface DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnector {
}

export function dataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorToTerraform(struct?: DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorToHclTerraform(struct?: DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // is_redirect - computed: true, optional: false, required: false
  public get isRedirect() {
    return this.getBooleanAttribute('is_redirect');
  }
}

export class DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference {
    return new DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnector {
}

export function dataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorToTerraform(struct?: DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorToHclTerraform(struct?: DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // is_redirect - computed: true, optional: false, required: false
  public get isRedirect() {
    return this.getBooleanAttribute('is_redirect');
  }
}

export class DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference {
    return new DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMsoSchemaTemplateContractServiceChainingServiceNodes {
}

export function dataMsoSchemaTemplateContractServiceChainingServiceNodesToTerraform(struct?: DataMsoSchemaTemplateContractServiceChainingServiceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaTemplateContractServiceChainingServiceNodesToHclTerraform(struct?: DataMsoSchemaTemplateContractServiceChainingServiceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaTemplateContractServiceChainingServiceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaTemplateContractServiceChainingServiceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaTemplateContractServiceChainingServiceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_connector - computed: true, optional: false, required: false
  private _consumerConnector = new DataMsoSchemaTemplateContractServiceChainingServiceNodesConsumerConnectorList(this, "consumer_connector", false);
  public get consumerConnector() {
    return this._consumerConnector;
  }

  // device_ref - computed: true, optional: false, required: false
  public get deviceRef() {
    return this.getStringAttribute('device_ref');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_connector - computed: true, optional: false, required: false
  private _providerConnector = new DataMsoSchemaTemplateContractServiceChainingServiceNodesProviderConnectorList(this, "provider_connector", false);
  public get providerConnector() {
    return this._providerConnector;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataMsoSchemaTemplateContractServiceChainingServiceNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaTemplateContractServiceChainingServiceNodesOutputReference {
    return new DataMsoSchemaTemplateContractServiceChainingServiceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining mso_schema_template_contract_service_chaining}
*/
export class DataMsoSchemaTemplateContractServiceChaining extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_contract_service_chaining";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateContractServiceChaining resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateContractServiceChaining to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateContractServiceChaining that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateContractServiceChaining to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_contract_service_chaining", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_contract_service_chaining mso_schema_template_contract_service_chaining} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateContractServiceChainingConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateContractServiceChainingConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_contract_service_chaining',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_filter - computed: true, optional: false, required: false
  public get nodeFilter() {
    return this.getStringAttribute('node_filter');
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

  // service_nodes - computed: true, optional: false, required: false
  private _serviceNodes = new DataMsoSchemaTemplateContractServiceChainingServiceNodesList(this, "service_nodes", false);
  public get serviceNodes() {
    return this._serviceNodes;
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
