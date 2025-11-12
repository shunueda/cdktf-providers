// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#client_email_address SourceGcp#client_email_address}
  */
  readonly clientEmailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#client_private_key SourceGcp#client_private_key}
  */
  readonly clientPrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#id SourceGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#project_id SourceGcp#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#vpc_network SourceGcp#vpc_network}
  */
  readonly vpcNetwork: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#vpc_subnetwork SourceGcp#vpc_subnetwork}
  */
  readonly vpcSubnetwork: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp cohesity_source_gcp}
*/
export class SourceGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_source_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceGcp to import
  * @param importFromId The id of the existing SourceGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_source_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_gcp cohesity_source_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceGcpConfig
  */
  public constructor(scope: Construct, id: string, config: SourceGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_source_gcp',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3',
        providerVersionConstraint: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientEmailAddress = config.clientEmailAddress;
    this._clientPrivateKey = config.clientPrivateKey;
    this._id = config.id;
    this._projectId = config.projectId;
    this._vpcNetwork = config.vpcNetwork;
    this._vpcSubnetwork = config.vpcSubnetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_email_address - computed: false, optional: false, required: true
  private _clientEmailAddress?: string; 
  public get clientEmailAddress() {
    return this.getStringAttribute('client_email_address');
  }
  public set clientEmailAddress(value: string) {
    this._clientEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailAddressInput() {
    return this._clientEmailAddress;
  }

  // client_private_key - computed: false, optional: false, required: true
  private _clientPrivateKey?: string; 
  public get clientPrivateKey() {
    return this.getStringAttribute('client_private_key');
  }
  public set clientPrivateKey(value: string) {
    this._clientPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // vpc_network - computed: false, optional: false, required: true
  private _vpcNetwork?: string; 
  public get vpcNetwork() {
    return this.getStringAttribute('vpc_network');
  }
  public set vpcNetwork(value: string) {
    this._vpcNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkInput() {
    return this._vpcNetwork;
  }

  // vpc_subnetwork - computed: false, optional: false, required: true
  private _vpcSubnetwork?: string; 
  public get vpcSubnetwork() {
    return this.getStringAttribute('vpc_subnetwork');
  }
  public set vpcSubnetwork(value: string) {
    this._vpcSubnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetworkInput() {
    return this._vpcSubnetwork;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_email_address: cdktf.stringToTerraform(this._clientEmailAddress),
      client_private_key: cdktf.stringToTerraform(this._clientPrivateKey),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      vpc_network: cdktf.stringToTerraform(this._vpcNetwork),
      vpc_subnetwork: cdktf.stringToTerraform(this._vpcSubnetwork),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_email_address: {
        value: cdktf.stringToHclTerraform(this._clientEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_private_key: {
        value: cdktf.stringToHclTerraform(this._clientPrivateKey),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_network: {
        value: cdktf.stringToHclTerraform(this._vpcNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_subnetwork: {
        value: cdktf.stringToHclTerraform(this._vpcSubnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
