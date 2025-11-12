// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteServiceGraphNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#id SchemaSiteServiceGraphNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#schema_id SchemaSiteServiceGraphNode#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#service_graph_name SchemaSiteServiceGraphNode#service_graph_name}
  */
  readonly serviceGraphName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#service_node_type SchemaSiteServiceGraphNode#service_node_type}
  */
  readonly serviceNodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#template_name SchemaSiteServiceGraphNode#template_name}
  */
  readonly templateName: string;
  /**
  * site_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#site_nodes SchemaSiteServiceGraphNode#site_nodes}
  */
  readonly siteNodes?: SchemaSiteServiceGraphNodeSiteNodes[] | cdktf.IResolvable;
}
export interface SchemaSiteServiceGraphNodeSiteNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#node_name SchemaSiteServiceGraphNode#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#site_id SchemaSiteServiceGraphNode#site_id}
  */
  readonly siteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#tenant_name SchemaSiteServiceGraphNode#tenant_name}
  */
  readonly tenantName?: string;
}

export function schemaSiteServiceGraphNodeSiteNodesToTerraform(struct?: SchemaSiteServiceGraphNodeSiteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
  }
}


export function schemaSiteServiceGraphNodeSiteNodesToHclTerraform(struct?: SchemaSiteServiceGraphNodeSiteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteServiceGraphNodeSiteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteServiceGraphNodeSiteNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteServiceGraphNodeSiteNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
      this._siteId = undefined;
      this._tenantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
      this._siteId = value.siteId;
      this._tenantName = value.tenantName;
    }
  }

  // node_name - computed: true, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }
}

export class SchemaSiteServiceGraphNodeSiteNodesList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteServiceGraphNodeSiteNodes[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteServiceGraphNodeSiteNodesOutputReference {
    return new SchemaSiteServiceGraphNodeSiteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node mso_schema_site_service_graph_node}
*/
export class SchemaSiteServiceGraphNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_service_graph_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteServiceGraphNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteServiceGraphNode to import
  * @param importFromId The id of the existing SchemaSiteServiceGraphNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteServiceGraphNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_service_graph_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_service_graph_node mso_schema_site_service_graph_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteServiceGraphNodeConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteServiceGraphNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_service_graph_node',
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
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._serviceGraphName = config.serviceGraphName;
    this._serviceNodeType = config.serviceNodeType;
    this._templateName = config.templateName;
    this._siteNodes.internalValue = config.siteNodes;
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

  // service_node_type - computed: false, optional: false, required: true
  private _serviceNodeType?: string; 
  public get serviceNodeType() {
    return this.getStringAttribute('service_node_type');
  }
  public set serviceNodeType(value: string) {
    this._serviceNodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeTypeInput() {
    return this._serviceNodeType;
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

  // site_nodes - computed: false, optional: true, required: false
  private _siteNodes = new SchemaSiteServiceGraphNodeSiteNodesList(this, "site_nodes", false);
  public get siteNodes() {
    return this._siteNodes;
  }
  public putSiteNodes(value: SchemaSiteServiceGraphNodeSiteNodes[] | cdktf.IResolvable) {
    this._siteNodes.internalValue = value;
  }
  public resetSiteNodes() {
    this._siteNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNodesInput() {
    return this._siteNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      service_graph_name: cdktf.stringToTerraform(this._serviceGraphName),
      service_node_type: cdktf.stringToTerraform(this._serviceNodeType),
      template_name: cdktf.stringToTerraform(this._templateName),
      site_nodes: cdktf.listMapper(schemaSiteServiceGraphNodeSiteNodesToTerraform, true)(this._siteNodes.internalValue),
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
      service_node_type: {
        value: cdktf.stringToHclTerraform(this._serviceNodeType),
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
      site_nodes: {
        value: cdktf.listMapperHcl(schemaSiteServiceGraphNodeSiteNodesToHclTerraform, true)(this._siteNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaSiteServiceGraphNodeSiteNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
