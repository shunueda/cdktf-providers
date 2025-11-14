// https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The STACKIT project ID associated with the service account key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key#project_id ServiceAccountKey#project_id}
  */
  readonly projectId: string;
  /**
  * Specifies the public_key (RSA2048 key-pair). If not provided, a certificate from STACKIT will be used to generate a private_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key#public_key ServiceAccountKey#public_key}
  */
  readonly publicKey?: string;
  /**
  * A map of arbitrary key/value pairs designed to force key recreation when they change, facilitating key rotation based on external factors such as a changing timestamp. Modifying this map triggers the creation of a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key#rotate_when_changed ServiceAccountKey#rotate_when_changed}
  */
  readonly rotateWhenChanged?: { [key: string]: string };
  /**
  * The email address associated with the service account, used for account identification and communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key#service_account_email ServiceAccountKey#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * Specifies the key's validity duration in days. If left unspecified, the key is considered valid until it is deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key#ttl_days ServiceAccountKey#ttl_days}
  */
  readonly ttlDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key stackit_service_account_key}
*/
export class ServiceAccountKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_service_account_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccountKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccountKey to import
  * @param importFromId The id of the existing ServiceAccountKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccountKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_service_account_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/resources/service_account_key stackit_service_account_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.70.0',
        providerVersionConstraint: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._publicKey = config.publicKey;
    this._rotateWhenChanged = config.rotateWhenChanged;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._ttlDays = config.ttlDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
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

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // rotate_when_changed - computed: false, optional: true, required: false
  private _rotateWhenChanged?: { [key: string]: string }; 
  public get rotateWhenChanged() {
    return this.getStringMapAttribute('rotate_when_changed');
  }
  public set rotateWhenChanged(value: { [key: string]: string }) {
    this._rotateWhenChanged = value;
  }
  public resetRotateWhenChanged() {
    this._rotateWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWhenChangedInput() {
    return this._rotateWhenChanged;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // ttl_days - computed: false, optional: true, required: false
  private _ttlDays?: number; 
  public get ttlDays() {
    return this.getNumberAttribute('ttl_days');
  }
  public set ttlDays(value: number) {
    this._ttlDays = value;
  }
  public resetTtlDays() {
    this._ttlDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDaysInput() {
    return this._ttlDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      public_key: cdktf.stringToTerraform(this._publicKey),
      rotate_when_changed: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotateWhenChanged),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      ttl_days: cdktf.numberToTerraform(this._ttlDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_when_changed: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rotateWhenChanged),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl_days: {
        value: cdktf.numberToHclTerraform(this._ttlDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
