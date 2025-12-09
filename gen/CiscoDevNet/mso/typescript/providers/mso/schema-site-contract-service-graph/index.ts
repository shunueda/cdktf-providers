// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteContractServiceGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#contract_name SchemaSiteContractServiceGraph#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#id SchemaSiteContractServiceGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#schema_id SchemaSiteContractServiceGraph#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#service_graph_name SchemaSiteContractServiceGraph#service_graph_name}
  */
  readonly serviceGraphName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#service_graph_schema_id SchemaSiteContractServiceGraph#service_graph_schema_id}
  */
  readonly serviceGraphSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#service_graph_template_name SchemaSiteContractServiceGraph#service_graph_template_name}
  */
  readonly serviceGraphTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#site_id SchemaSiteContractServiceGraph#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#template_name SchemaSiteContractServiceGraph#template_name}
  */
  readonly templateName: string;
  /**
  * node_relationship block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#node_relationship SchemaSiteContractServiceGraph#node_relationship}
  */
  readonly nodeRelationship?: SchemaSiteContractServiceGraphNodeRelationship[] | cdktf.IResolvable;
}
export interface SchemaSiteContractServiceGraphNodeRelationship {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#consumer_connector_cluster_interface SchemaSiteContractServiceGraph#consumer_connector_cluster_interface}
  */
  readonly consumerConnectorClusterInterface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#consumer_connector_redirect_policy SchemaSiteContractServiceGraph#consumer_connector_redirect_policy}
  */
  readonly consumerConnectorRedirectPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#consumer_connector_redirect_policy_tenant SchemaSiteContractServiceGraph#consumer_connector_redirect_policy_tenant}
  */
  readonly consumerConnectorRedirectPolicyTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#consumer_subnet_ips SchemaSiteContractServiceGraph#consumer_subnet_ips}
  */
  readonly consumerSubnetIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#provider_connector_cluster_interface SchemaSiteContractServiceGraph#provider_connector_cluster_interface}
  */
  readonly providerConnectorClusterInterface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#provider_connector_redirect_policy SchemaSiteContractServiceGraph#provider_connector_redirect_policy}
  */
  readonly providerConnectorRedirectPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#provider_connector_redirect_policy_tenant SchemaSiteContractServiceGraph#provider_connector_redirect_policy_tenant}
  */
  readonly providerConnectorRedirectPolicyTenant?: string;
}

export function schemaSiteContractServiceGraphNodeRelationshipToTerraform(struct?: SchemaSiteContractServiceGraphNodeRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_connector_cluster_interface: cdktf.stringToTerraform(struct!.consumerConnectorClusterInterface),
    consumer_connector_redirect_policy: cdktf.stringToTerraform(struct!.consumerConnectorRedirectPolicy),
    consumer_connector_redirect_policy_tenant: cdktf.stringToTerraform(struct!.consumerConnectorRedirectPolicyTenant),
    consumer_subnet_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerSubnetIps),
    provider_connector_cluster_interface: cdktf.stringToTerraform(struct!.providerConnectorClusterInterface),
    provider_connector_redirect_policy: cdktf.stringToTerraform(struct!.providerConnectorRedirectPolicy),
    provider_connector_redirect_policy_tenant: cdktf.stringToTerraform(struct!.providerConnectorRedirectPolicyTenant),
  }
}


