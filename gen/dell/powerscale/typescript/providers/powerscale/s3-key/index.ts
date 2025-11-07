// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3KeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The expiry of the old secret key in minutes. Optional. It will be applicable only if old_secret_key is exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key#existing_key_expiry_time S3Key#existing_key_expiry_time}
  */
  readonly existingKeyExpiryTime?: number;
  /**
  * The username to create the S3 key. This resource will be recreated if the value of this field is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key#user S3Key#user}
  */
  readonly user: string;
  /**
  * The zone of the user. This resource will be recreated if the value of this field is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key#zone S3Key#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key powerscale_s3_key}
*/
export class S3Key extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_s3_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Key resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Key to import
  * @param importFromId The id of the existing S3Key that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Key to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_s3_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_key powerscale_s3_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3KeyConfig
  */
  public constructor(scope: Construct, id: string, config: S3KeyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_s3_key',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._existingKeyExpiryTime = config.existingKeyExpiryTime;
    this._user = config.user;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // existing_key_expiry_time - computed: false, optional: true, required: false
  private _existingKeyExpiryTime?: number; 
  public get existingKeyExpiryTime() {
    return this.getNumberAttribute('existing_key_expiry_time');
  }
  public set existingKeyExpiryTime(value: number) {
    this._existingKeyExpiryTime = value;
  }
  public resetExistingKeyExpiryTime() {
    this._existingKeyExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingKeyExpiryTimeInput() {
    return this._existingKeyExpiryTime;
  }

  // old_key_expiry - computed: true, optional: false, required: false
  public get oldKeyExpiry() {
    return this.getNumberAttribute('old_key_expiry');
  }

  // old_key_timestamp - computed: true, optional: false, required: false
  public get oldKeyTimestamp() {
    return this.getNumberAttribute('old_key_timestamp');
  }

  // old_secret_key - computed: true, optional: false, required: false
  public get oldSecretKey() {
    return this.getStringAttribute('old_secret_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // secret_key_timestamp - computed: true, optional: false, required: false
  public get secretKeyTimestamp() {
    return this.getNumberAttribute('secret_key_timestamp');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      existing_key_expiry_time: cdktf.numberToTerraform(this._existingKeyExpiryTime),
      user: cdktf.stringToTerraform(this._user),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      existing_key_expiry_time: {
        value: cdktf.numberToHclTerraform(this._existingKeyExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
