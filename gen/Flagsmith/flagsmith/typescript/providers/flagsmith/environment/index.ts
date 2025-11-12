// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows clients using the client API key to set traits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#allow_client_traits Environment#allow_client_traits}
  */
  readonly allowClientTraits?: boolean | cdktf.IResolvable;
  /**
  * hex code for the UI banner colour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#banner_colour Environment#banner_colour}
  */
  readonly bannerColour?: string;
  /**
  * Banner text to display in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#banner_text Environment#banner_text}
  */
  readonly bannerText?: string;
  /**
  * Description of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * If true will exclude flags from SDK which are disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#hide_disabled_flags Environment#hide_disabled_flags}
  */
  readonly hideDisabledFlags?: boolean | cdktf.IResolvable;
  /**
  * If true, will hide sensitive data(e.g: traits, description etc) from the SDK endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#hide_sensitive_data Environment#hide_sensitive_data}
  */
  readonly hideSensitiveData?: boolean | cdktf.IResolvable;
  /**
  * Minimum number of approvals required for a change request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#minimum_change_request_approvals Environment#minimum_change_request_approvals}
  */
  readonly minimumChangeRequestApprovals?: number;
  /**
  * Name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#project_id Environment#project_id}
  */
  readonly projectId: number;
  /**
  * Enable this to have consistent multivariate and percentage split evaluations across all SDKs (in local and server side mode) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#use_identity_composite_key_for_hashing Environment#use_identity_composite_key_for_hashing}
  */
  readonly useIdentityCompositeKeyForHashing?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment flagsmith_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/environment flagsmith_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_environment',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowClientTraits = config.allowClientTraits;
    this._bannerColour = config.bannerColour;
    this._bannerText = config.bannerText;
    this._description = config.description;
    this._hideDisabledFlags = config.hideDisabledFlags;
    this._hideSensitiveData = config.hideSensitiveData;
    this._minimumChangeRequestApprovals = config.minimumChangeRequestApprovals;
    this._name = config.name;
    this._projectId = config.projectId;
    this._useIdentityCompositeKeyForHashing = config.useIdentityCompositeKeyForHashing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_client_traits - computed: true, optional: true, required: false
  private _allowClientTraits?: boolean | cdktf.IResolvable; 
  public get allowClientTraits() {
    return this.getBooleanAttribute('allow_client_traits');
  }
  public set allowClientTraits(value: boolean | cdktf.IResolvable) {
    this._allowClientTraits = value;
  }
  public resetAllowClientTraits() {
    this._allowClientTraits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClientTraitsInput() {
    return this._allowClientTraits;
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // banner_colour - computed: false, optional: true, required: false
  private _bannerColour?: string; 
  public get bannerColour() {
    return this.getStringAttribute('banner_colour');
  }
  public set bannerColour(value: string) {
    this._bannerColour = value;
  }
  public resetBannerColour() {
    this._bannerColour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerColourInput() {
    return this._bannerColour;
  }

  // banner_text - computed: false, optional: true, required: false
  private _bannerText?: string; 
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }
  public set bannerText(value: string) {
    this._bannerText = value;
  }
  public resetBannerText() {
    this._bannerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerTextInput() {
    return this._bannerText;
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

  // hide_disabled_flags - computed: true, optional: true, required: false
  private _hideDisabledFlags?: boolean | cdktf.IResolvable; 
  public get hideDisabledFlags() {
    return this.getBooleanAttribute('hide_disabled_flags');
  }
  public set hideDisabledFlags(value: boolean | cdktf.IResolvable) {
    this._hideDisabledFlags = value;
  }
  public resetHideDisabledFlags() {
    this._hideDisabledFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideDisabledFlagsInput() {
    return this._hideDisabledFlags;
  }

  // hide_sensitive_data - computed: true, optional: true, required: false
  private _hideSensitiveData?: boolean | cdktf.IResolvable; 
  public get hideSensitiveData() {
    return this.getBooleanAttribute('hide_sensitive_data');
  }
  public set hideSensitiveData(value: boolean | cdktf.IResolvable) {
    this._hideSensitiveData = value;
  }
  public resetHideSensitiveData() {
    this._hideSensitiveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSensitiveDataInput() {
    return this._hideSensitiveData;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // minimum_change_request_approvals - computed: true, optional: true, required: false
  private _minimumChangeRequestApprovals?: number; 
  public get minimumChangeRequestApprovals() {
    return this.getNumberAttribute('minimum_change_request_approvals');
  }
  public set minimumChangeRequestApprovals(value: number) {
    this._minimumChangeRequestApprovals = value;
  }
  public resetMinimumChangeRequestApprovals() {
    this._minimumChangeRequestApprovals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumChangeRequestApprovalsInput() {
    return this._minimumChangeRequestApprovals;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // use_identity_composite_key_for_hashing - computed: true, optional: true, required: false
  private _useIdentityCompositeKeyForHashing?: boolean | cdktf.IResolvable; 
  public get useIdentityCompositeKeyForHashing() {
    return this.getBooleanAttribute('use_identity_composite_key_for_hashing');
  }
  public set useIdentityCompositeKeyForHashing(value: boolean | cdktf.IResolvable) {
    this._useIdentityCompositeKeyForHashing = value;
  }
  public resetUseIdentityCompositeKeyForHashing() {
    this._useIdentityCompositeKeyForHashing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIdentityCompositeKeyForHashingInput() {
    return this._useIdentityCompositeKeyForHashing;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_client_traits: cdktf.booleanToTerraform(this._allowClientTraits),
      banner_colour: cdktf.stringToTerraform(this._bannerColour),
      banner_text: cdktf.stringToTerraform(this._bannerText),
      description: cdktf.stringToTerraform(this._description),
      hide_disabled_flags: cdktf.booleanToTerraform(this._hideDisabledFlags),
      hide_sensitive_data: cdktf.booleanToTerraform(this._hideSensitiveData),
      minimum_change_request_approvals: cdktf.numberToTerraform(this._minimumChangeRequestApprovals),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      use_identity_composite_key_for_hashing: cdktf.booleanToTerraform(this._useIdentityCompositeKeyForHashing),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_client_traits: {
        value: cdktf.booleanToHclTerraform(this._allowClientTraits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      banner_colour: {
        value: cdktf.stringToHclTerraform(this._bannerColour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      banner_text: {
        value: cdktf.stringToHclTerraform(this._bannerText),
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
      hide_disabled_flags: {
        value: cdktf.booleanToHclTerraform(this._hideDisabledFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_sensitive_data: {
        value: cdktf.booleanToHclTerraform(this._hideSensitiveData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_change_request_approvals: {
        value: cdktf.numberToHclTerraform(this._minimumChangeRequestApprovals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_identity_composite_key_for_hashing: {
        value: cdktf.booleanToHclTerraform(this._useIdentityCompositeKeyForHashing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
