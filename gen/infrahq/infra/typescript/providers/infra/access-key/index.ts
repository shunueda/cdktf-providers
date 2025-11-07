// https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The date-time when the access key will expire. Format is a RFC3339 timestamp, e.g. "2006-01-02T15:04:05Z07:00." Cannot be used with `expires_in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key#expires_at AccessKey#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The total amount of time before the access key expires. Format is a duration string, a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s" or "2h45m". Valid time units are "s", "m", "h". Default is 8766h0m0s. Cannot be used with `expires_at`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key#expires_in AccessKey#expires_in}
  */
  readonly expiresIn?: string;
  /**
  * The amount of time before the access key expires if left unused. If the access key is used before it expires, it will be renewed for the same duration. Format is a duration string, a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s" or "2h45m". Valid time units are "s", "m", "h". If value is greater than or equal to the remaining lifetime of the access key, the access key will not be renewed. Default is 72h0m0s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key#inactivity_timeout AccessKey#inactivity_timeout}
  */
  readonly inactivityTimeout?: string;
  /**
  * The access key's name. If omitted, a name will be automatically generated. Identity provider names may include letters (uppercase and lowercase), numbers, underscores `_`, hyphens `-`, and periods `.`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key#name AccessKey#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key infra_access_key}
*/
export class AccessKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infra_access_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessKey to import
  * @param importFromId The id of the existing AccessKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infra_access_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs/resources/access_key infra_access_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccessKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infra_access_key',
      terraformGeneratorMetadata: {
        providerName: 'infra',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expiresAt = config.expiresAt;
    this._expiresIn = config.expiresIn;
    this._inactivityTimeout = config.inactivityTimeout;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // expires_in - computed: true, optional: true, required: false
  private _expiresIn?: string; 
  public get expiresIn() {
    return this.getStringAttribute('expires_in');
  }
  public set expiresIn(value: string) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactivity_timeout - computed: true, optional: true, required: false
  private _inactivityTimeout?: string; 
  public get inactivityTimeout() {
    return this.getStringAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: string) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // name - computed: true, optional: true, required: false
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      expires_in: cdktf.stringToTerraform(this._expiresIn),
      inactivity_timeout: cdktf.stringToTerraform(this._inactivityTimeout),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_in: {
        value: cdktf.stringToHclTerraform(this._expiresIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactivity_timeout: {
        value: cdktf.stringToHclTerraform(this._inactivityTimeout),
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
