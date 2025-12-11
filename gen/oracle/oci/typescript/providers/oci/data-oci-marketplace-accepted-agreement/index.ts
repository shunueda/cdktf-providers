// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/marketplace_accepted_agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMarketplaceAcceptedAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/marketplace_accepted_agreement#accepted_agreement_id DataOciMarketplaceAcceptedAgreement#accepted_agreement_id}
  */
  readonly acceptedAgreementId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/marketplace_accepted_agreement oci_marketplace_accepted_agreement}
*/
export class DataOciMarketplaceAcceptedAgreement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_marketplace_accepted_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMarketplaceAcceptedAgreement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMarketplaceAcceptedAgreement to import
  * @param importFromId The id of the existing DataOciMarketplaceAcceptedAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/marketplace_accepted_agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMarketplaceAcceptedAgreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_marketplace_accepted_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/marketplace_accepted_agreement oci_marketplace_accepted_agreement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMarketplaceAcceptedAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMarketplaceAcceptedAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_accepted_agreement',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptedAgreementId = config.acceptedAgreementId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_agreement_id - computed: false, optional: false, required: true
  private _acceptedAgreementId?: string; 
  public get acceptedAgreementId() {
    return this.getStringAttribute('accepted_agreement_id');
  }
  public set acceptedAgreementId(value: string) {
    this._acceptedAgreementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedAgreementIdInput() {
    return this._acceptedAgreementId;
  }

  // agreement_id - computed: true, optional: false, required: false
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listing_id - computed: true, optional: false, required: false
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_agreement_id: cdktf.stringToTerraform(this._acceptedAgreementId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted_agreement_id: {
        value: cdktf.stringToHclTerraform(this._acceptedAgreementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
