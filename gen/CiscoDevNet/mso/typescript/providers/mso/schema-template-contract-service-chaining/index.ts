// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateContractServiceChainingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#contract_name SchemaTemplateContractServiceChaining#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#id SchemaTemplateContractServiceChaining#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#node_filter SchemaTemplateContractServiceChaining#node_filter}
  */
  readonly nodeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#schema_id SchemaTemplateContractServiceChaining#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#template_name SchemaTemplateContractServiceChaining#template_name}
  */
  readonly templateName: string;
  /**
  * service_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#service_nodes SchemaTemplateContractServiceChaining#service_nodes}
  */
  readonly serviceNodes: SchemaTemplateContractServiceChainingServiceNodes[] | cdktf.IResolvable;
}
export interface SchemaTemplateContractServiceChainingServiceNodesConsumerConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#interface_name SchemaTemplateContractServiceChaining#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#is_redirect SchemaTemplateContractServiceChaining#is_redirect}
  */
  readonly isRedirect?: boolean | cdktf.IResolvable;
}

export function schemaTemplateContractServiceChainingServiceNodesConsumerConnectorToTerraform(struct?: SchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference | SchemaTemplateContractServiceChainingServiceNodesConsumerConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    is_redirect: cdktf.booleanToTerraform(struct!.isRedirect),
  }
}


export function schemaTemplateContractServiceChainingServiceNodesConsumerConnectorToHclTerraform(struct?: SchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference | SchemaTemplateContractServiceChainingServiceNodesConsumerConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.isRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaTemplateContractServiceChainingServiceNodesConsumerConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._isRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRedirect = this._isRedirect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTemplateContractServiceChainingServiceNodesConsumerConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceName = undefined;
      this._isRedirect = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceName = value.interfaceName;
      this._isRedirect = value.isRedirect;
    }
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // is_redirect - computed: false, optional: true, required: false
  private _isRedirect?: boolean | cdktf.IResolvable; 
  public get isRedirect() {
    return this.getBooleanAttribute('is_redirect');
  }
  public set isRedirect(value: boolean | cdktf.IResolvable) {
    this._isRedirect = value;
  }
  public resetIsRedirect() {
    this._isRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedirectInput() {
    return this._isRedirect;
  }
}
export interface SchemaTemplateContractServiceChainingServiceNodesProviderConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#interface_name SchemaTemplateContractServiceChaining#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#is_redirect SchemaTemplateContractServiceChaining#is_redirect}
  */
  readonly isRedirect?: boolean | cdktf.IResolvable;
}

export function schemaTemplateContractServiceChainingServiceNodesProviderConnectorToTerraform(struct?: SchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference | SchemaTemplateContractServiceChainingServiceNodesProviderConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    is_redirect: cdktf.booleanToTerraform(struct!.isRedirect),
  }
}


export function schemaTemplateContractServiceChainingServiceNodesProviderConnectorToHclTerraform(struct?: SchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference | SchemaTemplateContractServiceChainingServiceNodesProviderConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.isRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaTemplateContractServiceChainingServiceNodesProviderConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._isRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRedirect = this._isRedirect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTemplateContractServiceChainingServiceNodesProviderConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceName = undefined;
      this._isRedirect = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceName = value.interfaceName;
      this._isRedirect = value.isRedirect;
    }
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // is_redirect - computed: false, optional: true, required: false
  private _isRedirect?: boolean | cdktf.IResolvable; 
  public get isRedirect() {
    return this.getBooleanAttribute('is_redirect');
  }
  public set isRedirect(value: boolean | cdktf.IResolvable) {
    this._isRedirect = value;
  }
  public resetIsRedirect() {
    this._isRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedirectInput() {
    return this._isRedirect;
  }
}
export interface SchemaTemplateContractServiceChainingServiceNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#device_ref SchemaTemplateContractServiceChaining#device_ref}
  */
  readonly deviceRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#device_type SchemaTemplateContractServiceChaining#device_type}
  */
  readonly deviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#name SchemaTemplateContractServiceChaining#name}
  */
  readonly name: string;
  /**
  * consumer_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#consumer_connector SchemaTemplateContractServiceChaining#consumer_connector}
  */
  readonly consumerConnector: SchemaTemplateContractServiceChainingServiceNodesConsumerConnector;
  /**
  * provider_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#provider_connector SchemaTemplateContractServiceChaining#provider_connector}
  */
  readonly providerConnector: SchemaTemplateContractServiceChainingServiceNodesProviderConnector;
}

export function schemaTemplateContractServiceChainingServiceNodesToTerraform(struct?: SchemaTemplateContractServiceChainingServiceNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_ref: cdktf.stringToTerraform(struct!.deviceRef),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    name: cdktf.stringToTerraform(struct!.name),
    consumer_connector: schemaTemplateContractServiceChainingServiceNodesConsumerConnectorToTerraform(struct!.consumerConnector),
    provider_connector: schemaTemplateContractServiceChainingServiceNodesProviderConnectorToTerraform(struct!.providerConnector),
  }
}


