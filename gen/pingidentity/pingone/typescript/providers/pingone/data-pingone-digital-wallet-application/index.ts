// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneDigitalWalletApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier (UUID) of the PingOne application associated with the digital wallet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application#application_id DataPingoneDigitalWalletApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * Identifier (UUID) associated with the credential digital wallet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application#digital_wallet_id DataPingoneDigitalWalletApplication#digital_wallet_id}
  */
  readonly digitalWalletId?: string;
  /**
  * PingOne environment identifier (UUID) in which the credential digital wallet app exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application#environment_id DataPingoneDigitalWalletApplication#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name associated with the digital wallet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application#name DataPingoneDigitalWalletApplication#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application pingone_digital_wallet_application}
*/
export class DataPingoneDigitalWalletApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_digital_wallet_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneDigitalWalletApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneDigitalWalletApplication to import
  * @param importFromId The id of the existing DataPingoneDigitalWalletApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneDigitalWalletApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_digital_wallet_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/digital_wallet_application pingone_digital_wallet_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneDigitalWalletApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneDigitalWalletApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_digital_wallet_application',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._digitalWalletId = config.digitalWalletId;
    this._environmentId = config.environmentId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_open_url - computed: true, optional: false, required: false
  public get appOpenUrl() {
    return this.getStringAttribute('app_open_url');
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // digital_wallet_id - computed: false, optional: true, required: false
  private _digitalWalletId?: string; 
  public get digitalWalletId() {
    return this.getStringAttribute('digital_wallet_id');
  }
  public set digitalWalletId(value: string) {
    this._digitalWalletId = value;
  }
  public resetDigitalWalletId() {
    this._digitalWalletId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalWalletIdInput() {
    return this._digitalWalletId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      digital_wallet_id: cdktf.stringToTerraform(this._digitalWalletId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_wallet_id: {
        value: cdktf.stringToHclTerraform(this._digitalWalletId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
