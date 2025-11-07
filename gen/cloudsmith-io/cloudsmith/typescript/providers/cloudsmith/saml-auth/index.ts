// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#id SamlAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization slug for SAML authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#organization SamlAuth#organization}
  */
  readonly organization: string;
  /**
  * Enable SAML authentication for the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#saml_auth_enabled SamlAuth#saml_auth_enabled}
  */
  readonly samlAuthEnabled: boolean | cdktf.IResolvable;
  /**
  * Enforce SAML authentication for the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#saml_auth_enforced SamlAuth#saml_auth_enforced}
  */
  readonly samlAuthEnforced: boolean | cdktf.IResolvable;
  /**
  * Inline SAML metadata XML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#saml_metadata_inline SamlAuth#saml_metadata_inline}
  */
  readonly samlMetadataInline?: string;
  /**
  * URL to fetch SAML metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#saml_metadata_url SamlAuth#saml_metadata_url}
  */
  readonly samlMetadataUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth cloudsmith_saml_auth}
*/
export class SamlAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_saml_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlAuth to import
  * @param importFromId The id of the existing SamlAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_saml_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml_auth cloudsmith_saml_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlAuthConfig
  */
  public constructor(scope: Construct, id: string, config: SamlAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_saml_auth',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._organization = config.organization;
    this._samlAuthEnabled = config.samlAuthEnabled;
    this._samlAuthEnforced = config.samlAuthEnforced;
    this._samlMetadataInline = config.samlMetadataInline;
    this._samlMetadataUrl = config.samlMetadataUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // saml_auth_enabled - computed: false, optional: false, required: true
  private _samlAuthEnabled?: boolean | cdktf.IResolvable; 
  public get samlAuthEnabled() {
    return this.getBooleanAttribute('saml_auth_enabled');
  }
  public set samlAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._samlAuthEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAuthEnabledInput() {
    return this._samlAuthEnabled;
  }

  // saml_auth_enforced - computed: false, optional: false, required: true
  private _samlAuthEnforced?: boolean | cdktf.IResolvable; 
  public get samlAuthEnforced() {
    return this.getBooleanAttribute('saml_auth_enforced');
  }
  public set samlAuthEnforced(value: boolean | cdktf.IResolvable) {
    this._samlAuthEnforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAuthEnforcedInput() {
    return this._samlAuthEnforced;
  }

  // saml_metadata_inline - computed: false, optional: true, required: false
  private _samlMetadataInline?: string; 
  public get samlMetadataInline() {
    return this.getStringAttribute('saml_metadata_inline');
  }
  public set samlMetadataInline(value: string) {
    this._samlMetadataInline = value;
  }
  public resetSamlMetadataInline() {
    this._samlMetadataInline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataInlineInput() {
    return this._samlMetadataInline;
  }

  // saml_metadata_url - computed: false, optional: true, required: false
  private _samlMetadataUrl?: string; 
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }
  public set samlMetadataUrl(value: string) {
    this._samlMetadataUrl = value;
  }
  public resetSamlMetadataUrl() {
    this._samlMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataUrlInput() {
    return this._samlMetadataUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      saml_auth_enabled: cdktf.booleanToTerraform(this._samlAuthEnabled),
      saml_auth_enforced: cdktf.booleanToTerraform(this._samlAuthEnforced),
      saml_metadata_inline: cdktf.stringToTerraform(this._samlMetadataInline),
      saml_metadata_url: cdktf.stringToTerraform(this._samlMetadataUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._samlAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_auth_enforced: {
        value: cdktf.booleanToHclTerraform(this._samlAuthEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_metadata_inline: {
        value: cdktf.stringToHclTerraform(this._samlMetadataInline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_metadata_url: {
        value: cdktf.stringToHclTerraform(this._samlMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
