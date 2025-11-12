// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgreementLocalizationRevisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agreement to associate the agreement localization revision with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#agreement_id AgreementLocalizationRevision#agreement_id}
  */
  readonly agreementId: string;
  /**
  * The ID of the agreement localization to associate the revision with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#agreement_localization_id AgreementLocalizationRevision#agreement_localization_id}
  */
  readonly agreementLocalizationId: string;
  /**
  * The content type to apply to the revision text configured in the `text` parameter. Options are `text/html` and `text/plain`, as defined by [rfc-6838](https://datatracker.ietf.org/doc/html/rfc6838#section-4.2.1) and [Media Types/text](https://www.iana.org/assignments/media-types/media-types.xhtml#text).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#content_type AgreementLocalizationRevision#content_type}
  */
  readonly contentType: string;
  /**
  * The start date that the revision is presented to users.  The effective date must be unique for each language agreement, and the property value can be the present date or a future date only.  Must be a valid RFC3339 date/time string.  If left undefined, will default to the current date and time plus a 30 second buffer to allow for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#effective_at AgreementLocalizationRevision#effective_at}
  */
  readonly effectiveAt?: string;
  /**
  * The ID of the environment to associate the agreement localization revision with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#environment_id AgreementLocalizationRevision#environment_id}
  */
  readonly environmentId: string;
  /**
  * Whether the user is required to provide a renewed consent to the language revision after it becomes effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#require_reconsent AgreementLocalizationRevision#require_reconsent}
  */
  readonly requireReconsent: boolean | cdktf.IResolvable;
  /**
  * Text or HTML for the revision. HTML support includes **tags** (italicize, bold, links, headers, paragraph, line breaks), **link (a) tags** (allow href, style, target attributes), **block tags (p, b, h)** (allow style and align attributes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#text AgreementLocalizationRevision#text}
  */
  readonly text: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision pingone_agreement_localization_revision}
*/
export class AgreementLocalizationRevision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_agreement_localization_revision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgreementLocalizationRevision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgreementLocalizationRevision to import
  * @param importFromId The id of the existing AgreementLocalizationRevision that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgreementLocalizationRevision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_agreement_localization_revision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/agreement_localization_revision pingone_agreement_localization_revision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgreementLocalizationRevisionConfig
  */
  public constructor(scope: Construct, id: string, config: AgreementLocalizationRevisionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_agreement_localization_revision',
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
    this._contentType = config.contentType;
    this._effectiveAt = config.effectiveAt;
    this._environmentId = config.environmentId;
    this._requireReconsent = config.requireReconsent;
    this._text = config.text;
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

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // effective_at - computed: true, optional: true, required: false
  private _effectiveAt?: string; 
  public get effectiveAt() {
    return this.getStringAttribute('effective_at');
  }
  public set effectiveAt(value: string) {
    this._effectiveAt = value;
  }
  public resetEffectiveAt() {
    this._effectiveAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAtInput() {
    return this._effectiveAt;
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

  // not_valid_after - computed: true, optional: false, required: false
  public get notValidAfter() {
    return this.getStringAttribute('not_valid_after');
  }

  // require_reconsent - computed: false, optional: false, required: true
  private _requireReconsent?: boolean | cdktf.IResolvable; 
  public get requireReconsent() {
    return this.getBooleanAttribute('require_reconsent');
  }
  public set requireReconsent(value: boolean | cdktf.IResolvable) {
    this._requireReconsent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireReconsentInput() {
    return this._requireReconsent;
  }

  // stored_text - computed: true, optional: false, required: false
  public get storedText() {
    return this.getStringAttribute('stored_text');
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: cdktf.stringToTerraform(this._agreementId),
      agreement_localization_id: cdktf.stringToTerraform(this._agreementLocalizationId),
      content_type: cdktf.stringToTerraform(this._contentType),
      effective_at: cdktf.stringToTerraform(this._effectiveAt),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      require_reconsent: cdktf.booleanToTerraform(this._requireReconsent),
      text: cdktf.stringToTerraform(this._text),
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
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_at: {
        value: cdktf.stringToHclTerraform(this._effectiveAt),
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
      require_reconsent: {
        value: cdktf.booleanToHclTerraform(this._requireReconsent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
