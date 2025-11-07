// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agreement to retrieve. Either `agreement_id`, or `name` can be used to retrieve the agreement localization, but cannot be set together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement#agreement_id DataPingoneAgreement#agreement_id}
  */
  readonly agreementId?: string;
  /**
  * The ID of the environment that is configured with the agreement.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement#environment_id DataPingoneAgreement#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the name of the agreement to retrieve. Either `agreement_id`, or `name` can be used to retrieve the agreement localization, but cannot be set together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement#name DataPingoneAgreement#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement pingone_agreement}
*/
export class DataPingoneAgreement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneAgreement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneAgreement to import
  * @param importFromId The id of the existing DataPingoneAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneAgreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/agreement pingone_agreement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_agreement',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agreementId = config.agreementId;
    this._environmentId = config.environmentId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_id - computed: false, optional: true, required: false
  private _agreementId?: string; 
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }
  public resetAgreementId() {
    this._agreementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementIdInput() {
    return this._agreementId;
  }

  // consent_counts_updated_at - computed: true, optional: false, required: false
  public get consentCountsUpdatedAt() {
    return this.getStringAttribute('consent_counts_updated_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // expired_user_consent_count - computed: true, optional: false, required: false
  public get expiredUserConsentCount() {
    return this.getNumberAttribute('expired_user_consent_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reconsent_period_days - computed: true, optional: false, required: false
  public get reconsentPeriodDays() {
    return this.getNumberAttribute('reconsent_period_days');
  }

  // total_user_consent_count - computed: true, optional: false, required: false
  public get totalUserConsentCount() {
    return this.getNumberAttribute('total_user_consent_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: cdktf.stringToTerraform(this._agreementId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agreement_id: {
        value: cdktf.stringToHclTerraform(this._agreementId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
