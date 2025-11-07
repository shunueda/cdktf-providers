// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed values:
  *   - `none`
  *   - `require_authenticated`
  *   - `require_unauthenticated`
  *   - `require_superuser`
  *   - `require_redirect`
  *   - `require_outpost`
  *  Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#authentication Flow#authentication}
  */
  readonly authentication?: string;
  /**
  * Optional URL to an image which will be used as the background during the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#background Flow#background}
  */
  readonly background?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#compatibility_mode Flow#compatibility_mode}
  */
  readonly compatibilityMode?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `message_continue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#denied_action Flow#denied_action}
  */
  readonly deniedAction?: string;
  /**
  * Allowed values:
  *   - `authentication`
  *   - `authorization`
  *   - `invalidation`
  *   - `enrollment`
  *   - `unenrollment`
  *   - `recovery`
  *   - `stage_configuration`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#designation Flow#designation}
  */
  readonly designation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#id Flow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed values:
  *   - `stacked`
  *   - `content_left`
  *   - `content_right`
  *   - `sidebar_left`
  *   - `sidebar_right`
  *  Defaults to `stacked`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#layout Flow#layout}
  */
  readonly layout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#name Flow#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#policy_engine_mode Flow#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#slug Flow#slug}
  */
  readonly slug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#title Flow#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow authentik_flow}
*/
export class Flow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Flow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Flow to import
  * @param importFromId The id of the existing Flow that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Flow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/flow authentik_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowConfig
  */
  public constructor(scope: Construct, id: string, config: FlowConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_flow',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication = config.authentication;
    this._background = config.background;
    this._compatibilityMode = config.compatibilityMode;
    this._deniedAction = config.deniedAction;
    this._designation = config.designation;
    this._id = config.id;
    this._layout = config.layout;
    this._name = config.name;
    this._policyEngineMode = config.policyEngineMode;
    this._slug = config.slug;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // background - computed: false, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // compatibility_mode - computed: false, optional: true, required: false
  private _compatibilityMode?: boolean | cdktf.IResolvable; 
  public get compatibilityMode() {
    return this.getBooleanAttribute('compatibility_mode');
  }
  public set compatibilityMode(value: boolean | cdktf.IResolvable) {
    this._compatibilityMode = value;
  }
  public resetCompatibilityMode() {
    this._compatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityModeInput() {
    return this._compatibilityMode;
  }

  // denied_action - computed: false, optional: true, required: false
  private _deniedAction?: string; 
  public get deniedAction() {
    return this.getStringAttribute('denied_action');
  }
  public set deniedAction(value: string) {
    this._deniedAction = value;
  }
  public resetDeniedAction() {
    this._deniedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedActionInput() {
    return this._deniedAction;
  }

  // designation - computed: false, optional: false, required: true
  private _designation?: string; 
  public get designation() {
    return this.getStringAttribute('designation');
  }
  public set designation(value: string) {
    this._designation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get designationInput() {
    return this._designation;
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

  // layout - computed: false, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
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

  // policy_engine_mode - computed: false, optional: true, required: false
  private _policyEngineMode?: string; 
  public get policyEngineMode() {
    return this.getStringAttribute('policy_engine_mode');
  }
  public set policyEngineMode(value: string) {
    this._policyEngineMode = value;
  }
  public resetPolicyEngineMode() {
    this._policyEngineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineModeInput() {
    return this._policyEngineMode;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
      authentication: cdktf.stringToTerraform(this._authentication),
      background: cdktf.stringToTerraform(this._background),
      compatibility_mode: cdktf.booleanToTerraform(this._compatibilityMode),
      denied_action: cdktf.stringToTerraform(this._deniedAction),
      designation: cdktf.stringToTerraform(this._designation),
      id: cdktf.stringToTerraform(this._id),
      layout: cdktf.stringToTerraform(this._layout),
      name: cdktf.stringToTerraform(this._name),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      slug: cdktf.stringToTerraform(this._slug),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background: {
        value: cdktf.stringToHclTerraform(this._background),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility_mode: {
        value: cdktf.booleanToHclTerraform(this._compatibilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      denied_action: {
        value: cdktf.stringToHclTerraform(this._deniedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      designation: {
        value: cdktf.stringToHclTerraform(this._designation),
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
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
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
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