export function schemaSiteContractServiceGraphNodeRelationshipToHclTerraform(struct?: SchemaSiteContractServiceGraphNodeRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_connector_cluster_interface: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorClusterInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_connector_redirect_policy: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorRedirectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_connector_redirect_policy_tenant: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorRedirectPolicyTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_subnet_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerSubnetIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider_connector_cluster_interface: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorClusterInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector_redirect_policy: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorRedirectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector_redirect_policy_tenant: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorRedirectPolicyTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteContractServiceGraphNodeRelationshipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteContractServiceGraphNodeRelationship | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerConnectorClusterInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorClusterInterface = this._consumerConnectorClusterInterface;
    }
    if (this._consumerConnectorRedirectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorRedirectPolicy = this._consumerConnectorRedirectPolicy;
    }
    if (this._consumerConnectorRedirectPolicyTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorRedirectPolicyTenant = this._consumerConnectorRedirectPolicyTenant;
    }
    if (this._consumerSubnetIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerSubnetIps = this._consumerSubnetIps;
    }
    if (this._providerConnectorClusterInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorClusterInterface = this._providerConnectorClusterInterface;
    }
    if (this._providerConnectorRedirectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorRedirectPolicy = this._providerConnectorRedirectPolicy;
    }
    if (this._providerConnectorRedirectPolicyTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorRedirectPolicyTenant = this._providerConnectorRedirectPolicyTenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteContractServiceGraphNodeRelationship | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerConnectorClusterInterface = undefined;
      this._consumerConnectorRedirectPolicy = undefined;
      this._consumerConnectorRedirectPolicyTenant = undefined;
      this._consumerSubnetIps = undefined;
      this._providerConnectorClusterInterface = undefined;
      this._providerConnectorRedirectPolicy = undefined;
      this._providerConnectorRedirectPolicyTenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerConnectorClusterInterface = value.consumerConnectorClusterInterface;
      this._consumerConnectorRedirectPolicy = value.consumerConnectorRedirectPolicy;
      this._consumerConnectorRedirectPolicyTenant = value.consumerConnectorRedirectPolicyTenant;
      this._consumerSubnetIps = value.consumerSubnetIps;
      this._providerConnectorClusterInterface = value.providerConnectorClusterInterface;
      this._providerConnectorRedirectPolicy = value.providerConnectorRedirectPolicy;
      this._providerConnectorRedirectPolicyTenant = value.providerConnectorRedirectPolicyTenant;
    }
  }

  // consumer_connector_cluster_interface - computed: false, optional: false, required: true
  private _consumerConnectorClusterInterface?: string; 
  public get consumerConnectorClusterInterface() {
    return this.getStringAttribute('consumer_connector_cluster_interface');
  }
  public set consumerConnectorClusterInterface(value: string) {
    this._consumerConnectorClusterInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorClusterInterfaceInput() {
    return this._consumerConnectorClusterInterface;
  }

  // consumer_connector_redirect_policy - computed: true, optional: true, required: false
  private _consumerConnectorRedirectPolicy?: string; 
  public get consumerConnectorRedirectPolicy() {
    return this.getStringAttribute('consumer_connector_redirect_policy');
  }
  public set consumerConnectorRedirectPolicy(value: string) {
    this._consumerConnectorRedirectPolicy = value;
  }
  public resetConsumerConnectorRedirectPolicy() {
    this._consumerConnectorRedirectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorRedirectPolicyInput() {
    return this._consumerConnectorRedirectPolicy;
  }

  // consumer_connector_redirect_policy_tenant - computed: true, optional: true, required: false
  private _consumerConnectorRedirectPolicyTenant?: string; 
  public get consumerConnectorRedirectPolicyTenant() {
    return this.getStringAttribute('consumer_connector_redirect_policy_tenant');
  }
  public set consumerConnectorRedirectPolicyTenant(value: string) {
    this._consumerConnectorRedirectPolicyTenant = value;
  }
  public resetConsumerConnectorRedirectPolicyTenant() {
    this._consumerConnectorRedirectPolicyTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorRedirectPolicyTenantInput() {
    return this._consumerConnectorRedirectPolicyTenant;
  }

  // consumer_subnet_ips - computed: true, optional: true, required: false
  private _consumerSubnetIps?: string[]; 
  public get consumerSubnetIps() {
    return this.getListAttribute('consumer_subnet_ips');
  }
  public set consumerSubnetIps(value: string[]) {
    this._consumerSubnetIps = value;
  }
  public resetConsumerSubnetIps() {
    this._consumerSubnetIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSubnetIpsInput() {
    return this._consumerSubnetIps;
  }

  // provider_connector_cluster_interface - computed: false, optional: false, required: true
  private _providerConnectorClusterInterface?: string; 
  public get providerConnectorClusterInterface() {
    return this.getStringAttribute('provider_connector_cluster_interface');
  }
  public set providerConnectorClusterInterface(value: string) {
    this._providerConnectorClusterInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorClusterInterfaceInput() {
    return this._providerConnectorClusterInterface;
  }

  // provider_connector_redirect_policy - computed: true, optional: true, required: false
  private _providerConnectorRedirectPolicy?: string; 
  public get providerConnectorRedirectPolicy() {
    return this.getStringAttribute('provider_connector_redirect_policy');
  }
  public set providerConnectorRedirectPolicy(value: string) {
    this._providerConnectorRedirectPolicy = value;
  }
  public resetProviderConnectorRedirectPolicy() {
    this._providerConnectorRedirectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorRedirectPolicyInput() {
    return this._providerConnectorRedirectPolicy;
  }

  // provider_connector_redirect_policy_tenant - computed: true, optional: true, required: false
  private _providerConnectorRedirectPolicyTenant?: string; 
  public get providerConnectorRedirectPolicyTenant() {
    return this.getStringAttribute('provider_connector_redirect_policy_tenant');
  }
  public set providerConnectorRedirectPolicyTenant(value: string) {
    this._providerConnectorRedirectPolicyTenant = value;
  }
  public resetProviderConnectorRedirectPolicyTenant() {
    this._providerConnectorRedirectPolicyTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorRedirectPolicyTenantInput() {
    return this._providerConnectorRedirectPolicyTenant;
  }
}

export class SchemaSiteContractServiceGraphNodeRelationshipList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteContractServiceGraphNodeRelationship[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteContractServiceGraphNodeRelationshipOutputReference {
    return new SchemaSiteContractServiceGraphNodeRelationshipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph mso_schema_site_contract_service_graph}
*/
export class SchemaSiteContractServiceGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_contract_service_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteContractServiceGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteContractServiceGraph to import
  * @param importFromId The id of the existing SchemaSiteContractServiceGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteContractServiceGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_contract_service_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_contract_service_graph mso_schema_site_contract_service_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteContractServiceGraphConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteContractServiceGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_contract_service_graph',
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
    this._serviceGraphName = config.serviceGraphName;
    this._serviceGraphSchemaId = config.serviceGraphSchemaId;
    this._serviceGraphTemplateName = config.serviceGraphTemplateName;
    this._siteId = config.siteId;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
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

  // node_relationship - computed: false, optional: true, required: false
  private _nodeRelationship = new SchemaSiteContractServiceGraphNodeRelationshipList(this, "node_relationship", false);
  public get nodeRelationship() {
    return this._nodeRelationship;
  }
  public putNodeRelationship(value: SchemaSiteContractServiceGraphNodeRelationship[] | cdktf.IResolvable) {
    this._nodeRelationship.internalValue = value;
  }
  public resetNodeRelationship() {
    this._nodeRelationship.internalValue = undefined;
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
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      node_relationship: cdktf.listMapper(schemaSiteContractServiceGraphNodeRelationshipToTerraform, true)(this._nodeRelationship.internalValue),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
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
        value: cdktf.listMapperHcl(schemaSiteContractServiceGraphNodeRelationshipToHclTerraform, true)(this._nodeRelationship.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaSiteContractServiceGraphNodeRelationshipList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
