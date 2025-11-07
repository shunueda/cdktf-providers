// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentationNetworkDomainAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attachment name. For spoke gateways, use spoke gateway name. For VLAN, use <site-id>:<vlan-id>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association#attachment_name SegmentationNetworkDomainAssociation#attachment_name}
  */
  readonly attachmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association#id SegmentationNetworkDomainAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association#network_domain_name SegmentationNetworkDomainAssociation#network_domain_name}
  */
  readonly networkDomainName: string;
  /**
  * Transit Gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association#transit_gateway_name SegmentationNetworkDomainAssociation#transit_gateway_name}
  */
  readonly transitGatewayName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association aviatrix_segmentation_network_domain_association}
*/
export class SegmentationNetworkDomainAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_segmentation_network_domain_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentationNetworkDomainAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentationNetworkDomainAssociation to import
  * @param importFromId The id of the existing SegmentationNetworkDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentationNetworkDomainAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_segmentation_network_domain_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_association aviatrix_segmentation_network_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentationNetworkDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentationNetworkDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_segmentation_network_domain_association',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachmentName = config.attachmentName;
    this._id = config.id;
    this._networkDomainName = config.networkDomainName;
    this._transitGatewayName = config.transitGatewayName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_name - computed: false, optional: false, required: true
  private _attachmentName?: string; 
  public get attachmentName() {
    return this.getStringAttribute('attachment_name');
  }
  public set attachmentName(value: string) {
    this._attachmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentNameInput() {
    return this._attachmentName;
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

  // network_domain_name - computed: false, optional: false, required: true
  private _networkDomainName?: string; 
  public get networkDomainName() {
    return this.getStringAttribute('network_domain_name');
  }
  public set networkDomainName(value: string) {
    this._networkDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDomainNameInput() {
    return this._networkDomainName;
  }

  // transit_gateway_name - computed: true, optional: true, required: false
  private _transitGatewayName?: string; 
  public get transitGatewayName() {
    return this.getStringAttribute('transit_gateway_name');
  }
  public set transitGatewayName(value: string) {
    this._transitGatewayName = value;
  }
  public resetTransitGatewayName() {
    this._transitGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayNameInput() {
    return this._transitGatewayName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_name: cdktf.stringToTerraform(this._attachmentName),
      id: cdktf.stringToTerraform(this._id),
      network_domain_name: cdktf.stringToTerraform(this._networkDomainName),
      transit_gateway_name: cdktf.stringToTerraform(this._transitGatewayName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_name: {
        value: cdktf.stringToHclTerraform(this._attachmentName),
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
      network_domain_name: {
        value: cdktf.stringToHclTerraform(this._networkDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_name: {
        value: cdktf.stringToHclTerraform(this._transitGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
