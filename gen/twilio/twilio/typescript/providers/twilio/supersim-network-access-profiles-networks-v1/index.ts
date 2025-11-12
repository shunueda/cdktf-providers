// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SupersimNetworkAccessProfilesNetworksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1#id SupersimNetworkAccessProfilesNetworksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1#network SupersimNetworkAccessProfilesNetworksV1#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1#network_access_profile_sid SupersimNetworkAccessProfilesNetworksV1#network_access_profile_sid}
  */
  readonly networkAccessProfileSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1 twilio_supersim_network_access_profiles_networks_v1}
*/
export class SupersimNetworkAccessProfilesNetworksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_supersim_network_access_profiles_networks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SupersimNetworkAccessProfilesNetworksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SupersimNetworkAccessProfilesNetworksV1 to import
  * @param importFromId The id of the existing SupersimNetworkAccessProfilesNetworksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SupersimNetworkAccessProfilesNetworksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_supersim_network_access_profiles_networks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/supersim_network_access_profiles_networks_v1 twilio_supersim_network_access_profiles_networks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SupersimNetworkAccessProfilesNetworksV1Config
  */
  public constructor(scope: Construct, id: string, config: SupersimNetworkAccessProfilesNetworksV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_supersim_network_access_profiles_networks_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
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
    this._network = config.network;
    this._networkAccessProfileSid = config.networkAccessProfileSid;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_access_profile_sid - computed: false, optional: false, required: true
  private _networkAccessProfileSid?: string; 
  public get networkAccessProfileSid() {
    return this.getStringAttribute('network_access_profile_sid');
  }
  public set networkAccessProfileSid(value: string) {
    this._networkAccessProfileSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessProfileSidInput() {
    return this._networkAccessProfileSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.stringToTerraform(this._network),
      network_access_profile_sid: cdktf.stringToTerraform(this._networkAccessProfileSid),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_access_profile_sid: {
        value: cdktf.stringToHclTerraform(this._networkAccessProfileSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
