// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpSecretManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IAM Service Account JSON key. See https://docs.doppler.com/docs/gcp-secret-manager for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager#gcp_key IntegrationGcpSecretManager#gcp_key}
  */
  readonly gcpKey: string;
  /**
  * The prefix added to any secret created by this integration in GCP. See https://docs.doppler.com/docs/gcp-secret-manager for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager#gcp_secret_prefix IntegrationGcpSecretManager#gcp_secret_prefix}
  */
  readonly gcpSecretPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager#id IntegrationGcpSecretManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager#name IntegrationGcpSecretManager#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager doppler_integration_gcp_secret_manager}
*/
export class IntegrationGcpSecretManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_integration_gcp_secret_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcpSecretManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcpSecretManager to import
  * @param importFromId The id of the existing IntegrationGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpSecretManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_integration_gcp_secret_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_secret_manager doppler_integration_gcp_secret_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpSecretManagerConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpSecretManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_integration_gcp_secret_manager',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gcpKey = config.gcpKey;
    this._gcpSecretPrefix = config.gcpSecretPrefix;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gcp_key - computed: false, optional: false, required: true
  private _gcpKey?: string; 
  public get gcpKey() {
    return this.getStringAttribute('gcp_key');
  }
  public set gcpKey(value: string) {
    this._gcpKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyInput() {
    return this._gcpKey;
  }

  // gcp_secret_prefix - computed: false, optional: false, required: true
  private _gcpSecretPrefix?: string; 
  public get gcpSecretPrefix() {
    return this.getStringAttribute('gcp_secret_prefix');
  }
  public set gcpSecretPrefix(value: string) {
    this._gcpSecretPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretPrefixInput() {
    return this._gcpSecretPrefix;
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
      gcp_key: cdktf.stringToTerraform(this._gcpKey),
      gcp_secret_prefix: cdktf.stringToTerraform(this._gcpSecretPrefix),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gcp_key: {
        value: cdktf.stringToHclTerraform(this._gcpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_secret_prefix: {
        value: cdktf.stringToHclTerraform(this._gcpSecretPrefix),
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
