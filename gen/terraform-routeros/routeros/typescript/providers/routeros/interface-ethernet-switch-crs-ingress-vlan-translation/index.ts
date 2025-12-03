// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchCrsIngressVlanTranslationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#___path___ InterfaceEthernetSwitchCrsIngressVlanTranslation#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#comment InterfaceEthernetSwitchCrsIngressVlanTranslation#comment}
  */
  readonly comment?: string;
  /**
  * Matching DEI of the customer tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#customer_dei InterfaceEthernetSwitchCrsIngressVlanTranslation#customer_dei}
  */
  readonly customerDei?: string;
  /**
  * Matching PCP of the customer tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#customer_pcp InterfaceEthernetSwitchCrsIngressVlanTranslation#customer_pcp}
  */
  readonly customerPcp?: string;
  /**
  * Matching the VLAN ID of the customer tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#customer_vid InterfaceEthernetSwitchCrsIngressVlanTranslation#customer_vid}
  */
  readonly customerVid?: string;
  /**
  * Type of frames with customer tag for which VLAN translation rule is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#customer_vlan_format InterfaceEthernetSwitchCrsIngressVlanTranslation#customer_vlan_format}
  */
  readonly customerVlanFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#disabled InterfaceEthernetSwitchCrsIngressVlanTranslation#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#id InterfaceEthernetSwitchCrsIngressVlanTranslation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The new customer VLAN ID replaces the matching customer VLAN ID. If set to 4095 and ingress VLAN translation is used, then traffic is dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#new_customer_vid InterfaceEthernetSwitchCrsIngressVlanTranslation#new_customer_vid}
  */
  readonly newCustomerVid?: string;
  /**
  * The new service VLAN ID replaces the matching service VLAN ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#new_service_vid InterfaceEthernetSwitchCrsIngressVlanTranslation#new_service_vid}
  */
  readonly newServiceVid?: string;
  /**
  * Enables or disables PCP propagation.If the port type is Edge, the customer PCP is copied from the service PCP.If the port type is Network, the service PCP is copied from the customer PCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#pcp_propagation InterfaceEthernetSwitchCrsIngressVlanTranslation#pcp_propagation}
  */
  readonly pcpPropagation?: string;
  /**
  * Matching switch ports for VLAN translation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#ports InterfaceEthernetSwitchCrsIngressVlanTranslation#ports}
  */
  readonly ports?: string[];
  /**
  * Matching Ethernet protocol (only for Ingress VLAN Translation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#protocol InterfaceEthernetSwitchCrsIngressVlanTranslation#protocol}
  */
  readonly protocol?: string;
  /**
  * Enables or disables source MAC learning after VLAN translation (only for Ingress VLAN Translation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#sa_learning InterfaceEthernetSwitchCrsIngressVlanTranslation#sa_learning}
  */
  readonly saLearning?: string;
  /**
  * Matching DEI of the service tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#service_dei InterfaceEthernetSwitchCrsIngressVlanTranslation#service_dei}
  */
  readonly serviceDei?: string;
  /**
  * Matching PCP of the service tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#service_pcp InterfaceEthernetSwitchCrsIngressVlanTranslation#service_pcp}
  */
  readonly servicePcp?: string;
  /**
  * Matching VLAN ID of the service tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#service_vid InterfaceEthernetSwitchCrsIngressVlanTranslation#service_vid}
  */
  readonly serviceVid?: string;
  /**
  * Type of frames with service tag for which VLAN translation rule is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#service_vlan_format InterfaceEthernetSwitchCrsIngressVlanTranslation#service_vlan_format}
  */
  readonly serviceVlanFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#swap_vids InterfaceEthernetSwitchCrsIngressVlanTranslation#swap_vids}
  */
  readonly swapVids?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation routeros_interface_ethernet_switch_crs_ingress_vlan_translation}
