// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rotation period in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#admin_rotation_interval_days ProducerCustom#admin_rotation_interval_days}
  */
  readonly adminRotationIntervalDays?: number;
  /**
  * URL of an endpoint that implements /sync/create method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#create_sync_url ProducerCustom#create_sync_url}
  */
  readonly createSyncUrl: string;
  /**
  * Enable automatic admin credentials rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#enable_admin_rotation ProducerCustom#enable_admin_rotation}
  */
  readonly enableAdminRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#id ProducerCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#name ProducerCustom#name}
  */
  readonly name: string;
  /**
  * Secret payload to be sent with each create/revoke webhook request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#payload ProducerCustom#payload}
  */
  readonly payload?: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#producer_encryption_key_name ProducerCustom#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * URL of an endpoint that implements /sync/revoke method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#revoke_sync_url ProducerCustom#revoke_sync_url}
  */
  readonly revokeSyncUrl: string;
  /**
  * URL of an endpoint that implements /sync/rotate method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#rotate_sync_url ProducerCustom#rotate_sync_url}
  */
  readonly rotateSyncUrl?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#tags ProducerCustom#tags}
  */
  readonly tags?: string[];
  /**
  * Maximum allowed time in seconds for the webhook to return the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#timeout_sec ProducerCustom#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#user_ttl ProducerCustom#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom akeyless_producer_custom}
*/
export class ProducerCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerCustom to import
  * @param importFromId The id of the existing ProducerCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_custom akeyless_producer_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerCustomConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_custom',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminRotationIntervalDays = config.adminRotationIntervalDays;
    this._createSyncUrl = config.createSyncUrl;
    this._enableAdminRotation = config.enableAdminRotation;
    this._id = config.id;
    this._name = config.name;
    this._payload = config.payload;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._revokeSyncUrl = config.revokeSyncUrl;
    this._rotateSyncUrl = config.rotateSyncUrl;
    this._tags = config.tags;
    this._timeoutSec = config.timeoutSec;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_rotation_interval_days - computed: false, optional: true, required: false
  private _adminRotationIntervalDays?: number; 
  public get adminRotationIntervalDays() {
    return this.getNumberAttribute('admin_rotation_interval_days');
  }
  public set adminRotationIntervalDays(value: number) {
    this._adminRotationIntervalDays = value;
  }
  public resetAdminRotationIntervalDays() {
    this._adminRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRotationIntervalDaysInput() {
    return this._adminRotationIntervalDays;
  }

  // create_sync_url - computed: false, optional: false, required: true
  private _createSyncUrl?: string; 
  public get createSyncUrl() {
    return this.getStringAttribute('create_sync_url');
  }
  public set createSyncUrl(value: string) {
    this._createSyncUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createSyncUrlInput() {
    return this._createSyncUrl;
  }

  // enable_admin_rotation - computed: false, optional: true, required: false
  private _enableAdminRotation?: boolean | cdktf.IResolvable; 
  public get enableAdminRotation() {
    return this.getBooleanAttribute('enable_admin_rotation');
  }
  public set enableAdminRotation(value: boolean | cdktf.IResolvable) {
    this._enableAdminRotation = value;
  }
  public resetEnableAdminRotation() {
    this._enableAdminRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminRotationInput() {
    return this._enableAdminRotation;
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

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
  }

  // revoke_sync_url - computed: false, optional: false, required: true
  private _revokeSyncUrl?: string; 
  public get revokeSyncUrl() {
    return this.getStringAttribute('revoke_sync_url');
  }
  public set revokeSyncUrl(value: string) {
    this._revokeSyncUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeSyncUrlInput() {
    return this._revokeSyncUrl;
  }

  // rotate_sync_url - computed: false, optional: true, required: false
  private _rotateSyncUrl?: string; 
  public get rotateSyncUrl() {
    return this.getStringAttribute('rotate_sync_url');
  }
  public set rotateSyncUrl(value: string) {
    this._rotateSyncUrl = value;
  }
  public resetRotateSyncUrl() {
    this._rotateSyncUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateSyncUrlInput() {
    return this._rotateSyncUrl;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout_sec - computed: false, optional: true, required: false
  private _timeoutSec?: number; 
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_rotation_interval_days: cdktf.numberToTerraform(this._adminRotationIntervalDays),
      create_sync_url: cdktf.stringToTerraform(this._createSyncUrl),
      enable_admin_rotation: cdktf.booleanToTerraform(this._enableAdminRotation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      payload: cdktf.stringToTerraform(this._payload),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      revoke_sync_url: cdktf.stringToTerraform(this._revokeSyncUrl),
      rotate_sync_url: cdktf.stringToTerraform(this._rotateSyncUrl),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_rotation_interval_days: {
        value: cdktf.numberToHclTerraform(this._adminRotationIntervalDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_sync_url: {
        value: cdktf.stringToHclTerraform(this._createSyncUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_admin_rotation: {
        value: cdktf.booleanToHclTerraform(this._enableAdminRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke_sync_url: {
        value: cdktf.stringToHclTerraform(this._revokeSyncUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_sync_url: {
        value: cdktf.stringToHclTerraform(this._rotateSyncUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeout_sec: {
        value: cdktf.numberToHclTerraform(this._timeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
