// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application you wish to create the API key under. Note that the application's access, determines the capabilities of the API keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key#application_id PlatformApiKey#application_id}
  */
  readonly applicationId: string;
  /**
  * Expiration date formatted in RFC3339, Unix, or UnixNano
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key#expiry_date PlatformApiKey#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * API Key Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key#name PlatformApiKey#name}
  */
  readonly name: string;
  /**
  * Set to `true` for API keys that should never expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key#no_expiry PlatformApiKey#no_expiry}
  */
  readonly noExpiry?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key kaleido_platform_api_key}
*/
export class PlatformApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformApiKey to import
  * @param importFromId The id of the existing PlatformApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_api_key kaleido_platform_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_api_key',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2'
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
    this._expiryDate = config.expiryDate;
    this._name = config.name;
    this._noExpiry = config.noExpiry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // expiry_date - computed: false, optional: true, required: false
  private _expiryDate?: string; 
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }
  public set expiryDate(value: string) {
    this._expiryDate = value;
  }
  public resetExpiryDate() {
    this._expiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateInput() {
    return this._expiryDate;
  }

  // formatted_expiry_date - computed: true, optional: false, required: false
  public get formattedExpiryDate() {
    return this.getStringAttribute('formatted_expiry_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_expiry - computed: false, optional: true, required: false
  private _noExpiry?: boolean | cdktf.IResolvable; 
  public get noExpiry() {
    return this.getBooleanAttribute('no_expiry');
  }
  public set noExpiry(value: boolean | cdktf.IResolvable) {
    this._noExpiry = value;
  }
  public resetNoExpiry() {
    this._noExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noExpiryInput() {
    return this._noExpiry;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      name: cdktf.stringToTerraform(this._name),
      no_expiry: cdktf.booleanToTerraform(this._noExpiry),
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
      expiry_date: {
        value: cdktf.stringToHclTerraform(this._expiryDate),
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
      no_expiry: {
        value: cdktf.booleanToHclTerraform(this._noExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
