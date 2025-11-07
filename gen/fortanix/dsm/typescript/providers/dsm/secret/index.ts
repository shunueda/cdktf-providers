// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The security object key justification policies for GCP External Key Manager. The allowed permissions are:
  *    * CUSTOMER_INITIATED_SUPPORT
  *    * CUSTOMER_INITIATED_ACCESS
  *    * GOOGLE_INITIATED_SERVICE
  *    * GOOGLE_INITIATED_REVIEW
  *    * GOOGLE_INITIATED_SYSTEM_OPERATION
  *    * THIRD_PARTY_DATA_REQUEST
  *    * REASON_NOT_EXPECTED
  *    * REASON_UNSPECIFIED
  *    * MODIFIED_CUSTOMER_INITIATED_ACCESS
  *    * MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION
  *    * GOOGLE_RESPONSE_TO_PRODUCTION_ALERT
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#allowed_key_justifications_policy Secret#allowed_key_justifications_policy}
  */
  readonly allowedKeyJustificationsPolicy?: string[];
  /**
  * Boolean value which allows missing justifications even if not provided to the secret. The values are True / False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#allowed_missing_justifications Secret#allowed_missing_justifications}
  */
  readonly allowedMissingJustifications?: boolean | cdktf.IResolvable;
  /**
  * The user defined security object attributes added to the key’s metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#custom_metadata Secret#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * The Fortanix DSM security object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#description Secret#description}
  */
  readonly description?: string;
  /**
  * Whether the security object is Enabled or Disabled. The values are true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#enabled Secret#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  *  The security object expiry date in RFC format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#expiry_date Secret#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * The Fortanix DSM security object group assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#group_id Secret#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#id Secret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Fortanix DSM secret security object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#name Secret#name}
  */
  readonly name: string;
  /**
  * boolean value true/false to enable/disable rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#rotate Secret#rotate}
  */
  readonly rotate?: boolean | cdktf.IResolvable;
  /**
  * Name of the security object to be rotated from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#rotate_from Secret#rotate_from}
  */
  readonly rotateFrom?: string;
  /**
  * The state of the secret security object.
  *    * Allowed states are: None, PreActive, Active, Deactivated, Compromised, Destroyed, Deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#state Secret#state}
  */
  readonly state?: string;
  /**
  * The value of the secret security object Base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#value Secret#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret dsm_secret}
*/
export class Secret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Secret to import
  * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Secret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/secret dsm_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_secret',
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
    this._allowedKeyJustificationsPolicy = config.allowedKeyJustificationsPolicy;
    this._allowedMissingJustifications = config.allowedMissingJustifications;
    this._customMetadata = config.customMetadata;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expiryDate = config.expiryDate;
    this._groupId = config.groupId;
    this._id = config.id;
    this._name = config.name;
    this._rotate = config.rotate;
    this._rotateFrom = config.rotateFrom;
    this._state = config.state;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // allowed_key_justifications_policy - computed: false, optional: true, required: false
  private _allowedKeyJustificationsPolicy?: string[]; 
  public get allowedKeyJustificationsPolicy() {
    return this.getListAttribute('allowed_key_justifications_policy');
  }
  public set allowedKeyJustificationsPolicy(value: string[]) {
    this._allowedKeyJustificationsPolicy = value;
  }
  public resetAllowedKeyJustificationsPolicy() {
    this._allowedKeyJustificationsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeyJustificationsPolicyInput() {
    return this._allowedKeyJustificationsPolicy;
  }

  // allowed_missing_justifications - computed: false, optional: true, required: false
  private _allowedMissingJustifications?: boolean | cdktf.IResolvable; 
  public get allowedMissingJustifications() {
    return this.getBooleanAttribute('allowed_missing_justifications');
  }
  public set allowedMissingJustifications(value: boolean | cdktf.IResolvable) {
    this._allowedMissingJustifications = value;
  }
  public resetAllowedMissingJustifications() {
    this._allowedMissingJustifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMissingJustificationsInput() {
    return this._allowedMissingJustifications;
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

  // custom_metadata - computed: false, optional: true, required: false
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

  // key_ops - computed: true, optional: false, required: false
  public get keyOps() {
    return this.getListAttribute('key_ops');
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
  private _rotate?: boolean | cdktf.IResolvable; 
  public get rotate() {
    return this.getBooleanAttribute('rotate');
  }
  public set rotate(value: boolean | cdktf.IResolvable) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_key_justifications_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedKeyJustificationsPolicy),
      allowed_missing_justifications: cdktf.booleanToTerraform(this._allowedMissingJustifications),
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rotate: cdktf.booleanToTerraform(this._rotate),
      rotate_from: cdktf.stringToTerraform(this._rotateFrom),
      state: cdktf.stringToTerraform(this._state),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_key_justifications_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedKeyJustificationsPolicy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_missing_justifications: {
        value: cdktf.booleanToHclTerraform(this._allowedMissingJustifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate: {
        value: cdktf.booleanToHclTerraform(this._rotate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotate_from: {
        value: cdktf.stringToHclTerraform(this._rotateFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
