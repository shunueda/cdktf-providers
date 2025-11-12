// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/license_agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether license agreement has been accepted. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/license_agreement#accepted LicenseAgreement#accepted}
  */
  readonly accepted?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/license_agreement pingfederate_license_agreement}
*/
export class LicenseAgreement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_license_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseAgreement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseAgreement to import
  * @param importFromId The id of the existing LicenseAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/license_agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseAgreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_license_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/license_agreement pingfederate_license_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseAgreementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicenseAgreementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_license_agreement',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accepted = config.accepted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted - computed: true, optional: true, required: false
  private _accepted?: boolean | cdktf.IResolvable; 
  public get accepted() {
    return this.getBooleanAttribute('accepted');
  }
  public set accepted(value: boolean | cdktf.IResolvable) {
    this._accepted = value;
  }
  public resetAccepted() {
    this._accepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedInput() {
    return this._accepted;
  }

  // license_agreement_url - computed: true, optional: false, required: false
  public get licenseAgreementUrl() {
    return this.getStringAttribute('license_agreement_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted: cdktf.booleanToTerraform(this._accepted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted: {
        value: cdktf.booleanToHclTerraform(this._accepted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
