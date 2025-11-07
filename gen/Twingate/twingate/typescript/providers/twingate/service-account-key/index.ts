// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how many days until a Service Account Key expires. This should be an integer between 0 and 365 representing the number of days until the Service Account Key will expire. Defaults to 0, meaning the key will never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key#expiration_time ServiceAccountKey#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * The name of the Service Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key#name ServiceAccountKey#name}
  */
  readonly name?: string;
  /**
  * The id of the Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key#service_account_id ServiceAccountKey#service_account_id}
  */
  readonly serviceAccountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key twingate_service_account_key}
*/
export class ServiceAccountKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_service_account_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccountKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccountKey to import
  * @param importFromId The id of the existing ServiceAccountKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccountKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_service_account_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/service_account_key twingate_service_account_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expirationTime = config.expirationTime;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: number; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
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

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiration_time: {
        value: cdktf.numberToHclTerraform(this._expirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
