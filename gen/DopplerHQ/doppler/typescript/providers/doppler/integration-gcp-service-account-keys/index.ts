// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpServiceAccountKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Doppler-generated external id (placed in the service account description field)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys#external_id IntegrationGcpServiceAccountKeys#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys#id IntegrationGcpServiceAccountKeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The service account email of the account to be impersonated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys#impersonated_service_account IntegrationGcpServiceAccountKeys#impersonated_service_account}
  */
  readonly impersonatedServiceAccount: string;
  /**
  * The name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys#name IntegrationGcpServiceAccountKeys#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys doppler_integration_gcp_service_account_keys}
*/
export class IntegrationGcpServiceAccountKeys extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_integration_gcp_service_account_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcpServiceAccountKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcpServiceAccountKeys to import
  * @param importFromId The id of the existing IntegrationGcpServiceAccountKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpServiceAccountKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_integration_gcp_service_account_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_gcp_service_account_keys doppler_integration_gcp_service_account_keys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpServiceAccountKeysConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpServiceAccountKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_integration_gcp_service_account_keys',
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
    this._externalId = config.externalId;
    this._id = config.id;
    this._impersonatedServiceAccount = config.impersonatedServiceAccount;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // impersonated_service_account - computed: false, optional: false, required: true
  private _impersonatedServiceAccount?: string; 
  public get impersonatedServiceAccount() {
    return this.getStringAttribute('impersonated_service_account');
  }
  public set impersonatedServiceAccount(value: string) {
    this._impersonatedServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonatedServiceAccountInput() {
    return this._impersonatedServiceAccount;
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
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      impersonated_service_account: cdktf.stringToTerraform(this._impersonatedServiceAccount),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      impersonated_service_account: {
        value: cdktf.stringToHclTerraform(this._impersonatedServiceAccount),
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
