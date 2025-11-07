// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialGcpVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * GCP Authentication Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#auth_provider CredentialGcpVpc#auth_provider}
  */
  readonly authProvider?: string;
  /**
  * GCP Authentication URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#auth_uri CredentialGcpVpc#auth_uri}
  */
  readonly authUri?: string;
  /**
  * GCP Client email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#client_email CredentialGcpVpc#client_email}
  */
  readonly clientEmail: string;
  /**
  * GCP Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#client_id CredentialGcpVpc#client_id}
  */
  readonly clientId: string;
  /**
  * GCP Client X509 Cert URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#client_x509_cert_url CredentialGcpVpc#client_x509_cert_url}
  */
  readonly clientX509CertUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#id CredentialGcpVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#name CredentialGcpVpc#name}
  */
  readonly name: string;
  /**
  * GCP Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#private_key CredentialGcpVpc#private_key}
  */
  readonly privateKey: string;
  /**
  * GCP Private Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#private_key_id CredentialGcpVpc#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * GCP Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#project_id CredentialGcpVpc#project_id}
  */
  readonly projectId: string;
  /**
  * Token URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#token_uri CredentialGcpVpc#token_uri}
  */
  readonly tokenUri?: string;
  /**
  * GCP Auth Type, default value is `service_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#type CredentialGcpVpc#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc alkira_credential_gcp_vpc}
*/
export class CredentialGcpVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_credential_gcp_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialGcpVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialGcpVpc to import
  * @param importFromId The id of the existing CredentialGcpVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialGcpVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_credential_gcp_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/credential_gcp_vpc alkira_credential_gcp_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialGcpVpcConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialGcpVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_credential_gcp_vpc',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProvider = config.authProvider;
    this._authUri = config.authUri;
    this._clientEmail = config.clientEmail;
    this._clientId = config.clientId;
    this._clientX509CertUrl = config.clientX509CertUrl;
    this._id = config.id;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
    this._tokenUri = config.tokenUri;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_provider - computed: false, optional: true, required: false
  private _authProvider?: string; 
  public get authProvider() {
    return this.getStringAttribute('auth_provider');
  }
  public set authProvider(value: string) {
    this._authProvider = value;
  }
  public resetAuthProvider() {
    this._authProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderInput() {
    return this._authProvider;
  }

  // auth_uri - computed: false, optional: true, required: false
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  public resetAuthUri() {
    this._authUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_x509_cert_url - computed: false, optional: false, required: true
  private _clientX509CertUrl?: string; 
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }
  public set clientX509CertUrl(value: string) {
    this._clientX509CertUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientX509CertUrlInput() {
    return this._clientX509CertUrl;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
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

  // token_uri - computed: false, optional: true, required: false
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  public resetTokenUri() {
    this._tokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_provider: cdktf.stringToTerraform(this._authProvider),
      auth_uri: cdktf.stringToTerraform(this._authUri),
      client_email: cdktf.stringToTerraform(this._clientEmail),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_x509_cert_url: cdktf.stringToTerraform(this._clientX509CertUrl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
      token_uri: cdktf.stringToTerraform(this._tokenUri),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_provider: {
        value: cdktf.stringToHclTerraform(this._authProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_uri: {
        value: cdktf.stringToHclTerraform(this._authUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_x509_cert_url: {
        value: cdktf.stringToHclTerraform(this._clientX509CertUrl),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyId),
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
      token_uri: {
        value: cdktf.stringToHclTerraform(this._tokenUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
