// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpSobjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * GCP KMS key metadata information:
  *    * `gcp-key-id`: Key name within GCP KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#custom_metadata GcpSobject#custom_metadata}
  */
  readonly customMetadata: { [key: string]: string };
  /**
  * The description of the security object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#description GcpSobject#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the security object is enabled or disabled. Values are true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#enabled GcpSobject#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The expiry date of the security object in RFC format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#expiry_date GcpSobject#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * The GCP group ID in Fortanix DSM where the key will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#group_id GcpSobject#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#id GcpSobject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A local security object imported to Fortanix DSM (BYOK) and copied to GCP KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#key GcpSobject#key}
  */
  readonly key: { [key: string]: string };
  /**
  * The security object operations permitted.
  * 
  * | obj_type | key_size/curve | key_ops |
  * | -------- | -------- |-------- |
  * | `AES` | 256 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#key_ops GcpSobject#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * The size of the security object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#key_size GcpSobject#key_size}
  */
  readonly keySize?: number;
  /**
  * The security object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#name GcpSobject#name}
  */
  readonly name: string;
  /**
  * The type of security object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#obj_type GcpSobject#obj_type}
  */
  readonly objType?: string;
  /**
  * Policy to rotate a security object. Configure the parameters below:
  *    * `interval_days`: Rotate the key every given number of days.
  *    * `interval_months`: Rotate the key every given number of months.
  *    * `effective_at`: Start time of the rotation policy.
  *    * **Note:** Either `interval_days` or `interval_months` should be given, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#rotation_policy GcpSobject#rotation_policy}
  */
  readonly rotationPolicy?: { [key: string]: string };
  /**
  * The state of the GCP KMS key. Values are Created, Deleted, Purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#state GcpSobject#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject dsm_gcp_sobject}
*/
export class GcpSobject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_gcp_sobject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpSobject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpSobject to import
  * @param importFromId The id of the existing GcpSobject that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpSobject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_gcp_sobject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_sobject dsm_gcp_sobject} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpSobjectConfig
  */
  public constructor(scope: Construct, id: string, config: GcpSobjectConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_gcp_sobject',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36',
        providerVersionConstraint: '0.5.36'
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
    this._keySize = config.keySize;
    this._name = config.name;
    this._objType = config.objType;
    this._rotationPolicy = config.rotationPolicy;
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

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
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

  // obj_type - computed: false, optional: true, required: false
  private _objType?: string; 
  public get objType() {
    return this.getStringAttribute('obj_type');
  }
  public set objType(value: string) {
    this._objType = value;
  }
  public resetObjType() {
    this._objType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objTypeInput() {
    return this._objType;
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

  // state - computed: false, optional: true, required: false
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
      key_size: cdktf.numberToTerraform(this._keySize),
      name: cdktf.stringToTerraform(this._name),
      obj_type: cdktf.stringToTerraform(this._objType),
      rotation_policy: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotationPolicy),
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
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
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
      obj_type: {
        value: cdktf.stringToHclTerraform(this._objType),
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
