// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#annotation FunctionNode#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#description FunctionNode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#func_template_type FunctionNode#func_template_type}
  */
  readonly funcTemplateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#func_type FunctionNode#func_type}
  */
  readonly funcType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#id FunctionNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#is_copy FunctionNode#is_copy}
  */
  readonly isCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_device_interface_consumer_attachment_notification FunctionNode#l4_l7_device_interface_consumer_attachment_notification}
  */
  readonly l4L7DeviceInterfaceConsumerAttachmentNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_device_interface_consumer_connector_type FunctionNode#l4_l7_device_interface_consumer_connector_type}
  */
  readonly l4L7DeviceInterfaceConsumerConnectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_device_interface_consumer_name FunctionNode#l4_l7_device_interface_consumer_name}
  */
  readonly l4L7DeviceInterfaceConsumerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_device_interface_provider_attachment_notification FunctionNode#l4_l7_device_interface_provider_attachment_notification}
  */
  readonly l4L7DeviceInterfaceProviderAttachmentNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_device_interface_provider_connector_type FunctionNode#l4_l7_device_interface_provider_connector_type}
  */
  readonly l4L7DeviceInterfaceProviderConnectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_device_interface_provider_name FunctionNode#l4_l7_device_interface_provider_name}
  */
  readonly l4L7DeviceInterfaceProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#l4_l7_service_graph_template_dn FunctionNode#l4_l7_service_graph_template_dn}
  */
  readonly l4L7ServiceGraphTemplateDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#managed FunctionNode#managed}
  */
  readonly managed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#name FunctionNode#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#name_alias FunctionNode#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#relation_vns_rs_default_scope_to_term FunctionNode#relation_vns_rs_default_scope_to_term}
  */
  readonly relationVnsRsDefaultScopeToTerm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#relation_vns_rs_node_to_abs_func_prof FunctionNode#relation_vns_rs_node_to_abs_func_prof}
  */
  readonly relationVnsRsNodeToAbsFuncProf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#relation_vns_rs_node_to_cloud_l_dev FunctionNode#relation_vns_rs_node_to_cloud_l_dev}
  */
  readonly relationVnsRsNodeToCloudLDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#relation_vns_rs_node_to_l_dev FunctionNode#relation_vns_rs_node_to_l_dev}
  */
  readonly relationVnsRsNodeToLDev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#relation_vns_rs_node_to_m_func FunctionNode#relation_vns_rs_node_to_m_func}
  */
  readonly relationVnsRsNodeToMFunc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#routing_mode FunctionNode#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#sequence_number FunctionNode#sequence_number}
  */
  readonly sequenceNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#share_encap FunctionNode#share_encap}
  */
  readonly shareEncap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node aci_function_node}
