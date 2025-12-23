// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcfTlsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the CA bundle that should be used for origin certificate validation. If not populated the default bundle would be used. The aviatrix_dcf_trustbundle data source can be used to get the UUID from the bundle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile#ca_bundle_id DcfTlsProfile#ca_bundle_id}
  */
  readonly caBundleId?: string;
  /**
  * Certificate validation mode. Must be one of CERTIFICATE_VALIDATION_NONE, CERTIFICATE_VALIDATION_LOG_ONLY, or CERTIFICATE_VALIDATION_ENFORCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile#certificate_validation DcfTlsProfile#certificate_validation}
  */
  readonly certificateValidation: string;
  /**
  * Display name for the TLS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile#display_name DcfTlsProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile#id DcfTlsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Toggle to enable advanced SNI verification of client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile#verify_sni DcfTlsProfile#verify_sni}
  */
  readonly verifySni: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile aviatrix_dcf_tls_profile}
*/
export class DcfTlsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_dcf_tls_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcfTlsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcfTlsProfile to import
  * @param importFromId The id of the existing DcfTlsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcfTlsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_dcf_tls_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_tls_profile aviatrix_dcf_tls_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcfTlsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DcfTlsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_dcf_tls_profile',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caBundleId = config.caBundleId;
    this._certificateValidation = config.certificateValidation;
    this._displayName = config.displayName;
    this._id = config.id;
    this._verifySni = config.verifySni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_bundle_id - computed: false, optional: true, required: false
  private _caBundleId?: string; 
  public get caBundleId() {
    return this.getStringAttribute('ca_bundle_id');
  }
  public set caBundleId(value: string) {
    this._caBundleId = value;
  }
  public resetCaBundleId() {
    this._caBundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleIdInput() {
    return this._caBundleId;
  }

  // certificate_validation - computed: false, optional: false, required: true
  private _certificateValidation?: string; 
  public get certificateValidation() {
    return this.getStringAttribute('certificate_validation');
  }
  public set certificateValidation(value: string) {
    this._certificateValidation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationInput() {
    return this._certificateValidation;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // verify_sni - computed: false, optional: false, required: true
  private _verifySni?: boolean | cdktf.IResolvable; 
  public get verifySni() {
    return this.getBooleanAttribute('verify_sni');
  }
  public set verifySni(value: boolean | cdktf.IResolvable) {
    this._verifySni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySniInput() {
    return this._verifySni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_bundle_id: cdktf.stringToTerraform(this._caBundleId),
      certificate_validation: cdktf.stringToTerraform(this._certificateValidation),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      verify_sni: cdktf.booleanToTerraform(this._verifySni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_bundle_id: {
        value: cdktf.stringToHclTerraform(this._caBundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_validation: {
        value: cdktf.stringToHclTerraform(this._certificateValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      verify_sni: {
        value: cdktf.booleanToHclTerraform(this._verifySni),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