export function schemaTemplateContractServiceChainingServiceNodesToHclTerraform(struct?: SchemaTemplateContractServiceChainingServiceNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_ref: {
      value: cdktf.stringToHclTerraform(struct!.deviceRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_connector: {
      value: schemaTemplateContractServiceChainingServiceNodesConsumerConnectorToHclTerraform(struct!.consumerConnector),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaTemplateContractServiceChainingServiceNodesConsumerConnectorList",
    },
    provider_connector: {
      value: schemaTemplateContractServiceChainingServiceNodesProviderConnectorToHclTerraform(struct!.providerConnector),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaTemplateContractServiceChainingServiceNodesProviderConnectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaTemplateContractServiceChainingServiceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaTemplateContractServiceChainingServiceNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRef = this._deviceRef;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._consumerConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnector = this._consumerConnector?.internalValue;
    }
    if (this._providerConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnector = this._providerConnector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTemplateContractServiceChainingServiceNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceRef = undefined;
      this._deviceType = undefined;
      this._name = undefined;
      this._consumerConnector.internalValue = undefined;
      this._providerConnector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceRef = value.deviceRef;
      this._deviceType = value.deviceType;
      this._name = value.name;
      this._consumerConnector.internalValue = value.consumerConnector;
      this._providerConnector.internalValue = value.providerConnector;
    }
  }

  // device_ref - computed: false, optional: false, required: true
  private _deviceRef?: string; 
  public get deviceRef() {
    return this.getStringAttribute('device_ref');
  }
  public set deviceRef(value: string) {
    this._deviceRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRefInput() {
    return this._deviceRef;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // consumer_connector - computed: false, optional: false, required: true
  private _consumerConnector = new SchemaTemplateContractServiceChainingServiceNodesConsumerConnectorOutputReference(this, "consumer_connector");
  public get consumerConnector() {
    return this._consumerConnector;
  }
  public putConsumerConnector(value: SchemaTemplateContractServiceChainingServiceNodesConsumerConnector) {
    this._consumerConnector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorInput() {
    return this._consumerConnector.internalValue;
  }

  // provider_connector - computed: false, optional: false, required: true
  private _providerConnector = new SchemaTemplateContractServiceChainingServiceNodesProviderConnectorOutputReference(this, "provider_connector");
  public get providerConnector() {
    return this._providerConnector;
  }
  public putProviderConnector(value: SchemaTemplateContractServiceChainingServiceNodesProviderConnector) {
    this._providerConnector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorInput() {
    return this._providerConnector.internalValue;
  }
}

export class SchemaTemplateContractServiceChainingServiceNodesList extends cdktf.ComplexList {
  public internalValue? : SchemaTemplateContractServiceChainingServiceNodes[] | cdktf.IResolvable

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
  public get(index: number): SchemaTemplateContractServiceChainingServiceNodesOutputReference {
    return new SchemaTemplateContractServiceChainingServiceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining mso_schema_template_contract_service_chaining}
*/
export class SchemaTemplateContractServiceChaining extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_contract_service_chaining";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateContractServiceChaining resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateContractServiceChaining to import
  * @param importFromId The id of the existing SchemaTemplateContractServiceChaining that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateContractServiceChaining to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_contract_service_chaining", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_contract_service_chaining mso_schema_template_contract_service_chaining} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateContractServiceChainingConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateContractServiceChainingConfig) {
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
    this._nodeFilter = config.nodeFilter;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
    this._serviceNodes.internalValue = config.serviceNodes;
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

  // node_filter - computed: true, optional: true, required: false
  private _nodeFilter?: string; 
  public get nodeFilter() {
    return this.getStringAttribute('node_filter');
  }
  public set nodeFilter(value: string) {
    this._nodeFilter = value;
  }
  public resetNodeFilter() {
    this._nodeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFilterInput() {
    return this._nodeFilter;
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

  // service_nodes - computed: false, optional: false, required: true
  private _serviceNodes = new SchemaTemplateContractServiceChainingServiceNodesList(this, "service_nodes", false);
  public get serviceNodes() {
    return this._serviceNodes;
  }
  public putServiceNodes(value: SchemaTemplateContractServiceChainingServiceNodes[] | cdktf.IResolvable) {
    this._serviceNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodesInput() {
    return this._serviceNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_name: cdktf.stringToTerraform(this._contractName),
      id: cdktf.stringToTerraform(this._id),
      node_filter: cdktf.stringToTerraform(this._nodeFilter),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
      service_nodes: cdktf.listMapper(schemaTemplateContractServiceChainingServiceNodesToTerraform, true)(this._serviceNodes.internalValue),
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
      node_filter: {
        value: cdktf.stringToHclTerraform(this._nodeFilter),
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
      service_nodes: {
        value: cdktf.listMapperHcl(schemaTemplateContractServiceChainingServiceNodesToHclTerraform, true)(this._serviceNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaTemplateContractServiceChainingServiceNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
