// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/cloud_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0CloudCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * the type of cloud credential to filter by (allowed values: AWS_ASSUMED_ROLE, AWS_ASSUMED_ROLE_FOR_DEPLOYMENT, AWS_ACCESS_KEYS_FOR_DEPLOYMENT, GCP_CREDENTIALS, GCP_SERVICE_ACCOUNT_FOR_DEPLOYMENT, AZURE_CREDENTIALS, AZURE_SERVICE_PRINCIPAL_FOR_DEPLOYMENT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/cloud_credentials#credential_type DataEnv0CloudCredentials#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/cloud_credentials#id DataEnv0CloudCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/cloud_credentials env0_cloud_credentials}
*/
export class DataEnv0CloudCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_cloud_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0CloudCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0CloudCredentials to import
  * @param importFromId The id of the existing DataEnv0CloudCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/cloud_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0CloudCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_cloud_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/cloud_credentials env0_cloud_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0CloudCredentialsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0CloudCredentialsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_cloud_credentials',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialType = config.credentialType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_type - computed: false, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
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

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_type: cdktf.stringToTerraform(this._credentialType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_type: {
        value: cdktf.stringToHclTerraform(this._credentialType),
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
