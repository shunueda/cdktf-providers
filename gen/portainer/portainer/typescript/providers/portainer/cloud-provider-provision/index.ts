// https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProviderProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider (civo, digitalocean, linode, amazon, azure, gke)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision#cloud_provider CloudProviderProvision#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision#id CloudProviderProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Raw payload with provisioning parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision#payload CloudProviderProvision#payload}
  */
  readonly payload: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision portainer_cloud_provider_provision}
*/
export class CloudProviderProvision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_cloud_provider_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProviderProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProviderProvision to import
  * @param importFromId The id of the existing CloudProviderProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProviderProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_cloud_provider_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/cloud_provider_provision portainer_cloud_provider_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProviderProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProviderProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_cloud_provider_provision',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.0',
        providerVersionConstraint: '1.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._id = config.id;
    this._payload = config.payload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // payload - computed: false, optional: false, required: true
  private _payload?: { [key: string]: string }; 
  public get payload() {
    return this.getStringMapAttribute('payload');
  }
  public set payload(value: { [key: string]: string }) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      id: cdktf.stringToTerraform(this._id),
      payload: cdktf.hashMapper(cdktf.stringToTerraform)(this._payload),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
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
      payload: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._payload),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
