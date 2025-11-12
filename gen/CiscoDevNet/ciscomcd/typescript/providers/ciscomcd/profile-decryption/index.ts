// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileDecryptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#cert_validation ProfileDecryption#cert_validation}
  */
  readonly certValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#certificate_name ProfileDecryption#certificate_name}
  */
  readonly certificateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#description ProfileDecryption#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#id ProfileDecryption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#min_tls_version ProfileDecryption#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#name ProfileDecryption#name}
  */
  readonly name: string;
  /**
  * cipher_suite_and_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#cipher_suite_and_group ProfileDecryption#cipher_suite_and_group}
  */
  readonly cipherSuiteAndGroup?: ProfileDecryptionCipherSuiteAndGroup[] | cdktf.IResolvable;
}
export interface ProfileDecryptionCipherSuiteAndGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#cipher_suite ProfileDecryption#cipher_suite}
  */
  readonly cipherSuite: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#cipher_suite_group ProfileDecryption#cipher_suite_group}
  */
  readonly cipherSuiteGroup: string;
}

export function profileDecryptionCipherSuiteAndGroupToTerraform(struct?: ProfileDecryptionCipherSuiteAndGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suite: cdktf.stringToTerraform(struct!.cipherSuite),
    cipher_suite_group: cdktf.stringToTerraform(struct!.cipherSuiteGroup),
  }
}


export function profileDecryptionCipherSuiteAndGroupToHclTerraform(struct?: ProfileDecryptionCipherSuiteAndGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suite: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suite_group: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuiteGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileDecryptionCipherSuiteAndGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileDecryptionCipherSuiteAndGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite;
    }
    if (this._cipherSuiteGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuiteGroup = this._cipherSuiteGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileDecryptionCipherSuiteAndGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuite = undefined;
      this._cipherSuiteGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuite = value.cipherSuite;
      this._cipherSuiteGroup = value.cipherSuiteGroup;
    }
  }

  // cipher_suite - computed: false, optional: false, required: true
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // cipher_suite_group - computed: false, optional: false, required: true
  private _cipherSuiteGroup?: string; 
  public get cipherSuiteGroup() {
    return this.getStringAttribute('cipher_suite_group');
  }
  public set cipherSuiteGroup(value: string) {
    this._cipherSuiteGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteGroupInput() {
    return this._cipherSuiteGroup;
  }
}

export class ProfileDecryptionCipherSuiteAndGroupList extends cdktf.ComplexList {
  public internalValue? : ProfileDecryptionCipherSuiteAndGroup[] | cdktf.IResolvable

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
  public get(index: number): ProfileDecryptionCipherSuiteAndGroupOutputReference {
    return new ProfileDecryptionCipherSuiteAndGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption ciscomcd_profile_decryption}
*/
export class ProfileDecryption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_decryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileDecryption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileDecryption to import
  * @param importFromId The id of the existing ProfileDecryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileDecryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_decryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_decryption ciscomcd_profile_decryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileDecryptionConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileDecryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_decryption',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certValidation = config.certValidation;
    this._certificateName = config.certificateName;
    this._description = config.description;
    this._id = config.id;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._cipherSuiteAndGroup.internalValue = config.cipherSuiteAndGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_validation - computed: false, optional: true, required: false
  private _certValidation?: string; 
  public get certValidation() {
    return this.getStringAttribute('cert_validation');
  }
  public set certValidation(value: string) {
    this._certValidation = value;
  }
  public resetCertValidation() {
    this._certValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationInput() {
    return this._certValidation;
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // cipher_suite_and_group - computed: false, optional: true, required: false
  private _cipherSuiteAndGroup = new ProfileDecryptionCipherSuiteAndGroupList(this, "cipher_suite_and_group", false);
  public get cipherSuiteAndGroup() {
    return this._cipherSuiteAndGroup;
  }
  public putCipherSuiteAndGroup(value: ProfileDecryptionCipherSuiteAndGroup[] | cdktf.IResolvable) {
    this._cipherSuiteAndGroup.internalValue = value;
  }
  public resetCipherSuiteAndGroup() {
    this._cipherSuiteAndGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteAndGroupInput() {
    return this._cipherSuiteAndGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_validation: cdktf.stringToTerraform(this._certValidation),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      cipher_suite_and_group: cdktf.listMapper(profileDecryptionCipherSuiteAndGroupToTerraform, true)(this._cipherSuiteAndGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_validation: {
        value: cdktf.stringToHclTerraform(this._certValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      min_tls_version: {
        value: cdktf.stringToHclTerraform(this._minTlsVersion),
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
      cipher_suite_and_group: {
        value: cdktf.listMapperHcl(profileDecryptionCipherSuiteAndGroupToHclTerraform, true)(this._cipherSuiteAndGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileDecryptionCipherSuiteAndGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
