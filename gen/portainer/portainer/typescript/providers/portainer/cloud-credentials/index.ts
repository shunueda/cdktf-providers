// https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider name (e.g., aws, gcp, digitalocean)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials#cloud_provider CloudCredentials#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * JSON-encoded credentials for the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials#credentials CloudCredentials#credentials}
  */
  readonly credentials: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials#id CloudCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Human-readable name of the credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials#name CloudCredentials#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials portainer_cloud_credentials}
*/
export class CloudCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_cloud_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudCredentials to import
  * @param importFromId The id of the existing CloudCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_cloud_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/cloud_credentials portainer_cloud_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_cloud_credentials',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
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
    this._credentials = config.credentials;
    this._id = config.id;
    this._name = config.name;
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

  // credentials - computed: false, optional: false, required: true
  private _credentials?: { [key: string]: string }; 
  public get credentials() {
    return this.getStringMapAttribute('credentials');
  }
  public set credentials(value: { [key: string]: string }) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      credentials: cdktf.hashMapper(cdktf.stringToTerraform)(this._credentials),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      credentials: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._credentials),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
