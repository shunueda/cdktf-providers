// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpOidcCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * the JSON content of the JWT configuration file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials#credential_configuration_file_content GcpOidcCredentials#credential_configuration_file_content}
  */
  readonly credentialConfigurationFileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials#id GcpOidcCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name for the oidc credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials#name GcpOidcCredentials#name}
  */
  readonly name: string;
  /**
  * the env0 project id to associate the credentials with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials#project_id GcpOidcCredentials#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials env0_gcp_oidc_credentials}
*/
export class GcpOidcCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_gcp_oidc_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpOidcCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpOidcCredentials to import
  * @param importFromId The id of the existing GcpOidcCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpOidcCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_gcp_oidc_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/gcp_oidc_credentials env0_gcp_oidc_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpOidcCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: GcpOidcCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_gcp_oidc_credentials',
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
    this._credentialConfigurationFileContent = config.credentialConfigurationFileContent;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_configuration_file_content - computed: false, optional: false, required: true
  private _credentialConfigurationFileContent?: string; 
  public get credentialConfigurationFileContent() {
    return this.getStringAttribute('credential_configuration_file_content');
  }
  public set credentialConfigurationFileContent(value: string) {
    this._credentialConfigurationFileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialConfigurationFileContentInput() {
    return this._credentialConfigurationFileContent;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_configuration_file_content: cdktf.stringToTerraform(this._credentialConfigurationFileContent),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_configuration_file_content: {
        value: cdktf.stringToHclTerraform(this._credentialConfigurationFileContent),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