*/
export class FunctionNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_function_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionNode to import
  * @param importFromId The id of the existing FunctionNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_function_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/function_node aci_function_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionNodeConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_function_node',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._funcTemplateType = config.funcTemplateType;
    this._funcType = config.funcType;
    this._id = config.id;
    this._isCopy = config.isCopy;
    this._l4L7DeviceInterfaceConsumerAttachmentNotification = config.l4L7DeviceInterfaceConsumerAttachmentNotification;
    this._l4L7DeviceInterfaceConsumerConnectorType = config.l4L7DeviceInterfaceConsumerConnectorType;
    this._l4L7DeviceInterfaceConsumerName = config.l4L7DeviceInterfaceConsumerName;
    this._l4L7DeviceInterfaceProviderAttachmentNotification = config.l4L7DeviceInterfaceProviderAttachmentNotification;
    this._l4L7DeviceInterfaceProviderConnectorType = config.l4L7DeviceInterfaceProviderConnectorType;
    this._l4L7DeviceInterfaceProviderName = config.l4L7DeviceInterfaceProviderName;
    this._l4L7ServiceGraphTemplateDn = config.l4L7ServiceGraphTemplateDn;
    this._managed = config.managed;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationVnsRsDefaultScopeToTerm = config.relationVnsRsDefaultScopeToTerm;
    this._relationVnsRsNodeToAbsFuncProf = config.relationVnsRsNodeToAbsFuncProf;
    this._relationVnsRsNodeToCloudLDev = config.relationVnsRsNodeToCloudLDev;
    this._relationVnsRsNodeToLDev = config.relationVnsRsNodeToLDev;
    this._relationVnsRsNodeToMFunc = config.relationVnsRsNodeToMFunc;
    this._routingMode = config.routingMode;
    this._sequenceNumber = config.sequenceNumber;
    this._shareEncap = config.shareEncap;
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

  // func_template_type - computed: true, optional: true, required: false
  private _funcTemplateType?: string; 
  public get funcTemplateType() {
    return this.getStringAttribute('func_template_type');
  }
  public set funcTemplateType(value: string) {
    this._funcTemplateType = value;
  }
  public resetFuncTemplateType() {
    this._funcTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcTemplateTypeInput() {
    return this._funcTemplateType;
  }

  // func_type - computed: true, optional: true, required: false
  private _funcType?: string; 
  public get funcType() {
    return this.getStringAttribute('func_type');
  }
  public set funcType(value: string) {
    this._funcType = value;
  }
  public resetFuncType() {
    this._funcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcTypeInput() {
    return this._funcType;
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

  // is_copy - computed: true, optional: true, required: false
  private _isCopy?: string; 
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }
  public set isCopy(value: string) {
    this._isCopy = value;
  }
  public resetIsCopy() {
    this._isCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCopyInput() {
    return this._isCopy;
  }

  // l4_l7_device_interface_consumer_attachment_notification - computed: true, optional: true, required: false
  private _l4L7DeviceInterfaceConsumerAttachmentNotification?: string; 
  public get l4L7DeviceInterfaceConsumerAttachmentNotification() {
    return this.getStringAttribute('l4_l7_device_interface_consumer_attachment_notification');
  }
  public set l4L7DeviceInterfaceConsumerAttachmentNotification(value: string) {
    this._l4L7DeviceInterfaceConsumerAttachmentNotification = value;
  }
  public resetL4L7DeviceInterfaceConsumerAttachmentNotification() {
    this._l4L7DeviceInterfaceConsumerAttachmentNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceInterfaceConsumerAttachmentNotificationInput() {
    return this._l4L7DeviceInterfaceConsumerAttachmentNotification;
  }

  // l4_l7_device_interface_consumer_connector_type - computed: true, optional: true, required: false
  private _l4L7DeviceInterfaceConsumerConnectorType?: string; 
  public get l4L7DeviceInterfaceConsumerConnectorType() {
    return this.getStringAttribute('l4_l7_device_interface_consumer_connector_type');
  }
  public set l4L7DeviceInterfaceConsumerConnectorType(value: string) {
    this._l4L7DeviceInterfaceConsumerConnectorType = value;
  }
  public resetL4L7DeviceInterfaceConsumerConnectorType() {
    this._l4L7DeviceInterfaceConsumerConnectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceInterfaceConsumerConnectorTypeInput() {
    return this._l4L7DeviceInterfaceConsumerConnectorType;
  }

  // l4_l7_device_interface_consumer_name - computed: true, optional: true, required: false
  private _l4L7DeviceInterfaceConsumerName?: string; 
  public get l4L7DeviceInterfaceConsumerName() {
    return this.getStringAttribute('l4_l7_device_interface_consumer_name');
  }
  public set l4L7DeviceInterfaceConsumerName(value: string) {
    this._l4L7DeviceInterfaceConsumerName = value;
  }
  public resetL4L7DeviceInterfaceConsumerName() {
    this._l4L7DeviceInterfaceConsumerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceInterfaceConsumerNameInput() {
    return this._l4L7DeviceInterfaceConsumerName;
  }

  // l4_l7_device_interface_provider_attachment_notification - computed: true, optional: true, required: false
  private _l4L7DeviceInterfaceProviderAttachmentNotification?: string; 
  public get l4L7DeviceInterfaceProviderAttachmentNotification() {
    return this.getStringAttribute('l4_l7_device_interface_provider_attachment_notification');
  }
  public set l4L7DeviceInterfaceProviderAttachmentNotification(value: string) {
    this._l4L7DeviceInterfaceProviderAttachmentNotification = value;
  }
  public resetL4L7DeviceInterfaceProviderAttachmentNotification() {
    this._l4L7DeviceInterfaceProviderAttachmentNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceInterfaceProviderAttachmentNotificationInput() {
    return this._l4L7DeviceInterfaceProviderAttachmentNotification;
  }

  // l4_l7_device_interface_provider_connector_type - computed: true, optional: true, required: false
  private _l4L7DeviceInterfaceProviderConnectorType?: string; 
  public get l4L7DeviceInterfaceProviderConnectorType() {
    return this.getStringAttribute('l4_l7_device_interface_provider_connector_type');
  }
  public set l4L7DeviceInterfaceProviderConnectorType(value: string) {
    this._l4L7DeviceInterfaceProviderConnectorType = value;
  }
  public resetL4L7DeviceInterfaceProviderConnectorType() {
    this._l4L7DeviceInterfaceProviderConnectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceInterfaceProviderConnectorTypeInput() {
    return this._l4L7DeviceInterfaceProviderConnectorType;
  }

  // l4_l7_device_interface_provider_name - computed: true, optional: true, required: false
  private _l4L7DeviceInterfaceProviderName?: string; 
  public get l4L7DeviceInterfaceProviderName() {
    return this.getStringAttribute('l4_l7_device_interface_provider_name');
  }
  public set l4L7DeviceInterfaceProviderName(value: string) {
    this._l4L7DeviceInterfaceProviderName = value;
  }
  public resetL4L7DeviceInterfaceProviderName() {
    this._l4L7DeviceInterfaceProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7DeviceInterfaceProviderNameInput() {
    return this._l4L7DeviceInterfaceProviderName;
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

  // managed - computed: true, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // relation_vns_rs_default_scope_to_term - computed: false, optional: true, required: false
  private _relationVnsRsDefaultScopeToTerm?: string; 
  public get relationVnsRsDefaultScopeToTerm() {
    return this.getStringAttribute('relation_vns_rs_default_scope_to_term');
  }
  public set relationVnsRsDefaultScopeToTerm(value: string) {
    this._relationVnsRsDefaultScopeToTerm = value;
  }
  public resetRelationVnsRsDefaultScopeToTerm() {
    this._relationVnsRsDefaultScopeToTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsDefaultScopeToTermInput() {
    return this._relationVnsRsDefaultScopeToTerm;
  }

  // relation_vns_rs_node_to_abs_func_prof - computed: false, optional: true, required: false
  private _relationVnsRsNodeToAbsFuncProf?: string; 
  public get relationVnsRsNodeToAbsFuncProf() {
    return this.getStringAttribute('relation_vns_rs_node_to_abs_func_prof');
  }
  public set relationVnsRsNodeToAbsFuncProf(value: string) {
    this._relationVnsRsNodeToAbsFuncProf = value;
  }
  public resetRelationVnsRsNodeToAbsFuncProf() {
    this._relationVnsRsNodeToAbsFuncProf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsNodeToAbsFuncProfInput() {
    return this._relationVnsRsNodeToAbsFuncProf;
  }

  // relation_vns_rs_node_to_cloud_l_dev - computed: false, optional: true, required: false
  private _relationVnsRsNodeToCloudLDev?: string; 
  public get relationVnsRsNodeToCloudLDev() {
    return this.getStringAttribute('relation_vns_rs_node_to_cloud_l_dev');
  }
  public set relationVnsRsNodeToCloudLDev(value: string) {
    this._relationVnsRsNodeToCloudLDev = value;
  }
  public resetRelationVnsRsNodeToCloudLDev() {
    this._relationVnsRsNodeToCloudLDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsNodeToCloudLDevInput() {
    return this._relationVnsRsNodeToCloudLDev;
  }

  // relation_vns_rs_node_to_l_dev - computed: false, optional: true, required: false
  private _relationVnsRsNodeToLDev?: string; 
  public get relationVnsRsNodeToLDev() {
    return this.getStringAttribute('relation_vns_rs_node_to_l_dev');
  }
  public set relationVnsRsNodeToLDev(value: string) {
    this._relationVnsRsNodeToLDev = value;
  }
  public resetRelationVnsRsNodeToLDev() {
    this._relationVnsRsNodeToLDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsNodeToLDevInput() {
    return this._relationVnsRsNodeToLDev;
  }

  // relation_vns_rs_node_to_m_func - computed: false, optional: true, required: false
  private _relationVnsRsNodeToMFunc?: string; 
  public get relationVnsRsNodeToMFunc() {
    return this.getStringAttribute('relation_vns_rs_node_to_m_func');
  }
  public set relationVnsRsNodeToMFunc(value: string) {
    this._relationVnsRsNodeToMFunc = value;
  }
  public resetRelationVnsRsNodeToMFunc() {
    this._relationVnsRsNodeToMFunc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsNodeToMFuncInput() {
    return this._relationVnsRsNodeToMFunc;
  }

  // routing_mode - computed: true, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
  }

  // sequence_number - computed: true, optional: true, required: false
  private _sequenceNumber?: string; 
  public get sequenceNumber() {
    return this.getStringAttribute('sequence_number');
  }
  public set sequenceNumber(value: string) {
    this._sequenceNumber = value;
  }
  public resetSequenceNumber() {
    this._sequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // share_encap - computed: true, optional: true, required: false
  private _shareEncap?: string; 
  public get shareEncap() {
    return this.getStringAttribute('share_encap');
  }
  public set shareEncap(value: string) {
    this._shareEncap = value;
  }
  public resetShareEncap() {
    this._shareEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareEncapInput() {
    return this._shareEncap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      func_template_type: cdktf.stringToTerraform(this._funcTemplateType),
      func_type: cdktf.stringToTerraform(this._funcType),
      id: cdktf.stringToTerraform(this._id),
      is_copy: cdktf.stringToTerraform(this._isCopy),
      l4_l7_device_interface_consumer_attachment_notification: cdktf.stringToTerraform(this._l4L7DeviceInterfaceConsumerAttachmentNotification),
      l4_l7_device_interface_consumer_connector_type: cdktf.stringToTerraform(this._l4L7DeviceInterfaceConsumerConnectorType),
      l4_l7_device_interface_consumer_name: cdktf.stringToTerraform(this._l4L7DeviceInterfaceConsumerName),
      l4_l7_device_interface_provider_attachment_notification: cdktf.stringToTerraform(this._l4L7DeviceInterfaceProviderAttachmentNotification),
      l4_l7_device_interface_provider_connector_type: cdktf.stringToTerraform(this._l4L7DeviceInterfaceProviderConnectorType),
      l4_l7_device_interface_provider_name: cdktf.stringToTerraform(this._l4L7DeviceInterfaceProviderName),
      l4_l7_service_graph_template_dn: cdktf.stringToTerraform(this._l4L7ServiceGraphTemplateDn),
      managed: cdktf.stringToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_vns_rs_default_scope_to_term: cdktf.stringToTerraform(this._relationVnsRsDefaultScopeToTerm),
      relation_vns_rs_node_to_abs_func_prof: cdktf.stringToTerraform(this._relationVnsRsNodeToAbsFuncProf),
      relation_vns_rs_node_to_cloud_l_dev: cdktf.stringToTerraform(this._relationVnsRsNodeToCloudLDev),
      relation_vns_rs_node_to_l_dev: cdktf.stringToTerraform(this._relationVnsRsNodeToLDev),
      relation_vns_rs_node_to_m_func: cdktf.stringToTerraform(this._relationVnsRsNodeToMFunc),
      routing_mode: cdktf.stringToTerraform(this._routingMode),
      sequence_number: cdktf.stringToTerraform(this._sequenceNumber),
      share_encap: cdktf.stringToTerraform(this._shareEncap),
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
      func_template_type: {
        value: cdktf.stringToHclTerraform(this._funcTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      func_type: {
        value: cdktf.stringToHclTerraform(this._funcType),
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
      is_copy: {
        value: cdktf.stringToHclTerraform(this._isCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_l7_device_interface_consumer_attachment_notification: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceInterfaceConsumerAttachmentNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_l7_device_interface_consumer_connector_type: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceInterfaceConsumerConnectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_l7_device_interface_consumer_name: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceInterfaceConsumerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_l7_device_interface_provider_attachment_notification: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceInterfaceProviderAttachmentNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_l7_device_interface_provider_connector_type: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceInterfaceProviderConnectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_l7_device_interface_provider_name: {
        value: cdktf.stringToHclTerraform(this._l4L7DeviceInterfaceProviderName),
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
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_default_scope_to_term: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsDefaultScopeToTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_node_to_abs_func_prof: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsNodeToAbsFuncProf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_node_to_cloud_l_dev: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsNodeToCloudLDev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_node_to_l_dev: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsNodeToLDev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_node_to_m_func: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsNodeToMFunc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_mode: {
        value: cdktf.stringToHclTerraform(this._routingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number: {
        value: cdktf.stringToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_encap: {
        value: cdktf.stringToHclTerraform(this._shareEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
