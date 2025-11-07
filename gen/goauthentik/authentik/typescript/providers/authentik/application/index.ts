// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#backchannel_providers Application#backchannel_providers}
  */
  readonly backchannelProviders?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#group Application#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#meta_description Application#meta_description}
  */
  readonly metaDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#meta_icon Application#meta_icon}
  */
  readonly metaIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#meta_launch_url Application#meta_launch_url}
  */
  readonly metaLaunchUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#meta_publisher Application#meta_publisher}
  */
  readonly metaPublisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#open_in_new_tab Application#open_in_new_tab}
  */
  readonly openInNewTab?: boolean | cdktf.IResolvable;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#policy_engine_mode Application#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#protocol_provider Application#protocol_provider}
  */
  readonly protocolProvider?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#slug Application#slug}
  */
  readonly slug: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#uuid Application#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application authentik_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/application authentik_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_application',
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
    this._backchannelProviders = config.backchannelProviders;
    this._group = config.group;
    this._id = config.id;
    this._metaDescription = config.metaDescription;
    this._metaIcon = config.metaIcon;
    this._metaLaunchUrl = config.metaLaunchUrl;
    this._metaPublisher = config.metaPublisher;
    this._name = config.name;
    this._openInNewTab = config.openInNewTab;
    this._policyEngineMode = config.policyEngineMode;
    this._protocolProvider = config.protocolProvider;
    this._slug = config.slug;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backchannel_providers - computed: false, optional: true, required: false
  private _backchannelProviders?: number[]; 
  public get backchannelProviders() {
    return this.getNumberListAttribute('backchannel_providers');
  }
  public set backchannelProviders(value: number[]) {
    this._backchannelProviders = value;
  }
  public resetBackchannelProviders() {
    this._backchannelProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelProvidersInput() {
    return this._backchannelProviders;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // meta_description - computed: false, optional: true, required: false
  private _metaDescription?: string; 
  public get metaDescription() {
    return this.getStringAttribute('meta_description');
  }
  public set metaDescription(value: string) {
    this._metaDescription = value;
  }
  public resetMetaDescription() {
    this._metaDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDescriptionInput() {
    return this._metaDescription;
  }

  // meta_icon - computed: false, optional: true, required: false
  private _metaIcon?: string; 
  public get metaIcon() {
    return this.getStringAttribute('meta_icon');
  }
  public set metaIcon(value: string) {
    this._metaIcon = value;
  }
  public resetMetaIcon() {
    this._metaIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaIconInput() {
    return this._metaIcon;
  }

  // meta_launch_url - computed: false, optional: true, required: false
  private _metaLaunchUrl?: string; 
  public get metaLaunchUrl() {
    return this.getStringAttribute('meta_launch_url');
  }
  public set metaLaunchUrl(value: string) {
    this._metaLaunchUrl = value;
  }
  public resetMetaLaunchUrl() {
    this._metaLaunchUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaLaunchUrlInput() {
    return this._metaLaunchUrl;
  }

  // meta_publisher - computed: false, optional: true, required: false
  private _metaPublisher?: string; 
  public get metaPublisher() {
    return this.getStringAttribute('meta_publisher');
  }
  public set metaPublisher(value: string) {
    this._metaPublisher = value;
  }
  public resetMetaPublisher() {
    this._metaPublisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaPublisherInput() {
    return this._metaPublisher;
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

  // open_in_new_tab - computed: false, optional: true, required: false
  private _openInNewTab?: boolean | cdktf.IResolvable; 
  public get openInNewTab() {
    return this.getBooleanAttribute('open_in_new_tab');
  }
  public set openInNewTab(value: boolean | cdktf.IResolvable) {
    this._openInNewTab = value;
  }
  public resetOpenInNewTab() {
    this._openInNewTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInNewTabInput() {
    return this._openInNewTab;
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

  // protocol_provider - computed: false, optional: true, required: false
  private _protocolProvider?: number; 
  public get protocolProvider() {
    return this.getNumberAttribute('protocol_provider');
  }
  public set protocolProvider(value: number) {
    this._protocolProvider = value;
  }
  public resetProtocolProvider() {
    this._protocolProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolProviderInput() {
    return this._protocolProvider;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backchannel_providers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._backchannelProviders),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      meta_description: cdktf.stringToTerraform(this._metaDescription),
      meta_icon: cdktf.stringToTerraform(this._metaIcon),
      meta_launch_url: cdktf.stringToTerraform(this._metaLaunchUrl),
      meta_publisher: cdktf.stringToTerraform(this._metaPublisher),
      name: cdktf.stringToTerraform(this._name),
      open_in_new_tab: cdktf.booleanToTerraform(this._openInNewTab),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      protocol_provider: cdktf.numberToTerraform(this._protocolProvider),
      slug: cdktf.stringToTerraform(this._slug),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backchannel_providers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._backchannelProviders),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      meta_description: {
        value: cdktf.stringToHclTerraform(this._metaDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_icon: {
        value: cdktf.stringToHclTerraform(this._metaIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_launch_url: {
        value: cdktf.stringToHclTerraform(this._metaLaunchUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_publisher: {
        value: cdktf.stringToHclTerraform(this._metaPublisher),
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
      open_in_new_tab: {
        value: cdktf.booleanToHclTerraform(this._openInNewTab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_provider: {
        value: cdktf.numberToHclTerraform(this._protocolProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
