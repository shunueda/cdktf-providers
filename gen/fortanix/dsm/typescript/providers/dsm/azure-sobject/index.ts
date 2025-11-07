// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSobjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure CMK level metadata information.
  *    * `azure-key-name`: Key name within Azure KV.
  *    * **Note:** By default dsm_azure_sobject creates the key as a software protected key. For a hardware protected key use the below parameter.
  *    * `azure-key-type`: Type of a key. It can be used in `PREMIUM` key vault. Value is hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#custom_metadata AzureSobject#custom_metadata}
  */
  readonly customMetadata: { [key: string]: string };
  /**
  * The security object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#description AzureSobject#description}
  */
  readonly description?: string;
  /**
  * Whether the security object will be Enabled or Disabled. The values are true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#enabled AzureSobject#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The security object expiry date in RFC format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#expiry_date AzureSobject#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * The Azure group ID in Fortanix DSM into which the key will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#group_id AzureSobject#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#id AzureSobject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A local security object imported to Fortanix DSM(BYOK) and copied to Azure KV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#key AzureSobject#key}
  */
  readonly key: { [key: string]: string };
  /**
  * The security object operations permitted.
  * 
  * | obj_type | key_size/curve | key_ops |
  * | -------- | -------- |-------- |
  * | `RSA` | 2048, 3072, 4096 | APPMANAGEABLE, SIGN, VERIFY, ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, EXPORT |
  * | `EC` | NistP256, NistP384, NistP521,SecP256K1 | APPMANAGEABLE, SIGN, VERIFY, AGREEKEY, EXPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#key_ops AzureSobject#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * The security object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#name AzureSobject#name}
  */
  readonly name: string;
  /**
  * Purge deleted key in Azure key vault. Purging the key makes all data encrypted with it unrecoverable unless you later import the same key material from Fortanix DSM into the Azure key vault.The DSM source key is not affected by this operation. The supported values are true/false.
  *  **Note:**  This should be enabled only after the creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#purge_deleted_key AzureSobject#purge_deleted_key}
  */
  readonly purgeDeletedKey?: boolean | cdktf.IResolvable;
  /**
  * The security object rotation. Specify the method to use for key rotation:
  *    * `DSM`: To use the same key material.
  *    * `AZURE`: To rotate from a AZURE key. The key material of new key will be stored in AZURE.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#rotate AzureSobject#rotate}
  */
  readonly rotate?: string;
  /**
  * Name of the security object to be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#rotate_from AzureSobject#rotate_from}
  */
  readonly rotateFrom?: string;
  /**
  * Policy to rotate a Security Object, configure the below parameters.
  *    * `interval_days`: Rotate the key for every given number of days.
  *    * `interval_months`: Rotate the key for every given number of months.
  *    * `effective_at`: Start of the rotation policy time.
  *    * `deactivate_rotated_key`: Deactivate original key after rotation true/false.
  *    * **Note:** Either interval_days or interval_months should be given, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#rotation_policy AzureSobject#rotation_policy}
  */
  readonly rotationPolicy?: { [key: string]: string };
  /**
  * Enable soft key deletion in Azure key vault. Key is not usable for Sign/Verify, Wrap/Unwrap or Encrypt/Decrypt operations once it is deleted. The supported values are true/false.
  *  **Note:**  This should be enabled only after the creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#soft_deletion AzureSobject#soft_deletion}
  */
  readonly softDeletion?: boolean | cdktf.IResolvable;
  /**
  * The key states of the Azure KV key. The values are Created, Deleted, Purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#state AzureSobject#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject dsm_azure_sobject}
*/
export class AzureSobject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_azure_sobject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSobject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSobject to import
  * @param importFromId The id of the existing AzureSobject that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSobject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_azure_sobject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/azure_sobject dsm_azure_sobject} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSobjectConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSobjectConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_azure_sobject',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customMetadata = config.customMetadata;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expiryDate = config.expiryDate;
    this._groupId = config.groupId;
    this._id = config.id;
    this._key = config.key;
    this._keyOps = config.keyOps;
    this._name = config.name;
    this._purgeDeletedKey = config.purgeDeletedKey;
    this._rotate = config.rotate;
    this._rotateFrom = config.rotateFrom;
    this._rotationPolicy = config.rotationPolicy;
    this._softDeletion = config.softDeletion;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
  }

  // custom_metadata - computed: false, optional: false, required: true
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dsm_name - computed: true, optional: false, required: false
  public get dsmName() {
    return this.getStringAttribute('dsm_name');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // external - computed: true, optional: false, required: false
  private _external = new cdktf.StringMap(this, "external");
  public get external() {
    return this._external;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // key - computed: false, optional: false, required: true
  private _key?: { [key: string]: string }; 
  public get key() {
    return this.getStringMapAttribute('key');
  }
  public set key(value: { [key: string]: string }) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_ops - computed: true, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // links - computed: true, optional: false, required: false
  private _links = new cdktf.StringMap(this, "links");
  public get links() {
    return this._links;
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

  // obj_type - computed: true, optional: false, required: false
  public get objType() {
    return this.getStringAttribute('obj_type');
  }

  // purge_deleted_key - computed: false, optional: true, required: false
  private _purgeDeletedKey?: boolean | cdktf.IResolvable; 
  public get purgeDeletedKey() {
    return this.getBooleanAttribute('purge_deleted_key');
  }
  public set purgeDeletedKey(value: boolean | cdktf.IResolvable) {
    this._purgeDeletedKey = value;
  }
  public resetPurgeDeletedKey() {
    this._purgeDeletedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDeletedKeyInput() {
    return this._purgeDeletedKey;
  }

  // rotate - computed: false, optional: true, required: false
  private _rotate?: string; 
  public get rotate() {
    return this.getStringAttribute('rotate');
  }
  public set rotate(value: string) {
    this._rotate = value;
  }
  public resetRotate() {
    this._rotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate;
  }

  // rotate_from - computed: false, optional: true, required: false
  private _rotateFrom?: string; 
  public get rotateFrom() {
    return this.getStringAttribute('rotate_from');
  }
  public set rotateFrom(value: string) {
    this._rotateFrom = value;
  }
  public resetRotateFrom() {
    this._rotateFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateFromInput() {
    return this._rotateFrom;
  }

  // rotation_policy - computed: false, optional: true, required: false
  private _rotationPolicy?: { [key: string]: string }; 
  public get rotationPolicy() {
    return this.getStringMapAttribute('rotation_policy');
  }
  public set rotationPolicy(value: { [key: string]: string }) {
    this._rotationPolicy = value;
  }
  public resetRotationPolicy() {
    this._rotationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyInput() {
    return this._rotationPolicy;
  }

  // soft_deletion - computed: false, optional: true, required: false
  private _softDeletion?: boolean | cdktf.IResolvable; 
  public get softDeletion() {
    return this.getBooleanAttribute('soft_deletion');
  }
  public set softDeletion(value: boolean | cdktf.IResolvable) {
    this._softDeletion = value;
  }
  public resetSoftDeletion() {
    this._softDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeletionInput() {
    return this._softDeletion;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.hashMapper(cdktf.stringToTerraform)(this._key),
      key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyOps),
      name: cdktf.stringToTerraform(this._name),
      purge_deleted_key: cdktf.booleanToTerraform(this._purgeDeletedKey),
      rotate: cdktf.stringToTerraform(this._rotate),
      rotate_from: cdktf.stringToTerraform(this._rotateFrom),
      rotation_policy: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotationPolicy),
      soft_deletion: cdktf.booleanToTerraform(this._softDeletion),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiry_date: {
        value: cdktf.stringToHclTerraform(this._expiryDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      key: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._key),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_ops: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyOps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purge_deleted_key: {
        value: cdktf.booleanToHclTerraform(this._purgeDeletedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotate: {
        value: cdktf.stringToHclTerraform(this._rotate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_from: {
        value: cdktf.stringToHclTerraform(this._rotateFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_policy: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rotationPolicy),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      soft_deletion: {
        value: cdktf.booleanToHclTerraform(this._softDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