*/
export class InterfaceEthernetSwitchCrsIngressVlanTranslation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_crs_ingress_vlan_translation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchCrsIngressVlanTranslation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchCrsIngressVlanTranslation to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchCrsIngressVlanTranslation that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchCrsIngressVlanTranslation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_crs_ingress_vlan_translation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_crs_ingress_vlan_translation routeros_interface_ethernet_switch_crs_ingress_vlan_translation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchCrsIngressVlanTranslationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchCrsIngressVlanTranslationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_crs_ingress_vlan_translation',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._comment = config.comment;
    this._customerDei = config.customerDei;
    this._customerPcp = config.customerPcp;
    this._customerVid = config.customerVid;
    this._customerVlanFormat = config.customerVlanFormat;
    this._disabled = config.disabled;
    this._id = config.id;
    this._newCustomerVid = config.newCustomerVid;
    this._newServiceVid = config.newServiceVid;
    this._pcpPropagation = config.pcpPropagation;
    this._ports = config.ports;
    this._protocol = config.protocol;
    this._saLearning = config.saLearning;
    this._serviceDei = config.serviceDei;
    this._servicePcp = config.servicePcp;
    this._serviceVid = config.serviceVid;
    this._serviceVlanFormat = config.serviceVlanFormat;
    this._swapVids = config.swapVids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // customer_dei - computed: false, optional: true, required: false
  private _customerDei?: string; 
  public get customerDei() {
    return this.getStringAttribute('customer_dei');
  }
  public set customerDei(value: string) {
    this._customerDei = value;
  }
  public resetCustomerDei() {
    this._customerDei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerDeiInput() {
    return this._customerDei;
  }

  // customer_pcp - computed: false, optional: true, required: false
  private _customerPcp?: string; 
  public get customerPcp() {
    return this.getStringAttribute('customer_pcp');
  }
  public set customerPcp(value: string) {
    this._customerPcp = value;
  }
  public resetCustomerPcp() {
    this._customerPcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerPcpInput() {
    return this._customerPcp;
  }

  // customer_vid - computed: false, optional: true, required: false
  private _customerVid?: string; 
  public get customerVid() {
    return this.getStringAttribute('customer_vid');
  }
  public set customerVid(value: string) {
    this._customerVid = value;
  }
  public resetCustomerVid() {
    this._customerVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerVidInput() {
    return this._customerVid;
  }

  // customer_vlan_format - computed: false, optional: true, required: false
  private _customerVlanFormat?: string; 
  public get customerVlanFormat() {
    return this.getStringAttribute('customer_vlan_format');
  }
  public set customerVlanFormat(value: string) {
    this._customerVlanFormat = value;
  }
  public resetCustomerVlanFormat() {
    this._customerVlanFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerVlanFormatInput() {
    return this._customerVlanFormat;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // new_customer_vid - computed: false, optional: true, required: false
  private _newCustomerVid?: string; 
  public get newCustomerVid() {
    return this.getStringAttribute('new_customer_vid');
  }
  public set newCustomerVid(value: string) {
    this._newCustomerVid = value;
  }
  public resetNewCustomerVid() {
    this._newCustomerVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newCustomerVidInput() {
    return this._newCustomerVid;
  }

  // new_service_vid - computed: false, optional: true, required: false
  private _newServiceVid?: string; 
  public get newServiceVid() {
    return this.getStringAttribute('new_service_vid');
  }
  public set newServiceVid(value: string) {
    this._newServiceVid = value;
  }
  public resetNewServiceVid() {
    this._newServiceVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newServiceVidInput() {
    return this._newServiceVid;
  }

  // pcp_propagation - computed: false, optional: true, required: false
  private _pcpPropagation?: string; 
  public get pcpPropagation() {
    return this.getStringAttribute('pcp_propagation');
  }
  public set pcpPropagation(value: string) {
    this._pcpPropagation = value;
  }
  public resetPcpPropagation() {
    this._pcpPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpPropagationInput() {
    return this._pcpPropagation;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sa_learning - computed: false, optional: true, required: false
  private _saLearning?: string; 
  public get saLearning() {
    return this.getStringAttribute('sa_learning');
  }
  public set saLearning(value: string) {
    this._saLearning = value;
  }
  public resetSaLearning() {
    this._saLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLearningInput() {
    return this._saLearning;
  }

  // service_dei - computed: false, optional: true, required: false
  private _serviceDei?: string; 
  public get serviceDei() {
    return this.getStringAttribute('service_dei');
  }
  public set serviceDei(value: string) {
    this._serviceDei = value;
  }
  public resetServiceDei() {
    this._serviceDei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDeiInput() {
    return this._serviceDei;
  }

  // service_pcp - computed: false, optional: true, required: false
  private _servicePcp?: string; 
  public get servicePcp() {
    return this.getStringAttribute('service_pcp');
  }
  public set servicePcp(value: string) {
    this._servicePcp = value;
  }
  public resetServicePcp() {
    this._servicePcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePcpInput() {
    return this._servicePcp;
  }

  // service_vid - computed: false, optional: true, required: false
  private _serviceVid?: string; 
  public get serviceVid() {
    return this.getStringAttribute('service_vid');
  }
  public set serviceVid(value: string) {
    this._serviceVid = value;
  }
  public resetServiceVid() {
    this._serviceVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVidInput() {
    return this._serviceVid;
  }

  // service_vlan_format - computed: false, optional: true, required: false
  private _serviceVlanFormat?: string; 
  public get serviceVlanFormat() {
    return this.getStringAttribute('service_vlan_format');
  }
  public set serviceVlanFormat(value: string) {
    this._serviceVlanFormat = value;
  }
  public resetServiceVlanFormat() {
    this._serviceVlanFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVlanFormatInput() {
    return this._serviceVlanFormat;
  }

  // swap_vids - computed: false, optional: true, required: false
  private _swapVids?: string; 
  public get swapVids() {
    return this.getStringAttribute('swap_vids');
  }
  public set swapVids(value: string) {
    this._swapVids = value;
  }
  public resetSwapVids() {
    this._swapVids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapVidsInput() {
    return this._swapVids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      comment: cdktf.stringToTerraform(this._comment),
      customer_dei: cdktf.stringToTerraform(this._customerDei),
      customer_pcp: cdktf.stringToTerraform(this._customerPcp),
      customer_vid: cdktf.stringToTerraform(this._customerVid),
      customer_vlan_format: cdktf.stringToTerraform(this._customerVlanFormat),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      new_customer_vid: cdktf.stringToTerraform(this._newCustomerVid),
      new_service_vid: cdktf.stringToTerraform(this._newServiceVid),
      pcp_propagation: cdktf.stringToTerraform(this._pcpPropagation),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      protocol: cdktf.stringToTerraform(this._protocol),
      sa_learning: cdktf.stringToTerraform(this._saLearning),
      service_dei: cdktf.stringToTerraform(this._serviceDei),
      service_pcp: cdktf.stringToTerraform(this._servicePcp),
      service_vid: cdktf.stringToTerraform(this._serviceVid),
      service_vlan_format: cdktf.stringToTerraform(this._serviceVlanFormat),
      swap_vids: cdktf.stringToTerraform(this._swapVids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_dei: {
        value: cdktf.stringToHclTerraform(this._customerDei),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_pcp: {
        value: cdktf.stringToHclTerraform(this._customerPcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_vid: {
        value: cdktf.stringToHclTerraform(this._customerVid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_vlan_format: {
        value: cdktf.stringToHclTerraform(this._customerVlanFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_customer_vid: {
        value: cdktf.stringToHclTerraform(this._newCustomerVid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_service_vid: {
        value: cdktf.stringToHclTerraform(this._newServiceVid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcp_propagation: {
        value: cdktf.stringToHclTerraform(this._pcpPropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sa_learning: {
        value: cdktf.stringToHclTerraform(this._saLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_dei: {
        value: cdktf.stringToHclTerraform(this._serviceDei),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_pcp: {
        value: cdktf.stringToHclTerraform(this._servicePcp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_vid: {
        value: cdktf.stringToHclTerraform(this._serviceVid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_vlan_format: {
        value: cdktf.stringToHclTerraform(this._serviceVlanFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      swap_vids: {
        value: cdktf.stringToHclTerraform(this._swapVids),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
