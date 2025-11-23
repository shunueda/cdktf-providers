// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoPkiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#delete_mode CryptoPki#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#device CryptoPki#device}
  */
  readonly device?: string;
  /**
  * Define a CA trustpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#trustpoints CryptoPki#trustpoints}
  */
  readonly trustpoints?: CryptoPkiTrustpoints[] | cdktf.IResolvable;
}
export interface CryptoPkiTrustpoints {
  /**
  * Registration Authority mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#enrollment_mode_ra CryptoPki#enrollment_mode_ra}
  */
  readonly enrollmentModeRa?: boolean | cdktf.IResolvable;
  /**
  * Enroll via pkcs12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#enrollment_pkcs12 CryptoPki#enrollment_pkcs12}
  */
  readonly enrollmentPkcs12?: boolean | cdktf.IResolvable;
  /**
  * Generate a Self Signed Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#enrollment_selfsigned CryptoPki#enrollment_selfsigned}
  */
  readonly enrollmentSelfsigned?: boolean | cdktf.IResolvable;
  /**
  * Enroll via the terminal (cut-and-paste)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#enrollment_terminal CryptoPki#enrollment_terminal}
  */
  readonly enrollmentTerminal?: boolean | cdktf.IResolvable;
  /**
  * Hash algorithm
  *   - Choices: `md5`, `sha1`, `sha256`, `sha384`, `sha512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#hash CryptoPki#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#id CryptoPki#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Revocation checking options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#revocation_check CryptoPki#revocation_check}
  */
  readonly revocationCheck?: string[];
  /**
  * RSA keypair label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#rsakeypair CryptoPki#rsakeypair}
  */
  readonly rsakeypair?: string;
  /**
  * Interface used as source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#source_interface CryptoPki#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Subject Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#subject_name CryptoPki#subject_name}
  */
  readonly subjectName?: string;
  /**
  * Certificate Usage
  *   - Choices: `ike`, `ssl-client`, `ssl-server`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#usage CryptoPki#usage}
  */
  readonly usage?: string;
}

export function cryptoPkiTrustpointsToTerraform(struct?: CryptoPkiTrustpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enrollment_mode_ra: cdktf.booleanToTerraform(struct!.enrollmentModeRa),
    enrollment_pkcs12: cdktf.booleanToTerraform(struct!.enrollmentPkcs12),
    enrollment_selfsigned: cdktf.booleanToTerraform(struct!.enrollmentSelfsigned),
    enrollment_terminal: cdktf.booleanToTerraform(struct!.enrollmentTerminal),
    hash: cdktf.stringToTerraform(struct!.hash),
    id: cdktf.stringToTerraform(struct!.id),
    revocation_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.revocationCheck),
    rsakeypair: cdktf.stringToTerraform(struct!.rsakeypair),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
    usage: cdktf.stringToTerraform(struct!.usage),
  }
}


