// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to auto create users when they login to Unleash for the first time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#auto_create Saml#auto_create}
  */
  readonly autoCreate?: boolean | cdktf.IResolvable;
  /**
  * The x509 certificate used by the SAML provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#certificate Saml#certificate}
  */
  readonly certificate: string;
  /**
  * The default root role give to a user when that user is created. Only used if auto_create is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#default_root_role Saml#default_root_role}
  */
  readonly defaultRootRole?: number;
  /**
  * Whether SAML is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#enabled Saml#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The SAML entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#entity_id Saml#entity_id}
  */
  readonly entityId: string;
  /**
  * The SAML sign-on URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#sign_on_url Saml#sign_on_url}
  */
  readonly signOnUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml unleash_saml}
*/
export class Saml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Saml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Saml to import
  * @param importFromId The id of the existing Saml that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Saml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/saml unleash_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlConfig
  */
  public constructor(scope: Construct, id: string, config: SamlConfig) {
    super(scope, id, {
      terraformResourceType: 'unleash_saml',
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
    this._certificate = config.certificate;
    this._defaultRootRole = config.defaultRootRole;
    this._enabled = config.enabled;
    this._entityId = config.entityId;
    this._signOnUrl = config.signOnUrl;
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

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // sign_on_url - computed: false, optional: false, required: true
  private _signOnUrl?: string; 
  public get signOnUrl() {
    return this.getStringAttribute('sign_on_url');
  }
  public set signOnUrl(value: string) {
    this._signOnUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signOnUrlInput() {
    return this._signOnUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create: cdktf.booleanToTerraform(this._autoCreate),
      certificate: cdktf.stringToTerraform(this._certificate),
      default_root_role: cdktf.numberToTerraform(this._defaultRootRole),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_id: cdktf.stringToTerraform(this._entityId),
      sign_on_url: cdktf.stringToTerraform(this._signOnUrl),
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
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_on_url: {
        value: cdktf.stringToHclTerraform(this._signOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
