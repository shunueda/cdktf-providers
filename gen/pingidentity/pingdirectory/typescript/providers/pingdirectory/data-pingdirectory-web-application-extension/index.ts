// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/web_application_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryWebApplicationExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/web_application_extension#name DataPingdirectoryWebApplicationExtension#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/web_application_extension pingdirectory_web_application_extension}
*/
export class DataPingdirectoryWebApplicationExtension extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_web_application_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryWebApplicationExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryWebApplicationExtension to import
  * @param importFromId The id of the existing DataPingdirectoryWebApplicationExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/web_application_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryWebApplicationExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_web_application_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/web_application_extension pingdirectory_web_application_extension} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryWebApplicationExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryWebApplicationExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_web_application_extension',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_title - computed: true, optional: false, required: false
  public get applicationTitle() {
    return this.getStringAttribute('application_title');
  }

  // base_context_path - computed: true, optional: false, required: false
  public get baseContextPath() {
    return this.getStringAttribute('base_context_path');
  }

  // complexity - computed: true, optional: false, required: false
  public get complexity() {
    return this.getStringAttribute('complexity');
  }

  // deployment_descriptor_file - computed: true, optional: false, required: false
  public get deploymentDescriptorFile() {
    return this.getStringAttribute('deployment_descriptor_file');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_root_directory - computed: true, optional: false, required: false
  public get documentRootDirectory() {
    return this.getStringAttribute('document_root_directory');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_parameter - computed: true, optional: false, required: false
  public get initParameter() {
    return cdktf.Fn.tolist(this.getListAttribute('init_parameter'));
  }

  // ldap_server - computed: true, optional: false, required: false
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }

  // log_file - computed: true, optional: false, required: false
  public get logFile() {
    return this.getStringAttribute('log_file');
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

  // oidc_client_id - computed: true, optional: false, required: false
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }

  // oidc_client_secret - computed: true, optional: false, required: false
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }

  // oidc_client_secret_passphrase_provider - computed: true, optional: false, required: false
  public get oidcClientSecretPassphraseProvider() {
    return this.getStringAttribute('oidc_client_secret_passphrase_provider');
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // oidc_strict_hostname_verification - computed: true, optional: false, required: false
  public get oidcStrictHostnameVerification() {
    return this.getBooleanAttribute('oidc_strict_hostname_verification');
  }

  // oidc_trust_all - computed: true, optional: false, required: false
  public get oidcTrustAll() {
    return this.getBooleanAttribute('oidc_trust_all');
  }

  // oidc_trust_store_file - computed: true, optional: false, required: false
  public get oidcTrustStoreFile() {
    return this.getStringAttribute('oidc_trust_store_file');
  }

  // oidc_trust_store_pin_passphrase_provider - computed: true, optional: false, required: false
  public get oidcTrustStorePinPassphraseProvider() {
    return this.getStringAttribute('oidc_trust_store_pin_passphrase_provider');
  }

  // oidc_trust_store_type - computed: true, optional: false, required: false
  public get oidcTrustStoreType() {
    return this.getStringAttribute('oidc_trust_store_type');
  }

  // sso_enabled - computed: true, optional: false, required: false
  public get ssoEnabled() {
    return this.getBooleanAttribute('sso_enabled');
  }

  // temporary_directory - computed: true, optional: false, required: false
  public get temporaryDirectory() {
    return this.getStringAttribute('temporary_directory');
  }

  // trust_store_file - computed: true, optional: false, required: false
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }

  // trust_store_pin_passphrase_provider - computed: true, optional: false, required: false
  public get trustStorePinPassphraseProvider() {
    return this.getStringAttribute('trust_store_pin_passphrase_provider');
  }

  // trust_store_type - computed: true, optional: false, required: false
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // war_file - computed: true, optional: false, required: false
  public get warFile() {
    return this.getStringAttribute('war_file');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
