// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to auto create users when they login to Unleash for the first time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#auto_create Oidc#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
  /**
  * The OIDC public identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#client_id Oidc#client_id}
  */
  readonly clientId: string;
  /**
  * The default root role give to a user when that user is created. Only used if auto_create is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#default_root_role Oidc#default_root_role}
  */
  readonly defaultRootRole?: number;
  /**
  * A URL pointing to the .well-known configuration of the OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#discover_url Oidc#discover_url}
  */
  readonly discoverUrl: string;
  /**
  * Whether or not OIDC is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#enabled Oidc#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The OIDC secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#secret Oidc#secret}
  */
  readonly secret: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc unleash_oidc}
*/
export class Oidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Oidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Oidc to import
  * @param importFromId The id of the existing Oidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Oidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/oidc unleash_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcConfig
  */
  public constructor(scope: Construct, id: string, config: OidcConfig) {
    super(scope, id, {
      terraformResourceType: 'unleash_oidc',
      terraformGeneratorMetadata: {
        providerName: 'unleash',
        providerVersion: '3.1.11',
        providerVersionConstraint: '3.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreate = config.autoCreate;
    this._clientId = config.clientId;
    this._defaultRootRole = config.defaultRootRole;
    this._discoverUrl = config.discoverUrl;
    this._enabled = config.enabled;
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create - computed: true, optional: true, required: false
  private _autoCreate?: boolean | cdktf.IResolvable; 
  public get autoCreate() {
    return this.getBooleanAttribute('auto_create');
  }
  public set autoCreate(value: boolean | cdktf.IResolvable) {
    this._autoCreate = value;
  }
  public resetAutoCreate() {
    this._autoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // default_root_role - computed: true, optional: true, required: false
  private _defaultRootRole?: number; 
  public get defaultRootRole() {
    return this.getNumberAttribute('default_root_role');
  }
  public set defaultRootRole(value: number) {
    this._defaultRootRole = value;
  }
  public resetDefaultRootRole() {
    this._defaultRootRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootRoleInput() {
    return this._defaultRootRole;
  }

  // discover_url - computed: false, optional: false, required: true
  private _discoverUrl?: string; 
  public get discoverUrl() {
    return this.getStringAttribute('discover_url');
  }
  public set discoverUrl(value: string) {
    this._discoverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverUrlInput() {
    return this._discoverUrl;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create: cdktf.booleanToTerraform(this._autoCreate),
      client_id: cdktf.stringToTerraform(this._clientId),
      default_root_role: cdktf.numberToTerraform(this._defaultRootRole),
      discover_url: cdktf.stringToTerraform(this._discoverUrl),
      enabled: cdktf.booleanToTerraform(this._enabled),
      secret: cdktf.stringToTerraform(this._secret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create: {
        value: cdktf.booleanToHclTerraform(this._autoCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_root_role: {
        value: cdktf.numberToHclTerraform(this._defaultRootRole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discover_url: {
        value: cdktf.stringToHclTerraform(this._discoverUrl),
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
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
