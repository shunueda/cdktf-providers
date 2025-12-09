// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteServiceGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#id SchemaSiteServiceGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#schema_id SchemaSiteServiceGraph#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#service_graph_name SchemaSiteServiceGraph#service_graph_name}
  */
  readonly serviceGraphName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#site_id SchemaSiteServiceGraph#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#template_name SchemaSiteServiceGraph#template_name}
  */
  readonly templateName: string;
  /**
  * service_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#service_node SchemaSiteServiceGraph#service_node}
  */
  readonly serviceNode: SchemaSiteServiceGraphServiceNode[] | cdktf.IResolvable;
}
export interface SchemaSiteServiceGraphServiceNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#consumer_connector_type SchemaSiteServiceGraph#consumer_connector_type}
  */
  readonly consumerConnectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#consumer_interface SchemaSiteServiceGraph#consumer_interface}
  */
  readonly consumerInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#device_dn SchemaSiteServiceGraph#device_dn}
  */
  readonly deviceDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#provider_connector_type SchemaSiteServiceGraph#provider_connector_type}
  */
  readonly providerConnectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#provider_interface SchemaSiteServiceGraph#provider_interface}
  */
  readonly providerInterface?: string;
}

export function schemaSiteServiceGraphServiceNodeToTerraform(struct?: SchemaSiteServiceGraphServiceNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_connector_type: cdktf.stringToTerraform(struct!.consumerConnectorType),
    consumer_interface: cdktf.stringToTerraform(struct!.consumerInterface),
    device_dn: cdktf.stringToTerraform(struct!.deviceDn),
    provider_connector_type: cdktf.stringToTerraform(struct!.providerConnectorType),
    provider_interface: cdktf.stringToTerraform(struct!.providerInterface),
  }
}


export function schemaSiteServiceGraphServiceNodeToHclTerraform(struct?: SchemaSiteServiceGraphServiceNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_connector_type: {
      value: cdktf.stringToHclTerraform(struct!.consumerConnectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_interface: {
      value: cdktf.stringToHclTerraform(struct!.consumerInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_dn: {
      value: cdktf.stringToHclTerraform(struct!.deviceDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_connector_type: {
      value: cdktf.stringToHclTerraform(struct!.providerConnectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_interface: {
      value: cdktf.stringToHclTerraform(struct!.providerInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteServiceGraphServiceNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteServiceGraphServiceNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerConnectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerConnectorType = this._consumerConnectorType;
    }
    if (this._consumerInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerInterface = this._consumerInterface;
    }
    if (this._deviceDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDn = this._deviceDn;
    }
    if (this._providerConnectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConnectorType = this._providerConnectorType;
    }
    if (this._providerInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerInterface = this._providerInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteServiceGraphServiceNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerConnectorType = undefined;
      this._consumerInterface = undefined;
      this._deviceDn = undefined;
      this._providerConnectorType = undefined;
      this._providerInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerConnectorType = value.consumerConnectorType;
      this._consumerInterface = value.consumerInterface;
      this._deviceDn = value.deviceDn;
      this._providerConnectorType = value.providerConnectorType;
      this._providerInterface = value.providerInterface;
    }
  }

  // consumer_connector_type - computed: false, optional: true, required: false
  private _consumerConnectorType?: string; 
  public get consumerConnectorType() {
    return this.getStringAttribute('consumer_connector_type');
  }
  public set consumerConnectorType(value: string) {
    this._consumerConnectorType = value;
  }
  public resetConsumerConnectorType() {
    this._consumerConnectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerConnectorTypeInput() {
    return this._consumerConnectorType;
  }

  // consumer_interface - computed: true, optional: true, required: false
  private _consumerInterface?: string; 
  public get consumerInterface() {
    return this.getStringAttribute('consumer_interface');
  }
  public set consumerInterface(value: string) {
    this._consumerInterface = value;
  }
  public resetConsumerInterface() {
    this._consumerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInterfaceInput() {
    return this._consumerInterface;
  }

  // device_dn - computed: false, optional: false, required: true
  private _deviceDn?: string; 
  public get deviceDn() {
    return this.getStringAttribute('device_dn');
  }
  public set deviceDn(value: string) {
    this._deviceDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDnInput() {
    return this._deviceDn;
  }

  // provider_connector_type - computed: false, optional: true, required: false
  private _providerConnectorType?: string; 
  public get providerConnectorType() {
    return this.getStringAttribute('provider_connector_type');
  }
  public set providerConnectorType(value: string) {
    this._providerConnectorType = value;
  }
  public resetProviderConnectorType() {
    this._providerConnectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorTypeInput() {
    return this._providerConnectorType;
  }

  // provider_interface - computed: true, optional: true, required: false
  private _providerInterface?: string; 
  public get providerInterface() {
    return this.getStringAttribute('provider_interface');
  }
  public set providerInterface(value: string) {
    this._providerInterface = value;
  }
  public resetProviderInterface() {
    this._providerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInterfaceInput() {
    return this._providerInterface;
  }
}

export class SchemaSiteServiceGraphServiceNodeList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteServiceGraphServiceNode[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteServiceGraphServiceNodeOutputReference {
    return new SchemaSiteServiceGraphServiceNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph mso_schema_site_service_graph}
*/
export class SchemaSiteServiceGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_service_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteServiceGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteServiceGraph to import
  * @param importFromId The id of the existing SchemaSiteServiceGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteServiceGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_service_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_service_graph mso_schema_site_service_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteServiceGraphConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteServiceGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_service_graph',
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
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._serviceGraphName = config.serviceGraphName;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._serviceNode.internalValue = config.serviceNode;
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

  // service_node - computed: false, optional: false, required: true
  private _serviceNode = new SchemaSiteServiceGraphServiceNodeList(this, "service_node", false);
  public get serviceNode() {
    return this._serviceNode;
  }
  public putServiceNode(value: SchemaSiteServiceGraphServiceNode[] | cdktf.IResolvable) {
    this._serviceNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeInput() {
    return this._serviceNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      service_graph_name: cdktf.stringToTerraform(this._serviceGraphName),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      service_node: cdktf.listMapper(schemaSiteServiceGraphServiceNodeToTerraform, true)(this._serviceNode.internalValue),
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
      service_node: {
        value: cdktf.listMapperHcl(schemaSiteServiceGraphServiceNodeToHclTerraform, true)(this._serviceNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaSiteServiceGraphServiceNodeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
