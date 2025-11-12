// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgreementLocalizationEnableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agreement configured with an agreement localization to enable/disable.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable#agreement_id AgreementLocalizationEnable#agreement_id}
  */
  readonly agreementId: string;
  /**
  * The ID of the agreement localization to enable/disable.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable#agreement_localization_id AgreementLocalizationEnable#agreement_localization_id}
  */
  readonly agreementLocalizationId: string;
  /**
  * A boolean that specifies the current enabled state of the agreement localization. The agreement localization must have an active revision text to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable#enabled AgreementLocalizationEnable#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment configured with an agreement localization to enable/disable.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable#environment_id AgreementLocalizationEnable#environment_id}
  */
  readonly environmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable pingone_agreement_localization_enable}
*/
export class AgreementLocalizationEnable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_agreement_localization_enable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgreementLocalizationEnable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgreementLocalizationEnable to import
  * @param importFromId The id of the existing AgreementLocalizationEnable that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgreementLocalizationEnable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_agreement_localization_enable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_enable pingone_agreement_localization_enable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgreementLocalizationEnableConfig
  */
  public constructor(scope: Construct, id: string, config: AgreementLocalizationEnableConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_agreement_localization_enable',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._agreementLocalizationId = config.agreementLocalizationId;
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_id - computed: false, optional: false, required: true
  private _agreementId?: string; 
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementIdInput() {
    return this._agreementId;
  }

  // agreement_localization_id - computed: false, optional: false, required: true
  private _agreementLocalizationId?: string; 
  public get agreementLocalizationId() {
    return this.getStringAttribute('agreement_localization_id');
  }
  public set agreementLocalizationId(value: string) {
    this._agreementLocalizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementLocalizationIdInput() {
    return this._agreementLocalizationId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: cdktf.stringToTerraform(this._agreementId),
      agreement_localization_id: cdktf.stringToTerraform(this._agreementLocalizationId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
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
      agreement_localization_id: {
        value: cdktf.stringToHclTerraform(this._agreementLocalizationId),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
