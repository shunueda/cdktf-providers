// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrandingThemeDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the branding theme to activate as the environment default.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme_default#branding_theme_id BrandingThemeDefault#branding_theme_id}
  */
  readonly brandingThemeId: string;
  /**
  * The ID of the environment to set branding settings for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme_default#environment_id BrandingThemeDefault#environment_id}
  */
  readonly environmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme_default pingone_branding_theme_default}
*/
export class BrandingThemeDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_branding_theme_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrandingThemeDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrandingThemeDefault to import
  * @param importFromId The id of the existing BrandingThemeDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrandingThemeDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_branding_theme_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/branding_theme_default pingone_branding_theme_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrandingThemeDefaultConfig
  */
  public constructor(scope: Construct, id: string, config: BrandingThemeDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_branding_theme_default',
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
    this._brandingThemeId = config.brandingThemeId;
    this._environmentId = config.environmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branding_theme_id - computed: false, optional: false, required: true
  private _brandingThemeId?: string; 
  public get brandingThemeId() {
    return this.getStringAttribute('branding_theme_id');
  }
  public set brandingThemeId(value: string) {
    this._brandingThemeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingThemeIdInput() {
    return this._brandingThemeId;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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
      branding_theme_id: cdktf.stringToTerraform(this._brandingThemeId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branding_theme_id: {
        value: cdktf.stringToHclTerraform(this._brandingThemeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
