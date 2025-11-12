// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow as username
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#allowed_as_user_name CertificateAuthenticationProfile#allowed_as_user_name}
  */
  readonly allowedAsUserName?: boolean | cdktf.IResolvable;
  /**
  * Attribute name of the Certificate Profile - used only when CERTIFICATE is chosen in `username_from`.
  *   - Choices: `SUBJECT_COMMON_NAME`, `SUBJECT_ALTERNATIVE_NAME`, `SUBJECT_SERIAL_NUMBER`, `SUBJECT`, `SUBJECT_ALTERNATIVE_NAME_OTHER_NAME`, `SUBJECT_ALTERNATIVE_NAME_EMAIL`, `SUBJECT_ALTERNATIVE_NAME_DNS`
  *   - Default value: `SUBJECT_COMMON_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#certificate_attribute_name CertificateAuthenticationProfile#certificate_attribute_name}
  */
  readonly certificateAttributeName?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#description CertificateAuthenticationProfile#description}
  */
  readonly description?: string;
  /**
  * Referred IDStore name for the Certificate Profile or `[not applicable]` in case no identity store is chosen
  *   - Default value: `[not applicable]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#external_identity_store_name CertificateAuthenticationProfile#external_identity_store_name}
  */
  readonly externalIdentityStoreName?: string;
  /**
  * Match mode of the Certificate Profile. Allowed values: NEVER, RESOLVE_IDENTITY_AMBIGUITY, BINARY_COMPARISON
  *   - Choices: `NEVER`, `RESOLVE_IDENTITY_AMBIGUITY`, `BINARY_COMPARISON`
  *   - Default value: `NEVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#match_mode CertificateAuthenticationProfile#match_mode}
  */
  readonly matchMode?: string;
  /**
  * The name of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#name CertificateAuthenticationProfile#name}
  */
  readonly name: string;
  /**
  * The attribute in the certificate where the user name should be taken from. Allowed values: `CERTIFICATE` (for a specific attribute as defined in certificateAttributeName), `UPN` (for using any Subject or Alternative Name Attributes in the Certificate - an option only in AD)
  *   - Choices: `CERTIFICATE`, `UPN`
  *   - Default value: `CERTIFICATE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#username_from CertificateAuthenticationProfile#username_from}
  */
  readonly usernameFrom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile ise_certificate_authentication_profile}
*/
export class CertificateAuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_certificate_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateAuthenticationProfile to import
  * @param importFromId The id of the existing CertificateAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_certificate_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/certificate_authentication_profile ise_certificate_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_certificate_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedAsUserName = config.allowedAsUserName;
    this._certificateAttributeName = config.certificateAttributeName;
    this._description = config.description;
    this._externalIdentityStoreName = config.externalIdentityStoreName;
    this._matchMode = config.matchMode;
    this._name = config.name;
    this._usernameFrom = config.usernameFrom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_as_user_name - computed: true, optional: true, required: false
  private _allowedAsUserName?: boolean | cdktf.IResolvable; 
  public get allowedAsUserName() {
    return this.getBooleanAttribute('allowed_as_user_name');
  }
  public set allowedAsUserName(value: boolean | cdktf.IResolvable) {
    this._allowedAsUserName = value;
  }
  public resetAllowedAsUserName() {
    this._allowedAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAsUserNameInput() {
    return this._allowedAsUserName;
  }

  // certificate_attribute_name - computed: true, optional: true, required: false
  private _certificateAttributeName?: string; 
  public get certificateAttributeName() {
    return this.getStringAttribute('certificate_attribute_name');
  }
  public set certificateAttributeName(value: string) {
    this._certificateAttributeName = value;
  }
  public resetCertificateAttributeName() {
    this._certificateAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAttributeNameInput() {
    return this._certificateAttributeName;
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

  // external_identity_store_name - computed: true, optional: true, required: false
  private _externalIdentityStoreName?: string; 
  public get externalIdentityStoreName() {
    return this.getStringAttribute('external_identity_store_name');
  }
  public set externalIdentityStoreName(value: string) {
    this._externalIdentityStoreName = value;
  }
  public resetExternalIdentityStoreName() {
    this._externalIdentityStoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdentityStoreNameInput() {
    return this._externalIdentityStoreName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_mode - computed: true, optional: true, required: false
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
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

  // username_from - computed: true, optional: true, required: false
  private _usernameFrom?: string; 
  public get usernameFrom() {
    return this.getStringAttribute('username_from');
  }
  public set usernameFrom(value: string) {
    this._usernameFrom = value;
  }
  public resetUsernameFrom() {
    this._usernameFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFromInput() {
    return this._usernameFrom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_as_user_name: cdktf.booleanToTerraform(this._allowedAsUserName),
      certificate_attribute_name: cdktf.stringToTerraform(this._certificateAttributeName),
      description: cdktf.stringToTerraform(this._description),
      external_identity_store_name: cdktf.stringToTerraform(this._externalIdentityStoreName),
      match_mode: cdktf.stringToTerraform(this._matchMode),
      name: cdktf.stringToTerraform(this._name),
      username_from: cdktf.stringToTerraform(this._usernameFrom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_as_user_name: {
        value: cdktf.booleanToHclTerraform(this._allowedAsUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_attribute_name: {
        value: cdktf.stringToHclTerraform(this._certificateAttributeName),
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
      external_identity_store_name: {
        value: cdktf.stringToHclTerraform(this._externalIdentityStoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_mode: {
        value: cdktf.stringToHclTerraform(this._matchMode),
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
      username_from: {
        value: cdktf.stringToHclTerraform(this._usernameFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
