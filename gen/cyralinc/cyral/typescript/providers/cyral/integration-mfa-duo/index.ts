// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMfaDuoConfig extends cdktf.TerraformMetaArguments {
  /**
  * API hostname obtained from Duo management console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo#api_hostname IntegrationMfaDuo#api_hostname}
  */
  readonly apiHostname: string;
  /**
  * Integration key name obtained from Duo management console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo#integration_key IntegrationMfaDuo#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Integration display name that will be used in the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo#name IntegrationMfaDuo#name}
  */
  readonly name: string;
  /**
  * Secret key obtained from Duo management console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo#secret_key IntegrationMfaDuo#secret_key}
  */
  readonly secretKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo cyral_integration_mfa_duo}
*/
export class IntegrationMfaDuo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_mfa_duo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMfaDuo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMfaDuo to import
  * @param importFromId The id of the existing IntegrationMfaDuo that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMfaDuo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_mfa_duo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_mfa_duo cyral_integration_mfa_duo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMfaDuoConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationMfaDuoConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_mfa_duo',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiHostname = config.apiHostname;
    this._integrationKey = config.integrationKey;
    this._name = config.name;
    this._secretKey = config.secretKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_hostname - computed: false, optional: false, required: true
  private _apiHostname?: string; 
  public get apiHostname() {
    return this.getStringAttribute('api_hostname');
  }
  public set apiHostname(value: string) {
    this._apiHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostnameInput() {
    return this._apiHostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
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

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_hostname: cdktf.stringToTerraform(this._apiHostname),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      name: cdktf.stringToTerraform(this._name),
      secret_key: cdktf.stringToTerraform(this._secretKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_hostname: {
        value: cdktf.stringToHclTerraform(this._apiHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
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
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
