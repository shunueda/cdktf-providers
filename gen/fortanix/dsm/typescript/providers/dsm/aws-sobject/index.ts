// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsSobjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Any other user-defined AWS metadata information.
  *    * e.g. test-key = test-value 
  *    * The above key value pair will be added as `aws-tag-test-key = test-value` 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#aws_tags AwsSobject#aws_tags}
  */
  readonly awsTags?: { [key: string]: string };
  /**
  * AWS KMS key level metadata information.
  *    * `aws-aliases`: Key name within AWS KMS.
  *    * `aws-policy`: JSON format of AWS policy that should be enforced for the key.
  *    * **Note:** Any other DSM custom metadata can be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#custom_metadata AwsSobject#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * Delete key material in AWS KMS. Deleting key material makes all data encrypted under the customer master key (CMK) unrecoverable unless you later import the same key material from DSM into the CMK.The DSM source key is not affected by this operation. The supported values are true/false.
  * 
  * **Note:** This can enabled only after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#delete_key_material AwsSobject#delete_key_material}
  */
  readonly deleteKeyMaterial?: boolean | cdktf.IResolvable;
  /**
  * The security object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#description AwsSobject#description}
  */
  readonly description?: string;
  /**
  * Whether the security object will be enabled or disabled. The supported values are true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#enabled AwsSobject#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The security object expiry date in RFC format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#expiry_date AwsSobject#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * The security object group assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#group_id AwsSobject#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#id AwsSobject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A local security object created/imported to Fortanix DSM(BYOK) and copied to AWS KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#key AwsSobject#key}
  */
  readonly key: { [key: string]: string };
  /**
  * The security object operations permitted.
  * 
  * | obj_type | key_size/curve | key_ops |
  * | -------- | -------- |-------- |
  * | `AES` | 256 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `RSA` | 2048, 3072, 4096 | APPMANAGEABLE, SIGN, VERIFY, ENCRYPT, DECRYPT |
  * | `EC` | NistP256, NistP384, NistP521,SecP256K1 | APPMANAGEABLE, SIGN, VERIFY |
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#key_ops AwsSobject#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * The security object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#name AwsSobject#name}
  */
  readonly name: string;
  /**
  * The security object rotation. Specify the method to use for key rotation:
  *    * `DSM`: To rotate from a DSM local key. The key material of new key will be stored in DSM.
  *    * `AWS`: To rotate from a AWS key. The key material of new key will be stored in AWS.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#rotate AwsSobject#rotate}
  */
  readonly rotate?: string;
  /**
  * Name of the security object to be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#rotate_from AwsSobject#rotate_from}
  */
  readonly rotateFrom?: string;
  /**
  * Policy to rotate a Security Object, configure the below parameters.
  *    * `interval_days`: Rotate the key for every given number of days.
  *    * `interval_months`: Rotate the key for every given number of months.
  *    * `effective_at`: Start of the rotation policy time.
  *    * **Note:** Either interval_days or interval_months should be given, but not both.
  *    * **Note:** Please refer Guides/dsm_aws_sobject for an example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#rotation_policy AwsSobject#rotation_policy}
  */
  readonly rotationPolicy?: { [key: string]: string };
  /**
  * Schedule key deletion in AWS KMS. Key is not usable for Sign/Verify, Wrap/Unwrap or Encrypt/Decrypt operations once it is deleted. Minimum value is 7 days.
  * **Note:** This can enabled only after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#schedule_deletion AwsSobject#schedule_deletion}
  */
  readonly scheduleDeletion?: number;
  /**
  * The key states of the AWS key. The supported values are PendingDeletion, Enabled, Disabled and PendingImport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#state AwsSobject#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject dsm_aws_sobject}
*/
export class AwsSobject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_aws_sobject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsSobject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSobject to import
  * @param importFromId The id of the existing AwsSobject that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSobject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_aws_sobject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/aws_sobject dsm_aws_sobject} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSobjectConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSobjectConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_aws_sobject',
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
    this._awsTags = config.awsTags;
    this._customMetadata = config.customMetadata;
    this._deleteKeyMaterial = config.deleteKeyMaterial;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expiryDate = config.expiryDate;
    this._groupId = config.groupId;
    this._id = config.id;
    this._key = config.key;
    this._keyOps = config.keyOps;
    this._name = config.name;
    this._rotate = config.rotate;
    this._rotateFrom = config.rotateFrom;
    this._rotationPolicy = config.rotationPolicy;
    this._scheduleDeletion = config.scheduleDeletion;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // aws_tags - computed: false, optional: true, required: false
  private _awsTags?: { [key: string]: string }; 
  public get awsTags() {
    return this.getStringMapAttribute('aws_tags');
  }
  public set awsTags(value: { [key: string]: string }) {
    this._awsTags = value;
  }
  public resetAwsTags() {
    this._awsTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagsInput() {
    return this._awsTags;
  }

  // copied_from - computed: true, optional: false, required: false
  public get copiedFrom() {
    return this.getStringAttribute('copied_from');
  }

  // copied_to - computed: true, optional: false, required: false
  public get copiedTo() {
    return this.getListAttribute('copied_to');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
  }

  // custom_metadata - computed: true, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // delete_key_material - computed: false, optional: true, required: false
  private _deleteKeyMaterial?: boolean | cdktf.IResolvable; 
  public get deleteKeyMaterial() {
    return this.getBooleanAttribute('delete_key_material');
  }
  public set deleteKeyMaterial(value: boolean | cdktf.IResolvable) {
    this._deleteKeyMaterial = value;
  }
  public resetDeleteKeyMaterial() {
    this._deleteKeyMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteKeyMaterialInput() {
    return this._deleteKeyMaterial;
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

  // expiry_date - computed: true, optional: true, required: false
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

  // replaced - computed: true, optional: false, required: false
  public get replaced() {
    return this.getStringAttribute('replaced');
  }

  // replacement - computed: true, optional: false, required: false
  public get replacement() {
    return this.getStringAttribute('replacement');
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

  // schedule_deletion - computed: false, optional: true, required: false
  private _scheduleDeletion?: number; 
  public get scheduleDeletion() {
    return this.getNumberAttribute('schedule_deletion');
  }
  public set scheduleDeletion(value: number) {
    this._scheduleDeletion = value;
  }
  public resetScheduleDeletion() {
    this._scheduleDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDeletionInput() {
    return this._scheduleDeletion;
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
      aws_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._awsTags),
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      delete_key_material: cdktf.booleanToTerraform(this._deleteKeyMaterial),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.hashMapper(cdktf.stringToTerraform)(this._key),
      key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyOps),
      name: cdktf.stringToTerraform(this._name),
      rotate: cdktf.stringToTerraform(this._rotate),
      rotate_from: cdktf.stringToTerraform(this._rotateFrom),
      rotation_policy: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotationPolicy),
      schedule_deletion: cdktf.numberToTerraform(this._scheduleDeletion),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._awsTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      custom_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      delete_key_material: {
        value: cdktf.booleanToHclTerraform(this._deleteKeyMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      schedule_deletion: {
        value: cdktf.numberToHclTerraform(this._scheduleDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
