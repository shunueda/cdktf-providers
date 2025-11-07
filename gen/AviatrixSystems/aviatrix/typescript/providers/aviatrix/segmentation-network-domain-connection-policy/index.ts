// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentationNetworkDomainConnectionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of network domain that will be connected to domain 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy#domain_name_1 SegmentationNetworkDomainConnectionPolicy#domain_name_1}
  */
  readonly domainName1: string;
  /**
  * Name of network domain that will be connected to domain 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy#domain_name_2 SegmentationNetworkDomainConnectionPolicy#domain_name_2}
  */
  readonly domainName2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy#id SegmentationNetworkDomainConnectionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy aviatrix_segmentation_network_domain_connection_policy}
*/
export class SegmentationNetworkDomainConnectionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_segmentation_network_domain_connection_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentationNetworkDomainConnectionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentationNetworkDomainConnectionPolicy to import
  * @param importFromId The id of the existing SegmentationNetworkDomainConnectionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentationNetworkDomainConnectionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_segmentation_network_domain_connection_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/segmentation_network_domain_connection_policy aviatrix_segmentation_network_domain_connection_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentationNetworkDomainConnectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentationNetworkDomainConnectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_segmentation_network_domain_connection_policy',
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
    this._domainName1 = config.domainName1;
    this._domainName2 = config.domainName2;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name_1 - computed: false, optional: false, required: true
  private _domainName1?: string; 
  public get domainName1() {
    return this.getStringAttribute('domain_name_1');
  }
  public set domainName1(value: string) {
    this._domainName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainName1Input() {
    return this._domainName1;
  }

  // domain_name_2 - computed: false, optional: false, required: true
  private _domainName2?: string; 
  public get domainName2() {
    return this.getStringAttribute('domain_name_2');
  }
  public set domainName2(value: string) {
    this._domainName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainName2Input() {
    return this._domainName2;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name_1: cdktf.stringToTerraform(this._domainName1),
      domain_name_2: cdktf.stringToTerraform(this._domainName2),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name_1: {
        value: cdktf.stringToHclTerraform(this._domainName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_2: {
        value: cdktf.stringToHclTerraform(this._domainName2),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