export function cryptoPkiTrustpointsToHclTerraform(struct?: CryptoPkiTrustpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enrollment_mode_ra: {
      value: cdktf.booleanToHclTerraform(struct!.enrollmentModeRa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enrollment_pkcs12: {
      value: cdktf.booleanToHclTerraform(struct!.enrollmentPkcs12),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enrollment_selfsigned: {
      value: cdktf.booleanToHclTerraform(struct!.enrollmentSelfsigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enrollment_terminal: {
      value: cdktf.booleanToHclTerraform(struct!.enrollmentTerminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.revocationCheck),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rsakeypair: {
      value: cdktf.stringToHclTerraform(struct!.rsakeypair),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CryptoPkiTrustpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CryptoPkiTrustpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enrollmentModeRa !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentModeRa = this._enrollmentModeRa;
    }
    if (this._enrollmentPkcs12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentPkcs12 = this._enrollmentPkcs12;
    }
    if (this._enrollmentSelfsigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentSelfsigned = this._enrollmentSelfsigned;
    }
    if (this._enrollmentTerminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentTerminal = this._enrollmentTerminal;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._revocationCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationCheck = this._revocationCheck;
    }
    if (this._rsakeypair !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsakeypair = this._rsakeypair;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CryptoPkiTrustpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enrollmentModeRa = undefined;
      this._enrollmentPkcs12 = undefined;
      this._enrollmentSelfsigned = undefined;
      this._enrollmentTerminal = undefined;
      this._hash = undefined;
      this._id = undefined;
      this._revocationCheck = undefined;
      this._rsakeypair = undefined;
      this._sourceInterface = undefined;
      this._subjectName = undefined;
      this._usage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enrollmentModeRa = value.enrollmentModeRa;
      this._enrollmentPkcs12 = value.enrollmentPkcs12;
      this._enrollmentSelfsigned = value.enrollmentSelfsigned;
      this._enrollmentTerminal = value.enrollmentTerminal;
      this._hash = value.hash;
      this._id = value.id;
      this._revocationCheck = value.revocationCheck;
      this._rsakeypair = value.rsakeypair;
      this._sourceInterface = value.sourceInterface;
      this._subjectName = value.subjectName;
      this._usage = value.usage;
    }
  }

  // enrollment_mode_ra - computed: false, optional: true, required: false
  private _enrollmentModeRa?: boolean | cdktf.IResolvable; 
  public get enrollmentModeRa() {
    return this.getBooleanAttribute('enrollment_mode_ra');
  }
  public set enrollmentModeRa(value: boolean | cdktf.IResolvable) {
    this._enrollmentModeRa = value;
  }
  public resetEnrollmentModeRa() {
    this._enrollmentModeRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentModeRaInput() {
    return this._enrollmentModeRa;
  }

  // enrollment_pkcs12 - computed: false, optional: true, required: false
  private _enrollmentPkcs12?: boolean | cdktf.IResolvable; 
  public get enrollmentPkcs12() {
    return this.getBooleanAttribute('enrollment_pkcs12');
  }
  public set enrollmentPkcs12(value: boolean | cdktf.IResolvable) {
    this._enrollmentPkcs12 = value;
  }
  public resetEnrollmentPkcs12() {
    this._enrollmentPkcs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentPkcs12Input() {
    return this._enrollmentPkcs12;
  }

  // enrollment_selfsigned - computed: false, optional: true, required: false
  private _enrollmentSelfsigned?: boolean | cdktf.IResolvable; 
  public get enrollmentSelfsigned() {
    return this.getBooleanAttribute('enrollment_selfsigned');
  }
  public set enrollmentSelfsigned(value: boolean | cdktf.IResolvable) {
    this._enrollmentSelfsigned = value;
  }
  public resetEnrollmentSelfsigned() {
    this._enrollmentSelfsigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentSelfsignedInput() {
    return this._enrollmentSelfsigned;
  }

  // enrollment_terminal - computed: false, optional: true, required: false
  private _enrollmentTerminal?: boolean | cdktf.IResolvable; 
  public get enrollmentTerminal() {
    return this.getBooleanAttribute('enrollment_terminal');
  }
  public set enrollmentTerminal(value: boolean | cdktf.IResolvable) {
    this._enrollmentTerminal = value;
  }
  public resetEnrollmentTerminal() {
    this._enrollmentTerminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentTerminalInput() {
    return this._enrollmentTerminal;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // revocation_check - computed: false, optional: true, required: false
  private _revocationCheck?: string[]; 
  public get revocationCheck() {
    return this.getListAttribute('revocation_check');
  }
  public set revocationCheck(value: string[]) {
    this._revocationCheck = value;
  }
  public resetRevocationCheck() {
    this._revocationCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationCheckInput() {
    return this._revocationCheck;
  }

  // rsakeypair - computed: false, optional: true, required: false
  private _rsakeypair?: string; 
  public get rsakeypair() {
    return this.getStringAttribute('rsakeypair');
  }
  public set rsakeypair(value: string) {
    this._rsakeypair = value;
  }
  public resetRsakeypair() {
    this._rsakeypair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsakeypairInput() {
    return this._rsakeypair;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // subject_name - computed: false, optional: true, required: false
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  public resetSubjectName() {
    this._subjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }
}

export class CryptoPkiTrustpointsList extends cdktf.ComplexList {
  public internalValue? : CryptoPkiTrustpoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CryptoPkiTrustpointsOutputReference {
    return new CryptoPkiTrustpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki iosxe_crypto_pki}
*/
export class CryptoPki extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_pki";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoPki resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoPki to import
  * @param importFromId The id of the existing CryptoPki that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoPki to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_pki", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/crypto_pki iosxe_crypto_pki} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoPkiConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CryptoPkiConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_pki',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._trustpoints.internalValue = config.trustpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trustpoints - computed: false, optional: true, required: false
  private _trustpoints = new CryptoPkiTrustpointsList(this, "trustpoints", false);
  public get trustpoints() {
    return this._trustpoints;
  }
  public putTrustpoints(value: CryptoPkiTrustpoints[] | cdktf.IResolvable) {
    this._trustpoints.internalValue = value;
  }
  public resetTrustpoints() {
    this._trustpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustpointsInput() {
    return this._trustpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      trustpoints: cdktf.listMapper(cryptoPkiTrustpointsToTerraform, false)(this._trustpoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustpoints: {
        value: cdktf.listMapperHcl(cryptoPkiTrustpointsToHclTerraform, false)(this._trustpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CryptoPkiTrustpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
