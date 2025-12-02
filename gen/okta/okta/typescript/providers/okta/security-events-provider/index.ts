// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityEventsProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the Security Events Provider is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#is_enabled SecurityEventsProvider#is_enabled}
  */
  readonly isEnabled: string;
  /**
  * The name of the Security Events Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#name SecurityEventsProvider#name}
  */
  readonly name: string;
  /**
  * The application type of the Security Events Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#type SecurityEventsProvider#type}
  */
  readonly type: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#settings SecurityEventsProvider#settings}
  */
  readonly settings?: SecurityEventsProviderSettings;
}
export interface SecurityEventsProviderSettings {
  /**
  * Issuer URL. Use with jwks_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#issuer SecurityEventsProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * The public URL where the JWKS public key is uploaded. Use with issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#jwks_url SecurityEventsProvider#jwks_url}
  */
  readonly jwksUrl?: string;
  /**
  * The published well-known URL of the Security Events Provider (the SSF transmitter).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#well_known_url SecurityEventsProvider#well_known_url}
  */
  readonly wellKnownUrl?: string;
}

export function securityEventsProviderSettingsToTerraform(struct?: SecurityEventsProviderSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_url: cdktf.stringToTerraform(struct!.jwksUrl),
    well_known_url: cdktf.stringToTerraform(struct!.wellKnownUrl),
  }
}


export function securityEventsProviderSettingsToHclTerraform(struct?: SecurityEventsProviderSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_url: {
      value: cdktf.stringToHclTerraform(struct!.jwksUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    well_known_url: {
      value: cdktf.stringToHclTerraform(struct!.wellKnownUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityEventsProviderSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityEventsProviderSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUrl = this._jwksUrl;
    }
    if (this._wellKnownUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownUrl = this._wellKnownUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityEventsProviderSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuer = undefined;
      this._jwksUrl = undefined;
      this._wellKnownUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuer = value.issuer;
      this._jwksUrl = value.jwksUrl;
      this._wellKnownUrl = value.wellKnownUrl;
    }
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_url - computed: false, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
  }

  // well_known_url - computed: false, optional: true, required: false
  private _wellKnownUrl?: string; 
  public get wellKnownUrl() {
    return this.getStringAttribute('well_known_url');
  }
  public set wellKnownUrl(value: string) {
    this._wellKnownUrl = value;
  }
  public resetWellKnownUrl() {
    this._wellKnownUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownUrlInput() {
    return this._wellKnownUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider okta_security_events_provider}
*/
export class SecurityEventsProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_security_events_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityEventsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityEventsProvider to import
  * @param importFromId The id of the existing SecurityEventsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityEventsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_security_events_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/security_events_provider okta_security_events_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityEventsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityEventsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_security_events_provider',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._type = config.type;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: string; 
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }
  public set isEnabled(value: string) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new SecurityEventsProviderSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: SecurityEventsProviderSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_enabled: cdktf.stringToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      settings: securityEventsProviderSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_enabled: {
        value: cdktf.stringToHclTerraform(this._isEnabled),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: securityEventsProviderSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityEventsProviderSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
