// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciFunctionNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node#annotation DataAciFunctionNode#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node#description DataAciFunctionNode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node#id DataAciFunctionNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node#l4_l7_service_graph_template_dn DataAciFunctionNode#l4_l7_service_graph_template_dn}
  */
  readonly l4L7ServiceGraphTemplateDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node#name DataAciFunctionNode#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node aci_function_node}
*/
export class DataAciFunctionNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_function_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciFunctionNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciFunctionNode to import
  * @param importFromId The id of the existing DataAciFunctionNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciFunctionNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_function_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/function_node aci_function_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciFunctionNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciFunctionNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_function_node',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._l4L7ServiceGraphTemplateDn = config.l4L7ServiceGraphTemplateDn;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // conn_consumer_dn - computed: true, optional: false, required: false
  public get connConsumerDn() {
    return this.getStringAttribute('conn_consumer_dn');
  }

  // conn_copy_dn - computed: true, optional: false, required: false
  public get connCopyDn() {
    return this.getStringAttribute('conn_copy_dn');
  }

  // conn_provider_dn - computed: true, optional: false, required: false
  public get connProviderDn() {
    return this.getStringAttribute('conn_provider_dn');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // func_template_type - computed: true, optional: false, required: false
  public get funcTemplateType() {
    return this.getStringAttribute('func_template_type');
  }

  // func_type - computed: true, optional: false, required: false
  public get funcType() {
    return this.getStringAttribute('func_type');
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

  // is_copy - computed: true, optional: false, required: false
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }

  // l4_l7_device_interface_consumer_attachment_notification - computed: true, optional: false, required: false
  public get l4L7DeviceInterfaceConsumerAttachmentNotification() {
    return this.getStringAttribute('l4_l7_device_interface_consumer_attachment_notification');
  }

  // l4_l7_device_interface_consumer_connector_type - computed: true, optional: false, required: false
  public get l4L7DeviceInterfaceConsumerConnectorType() {
    return this.getStringAttribute('l4_l7_device_interface_consumer_connector_type');
  }

  // l4_l7_device_interface_consumer_name - computed: true, optional: false, required: false
  public get l4L7DeviceInterfaceConsumerName() {
    return this.getStringAttribute('l4_l7_device_interface_consumer_name');
  }

  // l4_l7_device_interface_provider_attachment_notification - computed: true, optional: false, required: false
  public get l4L7DeviceInterfaceProviderAttachmentNotification() {
    return this.getStringAttribute('l4_l7_device_interface_provider_attachment_notification');
  }

  // l4_l7_device_interface_provider_connector_type - computed: true, optional: false, required: false
  public get l4L7DeviceInterfaceProviderConnectorType() {
    return this.getStringAttribute('l4_l7_device_interface_provider_connector_type');
  }

  // l4_l7_device_interface_provider_name - computed: true, optional: false, required: false
  public get l4L7DeviceInterfaceProviderName() {
    return this.getStringAttribute('l4_l7_device_interface_provider_name');
  }

  // l4_l7_service_graph_template_dn - computed: false, optional: false, required: true
  private _l4L7ServiceGraphTemplateDn?: string; 
  public get l4L7ServiceGraphTemplateDn() {
    return this.getStringAttribute('l4_l7_service_graph_template_dn');
  }
  public set l4L7ServiceGraphTemplateDn(value: string) {
    this._l4L7ServiceGraphTemplateDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7ServiceGraphTemplateDnInput() {
    return this._l4L7ServiceGraphTemplateDn;
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getStringAttribute('managed');
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

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // relation_vns_rs_default_scope_to_term - computed: true, optional: false, required: false
  public get relationVnsRsDefaultScopeToTerm() {
    return this.getStringAttribute('relation_vns_rs_default_scope_to_term');
  }

  // relation_vns_rs_node_to_abs_func_prof - computed: true, optional: false, required: false
  public get relationVnsRsNodeToAbsFuncProf() {
    return this.getStringAttribute('relation_vns_rs_node_to_abs_func_prof');
  }

  // relation_vns_rs_node_to_cloud_l_dev - computed: true, optional: false, required: false
  public get relationVnsRsNodeToCloudLDev() {
    return this.getStringAttribute('relation_vns_rs_node_to_cloud_l_dev');
  }

  // relation_vns_rs_node_to_l_dev - computed: true, optional: false, required: false
  public get relationVnsRsNodeToLDev() {
    return this.getStringAttribute('relation_vns_rs_node_to_l_dev');
  }

  // relation_vns_rs_node_to_m_func - computed: true, optional: false, required: false
  public get relationVnsRsNodeToMFunc() {
    return this.getStringAttribute('relation_vns_rs_node_to_m_func');
  }

  // routing_mode - computed: true, optional: false, required: false
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getStringAttribute('sequence_number');
  }

  // share_encap - computed: true, optional: false, required: false
  public get shareEncap() {
    return this.getStringAttribute('share_encap');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      l4_l7_service_graph_template_dn: cdktf.stringToTerraform(this._l4L7ServiceGraphTemplateDn),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      l4_l7_service_graph_template_dn: {
        value: cdktf.stringToHclTerraform(this._l4L7ServiceGraphTemplateDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
