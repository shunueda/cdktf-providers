// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SobjectConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#allowed_key_justifications_policy Sobject#allowed_key_justifications_policy}
  */
  readonly allowedKeyJustificationsPolicy?: string[];
  /**
  *  Boolean value which allows missing justifications even if not provided to the security object. The values are True / False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#allowed_missing_justifications Sobject#allowed_missing_justifications}
  */
  readonly allowedMissingJustifications?: boolean | cdktf.IResolvable;
  /**
  * BLS key configuration. This should be used when obj_type is `BLS`
  *    * `variant`: Allowed values are small_signatures/small_public_keys.
  * 
  * | obj_type | key_ops |
  * | -------- |-------- |
  * | `BLS` | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#bls Sobject#bls}
  */
  readonly bls?: { [key: string]: string };
  /**
  * The user defined security object attributes added to the key’s metadata from Fortanix DSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#custom_metadata Sobject#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * The security object description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#description Sobject#description}
  */
  readonly description?: string;
  /**
  * Key destruction. Key can be destroyed or deactivated or compromised.
  * 
  *    * Allowed values are compromise/deactivate/destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#destruct Sobject#destruct}
  */
  readonly destruct?: string;
  /**
  * Standardized elliptic curve. It should be given only when the obj_type is EC or ECKCDSA.
  * 
  * | obj_type | Curve | key_ops |
  * | -------- | -------- |-------- |
  * | `EC` | SecP192K1, SecP224K1, SecP256K1  NistP192, NistP224, NistP256, NistP384, NistP521, X25519, Ed25519 | APPMANAGEABLE, SIGN, VERIFY, AGREEKEY, EXPORT |
  * | `ECKCDSA` | SecP192K1, SecP224K1, SecP256K1  NistP192, NistP224, NistP256, NistP384, NistP521 | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#elliptic_curve Sobject#elliptic_curve}
  */
  readonly ellipticCurve?: string;
  /**
  * Enable or disable the Security object.
  *    * The values are true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#enabled Sobject#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The security object expiry date in RFC format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#expiry_date Sobject#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * FPE specific options. obj_type should be AES. It should be given in string format like below:
  * ```This is a sample variable that specifies fpeOptions to create a Tokenization object that can tokenize credit card format data:
  *     variable "fpeOptionsExample" { 
  *       type = any
  *       description = "The policy document. This is a JSON formatted string."
  *       default = <<-EOF 
  *               {
  *                "description":"Credit card",
  *                "format": {
  *                "char_set": [
  *                     [
  *                      "0",
  *                      "9"
  *                     ]
  *                   ],
  *                   "min_length": 13,
  *                   "max_length": 19,
  *                   "constraints": {
  *                    "luhn_check": true
  *                   }
  *               }
  *             }
  *             EOF
  *     }
  * 
  * This is how we can reference this fpeOptions:
  *       fpe = var.fpeOptionsExample
  * 
  * Refer to the fpeOptions schema in https://www.fortanix.com/fortanix-restful-api-references/dsm for a better understanding of the fpe body.
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#fpe Sobject#fpe}
  */
  readonly fpe?: string;
  /**
  * integer, The base for input data. The radix should be a number from 2 to 36, inclusive. Each radix corresponds to a subset of ASCII alphanumeric characters (with all letters being uppercase). For instance, a radix of 10 corresponds to a character set consisting of the digits from 0 to 9, while a character set of 16 corresponds to a character set consisting of all hexadecimal digits (with letters A-F being uppercase).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#fpe_radix Sobject#fpe_radix}
  */
  readonly fpeRadix?: number;
  /**
  * The security object group assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#group_id Sobject#group_id}
  */
  readonly groupId: string;
  /**
  * Hashing Algorithm for KCDSA and ECKCDSA.
  * 
  * | obj_type | hash_alg |
  * | -------- | -------- |
  * | `ECKCDSA` | SHA1,SHA224, SHA256, SHA384, SHA521|
  * | `KCDSA` | SHA224, SHA256 |
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#hash_alg Sobject#hash_alg}
  */
  readonly hashAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#id Sobject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Copy a local security object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#key Sobject#key}
  */
  readonly key?: { [key: string]: string };
  /**
  *  The security object key permission from Fortanix DSM.
  *    * Default is to allow all permissions except EXPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#key_ops Sobject#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * The security object size. It should not be given only when the obj_type is EC and ECKCDSA.
  * 
  * | obj_type | key_size | key_ops |
  * | -------- | -------- |-------- |
  * | `RSA` | 1024, 2048, 4096, 8192 | APPMANAGEABLE, SIGN, VERIFY, ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, EXPORT |
  * | `DSA` | 2048, 3072 | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * | `KCDSA` | 2048 | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * | `AES` | 128, 192, 256 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `DES` | 56 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, APPMANAGEABLE, EXPORT |
  * | `DES3` | 112, 168 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `ARIA` | 128, 192, 256 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `SEED` | 128 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, EXPORT |
  * | `HMAC` | 112 to 8192 | DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#key_size Sobject#key_size}
  */
  readonly keySize?: number;
  /**
  * LMS key configuration. This should be used when obj_type is `LMS`
  *    * `l1_height`: Allowed values are 5/10/15/20/25
  *    * `l2_height`(Optional): Allowed values are 5/10/15/20/25
  *    * `node_size`: Allowed values are 24/32
  * 
  * | obj_type | key_ops |
  * | -------- |-------- |
  * | `LMS` | APPMANAGEABLE, SIGN, VERIFY |
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#lms Sobject#lms}
  */
  readonly lms?: { [key: string]: string };
  /**
  * The security object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#name Sobject#name}
  */
  readonly name: string;
  /**
  * The security object type.
  *    * `Supported security objects`: AES, DES, DES3, RSA, DSA, KCDSA, EC, ECKCDSA, ARIA, SEED and Tokenization(fpe).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#obj_type Sobject#obj_type}
  */
  readonly objType?: string;
  /**
  * Specify method to use for key rotation. Value is `DSM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#rotate Sobject#rotate}
  */
  readonly rotate?: string;
  /**
  * Name of the security object to be rotated from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#rotate_from Sobject#rotate_from}
  */
  readonly rotateFrom?: string;
  /**
  * Policy to rotate a Security Object, configure the below parameters. This is not supported while importing the security object.
  *    * `interval_days`: Rotate the key for every given number of days.
  *    * `interval_months`: Rotate the key for every given number of months.
  *    * `effective_at`: Start of the rotation policy time.
  *    * `rotate_copied_keys`: Enable key rotation for copied keys.
  *    * `deactivate_rotated_key`: Deactivate original key after rotation true/false.
  *    * **Note:** Either interval_days or interval_months should be given, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#rotation_policy Sobject#rotation_policy}
  */
  readonly rotationPolicy?: { [key: string]: string };
  /**
  * rsaOptions passed as a string (if ”RSA” obj_type is specified). The string should match the 'rsa' value in Post body while working with Fortanix Rest API. For Example:
  * 
  * `rsa = "{\"encryption_policy\":[{\"padding\":{\"RAW_DECRYPT\":{}}},{\"padding\":{\"OAEP\":{\"mgf\":{\"mgf1\":{\"hash\":\"SHA1\"}}}}}],\"signature_policy\":[{\"padding\":{\"PKCS1_V15\":{}}},{\"padding\":{\"PSS\":{\"mgf\":{\"mgf1\":{\"hash\":\"SHA384\"}}}}}]}"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#rsa Sobject#rsa}
  */
  readonly rsa?: string;
  /**
  * The state of the secret security object.
  *    * Allowed states are: None, PreActive, Active, Deactivated, Compromised, Destroyed, Deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#state Sobject#state}
  */
  readonly state?: string;
  /**
  * Subgroup Size for DSA and ECKCDSA. The allowed Subgroup Sizes are 224 and 256.
  * 
  * | obj_type | subgroup_size | usage
  * | -------- | -------- | -------- |
  * | `DSA` | 224, 256| 224: When DSA key_size is 2048. 256: When DSA key_size is 2048 and 3072.
  * | `KCDSA` | 224, 256| 224, 256: When KCDSA key_size is 2048.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#subgroup_size Sobject#subgroup_size}
  */
  readonly subgroupSize?: number;
  /**
  * Sobject content when importing content.
  * 
  * | obj_type | Curve/Key_size/Variants | key_ops |
  * | -------- | -------- |-------- |
  * | `CERTIFICATE` | EC/RSA curves/key_sizes | APPMANAGEABLE, ENCRYPT, VERIFY, WRAPKEY, EXPORT |
  * | `EC` | SecP192K1, SecP224K1, SecP256K1  NistP192, NistP224, NistP256, NistP384, NistP521, X25519, Ed25519 | APPMANAGEABLE, SIGN, VERIFY, AGREEKEY, EXPORT |
  * | `ECKCDSA` | SecP192K1, SecP224K1, SecP256K1  NistP192, NistP224, NistP256, NistP384, NistP521 | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * | `RSA` | 1024, 2048, 4096, 8192 | APPMANAGEABLE, SIGN, VERIFY, ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, EXPORT |
  * | `DSA` | 2048, 3072 | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * | `KCDSA` | 2048 | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * | `AES` | 128, 192, 256 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `DES` | 56 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, APPMANAGEABLE, EXPORT |
  * | `DES3` | 112, 168 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `ARIA` | 128, 192, 256 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `SEED` | 128 | ENCRYPT, DECRYPT, WRAPKEY, UNWRAPKEY, DERIVEKEY, EXPORT |
  * | `HMAC` | 112 to 8192 | DERIVEKEY, MACGENERATE, MACVERIFY, APPMANAGEABLE, EXPORT |
  * | `BLS` | small_signatures/small_public_keys | APPMANAGEABLE, SIGN, VERIFY, EXPORT |
  * | `Opaque` | - | APPMANAGEABLE, EXPORT |
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#value Sobject#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject dsm_sobject}
*/
export class Sobject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_sobject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sobject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sobject to import
  * @param importFromId The id of the existing Sobject that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sobject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_sobject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/sobject dsm_sobject} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SobjectConfig
  */
  public constructor(scope: Construct, id: string, config: SobjectConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_sobject',
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
    this._allowedKeyJustificationsPolicy = config.allowedKeyJustificationsPolicy;
    this._allowedMissingJustifications = config.allowedMissingJustifications;
    this._bls = config.bls;
    this._customMetadata = config.customMetadata;
    this._description = config.description;
    this._destruct = config.destruct;
    this._ellipticCurve = config.ellipticCurve;
    this._enabled = config.enabled;
    this._expiryDate = config.expiryDate;
    this._fpe = config.fpe;
    this._fpeRadix = config.fpeRadix;
    this._groupId = config.groupId;
    this._hashAlg = config.hashAlg;
    this._id = config.id;
    this._key = config.key;
    this._keyOps = config.keyOps;
    this._keySize = config.keySize;
    this._lms = config.lms;
    this._name = config.name;
    this._objType = config.objType;
    this._rotate = config.rotate;
    this._rotateFrom = config.rotateFrom;
    this._rotationPolicy = config.rotationPolicy;
    this._rsa = config.rsa;
    this._state = config.state;
    this._subgroupSize = config.subgroupSize;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // allowed_key_justifications_policy - computed: true, optional: true, required: false
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

  // allowed_missing_justifications - computed: true, optional: true, required: false
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

  // bls - computed: true, optional: true, required: false
  private _bls?: { [key: string]: string }; 
  public get bls() {
    return this.getStringMapAttribute('bls');
  }
  public set bls(value: { [key: string]: string }) {
    this._bls = value;
  }
  public resetBls() {
    this._bls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blsInput() {
    return this._bls;
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

  // destruct - computed: false, optional: true, required: false
  private _destruct?: string; 
  public get destruct() {
    return this.getStringAttribute('destruct');
  }
  public set destruct(value: string) {
    this._destruct = value;
  }
  public resetDestruct() {
    this._destruct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destructInput() {
    return this._destruct;
  }

  // dsm_name - computed: true, optional: false, required: false
  public get dsmName() {
    return this.getStringAttribute('dsm_name');
  }

  // elliptic_curve - computed: true, optional: true, required: false
  private _ellipticCurve?: string; 
  public get ellipticCurve() {
    return this.getStringAttribute('elliptic_curve');
  }
  public set ellipticCurve(value: string) {
    this._ellipticCurve = value;
  }
  public resetEllipticCurve() {
    this._ellipticCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ellipticCurveInput() {
    return this._ellipticCurve;
  }

  // enabled - computed: true, optional: true, required: false
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

  // fpe - computed: false, optional: true, required: false
  private _fpe?: string; 
  public get fpe() {
    return this.getStringAttribute('fpe');
  }
  public set fpe(value: string) {
    this._fpe = value;
  }
  public resetFpe() {
    this._fpe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpeInput() {
    return this._fpe;
  }

  // fpe_radix - computed: false, optional: true, required: false
  private _fpeRadix?: number; 
  public get fpeRadix() {
    return this.getNumberAttribute('fpe_radix');
  }
  public set fpeRadix(value: number) {
    this._fpeRadix = value;
  }
  public resetFpeRadix() {
    this._fpeRadix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpeRadixInput() {
    return this._fpeRadix;
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

  // hash_alg - computed: true, optional: true, required: false
  private _hashAlg?: string; 
  public get hashAlg() {
    return this.getStringAttribute('hash_alg');
  }
  public set hashAlg(value: string) {
    this._hashAlg = value;
  }
  public resetHashAlg() {
    this._hashAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgInput() {
    return this._hashAlg;
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

  // key - computed: false, optional: true, required: false
  private _key?: { [key: string]: string }; 
  public get key() {
    return this.getStringMapAttribute('key');
  }
  public set key(value: { [key: string]: string }) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

  // key_size - computed: true, optional: true, required: false
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

  // lms - computed: false, optional: true, required: false
  private _lms?: { [key: string]: string }; 
  public get lms() {
    return this.getStringMapAttribute('lms');
  }
  public set lms(value: { [key: string]: string }) {
    this._lms = value;
  }
  public resetLms() {
    this._lms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lmsInput() {
    return this._lms;
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

  // obj_type - computed: true, optional: true, required: false
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

  // pub_key - computed: true, optional: false, required: false
  public get pubKey() {
    return this.getStringAttribute('pub_key');
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

  // rsa - computed: false, optional: true, required: false
  private _rsa?: string; 
  public get rsa() {
    return this.getStringAttribute('rsa');
  }
  public set rsa(value: string) {
    this._rsa = value;
  }
  public resetRsa() {
    this._rsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaInput() {
    return this._rsa;
  }

  // ssh_pub_key - computed: true, optional: false, required: false
  public get sshPubKey() {
    return this.getStringAttribute('ssh_pub_key');
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

  // subgroup_size - computed: true, optional: true, required: false
  private _subgroupSize?: number; 
  public get subgroupSize() {
    return this.getNumberAttribute('subgroup_size');
  }
  public set subgroupSize(value: number) {
    this._subgroupSize = value;
  }
  public resetSubgroupSize() {
    this._subgroupSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subgroupSizeInput() {
    return this._subgroupSize;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
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
      bls: cdktf.hashMapper(cdktf.stringToTerraform)(this._bls),
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      description: cdktf.stringToTerraform(this._description),
      destruct: cdktf.stringToTerraform(this._destruct),
      elliptic_curve: cdktf.stringToTerraform(this._ellipticCurve),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiry_date: cdktf.stringToTerraform(this._expiryDate),
      fpe: cdktf.stringToTerraform(this._fpe),
      fpe_radix: cdktf.numberToTerraform(this._fpeRadix),
      group_id: cdktf.stringToTerraform(this._groupId),
      hash_alg: cdktf.stringToTerraform(this._hashAlg),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.hashMapper(cdktf.stringToTerraform)(this._key),
      key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyOps),
      key_size: cdktf.numberToTerraform(this._keySize),
      lms: cdktf.hashMapper(cdktf.stringToTerraform)(this._lms),
      name: cdktf.stringToTerraform(this._name),
      obj_type: cdktf.stringToTerraform(this._objType),
      rotate: cdktf.stringToTerraform(this._rotate),
      rotate_from: cdktf.stringToTerraform(this._rotateFrom),
      rotation_policy: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotationPolicy),
      rsa: cdktf.stringToTerraform(this._rsa),
      state: cdktf.stringToTerraform(this._state),
      subgroup_size: cdktf.numberToTerraform(this._subgroupSize),
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
      bls: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bls),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destruct: {
        value: cdktf.stringToHclTerraform(this._destruct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elliptic_curve: {
        value: cdktf.stringToHclTerraform(this._ellipticCurve),
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
      fpe: {
        value: cdktf.stringToHclTerraform(this._fpe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fpe_radix: {
        value: cdktf.numberToHclTerraform(this._fpeRadix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_alg: {
        value: cdktf.stringToHclTerraform(this._hashAlg),
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
      lms: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._lms),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      rsa: {
        value: cdktf.stringToHclTerraform(this._rsa),
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
      subgroup_size: {
        value: cdktf.numberToHclTerraform(this._subgroupSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
